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
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./constants/constants.js */ "./src/constants/constants.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../package.json */ "./package.json");























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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_21__.version);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "EPSILON", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "FLT_MIN", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S32_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F32_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F64_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C1_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C2_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C3_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C4_t", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "SVD_U_T", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "SVD_V_T", _constants_constants_js__WEBPACK_IMPORTED_MODULE_20__.JSFEAT_CONSTANTS.SVD_V_T);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQkFBa0IsOERBQWM7QUFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmtDO0FBQzZCO0FBQ2hEO0FBQ2YsZUFBZSxzREFBTztBQUN0QjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMscUVBQXFCO0FBQzlCOzs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlFQUFlO0VBQ1o5ZCxVQUFVLEVBQVZBLHNEQUFVQTtBQURFLENBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvY2FjaGUvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvZGF0YV90eXBlL2RhdGFfdHlwZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2ltZ3Byb2MvY29udm9sLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9pbWdwcm9jLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9yZXNhbXBsZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2pzZmVhdE5leHQuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9rZXlwb2ludF90L2tleXBvaW50X3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9saW5hbGcvbGluYWxnLWJhc2UuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9saW5hbGcvbGluYWxnLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0aC9tYXRoLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0bWF0aC9tYXRtYXRoLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0cml4X3QvbWF0cml4X3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9tb2RlbC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9ub2RlX3V0aWxzL2RhdGFfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29yYi9iaXRfcGF0dGVybl8zMS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29yYi9vcmIuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9vcmIvcmVjdGlmeV9wYXRjaC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3B5cmFtaWRfdC9weXJhbWlkX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGVfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlMDYveWFwZTA2LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMveWFwZTA2L3lhcGUwNl91dGlscy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhY2hlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX3RhaWw7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSA9IDA7XG4gICAgfVxuICAgIGFsbG9jYXRlKGNhcGFjaXR5LCBkYXRhX3NpemUpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF90YWlsID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcGFjaXR5OyArK2kpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuXG4gICAgICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRfYnVmZmVyKHNpemVfaW5fYnl0ZXMpIHtcbiAgICAgICAgLy8gYXNzdW1lIHdlIGhhdmUgZW5vdWdoIGZyZWUgbm9kZXNcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfaGVhZC5uZXh0O1xuICAgICAgICB0aGlzLl9wb29sX3NpemUtLTtcblxuICAgICAgICBpZiAoc2l6ZV9pbl9ieXRlcyA+IG5vZGUuc2l6ZSkge1xuICAgICAgICAgICAgbm9kZS5yZXNpemUoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcHV0X2J1ZmZlcihub2RlKSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBKU0ZFQVRfQ09OU1RBTlRTID0ge1xuICAgIC8vIENPTlNUQU5UU1xuICAgIEVQU0lMT046IDAuMDAwMDAwMTE5MjA5Mjg5NixcbiAgICBGTFRfTUlOOiAxRS0zNyxcbiAgICBVOF90OiAweDAxMDAsXG4gICAgUzMyX3Q6IDB4MDIwMCxcbiAgICBGMzJfdDogMHgwNDAwLFxuICAgIFM2NF90OiAweDA4MDAsXG4gICAgRjY0X3Q6IDB4MTAwMCxcbiAgICBDMV90OiAweDAxLFxuICAgIEMyX3Q6IDB4MDIsXG4gICAgQzNfdDogMHgwMyxcbiAgICBDNF90OiAweDA0LFxuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIENPTE9SX1JHQkEyR1JBWTogMCxcbiAgICBDT0xPUl9SR0IyR1JBWTogMSxcbiAgICBDT0xPUl9CR1JBMkdSQVk6IDIsXG4gICAgQ09MT1JfQkdSMkdSQVk6IDMsXG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBCT1hfQkxVUl9OT1NDQUxFOiAweDAxLFxuXG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBTVkRfVV9UOiAweDAxLFxuICAgIFNWRF9WX1Q6IDB4MDIsXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGF0YV90eXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YV90eXBlX3NpemUgPSBuZXcgSW50MzJBcnJheShbLTEsIDEsIDQsIC0xLCA0LCAtMSwgLTEsIC0xLCA4LCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgOF0pOztcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYwMCk7XG4gICAgfVxuXG4gICAgX2dldF9jaGFubmVsKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRik7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhX3R5cGVfc2l6ZVsodHlwZSAmIDB4RkYwMCkgPj4gOF07XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCkge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMCwgc3VtMSA9IDAsIHN1bTIgPSAwLCBzdW0zID0gMCwgZjAgPSBmaWx0ZXJbMF0sIGZrID0gMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMV0gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHcyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252b2woYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLjAsIHN1bTEgPSAwLjAsIHN1bTIgPSAwLjAsIHN1bTMgPSAwLjAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDAuMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgX3Jlc2FtcGxlLCBfcmVzYW1wbGVfdTggfSBmcm9tICcuL3Jlc2FtcGxlLmpzJ1xuaW1wb3J0IHsgX2NvbnZvbCwgX2NvbnZvbF91OCB9IGZyb20gJy4vY29udm9sLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJztcbmltcG9ydCBtYXRoIGZyb20gJy4uL21hdGgvbWF0aC5qcyc7XG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1ncHJvYyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgfVxuICAgIGdyYXlzY2FsZShzcmMsIHcsIGgsIGRzdCwgY29kZSkge1xuICAgICAgICAvLyB0aGlzIGlzIGRlZmF1bHQgaW1hZ2UgZGF0YSByZXByZXNlbnRhdGlvbiBpbiBicm93c2VyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBjb2RlID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgaSA9IDAsIGogPSAwLCBpciA9IDAsIGpyID0gMDtcbiAgICAgICAgdmFyIGNvZWZmX3IgPSA0ODk5LCBjb2VmZl9nID0gOTYxNywgY29lZmZfYiA9IDE4NjgsIGNuID0gNDtcblxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNvZWZmX3IgPSAxODY4O1xuICAgICAgICAgICAgY29lZmZfYiA9IDQ4OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNuID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY24yID0gY24gPDwgMSwgY24zID0gKGNuICogMykgfCAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMSk7XG4gICAgICAgIHZhciBkc3RfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5LCBqICs9IHcsIGkgKz0gdyAqIGNuKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwLCBpciA9IGksIGpyID0gajsgeCA8PSB3IC0gNDsgeCArPSA0LCBpciArPSBjbiA8PCAyLCBqciArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDFdID0gKHNyY1tpciArIGNuXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMl0gPSAoc3JjW2lyICsgY24yXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAzXSA9IChzcmNbaXIgKyBjbjNdICogY29lZmZfciArIHNyY1tpciArIGNuMyArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMyArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsranIsIGlyICs9IGNuKSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRlcml2ZWQgZnJvbSBDQ1YgbGlicmFyeVxuICAgIHJlc2FtcGxlKHNyYywgZHN0LCBudywgbmgpIHtcbiAgICAgICAgdmFyIGggPSBzcmMucm93cywgdyA9IHNyYy5jb2xzO1xuICAgICAgICBpZiAoaCA+IG5oICYmIHcgPiBudykge1xuICAgICAgICAgICAgZHN0LnJlc2l6ZShudywgbmgsIHNyYy5jaGFubmVsKTtcbiAgICAgICAgICAgIC8vIHVzaW5nIHRoZSBmYXN0IGFsdGVybmF0aXZlIChmaXggcG9pbnQgc2NhbGUsIDB4MTAwIHRvIGF2b2lkIG92ZXJmbG93KVxuICAgICAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ICYmIGRzdC50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ICYmIGggKiB3IC8gKG5oICogbncpIDwgMHgxMDApIHtcbiAgICAgICAgICAgICAgICBfcmVzYW1wbGVfdTgoc3JjLCBkc3QsIHRoaXMuY2FjaGUsIG53LCBuaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZShzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBib3hfYmx1cl9ncmF5KHNyYywgZHN0LCByYWRpdXMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgaDIgPSBoIDw8IDEsIHcyID0gdyA8PCAxO1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLCB5ID0gMCwgZW5kID0gMDtcbiAgICAgICAgdmFyIHdpbmRvd1NpemUgPSAoKHJhZGl1cyA8PCAxKSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHJhZGl1c1BsdXNPbmUgPSAocmFkaXVzICsgMSkgfCAwLCByYWRpdXNQbHVzMiA9IChyYWRpdXNQbHVzT25lICsgMSkgfCAwO1xuICAgICAgICB2YXIgc2NhbGUgPSBvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFID8gMSA6ICgxLjAgLyAod2luZG93U2l6ZSAqIHdpbmRvd1NpemUpKTtcblxuICAgICAgICB2YXIgdG1wX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcblxuICAgICAgICB2YXIgc3VtID0gMCwgZHN0SW5kZXggPSAwLCBzcmNJbmRleCA9IDAsIG5leHRQaXhlbEluZGV4ID0gMCwgcHJldmlvdXNQaXhlbEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRhdGFfaTMyID0gdG1wX2J1ZmYuaTMyOyAvLyB0byBwcmV2ZW50IG92ZXJmbG93XG4gICAgICAgIHZhciBkYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciBob2xkID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICAvLyBmaXJzdCBwYXNzXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gc2NhbGUgXG4gICAgICAgIC8vZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5KSB7XG4gICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV91OFtzcmNJbmRleF07XG5cbiAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSAoc3JjSW5kZXggKyByYWRpdXNQbHVzT25lKSB8IDA7XG4gICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gaDIpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXggKyBoXSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNyY0luZGV4ICs9IHc7XG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gc2Vjb25kIHBhc3NcbiAgICAgICAgc3JjSW5kZXggPSAwO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wOyAvLyB0aGlzIGlzIGEgdHJhbnNwb3NlXG4gICAgICAgIGRhdGFfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICAvLyBkb250IHNjYWxlIHJlc3VsdFxuICAgICAgICBpZiAoc2NhbGUgPT0gMSkge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodG1wX2J1ZmYpO1xuICAgIH1cblxuICAgIGdhdXNzaWFuX2JsdXIoc3JjLCBkc3QsIGtlcm5lbF9zaXplLCBzaWdtYSkge1xuICAgICAgICB2YXIganNmZWF0bWF0aCA9IG5ldyBtYXRoKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygc2lnbWEgPT09IFwidW5kZWZpbmVkXCIpIHsgc2lnbWEgPSAwLjA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXJuZWxfc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBrZXJuZWxfc2l6ZSA9IDA7IH1cbiAgICAgICAga2VybmVsX3NpemUgPSBrZXJuZWxfc2l6ZSA9PSAwID8gKE1hdGgubWF4KDEsICg0LjAgKiBzaWdtYSArIDEuMCAtIDFlLTgpKSAqIDIgKyAxKSB8IDAgOiBrZXJuZWxfc2l6ZTtcbiAgICAgICAgdmFyIGhhbGZfa2VybmVsID0ga2VybmVsX3NpemUgPj4gMTtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZGF0YV90eXBlID0gc3JjLnR5cGUsIGlzX3U4ID0gZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgYnVmLCBmaWx0ZXIsIGJ1Zl9zeiA9IChrZXJuZWxfc2l6ZSArIE1hdGgubWF4KGgsIHcpKSB8IDA7XG5cbiAgICAgICAgdmFyIGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGJ1Zl9zeiA8PCAyKTtcbiAgICAgICAgdmFyIGZpbHRfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihrZXJuZWxfc2l6ZSA8PCAyKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBqc2ZlYXRtYXRoLmdldF9nYXVzc2lhbl9rZXJuZWwoa2VybmVsX3NpemUsIHNpZ21hLCBmaWx0ZXIsIGRhdGFfdHlwZSk7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY29udm9sKGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZmlsdF9ub2RlKTtcbiAgICB9XG4gICAgaG91Z2hfdHJhbnNmb3JtKGltZywgcmhvX3JlcywgdGhldGFfcmVzLCB0aHJlc2hvbGQpIHtcbiAgICAgICAgdmFyIGltYWdlID0gaW1nLmRhdGE7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gaW1nLmNvbHM7XG4gICAgICAgIHZhciBoZWlnaHQgPSBpbWcucm93cztcbiAgICAgICAgdmFyIHN0ZXAgPSB3aWR0aDtcblxuICAgICAgICB2YXIgbWluX3RoZXRhID0gMC4wO1xuICAgICAgICB2YXIgbWF4X3RoZXRhID0gTWF0aC5QSTtcblxuICAgICAgICB2YXIgbnVtYW5nbGUgPSBNYXRoLnJvdW5kKChtYXhfdGhldGEgLSBtaW5fdGhldGEpIC8gdGhldGFfcmVzKTtcbiAgICAgICAgdmFyIG51bXJobyA9IE1hdGgucm91bmQoKCh3aWR0aCArIGhlaWdodCkgKiAyICsgMSkgLyByaG9fcmVzKTtcbiAgICAgICAgdmFyIGlyaG8gPSAxLjAgLyByaG9fcmVzO1xuXG4gICAgICAgIHZhciBhY2N1bSA9IG5ldyBJbnQzMkFycmF5KChudW1hbmdsZSArIDIpICogKG51bXJobyArIDIpKTsgLy90eXBlZCBhcnJheXMgYXJlIGluaXRpYWxpemVkIHRvIDBcbiAgICAgICAgdmFyIHRhYlNpbiA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuICAgICAgICB2YXIgdGFiQ29zID0gbmV3IEZsb2F0MzJBcnJheShudW1hbmdsZSk7XG5cbiAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICB2YXIgYW5nID0gbWluX3RoZXRhO1xuICAgICAgICBmb3IgKDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgIHRhYlNpbltuXSA9IE1hdGguc2luKGFuZykgKiBpcmhvO1xuICAgICAgICAgICAgdGFiQ29zW25dID0gTWF0aC5jb3MoYW5nKSAqIGlyaG87XG4gICAgICAgICAgICBhbmcgKz0gdGhldGFfcmVzXG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAxLiBmaWxsIGFjY3VtdWxhdG9yXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZVtpICogc3RlcCArIGpdICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyLCAobisxKSAqIChudW1yaG8rMikgKyByKzEsIHRhYkNvc1tuXSwgdGFiU2luW25dKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IE1hdGgucm91bmQoaiAqIHRhYkNvc1tuXSArIGkgKiB0YWJTaW5bbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgciArPSAobnVtcmhvIC0gMSkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW1bKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMi4gZmluZCBsb2NhbCBtYXhpbXVtc1xuICAgICAgICAvL1RPRE86IENvbnNpZGVyIG1ha2luZyBhIHZlY3RvciBjbGFzcyB0aGF0IHVzZXMgdHlwZWQgYXJyYXlzXG4gICAgICAgIHZhciBfc29ydF9idWYgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBudW1yaG87IHIrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhc2UgPSAobiArIDEpICogKG51bXJobyArIDIpICsgciArIDE7XG4gICAgICAgICAgICAgICAgaWYgKGFjY3VtW2Jhc2VdID4gdGhyZXNob2xkICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID4gYWNjdW1bYmFzZSAtIDFdICYmIGFjY3VtW2Jhc2VdID49IGFjY3VtW2Jhc2UgKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSBudW1yaG8gLSAyXSAmJiBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgbnVtcmhvICsgMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3NvcnRfYnVmLnB1c2goYmFzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMy4gc29ydCB0aGUgZGV0ZWN0ZWQgbGluZXMgYnkgYWNjdW11bGF0b3IgdmFsdWVcbiAgICAgICAgX3NvcnRfYnVmLnNvcnQoZnVuY3Rpb24gKGwxLCBsMikge1xuICAgICAgICAgICAgcmV0dXJuIGFjY3VtW2wxXSA+IGFjY3VtW2wyXSB8fCAoYWNjdW1bbDFdID09IGFjY3VtW2wyXSAmJiBsMSA8IGwyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc3RhZ2UgNC4gc3RvcmUgdGhlIGZpcnN0IG1pbih0b3RhbCxsaW5lc01heCkgbGluZXMgdG8gdGhlIG91dHB1dCBidWZmZXJcbiAgICAgICAgdmFyIGxpbmVzTWF4ID0gTWF0aC5taW4obnVtYW5nbGUgKiBudW1yaG8sIF9zb3J0X2J1Zi5sZW5ndGgpO1xuICAgICAgICB2YXIgc2NhbGUgPSAxLjAgLyAobnVtcmhvICsgMik7XG4gICAgICAgIHZhciBsaW5lcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzTWF4OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZHggPSBfc29ydF9idWZbaV07XG4gICAgICAgICAgICB2YXIgbiA9IE1hdGguZmxvb3IoaWR4ICogc2NhbGUpIC0gMTtcbiAgICAgICAgICAgIHZhciByID0gaWR4IC0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSAtIDE7XG4gICAgICAgICAgICB2YXIgbHJobyA9IChyIC0gKG51bXJobyAtIDEpICogMC41KSAqIHJob19yZXM7XG4gICAgICAgICAgICB2YXIgbGFuZ2xlID0gbiAqIHRoZXRhX3JlcztcbiAgICAgICAgICAgIGxpbmVzLnB1c2goW2xyaG8sIGxhbmdsZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG4gICAgcHlyZG93bihzcmMsIGRzdCwgc3gsIHN5KSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbmVlZGVkIGZvciBiYmZcbiAgICAgICAgaWYgKHR5cGVvZiBzeCA9PT0gXCJ1bmRlZmluZWRcIikgeyBzeCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzeSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzeSA9IDA7IH1cblxuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciB3MiA9IHcgPj4gMSwgaDIgPSBoID4+IDE7XG4gICAgICAgIHZhciBfdzIgPSB3MiAtIChzeCA8PCAxKSwgX2gyID0gaDIgLSAoc3kgPDwgMSk7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIHNwdHIgPSBzeCArIHN5ICogdywgc2xpbmUgPSAwLCBkcHRyID0gMCwgZGxpbmUgPSAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodzIsIGgyLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG5cbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IF9oMjsgKyt5KSB7XG4gICAgICAgICAgICBzbGluZSA9IHNwdHI7XG4gICAgICAgICAgICBkbGluZSA9IGRwdHI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IF93MiAtIDI7IHggKz0gMiwgZGxpbmUgKz0gMiwgc2xpbmUgKz0gNCkge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZSArIDFdID0gKHNyY19kW3NsaW5lICsgMl0gKyBzcmNfZFtzbGluZSArIDNdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3ICsgMl0gKyBzcmNfZFtzbGluZSArIHcgKyAzXSArIDIpID4+IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IF93MjsgKyt4LCArK2RsaW5lLCBzbGluZSArPSAyKSB7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmVdID0gKHNyY19kW3NsaW5lXSArIHNyY19kW3NsaW5lICsgMV0gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHddICsgc3JjX2Rbc2xpbmUgKyB3ICsgMV0gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3B0ciArPSB3IDw8IDE7XG4gICAgICAgICAgICBkcHRyICs9IHcyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHRyYW5zZm9ybSBpcyAzeDMgb3IgMngzIG1hdHJpeF90IG9ubHkgZmlyc3QgNiB2YWx1ZXMgcmVmZXJlbmNlZFxuICAgIHdhcnBfYWZmaW5lKHNyYywgZHN0LCB0cmFuc2Zvcm0sIGZpbGxfdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsX3ZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IGZpbGxfdmFsdWUgPSAwOyB9XG4gICAgICAgIHZhciBzcmNfd2lkdGggPSBzcmMuY29scywgc3JjX2hlaWdodCA9IHNyYy5yb3dzLCBkc3Rfd2lkdGggPSBkc3QuY29scywgZHN0X2hlaWdodCA9IGRzdC5yb3dzO1xuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgb2ZmID0gMCwgaXhzID0gMCwgaXlzID0gMCwgeHMgPSAwLjAsIHlzID0gMC4wLCBhID0gMC4wLCBiID0gMC4wLCBwMCA9IDAuMCwgcDEgPSAwLjA7XG4gICAgICAgIHZhciB0ZCA9IHRyYW5zZm9ybS5kYXRhO1xuICAgICAgICB2YXIgbTAwID0gdGRbMF0sIG0wMSA9IHRkWzFdLCBtMDIgPSB0ZFsyXSxcbiAgICAgICAgICAgIG0xMCA9IHRkWzNdLCBtMTEgPSB0ZFs0XSwgbTEyID0gdGRbNV07XG5cbiAgICAgICAgZm9yICh2YXIgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIHhzID0gbTAxICogeSArIG0wMjtcbiAgICAgICAgICAgIHlzID0gbTExICogeSArIG0xMjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCBkc3Rfd2lkdGg7ICsreCwgKytkcHRyLCB4cyArPSBtMDAsIHlzICs9IG0xMCkge1xuICAgICAgICAgICAgICAgIGl4cyA9IHhzIHwgMDsgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl4cyA+PSAwICYmIGl5cyA+PSAwICYmIGl4cyA8IChzcmNfd2lkdGggLSAxKSAmJiBpeXMgPCAoc3JjX2hlaWdodCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSB4cyAtIGl4cztcbiAgICAgICAgICAgICAgICAgICAgYiA9IHlzIC0gaXlzO1xuICAgICAgICAgICAgICAgICAgICBvZmYgPSBzcmNfd2lkdGggKiBpeXMgKyBpeHM7XG5cbiAgICAgICAgICAgICAgICAgICAgcDAgPSBzcmNfZFtvZmZdICsgYSAqIChzcmNfZFtvZmYgKyAxXSAtIHNyY19kW29mZl0pO1xuICAgICAgICAgICAgICAgICAgICBwMSA9IHNyY19kW29mZiArIHNyY193aWR0aF0gKyBhICogKHNyY19kW29mZiArIHNyY193aWR0aCArIDFdIC0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbZHB0cl0gPSBwMCArIGIgKiAocDEgLSBwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgZHN0X2RbZHB0cl0gPSBmaWxsX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi4vanNmZWF0TmV4dC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZV91OCAoc3JjLCBkc3QsIGNhY2hlLCBudywgbmgpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBpbnZfc2NhbGVfMjU2ID0gKHNjYWxlX3ggKiBzY2FsZV95ICogMHgxMDAwMCkgfCAwO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAsIGJldGEgPSAwLCBiZXRhMSA9IDA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmkzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5pMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIGZzeDEpICogMHgxMDApIHwgMDtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAyNTY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKGZzeDIgLSBzeDIpICogMjU2KSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogM107XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzICsgMV07XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gKE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKSAqIDI1NikgfCAwO1xuICAgICAgICAgICAgYmV0YTEgPSAyNTYgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoYmV0YSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogMjU2KSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMSkgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XSAqIDI1NjtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZSAoc3JjLCBkc3QsIGNhY2hlLCBudywgbmgpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBzY2FsZSA9IDEuMCAvIChzY2FsZV94ICogc2NhbGVfeSk7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMC4wLCBiZXRhID0gMC4wLCBiZXRhMSA9IDAuMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuZjMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmYzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDEgLSBmc3gxKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGZzeDIgLSBzeDIpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogM10gfCAwO1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogMyArIDFdIHwgMDtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSBNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCk7XG4gICAgICAgICAgICBiZXRhMSA9IDEuMCAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhiZXRhKSA8IDFlLTMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XTtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59IiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LmpzJ1xuaW1wb3J0IGRhdGFfdHlwZSBmcm9tICcuL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBkYXRhX3QgZnJvbSAnLi9ub2RlX3V0aWxzL2RhdGFfdC5qcydcbmltcG9ydCBrZXlwb2ludF90IGZyb20gJy4va2V5cG9pbnRfdC9rZXlwb2ludF90LmpzJ1xuaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi9pbWdwcm9jL2ltZ3Byb2MuanMnXG5pbXBvcnQgbWF0aCBmcm9tICcuL21hdGgvbWF0aC5qcydcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4vbWF0bWF0aC9tYXRtYXRoLmpzJ1xuaW1wb3J0IG1hdHJpeF90IGZyb20gJy4vbWF0cml4X3QvbWF0cml4X3QuanMnXG5pbXBvcnQgcHlyYW1pZF90IGZyb20gJy4vcHlyYW1pZF90L3B5cmFtaWRfdC5qcydcbmltcG9ydCBsaW5hbGcgZnJvbSAnLi9saW5hbGcvbGluYWxnLmpzJ1xuaW1wb3J0IG9yYiBmcm9tICcuL29yYi9vcmIuanMnXG5pbXBvcnQgeWFwZSBmcm9tICcuL3lhcGUveWFwZS5qcydcbmltcG9ydCB5YXBlMDYgZnJvbSAnLi95YXBlMDYveWFwZTA2LmpzJ1xuaW1wb3J0IG1vdGlvbl9lc3RpbWF0b3IgZnJvbSAnLi9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9lc3RpbWF0b3IuanMnXG5pbXBvcnQge2hvbW9ncmFwaHkyZH0gZnJvbSAnLi9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9tb2RlbC5qcydcbmltcG9ydCByYW5zYWNfcGFyYW1zX3QgZnJvbSAnLi9tb3Rpb25fZXN0aW1hdG9yL3JhbnNhY19wYXJhbXNfdC5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5pbXBvcnQgcGtnIGZyb20gJy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgfVxuXG4gICAgLy8gVkVSU0lPTlxuICAgIHN0YXRpYyBWRVJTSU9OID0gcGtnLnZlcnNpb247XG5cbiAgICAvLyBDT05TVEFOVFNcbiAgICBzdGF0aWMgRVBTSUxPTiA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICBzdGF0aWMgRkxUX01JTiA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICBzdGF0aWMgVThfdCA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICBzdGF0aWMgUzMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90O1xuICAgIHN0YXRpYyBGMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjMyX3Q7XG4gICAgc3RhdGljIFM2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5TNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEMxX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgc3RhdGljIEMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMyX3Q7XG4gICAgc3RhdGljIEMzX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMzX3Q7XG4gICAgc3RhdGljIEM0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkM0X3Q7XG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgc3RhdGljIENPTE9SX1JHQkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9SR0IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIHN0YXRpYyBCT1hfQkxVUl9OT1NDQUxFID0gSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFO1xuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgc3RhdGljIFNWRF9VX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1Q7XG4gICAgc3RhdGljIFNWRF9WX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1Q7XG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBzdGF0aWMgVThDMV90ID0gdGhpcy5VOF90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBVOEMzX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMzX3Q7XG4gICAgc3RhdGljIFU4QzRfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzRfdDtcblxuICAgIHN0YXRpYyBGMzJDMV90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgRjMyQzJfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMyX3Q7XG4gICAgc3RhdGljIFMzMkMxX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBTMzJDMl90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzJfdDtcblxuICAgIGdldF9kYXRhX3R5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfY2hhbm5lbCh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfY2hhbm5lbCh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfZGF0YV90eXBlX3NpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpO1xuICAgIH1cbn1cblxuanNmZWF0TmV4dC5kYXRhX3QgPSBkYXRhX3RcblxuanNmZWF0TmV4dC5tYXRyaXhfdCA9IG1hdHJpeF90O1xuXG5qc2ZlYXROZXh0LnB5cmFtaWRfdCA9IHB5cmFtaWRfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5jYWNoZSA9IGNhY2hlO1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBpbWdwcm9jO1xuXG5qc2ZlYXROZXh0Lm1hdGggPSBtYXRoO1xuXG5qc2ZlYXROZXh0Lm1hdG1hdGggPSBtYXRtYXRoO1xuXG5qc2ZlYXROZXh0LmxpbmFsZyA9IGxpbmFsZztcblxuanNmZWF0TmV4dC5vcmIgPSBvcmI7XG5cbmpzZmVhdE5leHQueWFwZSA9IHlhcGU7XG5cbmpzZmVhdE5leHQueWFwZTA2ID0geWFwZTA2O1xuXG5qc2ZlYXROZXh0Lm1vdGlvbl9lc3RpbWF0b3IgPSBtb3Rpb25fZXN0aW1hdG9yO1xuXG5qc2ZlYXROZXh0LnJhbnNhY19wYXJhbXNfdCA9IHJhbnNhY19wYXJhbXNfdDtcblxuanNmZWF0TmV4dC5ob21vZ3JhcGh5MmQgPSBob21vZ3JhcGh5MmQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mga2V5cG9pbnRfdCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgc2NvcmUsIGxldmVsLCBhbmdsZSkge1xuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwidW5kZWZpbmVkXCIpIHsgeCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB5ID09PSBcInVuZGVmaW5lZFwiKSB7IHkgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2NvcmUgPT09IFwidW5kZWZpbmVkXCIpIHsgc2NvcmUgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIpIHsgbGV2ZWwgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgYW5nbGUgPT09IFwidW5kZWZpbmVkXCIpIHsgYW5nbGUgPSAtMS4wOyB9XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN3YXAoQSwgaTAsIGkxLCB0KSB7XG4gICAgdCA9IEFbaTBdO1xuICAgIEFbaTBdID0gQVtpMV07XG4gICAgQVtpMV0gPSB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3QoYSwgYikge1xuICAgIGEgPSBNYXRoLmFicyhhKTtcbiAgICBiID0gTWF0aC5hYnMoYik7XG4gICAgaWYoIGEgPiBiICkge1xuICAgICAgICBiIC89IGE7XG4gICAgICAgIHJldHVybiBhKk1hdGguc3FydCgxLjAgKyBiKmIpO1xuICAgIH1cbiAgICBpZiggYiA+IDAgKSB7XG4gICAgICAgIGEgLz0gYjtcbiAgICAgICAgcmV0dXJuIGIqTWF0aC5zcXJ0KDEuMCArIGEqYSk7XG4gICAgfVxuICAgIHJldHVybiAwLjA7XG59IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi4vanNmZWF0TmV4dC5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJztcbmltcG9ydCB7IHN3YXAsIGh5cG90IH0gZnJvbSAnLi9saW5hbGctYmFzZS5qcydcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4uL21hdG1hdGgvbWF0bWF0aC5qcydcbmltcG9ydCBtYXRyaXhfdCBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGluYWxnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICAgICAgdGhpcy5tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICB9XG5cbiAgICBKYWNvYmlJbXBsKEEsIGFzdGVwLCBXLCBWLCB2c3RlcCwgbikge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgbSA9IDAsIGwgPSAwLCBpZHggPSAwLCBfaW4gPSAwLCBfaW4yID0gMDtcbiAgICAgICAgdmFyIGl0ZXJzID0gMCwgbWF4X2l0ZXIgPSBuICogbiAqIDMwO1xuICAgICAgICB2YXIgbXYgPSAwLjAsIHZhbCA9IDAuMCwgcCA9IDAuMCwgeSA9IDAuMCwgdCA9IDAuMCwgcyA9IDAuMCwgYyA9IDAuMCwgYTAgPSAwLjAsIGIwID0gMC4wO1xuXG4gICAgICAgIHZhciBpbmRSX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAyKTtcbiAgICAgICAgdmFyIGluZENfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICB2YXIgaW5kUiA9IGluZFJfYnVmZi5pMzI7XG4gICAgICAgIHZhciBpbmRDID0gaW5kQ19idWZmLmkzMjtcblxuICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBrID0gaSAqIHZzdGVwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltrICsgal0gPSAwLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZbayArIGldID0gMS4wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgV1trXSA9IEFbKGFzdGVwICsgMSkgKiBrXTtcbiAgICAgICAgICAgIGlmIChrIDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKG0gPSBrICsgMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwICogayArIG1dKSwgaSA9IGsgKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBrICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZFJba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbXYgPSBNYXRoLmFicyhBW2tdKSwgaSA9IDE7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kQ1trXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobiA+IDEpIGZvciAoOyBpdGVycyA8IG1heF9pdGVyOyBpdGVycysrKSB7XG4gICAgICAgICAgICAvLyBmaW5kIGluZGV4IChrLGwpIG9mIHBpdm90IHBcbiAgICAgICAgICAgIGZvciAoayA9IDAsIG12ID0gTWF0aC5hYnMoQVtpbmRSWzBdXSksIGkgPSAxOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsgaW5kUltpXV0pO1xuICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIGsgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbCA9IGluZFJba107XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGluZENbaV0gKyBpXSk7XG4gICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgayA9IGluZENbaV0sIGwgPSBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwID0gQVthc3RlcCAqIGsgKyBsXTtcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHApIDw9IGVwcykgYnJlYWs7XG5cbiAgICAgICAgICAgIHkgPSAoV1tsXSAtIFdba10pICogMC41O1xuICAgICAgICAgICAgdCA9IE1hdGguYWJzKHkpICsgaHlwb3QocCwgeSk7XG4gICAgICAgICAgICBzID0gaHlwb3QocCwgdCk7XG4gICAgICAgICAgICBjID0gdCAvIHM7XG4gICAgICAgICAgICBzID0gcCAvIHM7IHQgPSAocCAvIHQpICogcDtcbiAgICAgICAgICAgIGlmICh5IDwgMClcbiAgICAgICAgICAgICAgICBzID0gLXMsIHQgPSAtdDtcbiAgICAgICAgICAgIEFbYXN0ZXAgKiBrICsgbF0gPSAwO1xuXG4gICAgICAgICAgICBXW2tdIC09IHQ7XG4gICAgICAgICAgICBXW2xdICs9IHQ7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSByb3dzIGFuZCBjb2x1bW5zIGsgYW5kIGxcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBpICsgayk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAoayArIDEpOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBpICsgbCk7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IGwgKyAxO1xuICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGwgKyBpKTtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrLCBfaW4rKywgX2luMisrKSB7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByb3RhdGUgZWlnZW52ZWN0b3JzXG4gICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgIF9pbiA9IHZzdGVwICogaztcbiAgICAgICAgICAgICAgICBfaW4yID0gdnN0ZXAgKiBsO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYTAgPSBWW19pbl07XG4gICAgICAgICAgICAgICAgICAgIGIwID0gVltfaW4yXTtcbiAgICAgICAgICAgICAgICAgICAgVltfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgICAgICBWW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgICAgICAgICAgIGlkeCA9IGogPT0gMCA/IGsgOiBsO1xuICAgICAgICAgICAgICAgIGlmIChpZHggPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSBpZHggKyAxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBtXSksIGkgPSBpZHggKyAyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaWR4ICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRSW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFbaWR4XSksIGkgPSAxOyBpIDwgaWR4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsgaWR4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZENbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc29ydCBlaWdlbnZhbHVlcyAmIGVpZ2VudmVjdG9yc1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbiAtIDE7IGsrKykge1xuICAgICAgICAgICAgbSA9IGs7XG4gICAgICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChXW21dIDwgV1tpXSlcbiAgICAgICAgICAgICAgICAgICAgbSA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayAhPSBtKSB7XG4gICAgICAgICAgICAgICAgc3dhcChXLCBtLCBrLCBtdik7XG4gICAgICAgICAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChWLCB2c3RlcCAqIG0gKyBpLCB2c3RlcCAqIGsgKyBpLCBtdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRSX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoaW5kQ19idWZmKTtcbiAgICB9XG5cbiAgICBKYWNvYmlTVkRJbXBsKEF0LCBhc3RlcCwgX1csIFZ0LCB2c3RlcCwgbSwgbiwgbjEpIHtcbiAgICAgICAgdmFyIGVwcyA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIDIuMDtcbiAgICAgICAgdmFyIG1pbnZhbCA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIGl0ZXIgPSAwLCBtYXhfaXRlciA9IE1hdGgubWF4KG0sIDMwKTtcbiAgICAgICAgdmFyIEFpID0gMCwgQWogPSAwLCBWaSA9IDAsIFZqID0gMCwgY2hhbmdlZCA9IDA7XG4gICAgICAgIHZhciBjID0gMC4wLCBzID0gMC4wLCB0ID0gMC4wO1xuICAgICAgICB2YXIgdDAgPSAwLjAsIHQxID0gMC4wLCBzZCA9IDAuMCwgYmV0YSA9IDAuMCwgZ2FtbWEgPSAwLjAsIGRlbHRhID0gMC4wLCBhID0gMC4wLCBwID0gMC4wLCBiID0gMC4wO1xuICAgICAgICB2YXIgc2VlZCA9IDB4MTIzNDtcbiAgICAgICAgdmFyIHZhbCA9IDAuMCwgdmFsMCA9IDAuMCwgYXN1bSA9IDAuMDtcblxuICAgICAgICB2YXIgV19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMyk7XG4gICAgICAgIHZhciBXID0gV19idWZmLmY2NDtcblxuICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgZm9yIChrID0gMCwgc2QgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIHNkICs9IHQgKiB0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgV1tpXSA9IHNkO1xuXG4gICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZ0W2kgKiB2c3RlcCArIGtdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVnRbaSAqIHZzdGVwICsgaV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBtYXhfaXRlcjsgaXRlcisrKSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gMDtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBBaSA9IChpICogYXN0ZXApIHwgMCwgQWogPSAoaiAqIGFzdGVwKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBXW2ldLCBwID0gMCwgYiA9IFdbal07XG5cbiAgICAgICAgICAgICAgICAgICAgayA9IDI7XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWldICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpICsgMV0gKiBBdFtBaiArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbTsgaysrKVxuICAgICAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaSArIGtdICogQXRbQWogKyBrXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMocCkgPD0gZXBzICogTWF0aC5zcXJ0KGEgKiBiKSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcCAqPSAyLjA7XG4gICAgICAgICAgICAgICAgICAgIGJldGEgPSBhIC0gYiwgZ2FtbWEgPSBoeXBvdChwLCBiZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJldGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IChnYW1tYSAtIGJldGEpICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IE1hdGguc3FydChkZWx0YSAvIGdhbW1hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSAocCAvIChnYW1tYSAqIHMgKiAyLjApKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBNYXRoLnNxcnQoKGdhbW1hICsgYmV0YSkgLyAoZ2FtbWEgKiAyLjApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAocCAvIChnYW1tYSAqIGMgKiAyLjApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGEgPSAwLjAsIGIgPSAwLjA7XG5cbiAgICAgICAgICAgICAgICAgICAgayA9IDI7IC8vIHVucm9sbFxuICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaV0gKyBzICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWldICsgYyAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWldID0gdDA7IEF0W0FqXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICBhICs9IHQwICogdDA7IGIgKz0gdDEgKiB0MTtcblxuICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaSArIDFdICsgcyAqIEF0W0FqICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaSArIDFdICsgYyAqIEF0W0FqICsgMV07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpICsgMV0gPSB0MDsgQXRbQWogKyAxXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICBhICs9IHQwICogdDA7IGIgKz0gdDEgKiB0MTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWkgKyBrXSArIHMgKiBBdFtBaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpICsga10gKyBjICogQXRbQWogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF0W0FpICsga10gPSB0MDsgQXRbQWogKyBrXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhICs9IHQwICogdDA7IGIgKz0gdDEgKiB0MTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIFdbaV0gPSBhOyBXW2pdID0gYjtcblxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpID0gKGkgKiB2c3RlcCkgfCAwLCBWaiA9IChqICogdnN0ZXApIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgayA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBWdFtWaV0gKyBzICogVnRbVmpdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpXSArIGMgKiBWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICBWdFtWaV0gPSB0MDsgVnRbVmpdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpICsgMV0gKyBzICogVnRbVmogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBWdFtWaSArIDFdICsgYyAqIFZ0W1ZqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBWdFtWaSArIDFdID0gdDA7IFZ0W1ZqICsgMV0gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBWdFtWaSArIGtdICsgcyAqIFZ0W1ZqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpICsga10gKyBjICogVnRbVmogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWdFtWaSArIGtdID0gdDA7IFZ0W1ZqICsga10gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFuZ2VkID09IDApIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgZm9yIChrID0gMCwgc2QgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIHNkICs9IHQgKiB0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgV1tpXSA9IE1hdGguc3FydChzZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgaiA9IGk7XG4gICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgIGlmIChXW2pdIDwgV1trXSlcbiAgICAgICAgICAgICAgICAgICAgaiA9IGs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSAhPSBqKSB7XG4gICAgICAgICAgICAgICAgc3dhcChXLCBpLCBqLCBzZCk7XG4gICAgICAgICAgICAgICAgaWYgKFZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoQXQsIGkgKiBhc3RlcCArIGssIGogKiBhc3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChWdCwgaSAqIHZzdGVwICsgaywgaiAqIHZzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBfV1tpXSA9IFdbaV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIVZ0KSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuMTsgaSsrKSB7XG5cbiAgICAgICAgICAgIHNkID0gaSA8IG4gPyBXW2ldIDogMDtcblxuICAgICAgICAgICAgd2hpbGUgKHNkIDw9IG1pbnZhbCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGdvdCBhIHplcm8gc2luZ3VsYXIgdmFsdWUsIHRoZW4gaW4gb3JkZXIgdG8gZ2V0IHRoZSBjb3JyZXNwb25kaW5nIGxlZnQgc2luZ3VsYXIgdmVjdG9yXG4gICAgICAgICAgICAgICAgLy8gd2UgZ2VuZXJhdGUgYSByYW5kb20gdmVjdG9yLCBwcm9qZWN0IGl0IHRvIHRoZSBwcmV2aW91c2x5IGNvbXB1dGVkIGxlZnQgc2luZ3VsYXIgdmVjdG9ycyxcbiAgICAgICAgICAgICAgICAvLyBzdWJ0cmFjdCB0aGUgcHJvamVjdGlvbiBhbmQgbm9ybWFsaXplIHRoZSBkaWZmZXJlbmNlLlxuICAgICAgICAgICAgICAgIHZhbDAgPSAoMS4wIC8gbSk7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzZWVkID0gKHNlZWQgKiAyMTQwMTMgKyAyNTMxMDExKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gKCgoc2VlZCA+PiAxNikgJiAweDdmZmYpICYgMjU2KSAhPSAwID8gdmFsMCA6IC12YWwwO1xuICAgICAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpdGVyID0gMDsgaXRlciA8IDI7IGl0ZXIrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2QgKz0gQXRbaSAqIGFzdGVwICsga10gKiBBdFtqICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IChBdFtpICogYXN0ZXAgKyBrXSAtIHNkICogQXRbaiAqIGFzdGVwICsga10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3VtICs9IE1hdGguYWJzKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IGFzdW0gPyAxLjAgLyBhc3VtIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSAqPSBhc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNkID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcyA9ICgxLjAgLyBzZCk7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gKj0gcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgIH1cblxuICAgIGx1X3NvbHZlKEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHAgPSAxLCBhc3RlcCA9IEEuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIHQsIGFscGhhLCBkLCBzO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhc3RlcDsgaSsrKSB7XG4gICAgICAgICAgICBrID0gaTtcbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtqICogYXN0ZXAgKyBpXSkgPiBNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgayA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7IC8vIEZBSUxFRFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoayAhPSBpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhcChhZCwgaSAqIGFzdGVwICsgaiwgayAqIGFzdGVwICsgaiwgdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3dhcChiZCwgaSwgaywgdCk7XG4gICAgICAgICAgICAgICAgcCA9IC1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkID0gLTEuMCAvIGFkW2kgKiBhc3RlcCArIGldO1xuXG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFkW2ogKiBhc3RlcCArIGldICogZDtcblxuICAgICAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBhZFtqICogYXN0ZXAgKyBrXSArPSBhbHBoYSAqIGFkW2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJkW2pdICs9IGFscGhhICogYmRbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkW2kgKiBhc3RlcCArIGldID0gLWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSBhc3RlcCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBzID0gYmRbaV07XG4gICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICBzIC09IGFkW2kgKiBhc3RlcCArIGtdICogYmRba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHMgKiBhZFtpICogYXN0ZXAgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxOyAvLyBPS1xuICAgIH1cblxuICAgIGNob2xlc2t5X3NvbHZlKEEsIEIpIHtcbiAgICAgICAgdmFyIGNvbCA9IDAsIHJvdyA9IDAsIGNvbDIgPSAwLCBjcyA9IDAsIHJzID0gMCwgaSA9IDAsIGogPSAwO1xuICAgICAgICB2YXIgc2l6ZSA9IEEuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIHZhbCwgaW52X2RpYWc7XG5cbiAgICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgICAgICAgICAgaW52X2RpYWcgPSAxLjA7XG4gICAgICAgICAgICBjcyA9IChjb2wgKiBzaXplKTtcbiAgICAgICAgICAgIHJzID0gY3M7XG4gICAgICAgICAgICBmb3IgKHJvdyA9IGNvbDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGZvciB0aGUgcGFydHMgb2YgY2hvbGVza3kgYWxyZWFkeSBjb21wdXRlZFxuICAgICAgICAgICAgICAgIHZhbCA9IGFkWyhycyArIGNvbCldO1xuICAgICAgICAgICAgICAgIGZvciAoY29sMiA9IDA7IGNvbDIgPCBjb2w7IGNvbDIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNvbDIgKiBzaXplICsgY29sKV0gKiBhZFsocnMgKyBjb2wyKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyb3cgPT0gY29sKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGRpYWdvbmFsIGVsZW1lbnQgc28gZG9uJ3QgZGl2aWRlXG4gICAgICAgICAgICAgICAgICAgIGFkWyhycyArIGNvbCldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGludl9kaWFnID0gMS4wIC8gdmFsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhY2hlIHRoZSB2YWx1ZSB3aXRob3V0IGRpdmlzaW9uIGluIHRoZSB1cHBlciBoYWxmXG4gICAgICAgICAgICAgICAgICAgIGFkWyhjcyArIHJvdyldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXZpZGUgbXkgdGhlIGRpYWdvbmFsIGVsZW1lbnQgZm9yIGFsbCBvdGhlcnNcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWwgKiBpbnZfZGlhZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnMgPSAocnMgKyBzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpcnN0IGJhY2tzdWIgdGhyb3VnaCBMXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGopXSAqIGJkW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSB2YWw7XG4gICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJhY2tzdWIgdGhyb3VnaCBkaWFnb25hbFxuICAgICAgICBjcyA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGJkW2ldIC89IGFkWyhjcyArIGkpXTtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIEwgVHJhbnNwb3NlXG4gICAgICAgIGkgPSAoc2l6ZSAtIDEpO1xuICAgICAgICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhbCA9IGJkW2ldO1xuICAgICAgICAgICAgaiA9IChpICsgMSk7XG4gICAgICAgICAgICBjcyA9IChqICogc2l6ZSk7XG4gICAgICAgICAgICBmb3IgKDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY3MgKyBpKV0gKiBiZFtqXTtcbiAgICAgICAgICAgICAgICBjcyA9IChjcyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBzdmRfZGVjb21wb3NlKEEsIFcsIFUsIFYsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9O1xuICAgICAgICB2YXIgYXQgPSAwLCBpID0gMCwgaiA9IDAsIF9tID0gQS5yb3dzLCBfbiA9IEEuY29scywgbSA9IF9tLCBuID0gX247XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDsgLy8gd2Ugb25seSB3b3JrIHdpdGggc2luZ2xlIGNoYW5uZWwgXG5cbiAgICAgICAgaWYgKG0gPCBuKSB7XG4gICAgICAgICAgICBhdCA9IDE7XG4gICAgICAgICAgICBpID0gbTtcbiAgICAgICAgICAgIG0gPSBuO1xuICAgICAgICAgICAgbiA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtICogbSkgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobiAqIG4pIDw8IDMpO1xuXG4gICAgICAgIHZhciBhX210ID0gbmV3IG1hdHJpeF90KG0sIG0sIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG4sIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IG1hdHJpeF90KG4sIG4sIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIC8vIHRyYW5zcG9zZVxuICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShhX210LCBBKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbiAqIF9tOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSBBLmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG4gKiBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhX210LmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlTVkRJbXBsKGFfbXQuZGF0YSwgbSwgd19tdC5kYXRhLCB2X210LmRhdGEsIG4sIG0sIG4sIG0pO1xuXG4gICAgICAgIGlmIChXKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gd19tdC5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBfbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgVy5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIGFfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIHZfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCB2X210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCBhX210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG5cbiAgICB9XG5cbiAgICBzdmRfc29sdmUoQSwgWCwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB4c3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuY29scyA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobmNvbHMgKiBuY29scykgPDwgMyk7XG5cbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBiZCA9IEIuZGF0YSwgdWQgPSB1X210LmRhdGEsIHdkID0gd19tdC5kYXRhLCB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICB4c3VtID0gMC4wO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAod2Rbal0gPiB0b2wpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wLCBwdSA9IDA7IGsgPCBucm93czsgaysrLCBwdSArPSBuY29scykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IHVkW3B1ICsgal0gKiBiZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4c3VtICs9IHN1bSAqIHZkW3B2ICsgal0gLyB3ZFtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBYLmRhdGFbaV0gPSB4c3VtO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHVfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBzdmRfaW52ZXJ0KEFpLCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcHUgPSAwLCBwdiA9IDAsIHBhID0gMDtcbiAgICAgICAgdmFyIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIHN1bSA9IDAuMCwgdG9sID0gMC4wO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgLy92YXIgdV9idWZmID0gY2FjaGUxLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuY29scyA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobmNvbHMgKiBuY29scykgPDwgMyk7XG4gICAgICAgIHZhciB1X210ID0gbmV3IG1hdHJpeF90KG5yb3dzLCBucm93cywgZHQsIHVfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbmNvbHMsIGR0LCB3X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB2X210ID0gbmV3IG1hdHJpeF90KG5jb2xzLCBuY29scywgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgaWQgPSBBaS5kYXRhLCB1ZCA9IHVfbXQuZGF0YSwgd2QgPSB3X210LmRhdGEsIHZkID0gdl9tdC5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3ZkX2RlY29tcG9zZShBLCB3X210LCB1X210LCB2X210LCAwKTtcblxuICAgICAgICB0b2wgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiB3ZFswXSAqIG5jb2xzO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IGkrKywgcHYgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIHB1ID0gMDsgaiA8IG5yb3dzOyBqKyssIHBhKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBzdW0gPSAwLjA7IGsgPCBuY29sczsgaysrLCBwdSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3ZFtrXSA+IHRvbCkgc3VtICs9IHZkW3B2ICsga10gKiB1ZFtwdV0gLyB3ZFtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWRbcGFdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHVfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBlaWdlblZWKEEsIHZlY3RzLCB2YWxzKSB7XG4gICAgICAgIHZhciBuID0gQS5jb2xzLCBpID0gbiAqIG47XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcblxuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpSW1wbChhX210LmRhdGEsIG4sIHdfbXQuZGF0YSwgdmVjdHMgPyB2ZWN0cy5kYXRhIDogbnVsbCwgbiwgbik7XG5cbiAgICAgICAgaWYgKHZhbHMpIHtcbiAgICAgICAgICAgIHdoaWxlICgtLW4gPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHMuZGF0YVtuXSA9IHdfbXQuZGF0YVtuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWF0aCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgICAgIHRoaXMucXNvcnRfc3RhY2sgPSBuZXcgSW50MzJBcnJheSg0OCAqIDIpO1xuICAgIH1cblxuICAgIGdldF9nYXVzc2lhbl9rZXJuZWwoc2l6ZSwgc2lnbWEsIGtlcm5lbCwgZGF0YV90eXBlKSB7XG4gICAgICAgIHZhciBpID0gMCwgeCA9IDAuMCwgdCA9IDAuMCwgc2lnbWFfeCA9IDAuMCwgc2NhbGVfMnggPSAwLjA7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG4gICAgICAgIHZhciBrZXJuX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoc2l6ZSA8PCAyKTtcbiAgICAgICAgdmFyIF9rZXJuZWwgPSBrZXJuX25vZGUuZjMyOy8vbmV3IEZsb2F0MzJBcnJheShzaXplKTtcblxuICAgICAgICBpZiAoKHNpemUgJiAxKSA9PSAxICYmIHNpemUgPD0gNyAmJiBzaWdtYSA8PSAwKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNpemUgPj4gMSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjI1LCBfa2VybmVsWzFdID0gMC41LCBfa2VybmVsWzJdID0gMC4yNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4yNSArIDAuNSArIDAuMjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMDYyNSwgX2tlcm5lbFsxXSA9IDAuMjUsIF9rZXJuZWxbMl0gPSAwLjM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbM10gPSAwLjI1LCBfa2VybmVsWzRdID0gMC4wNjI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjA2MjUgKyAwLjI1ICsgMC4zNzUgKyAwLjI1ICsgMC4wNjI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjAzMTI1LCBfa2VybmVsWzFdID0gMC4xMDkzNzUsIF9rZXJuZWxbMl0gPSAwLjIxODc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFszXSA9IDAuMjgxMjUsIF9rZXJuZWxbNF0gPSAwLjIxODc1LCBfa2VybmVsWzVdID0gMC4xMDkzNzUsIF9rZXJuZWxbNl0gPSAwLjAzMTI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjAzMTI1ICsgMC4xMDkzNzUgKyAwLjIxODc1ICsgMC4yODEyNSArIDAuMjE4NzUgKyAwLjEwOTM3NSArIDAuMDMxMjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2lnbWFfeCA9IHNpZ21hID4gMCA/IHNpZ21hIDogKChzaXplIC0gMSkgKiAwLjUgLSAxLjApICogMC4zICsgMC44O1xuICAgICAgICAgICAgc2NhbGVfMnggPSAtMC41IC8gKHNpZ21hX3ggKiBzaWdtYV94KTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICAgICB4ID0gaSAtIChzaXplIC0gMSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgdCA9IE1hdGguZXhwKHNjYWxlXzJ4ICogeCAqIHgpO1xuXG4gICAgICAgICAgICAgICAgX2tlcm5lbFtpXSA9IHQ7XG4gICAgICAgICAgICAgICAgc3VtICs9IHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90KSB7XG4gICAgICAgICAgICAvLyBpbnQgYmFzZWQga2VybmVsXG4gICAgICAgICAgICBzdW0gPSAyNTYuMCAvIHN1bTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICAgICBrZXJuZWxbaV0gPSAoX2tlcm5lbFtpXSAqIHN1bSArIDAuNSkgfCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2xhc3NpYyBrZXJuZWxcbiAgICAgICAgICAgIHN1bSA9IDEuMCAvIHN1bTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICAgICBrZXJuZWxbaV0gPSBfa2VybmVsW2ldICogc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGtlcm5fbm9kZSk7XG4gICAgfVxuXG4gICAgLy8gbW9kZWwgaXMgM3gzIG1hdHJpeF90XG4gICAgcGVyc3BlY3RpdmVfNHBvaW50X3RyYW5zZm9ybShtb2RlbCwgc3JjX3gwLCBzcmNfeTAsIGRzdF94MCwgZHN0X3kwLFxuICAgICAgICBzcmNfeDEsIHNyY195MSwgZHN0X3gxLCBkc3RfeTEsXG4gICAgICAgIHNyY194Miwgc3JjX3kyLCBkc3RfeDIsIGRzdF95MixcbiAgICAgICAgc3JjX3gzLCBzcmNfeTMsIGRzdF94MywgZHN0X3kzKSB7XG4gICAgICAgIHZhciB0MSA9IHNyY194MDtcbiAgICAgICAgdmFyIHQyID0gc3JjX3gyO1xuICAgICAgICB2YXIgdDQgPSBzcmNfeTE7XG4gICAgICAgIHZhciB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdmFyIHQ2ID0gc3JjX3kzO1xuICAgICAgICB2YXIgdDcgPSB0MSAqIHQ2O1xuICAgICAgICB2YXIgdDggPSB0MiAqIHQ3O1xuICAgICAgICB2YXIgdDkgPSBzcmNfeTI7XG4gICAgICAgIHZhciB0MTAgPSB0MSAqIHQ5O1xuICAgICAgICB2YXIgdDExID0gc3JjX3gxO1xuICAgICAgICB2YXIgdDE0ID0gc3JjX3kwO1xuICAgICAgICB2YXIgdDE1ID0gc3JjX3gzO1xuICAgICAgICB2YXIgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB2YXIgdDE4ID0gdDE2ICogdDExO1xuICAgICAgICB2YXIgdDIwID0gdDE1ICogdDExICogdDk7XG4gICAgICAgIHZhciB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdmFyIHQyNCA9IHQxNSAqIHQ5O1xuICAgICAgICB2YXIgdDI1ID0gdDIgKiB0NDtcbiAgICAgICAgdmFyIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHZhciB0MjcgPSB0NiAqIHQxMTtcbiAgICAgICAgdmFyIHQyOCA9IHQ5ICogdDExO1xuICAgICAgICB2YXIgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHZhciB0MzIgPSB0MSAqIHQxNTtcbiAgICAgICAgdmFyIHQzNSA9IHQxNCAqIHQxMTtcbiAgICAgICAgdmFyIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHZhciB0NDIgPSB0NiAqIHQ0MTtcbiAgICAgICAgdmFyIHQ0MyA9IHQxNCAqIHQyO1xuICAgICAgICB2YXIgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHZhciB0NDggPSB0MTQgKiB0OSAqIHQxMTtcbiAgICAgICAgdmFyIHQ1MSA9IHQ0ICogdDYgKiB0MjtcbiAgICAgICAgdmFyIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSHIwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSHIyID0gdDE7XG4gICAgICAgIHZhciBIcjMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSHI0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSHI1ID0gdDE0O1xuICAgICAgICB2YXIgSHI2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSHI3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgdDEgPSBkc3RfeDA7XG4gICAgICAgIHQyID0gZHN0X3gyO1xuICAgICAgICB0NCA9IGRzdF95MTtcbiAgICAgICAgdDUgPSB0MSAqIHQyICogdDQ7XG4gICAgICAgIHQ2ID0gZHN0X3kzO1xuICAgICAgICB0NyA9IHQxICogdDY7XG4gICAgICAgIHQ4ID0gdDIgKiB0NztcbiAgICAgICAgdDkgPSBkc3RfeTI7XG4gICAgICAgIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHQxMSA9IGRzdF94MTtcbiAgICAgICAgdDE0ID0gZHN0X3kwO1xuICAgICAgICB0MTUgPSBkc3RfeDM7XG4gICAgICAgIHQxNiA9IHQxNCAqIHQxNTtcbiAgICAgICAgdDE4ID0gdDE2ICogdDExO1xuICAgICAgICB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdDIxID0gdDE1ICogdDQ7XG4gICAgICAgIHQyNCA9IHQxNSAqIHQ5O1xuICAgICAgICB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB0MjYgPSB0NiAqIHQyO1xuICAgICAgICB0MjcgPSB0NiAqIHQxMTtcbiAgICAgICAgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHQzMCA9IDEuMCAvICh0MjEgLSB0MjQgLSB0MjUgKyB0MjYgLSB0MjcgKyB0MjgpO1xuICAgICAgICB0MzIgPSB0MSAqIHQxNTtcbiAgICAgICAgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB0NDEgPSB0NCAqIHQxO1xuICAgICAgICB0NDIgPSB0NiAqIHQ0MTtcbiAgICAgICAgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHQ0NiA9IHQxNiAqIHQ5O1xuICAgICAgICB0NDggPSB0MTQgKiB0OSAqIHQxMTtcbiAgICAgICAgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB0NTUgPSB0NiAqIHQxNDtcbiAgICAgICAgdmFyIEhsMCA9IC0odDggLSB0NSArIHQxMCAqIHQxMSAtIHQxMSAqIHQ3IC0gdDE2ICogdDIgKyB0MTggLSB0MjAgKyB0MjEgKiB0MikgKiB0MzA7XG4gICAgICAgIHZhciBIbDEgPSAodDUgLSB0OCAtIHQzMiAqIHQ0ICsgdDMyICogdDkgKyB0MTggLSB0MiAqIHQzNSArIHQyNyAqIHQyIC0gdDIwKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMiA9IHQxO1xuICAgICAgICB2YXIgSGwzID0gKC10OSAqIHQ3ICsgdDQyICsgdDQzICogdDQgLSB0MTYgKiB0NCArIHQ0NiAtIHQ0OCArIHQyNyAqIHQ5IC0gdDUxKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNCA9ICgtdDQyICsgdDQxICogdDkgLSB0NTUgKiB0MiArIHQ0NiAtIHQ0OCArIHQ1NSAqIHQxMSArIHQ1MSAtIHQyMSAqIHQ5KSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNSA9IHQxNDtcbiAgICAgICAgdmFyIEhsNiA9ICgtdDEwICsgdDQxICsgdDQzIC0gdDM1ICsgdDI0IC0gdDIxIC0gdDI2ICsgdDI3KSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNyA9ICgtdDcgKyB0MTAgKyB0MTYgLSB0NDMgKyB0MjcgLSB0MjggLSB0MjEgKyB0MjUpICogdDMwO1xuXG4gICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgY29kZSBjb21wdXRlcyBSID0gSGwgKiBpbnZlcnNlIEhyXG4gICAgICAgIHQyID0gSHI0IC0gSHI3ICogSHI1O1xuICAgICAgICB0NCA9IEhyMCAqIEhyNDtcbiAgICAgICAgdDUgPSBIcjAgKiBIcjU7XG4gICAgICAgIHQ3ID0gSHIzICogSHIxO1xuICAgICAgICB0OCA9IEhyMiAqIEhyMztcbiAgICAgICAgdDEwID0gSHIxICogSHI2O1xuICAgICAgICB2YXIgdDEyID0gSHIyICogSHI2O1xuICAgICAgICB0MTUgPSAxLjAgLyAodDQgLSB0NSAqIEhyNyAtIHQ3ICsgdDggKiBIcjcgKyB0MTAgKiBIcjUgLSB0MTIgKiBIcjQpO1xuICAgICAgICB0MTggPSAtSHIzICsgSHI1ICogSHI2O1xuICAgICAgICB2YXIgdDIzID0gLUhyMyAqIEhyNyArIEhyNCAqIEhyNjtcbiAgICAgICAgdDI4ID0gLUhyMSArIEhyMiAqIEhyNztcbiAgICAgICAgdmFyIHQzMSA9IEhyMCAtIHQxMjtcbiAgICAgICAgdDM1ID0gSHIwICogSHI3IC0gdDEwO1xuICAgICAgICB0NDEgPSAtSHIxICogSHI1ICsgSHIyICogSHI0O1xuICAgICAgICB2YXIgdDQ0ID0gdDUgLSB0ODtcbiAgICAgICAgdmFyIHQ0NyA9IHQ0IC0gdDc7XG4gICAgICAgIHQ0OCA9IHQyICogdDE1O1xuICAgICAgICB2YXIgdDQ5ID0gdDI4ICogdDE1O1xuICAgICAgICB2YXIgdDUwID0gdDQxICogdDE1O1xuICAgICAgICB2YXIgbWF0ID0gbW9kZWwuZGF0YTtcbiAgICAgICAgbWF0WzBdID0gSGwwICogdDQ4ICsgSGwxICogKHQxOCAqIHQxNSkgLSBIbDIgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzFdID0gSGwwICogdDQ5ICsgSGwxICogKHQzMSAqIHQxNSkgLSBIbDIgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzJdID0gLUhsMCAqIHQ1MCAtIEhsMSAqICh0NDQgKiB0MTUpICsgSGwyICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFszXSA9IEhsMyAqIHQ0OCArIEhsNCAqICh0MTggKiB0MTUpIC0gSGw1ICogKHQyMyAqIHQxNSk7XG4gICAgICAgIG1hdFs0XSA9IEhsMyAqIHQ0OSArIEhsNCAqICh0MzEgKiB0MTUpIC0gSGw1ICogKHQzNSAqIHQxNSk7XG4gICAgICAgIG1hdFs1XSA9IC1IbDMgKiB0NTAgLSBIbDQgKiAodDQ0ICogdDE1KSArIEhsNSAqICh0NDcgKiB0MTUpO1xuICAgICAgICBtYXRbNl0gPSBIbDYgKiB0NDggKyBIbDcgKiAodDE4ICogdDE1KSAtIHQyMyAqIHQxNTtcbiAgICAgICAgbWF0WzddID0gSGw2ICogdDQ5ICsgSGw3ICogKHQzMSAqIHQxNSkgLSB0MzUgKiB0MTU7XG4gICAgICAgIG1hdFs4XSA9IC1IbDYgKiB0NTAgLSBIbDcgKiAodDQ0ICogdDE1KSArIHQ0NyAqIHQxNTtcbiAgICB9XG5cbiAgICAvLyBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiB3YXMgZGVyaXZlZCBmcm9tICpCU0Qgc3lzdGVtIHFzb3J0KCk6XG4gICAgLy8gQ29weXJpZ2h0IChjKSAxOTkyLCAxOTkzXG4gICAgLy8gVGhlIFJlZ2VudHMgb2YgdGhlIFVuaXZlcnNpdHkgb2YgQ2FsaWZvcm5pYS4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgcXNvcnQoYXJyYXksIGxvdywgaGlnaCwgY21wKSB7XG4gICAgICAgIHZhciBpc29ydF90aHJlc2ggPSA3O1xuICAgICAgICB2YXIgdCwgdGEsIHRiLCB0YztcbiAgICAgICAgdmFyIHNwID0gMCwgbGVmdCA9IDAsIHJpZ2h0ID0gMCwgaSA9IDAsIG4gPSAwLCBtID0gMCwgcHRyID0gMCwgcHRyMiA9IDAsIGQgPSAwO1xuICAgICAgICB2YXIgbGVmdDAgPSAwLCBsZWZ0MSA9IDAsIHJpZ2h0MCA9IDAsIHJpZ2h0MSA9IDAsIHBpdm90ID0gMCwgYSA9IDAsIGIgPSAwLCBjID0gMCwgc3dhcF9jbnQgPSAwO1xuXG4gICAgICAgIHZhciBzdGFjayA9IHRoaXMucXNvcnRfc3RhY2s7XG5cbiAgICAgICAgaWYgKChoaWdoIC0gbG93ICsgMSkgPD0gMSkgcmV0dXJuO1xuXG4gICAgICAgIHN0YWNrWzBdID0gbG93O1xuICAgICAgICBzdGFja1sxXSA9IGhpZ2g7XG5cbiAgICAgICAgd2hpbGUgKHNwID49IDApIHtcblxuICAgICAgICAgICAgbGVmdCA9IHN0YWNrW3NwIDw8IDFdO1xuICAgICAgICAgICAgcmlnaHQgPSBzdGFja1soc3AgPDwgMSkgKyAxXTtcbiAgICAgICAgICAgIHNwLS07XG5cbiAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgbiA9IChyaWdodCAtIGxlZnQpICsgMTtcblxuICAgICAgICAgICAgICAgIGlmIChuIDw9IGlzb3J0X3RocmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAvL2luc2VydF9zb3J0OlxuICAgICAgICAgICAgICAgICAgICBmb3IgKHB0ciA9IGxlZnQgKyAxOyBwdHIgPD0gcmlnaHQ7IHB0cisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0cjIgPSBwdHI7IHB0cjIgPiBsZWZ0ICYmIGNtcChhcnJheVtwdHIyXSwgYXJyYXlbcHRyMiAtIDFdKTsgcHRyMi0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3B0cjJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjJdID0gYXJyYXlbcHRyMiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjIgLSAxXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGxlZnQwID0gbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQwID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHBpdm90ID0gbGVmdCArIChuID4+IDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuID4gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBuID4+IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gbGVmdCwgYiA9IGxlZnQgKyBkLCBjID0gbGVmdCArIChkIDw8IDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHBpdm90IC0gZCwgYiA9IHBpdm90LCBjID0gcGl2b3QgKyBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSByaWdodCAtIChkIDw8IDEpLCBiID0gcmlnaHQgLSBkLCBjID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGEgPSBsZWZ0LCBiID0gcGl2b3QsIGMgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGl2b3QgIT0gbGVmdDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwaXZvdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwaXZvdF0gPSBhcnJheVtsZWZ0MF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBsZWZ0MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDEgPSBsZWZ0MCArIDE7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gcmlnaHQxID0gcmlnaHQwO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbcGl2b3RdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQgJiYgIWNtcCh0YSwgYXJyYXlbbGVmdF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbXAoYXJyYXlbbGVmdF0sIHRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA+IGxlZnQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDFdID0gYXJyYXlbbGVmdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0MSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0ICYmICFjbXAoYXJyYXlbcmlnaHRdLCB0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNtcCh0YSwgYXJyYXlbcmlnaHRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmlnaHQgPCByaWdodDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtyaWdodDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHQxXSA9IGFycmF5W3JpZ2h0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDEtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnQgPiByaWdodCkgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3dhcF9jbnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZ290byBpbnNlcnRfc29ydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyID0gbGVmdCArIDE7IHB0ciA8PSByaWdodDsgcHRyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0cjIgPSBwdHI7IHB0cjIgPiBsZWZ0ICYmIGNtcChhcnJheVtwdHIyXSwgYXJyYXlbcHRyMiAtIDFdKTsgcHRyMi0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwdHIyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMl0gPSBhcnJheVtwdHIyIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjIgLSAxXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuID0gTWF0aC5taW4oKGxlZnQxIC0gbGVmdDApLCAobGVmdCAtIGxlZnQxKSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAobGVmdCAtIG4pIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSwgKyttKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdDAgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQwICsgaV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG4gPSBNYXRoLm1pbigocmlnaHQwIC0gcmlnaHQxKSwgKHJpZ2h0MSAtIHJpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAocmlnaHQwIC0gbiArIDEpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSwgKyttKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdCArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdCArIGldID0gYXJyYXlbbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVttXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbiA9IChsZWZ0IC0gbGVmdDEpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKHJpZ2h0MSAtIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3AgPDwgMV0gPSBsZWZ0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbKHNwIDw8IDEpICsgMV0gPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQwIC0gbSArIDEsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrc3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3NwIDw8IDFdID0gcmlnaHQwIC0gbSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWyhzcCA8PCAxKSArIDFdID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG0gPiAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0MCAtIG0gKyAxLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWVkaWFuKGFycmF5LCBsb3csIGhpZ2gpIHtcbiAgICAgICAgdmFyIHc7XG4gICAgICAgIHZhciBtaWRkbGUgPSAwLCBsbCA9IDAsIGhoID0gMCwgbWVkaWFuID0gKGxvdyArIGhpZ2gpID4+IDE7XG4gICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICBpZiAoaGlnaCA8PSBsb3cpIHJldHVybiBhcnJheVttZWRpYW5dO1xuICAgICAgICAgICAgaWYgKGhpZ2ggPT0gKGxvdyArIDEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5W2xvd10gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVttZWRpYW5dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWlkZGxlID0gKChsb3cgKyBoaWdoKSA+PiAxKTtcbiAgICAgICAgICAgIGlmIChhcnJheVttaWRkbGVdID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgICAgICBhcnJheVttaWRkbGVdID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFycmF5W2xvd10gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWlkZGxlXSA+IGFycmF5W2xvd10pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgICAgICBhcnJheVttaWRkbGVdID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxsID0gKGxvdyArIDEpO1xuICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICBhcnJheVttaWRkbGVdID0gYXJyYXlbbGxdO1xuICAgICAgICAgICAgYXJyYXlbbGxdID0gdztcbiAgICAgICAgICAgIGhoID0gaGlnaDtcbiAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgZG8gKytsbDsgd2hpbGUgKGFycmF5W2xvd10gPiBhcnJheVtsbF0pO1xuICAgICAgICAgICAgICAgIGRvIC0taGg7IHdoaWxlIChhcnJheVtoaF0gPiBhcnJheVtsb3ddKTtcbiAgICAgICAgICAgICAgICBpZiAoaGggPCBsbCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xsXTtcbiAgICAgICAgICAgICAgICBhcnJheVtsbF0gPSBhcnJheVtoaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGhdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hoXTtcbiAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICBpZiAoaGggPD0gbWVkaWFuKVxuICAgICAgICAgICAgICAgIGxvdyA9IGxsO1xuICAgICAgICAgICAgZWxzZSBpZiAoaGggPj0gbWVkaWFuKVxuICAgICAgICAgICAgICAgIGhpZ2ggPSAoaGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWF0bWF0aCB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGlkZW50aXR5KE0sIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBzcmMgPSBNLmRhdGE7XG4gICAgICAgIHZhciByb3dzID0gTS5yb3dzLCBjb2xzID0gTS5jb2xzLCBjb2xzXzEgPSAoY29scyArIDEpIHwgMDtcbiAgICAgICAgdmFyIGxlbiA9IHJvd3MgKiBjb2xzO1xuICAgICAgICB2YXIgayA9IGxlbjtcbiAgICAgICAgd2hpbGUgKC0tbGVuID49IDApIHNyY1tsZW5dID0gMC4wO1xuICAgICAgICBsZW4gPSBrO1xuICAgICAgICBrID0gMDtcbiAgICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgICAgIHNyY1trXSA9IHZhbHVlO1xuICAgICAgICAgICAgayA9IGsgKyBjb2xzXzE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc3Bvc2UoQXQsIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgQWkgPSAwLCBBdGkgPSAwLCBwQXQgPSAwO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGF0ZCA9IEF0LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXRpICs9IDEsIEFpICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIHBBdCA9IEF0aTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuY29sczsgcEF0ICs9IG5yb3dzLCBqKyspIGF0ZFtwQXRdID0gYWRbQWkgKyBqXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQlxuICAgIG11bHRpcGx5KEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0IgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1jb2xzID0gQi5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IHBBKyssIHBCICs9IG1jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCJ1xuICAgIG11bHRpcGx5X0FCdChDLCBBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtcm93cyA9IEIucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXAgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgZm9yIChwQiA9IDAsIGogPSAwOyBqIDwgbXJvd3M7IENwKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIrKywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEJcbiAgICBtdWx0aXBseV9BdEIoQywgQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IEFwKyssIGkrKykge1xuICAgICAgICAgICAgZm9yIChwX0IgPSAwLCBqID0gMDsgaiA8IG1jb2xzOyBDcCsrLCBwX0IrKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEIgPSBwX0I7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5yb3dzOyBwQSArPSBuY29scywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEEnXG4gICAgbXVsdGlwbHlfQUF0KEMsIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwQ2RpYWcgPSAwLCBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcEMgPSAwLCBwQ3QgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IHBDZGlhZyArPSBucm93cyArIDEsIHBfQSA9IHBBLCBpKyspIHtcbiAgICAgICAgICAgIHBDID0gcENkaWFnO1xuICAgICAgICAgICAgcEN0ID0gcENkaWFnO1xuICAgICAgICAgICAgcEIgPSBwX0E7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbnJvd3M7IHBDKyssIHBDdCArPSBucm93cywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBwX0E7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQSsrXSAqIGFkW3BCKytdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtwQ10gPSBzdW1cbiAgICAgICAgICAgICAgICBjZFtwQ3RdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQVxuICAgIG11bHRpcGx5X0F0QShDLCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQyA9IDAsIHBDID0gMCwgcF9DQyA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgcF9DICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIHBfQSA9IGk7XG4gICAgICAgICAgICBwX0NDID0gcF9DICsgaTtcbiAgICAgICAgICAgIHBDID0gcF9DQztcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBuY29sczsgcEMrKywgcF9DQyArPSBuY29scywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBwX0E7XG4gICAgICAgICAgICAgICAgcEIgPSBqO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBuY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBhZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BfQ0NdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmFyaW91cyBzbWFsbCBtYXRyaXggb3BlcmF0aW9uc1xuICAgIGlkZW50aXR5XzN4MyhNLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IHZhbHVlID0gMTsgfVxuICAgICAgICB2YXIgZHQgPSBNLmRhdGE7XG4gICAgICAgIGR0WzBdID0gZHRbNF0gPSBkdFs4XSA9IHZhbHVlO1xuICAgICAgICBkdFsxXSA9IGR0WzJdID0gZHRbM10gPSAwO1xuICAgICAgICBkdFs1XSA9IGR0WzZdID0gZHRbN10gPSAwO1xuICAgIH1cblxuICAgIGludmVydF8zeDMoZnJvbSwgdG8pIHtcbiAgICAgICAgdmFyIEEgPSBmcm9tLmRhdGEsIGludkEgPSB0by5kYXRhO1xuICAgICAgICB2YXIgdDEgPSBBWzRdO1xuICAgICAgICB2YXIgdDIgPSBBWzhdO1xuICAgICAgICB2YXIgdDQgPSBBWzVdO1xuICAgICAgICB2YXIgdDUgPSBBWzddO1xuICAgICAgICB2YXIgdDggPSBBWzBdO1xuXG4gICAgICAgIHZhciB0OSA9IHQ4ICogdDE7XG4gICAgICAgIHZhciB0MTEgPSB0OCAqIHQ0O1xuICAgICAgICB2YXIgdDEzID0gQVszXTtcbiAgICAgICAgdmFyIHQxNCA9IEFbMV07XG4gICAgICAgIHZhciB0MTUgPSB0MTMgKiB0MTQ7XG4gICAgICAgIHZhciB0MTcgPSBBWzJdO1xuICAgICAgICB2YXIgdDE4ID0gdDEzICogdDE3O1xuICAgICAgICB2YXIgdDIwID0gQVs2XTtcbiAgICAgICAgdmFyIHQyMSA9IHQyMCAqIHQxNDtcbiAgICAgICAgdmFyIHQyMyA9IHQyMCAqIHQxNztcbiAgICAgICAgdmFyIHQyNiA9IDEuMCAvICh0OSAqIHQyIC0gdDExICogdDUgLSB0MTUgKiB0MiArIHQxOCAqIHQ1ICsgdDIxICogdDQgLSB0MjMgKiB0MSk7XG4gICAgICAgIGludkFbMF0gPSAodDEgKiB0MiAtIHQ0ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzFdID0gLSh0MTQgKiB0MiAtIHQxNyAqIHQ1KSAqIHQyNjtcbiAgICAgICAgaW52QVsyXSA9IC0oLXQxNCAqIHQ0ICsgdDE3ICogdDEpICogdDI2O1xuICAgICAgICBpbnZBWzNdID0gLSh0MTMgKiB0MiAtIHQ0ICogdDIwKSAqIHQyNjtcbiAgICAgICAgaW52QVs0XSA9ICh0OCAqIHQyIC0gdDIzKSAqIHQyNjtcbiAgICAgICAgaW52QVs1XSA9IC0odDExIC0gdDE4KSAqIHQyNjtcbiAgICAgICAgaW52QVs2XSA9IC0oLXQxMyAqIHQ1ICsgdDEgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzddID0gLSh0OCAqIHQ1IC0gdDIxKSAqIHQyNjtcbiAgICAgICAgaW52QVs4XSA9ICh0OSAtIHQxNSkgKiB0MjY7XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHlfM3gzKEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIENkID0gQy5kYXRhLCBBZCA9IEEuZGF0YSwgQmQgPSBCLmRhdGE7XG4gICAgICAgIHZhciBtMV8wID0gQWRbMF0sIG0xXzEgPSBBZFsxXSwgbTFfMiA9IEFkWzJdO1xuICAgICAgICB2YXIgbTFfMyA9IEFkWzNdLCBtMV80ID0gQWRbNF0sIG0xXzUgPSBBZFs1XTtcbiAgICAgICAgdmFyIG0xXzYgPSBBZFs2XSwgbTFfNyA9IEFkWzddLCBtMV84ID0gQWRbOF07XG5cbiAgICAgICAgdmFyIG0yXzAgPSBCZFswXSwgbTJfMSA9IEJkWzFdLCBtMl8yID0gQmRbMl07XG4gICAgICAgIHZhciBtMl8zID0gQmRbM10sIG0yXzQgPSBCZFs0XSwgbTJfNSA9IEJkWzVdO1xuICAgICAgICB2YXIgbTJfNiA9IEJkWzZdLCBtMl83ID0gQmRbN10sIG0yXzggPSBCZFs4XTtcblxuICAgICAgICBDZFswXSA9IG0xXzAgKiBtMl8wICsgbTFfMSAqIG0yXzMgKyBtMV8yICogbTJfNjtcbiAgICAgICAgQ2RbMV0gPSBtMV8wICogbTJfMSArIG0xXzEgKiBtMl80ICsgbTFfMiAqIG0yXzc7XG4gICAgICAgIENkWzJdID0gbTFfMCAqIG0yXzIgKyBtMV8xICogbTJfNSArIG0xXzIgKiBtMl84O1xuICAgICAgICBDZFszXSA9IG0xXzMgKiBtMl8wICsgbTFfNCAqIG0yXzMgKyBtMV81ICogbTJfNjtcbiAgICAgICAgQ2RbNF0gPSBtMV8zICogbTJfMSArIG0xXzQgKiBtMl80ICsgbTFfNSAqIG0yXzc7XG4gICAgICAgIENkWzVdID0gbTFfMyAqIG0yXzIgKyBtMV80ICogbTJfNSArIG0xXzUgKiBtMl84O1xuICAgICAgICBDZFs2XSA9IG0xXzYgKiBtMl8wICsgbTFfNyAqIG0yXzMgKyBtMV84ICogbTJfNjtcbiAgICAgICAgQ2RbN10gPSBtMV82ICogbTJfMSArIG0xXzcgKiBtMl80ICsgbTFfOCAqIG0yXzc7XG4gICAgICAgIENkWzhdID0gbTFfNiAqIG0yXzIgKyBtMV83ICogbTJfNSArIG0xXzggKiBtMl84O1xuICAgIH1cblxuICAgIG1hdDN4M19kZXRlcm1pbmFudChNKSB7XG4gICAgICAgIHZhciBtZCA9IE0uZGF0YTtcbiAgICAgICAgcmV0dXJuIG1kWzBdICogbWRbNF0gKiBtZFs4XSAtXG4gICAgICAgICAgICBtZFswXSAqIG1kWzVdICogbWRbN10gLVxuICAgICAgICAgICAgbWRbM10gKiBtZFsxXSAqIG1kWzhdICtcbiAgICAgICAgICAgIG1kWzNdICogbWRbMl0gKiBtZFs3XSArXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzFdICogbWRbNV0gLVxuICAgICAgICAgICAgbWRbNl0gKiBtZFsyXSAqIG1kWzRdO1xuICAgIH1cblxuICAgIGRldGVybWluYW50XzN4MyhNMTEsIE0xMiwgTTEzLFxuICAgICAgICBNMjEsIE0yMiwgTTIzLFxuICAgICAgICBNMzEsIE0zMiwgTTMzKSB7XG4gICAgICAgIHJldHVybiBNMTEgKiBNMjIgKiBNMzMgLSBNMTEgKiBNMjMgKiBNMzIgLVxuICAgICAgICAgICAgTTIxICogTTEyICogTTMzICsgTTIxICogTTEzICogTTMyICtcbiAgICAgICAgICAgIE0zMSAqIE0xMiAqIE0yMyAtIE0zMSAqIE0xMyAqIE0yMjtcbiAgICB9XG59IiwiaW1wb3J0IGRhdGFfdHlwZSBmcm9tICcuLi9kYXRhX3R5cGUvZGF0YV90eXBlLmpzJ1xuaW1wb3J0IGRhdGFfdCBmcm9tICcuLi9ub2RlX3V0aWxzL2RhdGFfdC5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWF0cml4X3Qge1xuICAgIGNvbnN0cnVjdG9yKGMsIHIsIF9kYXRhX3R5cGUsIF9kYXRhX2J1ZmZlcikge1xuICAgICAgICB0aGlzLmR0ID0gbmV3IGRhdGFfdHlwZSgpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy5kdC5fZ2V0X2NoYW5uZWwoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNvbHMgPSBjIHwgMDtcbiAgICAgICAgdGhpcy5yb3dzID0gciB8IDA7XG4gICAgICAgIGlmICh0eXBlb2YgX2RhdGFfYnVmZmVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IF9kYXRhX2J1ZmZlcjtcbiAgICAgICAgICAgIC8vIGRhdGEgdXNlciBhc2tlZCBmb3JcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFsbG9jYXRlKCkge1xuICAgICAgICAvLyBjbGVhciByZWZlcmVuY2VzXG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgZGF0YV90KCh0aGlzLmNvbHMgKiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodGhpcy50eXBlKSAqIHRoaXMuY2hhbm5lbCkgKiB0aGlzLnJvd3MpO1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICB9XG4gICAgY29weV90byhvdGhlcikge1xuICAgICAgICB2YXIgb2QgPSBvdGhlci5kYXRhLCB0ZCA9IHRoaXMuZGF0YTtcbiAgICAgICAgdmFyIGkgPSAwLCBuID0gKHRoaXMuY29scyAqIHRoaXMucm93cyAqIHRoaXMuY2hhbm5lbCkgfCAwO1xuICAgICAgICBmb3IgKDsgaSA8IG4gLSA0OyBpICs9IDQpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgICAgICBvZFtpICsgMV0gPSB0ZFtpICsgMV07XG4gICAgICAgICAgICBvZFtpICsgMl0gPSB0ZFtpICsgMl07XG4gICAgICAgICAgICBvZFtpICsgM10gPSB0ZFtpICsgM107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzaXplKGMsIHIsIGNoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2ggPT09IFwidW5kZWZpbmVkXCIpIHsgY2ggPSB0aGlzLmNoYW5uZWw7IH1cbiAgICAgICAgLy8gcmVsb2NhdGUgYnVmZmVyIG9ubHkgaWYgbmV3IHNpemUgZG9lc250IGZpdFxuICAgICAgICB2YXIgbmV3X3NpemUgPSAoYyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogY2gpICogcjtcbiAgICAgICAgaWYgKG5ld19zaXplID4gdGhpcy5idWZmZXIuc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJ1xuaW1wb3J0IG1hdGggZnJvbSAnLi4vbWF0aC9tYXRoLmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1vdGlvbl9lc3RpbWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgIH1cblxuICAgIGdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbmVlZF9jbnQsIG1heF9jbnQsIGZyb21fc3ViLCB0b19zdWIpIHtcbiAgICAgICAgdmFyIG1heF90cnkgPSAxMDAwO1xuICAgICAgICB2YXIgaW5kaWNlcyA9IFtdO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBzc2l0ZXIgPSAwLCBpZHhfaSA9IDAsIG9rID0gZmFsc2U7XG4gICAgICAgIGZvciAoOyBzc2l0ZXIgPCBtYXhfdHJ5OyArK3NzaXRlcikge1xuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG5lZWRfY250ICYmIHNzaXRlciA8IG1heF90cnk7KSB7XG4gICAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZHhfaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCFvaykge1xuICAgICAgICAgICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlkeF9pID0gaW5kaWNlc1tpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heF9jbnQpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeF9pID09IGluZGljZXNbal0pIHsgb2sgPSBmYWxzZTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcm9tX3N1YltpXSA9IGZyb21baWR4X2ldO1xuICAgICAgICAgICAgICAgIHRvX3N1YltpXSA9IHRvW2lkeF9pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWtlcm5lbC5jaGVja19zdWJzZXQoZnJvbV9zdWIsIHRvX3N1YiwgaSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNzaXRlcisrO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKGkgPT0gbmVlZF9jbnQgJiYgc3NpdGVyIDwgbWF4X3RyeSk7XG4gICAgfVxuXG4gICAgZmluZF9pbmxpZXJzKGtlcm5lbCwgbW9kZWwsIGZyb20sIHRvLCBjb3VudCwgdGhyZXNoLCBlcnIsIG1hc2spIHtcbiAgICAgICAgdmFyIG51bWlubGllcnMgPSAwLCBpID0gMCwgZiA9IDA7XG4gICAgICAgIHZhciB0ID0gdGhyZXNoICogdGhyZXNoO1xuXG4gICAgICAgIGtlcm5lbC5lcnJvcihmcm9tLCB0bywgbW9kZWwsIGVyciwgY291bnQpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZiA9IGVycltpXSA8PSB0O1xuICAgICAgICAgICAgbWFza1tpXSA9IGY7XG4gICAgICAgICAgICBudW1pbmxpZXJzICs9IGY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWlubGllcnM7XG4gICAgfVxuXG4gICAgcmFuc2FjKHBhcmFtcywga2VybmVsLCBmcm9tLCB0bywgY291bnQsIG1vZGVsLCBtYXNrLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlcnMgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXJzID0gMTAwMDsgfVxuXG4gICAgICAgIGlmIChjb3VudCA8IHBhcmFtcy5zaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1vZGVsX3BvaW50cyA9IHBhcmFtcy5zaXplO1xuICAgICAgICB2YXIgbml0ZXJzID0gbWF4X2l0ZXJzLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBzdWJzZXQwID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOEMxX3QsIG1zX2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGlubGllcnNfbWF4ID0gLTEsIG51bWlubGllcnMgPSAwO1xuICAgICAgICB2YXIgbm1vZGVscyA9IDA7XG5cbiAgICAgICAgdmFyIGVyciA9IGVycl9idWZmLmYzMjtcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKGNvdW50ID09IG1vZGVsX3BvaW50cykge1xuICAgICAgICAgICAgaWYgKGtlcm5lbC5ydW4oZnJvbSwgdG8sIE0sIGNvdW50KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1jb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2suZGF0YVtjb3VudF0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBuaXRlcnM7ICsraXRlcikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3Vic2V0XG4gICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBtb2RlbF9wb2ludHMsIGNvdW50LCBzdWJzZXQwLCBzdWJzZXQxKTtcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5tb2RlbHMgPSBrZXJuZWwucnVuKHN1YnNldDAsIHN1YnNldDEsIE0sIG1vZGVsX3BvaW50cyk7XG4gICAgICAgICAgICBpZiAobm1vZGVscyA8PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBtdWx0aW1vZGVsIG91dHB1dFxuXG4gICAgICAgICAgICBudW1pbmxpZXJzID0gdGhpcy5maW5kX2lubGllcnMoa2VybmVsLCBNLCBmcm9tLCB0bywgY291bnQsIHBhcmFtcy50aHJlc2gsIGVyciwgY3Vycl9tYXNrLmRhdGEpO1xuXG4gICAgICAgICAgICBpZiAobnVtaW5saWVycyA+IE1hdGgubWF4KGlubGllcnNfbWF4LCBtb2RlbF9wb2ludHMgLSAxKSkge1xuICAgICAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICAgICAgaW5saWVyc19tYXggPSBudW1pbmxpZXJzO1xuICAgICAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcbiAgICAgICAgICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKChjb3VudCAtIG51bWlubGllcnMpIC8gY291bnQsIG5pdGVycyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsbWVkcyhwYXJhbXMsIGtlcm5lbCwgZnJvbSwgdG8sIGNvdW50LCBtb2RlbCwgbWFzaywgbWF4X2l0ZXJzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXJzID09PSBcInVuZGVmaW5lZFwiKSB7IG1heF9pdGVycyA9IDEwMDA7IH1cblxuICAgICAgICBpZiAoY291bnQgPCBwYXJhbXMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHZhciBtb2RlbF9wb2ludHMgPSBwYXJhbXMuc2l6ZTtcbiAgICAgICAgdmFyIG5pdGVycyA9IG1heF9pdGVycywgaXRlciA9IDA7XG4gICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9tYXRoID0gbmV3IG1hdGgoKTtcblxuICAgICAgICB2YXIgc3Vic2V0MCA9IFtdO1xuICAgICAgICB2YXIgc3Vic2V0MSA9IFtdO1xuICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICB2YXIgbWMgPSBtb2RlbC5jb2xzLCBtciA9IG1vZGVsLnJvd3M7XG4gICAgICAgIHZhciBkdCA9IG1vZGVsLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgdmFyIG1fYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobWMgKiBtcikgPDwgMyk7XG4gICAgICAgIHZhciBtc19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGNvdW50KTtcbiAgICAgICAgdmFyIGVycl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGNvdW50IDw8IDIpO1xuICAgICAgICB2YXIgTSA9IG5ldyBtYXRyaXhfdChtYywgbXIsIGR0LCBtX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBjdXJyX21hc2sgPSBuZXcgbWF0cml4X3QoY291bnQsIDEsIEpTRkVBVF9DT05TVEFOVFMuVThfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCwgbXNfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgbnVtaW5saWVycyA9IDA7XG4gICAgICAgIHZhciBubW9kZWxzID0gMDtcblxuICAgICAgICB2YXIgZXJyID0gZXJyX2J1ZmYuZjMyO1xuICAgICAgICB2YXIgbWluX21lZGlhbiA9IDEwMDAwMDAwMDAuMCwgc2lnbWEgPSAwLjAsIG1lZGlhbiA9IDAuMDtcblxuICAgICAgICBwYXJhbXMuZXBzID0gMC40NTtcbiAgICAgICAgbml0ZXJzID0gcGFyYW1zLnVwZGF0ZV9pdGVycyhwYXJhbXMuZXBzLCBuaXRlcnMpO1xuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZVxuICAgICAgICBpZiAoY291bnQgPT0gbW9kZWxfcG9pbnRzKSB7XG4gICAgICAgICAgICBpZiAoa2VybmVsLnJ1bihmcm9tLCB0bywgTSwgY291bnQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWNvdW50ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzay5kYXRhW2NvdW50XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG5pdGVyczsgKytpdGVyKSB7XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzdWJzZXRcbiAgICAgICAgICAgIGZvdW5kID0gdGhpcy5nZXRfc3Vic2V0KGtlcm5lbCwgZnJvbSwgdG8sIG1vZGVsX3BvaW50cywgY291bnQsIHN1YnNldDAsIHN1YnNldDEpO1xuICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm1vZGVscyA9IGtlcm5lbC5ydW4oc3Vic2V0MCwgc3Vic2V0MSwgTSwgbW9kZWxfcG9pbnRzKTtcbiAgICAgICAgICAgIGlmIChubW9kZWxzIDw9IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFRPRE8gaGFuZGxlIG11bHRpbW9kZWwgb3V0cHV0XG5cbiAgICAgICAgICAgIGtlcm5lbC5lcnJvcihmcm9tLCB0bywgTSwgZXJyLCBjb3VudCk7XG4gICAgICAgICAgICBtZWRpYW4gPSBfbWF0aC5tZWRpYW4oZXJyLCAwLCBjb3VudCAtIDEpO1xuXG4gICAgICAgICAgICBpZiAobWVkaWFuIDwgbWluX21lZGlhbikge1xuICAgICAgICAgICAgICAgIG1pbl9tZWRpYW4gPSBtZWRpYW47XG4gICAgICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgc2lnbWEgPSAyLjUgKiAxLjQ4MjYgKiAoMSArIDUuMCAvIChjb3VudCAtIG1vZGVsX3BvaW50cykpICogTWF0aC5zcXJ0KG1pbl9tZWRpYW4pO1xuICAgICAgICAgICAgc2lnbWEgPSBNYXRoLm1heChzaWdtYSwgMC4wMDEpO1xuXG4gICAgICAgICAgICBudW1pbmxpZXJzID0gdGhpcy5maW5kX2lubGllcnMoa2VybmVsLCBtb2RlbCwgZnJvbSwgdG8sIGNvdW50LCBzaWdtYSwgZXJyLCBjdXJyX21hc2suZGF0YSk7XG4gICAgICAgICAgICBpZiAobWFzaykgY3Vycl9tYXNrLmNvcHlfdG8obWFzayk7XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IG51bWlubGllcnMgPj0gbW9kZWxfcG9pbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCJpbXBvcnQgbWF0cml4X3QgZnJvbSAnLi4vbWF0cml4X3QvbWF0cml4X3QuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnXG5pbXBvcnQgbWF0bWF0aCBmcm9tICcuLi9tYXRtYXRoL21hdG1hdGguanMnXG5pbXBvcnQgbGluYWxnIGZyb20gJy4uL2xpbmFsZy9saW5hbGcuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcblxuZXhwb3J0IGNsYXNzIG1vdGlvbl9tb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuVDAgPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuVDEgPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuQXRBID0gbmV3IG1hdHJpeF90KDYsIDYsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkF0QiA9IG5ldyBtYXRyaXhfdCg2LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG4gICAgc3FyKHgpIHtcbiAgICAgICAgcmV0dXJuIHggKiB4O1xuICAgIH1cblxuICAgIC8vIGRvZXMgaXNvdHJvcGljIG5vcm1hbGl6YXRpb25cbiAgICBpc29fbm9ybWFsaXplX3BvaW50cyhmcm9tLCB0bywgVDAsIFQxLCBjb3VudCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBjeDAgPSAwLjAsIGN5MCA9IDAuMCwgZDAgPSAwLjAsIHMwID0gMC4wO1xuICAgICAgICB2YXIgY3gxID0gMC4wLCBjeTEgPSAwLjAsIGQxID0gMC4wLCBzMSA9IDAuMDtcbiAgICAgICAgdmFyIGR4ID0gMC4wLCBkeSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGN4MCArPSBmcm9tW2ldLng7XG4gICAgICAgICAgICBjeTAgKz0gZnJvbVtpXS55O1xuICAgICAgICAgICAgY3gxICs9IHRvW2ldLng7XG4gICAgICAgICAgICBjeTEgKz0gdG9baV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN4MCAvPSBjb3VudDsgY3kwIC89IGNvdW50O1xuICAgICAgICBjeDEgLz0gY291bnQ7IGN5MSAvPSBjb3VudDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZHggPSBmcm9tW2ldLnggLSBjeDA7XG4gICAgICAgICAgICBkeSA9IGZyb21baV0ueSAtIGN5MDtcbiAgICAgICAgICAgIGQwICs9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgICAgICBkeCA9IHRvW2ldLnggLSBjeDE7XG4gICAgICAgICAgICBkeSA9IHRvW2ldLnkgLSBjeTE7XG4gICAgICAgICAgICBkMSArPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZDAgLz0gY291bnQ7IGQxIC89IGNvdW50O1xuXG4gICAgICAgIHMwID0gTWF0aC5TUVJUMiAvIGQwOyBzMSA9IE1hdGguU1FSVDIgLyBkMTtcblxuICAgICAgICBUMFswXSA9IFQwWzRdID0gczA7XG4gICAgICAgIFQwWzJdID0gLWN4MCAqIHMwO1xuICAgICAgICBUMFs1XSA9IC1jeTAgKiBzMDtcbiAgICAgICAgVDBbMV0gPSBUMFszXSA9IFQwWzZdID0gVDBbN10gPSAwLjA7XG4gICAgICAgIFQwWzhdID0gMS4wO1xuXG4gICAgICAgIFQxWzBdID0gVDFbNF0gPSBzMTtcbiAgICAgICAgVDFbMl0gPSAtY3gxICogczE7XG4gICAgICAgIFQxWzVdID0gLWN5MSAqIHMxO1xuICAgICAgICBUMVsxXSA9IFQxWzNdID0gVDFbNl0gPSBUMVs3XSA9IDAuMDtcbiAgICAgICAgVDFbOF0gPSAxLjA7XG4gICAgfVxuXG4gICAgaGF2ZV9jb2xsaW5lYXJfcG9pbnRzKHBvaW50cywgY291bnQpIHtcbiAgICAgICAgdmFyIGogPSAwLCBrID0gMCwgaSA9IChjb3VudCAtIDEpIHwgMDtcbiAgICAgICAgdmFyIGR4MSA9IDAuMCwgZHkxID0gMC4wLCBkeDIgPSAwLjAsIGR5MiA9IDAuMDtcblxuICAgICAgICAvLyBjaGVjayB0aGF0IHRoZSBpLXRoIHNlbGVjdGVkIHBvaW50IGRvZXMgbm90IGJlbG9uZ1xuICAgICAgICAvLyB0byBhIGxpbmUgY29ubmVjdGluZyBzb21lIHByZXZpb3VzbHkgc2VsZWN0ZWQgcG9pbnRzXG4gICAgICAgIGZvciAoOyBqIDwgaTsgKytqKSB7XG4gICAgICAgICAgICBkeDEgPSBwb2ludHNbal0ueCAtIHBvaW50c1tpXS54O1xuICAgICAgICAgICAgZHkxID0gcG9pbnRzW2pdLnkgLSBwb2ludHNbaV0ueTtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBqOyArK2spIHtcbiAgICAgICAgICAgICAgICBkeDIgPSBwb2ludHNba10ueCAtIHBvaW50c1tpXS54O1xuICAgICAgICAgICAgICAgIGR5MiA9IHBvaW50c1trXS55IC0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGR4MiAqIGR5MSAtIGR5MiAqIGR4MSkgPD0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogKE1hdGguYWJzKGR4MSkgKyBNYXRoLmFicyhkeTEpICsgTWF0aC5hYnMoZHgyKSArIE1hdGguYWJzKGR5MikpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGNsYXNzIGFmZmluZTJkIGV4dGVuZHMgbW90aW9uX21vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICB9XG4gICAgcnVuKGZyb20sIHRvLCBtb2RlbCwgY291bnQpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBwdDAsIHB0MSwgcHggPSAwLjAsIHB5ID0gMC4wO1xuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBsaW5hbGcoKTtcblxuICAgICAgICB0aGlzLmlzb19ub3JtYWxpemVfcG9pbnRzKGZyb20sIHRvLCB0MGQsIHQxZCwgY291bnQpO1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCAqIDYpIDw8IDMpO1xuICAgICAgICB2YXIgYl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgyICogY291bnQpIDw8IDMpO1xuXG4gICAgICAgIHZhciBhX210ID0gbmV3IG1hdHJpeF90KDYsIDIgKiBjb3VudCwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGJfbXQgPSBuZXcgbWF0cml4X3QoMSwgMiAqIGNvdW50LCBkdCwgYl9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYWQgPSBhX210LmRhdGEsIGJkID0gYl9tdC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHQwID0gZnJvbVtpXTtcbiAgICAgICAgICAgIHB0MSA9IHRvW2ldO1xuXG4gICAgICAgICAgICBweCA9IHQwZFswXSAqIHB0MC54ICsgdDBkWzFdICogcHQwLnkgKyB0MGRbMl07XG4gICAgICAgICAgICBweSA9IHQwZFszXSAqIHB0MC54ICsgdDBkWzRdICogcHQwLnkgKyB0MGRbNV07XG5cbiAgICAgICAgICAgIGogPSBpICogMiAqIDY7XG4gICAgICAgICAgICBhZFtqXSA9IHB4LCBhZFtqICsgMV0gPSBweSwgYWRbaiArIDJdID0gMS4wLCBhZFtqICsgM10gPSAwLjAsIGFkW2ogKyA0XSA9IDAuMCwgYWRbaiArIDVdID0gMC4wO1xuXG4gICAgICAgICAgICBqICs9IDY7XG4gICAgICAgICAgICBhZFtqXSA9IDAuMCwgYWRbaiArIDFdID0gMC4wLCBhZFtqICsgMl0gPSAwLjAsIGFkW2ogKyAzXSA9IHB4LCBhZFtqICsgNF0gPSBweSwgYWRbaiArIDVdID0gMS4wO1xuXG4gICAgICAgICAgICBiZFtpIDw8IDFdID0gdDFkWzBdICogcHQxLnggKyB0MWRbMV0gKiBwdDEueSArIHQxZFsyXTtcbiAgICAgICAgICAgIGJkWyhpIDw8IDEpICsgMV0gPSB0MWRbM10gKiBwdDEueCArIHQxZFs0XSAqIHB0MS55ICsgdDFkWzVdO1xuICAgICAgICB9XG5cbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfQXRBKHRoaXMuQXRBLCBhX210KTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfQXRCKHRoaXMuQXRCLCBhX210LCBiX210KTtcblxuICAgICAgICBfbGluYWxnLmx1X3NvbHZlKHRoaXMuQXRBLCB0aGlzLkF0Qik7XG5cbiAgICAgICAgbWRbMF0gPSB0aGlzLkF0Qi5kYXRhWzBdLCBtZFsxXSA9IHRoaXMuQXRCLmRhdGFbMV0sIG1kWzJdID0gdGhpcy5BdEIuZGF0YVsyXTtcbiAgICAgICAgbWRbM10gPSB0aGlzLkF0Qi5kYXRhWzNdLCBtZFs0XSA9IHRoaXMuQXRCLmRhdGFbNF0sIG1kWzVdID0gdGhpcy5BdEIuZGF0YVs1XTtcbiAgICAgICAgbWRbNl0gPSAwLjAsIG1kWzddID0gMC4wLCBtZFs4XSA9IDEuMDsgLy8gZmlsbCBsYXN0IHJvd1xuXG4gICAgICAgIC8vIGRlbm9ybWFsaXplXG4gICAgICAgIF9tYXRtYXRoLmludmVydF8zeDModGhpcy5UMSwgdGhpcy5UMSk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgdGhpcy5UMSwgbW9kZWwpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIG1vZGVsLCB0aGlzLlQwKTtcblxuICAgICAgICAvLyBmcmVlIGJ1ZmZlclxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJfYnVmZik7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgaG9tb2dyYXBoeTJkIGV4dGVuZHMgbW90aW9uX21vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tTHRMID0gbmV3IG1hdHJpeF90KDksIDksIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkV2ZWMgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgfVxuICAgIHJ1bihmcm9tLCB0bywgbW9kZWwsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBtZCA9IG1vZGVsLmRhdGEsIHQwZCA9IHRoaXMuVDAuZGF0YSwgdDFkID0gdGhpcy5UMS5kYXRhO1xuICAgICAgICB2YXIgTHRMID0gdGhpcy5tTHRMLmRhdGEsIGV2ZCA9IHRoaXMuRXZlYy5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAuMCwgeSA9IDAuMCwgWCA9IDAuMCwgWSA9IDAuMDtcbiAgICAgICAgdmFyIF9saW5hbGcgPSBuZXcgbGluYWxnKCk7XG4gICAgICAgIHZhciBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG5cbiAgICAgICAgLy8gbm9ybVxuICAgICAgICB2YXIgc214ID0gMC4wLCBzbXkgPSAwLjAsIGNteCA9IDAuMCwgY215ID0gMC4wLCBzTXggPSAwLjAsIHNNeSA9IDAuMCwgY014ID0gMC4wLCBjTXkgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjbXggKz0gdG9baV0ueDtcbiAgICAgICAgICAgIGNteSArPSB0b1tpXS55O1xuICAgICAgICAgICAgY014ICs9IGZyb21baV0ueDtcbiAgICAgICAgICAgIGNNeSArPSBmcm9tW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBjbXggLz0gY291bnQ7IGNteSAvPSBjb3VudDtcbiAgICAgICAgY014IC89IGNvdW50OyBjTXkgLz0gY291bnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHNteCArPSBNYXRoLmFicyh0b1tpXS54IC0gY214KTtcbiAgICAgICAgICAgIHNteSArPSBNYXRoLmFicyh0b1tpXS55IC0gY215KTtcbiAgICAgICAgICAgIHNNeCArPSBNYXRoLmFicyhmcm9tW2ldLnggLSBjTXgpO1xuICAgICAgICAgICAgc015ICs9IE1hdGguYWJzKGZyb21baV0ueSAtIGNNeSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoc214KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTlxuICAgICAgICAgICAgfHwgTWF0aC5hYnMoc215KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTlxuICAgICAgICAgICAgfHwgTWF0aC5hYnMoc014KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTlxuICAgICAgICAgICAgfHwgTWF0aC5hYnMoc015KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTikgcmV0dXJuIDA7XG5cbiAgICAgICAgc214ID0gY291bnQgLyBzbXg7IHNteSA9IGNvdW50IC8gc215O1xuICAgICAgICBzTXggPSBjb3VudCAvIHNNeDsgc015ID0gY291bnQgLyBzTXk7XG5cbiAgICAgICAgdDBkWzBdID0gc014OyB0MGRbMV0gPSAwOyB0MGRbMl0gPSAtY014ICogc014O1xuICAgICAgICB0MGRbM10gPSAwOyB0MGRbNF0gPSBzTXk7IHQwZFs1XSA9IC1jTXkgKiBzTXk7XG4gICAgICAgIHQwZFs2XSA9IDA7IHQwZFs3XSA9IDA7IHQwZFs4XSA9IDE7XG5cbiAgICAgICAgdDFkWzBdID0gMS4wIC8gc214OyB0MWRbMV0gPSAwOyB0MWRbMl0gPSBjbXg7XG4gICAgICAgIHQxZFszXSA9IDA7IHQxZFs0XSA9IDEuMCAvIHNteTsgdDFkWzVdID0gY215O1xuICAgICAgICB0MWRbNl0gPSAwOyB0MWRbN10gPSAwOyB0MWRbOF0gPSAxO1xuICAgICAgICAvL1xuXG4gICAgICAgIC8vIGNvbnN0cnVjdCBzeXN0ZW1cbiAgICAgICAgaSA9IDgxO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIEx0TFtpXSA9IDAuMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgeCA9ICh0b1tpXS54IC0gY214KSAqIHNteDtcbiAgICAgICAgICAgIHkgPSAodG9baV0ueSAtIGNteSkgKiBzbXk7XG4gICAgICAgICAgICBYID0gKGZyb21baV0ueCAtIGNNeCkgKiBzTXg7XG4gICAgICAgICAgICBZID0gKGZyb21baV0ueSAtIGNNeSkgKiBzTXk7XG5cbiAgICAgICAgICAgIEx0TFswXSArPSBYICogWDtcbiAgICAgICAgICAgIEx0TFsxXSArPSBYICogWTtcbiAgICAgICAgICAgIEx0TFsyXSArPSBYO1xuXG4gICAgICAgICAgICBMdExbNl0gKz0gWCAqIC14ICogWDtcbiAgICAgICAgICAgIEx0TFs3XSArPSBYICogLXggKiBZO1xuICAgICAgICAgICAgTHRMWzhdICs9IFggKiAteDtcbiAgICAgICAgICAgIEx0TFsxMF0gKz0gWSAqIFk7XG4gICAgICAgICAgICBMdExbMTFdICs9IFk7XG5cbiAgICAgICAgICAgIEx0TFsxNV0gKz0gWSAqIC14ICogWDtcbiAgICAgICAgICAgIEx0TFsxNl0gKz0gWSAqIC14ICogWTtcbiAgICAgICAgICAgIEx0TFsxN10gKz0gWSAqIC14O1xuICAgICAgICAgICAgTHRMWzIwXSArPSAxLjA7XG5cbiAgICAgICAgICAgIEx0TFsyNF0gKz0gLXggKiBYO1xuICAgICAgICAgICAgTHRMWzI1XSArPSAteCAqIFk7XG4gICAgICAgICAgICBMdExbMjZdICs9IC14O1xuICAgICAgICAgICAgTHRMWzMwXSArPSBYICogWDtcbiAgICAgICAgICAgIEx0TFszMV0gKz0gWCAqIFk7XG4gICAgICAgICAgICBMdExbMzJdICs9IFg7XG4gICAgICAgICAgICBMdExbMzNdICs9IFggKiAteSAqIFg7XG4gICAgICAgICAgICBMdExbMzRdICs9IFggKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbMzVdICs9IFggKiAteTtcbiAgICAgICAgICAgIEx0TFs0MF0gKz0gWSAqIFk7XG4gICAgICAgICAgICBMdExbNDFdICs9IFk7XG4gICAgICAgICAgICBMdExbNDJdICs9IFkgKiAteSAqIFg7XG4gICAgICAgICAgICBMdExbNDNdICs9IFkgKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNDRdICs9IFkgKiAteTtcbiAgICAgICAgICAgIEx0TFs1MF0gKz0gMS4wO1xuICAgICAgICAgICAgTHRMWzUxXSArPSAteSAqIFg7XG4gICAgICAgICAgICBMdExbNTJdICs9IC15ICogWTtcbiAgICAgICAgICAgIEx0TFs1M10gKz0gLXk7XG4gICAgICAgICAgICBMdExbNjBdICs9IC14ICogWCAqIC14ICogWCArIC15ICogWCAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFs2MV0gKz0gLXggKiBYICogLXggKiBZICsgLXkgKiBYICogLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzYyXSArPSAteCAqIFggKiAteCArIC15ICogWCAqIC15O1xuICAgICAgICAgICAgTHRMWzcwXSArPSAteCAqIFkgKiAteCAqIFkgKyAteSAqIFkgKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNzFdICs9IC14ICogWSAqIC14ICsgLXkgKiBZICogLXk7XG4gICAgICAgICAgICBMdExbODBdICs9IC14ICogLXggKyAteSAqIC15O1xuICAgICAgICB9XG4gICAgICAgIC8vXG5cbiAgICAgICAgLy8gc3ltbWV0cnlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDk7ICsraSkge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7ICsrailcbiAgICAgICAgICAgICAgICBMdExbaSAqIDkgKyBqXSA9IEx0TFtqICogOSArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgX2xpbmFsZy5laWdlblZWKHRoaXMubUx0TCwgdGhpcy5FdmVjKTtcblxuICAgICAgICBtZFswXSA9IGV2ZFs3Ml0sIG1kWzFdID0gZXZkWzczXSwgbWRbMl0gPSBldmRbNzRdO1xuICAgICAgICBtZFszXSA9IGV2ZFs3NV0sIG1kWzRdID0gZXZkWzc2XSwgbWRbNV0gPSBldmRbNzddO1xuICAgICAgICBtZFs2XSA9IGV2ZFs3OF0sIG1kWzddID0gZXZkWzc5XSwgbWRbOF0gPSBldmRbODBdO1xuXG4gICAgICAgIC8vIGRlbm9ybWFsaXplXG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgdGhpcy5UMSwgbW9kZWwpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIG1vZGVsLCB0aGlzLlQwKTtcblxuICAgICAgICAvLyBzZXQgYm90dG9tIHJpZ2h0IHRvIDEuMFxuICAgICAgICB4ID0gMS4wIC8gbWRbOF07XG4gICAgICAgIG1kWzBdICo9IHg7IG1kWzFdICo9IHg7IG1kWzJdICo9IHg7XG4gICAgICAgIG1kWzNdICo9IHg7IG1kWzRdICo9IHg7IG1kWzVdICo9IHg7XG4gICAgICAgIG1kWzZdICo9IHg7IG1kWzddICo9IHg7IG1kWzhdID0gMS4wO1xuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBlcnJvcihmcm9tLCB0bywgbW9kZWwsIGVyciwgY291bnQpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgcHQwLCBwdDEsIHd3ID0gMC4wLCBkeCA9IDAuMCwgZHkgPSAwLjA7XG4gICAgICAgIHZhciBtID0gbW9kZWwuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHB0MCA9IGZyb21baV07XG4gICAgICAgICAgICBwdDEgPSB0b1tpXTtcblxuICAgICAgICAgICAgd3cgPSAxLjAgLyAobVs2XSAqIHB0MC54ICsgbVs3XSAqIHB0MC55ICsgMS4wKTtcbiAgICAgICAgICAgIGR4ID0gKG1bMF0gKiBwdDAueCArIG1bMV0gKiBwdDAueSArIG1bMl0pICogd3cgLSBwdDEueDtcbiAgICAgICAgICAgIGR5ID0gKG1bM10gKiBwdDAueCArIG1bNF0gKiBwdDAueSArIG1bNV0pICogd3cgLSBwdDEueTtcbiAgICAgICAgICAgIGVycltpXSA9IChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tfc3Vic2V0KGZyb20sIHRvLCBjb3VudCkge1xuICAgICAgICAvLyBzZWVtcyB0byByZWplY3QgZ29vZCBzdWJzZXRzIGFjdHVhbGx5XG4gICAgICAgIC8vaWYoIGhhdmVfY29sbGluZWFyX3BvaW50cyhmcm9tLCBjb3VudCkgfHwgaGF2ZV9jb2xsaW5lYXJfcG9pbnRzKHRvLCBjb3VudCkgKSB7XG4gICAgICAgIC8vcmV0dXJuIGZhbHNlO1xuICAgICAgICAvL31cbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcbiAgICAgICAgaWYgKGNvdW50ID09IDQpIHtcbiAgICAgICAgICAgIHZhciBuZWdhdGl2ZSA9IDA7XG5cbiAgICAgICAgICAgIHZhciBmcDAgPSBmcm9tWzBdLCBmcDEgPSBmcm9tWzFdLCBmcDIgPSBmcm9tWzJdLCBmcDMgPSBmcm9tWzNdO1xuICAgICAgICAgICAgdmFyIHRwMCA9IHRvWzBdLCB0cDEgPSB0b1sxXSwgdHAyID0gdG9bMl0sIHRwMyA9IHRvWzNdO1xuXG4gICAgICAgICAgICAvLyBzZXQxXG4gICAgICAgICAgICB2YXIgQTExID0gZnAwLngsIEExMiA9IGZwMC55LCBBMTMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQTIxID0gZnAxLngsIEEyMiA9IGZwMS55LCBBMjMgPSAxLjA7XG4gICAgICAgICAgICB2YXIgQTMxID0gZnAyLngsIEEzMiA9IGZwMi55LCBBMzMgPSAxLjA7XG5cbiAgICAgICAgICAgIHZhciBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnksIEIxMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBCMjEgPSB0cDEueCwgQjIyID0gdHAxLnksIEIyMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBCMzEgPSB0cDIueCwgQjMyID0gdHAyLnksIEIzMyA9IDEuMDtcblxuICAgICAgICAgICAgdmFyIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICB2YXIgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0MlxuICAgICAgICAgICAgQTExID0gZnAxLngsIEExMiA9IGZwMS55O1xuICAgICAgICAgICAgQTIxID0gZnAyLngsIEEyMiA9IGZwMi55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDEueCwgQjEyID0gdHAxLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDIueCwgQjIyID0gdHAyLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQzXG4gICAgICAgICAgICBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDIueCwgQTIyID0gZnAyLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMi54LCBCMjIgPSB0cDIueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDRcbiAgICAgICAgICAgIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMS54LCBBMjIgPSBmcDEueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAwLngsIEIxMiA9IHRwMC55O1xuICAgICAgICAgICAgQjIxID0gdHAxLngsIEIyMiA9IHRwMS55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgaWYgKG5lZ2F0aXZlICE9IDAgJiYgbmVnYXRpdmUgIT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gYWxsIGdvb2RcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmFuc2FjX3BhcmFtc190IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCB0aHJlc2gsIGVwcywgcHJvYikge1xuICAgICAgICBpZiAodHlwZW9mIHNpemUgPT09IFwidW5kZWZpbmVkXCIpIHsgc2l6ZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aHJlc2ggPT09IFwidW5kZWZpbmVkXCIpIHsgdGhyZXNoID0gMC41OyB9XG4gICAgICAgIGlmICh0eXBlb2YgZXBzID09PSBcInVuZGVmaW5lZFwiKSB7IGVwcyA9IDAuNTsgfVxuICAgICAgICBpZiAodHlwZW9mIHByb2IgPT09IFwidW5kZWZpbmVkXCIpIHsgcHJvYiA9IDAuOTk7IH1cblxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnRocmVzaCA9IHRocmVzaDtcbiAgICAgICAgdGhpcy5lcHMgPSBlcHM7XG4gICAgICAgIHRoaXMucHJvYiA9IHByb2I7XG4gICAgfTtcbiAgICB1cGRhdGVfaXRlcnMoX2VwcywgbWF4X2l0ZXJzKSB7XG4gICAgICAgIHZhciBudW0gPSBNYXRoLmxvZygxIC0gdGhpcy5wcm9iKTtcbiAgICAgICAgdmFyIGRlbm9tID0gTWF0aC5sb2coMSAtIE1hdGgucG93KDEgLSBfZXBzLCB0aGlzLnNpemUpKTtcbiAgICAgICAgcmV0dXJuIChkZW5vbSA+PSAwIHx8IC1udW0gPj0gbWF4X2l0ZXJzICogKC1kZW5vbSkgPyBtYXhfaXRlcnMgOiBNYXRoLnJvdW5kKG51bSAvIGRlbm9tKSkgfCAwO1xuICAgIH1cbn07IiwiaW1wb3J0IGRhdGFfdCBmcm9tICcuL2RhdGFfdC5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9wb29sX25vZGVfdCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZV9pbl9ieXRlcykge1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbiAgICByZXNpemUoc2l6ZV9pbl9ieXRlcykge1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBkYXRhX3QgIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzLCBidWZmZXIpIHtcbiAgICAgICAgLy9zdXBlcigpXG4gICAgICAgIC8vIHdlIG5lZWQgYWxpZ24gc2l6ZSB0byBtdWx0aXBsZSBvZiA4XG4gICAgICAgIHRoaXMuc2l6ZSA9ICgoc2l6ZV9pbl9ieXRlcyArIDcpIHwgMCkgJiAtODtcbiAgICAgICAgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuc2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51OCA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5pMzIgPSBuZXcgSW50MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjMyID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjY0ID0gbmV3IEZsb2F0NjRBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBiaXRfcGF0dGVybl8zMSA9IFtcbiAgICA4LC0zLCA5LDUvKm1lYW4gKDApLCBjb3JyZWxhdGlvbiAoMCkqLyxcbiAgICA0LDIsIDcsLTEyLyptZWFuICgxLjEyNDYxZS0wNSksIGNvcnJlbGF0aW9uICgwLjA0Mzc1ODQpKi8sXG4gICAgLTExLDksIC04LDIvKm1lYW4gKDMuMzczODJlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYxNzQwOSkqLyxcbiAgICA3LC0xMiwgMTIsLTEzLyptZWFuICg1LjYyMzAzZS0wNSksIGNvcnJlbGF0aW9uICgwLjA2MzY5NzcpKi8sXG4gICAgMiwtMTMsIDIsMTIvKm1lYW4gKDAuMDAwMTM0OTUzKSwgY29ycmVsYXRpb24gKDAuMDg1MDk5KSovLFxuICAgIDEsLTcsIDEsNi8qbWVhbiAoMC4wMDA1Mjg1NjUpLCBjb3JyZWxhdGlvbiAoMC4wODU3MTc1KSovLFxuICAgIC0yLC0xMCwgLTIsLTQvKm1lYW4gKDAuMDE4ODgyMSksIGNvcnJlbGF0aW9uICgwLjA5ODU3NzQpKi8sXG4gICAgLTEzLC0xMywgLTExLC04LyptZWFuICgwLjAzNjMxMzUpLCBjb3JyZWxhdGlvbiAoMC4wODk5NjE2KSovLFxuICAgIC0xMywtMywgLTEyLC05LyptZWFuICgwLjEyMTgwNiksIGNvcnJlbGF0aW9uICgwLjA5OTg0OSkqLyxcbiAgICAxMCw0LCAxMSw5LyptZWFuICgwLjEyMjA2NSksIGNvcnJlbGF0aW9uICgwLjA5MzI4NSkqLyxcbiAgICAtMTMsLTgsIC04LC05LyptZWFuICgwLjE2Mjc4NyksIGNvcnJlbGF0aW9uICgwLjA5NDI3NDgpKi8sXG4gICAgLTExLDcsIC05LDEyLyptZWFuICgwLjIxNTYxKSwgY29ycmVsYXRpb24gKDAuMDk3NDQzOCkqLyxcbiAgICA3LDcsIDEyLDYvKm1lYW4gKDAuMTYwNTgzKSwgY29ycmVsYXRpb24gKDAuMTMwMDY0KSovLFxuICAgIC00LC01LCAtMywwLyptZWFuICgwLjIyODE3MSksIGNvcnJlbGF0aW9uICgwLjEzMjk5OCkqLyxcbiAgICAtMTMsMiwgLTEyLC0zLyptZWFuICgwLjAwOTk3NTI2KSwgY29ycmVsYXRpb24gKDAuMTQ1OTI2KSovLFxuICAgIC05LDAsIC03LDUvKm1lYW4gKDAuMTk4MjM0KSwgY29ycmVsYXRpb24gKDAuMTQzNjM2KSovLFxuICAgIDEyLC02LCAxMiwtMS8qbWVhbiAoMC4wNjc2MjI2KSwgY29ycmVsYXRpb24gKDAuMTY2ODkpKi8sXG4gICAgLTMsNiwgLTIsMTIvKm1lYW4gKDAuMTY2ODQ3KSwgY29ycmVsYXRpb24gKDAuMTcxNjgyKSovLFxuICAgIC02LC0xMywgLTQsLTgvKm1lYW4gKDAuMTAxMjE1KSwgY29ycmVsYXRpb24gKDAuMTc5NzE2KSovLFxuICAgIDExLC0xMywgMTIsLTgvKm1lYW4gKDAuMjAwNjQxKSwgY29ycmVsYXRpb24gKDAuMTkyMjc5KSovLFxuICAgIDQsNywgNSwxLyptZWFuICgwLjIwNTEwNiksIGNvcnJlbGF0aW9uICgwLjE4Njg0OCkqLyxcbiAgICA1LC0zLCAxMCwtMy8qbWVhbiAoMC4yMzQ5MDgpLCBjb3JyZWxhdGlvbiAoMC4xOTIzMTkpKi8sXG4gICAgMywtNywgNiwxMi8qbWVhbiAoMC4wNzA5OTY0KSwgY29ycmVsYXRpb24gKDAuMjEwODcyKSovLFxuICAgIC04LC03LCAtNiwtMi8qbWVhbiAoMC4wOTM5ODM0KSwgY29ycmVsYXRpb24gKDAuMjEyNTg5KSovLFxuICAgIC0yLDExLCAtMSwtMTAvKm1lYW4gKDAuMTI3Nzc4KSwgY29ycmVsYXRpb24gKDAuMjA4NjYpKi8sXG4gICAgLTEzLDEyLCAtOCwxMC8qbWVhbiAoMC4xNDc4MyksIGNvcnJlbGF0aW9uICgwLjIwNjM1NikqLyxcbiAgICAtNywzLCAtNSwtMy8qbWVhbiAoMC4xODIxNDEpLCBjb3JyZWxhdGlvbiAoMC4xOTg5NDIpKi8sXG4gICAgLTQsMiwgLTMsNy8qbWVhbiAoMC4xODgyMzcpLCBjb3JyZWxhdGlvbiAoMC4yMTM4NCkqLyxcbiAgICAtMTAsLTEyLCAtNiwxMS8qbWVhbiAoMC4xNDg2NSksIGNvcnJlbGF0aW9uICgwLjIzNTcxKSovLFxuICAgIDUsLTEyLCA2LC03LyptZWFuICgwLjIyMjMxMiksIGNvcnJlbGF0aW9uICgwLjIzMzI0KSovLFxuICAgIDUsLTYsIDcsLTEvKm1lYW4gKDAuMjI5MDgyKSwgY29ycmVsYXRpb24gKDAuMjMzODkpKi8sXG4gICAgMSwwLCA0LC01LyptZWFuICgwLjI0MTU3NyksIGNvcnJlbGF0aW9uICgwLjIxNTI4NikqLyxcbiAgICA5LDExLCAxMSwtMTMvKm1lYW4gKDAuMDAzMzg1MDcpLCBjb3JyZWxhdGlvbiAoMC4yNTEzNzMpKi8sXG4gICAgNCw3LCA0LDEyLyptZWFuICgwLjEzMTAwNSksIGNvcnJlbGF0aW9uICgwLjI1NzYyMikqLyxcbiAgICAyLC0xLCA0LDQvKm1lYW4gKDAuMTUyNzU1KSwgY29ycmVsYXRpb24gKDAuMjU1MjA1KSovLFxuICAgIC00LC0xMiwgLTIsNy8qbWVhbiAoMC4xODI3NzEpLCBjb3JyZWxhdGlvbiAoMC4yNDQ4NjcpKi8sXG4gICAgLTgsLTUsIC03LC0xMC8qbWVhbiAoMC4xODY4OTgpLCBjb3JyZWxhdGlvbiAoMC4yMzkwMSkqLyxcbiAgICA0LDExLCA5LDEyLyptZWFuICgwLjIyNjIyNiksIGNvcnJlbGF0aW9uICgwLjI1ODI1NSkqLyxcbiAgICAwLC04LCAxLC0xMy8qbWVhbiAoMC4wODk3ODg2KSwgY29ycmVsYXRpb24gKDAuMjc0ODI3KSovLFxuICAgIC0xMywtMiwgLTgsMi8qbWVhbiAoMC4xNDg3NzQpLCBjb3JyZWxhdGlvbiAoMC4yODA2NSkqLyxcbiAgICAtMywtMiwgLTIsMy8qbWVhbiAoMC4xNTMwNDgpLCBjb3JyZWxhdGlvbiAoMC4yODMwNjMpKi8sXG4gICAgLTYsOSwgLTQsLTkvKm1lYW4gKDAuMTY5NTIzKSwgY29ycmVsYXRpb24gKDAuMjc4MjQ4KSovLFxuICAgIDgsMTIsIDEwLDcvKm1lYW4gKDAuMjI1MzM3KSwgY29ycmVsYXRpb24gKDAuMjgyODUxKSovLFxuICAgIDAsOSwgMSwzLyptZWFuICgwLjIyNjY4NyksIGNvcnJlbGF0aW9uICgwLjI3ODczNCkqLyxcbiAgICA3LC01LCAxMSwtMTAvKm1lYW4gKDAuMDA2OTM4ODIpLCBjb3JyZWxhdGlvbiAoMC4zMDUxNjEpKi8sXG4gICAgLTEzLC02LCAtMTEsMC8qbWVhbiAoMC4wMjI3MjgzKSwgY29ycmVsYXRpb24gKDAuMzAwMTgxKSovLFxuICAgIDEwLDcsIDEyLDEvKm1lYW4gKDAuMTI1NTE3KSwgY29ycmVsYXRpb24gKDAuMzEwODkpKi8sXG4gICAgLTYsLTMsIC02LDEyLyptZWFuICgwLjEzMTc0OCksIGNvcnJlbGF0aW9uICgwLjMxMjc3OSkqLyxcbiAgICAxMCwtOSwgMTIsLTQvKm1lYW4gKDAuMTQ0ODI3KSwgY29ycmVsYXRpb24gKDAuMjkyNzk3KSovLFxuICAgIC0xMyw4LCAtOCwtMTIvKm1lYW4gKDAuMTQ5MjAyKSwgY29ycmVsYXRpb24gKDAuMzA4OTE4KSovLFxuICAgIC0xMywwLCAtOCwtNC8qbWVhbiAoMC4xNjA5MDkpLCBjb3JyZWxhdGlvbiAoMC4zMTAwMTMpKi8sXG4gICAgMywzLCA3LDgvKm1lYW4gKDAuMTc3NzU1KSwgY29ycmVsYXRpb24gKDAuMzA5Mzk0KSovLFxuICAgIDUsNywgMTAsLTcvKm1lYW4gKDAuMjEyMzM3KSwgY29ycmVsYXRpb24gKDAuMzEwMzE1KSovLFxuICAgIC0xLDcsIDEsLTEyLyptZWFuICgwLjIxNDQyOSksIGNvcnJlbGF0aW9uICgwLjMxMTkzMykqLyxcbiAgICAzLC0xMCwgNSw2LyptZWFuICgwLjIzNTgwNyksIGNvcnJlbGF0aW9uICgwLjMxMzEwNCkqLyxcbiAgICAyLC00LCAzLC0xMC8qbWVhbiAoMC4wMDQ5NDgyNyksIGNvcnJlbGF0aW9uICgwLjM0NDk0OCkqLyxcbiAgICAtMTMsMCwgLTEzLDUvKm1lYW4gKDAuMDU0OTE0NSksIGNvcnJlbGF0aW9uICgwLjM0NDY3NSkqLyxcbiAgICAtMTMsLTcsIC0xMiwxMi8qbWVhbiAoMC4xMDMzODUpLCBjb3JyZWxhdGlvbiAoMC4zNDI3MTUpKi8sXG4gICAgLTEzLDMsIC0xMSw4LyptZWFuICgwLjEzNDIyMiksIGNvcnJlbGF0aW9uICgwLjMyMjkyMikqLyxcbiAgICAtNywxMiwgLTQsNy8qbWVhbiAoMC4xNTMyODQpLCBjb3JyZWxhdGlvbiAoMC4zMzcwNjEpKi8sXG4gICAgNiwtMTAsIDEyLDgvKm1lYW4gKDAuMTU0ODgxKSwgY29ycmVsYXRpb24gKDAuMzI5MjU3KSovLFxuICAgIC05LC0xLCAtNywtNi8qbWVhbiAoMC4yMDA5NjcpLCBjb3JyZWxhdGlvbiAoMC4zMzMxMikqLyxcbiAgICAtMiwtNSwgMCwxMi8qbWVhbiAoMC4yMDE1MTgpLCBjb3JyZWxhdGlvbiAoMC4zNDA2MzUpKi8sXG4gICAgLTEyLDUsIC03LDUvKm1lYW4gKDAuMjA3ODA1KSwgY29ycmVsYXRpb24gKDAuMzM1NjMxKSovLFxuICAgIDMsLTEwLCA4LC0xMy8qbWVhbiAoMC4yMjQ0MzgpLCBjb3JyZWxhdGlvbiAoMC4zNDUwNCkqLyxcbiAgICAtNywtNywgLTQsNS8qbWVhbiAoMC4yMzkzNjEpLCBjb3JyZWxhdGlvbiAoMC4zMzgwNTMpKi8sXG4gICAgLTMsLTIsIC0xLC03LyptZWFuICgwLjI0MDc0NCksIGNvcnJlbGF0aW9uICgwLjM0NDMyMikqLyxcbiAgICAyLDksIDUsLTExLyptZWFuICgwLjI0Mjk0OSksIGNvcnJlbGF0aW9uICgwLjM0MTQ1KSovLFxuICAgIC0xMSwtMTMsIC01LC0xMy8qbWVhbiAoMC4yNDQwMjgpLCBjb3JyZWxhdGlvbiAoMC4zMzY4NjEpKi8sXG4gICAgLTEsNiwgMCwtMS8qbWVhbiAoMC4yNDc1NzEpLCBjb3JyZWxhdGlvbiAoMC4zNDM2ODQpKi8sXG4gICAgNSwtMywgNSwyLyptZWFuICgwLjAwMDY5NzI1NiksIGNvcnJlbGF0aW9uICgwLjM1NzI2NSkqLyxcbiAgICAtNCwtMTMsIC00LDEyLyptZWFuICgwLjAwMjEzNjc1KSwgY29ycmVsYXRpb24gKDAuMzczODI3KSovLFxuICAgIC05LC02LCAtOSw2LyptZWFuICgwLjAxMjY4NTYpLCBjb3JyZWxhdGlvbiAoMC4zNzM5MzgpKi8sXG4gICAgLTEyLC0xMCwgLTgsLTQvKm1lYW4gKDAuMDE1MjQ5NyksIGNvcnJlbGF0aW9uICgwLjM2NDIzNykqLyxcbiAgICAxMCwyLCAxMiwtMy8qbWVhbiAoMC4wMjk5OTMzKSwgY29ycmVsYXRpb24gKDAuMzQ1MjkyKSovLFxuICAgIDcsMTIsIDEyLDEyLyptZWFuICgwLjAzMDcyNDIpLCBjb3JyZWxhdGlvbiAoMC4zNjYyOTkpKi8sXG4gICAgLTcsLTEzLCAtNiw1LyptZWFuICgwLjA1MzQ5NzUpLCBjb3JyZWxhdGlvbiAoMC4zNjgzNTcpKi8sXG4gICAgLTQsOSwgLTMsNC8qbWVhbiAoMC4wOTk4NjUpLCBjb3JyZWxhdGlvbiAoMC4zNzIyNzYpKi8sXG4gICAgNywtMSwgMTIsMi8qbWVhbiAoMC4xMTcwODMpLCBjb3JyZWxhdGlvbiAoMC4zNjQ1MjkpKi8sXG4gICAgLTcsNiwgLTUsMS8qbWVhbiAoMC4xMjYxMjUpLCBjb3JyZWxhdGlvbiAoMC4zNjk2MDYpKi8sXG4gICAgLTEzLDExLCAtMTIsNS8qbWVhbiAoMC4xMzAzNjQpLCBjb3JyZWxhdGlvbiAoMC4zNTg1MDIpKi8sXG4gICAgLTMsNywgLTIsLTYvKm1lYW4gKDAuMTMxNjkxKSwgY29ycmVsYXRpb24gKDAuMzc1NTMxKSovLFxuICAgIDcsLTgsIDEyLC03LyptZWFuICgwLjE2MDE2NiksIGNvcnJlbGF0aW9uICgwLjM3OTUwOCkqLyxcbiAgICAtMTMsLTcsIC0xMSwtMTIvKm1lYW4gKDAuMTY3ODQ4KSwgY29ycmVsYXRpb24gKDAuMzUzMzQzKSovLFxuICAgIDEsLTMsIDEyLDEyLyptZWFuICgwLjE4MzM3OCksIGNvcnJlbGF0aW9uICgwLjM3MTkxNikqLyxcbiAgICAyLC02LCAzLDAvKm1lYW4gKDAuMjI4NzExKSwgY29ycmVsYXRpb24gKDAuMzcxNzYxKSovLFxuICAgIC00LDMsIC0yLC0xMy8qbWVhbiAoMC4yNDcyMTEpLCBjb3JyZWxhdGlvbiAoMC4zNjQwNjMpKi8sXG4gICAgLTEsLTEzLCAxLDkvKm1lYW4gKDAuMjQ5MzI1KSwgY29ycmVsYXRpb24gKDAuMzc4MTM5KSovLFxuICAgIDcsMSwgOCwtNi8qbWVhbiAoMC4wMDA2NTIyNzIpLCBjb3JyZWxhdGlvbiAoMC40MTE2ODIpKi8sXG4gICAgMSwtMSwgMywxMi8qbWVhbiAoMC4wMDI0ODUzOCksIGNvcnJlbGF0aW9uICgwLjM5Mjk4OCkqLyxcbiAgICA5LDEsIDEyLDYvKm1lYW4gKDAuMDIwNjgxNSksIGNvcnJlbGF0aW9uICgwLjM4NjEwNikqLyxcbiAgICAtMSwtOSwgLTEsMy8qbWVhbiAoMC4wMzY0NDg1KSwgY29ycmVsYXRpb24gKDAuNDEwNzUyKSovLFxuICAgIC0xMywtMTMsIC0xMCw1LyptZWFuICgwLjAzNzYwNjgpLCBjb3JyZWxhdGlvbiAoMC4zOTgzNzQpKi8sXG4gICAgNyw3LCAxMCwxMi8qbWVhbiAoMC4wNDI0MjAyKSwgY29ycmVsYXRpb24gKDAuNDA1NjYzKSovLFxuICAgIDEyLC01LCAxMiw5LyptZWFuICgwLjA5NDI2NDUpLCBjb3JyZWxhdGlvbiAoMC40MTA0MjIpKi8sXG4gICAgNiwzLCA3LDExLyptZWFuICgwLjEwNzQpLCBjb3JyZWxhdGlvbiAoMC40MTMyMjQpKi8sXG4gICAgNSwtMTMsIDYsMTAvKm1lYW4gKDAuMTA5MjU2KSwgY29ycmVsYXRpb24gKDAuNDA4NjQ2KSovLFxuICAgIDIsLTEyLCAyLDMvKm1lYW4gKDAuMTMxNjkxKSwgY29ycmVsYXRpb24gKDAuNDE2MDc2KSovLFxuICAgIDMsOCwgNCwtNi8qbWVhbiAoMC4xNjUwODEpLCBjb3JyZWxhdGlvbiAoMC40MTc1NjkpKi8sXG4gICAgMiw2LCAxMiwtMTMvKm1lYW4gKDAuMTcxODc0KSwgY29ycmVsYXRpb24gKDAuNDA4NDcxKSovLFxuICAgIDksLTEyLCAxMCwzLyptZWFuICgwLjE3NTE0NiksIGNvcnJlbGF0aW9uICgwLjQxMjk2KSovLFxuICAgIC04LDQsIC03LDkvKm1lYW4gKDAuMTgzNjgyKSwgY29ycmVsYXRpb24gKDAuNDAyOTU2KSovLFxuICAgIC0xMSwxMiwgLTQsLTYvKm1lYW4gKDAuMTg0NjcyKSwgY29ycmVsYXRpb24gKDAuNDE2MTI1KSovLFxuICAgIDEsMTIsIDIsLTgvKm1lYW4gKDAuMTkxNDg3KSwgY29ycmVsYXRpb24gKDAuMzg2Njk2KSovLFxuICAgIDYsLTksIDcsLTQvKm1lYW4gKDAuMTkyNjY4KSwgY29ycmVsYXRpb24gKDAuMzk0NzcxKSovLFxuICAgIDIsMywgMywtMi8qbWVhbiAoMC4yMDAxNTcpLCBjb3JyZWxhdGlvbiAoMC40MDgzMDMpKi8sXG4gICAgNiwzLCAxMSwwLyptZWFuICgwLjIwNDU4OCksIGNvcnJlbGF0aW9uICgwLjQxMTc2MikqLyxcbiAgICAzLC0zLCA4LC04LyptZWFuICgwLjIwNTkwNCksIGNvcnJlbGF0aW9uICgwLjQxNjI5NCkqLyxcbiAgICA3LDgsIDksMy8qbWVhbiAoMC4yMTMyMzcpLCBjb3JyZWxhdGlvbiAoMC40MDkzMDYpKi8sXG4gICAgLTExLC01LCAtNiwtNC8qbWVhbiAoMC4yNDM0NDQpLCBjb3JyZWxhdGlvbiAoMC4zOTUwNjkpKi8sXG4gICAgLTEwLDExLCAtNSwxMC8qbWVhbiAoMC4yNDc2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTMzOTIpKi8sXG4gICAgLTUsLTgsIC0zLDEyLyptZWFuICgwLjI0Nzc0KSwgY29ycmVsYXRpb24gKDAuNDExNDE2KSovLFxuICAgIC0xMCw1LCAtOSwwLyptZWFuICgwLjAwMjEzNjc1KSwgY29ycmVsYXRpb24gKDAuNDU0MDAzKSovLFxuICAgIDgsLTEsIDEyLC02LyptZWFuICgwLjAyOTM2MzUpLCBjb3JyZWxhdGlvbiAoMC40NTUzNjgpKi8sXG4gICAgNCwtNiwgNiwtMTEvKm1lYW4gKDAuMDQwNDk3MSksIGNvcnJlbGF0aW9uICgwLjQ1NzM5MykqLyxcbiAgICAtMTAsMTIsIC04LDcvKm1lYW4gKDAuMDQ4MTEwNyksIGNvcnJlbGF0aW9uICgwLjQ0ODM2NCkqLyxcbiAgICA0LC0yLCA2LDcvKm1lYW4gKDAuMDUwNjQxKSwgY29ycmVsYXRpb24gKDAuNDU1MDE5KSovLFxuICAgIC0yLDAsIC0yLDEyLyptZWFuICgwLjA1MjU5NzgpLCBjb3JyZWxhdGlvbiAoMC40NDMzOCkqLyxcbiAgICAtNSwtOCwgLTUsMi8qbWVhbiAoMC4wNjI5NjY3KSwgY29ycmVsYXRpb24gKDAuNDU3MDk2KSovLFxuICAgIDcsLTYsIDEwLDEyLyptZWFuICgwLjA2NTM4NDYpLCBjb3JyZWxhdGlvbiAoMC40NDU2MjMpKi8sXG4gICAgLTksLTEzLCAtOCwtOC8qbWVhbiAoMC4wODU4NzQ5KSwgY29ycmVsYXRpb24gKDAuNDQ5Nzg5KSovLFxuICAgIC01LC0xMywgLTUsLTIvKm1lYW4gKDAuMTIyNDAyKSwgY29ycmVsYXRpb24gKDAuNDUwMjAxKSovLFxuICAgIDgsLTgsIDksLTEzLyptZWFuICgwLjEyNTQxNiksIGNvcnJlbGF0aW9uICgwLjQ1MzIyNCkqLyxcbiAgICAtOSwtMTEsIC05LDAvKm1lYW4gKDAuMTMwMTI4KSwgY29ycmVsYXRpb24gKDAuNDU4NzI0KSovLFxuICAgIDEsLTgsIDEsLTIvKm1lYW4gKDAuMTMyNDY3KSwgY29ycmVsYXRpb24gKDAuNDQwMTMzKSovLFxuICAgIDcsLTQsIDksMS8qbWVhbiAoMC4xMzI2OTIpLCBjb3JyZWxhdGlvbiAoMC40NTQpKi8sXG4gICAgLTIsMSwgLTEsLTQvKm1lYW4gKDAuMTM1Njk1KSwgY29ycmVsYXRpb24gKDAuNDU1NzM5KSovLFxuICAgIDExLC02LCAxMiwtMTEvKm1lYW4gKDAuMTQyOTA0KSwgY29ycmVsYXRpb24gKDAuNDQ2MTE0KSovLFxuICAgIC0xMiwtOSwgLTYsNC8qbWVhbiAoMC4xNDYxNjUpLCBjb3JyZWxhdGlvbiAoMC40NTE0NzMpKi8sXG4gICAgMyw3LCA3LDEyLyptZWFuICgwLjE0NzYyNyksIGNvcnJlbGF0aW9uICgwLjQ1NjY0MykqLyxcbiAgICA1LDUsIDEwLDgvKm1lYW4gKDAuMTUyOTAxKSwgY29ycmVsYXRpb24gKDAuNDU1MDM2KSovLFxuICAgIDAsLTQsIDIsOC8qbWVhbiAoMC4xNjcwODMpLCBjb3JyZWxhdGlvbiAoMC40NTkzMTUpKi8sXG4gICAgLTksMTIsIC01LC0xMy8qbWVhbiAoMC4xNzMyMzQpLCBjb3JyZWxhdGlvbiAoMC40NTQ3MDYpKi8sXG4gICAgMCw3LCAyLDEyLyptZWFuICgwLjE4MzEyKSwgY29ycmVsYXRpb24gKDAuNDMzODU1KSovLFxuICAgIC0xLDIsIDEsNy8qbWVhbiAoMC4xODU1MDQpLCBjb3JyZWxhdGlvbiAoMC40NDM4MzgpKi8sXG4gICAgNSwxMSwgNywtOS8qbWVhbiAoMC4xODU3MDYpLCBjb3JyZWxhdGlvbiAoMC40NTExMjMpKi8sXG4gICAgMyw1LCA2LC04LyptZWFuICgwLjE4ODk2OCksIGNvcnJlbGF0aW9uICgwLjQ1NTgwOCkqLyxcbiAgICAtMTMsLTQsIC04LDkvKm1lYW4gKDAuMTkxNjY3KSwgY29ycmVsYXRpb24gKDAuNDU5MTI4KSovLFxuICAgIC01LDksIC0zLC0zLyptZWFuICgwLjE5MzE5NiksIGNvcnJlbGF0aW9uICgwLjQ1ODM2NCkqLyxcbiAgICAtNCwtNywgLTMsLTEyLyptZWFuICgwLjE5NjUzNiksIGNvcnJlbGF0aW9uICgwLjQ1NTc4MikqLyxcbiAgICA2LDUsIDgsMC8qbWVhbiAoMC4xOTcyKSwgY29ycmVsYXRpb24gKDAuNDUwNDgxKSovLFxuICAgIC03LDYsIC02LDEyLyptZWFuICgwLjE5OTQzOCksIGNvcnJlbGF0aW9uICgwLjQ1ODE1NikqLyxcbiAgICAtMTMsNiwgLTUsLTIvKm1lYW4gKDAuMjExMjI0KSwgY29ycmVsYXRpb24gKDAuNDQ5NTQ4KSovLFxuICAgIDEsLTEwLCAzLDEwLyptZWFuICgwLjIxMTcxOCksIGNvcnJlbGF0aW9uICgwLjQ0MDYwNikqLyxcbiAgICA0LDEsIDgsLTQvKm1lYW4gKDAuMjEzMDM0KSwgY29ycmVsYXRpb24gKDAuNDQzMTc3KSovLFxuICAgIC0yLC0yLCAyLC0xMy8qbWVhbiAoMC4yMzQzMzQpLCBjb3JyZWxhdGlvbiAoMC40NTUzMDQpKi8sXG4gICAgMiwtMTIsIDEyLDEyLyptZWFuICgwLjIzNTY4NCksIGNvcnJlbGF0aW9uICgwLjQ0MzQzNikqLyxcbiAgICAtMiwtMTMsIDAsLTYvKm1lYW4gKDAuMjM3Njc0KSwgY29ycmVsYXRpb24gKDAuNDUyNTI1KSovLFxuICAgIDQsMSwgOSwzLyptZWFuICgwLjIzOTYyKSwgY29ycmVsYXRpb24gKDAuNDQ0ODI0KSovLFxuICAgIC02LC0xMCwgLTMsLTUvKm1lYW4gKDAuMjQ4NDU5KSwgY29ycmVsYXRpb24gKDAuNDM5NjIxKSovLFxuICAgIC0zLC0xMywgLTEsMS8qbWVhbiAoMC4yNDk1MDUpLCBjb3JyZWxhdGlvbiAoMC40NTY2NjYpKi8sXG4gICAgNyw1LCAxMiwtMTEvKm1lYW4gKDAuMDAxMTkyMDgpLCBjb3JyZWxhdGlvbiAoMC40OTU0NjYpKi8sXG4gICAgNCwtMiwgNSwtNy8qbWVhbiAoMC4wMDM3MjI0NSksIGNvcnJlbGF0aW9uICgwLjQ4NDIxNCkqLyxcbiAgICAtMTMsOSwgLTksLTUvKm1lYW4gKDAuMDA3NDExMTYpLCBjb3JyZWxhdGlvbiAoMC40OTk4NTQpKi8sXG4gICAgNywxLCA4LDYvKm1lYW4gKDAuMDIwODk1MiksIGNvcnJlbGF0aW9uICgwLjQ5OTc3MykqLyxcbiAgICA3LC04LCA3LDYvKm1lYW4gKDAuMDIyMDA4NSksIGNvcnJlbGF0aW9uICgwLjUwMTYwOSkqLyxcbiAgICAtNywtNCwgLTcsMS8qbWVhbiAoMC4wMjMzODA2KSwgY29ycmVsYXRpb24gKDAuNDk2NTY4KSovLFxuICAgIC04LDExLCAtNywtOC8qbWVhbiAoMC4wMjM2NTA1KSwgY29ycmVsYXRpb24gKDAuNDg5NzE5KSovLFxuICAgIC0xMyw2LCAtMTIsLTgvKm1lYW4gKDAuMDI2ODc4MSksIGNvcnJlbGF0aW9uICgwLjUwMzQ4NykqLyxcbiAgICAyLDQsIDMsOS8qbWVhbiAoMC4wMzIzMzI0KSwgY29ycmVsYXRpb24gKDAuNTAxOTM4KSovLFxuICAgIDEwLC01LCAxMiwzLyptZWFuICgwLjAzOTkyMzUpLCBjb3JyZWxhdGlvbiAoMC40OTQwMjkpKi8sXG4gICAgLTYsLTUsIC02LDcvKm1lYW4gKDAuMDQyMDE1MyksIGNvcnJlbGF0aW9uICgwLjQ4NjU3OSkqLyxcbiAgICA4LC0zLCA5LC04LyptZWFuICgwLjA1NDgwMjEpLCBjb3JyZWxhdGlvbiAoMC40ODQyMzcpKi8sXG4gICAgMiwtMTIsIDIsOC8qbWVhbiAoMC4wNjE2NjIyKSwgY29ycmVsYXRpb24gKDAuNDk2NjQyKSovLFxuICAgIC0xMSwtMiwgLTEwLDMvKm1lYW4gKDAuMDYyNzc1NSksIGNvcnJlbGF0aW9uICgwLjQ5ODU2MykqLyxcbiAgICAtMTIsLTEzLCAtNywtOS8qbWVhbiAoMC4wODI5NjIyKSwgY29ycmVsYXRpb24gKDAuNDk1NDkxKSovLFxuICAgIC0xMSwwLCAtMTAsLTUvKm1lYW4gKDAuMDg0MzM0MiksIGNvcnJlbGF0aW9uICgwLjQ4NzE0NikqLyxcbiAgICA1LC0zLCAxMSw4LyptZWFuICgwLjA5Mjk5MzcpLCBjb3JyZWxhdGlvbiAoMC41MDIzMTUpKi8sXG4gICAgLTIsLTEzLCAtMSwxMi8qbWVhbiAoMC4xMTMzMjcpLCBjb3JyZWxhdGlvbiAoMC40ODk0MSkqLyxcbiAgICAtMSwtOCwgMCw5LyptZWFuICgwLjEzMjExOSksIGNvcnJlbGF0aW9uICgwLjQ2NzI2OCkqLyxcbiAgICAtMTMsLTExLCAtMTIsLTUvKm1lYW4gKDAuMTM2MjY5KSwgY29ycmVsYXRpb24gKDAuNDk4NzcxKSovLFxuICAgIC0xMCwtMiwgLTEwLDExLyptZWFuICgwLjE0MjE3MyksIGNvcnJlbGF0aW9uICgwLjQ5ODcxNCkqLyxcbiAgICAtMyw5LCAtMiwtMTMvKm1lYW4gKDAuMTQ0MTQxKSwgY29ycmVsYXRpb24gKDAuNDkxOTczKSovLFxuICAgIDIsLTMsIDMsMi8qbWVhbiAoMC4xNDg5MiksIGNvcnJlbGF0aW9uICgwLjUwMDc4MikqLyxcbiAgICAtOSwtMTMsIC00LDAvKm1lYW4gKDAuMTUwMzcxKSwgY29ycmVsYXRpb24gKDAuNDk4MjExKSovLFxuICAgIC00LDYsIC0zLC0xMC8qbWVhbiAoMC4xNTIxNTkpLCBjb3JyZWxhdGlvbiAoMC40OTU1NDcpKi8sXG4gICAgLTQsMTIsIC0yLC03LyptZWFuICgwLjE1NjE1MiksIGNvcnJlbGF0aW9uICgwLjQ5NjkyNSkqLyxcbiAgICAtNiwtMTEsIC00LDkvKm1lYW4gKDAuMTU3NDkpLCBjb3JyZWxhdGlvbiAoMC40OTkyMjIpKi8sXG4gICAgNiwtMywgNiwxMS8qbWVhbiAoMC4xNTkyMTEpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjEpKi8sXG4gICAgLTEzLDExLCAtNSw1LyptZWFuICgwLjE2MjQyNyksIGNvcnJlbGF0aW9uICgwLjUwMTkwNykqLyxcbiAgICAxMSwxMSwgMTIsNi8qbWVhbiAoMC4xNjY1MiksIGNvcnJlbGF0aW9uICgwLjQ5NzYzMikqLyxcbiAgICA3LC01LCAxMiwtMi8qbWVhbiAoMC4xNjkxNDEpLCBjb3JyZWxhdGlvbiAoMC40ODQ0NzQpKi8sXG4gICAgLTEsMTIsIDAsNy8qbWVhbiAoMC4xNjk0NTYpLCBjb3JyZWxhdGlvbiAoMC40OTUzMzkpKi8sXG4gICAgLTQsLTgsIC0zLC0yLyptZWFuICgwLjE3MTQ1NyksIGNvcnJlbGF0aW9uICgwLjQ4NzI1MSkqLyxcbiAgICAtNywxLCAtNiw3LyptZWFuICgwLjE3NSksIGNvcnJlbGF0aW9uICgwLjUwMDAyNCkqLyxcbiAgICAtMTMsLTEyLCAtOCwtMTMvKm1lYW4gKDAuMTc1ODY2KSwgY29ycmVsYXRpb24gKDAuNDk3NTIzKSovLFxuICAgIC03LC0yLCAtNiwtOC8qbWVhbiAoMC4xNzgyNzMpLCBjb3JyZWxhdGlvbiAoMC41MDE4NTQpKi8sXG4gICAgLTgsNSwgLTYsLTkvKm1lYW4gKDAuMTgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDk0ODg4KSovLFxuICAgIC01LC0xLCAtNCw1LyptZWFuICgwLjE5MDIyNyksIGNvcnJlbGF0aW9uICgwLjQ4MjU1NykqLyxcbiAgICAtMTMsNywgLTgsMTAvKm1lYW4gKDAuMTk2NzM5KSwgY29ycmVsYXRpb24gKDAuNDk2NTAzKSovLFxuICAgIDEsNSwgNSwtMTMvKm1lYW4gKDAuMTk5NzMpLCBjb3JyZWxhdGlvbiAoMC40OTk3NTkpKi8sXG4gICAgMSwwLCAxMCwtMTMvKm1lYW4gKDAuMjA0NDY1KSwgY29ycmVsYXRpb24gKDAuNDk4NzMpKi8sXG4gICAgOSwxMiwgMTAsLTEvKm1lYW4gKDAuMjA5MzM0KSwgY29ycmVsYXRpb24gKDAuNDkwNjMpKi8sXG4gICAgNSwtOCwgMTAsLTkvKm1lYW4gKDAuMjExMTM0KSwgY29ycmVsYXRpb24gKDAuNTAzMDExKSovLFxuICAgIC0xLDExLCAxLC0xMy8qbWVhbiAoMC4yMTIpLCBjb3JyZWxhdGlvbiAoMC40OTk0MTQpKi8sXG4gICAgLTksLTMsIC02LDIvKm1lYW4gKDAuMjEyMTY4KSwgY29ycmVsYXRpb24gKDAuNDgwNzM5KSovLFxuICAgIC0xLC0xMCwgMSwxMi8qbWVhbiAoMC4yMTI3MzEpLCBjb3JyZWxhdGlvbiAoMC41MDI1MjMpKi8sXG4gICAgLTEzLDEsIC04LC0xMC8qbWVhbiAoMC4yMTMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTc4NikqLyxcbiAgICA4LC0xMSwgMTAsLTYvKm1lYW4gKDAuMjE0MTU5KSwgY29ycmVsYXRpb24gKDAuNDg4MjQ2KSovLFxuICAgIDIsLTEzLCAzLC02LyptZWFuICgwLjIxNjk5MyksIGNvcnJlbGF0aW9uICgwLjUwMjg3KSovLFxuICAgIDcsLTEzLCAxMiwtOS8qbWVhbiAoMC4yMjM2MzkpLCBjb3JyZWxhdGlvbiAoMC40NzA1MDIpKi8sXG4gICAgLTEwLC0xMCwgLTUsLTcvKm1lYW4gKDAuMjI0MDg5KSwgY29ycmVsYXRpb24gKDAuNTAwODUyKSovLFxuICAgIC0xMCwtOCwgLTgsLTEzLyptZWFuICgwLjIyODY2NiksIGNvcnJlbGF0aW9uICgwLjUwMjYyOSkqLyxcbiAgICA0LC02LCA4LDUvKm1lYW4gKDAuMjI5MDYpLCBjb3JyZWxhdGlvbiAoMC40OTgzMDUpKi8sXG4gICAgMywxMiwgOCwtMTMvKm1lYW4gKDAuMjMzMzc4KSwgY29ycmVsYXRpb24gKDAuNTAzODI1KSovLFxuICAgIC00LDIsIC0zLC0zLyptZWFuICgwLjIzNDMyMyksIGNvcnJlbGF0aW9uICgwLjQ3NjY5MikqLyxcbiAgICA1LC0xMywgMTAsLTEyLyptZWFuICgwLjIzNjM5MiksIGNvcnJlbGF0aW9uICgwLjQ3NTQ2MikqLyxcbiAgICA0LC0xMywgNSwtMS8qbWVhbiAoMC4yMzY4NDIpLCBjb3JyZWxhdGlvbiAoMC41MDQxMzIpKi8sXG4gICAgLTksOSwgLTQsMy8qbWVhbiAoMC4yMzY5NzcpLCBjb3JyZWxhdGlvbiAoMC40OTc3MzkpKi8sXG4gICAgMCwzLCAzLC05LyptZWFuICgwLjI0MzE0KSwgY29ycmVsYXRpb24gKDAuNDk5Mzk4KSovLFxuICAgIC0xMiwxLCAtNiwxLyptZWFuICgwLjI0MzI5NyksIGNvcnJlbGF0aW9uICgwLjQ4OTQ0NykqLyxcbiAgICAzLDIsIDQsLTgvKm1lYW4gKDAuMDAxNTUxOTYpLCBjb3JyZWxhdGlvbiAoMC41NTM0OTYpKi8sXG4gICAgLTEwLC0xMCwgLTEwLDkvKm1lYW4gKDAuMDAyMzk1NDEpLCBjb3JyZWxhdGlvbiAoMC41NDI5NykqLyxcbiAgICA4LC0xMywgMTIsMTIvKm1lYW4gKDAuMDAzNDQxMyksIGNvcnJlbGF0aW9uICgwLjU0NDM2MSkqLyxcbiAgICAtOCwtMTIsIC02LC01LyptZWFuICgwLjAwMzU2NSksIGNvcnJlbGF0aW9uICgwLjU1MTIyNSkqLyxcbiAgICAyLDIsIDMsNy8qbWVhbiAoMC4wMDgzNTU4MyksIGNvcnJlbGF0aW9uICgwLjU1Mjg1KSovLFxuICAgIDEwLDYsIDExLC04LyptZWFuICgwLjAwODg1MDY1KSwgY29ycmVsYXRpb24gKDAuNTQwOTEzKSovLFxuICAgIDYsOCwgOCwtMTIvKm1lYW4gKDAuMDEwMTU1MiksIGNvcnJlbGF0aW9uICgwLjU1MTA4NSkqLyxcbiAgICAtNywxMCwgLTYsNS8qbWVhbiAoMC4wMTAyMjI3KSwgY29ycmVsYXRpb24gKDAuNTMzNjM1KSovLFxuICAgIC0zLC05LCAtMyw5LyptZWFuICgwLjAxMTAyMTEpLCBjb3JyZWxhdGlvbiAoMC41NDMxMjEpKi8sXG4gICAgLTEsLTEzLCAtMSw1LyptZWFuICgwLjAxMTM0NzMpLCBjb3JyZWxhdGlvbiAoMC41NTAxNzMpKi8sXG4gICAgLTMsLTcsIC0zLDQvKm1lYW4gKDAuMDE0MDkxMyksIGNvcnJlbGF0aW9uICgwLjU1NDc3NCkqLyxcbiAgICAtOCwtMiwgLTgsMy8qbWVhbiAoMC4wMTcwNDkpLCBjb3JyZWxhdGlvbiAoMC41NTQ2MSkqLyxcbiAgICA0LDIsIDEyLDEyLyptZWFuICgwLjAxNzc4KSwgY29ycmVsYXRpb24gKDAuNTQ2OTIxKSovLFxuICAgIDIsLTUsIDMsMTEvKm1lYW4gKDAuMDIyNDAyMiksIGNvcnJlbGF0aW9uICgwLjU0OTY2NykqLyxcbiAgICA2LC05LCAxMSwtMTMvKm1lYW4gKDAuMDI5MTYxKSwgY29ycmVsYXRpb24gKDAuNTQ2Mjk1KSovLFxuICAgIDMsLTEsIDcsMTIvKm1lYW4gKDAuMDMwMzA4MSksIGNvcnJlbGF0aW9uICgwLjU0ODU5OSkqLyxcbiAgICAxMSwtMSwgMTIsNC8qbWVhbiAoMC4wMzU1MTUxKSwgY29ycmVsYXRpb24gKDAuNTIzOTQzKSovLFxuICAgIC0zLDAsIC0zLDYvKm1lYW4gKDAuMDQxNzkwNCksIGNvcnJlbGF0aW9uICgwLjU0MzM5NSkqLyxcbiAgICA0LC0xMSwgNCwxMi8qbWVhbiAoMC4wNDg3MjkyKSwgY29ycmVsYXRpb24gKDAuNTQyODE4KSovLFxuICAgIDIsLTQsIDIsMS8qbWVhbiAoMC4wNTc1MTI0KSwgY29ycmVsYXRpb24gKDAuNTU0ODg4KSovLFxuICAgIC0xMCwtNiwgLTgsMS8qbWVhbiAoMC4wNTk0MjQyKSwgY29ycmVsYXRpb24gKDAuNTQ0MDI2KSovLFxuICAgIC0xMyw3LCAtMTEsMS8qbWVhbiAoMC4wNTk3MzkxKSwgY29ycmVsYXRpb24gKDAuNTUwNTI0KSovLFxuICAgIC0xMywxMiwgLTExLC0xMy8qbWVhbiAoMC4wNjA4OTc0KSwgY29ycmVsYXRpb24gKDAuNTUzODMpKi8sXG4gICAgNiwwLCAxMSwtMTMvKm1lYW4gKDAuMDY1MTI2KSwgY29ycmVsYXRpb24gKDAuNTUyMDA2KSovLFxuICAgIDAsLTEsIDEsNC8qbWVhbiAoMC4wNzQyMjQpLCBjb3JyZWxhdGlvbiAoMC41NDYzNzIpKi8sXG4gICAgLTEzLDMsIC05LC0yLyptZWFuICgwLjA4MDg1OTIpLCBjb3JyZWxhdGlvbiAoMC41NTQ4NzUpKi8sXG4gICAgLTksOCwgLTYsLTMvKm1lYW4gKDAuMDg4MzM3OCksIGNvcnJlbGF0aW9uICgwLjU1MTE3OCkqLyxcbiAgICAtMTMsLTYsIC04LC0yLyptZWFuICgwLjA5MDEwMzUpLCBjb3JyZWxhdGlvbiAoMC41NDg0NDYpKi8sXG4gICAgNSwtOSwgOCwxMC8qbWVhbiAoMC4wOTQ5ODQzKSwgY29ycmVsYXRpb24gKDAuNTU0Njk0KSovLFxuICAgIDIsNywgMywtOS8qbWVhbiAoMC4wOTk0MTUyKSwgY29ycmVsYXRpb24gKDAuNTUwOTc5KSovLFxuICAgIC0xLC02LCAtMSwtMS8qbWVhbiAoMC4xMDA0NSksIGNvcnJlbGF0aW9uICgwLjU1MjcxNCkqLyxcbiAgICA5LDUsIDExLC0yLyptZWFuICgwLjEwMDY4NiksIGNvcnJlbGF0aW9uICgwLjU1MjU5NCkqLyxcbiAgICAxMSwtMywgMTIsLTgvKm1lYW4gKDAuMTAxMDkxKSwgY29ycmVsYXRpb24gKDAuNTMyMzk0KSovLFxuICAgIDMsMCwgMyw1LyptZWFuICgwLjEwMTE0NyksIGNvcnJlbGF0aW9uICgwLjUyNTU3NikqLyxcbiAgICAtMSw0LCAwLDEwLyptZWFuICgwLjEwNTI2MyksIGNvcnJlbGF0aW9uICgwLjUzMTQ5OCkqLyxcbiAgICAzLC02LCA0LDUvKm1lYW4gKDAuMTEwNzg1KSwgY29ycmVsYXRpb24gKDAuNTQwNDkxKSovLFxuICAgIC0xMywwLCAtMTAsNS8qbWVhbiAoMC4xMTI3OTgpLCBjb3JyZWxhdGlvbiAoMC41MzY1ODIpKi8sXG4gICAgNSw4LCAxMiwxMS8qbWVhbiAoMC4xMTQxODEpLCBjb3JyZWxhdGlvbiAoMC41NTU3OTMpKi8sXG4gICAgOCw5LCA5LC02LyptZWFuICgwLjExNzQzMSksIGNvcnJlbGF0aW9uICgwLjU1Mzc2MykqLyxcbiAgICA3LC00LCA4LC0xMi8qbWVhbiAoMC4xMTg1MjIpLCBjb3JyZWxhdGlvbiAoMC41NTM0NTIpKi8sXG4gICAgLTEwLDQsIC0xMCw5LyptZWFuICgwLjEyMDk0KSwgY29ycmVsYXRpb24gKDAuNTU0Nzg1KSovLFxuICAgIDcsMywgMTIsNC8qbWVhbiAoMC4xMjI1ODIpLCBjb3JyZWxhdGlvbiAoMC41NTU4MjUpKi8sXG4gICAgOSwtNywgMTAsLTIvKm1lYW4gKDAuMTI0OTc4KSwgY29ycmVsYXRpb24gKDAuNTQ5ODQ2KSovLFxuICAgIDcsMCwgMTIsLTIvKm1lYW4gKDAuMTI3MDAyKSwgY29ycmVsYXRpb24gKDAuNTM3NDUyKSovLFxuICAgIC0xLC02LCAwLC0xMS8qbWVhbiAoMC4xMjcxNDgpLCBjb3JyZWxhdGlvbiAoMC41NDc0MDEpKi9cbl07IiwiaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuaW1wb3J0IGJpdF9wYXR0ZXJuXzMxIGZyb20gJy4vYml0X3BhdHRlcm5fMzEuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IHJlY3RpZnlfcGF0Y2ggfSBmcm9tICcuL3JlY3RpZnlfcGF0Y2guanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG9yYiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYml0X3BhdHRlcm5fMzFfID0gbmV3IEludDMyQXJyYXkoYml0X3BhdHRlcm5fMzEpO1xuICAgICAgICB0aGlzLkggPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMucGF0Y2hfaW1nID0gbmV3IG1hdHJpeF90KDMyLCAzMiwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG5cbiAgICBkZXNjcmliZShzcmMsIGNvcm5lcnMsIGNvdW50LCBkZXNjcmlwdG9ycykge1xuICAgICAgICB2YXIgREVTQ1JfU0laRSA9IDMyOyAvLyBieXRlcztcbiAgICAgICAgdmFyIGkgPSAwLCBiID0gMCwgcHggPSAwLjAsIHB5ID0gMC4wLCBhbmdsZSA9IDAuMDtcbiAgICAgICAgdmFyIHQwID0gMCwgdDEgPSAwLCB2YWwgPSAwO1xuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgcGF0Y2hfZCA9IHRoaXMucGF0Y2hfaW1nLmRhdGE7XG4gICAgICAgIHZhciBwYXRjaF9vZmYgPSAxNiAqIDMyICsgMTY7IC8vIGNlbnRlciBvZiBwYXRjaFxuICAgICAgICB2YXIgcGF0dCA9IDA7XG5cbiAgICAgICAgaWYgKCEoZGVzY3JpcHRvcnMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkpIHtcbiAgICAgICAgICAgIC8vIHJlbG9jYXRlIHRvIFU4IHR5cGVcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnR5cGUgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5jb2xzID0gREVTQ1JfU0laRTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJvd3MgPSBjb3VudDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmNoYW5uZWwgPSAxO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJlc2l6ZShERVNDUl9TSVpFLCBjb3VudCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVzY3JfZCA9IGRlc2NyaXB0b3JzLmRhdGE7XG4gICAgICAgIHZhciBkZXNjcl9vZmYgPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBweCA9IGNvcm5lcnNbaV0ueDtcbiAgICAgICAgICAgIHB5ID0gY29ybmVyc1tpXS55O1xuICAgICAgICAgICAgYW5nbGUgPSBjb3JuZXJzW2ldLmFuZ2xlO1xuXG4gICAgICAgICAgICByZWN0aWZ5X3BhdGNoKHNyYywgdGhpcy5wYXRjaF9pbWcsIGFuZ2xlLCBweCwgcHksIDMyLCB0aGlzLkgpO1xuXG4gICAgICAgICAgICAvLyBkZXNjcmliZSB0aGUgcGF0Y2hcbiAgICAgICAgICAgIHBhdHQgPSAwO1xuICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IERFU0NSX1NJWkU7ICsrYikge1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCA9ICh0MCA8IHQxKSB8IDA7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCAxO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgMjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDM7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA0O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgNTtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDY7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA3O1xuXG4gICAgICAgICAgICAgICAgZGVzY3JfZFtkZXNjcl9vZmYgKyBiXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc2NyX29mZiArPSBERVNDUl9TSVpFO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBpbWdwcm9jIGZyb20gJy4uL2ltZ3Byb2MvaW1ncHJvYy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RpZnlfcGF0Y2goc3JjLCBkc3QsIGFuZ2xlLCBweCwgcHksIHBzaXplLCBIKSB7XG4gICAgdmFyIGNvc2luZSA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICB2YXIgc2luZSAgID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgIHZhciBpbWdwcmMgPSBuZXcgaW1ncHJvYygpO1xuXG4gICAgSC5kYXRhWzBdID0gY29zaW5lLCBILmRhdGFbMV0gPSAtc2luZSwgICAgSC5kYXRhWzJdID0gKC1jb3NpbmUgKyBzaW5lICApICogcHNpemUqMC41ICsgcHgsXG4gICAgSC5kYXRhWzNdID0gc2luZSwgICBILmRhdGFbNF0gPSAgY29zaW5lLCAgSC5kYXRhWzVdID0gKC1zaW5lICAgLSBjb3NpbmUpICogcHNpemUqMC41ICsgcHk7XG5cbiAgICBpbWdwcmMud2FycF9hZmZpbmUoc3JjLCBkc3QsIEgsIDEyOCk7XG59IiwiaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi4vaW1ncHJvYy9pbWdwcm9jLmpzJztcbmltcG9ydCBtYXRyaXhfdCBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHlyYW1pZF90IHtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbHMpIHtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBsZXZlbHMgfCAwO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgQXJyYXkobGV2ZWxzKTtcbiAgICAgICAgdmFyIF9pbWdwcm9jID0gbmV3IGltZ3Byb2MoKTsgXG4gICAgICAgIHRoaXMucHlyZG93biA9IF9pbWdwcm9jLnB5cmRvd247XG4gICAgfVxuXG4gICAgYWxsb2NhdGUoc3RhcnRfdywgc3RhcnRfaCwgZGF0YV90eXBlKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5sZXZlbHM7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhW2ldID0gbmV3IG1hdHJpeF90KHN0YXJ0X3cgPj4gaSwgc3RhcnRfaCA+PiBpLCBkYXRhX3R5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVpbGQoaW5wdXQsIHNraXBfZmlyc3RfbGV2ZWwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBza2lwX2ZpcnN0X2xldmVsID09PSBcInVuZGVmaW5lZFwiKSB7IHNraXBfZmlyc3RfbGV2ZWwgPSB0cnVlOyB9XG4gICAgICAgIC8vIGp1c3QgY29weSBkYXRhIHRvIGZpcnN0IGxldmVsXG4gICAgICAgIHZhciBpID0gMiwgYSA9IGlucHV0LCBiID0gdGhpcy5kYXRhWzBdO1xuICAgICAgICBpZiAoIXNraXBfZmlyc3RfbGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBqID0gaW5wdXQuY29scyAqIGlucHV0LnJvd3M7XG4gICAgICAgICAgICB3aGlsZSAoLS1qID49IDApIHtcbiAgICAgICAgICAgICAgICBiLmRhdGFbal0gPSBpbnB1dC5kYXRhW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGIgPSB0aGlzLmRhdGFbMV07XG4gICAgICAgIHRoaXMucHlyZG93bihhLCBiKTtcbiAgICAgICAgZm9yICg7IGkgPCB0aGlzLmxldmVsczsgKytpKSB7XG4gICAgICAgICAgICBhID0gYjtcbiAgICAgICAgICAgIGIgPSB0aGlzLmRhdGFbaV07XG4gICAgICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgdGhpcmRfY2hlY2ssIGlzX2xvY2FsX21heGltYSwgcGVyZm9ybV9vbmVfcG9pbnQsIGxldl90YWJsZV90IH0gZnJvbSAnLi95YXBlX3V0aWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5YXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbF90YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy50YXUgPSA3O1xuICAgIH1cblxuICAgIGluaXQod2lkdGgsIGhlaWdodCwgcmFkaXVzLCBweXJhbWlkX2xldmVscykge1xuICAgICAgICBpZiAodHlwZW9mIHB5cmFtaWRfbGV2ZWxzID09PSBcInVuZGVmaW5lZFwiKSB7IHB5cmFtaWRfbGV2ZWxzID0gMTsgfVxuICAgICAgICB2YXIgaTtcbiAgICAgICAgcmFkaXVzID0gTWF0aC5taW4ocmFkaXVzLCA3KTtcbiAgICAgICAgcmFkaXVzID0gTWF0aC5tYXgocmFkaXVzLCAzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHB5cmFtaWRfbGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfdGFibGVzW2ldID0gbmV3IGxldl90YWJsZV90KHdpZHRoID4+IGksIGhlaWdodCA+PiBpLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KHNyYywgcG9pbnRzLCBib3JkZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib3JkZXIgPT09IFwidW5kZWZpbmVkXCIpIHsgYm9yZGVyID0gNDsgfVxuICAgICAgICB2YXIgdCA9IHRoaXMubGV2ZWxfdGFibGVzWzBdO1xuICAgICAgICB2YXIgUiA9IHQucmFkaXVzIHwgMCwgUm0xID0gKFIgLSAxKSB8IDA7XG4gICAgICAgIHZhciBkaXJzID0gdC5kaXJzO1xuICAgICAgICB2YXIgZGlyc19jb3VudCA9IHQuZGlyc19jb3VudCB8IDA7XG4gICAgICAgIHZhciBvcHBvc2l0ZSA9IGRpcnNfY291bnQgPj4gMTtcbiAgICAgICAgdmFyIGltZyA9IHNyYy5kYXRhLCB3ID0gc3JjLmNvbHMgfCAwLCBoID0gc3JjLnJvd3MgfCAwLCBodyA9IHcgPj4gMTtcbiAgICAgICAgdmFyIHNjb3JlcyA9IHQuc2NvcmVzO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgaXAgPSAwLCBpbSA9IDAsIGFic19zY29yZSA9IDAsIHNjb3JlID0gMDtcbiAgICAgICAgdmFyIHRhdSA9IHRoaXMudGF1IHwgMDtcbiAgICAgICAgdmFyIG51bWJlcl9vZl9wb2ludHMgPSAwLCBwdDtcblxuICAgICAgICB2YXIgc3ggPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KFIgKyAxLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIFIgLSAyLCB3IC0gYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleSA9IE1hdGgubWluKGggLSBSIC0gMiwgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIGlwID0gaW1nW3Jvd3hdICsgdGF1LCBpbSA9IGltZ1tyb3d4XSAtIHRhdTtcblxuICAgICAgICAgICAgICAgIGlmIChpbSA8IGltZ1tyb3d4ICsgUl0gJiYgaW1nW3Jvd3ggKyBSXSA8IGlwICYmIGltIDwgaW1nW3Jvd3ggLSBSXSAmJiBpbWdbcm93eCAtIFJdIDwgaXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVzW3Jvd3hdID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZXJmb3JtX29uZV9wb2ludChpbWcsIHJvd3gsIHNjb3JlcywgaW0sIGlwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19jb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9jYWwgbWF4aW1hXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIHNjb3JlID0gc2NvcmVzW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGFic19zY29yZSA9IE1hdGguYWJzKHNjb3JlKTtcbiAgICAgICAgICAgICAgICBpZiAoYWJzX3Njb3JlIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHBpeGVsIGlzIDAsIHRoZSBuZXh0IG9uZSB3aWxsIG5vdCBiZSBnb29kIGVub3VnaC4gU2tpcCBpdC5cbiAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXJkX2NoZWNrKHNjb3Jlcywgcm93eCwgdykgPj0gMyAmJiBpc19sb2NhbF9tYXhpbWEoc2NvcmVzLCByb3d4LCBzY29yZSwgaHcsIFIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBhYnNfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHggKz0gUm0xLCByb3d4ICs9IFJtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBwcmVjb21wdXRlX2RpcmVjdGlvbnMoc3RlcCwgZGlycywgUikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgeCwgeTtcblxuICAgIHggPSBSO1xuICAgIGZvciAoeSA9IDA7IHkgPCB4OyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh4LS07IHggPCB5ICYmIHggPj0gMDsgeC0tLCBpKyspIHtcbiAgICAgICAgeSA9IChNYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyAteCA8IHk7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHktLTsgeSA+PSAwOyB5LS0sIGkrKykge1xuICAgICAgICB4ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB5ID4geDsgeS0tLCBpKyspIHtcbiAgICAgICAgeCA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKHgrKzsgeCA8PSAwOyB4KyssIGkrKykge1xuICAgICAgICB5ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoOyB4IDwgLXk7IHgrKywgaSsrKSB7XG4gICAgICAgIHkgPSAoLU1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh5Kys7IHkgPCAwOyB5KyssIGkrKykge1xuICAgICAgICB4ID0gKE1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG5cbiAgICBkaXJzW2ldID0gZGlyc1swXTtcbiAgICBkaXJzW2kgKyAxXSA9IGRpcnNbMV07XG4gICAgcmV0dXJuIGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZF9jaGVjayhTYiwgb2ZmLCBzdGVwKSB7XG4gICAgdmFyIG4gPSAwO1xuICAgIGlmIChTYltvZmYgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcF0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwIC0gMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgLSAxXSAhPSAwKSBuKys7XG5cbiAgICByZXR1cm4gbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzX2xvY2FsX21heGltYShwLCBvZmYsIHYsIHN0ZXAsIG5laWdoYm9yaG9vZCkge1xuICAgIHZhciB4LCB5O1xuXG4gICAgaWYgKHYgPiAwKSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPiB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZiAtPSBzdGVwICogbmVpZ2hib3Job29kO1xuICAgICAgICBmb3IgKHkgPSAtbmVpZ2hib3Job29kOyB5IDw9IG5laWdoYm9yaG9vZDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKHggPSAtbmVpZ2hib3Job29kOyB4IDw9IG5laWdoYm9yaG9vZDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBbb2ZmICsgeF0gPCB2KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmYgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcmZvcm1fb25lX3BvaW50KEksIHgsIFNjb3JlcywgSW0sIElwLCBkaXJzLCBvcHBvc2l0ZSwgZGlyc19uYikge1xuICAgIHZhciBzY29yZSA9IDA7XG4gICAgdmFyIGEgPSAwLCBiID0gKG9wcG9zaXRlIC0gMSkgfCAwO1xuICAgIHZhciBBID0gMCwgQjAgPSAwLCBCMSA9IDAsIEIyID0gMDtcbiAgICB2YXIgc3RhdGUgPSAwO1xuXG4gICAgLy8gV0UgS05PVyBUSEFUIE5PVChBIH4gSTAgJiBCMSB+IEkwKTpcbiAgICBBID0gSVt4ICsgZGlyc1thXV07XG4gICAgaWYgKChBIDw9IElwKSkge1xuICAgICAgICBpZiAoKEEgPj0gSW0pKSB7IC8vIEEgfiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPD0gSXApKSB7XG4gICAgICAgICAgICAgICAgaWYgKChCMCA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UvKiBpZiAoKEIxIDwgSW0pKSovIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIEIwIDwgSTBcbiAgICAgICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKEIyIDwgSW0pKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIEEgPiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjAgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIC8vIEEgPCBJMFxuICAgIHtcbiAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMCA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGEgPSAxOyBhIDw9IG9wcG9zaXRlOyBhKyspIHtcbiAgICAgICAgQSA9IElbeCArIGRpcnNbYV1dO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjEgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQjIgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDk7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIxID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDQ7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDU7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyID49IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA8PSBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDM7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDY7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gOTsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gODsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDA7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vXCJQQiBkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gc3dpdGNoKHN0YXRlKVxuICAgIH0gLy8gZm9yKGEuLi4pXG5cbiAgICBTY29yZXNbeF0gPSAoc2NvcmUgKyBkaXJzX25iICogSVt4XSk7XG59XG5cbmV4cG9ydCBjbGFzcyBsZXZfdGFibGVfdCB7XG4gICAgY29uc3RydWN0b3IodywgaCwgcikge1xuICAgICAgICB0aGlzLmRpcnMgPSBuZXcgSW50MzJBcnJheSgxMDI0KTtcbiAgICAgICAgdGhpcy5kaXJzX2NvdW50ID0gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHcsIHRoaXMuZGlycywgcikgfCAwO1xuICAgICAgICB0aGlzLnNjb3JlcyA9IG5ldyBJbnQzMkFycmF5KHcgKiBoKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByIHwgMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgY29tcHV0ZV9sYXBsYWNpYW4sIGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIH0gZnJvbSAnLi95YXBlMDZfdXRpbHMuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB5YXBlMDYge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgICAgICB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQgPSAzMDtcbiAgICAgICAgdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkID0gMjU7XG4gICAgfVxuICAgIGRldGVjdChzcmMsIHBvaW50cywgYm9yZGVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7IGJvcmRlciA9IDU7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMDtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBzcmRfZCA9IHNyYy5kYXRhO1xuICAgICAgICB2YXIgRHh4ID0gNSwgRHl5ID0gKDUgKiB3KSB8IDA7XG4gICAgICAgIHZhciBEeHkgPSAoMyArIDMgKiB3KSB8IDAsIER5eCA9ICgzIC0gMyAqIHcpIHwgMDtcbiAgICAgICAgdmFyIGxhcF9idWYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcbiAgICAgICAgdmFyIGxhcGxhY2lhbiA9IGxhcF9idWYuaTMyO1xuICAgICAgICB2YXIgbHYgPSAwLCByb3cgPSAwLCByb3d4ID0gMCwgbWluX2VpZ2VuX3ZhbHVlID0gMCwgcHQ7XG4gICAgICAgIHZhciBudW1iZXJfb2ZfcG9pbnRzID0gMDtcbiAgICAgICAgdmFyIGxhcF90aHJlc2ggPSB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQ7XG4gICAgICAgIHZhciBlaWdlbl90aHJlc2ggPSB0aGlzLm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQ7XG5cbiAgICAgICAgdmFyIHN4ID0gTWF0aC5tYXgoNSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBzeSA9IE1hdGgubWF4KDMsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXggPSBNYXRoLm1pbih3IC0gNSwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXkgPSBNYXRoLm1pbihoIC0gMywgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHggPSB3ICogaDtcbiAgICAgICAgd2hpbGUgKC0teCA+PSAwKSB7IGxhcGxhY2lhblt4XSA9IDA7IH1cbiAgICAgICAgY29tcHV0ZV9sYXBsYWNpYW4oc3JkX2QsIGxhcGxhY2lhbiwgdywgaCwgRHh4LCBEeXksIHN4LCBzeSwgZXgsIGV5KTtcblxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcblxuICAgICAgICAgICAgICAgIGx2ID0gbGFwbGFjaWFuW3Jvd3hdO1xuICAgICAgICAgICAgICAgIGlmICgobHYgPCAtbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3XSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA8IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3ICsgMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHcgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICAgICAgKGx2ID4gbGFwX3RocmVzaCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHddICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3XSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgdyAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gdyArIDFdICYmIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pXG4gICAgICAgICAgICAgICAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbWluX2VpZ2VuX3ZhbHVlID0gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JkX2QsIHJvd3gsIGx2LCBEeHgsIER5eSwgRHh5LCBEeXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluX2VpZ2VuX3ZhbHVlID4gZWlnZW5fdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB0LnggPSB4LCBwdC55ID0geSwgcHQuc2NvcmUgPSBtaW5fZWlnZW5fdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG4gICAgICAgICAgICAgICAgICAgICAgICArK3gsICsrcm93eDsgLy8gc2tpcCBuZXh0IHBpeGVsIHNpbmNlIHRoaXMgaXMgbWF4aW1hIGluIDN4M1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGxhcF9idWYpO1xuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9sYXBsYWNpYW4oc3JjLCBkc3QsIHcsIGgsIER4eCwgRHl5LCBzeCxzeSwgZXgsZXkpIHtcbiAgICB2YXIgeT0wLHg9MCx5cm93PShzeSp3K3N4KXwwLHJvdz15cm93O1xuXG4gICAgZm9yKHkgPSBzeTsgeSA8IGV5OyArK3ksIHlyb3crPXcsIHJvdyA9IHlyb3cpIHtcbiAgICAgICAgZm9yKHggPSBzeDsgeCA8IGV4OyArK3gsICsrcm93KSB7XG4gICAgICAgICAgICBkc3Rbcm93XSA9IC00ICogc3JjW3Jvd10gKyBzcmNbcm93K0R4eF0gKyBzcmNbcm93LUR4eF0gKyBzcmNbcm93K0R5eV0gKyBzcmNbcm93LUR5eV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXNzaWFuX21pbl9laWdlbl92YWx1ZShzcmMsIG9mZiwgdHIsIER4eCwgRHl5LCBEeHksIER5eCkge1xuICAgIHZhciBJeHggPSAtMiAqIHNyY1tvZmZdICsgc3JjW29mZiArIER4eF0gKyBzcmNbb2ZmIC0gRHh4XTtcbiAgICB2YXIgSXl5ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeXldICsgc3JjW29mZiAtIER5eV07XG4gICAgdmFyIEl4eSA9IHNyY1tvZmYgKyBEeHldICsgc3JjW29mZiAtIER4eV0gLSBzcmNbb2ZmICsgRHl4XSAtIHNyY1tvZmYgLSBEeXhdO1xuICAgIHZhciBzcXJ0X2RlbHRhID0gKCBNYXRoLnNxcnQoKChJeHggLSBJeXkpICogKEl4eCAtIEl5eSkgKyA0ICogSXh5ICogSXh5KSApICl8MDtcblxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmFicyh0ciAtIHNxcnRfZGVsdGEpLCBNYXRoLmFicygtKHRyICsgc3FydF9kZWx0YSkpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi9qc2ZlYXROZXh0LmpzJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAganNmZWF0TmV4dFxufSJdLCJuYW1lcyI6WyJfcG9vbF9ub2RlX3QiLCJjYWNoZSIsIl9wb29sX2hlYWQiLCJfcG9vbF90YWlsIiwiX3Bvb2xfc2l6ZSIsImNhcGFjaXR5IiwiZGF0YV9zaXplIiwiaSIsIm5vZGUiLCJuZXh0Iiwic2l6ZV9pbl9ieXRlcyIsInNpemUiLCJyZXNpemUiLCJKU0ZFQVRfQ09OU1RBTlRTIiwiRVBTSUxPTiIsIkZMVF9NSU4iLCJVOF90IiwiUzMyX3QiLCJGMzJfdCIsIlM2NF90IiwiRjY0X3QiLCJDMV90IiwiQzJfdCIsIkMzX3QiLCJDNF90IiwiQ09MT1JfUkdCQTJHUkFZIiwiQ09MT1JfUkdCMkdSQVkiLCJDT0xPUl9CR1JBMkdSQVkiLCJDT0xPUl9CR1IyR1JBWSIsIkJPWF9CTFVSX05PU0NBTEUiLCJTVkRfVV9UIiwiU1ZEX1ZfVCIsImRhdGFfdHlwZSIsIl9kYXRhX3R5cGVfc2l6ZSIsIkludDMyQXJyYXkiLCJ0eXBlIiwiX2NvbnZvbF91OCIsImJ1ZiIsInNyY19kIiwiZHN0X2QiLCJ3IiwiaCIsImZpbHRlciIsImtlcm5lbF9zaXplIiwiaGFsZl9rZXJuZWwiLCJqIiwiayIsInNwIiwiZHAiLCJzdW0iLCJzdW0xIiwic3VtMiIsInN1bTMiLCJmMCIsImZrIiwidzIiLCJ3MyIsInc0IiwiTWF0aCIsIm1pbiIsIl9jb252b2wiLCJfcmVzYW1wbGUiLCJfcmVzYW1wbGVfdTgiLCJtYXRoIiwiaW1ncHJvYyIsImFsbG9jYXRlIiwic3JjIiwiZHN0IiwiY29kZSIsIngiLCJ5IiwiaXIiLCJqciIsImNvZWZmX3IiLCJjb2VmZl9nIiwiY29lZmZfYiIsImNuIiwiY24yIiwiY24zIiwiZHN0X3U4IiwiZGF0YSIsIm53IiwibmgiLCJyb3dzIiwiY29scyIsImNoYW5uZWwiLCJyYWRpdXMiLCJvcHRpb25zIiwiaDIiLCJlbmQiLCJ3aW5kb3dTaXplIiwicmFkaXVzUGx1c09uZSIsInJhZGl1c1BsdXMyIiwic2NhbGUiLCJ0bXBfYnVmZiIsImdldF9idWZmZXIiLCJkc3RJbmRleCIsInNyY0luZGV4IiwibmV4dFBpeGVsSW5kZXgiLCJwcmV2aW91c1BpeGVsSW5kZXgiLCJkYXRhX2kzMiIsImkzMiIsImRhdGFfdTgiLCJob2xkIiwicHV0X2J1ZmZlciIsInNpZ21hIiwianNmZWF0bWF0aCIsIm1heCIsImlzX3U4IiwiYnVmX3N6IiwiYnVmX25vZGUiLCJmaWx0X25vZGUiLCJmMzIiLCJnZXRfZ2F1c3NpYW5fa2VybmVsIiwiaW1nIiwicmhvX3JlcyIsInRoZXRhX3JlcyIsInRocmVzaG9sZCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzdGVwIiwibWluX3RoZXRhIiwibWF4X3RoZXRhIiwiUEkiLCJudW1hbmdsZSIsInJvdW5kIiwibnVtcmhvIiwiaXJobyIsImFjY3VtIiwidGFiU2luIiwiRmxvYXQzMkFycmF5IiwidGFiQ29zIiwibiIsImFuZyIsInNpbiIsImNvcyIsInIiLCJfc29ydF9idWYiLCJBcnJheSIsImJhc2UiLCJwdXNoIiwic29ydCIsImwxIiwibDIiLCJsaW5lc01heCIsImxlbmd0aCIsImxpbmVzIiwiaWR4IiwiZmxvb3IiLCJscmhvIiwibGFuZ2xlIiwic3giLCJzeSIsIl93MiIsIl9oMiIsInNwdHIiLCJzbGluZSIsImRwdHIiLCJkbGluZSIsInRyYW5zZm9ybSIsImZpbGxfdmFsdWUiLCJzcmNfd2lkdGgiLCJzcmNfaGVpZ2h0IiwiZHN0X3dpZHRoIiwiZHN0X2hlaWdodCIsIm9mZiIsIml4cyIsIml5cyIsInhzIiwieXMiLCJhIiwiYiIsInAwIiwicDEiLCJ0ZCIsIm0wMCIsIm0wMSIsIm0wMiIsIm0xMCIsIm0xMSIsIm0xMiIsInhvZnNfY291bnQiLCJjaCIsInNjYWxlX3giLCJzY2FsZV95IiwiaW52X3NjYWxlXzI1NiIsImR4IiwiZHkiLCJzeDEiLCJzeDIiLCJmc3gxIiwiZnN4MiIsImR4biIsImFscGhhIiwiYmV0YSIsImJldGExIiwic3VtX25vZGUiLCJ4b2ZzX25vZGUiLCJ4b2ZzIiwiYWJzIiwiZGF0YV90Iiwia2V5cG9pbnRfdCIsIm1hdG1hdGgiLCJtYXRyaXhfdCIsInB5cmFtaWRfdCIsImxpbmFsZyIsIm9yYiIsInlhcGUiLCJ5YXBlMDYiLCJtb3Rpb25fZXN0aW1hdG9yIiwiaG9tb2dyYXBoeTJkIiwicmFuc2FjX3BhcmFtc190IiwicGtnIiwianNmZWF0TmV4dCIsImR0IiwiX2dldF9kYXRhX3R5cGUiLCJfZ2V0X2NoYW5uZWwiLCJfZ2V0X2RhdGFfdHlwZV9zaXplIiwidmVyc2lvbiIsInNjb3JlIiwibGV2ZWwiLCJhbmdsZSIsInN3YXAiLCJBIiwiaTAiLCJpMSIsInQiLCJoeXBvdCIsInNxcnQiLCJhc3RlcCIsIlciLCJWIiwidnN0ZXAiLCJlcHMiLCJtIiwibCIsIl9pbiIsIl9pbjIiLCJpdGVycyIsIm1heF9pdGVyIiwibXYiLCJ2YWwiLCJwIiwicyIsImMiLCJhMCIsImIwIiwiaW5kUl9idWZmIiwiaW5kQ19idWZmIiwiaW5kUiIsImluZEMiLCJBdCIsIl9XIiwiVnQiLCJuMSIsIm1pbnZhbCIsIml0ZXIiLCJBaSIsIkFqIiwiVmkiLCJWaiIsImNoYW5nZWQiLCJ0MCIsInQxIiwic2QiLCJnYW1tYSIsImRlbHRhIiwic2VlZCIsInZhbDAiLCJhc3VtIiwiV19idWZmIiwiZjY0IiwiQiIsImFkIiwiYmQiLCJkIiwiY29sIiwicm93IiwiY29sMiIsImNzIiwicnMiLCJpbnZfZGlhZyIsIlUiLCJhdCIsIl9tIiwiX24iLCJhX2J1ZmYiLCJ3X2J1ZmYiLCJ2X2J1ZmYiLCJhX210Iiwid19tdCIsInZfbXQiLCJ0cmFuc3Bvc2UiLCJKYWNvYmlTVkRJbXBsIiwiWCIsInB1IiwicHYiLCJucm93cyIsIm5jb2xzIiwieHN1bSIsInRvbCIsInVfYnVmZiIsInVfbXQiLCJ1ZCIsIndkIiwidmQiLCJzdmRfZGVjb21wb3NlIiwicGEiLCJpZCIsInZlY3RzIiwidmFscyIsIkphY29iaUltcGwiLCJxc29ydF9zdGFjayIsImtlcm5lbCIsInNpZ21hX3giLCJzY2FsZV8yeCIsImtlcm5fbm9kZSIsIl9rZXJuZWwiLCJleHAiLCJtb2RlbCIsInNyY194MCIsInNyY195MCIsImRzdF94MCIsImRzdF95MCIsInNyY194MSIsInNyY195MSIsImRzdF94MSIsImRzdF95MSIsInNyY194MiIsInNyY195MiIsImRzdF94MiIsImRzdF95MiIsInNyY194MyIsInNyY195MyIsImRzdF94MyIsImRzdF95MyIsInQyIiwidDQiLCJ0NSIsInQ2IiwidDciLCJ0OCIsInQ5IiwidDEwIiwidDExIiwidDE0IiwidDE1IiwidDE2IiwidDE4IiwidDIwIiwidDIxIiwidDI0IiwidDI1IiwidDI2IiwidDI3IiwidDI4IiwidDMwIiwidDMyIiwidDM1IiwidDQxIiwidDQyIiwidDQzIiwidDQ2IiwidDQ4IiwidDUxIiwidDU1IiwiSHIwIiwiSHIxIiwiSHIyIiwiSHIzIiwiSHI0IiwiSHI1IiwiSHI2IiwiSHI3IiwiSGwwIiwiSGwxIiwiSGwyIiwiSGwzIiwiSGw0IiwiSGw1IiwiSGw2IiwiSGw3IiwidDEyIiwidDIzIiwidDMxIiwidDQ0IiwidDQ3IiwidDQ5IiwidDUwIiwibWF0IiwiYXJyYXkiLCJsb3ciLCJoaWdoIiwiY21wIiwiaXNvcnRfdGhyZXNoIiwidGEiLCJ0YiIsInRjIiwibGVmdCIsInJpZ2h0IiwicHRyIiwicHRyMiIsImxlZnQwIiwibGVmdDEiLCJyaWdodDAiLCJyaWdodDEiLCJwaXZvdCIsInN3YXBfY250Iiwic3RhY2siLCJtaWRkbGUiLCJsbCIsImhoIiwibWVkaWFuIiwiTSIsInZhbHVlIiwiY29sc18xIiwibGVuIiwiQXRpIiwicEF0IiwiYXRkIiwiQyIsIkFwIiwicEEiLCJwQiIsInBfQiIsIkNwIiwibWNvbHMiLCJjZCIsIm1yb3dzIiwicENkaWFnIiwicF9BIiwicEMiLCJwQ3QiLCJwX0MiLCJwX0NDIiwiZnJvbSIsInRvIiwiaW52QSIsInQxMyIsInQxNyIsIkNkIiwiQWQiLCJCZCIsIm0xXzAiLCJtMV8xIiwibTFfMiIsIm0xXzMiLCJtMV80IiwibTFfNSIsIm0xXzYiLCJtMV83IiwibTFfOCIsIm0yXzAiLCJtMl8xIiwibTJfMiIsIm0yXzMiLCJtMl80IiwibTJfNSIsIm0yXzYiLCJtMl83IiwibTJfOCIsIm1kIiwiTTExIiwiTTEyIiwiTTEzIiwiTTIxIiwiTTIyIiwiTTIzIiwiTTMxIiwiTTMyIiwiTTMzIiwiX2RhdGFfdHlwZSIsIl9kYXRhX2J1ZmZlciIsImJ1ZmZlciIsInU4Iiwib3RoZXIiLCJvZCIsIm5ld19zaXplIiwibmVlZF9jbnQiLCJtYXhfY250IiwiZnJvbV9zdWIiLCJ0b19zdWIiLCJtYXhfdHJ5IiwiaW5kaWNlcyIsInNzaXRlciIsImlkeF9pIiwib2siLCJyYW5kb20iLCJjaGVja19zdWJzZXQiLCJjb3VudCIsInRocmVzaCIsImVyciIsIm1hc2siLCJudW1pbmxpZXJzIiwiZiIsImVycm9yIiwicGFyYW1zIiwibWF4X2l0ZXJzIiwibW9kZWxfcG9pbnRzIiwibml0ZXJzIiwicmVzdWx0Iiwic3Vic2V0MCIsInN1YnNldDEiLCJmb3VuZCIsIm1jIiwibXIiLCJtX2J1ZmYiLCJtc19idWZmIiwiZXJyX2J1ZmYiLCJjdXJyX21hc2siLCJVOEMxX3QiLCJpbmxpZXJzX21heCIsIm5tb2RlbHMiLCJydW4iLCJjb3B5X3RvIiwiZ2V0X3N1YnNldCIsImZpbmRfaW5saWVycyIsInVwZGF0ZV9pdGVycyIsIl9tYXRoIiwibWluX21lZGlhbiIsIm1vdGlvbl9tb2RlbCIsIlQwIiwiVDEiLCJBdEEiLCJBdEIiLCJjeDAiLCJjeTAiLCJkMCIsInMwIiwiY3gxIiwiY3kxIiwiZDEiLCJzMSIsIlNRUlQyIiwicG9pbnRzIiwiZHgxIiwiZHkxIiwiZHgyIiwiZHkyIiwiYWZmaW5lMmQiLCJ0MGQiLCJ0MWQiLCJwdDAiLCJwdDEiLCJweCIsInB5IiwiX21hdG1hdGgiLCJfbGluYWxnIiwiaXNvX25vcm1hbGl6ZV9wb2ludHMiLCJiX2J1ZmYiLCJiX210IiwibXVsdGlwbHlfQXRBIiwibXVsdGlwbHlfQXRCIiwibHVfc29sdmUiLCJpbnZlcnRfM3gzIiwibXVsdGlwbHlfM3gzIiwibUx0TCIsIkV2ZWMiLCJMdEwiLCJldmQiLCJZIiwic214Iiwic215IiwiY214IiwiY215Iiwic014Iiwic015IiwiY014IiwiY015IiwiZWlnZW5WViIsInd3IiwibmVnYXRpdmUiLCJmcDAiLCJmcDEiLCJmcDIiLCJmcDMiLCJ0cDAiLCJ0cDEiLCJ0cDIiLCJ0cDMiLCJBMTEiLCJBMTIiLCJBMTMiLCJBMjEiLCJBMjIiLCJBMjMiLCJBMzEiLCJBMzIiLCJBMzMiLCJCMTEiLCJCMTIiLCJCMTMiLCJCMjEiLCJCMjIiLCJCMjMiLCJCMzEiLCJCMzIiLCJCMzMiLCJkZXRBIiwiZGV0ZXJtaW5hbnRfM3gzIiwiZGV0QiIsInByb2IiLCJfZXBzIiwibnVtIiwibG9nIiwiZGVub20iLCJwb3ciLCJBcnJheUJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJiaXRfcGF0dGVybl8zMSIsInJlY3RpZnlfcGF0Y2giLCJiaXRfcGF0dGVybl8zMV8iLCJIIiwicGF0Y2hfaW1nIiwiY29ybmVycyIsImRlc2NyaXB0b3JzIiwiREVTQ1JfU0laRSIsInBhdGNoX2QiLCJwYXRjaF9vZmYiLCJwYXR0IiwiZGVzY3JfZCIsImRlc2NyX29mZiIsInBzaXplIiwiY29zaW5lIiwic2luZSIsImltZ3ByYyIsIndhcnBfYWZmaW5lIiwibGV2ZWxzIiwiX2ltZ3Byb2MiLCJweXJkb3duIiwic3RhcnRfdyIsInN0YXJ0X2giLCJpbnB1dCIsInNraXBfZmlyc3RfbGV2ZWwiLCJ0aGlyZF9jaGVjayIsImlzX2xvY2FsX21heGltYSIsInBlcmZvcm1fb25lX3BvaW50IiwibGV2X3RhYmxlX3QiLCJsZXZlbF90YWJsZXMiLCJ0YXUiLCJweXJhbWlkX2xldmVscyIsImJvcmRlciIsIlIiLCJSbTEiLCJkaXJzIiwiZGlyc19jb3VudCIsIm9wcG9zaXRlIiwiaHciLCJzY29yZXMiLCJyb3d4IiwiaXAiLCJpbSIsImFic19zY29yZSIsIm51bWJlcl9vZl9wb2ludHMiLCJwdCIsImV4IiwiZXkiLCJwcmVjb21wdXRlX2RpcmVjdGlvbnMiLCJTYiIsInYiLCJuZWlnaGJvcmhvb2QiLCJJIiwiU2NvcmVzIiwiSW0iLCJJcCIsImRpcnNfbmIiLCJCMCIsIkIxIiwiQjIiLCJzdGF0ZSIsImNvbXB1dGVfbGFwbGFjaWFuIiwiaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUiLCJsYXBsYWNpYW5fdGhyZXNob2xkIiwibWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZCIsInNyZF9kIiwiRHh4IiwiRHl5IiwiRHh5IiwiRHl4IiwibGFwX2J1ZiIsImxhcGxhY2lhbiIsImx2IiwibWluX2VpZ2VuX3ZhbHVlIiwibGFwX3RocmVzaCIsImVpZ2VuX3RocmVzaCIsInlyb3ciLCJ0ciIsIkl4eCIsIkl5eSIsIkl4eSIsInNxcnRfZGVsdGEiXSwic291cmNlUm9vdCI6IiJ9