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
      var a_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(m, m, dt, a_buff.data);
      var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(1, n, dt, w_buff.data);
      var v_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(n, n, dt, v_buff.data);

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
      var u_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(nrows, nrows, dt, u_buff.data);
      var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(1, ncols, dt, w_buff.data);
      var v_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(ncols, ncols, dt, v_buff.data);
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
      var u_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(nrows, nrows, dt, u_buff.data);
      var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(1, ncols, dt, w_buff.data);
      var v_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(ncols, ncols, dt, v_buff.data);
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
      var a_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(n, n, dt, a_buff.data);
      var w_mt = new _jsfeatNext_js__WEBPACK_IMPORTED_MODULE_2__["default"].matrix_t(1, n, dt, w_buff.data);

      while (--i >= 0) {
        a_mt.data[i] = A.data[i];
      }

      JacobiImpl(a_mt.data, n, w_mt.data, vects ? vects.data : null, n, n);

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

        numinliers = find_inliers(kernel, M, from, to, count, params.thresh, err, curr_mask.data);

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
        numinliers = find_inliers(kernel, model, from, to, count, sigma, err, curr_mask.data);
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
        this.data[i] = new jsfeatNext.matrix_t(start_w >> i, start_h >> i, data_type);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBLFNBQVMscUVBQXFCO0FBQzlCOzs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlFQUFlO0VBQ1o3ZCxVQUFVLEVBQVZBLHNEQUFVQTtBQURFLENBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvY2FjaGUvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvZGF0YV90eXBlL2RhdGFfdHlwZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2ltZ3Byb2MvY29udm9sLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9pbWdwcm9jLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW1ncHJvYy9yZXNhbXBsZS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2pzZmVhdE5leHQuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9rZXlwb2ludF90L2tleXBvaW50X3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9saW5hbGcvbGluYWxnLWJhc2UuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9saW5hbGcvbGluYWxnLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0aC9tYXRoLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0bWF0aC9tYXRtYXRoLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0cml4X3QvbWF0cml4X3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9tb2RlbC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL21vdGlvbl9lc3RpbWF0b3IvcmFuc2FjX3BhcmFtc190LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9ub2RlX3V0aWxzL2RhdGFfdC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29yYi9iaXRfcGF0dGVybl8zMS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL29yYi9vcmIuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9vcmIvcmVjdGlmeV9wYXRjaC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3B5cmFtaWRfdC9weXJhbWlkX3QuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGVfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlMDYveWFwZTA2LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMveWFwZTA2L3lhcGUwNl91dGlscy5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi4vbm9kZV91dGlscy9fcG9vbF9ub2RlX3QuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhY2hlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX3RhaWw7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSA9IDA7XG4gICAgfVxuICAgIGFsbG9jYXRlKGNhcGFjaXR5LCBkYXRhX3NpemUpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkID0gdGhpcy5fcG9vbF90YWlsID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcGFjaXR5OyArK2kpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuXG4gICAgICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRfYnVmZmVyKHNpemVfaW5fYnl0ZXMpIHtcbiAgICAgICAgLy8gYXNzdW1lIHdlIGhhdmUgZW5vdWdoIGZyZWUgbm9kZXNcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfaGVhZC5uZXh0O1xuICAgICAgICB0aGlzLl9wb29sX3NpemUtLTtcblxuICAgICAgICBpZiAoc2l6ZV9pbl9ieXRlcyA+IG5vZGUuc2l6ZSkge1xuICAgICAgICAgICAgbm9kZS5yZXNpemUoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcHV0X2J1ZmZlcihub2RlKSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBKU0ZFQVRfQ09OU1RBTlRTID0ge1xuICAgIC8vIENPTlNUQU5UU1xuICAgIEVQU0lMT046IDAuMDAwMDAwMTE5MjA5Mjg5NixcbiAgICBGTFRfTUlOOiAxRS0zNyxcbiAgICBVOF90OiAweDAxMDAsXG4gICAgUzMyX3Q6IDB4MDIwMCxcbiAgICBGMzJfdDogMHgwNDAwLFxuICAgIFM2NF90OiAweDA4MDAsXG4gICAgRjY0X3Q6IDB4MTAwMCxcbiAgICBDMV90OiAweDAxLFxuICAgIEMyX3Q6IDB4MDIsXG4gICAgQzNfdDogMHgwMyxcbiAgICBDNF90OiAweDA0LFxuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIENPTE9SX1JHQkEyR1JBWTogMCxcbiAgICBDT0xPUl9SR0IyR1JBWTogMSxcbiAgICBDT0xPUl9CR1JBMkdSQVk6IDIsXG4gICAgQ09MT1JfQkdSMkdSQVk6IDMsXG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBCT1hfQkxVUl9OT1NDQUxFOiAweDAxLFxuXG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBTVkRfVV9UOiAweDAxLFxuICAgIFNWRF9WX1Q6IDB4MDIsXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGF0YV90eXBlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YV90eXBlX3NpemUgPSBuZXcgSW50MzJBcnJheShbLTEsIDEsIDQsIC0xLCA0LCAtMSwgLTEsIC0xLCA4LCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgOF0pOztcbiAgICB9XG5cbiAgICBfZ2V0X2RhdGFfdHlwZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiAodHlwZSAmIDB4RkYwMCk7XG4gICAgfVxuXG4gICAgX2dldF9jaGFubmVsKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRik7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhX3R5cGVfc2l6ZVsodHlwZSAmIDB4RkYwMCkgPj4gOF07XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCkge1xuICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwLCBzcCA9IDAsIGRwID0gMCwgc3VtID0gMCwgc3VtMSA9IDAsIHN1bTIgPSAwLCBzdW0zID0gMCwgZjAgPSBmaWx0ZXJbMF0sIGZrID0gMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IE1hdGgubWluKHN1bSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgMV0gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqKSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0yID0gYnVmW2ogKyAyXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTMgPSBidWZbaiArIDNdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBNYXRoLm1pbihzdW0xID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHcyXSA9IE1hdGgubWluKHN1bTIgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgdzNdID0gTWF0aC5taW4oc3VtMyA+PiA4LCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252b2woYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKSB7XG4gICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDAsIHNwID0gMCwgZHAgPSAwLCBzdW0gPSAwLjAsIHN1bTEgPSAwLjAsIHN1bTIgPSAwLjAsIHN1bTMgPSAwLjAsIGYwID0gZmlsdGVyWzBdLCBmayA9IDAuMDtcbiAgICB2YXIgdzIgPSB3IDw8IDEsIHczID0gdyAqIDMsIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTEgPSBidWZbaiArIDFdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0zID0gYnVmW2ogKyAzXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDFdID0gc3VtMTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gc3VtMjtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDNdID0gc3VtMztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHAgKyBqXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMCxcbiAgICAgICAgICAgICAgICBzdW0xID0gYnVmW2ogKyAxXSAqIGYwLFxuICAgICAgICAgICAgICAgIHN1bTIgPSBidWZbaiArIDJdICogZjAsXG4gICAgICAgICAgICAgICAgc3VtMyA9IGJ1ZltqICsgM10gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgX3Jlc2FtcGxlLCBfcmVzYW1wbGVfdTggfSBmcm9tICcuL3Jlc2FtcGxlLmpzJ1xuaW1wb3J0IHsgX2NvbnZvbCwgX2NvbnZvbF91OCB9IGZyb20gJy4vY29udm9sLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJztcbmltcG9ydCBtYXRoIGZyb20gJy4uL21hdGgvbWF0aC5qcyc7XG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1ncHJvYyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgfVxuICAgIGdyYXlzY2FsZShzcmMsIHcsIGgsIGRzdCwgY29kZSkge1xuICAgICAgICAvLyB0aGlzIGlzIGRlZmF1bHQgaW1hZ2UgZGF0YSByZXByZXNlbnRhdGlvbiBpbiBicm93c2VyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBjb2RlID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7IH1cbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgaSA9IDAsIGogPSAwLCBpciA9IDAsIGpyID0gMDtcbiAgICAgICAgdmFyIGNvZWZmX3IgPSA0ODk5LCBjb2VmZl9nID0gOTYxNywgY29lZmZfYiA9IDE4NjgsIGNuID0gNDtcblxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNvZWZmX3IgPSAxODY4O1xuICAgICAgICAgICAgY29lZmZfYiA9IDQ4OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNuID0gMztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY24yID0gY24gPDwgMSwgY24zID0gKGNuICogMykgfCAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMSk7XG4gICAgICAgIHZhciBkc3RfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5LCBqICs9IHcsIGkgKz0gdyAqIGNuKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwLCBpciA9IGksIGpyID0gajsgeCA8PSB3IC0gNDsgeCArPSA0LCBpciArPSBjbiA8PCAyLCBqciArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDFdID0gKHNyY1tpciArIGNuXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMl0gPSAoc3JjW2lyICsgY24yXSAqIGNvZWZmX3IgKyBzcmNbaXIgKyBjbjIgKyAxXSAqIGNvZWZmX2cgKyBzcmNbaXIgKyBjbjIgKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAzXSA9IChzcmNbaXIgKyBjbjNdICogY29lZmZfciArIHNyY1tpciArIGNuMyArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMyArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsICsranIsIGlyICs9IGNuKSB7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyXSA9IChzcmNbaXJdICogY29lZmZfciArIHNyY1tpciArIDFdICogY29lZmZfZyArIHNyY1tpciArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGRlcml2ZWQgZnJvbSBDQ1YgbGlicmFyeVxuICAgIHJlc2FtcGxlKHNyYywgZHN0LCBudywgbmgpIHtcbiAgICAgICAgdmFyIGggPSBzcmMucm93cywgdyA9IHNyYy5jb2xzO1xuICAgICAgICBpZiAoaCA+IG5oICYmIHcgPiBudykge1xuICAgICAgICAgICAgZHN0LnJlc2l6ZShudywgbmgsIHNyYy5jaGFubmVsKTtcbiAgICAgICAgICAgIC8vIHVzaW5nIHRoZSBmYXN0IGFsdGVybmF0aXZlIChmaXggcG9pbnQgc2NhbGUsIDB4MTAwIHRvIGF2b2lkIG92ZXJmbG93KVxuICAgICAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ICYmIGRzdC50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ICYmIGggKiB3IC8gKG5oICogbncpIDwgMHgxMDApIHtcbiAgICAgICAgICAgICAgICBfcmVzYW1wbGVfdTgoc3JjLCBkc3QsIHRoaXMuY2FjaGUsIG53LCBuaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZShzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBib3hfYmx1cl9ncmF5KHNyYywgZHN0LCByYWRpdXMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7IG9wdGlvbnMgPSAwOyB9XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgaDIgPSBoIDw8IDEsIHcyID0gdyA8PCAxO1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLCB5ID0gMCwgZW5kID0gMDtcbiAgICAgICAgdmFyIHdpbmRvd1NpemUgPSAoKHJhZGl1cyA8PCAxKSArIDEpIHwgMDtcbiAgICAgICAgdmFyIHJhZGl1c1BsdXNPbmUgPSAocmFkaXVzICsgMSkgfCAwLCByYWRpdXNQbHVzMiA9IChyYWRpdXNQbHVzT25lICsgMSkgfCAwO1xuICAgICAgICB2YXIgc2NhbGUgPSBvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFID8gMSA6ICgxLjAgLyAod2luZG93U2l6ZSAqIHdpbmRvd1NpemUpKTtcblxuICAgICAgICB2YXIgdG1wX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcblxuICAgICAgICB2YXIgc3VtID0gMCwgZHN0SW5kZXggPSAwLCBzcmNJbmRleCA9IDAsIG5leHRQaXhlbEluZGV4ID0gMCwgcHJldmlvdXNQaXhlbEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGRhdGFfaTMyID0gdG1wX2J1ZmYuaTMyOyAvLyB0byBwcmV2ZW50IG92ZXJmbG93XG4gICAgICAgIHZhciBkYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIHZhciBob2xkID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICAvLyBmaXJzdCBwYXNzXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gc2NhbGUgXG4gICAgICAgIC8vZGF0YV91OCA9IHNyYy5kYXRhO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaDsgKyt5KSB7XG4gICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV91OFtzcmNJbmRleF07XG5cbiAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSAoc3JjSW5kZXggKyByYWRpdXNQbHVzT25lKSB8IDA7XG4gICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgIGhvbGQgPSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IHggPCB3IC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gaDIpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXggKyBoXSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV91OFtwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCBkc3RJbmRleCArPSBoKSB7XG4gICAgICAgICAgICAgICAgZGF0YV9pMzJbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgc3VtICs9IGhvbGQgLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNyY0luZGV4ICs9IHc7XG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gc2Vjb25kIHBhc3NcbiAgICAgICAgc3JjSW5kZXggPSAwO1xuICAgICAgICAvL2RhdGFfaTMyID0gdG1wOyAvLyB0aGlzIGlzIGEgdHJhbnNwb3NlXG4gICAgICAgIGRhdGFfdTggPSBkc3QuZGF0YTtcblxuICAgICAgICAvLyBkb250IHNjYWxlIHJlc3VsdFxuICAgICAgICBpZiAoc2NhbGUgPT0gMSkge1xuICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHc7ICsreSkge1xuICAgICAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgICAgICBzdW0gPSByYWRpdXNQbHVzT25lICogZGF0YV9pMzJbc3JjSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbaV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggPSBzcmNJbmRleCArIHJhZGl1c1BsdXNPbmU7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ID0gc3JjSW5kZXg7XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgcmFkaXVzOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggKyAxXSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzT25lOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1czI7IHggKz0gMiwgZHN0SW5kZXggKz0gdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleCArIHddID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9sZCA9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoOyArK3gsIGRzdEluZGV4ICs9IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YV91OFtkc3RJbmRleF0gPSBzdW0gKiBzY2FsZTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNyY0luZGV4ICs9IGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodG1wX2J1ZmYpO1xuICAgIH1cblxuICAgIGdhdXNzaWFuX2JsdXIoc3JjLCBkc3QsIGtlcm5lbF9zaXplLCBzaWdtYSkge1xuICAgICAgICB2YXIganNmZWF0bWF0aCA9IG5ldyBtYXRoKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygc2lnbWEgPT09IFwidW5kZWZpbmVkXCIpIHsgc2lnbWEgPSAwLjA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBrZXJuZWxfc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBrZXJuZWxfc2l6ZSA9IDA7IH1cbiAgICAgICAga2VybmVsX3NpemUgPSBrZXJuZWxfc2l6ZSA9PSAwID8gKE1hdGgubWF4KDEsICg0LjAgKiBzaWdtYSArIDEuMCAtIDFlLTgpKSAqIDIgKyAxKSB8IDAgOiBrZXJuZWxfc2l6ZTtcbiAgICAgICAgdmFyIGhhbGZfa2VybmVsID0ga2VybmVsX3NpemUgPj4gMTtcbiAgICAgICAgdmFyIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgZGF0YV90eXBlID0gc3JjLnR5cGUsIGlzX3U4ID0gZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICB2YXIgYnVmLCBmaWx0ZXIsIGJ1Zl9zeiA9IChrZXJuZWxfc2l6ZSArIE1hdGgubWF4KGgsIHcpKSB8IDA7XG5cbiAgICAgICAgdmFyIGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGJ1Zl9zeiA8PCAyKTtcbiAgICAgICAgdmFyIGZpbHRfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihrZXJuZWxfc2l6ZSA8PCAyKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICAgICAgICAgIGZpbHRlciA9IGZpbHRfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBqc2ZlYXRtYXRoLmdldF9nYXVzc2lhbl9rZXJuZWwoa2VybmVsX3NpemUsIHNpZ21hLCBmaWx0ZXIsIGRhdGFfdHlwZSk7XG5cbiAgICAgICAgaWYgKGlzX3U4KSB7XG4gICAgICAgICAgICBfY29udm9sX3U4KGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY29udm9sKGJ1Ziwgc3JjX2QsIGRzdF9kLCB3LCBoLCBmaWx0ZXIsIGtlcm5lbF9zaXplLCBoYWxmX2tlcm5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZmlsdF9ub2RlKTtcbiAgICB9XG4gICAgaG91Z2hfdHJhbnNmb3JtKGltZywgcmhvX3JlcywgdGhldGFfcmVzLCB0aHJlc2hvbGQpIHtcbiAgICAgICAgdmFyIGltYWdlID0gaW1nLmRhdGE7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gaW1nLmNvbHM7XG4gICAgICAgIHZhciBoZWlnaHQgPSBpbWcucm93cztcbiAgICAgICAgdmFyIHN0ZXAgPSB3aWR0aDtcblxuICAgICAgICB2YXIgbWluX3RoZXRhID0gMC4wO1xuICAgICAgICB2YXIgbWF4X3RoZXRhID0gTWF0aC5QSTtcblxuICAgICAgICB2YXIgbnVtYW5nbGUgPSBNYXRoLnJvdW5kKChtYXhfdGhldGEgLSBtaW5fdGhldGEpIC8gdGhldGFfcmVzKTtcbiAgICAgICAgdmFyIG51bXJobyA9IE1hdGgucm91bmQoKCh3aWR0aCArIGhlaWdodCkgKiAyICsgMSkgLyByaG9fcmVzKTtcbiAgICAgICAgdmFyIGlyaG8gPSAxLjAgLyByaG9fcmVzO1xuXG4gICAgICAgIHZhciBhY2N1bSA9IG5ldyBJbnQzMkFycmF5KChudW1hbmdsZSArIDIpICogKG51bXJobyArIDIpKTsgLy90eXBlZCBhcnJheXMgYXJlIGluaXRpYWxpemVkIHRvIDBcbiAgICAgICAgdmFyIHRhYlNpbiA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuICAgICAgICB2YXIgdGFiQ29zID0gbmV3IEZsb2F0MzJBcnJheShudW1hbmdsZSk7XG5cbiAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICB2YXIgYW5nID0gbWluX3RoZXRhO1xuICAgICAgICBmb3IgKDsgbiA8IG51bWFuZ2xlOyBuKyspIHtcbiAgICAgICAgICAgIHRhYlNpbltuXSA9IE1hdGguc2luKGFuZykgKiBpcmhvO1xuICAgICAgICAgICAgdGFiQ29zW25dID0gTWF0aC5jb3MoYW5nKSAqIGlyaG87XG4gICAgICAgICAgICBhbmcgKz0gdGhldGFfcmVzXG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAxLiBmaWxsIGFjY3VtdWxhdG9yXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZVtpICogc3RlcCArIGpdICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyLCAobisxKSAqIChudW1yaG8rMikgKyByKzEsIHRhYkNvc1tuXSwgdGFiU2luW25dKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IE1hdGgucm91bmQoaiAqIHRhYkNvc1tuXSArIGkgKiB0YWJTaW5bbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgciArPSAobnVtcmhvIC0gMSkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW1bKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMi4gZmluZCBsb2NhbCBtYXhpbXVtc1xuICAgICAgICAvL1RPRE86IENvbnNpZGVyIG1ha2luZyBhIHZlY3RvciBjbGFzcyB0aGF0IHVzZXMgdHlwZWQgYXJyYXlzXG4gICAgICAgIHZhciBfc29ydF9idWYgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBudW1yaG87IHIrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhc2UgPSAobiArIDEpICogKG51bXJobyArIDIpICsgciArIDE7XG4gICAgICAgICAgICAgICAgaWYgKGFjY3VtW2Jhc2VdID4gdGhyZXNob2xkICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID4gYWNjdW1bYmFzZSAtIDFdICYmIGFjY3VtW2Jhc2VdID49IGFjY3VtW2Jhc2UgKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSBudW1yaG8gLSAyXSAmJiBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgbnVtcmhvICsgMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3NvcnRfYnVmLnB1c2goYmFzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMy4gc29ydCB0aGUgZGV0ZWN0ZWQgbGluZXMgYnkgYWNjdW11bGF0b3IgdmFsdWVcbiAgICAgICAgX3NvcnRfYnVmLnNvcnQoZnVuY3Rpb24gKGwxLCBsMikge1xuICAgICAgICAgICAgcmV0dXJuIGFjY3VtW2wxXSA+IGFjY3VtW2wyXSB8fCAoYWNjdW1bbDFdID09IGFjY3VtW2wyXSAmJiBsMSA8IGwyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc3RhZ2UgNC4gc3RvcmUgdGhlIGZpcnN0IG1pbih0b3RhbCxsaW5lc01heCkgbGluZXMgdG8gdGhlIG91dHB1dCBidWZmZXJcbiAgICAgICAgdmFyIGxpbmVzTWF4ID0gTWF0aC5taW4obnVtYW5nbGUgKiBudW1yaG8sIF9zb3J0X2J1Zi5sZW5ndGgpO1xuICAgICAgICB2YXIgc2NhbGUgPSAxLjAgLyAobnVtcmhvICsgMik7XG4gICAgICAgIHZhciBsaW5lcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzTWF4OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZHggPSBfc29ydF9idWZbaV07XG4gICAgICAgICAgICB2YXIgbiA9IE1hdGguZmxvb3IoaWR4ICogc2NhbGUpIC0gMTtcbiAgICAgICAgICAgIHZhciByID0gaWR4IC0gKG4gKyAxKSAqIChudW1yaG8gKyAyKSAtIDE7XG4gICAgICAgICAgICB2YXIgbHJobyA9IChyIC0gKG51bXJobyAtIDEpICogMC41KSAqIHJob19yZXM7XG4gICAgICAgICAgICB2YXIgbGFuZ2xlID0gbiAqIHRoZXRhX3JlcztcbiAgICAgICAgICAgIGxpbmVzLnB1c2goW2xyaG8sIGxhbmdsZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG4gICAgcHlyZG93bihzcmMsIGRzdCwgc3gsIHN5KSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbmVlZGVkIGZvciBiYmZcbiAgICAgICAgaWYgKHR5cGVvZiBzeCA9PT0gXCJ1bmRlZmluZWRcIikgeyBzeCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzeSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzeSA9IDA7IH1cblxuICAgICAgICB2YXIgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIHZhciB3MiA9IHcgPj4gMSwgaDIgPSBoID4+IDE7XG4gICAgICAgIHZhciBfdzIgPSB3MiAtIChzeCA8PCAxKSwgX2gyID0gaDIgLSAoc3kgPDwgMSk7XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDAsIHNwdHIgPSBzeCArIHN5ICogdywgc2xpbmUgPSAwLCBkcHRyID0gMCwgZGxpbmUgPSAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodzIsIGgyLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIHNyY19kID0gc3JjLmRhdGEsIGRzdF9kID0gZHN0LmRhdGE7XG5cbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IF9oMjsgKyt5KSB7XG4gICAgICAgICAgICBzbGluZSA9IHNwdHI7XG4gICAgICAgICAgICBkbGluZSA9IGRwdHI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IF93MiAtIDI7IHggKz0gMiwgZGxpbmUgKz0gMiwgc2xpbmUgKz0gNCkge1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lXSA9IChzcmNfZFtzbGluZV0gKyBzcmNfZFtzbGluZSArIDFdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3XSArIHNyY19kW3NsaW5lICsgdyArIDFdICsgMikgPj4gMjtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZSArIDFdID0gKHNyY19kW3NsaW5lICsgMl0gKyBzcmNfZFtzbGluZSArIDNdICtcbiAgICAgICAgICAgICAgICAgICAgc3JjX2Rbc2xpbmUgKyB3ICsgMl0gKyBzcmNfZFtzbGluZSArIHcgKyAzXSArIDIpID4+IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IF93MjsgKyt4LCArK2RsaW5lLCBzbGluZSArPSAyKSB7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmVdID0gKHNyY19kW3NsaW5lXSArIHNyY19kW3NsaW5lICsgMV0gK1xuICAgICAgICAgICAgICAgICAgICBzcmNfZFtzbGluZSArIHddICsgc3JjX2Rbc2xpbmUgKyB3ICsgMV0gKyAyKSA+PiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3B0ciArPSB3IDw8IDE7XG4gICAgICAgICAgICBkcHRyICs9IHcyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHRyYW5zZm9ybSBpcyAzeDMgb3IgMngzIG1hdHJpeF90IG9ubHkgZmlyc3QgNiB2YWx1ZXMgcmVmZXJlbmNlZFxuICAgIHdhcnBfYWZmaW5lKHNyYywgZHN0LCB0cmFuc2Zvcm0sIGZpbGxfdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsX3ZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IGZpbGxfdmFsdWUgPSAwOyB9XG4gICAgICAgIHZhciBzcmNfd2lkdGggPSBzcmMuY29scywgc3JjX2hlaWdodCA9IHNyYy5yb3dzLCBkc3Rfd2lkdGggPSBkc3QuY29scywgZHN0X2hlaWdodCA9IGRzdC5yb3dzO1xuICAgICAgICB2YXIgc3JjX2QgPSBzcmMuZGF0YSwgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgb2ZmID0gMCwgaXhzID0gMCwgaXlzID0gMCwgeHMgPSAwLjAsIHlzID0gMC4wLCBhID0gMC4wLCBiID0gMC4wLCBwMCA9IDAuMCwgcDEgPSAwLjA7XG4gICAgICAgIHZhciB0ZCA9IHRyYW5zZm9ybS5kYXRhO1xuICAgICAgICB2YXIgbTAwID0gdGRbMF0sIG0wMSA9IHRkWzFdLCBtMDIgPSB0ZFsyXSxcbiAgICAgICAgICAgIG0xMCA9IHRkWzNdLCBtMTEgPSB0ZFs0XSwgbTEyID0gdGRbNV07XG5cbiAgICAgICAgZm9yICh2YXIgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgIHhzID0gbTAxICogeSArIG0wMjtcbiAgICAgICAgICAgIHlzID0gbTExICogeSArIG0xMjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCBkc3Rfd2lkdGg7ICsreCwgKytkcHRyLCB4cyArPSBtMDAsIHlzICs9IG0xMCkge1xuICAgICAgICAgICAgICAgIGl4cyA9IHhzIHwgMDsgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl4cyA+PSAwICYmIGl5cyA+PSAwICYmIGl4cyA8IChzcmNfd2lkdGggLSAxKSAmJiBpeXMgPCAoc3JjX2hlaWdodCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSB4cyAtIGl4cztcbiAgICAgICAgICAgICAgICAgICAgYiA9IHlzIC0gaXlzO1xuICAgICAgICAgICAgICAgICAgICBvZmYgPSBzcmNfd2lkdGggKiBpeXMgKyBpeHM7XG5cbiAgICAgICAgICAgICAgICAgICAgcDAgPSBzcmNfZFtvZmZdICsgYSAqIChzcmNfZFtvZmYgKyAxXSAtIHNyY19kW29mZl0pO1xuICAgICAgICAgICAgICAgICAgICBwMSA9IHNyY19kW29mZiArIHNyY193aWR0aF0gKyBhICogKHNyY19kW29mZiArIHNyY193aWR0aCArIDFdIC0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbZHB0cl0gPSBwMCArIGIgKiAocDEgLSBwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgZHN0X2RbZHB0cl0gPSBmaWxsX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi4vanNmZWF0TmV4dC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZV91OCAoc3JjLCBkc3QsIGNhY2hlLCBudywgbmgpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBpbnZfc2NhbGVfMjU2ID0gKHNjYWxlX3ggKiBzY2FsZV95ICogMHgxMDAwMCkgfCAwO1xuICAgIHZhciBkeCA9IDAsIGR5ID0gMCwgc3ggPSAwLCBzeSA9IDAsIHN4MSA9IDAsIHN4MiA9IDAsIGkgPSAwLCBrID0gMCwgZnN4MSA9IDAuMCwgZnN4MiA9IDAuMDtcbiAgICB2YXIgYSA9IDAsIGIgPSAwLCBkeG4gPSAwLCBhbHBoYSA9IDAsIGJldGEgPSAwLCBiZXRhMSA9IDA7XG5cbiAgICB2YXIgYnVmX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICB2YXIgeG9mc19ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigodyAqIDIgKiAzKSA8PCAyKTtcblxuICAgIHZhciBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgdmFyIHN1bSA9IHN1bV9ub2RlLmkzMjtcbiAgICB2YXIgeG9mcyA9IHhvZnNfbm9kZS5pMzI7XG5cbiAgICBmb3IgKDsgZHggPCBudzsgZHgrKykge1xuICAgICAgICBmc3gxID0gZHggKiBzY2FsZV94LCBmc3gyID0gZnN4MSArIHNjYWxlX3g7XG4gICAgICAgIHN4MSA9IChmc3gxICsgMS4wIC0gMWUtNikgfCAwLCBzeDIgPSBmc3gyIHwgMDtcbiAgICAgICAgc3gxID0gTWF0aC5taW4oc3gxLCB3IC0gMSk7XG4gICAgICAgIHN4MiA9IE1hdGgubWluKHN4MiwgdyAtIDEpO1xuXG4gICAgICAgIGlmIChzeDEgPiBmc3gxKSB7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKHN4MSAtIGZzeDEpICogMHgxMDApIHwgMDtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHN4ID0gc3gxOyBzeCA8IHN4Mjsgc3grKykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAyNTY7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoKGZzeDIgLSBzeDIpICogMjU2KSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogM107XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzICsgMV07XG4gICAgICAgICAgICBhbHBoYSA9IHhvZnNbayAqIDMgKyAyXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmW2R4biArIGldICs9IHNyY19kW2EgKyBzeDEgKyBpXSAqIGFscGhhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoZHkgKyAxKSAqIHNjYWxlX3kgPD0gc3kgKyAxIHx8IHN5ID09IGggLSAxKSB7XG4gICAgICAgICAgICBiZXRhID0gKE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKSAqIDI1NikgfCAwO1xuICAgICAgICAgICAgYmV0YTEgPSAyNTYgLSBiZXRhO1xuICAgICAgICAgICAgYiA9IG53ICogZHk7XG4gICAgICAgICAgICBpZiAoYmV0YSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogMjU2KSAvIGludl9zY2FsZV8yNTYsIDApLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBNYXRoLm1pbihNYXRoLm1heCgoc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMSkgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XSAqIDI1NjtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZSAoc3JjLCBkc3QsIGNhY2hlLCBudywgbmgpIHtcbiAgICB2YXIgeG9mc19jb3VudCA9IDA7XG4gICAgdmFyIGNoID0gc3JjLmNoYW5uZWwsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgIHZhciBzcmNfZCA9IHNyYy5kYXRhLCBkc3RfZCA9IGRzdC5kYXRhO1xuICAgIHZhciBzY2FsZV94ID0gdyAvIG53LCBzY2FsZV95ID0gaCAvIG5oO1xuICAgIHZhciBzY2FsZSA9IDEuMCAvIChzY2FsZV94ICogc2NhbGVfeSk7XG4gICAgdmFyIGR4ID0gMCwgZHkgPSAwLCBzeCA9IDAsIHN5ID0gMCwgc3gxID0gMCwgc3gyID0gMCwgaSA9IDAsIGsgPSAwLCBmc3gxID0gMC4wLCBmc3gyID0gMC4wO1xuICAgIHZhciBhID0gMCwgYiA9IDAsIGR4biA9IDAsIGFscGhhID0gMC4wLCBiZXRhID0gMC4wLCBiZXRhMSA9IDAuMDtcblxuICAgIHZhciBidWZfbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciBzdW1fbm9kZSA9IGNhY2hlLmdldF9idWZmZXIoKG53ICogY2gpIDw8IDIpO1xuICAgIHZhciB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgdmFyIGJ1ZiA9IGJ1Zl9ub2RlLmYzMjtcbiAgICB2YXIgc3VtID0gc3VtX25vZGUuZjMyO1xuICAgIHZhciB4b2ZzID0geG9mc19ub2RlLmYzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIGZzeDEgPSBkeCAqIHNjYWxlX3gsIGZzeDIgPSBmc3gxICsgc2NhbGVfeDtcbiAgICAgICAgc3gxID0gKGZzeDEgKyAxLjAgLSAxZS02KSB8IDAsIHN4MiA9IGZzeDIgfCAwO1xuICAgICAgICBzeDEgPSBNYXRoLm1pbihzeDEsIHcgLSAxKTtcbiAgICAgICAgc3gyID0gTWF0aC5taW4oc3gyLCB3IC0gMSk7XG5cbiAgICAgICAgaWYgKHN4MSA+IGZzeDEpIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDEgLSBmc3gxKSAqIHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoc3ggPSBzeDE7IHN4IDwgc3gyOyBzeCsrKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MiAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGZzeDIgLSBzeDIpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgIGJ1ZltkeF0gPSBzdW1bZHhdID0gMDtcbiAgICB9XG4gICAgZHkgPSAwO1xuICAgIGZvciAoc3kgPSAwOyBzeSA8IGg7IHN5KyspIHtcbiAgICAgICAgYSA9IHcgKiBzeTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHhvZnNfY291bnQ7IGsrKykge1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogM10gfCAwO1xuICAgICAgICAgICAgZHhuID0geG9mc1trICogMyArIDFdIHwgMDtcbiAgICAgICAgICAgIGFscGhhID0geG9mc1trICogMyArIDJdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbZHhuICsgaV0gKz0gc3JjX2RbYSArIHN4MSArIGldICogYWxwaGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChkeSArIDEpICogc2NhbGVfeSA8PSBzeSArIDEgfHwgc3kgPT0gaCAtIDEpIHtcbiAgICAgICAgICAgIGJldGEgPSBNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCk7XG4gICAgICAgICAgICBiZXRhMSA9IDEuMCAtIGJldGE7XG4gICAgICAgICAgICBiID0gbncgKiBkeTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhiZXRhKSA8IDFlLTMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gc3VtW2R4XSArIGJ1ZltkeF0gKiBiZXRhMTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gKiBiZXRhO1xuICAgICAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkeSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgIHN1bVtkeF0gKz0gYnVmW2R4XTtcbiAgICAgICAgICAgICAgICBidWZbZHhdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59IiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tICcuL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LmpzJ1xuaW1wb3J0IGRhdGFfdHlwZSBmcm9tICcuL2RhdGFfdHlwZS9kYXRhX3R5cGUuanMnXG5pbXBvcnQgY2FjaGUgZnJvbSAnLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBkYXRhX3QgZnJvbSAnLi9ub2RlX3V0aWxzL2RhdGFfdC5qcydcbmltcG9ydCBrZXlwb2ludF90IGZyb20gJy4va2V5cG9pbnRfdC9rZXlwb2ludF90LmpzJ1xuaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi9pbWdwcm9jL2ltZ3Byb2MuanMnXG5pbXBvcnQgbWF0aCBmcm9tICcuL21hdGgvbWF0aC5qcydcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4vbWF0bWF0aC9tYXRtYXRoLmpzJ1xuaW1wb3J0IG1hdHJpeF90IGZyb20gJy4vbWF0cml4X3QvbWF0cml4X3QuanMnXG5pbXBvcnQgcHlyYW1pZF90IGZyb20gJy4vcHlyYW1pZF90L3B5cmFtaWRfdC5qcydcbmltcG9ydCBsaW5hbGcgZnJvbSAnLi9saW5hbGcvbGluYWxnLmpzJ1xuaW1wb3J0IG9yYiBmcm9tICcuL29yYi9vcmIuanMnXG5pbXBvcnQgeWFwZSBmcm9tICcuL3lhcGUveWFwZS5qcydcbmltcG9ydCB5YXBlMDYgZnJvbSAnLi95YXBlMDYveWFwZTA2LmpzJ1xuaW1wb3J0IG1vdGlvbl9lc3RpbWF0b3IgZnJvbSAnLi9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9lc3RpbWF0b3IuanMnXG5pbXBvcnQge2hvbW9ncmFwaHkyZH0gZnJvbSAnLi9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9tb2RlbC5qcydcbmltcG9ydCByYW5zYWNfcGFyYW1zX3QgZnJvbSAnLi9tb3Rpb25fZXN0aW1hdG9yL3JhbnNhY19wYXJhbXNfdC5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9jb25zdGFudHMuanMnXG5pbXBvcnQgcGtnIGZyb20gJy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgfVxuXG4gICAgLy8gVkVSU0lPTlxuICAgIHN0YXRpYyBWRVJTSU9OID0gcGtnLnZlcnNpb247XG5cbiAgICAvLyBDT05TVEFOVFNcbiAgICBzdGF0aWMgRVBTSUxPTiA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICBzdGF0aWMgRkxUX01JTiA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICBzdGF0aWMgVThfdCA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICBzdGF0aWMgUzMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90O1xuICAgIHN0YXRpYyBGMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjMyX3Q7XG4gICAgc3RhdGljIFM2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5TNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEMxX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgc3RhdGljIEMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMyX3Q7XG4gICAgc3RhdGljIEMzX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMzX3Q7XG4gICAgc3RhdGljIEM0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkM0X3Q7XG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgc3RhdGljIENPTE9SX1JHQkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9SR0IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIHN0YXRpYyBCT1hfQkxVUl9OT1NDQUxFID0gSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFO1xuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgc3RhdGljIFNWRF9VX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1Q7XG4gICAgc3RhdGljIFNWRF9WX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1Q7XG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBzdGF0aWMgVThDMV90ID0gdGhpcy5VOF90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBVOEMzX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMzX3Q7XG4gICAgc3RhdGljIFU4QzRfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzRfdDtcblxuICAgIHN0YXRpYyBGMzJDMV90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgRjMyQzJfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMyX3Q7XG4gICAgc3RhdGljIFMzMkMxX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBTMzJDMl90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzJfdDtcblxuICAgIGdldF9kYXRhX3R5cGUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZSh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfY2hhbm5lbCh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfY2hhbm5lbCh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfZGF0YV90eXBlX3NpemUodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpO1xuICAgIH1cbn1cblxuanNmZWF0TmV4dC5kYXRhX3QgPSBkYXRhX3RcblxuanNmZWF0TmV4dC5tYXRyaXhfdCA9IG1hdHJpeF90O1xuXG5qc2ZlYXROZXh0LnB5cmFtaWRfdCA9IHB5cmFtaWRfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5jYWNoZSA9IGNhY2hlO1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBpbWdwcm9jO1xuXG5qc2ZlYXROZXh0Lm1hdGggPSBtYXRoO1xuXG5qc2ZlYXROZXh0Lm1hdG1hdGggPSBtYXRtYXRoO1xuXG5qc2ZlYXROZXh0LmxpbmFsZyA9IGxpbmFsZztcblxuanNmZWF0TmV4dC5vcmIgPSBvcmI7XG5cbmpzZmVhdE5leHQueWFwZSA9IHlhcGU7XG5cbmpzZmVhdE5leHQueWFwZTA2ID0geWFwZTA2O1xuXG5qc2ZlYXROZXh0Lm1vdGlvbl9lc3RpbWF0b3IgPSBtb3Rpb25fZXN0aW1hdG9yO1xuXG5qc2ZlYXROZXh0LnJhbnNhY19wYXJhbXNfdCA9IHJhbnNhY19wYXJhbXNfdDtcblxuanNmZWF0TmV4dC5ob21vZ3JhcGh5MmQgPSBob21vZ3JhcGh5MmQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mga2V5cG9pbnRfdCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgc2NvcmUsIGxldmVsLCBhbmdsZSkge1xuICAgICAgICBpZiAodHlwZW9mIHggPT09IFwidW5kZWZpbmVkXCIpIHsgeCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiB5ID09PSBcInVuZGVmaW5lZFwiKSB7IHkgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2NvcmUgPT09IFwidW5kZWZpbmVkXCIpIHsgc2NvcmUgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIpIHsgbGV2ZWwgPSAwOyB9XG4gICAgICAgIGlmICh0eXBlb2YgYW5nbGUgPT09IFwidW5kZWZpbmVkXCIpIHsgYW5nbGUgPSAtMS4wOyB9XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN3YXAoQSwgaTAsIGkxLCB0KSB7XG4gICAgdCA9IEFbaTBdO1xuICAgIEFbaTBdID0gQVtpMV07XG4gICAgQVtpMV0gPSB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3QoYSwgYikge1xuICAgIGEgPSBNYXRoLmFicyhhKTtcbiAgICBiID0gTWF0aC5hYnMoYik7XG4gICAgaWYoIGEgPiBiICkge1xuICAgICAgICBiIC89IGE7XG4gICAgICAgIHJldHVybiBhKk1hdGguc3FydCgxLjAgKyBiKmIpO1xuICAgIH1cbiAgICBpZiggYiA+IDAgKSB7XG4gICAgICAgIGEgLz0gYjtcbiAgICAgICAgcmV0dXJuIGIqTWF0aC5zcXJ0KDEuMCArIGEqYSk7XG4gICAgfVxuICAgIHJldHVybiAwLjA7XG59IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi4vanNmZWF0TmV4dC5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJztcbmltcG9ydCB7IHN3YXAsIGh5cG90IH0gZnJvbSAnLi9saW5hbGctYmFzZS5qcydcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4uL21hdG1hdGgvbWF0bWF0aC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGluYWxnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwKjQpO1xuICAgICAgICB0aGlzLm1hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgIH1cblxuICAgIEphY29iaUltcGwoQSwgYXN0ZXAsIFcsIFYsIHZzdGVwLCBuKSB7XG4gICAgICAgIHZhciBlcHMgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT047XG4gICAgICAgIHZhciBpPTAsaj0wLGs9MCxtPTAsbD0wLGlkeD0wLF9pbj0wLF9pbjI9MDtcbiAgICAgICAgdmFyIGl0ZXJzPTAsbWF4X2l0ZXI9bipuKjMwO1xuICAgICAgICB2YXIgbXY9MC4wLHZhbD0wLjAscD0wLjAseT0wLjAsdD0wLjAscz0wLjAsYz0wLjAsYTA9MC4wLGIwPTAuMDtcbiAgICBcbiAgICAgICAgdmFyIGluZFJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuPDwyKTtcbiAgICAgICAgdmFyIGluZENfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuPDwyKTtcbiAgICAgICAgdmFyIGluZFIgPSBpbmRSX2J1ZmYuaTMyO1xuICAgICAgICB2YXIgaW5kQyA9IGluZENfYnVmZi5pMzI7XG4gICAgXG4gICAgICAgIGlmKFYpIHtcbiAgICAgICAgICAgIGZvcig7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBrID0gaSp2c3RlcDtcbiAgICAgICAgICAgICAgICBmb3IoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVltrICsgal0gPSAwLjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFZbayArIGldID0gMS4wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZvcihrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgV1trXSA9IEFbKGFzdGVwICsgMSkqa107XG4gICAgICAgICAgICBpZihrIDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICBmb3IobSA9IGsrMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwKmsgKyBtXSksIGkgPSBrKzI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCprK2ldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYobXYgPCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBtdiA9IHZhbCwgbSA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZFJba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoayA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtrXSksIGkgPSAxOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAqaStrXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKG12IDwgdmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbXYgPSB2YWwsIG0gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRDW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZihuID4gMSkgZm9yKCA7IGl0ZXJzIDwgbWF4X2l0ZXI7IGl0ZXJzKyspIHtcbiAgICAgICAgICAgIC8vIGZpbmQgaW5kZXggKGssbCkgb2YgcGl2b3QgcFxuICAgICAgICAgICAgZm9yKGsgPSAwLCBtdiA9IE1hdGguYWJzKEFbaW5kUlswXV0pLCBpID0gMTsgaSA8IG4tMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCppICsgaW5kUltpXV0pO1xuICAgICAgICAgICAgICAgIGlmKCBtdiA8IHZhbCApXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGwgPSBpbmRSW2tdO1xuICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCppbmRDW2ldICsgaV0pO1xuICAgICAgICAgICAgICAgIGlmKCBtdiA8IHZhbCApXG4gICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBrID0gaW5kQ1tpXSwgbCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHAgPSBBW2FzdGVwKmsgKyBsXTtcbiAgICBcbiAgICAgICAgICAgIGlmKE1hdGguYWJzKHApIDw9IGVwcykgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICB5ID0gKFdbbF0gLSBXW2tdKSowLjU7XG4gICAgICAgICAgICB0ID0gTWF0aC5hYnMoeSkgKyBoeXBvdChwLCB5KTtcbiAgICAgICAgICAgIHMgPSBoeXBvdChwLCB0KTtcbiAgICAgICAgICAgIGMgPSB0L3M7XG4gICAgICAgICAgICBzID0gcC9zOyB0ID0gKHAvdCkqcDtcbiAgICAgICAgICAgIGlmKHkgPCAwKVxuICAgICAgICAgICAgICAgIHMgPSAtcywgdCA9IC10O1xuICAgICAgICAgICAgQVthc3RlcCprICsgbF0gPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBXW2tdIC09IHQ7XG4gICAgICAgICAgICBXW2xdICs9IHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJvdGF0ZSByb3dzIGFuZCBjb2x1bW5zIGsgYW5kIGxcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICBfaW4gPSAoYXN0ZXAgKiBpICsgayk7XG4gICAgICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGkgKyBsKTtcbiAgICAgICAgICAgICAgICBhMCA9IEFbX2luXTtcbiAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgIEFbX2luMl0gPSBhMCAqIHMgKyBiMCAqIGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAoayArIDEpOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgICAgIF9pbjIgPSAoYXN0ZXAgKiBpICsgbCk7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSA9IGwgKyAxO1xuICAgICAgICAgICAgX2luID0gKGFzdGVwICogayArIGkpO1xuICAgICAgICAgICAgX2luMiA9IChhc3RlcCAqIGwgKyBpKTtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrLCBfaW4rKywgX2luMisrKSB7XG4gICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgYjAgPSBBW19pbjJdO1xuICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyByb3RhdGUgZWlnZW52ZWN0b3JzXG4gICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgIF9pbiA9IHZzdGVwICogaztcbiAgICAgICAgICAgICAgICBfaW4yID0gdnN0ZXAgKiBsO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYTAgPSBWW19pbl07XG4gICAgICAgICAgICAgICAgICAgIGIwID0gVltfaW4yXTtcbiAgICAgICAgICAgICAgICAgICAgVltfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgICAgICBWW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWR4ID0gaiA9PSAwID8gayA6IGw7XG4gICAgICAgICAgICAgICAgaWYoaWR4IDwgbiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKG0gPSBpZHgrMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwKmlkeCArIG1dKSwgaSA9IGlkeCsyOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwKmlkeCtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbXYgPCB2YWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRSW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihtID0gMCwgbXYgPSBNYXRoLmFicyhBW2lkeF0pLCBpID0gMTsgaSA8IGlkeDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwKmkraWR4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbXYgPCB2YWwgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG12ID0gdmFsLCBtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRDW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBzb3J0IGVpZ2VudmFsdWVzICYgZWlnZW52ZWN0b3JzXG4gICAgICAgIGZvcihrID0gMDsgayA8IG4tMTsgaysrKSB7XG4gICAgICAgICAgICBtID0gaztcbiAgICAgICAgICAgIGZvcihpID0gaysxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoV1ttXSA8IFdbaV0pXG4gICAgICAgICAgICAgICAgICAgIG0gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoayAhPSBtKSB7XG4gICAgICAgICAgICAgICAgc3dhcChXLCBtLCBrLCBtdik7XG4gICAgICAgICAgICAgICAgaWYoVikge1xuICAgICAgICAgICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoViwgdnN0ZXAqbSArIGksIHZzdGVwKmsgKyBpLCBtdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICBcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZFJfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRDX2J1ZmYpO1xuICAgIH1cblxuICAgIEphY29iaVNWREltcGwoQXQsIGFzdGVwLCBfVywgVnQsIHZzdGVwLCBtLCBuLCBuMSkge1xuICAgICAgICB2YXIgZXBzID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogMi4wO1xuICAgICAgICB2YXIgbWludmFsID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgICAgICB2YXIgaT0wLGo9MCxrPTAsaXRlcj0wLG1heF9pdGVyPU1hdGgubWF4KG0sIDMwKTtcbiAgICAgICAgdmFyIEFpPTAsQWo9MCxWaT0wLFZqPTAsY2hhbmdlZD0wO1xuICAgICAgICB2YXIgYz0wLjAsIHM9MC4wLCB0PTAuMDtcbiAgICAgICAgdmFyIHQwPTAuMCx0MT0wLjAsc2Q9MC4wLGJldGE9MC4wLGdhbW1hPTAuMCxkZWx0YT0wLjAsYT0wLjAscD0wLjAsYj0wLjA7XG4gICAgICAgIHZhciBzZWVkID0gMHgxMjM0O1xuICAgICAgICB2YXIgdmFsPTAuMCx2YWwwPTAuMCxhc3VtPTAuMDtcbiAgICBcbiAgICAgICAgdmFyIFdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuPDwzKTtcbiAgICAgICAgdmFyIFcgPSBXX2J1ZmYuZjY0O1xuICAgICAgICBcbiAgICAgICAgZm9yKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgZm9yKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSphc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIHNkICs9IHQqdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBzZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoVnQpIHtcbiAgICAgICAgICAgICAgICBmb3IoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVnRbaSp2c3RlcCArIGtdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgVnRbaSp2c3RlcCArIGldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yKDsgaXRlciA8IG1heF9pdGVyOyBpdGVyKyspIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IoaSA9IDA7IGkgPCBuLTE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvcihqID0gaSsxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFpID0gKGkqYXN0ZXApfDAsIEFqID0gKGoqYXN0ZXApfDA7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBXW2ldLCBwID0gMCwgYiA9IFdbal07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaV0qQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpKzFdKkF0W0FqKzFdO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IoOyBrIDwgbTsgaysrKVxuICAgICAgICAgICAgICAgICAgICAgICAgcCArPSBBdFtBaStrXSpBdFtBaitrXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKHApIDw9IGVwcypNYXRoLnNxcnQoYSpiKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwICo9IDIuMDtcbiAgICAgICAgICAgICAgICAgICAgYmV0YSA9IGEgLSBiLCBnYW1tYSA9IGh5cG90KHAsIGJldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiggYmV0YSA8IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IChnYW1tYSAtIGJldGEpKjAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNxcnQoZGVsdGEvZ2FtbWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IChwLyhnYW1tYSpzKjIuMCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguc3FydCgoZ2FtbWEgKyBiZXRhKS8oZ2FtbWEqMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gKHAvKGdhbW1hKmMqMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGE9MC4wLCBiPTAuMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGsgPSAyOyAvLyB1bnJvbGxcbiAgICAgICAgICAgICAgICAgICAgdDAgPSBjKkF0W0FpXSArIHMqQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICB0MSA9IC1zKkF0W0FpXSArIGMqQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaV0gPSB0MDsgQXRbQWpdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgIGEgKz0gdDAqdDA7IGIgKz0gdDEqdDE7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHQwID0gYypBdFtBaSsxXSArIHMqQXRbQWorMV07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMqQXRbQWkrMV0gKyBjKkF0W0FqKzFdO1xuICAgICAgICAgICAgICAgICAgICBBdFtBaSsxXSA9IHQwOyBBdFtBaisxXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICBhICs9IHQwKnQwOyBiICs9IHQxKnQxO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IoIDsgayA8IG07IGsrKyApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYypBdFtBaStrXSArIHMqQXRbQWora107XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zKkF0W0FpK2tdICsgYypBdFtBaitrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF0W0FpK2tdID0gdDA7IEF0W0FqK2tdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgKz0gdDAqdDA7IGIgKz0gdDEqdDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFdbaV0gPSBhOyBXW2pdID0gYjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSAxO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoVnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpID0gKGkqdnN0ZXApfDAsIFZqID0gKGoqdnN0ZXApfDA7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYypWdFtWaV0gKyBzKlZ0W1ZqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gLXMqVnRbVmldICsgYypWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICBWdFtWaV0gPSB0MDsgVnRbVmpdID0gdDE7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMqVnRbVmkrMV0gKyBzKlZ0W1ZqKzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcypWdFtWaSsxXSArIGMqVnRbVmorMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBWdFtWaSsxXSA9IHQwOyBWdFtWaisxXSA9IHQxO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYypWdFtWaStrXSArIHMqVnRbVmora107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcypWdFtWaStrXSArIGMqVnRbVmora107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkra10gPSB0MDsgVnRbVmora10gPSB0MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNoYW5nZWQgPT0gMCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgZm9yKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSphc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIHNkICs9IHQqdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBuLTE7IGkrKykge1xuICAgICAgICAgICAgaiA9IGk7XG4gICAgICAgICAgICBmb3IoayA9IGkrMTsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgIGlmKFdbal0gPCBXW2tdKVxuICAgICAgICAgICAgICAgICAgICBqID0gaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGkgIT0gaikge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgaSwgaiwgc2QpO1xuICAgICAgICAgICAgICAgIGlmKFZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dhcChBdCwgaSphc3RlcCArIGssIGoqYXN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKFZ0LCBpKnZzdGVwICsgaywgaip2c3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIF9XW2ldID0gV1tpXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIVZ0KSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBuMTsgaSsrKSB7XG4gICAgXG4gICAgICAgICAgICBzZCA9IGkgPCBuID8gV1tpXSA6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdoaWxlKHNkIDw9IG1pbnZhbCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGdvdCBhIHplcm8gc2luZ3VsYXIgdmFsdWUsIHRoZW4gaW4gb3JkZXIgdG8gZ2V0IHRoZSBjb3JyZXNwb25kaW5nIGxlZnQgc2luZ3VsYXIgdmVjdG9yXG4gICAgICAgICAgICAgICAgLy8gd2UgZ2VuZXJhdGUgYSByYW5kb20gdmVjdG9yLCBwcm9qZWN0IGl0IHRvIHRoZSBwcmV2aW91c2x5IGNvbXB1dGVkIGxlZnQgc2luZ3VsYXIgdmVjdG9ycyxcbiAgICAgICAgICAgICAgICAvLyBzdWJ0cmFjdCB0aGUgcHJvamVjdGlvbiBhbmQgbm9ybWFsaXplIHRoZSBkaWZmZXJlbmNlLlxuICAgICAgICAgICAgICAgIHZhbDAgPSAoMS4wL20pO1xuICAgICAgICAgICAgICAgIGZvcihrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzZWVkID0gKHNlZWQgKiAyMTQwMTMgKyAyNTMxMDExKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gKCgoc2VlZCA+PiAxNikgJiAweDdmZmYpICYgMjU2KSAhPSAwID8gdmFsMCA6IC12YWwwO1xuICAgICAgICAgICAgICAgICAgICBBdFtpKmFzdGVwICsga10gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcihpdGVyID0gMDsgaXRlciA8IDI7IGl0ZXIrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkICs9IEF0W2kqYXN0ZXAgKyBrXSpBdFtqKmFzdGVwICsga107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IChBdFtpKmFzdGVwICsga10gLSBzZCpBdFtqKmFzdGVwICsga10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kqYXN0ZXAgKyBrXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSArPSBNYXRoLmFicyh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdW0gPSBhc3VtID8gMS4wL2FzdW0gOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXRbaSphc3RlcCArIGtdICo9IGFzdW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2QgPSAwO1xuICAgICAgICAgICAgICAgIGZvcihrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICB0ID0gQXRbaSphc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICBzZCArPSB0KnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNkID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcyA9ICgxLjAvc2QpO1xuICAgICAgICAgICAgZm9yKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgQXRbaSphc3RlcCArIGtdICo9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgfVxuXG4gICAgbHVfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMCwgcCA9IDEsIGFzdGVwID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdCwgYWxwaGEsIGQsIHM7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFzdGVwOyBpKyspIHtcbiAgICAgICAgICAgIGsgPSBpO1xuICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBhc3RlcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFkW2ogKiBhc3RlcCArIGldKSA+IE1hdGguYWJzKGFkW2sgKiBhc3RlcCArIGldKSkge1xuICAgICAgICAgICAgICAgICAgICBrID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkgPCBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDsgLy8gRkFJTEVEXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrICE9IGkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBzd2FwKGFkLCBpICogYXN0ZXAgKyBqLCBrICogYXN0ZXAgKyBqLCB0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2FwKGJkLCBpLCBrLCB0KTtcbiAgICAgICAgICAgICAgICBwID0gLXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGQgPSAtMS4wIC8gYWRbaSAqIGFzdGVwICsgaV07XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGFscGhhID0gYWRbaiAqIGFzdGVwICsgaV0gKiBkO1xuXG4gICAgICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBhc3RlcDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkW2ogKiBhc3RlcCArIGtdICs9IGFscGhhICogYWRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYmRbal0gKz0gYWxwaGEgKiBiZFtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRbaSAqIGFzdGVwICsgaV0gPSAtZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IGFzdGVwIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHMgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgIHMgLT0gYWRbaSAqIGFzdGVwICsga10gKiBiZFtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJkW2ldID0gcyAqIGFkW2kgKiBhc3RlcCArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7IC8vIE9LXG4gICAgfVxuXG4gICAgY2hvbGVza3lfc29sdmUoQSwgQikge1xuICAgICAgICB2YXIgY29sID0gMCwgcm93ID0gMCwgY29sMiA9IDAsIGNzID0gMCwgcnMgPSAwLCBpID0gMCwgaiA9IDA7XG4gICAgICAgIHZhciBzaXplID0gQS5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgdmFsLCBpbnZfZGlhZztcblxuICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgICBpbnZfZGlhZyA9IDEuMDtcbiAgICAgICAgICAgIGNzID0gKGNvbCAqIHNpemUpO1xuICAgICAgICAgICAgcnMgPSBjcztcbiAgICAgICAgICAgIGZvciAocm93ID0gY29sOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZm9yIHRoZSBwYXJ0cyBvZiBjaG9sZXNreSBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgICAgICAgICAgdmFsID0gYWRbKHJzICsgY29sKV07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFsoY29sMiAqIHNpemUgKyBjb2wpXSAqIGFkWyhycyArIGNvbDIpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PSBjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgZGlhZ29uYWwgZWxlbWVudCBzbyBkb24ndCBkaXZpZGVcbiAgICAgICAgICAgICAgICAgICAgYWRbKHJzICsgY29sKV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbKGNzICsgcm93KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdmlkZSBteSB0aGUgZGlhZ29uYWwgZWxlbWVudCBmb3IgYWxsIG90aGVyc1xuICAgICAgICAgICAgICAgICAgICBhZFsocnMgKyBjb2wpXSA9IHZhbCAqIGludl9kaWFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBycyA9IChycyArIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbKGNzICsgaildICogYmRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIGRpYWdvbmFsXG4gICAgICAgIGNzID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgYmRbaV0gLz0gYWRbKGNzICsgaSldO1xuICAgICAgICAgICAgY3MgPSAoY3MgKyBzaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggTCBUcmFuc3Bvc2VcbiAgICAgICAgaSA9IChzaXplIC0gMSk7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFsID0gYmRbaV07XG4gICAgICAgICAgICBqID0gKGkgKyAxKTtcbiAgICAgICAgICAgIGNzID0gKGogKiBzaXplKTtcbiAgICAgICAgICAgIGZvciAoOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsIC09IGFkWyhjcyArIGkpXSAqIGJkW2pdO1xuICAgICAgICAgICAgICAgIGNzID0gKGNzICsgc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQSwgVywgVSwgViwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHsgb3B0aW9ucyA9IDA7IH07XG4gICAgICAgIHZhciBhdCA9IDAsIGkgPSAwLCBqID0gMCwgX20gPSBBLnJvd3MsIF9uID0gQS5jb2xzLCBtID0gX20sIG4gPSBfbjtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90OyAvLyB3ZSBvbmx5IHdvcmsgd2l0aCBzaW5nbGUgY2hhbm5lbFxuXG4gICAgICAgIGlmIChtIDwgbikge1xuICAgICAgICAgICAgYXQgPSAxO1xuICAgICAgICAgICAgaSA9IG07XG4gICAgICAgICAgICBtID0gbjtcbiAgICAgICAgICAgIG4gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobSAqIG0pIDw8IDMpO1xuICAgICAgICB2YXIgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcblxuICAgICAgICB2YXIgYV9tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KG0sIG0sIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciB3X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIHZfbXQgPSBuZXcganNmZWF0TmV4dC5tYXRyaXhfdChuLCBuLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICAvLyB0cmFuc3Bvc2VcbiAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoYV9tdCwgQSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX24gKiBfbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBuICogbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpU1ZESW1wbChhX210LmRhdGEsIG0sIHdfbXQuZGF0YSwgdl9tdC5kYXRhLCBuLCBtLCBuLCBtKTtcblxuICAgICAgICBpZiAoVykge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IHdfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgX247IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgaWYgKFUgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG0gKiBtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBVLmRhdGFbaV0gPSBhX210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChVKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShVLCBhX210KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFYgJiYgKG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpKSB7XG4gICAgICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWLmRhdGFbaV0gPSB2X210LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRtYXRoLnRyYW5zcG9zZShWLCB2X210KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChVICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgdl9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIChvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UKSkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVi5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVikge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoViwgYV9tdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuXG4gICAgfVxuXG4gICAgc3ZkX3NvbHZlKEEsIFgsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwdSA9IDAsIHB2ID0gMDtcbiAgICAgICAgdmFyIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIHN1bSA9IDAuMCwgeHN1bSA9IDAuMCwgdG9sID0gMC4wO1xuICAgICAgICB2YXIgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgdmFyIHVfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobnJvd3MgKiBucm93cykgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobmNvbHMgPDwgMyk7XG4gICAgICAgIHZhciB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuXG4gICAgICAgIHZhciB1X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KG5jb2xzLCBuY29scywgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgYmQgPSBCLmRhdGEsIHVkID0gdV9tdC5kYXRhLCB3ZCA9IHdfbXQuZGF0YSwgdmQgPSB2X210LmRhdGE7XG5cbiAgICAgICAgdGhpcy5zdmRfZGVjb21wb3NlKEEsIHdfbXQsIHVfbXQsIHZfbXQsIDApO1xuXG4gICAgICAgIHRvbCA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIHdkWzBdICogbmNvbHM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgaSsrLCBwdiArPSBuY29scykge1xuICAgICAgICAgICAgeHN1bSA9IDAuMDtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuY29sczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdkW2pdID4gdG9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDAsIHN1bSA9IDAuMCwgcHUgPSAwOyBrIDwgbnJvd3M7IGsrKywgcHUgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSB1ZFtwdSArIGpdICogYmRba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeHN1bSArPSBzdW0gKiB2ZFtwdiArIGpdIC8gd2Rbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWC5kYXRhW2ldID0geHN1bTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih1X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIod19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHZfYnVmZik7XG4gICAgfVxuXG4gICAgc3ZkX2ludmVydChBaSwgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHB1ID0gMCwgcHYgPSAwLCBwYSA9IDA7XG4gICAgICAgIHZhciBucm93cyA9IEEucm93cywgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIHZhciBzdW0gPSAwLjAsIHRvbCA9IDAuMDtcbiAgICAgICAgdmFyIGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgICAgICBcbiAgICAgICAgLy92YXIgdV9idWZmID0gY2FjaGUxLmdldF9idWZmZXIoKG5yb3dzICogbnJvd3MpIDw8IDMpO1xuICAgICAgICB2YXIgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgdmFyIHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuY29scyA8PCAzKTtcbiAgICAgICAgdmFyIHZfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigobmNvbHMgKiBuY29scykgPDwgMyk7XG4gICAgICAgIHZhciB1X210ID0gbmV3IGpzZmVhdE5leHQubWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICB2YXIgdl9tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KG5jb2xzLCBuY29scywgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICB2YXIgaWQgPSBBaS5kYXRhLCB1ZCA9IHVfbXQuZGF0YSwgd2QgPSB3X210LmRhdGEsIHZkID0gdl9tdC5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3ZkX2RlY29tcG9zZShBLCB3X210LCB1X210LCB2X210LCAwKTtcblxuICAgICAgICB0b2wgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiB3ZFswXSAqIG5jb2xzO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IGkrKywgcHYgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIHB1ID0gMDsgaiA8IG5yb3dzOyBqKyssIHBhKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBzdW0gPSAwLjA7IGsgPCBuY29sczsgaysrLCBwdSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3ZFtrXSA+IHRvbCkgc3VtICs9IHZkW3B2ICsga10gKiB1ZFtwdV0gLyB3ZFtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWRbcGFdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHVfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBlaWdlblZWKEEsIHZlY3RzLCB2YWxzKSB7XG4gICAgICAgIHZhciBuID0gQS5jb2xzLCBpID0gbiAqIG47XG4gICAgICAgIHZhciBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChuICogbikgPDwgMyk7XG4gICAgICAgIHZhciB3X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIobiA8PCAzKTtcbiAgICAgICAgdmFyIGFfbXQgPSBuZXcganNmZWF0TmV4dC5tYXRyaXhfdChuLCBuLCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgd19tdCA9IG5ldyBqc2ZlYXROZXh0Lm1hdHJpeF90KDEsIG4sIGR0LCB3X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICBhX210LmRhdGFbaV0gPSBBLmRhdGFbaV07XG4gICAgICAgIH1cblxuICAgICAgICBKYWNvYmlJbXBsKGFfbXQuZGF0YSwgbiwgd19tdC5kYXRhLCB2ZWN0cyA/IHZlY3RzLmRhdGEgOiBudWxsLCBuLCBuKTtcblxuICAgICAgICBpZiAodmFscykge1xuICAgICAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFscy5kYXRhW25dID0gd19tdC5kYXRhW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAqNCk7XG4gICAgICAgIHRoaXMucXNvcnRfc3RhY2sgPSBuZXcgSW50MzJBcnJheSg0OCoyKTsgXG4gICAgfVxuXG4gICAgZ2V0X2dhdXNzaWFuX2tlcm5lbChzaXplLCBzaWdtYSwga2VybmVsLCBkYXRhX3R5cGUpIHtcbiAgICAgICAgdmFyIGk9MCx4PTAuMCx0PTAuMCxzaWdtYV94PTAuMCxzY2FsZV8yeD0wLjA7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG4gICAgICAgIHZhciBrZXJuX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoc2l6ZTw8Mik7XG4gICAgICAgIHZhciBfa2VybmVsID0ga2Vybl9ub2RlLmYzMjsvL25ldyBGbG9hdDMyQXJyYXkoc2l6ZSk7XG5cbiAgICAgICAgaWYoKHNpemUmMSkgPT0gMSAmJiBzaXplIDw9IDcgJiYgc2lnbWEgPD0gMCkge1xuICAgICAgICAgICAgc3dpdGNoKHNpemU+PjEpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDEuMDtcbiAgICAgICAgICAgICAgICBzdW0gPSAxLjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjI1LCBfa2VybmVsWzFdID0gMC41LCBfa2VybmVsWzJdID0gMC4yNTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjI1KzAuNSswLjI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wNjI1LCBfa2VybmVsWzFdID0gMC4yNSwgX2tlcm5lbFsyXSA9IDAuMzc1LCBcbiAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yNSwgX2tlcm5lbFs0XSA9IDAuMDYyNTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA2MjUrMC4yNSswLjM3NSswLjI1KzAuMDYyNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDAuMDMxMjUsIF9rZXJuZWxbMV0gPSAwLjEwOTM3NSwgX2tlcm5lbFsyXSA9IDAuMjE4NzUsIFxuICAgICAgICAgICAgICAgIF9rZXJuZWxbM10gPSAwLjI4MTI1LCBfa2VybmVsWzRdID0gMC4yMTg3NSwgX2tlcm5lbFs1XSA9IDAuMTA5Mzc1LCBfa2VybmVsWzZdID0gMC4wMzEyNTtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjAzMTI1KzAuMTA5Mzc1KzAuMjE4NzUrMC4yODEyNSswLjIxODc1KzAuMTA5Mzc1KzAuMDMxMjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWdtYV94ID0gc2lnbWEgPiAwID8gc2lnbWEgOiAoKHNpemUtMSkqMC41IC0gMS4wKSowLjMgKyAwLjg7XG4gICAgICAgICAgICBzY2FsZV8yeCA9IC0wLjUvKHNpZ21hX3gqc2lnbWFfeCk7XG5cbiAgICAgICAgICAgIGZvciggOyBpIDwgc2l6ZTsgKytpIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4ID0gaSAtIChzaXplLTEpKjAuNTtcbiAgICAgICAgICAgICAgICB0ID0gTWF0aC5leHAoc2NhbGVfMngqeCp4KTtcblxuICAgICAgICAgICAgICAgIF9rZXJuZWxbaV0gPSB0O1xuICAgICAgICAgICAgICAgIHN1bSArPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoZGF0YV90eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90KSB7XG4gICAgICAgICAgICAvLyBpbnQgYmFzZWQga2VybmVsXG4gICAgICAgICAgICBzdW0gPSAyNTYuMC9zdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gKF9rZXJuZWxbaV0gKiBzdW0gKyAwLjUpfDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjbGFzc2ljIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMS4wL3N1bTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgICAgICBrZXJuZWxbaV0gPSBfa2VybmVsW2ldICogc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGtlcm5fbm9kZSk7XG4gICAgfVxuXG4gICAgLy8gbW9kZWwgaXMgM3gzIG1hdHJpeF90XG4gICAgcGVyc3BlY3RpdmVfNHBvaW50X3RyYW5zZm9ybShtb2RlbCwgc3JjX3gwLCBzcmNfeTAsIGRzdF94MCwgZHN0X3kwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjX3gxLCBzcmNfeTEsIGRzdF94MSwgZHN0X3kxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjX3gyLCBzcmNfeTIsIGRzdF94MiwgZHN0X3kyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjX3gzLCBzcmNfeTMsIGRzdF94MywgZHN0X3kzKSB7XG4gICAgICAgIHZhciB0MSA9IHNyY194MDtcbiAgICAgICAgdmFyIHQyID0gc3JjX3gyO1xuICAgICAgICB2YXIgdDQgPSBzcmNfeTE7XG4gICAgICAgIHZhciB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdmFyIHQ2ID0gc3JjX3kzO1xuICAgICAgICB2YXIgdDcgPSB0MSAqIHQ2O1xuICAgICAgICB2YXIgdDggPSB0MiAqIHQ3O1xuICAgICAgICB2YXIgdDkgPSBzcmNfeTI7XG4gICAgICAgIHZhciB0MTAgPSB0MSAqIHQ5O1xuICAgICAgICB2YXIgdDExID0gc3JjX3gxO1xuICAgICAgICB2YXIgdDE0ID0gc3JjX3kwO1xuICAgICAgICB2YXIgdDE1ID0gc3JjX3gzO1xuICAgICAgICB2YXIgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB2YXIgdDE4ID0gdDE2ICogdDExO1xuICAgICAgICB2YXIgdDIwID0gdDE1ICogdDExICogdDk7XG4gICAgICAgIHZhciB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdmFyIHQyNCA9IHQxNSAqIHQ5O1xuICAgICAgICB2YXIgdDI1ID0gdDIgKiB0NDtcbiAgICAgICAgdmFyIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHZhciB0MjcgPSB0NiAqIHQxMTtcbiAgICAgICAgdmFyIHQyOCA9IHQ5ICogdDExO1xuICAgICAgICB2YXIgdDMwID0gMS4wIC8gKHQyMS10MjQgLSB0MjUgKyB0MjYgLSB0MjcgKyB0MjgpO1xuICAgICAgICB2YXIgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIHZhciB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHZhciB0NDEgPSB0NCAqIHQxO1xuICAgICAgICB2YXIgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIHZhciB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdmFyIHQ0NiA9IHQxNiAqIHQ5O1xuICAgICAgICB2YXIgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIHZhciB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHZhciB0NTUgPSB0NiAqIHQxNDtcbiAgICAgICAgdmFyIEhyMCA9IC0odDgtdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSHIxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIcjIgPSB0MTtcbiAgICAgICAgdmFyIEhyMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIcjUgPSB0MTQ7XG4gICAgICAgIHZhciBIcjYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIcjcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcbiAgICAgICAgXG4gICAgICAgIHQxID0gZHN0X3gwO1xuICAgICAgICB0MiA9IGRzdF94MjtcbiAgICAgICAgdDQgPSBkc3RfeTE7XG4gICAgICAgIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB0NiA9IGRzdF95MztcbiAgICAgICAgdDcgPSB0MSAqIHQ2O1xuICAgICAgICB0OCA9IHQyICogdDc7XG4gICAgICAgIHQ5ID0gZHN0X3kyO1xuICAgICAgICB0MTAgPSB0MSAqIHQ5O1xuICAgICAgICB0MTEgPSBkc3RfeDE7XG4gICAgICAgIHQxNCA9IGRzdF95MDtcbiAgICAgICAgdDE1ID0gZHN0X3gzO1xuICAgICAgICB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgdDIwID0gdDE1ICogdDExICogdDk7XG4gICAgICAgIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgdDI1ID0gdDIgKiB0NDtcbiAgICAgICAgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIHQyOCA9IHQ5ICogdDExO1xuICAgICAgICB0MzAgPSAxLjAgLyAodDIxLXQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICB2YXIgSGwwID0gLSh0OC10NSArIHQxMCAqIHQxMSAtIHQxMSAqIHQ3IC0gdDE2ICogdDIgKyB0MTggLSB0MjAgKyB0MjEgKiB0MikgKiB0MzA7XG4gICAgICAgIHZhciBIbDEgPSAodDUgLSB0OCAtIHQzMiAqIHQ0ICsgdDMyICogdDkgKyB0MTggLSB0MiAqIHQzNSArIHQyNyAqIHQyIC0gdDIwKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsMiA9IHQxO1xuICAgICAgICB2YXIgSGwzID0gKC10OSAqIHQ3ICsgdDQyICsgdDQzICogdDQgLSB0MTYgKiB0NCArIHQ0NiAtIHQ0OCArIHQyNyAqIHQ5IC0gdDUxKSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNCA9ICgtdDQyICsgdDQxICogdDkgLSB0NTUgKiB0MiArIHQ0NiAtIHQ0OCArIHQ1NSAqIHQxMSArIHQ1MSAtIHQyMSAqIHQ5KSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNSA9IHQxNDtcbiAgICAgICAgdmFyIEhsNiA9ICgtdDEwICsgdDQxICsgdDQzIC0gdDM1ICsgdDI0IC0gdDIxIC0gdDI2ICsgdDI3KSAqIHQzMDtcbiAgICAgICAgdmFyIEhsNyA9ICgtdDcgKyB0MTAgKyB0MTYgLSB0NDMgKyB0MjcgLSB0MjggLSB0MjEgKyB0MjUpICogdDMwO1xuXG4gICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgY29kZSBjb21wdXRlcyBSID0gSGwgKiBpbnZlcnNlIEhyXG4gICAgICAgIHQyID0gSHI0LUhyNypIcjU7XG4gICAgICAgIHQ0ID0gSHIwKkhyNDtcbiAgICAgICAgdDUgPSBIcjAqSHI1O1xuICAgICAgICB0NyA9IEhyMypIcjE7XG4gICAgICAgIHQ4ID0gSHIyKkhyMztcbiAgICAgICAgdDEwID0gSHIxKkhyNjtcbiAgICAgICAgdmFyIHQxMiA9IEhyMipIcjY7XG4gICAgICAgIHQxNSA9IDEuMCAvICh0NC10NSpIcjctdDcrdDgqSHI3K3QxMCpIcjUtdDEyKkhyNCk7XG4gICAgICAgIHQxOCA9IC1IcjMrSHI1KkhyNjtcbiAgICAgICAgdmFyIHQyMyA9IC1IcjMqSHI3K0hyNCpIcjY7XG4gICAgICAgIHQyOCA9IC1IcjErSHIyKkhyNztcbiAgICAgICAgdmFyIHQzMSA9IEhyMC10MTI7XG4gICAgICAgIHQzNSA9IEhyMCpIcjctdDEwO1xuICAgICAgICB0NDEgPSAtSHIxKkhyNStIcjIqSHI0O1xuICAgICAgICB2YXIgdDQ0ID0gdDUtdDg7XG4gICAgICAgIHZhciB0NDcgPSB0NC10NztcbiAgICAgICAgdDQ4ID0gdDIqdDE1O1xuICAgICAgICB2YXIgdDQ5ID0gdDI4KnQxNTtcbiAgICAgICAgdmFyIHQ1MCA9IHQ0MSp0MTU7XG4gICAgICAgIHZhciBtYXQgPSBtb2RlbC5kYXRhO1xuICAgICAgICBtYXRbMF0gPSBIbDAqdDQ4K0hsMSoodDE4KnQxNSktSGwyKih0MjMqdDE1KTtcbiAgICAgICAgbWF0WzFdID0gSGwwKnQ0OStIbDEqKHQzMSp0MTUpLUhsMioodDM1KnQxNSk7XG4gICAgICAgIG1hdFsyXSA9IC1IbDAqdDUwLUhsMSoodDQ0KnQxNSkrSGwyKih0NDcqdDE1KTtcbiAgICAgICAgbWF0WzNdID0gSGwzKnQ0OCtIbDQqKHQxOCp0MTUpLUhsNSoodDIzKnQxNSk7XG4gICAgICAgIG1hdFs0XSA9IEhsMyp0NDkrSGw0Kih0MzEqdDE1KS1IbDUqKHQzNSp0MTUpO1xuICAgICAgICBtYXRbNV0gPSAtSGwzKnQ1MC1IbDQqKHQ0NCp0MTUpK0hsNSoodDQ3KnQxNSk7XG4gICAgICAgIG1hdFs2XSA9IEhsNip0NDgrSGw3Kih0MTgqdDE1KS10MjMqdDE1O1xuICAgICAgICBtYXRbN10gPSBIbDYqdDQ5K0hsNyoodDMxKnQxNSktdDM1KnQxNTtcbiAgICAgICAgbWF0WzhdID0gLUhsNip0NTAtSGw3Kih0NDQqdDE1KSt0NDcqdDE1O1xuICAgIH1cblxuICAgIC8vIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHdhcyBkZXJpdmVkIGZyb20gKkJTRCBzeXN0ZW0gcXNvcnQoKTpcbiAgICAvLyBDb3B5cmlnaHQgKGMpIDE5OTIsIDE5OTNcbiAgICAvLyBUaGUgUmVnZW50cyBvZiB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLiAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBxc29ydChhcnJheSwgbG93LCBoaWdoLCBjbXApIHtcbiAgICAgICAgdmFyIGlzb3J0X3RocmVzaCA9IDc7XG4gICAgICAgIHZhciB0LHRhLHRiLHRjO1xuICAgICAgICB2YXIgc3AgPSAwLGxlZnQ9MCxyaWdodD0wLGk9MCxuPTAsbT0wLHB0cj0wLHB0cjI9MCxkPTA7XG4gICAgICAgIHZhciBsZWZ0MD0wLGxlZnQxPTAscmlnaHQwPTAscmlnaHQxPTAscGl2b3Q9MCxhPTAsYj0wLGM9MCxzd2FwX2NudD0wO1xuXG4gICAgICAgIHZhciBzdGFjayA9IHRoaXMucXNvcnRfc3RhY2s7XG5cbiAgICAgICAgaWYoIChoaWdoLWxvdysxKSA8PSAxICkgcmV0dXJuO1xuXG4gICAgICAgIHN0YWNrWzBdID0gbG93O1xuICAgICAgICBzdGFja1sxXSA9IGhpZ2g7XG5cbiAgICAgICAgd2hpbGUoIHNwID49IDAgKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgbGVmdCA9IHN0YWNrW3NwPDwxXTtcbiAgICAgICAgICAgIHJpZ2h0ID0gc3RhY2tbKHNwPDwxKSsxXTtcbiAgICAgICAgICAgIHNwLS07XG5cbiAgICAgICAgICAgIGZvcig7Oykge1xuICAgICAgICAgICAgICAgIG4gPSAocmlnaHQgLSBsZWZ0KSArIDE7XG5cbiAgICAgICAgICAgICAgICBpZiggbiA8PSBpc29ydF90aHJlc2ggKSB7XG4gICAgICAgICAgICAgICAgLy9pbnNlcnRfc29ydDpcbiAgICAgICAgICAgICAgICAgICAgZm9yKCBwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciggcHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLGFycmF5W3B0cjItMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMl0gPSBhcnJheVtwdHIyLTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjItMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBsZWZ0MCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0MCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQgKyAobj4+MSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIG4gPiA0MCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBuID4+IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gbGVmdCwgYiA9IGxlZnQgKyBkLCBjID0gbGVmdCArIChkPDwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sdGIgPSBhcnJheVtiXSx0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGNtcCh0YSwgdGIpID8gKGNtcCh0YiwgdGMpID8gYiA6IChjbXAodGEsIHRjKSA/IGMgOiBhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBwaXZvdCAtIGQsIGIgPSBwaXZvdCwgYyA9IHBpdm90ICsgZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sdGIgPSBhcnJheVtiXSx0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gcmlnaHQgLSAoZDw8MSksIGIgPSByaWdodCAtIGQsIGMgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbYV0sdGIgPSBhcnJheVtiXSx0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IGxlZnQsIGIgPSBwaXZvdCwgYyA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLHRiID0gYXJyYXlbYl0sdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuICAgICAgICAgICAgICAgICAgICBpZiggcGl2b3QgIT0gbGVmdDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcGl2b3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcGl2b3RdID0gYXJyYXlbbGVmdDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDBdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90ID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQxID0gbGVmdDAgKyAxO1xuICAgICAgICAgICAgICAgICAgICByaWdodCA9IHJpZ2h0MSA9IHJpZ2h0MDtcblxuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKDs7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSggbGVmdCA8PSByaWdodCAmJiAhY21wKHRhLCBhcnJheVtsZWZ0XSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoICFjbXAoYXJyYXlbbGVmdF0sIHRhKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGxlZnQgPiBsZWZ0MSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MV0gPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQxKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGxlZnQgPD0gcmlnaHQgJiYgIWNtcChhcnJheVtyaWdodF0sIHRhKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggIWNtcCh0YSwgYXJyYXlbcmlnaHRdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHJpZ2h0IDwgcmlnaHQxICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3JpZ2h0MV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtyaWdodDFdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2NudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0MS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbGVmdCA+IHJpZ2h0ICkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiggc3dhcF9jbnQgPT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dvdG8gaW5zZXJ0X3NvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoIHB0ciA9IGxlZnQgKyAxOyBwdHIgPD0gcmlnaHQ7IHB0cisrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciggcHRyMiA9IHB0cjsgcHRyMiA+IGxlZnQgJiYgY21wKGFycmF5W3B0cjJdLGFycmF5W3B0cjItMV0pOyBwdHIyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3B0cjJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjItMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjItMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKCAobGVmdDEgLSBsZWZ0MCksIChsZWZ0IC0gbGVmdDEpICk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAobGVmdC1uKXwwO1xuICAgICAgICAgICAgICAgICAgICBmb3IoIGkgPSAwOyBpIDwgbjsgKytpLCsrbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0MCtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQwK2ldID0gYXJyYXlbbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVttXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuID0gTWF0aC5taW4oIChyaWdodDAgLSByaWdodDEpLCAocmlnaHQxIC0gcmlnaHQpICk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAocmlnaHQwLW4rMSl8MDtcbiAgICAgICAgICAgICAgICAgICAgZm9yKCBpID0gMDsgaSA8IG47ICsraSwrK20gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdCtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQraV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuID0gKGxlZnQgLSBsZWZ0MSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAocmlnaHQxIC0gcmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiggbiA+IDEgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbSA+IDEgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIG4gPiBtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK3NwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzcDw8MV0gPSBsZWZ0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbKHNwPDwxKSsxXSA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodDAgLSBtICsgMSwgcmlnaHQgPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3A8PDFdID0gcmlnaHQwIC0gbSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWyhzcDw8MSkrMV0gPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IGxlZnQwICsgbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiggbSA+IDEgKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0MCAtIG0gKyAxLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWVkaWFuKGFycmF5LCBsb3csIGhpZ2gpIHtcbiAgICAgICAgdmFyIHc7XG4gICAgICAgIHZhciBtaWRkbGU9MCxsbD0wLGhoPTAsbWVkaWFuPShsb3craGlnaCk+PjE7XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgIGlmIChoaWdoIDw9IGxvdykgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICBpZiAoaGlnaCA9PSAobG93ICsgMSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W21lZGlhbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaWRkbGUgPSAoKGxvdyArIGhpZ2gpID4+IDEpO1xuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVttaWRkbGVdID4gYXJyYXlbbG93XSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGwgPSAobG93ICsgMSk7XG4gICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsbF07XG4gICAgICAgICAgICBhcnJheVtsbF0gPSB3O1xuICAgICAgICAgICAgaGggPSBoaWdoO1xuICAgICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgICAgIGRvICsrbGw7IHdoaWxlIChhcnJheVtsb3ddID4gYXJyYXlbbGxdKTtcbiAgICAgICAgICAgICAgICBkbyAtLWhoOyB3aGlsZSAoYXJyYXlbaGhdID4gYXJyYXlbbG93XSk7XG4gICAgICAgICAgICAgICAgaWYgKGhoIDwgbGwpIGJyZWFrO1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsbF07XG4gICAgICAgICAgICAgICAgYXJyYXlbbGxdID0gYXJyYXlbaGhdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaF07XG4gICAgICAgICAgICBhcnJheVtoaF0gPSB3O1xuICAgICAgICAgICAgaWYgKGhoIDw9IG1lZGlhbilcbiAgICAgICAgICAgICAgICBsb3cgPSBsbDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGhoID49IG1lZGlhbilcbiAgICAgICAgICAgICAgICBoaWdoID0gKGhoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdG1hdGgge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBpZGVudGl0eShNLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IHZhbHVlID0gMTsgfVxuICAgICAgICB2YXIgc3JjID0gTS5kYXRhO1xuICAgICAgICB2YXIgcm93cyA9IE0ucm93cywgY29scyA9IE0uY29scywgY29sc18xID0gKGNvbHMgKyAxKSB8IDA7XG4gICAgICAgIHZhciBsZW4gPSByb3dzICogY29scztcbiAgICAgICAgdmFyIGsgPSBsZW47XG4gICAgICAgIHdoaWxlICgtLWxlbiA+PSAwKSBzcmNbbGVuXSA9IDAuMDtcbiAgICAgICAgbGVuID0gaztcbiAgICAgICAgayA9IDA7XG4gICAgICAgIHdoaWxlIChrIDwgbGVuKSB7XG4gICAgICAgICAgICBzcmNba10gPSB2YWx1ZTtcbiAgICAgICAgICAgIGsgPSBrICsgY29sc18xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNwb3NlKEF0LCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIG5yb3dzID0gQS5yb3dzLCBuY29scyA9IEEuY29scztcbiAgICAgICAgdmFyIEFpID0gMCwgQXRpID0gMCwgcEF0ID0gMDtcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBhdGQgPSBBdC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEF0aSArPSAxLCBBaSArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwQXQgPSBBdGk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IHBBdCArPSBucm93cywgaisrKSBhdGRbcEF0XSA9IGFkW0FpICsgal07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseShDLCBBLCBCKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgcF9CID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtY29scyA9IEIuY29scztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXAgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgZm9yIChwX0IgPSAwLCBqID0gMDsgaiA8IG1jb2xzOyBDcCsrLCBwX0IrKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEIgPSBwX0I7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5jb2xzOyBwQSsrLCBwQiArPSBtY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQidcbiAgICBtdWx0aXBseV9BQnQoQywgQSwgQikge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbXJvd3MgPSBCLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocEIgPSAwLCBqID0gMDsgaiA8IG1yb3dzOyBDcCsrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IHBBKyssIHBCKyssIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBCXG4gICAgbXVsdGlwbHlfQXRCKEMsIEEsIEIpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0IgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1jb2xzID0gQi5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBBcCsrLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocF9CID0gMCwgaiA9IDA7IGogPCBtY29sczsgQ3ArKywgcF9CKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBCID0gcF9CO1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBucm93czsgcEEgKz0gbmNvbHMsIHBCICs9IG1jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBBJ1xuICAgIG11bHRpcGx5X0FBdChDLCBBKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcENkaWFnID0gMCwgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBDID0gMCwgcEN0ID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBwQ2RpYWcgKz0gbnJvd3MgKyAxLCBwX0EgPSBwQSwgaSsrKSB7XG4gICAgICAgICAgICBwQyA9IHBDZGlhZztcbiAgICAgICAgICAgIHBDdCA9IHBDZGlhZztcbiAgICAgICAgICAgIHBCID0gcF9BO1xuICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IG5yb3dzOyBwQysrLCBwQ3QgKz0gbnJvd3MsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEErK10gKiBhZFtwQisrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbcENdID0gc3VtXG4gICAgICAgICAgICAgICAgY2RbcEN0XSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEFcbiAgICBtdWx0aXBseV9BdEEoQywgQSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIHBfQSA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0MgPSAwLCBwQyA9IDAsIHBfQ0MgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IHBfQyArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwX0EgPSBpO1xuICAgICAgICAgICAgcF9DQyA9IHBfQyArIGk7XG4gICAgICAgICAgICBwQyA9IHBfQ0M7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbmNvbHM7IHBDKyssIHBfQ0MgKz0gbmNvbHMsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHBCID0gajtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5yb3dzOyBwQSArPSBuY29scywgcEIgKz0gbmNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYWRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtwQ10gPSBzdW1cbiAgICAgICAgICAgICAgICBjZFtwX0NDXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhcmlvdXMgc21hbGwgbWF0cml4IG9wZXJhdGlvbnNcbiAgICBpZGVudGl0eV8zeDMoTSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyB2YWx1ZSA9IDE7IH1cbiAgICAgICAgdmFyIGR0ID0gTS5kYXRhO1xuICAgICAgICBkdFswXSA9IGR0WzRdID0gZHRbOF0gPSB2YWx1ZTtcbiAgICAgICAgZHRbMV0gPSBkdFsyXSA9IGR0WzNdID0gMDtcbiAgICAgICAgZHRbNV0gPSBkdFs2XSA9IGR0WzddID0gMDtcbiAgICB9XG5cbiAgICBpbnZlcnRfM3gzKGZyb20sIHRvKSB7XG4gICAgICAgIHZhciBBID0gZnJvbS5kYXRhLCBpbnZBID0gdG8uZGF0YTtcbiAgICAgICAgdmFyIHQxID0gQVs0XTtcbiAgICAgICAgdmFyIHQyID0gQVs4XTtcbiAgICAgICAgdmFyIHQ0ID0gQVs1XTtcbiAgICAgICAgdmFyIHQ1ID0gQVs3XTtcbiAgICAgICAgdmFyIHQ4ID0gQVswXTtcblxuICAgICAgICB2YXIgdDkgPSB0OCAqIHQxO1xuICAgICAgICB2YXIgdDExID0gdDggKiB0NDtcbiAgICAgICAgdmFyIHQxMyA9IEFbM107XG4gICAgICAgIHZhciB0MTQgPSBBWzFdO1xuICAgICAgICB2YXIgdDE1ID0gdDEzICogdDE0O1xuICAgICAgICB2YXIgdDE3ID0gQVsyXTtcbiAgICAgICAgdmFyIHQxOCA9IHQxMyAqIHQxNztcbiAgICAgICAgdmFyIHQyMCA9IEFbNl07XG4gICAgICAgIHZhciB0MjEgPSB0MjAgKiB0MTQ7XG4gICAgICAgIHZhciB0MjMgPSB0MjAgKiB0MTc7XG4gICAgICAgIHZhciB0MjYgPSAxLjAgLyAodDkgKiB0MiAtIHQxMSAqIHQ1IC0gdDE1ICogdDIgKyB0MTggKiB0NSArIHQyMSAqIHQ0IC0gdDIzICogdDEpO1xuICAgICAgICBpbnZBWzBdID0gKHQxICogdDIgLSB0NCAqIHQ1KSAqIHQyNjtcbiAgICAgICAgaW52QVsxXSA9IC0odDE0ICogdDIgLSB0MTcgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMl0gPSAtKC10MTQgKiB0NCArIHQxNyAqIHQxKSAqIHQyNjtcbiAgICAgICAgaW52QVszXSA9IC0odDEzICogdDIgLSB0NCAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbNF0gPSAodDggKiB0MiAtIHQyMykgKiB0MjY7XG4gICAgICAgIGludkFbNV0gPSAtKHQxMSAtIHQxOCkgKiB0MjY7XG4gICAgICAgIGludkFbNl0gPSAtKC10MTMgKiB0NSArIHQxICogdDIwKSAqIHQyNjtcbiAgICAgICAgaW52QVs3XSA9IC0odDggKiB0NSAtIHQyMSkgKiB0MjY7XG4gICAgICAgIGludkFbOF0gPSAodDkgLSB0MTUpICogdDI2O1xuICAgIH1cblxuICAgIC8vIEMgPSBBICogQlxuICAgIG11bHRpcGx5XzN4MyhDLCBBLCBCKSB7XG4gICAgICAgIHZhciBDZCA9IEMuZGF0YSwgQWQgPSBBLmRhdGEsIEJkID0gQi5kYXRhO1xuICAgICAgICB2YXIgbTFfMCA9IEFkWzBdLCBtMV8xID0gQWRbMV0sIG0xXzIgPSBBZFsyXTtcbiAgICAgICAgdmFyIG0xXzMgPSBBZFszXSwgbTFfNCA9IEFkWzRdLCBtMV81ID0gQWRbNV07XG4gICAgICAgIHZhciBtMV82ID0gQWRbNl0sIG0xXzcgPSBBZFs3XSwgbTFfOCA9IEFkWzhdO1xuXG4gICAgICAgIHZhciBtMl8wID0gQmRbMF0sIG0yXzEgPSBCZFsxXSwgbTJfMiA9IEJkWzJdO1xuICAgICAgICB2YXIgbTJfMyA9IEJkWzNdLCBtMl80ID0gQmRbNF0sIG0yXzUgPSBCZFs1XTtcbiAgICAgICAgdmFyIG0yXzYgPSBCZFs2XSwgbTJfNyA9IEJkWzddLCBtMl84ID0gQmRbOF07XG5cbiAgICAgICAgQ2RbMF0gPSBtMV8wICogbTJfMCArIG0xXzEgKiBtMl8zICsgbTFfMiAqIG0yXzY7XG4gICAgICAgIENkWzFdID0gbTFfMCAqIG0yXzEgKyBtMV8xICogbTJfNCArIG0xXzIgKiBtMl83O1xuICAgICAgICBDZFsyXSA9IG0xXzAgKiBtMl8yICsgbTFfMSAqIG0yXzUgKyBtMV8yICogbTJfODtcbiAgICAgICAgQ2RbM10gPSBtMV8zICogbTJfMCArIG0xXzQgKiBtMl8zICsgbTFfNSAqIG0yXzY7XG4gICAgICAgIENkWzRdID0gbTFfMyAqIG0yXzEgKyBtMV80ICogbTJfNCArIG0xXzUgKiBtMl83O1xuICAgICAgICBDZFs1XSA9IG0xXzMgKiBtMl8yICsgbTFfNCAqIG0yXzUgKyBtMV81ICogbTJfODtcbiAgICAgICAgQ2RbNl0gPSBtMV82ICogbTJfMCArIG0xXzcgKiBtMl8zICsgbTFfOCAqIG0yXzY7XG4gICAgICAgIENkWzddID0gbTFfNiAqIG0yXzEgKyBtMV83ICogbTJfNCArIG0xXzggKiBtMl83O1xuICAgICAgICBDZFs4XSA9IG0xXzYgKiBtMl8yICsgbTFfNyAqIG0yXzUgKyBtMV84ICogbTJfODtcbiAgICB9XG5cbiAgICBtYXQzeDNfZGV0ZXJtaW5hbnQoTSkge1xuICAgICAgICB2YXIgbWQgPSBNLmRhdGE7XG4gICAgICAgIHJldHVybiBtZFswXSAqIG1kWzRdICogbWRbOF0gLVxuICAgICAgICAgICAgbWRbMF0gKiBtZFs1XSAqIG1kWzddIC1cbiAgICAgICAgICAgIG1kWzNdICogbWRbMV0gKiBtZFs4XSArXG4gICAgICAgICAgICBtZFszXSAqIG1kWzJdICogbWRbN10gK1xuICAgICAgICAgICAgbWRbNl0gKiBtZFsxXSAqIG1kWzVdIC1cbiAgICAgICAgICAgIG1kWzZdICogbWRbMl0gKiBtZFs0XTtcbiAgICB9XG5cbiAgICBkZXRlcm1pbmFudF8zeDMoTTExLCBNMTIsIE0xMyxcbiAgICAgICAgTTIxLCBNMjIsIE0yMyxcbiAgICAgICAgTTMxLCBNMzIsIE0zMykge1xuICAgICAgICByZXR1cm4gTTExICogTTIyICogTTMzIC0gTTExICogTTIzICogTTMyIC1cbiAgICAgICAgICAgIE0yMSAqIE0xMiAqIE0zMyArIE0yMSAqIE0xMyAqIE0zMiArXG4gICAgICAgICAgICBNMzEgKiBNMTIgKiBNMjMgLSBNMzEgKiBNMTMgKiBNMjI7XG4gICAgfVxufSIsImltcG9ydCBkYXRhX3R5cGUgZnJvbSAnLi4vZGF0YV90eXBlL2RhdGFfdHlwZS5qcydcbmltcG9ydCBkYXRhX3QgZnJvbSAnLi4vbm9kZV91dGlscy9kYXRhX3QuanMnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdHJpeF90IHtcbiAgICBjb25zdHJ1Y3RvcihjLCByLCBfZGF0YV90eXBlLCBfZGF0YV9idWZmZXIpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZShfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMuZHQuX2dldF9jaGFubmVsKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jb2xzID0gYyB8IDA7XG4gICAgICAgIHRoaXMucm93cyA9IHIgfCAwO1xuICAgICAgICBpZiAodHlwZW9mIF9kYXRhX2J1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBfZGF0YV9idWZmZXI7XG4gICAgICAgICAgICAvLyBkYXRhIHVzZXIgYXNrZWQgZm9yXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGxvY2F0ZSgpIHtcbiAgICAgICAgLy8gY2xlYXIgcmVmZXJlbmNlc1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICBkZWxldGUgdGhpcy5idWZmZXI7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IGRhdGFfdCgodGhpcy5jb2xzICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiB0aGlzLmNoYW5uZWwpICogdGhpcy5yb3dzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgfVxuICAgIGNvcHlfdG8ob3RoZXIpIHtcbiAgICAgICAgdmFyIG9kID0gb3RoZXIuZGF0YSwgdGQgPSB0aGlzLmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgbiA9ICh0aGlzLmNvbHMgKiB0aGlzLnJvd3MgKiB0aGlzLmNoYW5uZWwpIHwgMDtcbiAgICAgICAgZm9yICg7IGkgPCBuIC0gNDsgaSArPSA0KSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICAgICAgb2RbaSArIDFdID0gdGRbaSArIDFdO1xuICAgICAgICAgICAgb2RbaSArIDJdID0gdGRbaSArIDJdO1xuICAgICAgICAgICAgb2RbaSArIDNdID0gdGRbaSArIDNdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2l6ZShjLCByLCBjaCkge1xuICAgICAgICBpZiAodHlwZW9mIGNoID09PSBcInVuZGVmaW5lZFwiKSB7IGNoID0gdGhpcy5jaGFubmVsOyB9XG4gICAgICAgIC8vIHJlbG9jYXRlIGJ1ZmZlciBvbmx5IGlmIG5ldyBzaXplIGRvZXNudCBmaXRcbiAgICAgICAgdmFyIG5ld19zaXplID0gKGMgKiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodGhpcy50eXBlKSAqIGNoKSAqIHI7XG4gICAgICAgIGlmIChuZXdfc2l6ZSA+IHRoaXMuYnVmZmVyLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBtYXRyaXhfdCBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBtYXRoIGZyb20gJy4uL21hdGgvbWF0aC5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1vdGlvbl9lc3RpbWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgIH1cblxuICAgIGdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbmVlZF9jbnQsIG1heF9jbnQsIGZyb21fc3ViLCB0b19zdWIpIHtcbiAgICAgICAgdmFyIG1heF90cnkgPSAxMDAwO1xuICAgICAgICB2YXIgaW5kaWNlcyA9IFtdO1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBzc2l0ZXIgPSAwLCBpZHhfaSA9IDAsIG9rID0gZmFsc2U7XG4gICAgICAgIGZvciAoOyBzc2l0ZXIgPCBtYXhfdHJ5OyArK3NzaXRlcikge1xuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG5lZWRfY250ICYmIHNzaXRlciA8IG1heF90cnk7KSB7XG4gICAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZHhfaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCFvaykge1xuICAgICAgICAgICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlkeF9pID0gaW5kaWNlc1tpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heF9jbnQpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeF9pID09IGluZGljZXNbal0pIHsgb2sgPSBmYWxzZTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcm9tX3N1YltpXSA9IGZyb21baWR4X2ldO1xuICAgICAgICAgICAgICAgIHRvX3N1YltpXSA9IHRvW2lkeF9pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWtlcm5lbC5jaGVja19zdWJzZXQoZnJvbV9zdWIsIHRvX3N1YiwgaSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNzaXRlcisrO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKGkgPT0gbmVlZF9jbnQgJiYgc3NpdGVyIDwgbWF4X3RyeSk7XG4gICAgfVxuXG4gICAgZmluZF9pbmxpZXJzKGtlcm5lbCwgbW9kZWwsIGZyb20sIHRvLCBjb3VudCwgdGhyZXNoLCBlcnIsIG1hc2spIHtcbiAgICAgICAgdmFyIG51bWlubGllcnMgPSAwLCBpID0gMCwgZiA9IDA7XG4gICAgICAgIHZhciB0ID0gdGhyZXNoICogdGhyZXNoO1xuXG4gICAgICAgIGtlcm5lbC5lcnJvcihmcm9tLCB0bywgbW9kZWwsIGVyciwgY291bnQpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgZiA9IGVycltpXSA8PSB0O1xuICAgICAgICAgICAgbWFza1tpXSA9IGY7XG4gICAgICAgICAgICBudW1pbmxpZXJzICs9IGY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWlubGllcnM7XG4gICAgfVxuXG4gICAgcmFuc2FjKHBhcmFtcywga2VybmVsLCBmcm9tLCB0bywgY291bnQsIG1vZGVsLCBtYXNrLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlcnMgPT09IFwidW5kZWZpbmVkXCIpIHsgbWF4X2l0ZXJzID0gMTAwMDsgfVxuXG4gICAgICAgIGlmIChjb3VudCA8IHBhcmFtcy5zaXplKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1vZGVsX3BvaW50cyA9IHBhcmFtcy5zaXplO1xuICAgICAgICB2YXIgbml0ZXJzID0gbWF4X2l0ZXJzLCBpdGVyID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBzdWJzZXQwID0gW107XG4gICAgICAgIHZhciBzdWJzZXQxID0gW107XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYyA9IG1vZGVsLmNvbHMsIG1yID0gbW9kZWwucm93cztcbiAgICAgICAgdmFyIGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICB2YXIgbV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtYyAqIG1yKSA8PCAzKTtcbiAgICAgICAgdmFyIG1zX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQpO1xuICAgICAgICB2YXIgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIHZhciBNID0gbmV3IG1hdHJpeF90KG1jLCBtciwgZHQsIG1fYnVmZi5kYXRhKTtcbiAgICAgICAgdmFyIGN1cnJfbWFzayA9IG5ldyBtYXRyaXhfdChjb3VudCwgMSwgSlNGRUFUX0NPTlNUQU5UUy5VOEMxX3QsIG1zX2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIGlubGllcnNfbWF4ID0gLTEsIG51bWlubGllcnMgPSAwO1xuICAgICAgICB2YXIgbm1vZGVscyA9IDA7XG5cbiAgICAgICAgdmFyIGVyciA9IGVycl9idWZmLmYzMjtcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKGNvdW50ID09IG1vZGVsX3BvaW50cykge1xuICAgICAgICAgICAgaWYgKGtlcm5lbC5ydW4oZnJvbSwgdG8sIE0sIGNvdW50KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1jb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2suZGF0YVtjb3VudF0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBuaXRlcnM7ICsraXRlcikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3Vic2V0XG4gICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBtb2RlbF9wb2ludHMsIGNvdW50LCBzdWJzZXQwLCBzdWJzZXQxKTtcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5tb2RlbHMgPSBrZXJuZWwucnVuKHN1YnNldDAsIHN1YnNldDEsIE0sIG1vZGVsX3BvaW50cyk7XG4gICAgICAgICAgICBpZiAobm1vZGVscyA8PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBtdWx0aW1vZGVsIG91dHB1dFxuXG4gICAgICAgICAgICBudW1pbmxpZXJzID0gZmluZF9pbmxpZXJzKGtlcm5lbCwgTSwgZnJvbSwgdG8sIGNvdW50LCBwYXJhbXMudGhyZXNoLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcblxuICAgICAgICAgICAgaWYgKG51bWlubGllcnMgPiBNYXRoLm1heChpbmxpZXJzX21heCwgbW9kZWxfcG9pbnRzIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgICAgIGlubGllcnNfbWF4ID0gbnVtaW5saWVycztcbiAgICAgICAgICAgICAgICBpZiAobWFzaykgY3Vycl9tYXNrLmNvcHlfdG8obWFzayk7XG4gICAgICAgICAgICAgICAgbml0ZXJzID0gcGFyYW1zLnVwZGF0ZV9pdGVycygoY291bnQgLSBudW1pbmxpZXJzKSAvIGNvdW50LCBuaXRlcnMpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbG1lZHMocGFyYW1zLCBrZXJuZWwsIGZyb20sIHRvLCBjb3VudCwgbW9kZWwsIG1hc2ssIG1heF9pdGVycykge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVycyA9PT0gXCJ1bmRlZmluZWRcIikgeyBtYXhfaXRlcnMgPSAxMDAwOyB9XG5cbiAgICAgICAgaWYgKGNvdW50IDwgcGFyYW1zLnNpemUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgbW9kZWxfcG9pbnRzID0gcGFyYW1zLnNpemU7XG4gICAgICAgIHZhciBuaXRlcnMgPSBtYXhfaXRlcnMsIGl0ZXIgPSAwO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHZhciBfbWF0aCA9IG5ldyBtYXRoKCk7XG5cbiAgICAgICAgdmFyIHN1YnNldDAgPSBbXTtcbiAgICAgICAgdmFyIHN1YnNldDEgPSBbXTtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1jID0gbW9kZWwuY29scywgbXIgPSBtb2RlbC5yb3dzO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuXG4gICAgICAgIHZhciBtX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG1jICogbXIpIDw8IDMpO1xuICAgICAgICB2YXIgbXNfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCk7XG4gICAgICAgIHZhciBlcnJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihjb3VudCA8PCAyKTtcbiAgICAgICAgdmFyIE0gPSBuZXcgbWF0cml4X3QobWMsIG1yLCBkdCwgbV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgY3Vycl9tYXNrID0gbmV3IG1hdHJpeF90KGNvdW50LCAxLCBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QsIG1zX2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgdmFyIG51bWlubGllcnMgPSAwO1xuICAgICAgICB2YXIgbm1vZGVscyA9IDA7XG5cbiAgICAgICAgdmFyIGVyciA9IGVycl9idWZmLmYzMjtcbiAgICAgICAgdmFyIG1pbl9tZWRpYW4gPSAxMDAwMDAwMDAwLjAsIHNpZ21hID0gMC4wLCBtZWRpYW4gPSAwLjA7XG5cbiAgICAgICAgcGFyYW1zLmVwcyA9IDAuNDU7XG4gICAgICAgIG5pdGVycyA9IHBhcmFtcy51cGRhdGVfaXRlcnMocGFyYW1zLmVwcywgbml0ZXJzKTtcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKGNvdW50ID09IG1vZGVsX3BvaW50cykge1xuICAgICAgICAgICAgaWYgKGtlcm5lbC5ydW4oZnJvbSwgdG8sIE0sIGNvdW50KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1jb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2suZGF0YVtjb3VudF0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBuaXRlcnM7ICsraXRlcikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3Vic2V0XG4gICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBtb2RlbF9wb2ludHMsIGNvdW50LCBzdWJzZXQwLCBzdWJzZXQxKTtcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5tb2RlbHMgPSBrZXJuZWwucnVuKHN1YnNldDAsIHN1YnNldDEsIE0sIG1vZGVsX3BvaW50cyk7XG4gICAgICAgICAgICBpZiAobm1vZGVscyA8PSAwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBtdWx0aW1vZGVsIG91dHB1dFxuXG4gICAgICAgICAgICBrZXJuZWwuZXJyb3IoZnJvbSwgdG8sIE0sIGVyciwgY291bnQpO1xuICAgICAgICAgICAgbWVkaWFuID0gX21hdGgubWVkaWFuKGVyciwgMCwgY291bnQgLSAxKTtcblxuICAgICAgICAgICAgaWYgKG1lZGlhbiA8IG1pbl9tZWRpYW4pIHtcbiAgICAgICAgICAgICAgICBtaW5fbWVkaWFuID0gbWVkaWFuO1xuICAgICAgICAgICAgICAgIE0uY29weV90byhtb2RlbCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHNpZ21hID0gMi41ICogMS40ODI2ICogKDEgKyA1LjAgLyAoY291bnQgLSBtb2RlbF9wb2ludHMpKSAqIE1hdGguc3FydChtaW5fbWVkaWFuKTtcbiAgICAgICAgICAgIHNpZ21hID0gTWF0aC5tYXgoc2lnbWEsIDAuMDAxKTtcblxuICAgICAgICAgICAgbnVtaW5saWVycyA9IGZpbmRfaW5saWVycyhrZXJuZWwsIG1vZGVsLCBmcm9tLCB0bywgY291bnQsIHNpZ21hLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtaW5saWVycyA+PSBtb2RlbF9wb2ludHM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCBtYXRyaXhfdCBmcm9tICcuLi9tYXRyaXhfdC9tYXRyaXhfdC5qcydcbmltcG9ydCBjYWNoZSBmcm9tICcuLi9jYWNoZS9jYWNoZS5qcydcbmltcG9ydCBtYXRtYXRoIGZyb20gJy4uL21hdG1hdGgvbWF0bWF0aC5qcydcbmltcG9ydCBsaW5hbGcgZnJvbSAnLi4vbGluYWxnL2xpbmFsZy5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuXG5leHBvcnQgY2xhc3MgbW90aW9uX21vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5UMCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5UMSA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5BdEEgPSBuZXcgbWF0cml4X3QoNiwgNiwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuQXRCID0gbmV3IG1hdHJpeF90KDYsIDEsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgIH1cbiAgICBzcXIoeCkge1xuICAgICAgICByZXR1cm4geCAqIHg7XG4gICAgfVxuXG4gICAgLy8gZG9lcyBpc290cm9waWMgbm9ybWFsaXphdGlvblxuICAgIGlzb19ub3JtYWxpemVfcG9pbnRzKGZyb20sIHRvLCBUMCwgVDEsIGNvdW50KSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN4MCA9IDAuMCwgY3kwID0gMC4wLCBkMCA9IDAuMCwgczAgPSAwLjA7XG4gICAgICAgIHZhciBjeDEgPSAwLjAsIGN5MSA9IDAuMCwgZDEgPSAwLjAsIHMxID0gMC4wO1xuICAgICAgICB2YXIgZHggPSAwLjAsIGR5ID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgY3gwICs9IGZyb21baV0ueDtcbiAgICAgICAgICAgIGN5MCArPSBmcm9tW2ldLnk7XG4gICAgICAgICAgICBjeDEgKz0gdG9baV0ueDtcbiAgICAgICAgICAgIGN5MSArPSB0b1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgY3gwIC89IGNvdW50OyBjeTAgLz0gY291bnQ7XG4gICAgICAgIGN4MSAvPSBjb3VudDsgY3kxIC89IGNvdW50O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBkeCA9IGZyb21baV0ueCAtIGN4MDtcbiAgICAgICAgICAgIGR5ID0gZnJvbVtpXS55IC0gY3kwO1xuICAgICAgICAgICAgZDAgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgIGR4ID0gdG9baV0ueCAtIGN4MTtcbiAgICAgICAgICAgIGR5ID0gdG9baV0ueSAtIGN5MTtcbiAgICAgICAgICAgIGQxICs9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIH1cblxuICAgICAgICBkMCAvPSBjb3VudDsgZDEgLz0gY291bnQ7XG5cbiAgICAgICAgczAgPSBNYXRoLlNRUlQyIC8gZDA7IHMxID0gTWF0aC5TUVJUMiAvIGQxO1xuXG4gICAgICAgIFQwWzBdID0gVDBbNF0gPSBzMDtcbiAgICAgICAgVDBbMl0gPSAtY3gwICogczA7XG4gICAgICAgIFQwWzVdID0gLWN5MCAqIHMwO1xuICAgICAgICBUMFsxXSA9IFQwWzNdID0gVDBbNl0gPSBUMFs3XSA9IDAuMDtcbiAgICAgICAgVDBbOF0gPSAxLjA7XG5cbiAgICAgICAgVDFbMF0gPSBUMVs0XSA9IHMxO1xuICAgICAgICBUMVsyXSA9IC1jeDEgKiBzMTtcbiAgICAgICAgVDFbNV0gPSAtY3kxICogczE7XG4gICAgICAgIFQxWzFdID0gVDFbM10gPSBUMVs2XSA9IFQxWzddID0gMC4wO1xuICAgICAgICBUMVs4XSA9IDEuMDtcbiAgICB9XG5cbiAgICBoYXZlX2NvbGxpbmVhcl9wb2ludHMocG9pbnRzLCBjb3VudCkge1xuICAgICAgICB2YXIgaiA9IDAsIGsgPSAwLCBpID0gKGNvdW50IC0gMSkgfCAwO1xuICAgICAgICB2YXIgZHgxID0gMC4wLCBkeTEgPSAwLjAsIGR4MiA9IDAuMCwgZHkyID0gMC4wO1xuXG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIGktdGggc2VsZWN0ZWQgcG9pbnQgZG9lcyBub3QgYmVsb25nXG4gICAgICAgIC8vIHRvIGEgbGluZSBjb25uZWN0aW5nIHNvbWUgcHJldmlvdXNseSBzZWxlY3RlZCBwb2ludHNcbiAgICAgICAgZm9yICg7IGogPCBpOyArK2opIHtcbiAgICAgICAgICAgIGR4MSA9IHBvaW50c1tqXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICBkeTEgPSBwb2ludHNbal0ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGo7ICsraykge1xuICAgICAgICAgICAgICAgIGR4MiA9IHBvaW50c1trXS54IC0gcG9pbnRzW2ldLng7XG4gICAgICAgICAgICAgICAgZHkyID0gcG9pbnRzW2tdLnkgLSBwb2ludHNbaV0ueTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgyICogZHkxIC0gZHkyICogZHgxKSA8PSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAoTWF0aC5hYnMoZHgxKSArIE1hdGguYWJzKGR5MSkgKyBNYXRoLmFicyhkeDIpICsgTWF0aC5hYnMoZHkyKSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgY2xhc3MgYWZmaW5lMmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgIH1cbiAgICBydW4oZnJvbSwgdG8sIG1vZGVsLCBjb3VudCkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwO1xuICAgICAgICB2YXIgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgICAgICB2YXIgbWQgPSBtb2RlbC5kYXRhLCB0MGQgPSB0aGlzLlQwLmRhdGEsIHQxZCA9IHRoaXMuVDEuZGF0YTtcbiAgICAgICAgdmFyIHB0MCwgcHQxLCBweCA9IDAuMCwgcHkgPSAwLjA7XG4gICAgICAgIHZhciBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgICAgIHZhciBfbGluYWxnID0gbmV3IGxpbmFsZygpO1xuXG4gICAgICAgIHRoaXMuaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbSwgdG8sIHQwZCwgdDFkLCBjb3VudCk7XG5cbiAgICAgICAgdmFyIGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMiAqIGNvdW50ICogNikgPDwgMyk7XG4gICAgICAgIHZhciBiX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKDIgKiBjb3VudCkgPDwgMyk7XG5cbiAgICAgICAgdmFyIGFfbXQgPSBuZXcgbWF0cml4X3QoNiwgMiAqIGNvdW50LCBkdCwgYV9idWZmLmRhdGEpO1xuICAgICAgICB2YXIgYl9tdCA9IG5ldyBtYXRyaXhfdCgxLCAyICogY291bnQsIGR0LCBiX2J1ZmYuZGF0YSk7XG4gICAgICAgIHZhciBhZCA9IGFfbXQuZGF0YSwgYmQgPSBiX210LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHB4ID0gdDBkWzBdICogcHQwLnggKyB0MGRbMV0gKiBwdDAueSArIHQwZFsyXTtcbiAgICAgICAgICAgIHB5ID0gdDBkWzNdICogcHQwLnggKyB0MGRbNF0gKiBwdDAueSArIHQwZFs1XTtcblxuICAgICAgICAgICAgaiA9IGkgKiAyICogNjtcbiAgICAgICAgICAgIGFkW2pdID0gcHgsIGFkW2ogKyAxXSA9IHB5LCBhZFtqICsgMl0gPSAxLjAsIGFkW2ogKyAzXSA9IDAuMCwgYWRbaiArIDRdID0gMC4wLCBhZFtqICsgNV0gPSAwLjA7XG5cbiAgICAgICAgICAgIGogKz0gNjtcbiAgICAgICAgICAgIGFkW2pdID0gMC4wLCBhZFtqICsgMV0gPSAwLjAsIGFkW2ogKyAyXSA9IDAuMCwgYWRbaiArIDNdID0gcHgsIGFkW2ogKyA0XSA9IHB5LCBhZFtqICsgNV0gPSAxLjA7XG5cbiAgICAgICAgICAgIGJkW2kgPDwgMV0gPSB0MWRbMF0gKiBwdDEueCArIHQxZFsxXSAqIHB0MS55ICsgdDFkWzJdO1xuICAgICAgICAgICAgYmRbKGkgPDwgMSkgKyAxXSA9IHQxZFszXSAqIHB0MS54ICsgdDFkWzRdICogcHQxLnkgKyB0MWRbNV07XG4gICAgICAgIH1cblxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEEodGhpcy5BdEEsIGFfbXQpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEIodGhpcy5BdEIsIGFfbXQsIGJfbXQpO1xuXG4gICAgICAgIF9saW5hbGcubHVfc29sdmUodGhpcy5BdEEsIHRoaXMuQXRCKTtcblxuICAgICAgICBtZFswXSA9IHRoaXMuQXRCLmRhdGFbMF0sIG1kWzFdID0gdGhpcy5BdEIuZGF0YVsxXSwgbWRbMl0gPSB0aGlzLkF0Qi5kYXRhWzJdO1xuICAgICAgICBtZFszXSA9IHRoaXMuQXRCLmRhdGFbM10sIG1kWzRdID0gdGhpcy5BdEIuZGF0YVs0XSwgbWRbNV0gPSB0aGlzLkF0Qi5kYXRhWzVdO1xuICAgICAgICBtZFs2XSA9IDAuMCwgbWRbN10gPSAwLjAsIG1kWzhdID0gMS4wOyAvLyBmaWxsIGxhc3Qgcm93XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGguaW52ZXJ0XzN4Myh0aGlzLlQxLCB0aGlzLlQxKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYl9idWZmKTtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBob21vZ3JhcGh5MmQgZXh0ZW5kcyBtb3Rpb25fbW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1MdEwgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuRXZlYyA9IG5ldyBtYXRyaXhfdCg5LCA5LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG4gICAgcnVuKGZyb20sIHRvLCBtb2RlbCwgY291bnQpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMDtcbiAgICAgICAgdmFyIG1kID0gbW9kZWwuZGF0YSwgdDBkID0gdGhpcy5UMC5kYXRhLCB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIHZhciBMdEwgPSB0aGlzLm1MdEwuZGF0YSwgZXZkID0gdGhpcy5FdmVjLmRhdGE7XG4gICAgICAgIHZhciB4ID0gMC4wLCB5ID0gMC4wLCBYID0gMC4wLCBZID0gMC4wO1xuICAgICAgICB2YXIgX2xpbmFsZyA9IG5ldyBsaW5hbGcoKTtcbiAgICAgICAgdmFyIF9tYXRtYXRoID0gbmV3IG1hdG1hdGgoKTtcblxuICAgICAgICAvLyBub3JtXG4gICAgICAgIHZhciBzbXggPSAwLjAsIHNteSA9IDAuMCwgY214ID0gMC4wLCBjbXkgPSAwLjAsIHNNeCA9IDAuMCwgc015ID0gMC4wLCBjTXggPSAwLjAsIGNNeSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGNteCArPSB0b1tpXS54O1xuICAgICAgICAgICAgY215ICs9IHRvW2ldLnk7XG4gICAgICAgICAgICBjTXggKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY015ICs9IGZyb21baV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNteCAvPSBjb3VudDsgY215IC89IGNvdW50O1xuICAgICAgICBjTXggLz0gY291bnQ7IGNNeSAvPSBjb3VudDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgc214ICs9IE1hdGguYWJzKHRvW2ldLnggLSBjbXgpO1xuICAgICAgICAgICAgc215ICs9IE1hdGguYWJzKHRvW2ldLnkgLSBjbXkpO1xuICAgICAgICAgICAgc014ICs9IE1hdGguYWJzKGZyb21baV0ueCAtIGNNeCk7XG4gICAgICAgICAgICBzTXkgKz0gTWF0aC5hYnMoZnJvbVtpXS55IC0gY015KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzbXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzbXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXgpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OXG4gICAgICAgICAgICB8fCBNYXRoLmFicyhzTXkpIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSByZXR1cm4gMDtcblxuICAgICAgICBzbXggPSBjb3VudCAvIHNteDsgc215ID0gY291bnQgLyBzbXk7XG4gICAgICAgIHNNeCA9IGNvdW50IC8gc014OyBzTXkgPSBjb3VudCAvIHNNeTtcblxuICAgICAgICB0MGRbMF0gPSBzTXg7IHQwZFsxXSA9IDA7IHQwZFsyXSA9IC1jTXggKiBzTXg7XG4gICAgICAgIHQwZFszXSA9IDA7IHQwZFs0XSA9IHNNeTsgdDBkWzVdID0gLWNNeSAqIHNNeTtcbiAgICAgICAgdDBkWzZdID0gMDsgdDBkWzddID0gMDsgdDBkWzhdID0gMTtcblxuICAgICAgICB0MWRbMF0gPSAxLjAgLyBzbXg7IHQxZFsxXSA9IDA7IHQxZFsyXSA9IGNteDtcbiAgICAgICAgdDFkWzNdID0gMDsgdDFkWzRdID0gMS4wIC8gc215OyB0MWRbNV0gPSBjbXk7XG4gICAgICAgIHQxZFs2XSA9IDA7IHQxZFs3XSA9IDA7IHQxZFs4XSA9IDE7XG4gICAgICAgIC8vXG5cbiAgICAgICAgLy8gY29uc3RydWN0IHN5c3RlbVxuICAgICAgICBpID0gODE7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgTHRMW2ldID0gMC4wO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB4ID0gKHRvW2ldLnggLSBjbXgpICogc214O1xuICAgICAgICAgICAgeSA9ICh0b1tpXS55IC0gY215KSAqIHNteTtcbiAgICAgICAgICAgIFggPSAoZnJvbVtpXS54IC0gY014KSAqIHNNeDtcbiAgICAgICAgICAgIFkgPSAoZnJvbVtpXS55IC0gY015KSAqIHNNeTtcblxuICAgICAgICAgICAgTHRMWzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzFdICs9IFggKiBZO1xuICAgICAgICAgICAgTHRMWzJdICs9IFg7XG5cbiAgICAgICAgICAgIEx0TFs2XSArPSBYICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzddICs9IFggKiAteCAqIFk7XG4gICAgICAgICAgICBMdExbOF0gKz0gWCAqIC14O1xuICAgICAgICAgICAgTHRMWzEwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFsxMV0gKz0gWTtcblxuICAgICAgICAgICAgTHRMWzE1XSArPSBZICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzE2XSArPSBZICogLXggKiBZO1xuICAgICAgICAgICAgTHRMWzE3XSArPSBZICogLXg7XG4gICAgICAgICAgICBMdExbMjBdICs9IDEuMDtcblxuICAgICAgICAgICAgTHRMWzI0XSArPSAteCAqIFg7XG4gICAgICAgICAgICBMdExbMjVdICs9IC14ICogWTtcbiAgICAgICAgICAgIEx0TFsyNl0gKz0gLXg7XG4gICAgICAgICAgICBMdExbMzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzMxXSArPSBYICogWTtcbiAgICAgICAgICAgIEx0TFszMl0gKz0gWDtcbiAgICAgICAgICAgIEx0TFszM10gKz0gWCAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFszNF0gKz0gWCAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFszNV0gKz0gWCAqIC15O1xuICAgICAgICAgICAgTHRMWzQwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFs0MV0gKz0gWTtcbiAgICAgICAgICAgIEx0TFs0Ml0gKz0gWSAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFs0M10gKz0gWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs0NF0gKz0gWSAqIC15O1xuICAgICAgICAgICAgTHRMWzUwXSArPSAxLjA7XG4gICAgICAgICAgICBMdExbNTFdICs9IC15ICogWDtcbiAgICAgICAgICAgIEx0TFs1Ml0gKz0gLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzUzXSArPSAteTtcbiAgICAgICAgICAgIEx0TFs2MF0gKz0gLXggKiBYICogLXggKiBYICsgLXkgKiBYICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzYxXSArPSAteCAqIFggKiAteCAqIFkgKyAteSAqIFggKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNjJdICs9IC14ICogWCAqIC14ICsgLXkgKiBYICogLXk7XG4gICAgICAgICAgICBMdExbNzBdICs9IC14ICogWSAqIC14ICogWSArIC15ICogWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs3MV0gKz0gLXggKiBZICogLXggKyAteSAqIFkgKiAteTtcbiAgICAgICAgICAgIEx0TFs4MF0gKz0gLXggKiAteCArIC15ICogLXk7XG4gICAgICAgIH1cbiAgICAgICAgLy9cblxuICAgICAgICAvLyBzeW1tZXRyeVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgOTsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKVxuICAgICAgICAgICAgICAgIEx0TFtpICogOSArIGpdID0gTHRMW2ogKiA5ICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICBfbGluYWxnLmVpZ2VuVlYodGhpcy5tTHRMLCB0aGlzLkV2ZWMpO1xuXG4gICAgICAgIG1kWzBdID0gZXZkWzcyXSwgbWRbMV0gPSBldmRbNzNdLCBtZFsyXSA9IGV2ZFs3NF07XG4gICAgICAgIG1kWzNdID0gZXZkWzc1XSwgbWRbNF0gPSBldmRbNzZdLCBtZFs1XSA9IGV2ZFs3N107XG4gICAgICAgIG1kWzZdID0gZXZkWzc4XSwgbWRbN10gPSBldmRbNzldLCBtZFs4XSA9IGV2ZFs4MF07XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIHNldCBib3R0b20gcmlnaHQgdG8gMS4wXG4gICAgICAgIHggPSAxLjAgLyBtZFs4XTtcbiAgICAgICAgbWRbMF0gKj0geDsgbWRbMV0gKj0geDsgbWRbMl0gKj0geDtcbiAgICAgICAgbWRbM10gKj0geDsgbWRbNF0gKj0geDsgbWRbNV0gKj0geDtcbiAgICAgICAgbWRbNl0gKj0geDsgbWRbN10gKj0geDsgbWRbOF0gPSAxLjA7XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGVycm9yKGZyb20sIHRvLCBtb2RlbCwgZXJyLCBjb3VudCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBwdDAsIHB0MSwgd3cgPSAwLjAsIGR4ID0gMC4wLCBkeSA9IDAuMDtcbiAgICAgICAgdmFyIG0gPSBtb2RlbC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgcHQwID0gZnJvbVtpXTtcbiAgICAgICAgICAgIHB0MSA9IHRvW2ldO1xuXG4gICAgICAgICAgICB3dyA9IDEuMCAvIChtWzZdICogcHQwLnggKyBtWzddICogcHQwLnkgKyAxLjApO1xuICAgICAgICAgICAgZHggPSAobVswXSAqIHB0MC54ICsgbVsxXSAqIHB0MC55ICsgbVsyXSkgKiB3dyAtIHB0MS54O1xuICAgICAgICAgICAgZHkgPSAobVszXSAqIHB0MC54ICsgbVs0XSAqIHB0MC55ICsgbVs1XSkgKiB3dyAtIHB0MS55O1xuICAgICAgICAgICAgZXJyW2ldID0gKGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja19zdWJzZXQoZnJvbSwgdG8sIGNvdW50KSB7XG4gICAgICAgIC8vIHNlZW1zIHRvIHJlamVjdCBnb29kIHN1YnNldHMgYWN0dWFsbHlcbiAgICAgICAgLy9pZiggaGF2ZV9jb2xsaW5lYXJfcG9pbnRzKGZyb20sIGNvdW50KSB8fCBoYXZlX2NvbGxpbmVhcl9wb2ludHModG8sIGNvdW50KSApIHtcbiAgICAgICAgLy9yZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vfVxuICAgICAgICB2YXIgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICBpZiAoY291bnQgPT0gNCkge1xuICAgICAgICAgICAgdmFyIG5lZ2F0aXZlID0gMDtcblxuICAgICAgICAgICAgdmFyIGZwMCA9IGZyb21bMF0sIGZwMSA9IGZyb21bMV0sIGZwMiA9IGZyb21bMl0sIGZwMyA9IGZyb21bM107XG4gICAgICAgICAgICB2YXIgdHAwID0gdG9bMF0sIHRwMSA9IHRvWzFdLCB0cDIgPSB0b1syXSwgdHAzID0gdG9bM107XG5cbiAgICAgICAgICAgIC8vIHNldDFcbiAgICAgICAgICAgIHZhciBBMTEgPSBmcDAueCwgQTEyID0gZnAwLnksIEExMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMjEgPSBmcDEueCwgQTIyID0gZnAxLnksIEEyMyA9IDEuMDtcbiAgICAgICAgICAgIHZhciBBMzEgPSBmcDIueCwgQTMyID0gZnAyLnksIEEzMyA9IDEuMDtcblxuICAgICAgICAgICAgdmFyIEIxMSA9IHRwMC54LCBCMTIgPSB0cDAueSwgQjEzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIyMSA9IHRwMS54LCBCMjIgPSB0cDEueSwgQjIzID0gMS4wO1xuICAgICAgICAgICAgdmFyIEIzMSA9IHRwMi54LCBCMzIgPSB0cDIueSwgQjMzID0gMS4wO1xuXG4gICAgICAgICAgICB2YXIgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIHZhciBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQyXG4gICAgICAgICAgICBBMTEgPSBmcDEueCwgQTEyID0gZnAxLnk7XG4gICAgICAgICAgICBBMjEgPSBmcDIueCwgQTIyID0gZnAyLnk7XG4gICAgICAgICAgICBBMzEgPSBmcDMueCwgQTMyID0gZnAzLnk7XG5cbiAgICAgICAgICAgIEIxMSA9IHRwMS54LCBCMTIgPSB0cDEueTtcbiAgICAgICAgICAgIEIyMSA9IHRwMi54LCBCMjIgPSB0cDIueTtcbiAgICAgICAgICAgIEIzMSA9IHRwMy54LCBCMzIgPSB0cDMueTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDNcbiAgICAgICAgICAgIEExMSA9IGZwMC54LCBBMTIgPSBmcDAueTtcbiAgICAgICAgICAgIEEyMSA9IGZwMi54LCBBMjIgPSBmcDIueTtcbiAgICAgICAgICAgIEEzMSA9IGZwMy54LCBBMzIgPSBmcDMueTtcblxuICAgICAgICAgICAgQjExID0gdHAwLngsIEIxMiA9IHRwMC55O1xuICAgICAgICAgICAgQjIxID0gdHAyLngsIEIyMiA9IHRwMi55O1xuICAgICAgICAgICAgQjMxID0gdHAzLngsIEIzMiA9IHRwMy55O1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0NFxuICAgICAgICAgICAgQTExID0gZnAwLngsIEExMiA9IGZwMC55O1xuICAgICAgICAgICAgQTIxID0gZnAxLngsIEEyMiA9IGZwMS55O1xuICAgICAgICAgICAgQTMxID0gZnAzLngsIEEzMiA9IGZwMy55O1xuXG4gICAgICAgICAgICBCMTEgPSB0cDAueCwgQjEyID0gdHAwLnk7XG4gICAgICAgICAgICBCMjEgPSB0cDEueCwgQjIyID0gdHAxLnk7XG4gICAgICAgICAgICBCMzEgPSB0cDMueCwgQjMyID0gdHAzLnk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICBpZiAobmVnYXRpdmUgIT0gMCAmJiBuZWdhdGl2ZSAhPSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBhbGwgZ29vZFxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyByYW5zYWNfcGFyYW1zX3Qge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHRocmVzaCwgZXBzLCBwcm9iKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzaXplID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHRocmVzaCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0aHJlc2ggPSAwLjU7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHsgZXBzID0gMC41OyB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvYiA9PT0gXCJ1bmRlZmluZWRcIikgeyBwcm9iID0gMC45OTsgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMudGhyZXNoID0gdGhyZXNoO1xuICAgICAgICB0aGlzLmVwcyA9IGVwcztcbiAgICAgICAgdGhpcy5wcm9iID0gcHJvYjtcbiAgICB9O1xuICAgIHVwZGF0ZV9pdGVycyhfZXBzLCBtYXhfaXRlcnMpIHtcbiAgICAgICAgdmFyIG51bSA9IE1hdGgubG9nKDEgLSB0aGlzLnByb2IpO1xuICAgICAgICB2YXIgZGVub20gPSBNYXRoLmxvZygxIC0gTWF0aC5wb3coMSAtIF9lcHMsIHRoaXMuc2l6ZSkpO1xuICAgICAgICByZXR1cm4gKGRlbm9tID49IDAgfHwgLW51bSA+PSBtYXhfaXRlcnMgKiAoLWRlbm9tKSA/IG1heF9pdGVycyA6IE1hdGgucm91bmQobnVtIC8gZGVub20pKSB8IDA7XG4gICAgfVxufTsiLCJpbXBvcnQgZGF0YV90IGZyb20gJy4vZGF0YV90LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX3Bvb2xfbm9kZV90IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxuICAgIHJlc2l6ZShzaXplX2luX2J5dGVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhdGFfdCAge1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXMsIGJ1ZmZlcikge1xuICAgICAgICAvL3N1cGVyKClcbiAgICAgICAgLy8gd2UgbmVlZCBhbGlnbiBzaXplIHRvIG11bHRpcGxlIG9mIDhcbiAgICAgICAgdGhpcy5zaXplID0gKChzaXplX2luX2J5dGVzICsgNykgfCAwKSAmIC04O1xuICAgICAgICBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5zaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy5zaXplID0gYnVmZmVyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnU4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmkzMiA9IG5ldyBJbnQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mMzIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mNjQgPSBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGJpdF9wYXR0ZXJuXzMxID0gW1xuICAgIDgsLTMsIDksNS8qbWVhbiAoMCksIGNvcnJlbGF0aW9uICgwKSovLFxuICAgIDQsMiwgNywtMTIvKm1lYW4gKDEuMTI0NjFlLTA1KSwgY29ycmVsYXRpb24gKDAuMDQzNzU4NCkqLyxcbiAgICAtMTEsOSwgLTgsMi8qbWVhbiAoMy4zNzM4MmUtMDUpLCBjb3JyZWxhdGlvbiAoMC4wNjE3NDA5KSovLFxuICAgIDcsLTEyLCAxMiwtMTMvKm1lYW4gKDUuNjIzMDNlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYzNjk3NykqLyxcbiAgICAyLC0xMywgMiwxMi8qbWVhbiAoMC4wMDAxMzQ5NTMpLCBjb3JyZWxhdGlvbiAoMC4wODUwOTkpKi8sXG4gICAgMSwtNywgMSw2LyptZWFuICgwLjAwMDUyODU2NSksIGNvcnJlbGF0aW9uICgwLjA4NTcxNzUpKi8sXG4gICAgLTIsLTEwLCAtMiwtNC8qbWVhbiAoMC4wMTg4ODIxKSwgY29ycmVsYXRpb24gKDAuMDk4NTc3NCkqLyxcbiAgICAtMTMsLTEzLCAtMTEsLTgvKm1lYW4gKDAuMDM2MzEzNSksIGNvcnJlbGF0aW9uICgwLjA4OTk2MTYpKi8sXG4gICAgLTEzLC0zLCAtMTIsLTkvKm1lYW4gKDAuMTIxODA2KSwgY29ycmVsYXRpb24gKDAuMDk5ODQ5KSovLFxuICAgIDEwLDQsIDExLDkvKm1lYW4gKDAuMTIyMDY1KSwgY29ycmVsYXRpb24gKDAuMDkzMjg1KSovLFxuICAgIC0xMywtOCwgLTgsLTkvKm1lYW4gKDAuMTYyNzg3KSwgY29ycmVsYXRpb24gKDAuMDk0Mjc0OCkqLyxcbiAgICAtMTEsNywgLTksMTIvKm1lYW4gKDAuMjE1NjEpLCBjb3JyZWxhdGlvbiAoMC4wOTc0NDM4KSovLFxuICAgIDcsNywgMTIsNi8qbWVhbiAoMC4xNjA1ODMpLCBjb3JyZWxhdGlvbiAoMC4xMzAwNjQpKi8sXG4gICAgLTQsLTUsIC0zLDAvKm1lYW4gKDAuMjI4MTcxKSwgY29ycmVsYXRpb24gKDAuMTMyOTk4KSovLFxuICAgIC0xMywyLCAtMTIsLTMvKm1lYW4gKDAuMDA5OTc1MjYpLCBjb3JyZWxhdGlvbiAoMC4xNDU5MjYpKi8sXG4gICAgLTksMCwgLTcsNS8qbWVhbiAoMC4xOTgyMzQpLCBjb3JyZWxhdGlvbiAoMC4xNDM2MzYpKi8sXG4gICAgMTIsLTYsIDEyLC0xLyptZWFuICgwLjA2NzYyMjYpLCBjb3JyZWxhdGlvbiAoMC4xNjY4OSkqLyxcbiAgICAtMyw2LCAtMiwxMi8qbWVhbiAoMC4xNjY4NDcpLCBjb3JyZWxhdGlvbiAoMC4xNzE2ODIpKi8sXG4gICAgLTYsLTEzLCAtNCwtOC8qbWVhbiAoMC4xMDEyMTUpLCBjb3JyZWxhdGlvbiAoMC4xNzk3MTYpKi8sXG4gICAgMTEsLTEzLCAxMiwtOC8qbWVhbiAoMC4yMDA2NDEpLCBjb3JyZWxhdGlvbiAoMC4xOTIyNzkpKi8sXG4gICAgNCw3LCA1LDEvKm1lYW4gKDAuMjA1MTA2KSwgY29ycmVsYXRpb24gKDAuMTg2ODQ4KSovLFxuICAgIDUsLTMsIDEwLC0zLyptZWFuICgwLjIzNDkwOCksIGNvcnJlbGF0aW9uICgwLjE5MjMxOSkqLyxcbiAgICAzLC03LCA2LDEyLyptZWFuICgwLjA3MDk5NjQpLCBjb3JyZWxhdGlvbiAoMC4yMTA4NzIpKi8sXG4gICAgLTgsLTcsIC02LC0yLyptZWFuICgwLjA5Mzk4MzQpLCBjb3JyZWxhdGlvbiAoMC4yMTI1ODkpKi8sXG4gICAgLTIsMTEsIC0xLC0xMC8qbWVhbiAoMC4xMjc3NzgpLCBjb3JyZWxhdGlvbiAoMC4yMDg2NikqLyxcbiAgICAtMTMsMTIsIC04LDEwLyptZWFuICgwLjE0NzgzKSwgY29ycmVsYXRpb24gKDAuMjA2MzU2KSovLFxuICAgIC03LDMsIC01LC0zLyptZWFuICgwLjE4MjE0MSksIGNvcnJlbGF0aW9uICgwLjE5ODk0MikqLyxcbiAgICAtNCwyLCAtMyw3LyptZWFuICgwLjE4ODIzNyksIGNvcnJlbGF0aW9uICgwLjIxMzg0KSovLFxuICAgIC0xMCwtMTIsIC02LDExLyptZWFuICgwLjE0ODY1KSwgY29ycmVsYXRpb24gKDAuMjM1NzEpKi8sXG4gICAgNSwtMTIsIDYsLTcvKm1lYW4gKDAuMjIyMzEyKSwgY29ycmVsYXRpb24gKDAuMjMzMjQpKi8sXG4gICAgNSwtNiwgNywtMS8qbWVhbiAoMC4yMjkwODIpLCBjb3JyZWxhdGlvbiAoMC4yMzM4OSkqLyxcbiAgICAxLDAsIDQsLTUvKm1lYW4gKDAuMjQxNTc3KSwgY29ycmVsYXRpb24gKDAuMjE1Mjg2KSovLFxuICAgIDksMTEsIDExLC0xMy8qbWVhbiAoMC4wMDMzODUwNyksIGNvcnJlbGF0aW9uICgwLjI1MTM3MykqLyxcbiAgICA0LDcsIDQsMTIvKm1lYW4gKDAuMTMxMDA1KSwgY29ycmVsYXRpb24gKDAuMjU3NjIyKSovLFxuICAgIDIsLTEsIDQsNC8qbWVhbiAoMC4xNTI3NTUpLCBjb3JyZWxhdGlvbiAoMC4yNTUyMDUpKi8sXG4gICAgLTQsLTEyLCAtMiw3LyptZWFuICgwLjE4Mjc3MSksIGNvcnJlbGF0aW9uICgwLjI0NDg2NykqLyxcbiAgICAtOCwtNSwgLTcsLTEwLyptZWFuICgwLjE4Njg5OCksIGNvcnJlbGF0aW9uICgwLjIzOTAxKSovLFxuICAgIDQsMTEsIDksMTIvKm1lYW4gKDAuMjI2MjI2KSwgY29ycmVsYXRpb24gKDAuMjU4MjU1KSovLFxuICAgIDAsLTgsIDEsLTEzLyptZWFuICgwLjA4OTc4ODYpLCBjb3JyZWxhdGlvbiAoMC4yNzQ4MjcpKi8sXG4gICAgLTEzLC0yLCAtOCwyLyptZWFuICgwLjE0ODc3NCksIGNvcnJlbGF0aW9uICgwLjI4MDY1KSovLFxuICAgIC0zLC0yLCAtMiwzLyptZWFuICgwLjE1MzA0OCksIGNvcnJlbGF0aW9uICgwLjI4MzA2MykqLyxcbiAgICAtNiw5LCAtNCwtOS8qbWVhbiAoMC4xNjk1MjMpLCBjb3JyZWxhdGlvbiAoMC4yNzgyNDgpKi8sXG4gICAgOCwxMiwgMTAsNy8qbWVhbiAoMC4yMjUzMzcpLCBjb3JyZWxhdGlvbiAoMC4yODI4NTEpKi8sXG4gICAgMCw5LCAxLDMvKm1lYW4gKDAuMjI2Njg3KSwgY29ycmVsYXRpb24gKDAuMjc4NzM0KSovLFxuICAgIDcsLTUsIDExLC0xMC8qbWVhbiAoMC4wMDY5Mzg4MiksIGNvcnJlbGF0aW9uICgwLjMwNTE2MSkqLyxcbiAgICAtMTMsLTYsIC0xMSwwLyptZWFuICgwLjAyMjcyODMpLCBjb3JyZWxhdGlvbiAoMC4zMDAxODEpKi8sXG4gICAgMTAsNywgMTIsMS8qbWVhbiAoMC4xMjU1MTcpLCBjb3JyZWxhdGlvbiAoMC4zMTA4OSkqLyxcbiAgICAtNiwtMywgLTYsMTIvKm1lYW4gKDAuMTMxNzQ4KSwgY29ycmVsYXRpb24gKDAuMzEyNzc5KSovLFxuICAgIDEwLC05LCAxMiwtNC8qbWVhbiAoMC4xNDQ4MjcpLCBjb3JyZWxhdGlvbiAoMC4yOTI3OTcpKi8sXG4gICAgLTEzLDgsIC04LC0xMi8qbWVhbiAoMC4xNDkyMDIpLCBjb3JyZWxhdGlvbiAoMC4zMDg5MTgpKi8sXG4gICAgLTEzLDAsIC04LC00LyptZWFuICgwLjE2MDkwOSksIGNvcnJlbGF0aW9uICgwLjMxMDAxMykqLyxcbiAgICAzLDMsIDcsOC8qbWVhbiAoMC4xNzc3NTUpLCBjb3JyZWxhdGlvbiAoMC4zMDkzOTQpKi8sXG4gICAgNSw3LCAxMCwtNy8qbWVhbiAoMC4yMTIzMzcpLCBjb3JyZWxhdGlvbiAoMC4zMTAzMTUpKi8sXG4gICAgLTEsNywgMSwtMTIvKm1lYW4gKDAuMjE0NDI5KSwgY29ycmVsYXRpb24gKDAuMzExOTMzKSovLFxuICAgIDMsLTEwLCA1LDYvKm1lYW4gKDAuMjM1ODA3KSwgY29ycmVsYXRpb24gKDAuMzEzMTA0KSovLFxuICAgIDIsLTQsIDMsLTEwLyptZWFuICgwLjAwNDk0ODI3KSwgY29ycmVsYXRpb24gKDAuMzQ0OTQ4KSovLFxuICAgIC0xMywwLCAtMTMsNS8qbWVhbiAoMC4wNTQ5MTQ1KSwgY29ycmVsYXRpb24gKDAuMzQ0Njc1KSovLFxuICAgIC0xMywtNywgLTEyLDEyLyptZWFuICgwLjEwMzM4NSksIGNvcnJlbGF0aW9uICgwLjM0MjcxNSkqLyxcbiAgICAtMTMsMywgLTExLDgvKm1lYW4gKDAuMTM0MjIyKSwgY29ycmVsYXRpb24gKDAuMzIyOTIyKSovLFxuICAgIC03LDEyLCAtNCw3LyptZWFuICgwLjE1MzI4NCksIGNvcnJlbGF0aW9uICgwLjMzNzA2MSkqLyxcbiAgICA2LC0xMCwgMTIsOC8qbWVhbiAoMC4xNTQ4ODEpLCBjb3JyZWxhdGlvbiAoMC4zMjkyNTcpKi8sXG4gICAgLTksLTEsIC03LC02LyptZWFuICgwLjIwMDk2NyksIGNvcnJlbGF0aW9uICgwLjMzMzEyKSovLFxuICAgIC0yLC01LCAwLDEyLyptZWFuICgwLjIwMTUxOCksIGNvcnJlbGF0aW9uICgwLjM0MDYzNSkqLyxcbiAgICAtMTIsNSwgLTcsNS8qbWVhbiAoMC4yMDc4MDUpLCBjb3JyZWxhdGlvbiAoMC4zMzU2MzEpKi8sXG4gICAgMywtMTAsIDgsLTEzLyptZWFuICgwLjIyNDQzOCksIGNvcnJlbGF0aW9uICgwLjM0NTA0KSovLFxuICAgIC03LC03LCAtNCw1LyptZWFuICgwLjIzOTM2MSksIGNvcnJlbGF0aW9uICgwLjMzODA1MykqLyxcbiAgICAtMywtMiwgLTEsLTcvKm1lYW4gKDAuMjQwNzQ0KSwgY29ycmVsYXRpb24gKDAuMzQ0MzIyKSovLFxuICAgIDIsOSwgNSwtMTEvKm1lYW4gKDAuMjQyOTQ5KSwgY29ycmVsYXRpb24gKDAuMzQxNDUpKi8sXG4gICAgLTExLC0xMywgLTUsLTEzLyptZWFuICgwLjI0NDAyOCksIGNvcnJlbGF0aW9uICgwLjMzNjg2MSkqLyxcbiAgICAtMSw2LCAwLC0xLyptZWFuICgwLjI0NzU3MSksIGNvcnJlbGF0aW9uICgwLjM0MzY4NCkqLyxcbiAgICA1LC0zLCA1LDIvKm1lYW4gKDAuMDAwNjk3MjU2KSwgY29ycmVsYXRpb24gKDAuMzU3MjY1KSovLFxuICAgIC00LC0xMywgLTQsMTIvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC4zNzM4MjcpKi8sXG4gICAgLTksLTYsIC05LDYvKm1lYW4gKDAuMDEyNjg1NiksIGNvcnJlbGF0aW9uICgwLjM3MzkzOCkqLyxcbiAgICAtMTIsLTEwLCAtOCwtNC8qbWVhbiAoMC4wMTUyNDk3KSwgY29ycmVsYXRpb24gKDAuMzY0MjM3KSovLFxuICAgIDEwLDIsIDEyLC0zLyptZWFuICgwLjAyOTk5MzMpLCBjb3JyZWxhdGlvbiAoMC4zNDUyOTIpKi8sXG4gICAgNywxMiwgMTIsMTIvKm1lYW4gKDAuMDMwNzI0MiksIGNvcnJlbGF0aW9uICgwLjM2NjI5OSkqLyxcbiAgICAtNywtMTMsIC02LDUvKm1lYW4gKDAuMDUzNDk3NSksIGNvcnJlbGF0aW9uICgwLjM2ODM1NykqLyxcbiAgICAtNCw5LCAtMyw0LyptZWFuICgwLjA5OTg2NSksIGNvcnJlbGF0aW9uICgwLjM3MjI3NikqLyxcbiAgICA3LC0xLCAxMiwyLyptZWFuICgwLjExNzA4MyksIGNvcnJlbGF0aW9uICgwLjM2NDUyOSkqLyxcbiAgICAtNyw2LCAtNSwxLyptZWFuICgwLjEyNjEyNSksIGNvcnJlbGF0aW9uICgwLjM2OTYwNikqLyxcbiAgICAtMTMsMTEsIC0xMiw1LyptZWFuICgwLjEzMDM2NCksIGNvcnJlbGF0aW9uICgwLjM1ODUwMikqLyxcbiAgICAtMyw3LCAtMiwtNi8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC4zNzU1MzEpKi8sXG4gICAgNywtOCwgMTIsLTcvKm1lYW4gKDAuMTYwMTY2KSwgY29ycmVsYXRpb24gKDAuMzc5NTA4KSovLFxuICAgIC0xMywtNywgLTExLC0xMi8qbWVhbiAoMC4xNjc4NDgpLCBjb3JyZWxhdGlvbiAoMC4zNTMzNDMpKi8sXG4gICAgMSwtMywgMTIsMTIvKm1lYW4gKDAuMTgzMzc4KSwgY29ycmVsYXRpb24gKDAuMzcxOTE2KSovLFxuICAgIDIsLTYsIDMsMC8qbWVhbiAoMC4yMjg3MTEpLCBjb3JyZWxhdGlvbiAoMC4zNzE3NjEpKi8sXG4gICAgLTQsMywgLTIsLTEzLyptZWFuICgwLjI0NzIxMSksIGNvcnJlbGF0aW9uICgwLjM2NDA2MykqLyxcbiAgICAtMSwtMTMsIDEsOS8qbWVhbiAoMC4yNDkzMjUpLCBjb3JyZWxhdGlvbiAoMC4zNzgxMzkpKi8sXG4gICAgNywxLCA4LC02LyptZWFuICgwLjAwMDY1MjI3MiksIGNvcnJlbGF0aW9uICgwLjQxMTY4MikqLyxcbiAgICAxLC0xLCAzLDEyLyptZWFuICgwLjAwMjQ4NTM4KSwgY29ycmVsYXRpb24gKDAuMzkyOTg4KSovLFxuICAgIDksMSwgMTIsNi8qbWVhbiAoMC4wMjA2ODE1KSwgY29ycmVsYXRpb24gKDAuMzg2MTA2KSovLFxuICAgIC0xLC05LCAtMSwzLyptZWFuICgwLjAzNjQ0ODUpLCBjb3JyZWxhdGlvbiAoMC40MTA3NTIpKi8sXG4gICAgLTEzLC0xMywgLTEwLDUvKm1lYW4gKDAuMDM3NjA2OCksIGNvcnJlbGF0aW9uICgwLjM5ODM3NCkqLyxcbiAgICA3LDcsIDEwLDEyLyptZWFuICgwLjA0MjQyMDIpLCBjb3JyZWxhdGlvbiAoMC40MDU2NjMpKi8sXG4gICAgMTIsLTUsIDEyLDkvKm1lYW4gKDAuMDk0MjY0NSksIGNvcnJlbGF0aW9uICgwLjQxMDQyMikqLyxcbiAgICA2LDMsIDcsMTEvKm1lYW4gKDAuMTA3NCksIGNvcnJlbGF0aW9uICgwLjQxMzIyNCkqLyxcbiAgICA1LC0xMywgNiwxMC8qbWVhbiAoMC4xMDkyNTYpLCBjb3JyZWxhdGlvbiAoMC40MDg2NDYpKi8sXG4gICAgMiwtMTIsIDIsMy8qbWVhbiAoMC4xMzE2OTEpLCBjb3JyZWxhdGlvbiAoMC40MTYwNzYpKi8sXG4gICAgMyw4LCA0LC02LyptZWFuICgwLjE2NTA4MSksIGNvcnJlbGF0aW9uICgwLjQxNzU2OSkqLyxcbiAgICAyLDYsIDEyLC0xMy8qbWVhbiAoMC4xNzE4NzQpLCBjb3JyZWxhdGlvbiAoMC40MDg0NzEpKi8sXG4gICAgOSwtMTIsIDEwLDMvKm1lYW4gKDAuMTc1MTQ2KSwgY29ycmVsYXRpb24gKDAuNDEyOTYpKi8sXG4gICAgLTgsNCwgLTcsOS8qbWVhbiAoMC4xODM2ODIpLCBjb3JyZWxhdGlvbiAoMC40MDI5NTYpKi8sXG4gICAgLTExLDEyLCAtNCwtNi8qbWVhbiAoMC4xODQ2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTYxMjUpKi8sXG4gICAgMSwxMiwgMiwtOC8qbWVhbiAoMC4xOTE0ODcpLCBjb3JyZWxhdGlvbiAoMC4zODY2OTYpKi8sXG4gICAgNiwtOSwgNywtNC8qbWVhbiAoMC4xOTI2NjgpLCBjb3JyZWxhdGlvbiAoMC4zOTQ3NzEpKi8sXG4gICAgMiwzLCAzLC0yLyptZWFuICgwLjIwMDE1NyksIGNvcnJlbGF0aW9uICgwLjQwODMwMykqLyxcbiAgICA2LDMsIDExLDAvKm1lYW4gKDAuMjA0NTg4KSwgY29ycmVsYXRpb24gKDAuNDExNzYyKSovLFxuICAgIDMsLTMsIDgsLTgvKm1lYW4gKDAuMjA1OTA0KSwgY29ycmVsYXRpb24gKDAuNDE2Mjk0KSovLFxuICAgIDcsOCwgOSwzLyptZWFuICgwLjIxMzIzNyksIGNvcnJlbGF0aW9uICgwLjQwOTMwNikqLyxcbiAgICAtMTEsLTUsIC02LC00LyptZWFuICgwLjI0MzQ0NCksIGNvcnJlbGF0aW9uICgwLjM5NTA2OSkqLyxcbiAgICAtMTAsMTEsIC01LDEwLyptZWFuICgwLjI0NzY3MiksIGNvcnJlbGF0aW9uICgwLjQxMzM5MikqLyxcbiAgICAtNSwtOCwgLTMsMTIvKm1lYW4gKDAuMjQ3NzQpLCBjb3JyZWxhdGlvbiAoMC40MTE0MTYpKi8sXG4gICAgLTEwLDUsIC05LDAvKm1lYW4gKDAuMDAyMTM2NzUpLCBjb3JyZWxhdGlvbiAoMC40NTQwMDMpKi8sXG4gICAgOCwtMSwgMTIsLTYvKm1lYW4gKDAuMDI5MzYzNSksIGNvcnJlbGF0aW9uICgwLjQ1NTM2OCkqLyxcbiAgICA0LC02LCA2LC0xMS8qbWVhbiAoMC4wNDA0OTcxKSwgY29ycmVsYXRpb24gKDAuNDU3MzkzKSovLFxuICAgIC0xMCwxMiwgLTgsNy8qbWVhbiAoMC4wNDgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDQ4MzY0KSovLFxuICAgIDQsLTIsIDYsNy8qbWVhbiAoMC4wNTA2NDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMTkpKi8sXG4gICAgLTIsMCwgLTIsMTIvKm1lYW4gKDAuMDUyNTk3OCksIGNvcnJlbGF0aW9uICgwLjQ0MzM4KSovLFxuICAgIC01LC04LCAtNSwyLyptZWFuICgwLjA2Mjk2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTcwOTYpKi8sXG4gICAgNywtNiwgMTAsMTIvKm1lYW4gKDAuMDY1Mzg0NiksIGNvcnJlbGF0aW9uICgwLjQ0NTYyMykqLyxcbiAgICAtOSwtMTMsIC04LC04LyptZWFuICgwLjA4NTg3NDkpLCBjb3JyZWxhdGlvbiAoMC40NDk3ODkpKi8sXG4gICAgLTUsLTEzLCAtNSwtMi8qbWVhbiAoMC4xMjI0MDIpLCBjb3JyZWxhdGlvbiAoMC40NTAyMDEpKi8sXG4gICAgOCwtOCwgOSwtMTMvKm1lYW4gKDAuMTI1NDE2KSwgY29ycmVsYXRpb24gKDAuNDUzMjI0KSovLFxuICAgIC05LC0xMSwgLTksMC8qbWVhbiAoMC4xMzAxMjgpLCBjb3JyZWxhdGlvbiAoMC40NTg3MjQpKi8sXG4gICAgMSwtOCwgMSwtMi8qbWVhbiAoMC4xMzI0NjcpLCBjb3JyZWxhdGlvbiAoMC40NDAxMzMpKi8sXG4gICAgNywtNCwgOSwxLyptZWFuICgwLjEzMjY5MiksIGNvcnJlbGF0aW9uICgwLjQ1NCkqLyxcbiAgICAtMiwxLCAtMSwtNC8qbWVhbiAoMC4xMzU2OTUpLCBjb3JyZWxhdGlvbiAoMC40NTU3MzkpKi8sXG4gICAgMTEsLTYsIDEyLC0xMS8qbWVhbiAoMC4xNDI5MDQpLCBjb3JyZWxhdGlvbiAoMC40NDYxMTQpKi8sXG4gICAgLTEyLC05LCAtNiw0LyptZWFuICgwLjE0NjE2NSksIGNvcnJlbGF0aW9uICgwLjQ1MTQ3MykqLyxcbiAgICAzLDcsIDcsMTIvKm1lYW4gKDAuMTQ3NjI3KSwgY29ycmVsYXRpb24gKDAuNDU2NjQzKSovLFxuICAgIDUsNSwgMTAsOC8qbWVhbiAoMC4xNTI5MDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMzYpKi8sXG4gICAgMCwtNCwgMiw4LyptZWFuICgwLjE2NzA4MyksIGNvcnJlbGF0aW9uICgwLjQ1OTMxNSkqLyxcbiAgICAtOSwxMiwgLTUsLTEzLyptZWFuICgwLjE3MzIzNCksIGNvcnJlbGF0aW9uICgwLjQ1NDcwNikqLyxcbiAgICAwLDcsIDIsMTIvKm1lYW4gKDAuMTgzMTIpLCBjb3JyZWxhdGlvbiAoMC40MzM4NTUpKi8sXG4gICAgLTEsMiwgMSw3LyptZWFuICgwLjE4NTUwNCksIGNvcnJlbGF0aW9uICgwLjQ0MzgzOCkqLyxcbiAgICA1LDExLCA3LC05LyptZWFuICgwLjE4NTcwNiksIGNvcnJlbGF0aW9uICgwLjQ1MTEyMykqLyxcbiAgICAzLDUsIDYsLTgvKm1lYW4gKDAuMTg4OTY4KSwgY29ycmVsYXRpb24gKDAuNDU1ODA4KSovLFxuICAgIC0xMywtNCwgLTgsOS8qbWVhbiAoMC4xOTE2NjcpLCBjb3JyZWxhdGlvbiAoMC40NTkxMjgpKi8sXG4gICAgLTUsOSwgLTMsLTMvKm1lYW4gKDAuMTkzMTk2KSwgY29ycmVsYXRpb24gKDAuNDU4MzY0KSovLFxuICAgIC00LC03LCAtMywtMTIvKm1lYW4gKDAuMTk2NTM2KSwgY29ycmVsYXRpb24gKDAuNDU1NzgyKSovLFxuICAgIDYsNSwgOCwwLyptZWFuICgwLjE5NzIpLCBjb3JyZWxhdGlvbiAoMC40NTA0ODEpKi8sXG4gICAgLTcsNiwgLTYsMTIvKm1lYW4gKDAuMTk5NDM4KSwgY29ycmVsYXRpb24gKDAuNDU4MTU2KSovLFxuICAgIC0xMyw2LCAtNSwtMi8qbWVhbiAoMC4yMTEyMjQpLCBjb3JyZWxhdGlvbiAoMC40NDk1NDgpKi8sXG4gICAgMSwtMTAsIDMsMTAvKm1lYW4gKDAuMjExNzE4KSwgY29ycmVsYXRpb24gKDAuNDQwNjA2KSovLFxuICAgIDQsMSwgOCwtNC8qbWVhbiAoMC4yMTMwMzQpLCBjb3JyZWxhdGlvbiAoMC40NDMxNzcpKi8sXG4gICAgLTIsLTIsIDIsLTEzLyptZWFuICgwLjIzNDMzNCksIGNvcnJlbGF0aW9uICgwLjQ1NTMwNCkqLyxcbiAgICAyLC0xMiwgMTIsMTIvKm1lYW4gKDAuMjM1Njg0KSwgY29ycmVsYXRpb24gKDAuNDQzNDM2KSovLFxuICAgIC0yLC0xMywgMCwtNi8qbWVhbiAoMC4yMzc2NzQpLCBjb3JyZWxhdGlvbiAoMC40NTI1MjUpKi8sXG4gICAgNCwxLCA5LDMvKm1lYW4gKDAuMjM5NjIpLCBjb3JyZWxhdGlvbiAoMC40NDQ4MjQpKi8sXG4gICAgLTYsLTEwLCAtMywtNS8qbWVhbiAoMC4yNDg0NTkpLCBjb3JyZWxhdGlvbiAoMC40Mzk2MjEpKi8sXG4gICAgLTMsLTEzLCAtMSwxLyptZWFuICgwLjI0OTUwNSksIGNvcnJlbGF0aW9uICgwLjQ1NjY2NikqLyxcbiAgICA3LDUsIDEyLC0xMS8qbWVhbiAoMC4wMDExOTIwOCksIGNvcnJlbGF0aW9uICgwLjQ5NTQ2NikqLyxcbiAgICA0LC0yLCA1LC03LyptZWFuICgwLjAwMzcyMjQ1KSwgY29ycmVsYXRpb24gKDAuNDg0MjE0KSovLFxuICAgIC0xMyw5LCAtOSwtNS8qbWVhbiAoMC4wMDc0MTExNiksIGNvcnJlbGF0aW9uICgwLjQ5OTg1NCkqLyxcbiAgICA3LDEsIDgsNi8qbWVhbiAoMC4wMjA4OTUyKSwgY29ycmVsYXRpb24gKDAuNDk5NzczKSovLFxuICAgIDcsLTgsIDcsNi8qbWVhbiAoMC4wMjIwMDg1KSwgY29ycmVsYXRpb24gKDAuNTAxNjA5KSovLFxuICAgIC03LC00LCAtNywxLyptZWFuICgwLjAyMzM4MDYpLCBjb3JyZWxhdGlvbiAoMC40OTY1NjgpKi8sXG4gICAgLTgsMTEsIC03LC04LyptZWFuICgwLjAyMzY1MDUpLCBjb3JyZWxhdGlvbiAoMC40ODk3MTkpKi8sXG4gICAgLTEzLDYsIC0xMiwtOC8qbWVhbiAoMC4wMjY4NzgxKSwgY29ycmVsYXRpb24gKDAuNTAzNDg3KSovLFxuICAgIDIsNCwgMyw5LyptZWFuICgwLjAzMjMzMjQpLCBjb3JyZWxhdGlvbiAoMC41MDE5MzgpKi8sXG4gICAgMTAsLTUsIDEyLDMvKm1lYW4gKDAuMDM5OTIzNSksIGNvcnJlbGF0aW9uICgwLjQ5NDAyOSkqLyxcbiAgICAtNiwtNSwgLTYsNy8qbWVhbiAoMC4wNDIwMTUzKSwgY29ycmVsYXRpb24gKDAuNDg2NTc5KSovLFxuICAgIDgsLTMsIDksLTgvKm1lYW4gKDAuMDU0ODAyMSksIGNvcnJlbGF0aW9uICgwLjQ4NDIzNykqLyxcbiAgICAyLC0xMiwgMiw4LyptZWFuICgwLjA2MTY2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTY2NDIpKi8sXG4gICAgLTExLC0yLCAtMTAsMy8qbWVhbiAoMC4wNjI3NzU1KSwgY29ycmVsYXRpb24gKDAuNDk4NTYzKSovLFxuICAgIC0xMiwtMTMsIC03LC05LyptZWFuICgwLjA4Mjk2MjIpLCBjb3JyZWxhdGlvbiAoMC40OTU0OTEpKi8sXG4gICAgLTExLDAsIC0xMCwtNS8qbWVhbiAoMC4wODQzMzQyKSwgY29ycmVsYXRpb24gKDAuNDg3MTQ2KSovLFxuICAgIDUsLTMsIDExLDgvKm1lYW4gKDAuMDkyOTkzNyksIGNvcnJlbGF0aW9uICgwLjUwMjMxNSkqLyxcbiAgICAtMiwtMTMsIC0xLDEyLyptZWFuICgwLjExMzMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTQxKSovLFxuICAgIC0xLC04LCAwLDkvKm1lYW4gKDAuMTMyMTE5KSwgY29ycmVsYXRpb24gKDAuNDY3MjY4KSovLFxuICAgIC0xMywtMTEsIC0xMiwtNS8qbWVhbiAoMC4xMzYyNjkpLCBjb3JyZWxhdGlvbiAoMC40OTg3NzEpKi8sXG4gICAgLTEwLC0yLCAtMTAsMTEvKm1lYW4gKDAuMTQyMTczKSwgY29ycmVsYXRpb24gKDAuNDk4NzE0KSovLFxuICAgIC0zLDksIC0yLC0xMy8qbWVhbiAoMC4xNDQxNDEpLCBjb3JyZWxhdGlvbiAoMC40OTE5NzMpKi8sXG4gICAgMiwtMywgMywyLyptZWFuICgwLjE0ODkyKSwgY29ycmVsYXRpb24gKDAuNTAwNzgyKSovLFxuICAgIC05LC0xMywgLTQsMC8qbWVhbiAoMC4xNTAzNzEpLCBjb3JyZWxhdGlvbiAoMC40OTgyMTEpKi8sXG4gICAgLTQsNiwgLTMsLTEwLyptZWFuICgwLjE1MjE1OSksIGNvcnJlbGF0aW9uICgwLjQ5NTU0NykqLyxcbiAgICAtNCwxMiwgLTIsLTcvKm1lYW4gKDAuMTU2MTUyKSwgY29ycmVsYXRpb24gKDAuNDk2OTI1KSovLFxuICAgIC02LC0xMSwgLTQsOS8qbWVhbiAoMC4xNTc0OSksIGNvcnJlbGF0aW9uICgwLjQ5OTIyMikqLyxcbiAgICA2LC0zLCA2LDExLyptZWFuICgwLjE1OTIxMSksIGNvcnJlbGF0aW9uICgwLjUwMzgyMSkqLyxcbiAgICAtMTMsMTEsIC01LDUvKm1lYW4gKDAuMTYyNDI3KSwgY29ycmVsYXRpb24gKDAuNTAxOTA3KSovLFxuICAgIDExLDExLCAxMiw2LyptZWFuICgwLjE2NjUyKSwgY29ycmVsYXRpb24gKDAuNDk3NjMyKSovLFxuICAgIDcsLTUsIDEyLC0yLyptZWFuICgwLjE2OTE0MSksIGNvcnJlbGF0aW9uICgwLjQ4NDQ3NCkqLyxcbiAgICAtMSwxMiwgMCw3LyptZWFuICgwLjE2OTQ1NiksIGNvcnJlbGF0aW9uICgwLjQ5NTMzOSkqLyxcbiAgICAtNCwtOCwgLTMsLTIvKm1lYW4gKDAuMTcxNDU3KSwgY29ycmVsYXRpb24gKDAuNDg3MjUxKSovLFxuICAgIC03LDEsIC02LDcvKm1lYW4gKDAuMTc1KSwgY29ycmVsYXRpb24gKDAuNTAwMDI0KSovLFxuICAgIC0xMywtMTIsIC04LC0xMy8qbWVhbiAoMC4xNzU4NjYpLCBjb3JyZWxhdGlvbiAoMC40OTc1MjMpKi8sXG4gICAgLTcsLTIsIC02LC04LyptZWFuICgwLjE3ODI3MyksIGNvcnJlbGF0aW9uICgwLjUwMTg1NCkqLyxcbiAgICAtOCw1LCAtNiwtOS8qbWVhbiAoMC4xODExMDcpLCBjb3JyZWxhdGlvbiAoMC40OTQ4ODgpKi8sXG4gICAgLTUsLTEsIC00LDUvKm1lYW4gKDAuMTkwMjI3KSwgY29ycmVsYXRpb24gKDAuNDgyNTU3KSovLFxuICAgIC0xMyw3LCAtOCwxMC8qbWVhbiAoMC4xOTY3MzkpLCBjb3JyZWxhdGlvbiAoMC40OTY1MDMpKi8sXG4gICAgMSw1LCA1LC0xMy8qbWVhbiAoMC4xOTk3MyksIGNvcnJlbGF0aW9uICgwLjQ5OTc1OSkqLyxcbiAgICAxLDAsIDEwLC0xMy8qbWVhbiAoMC4yMDQ0NjUpLCBjb3JyZWxhdGlvbiAoMC40OTg3MykqLyxcbiAgICA5LDEyLCAxMCwtMS8qbWVhbiAoMC4yMDkzMzQpLCBjb3JyZWxhdGlvbiAoMC40OTA2MykqLyxcbiAgICA1LC04LCAxMCwtOS8qbWVhbiAoMC4yMTExMzQpLCBjb3JyZWxhdGlvbiAoMC41MDMwMTEpKi8sXG4gICAgLTEsMTEsIDEsLTEzLyptZWFuICgwLjIxMiksIGNvcnJlbGF0aW9uICgwLjQ5OTQxNCkqLyxcbiAgICAtOSwtMywgLTYsMi8qbWVhbiAoMC4yMTIxNjgpLCBjb3JyZWxhdGlvbiAoMC40ODA3MzkpKi8sXG4gICAgLTEsLTEwLCAxLDEyLyptZWFuICgwLjIxMjczMSksIGNvcnJlbGF0aW9uICgwLjUwMjUyMykqLyxcbiAgICAtMTMsMSwgLTgsLTEwLyptZWFuICgwLjIxMzI3KSwgY29ycmVsYXRpb24gKDAuNDg5Nzg2KSovLFxuICAgIDgsLTExLCAxMCwtNi8qbWVhbiAoMC4yMTQxNTkpLCBjb3JyZWxhdGlvbiAoMC40ODgyNDYpKi8sXG4gICAgMiwtMTMsIDMsLTYvKm1lYW4gKDAuMjE2OTkzKSwgY29ycmVsYXRpb24gKDAuNTAyODcpKi8sXG4gICAgNywtMTMsIDEyLC05LyptZWFuICgwLjIyMzYzOSksIGNvcnJlbGF0aW9uICgwLjQ3MDUwMikqLyxcbiAgICAtMTAsLTEwLCAtNSwtNy8qbWVhbiAoMC4yMjQwODkpLCBjb3JyZWxhdGlvbiAoMC41MDA4NTIpKi8sXG4gICAgLTEwLC04LCAtOCwtMTMvKm1lYW4gKDAuMjI4NjY2KSwgY29ycmVsYXRpb24gKDAuNTAyNjI5KSovLFxuICAgIDQsLTYsIDgsNS8qbWVhbiAoMC4yMjkwNiksIGNvcnJlbGF0aW9uICgwLjQ5ODMwNSkqLyxcbiAgICAzLDEyLCA4LC0xMy8qbWVhbiAoMC4yMzMzNzgpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjUpKi8sXG4gICAgLTQsMiwgLTMsLTMvKm1lYW4gKDAuMjM0MzIzKSwgY29ycmVsYXRpb24gKDAuNDc2NjkyKSovLFxuICAgIDUsLTEzLCAxMCwtMTIvKm1lYW4gKDAuMjM2MzkyKSwgY29ycmVsYXRpb24gKDAuNDc1NDYyKSovLFxuICAgIDQsLTEzLCA1LC0xLyptZWFuICgwLjIzNjg0MiksIGNvcnJlbGF0aW9uICgwLjUwNDEzMikqLyxcbiAgICAtOSw5LCAtNCwzLyptZWFuICgwLjIzNjk3NyksIGNvcnJlbGF0aW9uICgwLjQ5NzczOSkqLyxcbiAgICAwLDMsIDMsLTkvKm1lYW4gKDAuMjQzMTQpLCBjb3JyZWxhdGlvbiAoMC40OTkzOTgpKi8sXG4gICAgLTEyLDEsIC02LDEvKm1lYW4gKDAuMjQzMjk3KSwgY29ycmVsYXRpb24gKDAuNDg5NDQ3KSovLFxuICAgIDMsMiwgNCwtOC8qbWVhbiAoMC4wMDE1NTE5NiksIGNvcnJlbGF0aW9uICgwLjU1MzQ5NikqLyxcbiAgICAtMTAsLTEwLCAtMTAsOS8qbWVhbiAoMC4wMDIzOTU0MSksIGNvcnJlbGF0aW9uICgwLjU0Mjk3KSovLFxuICAgIDgsLTEzLCAxMiwxMi8qbWVhbiAoMC4wMDM0NDEzKSwgY29ycmVsYXRpb24gKDAuNTQ0MzYxKSovLFxuICAgIC04LC0xMiwgLTYsLTUvKm1lYW4gKDAuMDAzNTY1KSwgY29ycmVsYXRpb24gKDAuNTUxMjI1KSovLFxuICAgIDIsMiwgMyw3LyptZWFuICgwLjAwODM1NTgzKSwgY29ycmVsYXRpb24gKDAuNTUyODUpKi8sXG4gICAgMTAsNiwgMTEsLTgvKm1lYW4gKDAuMDA4ODUwNjUpLCBjb3JyZWxhdGlvbiAoMC41NDA5MTMpKi8sXG4gICAgNiw4LCA4LC0xMi8qbWVhbiAoMC4wMTAxNTUyKSwgY29ycmVsYXRpb24gKDAuNTUxMDg1KSovLFxuICAgIC03LDEwLCAtNiw1LyptZWFuICgwLjAxMDIyMjcpLCBjb3JyZWxhdGlvbiAoMC41MzM2MzUpKi8sXG4gICAgLTMsLTksIC0zLDkvKm1lYW4gKDAuMDExMDIxMSksIGNvcnJlbGF0aW9uICgwLjU0MzEyMSkqLyxcbiAgICAtMSwtMTMsIC0xLDUvKm1lYW4gKDAuMDExMzQ3MyksIGNvcnJlbGF0aW9uICgwLjU1MDE3MykqLyxcbiAgICAtMywtNywgLTMsNC8qbWVhbiAoMC4wMTQwOTEzKSwgY29ycmVsYXRpb24gKDAuNTU0Nzc0KSovLFxuICAgIC04LC0yLCAtOCwzLyptZWFuICgwLjAxNzA0OSksIGNvcnJlbGF0aW9uICgwLjU1NDYxKSovLFxuICAgIDQsMiwgMTIsMTIvKm1lYW4gKDAuMDE3NzgpLCBjb3JyZWxhdGlvbiAoMC41NDY5MjEpKi8sXG4gICAgMiwtNSwgMywxMS8qbWVhbiAoMC4wMjI0MDIyKSwgY29ycmVsYXRpb24gKDAuNTQ5NjY3KSovLFxuICAgIDYsLTksIDExLC0xMy8qbWVhbiAoMC4wMjkxNjEpLCBjb3JyZWxhdGlvbiAoMC41NDYyOTUpKi8sXG4gICAgMywtMSwgNywxMi8qbWVhbiAoMC4wMzAzMDgxKSwgY29ycmVsYXRpb24gKDAuNTQ4NTk5KSovLFxuICAgIDExLC0xLCAxMiw0LyptZWFuICgwLjAzNTUxNTEpLCBjb3JyZWxhdGlvbiAoMC41MjM5NDMpKi8sXG4gICAgLTMsMCwgLTMsNi8qbWVhbiAoMC4wNDE3OTA0KSwgY29ycmVsYXRpb24gKDAuNTQzMzk1KSovLFxuICAgIDQsLTExLCA0LDEyLyptZWFuICgwLjA0ODcyOTIpLCBjb3JyZWxhdGlvbiAoMC41NDI4MTgpKi8sXG4gICAgMiwtNCwgMiwxLyptZWFuICgwLjA1NzUxMjQpLCBjb3JyZWxhdGlvbiAoMC41NTQ4ODgpKi8sXG4gICAgLTEwLC02LCAtOCwxLyptZWFuICgwLjA1OTQyNDIpLCBjb3JyZWxhdGlvbiAoMC41NDQwMjYpKi8sXG4gICAgLTEzLDcsIC0xMSwxLyptZWFuICgwLjA1OTczOTEpLCBjb3JyZWxhdGlvbiAoMC41NTA1MjQpKi8sXG4gICAgLTEzLDEyLCAtMTEsLTEzLyptZWFuICgwLjA2MDg5NzQpLCBjb3JyZWxhdGlvbiAoMC41NTM4MykqLyxcbiAgICA2LDAsIDExLC0xMy8qbWVhbiAoMC4wNjUxMjYpLCBjb3JyZWxhdGlvbiAoMC41NTIwMDYpKi8sXG4gICAgMCwtMSwgMSw0LyptZWFuICgwLjA3NDIyNCksIGNvcnJlbGF0aW9uICgwLjU0NjM3MikqLyxcbiAgICAtMTMsMywgLTksLTIvKm1lYW4gKDAuMDgwODU5MiksIGNvcnJlbGF0aW9uICgwLjU1NDg3NSkqLyxcbiAgICAtOSw4LCAtNiwtMy8qbWVhbiAoMC4wODgzMzc4KSwgY29ycmVsYXRpb24gKDAuNTUxMTc4KSovLFxuICAgIC0xMywtNiwgLTgsLTIvKm1lYW4gKDAuMDkwMTAzNSksIGNvcnJlbGF0aW9uICgwLjU0ODQ0NikqLyxcbiAgICA1LC05LCA4LDEwLyptZWFuICgwLjA5NDk4NDMpLCBjb3JyZWxhdGlvbiAoMC41NTQ2OTQpKi8sXG4gICAgMiw3LCAzLC05LyptZWFuICgwLjA5OTQxNTIpLCBjb3JyZWxhdGlvbiAoMC41NTA5NzkpKi8sXG4gICAgLTEsLTYsIC0xLC0xLyptZWFuICgwLjEwMDQ1KSwgY29ycmVsYXRpb24gKDAuNTUyNzE0KSovLFxuICAgIDksNSwgMTEsLTIvKm1lYW4gKDAuMTAwNjg2KSwgY29ycmVsYXRpb24gKDAuNTUyNTk0KSovLFxuICAgIDExLC0zLCAxMiwtOC8qbWVhbiAoMC4xMDEwOTEpLCBjb3JyZWxhdGlvbiAoMC41MzIzOTQpKi8sXG4gICAgMywwLCAzLDUvKm1lYW4gKDAuMTAxMTQ3KSwgY29ycmVsYXRpb24gKDAuNTI1NTc2KSovLFxuICAgIC0xLDQsIDAsMTAvKm1lYW4gKDAuMTA1MjYzKSwgY29ycmVsYXRpb24gKDAuNTMxNDk4KSovLFxuICAgIDMsLTYsIDQsNS8qbWVhbiAoMC4xMTA3ODUpLCBjb3JyZWxhdGlvbiAoMC41NDA0OTEpKi8sXG4gICAgLTEzLDAsIC0xMCw1LyptZWFuICgwLjExMjc5OCksIGNvcnJlbGF0aW9uICgwLjUzNjU4MikqLyxcbiAgICA1LDgsIDEyLDExLyptZWFuICgwLjExNDE4MSksIGNvcnJlbGF0aW9uICgwLjU1NTc5MykqLyxcbiAgICA4LDksIDksLTYvKm1lYW4gKDAuMTE3NDMxKSwgY29ycmVsYXRpb24gKDAuNTUzNzYzKSovLFxuICAgIDcsLTQsIDgsLTEyLyptZWFuICgwLjExODUyMiksIGNvcnJlbGF0aW9uICgwLjU1MzQ1MikqLyxcbiAgICAtMTAsNCwgLTEwLDkvKm1lYW4gKDAuMTIwOTQpLCBjb3JyZWxhdGlvbiAoMC41NTQ3ODUpKi8sXG4gICAgNywzLCAxMiw0LyptZWFuICgwLjEyMjU4MiksIGNvcnJlbGF0aW9uICgwLjU1NTgyNSkqLyxcbiAgICA5LC03LCAxMCwtMi8qbWVhbiAoMC4xMjQ5NzgpLCBjb3JyZWxhdGlvbiAoMC41NDk4NDYpKi8sXG4gICAgNywwLCAxMiwtMi8qbWVhbiAoMC4xMjcwMDIpLCBjb3JyZWxhdGlvbiAoMC41Mzc0NTIpKi8sXG4gICAgLTEsLTYsIDAsLTExLyptZWFuICgwLjEyNzE0OCksIGNvcnJlbGF0aW9uICgwLjU0NzQwMSkqL1xuXTsiLCJpbXBvcnQgbWF0cml4X3QgZnJvbSAnLi4vbWF0cml4X3QvbWF0cml4X3QuanMnXG5pbXBvcnQgYml0X3BhdHRlcm5fMzEgZnJvbSAnLi9iaXRfcGF0dGVybl8zMS5qcydcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHtyZWN0aWZ5X3BhdGNofSBmcm9tICcuL3JlY3RpZnlfcGF0Y2guanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG9yYiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYml0X3BhdHRlcm5fMzFfID0gbmV3IEludDMyQXJyYXkoYml0X3BhdHRlcm5fMzEpO1xuICAgICAgICB0aGlzLkggPSBuZXcgbWF0cml4X3QoMywgMywgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMucGF0Y2hfaW1nID0gbmV3IG1hdHJpeF90KDMyLCAzMiwgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG5cbiAgICBkZXNjcmliZShzcmMsIGNvcm5lcnMsIGNvdW50LCBkZXNjcmlwdG9ycykge1xuICAgICAgICB2YXIgREVTQ1JfU0laRSA9IDMyOyAvLyBieXRlcztcbiAgICAgICAgdmFyIGkgPSAwLCBiID0gMCwgcHggPSAwLjAsIHB5ID0gMC4wLCBhbmdsZSA9IDAuMDtcbiAgICAgICAgdmFyIHQwID0gMCwgdDEgPSAwLCB2YWwgPSAwO1xuICAgICAgICB2YXIgaW1nID0gc3JjLmRhdGEsIHcgPSBzcmMuY29scywgaCA9IHNyYy5yb3dzO1xuICAgICAgICB2YXIgcGF0Y2hfZCA9IHRoaXMucGF0Y2hfaW1nLmRhdGE7XG4gICAgICAgIHZhciBwYXRjaF9vZmYgPSAxNiAqIDMyICsgMTY7IC8vIGNlbnRlciBvZiBwYXRjaFxuICAgICAgICB2YXIgcGF0dCA9IDA7XG5cbiAgICAgICAgaWYgKCEoZGVzY3JpcHRvcnMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkpIHtcbiAgICAgICAgICAgIC8vIHJlbG9jYXRlIHRvIFU4IHR5cGVcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnR5cGUgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5jb2xzID0gREVTQ1JfU0laRTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJvd3MgPSBjb3VudDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmNoYW5uZWwgPSAxO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJlc2l6ZShERVNDUl9TSVpFLCBjb3VudCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVzY3JfZCA9IGRlc2NyaXB0b3JzLmRhdGE7XG4gICAgICAgIHZhciBkZXNjcl9vZmYgPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBweCA9IGNvcm5lcnNbaV0ueDtcbiAgICAgICAgICAgIHB5ID0gY29ybmVyc1tpXS55O1xuICAgICAgICAgICAgYW5nbGUgPSBjb3JuZXJzW2ldLmFuZ2xlO1xuXG4gICAgICAgICAgICByZWN0aWZ5X3BhdGNoKHNyYywgdGhpcy5wYXRjaF9pbWcsIGFuZ2xlLCBweCwgcHksIDMyLCB0aGlzLkgpO1xuXG4gICAgICAgICAgICAvLyBkZXNjcmliZSB0aGUgcGF0Y2hcbiAgICAgICAgICAgIHBhdHQgPSAwO1xuICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IERFU0NSX1NJWkU7ICsrYikge1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCA9ICh0MCA8IHQxKSB8IDA7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCAxO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgMjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDM7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA0O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHZhbCB8PSAodDAgPCB0MSkgPDwgNTtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dOyBwYXR0ICs9IDJcbiAgICAgICAgICAgICAgICB2YWwgfD0gKHQwIDwgdDEpIDw8IDY7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07IHBhdHQgKz0gMlxuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTsgcGF0dCArPSAyXG4gICAgICAgICAgICAgICAgdmFsIHw9ICh0MCA8IHQxKSA8PCA3O1xuXG4gICAgICAgICAgICAgICAgZGVzY3JfZFtkZXNjcl9vZmYgKyBiXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc2NyX29mZiArPSBERVNDUl9TSVpFO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBpbWdwcm9jIGZyb20gJy4uL2ltZ3Byb2MvaW1ncHJvYy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3RpZnlfcGF0Y2goc3JjLCBkc3QsIGFuZ2xlLCBweCwgcHksIHBzaXplLCBIKSB7XG4gICAgdmFyIGNvc2luZSA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICB2YXIgc2luZSAgID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgIHZhciBpbWdwcmMgPSBuZXcgaW1ncHJvYygpO1xuXG4gICAgSC5kYXRhWzBdID0gY29zaW5lLCBILmRhdGFbMV0gPSAtc2luZSwgICAgSC5kYXRhWzJdID0gKC1jb3NpbmUgKyBzaW5lICApICogcHNpemUqMC41ICsgcHgsXG4gICAgSC5kYXRhWzNdID0gc2luZSwgICBILmRhdGFbNF0gPSAgY29zaW5lLCAgSC5kYXRhWzVdID0gKC1zaW5lICAgLSBjb3NpbmUpICogcHNpemUqMC41ICsgcHk7XG5cbiAgICBpbWdwcmMud2FycF9hZmZpbmUoc3JjLCBkc3QsIEgsIDEyOCk7XG59IiwiaW1wb3J0IGltZ3Byb2MgZnJvbSAnLi4vaW1ncHJvYy9pbWdwcm9jLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHlyYW1pZF90IHtcbiAgICBjY29uc3RydWN0b3IobGV2ZWxzKSB7XG4gICAgICAgIHRoaXMubGV2ZWxzID0gbGV2ZWxzIHwgMDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEFycmF5KGxldmVscyk7XG4gICAgICAgIC8vanNmZWF0TmV4dC5pbWdwcm9jLnB5cmRvd24gaXMgbm90IHlldCBpbXBsZW1lbnRlZC4uLiBcbiAgICAgICAgdGhpcy5weXJkb3duID0gbmV3IGltZ3Byb2MucHlyZG93bjtcbiAgICB9XG5cbiAgICBhbGxvY2F0ZShzdGFydF93LCBzdGFydF9oLCBkYXRhX3R5cGUpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmxldmVscztcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFbaV0gPSBuZXcganNmZWF0TmV4dC5tYXRyaXhfdChzdGFydF93ID4+IGksIHN0YXJ0X2ggPj4gaSwgZGF0YV90eXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1aWxkKGlucHV0LCBza2lwX2ZpcnN0X2xldmVsKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2tpcF9maXJzdF9sZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBza2lwX2ZpcnN0X2xldmVsID0gdHJ1ZTsgfVxuICAgICAgICAvLyBqdXN0IGNvcHkgZGF0YSB0byBmaXJzdCBsZXZlbFxuICAgICAgICB2YXIgaSA9IDIsIGEgPSBpbnB1dCwgYiA9IHRoaXMuZGF0YVswXTtcbiAgICAgICAgaWYgKCFza2lwX2ZpcnN0X2xldmVsKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGlucHV0LmNvbHMgKiBpbnB1dC5yb3dzO1xuICAgICAgICAgICAgd2hpbGUgKC0taiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgYi5kYXRhW2pdID0gaW5wdXQuZGF0YVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBiID0gdGhpcy5kYXRhWzFdO1xuICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIGZvciAoOyBpIDwgdGhpcy5sZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICBiID0gdGhpcy5kYXRhW2ldO1xuICAgICAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IHRoaXJkX2NoZWNrLCBpc19sb2NhbF9tYXhpbWEsIHBlcmZvcm1fb25lX3BvaW50LCBsZXZfdGFibGVfdCB9IGZyb20gJy4veWFwZV91dGlscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgeWFwZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxfdGFibGVzID0gW107XG4gICAgICAgIHRoaXMudGF1ID0gNztcbiAgICB9XG5cbiAgICBpbml0KHdpZHRoLCBoZWlnaHQsIHJhZGl1cywgcHlyYW1pZF9sZXZlbHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBweXJhbWlkX2xldmVscyA9PT0gXCJ1bmRlZmluZWRcIikgeyBweXJhbWlkX2xldmVscyA9IDE7IH1cbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWluKHJhZGl1cywgNyk7XG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWF4KHJhZGl1cywgMyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBweXJhbWlkX2xldmVsczsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsX3RhYmxlc1tpXSA9IG5ldyBsZXZfdGFibGVfdCh3aWR0aCA+PiBpLCBoZWlnaHQgPj4gaSwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRldGVjdChzcmMsIHBvaW50cywgYm9yZGVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7IGJvcmRlciA9IDQ7IH1cbiAgICAgICAgdmFyIHQgPSB0aGlzLmxldmVsX3RhYmxlc1swXTtcbiAgICAgICAgdmFyIFIgPSB0LnJhZGl1cyB8IDAsIFJtMSA9IChSIC0gMSkgfCAwO1xuICAgICAgICB2YXIgZGlycyA9IHQuZGlycztcbiAgICAgICAgdmFyIGRpcnNfY291bnQgPSB0LmRpcnNfY291bnQgfCAwO1xuICAgICAgICB2YXIgb3Bwb3NpdGUgPSBkaXJzX2NvdW50ID4+IDE7XG4gICAgICAgIHZhciBpbWcgPSBzcmMuZGF0YSwgdyA9IHNyYy5jb2xzIHwgMCwgaCA9IHNyYy5yb3dzIHwgMCwgaHcgPSB3ID4+IDE7XG4gICAgICAgIHZhciBzY29yZXMgPSB0LnNjb3JlcztcbiAgICAgICAgdmFyIHggPSAwLCB5ID0gMCwgcm93ID0gMCwgcm93eCA9IDAsIGlwID0gMCwgaW0gPSAwLCBhYnNfc2NvcmUgPSAwLCBzY29yZSA9IDA7XG4gICAgICAgIHZhciB0YXUgPSB0aGlzLnRhdSB8IDA7XG4gICAgICAgIHZhciBudW1iZXJfb2ZfcG9pbnRzID0gMCwgcHQ7XG5cbiAgICAgICAgdmFyIHN4ID0gTWF0aC5tYXgoUiArIDEsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgc3kgPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIHZhciBleCA9IE1hdGgubWluKHcgLSBSIC0gMiwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgZXkgPSBNYXRoLm1pbihoIC0gUiAtIDIsIGggLSBib3JkZXIpIHwgMDtcblxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcbiAgICAgICAgICAgICAgICBpcCA9IGltZ1tyb3d4XSArIHRhdSwgaW0gPSBpbWdbcm93eF0gLSB0YXU7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW0gPCBpbWdbcm93eCArIFJdICYmIGltZ1tyb3d4ICsgUl0gPCBpcCAmJiBpbSA8IGltZ1tyb3d4IC0gUl0gJiYgaW1nW3Jvd3ggLSBSXSA8IGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3Jlc1tyb3d4XSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVyZm9ybV9vbmVfcG9pbnQoaW1nLCByb3d4LCBzY29yZXMsIGltLCBpcCwgZGlycywgb3Bwb3NpdGUsIGRpcnNfY291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxvY2FsIG1heGltYVxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcbiAgICAgICAgICAgICAgICBzY29yZSA9IHNjb3Jlc1tyb3d4XTtcbiAgICAgICAgICAgICAgICBhYnNfc2NvcmUgPSBNYXRoLmFicyhzY29yZSk7XG4gICAgICAgICAgICAgICAgaWYgKGFic19zY29yZSA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBwaXhlbCBpcyAwLCB0aGUgbmV4dCBvbmUgd2lsbCBub3QgYmUgZ29vZCBlbm91Z2guIFNraXAgaXQuXG4gICAgICAgICAgICAgICAgICAgICsreCwgKytyb3d4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlyZF9jaGVjayhzY29yZXMsIHJvd3gsIHcpID49IDMgJiYgaXNfbG9jYWxfbWF4aW1hKHNjb3Jlcywgcm93eCwgc2NvcmUsIGh3LCBSKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwb2ludHNbbnVtYmVyX29mX3BvaW50c107XG4gICAgICAgICAgICAgICAgICAgICAgICBwdC54ID0geCwgcHQueSA9IHksIHB0LnNjb3JlID0gYWJzX3Njb3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKytudW1iZXJfb2ZfcG9pbnRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB4ICs9IFJtMSwgcm93eCArPSBSbTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVtYmVyX29mX3BvaW50cztcbiAgICB9XG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHN0ZXAsIGRpcnMsIFIpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHgsIHk7XG5cbiAgICB4ID0gUjtcbiAgICBmb3IgKHkgPSAwOyB5IDwgeDsgeSsrLCBpKyspIHtcbiAgICAgICAgeCA9IChNYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeC0tOyB4IDwgeSAmJiB4ID49IDA7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgLXggPCB5OyB4LS0sIGkrKykge1xuICAgICAgICB5ID0gKE1hdGguc3FydCgoUiAqIFIgLSB4ICogeCkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh5LS07IHkgPj0gMDsgeS0tLCBpKyspIHtcbiAgICAgICAgeCA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHkgKiB5KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgeSA+IHg7IHktLSwgaSsrKSB7XG4gICAgICAgIHggPSAoLU1hdGguc3FydCgoUiAqIFIgLSB5ICogeSkpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSAoeCArIHN0ZXAgKiB5KTtcbiAgICB9XG4gICAgZm9yICh4Kys7IHggPD0gMDsgeCsrLCBpKyspIHtcbiAgICAgICAgeSA9ICgtTWF0aC5zcXJ0KChSICogUiAtIHggKiB4KSkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9ICh4ICsgc3RlcCAqIHkpO1xuICAgIH1cbiAgICBmb3IgKDsgeCA8IC15OyB4KyssIGkrKykge1xuICAgICAgICB5ID0gKC1NYXRoLnNxcnQoKFIgKiBSIC0geCAqIHgpKSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuICAgIGZvciAoeSsrOyB5IDwgMDsgeSsrLCBpKyspIHtcbiAgICAgICAgeCA9IChNYXRoLnNxcnQoKFIgKiBSIC0geSAqIHkpKSArIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0gKHggKyBzdGVwICogeSk7XG4gICAgfVxuXG4gICAgZGlyc1tpXSA9IGRpcnNbMF07XG4gICAgZGlyc1tpICsgMV0gPSBkaXJzWzFdO1xuICAgIHJldHVybiBpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRfY2hlY2soU2IsIG9mZiwgc3RlcCkge1xuICAgIHZhciBuID0gMDtcbiAgICBpZiAoU2Jbb2ZmICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiArIHN0ZXBdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcCArIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcCAtIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmIC0gc3RlcF0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwIC0gMV0gIT0gMCkgbisrO1xuXG4gICAgcmV0dXJuIG47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc19sb2NhbF9tYXhpbWEocCwgb2ZmLCB2LCBzdGVwLCBuZWlnaGJvcmhvb2QpIHtcbiAgICB2YXIgeCwgeTtcblxuICAgIGlmICh2ID4gMCkge1xuICAgICAgICBvZmYgLT0gc3RlcCAqIG5laWdoYm9yaG9vZDtcbiAgICAgICAgZm9yICh5ID0gLW5laWdoYm9yaG9vZDsgeSA8PSBuZWlnaGJvcmhvb2Q7ICsreSkge1xuICAgICAgICAgICAgZm9yICh4ID0gLW5laWdoYm9yaG9vZDsgeCA8PSBuZWlnaGJvcmhvb2Q7ICsreCkge1xuICAgICAgICAgICAgICAgIGlmIChwW29mZiArIHhdID4gdikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2ZmICs9IHN0ZXA7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBvZmYgLT0gc3RlcCAqIG5laWdoYm9yaG9vZDtcbiAgICAgICAgZm9yICh5ID0gLW5laWdoYm9yaG9vZDsgeSA8PSBuZWlnaGJvcmhvb2Q7ICsreSkge1xuICAgICAgICAgICAgZm9yICh4ID0gLW5laWdoYm9yaG9vZDsgeCA8PSBuZWlnaGJvcmhvb2Q7ICsreCkge1xuICAgICAgICAgICAgICAgIGlmIChwW29mZiArIHhdIDwgdikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2ZmICs9IHN0ZXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJmb3JtX29uZV9wb2ludChJLCB4LCBTY29yZXMsIEltLCBJcCwgZGlycywgb3Bwb3NpdGUsIGRpcnNfbmIpIHtcbiAgICB2YXIgc2NvcmUgPSAwO1xuICAgIHZhciBhID0gMCwgYiA9IChvcHBvc2l0ZSAtIDEpIHwgMDtcbiAgICB2YXIgQSA9IDAsIEIwID0gMCwgQjEgPSAwLCBCMiA9IDA7XG4gICAgdmFyIHN0YXRlID0gMDtcblxuICAgIC8vIFdFIEtOT1cgVEhBVCBOT1QoQSB+IEkwICYgQjEgfiBJMCk6XG4gICAgQSA9IElbeCArIGRpcnNbYV1dO1xuICAgIGlmICgoQSA8PSBJcCkpIHtcbiAgICAgICAgaWYgKChBID49IEltKSkgeyAvLyBBIH4gSTBcbiAgICAgICAgICAgIEIwID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIwIDw9IElwKSkge1xuICAgICAgICAgICAgICAgIGlmICgoQjAgPj0gSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBiKys7IEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHN0YXRlID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlLyogaWYgKChCMSA8IEltKSkqLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjIgPCBJbSkpIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9lbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjEgfiBJMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgeyAvLyBCMCA8IEkwXG4gICAgICAgICAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSA2O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgoQjEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSBzdGF0ZSA9IDc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChCMiA8IEltKSkgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9IC8vIEEgfiBJMCwgQjEgfiBJMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAvLyBBID4gSTBcbiAgICAgICAgICAgIEIwID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoKEIwID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgYisrOyBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKChCMSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgIGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICBzdGF0ZSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSAvLyBBIDwgSTBcbiAgICB7XG4gICAgICAgIEIwID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmICgoQjAgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgIGIrKzsgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKChCMSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICBzdGF0ZSA9IDA7XG4gICAgfVxuXG4gICAgZm9yIChhID0gMTsgYSA8PSBvcHBvc2l0ZTsgYSsrKSB7XG4gICAgICAgIEEgPSBJW3ggKyBkaXJzW2FdXTtcblxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIxID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDg7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIxIDw9IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEIyIDw9IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDE7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA5OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMSA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA0OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA1OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAxOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChCMiA+PSBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDI7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDc7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMDsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmICgoQjIgPD0gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAzOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA2OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgaWYgKChBID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKChCMiA+IElwKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gMzsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgaWYgKChCMiA8IEltKSkgeyBzY29yZSAtPSBBICsgQjE7IHN0YXRlID0gNjsgYnJlYWs7IH07XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMiB+IEkwXG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgaWYgKChBIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7IGIrKzsgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAyOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSA3OyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGlmICgoQSA+IElwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPCBJbSkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDk7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPCBJbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAxOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGlmICgoQSA8IEltKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyID4gSXApKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyOyBiKys7IEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQjIgPiBJcCkpIHsgU2NvcmVzW3hdID0gMDsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2NvcmUgLT0gQSArIEIxOyBzdGF0ZSA9IDg7IGJyZWFrOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKEEgPiBJcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjsgYisrOyBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKEIyIDwgSW0pKSB7IFNjb3Jlc1t4XSA9IDA7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB7IHNjb3JlIC09IEEgKyBCMTsgc3RhdGUgPSAwOyBicmVhazsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvL1wiUEIgZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIHN3aXRjaChzdGF0ZSlcbiAgICB9IC8vIGZvcihhLi4uKVxuXG4gICAgU2NvcmVzW3hdID0gKHNjb3JlICsgZGlyc19uYiAqIElbeF0pO1xufVxuXG5leHBvcnQgY2xhc3MgbGV2X3RhYmxlX3Qge1xuICAgIGNvbnN0cnVjdG9yKHcsIGgsIHIpIHtcbiAgICAgICAgdGhpcy5kaXJzID0gbmV3IEludDMyQXJyYXkoMTAyNCk7XG4gICAgICAgIHRoaXMuZGlyc19jb3VudCA9IHByZWNvbXB1dGVfZGlyZWN0aW9ucyh3LCB0aGlzLmRpcnMsIHIpIHwgMDtcbiAgICAgICAgdGhpcy5zY29yZXMgPSBuZXcgSW50MzJBcnJheSh3ICogaCk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gciB8IDA7XG4gICAgfVxufSIsImltcG9ydCB7IGNvbXB1dGVfbGFwbGFjaWFuLCBoZXNzaWFuX21pbl9laWdlbl92YWx1ZSB9IGZyb20gJy4veWFwZTA2X3V0aWxzLmpzJ1xuaW1wb3J0IGNhY2hlIGZyb20gJy4uL2NhY2hlL2NhY2hlLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgeWFwZTA2IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBjYWNoZSgpO1xuICAgICAgICB0aGlzLmNhY2hlLmFsbG9jYXRlKDMwLCA2NDAgKiA0KTtcbiAgICAgICAgdGhpcy5sYXBsYWNpYW5fdGhyZXNob2xkID0gMzA7XG4gICAgICAgIHRoaXMubWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZCA9IDI1O1xuICAgIH1cbiAgICBkZXRlY3Qoc3JjLCBwb2ludHMsIGJvcmRlcikge1xuICAgICAgICBpZiAodHlwZW9mIGJvcmRlciA9PT0gXCJ1bmRlZmluZWRcIikgeyBib3JkZXIgPSA1OyB9XG4gICAgICAgIHZhciB4ID0gMCwgeSA9IDA7XG4gICAgICAgIHZhciB3ID0gc3JjLmNvbHMsIGggPSBzcmMucm93cywgc3JkX2QgPSBzcmMuZGF0YTtcbiAgICAgICAgdmFyIER4eCA9IDUsIER5eSA9ICg1ICogdykgfCAwO1xuICAgICAgICB2YXIgRHh5ID0gKDMgKyAzICogdykgfCAwLCBEeXggPSAoMyAtIDMgKiB3KSB8IDA7XG4gICAgICAgIHZhciBsYXBfYnVmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICogaCkgPDwgMik7XG4gICAgICAgIHZhciBsYXBsYWNpYW4gPSBsYXBfYnVmLmkzMjtcbiAgICAgICAgdmFyIGx2ID0gMCwgcm93ID0gMCwgcm93eCA9IDAsIG1pbl9laWdlbl92YWx1ZSA9IDAsIHB0O1xuICAgICAgICB2YXIgbnVtYmVyX29mX3BvaW50cyA9IDA7XG4gICAgICAgIHZhciBsYXBfdGhyZXNoID0gdGhpcy5sYXBsYWNpYW5fdGhyZXNob2xkO1xuICAgICAgICB2YXIgZWlnZW5fdGhyZXNoID0gdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkO1xuXG4gICAgICAgIHZhciBzeCA9IE1hdGgubWF4KDUsIGJvcmRlcikgfCAwO1xuICAgICAgICB2YXIgc3kgPSBNYXRoLm1heCgzLCBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV4ID0gTWF0aC5taW4odyAtIDUsIHcgLSBib3JkZXIpIHwgMDtcbiAgICAgICAgdmFyIGV5ID0gTWF0aC5taW4oaCAtIDMsIGggLSBib3JkZXIpIHwgMDtcblxuICAgICAgICB4ID0gdyAqIGg7XG4gICAgICAgIHdoaWxlICgtLXggPj0gMCkgeyBsYXBsYWNpYW5beF0gPSAwOyB9XG4gICAgICAgIGNvbXB1dGVfbGFwbGFjaWFuKHNyZF9kLCBsYXBsYWNpYW4sIHcsIGgsIER4eCwgRHl5LCBzeCwgc3ksIGV4LCBleSk7XG5cbiAgICAgICAgcm93ID0gKHN5ICogdyArIHN4KSB8IDA7XG4gICAgICAgIGZvciAoeSA9IHN5OyB5IDwgZXk7ICsreSwgcm93ICs9IHcpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IHN4LCByb3d4ID0gcm93OyB4IDwgZXg7ICsreCwgKytyb3d4KSB7XG5cbiAgICAgICAgICAgICAgICBsdiA9IGxhcGxhY2lhbltyb3d4XTtcbiAgICAgICAgICAgICAgICBpZiAoKGx2IDwgLWxhcF90aHJlc2ggJiZcbiAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIDFdICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gd10gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHddICYmXG4gICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3IC0gMV0gJiYgbHYgPCBsYXBsYWNpYW5bcm93eCArIHcgLSAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gdyArIDFdICYmIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pXG4gICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgICAgIChsdiA+IGxhcF90aHJlc2ggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSB3XSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSB3IC0gMV0gJiYgbHYgPiBsYXBsYWNpYW5bcm93eCArIHcgLSAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgKyAxXSAmJiBsdiA+IGxhcGxhY2lhbltyb3d4ICsgdyArIDFdKVxuICAgICAgICAgICAgICAgICkge1xuXG4gICAgICAgICAgICAgICAgICAgIG1pbl9laWdlbl92YWx1ZSA9IGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlKHNyZF9kLCByb3d4LCBsdiwgRHh4LCBEeXksIER4eSwgRHl4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbl9laWdlbl92YWx1ZSA+IGVpZ2VuX3RocmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwb2ludHNbbnVtYmVyX29mX3BvaW50c107XG4gICAgICAgICAgICAgICAgICAgICAgICBwdC54ID0geCwgcHQueSA9IHksIHB0LnNjb3JlID0gbWluX2VpZ2VuX3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgKytudW1iZXJfb2ZfcG9pbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgKyt4LCArK3Jvd3g7IC8vIHNraXAgbmV4dCBwaXhlbCBzaW5jZSB0aGlzIGlzIG1heGltYSBpbiAzeDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihsYXBfYnVmKTtcblxuICAgICAgICByZXR1cm4gbnVtYmVyX29mX3BvaW50cztcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVfbGFwbGFjaWFuKHNyYywgZHN0LCB3LCBoLCBEeHgsIER5eSwgc3gsc3ksIGV4LGV5KSB7XG4gICAgdmFyIHk9MCx4PTAseXJvdz0oc3kqdytzeCl8MCxyb3c9eXJvdztcblxuICAgIGZvcih5ID0gc3k7IHkgPCBleTsgKyt5LCB5cm93Kz13LCByb3cgPSB5cm93KSB7XG4gICAgICAgIGZvcih4ID0gc3g7IHggPCBleDsgKyt4LCArK3Jvdykge1xuICAgICAgICAgICAgZHN0W3Jvd10gPSAtNCAqIHNyY1tyb3ddICsgc3JjW3JvdytEeHhdICsgc3JjW3Jvdy1EeHhdICsgc3JjW3JvdytEeXldICsgc3JjW3Jvdy1EeXldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JjLCBvZmYsIHRyLCBEeHgsIER5eSwgRHh5LCBEeXgpIHtcbiAgICB2YXIgSXh4ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeHhdICsgc3JjW29mZiAtIER4eF07XG4gICAgdmFyIEl5eSA9IC0yICogc3JjW29mZl0gKyBzcmNbb2ZmICsgRHl5XSArIHNyY1tvZmYgLSBEeXldO1xuICAgIHZhciBJeHkgPSBzcmNbb2ZmICsgRHh5XSArIHNyY1tvZmYgLSBEeHldIC0gc3JjW29mZiArIER5eF0gLSBzcmNbb2ZmIC0gRHl4XTtcbiAgICB2YXIgc3FydF9kZWx0YSA9ICggTWF0aC5zcXJ0KCgoSXh4IC0gSXl5KSAqIChJeHggLSBJeXkpICsgNCAqIEl4eSAqIEl4eSkgKSApfDA7XG5cbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5hYnModHIgLSBzcXJ0X2RlbHRhKSwgTWF0aC5hYnMoLSh0ciArIHNxcnRfZGVsdGEpKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4vanNmZWF0TmV4dC5qcydcbmV4cG9ydCBkZWZhdWx0IHtcbiAgIGpzZmVhdE5leHRcbn0iXSwibmFtZXMiOlsiX3Bvb2xfbm9kZV90IiwiY2FjaGUiLCJfcG9vbF9oZWFkIiwiX3Bvb2xfdGFpbCIsIl9wb29sX3NpemUiLCJjYXBhY2l0eSIsImRhdGFfc2l6ZSIsImkiLCJub2RlIiwibmV4dCIsInNpemVfaW5fYnl0ZXMiLCJzaXplIiwicmVzaXplIiwiSlNGRUFUX0NPTlNUQU5UUyIsIkVQU0lMT04iLCJGTFRfTUlOIiwiVThfdCIsIlMzMl90IiwiRjMyX3QiLCJTNjRfdCIsIkY2NF90IiwiQzFfdCIsIkMyX3QiLCJDM190IiwiQzRfdCIsIkNPTE9SX1JHQkEyR1JBWSIsIkNPTE9SX1JHQjJHUkFZIiwiQ09MT1JfQkdSQTJHUkFZIiwiQ09MT1JfQkdSMkdSQVkiLCJCT1hfQkxVUl9OT1NDQUxFIiwiU1ZEX1VfVCIsIlNWRF9WX1QiLCJkYXRhX3R5cGUiLCJfZGF0YV90eXBlX3NpemUiLCJJbnQzMkFycmF5IiwidHlwZSIsIl9jb252b2xfdTgiLCJidWYiLCJzcmNfZCIsImRzdF9kIiwidyIsImgiLCJmaWx0ZXIiLCJrZXJuZWxfc2l6ZSIsImhhbGZfa2VybmVsIiwiaiIsImsiLCJzcCIsImRwIiwic3VtIiwic3VtMSIsInN1bTIiLCJzdW0zIiwiZjAiLCJmayIsIncyIiwidzMiLCJ3NCIsIk1hdGgiLCJtaW4iLCJfY29udm9sIiwiX3Jlc2FtcGxlIiwiX3Jlc2FtcGxlX3U4IiwibWF0aCIsImltZ3Byb2MiLCJhbGxvY2F0ZSIsInNyYyIsImRzdCIsImNvZGUiLCJ4IiwieSIsImlyIiwianIiLCJjb2VmZl9yIiwiY29lZmZfZyIsImNvZWZmX2IiLCJjbiIsImNuMiIsImNuMyIsImRzdF91OCIsImRhdGEiLCJudyIsIm5oIiwicm93cyIsImNvbHMiLCJjaGFubmVsIiwicmFkaXVzIiwib3B0aW9ucyIsImgyIiwiZW5kIiwid2luZG93U2l6ZSIsInJhZGl1c1BsdXNPbmUiLCJyYWRpdXNQbHVzMiIsInNjYWxlIiwidG1wX2J1ZmYiLCJnZXRfYnVmZmVyIiwiZHN0SW5kZXgiLCJzcmNJbmRleCIsIm5leHRQaXhlbEluZGV4IiwicHJldmlvdXNQaXhlbEluZGV4IiwiZGF0YV9pMzIiLCJpMzIiLCJkYXRhX3U4IiwiaG9sZCIsInB1dF9idWZmZXIiLCJzaWdtYSIsImpzZmVhdG1hdGgiLCJtYXgiLCJpc191OCIsImJ1Zl9zeiIsImJ1Zl9ub2RlIiwiZmlsdF9ub2RlIiwiZjMyIiwiZ2V0X2dhdXNzaWFuX2tlcm5lbCIsImltZyIsInJob19yZXMiLCJ0aGV0YV9yZXMiLCJ0aHJlc2hvbGQiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3RlcCIsIm1pbl90aGV0YSIsIm1heF90aGV0YSIsIlBJIiwibnVtYW5nbGUiLCJyb3VuZCIsIm51bXJobyIsImlyaG8iLCJhY2N1bSIsInRhYlNpbiIsIkZsb2F0MzJBcnJheSIsInRhYkNvcyIsIm4iLCJhbmciLCJzaW4iLCJjb3MiLCJyIiwiX3NvcnRfYnVmIiwiQXJyYXkiLCJiYXNlIiwicHVzaCIsInNvcnQiLCJsMSIsImwyIiwibGluZXNNYXgiLCJsZW5ndGgiLCJsaW5lcyIsImlkeCIsImZsb29yIiwibHJobyIsImxhbmdsZSIsInN4Iiwic3kiLCJfdzIiLCJfaDIiLCJzcHRyIiwic2xpbmUiLCJkcHRyIiwiZGxpbmUiLCJ0cmFuc2Zvcm0iLCJmaWxsX3ZhbHVlIiwic3JjX3dpZHRoIiwic3JjX2hlaWdodCIsImRzdF93aWR0aCIsImRzdF9oZWlnaHQiLCJvZmYiLCJpeHMiLCJpeXMiLCJ4cyIsInlzIiwiYSIsImIiLCJwMCIsInAxIiwidGQiLCJtMDAiLCJtMDEiLCJtMDIiLCJtMTAiLCJtMTEiLCJtMTIiLCJ4b2ZzX2NvdW50IiwiY2giLCJzY2FsZV94Iiwic2NhbGVfeSIsImludl9zY2FsZV8yNTYiLCJkeCIsImR5Iiwic3gxIiwic3gyIiwiZnN4MSIsImZzeDIiLCJkeG4iLCJhbHBoYSIsImJldGEiLCJiZXRhMSIsInN1bV9ub2RlIiwieG9mc19ub2RlIiwieG9mcyIsImFicyIsImRhdGFfdCIsImtleXBvaW50X3QiLCJtYXRtYXRoIiwibWF0cml4X3QiLCJweXJhbWlkX3QiLCJsaW5hbGciLCJvcmIiLCJ5YXBlIiwieWFwZTA2IiwibW90aW9uX2VzdGltYXRvciIsImhvbW9ncmFwaHkyZCIsInJhbnNhY19wYXJhbXNfdCIsInBrZyIsImpzZmVhdE5leHQiLCJkdCIsIl9nZXRfZGF0YV90eXBlIiwiX2dldF9jaGFubmVsIiwiX2dldF9kYXRhX3R5cGVfc2l6ZSIsInZlcnNpb24iLCJzY29yZSIsImxldmVsIiwiYW5nbGUiLCJzd2FwIiwiQSIsImkwIiwiaTEiLCJ0IiwiaHlwb3QiLCJzcXJ0IiwiYXN0ZXAiLCJXIiwiViIsInZzdGVwIiwiZXBzIiwibSIsImwiLCJfaW4iLCJfaW4yIiwiaXRlcnMiLCJtYXhfaXRlciIsIm12IiwidmFsIiwicCIsInMiLCJjIiwiYTAiLCJiMCIsImluZFJfYnVmZiIsImluZENfYnVmZiIsImluZFIiLCJpbmRDIiwiQXQiLCJfVyIsIlZ0IiwibjEiLCJtaW52YWwiLCJpdGVyIiwiQWkiLCJBaiIsIlZpIiwiVmoiLCJjaGFuZ2VkIiwidDAiLCJ0MSIsInNkIiwiZ2FtbWEiLCJkZWx0YSIsInNlZWQiLCJ2YWwwIiwiYXN1bSIsIldfYnVmZiIsImY2NCIsIkIiLCJhZCIsImJkIiwiZCIsImNvbCIsInJvdyIsImNvbDIiLCJjcyIsInJzIiwiaW52X2RpYWciLCJVIiwiYXQiLCJfbSIsIl9uIiwiYV9idWZmIiwid19idWZmIiwidl9idWZmIiwiYV9tdCIsIndfbXQiLCJ2X210IiwidHJhbnNwb3NlIiwiSmFjb2JpU1ZESW1wbCIsIlgiLCJwdSIsInB2IiwibnJvd3MiLCJuY29scyIsInhzdW0iLCJ0b2wiLCJ1X2J1ZmYiLCJ1X210IiwidWQiLCJ3ZCIsInZkIiwic3ZkX2RlY29tcG9zZSIsInBhIiwiaWQiLCJ2ZWN0cyIsInZhbHMiLCJKYWNvYmlJbXBsIiwicXNvcnRfc3RhY2siLCJrZXJuZWwiLCJzaWdtYV94Iiwic2NhbGVfMngiLCJrZXJuX25vZGUiLCJfa2VybmVsIiwiZXhwIiwibW9kZWwiLCJzcmNfeDAiLCJzcmNfeTAiLCJkc3RfeDAiLCJkc3RfeTAiLCJzcmNfeDEiLCJzcmNfeTEiLCJkc3RfeDEiLCJkc3RfeTEiLCJzcmNfeDIiLCJzcmNfeTIiLCJkc3RfeDIiLCJkc3RfeTIiLCJzcmNfeDMiLCJzcmNfeTMiLCJkc3RfeDMiLCJkc3RfeTMiLCJ0MiIsInQ0IiwidDUiLCJ0NiIsInQ3IiwidDgiLCJ0OSIsInQxMCIsInQxMSIsInQxNCIsInQxNSIsInQxNiIsInQxOCIsInQyMCIsInQyMSIsInQyNCIsInQyNSIsInQyNiIsInQyNyIsInQyOCIsInQzMCIsInQzMiIsInQzNSIsInQ0MSIsInQ0MiIsInQ0MyIsInQ0NiIsInQ0OCIsInQ1MSIsInQ1NSIsIkhyMCIsIkhyMSIsIkhyMiIsIkhyMyIsIkhyNCIsIkhyNSIsIkhyNiIsIkhyNyIsIkhsMCIsIkhsMSIsIkhsMiIsIkhsMyIsIkhsNCIsIkhsNSIsIkhsNiIsIkhsNyIsInQxMiIsInQyMyIsInQzMSIsInQ0NCIsInQ0NyIsInQ0OSIsInQ1MCIsIm1hdCIsImFycmF5IiwibG93IiwiaGlnaCIsImNtcCIsImlzb3J0X3RocmVzaCIsInRhIiwidGIiLCJ0YyIsImxlZnQiLCJyaWdodCIsInB0ciIsInB0cjIiLCJsZWZ0MCIsImxlZnQxIiwicmlnaHQwIiwicmlnaHQxIiwicGl2b3QiLCJzd2FwX2NudCIsInN0YWNrIiwibWlkZGxlIiwibGwiLCJoaCIsIm1lZGlhbiIsIk0iLCJ2YWx1ZSIsImNvbHNfMSIsImxlbiIsIkF0aSIsInBBdCIsImF0ZCIsIkMiLCJBcCIsInBBIiwicEIiLCJwX0IiLCJDcCIsIm1jb2xzIiwiY2QiLCJtcm93cyIsInBDZGlhZyIsInBfQSIsInBDIiwicEN0IiwicF9DIiwicF9DQyIsImZyb20iLCJ0byIsImludkEiLCJ0MTMiLCJ0MTciLCJDZCIsIkFkIiwiQmQiLCJtMV8wIiwibTFfMSIsIm0xXzIiLCJtMV8zIiwibTFfNCIsIm0xXzUiLCJtMV82IiwibTFfNyIsIm0xXzgiLCJtMl8wIiwibTJfMSIsIm0yXzIiLCJtMl8zIiwibTJfNCIsIm0yXzUiLCJtMl82IiwibTJfNyIsIm0yXzgiLCJtZCIsIk0xMSIsIk0xMiIsIk0xMyIsIk0yMSIsIk0yMiIsIk0yMyIsIk0zMSIsIk0zMiIsIk0zMyIsIl9kYXRhX3R5cGUiLCJfZGF0YV9idWZmZXIiLCJidWZmZXIiLCJ1OCIsIm90aGVyIiwib2QiLCJuZXdfc2l6ZSIsIm5lZWRfY250IiwibWF4X2NudCIsImZyb21fc3ViIiwidG9fc3ViIiwibWF4X3RyeSIsImluZGljZXMiLCJzc2l0ZXIiLCJpZHhfaSIsIm9rIiwicmFuZG9tIiwiY2hlY2tfc3Vic2V0IiwiY291bnQiLCJ0aHJlc2giLCJlcnIiLCJtYXNrIiwibnVtaW5saWVycyIsImYiLCJlcnJvciIsInBhcmFtcyIsIm1heF9pdGVycyIsIm1vZGVsX3BvaW50cyIsIm5pdGVycyIsInJlc3VsdCIsInN1YnNldDAiLCJzdWJzZXQxIiwiZm91bmQiLCJtYyIsIm1yIiwibV9idWZmIiwibXNfYnVmZiIsImVycl9idWZmIiwiY3Vycl9tYXNrIiwiVThDMV90IiwiaW5saWVyc19tYXgiLCJubW9kZWxzIiwicnVuIiwiY29weV90byIsImdldF9zdWJzZXQiLCJmaW5kX2lubGllcnMiLCJ1cGRhdGVfaXRlcnMiLCJfbWF0aCIsIm1pbl9tZWRpYW4iLCJtb3Rpb25fbW9kZWwiLCJUMCIsIlQxIiwiQXRBIiwiQXRCIiwiY3gwIiwiY3kwIiwiZDAiLCJzMCIsImN4MSIsImN5MSIsImQxIiwiczEiLCJTUVJUMiIsInBvaW50cyIsImR4MSIsImR5MSIsImR4MiIsImR5MiIsImFmZmluZTJkIiwidDBkIiwidDFkIiwicHQwIiwicHQxIiwicHgiLCJweSIsIl9tYXRtYXRoIiwiX2xpbmFsZyIsImlzb19ub3JtYWxpemVfcG9pbnRzIiwiYl9idWZmIiwiYl9tdCIsIm11bHRpcGx5X0F0QSIsIm11bHRpcGx5X0F0QiIsImx1X3NvbHZlIiwiaW52ZXJ0XzN4MyIsIm11bHRpcGx5XzN4MyIsIm1MdEwiLCJFdmVjIiwiTHRMIiwiZXZkIiwiWSIsInNteCIsInNteSIsImNteCIsImNteSIsInNNeCIsInNNeSIsImNNeCIsImNNeSIsImVpZ2VuVlYiLCJ3dyIsIm5lZ2F0aXZlIiwiZnAwIiwiZnAxIiwiZnAyIiwiZnAzIiwidHAwIiwidHAxIiwidHAyIiwidHAzIiwiQTExIiwiQTEyIiwiQTEzIiwiQTIxIiwiQTIyIiwiQTIzIiwiQTMxIiwiQTMyIiwiQTMzIiwiQjExIiwiQjEyIiwiQjEzIiwiQjIxIiwiQjIyIiwiQjIzIiwiQjMxIiwiQjMyIiwiQjMzIiwiZGV0QSIsImRldGVybWluYW50XzN4MyIsImRldEIiLCJwcm9iIiwiX2VwcyIsIm51bSIsImxvZyIsImRlbm9tIiwicG93IiwiQXJyYXlCdWZmZXIiLCJVaW50OEFycmF5IiwiRmxvYXQ2NEFycmF5IiwiYml0X3BhdHRlcm5fMzEiLCJyZWN0aWZ5X3BhdGNoIiwiYml0X3BhdHRlcm5fMzFfIiwiSCIsInBhdGNoX2ltZyIsImNvcm5lcnMiLCJkZXNjcmlwdG9ycyIsIkRFU0NSX1NJWkUiLCJwYXRjaF9kIiwicGF0Y2hfb2ZmIiwicGF0dCIsImRlc2NyX2QiLCJkZXNjcl9vZmYiLCJwc2l6ZSIsImNvc2luZSIsInNpbmUiLCJpbWdwcmMiLCJ3YXJwX2FmZmluZSIsImxldmVscyIsInB5cmRvd24iLCJzdGFydF93Iiwic3RhcnRfaCIsImlucHV0Iiwic2tpcF9maXJzdF9sZXZlbCIsInRoaXJkX2NoZWNrIiwiaXNfbG9jYWxfbWF4aW1hIiwicGVyZm9ybV9vbmVfcG9pbnQiLCJsZXZfdGFibGVfdCIsImxldmVsX3RhYmxlcyIsInRhdSIsInB5cmFtaWRfbGV2ZWxzIiwiYm9yZGVyIiwiUiIsIlJtMSIsImRpcnMiLCJkaXJzX2NvdW50Iiwib3Bwb3NpdGUiLCJodyIsInNjb3JlcyIsInJvd3giLCJpcCIsImltIiwiYWJzX3Njb3JlIiwibnVtYmVyX29mX3BvaW50cyIsInB0IiwiZXgiLCJleSIsInByZWNvbXB1dGVfZGlyZWN0aW9ucyIsIlNiIiwidiIsIm5laWdoYm9yaG9vZCIsIkkiLCJTY29yZXMiLCJJbSIsIklwIiwiZGlyc19uYiIsIkIwIiwiQjEiLCJCMiIsInN0YXRlIiwiY29tcHV0ZV9sYXBsYWNpYW4iLCJoZXNzaWFuX21pbl9laWdlbl92YWx1ZSIsImxhcGxhY2lhbl90aHJlc2hvbGQiLCJtaW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkIiwic3JkX2QiLCJEeHgiLCJEeXkiLCJEeHkiLCJEeXgiLCJsYXBfYnVmIiwibGFwbGFjaWFuIiwibHYiLCJtaW5fZWlnZW5fdmFsdWUiLCJsYXBfdGhyZXNoIiwiZWlnZW5fdGhyZXNoIiwieXJvdyIsInRyIiwiSXh4IiwiSXl5IiwiSXh5Iiwic3FydF9kZWx0YSJdLCJzb3VyY2VSb290IjoiIn0=