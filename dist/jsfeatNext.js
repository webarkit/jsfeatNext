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
  function pyramid_t() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, pyramid_t);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(pyramid_t, [{
    key: "cconstructor",
    value: function cconstructor(levels) {
      this.levels = levels | 0;
      this.data = new Array(levels); //jsfeatNext.imgproc.pyrdown is not yet implemented... 

      this.pyrdown = new _imgproc_imgproc_js__WEBPACK_IMPORTED_MODULE_2__["default"].pyrdown();
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBYztBQUNoQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCa0M7QUFDNkI7QUFDaEQ7QUFDZixlQUFlLHNEQUFPO0FBQ3RCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsU0FBUyxxRUFBcUI7QUFDOUI7Ozs7Ozs7Ozs7Ozs7O0FDVmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUVBQWU7RUFDWjdkLFVBQVUsRUFBVkEsc0RBQVVBO0FBREUsQ0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9jYWNoZS9jYWNoZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9kYXRhX3R5cGUvZGF0YV90eXBlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9jb252b2wuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbWdwcm9jL2ltZ3Byb2MuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbWdwcm9jL3Jlc2FtcGxlLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvanNmZWF0TmV4dC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2tleXBvaW50X3Qva2V5cG9pbnRfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2xpbmFsZy9saW5hbGctYmFzZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2xpbmFsZy9saW5hbGcuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tYXRoL21hdGguanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tYXRtYXRoL21hdG1hdGguanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tYXRyaXhfdC9tYXRyaXhfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX2VzdGltYXRvci5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX21vZGVsLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbW90aW9uX2VzdGltYXRvci9yYW5zYWNfcGFyYW1zX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL25vZGVfdXRpbHMvZGF0YV90LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvb3JiL2JpdF9wYXR0ZXJuXzMxLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvb3JiL29yYi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29yYi9yZWN0aWZ5X3BhdGNoLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvcHlyYW1pZF90L3B5cmFtaWRfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3lhcGUveWFwZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3lhcGUveWFwZV91dGlscy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3lhcGUwNi95YXBlMDYuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlMDYveWFwZTA2X3V0aWxzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FjaGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplID0gMDtcbiAgICB9XG4gICAgYWxsb2NhdGUoY2FwYWNpdHksIGRhdGFfc2l6ZSkge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX3RhaWwgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwYWNpdHk7ICsraSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgICAgICB0aGlzLl9wb29sX3RhaWwgPSB0aGlzLl9wb29sX3RhaWwubmV4dCA9IG5vZGU7XG5cbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldF9idWZmZXIoc2l6ZV9pbl9ieXRlcykge1xuICAgICAgICAvLyBhc3N1bWUgd2UgaGF2ZSBlbm91Z2ggZnJlZSBub2Rlc1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuX3Bvb2xfaGVhZDtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF9oZWFkLm5leHQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZS0tO1xuXG4gICAgICAgIGlmIChzaXplX2luX2J5dGVzID4gbm9kZS5zaXplKSB7XG4gICAgICAgICAgICBub2RlLnJlc2l6ZShzaXplX2luX2J5dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBwdXRfYnVmZmVyKG5vZGUpIHtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEpTRkVBVF9DT05TVEFOVFMgPSB7XG4gICAgLy8gQ09OU1RBTlRTXG4gICAgRVBTSUxPTjogMC4wMDAwMDAxMTkyMDkyODk2LFxuICAgIEZMVF9NSU46IDFFLTM3LFxuICAgIFU4X3Q6IDB4MDEwMCxcbiAgICBTMzJfdDogMHgwMjAwLFxuICAgIEYzMl90OiAweDA0MDAsXG4gICAgUzY0X3Q6IDB4MDgwMCxcbiAgICBGNjRfdDogMHgxMDAwLFxuICAgIEMxX3Q6IDB4MDEsXG4gICAgQzJfdDogMHgwMixcbiAgICBDM190OiAweDAzLFxuICAgIEM0X3Q6IDB4MDQsXG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgQ09MT1JfUkdCQTJHUkFZOiAwLFxuICAgIENPTE9SX1JHQjJHUkFZOiAxLFxuICAgIENPTE9SX0JHUkEyR1JBWTogMixcbiAgICBDT0xPUl9CR1IyR1JBWTogMyxcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIEJPWF9CTFVSX05PU0NBTEU6IDB4MDEsXG5cbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIFNWRF9VX1Q6IDB4MDEsXG4gICAgU1ZEX1ZfVDogMHgwMixcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBkYXRhX3R5cGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9kYXRhX3R5cGVfc2l6ZSA9IG5ldyBJbnQzMkFycmF5KFstMSwgMSwgNCwgLTEsIDQsIC0xLCAtMSwgLTEsIDgsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCA4XSk7O1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRjAwKTtcbiAgICB9XG5cbiAgICBfZ2V0X2NoYW5uZWwodHlwZSkge1xuICAgICAgICByZXR1cm4gKHR5cGUgJiAweEZGKTtcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFfdHlwZV9zaXplWyh0eXBlICYgMHhGRjAwKSA+PiA4XTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIF9jb252b2xfdTgoYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLCBzdW0xID0gMCwgc3VtMiA9IDAsIHN1bTMgPSAwLCBmMCA9IGZpbHRlclswXSwgZmsgPSAwO1xuICAgIHZhciB3MiA9IHcgPDwgMSwgdzMgPSB3ICogMywgdzQgPSB3IDw8IDI7XG4gICAgLy8gaG9yIHBhc3NcbiAgICBmb3IgKDsgaSA8IGg7ICsraSkge1xuICAgICAgICBzdW0gPSBzcmNfZFtzcF07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gMjsgaiArPSAyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBzcmNfZFtzcCArIGogKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IHNyY19kW3NwICsgdyAtIDFdO1xuICAgICAgICBmb3IgKGogPSB3OyBqIDwgaGFsZl9rZXJuZWwgKyB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDQ7IGogKz0gNCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAxXSA9IE1hdGgubWluKHN1bTEgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gTWF0aC5taW4oc3VtMiA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgM10gPSBNYXRoLm1pbihzdW0zID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3XSA9IE1hdGgubWluKHN1bTEgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzJdID0gTWF0aC5taW4oc3VtMiA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBNYXRoLm1pbihzdW0zID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGRwICs9IHcpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX2NvbnZvbChidWYsIHNyY19kLCBkc3RfZCwgdywgaCwgZmlsdGVyLCBrZXJuZWxfc2l6ZSwgaGFsZl9rZXJuZWwpIHtcbiAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgc3AgPSAwLCBkcCA9IDAsIHN1bSA9IDAuMCwgc3VtMSA9IDAuMCwgc3VtMiA9IDAuMCwgc3VtMyA9IDAuMCwgZjAgPSBmaWx0ZXJbMF0sIGZrID0gMC4wO1xuICAgIHZhciB3MiA9IHcgPDwgMSwgdzMgPSB3ICogMywgdzQgPSB3IDw8IDI7XG4gICAgLy8gaG9yIHBhc3NcbiAgICBmb3IgKDsgaSA8IGg7ICsraSkge1xuICAgICAgICBzdW0gPSBzcmNfZFtzcF07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gMjsgaiArPSAyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBzcmNfZFtzcCArIGogKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IHNyY19kW3NwICsgdyAtIDFdO1xuICAgICAgICBmb3IgKGogPSB3OyBqIDwgaGFsZl9rZXJuZWwgKyB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDQ7IGogKz0gNCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gc3VtO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMV0gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMl0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgM10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIHNwICs9IHc7XG4gICAgICAgIGRwICs9IHc7XG4gICAgfVxuXG4gICAgLy8gdmVydCBwYXNzXG4gICAgZm9yIChpID0gMDsgaSA8IHc7ICsraSkge1xuICAgICAgICBzdW0gPSBkc3RfZFtpXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGhhbGZfa2VybmVsOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBrID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gMjsgaiArPSAyLCBrICs9IHcyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gZHN0X2RbayArIHddO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBrICs9IHcpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgIH1cbiAgICAgICAgc3VtID0gZHN0X2RbKGggLSAxKSAqIHcgKyBpXTtcbiAgICAgICAgZm9yIChqID0gaDsgaiA8IGhhbGZfa2VybmVsICsgaDsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBkcCA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDQ7IGogKz0gNCwgZHAgKz0gdzQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gc3VtO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3XSA9IHN1bTE7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHcyXSA9IHN1bTI7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHczXSA9IHN1bTM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGRwICs9IHcpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBfcmVzYW1wbGUsIF9yZXNhbXBsZV91OCB9IGZyb20gJy4vcmVzYW1wbGUuanMnXG5pbXBvcnQgeyBfY29udm9sLCBfY29udm9sX3U4IH0gZnJvbSAnLi9jb252b2wuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnO1xuaW1wb3J0IG1hdGggZnJvbSAnLi4vbWF0aC9tYXRoLmpzJztcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbWdwcm9jIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICB9XG4gICAgZ3JheXNjYWxlKHNyYywgdywgaCwgZHN0LCBjb2RlKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgZGVmYXVsdCBpbWFnZSBkYXRhIHJlcHJlc2VudGF0aW9uIGluIGJyb3dzZXJcbiAgICAgICAgaWYgKHR5cGVvZiBjb2RlID09PSBcInVuZGVmaW5lZFwiKSB7IGNvZGUgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTsgfVxuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBpID0gMCwgaiA9IDAsIGlyID0gMCwganIgPSAwO1xuICAgICAgICB2YXIgY29lZmZfciA9IDQ4OTksIGNvZWZmX2cgPSA5NjE3LCBjb2VmZl9iID0gMTg2OCwgY24gPSA0O1xuXG4gICAgICAgIGlmIChjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSQTJHUkFZIHx8IGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1IyR1JBWSkge1xuICAgICAgICAgICAgY29lZmZfciA9IDE4Njg7XG4gICAgICAgICAgICBjb2VmZl9iID0gNDg5OTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQjJHUkFZIHx8IGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9CR1IyR1JBWSkge1xuICAgICAgICAgICAgY24gPSAzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbjIgPSBjbiA8PCAxLCBjbjMgPSAoY24gKiAzKSB8IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCAxKTtcbiAgICAgICAgdmFyIGRzdF91OCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoOyArK3ksIGogKz0gdywgaSArPSB3ICogY24pIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDAsIGlyID0gaSwganIgPSBqOyB4IDw9IHcgLSA0OyB4ICs9IDQsIGlyICs9IGNuIDw8IDIsIGpyICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfdThbanJdID0gKHNyY1tpcl0gKiBjb2VmZl9yICsgc3JjW2lyICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMV0gPSAoc3JjW2lyICsgY25dICogY29lZmZfciArIHNyY1tpciArIGNuICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24gKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAyXSA9IChzcmNbaXIgKyBjbjJdICogY29lZmZfciArIHNyY1tpciArIGNuMiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMiArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDNdID0gKHNyY1tpciArIGNuM10gKiBjb2VmZl9yICsgc3JjW2lyICsgY24zICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24zICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKytqciwgaXIgKz0gY24pIHtcbiAgICAgICAgICAgICAgICBkc3RfdThbanJdID0gKHNyY1tpcl0gKiBjb2VmZl9yICsgc3JjW2lyICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZGVyaXZlZCBmcm9tIENDViBsaWJyYXJ5XG4gICAgcmVzYW1wbGUoc3JjLCBkc3QsIG53LCBuaCkge1xuICAgICAgICB2YXIgaCA9IHNyYy5yb3dzLCB3ID0gc3JjLmNvbHM7XG4gICAgICAgIGlmIChoID4gbmggJiYgdyA+IG53KSB7XG4gICAgICAgICAgICBkc3QucmVzaXplKG53LCBuaCwgc3JjLmNoYW5uZWwpO1xuICAgICAgICAgICAgLy8gdXNpbmcgdGhlIGZhc3QgYWx0ZXJuYXRpdmUgKGZpeCBwb2ludCBzY2FsZSwgMHgxMDAgdG8gYXZvaWQgb3ZlcmZsb3cpXG4gICAgICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgZHN0LnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgJiYgaCAqIHcgLyAobmggKiBudykgPCAweDEwMCkge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZV91OChzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3Jlc2FtcGxlKHNyYywgZHN0LCB0aGlzLmNhY2hlLCBudywgbmgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJveF9ibHVyX2dyYXkoc3JjLCBkc3QsIHJhZGl1cywgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH1cbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzLCBoMiA9IGggPDwgMSwgdzIgPSB3IDw8IDE7XG4gICAgICAgIHZhciBpID0gMCwgeCA9IDAsIHkgPSAwLCBlbmQgPSAwO1xuICAgICAgICB2YXIgd2luZG93U2l6ZSA9ICgocmFkaXVzIDw8IDEpICsgMSkgfCAwO1xuICAgICAgICB2YXIgcmFkaXVzUGx1c09uZSA9IChyYWRpdXMgKyAxKSB8IDAsIHJhZGl1c1BsdXMyID0gKHJhZGl1c1BsdXNPbmUgKyAxKSB8IDA7XG4gICAgICAgIHZhciBzY2FsZSA9IG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLkJPWF9CTFVSX05PU0NBTEUgPyAxIDogKDEuMCAvICh3aW5kb3dTaXplICogd2luZG93U2l6ZSkpO1xuXG4gICAgICAgIHZhciB0bXBfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyAqIGgpIDw8IDIpO1xuXG4gICAgICAgIHZhciBzdW0gPSAwLCBkc3RJbmRleCA9IDAsIHNyY0luZGV4ID0gMCwgbmV4dFBpeGVsSW5kZXggPSAwLCBwcmV2aW91c1BpeGVsSW5kZXggPSAwO1xuICAgICAgICB2YXIgZGF0YV9pMzIgPSB0bXBfYnVmZi5pMzI7IC8vIHRvIHByZXZlbnQgb3ZlcmZsb3dcbiAgICAgICAgdmFyIGRhdGFfdTggPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIGhvbGQgPSAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIC8vIGZpcnN0IHBhc3NcbiAgICAgICAgLy8gbm8gbmVlZCB0byBzY2FsZSBcbiAgICAgICAgLy9kYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIC8vZGF0YV9pMzIgPSB0bXA7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoOyArK3kpIHtcbiAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX3U4W3NyY0luZGV4XTtcblxuICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IChzcmNJbmRleCArIHJhZGl1c1BsdXNPbmUpIHwgMDtcbiAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSBoMikge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleCArIGhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdyAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBob2xkID0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3JjSW5kZXggKz0gdztcbiAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyBzZWNvbmQgcGFzc1xuICAgICAgICBzcmNJbmRleCA9IDA7XG4gICAgICAgIC8vZGF0YV9pMzIgPSB0bXA7IC8vIHRoaXMgaXMgYSB0cmFuc3Bvc2VcbiAgICAgICAgZGF0YV91OCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIC8vIGRvbnQgc2NhbGUgcmVzdWx0XG4gICAgICAgIGlmIChzY2FsZSA9PSAxKSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IHcyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4ICsgd10gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaDsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3JjSW5kZXggKz0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3OyArK3kpIHtcbiAgICAgICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfaTMyW3NyY0luZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW2ldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gc3JjSW5kZXggKyByYWRpdXNQbHVzT25lO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4ICsgd10gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3JjSW5kZXggKz0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih0bXBfYnVmZik7XG4gICAgfVxuXG4gICAgZ2F1c3NpYW5fYmx1cihzcmMsIGRzdCwga2VybmVsX3NpemUsIHNpZ21hKSB7XG4gICAgICAgIHZhciBqc2ZlYXRtYXRoID0gbmV3IG1hdGgoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWdtYSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzaWdtYSA9IDAuMDsgfVxuICAgICAgICBpZiAodHlwZW9mIGtlcm5lbF9zaXplID09PSBcInVuZGVmaW5lZFwiKSB7IGtlcm5lbF9zaXplID0gMDsgfVxuICAgICAgICBrZXJuZWxfc2l6ZSA9IGtlcm5lbF9zaXplID09IDAgPyAoTWF0aC5tYXgoMSwgKDQuMCAqIHNpZ21hICsgMS4wIC0gMWUtOCkpICogMiArIDEpIHwgMCA6IGtlcm5lbF9zaXplO1xuICAgICAgICB2YXIgaGFsZl9rZXJuZWwgPSBrZXJuZWxfc2l6ZSA+PiAxO1xuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBkYXRhX3R5cGUgPSBzcmMudHlwZSwgaXNfdTggPSBkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIHZhciBidWYsIGZpbHRlciwgYnVmX3N6ID0gKGtlcm5lbF9zaXplICsgTWF0aC5tYXgoaCwgdykpIHwgMDtcblxuICAgICAgICB2YXIgYnVmX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoYnVmX3N6IDw8IDIpO1xuICAgICAgICB2YXIgZmlsdF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGtlcm5lbF9zaXplIDw8IDIpO1xuXG4gICAgICAgIGlmIChpc191OCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuZjMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuZjMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpzZmVhdG1hdGguZ2V0X2dhdXNzaWFuX2tlcm5lbChrZXJuZWxfc2l6ZSwgc2lnbWEsIGZpbHRlciwgZGF0YV90eXBlKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIF9jb252b2xfdTgoYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9jb252b2woYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihmaWx0X25vZGUpO1xuICAgIH1cbiAgICBob3VnaF90cmFuc2Zvcm0oaW1nLCByaG9fcmVzLCB0aGV0YV9yZXMsIHRocmVzaG9sZCkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBpbWcuZGF0YTtcblxuICAgICAgICB2YXIgd2lkdGggPSBpbWcuY29scztcbiAgICAgICAgdmFyIGhlaWdodCA9IGltZy5yb3dzO1xuICAgICAgICB2YXIgc3RlcCA9IHdpZHRoO1xuXG4gICAgICAgIHZhciBtaW5fdGhldGEgPSAwLjA7XG4gICAgICAgIHZhciBtYXhfdGhldGEgPSBNYXRoLlBJO1xuXG4gICAgICAgIHZhciBudW1hbmdsZSA9IE1hdGgucm91bmQoKG1heF90aGV0YSAtIG1pbl90aGV0YSkgLyB0aGV0YV9yZXMpO1xuICAgICAgICB2YXIgbnVtcmhvID0gTWF0aC5yb3VuZCgoKHdpZHRoICsgaGVpZ2h0KSAqIDIgKyAxKSAvIHJob19yZXMpO1xuICAgICAgICB2YXIgaXJobyA9IDEuMCAvIHJob19yZXM7XG5cbiAgICAgICAgdmFyIGFjY3VtID0gbmV3IEludDMyQXJyYXkoKG51bWFuZ2xlICsgMikgKiAobnVtcmhvICsgMikpOyAvL3R5cGVkIGFycmF5cyBhcmUgaW5pdGlhbGl6ZWQgdG8gMFxuICAgICAgICB2YXIgdGFiU2luID0gbmV3IEZsb2F0MzJBcnJheShudW1hbmdsZSk7XG4gICAgICAgIHZhciB0YWJDb3MgPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcblxuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIHZhciBhbmcgPSBtaW5fdGhldGE7XG4gICAgICAgIGZvciAoOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgdGFiU2luW25dID0gTWF0aC5zaW4oYW5nKSAqIGlyaG87XG4gICAgICAgICAgICB0YWJDb3Nbbl0gPSBNYXRoLmNvcyhhbmcpICogaXJobztcbiAgICAgICAgICAgIGFuZyArPSB0aGV0YV9yZXNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YWdlIDEuIGZpbGwgYWNjdW11bGF0b3JcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlW2kgKiBzdGVwICsgal0gIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHIsIChuKzEpICogKG51bXJobysyKSArIHIrMSwgdGFiQ29zW25dLCB0YWJTaW5bbl0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gTWF0aC5yb3VuZChqICogdGFiQ29zW25dICsgaSAqIHRhYlNpbltuXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByICs9IChudW1yaG8gLSAxKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2N1bVsobiArIDEpICogKG51bXJobyArIDIpICsgciArIDFdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAyLiBmaW5kIGxvY2FsIG1heGltdW1zXG4gICAgICAgIC8vVE9ETzogQ29uc2lkZXIgbWFraW5nIGEgdmVjdG9yIGNsYXNzIHRoYXQgdXNlcyB0eXBlZCBhcnJheXNcbiAgICAgICAgdmFyIF9zb3J0X2J1ZiA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IG51bXJobzsgcisrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFzZSA9IChuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMTtcbiAgICAgICAgICAgICAgICBpZiAoYWNjdW1bYmFzZV0gPiB0aHJlc2hvbGQgJiZcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bYmFzZV0gPiBhY2N1bVtiYXNlIC0gMV0gJiYgYWNjdW1bYmFzZV0gPj0gYWNjdW1bYmFzZSArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID4gYWNjdW1bYmFzZSAtIG51bXJobyAtIDJdICYmIGFjY3VtW2Jhc2VdID49IGFjY3VtW2Jhc2UgKyBudW1yaG8gKyAyXSkge1xuICAgICAgICAgICAgICAgICAgICBfc29ydF9idWYucHVzaChiYXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAzLiBzb3J0IHRoZSBkZXRlY3RlZCBsaW5lcyBieSBhY2N1bXVsYXRvciB2YWx1ZVxuICAgICAgICBfc29ydF9idWYuc29ydChmdW5jdGlvbiAobDEsIGwyKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjdW1bbDFdID4gYWNjdW1bbDJdIHx8IChhY2N1bVtsMV0gPT0gYWNjdW1bbDJdICYmIGwxIDwgbDIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzdGFnZSA0LiBzdG9yZSB0aGUgZmlyc3QgbWluKHRvdGFsLGxpbmVzTWF4KSBsaW5lcyB0byB0aGUgb3V0cHV0IGJ1ZmZlclxuICAgICAgICB2YXIgbGluZXNNYXggPSBNYXRoLm1pbihudW1hbmdsZSAqIG51bXJobywgX3NvcnRfYnVmLmxlbmd0aCk7XG4gICAgICAgIHZhciBzY2FsZSA9IDEuMCAvIChudW1yaG8gKyAyKTtcbiAgICAgICAgdmFyIGxpbmVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXNNYXg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkeCA9IF9zb3J0X2J1ZltpXTtcbiAgICAgICAgICAgIHZhciBuID0gTWF0aC5mbG9vcihpZHggKiBzY2FsZSkgLSAxO1xuICAgICAgICAgICAgdmFyIHIgPSBpZHggLSAobiArIDEpICogKG51bXJobyArIDIpIC0gMTtcbiAgICAgICAgICAgIHZhciBscmhvID0gKHIgLSAobnVtcmhvIC0gMSkgKiAwLjUpICogcmhvX3JlcztcbiAgICAgICAgICAgIHZhciBsYW5nbGUgPSBuICogdGhldGFfcmVzO1xuICAgICAgICAgICAgbGluZXMucHVzaChbbHJobywgbGFuZ2xlXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cbiAgICBweXJkb3duKHNyYywgZHN0LCBzeCwgc3kpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBuZWVkZWQgZm9yIGJiZlxuICAgICAgICBpZiAodHlwZW9mIHN4ID09PSBcInVuZGVmaW5lZFwiKSB7IHN4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHN5ID09PSBcInVuZGVmaW5lZFwiKSB7IHN5ID0gMDsgfVxuXG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cztcbiAgICAgICAgdmFyIHcyID0gdyA+PiAxLCBoMiA9IGggPj4gMTtcbiAgICAgICAgdmFyIF93MiA9IHcyIC0gKHN4IDw8IDEpLCBfaDIgPSBoMiAtIChzeSA8PCAxKTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgc3B0ciA9IHN4ICsgc3kgKiB3LCBzbGluZSA9IDAsIGRwdHIgPSAwLCBkbGluZSA9IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3MiwgaDIsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgX2gyOyArK3kpIHtcbiAgICAgICAgICAgIHNsaW5lID0gc3B0cjtcbiAgICAgICAgICAgIGRsaW5lID0gZHB0cjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gX3cyIC0gMjsgeCArPSAyLCBkbGluZSArPSAyLCBzbGluZSArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmVdID0gKHNyY19kW3NsaW5lXSArIHNyY19kW3NsaW5lICsgMV0gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHddICsgc3JjX2Rbc2xpbmUgKyB3ICsgMV0gKyAyKSA+PiAyO1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lICsgMV0gPSAoc3JjX2Rbc2xpbmUgKyAyXSArIHNyY19kW3NsaW5lICsgM10gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHcgKyAyXSArIHNyY19kW3NsaW5lICsgdyArIDNdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgX3cyOyArK3gsICsrZGxpbmUsIHNsaW5lICs9IDIpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArXG4gICAgICAgICAgICAgICAgICAgIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcHRyICs9IHcgPDwgMTtcbiAgICAgICAgICAgIGRwdHIgKz0gdzI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBvciAyeDMgbWF0cml4X3Qgb25seSBmaXJzdCA2IHZhbHVlcyByZWZlcmVuY2VkXG4gICAgd2FycF9hZmZpbmUoc3JjLCBkc3QsIHRyYW5zZm9ybSwgZmlsbF92YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGxfdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgZmlsbF92YWx1ZSA9IDA7IH1cbiAgICAgICAgdmFyIHNyY193aWR0aCA9IHNyYy5jb2xzLCBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MsIGRzdF93aWR0aCA9IGRzdC5jb2xzLCBkc3RfaGVpZ2h0ID0gZHN0LnJvd3M7XG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgeCA9IDAsIHkgPSAwLCBvZmYgPSAwLCBpeHMgPSAwLCBpeXMgPSAwLCB4cyA9IDAuMCwgeXMgPSAwLjAsIGEgPSAwLjAsIGIgPSAwLjAsIHAwID0gMC4wLCBwMSA9IDAuMDtcbiAgICAgICAgdmFyIHRkID0gdHJhbnNmb3JtLmRhdGE7XG4gICAgICAgIHZhciBtMDAgPSB0ZFswXSwgbTAxID0gdGRbMV0sIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sIG0xMSA9IHRkWzRdLCBtMTIgPSB0ZFs1XTtcblxuICAgICAgICBmb3IgKHZhciBkcHRyID0gMDsgeSA8IGRzdF9oZWlnaHQ7ICsreSkge1xuICAgICAgICAgICAgeHMgPSBtMDEgKiB5ICsgbTAyO1xuICAgICAgICAgICAgeXMgPSBtMTEgKiB5ICsgbTEyO1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IGRzdF93aWR0aDsgKyt4LCArK2RwdHIsIHhzICs9IG0wMCwgeXMgKz0gbTEwKSB7XG4gICAgICAgICAgICAgICAgaXhzID0geHMgfCAwOyBpeXMgPSB5cyB8IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXhzID49IDAgJiYgaXlzID49IDAgJiYgaXhzIDwgKHNyY193aWR0aCAtIDEpICYmIGl5cyA8IChzcmNfaGVpZ2h0IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHhzIC0gaXhzO1xuICAgICAgICAgICAgICAgICAgICBiID0geXMgLSBpeXM7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IHNyY193aWR0aCAqIGl5cyArIGl4cztcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBkc3RfZFtkcHRyXSA9IGZpbGxfdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9pbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlX3U4IChzcmMsIGRzdCwgY2FjaGUsIG53LCBuaCkge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIGludl9zY2FsZV8yNTYgPSAoc2NhbGVfeCAqIHNjYWxlX3kgKiAweDEwMDAwKSB8IDA7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMCwgYmV0YSA9IDAsIGJldGExID0gMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuaTMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmkzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIDEpICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gZnN4MSkgKiAweDEwMCkgfCAwO1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IDI1NjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnN4MiAtIHN4MiA+IDFlLTMpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoZnN4MiAtIHN4MikgKiAyNTYpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzXTtcbiAgICAgICAgICAgIHN4MSA9IHhvZnNbayAqIDMgKyAxXTtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSAoTWF0aC5tYXgoc3kgKyAxIC0gKGR5ICsgMSkgKiBzY2FsZV95LCAwLjApICogMjU2KSB8IDA7XG4gICAgICAgICAgICBiZXRhMSA9IDI1NiAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChiZXRhIDw9IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiAyNTYpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExKSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdICogMjU2O1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FjaGUucHV0X2J1ZmZlcihzdW1fbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgY2FjaGUucHV0X2J1ZmZlcih4b2ZzX25vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX3Jlc2FtcGxlIChzcmMsIGRzdCwgY2FjaGUsIG53LCBuaCkge1xuICAgIHZhciB4b2ZzX2NvdW50ID0gMDtcbiAgICB2YXIgY2ggPSBzcmMuY2hhbm5lbCwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgdmFyIHNjYWxlX3ggPSB3IC8gbncsIHNjYWxlX3kgPSBoIC8gbmg7XG4gICAgdmFyIHNjYWxlID0gMS4wIC8gKHNjYWxlX3ggKiBzY2FsZV95KTtcbiAgICB2YXIgZHggPSAwLCBkeSA9IDAsIHN4ID0gMCwgc3kgPSAwLCBzeDEgPSAwLCBzeDIgPSAwLCBpID0gMCwgayA9IDAsIGZzeDEgPSAwLjAsIGZzeDIgPSAwLjA7XG4gICAgdmFyIGEgPSAwLCBiID0gMCwgZHhuID0gMCwgYWxwaGEgPSAwLjAsIGJldGEgPSAwLjAsIGJldGExID0gMC4wO1xuXG4gICAgdmFyIGJ1Zl9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHN1bV9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgdmFyIHhvZnNfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKHcgKiAyICogMykgPDwgMik7XG5cbiAgICB2YXIgYnVmID0gYnVmX25vZGUuZjMyO1xuICAgIHZhciBzdW0gPSBzdW1fbm9kZS5mMzI7XG4gICAgdmFyIHhvZnMgPSB4b2ZzX25vZGUuZjMyO1xuXG4gICAgZm9yICg7IGR4IDwgbnc7IGR4KyspIHtcbiAgICAgICAgZnN4MSA9IGR4ICogc2NhbGVfeCwgZnN4MiA9IGZzeDEgKyBzY2FsZV94O1xuICAgICAgICBzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCwgc3gyID0gZnN4MiB8IDA7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MSAtIGZzeDEpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZnN4MiAtIHN4MikgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzXSB8IDA7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzICsgMV0gfCAwO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKTtcbiAgICAgICAgICAgIGJldGExID0gMS4wIC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGJldGEpIDwgMWUtMykge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdO1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn0iLCJpbXBvcnQgX3Bvb2xfbm9kZV90IGZyb20gJy4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMnXG5pbXBvcnQgZGF0YV90eXBlIGZyb20gJy4vZGF0YV90eXBlL2RhdGFfdHlwZS5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlL2NhY2hlLmpzJ1xuaW1wb3J0IGRhdGFfdCBmcm9tICcuL25vZGVfdXRpbHMvZGF0YV90LmpzJ1xuaW1wb3J0IGtleXBvaW50X3QgZnJvbSAnLi9rZXlwb2ludF90L2tleXBvaW50X3QuanMnXG5pbXBvcnQgaW1ncHJvYyBmcm9tICcuL2ltZ3Byb2MvaW1ncHJvYy5qcydcbmltcG9ydCBtYXRoIGZyb20gJy4vbWF0aC9tYXRoLmpzJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi9tYXRtYXRoL21hdG1hdGguanMnXG5pbXBvcnQgbWF0cml4X3QgZnJvbSAnLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcbmltcG9ydCBweXJhbWlkX3QgZnJvbSAnLi9weXJhbWlkX3QvcHlyYW1pZF90LmpzJ1xuaW1wb3J0IGxpbmFsZyBmcm9tICcuL2xpbmFsZy9saW5hbGcuanMnXG5pbXBvcnQgb3JiIGZyb20gJy4vb3JiL29yYi5qcydcbmltcG9ydCB5YXBlIGZyb20gJy4veWFwZS95YXBlLmpzJ1xuaW1wb3J0IHlhcGUwNiBmcm9tICcuL3lhcGUwNi95YXBlMDYuanMnXG5pbXBvcnQgbW90aW9uX2VzdGltYXRvciBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX2VzdGltYXRvci5qcydcbmltcG9ydCB7aG9tb2dyYXBoeTJkfSBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvbW90aW9uX21vZGVsLmpzJ1xuaW1wb3J0IHJhbnNhY19wYXJhbXNfdCBmcm9tICcuL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqc2ZlYXROZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICB9XG5cbiAgICAvLyBWRVJTSU9OXG4gICAgc3RhdGljIFZFUlNJT04gPSBwa2cudmVyc2lvbjtcblxuICAgIC8vIENPTlNUQU5UU1xuICAgIHN0YXRpYyBFUFNJTE9OID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgIHN0YXRpYyBGTFRfTUlOID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgIHN0YXRpYyBVOF90ID0gSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuICAgIHN0YXRpYyBTMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzMyX3Q7XG4gICAgc3RhdGljIEYzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5GMzJfdDtcbiAgICBzdGF0aWMgUzY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlM2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEY2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5GNjRfdDtcbiAgICBzdGF0aWMgQzFfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcbiAgICBzdGF0aWMgQzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzJfdDtcbiAgICBzdGF0aWMgQzNfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzNfdDtcbiAgICBzdGF0aWMgQzRfdCA9IEpTRkVBVF9DT05TVEFOVFMuQzRfdDtcblxuICAgIC8vIGNvbG9yIGNvbnZlcnNpb25cbiAgICBzdGF0aWMgQ09MT1JfUkdCQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX1JHQjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuXG4gICAgLy8gYm94IGJsdXIgb3B0aW9uXG4gICAgc3RhdGljIEJPWF9CTFVSX05PU0NBTEUgPSBKU0ZFQVRfQ09OU1RBTlRTLkJPWF9CTFVSX05PU0NBTEU7XG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBzdGF0aWMgU1ZEX1VfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVDtcbiAgICBzdGF0aWMgU1ZEX1ZfVCA9IEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVDtcblxuICAgIC8vIHBvcHVsYXIgZm9ybWF0c1xuICAgIHN0YXRpYyBVOEMxX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFU4QzNfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzNfdDtcbiAgICBzdGF0aWMgVThDNF90ID0gdGhpcy5VOF90IHwgdGhpcy5DNF90O1xuXG4gICAgc3RhdGljIEYzMkMxX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBGMzJDMl90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzJfdDtcbiAgICBzdGF0aWMgUzMyQzFfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIFMzMkMyX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMl90O1xuXG4gICAgZ2V0X2RhdGFfdHlwZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9jaGFubmVsKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9jaGFubmVsKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodHlwZSk7XG4gICAgfVxufVxuXG5qc2ZlYXROZXh0LmRhdGFfdCA9IGRhdGFfdFxuXG5qc2ZlYXROZXh0Lm1hdHJpeF90ID0gbWF0cml4X3Q7XG5cbmpzZmVhdE5leHQucHlyYW1pZF90ID0gcHlyYW1pZF90O1xuXG5qc2ZlYXROZXh0LmtleXBvaW50X3QgPSBrZXlwb2ludF90O1xuXG5qc2ZlYXROZXh0LmNhY2hlID0gY2FjaGU7XG5cbmpzZmVhdE5leHQuaW1ncHJvYyA9IGltZ3Byb2M7XG5cbmpzZmVhdE5leHQubWF0aCA9IG1hdGg7XG5cbmpzZmVhdE5leHQubWF0bWF0aCA9IG1hdG1hdGg7XG5cbmpzZmVhdE5leHQubGluYWxnID0gbGluYWxnO1xuXG5qc2ZlYXROZXh0Lm9yYiA9IG9yYjtcblxuanNmZWF0TmV4dC55YXBlID0geWFwZTtcblxuanNmZWF0TmV4dC55YXBlMDYgPSB5YXBlMDY7XG5cbmpzZmVhdE5leHQubW90aW9uX2VzdGltYXRvciA9IG1vdGlvbl9lc3RpbWF0b3I7XG5cbmpzZmVhdE5leHQucmFuc2FjX3BhcmFtc190ID0gcmFuc2FjX3BhcmFtc190O1xuXG5qc2ZlYXROZXh0LmhvbW9ncmFwaHkyZCA9IGhvbW9ncmFwaHkyZDsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBrZXlwb2ludF90IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBzY29yZSwgbGV2ZWwsIGFuZ2xlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikgeyB4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHsgeSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzY29yZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzY29yZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBhbmdsZSA9IC0xLjA7IH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gc3dhcChBLCBpMCwgaTEsIHQpIHtcbiAgICB0ID0gQVtpMF07XG4gICAgQVtpMF0gPSBBW2kxXTtcbiAgICBBW2kxXSA9IHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBvdChhLCBiKSB7XG4gICAgYSA9IE1hdGguYWJzKGEpO1xuICAgIGIgPSBNYXRoLmFicyhiKTtcbiAgICBpZiggYSA+IGIgKSB7XG4gICAgICAgIGIgLz0gYTtcbiAgICAgICAgcmV0dXJuIGEqTWF0aC5zcXJ0KDEuMCArIGIqYik7XG4gICAgfVxuICAgIGlmKCBiID4gMCApIHtcbiAgICAgICAgYSAvPSBiO1xuICAgICAgICByZXR1cm4gYipNYXRoLnNxcnQoMS4wICsgYSphKTtcbiAgICB9XG4gICAgcmV0dXJuIDAuMDtcbn0iLCJpbXBvcnQganNmZWF0TmV4dCBmcm9tICcuLi9qc2ZlYXROZXh0LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnO1xuaW1wb3J0IHsgc3dhcCwgaHlwb3QgfSBmcm9tICcuL2xpbmFsZy1iYXNlLmpzJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi4vbWF0bWF0aC9tYXRtYXRoLmpzJ1xuaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaW5hbGcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgICAgICB0aGlzLm1hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgIH1cblxuICAgIEphY29iaUltcGwoQSwgYXN0ZXAsIFcsIFYsIHZzdGVwLCBuKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBtID0gMCwgbCA9IDAsIGlkeCA9IDAsIF9pbiA9IDAsIF9pbjIgPSAwO1xuICAgICAgICB2YXIgaXRlcnMgPSAwLCBtYXhfaXRlciA9IG4gKiBuICogMzA7XG4gICAgICAgIHZhciBtdiA9IDAuMCwgdmFsID0gMC4wLCBwID0gMC4wLCB5ID0gMC4wLCB0ID0gMC4wLCBzID0gMC4wLCBjID0gMC4wLCBhMCA9IDAuMCwgYjAgPSAwLjA7XG5cbiAgICAgICAgdmFyIGluZFJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICB2YXIgaW5kQ19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMik7XG4gICAgICAgIHZhciBpbmRSID0gaW5kUl9idWZmLmkzMjtcbiAgICAgICAgdmFyIGluZEMgPSBpbmRDX2J1ZmYuaTMyO1xuXG4gICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGsgPSBpICogdnN0ZXA7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBWW2sgKyBqXSA9IDAuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVltrICsgaV0gPSAxLjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBXW2tdID0gQVsoYXN0ZXAgKyAxKSAqIGtdO1xuICAgICAgICAgICAgaWYgKGsgPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgIGZvciAobSA9IGsgKyAxLCBtdiA9IE1hdGguYWJzKEFbYXN0ZXAgKiBrICsgbV0pLCBpID0gayArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGsgKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kUltrXSA9IG07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoayA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKG0gPSAwLCBtdiA9IE1hdGguYWJzKEFba10pLCBpID0gMTsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaSArIGtdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRDW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuID4gMSkgZm9yICg7IGl0ZXJzIDwgbWF4X2l0ZXI7IGl0ZXJzKyspIHtcbiAgICAgICAgICAgIC8vIGZpbmQgaW5kZXggKGssbCkgb2YgcGl2b3QgcFxuICAgICAgICAgICAgZm9yIChrID0gMCwgbXYgPSBNYXRoLmFicyhBW2luZFJbMF1dKSwgaSA9IDE7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpbmRSW2ldXSk7XG4gICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgayA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsID0gaW5kUltrXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaW5kQ1tpXSArIGldKTtcbiAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaW5kQ1tpXSwgbCA9IGk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAgPSBBW2FzdGVwICogayArIGxdO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocCkgPD0gZXBzKSBicmVhaztcblxuICAgICAgICAgICAgeSA9IChXW2xdIC0gV1trXSkgKiAwLjU7XG4gICAgICAgICAgICB0ID0gTWF0aC5hYnMoeSkgKyBoeXBvdChwLCB5KTtcbiAgICAgICAgICAgIHMgPSBoeXBvdChwLCB0KTtcbiAgICAgICAgICAgIGMgPSB0IC8gcztcbiAgICAgICAgICAgIHMgPSBwIC8gczsgdCA9IChwIC8gdCkgKiBwO1xuICAgICAgICAgICAgaWYgKHkgPCAwKVxuICAgICAgICAgICAgICAgIHMgPSAtcywgdCA9IC10O1xuICAgICAgICAgICAgQVthc3RlcCAqIGsgKyBsXSA9IDA7XG5cbiAgICAgICAgICAgIFdba10gLT0gdDtcbiAgICAgICAgICAgIFdbbF0gKz0gdDtcblxuICAgICAgICAgICAgLy8gcm90YXRlIHJvd3MgYW5kIGNvbHVtbnMgayBhbmQgbFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICAgICAgICAgIF9pbiA9IChhc3RlcCAqIGkgKyBrKTtcbiAgICAgICAgICAgICAgICBfaW4yID0gKGFzdGVwICogaSArIGwpO1xuICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICBBW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IChrICsgMSk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpID0gbCArIDE7XG4gICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBrICsgaSk7XG4gICAgICAgICAgICBfaW4yID0gKGFzdGVwICogbCArIGkpO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSBlaWdlbnZlY3RvcnNcbiAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgX2luID0gdnN0ZXAgKiBrO1xuICAgICAgICAgICAgICAgIF9pbjIgPSB2c3RlcCAqIGw7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKywgX2luKyssIF9pbjIrKykge1xuICAgICAgICAgICAgICAgICAgICBhMCA9IFZbX2luXTtcbiAgICAgICAgICAgICAgICAgICAgYjAgPSBWW19pbjJdO1xuICAgICAgICAgICAgICAgICAgICBWW19pbl0gPSBhMCAqIGMgLSBiMCAqIHM7XG4gICAgICAgICAgICAgICAgICAgIFZbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gaiA9PSAwID8gayA6IGw7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IGlkeCArIDEsIG12ID0gTWF0aC5hYnMoQVthc3RlcCAqIGlkeCArIG1dKSwgaSA9IGlkeCArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZFJbaWR4XSA9IG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtpZHhdKSwgaSA9IDE7IGkgPCBpZHg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kQ1tpZHhdID0gbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzb3J0IGVpZ2VudmFsdWVzICYgZWlnZW52ZWN0b3JzXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuIC0gMTsgaysrKSB7XG4gICAgICAgICAgICBtID0gaztcbiAgICAgICAgICAgIGZvciAoaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbbV0gPCBXW2ldKVxuICAgICAgICAgICAgICAgICAgICBtID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrICE9IG0pIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIG0sIGssIG12KTtcbiAgICAgICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFYsIHZzdGVwICogbSArIGksIHZzdGVwICogayArIGksIG12KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZFJfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRDX2J1ZmYpO1xuICAgIH1cblxuICAgIEphY29iaVNWREltcGwoQXQsIGFzdGVwLCBfVywgVnQsIHZzdGVwLCBtLCBuLCBuMSkge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogMi4wO1xuICAgICAgICB2YXIgbWludmFsID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgaXRlciA9IDAsIG1heF9pdGVyID0gTWF0aC5tYXgobSwgMzApO1xuICAgICAgICB2YXIgQWkgPSAwLCBBaiA9IDAsIFZpID0gMCwgVmogPSAwLCBjaGFuZ2VkID0gMDtcbiAgICAgICAgdmFyIGMgPSAwLjAsIHMgPSAwLjAsIHQgPSAwLjA7XG4gICAgICAgIHZhciB0MCA9IDAuMCwgdDEgPSAwLjAsIHNkID0gMC4wLCBiZXRhID0gMC4wLCBnYW1tYSA9IDAuMCwgZGVsdGEgPSAwLjAsIGEgPSAwLjAsIHAgPSAwLjAsIGIgPSAwLjA7XG4gICAgICAgIHZhciBzZWVkID0gMHgxMjM0O1xuICAgICAgICB2YXIgdmFsID0gMC4wLCB2YWwwID0gMC4wLCBhc3VtID0gMC4wO1xuXG4gICAgICAgIHZhciBXX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIFcgPSBXX2J1ZmYuZjY0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gc2Q7XG5cbiAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVnRbaSAqIHZzdGVwICsga10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG1heF9pdGVyOyBpdGVyKyspIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFpID0gKGkgKiBhc3RlcCkgfCAwLCBBaiA9IChqICogYXN0ZXApIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgYSA9IFdbaV0sIHAgPSAwLCBiID0gV1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaV0gKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWkgKyAxXSAqIEF0W0FqICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGsgPCBtOyBrKyspXG4gICAgICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpICsga10gKiBBdFtBaiArIGtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMgKiBNYXRoLnNxcnQoYSAqIGIpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBwICo9IDIuMDtcbiAgICAgICAgICAgICAgICAgICAgYmV0YSA9IGEgLSBiLCBnYW1tYSA9IGh5cG90KHAsIGJldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmV0YSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0gKGdhbW1hIC0gYmV0YSkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gTWF0aC5zcXJ0KGRlbHRhIC8gZ2FtbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChwIC8gKGdhbW1hICogcyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguc3FydCgoZ2FtbWEgKyBiZXRhKSAvIChnYW1tYSAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IChwIC8gKGdhbW1hICogYyAqIDIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IDAuMCwgYiA9IDAuMDtcblxuICAgICAgICAgICAgICAgICAgICBrID0gMjsgLy8gdW5yb2xsXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpXSArIHMgKiBBdFtBal07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaV0gKyBjICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaV0gPSB0MDsgQXRbQWpdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIEF0W0FpICsgMV0gKyBzICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpICsgMV0gKyBjICogQXRbQWogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyAxXSA9IHQwOyBBdFtBaiArIDFdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaSArIGtdICsgcyAqIEF0W0FqICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWkgKyBrXSArIGMgKiBBdFtBaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXRbQWkgKyBrXSA9IHQwOyBBdFtBaiArIGtdID0gdDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gdDAgKiB0MDsgYiArPSB0MSAqIHQxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGE7IFdbal0gPSBiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmkgPSAoaSAqIHZzdGVwKSB8IDAsIFZqID0gKGogKiB2c3RlcCkgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpXSArIHMgKiBWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmldICsgYyAqIFZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpXSA9IHQwOyBWdFtWal0gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogVnRbVmkgKyAxXSArIHMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpICsgMV0gKyBjICogVnRbVmogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsgMV0gPSB0MDsgVnRbVmogKyAxXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpICsga10gKyBzICogVnRbVmogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyBrXSArIGMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsga10gPSB0MDsgVnRbVmogKyBrXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYW5nZWQgPT0gMCkgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFdbal0gPCBXW2tdKVxuICAgICAgICAgICAgICAgICAgICBqID0gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICE9IGopIHtcbiAgICAgICAgICAgICAgICBzd2FwKFcsIGksIGosIHNkKTtcbiAgICAgICAgICAgICAgICBpZiAoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChBdCwgaSAqIGFzdGVwICsgaywgaiAqIGFzdGVwICsgaywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFZ0LCBpICogdnN0ZXAgKyBrLCBqICogdnN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIF9XW2ldID0gV1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghVnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihXX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4xOyBpKyspIHtcblxuICAgICAgICAgICAgc2QgPSBpIDwgbiA/IFdbaV0gOiAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoc2QgPD0gbWludmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZ290IGEgemVybyBzaW5ndWxhciB2YWx1ZSwgdGhlbiBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCBzaW5ndWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAvLyB3ZSBnZW5lcmF0ZSBhIHJhbmRvbSB2ZWN0b3IsIHByb2plY3QgaXQgdG8gdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzLFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IHRoZSBwcm9qZWN0aW9uIGFuZCBub3JtYWxpemUgdGhlIGRpZmZlcmVuY2UuXG4gICAgICAgICAgICAgICAgdmFsMCA9ICgxLjAgLyBtKTtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZWQgPSAoc2VlZCAqIDIxNDAxMyArIDI1MzEwMTEpO1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSAoKChzZWVkID4+IDE2KSAmIDB4N2ZmZikgJiAyNTYpICE9IDAgPyB2YWwwIDogLXZhbDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGl0ZXIgPSAwOyBpdGVyIDwgMjsgaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZCArPSBBdFtpICogYXN0ZXAgKyBrXSAqIEF0W2ogKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKEF0W2kgKiBhc3RlcCArIGtdIC0gc2QgKiBBdFtqICogYXN0ZXAgKyBrXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSAqIGFzdGVwICsga10gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gKz0gTWF0aC5hYnModCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gYXN1bSA/IDEuMCAvIGFzdW0gOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IGFzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IEF0W2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzID0gKDEuMCAvIHNkKTtcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSAqPSBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgfVxuXG4gICAgbHVfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgcCA9IDEsIGFzdGVwID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdCwgYWxwaGEsIGQsIHM7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzdGVwOyBpKyspIHtcbiAgICAgICAgICAgIGsgPSBpO1xuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2ogKiBhc3RlcCArIGldKSA+IE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSkge1xuICAgICAgICAgICAgICAgICAgICBrID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gRkFJTEVEXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrICE9IGkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBzd2FwKGFkLCBpICogYXN0ZXAgKyBqLCBrICogYXN0ZXAgKyBqLCB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2FwKGJkLCBpLCBrLCB0KTtcbiAgICAgICAgICAgICAgICBwID0gLXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQgPSAtMS4wIC8gYWRbaSAqIGFzdGVwICsgaV07XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGFscGhhID0gYWRbaiAqIGFzdGVwICsgaV0gKiBkO1xuXG4gICAgICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkW2ogKiBhc3RlcCArIGtdICs9IGFscGhhICogYWRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYmRbal0gKz0gYWxwaGEgKiBiZFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRbaSAqIGFzdGVwICsgaV0gPSAtZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IGFzdGVwIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHMgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgIHMgLT0gYWRbaSAqIGFzdGVwICsga10gKiBiZFtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gcyAqIGFkW2kgKiBhc3RlcCArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7IC8vIE9LXG4gICAgfVxuXG4gICAgY2hvbGVza3lfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgY29sID0gMCwgcm93ID0gMCwgY29sMiA9IDAsIGNzID0gMCwgcnMgPSAwLCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBzaXplID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdmFsLCBpbnZfZGlhZztcblxuICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBpbnZfZGlhZyA9IDEuMDtcbiAgICAgICAgICAgIGNzID0gKGNvbCAqIHNpemUpO1xuICAgICAgICAgICAgcnMgPSBjcztcbiAgICAgICAgICAgIGZvciAocm93ID0gY29sOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZm9yIHRoZSBwYXJ0cyBvZiBjaG9sZXNreSBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgICAgICAgICAgdmFsID0gYWRbKHJzICsgY29sKV07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY29sMiAqIHNpemUgKyBjb2wpXSAqIGFkWyhycyArIGNvbDIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGlhZ29uYWwgZWxlbWVudCBzbyBkb24ndCBkaXZpZGVcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbKGNzICsgcm93KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdmlkZSBteSB0aGUgZGlhZ29uYWwgZWxlbWVudCBmb3IgYWxsIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbCAqIGludl9kaWFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycyA9IChycyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaildICogYmRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIGRpYWdvbmFsXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYmRbaV0gLz0gYWRbKGNzICsgaSldO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggTCBUcmFuc3Bvc2VcbiAgICAgICAgaSA9IChzaXplIC0gMSk7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBqID0gKGkgKyAxKTtcbiAgICAgICAgICAgIGNzID0gKGogKiBzaXplKTtcbiAgICAgICAgICAgIGZvciAoOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGkpXSAqIGJkW2pdO1xuICAgICAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQSwgVywgVSwgViwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH07XG4gICAgICAgIHZhciBhdCA9IDAsIGkgPSAwLCBqID0gMCwgX20gPSBBLnJvd3MsIF9uID0gQS5jb2xzLCBtID0gX20sIG4gPSBfbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90OyAvLyB3ZSBvbmx5IHdvcmsgd2l0aCBzaW5nbGUgY2hhbm5lbCBcblxuICAgICAgICBpZiAobSA8IG4pIHtcbiAgICAgICAgICAgIGF0ID0gMTtcbiAgICAgICAgICAgIGkgPSBtO1xuICAgICAgICAgICAgbSA9IG47XG4gICAgICAgICAgICBuID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG0gKiBtKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QobSwgbSwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgLy8gdHJhbnNwb3NlXG4gICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKGFfbXQsIEEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IF9uICogX207IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IEEuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbiAqIG07IGkrKykge1xuICAgICAgICAgICAgICAgIGFfbXQuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkphY29iaVNWREltcGwoYV9tdC5kYXRhLCBtLCB3X210LmRhdGEsIHZfbXQuZGF0YSwgbiwgbSwgbiwgbSk7XG5cbiAgICAgICAgaWYgKFcpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSB3X210LmRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgaSA8IF9uOyBpKyspIHtcbiAgICAgICAgICAgICAgICBXLmRhdGFbaV0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0ID09IDApIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgYV9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgdl9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoVSAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFUuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFUsIHZfbXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoViAmJiAob3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1ZfVCkpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIGFfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcblxuICAgIH1cblxuICAgIHN2ZF9zb2x2ZShBLCBYLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcHUgPSAwLCBwdiA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHhzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcblxuICAgICAgICB2YXIgdV9tdCA9IG5ldyBtYXRyaXhfdChucm93cywgbnJvd3MsIGR0LCB1X2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IG1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBtYXRyaXhfdChuY29scywgbmNvbHMsIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGJkID0gQi5kYXRhLCB1ZCA9IHVfbXQuZGF0YSwgd2QgPSB3X210LmRhdGEsIHZkID0gdl9tdC5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3ZkX2RlY29tcG9zZShBLCB3X210LCB1X210LCB2X210LCAwKTtcblxuICAgICAgICB0b2wgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiB3ZFswXSAqIG5jb2xzO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IGkrKywgcHYgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgIHhzdW0gPSAwLjA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh3ZFtqXSA+IHRvbCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBzdW0gPSAwLjAsIHB1ID0gMDsgayA8IG5yb3dzOyBrKyssIHB1ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gdWRbcHUgKyBqXSAqIGJkW2tdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHhzdW0gKz0gc3VtICogdmRbcHYgKyBqXSAvIHdkW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFguZGF0YVtpXSA9IHhzdW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIHN2ZF9pbnZlcnQoQWksIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMCwgcGEgPSAwO1xuICAgICAgICB2YXIgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgc3VtID0gMC4wLCB0b2wgPSAwLjA7XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICAvL3ZhciB1X2J1ZmYgPSBjYWNoZTEuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB1X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICB2YXIgdl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuY29scyAqIG5jb2xzKSA8PCAzKTtcbiAgICAgICAgdmFyIHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcgbWF0cml4X3QobmNvbHMsIG5jb2xzLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBpZCA9IEFpLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgZm9yIChqID0gMCwgcHUgPSAwOyBqIDwgbnJvd3M7IGorKywgcGErKykge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMDsgayA8IG5jb2xzOyBrKyssIHB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdkW2tdID4gdG9sKSBzdW0gKz0gdmRbcHYgKyBrXSAqIHVkW3B1XSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQSwgdmVjdHMsIHZhbHMpIHtcbiAgICAgICAgdmFyIG4gPSBBLmNvbHMsIGkgPSBuICogbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICB2YXIgYV9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlJbXBsKGFfbXQuZGF0YSwgbiwgd19tdC5kYXRhLCB2ZWN0cyA/IHZlY3RzLmRhdGEgOiBudWxsLCBuLCBuKTtcblxuICAgICAgICBpZiAodmFscykge1xuICAgICAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFscy5kYXRhW25dID0gd19tdC5kYXRhW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICAgICAgdGhpcy5xc29ydF9zdGFjayA9IG5ldyBJbnQzMkFycmF5KDQ4ICogMik7XG4gICAgfVxuXG4gICAgZ2V0X2dhdXNzaWFuX2tlcm5lbChzaXplLCBzaWdtYSwga2VybmVsLCBkYXRhX3R5cGUpIHtcbiAgICAgICAgdmFyIGkgPSAwLCB4ID0gMC4wLCB0ID0gMC4wLCBzaWdtYV94ID0gMC4wLCBzY2FsZV8yeCA9IDAuMDtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcbiAgICAgICAgdmFyIGtlcm5fbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihzaXplIDw8IDIpO1xuICAgICAgICB2YXIgX2tlcm5lbCA9IGtlcm5fbm9kZS5mMzI7Ly9uZXcgRmxvYXQzMkFycmF5KHNpemUpO1xuXG4gICAgICAgIGlmICgoc2l6ZSAmIDEpID09IDEgJiYgc2l6ZSA8PSA3ICYmIHNpZ21hIDw9IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2l6ZSA+PiAxKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMjUsIF9rZXJuZWxbMV0gPSAwLjUsIF9rZXJuZWxbMl0gPSAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBzdW0gPSAwLjI1ICsgMC41ICsgMC4yNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wNjI1LCBfa2VybmVsWzFdID0gMC4yNSwgX2tlcm5lbFsyXSA9IDAuMzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFszXSA9IDAuMjUsIF9rZXJuZWxbNF0gPSAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDYyNSArIDAuMjUgKyAwLjM3NSArIDAuMjUgKyAwLjA2MjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMDMxMjUsIF9rZXJuZWxbMV0gPSAwLjEwOTM3NSwgX2tlcm5lbFsyXSA9IDAuMjE4NzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yODEyNSwgX2tlcm5lbFs0XSA9IDAuMjE4NzUsIF9rZXJuZWxbNV0gPSAwLjEwOTM3NSwgX2tlcm5lbFs2XSA9IDAuMDMxMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDMxMjUgKyAwLjEwOTM3NSArIDAuMjE4NzUgKyAwLjI4MTI1ICsgMC4yMTg3NSArIDAuMTA5Mzc1ICsgMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWdtYV94ID0gc2lnbWEgPiAwID8gc2lnbWEgOiAoKHNpemUgLSAxKSAqIDAuNSAtIDEuMCkgKiAwLjMgKyAwLjg7XG4gICAgICAgICAgICBzY2FsZV8yeCA9IC0wLjUgLyAoc2lnbWFfeCAqIHNpZ21hX3gpO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIHggPSBpIC0gKHNpemUgLSAxKSAqIDAuNTtcbiAgICAgICAgICAgICAgICB0ID0gTWF0aC5leHAoc2NhbGVfMnggKiB4ICogeCk7XG5cbiAgICAgICAgICAgICAgICBfa2VybmVsW2ldID0gdDtcbiAgICAgICAgICAgICAgICBzdW0gKz0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QpIHtcbiAgICAgICAgICAgIC8vIGludCBiYXNlZCBrZXJuZWxcbiAgICAgICAgICAgIHN1bSA9IDI1Ni4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IChfa2VybmVsW2ldICogc3VtICsgMC41KSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjbGFzc2ljIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMS4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IF9rZXJuZWxbaV0gKiBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoa2Vybl9ub2RlKTtcbiAgICB9XG5cbiAgICAvLyBtb2RlbCBpcyAzeDMgbWF0cml4X3RcbiAgICBwZXJzcGVjdGl2ZV80cG9pbnRfdHJhbnNmb3JtKG1vZGVsLCBzcmNfeDAsIHNyY195MCwgZHN0X3gwLCBkc3RfeTAsXG4gICAgICAgIHNyY194MSwgc3JjX3kxLCBkc3RfeDEsIGRzdF95MSxcbiAgICAgICAgc3JjX3gyLCBzcmNfeTIsIGRzdF94MiwgZHN0X3kyLFxuICAgICAgICBzcmNfeDMsIHNyY195MywgZHN0X3gzLCBkc3RfeTMpIHtcbiAgICAgICAgdmFyIHQxID0gc3JjX3gwO1xuICAgICAgICB2YXIgdDIgPSBzcmNfeDI7XG4gICAgICAgIHZhciB0NCA9IHNyY195MTtcbiAgICAgICAgdmFyIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDYgPSBzcmNfeTM7XG4gICAgICAgIHZhciB0NyA9IHQxICogdDY7XG4gICAgICAgIHZhciB0OCA9IHQyICogdDc7XG4gICAgICAgIHZhciB0OSA9IHNyY195MjtcbiAgICAgICAgdmFyIHQxMCA9IHQxICogdDk7XG4gICAgICAgIHZhciB0MTEgPSBzcmNfeDE7XG4gICAgICAgIHZhciB0MTQgPSBzcmNfeTA7XG4gICAgICAgIHZhciB0MTUgPSBzcmNfeDM7XG4gICAgICAgIHZhciB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHZhciB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHZhciB0MjAgPSB0MTUgKiB0MTEgKiB0OTtcbiAgICAgICAgdmFyIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB2YXIgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHZhciB0MjUgPSB0MiAqIHQ0O1xuICAgICAgICB2YXIgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdmFyIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB2YXIgdDI4ID0gdDkgKiB0MTE7XG4gICAgICAgIHZhciB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdmFyIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB2YXIgdDM1ID0gdDE0ICogdDExO1xuICAgICAgICB2YXIgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdmFyIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB2YXIgdDQzID0gdDE0ICogdDI7XG4gICAgICAgIHZhciB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdmFyIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB2YXIgdDUxID0gdDQgKiB0NiAqIHQyO1xuICAgICAgICB2YXIgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIcjAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSHIxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIcjIgPSB0MTtcbiAgICAgICAgdmFyIEhyMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjUgPSB0MTQ7XG4gICAgICAgIHZhciBIcjYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIcjcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICB0MSA9IGRzdF94MDtcbiAgICAgICAgdDIgPSBkc3RfeDI7XG4gICAgICAgIHQ0ID0gZHN0X3kxO1xuICAgICAgICB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdDYgPSBkc3RfeTM7XG4gICAgICAgIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdDggPSB0MiAqIHQ3O1xuICAgICAgICB0OSA9IGRzdF95MjtcbiAgICAgICAgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdDExID0gZHN0X3gxO1xuICAgICAgICB0MTQgPSBkc3RfeTA7XG4gICAgICAgIHQxNSA9IGRzdF94MztcbiAgICAgICAgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSGwwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMSA9ICh0NSAtIHQ4IC0gdDMyICogdDQgKyB0MzIgKiB0OSArIHQxOCAtIHQyICogdDM1ICsgdDI3ICogdDIgLSB0MjApICogdDMwO1xuICAgICAgICB2YXIgSGwyID0gdDE7XG4gICAgICAgIHZhciBIbDMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICB2YXIgSGw0ID0gKC10NDIgKyB0NDEgKiB0OSAtIHQ1NSAqIHQyICsgdDQ2IC0gdDQ4ICsgdDU1ICogdDExICsgdDUxIC0gdDIxICogdDkpICogdDMwO1xuICAgICAgICB2YXIgSGw1ID0gdDE0O1xuICAgICAgICB2YXIgSGw2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICB2YXIgSGw3ID0gKC10NyArIHQxMCArIHQxNiAtIHQ0MyArIHQyNyAtIHQyOCAtIHQyMSArIHQyNSkgKiB0MzA7XG5cbiAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBjb2RlIGNvbXB1dGVzIFIgPSBIbCAqIGludmVyc2UgSHJcbiAgICAgICAgdDIgPSBIcjQgLSBIcjcgKiBIcjU7XG4gICAgICAgIHQ0ID0gSHIwICogSHI0O1xuICAgICAgICB0NSA9IEhyMCAqIEhyNTtcbiAgICAgICAgdDcgPSBIcjMgKiBIcjE7XG4gICAgICAgIHQ4ID0gSHIyICogSHIzO1xuICAgICAgICB0MTAgPSBIcjEgKiBIcjY7XG4gICAgICAgIHZhciB0MTIgPSBIcjIgKiBIcjY7XG4gICAgICAgIHQxNSA9IDEuMCAvICh0NCAtIHQ1ICogSHI3IC0gdDcgKyB0OCAqIEhyNyArIHQxMCAqIEhyNSAtIHQxMiAqIEhyNCk7XG4gICAgICAgIHQxOCA9IC1IcjMgKyBIcjUgKiBIcjY7XG4gICAgICAgIHZhciB0MjMgPSAtSHIzICogSHI3ICsgSHI0ICogSHI2O1xuICAgICAgICB0MjggPSAtSHIxICsgSHIyICogSHI3O1xuICAgICAgICB2YXIgdDMxID0gSHIwIC0gdDEyO1xuICAgICAgICB0MzUgPSBIcjAgKiBIcjcgLSB0MTA7XG4gICAgICAgIHQ0MSA9IC1IcjEgKiBIcjUgKyBIcjIgKiBIcjQ7XG4gICAgICAgIHZhciB0NDQgPSB0NSAtIHQ4O1xuICAgICAgICB2YXIgdDQ3ID0gdDQgLSB0NztcbiAgICAgICAgdDQ4ID0gdDIgKiB0MTU7XG4gICAgICAgIHZhciB0NDkgPSB0MjggKiB0MTU7XG4gICAgICAgIHZhciB0NTAgPSB0NDEgKiB0MTU7XG4gICAgICAgIHZhciBtYXQgPSBtb2RlbC5kYXRhO1xuICAgICAgICBtYXRbMF0gPSBIbDAgKiB0NDggKyBIbDEgKiAodDE4ICogdDE1KSAtIEhsMiAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbMV0gPSBIbDAgKiB0NDkgKyBIbDEgKiAodDMxICogdDE1KSAtIEhsMiAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbMl0gPSAtSGwwICogdDUwIC0gSGwxICogKHQ0NCAqIHQxNSkgKyBIbDIgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzNdID0gSGwzICogdDQ4ICsgSGw0ICogKHQxOCAqIHQxNSkgLSBIbDUgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzRdID0gSGwzICogdDQ5ICsgSGw0ICogKHQzMSAqIHQxNSkgLSBIbDUgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzVdID0gLUhsMyAqIHQ1MCAtIEhsNCAqICh0NDQgKiB0MTUpICsgSGw1ICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFs2XSA9IEhsNiAqIHQ0OCArIEhsNyAqICh0MTggKiB0MTUpIC0gdDIzICogdDE1O1xuICAgICAgICBtYXRbN10gPSBIbDYgKiB0NDkgKyBIbDcgKiAodDMxICogdDE1KSAtIHQzNSAqIHQxNTtcbiAgICAgICAgbWF0WzhdID0gLUhsNiAqIHQ1MCAtIEhsNyAqICh0NDQgKiB0MTUpICsgdDQ3ICogdDE1O1xuICAgIH1cblxuICAgIC8vIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHdhcyBkZXJpdmVkIGZyb20gKkJTRCBzeXN0ZW0gcXNvcnQoKTpcbiAgICAvLyBDb3B5cmlnaHQgKGMpIDE5OTIsIDE5OTNcbiAgICAvLyBUaGUgUmVnZW50cyBvZiB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBxc29ydChhcnJheSwgbG93LCBoaWdoLCBjbXApIHtcbiAgICAgICAgdmFyIGlzb3J0X3RocmVzaCA9IDc7XG4gICAgICAgIHZhciB0LCB0YSwgdGIsIHRjO1xuICAgICAgICB2YXIgc3AgPSAwLCBsZWZ0ID0gMCwgcmlnaHQgPSAwLCBpID0gMCwgbiA9IDAsIG0gPSAwLCBwdHIgPSAwLCBwdHIyID0gMCwgZCA9IDA7XG4gICAgICAgIHZhciBsZWZ0MCA9IDAsIGxlZnQxID0gMCwgcmlnaHQwID0gMCwgcmlnaHQxID0gMCwgcGl2b3QgPSAwLCBhID0gMCwgYiA9IDAsIGMgPSAwLCBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5xc29ydF9zdGFjaztcblxuICAgICAgICBpZiAoKGhpZ2ggLSBsb3cgKyAxKSA8PSAxKSByZXR1cm47XG5cbiAgICAgICAgc3RhY2tbMF0gPSBsb3c7XG4gICAgICAgIHN0YWNrWzFdID0gaGlnaDtcblxuICAgICAgICB3aGlsZSAoc3AgPj0gMCkge1xuXG4gICAgICAgICAgICBsZWZ0ID0gc3RhY2tbc3AgPDwgMV07XG4gICAgICAgICAgICByaWdodCA9IHN0YWNrWyhzcCA8PCAxKSArIDFdO1xuICAgICAgICAgICAgc3AtLTtcblxuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBuID0gKHJpZ2h0IC0gbGVmdCkgKyAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKG4gPD0gaXNvcnRfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaW5zZXJ0X3NvcnQ6XG4gICAgICAgICAgICAgICAgICAgIGZvciAocHRyID0gbGVmdCArIDE7IHB0ciA8PSByaWdodDsgcHRyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMl0gPSBhcnJheVtwdHIyIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGVmdDAgPSBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICByaWdodDAgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBsZWZ0ICsgKG4gPj4gMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiA0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IG4gPj4gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBsZWZ0LCBiID0gbGVmdCArIGQsIGMgPSBsZWZ0ICsgKGQgPDwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcGl2b3QgLSBkLCBiID0gcGl2b3QsIGMgPSBwaXZvdCArIGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHJpZ2h0IC0gKGQgPDwgMSksIGIgPSByaWdodCAtIGQsIGMgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sIHRiID0gYXJyYXlbYl0sIHRjID0gYXJyYXlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBwaXZvdCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaXZvdCAhPSBsZWZ0MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3Bpdm90XSA9IGFycmF5W2xlZnQwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQwXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MSA9IGxlZnQwICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSByaWdodDEgPSByaWdodDA7XG5cbiAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVtwaXZvdF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobGVmdCA8PSByaWdodCAmJiAhY21wKHRhLCBhcnJheVtsZWZ0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNtcChhcnJheVtsZWZ0XSwgdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWZ0ID4gbGVmdDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MV0gPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQgJiYgIWNtcChhcnJheVtyaWdodF0sIHRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY21wKHRhLCBhcnJheVtyaWdodF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyaWdodCA8IHJpZ2h0MSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3JpZ2h0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodDFdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0MS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA+IHJpZ2h0KSBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W2xlZnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdF0gPSBhcnJheVtyaWdodF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzd2FwX2NudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9nb3RvIGluc2VydF9zb3J0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLCBhcnJheVtwdHIyIC0gMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3B0cjJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMiAtIDFdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG4gPSBNYXRoLm1pbigobGVmdDEgLSBsZWZ0MCksIChsZWZ0IC0gbGVmdDEpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChsZWZ0IC0gbikgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MCArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDAgKyBpXSA9IGFycmF5W21dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKChyaWdodDAgLSByaWdodDEpLCAocmlnaHQxIC0gcmlnaHQpKTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDAgLSBuICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0ICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0ICsgaV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuID0gKGxlZnQgLSBsZWZ0MSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAocmlnaHQxIC0gcmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcCA8PCAxXSA9IGxlZnQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1soc3AgPDwgMSkgKyAxXSA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3AgPDwgMV0gPSByaWdodDAgLSBtICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbKHNwIDw8IDEpICsgMV0gPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobSA+IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQwIC0gbSArIDEsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtZWRpYW4oYXJyYXksIGxvdywgaGlnaCkge1xuICAgICAgICB2YXIgdztcbiAgICAgICAgdmFyIG1pZGRsZSA9IDAsIGxsID0gMCwgaGggPSAwLCBtZWRpYW4gPSAobG93ICsgaGlnaCkgPj4gMTtcbiAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgIGlmIChoaWdoIDw9IGxvdykgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICBpZiAoaGlnaCA9PSAobG93ICsgMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaWRkbGUgPSAoKGxvdyArIGhpZ2gpID4+IDEpO1xuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVttaWRkbGVdID4gYXJyYXlbbG93XSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGwgPSAobG93ICsgMSk7XG4gICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsbF07XG4gICAgICAgICAgICBhcnJheVtsbF0gPSB3O1xuICAgICAgICAgICAgaGggPSBoaWdoO1xuICAgICAgICAgICAgZm9yICg7IDspIHtcbiAgICAgICAgICAgICAgICBkbyArK2xsOyB3aGlsZSAoYXJyYXlbbG93XSA+IGFycmF5W2xsXSk7XG4gICAgICAgICAgICAgICAgZG8gLS1oaDsgd2hpbGUgKGFycmF5W2hoXSA+IGFycmF5W2xvd10pO1xuICAgICAgICAgICAgICAgIGlmIChoaCA8IGxsKSBicmVhaztcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbGxdO1xuICAgICAgICAgICAgICAgIGFycmF5W2xsXSA9IGFycmF5W2hoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgYXJyYXlbaGhdID0gdztcbiAgICAgICAgICAgIGlmIChoaCA8PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgbG93ID0gbGw7XG4gICAgICAgICAgICBlbHNlIGlmIChoaCA+PSBtZWRpYW4pXG4gICAgICAgICAgICAgICAgaGlnaCA9IChoaCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgaWRlbnRpdHkoTSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIHNyYyA9IE0uZGF0YTtcbiAgICAgICAgdmFyIHJvd3MgPSBNLnJvd3MsIGNvbHMgPSBNLmNvbHMsIGNvbHNfMSA9IChjb2xzICsgMSkgfCAwO1xuICAgICAgICB2YXIgbGVuID0gcm93cyAqIGNvbHM7XG4gICAgICAgIHZhciBrID0gbGVuO1xuICAgICAgICB3aGlsZSAoLS1sZW4gPj0gMCkgc3JjW2xlbl0gPSAwLjA7XG4gICAgICAgIGxlbiA9IGs7XG4gICAgICAgIGsgPSAwO1xuICAgICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICAgICAgc3JjW2tdID0gdmFsdWU7XG4gICAgICAgICAgICBrID0gayArIGNvbHNfMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zcG9zZShBdCwgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBBaSA9IDAsIEF0aSA9IDAsIHBBdCA9IDA7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYXRkID0gQXQuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBdGkgKz0gMSwgQWkgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcEF0ID0gQXRpO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBwQXQgKz0gbnJvd3MsIGorKykgYXRkW3BBdF0gPSBhZFtBaSArIGpdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHkoQywgQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEInXG4gICAgbXVsdGlwbHlfQUJ0KEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1yb3dzID0gQi5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBCID0gMCwgaiA9IDA7IGogPCBtcm93czsgQ3ArKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQisrLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQlxuICAgIG11bHRpcGx5X0F0QihDLCBBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgQXArKywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQSdcbiAgICBtdWx0aXBseV9BQXQoQywgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBDZGlhZyA9IDAsIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwQyA9IDAsIHBDdCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgcENkaWFnICs9IG5yb3dzICsgMSwgcF9BID0gcEEsIGkrKykge1xuICAgICAgICAgICAgcEMgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQ3QgPSBwQ2RpYWc7XG4gICAgICAgICAgICBwQiA9IHBfQTtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBucm93czsgcEMrKywgcEN0ICs9IG5yb3dzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBKytdICogYWRbcEIrK107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BDdF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBBXG4gICAgbXVsdGlwbHlfQXRBKEMsIEEpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9DID0gMCwgcEMgPSAwLCBwX0NDID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBwX0MgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgcF9BID0gaTtcbiAgICAgICAgICAgIHBfQ0MgPSBwX0MgKyBpO1xuICAgICAgICAgICAgcEMgPSBwX0NDO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5jb2xzOyBwQysrLCBwX0NDICs9IG5jb2xzLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IHBfQTtcbiAgICAgICAgICAgICAgICBwQiA9IGo7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG5jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGFkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcF9DQ10gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YXJpb3VzIHNtYWxsIG1hdHJpeCBvcGVyYXRpb25zXG4gICAgaWRlbnRpdHlfM3gzKE0sIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBkdCA9IE0uZGF0YTtcbiAgICAgICAgZHRbMF0gPSBkdFs0XSA9IGR0WzhdID0gdmFsdWU7XG4gICAgICAgIGR0WzFdID0gZHRbMl0gPSBkdFszXSA9IDA7XG4gICAgICAgIGR0WzVdID0gZHRbNl0gPSBkdFs3XSA9IDA7XG4gICAgfVxuXG4gICAgaW52ZXJ0XzN4Myhmcm9tLCB0bykge1xuICAgICAgICB2YXIgQSA9IGZyb20uZGF0YSwgaW52QSA9IHRvLmRhdGE7XG4gICAgICAgIHZhciB0MSA9IEFbNF07XG4gICAgICAgIHZhciB0MiA9IEFbOF07XG4gICAgICAgIHZhciB0NCA9IEFbNV07XG4gICAgICAgIHZhciB0NSA9IEFbN107XG4gICAgICAgIHZhciB0OCA9IEFbMF07XG5cbiAgICAgICAgdmFyIHQ5ID0gdDggKiB0MTtcbiAgICAgICAgdmFyIHQxMSA9IHQ4ICogdDQ7XG4gICAgICAgIHZhciB0MTMgPSBBWzNdO1xuICAgICAgICB2YXIgdDE0ID0gQVsxXTtcbiAgICAgICAgdmFyIHQxNSA9IHQxMyAqIHQxNDtcbiAgICAgICAgdmFyIHQxNyA9IEFbMl07XG4gICAgICAgIHZhciB0MTggPSB0MTMgKiB0MTc7XG4gICAgICAgIHZhciB0MjAgPSBBWzZdO1xuICAgICAgICB2YXIgdDIxID0gdDIwICogdDE0O1xuICAgICAgICB2YXIgdDIzID0gdDIwICogdDE3O1xuICAgICAgICB2YXIgdDI2ID0gMS4wIC8gKHQ5ICogdDIgLSB0MTEgKiB0NSAtIHQxNSAqIHQyICsgdDE4ICogdDUgKyB0MjEgKiB0NCAtIHQyMyAqIHQxKTtcbiAgICAgICAgaW52QVswXSA9ICh0MSAqIHQyIC0gdDQgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMV0gPSAtKHQxNCAqIHQyIC0gdDE3ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzJdID0gLSgtdDE0ICogdDQgKyB0MTcgKiB0MSkgKiB0MjY7XG4gICAgICAgIGludkFbM10gPSAtKHQxMyAqIHQyIC0gdDQgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzRdID0gKHQ4ICogdDIgLSB0MjMpICogdDI2O1xuICAgICAgICBpbnZBWzVdID0gLSh0MTEgLSB0MTgpICogdDI2O1xuICAgICAgICBpbnZBWzZdID0gLSgtdDEzICogdDUgKyB0MSAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbN10gPSAtKHQ4ICogdDUgLSB0MjEpICogdDI2O1xuICAgICAgICBpbnZBWzhdID0gKHQ5IC0gdDE1KSAqIHQyNjtcbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseV8zeDMoQywgQSwgQikge1xuICAgICAgICB2YXIgQ2QgPSBDLmRhdGEsIEFkID0gQS5kYXRhLCBCZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIG0xXzAgPSBBZFswXSwgbTFfMSA9IEFkWzFdLCBtMV8yID0gQWRbMl07XG4gICAgICAgIHZhciBtMV8zID0gQWRbM10sIG0xXzQgPSBBZFs0XSwgbTFfNSA9IEFkWzVdO1xuICAgICAgICB2YXIgbTFfNiA9IEFkWzZdLCBtMV83ID0gQWRbN10sIG0xXzggPSBBZFs4XTtcblxuICAgICAgICB2YXIgbTJfMCA9IEJkWzBdLCBtMl8xID0gQmRbMV0sIG0yXzIgPSBCZFsyXTtcbiAgICAgICAgdmFyIG0yXzMgPSBCZFszXSwgbTJfNCA9IEJkWzRdLCBtMl81ID0gQmRbNV07XG4gICAgICAgIHZhciBtMl82ID0gQmRbNl0sIG0yXzcgPSBCZFs3XSwgbTJfOCA9IEJkWzhdO1xuXG4gICAgICAgIENkWzBdID0gbTFfMCAqIG0yXzAgKyBtMV8xICogbTJfMyArIG0xXzIgKiBtMl82O1xuICAgICAgICBDZFsxXSA9IG0xXzAgKiBtMl8xICsgbTFfMSAqIG0yXzQgKyBtMV8yICogbTJfNztcbiAgICAgICAgQ2RbMl0gPSBtMV8wICogbTJfMiArIG0xXzEgKiBtMl81ICsgbTFfMiAqIG0yXzg7XG4gICAgICAgIENkWzNdID0gbTFfMyAqIG0yXzAgKyBtMV80ICogbTJfMyArIG0xXzUgKiBtMl82O1xuICAgICAgICBDZFs0XSA9IG0xXzMgKiBtMl8xICsgbTFfNCAqIG0yXzQgKyBtMV81ICogbTJfNztcbiAgICAgICAgQ2RbNV0gPSBtMV8zICogbTJfMiArIG0xXzQgKiBtMl81ICsgbTFfNSAqIG0yXzg7XG4gICAgICAgIENkWzZdID0gbTFfNiAqIG0yXzAgKyBtMV83ICogbTJfMyArIG0xXzggKiBtMl82O1xuICAgICAgICBDZFs3XSA9IG0xXzYgKiBtMl8xICsgbTFfNyAqIG0yXzQgKyBtMV84ICogbTJfNztcbiAgICAgICAgQ2RbOF0gPSBtMV82ICogbTJfMiArIG0xXzcgKiBtMl81ICsgbTFfOCAqIG0yXzg7XG4gICAgfVxuXG4gICAgbWF0M3gzX2RldGVybWluYW50KE0pIHtcbiAgICAgICAgdmFyIG1kID0gTS5kYXRhO1xuICAgICAgICByZXR1cm4gbWRbMF0gKiBtZFs0XSAqIG1kWzhdIC1cbiAgICAgICAgICAgIG1kWzBdICogbWRbNV0gKiBtZFs3XSAtXG4gICAgICAgICAgICBtZFszXSAqIG1kWzFdICogbWRbOF0gK1xuICAgICAgICAgICAgbWRbM10gKiBtZFsyXSAqIG1kWzddICtcbiAgICAgICAgICAgIG1kWzZdICogbWRbMV0gKiBtZFs1XSAtXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzJdICogbWRbNF07XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKE0xMSwgTTEyLCBNMTMsXG4gICAgICAgIE0yMSwgTTIyLCBNMjMsXG4gICAgICAgIE0zMSwgTTMyLCBNMzMpIHtcbiAgICAgICAgcmV0dXJuIE0xMSAqIE0yMiAqIE0zMyAtIE0xMSAqIE0yMyAqIE0zMiAtXG4gICAgICAgICAgICBNMjEgKiBNMTIgKiBNMzMgKyBNMjEgKiBNMTMgKiBNMzIgK1xuICAgICAgICAgICAgTTMxICogTTEyICogTTIzIC0gTTMxICogTTEzICogTTIyO1xuICAgIH1cbn0iLCJpbXBvcnQgZGF0YV90eXBlIGZyb20gJy4uL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgZGF0YV90IGZyb20gJy4uL25vZGVfdXRpbHMvZGF0YV90LmpzJ1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRyaXhfdCB7XG4gICAgY29uc3RydWN0b3IoYywgciwgX2RhdGFfdHlwZSwgX2RhdGFfYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuZHQuX2dldF9kYXRhX3R5cGUoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLmR0Ll9nZXRfY2hhbm5lbChfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY29scyA9IGMgfCAwO1xuICAgICAgICB0aGlzLnJvd3MgPSByIHwgMDtcbiAgICAgICAgaWYgKHR5cGVvZiBfZGF0YV9idWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gX2RhdGFfYnVmZmVyO1xuICAgICAgICAgICAgLy8gZGF0YSB1c2VyIGFza2VkIGZvclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsb2NhdGUoKSB7XG4gICAgICAgIC8vIGNsZWFyIHJlZmVyZW5jZXNcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgZGVsZXRlIHRoaXMuYnVmZmVyO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBkYXRhX3QoKHRoaXMuY29scyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogdGhpcy5jaGFubmVsKSAqIHRoaXMucm93cyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgIH1cbiAgICBjb3B5X3RvKG90aGVyKSB7XG4gICAgICAgIHZhciBvZCA9IG90aGVyLmRhdGEsIHRkID0gdGhpcy5kYXRhO1xuICAgICAgICB2YXIgaSA9IDAsIG4gPSAodGhpcy5jb2xzICogdGhpcy5yb3dzICogdGhpcy5jaGFubmVsKSB8IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbiAtIDQ7IGkgKz0gNCkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgICAgIG9kW2kgKyAxXSA9IHRkW2kgKyAxXTtcbiAgICAgICAgICAgIG9kW2kgKyAyXSA9IHRkW2kgKyAyXTtcbiAgICAgICAgICAgIG9kW2kgKyAzXSA9IHRkW2kgKyAzXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaSA8IG47ICsraSkge1xuICAgICAgICAgICAgb2RbaV0gPSB0ZFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNpemUoYywgciwgY2gpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaCA9PT0gXCJ1bmRlZmluZWRcIikgeyBjaCA9IHRoaXMuY2hhbm5lbDsgfVxuICAgICAgICAvLyByZWxvY2F0ZSBidWZmZXIgb25seSBpZiBuZXcgc2l6ZSBkb2VzbnQgZml0XG4gICAgICAgIHZhciBuZXdfc2l6ZSA9IChjICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiBjaCkgKiByO1xuICAgICAgICBpZiAobmV3X3NpemUgPiB0aGlzLmJ1ZmZlci5zaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgbWF0cml4X3QgZnJvbSAnLi4vbWF0cml4X3QvbWF0cml4X3QuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi4vY2FjaGUvY2FjaGUuanMnXG5pbXBvcnQgbWF0aCBmcm9tICcuLi9tYXRoL21hdGguanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW90aW9uX2VzdGltYXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgfVxuXG4gICAgZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBuZWVkX2NudCwgbWF4X2NudCwgZnJvbV9zdWIsIHRvX3N1Yikge1xuICAgICAgICB2YXIgbWF4X3RyeSA9IDEwMDA7XG4gICAgICAgIHZhciBpbmRpY2VzID0gW107XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIHNzaXRlciA9IDAsIGlkeF9pID0gMCwgb2sgPSBmYWxzZTtcbiAgICAgICAgZm9yICg7IHNzaXRlciA8IG1heF90cnk7ICsrc3NpdGVyKSB7XG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbmVlZF9jbnQgJiYgc3NpdGVyIDwgbWF4X3RyeTspIHtcbiAgICAgICAgICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlkeF9pID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoIW9rKSB7XG4gICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWR4X2kgPSBpbmRpY2VzW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4X2NudCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4X2kgPT0gaW5kaWNlc1tqXSkgeyBvayA9IGZhbHNlOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyb21fc3ViW2ldID0gZnJvbVtpZHhfaV07XG4gICAgICAgICAgICAgICAgdG9fc3ViW2ldID0gdG9baWR4X2ldO1xuICAgICAgICAgICAgICAgIGlmICgha2VybmVsLmNoZWNrX3N1YnNldChmcm9tX3N1YiwgdG9fc3ViLCBpICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3NpdGVyKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoaSA9PSBuZWVkX2NudCAmJiBzc2l0ZXIgPCBtYXhfdHJ5KTtcbiAgICB9XG5cbiAgICBmaW5kX2lubGllcnMoa2VybmVsLCBtb2RlbCwgZnJvbSwgdG8sIGNvdW50LCB0aHJlc2gsIGVyciwgbWFzaykge1xuICAgICAgICB2YXIgbnVtaW5saWVycyA9IDAsIGkgPSAwLCBmID0gMDtcbiAgICAgICAgdmFyIHQgPSB0aHJlc2ggKiB0aHJlc2g7XG5cbiAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBtb2RlbCwgZXJyLCBjb3VudCk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBmID0gZXJyW2ldIDw9IHQ7XG4gICAgICAgICAgICBtYXNrW2ldID0gZjtcbiAgICAgICAgICAgIG51bWlubGllcnMgKz0gZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtaW5saWVycztcbiAgICB9XG5cbiAgICByYW5zYWMocGFyYW1zLCBrZXJuZWwsIGZyb20sIHRvLCBjb3VudCwgbW9kZWwsIG1hc2ssIG1heF9pdGVycykge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVycyA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlcnMgPSAxMDAwOyB9XG5cbiAgICAgICAgaWYgKGNvdW50IDwgcGFyYW1zLnNpemUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgbW9kZWxfcG9pbnRzID0gcGFyYW1zLnNpemU7XG4gICAgICAgIHZhciBuaXRlcnMgPSBtYXhfaXRlcnMsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHN1YnNldDAgPSBbXTtcbiAgICAgICAgdmFyIHN1YnNldDEgPSBbXTtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1jID0gbW9kZWwuY29scywgbXIgPSBtb2RlbC5yb3dzO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBtX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG1jICogbXIpIDw8IDMpO1xuICAgICAgICB2YXIgbXNfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCk7XG4gICAgICAgIHZhciBlcnJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCA8PCAyKTtcbiAgICAgICAgdmFyIE0gPSBuZXcgbWF0cml4X3QobWMsIG1yLCBkdCwgbV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgY3Vycl9tYXNrID0gbmV3IG1hdHJpeF90KGNvdW50LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLlU4QzFfdCwgbXNfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgaW5saWVyc19tYXggPSAtMSwgbnVtaW5saWVycyA9IDA7XG4gICAgICAgIHZhciBubW9kZWxzID0gMDtcblxuICAgICAgICB2YXIgZXJyID0gZXJyX2J1ZmYuZjMyO1xuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZVxuICAgICAgICBpZiAoY291bnQgPT0gbW9kZWxfcG9pbnRzKSB7XG4gICAgICAgICAgICBpZiAoa2VybmVsLnJ1bihmcm9tLCB0bywgTSwgY291bnQpIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWNvdW50ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzay5kYXRhW2NvdW50XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG5pdGVyczsgKytpdGVyKSB7XG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzdWJzZXRcbiAgICAgICAgICAgIGZvdW5kID0gdGhpcy5nZXRfc3Vic2V0KGtlcm5lbCwgZnJvbSwgdG8sIG1vZGVsX3BvaW50cywgY291bnQsIHN1YnNldDAsIHN1YnNldDEpO1xuICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm1vZGVscyA9IGtlcm5lbC5ydW4oc3Vic2V0MCwgc3Vic2V0MSwgTSwgbW9kZWxfcG9pbnRzKTtcbiAgICAgICAgICAgIGlmIChubW9kZWxzIDw9IDApXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFRPRE8gaGFuZGxlIG11bHRpbW9kZWwgb3V0cHV0XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIE0sIGZyb20sIHRvLCBjb3VudCwgcGFyYW1zLnRocmVzaCwgZXJyLCBjdXJyX21hc2suZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChudW1pbmxpZXJzID4gTWF0aC5tYXgoaW5saWVyc19tYXgsIG1vZGVsX3BvaW50cyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBpbmxpZXJzX21heCA9IG51bWlubGllcnM7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2spIGN1cnJfbWFzay5jb3B5X3RvKG1hc2spO1xuICAgICAgICAgICAgICAgIG5pdGVycyA9IHBhcmFtcy51cGRhdGVfaXRlcnMoKGNvdW50IC0gbnVtaW5saWVycykgLyBjb3VudCwgbml0ZXJzKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxtZWRzKHBhcmFtcywga2VybmVsLCBmcm9tLCB0bywgY291bnQsIG1vZGVsLCBtYXNrLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlcnMgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXJzID0gMTAwMDsgfVxuXG4gICAgICAgIGlmIChjb3VudCA8IHBhcmFtcy5zaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1vZGVsX3BvaW50cyA9IHBhcmFtcy5zaXplO1xuICAgICAgICB2YXIgbml0ZXJzID0gbWF4X2l0ZXJzLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB2YXIgX21hdGggPSBuZXcgbWF0aCgpO1xuXG4gICAgICAgIHZhciBzdWJzZXQwID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90LCBtc19idWZmLmRhdGEpO1xuXG4gICAgICAgIHZhciBudW1pbmxpZXJzID0gMDtcbiAgICAgICAgdmFyIG5tb2RlbHMgPSAwO1xuXG4gICAgICAgIHZhciBlcnIgPSBlcnJfYnVmZi5mMzI7XG4gICAgICAgIHZhciBtaW5fbWVkaWFuID0gMTAwMDAwMDAwMC4wLCBzaWdtYSA9IDAuMCwgbWVkaWFuID0gMC4wO1xuXG4gICAgICAgIHBhcmFtcy5lcHMgPSAwLjQ1O1xuICAgICAgICBuaXRlcnMgPSBwYXJhbXMudXBkYXRlX2l0ZXJzKHBhcmFtcy5lcHMsIG5pdGVycyk7XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlXG4gICAgICAgIGlmIChjb3VudCA9PSBtb2RlbF9wb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChrZXJuZWwucnVuKGZyb20sIHRvLCBNLCBjb3VudCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0tY291bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXNrLmRhdGFbY291bnRdID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbml0ZXJzOyArK2l0ZXIpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN1YnNldFxuICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbW9kZWxfcG9pbnRzLCBjb3VudCwgc3Vic2V0MCwgc3Vic2V0MSk7XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBubW9kZWxzID0ga2VybmVsLnJ1bihzdWJzZXQwLCBzdWJzZXQxLCBNLCBtb2RlbF9wb2ludHMpO1xuICAgICAgICAgICAgaWYgKG5tb2RlbHMgPD0gMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgbXVsdGltb2RlbCBvdXRwdXRcblxuICAgICAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBNLCBlcnIsIGNvdW50KTtcbiAgICAgICAgICAgIG1lZGlhbiA9IF9tYXRoLm1lZGlhbihlcnIsIDAsIGNvdW50IC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYW4gPCBtaW5fbWVkaWFuKSB7XG4gICAgICAgICAgICAgICAgbWluX21lZGlhbiA9IG1lZGlhbjtcbiAgICAgICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBzaWdtYSA9IDIuNSAqIDEuNDgyNiAqICgxICsgNS4wIC8gKGNvdW50IC0gbW9kZWxfcG9pbnRzKSkgKiBNYXRoLnNxcnQobWluX21lZGlhbik7XG4gICAgICAgICAgICBzaWdtYSA9IE1hdGgubWF4KHNpZ21hLCAwLjAwMSk7XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIG1vZGVsLCBmcm9tLCB0bywgY291bnQsIHNpZ21hLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtaW5saWVycyA+PSBtb2RlbF9wb2ludHM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCBtYXRyaXhfdCBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4uL21hdG1hdGgvbWF0bWF0aC5qcydcbmltcG9ydCBsaW5hbGcgZnJvbSAnLi4vbGluYWxnL2xpbmFsZy5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuXG5leHBvcnQgY2xhc3MgbW90aW9uX21vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5UMCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5UMSA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5BdEEgPSBuZXcgbWF0cml4X3QoNiwgNiwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuQXRCID0gbmV3IG1hdHJpeF90KDYsIDEsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgIH1cbiAgICBzcXIoeCkge1xuICAgICAgICByZXR1cm4geCAqIHg7XG4gICAgfVxuXG4gICAgLy8gZG9lcyBpc290cm9waWMgbm9ybWFsaXphdGlvblxuICAgIGlzb19ub3JtYWxpemVfcG9pbnRzKGZyb20sIHRvLCBUMCwgVDEsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN4MCA9IDAuMCwgY3kwID0gMC4wLCBkMCA9IDAuMCwgczAgPSAwLjA7XG4gICAgICAgIHZhciBjeDEgPSAwLjAsIGN5MSA9IDAuMCwgZDEgPSAwLjAsIHMxID0gMC4wO1xuICAgICAgICB2YXIgZHggPSAwLjAsIGR5ID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgY3gwICs9IGZyb21baV0ueDtcbiAgICAgICAgICAgIGN5MCArPSBmcm9tW2ldLnk7XG4gICAgICAgICAgICBjeDEgKz0gdG9baV0ueDtcbiAgICAgICAgICAgIGN5MSArPSB0b1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgY3gwIC89IGNvdW50OyBjeTAgLz0gY291bnQ7XG4gICAgICAgIGN4MSAvPSBjb3VudDsgY3kxIC89IGNvdW50O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBkeCA9IGZyb21baV0ueCAtIGN4MDtcbiAgICAgICAgICAgIGR5ID0gZnJvbVtpXS55IC0gY3kwO1xuICAgICAgICAgICAgZDAgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgIGR4ID0gdG9baV0ueCAtIGN4MTtcbiAgICAgICAgICAgIGR5ID0gdG9baV0ueSAtIGN5MTtcbiAgICAgICAgICAgIGQxICs9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIH1cblxuICAgICAgICBkMCAvPSBjb3VudDsgZDEgLz0gY291bnQ7XG5cbiAgICAgICAgczAgPSBNYXRoLlNRUlQyIC8gZDA7IHMxID0gTWF0aC5TUVJUMiAvIGQxO1xuXG4gICAgICAgIFQwWzBdID0gVDBbNF0gPSBzMDtcbiAgICAgICAgVDBbMl0gPSAtY3gwICogczA7XG4gICAgICAgIFQwWzVdID0gLWN5MCAqIHMwO1xuICAgICAgICBUMFsxXSA9IFQwWzNdID0gVDBbNl0gPSBUMFs3XSA9IDAuMDtcbiAgICAgICAgVDBbOF0gPSAxLjA7XG5cbiAgICAgICAgVDFbMF0gPSBUMVs0XSA9IHMxO1xuICAgICAgICBUMVsyXSA9IC1jeDEgKiBzMTtcbiAgICAgICAgVDFbNV0gPSAtY3kxICogczE7XG4gICAgICAgIFQxWzFdID0gVDFbM10gPSBUMVs2XSA9IFQxWzddID0gMC4wO1xuICAgICAgICBUMVs4XSA9IDEuMDtcbiAgICB9XG5cbiAgICBoYXZlX2NvbGxpbmVhcl9wb2ludHMocG9pbnRzLCBjb3VudCkge1xuICAgICAgICB2YXIgaiA9IDAsIGsgPSAwLCBpID0gKGNvdW50IC0gMSkgfCAwO1xuICAgICAgICB2YXIgZHgxID0gMC4wLCBkeTEgPSAwLjAsIGR4MiA9IDAuMCwgZHkyID0gMC4wO1xuXG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIGktdGggc2VsZWN0ZWQgcG9pbnQgZG9lcyBub3QgYmVsb25nXG4gICAgICAgIC8vIHRvIGEgbGluZSBjb25uZWN0aW5nIHNvbWUgcHJldmlvdXNseSBzZWxlY3RlZCBwb2ludHNcbiAgICAgICAgZm9yICg7IGogPCBpOyArK2opIHtcbiAgICAgICAgICAgIGR4MSA9IHBvaW50c1tqXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBkeTEgPSBwb2ludHNbal0ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGo7ICsraykge1xuICAgICAgICAgICAgICAgIGR4MiA9IHBvaW50c1trXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICAgICAgZHkyID0gcG9pbnRzW2tdLnkgLSBwb2ludHNbaV0ueTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgyICogZHkxIC0gZHkyICogZHgxKSA8PSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAoTWF0aC5hYnMoZHgxKSArIE1hdGguYWJzKGR5MSkgKyBNYXRoLmFicyhkeDIpICsgTWF0aC5hYnMoZHkyKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY2xhc3MgYWZmaW5lMmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgIH1cbiAgICBydW4oZnJvbSwgdG8sIG1vZGVsLCBjb3VudCkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgICAgICB2YXIgbWQgPSBtb2RlbC5kYXRhLCB0MGQgPSB0aGlzLlQwLmRhdGEsIHQxZCA9IHRoaXMuVDEuZGF0YTtcbiAgICAgICAgdmFyIHB0MCwgcHQxLCBweCA9IDAuMCwgcHkgPSAwLjA7XG4gICAgICAgIHZhciBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgICAgIHZhciBfbGluYWxnID0gbmV3IGxpbmFsZygpO1xuXG4gICAgICAgIHRoaXMuaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbSwgdG8sIHQwZCwgdDFkLCBjb3VudCk7XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMiAqIGNvdW50ICogNikgPDwgMyk7XG4gICAgICAgIHZhciBiX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCkgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QoNiwgMiAqIGNvdW50LCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYl9tdCA9IG5ldyBtYXRyaXhfdCgxLCAyICogY291bnQsIGR0LCBiX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBhZCA9IGFfbXQuZGF0YSwgYmQgPSBiX210LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHB4ID0gdDBkWzBdICogcHQwLnggKyB0MGRbMV0gKiBwdDAueSArIHQwZFsyXTtcbiAgICAgICAgICAgIHB5ID0gdDBkWzNdICogcHQwLnggKyB0MGRbNF0gKiBwdDAueSArIHQwZFs1XTtcblxuICAgICAgICAgICAgaiA9IGkgKiAyICogNjtcbiAgICAgICAgICAgIGFkW2pdID0gcHgsIGFkW2ogKyAxXSA9IHB5LCBhZFtqICsgMl0gPSAxLjAsIGFkW2ogKyAzXSA9IDAuMCwgYWRbaiArIDRdID0gMC4wLCBhZFtqICsgNV0gPSAwLjA7XG5cbiAgICAgICAgICAgIGogKz0gNjtcbiAgICAgICAgICAgIGFkW2pdID0gMC4wLCBhZFtqICsgMV0gPSAwLjAsIGFkW2ogKyAyXSA9IDAuMCwgYWRbaiArIDNdID0gcHgsIGFkW2ogKyA0XSA9IHB5LCBhZFtqICsgNV0gPSAxLjA7XG5cbiAgICAgICAgICAgIGJkW2kgPDwgMV0gPSB0MWRbMF0gKiBwdDEueCArIHQxZFsxXSAqIHB0MS55ICsgdDFkWzJdO1xuICAgICAgICAgICAgYmRbKGkgPDwgMSkgKyAxXSA9IHQxZFszXSAqIHB0MS54ICsgdDFkWzRdICogcHQxLnkgKyB0MWRbNV07XG4gICAgICAgIH1cblxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEEodGhpcy5BdEEsIGFfbXQpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEIodGhpcy5BdEIsIGFfbXQsIGJfbXQpO1xuXG4gICAgICAgIF9saW5hbGcubHVfc29sdmUodGhpcy5BdEEsIHRoaXMuQXRCKTtcblxuICAgICAgICBtZFswXSA9IHRoaXMuQXRCLmRhdGFbMF0sIG1kWzFdID0gdGhpcy5BdEIuZGF0YVsxXSwgbWRbMl0gPSB0aGlzLkF0Qi5kYXRhWzJdO1xuICAgICAgICBtZFszXSA9IHRoaXMuQXRCLmRhdGFbM10sIG1kWzRdID0gdGhpcy5BdEIuZGF0YVs0XSwgbWRbNV0gPSB0aGlzLkF0Qi5kYXRhWzVdO1xuICAgICAgICBtZFs2XSA9IDAuMCwgbWRbN10gPSAwLjAsIG1kWzhdID0gMS4wOyAvLyBmaWxsIGxhc3Qgcm93XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGguaW52ZXJ0XzN4Myh0aGlzLlQxLCB0aGlzLlQxKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYl9idWZmKTtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBob21vZ3JhcGh5MmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1MdEwgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuRXZlYyA9IG5ldyBtYXRyaXhfdCg5LCA5LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG4gICAgcnVuKGZyb20sIHRvLCBtb2RlbCwgY291bnQpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBMdEwgPSB0aGlzLm1MdEwuZGF0YSwgZXZkID0gdGhpcy5FdmVjLmRhdGE7XG4gICAgICAgIHZhciB4ID0gMC4wLCB5ID0gMC4wLCBYID0gMC4wLCBZID0gMC4wO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBsaW5hbGcoKTtcbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcblxuICAgICAgICAvLyBub3JtXG4gICAgICAgIHZhciBzbXggPSAwLjAsIHNteSA9IDAuMCwgY214ID0gMC4wLCBjbXkgPSAwLjAsIHNNeCA9IDAuMCwgc015ID0gMC4wLCBjTXggPSAwLjAsIGNNeSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGNteCArPSB0b1tpXS54O1xuICAgICAgICAgICAgY215ICs9IHRvW2ldLnk7XG4gICAgICAgICAgICBjTXggKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY015ICs9IGZyb21baV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNteCAvPSBjb3VudDsgY215IC89IGNvdW50O1xuICAgICAgICBjTXggLz0gY291bnQ7IGNNeSAvPSBjb3VudDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgc214ICs9IE1hdGguYWJzKHRvW2ldLnggLSBjbXgpO1xuICAgICAgICAgICAgc215ICs9IE1hdGguYWJzKHRvW2ldLnkgLSBjbXkpO1xuICAgICAgICAgICAgc014ICs9IE1hdGguYWJzKGZyb21baV0ueCAtIGNNeCk7XG4gICAgICAgICAgICBzTXkgKz0gTWF0aC5hYnMoZnJvbVtpXS55IC0gY015KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzbXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzbXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSByZXR1cm4gMDtcblxuICAgICAgICBzbXggPSBjb3VudCAvIHNteDsgc215ID0gY291bnQgLyBzbXk7XG4gICAgICAgIHNNeCA9IGNvdW50IC8gc014OyBzTXkgPSBjb3VudCAvIHNNeTtcblxuICAgICAgICB0MGRbMF0gPSBzTXg7IHQwZFsxXSA9IDA7IHQwZFsyXSA9IC1jTXggKiBzTXg7XG4gICAgICAgIHQwZFszXSA9IDA7IHQwZFs0XSA9IHNNeTsgdDBkWzVdID0gLWNNeSAqIHNNeTtcbiAgICAgICAgdDBkWzZdID0gMDsgdDBkWzddID0gMDsgdDBkWzhdID0gMTtcblxuICAgICAgICB0MWRbMF0gPSAxLjAgLyBzbXg7IHQxZFsxXSA9IDA7IHQxZFsyXSA9IGNteDtcbiAgICAgICAgdDFkWzNdID0gMDsgdDFkWzRdID0gMS4wIC8gc215OyB0MWRbNV0gPSBjbXk7XG4gICAgICAgIHQxZFs2XSA9IDA7IHQxZFs3XSA9IDA7IHQxZFs4XSA9IDE7XG4gICAgICAgIC8vXG5cbiAgICAgICAgLy8gY29uc3RydWN0IHN5c3RlbVxuICAgICAgICBpID0gODE7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgTHRMW2ldID0gMC4wO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB4ID0gKHRvW2ldLnggLSBjbXgpICogc214O1xuICAgICAgICAgICAgeSA9ICh0b1tpXS55IC0gY215KSAqIHNteTtcbiAgICAgICAgICAgIFggPSAoZnJvbVtpXS54IC0gY014KSAqIHNNeDtcbiAgICAgICAgICAgIFkgPSAoZnJvbVtpXS55IC0gY015KSAqIHNNeTtcblxuICAgICAgICAgICAgTHRMWzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzFdICs9IFggKiBZO1xuICAgICAgICAgICAgTHRMWzJdICs9IFg7XG5cbiAgICAgICAgICAgIEx0TFs2XSArPSBYICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzddICs9IFggKiAteCAqIFk7XG4gICAgICAgICAgICBMdExbOF0gKz0gWCAqIC14O1xuICAgICAgICAgICAgTHRMWzEwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFsxMV0gKz0gWTtcblxuICAgICAgICAgICAgTHRMWzE1XSArPSBZICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzE2XSArPSBZICogLXggKiBZO1xuICAgICAgICAgICAgTHRMWzE3XSArPSBZICogLXg7XG4gICAgICAgICAgICBMdExbMjBdICs9IDEuMDtcblxuICAgICAgICAgICAgTHRMWzI0XSArPSAteCAqIFg7XG4gICAgICAgICAgICBMdExbMjVdICs9IC14ICogWTtcbiAgICAgICAgICAgIEx0TFsyNl0gKz0gLXg7XG4gICAgICAgICAgICBMdExbMzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzMxXSArPSBYICogWTtcbiAgICAgICAgICAgIEx0TFszMl0gKz0gWDtcbiAgICAgICAgICAgIEx0TFszM10gKz0gWCAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFszNF0gKz0gWCAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFszNV0gKz0gWCAqIC15O1xuICAgICAgICAgICAgTHRMWzQwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFs0MV0gKz0gWTtcbiAgICAgICAgICAgIEx0TFs0Ml0gKz0gWSAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFs0M10gKz0gWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs0NF0gKz0gWSAqIC15O1xuICAgICAgICAgICAgTHRMWzUwXSArPSAxLjA7XG4gICAgICAgICAgICBMdExbNTFdICs9IC15ICogWDtcbiAgICAgICAgICAgIEx0TFs1Ml0gKz0gLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzUzXSArPSAteTtcbiAgICAgICAgICAgIEx0TFs2MF0gKz0gLXggKiBYICogLXggKiBYICsgLXkgKiBYICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzYxXSArPSAteCAqIFggKiAteCAqIFkgKyAteSAqIFggKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNjJdICs9IC14ICogWCAqIC14ICsgLXkgKiBYICogLXk7XG4gICAgICAgICAgICBMdExbNzBdICs9IC14ICogWSAqIC14ICogWSArIC15ICogWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs3MV0gKz0gLXggKiBZICogLXggKyAteSAqIFkgKiAteTtcbiAgICAgICAgICAgIEx0TFs4MF0gKz0gLXggKiAteCArIC15ICogLXk7XG4gICAgICAgIH1cbiAgICAgICAgLy9cblxuICAgICAgICAvLyBzeW1tZXRyeVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgOTsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKVxuICAgICAgICAgICAgICAgIEx0TFtpICogOSArIGpdID0gTHRMW2ogKiA5ICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICBfbGluYWxnLmVpZ2VuVlYodGhpcy5tTHRMLCB0aGlzLkV2ZWMpO1xuXG4gICAgICAgIG1kWzBdID0gZXZkWzcyXSwgbWRbMV0gPSBldmRbNzNdLCBtZFsyXSA9IGV2ZFs3NF07XG4gICAgICAgIG1kWzNdID0gZXZkWzc1XSwgbWRbNF0gPSBldmRbNzZdLCBtZFs1XSA9IGV2ZFs3N107XG4gICAgICAgIG1kWzZdID0gZXZkWzc4XSwgbWRbN10gPSBldmRbNzldLCBtZFs4XSA9IGV2ZFs4MF07XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIHNldCBib3R0b20gcmlnaHQgdG8gMS4wXG4gICAgICAgIHggPSAxLjAgLyBtZFs4XTtcbiAgICAgICAgbWRbMF0gKj0geDsgbWRbMV0gKj0geDsgbWRbMl0gKj0geDtcbiAgICAgICAgbWRbM10gKj0geDsgbWRbNF0gKj0geDsgbWRbNV0gKj0geDtcbiAgICAgICAgbWRbNl0gKj0geDsgbWRbN10gKj0geDsgbWRbOF0gPSAxLjA7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVycm9yKGZyb20sIHRvLCBtb2RlbCwgZXJyLCBjb3VudCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBwdDAsIHB0MSwgd3cgPSAwLjAsIGR4ID0gMC4wLCBkeSA9IDAuMDtcbiAgICAgICAgdmFyIG0gPSBtb2RlbC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHQwID0gZnJvbVtpXTtcbiAgICAgICAgICAgIHB0MSA9IHRvW2ldO1xuXG4gICAgICAgICAgICB3dyA9IDEuMCAvIChtWzZdICogcHQwLnggKyBtWzddICogcHQwLnkgKyAxLjApO1xuICAgICAgICAgICAgZHggPSAobVswXSAqIHB0MC54ICsgbVsxXSAqIHB0MC55ICsgbVsyXSkgKiB3dyAtIHB0MS54O1xuICAgICAgICAgICAgZHkgPSAobVszXSAqIHB0MC54ICsgbVs0XSAqIHB0MC55ICsgbVs1XSkgKiB3dyAtIHB0MS55O1xuICAgICAgICAgICAgZXJyW2ldID0gKGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja19zdWJzZXQoZnJvbSwgdG8sIGNvdW50KSB7XG4gICAgICAgIC8vIHNlZW1zIHRvIHJlamVjdCBnb29kIHN1YnNldHMgYWN0dWFsbHlcbiAgICAgICAgLy9pZiggaGF2ZV9jb2xsaW5lYXJfcG9pbnRzKGZyb20sIGNvdW50KSB8fCBoYXZlX2NvbGxpbmVhcl9wb2ludHModG8sIGNvdW50KSApIHtcbiAgICAgICAgLy9yZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vfVxuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICBpZiAoY291bnQgPT0gNCkge1xuICAgICAgICAgICAgdmFyIG5lZ2F0aXZlID0gMDtcblxuICAgICAgICAgICAgdmFyIGZwMCA9IGZyb21bMF0sIGZwMSA9IGZyb21bMV0sIGZwMiA9IGZyb21bMl0sIGZwMyA9IGZyb21bM107XG4gICAgICAgICAgICB2YXIgdHAwID0gdG9bMF0sIHRwMSA9IHRvWzFdLCB0cDIgPSB0b1syXSwgdHAzID0gdG9bM107XG5cbiAgICAgICAgICAgIC8vIHNldDFcbiAgICAgICAgICAgIHZhciBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnksIEExMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMjEgPSBmcDEueCwgQTIyID0gZnAxLnksIEEyMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMzEgPSBmcDIueCwgQTMyID0gZnAyLnksIEEzMyA9IDEuMDtcblxuICAgICAgICAgICAgdmFyIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueSwgQjEzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIyMSA9IHRwMS54LCBCMjIgPSB0cDEueSwgQjIzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIzMSA9IHRwMi54LCBCMzIgPSB0cDIueSwgQjMzID0gMS4wO1xuXG4gICAgICAgICAgICB2YXIgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIHZhciBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQyXG4gICAgICAgICAgICBBMTEgPSBmcDEueCwgQTEyID0gZnAxLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDIueCwgQTIyID0gZnAyLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMS54LCBCMTIgPSB0cDEueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMi54LCBCMjIgPSB0cDIueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDNcbiAgICAgICAgICAgIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMi54LCBBMjIgPSBmcDIueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAwLngsIEIxMiA9IHRwMC55O1xuICAgICAgICAgICAgQjIxID0gdHAyLngsIEIyMiA9IHRwMi55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0NFxuICAgICAgICAgICAgQTExID0gZnAwLngsIEExMiA9IGZwMC55O1xuICAgICAgICAgICAgQTIxID0gZnAxLngsIEEyMiA9IGZwMS55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDEueCwgQjIyID0gdHAxLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICBpZiAobmVnYXRpdmUgIT0gMCAmJiBuZWdhdGl2ZSAhPSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBhbGwgZ29vZFxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyByYW5zYWNfcGFyYW1zX3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHRocmVzaCwgZXBzLCBwcm9iKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzaXplID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHRocmVzaCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0aHJlc2ggPSAwLjU7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHsgZXBzID0gMC41OyB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvYiA9PT0gXCJ1bmRlZmluZWRcIikgeyBwcm9iID0gMC45OTsgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMudGhyZXNoID0gdGhyZXNoO1xuICAgICAgICB0aGlzLmVwcyA9IGVwcztcbiAgICAgICAgdGhpcy5wcm9iID0gcHJvYjtcbiAgICB9O1xuICAgIHVwZGF0ZV9pdGVycyhfZXBzLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgdmFyIG51bSA9IE1hdGgubG9nKDEgLSB0aGlzLnByb2IpO1xuICAgICAgICB2YXIgZGVub20gPSBNYXRoLmxvZygxIC0gTWF0aC5wb3coMSAtIF9lcHMsIHRoaXMuc2l6ZSkpO1xuICAgICAgICByZXR1cm4gKGRlbm9tID49IDAgfHwgLW51bSA+PSBtYXhfaXRlcnMgKiAoLWRlbm9tKSA/IG1heF9pdGVycyA6IE1hdGgucm91bmQobnVtIC8gZGVub20pKSB8IDA7XG4gICAgfVxufTsiLCJpbXBvcnQgZGF0YV90IGZyb20gJy4vZGF0YV90LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX3Bvb2xfbm9kZV90IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxuICAgIHJlc2l6ZShzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFfdCAge1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXMsIGJ1ZmZlcikge1xuICAgICAgICAvL3N1cGVyKClcbiAgICAgICAgLy8gd2UgbmVlZCBhbGlnbiBzaXplIHRvIG11bHRpcGxlIG9mIDhcbiAgICAgICAgdGhpcy5zaXplID0gKChzaXplX2luX2J5dGVzICsgNykgfCAwKSAmIC04O1xuICAgICAgICBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5zaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy5zaXplID0gYnVmZmVyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnU4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmkzMiA9IG5ldyBJbnQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mMzIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mNjQgPSBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGJpdF9wYXR0ZXJuXzMxID0gW1xuICAgIDgsLTMsIDksNS8qbWVhbiAoMCksIGNvcnJlbGF0aW9uICgwKSovLFxuICAgIDQsMiwgNywtMTIvKm1lYW4gKDEuMTI0NjFlLTA1KSwgY29ycmVsYXRpb24gKDAuMDQzNzU4NCkqLyxcbiAgICAtMTEsOSwgLTgsMi8qbWVhbiAoMy4zNzM4MmUtMDUpLCBjb3JyZWxhdGlvbiAoMC4wNjE3NDA5KSovLFxuICAgIDcsLTEyLCAxMiwtMTMvKm1lYW4gKDUuNjIzMDNlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYzNjk3NykqLyxcbiAgICAyLC0xMywgMiwxMi8qbWVhbiAoMC4wMDAxMzQ5NTMpLCBjb3JyZWxhdGlvbiAoMC4wODUwOTkpKi8sXG4gICAgMSwtNywgMSw2LyptZWFuICgwLjAwMDUyODU2NSksIGNvcnJlbGF0aW9uICgwLjA4NTcxNzUpKi8sXG4gICAgLTIsLTEwLCAtMiwtNC8qbWVhbiAoMC4wMTg4ODIxKSwgY29ycmVsYXRpb24gKDAuMDk4NTc3NCkqLyxcbiAgICAtMTMsLTEzLCAtMTEsLTgvKm1lYW4gKDAuMDM2MzEzNSksIGNvcnJlbGF0aW9uICgwLjA4OTk2MTYpKi8sXG4gICAgLTEzLC0zLCAtMTIsLTkvKm1lYW4gKDAuMTIxODA2KSwgY29ycmVsYXRpb24gKDAuMDk5ODQ5KSovLFxuICAgIDEwLDQsIDExLDkvKm1lYW4gKDAuMTIyMDY1KSwgY29ycmVsYXRpb24gKDAuMDkzMjg1KSovLFxuICAgIC0xMywtOCwgLTgsLTkvKm1lYW4gKDAuMTYyNzg3KSwgY29ycmVsYXRpb24gKDAuMDk0Mjc0OCkqLyxcbiAgICAtMTEsNywgLTksMTIvKm1lYW4gKDAuMjE1NjEpLCBjb3JyZWxhdGlvbiAoMC4wOTc0NDM4KSovLFxuICAgIDcsNywgMTIsNi8qbWVhbiAoMC4xNjA1ODMpLCBjb3JyZWxhdGlvbiAoMC4xMzAwNjQpKi8sXG4gICAgLTQsLTUsIC0zLDAvKm1lYW4gKDAuMjI4MTcxKSwgY29ycmVsYXRpb24gKDAuMTMyOTk4KSovLFxuICAgIC0xMywyLCAtMTIsLTMvKm1lYW4gKDAuMDA5OTc1MjYpLCBjb3JyZWxhdGlvbiAoMC4xNDU5MjYpKi8sXG4gICAgLTksMCwgLTcsNS8qbWVhbiAoMC4xOTgyMzQpLCBjb3JyZWxhdGlvbiAoMC4xNDM2MzYpKi8sXG4gICAgMTIsLTYsIDEyLC0xLyptZWFuICgwLjA2NzYyMjYpLCBjb3JyZWxhdGlvbiAoMC4xNjY4OSkqLyxcbiAgICAtMyw2LCAtMiwxMi8qbWVhbiAoMC4xNjY4NDcpLCBjb3JyZWxhdGlvbiAoMC4xNzE2ODIpKi8sXG4gICAgLTYsLTEzLCAtNCwtOC8qbWVhbiAoMC4xMDEyMTUpLCBjb3JyZWxhdGlvbiAoMC4xNzk3MTYpKi8sXG4gICAgMTEsLTEzLCAxMiwtOC8qbWVhbiAoMC4yMDA2NDEpLCBjb3JyZWxhdGlvbiAoMC4xOTIyNzkpKi8sXG4gICAgNCw3LCA1LDEvKm1lYW4gKDAuMjA1MTA2KSwgY29ycmVsYXRpb24gKDAuMTg2ODQ4KSovLFxuICAgIDUsLTMsIDEwLC0zLyptZWFuICgwLjIzNDkwOCksIGNvcnJlbGF0aW9uICgwLjE5MjMxOSkqLyxcbiAgICAzLC03LCA2LDEyLyptZWFuICgwLjA3MDk5NjQpLCBjb3JyZWxhdGlvbiAoMC4yMTA4NzIpKi8sXG4gICAgLTgsLTcsIC02LC0yLyptZWFuICgwLjA5Mzk4MzQpLCBjb3JyZWxhdGlvbiAoMC4yMTI1ODkpKi8sXG4gICAgLTIsMTEsIC0xLC0xMC8qbWVhbiAoMC4xMjc3NzgpLCBjb3JyZWxhdGlvbiAoMC4yMDg2NikqLyxcbiAgICAtMTMsMTIsIC04LDEwLyptZWFuICgwLjE0NzgzKSwgY29ycmVsYXRpb24gKDAuMjA2MzU2KSovLFxuICAgIC03LDMsIC01LC0zLyptZWFuICgwLjE4MjE0MSksIGNvcnJlbGF0aW9uICgwLjE5ODk0MikqLyxcbiAgICAtNCwyLCAtMyw3LyptZWFuICgwLjE4ODIzNyksIGNvcnJlbGF0aW9uICgwLjIxMzg0KSovLFxuICAgIC0xMCwtMTIsIC02LDExLyptZWFuICgwLjE0ODY1KSwgY29ycmVsYXRpb24gKDAuMjM1NzEpKi8sXG4gICAgNSwtMTIsIDYsLTcvKm1lYW4gKDAuMjIyMzEyKSwgY29ycmVsYXRpb24gKDAuMjMzMjQpKi8sXG4gICAgNSwtNiwgNywtMS8qbWVhbiAoMC4yMjkwODIpLCBjb3JyZWxhdGlvbiAoMC4yMzM4OSkqLyxcbiAgICAxLDAsIDQsLTUvKm1lYW4gKDAuMjQxNTc3KSwgY29ycmVsYXRpb24gKDAuMjE1Mjg2KSovLFxuICAgIDksMTEsIDExLC0xMy8qbWVhbiAoMC4wMDMzODUwNyksIGNvcnJlbGF0aW9uICgwLjI1MTM3MykqLyxcbiAgICA0LDcsIDQsMTIvKm1lYW4gKDAuMTMxMDA1KSwgY29ycmVsYXRpb24gKDAuMjU3NjIyKSovLFxuICAgIDIsLTEsIDQsNC8qbWVhbiAoMC4xNTI3NTUpLCBjb3JyZWxhdGlvbiAoMC4yNTUyMDUpKi8sXG4gICAgLTQsLTEyLCAtMiw3LyptZWFuICgwLjE4Mjc3MSksIGNvcnJlbGF0aW9uICgwLjI0NDg2NykqLyxcbiAgICAtOCwtNSwgLTcsLTEwLyptZWFuICgwLjE4Njg5OCksIGNvcnJlbGF0aW9uICgwLjIzOTAxKSovLFxuICAgIDQsMTEsIDksMTIvKm1lYW4gKDAuMjI2MjI2KSwgY29ycmVsYXRpb24gKDAuMjU4MjU1KSovLFxuICAgIDAsLTgsIDEsLTEzLyptZWFuICgwLjA4OTc4ODYpLCBjb3JyZWxhdGlvbiAoMC4yNzQ4MjcpKi8sXG4gICAgLTEzLC0yLCAtOCwyLyptZWFuICgwLjE0ODc3NCksIGNvcnJlbGF0aW9uICgwLjI4MDY1KSovLFxuICAgIC0zLC0yLCAtMiwzLyptZWFuICgwLjE1MzA0OCksIGNvcnJlbGF0aW9uICgwLjI4MzA2MykqLyxcbiAgICAtNiw5LCAtNCwtOS8qbWVhbiAoMC4xNjk1MjMpLCBjb3JyZWxhdGlvbiAoMC4yNzgyNDgpKi8sXG4gICAgOCwxMiwgMTAsNy8qbWVhbiAoMC4yMjUzMzcpLCBjb3JyZWxhdGlvbiAoMC4yODI4NTEpKi8sXG4gICAgMCw5LCAxLDMvKm1lYW4gKDAuMjI2Njg3KSwgY29ycmVsYXRpb24gKDAuMjc4NzM0KSovLFxuICAgIDcsLTUsIDExLC0xMC8qbWVhbiAoMC4wMDY5Mzg4MiksIGNvcnJlbGF0aW9uICgwLjMwNTE2MSkqLyxcbiAgICAtMTMsLTYsIC0xMSwwLyptZWFuICgwLjAyMjcyODMpLCBjb3JyZWxhdGlvbiAoMC4zMDAxODEpKi8sXG4gICAgMTAsNywgMTIsMS8qbWVhbiAoMC4xMjU1MTcpLCBjb3JyZWxhdGlvbiAoMC4zMTA4OSkqLyxcbiAgICAtNiwtMywgLTYsMTIvKm1lYW4gKDAuMTMxNzQ4KSwgY29ycmVsYXRpb24gKDAuMzEyNzc5KSovLFxuICAgIDEwLC05LCAxMiwtNC8qbWVhbiAoMC4xNDQ4MjcpLCBjb3JyZWxhdGlvbiAoMC4yOTI3OTcpKi8sXG4gICAgLTEzLDgsIC04LC0xMi8qbWVhbiAoMC4xNDkyMDIpLCBjb3JyZWxhdGlvbiAoMC4zMDg5MTgpKi8sXG4gICAgLTEzLDAsIC04LC00LyptZWFuICgwLjE2MDkwOSksIGNvcnJlbGF0aW9uICgwLjMxMDAxMykqLyxcbiAgICAzLDMsIDcsOC8qbWVhbiAoMC4xNzc3NTUpLCBjb3JyZWxhdGlvbiAoMC4zMDkzOTQpKi8sXG4gICAgNSw3LCAxMCwtNy8qbWVhbiAoMC4yMTIzMzcpLCBjb3JyZWxhdGlvbiAoMC4zMTAzMTUpKi8sXG4gICAgLTEsNywgMSwtMTIvKm1lYW4gKDAuMjE0NDI5KSwgY29ycmVsYXRpb24gKDAuMzExOTMzKSovLFxuICAgIDMsLTEwLCA1LDYvKm1lYW4gKDAuMjM1ODA3KSwgY29ycmVsYXRpb24gKDAuMzEzMTA0KSovLFxuICAgIDIsLTQsIDMsLTEwLyptZWFuICgwLjAwNDk0ODI3KSwgY29ycmVsYXRpb24gKDAuMzQ0OTQ4KSovLFxuICAgIC0xMywwLCAtMTMsNS8qbWVhbiAoMC4wNTQ5MTQ1KSwgY29ycmVsYXRpb24gKDAuMzQ0Njc1KSovLFxuICAgIC0xMywtNywgLTEyLDEyLyptZWFuICgwLjEwMzM4NSksIGNvcnJlbGF0aW9uICgwLjM0MjcxNSkqLyxcbiAgICAtMTMsMywgLTExLDgvKm1lYW4gKDAuMTM0MjIyKSwgY29ycmVsYXRpb24gKDAuMzIyOTIyKSovLFxuICAgIC03LDEyLCAtNCw3LyptZWFuICgwLjE1MzI4NCksIGNvcnJlbGF0aW9uICgwLjMzNzA2MSkqLyxcbiAgICA2LC0xMCwgMTIsOC8qbWVhbiAoMC4xNTQ4ODEpLCBjb3JyZWxhdGlvbiAoMC4zMjkyNTcpKi8sXG4gICAgLTksLTEsIC03LC02LyptZWFuICgwLjIwMDk2NyksIGNvcnJlbGF0aW9uICgwLjMzMzEyKSovLFxuICAgIC0yLC01LCAwLDEyLyptZWFuICgwLjIwMTUxOCksIGNvcnJlbGF0aW9uICgwLjM0MDYzNSkqLyxcbiAgICAtMTIsNSwgLTcsNS8qbWVhbiAoMC4yMDc4MDUpLCBjb3JyZWxhdGlvbiAoMC4zMzU2MzEpKi8sXG4gICAgMywtMTAsIDgsLTEzLyptZWFuICgwLjIyNDQzOCksIGNvcnJlbGF0aW9uICgwLjM0NTA0KSovLFxuICAgIC03LC03LCAtNCw1LyptZWFuICgwLjIzOTM2MSksIGNvcnJlbGF0aW9uICgwLjMzODA1MykqLyxcbiAgICAtMywtMiwgLTEsLTcvKm1lYW4gKDAuMjQwNzQ0KSwgY29ycmVsYXRpb24gKDAuMzQ0MzIyKSovLFxuICAgIDIsOSwgNSwtMTEvKm1lYW4gKDAuMjQyOTQ5KSwgY29ycmVsYXRpb24gKDAuMzQxNDUpKi8sXG4gICAgLTExLC0xMywgLTUsLTEzLyptZWFuICgwLjI0NDAyOCksIGNvcnJlbGF0aW9uICgwLjMzNjg2MSkqLyxcbiAgICAtMSw2LCAwLC0xLyptZWFuICgwLjI0NzU3MSksIGNvcnJlbGF0aW9uICgwLjM0MzY4NCkqLyxcbiAgICA1LC0zLCA1LDIvKm1lYW4gKDAuMDAwNjk3MjU2KSwgY29ycmVsYXRpb24gKDAuMzU3MjY1KSovLFxuICAgIC00LC0xMywgLTQsMTIvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC4zNzM4MjcpKi8sXG4gICAgLTksLTYsIC05LDYvKm1lYW4gKDAuMDEyNjg1NiksIGNvcnJlbGF0aW9uICgwLjM3MzkzOCkqLyxcbiAgICAtMTIsLTEwLCAtOCwtNC8qbWVhbiAoMC4wMTUyNDk3KSwgY29ycmVsYXRpb24gKDAuMzY0MjM3KSovLFxuICAgIDEwLDIsIDEyLC0zLyptZWFuICgwLjAyOTk5MzMpLCBjb3JyZWxhdGlvbiAoMC4zNDUyOTIpKi8sXG4gICAgNywxMiwgMTIsMTIvKm1lYW4gKDAuMDMwNzI0MiksIGNvcnJlbGF0aW9uICgwLjM2NjI5OSkqLyxcbiAgICAtNywtMTMsIC02LDUvKm1lYW4gKDAuMDUzNDk3NSksIGNvcnJlbGF0aW9uICgwLjM2ODM1NykqLyxcbiAgICAtNCw5LCAtMyw0LyptZWFuICgwLjA5OTg2NSksIGNvcnJlbGF0aW9uICgwLjM3MjI3NikqLyxcbiAgICA3LC0xLCAxMiwyLyptZWFuICgwLjExNzA4MyksIGNvcnJlbGF0aW9uICgwLjM2NDUyOSkqLyxcbiAgICAtNyw2LCAtNSwxLyptZWFuICgwLjEyNjEyNSksIGNvcnJlbGF0aW9uICgwLjM2OTYwNikqLyxcbiAgICAtMTMsMTEsIC0xMiw1LyptZWFuICgwLjEzMDM2NCksIGNvcnJlbGF0aW9uICgwLjM1ODUwMikqLyxcbiAgICAtMyw3LCAtMiwtNi8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC4zNzU1MzEpKi8sXG4gICAgNywtOCwgMTIsLTcvKm1lYW4gKDAuMTYwMTY2KSwgY29ycmVsYXRpb24gKDAuMzc5NTA4KSovLFxuICAgIC0xMywtNywgLTExLC0xMi8qbWVhbiAoMC4xNjc4NDgpLCBjb3JyZWxhdGlvbiAoMC4zNTMzNDMpKi8sXG4gICAgMSwtMywgMTIsMTIvKm1lYW4gKDAuMTgzMzc4KSwgY29ycmVsYXRpb24gKDAuMzcxOTE2KSovLFxuICAgIDIsLTYsIDMsMC8qbWVhbiAoMC4yMjg3MTEpLCBjb3JyZWxhdGlvbiAoMC4zNzE3NjEpKi8sXG4gICAgLTQsMywgLTIsLTEzLyptZWFuICgwLjI0NzIxMSksIGNvcnJlbGF0aW9uICgwLjM2NDA2MykqLyxcbiAgICAtMSwtMTMsIDEsOS8qbWVhbiAoMC4yNDkzMjUpLCBjb3JyZWxhdGlvbiAoMC4zNzgxMzkpKi8sXG4gICAgNywxLCA4LC02LyptZWFuICgwLjAwMDY1MjI3MiksIGNvcnJlbGF0aW9uICgwLjQxMTY4MikqLyxcbiAgICAxLC0xLCAzLDEyLyptZWFuICgwLjAwMjQ4NTM4KSwgY29ycmVsYXRpb24gKDAuMzkyOTg4KSovLFxuICAgIDksMSwgMTIsNi8qbWVhbiAoMC4wMjA2ODE1KSwgY29ycmVsYXRpb24gKDAuMzg2MTA2KSovLFxuICAgIC0xLC05LCAtMSwzLyptZWFuICgwLjAzNjQ0ODUpLCBjb3JyZWxhdGlvbiAoMC40MTA3NTIpKi8sXG4gICAgLTEzLC0xMywgLTEwLDUvKm1lYW4gKDAuMDM3NjA2OCksIGNvcnJlbGF0aW9uICgwLjM5ODM3NCkqLyxcbiAgICA3LDcsIDEwLDEyLyptZWFuICgwLjA0MjQyMDIpLCBjb3JyZWxhdGlvbiAoMC40MDU2NjMpKi8sXG4gICAgMTIsLTUsIDEyLDkvKm1lYW4gKDAuMDk0MjY0NSksIGNvcnJlbGF0aW9uICgwLjQxMDQyMikqLyxcbiAgICA2LDMsIDcsMTEvKm1lYW4gKDAuMTA3NCksIGNvcnJlbGF0aW9uICgwLjQxMzIyNCkqLyxcbiAgICA1LC0xMywgNiwxMC8qbWVhbiAoMC4xMDkyNTYpLCBjb3JyZWxhdGlvbiAoMC40MDg2NDYpKi8sXG4gICAgMiwtMTIsIDIsMy8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC40MTYwNzYpKi8sXG4gICAgMyw4LCA0LC02LyptZWFuICgwLjE2NTA4MSksIGNvcnJlbGF0aW9uICgwLjQxNzU2OSkqLyxcbiAgICAyLDYsIDEyLC0xMy8qbWVhbiAoMC4xNzE4NzQpLCBjb3JyZWxhdGlvbiAoMC40MDg0NzEpKi8sXG4gICAgOSwtMTIsIDEwLDMvKm1lYW4gKDAuMTc1MTQ2KSwgY29ycmVsYXRpb24gKDAuNDEyOTYpKi8sXG4gICAgLTgsNCwgLTcsOS8qbWVhbiAoMC4xODM2ODIpLCBjb3JyZWxhdGlvbiAoMC40MDI5NTYpKi8sXG4gICAgLTExLDEyLCAtNCwtNi8qbWVhbiAoMC4xODQ2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTYxMjUpKi8sXG4gICAgMSwxMiwgMiwtOC8qbWVhbiAoMC4xOTE0ODcpLCBjb3JyZWxhdGlvbiAoMC4zODY2OTYpKi8sXG4gICAgNiwtOSwgNywtNC8qbWVhbiAoMC4xOTI2NjgpLCBjb3JyZWxhdGlvbiAoMC4zOTQ3NzEpKi8sXG4gICAgMiwzLCAzLC0yLyptZWFuICgwLjIwMDE1NyksIGNvcnJlbGF0aW9uICgwLjQwODMwMykqLyxcbiAgICA2LDMsIDExLDAvKm1lYW4gKDAuMjA0NTg4KSwgY29ycmVsYXRpb24gKDAuNDExNzYyKSovLFxuICAgIDMsLTMsIDgsLTgvKm1lYW4gKDAuMjA1OTA0KSwgY29ycmVsYXRpb24gKDAuNDE2Mjk0KSovLFxuICAgIDcsOCwgOSwzLyptZWFuICgwLjIxMzIzNyksIGNvcnJlbGF0aW9uICgwLjQwOTMwNikqLyxcbiAgICAtMTEsLTUsIC02LC00LyptZWFuICgwLjI0MzQ0NCksIGNvcnJlbGF0aW9uICgwLjM5NTA2OSkqLyxcbiAgICAtMTAsMTEsIC01LDEwLyptZWFuICgwLjI0NzY3MiksIGNvcnJlbGF0aW9uICgwLjQxMzM5MikqLyxcbiAgICAtNSwtOCwgLTMsMTIvKm1lYW4gKDAuMjQ3NzQpLCBjb3JyZWxhdGlvbiAoMC40MTE0MTYpKi8sXG4gICAgLTEwLDUsIC05LDAvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC40NTQwMDMpKi8sXG4gICAgOCwtMSwgMTIsLTYvKm1lYW4gKDAuMDI5MzYzNSksIGNvcnJlbGF0aW9uICgwLjQ1NTM2OCkqLyxcbiAgICA0LC02LCA2LC0xMS8qbWVhbiAoMC4wNDA0OTcxKSwgY29ycmVsYXRpb24gKDAuNDU3MzkzKSovLFxuICAgIC0xMCwxMiwgLTgsNy8qbWVhbiAoMC4wNDgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDQ4MzY0KSovLFxuICAgIDQsLTIsIDYsNy8qbWVhbiAoMC4wNTA2NDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMTkpKi8sXG4gICAgLTIsMCwgLTIsMTIvKm1lYW4gKDAuMDUyNTk3OCksIGNvcnJlbGF0aW9uICgwLjQ0MzM4KSovLFxuICAgIC01LC04LCAtNSwyLyptZWFuICgwLjA2Mjk2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTcwOTYpKi8sXG4gICAgNywtNiwgMTAsMTIvKm1lYW4gKDAuMDY1Mzg0NiksIGNvcnJlbGF0aW9uICgwLjQ0NTYyMykqLyxcbiAgICAtOSwtMTMsIC04LC04LyptZWFuICgwLjA4NTg3NDkpLCBjb3JyZWxhdGlvbiAoMC40NDk3ODkpKi8sXG4gICAgLTUsLTEzLCAtNSwtMi8qbWVhbiAoMC4xMjI0MDIpLCBjb3JyZWxhdGlvbiAoMC40NTAyMDEpKi8sXG4gICAgOCwtOCwgOSwtMTMvKm1lYW4gKDAuMTI1NDE2KSwgY29ycmVsYXRpb24gKDAuNDUzMjI0KSovLFxuICAgIC05LC0xMSwgLTksMC8qbWVhbiAoMC4xMzAxMjgpLCBjb3JyZWxhdGlvbiAoMC40NTg3MjQpKi8sXG4gICAgMSwtOCwgMSwtMi8qbWVhbiAoMC4xMzI0NjcpLCBjb3JyZWxhdGlvbiAoMC40NDAxMzMpKi8sXG4gICAgNywtNCwgOSwxLyptZWFuICgwLjEzMjY5MiksIGNvcnJlbGF0aW9uICgwLjQ1NCkqLyxcbiAgICAtMiwxLCAtMSwtNC8qbWVhbiAoMC4xMzU2OTUpLCBjb3JyZWxhdGlvbiAoMC40NTU3MzkpKi8sXG4gICAgMTEsLTYsIDEyLC0xMS8qbWVhbiAoMC4xNDI5MDQpLCBjb3JyZWxhdGlvbiAoMC40NDYxMTQpKi8sXG4gICAgLTEyLC05LCAtNiw0LyptZWFuICgwLjE0NjE2NSksIGNvcnJlbGF0aW9uICgwLjQ1MTQ3MykqLyxcbiAgICAzLDcsIDcsMTIvKm1lYW4gKDAuMTQ3NjI3KSwgY29ycmVsYXRpb24gKDAuNDU2NjQzKSovLFxuICAgIDUsNSwgMTAsOC8qbWVhbiAoMC4xNTI5MDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMzYpKi8sXG4gICAgMCwtNCwgMiw4LyptZWFuICgwLjE2NzA4MyksIGNvcnJlbGF0aW9uICgwLjQ1OTMxNSkqLyxcbiAgICAtOSwxMiwgLTUsLTEzLyptZWFuICgwLjE3MzIzNCksIGNvcnJlbGF0aW9uICgwLjQ1NDcwNikqLyxcbiAgICAwLDcsIDIsMTIvKm1lYW4gKDAuMTgzMTIpLCBjb3JyZWxhdGlvbiAoMC40MzM4NTUpKi8sXG4gICAgLTEsMiwgMSw3LyptZWFuICgwLjE4NTUwNCksIGNvcnJlbGF0aW9uICgwLjQ0MzgzOCkqLyxcbiAgICA1LDExLCA3LC05LyptZWFuICgwLjE4NTcwNiksIGNvcnJlbGF0aW9uICgwLjQ1MTEyMykqLyxcbiAgICAzLDUsIDYsLTgvKm1lYW4gKDAuMTg4OTY4KSwgY29ycmVsYXRpb24gKDAuNDU1ODA4KSovLFxuICAgIC0xMywtNCwgLTgsOS8qbWVhbiAoMC4xOTE2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTkxMjgpKi8sXG4gICAgLTUsOSwgLTMsLTMvKm1lYW4gKDAuMTkzMTk2KSwgY29ycmVsYXRpb24gKDAuNDU4MzY0KSovLFxuICAgIC00LC03LCAtMywtMTIvKm1lYW4gKDAuMTk2NTM2KSwgY29ycmVsYXRpb24gKDAuNDU1NzgyKSovLFxuICAgIDYsNSwgOCwwLyptZWFuICgwLjE5NzIpLCBjb3JyZWxhdGlvbiAoMC40NTA0ODEpKi8sXG4gICAgLTcsNiwgLTYsMTIvKm1lYW4gKDAuMTk5NDM4KSwgY29ycmVsYXRpb24gKDAuNDU4MTU2KSovLFxuICAgIC0xMyw2LCAtNSwtMi8qbWVhbiAoMC4yMTEyMjQpLCBjb3JyZWxhdGlvbiAoMC40NDk1NDgpKi8sXG4gICAgMSwtMTAsIDMsMTAvKm1lYW4gKDAuMjExNzE4KSwgY29ycmVsYXRpb24gKDAuNDQwNjA2KSovLFxuICAgIDQsMSwgOCwtNC8qbWVhbiAoMC4yMTMwMzQpLCBjb3JyZWxhdGlvbiAoMC40NDMxNzcpKi8sXG4gICAgLTIsLTIsIDIsLTEzLyptZWFuICgwLjIzNDMzNCksIGNvcnJlbGF0aW9uICgwLjQ1NTMwNCkqLyxcbiAgICAyLC0xMiwgMTIsMTIvKm1lYW4gKDAuMjM1Njg0KSwgY29ycmVsYXRpb24gKDAuNDQzNDM2KSovLFxuICAgIC0yLC0xMywgMCwtNi8qbWVhbiAoMC4yMzc2NzQpLCBjb3JyZWxhdGlvbiAoMC40NTI1MjUpKi8sXG4gICAgNCwxLCA5LDMvKm1lYW4gKDAuMjM5NjIpLCBjb3JyZWxhdGlvbiAoMC40NDQ4MjQpKi8sXG4gICAgLTYsLTEwLCAtMywtNS8qbWVhbiAoMC4yNDg0NTkpLCBjb3JyZWxhdGlvbiAoMC40Mzk2MjEpKi8sXG4gICAgLTMsLTEzLCAtMSwxLyptZWFuICgwLjI0OTUwNSksIGNvcnJlbGF0aW9uICgwLjQ1NjY2NikqLyxcbiAgICA3LDUsIDEyLC0xMS8qbWVhbiAoMC4wMDExOTIwOCksIGNvcnJlbGF0aW9uICgwLjQ5NTQ2NikqLyxcbiAgICA0LC0yLCA1LC03LyptZWFuICgwLjAwMzcyMjQ1KSwgY29ycmVsYXRpb24gKDAuNDg0MjE0KSovLFxuICAgIC0xMyw5LCAtOSwtNS8qbWVhbiAoMC4wMDc0MTExNiksIGNvcnJlbGF0aW9uICgwLjQ5OTg1NCkqLyxcbiAgICA3LDEsIDgsNi8qbWVhbiAoMC4wMjA4OTUyKSwgY29ycmVsYXRpb24gKDAuNDk5NzczKSovLFxuICAgIDcsLTgsIDcsNi8qbWVhbiAoMC4wMjIwMDg1KSwgY29ycmVsYXRpb24gKDAuNTAxNjA5KSovLFxuICAgIC03LC00LCAtNywxLyptZWFuICgwLjAyMzM4MDYpLCBjb3JyZWxhdGlvbiAoMC40OTY1NjgpKi8sXG4gICAgLTgsMTEsIC03LC04LyptZWFuICgwLjAyMzY1MDUpLCBjb3JyZWxhdGlvbiAoMC40ODk3MTkpKi8sXG4gICAgLTEzLDYsIC0xMiwtOC8qbWVhbiAoMC4wMjY4NzgxKSwgY29ycmVsYXRpb24gKDAuNTAzNDg3KSovLFxuICAgIDIsNCwgMyw5LyptZWFuICgwLjAzMjMzMjQpLCBjb3JyZWxhdGlvbiAoMC41MDE5MzgpKi8sXG4gICAgMTAsLTUsIDEyLDMvKm1lYW4gKDAuMDM5OTIzNSksIGNvcnJlbGF0aW9uICgwLjQ5NDAyOSkqLyxcbiAgICAtNiwtNSwgLTYsNy8qbWVhbiAoMC4wNDIwMTUzKSwgY29ycmVsYXRpb24gKDAuNDg2NTc5KSovLFxuICAgIDgsLTMsIDksLTgvKm1lYW4gKDAuMDU0ODAyMSksIGNvcnJlbGF0aW9uICgwLjQ4NDIzNykqLyxcbiAgICAyLC0xMiwgMiw4LyptZWFuICgwLjA2MTY2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTY2NDIpKi8sXG4gICAgLTExLC0yLCAtMTAsMy8qbWVhbiAoMC4wNjI3NzU1KSwgY29ycmVsYXRpb24gKDAuNDk4NTYzKSovLFxuICAgIC0xMiwtMTMsIC03LC05LyptZWFuICgwLjA4Mjk2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTU0OTEpKi8sXG4gICAgLTExLDAsIC0xMCwtNS8qbWVhbiAoMC4wODQzMzQyKSwgY29ycmVsYXRpb24gKDAuNDg3MTQ2KSovLFxuICAgIDUsLTMsIDExLDgvKm1lYW4gKDAuMDkyOTkzNyksIGNvcnJlbGF0aW9uICgwLjUwMjMxNSkqLyxcbiAgICAtMiwtMTMsIC0xLDEyLyptZWFuICgwLjExMzMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTQxKSovLFxuICAgIC0xLC04LCAwLDkvKm1lYW4gKDAuMTMyMTE5KSwgY29ycmVsYXRpb24gKDAuNDY3MjY4KSovLFxuICAgIC0xMywtMTEsIC0xMiwtNS8qbWVhbiAoMC4xMzYyNjkpLCBjb3JyZWxhdGlvbiAoMC40OTg3NzEpKi8sXG4gICAgLTEwLC0yLCAtMTAsMTEvKm1lYW4gKDAuMTQyMTczKSwgY29ycmVsYXRpb24gKDAuNDk4NzE0KSovLFxuICAgIC0zLDksIC0yLC0xMy8qbWVhbiAoMC4xNDQxNDEpLCBjb3JyZWxhdGlvbiAoMC40OTE5NzMpKi8sXG4gICAgMiwtMywgMywyLyptZWFuICgwLjE0ODkyKSwgY29ycmVsYXRpb24gKDAuNTAwNzgyKSovLFxuICAgIC05LC0xMywgLTQsMC8qbWVhbiAoMC4xNTAzNzEpLCBjb3JyZWxhdGlvbiAoMC40OTgyMTEpKi8sXG4gICAgLTQsNiwgLTMsLTEwLyptZWFuICgwLjE1MjE1OSksIGNvcnJlbGF0aW9uICgwLjQ5NTU0NykqLyxcbiAgICAtNCwxMiwgLTIsLTcvKm1lYW4gKDAuMTU2MTUyKSwgY29ycmVsYXRpb24gKDAuNDk2OTI1KSovLFxuICAgIC02LC0xMSwgLTQsOS8qbWVhbiAoMC4xNTc0OSksIGNvcnJlbGF0aW9uICgwLjQ5OTIyMikqLyxcbiAgICA2LC0zLCA2LDExLyptZWFuICgwLjE1OTIxMSksIGNvcnJlbGF0aW9uICgwLjUwMzgyMSkqLyxcbiAgICAtMTMsMTEsIC01LDUvKm1lYW4gKDAuMTYyNDI3KSwgY29ycmVsYXRpb24gKDAuNTAxOTA3KSovLFxuICAgIDExLDExLCAxMiw2LyptZWFuICgwLjE2NjUyKSwgY29ycmVsYXRpb24gKDAuNDk3NjMyKSovLFxuICAgIDcsLTUsIDEyLC0yLyptZWFuICgwLjE2OTE0MSksIGNvcnJlbGF0aW9uICgwLjQ4NDQ3NCkqLyxcbiAgICAtMSwxMiwgMCw3LyptZWFuICgwLjE2OTQ1NiksIGNvcnJlbGF0aW9uICgwLjQ5NTMzOSkqLyxcbiAgICAtNCwtOCwgLTMsLTIvKm1lYW4gKDAuMTcxNDU3KSwgY29ycmVsYXRpb24gKDAuNDg3MjUxKSovLFxuICAgIC03LDEsIC02LDcvKm1lYW4gKDAuMTc1KSwgY29ycmVsYXRpb24gKDAuNTAwMDI0KSovLFxuICAgIC0xMywtMTIsIC04LC0xMy8qbWVhbiAoMC4xNzU4NjYpLCBjb3JyZWxhdGlvbiAoMC40OTc1MjMpKi8sXG4gICAgLTcsLTIsIC02LC04LyptZWFuICgwLjE3ODI3MyksIGNvcnJlbGF0aW9uICgwLjUwMTg1NCkqLyxcbiAgICAtOCw1LCAtNiwtOS8qbWVhbiAoMC4xODExMDcpLCBjb3JyZWxhdGlvbiAoMC40OTQ4ODgpKi8sXG4gICAgLTUsLTEsIC00LDUvKm1lYW4gKDAuMTkwMjI3KSwgY29ycmVsYXRpb24gKDAuNDgyNTU3KSovLFxuICAgIC0xMyw3LCAtOCwxMC8qbWVhbiAoMC4xOTY3MzkpLCBjb3JyZWxhdGlvbiAoMC40OTY1MDMpKi8sXG4gICAgMSw1LCA1LC0xMy8qbWVhbiAoMC4xOTk3MyksIGNvcnJlbGF0aW9uICgwLjQ5OTc1OSkqLyxcbiAgICAxLDAsIDEwLC0xMy8qbWVhbiAoMC4yMDQ0NjUpLCBjb3JyZWxhdGlvbiAoMC40OTg3MykqLyxcbiAgICA5LDEyLCAxMCwtMS8qbWVhbiAoMC4yMDkzMzQpLCBjb3JyZWxhdGlvbiAoMC40OTA2MykqLyxcbiAgICA1LC04LCAxMCwtOS8qbWVhbiAoMC4yMTExMzQpLCBjb3JyZWxhdGlvbiAoMC41MDMwMTEpKi8sXG4gICAgLTEsMTEsIDEsLTEzLyptZWFuICgwLjIxMiksIGNvcnJlbGF0aW9uICgwLjQ5OTQxNCkqLyxcbiAgICAtOSwtMywgLTYsMi8qbWVhbiAoMC4yMTIxNjgpLCBjb3JyZWxhdGlvbiAoMC40ODA3MzkpKi8sXG4gICAgLTEsLTEwLCAxLDEyLyptZWFuICgwLjIxMjczMSksIGNvcnJlbGF0aW9uICgwLjUwMjUyMykqLyxcbiAgICAtMTMsMSwgLTgsLTEwLyptZWFuICgwLjIxMzI3KSwgY29ycmVsYXRpb24gKDAuNDg5Nzg2KSovLFxuICAgIDgsLTExLCAxMCwtNi8qbWVhbiAoMC4yMTQxNTkpLCBjb3JyZWxhdGlvbiAoMC40ODgyNDYpKi8sXG4gICAgMiwtMTMsIDMsLTYvKm1lYW4gKDAuMjE2OTkzKSwgY29ycmVsYXRpb24gKDAuNTAyODcpKi8sXG4gICAgNywtMTMsIDEyLC05LyptZWFuICgwLjIyMzYzOSksIGNvcnJlbGF0aW9uICgwLjQ3MDUwMikqLyxcbiAgICAtMTAsLTEwLCAtNSwtNy8qbWVhbiAoMC4yMjQwODkpLCBjb3JyZWxhdGlvbiAoMC41MDA4NTIpKi8sXG4gICAgLTEwLC04LCAtOCwtMTMvKm1lYW4gKDAuMjI4NjY2KSwgY29ycmVsYXRpb24gKDAuNTAyNjI5KSovLFxuICAgIDQsLTYsIDgsNS8qbWVhbiAoMC4yMjkwNiksIGNvcnJlbGF0aW9uICgwLjQ5ODMwNSkqLyxcbiAgICAzLDEyLCA4LC0xMy8qbWVhbiAoMC4yMzMzNzgpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjUpKi8sXG4gICAgLTQsMiwgLTMsLTMvKm1lYW4gKDAuMjM0MzIzKSwgY29ycmVsYXRpb24gKDAuNDc2NjkyKSovLFxuICAgIDUsLTEzLCAxMCwtMTIvKm1lYW4gKDAuMjM2MzkyKSwgY29ycmVsYXRpb24gKDAuNDc1NDYyKSovLFxuICAgIDQsLTEzLCA1LC0xLyptZWFuICgwLjIzNjg0MiksIGNvcnJlbGF0aW9uICgwLjUwNDEzMikqLyxcbiAgICAtOSw5LCAtNCwzLyptZWFuICgwLjIzNjk3NyksIGNvcnJlbGF0aW9uICgwLjQ5NzczOSkqLyxcbiAgICAwLDMsIDMsLTkvKm1lYW4gKDAuMjQzMTQpLCBjb3JyZWxhdGlvbiAoMC40OTkzOTgpKi8sXG4gICAgLTEyLDEsIC02LDEvKm1lYW4gKDAuMjQzMjk3KSwgY29ycmVsYXRpb24gKDAuNDg5NDQ3KSovLFxuICAgIDMsMiwgNCwtOC8qbWVhbiAoMC4wMDE1NTE5NiksIGNvcnJlbGF0aW9uICgwLjU1MzQ5NikqLyxcbiAgICAtMTAsLTEwLCAtMTAsOS8qbWVhbiAoMC4wMDIzOTU0MSksIGNvcnJlbGF0aW9uICgwLjU0Mjk3KSovLFxuICAgIDgsLTEzLCAxMiwxMi8qbWVhbiAoMC4wMDM0NDEzKSwgY29ycmVsYXRpb24gKDAuNTQ0MzYxKSovLFxuICAgIC04LC0xMiwgLTYsLTUvKm1lYW4gKDAuMDAzNTY1KSwgY29ycmVsYXRpb24gKDAuNTUxMjI1KSovLFxuICAgIDIsMiwgMyw3LyptZWFuICgwLjAwODM1NTgzKSwgY29ycmVsYXRpb24gKDAuNTUyODUpKi8sXG4gICAgMTAsNiwgMTEsLTgvKm1lYW4gKDAuMDA4ODUwNjUpLCBjb3JyZWxhdGlvbiAoMC41NDA5MTMpKi8sXG4gICAgNiw4LCA4LC0xMi8qbWVhbiAoMC4wMTAxNTUyKSwgY29ycmVsYXRpb24gKDAuNTUxMDg1KSovLFxuICAgIC03LDEwLCAtNiw1LyptZWFuICgwLjAxMDIyMjcpLCBjb3JyZWxhdGlvbiAoMC41MzM2MzUpKi8sXG4gICAgLTMsLTksIC0zLDkvKm1lYW4gKDAuMDExMDIxMSksIGNvcnJlbGF0aW9uICgwLjU0MzEyMSkqLyxcbiAgICAtMSwtMTMsIC0xLDUvKm1lYW4gKDAuMDExMzQ3MyksIGNvcnJlbGF0aW9uICgwLjU1MDE3MykqLyxcbiAgICAtMywtNywgLTMsNC8qbWVhbiAoMC4wMTQwOTEzKSwgY29ycmVsYXRpb24gKDAuNTU0Nzc0KSovLFxuICAgIC04LC0yLCAtOCwzLyptZWFuICgwLjAxNzA0OSksIGNvcnJlbGF0aW9uICgwLjU1NDYxKSovLFxuICAgIDQsMiwgMTIsMTIvKm1lYW4gKDAuMDE3NzgpLCBjb3JyZWxhdGlvbiAoMC41NDY5MjEpKi8sXG4gICAgMiwtNSwgMywxMS8qbWVhbiAoMC4wMjI0MDIyKSwgY29ycmVsYXRpb24gKDAuNTQ5NjY3KSovLFxuICAgIDYsLTksIDExLC0xMy8qbWVhbiAoMC4wMjkxNjEpLCBjb3JyZWxhdGlvbiAoMC41NDYyOTUpKi8sXG4gICAgMywtMSwgNywxMi8qbWVhbiAoMC4wMzAzMDgxKSwgY29ycmVsYXRpb24gKDAuNTQ4NTk5KSovLFxuICAgIDExLC0xLCAxMiw0LyptZWFuICgwLjAzNTUxNTEpLCBjb3JyZWxhdGlvbiAoMC41MjM5NDMpKi8sXG4gICAgLTMsMCwgLTMsNi8qbWVhbiAoMC4wNDE3OTA0KSwgY29ycmVsYXRpb24gKDAuNTQzMzk1KSovLFxuICAgIDQsLTExLCA0LDEyLyptZWFuICgwLjA0ODcyOTIpLCBjb3JyZWxhdGlvbiAoMC41NDI4MTgpKi8sXG4gICAgMiwtNCwgMiwxLyptZWFuICgwLjA1NzUxMjQpLCBjb3JyZWxhdGlvbiAoMC41NTQ4ODgpKi8sXG4gICAgLTEwLC02LCAtOCwxLyptZWFuICgwLjA1OTQyNDIpLCBjb3JyZWxhdGlvbiAoMC41NDQwMjYpKi8sXG4gICAgLTEzLDcsIC0xMSwxLyptZWFuICgwLjA1OTczOTEpLCBjb3JyZWxhdGlvbiAoMC41NTA1MjQpKi8sXG4gICAgLTEzLDEyLCAtMTEsLTEzLyptZWFuICgwLjA2MDg5NzQpLCBjb3JyZWxhdGlvbiAoMC41NTM4MykqLyxcbiAgICA2LDAsIDExLC0xMy8qbWVhbiAoMC4wNjUxMjYpLCBjb3JyZWxhdGlvbiAoMC41NTIwMDYpKi8sXG4gICAgMCwtMSwgMSw0LyptZWFuICgwLjA3NDIyNCksIGNvcnJlbGF0aW9uICgwLjU0NjM3MikqLyxcbiAgICAtMTMsMywgLTksLTIvKm1lYW4gKDAuMDgwODU5MiksIGNvcnJlbGF0aW9uICgwLjU1NDg3NSkqLyxcbiAgICAtOSw4LCAtNiwtMy8qbWVhbiAoMC4wODgzMzc4KSwgY29ycmVsYXRpb24gKDAuNTUxMTc4KSovLFxuICAgIC0xMywtNiwgLTgsLTIvKm1lYW4gKDAuMDkwMTAzNSksIGNvcnJlbGF0aW9uICgwLjU0ODQ0NikqLyxcbiAgICA1LC05LCA4LDEwLyptZWFuICgwLjA5NDk4NDMpLCBjb3JyZWxhdGlvbiAoMC41NTQ2OTQpKi8sXG4gICAgMiw3LCAzLC05LyptZWFuICgwLjA5OTQxNTIpLCBjb3JyZWxhdGlvbiAoMC41NTA5NzkpKi8sXG4gICAgLTEsLTYsIC0xLC0xLyptZWFuICgwLjEwMDQ1KSwgY29ycmVsYXRpb24gKDAuNTUyNzE0KSovLFxuICAgIDksNSwgMTEsLTIvKm1lYW4gKDAuMTAwNjg2KSwgY29ycmVsYXRpb24gKDAuNTUyNTk0KSovLFxuICAgIDExLC0zLCAxMiwtOC8qbWVhbiAoMC4xMDEwOTEpLCBjb3JyZWxhdGlvbiAoMC41MzIzOTQpKi8sXG4gICAgMywwLCAzLDUvKm1lYW4gKDAuMTAxMTQ3KSwgY29ycmVsYXRpb24gKDAuNTI1NTc2KSovLFxuICAgIC0xLDQsIDAsMTAvKm1lYW4gKDAuMTA1MjYzKSwgY29ycmVsYXRpb24gKDAuNTMxNDk4KSovLFxuICAgIDMsLTYsIDQsNS8qbWVhbiAoMC4xMTA3ODUpLCBjb3JyZWxhdGlvbiAoMC41NDA0OTEpKi8sXG4gICAgLTEzLDAsIC0xMCw1LyptZWFuICgwLjExMjc5OCksIGNvcnJlbGF0aW9uICgwLjUzNjU4MikqLyxcbiAgICA1LDgsIDEyLDExLyptZWFuICgwLjExNDE4MSksIGNvcnJlbGF0aW9uICgwLjU1NTc5MykqLyxcbiAgICA4LDksIDksLTYvKm1lYW4gKDAuMTE3NDMxKSwgY29ycmVsYXRpb24gKDAuNTUzNzYzKSovLFxuICAgIDcsLTQsIDgsLTEyLyptZWFuICgwLjExODUyMiksIGNvcnJlbGF0aW9uICgwLjU1MzQ1MikqLyxcbiAgICAtMTAsNCwgLTEwLDkvKm1lYW4gKDAuMTIwOTQpLCBjb3JyZWxhdGlvbiAoMC41NTQ3ODUpKi8sXG4gICAgNywzLCAxMiw0LyptZWFuICgwLjEyMjU4MiksIGNvcnJlbGF0aW9uICgwLjU1NTgyNSkqLyxcbiAgICA5LC03LCAxMCwtMi8qbWVhbiAoMC4xMjQ5NzgpLCBjb3JyZWxhdGlvbiAoMC41NDk4NDYpKi8sXG4gICAgNywwLCAxMiwtMi8qbWVhbiAoMC4xMjcwMDIpLCBjb3JyZWxhdGlvbiAoMC41Mzc0NTIpKi8sXG4gICAgLTEsLTYsIDAsLTExLyptZWFuICgwLjEyNzE0OCksIGNvcnJlbGF0aW9uICgwLjU0NzQwMSkqL1xuXTsiLCJpbXBvcnQgbWF0cml4X3QgZnJvbSAnLi4vbWF0cml4X3QvbWF0cml4X3QuanMnXG5pbXBvcnQgYml0X3BhdHRlcm5fMzEgZnJvbSAnLi9iaXRfcGF0dGVybl8zMS5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgcmVjdGlmeV9wYXRjaCB9IGZyb20gJy4vcmVjdGlmeV9wYXRjaC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3JiIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5iaXRfcGF0dGVybl8zMV8gPSBuZXcgSW50MzJBcnJheShiaXRfcGF0dGVybl8zMSk7XG4gICAgICAgIHRoaXMuSCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5wYXRjaF9pbWcgPSBuZXcgbWF0cml4X3QoMzIsIDMyLCBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgIH1cblxuICAgIGRlc2NyaWJlKHNyYywgY29ybmVycywgY291bnQsIGRlc2NyaXB0b3JzKSB7XG4gICAgICAgIHZhciBERVNDUl9TSVpFID0gMzI7IC8vIGJ5dGVzO1xuICAgICAgICB2YXIgaSA9IDAsIGIgPSAwLCBweCA9IDAuMCwgcHkgPSAwLjAsIGFuZ2xlID0gMC4wO1xuICAgICAgICB2YXIgdDAgPSAwLCB0MSA9IDAsIHZhbCA9IDA7XG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciBwYXRjaF9kID0gdGhpcy5wYXRjaF9pbWcuZGF0YTtcbiAgICAgICAgdmFyIHBhdGNoX29mZiA9IDE2ICogMzIgKyAxNjsgLy8gY2VudGVyIG9mIHBhdGNoXG4gICAgICAgIHZhciBwYXR0ID0gMDtcblxuICAgICAgICBpZiAoIShkZXNjcmlwdG9ycy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90KSkge1xuICAgICAgICAgICAgLy8gcmVsb2NhdGUgdG8gVTggdHlwZVxuICAgICAgICAgICAgZGVzY3JpcHRvcnMudHlwZSA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmNvbHMgPSBERVNDUl9TSVpFO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMucm93cyA9IGNvdW50O1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuY2hhbm5lbCA9IDE7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMucmVzaXplKERFU0NSX1NJWkUsIGNvdW50LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZXNjcl9kID0gZGVzY3JpcHRvcnMuZGF0YTtcbiAgICAgICAgdmFyIGRlc2NyX29mZiA9IDA7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHB4ID0gY29ybmVyc1tpXS54O1xuICAgICAgICAgICAgcHkgPSBjb3JuZXJzW2ldLnk7XG4gICAgICAgICAgICBhbmdsZSA9IGNvcm5lcnNbaV0uYW5nbGU7XG5cbiAgICAgICAgICAgIHJlY3RpZnlfcGF0Y2goc3JjLCB0aGlzLnBhdGNoX2ltZywgYW5nbGUsIHB4LCBweSwgMzIsIHRoaXMuSCk7XG5cbiAgICAgICAgICAgIC8vIGRlc2NyaWJlIHRoZSBwYXRjaFxuICAgICAgICAgICAgcGF0dCA9IDA7XG4gICAgICAgICAgICBmb3IgKGIgPSAwOyBiIDwgREVTQ1JfU0laRTsgKytiKSB7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsID0gKHQwIDwgdDEpIHwgMDtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDE7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCAyO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgMztcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDQ7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA1O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgNjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDc7XG5cbiAgICAgICAgICAgICAgICBkZXNjcl9kW2Rlc2NyX29mZiArIGJdID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVzY3Jfb2ZmICs9IERFU0NSX1NJWkU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi4vaW1ncHJvYy9pbWdwcm9jLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjdGlmeV9wYXRjaChzcmMsIGRzdCwgYW5nbGUsIHB4LCBweSwgcHNpemUsIEgpIHtcbiAgICB2YXIgY29zaW5lID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHZhciBzaW5lICAgPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgdmFyIGltZ3ByYyA9IG5ldyBpbWdwcm9jKCk7XG5cbiAgICBILmRhdGFbMF0gPSBjb3NpbmUsIEguZGF0YVsxXSA9IC1zaW5lLCAgICBILmRhdGFbMl0gPSAoLWNvc2luZSArIHNpbmUgICkgKiBwc2l6ZSowLjUgKyBweCxcbiAgICBILmRhdGFbM10gPSBzaW5lLCAgIEguZGF0YVs0XSA9ICBjb3NpbmUsICBILmRhdGFbNV0gPSAoLXNpbmUgICAtIGNvc2luZSkgKiBwc2l6ZSowLjUgKyBweTtcblxuICAgIGltZ3ByYy53YXJwX2FmZmluZShzcmMsIGRzdCwgSCwgMTI4KTtcbn0iLCJpbXBvcnQgaW1ncHJvYyBmcm9tICcuLi9pbWdwcm9jL2ltZ3Byb2MuanMnO1xuaW1wb3J0IG1hdHJpeF90IGZyb20gJy4uL21hdHJpeF90L21hdHJpeF90LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBweXJhbWlkX3Qge1xuICAgIGNjb25zdHJ1Y3RvcihsZXZlbHMpIHtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBsZXZlbHMgfCAwO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgQXJyYXkobGV2ZWxzKTtcbiAgICAgICAgLy9qc2ZlYXROZXh0LmltZ3Byb2MucHlyZG93biBpcyBub3QgeWV0IGltcGxlbWVudGVkLi4uIFxuICAgICAgICB0aGlzLnB5cmRvd24gPSBuZXcgaW1ncHJvYy5weXJkb3duO1xuICAgIH1cblxuICAgIGFsbG9jYXRlKHN0YXJ0X3csIHN0YXJ0X2gsIGRhdGFfdHlwZSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMubGV2ZWxzO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpXSA9IG5ldyBtYXRyaXhfdChzdGFydF93ID4+IGksIHN0YXJ0X2ggPj4gaSwgZGF0YV90eXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1aWxkKGlucHV0LCBza2lwX2ZpcnN0X2xldmVsKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2tpcF9maXJzdF9sZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBza2lwX2ZpcnN0X2xldmVsID0gdHJ1ZTsgfVxuICAgICAgICAvLyBqdXN0IGNvcHkgZGF0YSB0byBmaXJzdCBsZXZlbFxuICAgICAgICB2YXIgaSA9IDIsIGEgPSBpbnB1dCwgYiA9IHRoaXMuZGF0YVswXTtcbiAgICAgICAgaWYgKCFza2lwX2ZpcnN0X2xldmVsKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGlucHV0LmNvbHMgKiBpbnB1dC5yb3dzO1xuICAgICAgICAgICAgd2hpbGUgKC0taiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgYi5kYXRhW2pdID0gaW5wdXQuZGF0YVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBiID0gdGhpcy5kYXRhWzFdO1xuICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIGZvciAoOyBpIDwgdGhpcy5sZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICBiID0gdGhpcy5kYXRhW2ldO1xuICAgICAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IHRoaXJkX2NoZWNrLCBpc19sb2NhbF9tYXhpbWEsIHBlcmZvcm1fb25lX3BvaW50LCBsZXZfdGFibGVfdCB9IGZyb20gJy4veWFwZV91dGlscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgeWFwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxfdGFibGVzID0gW107XG4gICAgICAgIHRoaXMudGF1ID0gNztcbiAgICB9XG5cbiAgICBpbml0KHdpZHRoLCBoZWlnaHQsIHJhZGl1cywgcHlyYW1pZF9sZXZlbHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBweXJhbWlkX2xldmVscyA9PT0gXCJ1bmRlZmluZWRcIikgeyBweXJhbWlkX2xldmVscyA9IDE7IH1cbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWluKHJhZGl1cywgNyk7XG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWF4KHJhZGl1cywgMyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBweXJhbWlkX2xldmVsczsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsX3RhYmxlc1tpXSA9IG5ldyBsZXZfdGFibGVfdCh3aWR0aCA+PiBpLCBoZWlnaHQgPj4gaSwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdChzcmMsIHBvaW50cywgYm9yZGVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7IGJvcmRlciA9IDQ7IH1cbiAgICAgICAgdmFyIHQgPSB0aGlzLmxldmVsX3RhYmxlc1swXTtcbiAgICAgICAgdmFyIFIgPSB0LnJhZGl1cyB8IDAsIFJtMSA9IChSIC0gMSkgfCAwO1xuICAgICAgICB2YXIgZGlycyA9IHQuZGlycztcbiAgICAgICAgdmFyIGRpcnNfY291bnQgPSB0LmRpcnNfY291bnQgfCAwO1xuICAgICAgICB2YXIgb3Bwb3NpdGUgPSBkaXJzX2NvdW50ID4+IDE7XG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgdyA9IHNyYy5jb2xzIHwgMCwgaCA9IHNyYy5yb3dzIHwgMCwgaHcgPSB3ID4+IDE7XG4gICAgICAgIHZhciBzY29yZXMgPSB0LnNjb3JlcztcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgcm93ID0gMCwgcm93eCA9IDAsIGlwID0gMCwgaW0gPSAwLCBhYnNfc2NvcmUgPSAwLCBzY29yZSA9IDA7XG4gICAgICAgIHZhciB0YXUgPSB0aGlzLnRhdSB8IDA7XG4gICAgICAgIHZhciBudW1iZXJfb2ZfcG9pbnRzID0gMCwgcHQ7XG5cbiAgICAgICAgdmFyIHN4ID0gTWF0aC5tYXgoUiArIDEsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgc3kgPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleCA9IE1hdGgubWluKHcgLSBSIC0gMiwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXkgPSBNYXRoLm1pbihoIC0gUiAtIDIsIGggLSBib3JkZXIpIHwgMDtcblxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcbiAgICAgICAgICAgICAgICBpcCA9IGltZ1tyb3d4XSArIHRhdSwgaW0gPSBpbWdbcm93eF0gLSB0YXU7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW0gPCBpbWdbcm93eCArIFJdICYmIGltZ1tyb3d4ICsgUl0gPCBpcCAmJiBpbSA8IGltZ1tyb3d4IC0gUl0gJiYgaW1nW3Jvd3ggLSBSXSA8IGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3Jlc1tyb3d4XSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVyZm9ybV9vbmVfcG9pbnQoaW1nLCByb3d4LCBzY29yZXMsIGltLCBpcCwgZGlycywgb3Bwb3NpdGUsIGRpcnNfY291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxvY2FsIG1heGltYVxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcbiAgICAgICAgICAgICAgICBzY29yZSA9IHNjb3Jlc1tyb3d4XTtcbiAgICAgICAgICAgICAgICBhYnNfc2NvcmUgPSBNYXRoLmFicyhzY29yZSk7XG4gICAgICAgICAgICAgICAgaWYgKGFic19zY29yZSA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBwaXhlbCBpcyAwLCB0aGUgbmV4dCBvbmUgd2lsbCBub3QgYmUgZ29vZCBlbm91Z2guIFNraXAgaXQuXG4gICAgICAgICAgICAgICAgICAgICsreCwgKytyb3d4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlyZF9jaGVjayhzY29yZXMsIHJvd3gsIHcpID49IDMgJiYgaXNfbG9jYWxfbWF4aW1hKHNjb3Jlcywgcm93eCwgc2NvcmUsIGh3LCBSKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwb2ludHNbbnVtYmVyX29mX3BvaW50c107XG4gICAgICAgICAgICAgICAgICAgICAgICBwdC54ID0geCwgcHQueSA9IHksIHB0LnNjb3JlID0gYWJzX3Njb3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKytudW1iZXJfb2ZfcG9pbnRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IFJtMSwgcm93eCArPSBSbTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVtYmVyX29mX3BvaW50cztcbiAgICB9XG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHN0ZXAsIGRpcnMsIFIpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHgsIHk7XG5cbiAgICB4ID0gUjtcbiAgICBmb3IgKHkgPSAwOyB5IDwgeDsgeSsrLCBpKyspIHtcbiAgICAgICAgeCA9IChNYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeC0tOyB4IDwgeSAmJiB4ID49IDA7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgLXggPCB5OyB4LS0sIGkrKykge1xuICAgICAgICB5ID0gKE1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh5LS07IHkgPj0gMDsgeS0tLCBpKyspIHtcbiAgICAgICAgeCA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgeSA+IHg7IHktLSwgaSsrKSB7XG4gICAgICAgIHggPSAoLU1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh4Kys7IHggPD0gMDsgeCsrLCBpKyspIHtcbiAgICAgICAgeSA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgeCA8IC15OyB4KyssIGkrKykge1xuICAgICAgICB5ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeSsrOyB5IDwgMDsgeSsrLCBpKyspIHtcbiAgICAgICAgeCA9IChNYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuXG4gICAgZGlyc1tpXSA9IGRpcnNbMF07XG4gICAgZGlyc1tpICsgMV0gPSBkaXJzWzFdO1xuICAgIHJldHVybiBpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRfY2hlY2soU2IsIG9mZiwgc3RlcCkge1xuICAgIHZhciBuID0gMDtcbiAgICBpZiAoU2Jbb2ZmICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXBdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcCArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcCAtIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcF0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwIC0gMV0gIT0gMCkgbisrO1xuXG4gICAgcmV0dXJuIG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc19sb2NhbF9tYXhpbWEocCwgb2ZmLCB2LCBzdGVwLCBuZWlnaGJvcmhvb2QpIHtcbiAgICB2YXIgeCwgeTtcblxuICAgIGlmICh2ID4gMCkge1xuICAgICAgICBvZmYgLT0gc3RlcCAqIG5laWdoYm9yaG9vZDtcbiAgICAgICAgZm9yICh5ID0gLW5laWdoYm9yaG9vZDsgeSA8PSBuZWlnaGJvcmhvb2Q7ICsreSkge1xuICAgICAgICAgICAgZm9yICh4ID0gLW5laWdoYm9yaG9vZDsgeCA8PSBuZWlnaGJvcmhvb2Q7ICsreCkge1xuICAgICAgICAgICAgICAgIGlmIChwW29mZiArIHhdID4gdikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2ZmICs9IHN0ZXA7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBvZmYgLT0gc3RlcCAqIG5laWdoYm9yaG9vZDtcbiAgICAgICAgZm9yICh5ID0gLW5laWdoYm9yaG9vZDsgeSA8PSBuZWlnaGJvcmhvb2Q7ICsreSkge1xuICAgICAgICAgICAgZm9yICh4ID0gLW5laWdoYm9yaG9vZDsgeCA8PSBuZWlnaGJvcmhvb2Q7ICsreCkge1xuICAgICAgICAgICAgICAgIGlmIChwW29mZiArIHhdIDwgdikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2ZmICs9IHN0ZXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJmb3JtX29uZV9wb2ludChJLCB4LCBTY29yZXMsIEltLCBJcCwgZGlycywgb3Bwb3NpdGUsIGRpcnNfbmIpIHtcbiAgICB2YXIgc2NvcmUgPSAwO1xuICAgIHZhciBhID0gMCwgYiA9IChvcHBvc2l0ZSAtIDEpIHwgMDtcbiAgICB2YXIgQSA9IDAsIEIwID0gMCwgQjEgPSAwLCBCMiA9IDA7XG4gICAgdmFyIHN0YXRlID0gMDtcblxuICAgIC8vIFdFIEtOT1cgVEhBVCBOT1QoQSB+IEkwICYgQjEgfiBJMCk6XG4gICAgQSA9IElbeCArIGRpcnNbYV1dO1xuICAgIGlmICgoQSA8PSBJcCkpIHtcbiAgICAgICAgaWYgKChBID49IEltKSkgeyAvLyBBIH4gSTBcbiAgICAgICAgICAgIEIwID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIwIDw9IElwKSkge1xuICAgICAgICAgICAgICAgIGlmICgoQjAgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlLyogaWYgKChCMSA8IEltKSkqLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9lbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjEgfiBJMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgeyAvLyBCMCA8IEkwXG4gICAgICAgICAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSA2O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjEgfiBJMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAvLyBBID4gSTBcbiAgICAgICAgICAgIEIwID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIwID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBzdGF0ZSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSAvLyBBIDwgSTBcbiAgICB7XG4gICAgICAgIEIwID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjAgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBzdGF0ZSA9IDA7XG4gICAgfVxuXG4gICAgZm9yIChhID0gMTsgYSA8PSBvcHBvc2l0ZTsgYSsrKSB7XG4gICAgICAgIEEgPSBJW3ggKyBkaXJzW2FdXTtcblxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDg7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIxIDw9IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyIDw9IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA5OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMSA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA0OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA1OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAxOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDk7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAxOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDg7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvL1wiUEIgZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIHN3aXRjaChzdGF0ZSlcbiAgICB9IC8vIGZvcihhLi4uKVxuXG4gICAgU2NvcmVzW3hdID0gKHNjb3JlICsgZGlyc19uYiAqIElbeF0pO1xufVxuXG5leHBvcnQgY2xhc3MgbGV2X3RhYmxlX3Qge1xuICAgIGNvbnN0cnVjdG9yKHcsIGgsIHIpIHtcbiAgICAgICAgdGhpcy5kaXJzID0gbmV3IEludDMyQXJyYXkoMTAyNCk7XG4gICAgICAgIHRoaXMuZGlyc19jb3VudCA9IHByZWNvbXB1dGVfZGlyZWN0aW9ucyh3LCB0aGlzLmRpcnMsIHIpIHwgMDtcbiAgICAgICAgdGhpcy5zY29yZXMgPSBuZXcgSW50MzJBcnJheSh3ICogaCk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gciB8IDA7XG4gICAgfVxufSIsImltcG9ydCB7IGNvbXB1dGVfbGFwbGFjaWFuLCBoZXNzaWFuX21pbl9laWdlbl92YWx1ZSB9IGZyb20gJy4veWFwZTA2X3V0aWxzLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgeWFwZTA2IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICAgICAgdGhpcy5sYXBsYWNpYW5fdGhyZXNob2xkID0gMzA7XG4gICAgICAgIHRoaXMubWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZCA9IDI1O1xuICAgIH1cbiAgICBkZXRlY3Qoc3JjLCBwb2ludHMsIGJvcmRlcikge1xuICAgICAgICBpZiAodHlwZW9mIGJvcmRlciA9PT0gXCJ1bmRlZmluZWRcIikgeyBib3JkZXIgPSA1OyB9XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDA7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgc3JkX2QgPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIER4eCA9IDUsIER5eSA9ICg1ICogdykgfCAwO1xuICAgICAgICB2YXIgRHh5ID0gKDMgKyAzICogdykgfCAwLCBEeXggPSAoMyAtIDMgKiB3KSB8IDA7XG4gICAgICAgIHZhciBsYXBfYnVmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICogaCkgPDwgMik7XG4gICAgICAgIHZhciBsYXBsYWNpYW4gPSBsYXBfYnVmLmkzMjtcbiAgICAgICAgdmFyIGx2ID0gMCwgcm93ID0gMCwgcm93eCA9IDAsIG1pbl9laWdlbl92YWx1ZSA9IDAsIHB0O1xuICAgICAgICB2YXIgbnVtYmVyX29mX3BvaW50cyA9IDA7XG4gICAgICAgIHZhciBsYXBfdGhyZXNoID0gdGhpcy5sYXBsYWNpYW5fdGhyZXNob2xkO1xuICAgICAgICB2YXIgZWlnZW5fdGhyZXNoID0gdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkO1xuXG4gICAgICAgIHZhciBzeCA9IE1hdGgubWF4KDUsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgc3kgPSBNYXRoLm1heCgzLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIDUsIHcgLSBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV5ID0gTWF0aC5taW4oaCAtIDMsIGggLSBib3JkZXIpIHwgMDtcblxuICAgICAgICB4ID0gdyAqIGg7XG4gICAgICAgIHdoaWxlICgtLXggPj0gMCkgeyBsYXBsYWNpYW5beF0gPSAwOyB9XG4gICAgICAgIGNvbXB1dGVfbGFwbGFjaWFuKHNyZF9kLCBsYXBsYWNpYW4sIHcsIGgsIER4eCwgRHl5LCBzeCwgc3ksIGV4LCBleSk7XG5cbiAgICAgICAgcm93ID0gKHN5ICogdyArIHN4KSB8IDA7XG4gICAgICAgIGZvciAoeSA9IHN5OyB5IDwgZXk7ICsreSwgcm93ICs9IHcpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IHN4LCByb3d4ID0gcm93OyB4IDwgZXg7ICsreCwgKytyb3d4KSB7XG5cbiAgICAgICAgICAgICAgICBsdiA9IGxhcGxhY2lhbltyb3d4XTtcbiAgICAgICAgICAgICAgICBpZiAoKGx2IDwgLWxhcF90aHJlc2ggJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIDFdICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gd10gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHddICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3IC0gMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHcgLSAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gdyArIDFdICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIChsdiA+IGxhcF90aHJlc2ggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSB3XSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSB3IC0gMV0gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIHcgLSAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgKyAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgdyArIDFdKVxuICAgICAgICAgICAgICAgICkge1xuXG4gICAgICAgICAgICAgICAgICAgIG1pbl9laWdlbl92YWx1ZSA9IGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlKHNyZF9kLCByb3d4LCBsdiwgRHh4LCBEeXksIER4eSwgRHl4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbl9laWdlbl92YWx1ZSA+IGVpZ2VuX3RocmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwb2ludHNbbnVtYmVyX29mX3BvaW50c107XG4gICAgICAgICAgICAgICAgICAgICAgICBwdC54ID0geCwgcHQueSA9IHksIHB0LnNjb3JlID0gbWluX2VpZ2VuX3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKytudW1iZXJfb2ZfcG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7IC8vIHNraXAgbmV4dCBwaXhlbCBzaW5jZSB0aGlzIGlzIG1heGltYSBpbiAzeDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihsYXBfYnVmKTtcblxuICAgICAgICByZXR1cm4gbnVtYmVyX29mX3BvaW50cztcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVfbGFwbGFjaWFuKHNyYywgZHN0LCB3LCBoLCBEeHgsIER5eSwgc3gsc3ksIGV4LGV5KSB7XG4gICAgdmFyIHk9MCx4PTAseXJvdz0oc3kqdytzeCl8MCxyb3c9eXJvdztcblxuICAgIGZvcih5ID0gc3k7IHkgPCBleTsgKyt5LCB5cm93Kz13LCByb3cgPSB5cm93KSB7XG4gICAgICAgIGZvcih4ID0gc3g7IHggPCBleDsgKyt4LCArK3Jvdykge1xuICAgICAgICAgICAgZHN0W3Jvd10gPSAtNCAqIHNyY1tyb3ddICsgc3JjW3JvdytEeHhdICsgc3JjW3Jvdy1EeHhdICsgc3JjW3JvdytEeXldICsgc3JjW3Jvdy1EeXldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JjLCBvZmYsIHRyLCBEeHgsIER5eSwgRHh5LCBEeXgpIHtcbiAgICB2YXIgSXh4ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeHhdICsgc3JjW29mZiAtIER4eF07XG4gICAgdmFyIEl5eSA9IC0yICogc3JjW29mZl0gKyBzcmNbb2ZmICsgRHl5XSArIHNyY1tvZmYgLSBEeXldO1xuICAgIHZhciBJeHkgPSBzcmNbb2ZmICsgRHh5XSArIHNyY1tvZmYgLSBEeHldIC0gc3JjW29mZiArIER5eF0gLSBzcmNbb2ZmIC0gRHl4XTtcbiAgICB2YXIgc3FydF9kZWx0YSA9ICggTWF0aC5zcXJ0KCgoSXh4IC0gSXl5KSAqIChJeHggLSBJeXkpICsgNCAqIEl4eSAqIEl4eSkgKSApfDA7XG5cbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5hYnModHIgLSBzcXJ0X2RlbHRhKSwgTWF0aC5hYnMoLSh0ciArIHNxcnRfZGVsdGEpKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4vanNmZWF0TmV4dC5qcydcbmV4cG9ydCBkZWZhdWx0IHtcbiAgIGpzZmVhdE5leHRcbn0iXSwibmFtZXMiOlsiX3Bvb2xfbm9kZV90IiwiY2FjaGUiLCJfcG9vbF9oZWFkIiwiX3Bvb2xfdGFpbCIsIl9wb29sX3NpemUiLCJjYXBhY2l0eSIsImRhdGFfc2l6ZSIsImkiLCJub2RlIiwibmV4dCIsInNpemVfaW5fYnl0ZXMiLCJzaXplIiwicmVzaXplIiwiSlNGRUFUX0NPTlNUQU5UUyIsIkVQU0lMT04iLCJGTFRfTUlOIiwiVThfdCIsIlMzMl90IiwiRjMyX3QiLCJTNjRfdCIsIkY2NF90IiwiQzFfdCIsIkMyX3QiLCJDM190IiwiQzRfdCIsIkNPTE9SX1JHQkEyR1JBWSIsIkNPTE9SX1JHQjJHUkFZIiwiQ09MT1JfQkdSQTJHUkFZIiwiQ09MT1JfQkdSMkdSQVkiLCJCT1hfQkxVUl9OT1NDQUxFIiwiU1ZEX1VfVCIsIlNWRF9WX1QiLCJkYXRhX3R5cGUiLCJfZGF0YV90eXBlX3NpemUiLCJJbnQzMkFycmF5IiwidHlwZSIsIl9jb252b2xfdTgiLCJidWYiLCJzcmNfZCIsImRzdF9kIiwidyIsImgiLCJmaWx0ZXIiLCJrZXJuZWxfc2l6ZSIsImhhbGZfa2VybmVsIiwiaiIsImsiLCJzcCIsImRwIiwic3VtIiwic3VtMSIsInN1bTIiLCJzdW0zIiwiZjAiLCJmayIsIncyIiwidzMiLCJ3NCIsIk1hdGgiLCJtaW4iLCJfY29udm9sIiwiX3Jlc2FtcGxlIiwiX3Jlc2FtcGxlX3U4IiwibWF0aCIsImltZ3Byb2MiLCJhbGxvY2F0ZSIsInNyYyIsImRzdCIsImNvZGUiLCJ4IiwieSIsImlyIiwianIiLCJjb2VmZl9yIiwiY29lZmZfZyIsImNvZWZmX2IiLCJjbiIsImNuMiIsImNuMyIsImRzdF91OCIsImRhdGEiLCJudyIsIm5oIiwicm93cyIsImNvbHMiLCJjaGFubmVsIiwicmFkaXVzIiwib3B0aW9ucyIsImgyIiwiZW5kIiwid2luZG93U2l6ZSIsInJhZGl1c1BsdXNPbmUiLCJyYWRpdXNQbHVzMiIsInNjYWxlIiwidG1wX2J1ZmYiLCJnZXRfYnVmZmVyIiwiZHN0SW5kZXgiLCJzcmNJbmRleCIsIm5leHRQaXhlbEluZGV4IiwicHJldmlvdXNQaXhlbEluZGV4IiwiZGF0YV9pMzIiLCJpMzIiLCJkYXRhX3U4IiwiaG9sZCIsInB1dF9idWZmZXIiLCJzaWdtYSIsImpzZmVhdG1hdGgiLCJtYXgiLCJpc191OCIsImJ1Zl9zeiIsImJ1Zl9ub2RlIiwiZmlsdF9ub2RlIiwiZjMyIiwiZ2V0X2dhdXNzaWFuX2tlcm5lbCIsImltZyIsInJob19yZXMiLCJ0aGV0YV9yZXMiLCJ0aHJlc2hvbGQiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3RlcCIsIm1pbl90aGV0YSIsIm1heF90aGV0YSIsIlBJIiwibnVtYW5nbGUiLCJyb3VuZCIsIm51bXJobyIsImlyaG8iLCJhY2N1bSIsInRhYlNpbiIsIkZsb2F0MzJBcnJheSIsInRhYkNvcyIsIm4iLCJhbmciLCJzaW4iLCJjb3MiLCJyIiwiX3NvcnRfYnVmIiwiQXJyYXkiLCJiYXNlIiwicHVzaCIsInNvcnQiLCJsMSIsImwyIiwibGluZXNNYXgiLCJsZW5ndGgiLCJsaW5lcyIsImlkeCIsImZsb29yIiwibHJobyIsImxhbmdsZSIsInN4Iiwic3kiLCJfdzIiLCJfaDIiLCJzcHRyIiwic2xpbmUiLCJkcHRyIiwiZGxpbmUiLCJ0cmFuc2Zvcm0iLCJmaWxsX3ZhbHVlIiwic3JjX3dpZHRoIiwic3JjX2hlaWdodCIsImRzdF93aWR0aCIsImRzdF9oZWlnaHQiLCJvZmYiLCJpeHMiLCJpeXMiLCJ4cyIsInlzIiwiYSIsImIiLCJwMCIsInAxIiwidGQiLCJtMDAiLCJtMDEiLCJtMDIiLCJtMTAiLCJtMTEiLCJtMTIiLCJ4b2ZzX2NvdW50IiwiY2giLCJzY2FsZV94Iiwic2NhbGVfeSIsImludl9zY2FsZV8yNTYiLCJkeCIsImR5Iiwic3gxIiwic3gyIiwiZnN4MSIsImZzeDIiLCJkeG4iLCJhbHBoYSIsImJldGEiLCJiZXRhMSIsInN1bV9ub2RlIiwieG9mc19ub2RlIiwieG9mcyIsImFicyIsImRhdGFfdCIsImtleXBvaW50X3QiLCJtYXRtYXRoIiwibWF0cml4X3QiLCJweXJhbWlkX3QiLCJsaW5hbGciLCJvcmIiLCJ5YXBlIiwieWFwZTA2IiwibW90aW9uX2VzdGltYXRvciIsImhvbW9ncmFwaHkyZCIsInJhbnNhY19wYXJhbXNfdCIsInBrZyIsImpzZmVhdE5leHQiLCJkdCIsIl9nZXRfZGF0YV90eXBlIiwiX2dldF9jaGFubmVsIiwiX2dldF9kYXRhX3R5cGVfc2l6ZSIsInZlcnNpb24iLCJzY29yZSIsImxldmVsIiwiYW5nbGUiLCJzd2FwIiwiQSIsImkwIiwiaTEiLCJ0IiwiaHlwb3QiLCJzcXJ0IiwiYXN0ZXAiLCJXIiwiViIsInZzdGVwIiwiZXBzIiwibSIsImwiLCJfaW4iLCJfaW4yIiwiaXRlcnMiLCJtYXhfaXRlciIsIm12IiwidmFsIiwicCIsInMiLCJjIiwiYTAiLCJiMCIsImluZFJfYnVmZiIsImluZENfYnVmZiIsImluZFIiLCJpbmRDIiwiQXQiLCJfVyIsIlZ0IiwibjEiLCJtaW52YWwiLCJpdGVyIiwiQWkiLCJBaiIsIlZpIiwiVmoiLCJjaGFuZ2VkIiwidDAiLCJ0MSIsInNkIiwiZ2FtbWEiLCJkZWx0YSIsInNlZWQiLCJ2YWwwIiwiYXN1bSIsIldfYnVmZiIsImY2NCIsIkIiLCJhZCIsImJkIiwiZCIsImNvbCIsInJvdyIsImNvbDIiLCJjcyIsInJzIiwiaW52X2RpYWciLCJVIiwiYXQiLCJfbSIsIl9uIiwiYV9idWZmIiwid19idWZmIiwidl9idWZmIiwiYV9tdCIsIndfbXQiLCJ2X210IiwidHJhbnNwb3NlIiwiSmFjb2JpU1ZESW1wbCIsIlgiLCJwdSIsInB2IiwibnJvd3MiLCJuY29scyIsInhzdW0iLCJ0b2wiLCJ1X2J1ZmYiLCJ1X210IiwidWQiLCJ3ZCIsInZkIiwic3ZkX2RlY29tcG9zZSIsInBhIiwiaWQiLCJ2ZWN0cyIsInZhbHMiLCJKYWNvYmlJbXBsIiwicXNvcnRfc3RhY2siLCJrZXJuZWwiLCJzaWdtYV94Iiwic2NhbGVfMngiLCJrZXJuX25vZGUiLCJfa2VybmVsIiwiZXhwIiwibW9kZWwiLCJzcmNfeDAiLCJzcmNfeTAiLCJkc3RfeDAiLCJkc3RfeTAiLCJzcmNfeDEiLCJzcmNfeTEiLCJkc3RfeDEiLCJkc3RfeTEiLCJzcmNfeDIiLCJzcmNfeTIiLCJkc3RfeDIiLCJkc3RfeTIiLCJzcmNfeDMiLCJzcmNfeTMiLCJkc3RfeDMiLCJkc3RfeTMiLCJ0MiIsInQ0IiwidDUiLCJ0NiIsInQ3IiwidDgiLCJ0OSIsInQxMCIsInQxMSIsInQxNCIsInQxNSIsInQxNiIsInQxOCIsInQyMCIsInQyMSIsInQyNCIsInQyNSIsInQyNiIsInQyNyIsInQyOCIsInQzMCIsInQzMiIsInQzNSIsInQ0MSIsInQ0MiIsInQ0MyIsInQ0NiIsInQ0OCIsInQ1MSIsInQ1NSIsIkhyMCIsIkhyMSIsIkhyMiIsIkhyMyIsIkhyNCIsIkhyNSIsIkhyNiIsIkhyNyIsIkhsMCIsIkhsMSIsIkhsMiIsIkhsMyIsIkhsNCIsIkhsNSIsIkhsNiIsIkhsNyIsInQxMiIsInQyMyIsInQzMSIsInQ0NCIsInQ0NyIsInQ0OSIsInQ1MCIsIm1hdCIsImFycmF5IiwibG93IiwiaGlnaCIsImNtcCIsImlzb3J0X3RocmVzaCIsInRhIiwidGIiLCJ0YyIsImxlZnQiLCJyaWdodCIsInB0ciIsInB0cjIiLCJsZWZ0MCIsImxlZnQxIiwicmlnaHQwIiwicmlnaHQxIiwicGl2b3QiLCJzd2FwX2NudCIsInN0YWNrIiwibWlkZGxlIiwibGwiLCJoaCIsIm1lZGlhbiIsIk0iLCJ2YWx1ZSIsImNvbHNfMSIsImxlbiIsIkF0aSIsInBBdCIsImF0ZCIsIkMiLCJBcCIsInBBIiwicEIiLCJwX0IiLCJDcCIsIm1jb2xzIiwiY2QiLCJtcm93cyIsInBDZGlhZyIsInBfQSIsInBDIiwicEN0IiwicF9DIiwicF9DQyIsImZyb20iLCJ0byIsImludkEiLCJ0MTMiLCJ0MTciLCJDZCIsIkFkIiwiQmQiLCJtMV8wIiwibTFfMSIsIm0xXzIiLCJtMV8zIiwibTFfNCIsIm0xXzUiLCJtMV82IiwibTFfNyIsIm0xXzgiLCJtMl8wIiwibTJfMSIsIm0yXzIiLCJtMl8zIiwibTJfNCIsIm0yXzUiLCJtMl82IiwibTJfNyIsIm0yXzgiLCJtZCIsIk0xMSIsIk0xMiIsIk0xMyIsIk0yMSIsIk0yMiIsIk0yMyIsIk0zMSIsIk0zMiIsIk0zMyIsIl9kYXRhX3R5cGUiLCJfZGF0YV9idWZmZXIiLCJidWZmZXIiLCJ1OCIsIm90aGVyIiwib2QiLCJuZXdfc2l6ZSIsIm5lZWRfY250IiwibWF4X2NudCIsImZyb21fc3ViIiwidG9fc3ViIiwibWF4X3RyeSIsImluZGljZXMiLCJzc2l0ZXIiLCJpZHhfaSIsIm9rIiwicmFuZG9tIiwiY2hlY2tfc3Vic2V0IiwiY291bnQiLCJ0aHJlc2giLCJlcnIiLCJtYXNrIiwibnVtaW5saWVycyIsImYiLCJlcnJvciIsInBhcmFtcyIsIm1heF9pdGVycyIsIm1vZGVsX3BvaW50cyIsIm5pdGVycyIsInJlc3VsdCIsInN1YnNldDAiLCJzdWJzZXQxIiwiZm91bmQiLCJtYyIsIm1yIiwibV9idWZmIiwibXNfYnVmZiIsImVycl9idWZmIiwiY3Vycl9tYXNrIiwiVThDMV90IiwiaW5saWVyc19tYXgiLCJubW9kZWxzIiwicnVuIiwiY29weV90byIsImdldF9zdWJzZXQiLCJmaW5kX2lubGllcnMiLCJ1cGRhdGVfaXRlcnMiLCJfbWF0aCIsIm1pbl9tZWRpYW4iLCJtb3Rpb25fbW9kZWwiLCJUMCIsIlQxIiwiQXRBIiwiQXRCIiwiY3gwIiwiY3kwIiwiZDAiLCJzMCIsImN4MSIsImN5MSIsImQxIiwiczEiLCJTUVJUMiIsInBvaW50cyIsImR4MSIsImR5MSIsImR4MiIsImR5MiIsImFmZmluZTJkIiwidDBkIiwidDFkIiwicHQwIiwicHQxIiwicHgiLCJweSIsIl9tYXRtYXRoIiwiX2xpbmFsZyIsImlzb19ub3JtYWxpemVfcG9pbnRzIiwiYl9idWZmIiwiYl9tdCIsIm11bHRpcGx5X0F0QSIsIm11bHRpcGx5X0F0QiIsImx1X3NvbHZlIiwiaW52ZXJ0XzN4MyIsIm11bHRpcGx5XzN4MyIsIm1MdEwiLCJFdmVjIiwiTHRMIiwiZXZkIiwiWSIsInNteCIsInNteSIsImNteCIsImNteSIsInNNeCIsInNNeSIsImNNeCIsImNNeSIsImVpZ2VuVlYiLCJ3dyIsIm5lZ2F0aXZlIiwiZnAwIiwiZnAxIiwiZnAyIiwiZnAzIiwidHAwIiwidHAxIiwidHAyIiwidHAzIiwiQTExIiwiQTEyIiwiQTEzIiwiQTIxIiwiQTIyIiwiQTIzIiwiQTMxIiwiQTMyIiwiQTMzIiwiQjExIiwiQjEyIiwiQjEzIiwiQjIxIiwiQjIyIiwiQjIzIiwiQjMxIiwiQjMyIiwiQjMzIiwiZGV0QSIsImRldGVybWluYW50XzN4MyIsImRldEIiLCJwcm9iIiwiX2VwcyIsIm51bSIsImxvZyIsImRlbm9tIiwicG93IiwiQXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwiRmxvYXQ2NEFycmF5IiwiYml0X3BhdHRlcm5fMzEiLCJyZWN0aWZ5X3BhdGNoIiwiYml0X3BhdHRlcm5fMzFfIiwiSCIsInBhdGNoX2ltZyIsImNvcm5lcnMiLCJkZXNjcmlwdG9ycyIsIkRFU0NSX1NJWkUiLCJwYXRjaF9kIiwicGF0Y2hfb2ZmIiwicGF0dCIsImRlc2NyX2QiLCJkZXNjcl9vZmYiLCJwc2l6ZSIsImNvc2luZSIsInNpbmUiLCJpbWdwcmMiLCJ3YXJwX2FmZmluZSIsImxldmVscyIsInB5cmRvd24iLCJzdGFydF93Iiwic3RhcnRfaCIsImlucHV0Iiwic2tpcF9maXJzdF9sZXZlbCIsInRoaXJkX2NoZWNrIiwiaXNfbG9jYWxfbWF4aW1hIiwicGVyZm9ybV9vbmVfcG9pbnQiLCJsZXZfdGFibGVfdCIsImxldmVsX3RhYmxlcyIsInRhdSIsInB5cmFtaWRfbGV2ZWxzIiwiYm9yZGVyIiwiUiIsIlJtMSIsImRpcnMiLCJkaXJzX2NvdW50Iiwib3Bwb3NpdGUiLCJodyIsInNjb3JlcyIsInJvd3giLCJpcCIsImltIiwiYWJzX3Njb3JlIiwibnVtYmVyX29mX3BvaW50cyIsInB0IiwiZXgiLCJleSIsInByZWNvbXB1dGVfZGlyZWN0aW9ucyIsIlNiIiwidiIsIm5laWdoYm9yaG9vZCIsIkkiLCJTY29yZXMiLCJJbSIsIklwIiwiZGlyc19uYiIsIkIwIiwiQjEiLCJCMiIsInN0YXRlIiwiY29tcHV0ZV9sYXBsYWNpYW4iLCJoZXNzaWFuX21pbl9laWdlbl92YWx1ZSIsImxhcGxhY2lhbl90aHJlc2hvbGQiLCJtaW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkIiwic3JkX2QiLCJEeHgiLCJEeXkiLCJEeHkiLCJEeXgiLCJsYXBfYnVmIiwibGFwbGFjaWFuIiwibHYiLCJtaW5fZWlnZW5fdmFsdWUiLCJsYXBfdGhyZXNoIiwiZWlnZW5fdGhyZXNoIiwieXJvdyIsInRyIiwiSXh4IiwiSXl5IiwiSXh5Iiwic3FydF9kZWx0YSJdLCJzb3VyY2VSb290IjoiIn0=