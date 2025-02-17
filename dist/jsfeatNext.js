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

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
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
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
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
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
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
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
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
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
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

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, e);
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


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
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
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
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
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"@webarkit/jsfeat-next","version":"0.7.4","description":"Typescript version of jsfeat for WebARKit","main":"dist/jsfeatNext.js","types":"types/src/index.d.ts","scripts":{"build-ts":"rimraf ./build && tsc && webpack --mode production","dev-ts":"rimraf ./build && tsc && webpack --mode development --progress --watch","format-check":"prettier --check .","format":"prettier --write ."},"repository":{"type":"git","url":"git+https://github.com/webarkit/jsfeatNext.git"},"keywords":["jsfeat","jsfeatNext","WebAR","WebARKit","AugmentedReality","computer","vision"],"author":"Walter Perdan @kalwalt","license":"LGPL-3.0-or-later","bugs":{"url":"https://github.com/webarkit/jsfeatNext/issues"},"homepage":"https://github.com/webarkit/jsfeatNext#readme","devDependencies":{"@babel/core":"^7.26.9","@babel/plugin-transform-runtime":"^7.26.9","@babel/preset-env":"^7.26.9","babel-loader":"^9.2.1","rimraf":"^6.0.1","typescript":"^5.7.3","webpack":"5.98.0","webpack-cli":"6.0.1"},"dependencies":{"@babel/runtime":"^7.26.9","prettier":"^3.5.1","ts-loader":"^9.5.2"}}');

/***/ }),

/***/ "./src/cache/cache.ts":
/*!****************************!*\
  !*** ./src/cache/cache.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cache: () => (/* binding */ cache)
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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(cache, [{
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
}();

/***/ }),

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSFEAT_CONSTANTS: () => (/* binding */ JSFEAT_CONSTANTS)
/* harmony export */ });
var JSFEAT_CONSTANTS = {
  EPSILON: 0.0000001192092896,
  FLT_MIN: 1e-37,
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
/* harmony export */   data_type: () => (/* binding */ data_type)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var data_type = /*#__PURE__*/function () {
  function data_type() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, data_type);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_data_type_size", void 0);
    this._data_type_size = new Int32Array([-1, 1, 4, -1, 4, -1, -1, -1, 8, -1, -1, -1, -1, -1, -1, -1, 8]);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(data_type, [{
    key: "_get_data_type",
    value: function _get_data_type(type) {
      return type & 0xff00;
    }
  }, {
    key: "_get_channel",
    value: function _get_channel(type) {
      return type & 0xff;
    }
  }, {
    key: "_get_data_type_size",
    value: function _get_data_type_size(type) {
      return this._data_type_size[(type & 0xff00) >> 8];
    }
  }]);
}();

/***/ }),

/***/ "./src/fast_corners/fast_private.ts":
/*!******************************************!*\
  !*** ./src/fast_corners/fast_private.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _cmp_score_16: () => (/* binding */ _cmp_score_16)
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

/***/ }),

/***/ "./src/imgproc/convol.ts":
/*!*******************************!*\
  !*** ./src/imgproc/convol.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _convol: () => (/* binding */ _convol),
/* harmony export */   _convol_u8: () => (/* binding */ _convol_u8)
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
/* harmony export */   _resample: () => (/* binding */ _resample),
/* harmony export */   _resample_u8: () => (/* binding */ _resample_u8)
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
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _data_type_data_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data_type/data_type */ "./src/data_type/data_type.ts");
/* harmony import */ var _cache_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cache/cache */ "./src/cache/cache.ts");
/* harmony import */ var _imgproc_resample__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imgproc/resample */ "./src/imgproc/resample.ts");
/* harmony import */ var _imgproc_convol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imgproc/convol */ "./src/imgproc/convol.ts");
/* harmony import */ var _linalg_linalg_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./linalg/linalg_base */ "./src/linalg/linalg_base.ts");
/* harmony import */ var _fast_corners_fast_private__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fast_corners/fast_private */ "./src/fast_corners/fast_private.ts");
/* harmony import */ var _matmath_matmath__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./matmath/matmath */ "./src/matmath/matmath.ts");
/* harmony import */ var _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./matrix_t/matrix_t */ "./src/matrix_t/matrix_t.ts");
/* harmony import */ var _transform_transform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./transform/transform */ "./src/transform/transform.ts");
/* harmony import */ var _keypoint_t_keypoint_t__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./keypoint_t/keypoint_t */ "./src/keypoint_t/keypoint_t.ts");
/* harmony import */ var _orb_bit_pattern_31__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./orb/bit_pattern_31 */ "./src/orb/bit_pattern_31.ts");
/* harmony import */ var _orb_rectify_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./orb/rectify_patch */ "./src/orb/rectify_patch.ts");
/* harmony import */ var _yape_yape__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./yape/yape */ "./src/yape/yape.ts");
/* harmony import */ var _yape06_yape06_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./yape06/yape06_utils */ "./src/yape06/yape06_utils.ts");
/* harmony import */ var _motion_estimator_ransac_params_t__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./motion_estimator/ransac_params_t */ "./src/motion_estimator/ransac_params_t.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../package.json */ "./package.json");






var _jsfeatNext;
function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

















var jsfeatNext = /*#__PURE__*/function () {
  function jsfeatNext() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, jsfeatNext);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "dt", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "cache", void 0);
    this.dt = new _data_type_data_type__WEBPACK_IMPORTED_MODULE_6__.data_type();
    this.cache = new _cache_cache__WEBPACK_IMPORTED_MODULE_7__.cache();
    this.cache.allocate(30, 640 * 4);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(jsfeatNext, [{
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
}();
_jsfeatNext = jsfeatNext;
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "cache", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "fast_corners", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "imgproc", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "linalg", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "math", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "matmath", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "matrix_t", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "pyramid_t", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "transform", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "keypoint_t", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "yape", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "yape06", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "ransac_params_t", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "affine2d", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "homography2d", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "motion_estimator", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "optical_flow_lk", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "orb", void 0);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_22__.version);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "EPSILON", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.EPSILON);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "FLT_MIN", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.FLT_MIN);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "U8_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "S32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "F32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "S64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S64_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "F64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F64_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "C1_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "C2_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C2_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "C3_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C3_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "C4_t", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C4_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_RGB2GRAY);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_BGRA2GRAY);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.COLOR_BGR2GRAY);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "SVD_U_T", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_U_T);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "SVD_V_T", _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.SVD_V_T);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "U8C1_t", _jsfeatNext.U8_t | _jsfeatNext.C1_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "U8C3_t", _jsfeatNext.U8_t | _jsfeatNext.C3_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "U8C4_t", _jsfeatNext.U8_t | _jsfeatNext.C4_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "F32C1_t", _jsfeatNext.F32_t | _jsfeatNext.C1_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "F32C2_t", _jsfeatNext.F32_t | _jsfeatNext.C2_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "S32C1_t", _jsfeatNext.S32_t | _jsfeatNext.C1_t);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(jsfeatNext, "S32C2_t", _jsfeatNext.S32_t | _jsfeatNext.C2_t);

var motion_model = /*#__PURE__*/function (_jsfeatNext2) {
  function motion_model() {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, motion_model);
    _this = _callSuper(this, motion_model);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "T0", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "T1", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "AtA", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "AtB", void 0);
    _this.T0 = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(3, 3, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this.T1 = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(3, 3, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this.AtA = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(6, 6, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this.AtB = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(6, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(motion_model, _jsfeatNext2);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(motion_model, [{
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
}(jsfeatNext);
var affine2d = /*#__PURE__*/function (_motion_model2) {
  function affine2d() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, affine2d);
    return _callSuper(this, affine2d);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(affine2d, _motion_model2);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(affine2d, [{
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
}(motion_model);
var homography2d = /*#__PURE__*/function (_motion_model3) {
  function homography2d() {
    var _this2;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, homography2d);
    _this2 = _callSuper(this, homography2d);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this2, "mLtL", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this2, "Evec", void 0);
    _this2.mLtL = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(9, 9, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this2.Evec = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(9, 9, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    return _this2;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(homography2d, _motion_model3);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(homography2d, [{
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
        for (j = 0; j < i; ++j) LtL[i * 9 + j] = LtL[j * 9 + i];
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
}(motion_model);
jsfeatNext.cache = _cache_cache__WEBPACK_IMPORTED_MODULE_7__.cache;
jsfeatNext.pyramid_t = /*#__PURE__*/function (_jsfeatNext3) {
  function pyramid_t(levels) {
    var _this3;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, pyramid_t);
    _this3 = _callSuper(this, pyramid_t);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3, "levels", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3, "data", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3, "pyrdown", void 0);
    _this3.levels = levels | 0;
    _this3.data = new Array(levels);
    var _imgproc = new jsfeatNext.imgproc();
    _this3.pyrdown = _imgproc.pyrdown;
    return _this3;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(pyramid_t, _jsfeatNext3);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(pyramid_t, [{
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
}(jsfeatNext);
jsfeatNext.transform = _transform_transform__WEBPACK_IMPORTED_MODULE_14__.transform;
jsfeatNext.matrix_t = _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t;
jsfeatNext.keypoint_t = _keypoint_t_keypoint_t__WEBPACK_IMPORTED_MODULE_15__.keypoint_t;
jsfeatNext.fast_corners = /*#__PURE__*/function (_jsfeatNext4) {
  function fast_corners() {
    var _this4;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, fast_corners);
    _this4 = _callSuper(this, fast_corners);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this4, "offsets16", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this4, "_threshold", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this4, "threshold_tab", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this4, "pixel_off", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this4, "score_diff", void 0);
    _this4.offsets16 = new Int32Array([0, 3, 1, 3, 2, 2, 3, 1, 3, 0, 3, -1, 2, -2, 1, -3, 0, -3, -1, -3, -2, -2, -3, -1, -3, 0, -3, 1, -2, 2, -1, 3]);
    _this4.threshold_tab = new Uint8Array(512);
    _this4._threshold = 20;
    _this4.pixel_off = new Int32Array(25);
    _this4.score_diff = new Int32Array(25);
    return _this4;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(fast_corners, _jsfeatNext4);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(fast_corners, [{
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
      var score_func = _fast_corners_fast_private__WEBPACK_IMPORTED_MODULE_11__._cmp_score_16;
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
        for (j = 0; j < w; ++j) buf[curr + j] = 0;
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
}(jsfeatNext);
jsfeatNext.imgproc = /*#__PURE__*/function (_jsfeatNext5) {
  function imgproc() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, imgproc);
    return _callSuper(this, imgproc);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(imgproc, _jsfeatNext5);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(imgproc, [{
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
          (0,_imgproc_resample__WEBPACK_IMPORTED_MODULE_8__._resample_u8)(src, dst, this.cache, nw, nh);
        } else {
          (0,_imgproc_resample__WEBPACK_IMPORTED_MODULE_8__._resample)(src, dst, this.cache, nw, nh);
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
        (0,_imgproc_convol__WEBPACK_IMPORTED_MODULE_9__._convol_u8)(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
      } else {
        (0,_imgproc_convol__WEBPACK_IMPORTED_MODULE_9__._convol)(buf, src_d, dst_d, w, h, filter, kernel_size, half_kernel);
      }
      this.cache.put_buffer(buf_node);
      this.cache.put_buffer(filt_node);
    }
  }, {
    key: "hough_transform",
    value: function hough_transform(img, rho_res, theta_res, threshold) {
      var r;
      var i;
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
      for (i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
          if (image[i * step + j] != 0) {
            for (n = 0; n < numangle; n++) {
              r = Math.round(j * tabCos[n] + i * tabSin[n]);
              r += (numrho - 1) / 2;
              accum[(n + 1) * (numrho + 2) + r + 1] += 1;
            }
          }
        }
      }
      var _sort_buf = [];
      for (r = 0; r < numrho; r++) {
        for (n = 0; n < numangle; n++) {
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
      for (i = 0; i < linesMax; i++) {
        var idx = _sort_buf[i];
        n = Math.floor(idx * scale) - 1;
        r = idx - (n + 1) * (numrho + 2) - 1;
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
      for (; i < 256; ++i) hist0[i] = 0;
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
      var dxdy_m = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(w, h, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32C2_t, dxdy_node.data);
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
}(jsfeatNext);
jsfeatNext.math = /*#__PURE__*/function (_jsfeatNext6) {
  function math() {
    var _this5;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, math);
    _this5 = _callSuper(this, math);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this5, "qsort_stack", void 0);
    _this5.qsort_stack = new Int32Array(48 * 2);
    return _this5;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(math, _jsfeatNext6);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(math, [{
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
      console.warn("⚠️⚠️⚠️ This method is deprecated ad will be removed in the next releases, use transform.perspective_4point_transform() instead. ⚠️⚠️⚠️");
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
          do ++ll; while (array[low] > array[ll]);
          do --hh; while (array[hh] > array[low]);
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
}(jsfeatNext);
jsfeatNext.matmath = _matmath_matmath__WEBPACK_IMPORTED_MODULE_12__["default"];
jsfeatNext.linalg = /*#__PURE__*/function (_jsfeatNext7) {
  function linalg() {
    var _this6;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, linalg);
    _this6 = _callSuper(this, linalg);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this6, "matmath", void 0);
    _this6.matmath = new _matmath_matmath__WEBPACK_IMPORTED_MODULE_12__["default"]();
    return _this6;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(linalg, _jsfeatNext7);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(linalg, [{
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
        t = Math.abs(y) + (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_10__.hypot)(p, y);
        s = (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_10__.hypot)(p, t);
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
          (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_10__.swap)(W, m, k, mv);
          if (V) {
            for (i = 0; i < n; i++) {
              (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_10__.swap)(V, vstep * m + i, vstep * k + i, mv);
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
            for (; k < m; k++) p += At[Ai + k] * At[Aj + k];
            if (Math.abs(p) <= eps * Math.sqrt(a * b)) continue;
            p *= 2.0;
            beta = a - b, gamma = (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_10__.hypot)(p, beta);
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
          (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_10__.swap)(W, i, j, sd);
          if (Vt) {
            for (k = 0; k < m; k++) {
              (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_10__.swap)(At, i * astep + k, j * astep + k, t);
            }
            for (k = 0; k < n; k++) {
              (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_10__.swap)(Vt, i * vstep + k, j * vstep + k, t);
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
            (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_10__.swap)(ad, i * astep + j, k * astep + j, t);
          }
          (0,_linalg_linalg_base__WEBPACK_IMPORTED_MODULE_10__.swap)(bd, i, k, t);
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
      var u_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(nrows, nrows, dt, u_buff.data);
      var w_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(1, ncols, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(ncols, ncols, dt, v_buff.data);
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
      var u_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(nrows, nrows, dt, u_buff.data);
      var w_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(1, ncols, dt, w_buff.data);
      var v_mt = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(ncols, ncols, dt, v_buff.data);
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
}(jsfeatNext);
jsfeatNext.orb = /*#__PURE__*/function (_jsfeatNext8) {
  function orb() {
    var _this7;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, orb);
    _this7 = _callSuper(this, orb);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this7, "bit_pattern_31_", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this7, "H", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this7, "patch_img", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this7, "imgproc", void 0);
    _this7.bit_pattern_31_ = new Int32Array(_orb_bit_pattern_31__WEBPACK_IMPORTED_MODULE_16__.bit_pattern_31);
    _this7.H = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(3, 3, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.F32_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this7.patch_img = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(32, 32, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t);
    _this7.imgproc = new jsfeatNext.imgproc();
    return _this7;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(orb, _jsfeatNext8);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(orb, [{
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
}(jsfeatNext);
jsfeatNext.yape = _yape_yape__WEBPACK_IMPORTED_MODULE_18__.yape;
jsfeatNext.yape06 = /*#__PURE__*/function (_jsfeatNext9) {
  function yape06() {
    var _this8;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, yape06);
    _this8 = _callSuper(this, yape06);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this8, "laplacian_threshold", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this8, "min_eigen_value_threshold", void 0);
    _this8.laplacian_threshold = 30;
    _this8.min_eigen_value_threshold = 25;
    return _this8;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(yape06, _jsfeatNext9);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(yape06, [{
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
      (0,_yape06_yape06_utils__WEBPACK_IMPORTED_MODULE_19__.compute_laplacian)(srd_d, laplacian, w, Dxx, Dyy, sx, sy, ex, ey);
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
}(jsfeatNext);
jsfeatNext.motion_estimator = /*#__PURE__*/function (_jsfeatNext10) {
  function motion_estimator() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, motion_estimator);
    return _callSuper(this, motion_estimator);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(motion_estimator, _jsfeatNext10);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(motion_estimator, [{
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
      var M = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(count, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8C1_t, ms_buff.data);
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
      var M = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(mc, mr, dt, m_buff.data);
      var curr_mask = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(count, 1, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.U8_t | _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.C1_t, ms_buff.data);
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
}(jsfeatNext);
jsfeatNext.ransac_params_t = _motion_estimator_ransac_params_t__WEBPACK_IMPORTED_MODULE_20__.ransac_params_t;
jsfeatNext.affine2d = affine2d;
jsfeatNext.homography2d = homography2d;
jsfeatNext.optical_flow_lk = /*#__PURE__*/function (_jsfeatNext11) {
  function optical_flow_lk() {
    var _this9;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, optical_flow_lk);
    _this9 = _callSuper(this, optical_flow_lk);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this9, "scharr_deriv", void 0);
    var _imgproc = new jsfeatNext.imgproc();
    _this9.scharr_deriv = _imgproc.scharr_derivatives;
    return _this9;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(optical_flow_lk, _jsfeatNext11);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(optical_flow_lk, [{
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
      var deriv_m = new _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_13__.matrix_t(w0, h0, _constants_constants__WEBPACK_IMPORTED_MODULE_21__.JSFEAT_CONSTANTS.S32C2_t, deriv_lev_node.data);
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
}(jsfeatNext);

/***/ }),

/***/ "./src/keypoint_t/keypoint_t.ts":
/*!**************************************!*\
  !*** ./src/keypoint_t/keypoint_t.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   keypoint_t: () => (/* binding */ keypoint_t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var keypoint_t = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function keypoint_t() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var score = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var angle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1.0;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, keypoint_t);
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "x", void 0);
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "y", void 0);
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "score", void 0);
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "level", void 0);
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "angle", void 0);
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
/* harmony export */   hypot: () => (/* binding */ hypot),
/* harmony export */   swap: () => (/* binding */ swap)
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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(matmath, [{
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
      while (--len >= 0) src[len] = 0.0;
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
        for (j = 0; j < ncols; pAt += nrows, j++) atd[pAt] = ad[Ai + j];
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
}();


/***/ }),

/***/ "./src/matrix_t/matrix_t.ts":
/*!**********************************!*\
  !*** ./src/matrix_t/matrix_t.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matrix_t: () => (/* binding */ matrix_t)
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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(matrix_t, [{
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
}();

/***/ }),

/***/ "./src/motion_estimator/ransac_params_t.ts":
/*!*************************************************!*\
  !*** ./src/motion_estimator/ransac_params_t.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ransac_params_t: () => (/* binding */ ransac_params_t)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var ransac_params_t = /*#__PURE__*/function () {
  function ransac_params_t() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var thresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
    var eps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;
    var prob = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.99;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ransac_params_t);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "size", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "thresh", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "eps", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "prob", void 0);
    this.size = size;
    this.thresh = thresh;
    this.eps = eps;
    this.prob = prob;
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ransac_params_t, [{
    key: "update_iters",
    value: function update_iters(_eps, max_iters) {
      var num = Math.log(1 - this.prob);
      var denom = Math.log(1 - Math.pow(1 - _eps, this.size));
      return (denom >= 0 || -num >= max_iters * -denom ? max_iters : Math.round(num / denom)) | 0;
    }
  }]);
}();

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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_pool_node_t, [{
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
}();


/***/ }),

/***/ "./src/node_utils/data_t.ts":
/*!**********************************!*\
  !*** ./src/node_utils/data_t.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data_t: () => (/* binding */ data_t)
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
/* harmony export */   bit_pattern_31: () => (/* binding */ bit_pattern_31)
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
/* harmony export */   rectify_patch: () => (/* binding */ rectify_patch)
/* harmony export */ });
function rectify_patch(src, dst, angle, px, py, psize, H, imgProcessor) {
  var cosine = Math.cos(angle);
  var sine = Math.sin(angle);
  H.data[0] = cosine;
  H.data[1] = -sine;
  H.data[2] = (-cosine + sine) * psize * 0.5 + px;
  H.data[3] = sine;
  H.data[4] = cosine;
  H.data[5] = (-sine - cosine) * psize * 0.5 + py;
  imgProcessor.warp_affine(src, dst, H, 128);
}

/***/ }),

/***/ "./src/transform/transform.ts":
/*!************************************!*\
  !*** ./src/transform/transform.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transform: () => (/* binding */ transform)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var transform = /*#__PURE__*/function () {
  function transform() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, transform);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(transform, [{
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
    key: "invert_affine_transform",
    value: function invert_affine_transform(src, dst) {
      var src_d = src.data;
      var dst_d = dst.data;
      var m11 = src_d[0],
        m12 = src_d[1],
        m13 = src_d[2];
      var m21 = src_d[3],
        m22 = src_d[4],
        m23 = src_d[5];
      var det = 1.0 / (m11 * m22 - m12 * m21);
      dst_d[0] = det * m22;
      dst_d[1] = det * -m12;
      dst_d[2] = det * (m12 * m23 - m13 * m22);
      dst_d[3] = det * -m21;
      dst_d[4] = det * m11;
      dst_d[5] = det * (m13 * m21 - m11 * m23);
    }
  }, {
    key: "invert_perspective_transform",
    value: function invert_perspective_transform(src, dst) {
      var src_d = src.data;
      var dst_d = dst.data;
      var m11 = src_d[0],
        m12 = src_d[1],
        m13 = src_d[2];
      var m21 = src_d[3],
        m22 = src_d[4],
        m23 = src_d[5];
      var m31 = src_d[6],
        m32 = src_d[7],
        m33 = src_d[8];
      var det = 1.0 / (m11 * (m22 * m33 - m23 * m32) - m12 * (m21 * m33 - m23 * m31) + m13 * (m21 * m32 - m22 * m31));
      dst_d[0] = det * (m22 * m33 - m23 * m32);
      dst_d[1] = det * (m13 * m32 - m12 * m33);
      dst_d[2] = det * (m12 * m23 - m13 * m22);
      dst_d[3] = det * (m23 * m31 - m21 * m33);
      dst_d[4] = det * (m11 * m33 - m13 * m31);
      dst_d[5] = det * (m13 * m21 - m11 * m23);
      dst_d[6] = det * (m21 * m32 - m22 * m31);
      dst_d[7] = det * (m12 * m31 - m11 * m32);
      dst_d[8] = det * (m11 * m22 - m12 * m21);
    }
  }]);
}();

/***/ }),

/***/ "./src/yape/yape.ts":
/*!**************************!*\
  !*** ./src/yape/yape.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   yape: () => (/* binding */ yape)
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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(yape, [{
    key: "init",
    value: function init(width, height, radius) {
      var pyramid_levels = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      radius = Math.min(radius, 7);
      radius = Math.max(radius, 3);
      for (var i = 0; i < pyramid_levels; ++i) {
        this.level_tables[i] = new _yape_utils__WEBPACK_IMPORTED_MODULE_3__.lev_table_t(width >> i, height >> i, radius);
      }
    }
  }, {
    key: "detect",
    value: function detect(src, points) {
      var border = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
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
}();

/***/ }),

/***/ "./src/yape/yape_utils.ts":
/*!********************************!*\
  !*** ./src/yape/yape_utils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   is_local_maxima: () => (/* binding */ is_local_maxima),
/* harmony export */   lev_table_t: () => (/* binding */ lev_table_t),
/* harmony export */   perform_one_point: () => (/* binding */ perform_one_point),
/* harmony export */   precompute_directions: () => (/* binding */ precompute_directions),
/* harmony export */   third_check: () => (/* binding */ third_check)
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
        if (B2 < Im) {
          score -= A + B1;
          state = 6;
          break;
        }
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
        if (B2 > Ip) {
          score -= A + B1;
          state = 7;
          break;
        }
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
        }
        if (B2 > Ip) {
          score -= A + B1;
          state = 7;
          break;
        }
        if (B2 < Im) {
          score -= A + B1;
          state = 2;
          break;
        }
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
        }
        if (B2 > Ip) {
          score -= A + B1;
          state = 3;
          break;
        }
        if (B2 < Im) {
          score -= A + B1;
          state = 6;
          break;
        }
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
        if (B2 > Ip) {
          score -= A + B1;
          state = 7;
          break;
        }
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
        if (B2 < Im) {
          score -= A + B1;
          state = 6;
          break;
        }
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
        if (B2 < Im) {
          score -= A + B1;
          state = 6;
          break;
        }
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
        if (B2 > Ip) {
          score -= A + B1;
          state = 7;
          break;
        }
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
/* harmony export */   compute_laplacian: () => (/* binding */ compute_laplacian),
/* harmony export */   hessian_min_eigen_value: () => (/* binding */ hessian_min_eigen_value)
/* harmony export */ });
function compute_laplacian(src, dst, w, Dxx, Dyy, sx, sy, ex, ey) {
  var y = 0;
  var x = 0;
  var yrow = sy * w + sx | 0;
  var row = yrow;
  for (y = sy; y < ey; ++y, yrow += w, row = yrow) {
    for (x = sx; x < ex; ++x, ++row) {
      if (row + Dxx < src.length && row - Dxx >= 0 && row + Dyy < src.length && row - Dyy >= 0) {
        dst[row] = -4 * src[row] + src[row + Dxx] + src[row - Dxx] + src[row + Dyy] + src[row - Dyy];
      } else {
        dst[row] = 0;
      }
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQThDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUNqSCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBK0MsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBOEMsQ0FBQyxFQUNsSCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBOEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUNuRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQWdELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDeEUsQ0FBQyxFQUE4QyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ2hILENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBOEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLEVBQUUsRUFDbkgsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQThDLENBQUMsRUFDbEgsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFDcEUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQStDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDdkUsQ0FBQyxFQUFFLEVBQTZDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQTZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDakgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQTZDLENBQUMsRUFBRSxFQUNoSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQTRDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQTZDLENBQUMsRUFDbEgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE2QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBOEMsQ0FBQyxFQUNoSCxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFnRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQ3RFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3ZFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUE2QyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDcEUsRUFBRSxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUErQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDbkgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUE2QyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDbEgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsRUFDbEgsQ0FBQyxFQUFFLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBZ0QsQ0FBQyxFQUFFLEVBQ25ILENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBK0MsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNyRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQThDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQ3RFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQThDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFDbkgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsRUFDaEgsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUE4QyxDQUFDLEVBQ2hILENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQThDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ3BFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQStDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUN6RSxFQUFFLEVBQThDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQThDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFDbEgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBOEMsQ0FBQyxDQUFDLEVBQ2hILENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE2QyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUNwRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUNwRSxDQUFDLEVBQUUsRUFBNkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDakgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUE2QyxDQUFDLEVBQUUsRUFDaEgsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFpRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDdkUsRUFBRSxFQUFnRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQStDLENBQUMsRUFBRSxFQUNqSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBK0MsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQ25FLENBQUMsQ0FBQyxFQUErQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQStDLENBQUMsQ0FBQyxFQUMvRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQStDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3JFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUN0RSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDbEgsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQThDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUE4QyxDQUFDLEVBQ2xILENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDcEUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQ2xFLENBQUMsQ0FBQyxFQUFpRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBZ0QsQ0FBQyxFQUFFLENBQUMsRUFDbkgsRUFBRSxFQUFFLENBQUMsRUFBK0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUErQyxDQUFDLEVBQUUsRUFDbkgsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUErQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ3RFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUErQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQ3ZFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDdkUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUN0RSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBNkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDdEUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDckUsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUNqSCxDQUFDLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUNqSCxDQUFDLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbkgsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNuSCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQTZDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQWdELENBQUMsRUFDakgsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUErQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUN0RSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUErQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUNyRSxDQUFDLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNoSCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQStDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUErQyxDQUFDLENBQUMsRUFDbEgsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQStDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUNyRSxDQUFDLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBOEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ2xILENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNsSCxDQUFDLEVBQUUsQ0FBQyxFQUEyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDaEgsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUE4QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQThDLENBQUMsRUFDbEgsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBOEMsQ0FBQyxFQUNoSCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ3JFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBNkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQThDLENBQUMsRUFDbEgsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxFQUNuSCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDcEUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDdkUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBOEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNyRSxDQUFDLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUNsSCxDQUFDLENBQUMsRUFBOEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ2xILEVBQUUsRUFBRSxFQUFFLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBOEMsQ0FBQyxFQUNqSCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBNkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsQ0FBQyxFQUNuSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUNyRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFnRCxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RFLENBQUMsQ0FBQyxFQUFnRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQStDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ25ILENBQUMsRUFBK0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUErQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQ2xILENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUErQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ3BFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBK0MsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3RFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBK0MsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDcEUsQ0FBQyxDQUFDLEVBQStDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUErQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDbkgsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUErQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDckUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUErQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUN2RSxDQUFDLEVBQStDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBNkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ2xILENBQUMsRUFBRSxDQUFDLEVBQThDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUNuRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdkUsQ0FBQyxFQUFFLEVBQThDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUE2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDaEgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQThDLENBQUMsQ0FBQyxFQUNqSCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDdEUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQThDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDckUsQ0FBQyxFQUE4QyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQTZDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQ2xILENBQUMsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBOEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ2hILENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUEyQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFDbkgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQThDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFDbkgsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3BFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUN4RSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBNkMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ3pFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBOEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUNyRSxFQUFFLEVBQThDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBNkMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUNsSCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQTZDLENBQUMsRUFDL0csQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDckUsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ25ILENBQUMsRUFBRSxDQUFDLEVBQTZDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUE4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ2pILENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUE4QyxDQUFDLEVBQ2xILENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBOEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBOEMsQ0FBQyxFQUNuSCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE2QyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLEVBQ2pILENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQWdELENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUNyRSxDQUFDLEVBQStDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUErQyxDQUFDLENBQUMsRUFDL0csQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDbkUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQWdELENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUNwRSxDQUFDLEVBQUUsRUFBK0MsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBK0MsQ0FBQyxDQUFDLEVBQ2hILENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBK0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUN0RSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQStDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUN0RSxDQUFDLEVBQTZDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBNkMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDL0csRUFBRSxFQUErQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ2xILENBQUMsRUFBRSxFQUFFLEVBQStDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUErQyxDQUFDLENBQUMsRUFDbEgsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBK0MsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQ3BFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUErQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDckUsQ0FBQyxFQUErQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUErQyxDQUFDLEVBQUUsRUFDaEgsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFDdkUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQThDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbkUsQ0FBQyxDQUFDLEVBQStDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBK0MsQ0FBQyxFQUFFLEVBQ2hILENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUErQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFDckUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQStDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUN4RSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBOEMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFDcEUsQ0FBQyxDQUFDLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBOEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDaEgsRUFBRSxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBOEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUMvRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQThDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBOEMsQ0FBQyxFQUFFLENBQUMsRUFDbEgsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE4QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUE4QyxDQUFDLEVBQUUsRUFDakgsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBNkMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUE4QyxDQUFDLEVBQ2hILENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBOEMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ3BFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFB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aXRpb24iLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvY2FjaGUvY2FjaGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvZGF0YV90eXBlL2RhdGFfdHlwZS50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2Zhc3RfY29ybmVycy9mYXN0X3ByaXZhdGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9pbWdwcm9jL2NvbnZvbC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2ltZ3Byb2MvcmVzYW1wbGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9qc2ZlYXROZXh0LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMva2V5cG9pbnRfdC9rZXlwb2ludF90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbGluYWxnL2xpbmFsZ19iYXNlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0bWF0aC9tYXRtYXRoLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbWF0cml4X3QvbWF0cml4X3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9tb3Rpb25fZXN0aW1hdG9yL3JhbnNhY19wYXJhbXNfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmMvbm9kZV91dGlscy9kYXRhX3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9vcmIvYml0X3BhdHRlcm5fMzEudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy9vcmIvcmVjdGlmeV9wYXRjaC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL3RyYW5zZm9ybS90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlL3lhcGVfdXRpbHMudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyYy95YXBlMDYveWFwZTA2X3V0aWxzLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImpzZmVhdE5leHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKGUpIHtcbiAgaWYgKHZvaWQgMCA9PT0gZSkgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICByZXR1cm4gZTtcbn1cbmV4cG9ydCB7IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmV4cG9ydCB7IF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKHQpIHtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7XG4gIH0sIF9nZXRQcm90b3R5cGVPZih0KTtcbn1cbmV4cG9ydCB7IF9nZXRQcm90b3R5cGVPZiBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5mdW5jdGlvbiBfaW5oZXJpdHModCwgZSkge1xuICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlICYmIG51bGwgIT09IGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGUgJiYgZS5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHQsXG4gICAgICB3cml0YWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgfVxuICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogITFcbiAgfSksIGUgJiYgc2V0UHJvdG90eXBlT2YodCwgZSk7XG59XG5leHBvcnQgeyBfaW5oZXJpdHMgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIGUpIHtcbiAgaWYgKGUgJiYgKFwib2JqZWN0XCIgPT0gX3R5cGVvZihlKSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUpKSByZXR1cm4gZTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHQpO1xufVxuZXhwb3J0IHsgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZih0LCBlKSB7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gKHQsIGUpIHtcbiAgICByZXR1cm4gdC5fX3Byb3RvX18gPSBlLCB0O1xuICB9LCBfc2V0UHJvdG90eXBlT2YodCwgZSk7XG59XG5leHBvcnQgeyBfc2V0UHJvdG90eXBlT2YgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuZnVuY3Rpb24gdG9QcmltaXRpdmUodCwgcikge1xuICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDtcbiAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn1cbmV4cG9ydCB7IHRvUHJpbWl0aXZlIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCB0b1ByaW1pdGl2ZSBmcm9tIFwiLi90b1ByaW1pdGl2ZS5qc1wiO1xuZnVuY3Rpb24gdG9Qcm9wZXJ0eUtleSh0KSB7XG4gIHZhciBpID0gdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7XG59XG5leHBvcnQgeyB0b1Byb3BlcnR5S2V5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufVxuZXhwb3J0IHsgX3R5cGVvZiBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF9wb29sX25vZGVfdCBmcm9tIFwiLi8uLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYWNoZSB7XG4gICAgYWxsb2NhdGU6IChjYXBhY2l0eTogYW55LCBkYXRhX3NpemU6IG51bWJlcikgPT4gdm9pZDtcbiAgICBnZXRfYnVmZmVyOiAoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSA9PiBfcG9vbF9ub2RlX3Q7XG4gICAgcHV0X2J1ZmZlcjogKG5vZGU6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIGNhY2hlIGltcGxlbWVudHMgSUNhY2hlIHtcbiAgICBwcml2YXRlIF9wb29sX2hlYWQ6IF9wb29sX25vZGVfdDtcbiAgICBwcml2YXRlIF9wb29sX3RhaWw6IF9wb29sX25vZGVfdDtcbiAgICBwcml2YXRlIF9wb29sX3NpemU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX3RhaWw7XG4gICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSA9IDA7XG4gICAgfVxuICAgIGFsbG9jYXRlKGNhcGFjaXR5OiBhbnksIGRhdGFfc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfdGFpbCA9IG5ldyBfcG9vbF9ub2RlX3QoZGF0YV9zaXplKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXBhY2l0eTsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IF9wb29sX25vZGVfdChkYXRhX3NpemUpO1xuICAgICAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuXG4gICAgICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRfYnVmZmVyKHNpemVfaW5fYnl0ZXM6IG51bWJlcik6IF9wb29sX25vZGVfdCB7XG4gICAgICAgIC8vIGFzc3VtZSB3ZSBoYXZlIGVub3VnaCBmcmVlIG5vZGVzXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9wb29sX2hlYWQ7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZCA9IHRoaXMuX3Bvb2xfaGVhZC5uZXh0O1xuICAgICAgICB0aGlzLl9wb29sX3NpemUtLTtcblxuICAgICAgICBpZiAoc2l6ZV9pbl9ieXRlcyA+IG5vZGUuc2l6ZSkge1xuICAgICAgICAgICAgbm9kZS5yZXNpemUoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcHV0X2J1ZmZlcihub2RlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsID0gdGhpcy5fcG9vbF90YWlsLm5leHQgPSBub2RlO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUrKztcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgSlNGRUFUX0NPTlNUQU5UUyA9IHtcbiAgICAvLyBDT05TVEFOVFNcbiAgICBFUFNJTE9OOiAwLjAwMDAwMDExOTIwOTI4OTYsXG4gICAgRkxUX01JTjogMWUtMzcsXG4gICAgVThfdDogMHgwMTAwLFxuICAgIFMzMl90OiAweDAyMDAsXG4gICAgRjMyX3Q6IDB4MDQwMCxcbiAgICBTNjRfdDogMHgwODAwLFxuICAgIEY2NF90OiAweDEwMDAsXG4gICAgQzFfdDogMHgwMSxcbiAgICBDMl90OiAweDAyLFxuICAgIEMzX3Q6IDB4MDMsXG4gICAgQzRfdDogMHgwNCxcblxuICAgIC8vIGNvbG9yIGNvbnZlcnNpb25cbiAgICBDT0xPUl9SR0JBMkdSQVk6IDAsXG4gICAgQ09MT1JfUkdCMkdSQVk6IDEsXG4gICAgQ09MT1JfQkdSQTJHUkFZOiAyLFxuICAgIENPTE9SX0JHUjJHUkFZOiAzLFxuXG4gICAgLy8gYm94IGJsdXIgb3B0aW9uXG4gICAgQk9YX0JMVVJfTk9TQ0FMRTogMHgwMSxcblxuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgU1ZEX1VfVDogMHgwMSxcbiAgICBTVkRfVl9UOiAweDAyLFxuXG4gICAgLy8gcG9wdWxhciBmb3JtYXRzXG4gICAgVThDMV90OiAweDAxMDAgfCAweDAxLFxuICAgIFU4QzNfdDogMHgwMTAwIHwgMHgwMyxcbiAgICBVOEM0X3Q6IDB4MDEwMCB8IDB4MDQsXG5cbiAgICBGMzJDMV90OiAweDA0MDAgfCAweDAxLFxuICAgIEYzMkMyX3Q6IDB4MDQwMCB8IDB4MDIsXG4gICAgUzMyQzFfdDogMHgwMjAwIHwgMHgwMSxcbiAgICBTMzJDMl90OiAweDAyMDAgfCAweDAyLFxufTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSURhdGFfVHlwZSB7XG4gICAgX2dldF9kYXRhX3R5cGU6ICh0eXBlOiBudW1iZXIpID0+IG51bWJlcjtcbiAgICBfZ2V0X2NoYW5uZWw6ICh0eXBlOiBudW1iZXIpID0+IG51bWJlcjtcbiAgICBfZ2V0X2RhdGFfdHlwZV9zaXplOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBkYXRhX3R5cGUgaW1wbGVtZW50cyBJRGF0YV9UeXBlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kYXRhX3R5cGVfc2l6ZTogSW50MzJBcnJheTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGF0YV90eXBlX3NpemUgPSBuZXcgSW50MzJBcnJheShbLTEsIDEsIDQsIC0xLCA0LCAtMSwgLTEsIC0xLCA4LCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgOF0pO1xuICAgIH1cblxuICAgIF9nZXRfZGF0YV90eXBlKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0eXBlICYgMHhmZjAwO1xuICAgIH1cblxuICAgIF9nZXRfY2hhbm5lbCh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdHlwZSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YV90eXBlX3NpemVbKHR5cGUgJiAweGZmMDApID4+IDhdO1xuICAgIH1cbn1cbiIsIi8vIHByaXZhdGUgZnVuY3Rpb25zXG5leHBvcnQgZnVuY3Rpb24gX2NtcF9zY29yZV8xNihcbiAgICBzcmM6IFVpbnQ4QXJyYXksXG4gICAgb2ZmOiBudW1iZXIsXG4gICAgcGl4ZWw6IFVpbnQ4QXJyYXkgfCBJbnQzMkFycmF5LFxuICAgIGQ6IFVpbnQ4QXJyYXkgfCBJbnQzMkFycmF5LFxuICAgIHRocmVzaG9sZDogbnVtYmVyXG4pOiBudW1iZXIge1xuICAgIGxldCBOID0gMjUsXG4gICAgICAgIGsgPSAwLFxuICAgICAgICB2ID0gc3JjW29mZl07XG4gICAgbGV0IGEwID0gdGhyZXNob2xkLFxuICAgICAgICBhID0gMCxcbiAgICAgICAgYjAgPSAwLFxuICAgICAgICBiID0gMDtcblxuICAgIGZvciAoOyBrIDwgTjsgKytrKSB7XG4gICAgICAgIGRba10gPSB2IC0gc3JjW29mZiArIHBpeGVsW2tdXTtcbiAgICB9XG5cbiAgICBmb3IgKGsgPSAwOyBrIDwgMTY7IGsgKz0gMikge1xuICAgICAgICBhID0gTWF0aC5taW4oZFtrICsgMV0sIGRbayArIDJdKTtcbiAgICAgICAgYSA9IE1hdGgubWluKGEsIGRbayArIDNdKTtcblxuICAgICAgICBpZiAoYSA8PSBhMCkgY29udGludWU7XG5cbiAgICAgICAgYSA9IE1hdGgubWluKGEsIGRbayArIDRdKTtcbiAgICAgICAgYSA9IE1hdGgubWluKGEsIGRbayArIDVdKTtcbiAgICAgICAgYSA9IE1hdGgubWluKGEsIGRbayArIDZdKTtcbiAgICAgICAgYSA9IE1hdGgubWluKGEsIGRbayArIDddKTtcbiAgICAgICAgYSA9IE1hdGgubWluKGEsIGRbayArIDhdKTtcbiAgICAgICAgYTAgPSBNYXRoLm1heChhMCwgTWF0aC5taW4oYSwgZFtrXSkpO1xuICAgICAgICBhMCA9IE1hdGgubWF4KGEwLCBNYXRoLm1pbihhLCBkW2sgKyA5XSkpO1xuICAgIH1cblxuICAgIGIwID0gLWEwO1xuICAgIGZvciAoayA9IDA7IGsgPCAxNjsgayArPSAyKSB7XG4gICAgICAgIGIgPSBNYXRoLm1heChkW2sgKyAxXSwgZFtrICsgMl0pO1xuICAgICAgICBiID0gTWF0aC5tYXgoYiwgZFtrICsgM10pO1xuICAgICAgICBiID0gTWF0aC5tYXgoYiwgZFtrICsgNF0pO1xuICAgICAgICBiID0gTWF0aC5tYXgoYiwgZFtrICsgNV0pO1xuXG4gICAgICAgIGlmIChiID49IGIwKSBjb250aW51ZTtcbiAgICAgICAgYiA9IE1hdGgubWF4KGIsIGRbayArIDZdKTtcbiAgICAgICAgYiA9IE1hdGgubWF4KGIsIGRbayArIDddKTtcbiAgICAgICAgYiA9IE1hdGgubWF4KGIsIGRbayArIDhdKTtcbiAgICAgICAgYjAgPSBNYXRoLm1pbihiMCwgTWF0aC5tYXgoYiwgZFtrXSkpO1xuICAgICAgICBiMCA9IE1hdGgubWluKGIwLCBNYXRoLm1heChiLCBkW2sgKyA5XSkpO1xuICAgIH1cblxuICAgIHJldHVybiAtYjAgLSAxO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIF9jb252b2xfdTgoXG4gICAgYnVmOiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5LFxuICAgIHNyY19kOiBudW1iZXJbXSxcbiAgICBkc3RfZDogbnVtYmVyW10sXG4gICAgdzogbnVtYmVyLFxuICAgIGg6IG51bWJlcixcbiAgICBmaWx0ZXI6IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXksXG4gICAga2VybmVsX3NpemU6IG51bWJlcixcbiAgICBoYWxmX2tlcm5lbDogbnVtYmVyXG4pIHtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGogPSAwLFxuICAgICAgICBrID0gMCxcbiAgICAgICAgc3AgPSAwLFxuICAgICAgICBkcCA9IDAsXG4gICAgICAgIHN1bSA9IDAsXG4gICAgICAgIHN1bTEgPSAwLFxuICAgICAgICBzdW0yID0gMCxcbiAgICAgICAgc3VtMyA9IDAsXG4gICAgICAgIGYwID0gZmlsdGVyWzBdLFxuICAgICAgICBmayA9IDA7XG4gICAgY29uc3QgdzIgPSB3IDw8IDEsXG4gICAgICAgIHczID0gdyAqIDMsXG4gICAgICAgIHc0ID0gdyA8PCAyO1xuICAgIC8vIGhvciBwYXNzXG4gICAgZm9yICg7IGkgPCBoOyArK2kpIHtcbiAgICAgICAgc3VtID0gc3JjX2Rbc3BdO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDI7IGogKz0gMikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbCArIDFdID0gc3JjX2Rbc3AgKyBqICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3JjX2Rbc3AgKyBqXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBzcmNfZFtzcCArIHcgLSAxXTtcbiAgICAgICAgZm9yIChqID0gdzsgaiA8IGhhbGZfa2VybmVsICsgdzsgKytqKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHN1bTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcgLSA0OyBqICs9IDQpIHtcbiAgICAgICAgICAgIChzdW0gPSBidWZbal0gKiBmMCksIChzdW0xID0gYnVmW2ogKyAxXSAqIGYwKSwgKHN1bTIgPSBidWZbaiArIDJdICogZjApLCAoc3VtMyA9IGJ1ZltqICsgM10gKiBmMCk7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIGZrID0gZmlsdGVyW2tdO1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMSArPSBidWZbayArIGogKyAxXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTIgKz0gYnVmW2sgKyBqICsgMl0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0zICs9IGJ1ZltrICsgaiArIDNdICogZms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcCArIGpdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAxXSA9IE1hdGgubWluKHN1bTEgPj4gOCwgMjU1KTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgaiArIDJdID0gTWF0aC5taW4oc3VtMiA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyBqICsgM10gPSBNYXRoLm1pbihzdW0zID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBNYXRoLm1pbihzdW0gPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBzcCArPSB3O1xuICAgICAgICBkcCArPSB3O1xuICAgIH1cblxuICAgIC8vIHZlcnQgcGFzc1xuICAgIGZvciAoaSA9IDA7IGkgPCB3OyArK2kpIHtcbiAgICAgICAgc3VtID0gZHN0X2RbaV07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgayA9IGk7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gaCAtIDI7IGogKz0gMiwgayArPSB3Mikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWwgKyAxXSA9IGRzdF9kW2sgKyB3XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgayArPSB3KSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IGRzdF9kW2tdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IGRzdF9kWyhoIC0gMSkgKiB3ICsgaV07XG4gICAgICAgIGZvciAoaiA9IGg7IGogPCBoYWxmX2tlcm5lbCArIGg7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZHAgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSA0OyBqICs9IDQsIGRwICs9IHc0KSB7XG4gICAgICAgICAgICAoc3VtID0gYnVmW2pdICogZjApLCAoc3VtMSA9IGJ1ZltqICsgMV0gKiBmMCksIChzdW0yID0gYnVmW2ogKyAyXSAqIGYwKSwgKHN1bTMgPSBidWZbaiArIDNdICogZjApO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBmayA9IGZpbHRlcltrXTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTEgKz0gYnVmW2sgKyBqICsgMV0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0yICs9IGJ1ZltrICsgaiArIDJdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMyArPSBidWZbayArIGogKyAzXSAqIGZrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHddID0gTWF0aC5taW4oc3VtMSA+PiA4LCAyNTUpO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBNYXRoLm1pbihzdW0yID4+IDgsIDI1NSk7XG4gICAgICAgICAgICBkc3RfZFtkcCArIHczXSA9IE1hdGgubWluKHN1bTMgPj4gOCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IGg7ICsraiwgZHAgKz0gdykge1xuICAgICAgICAgICAgc3VtID0gYnVmW2pdICogZjA7XG4gICAgICAgICAgICBmb3IgKGsgPSAxOyBrIDwga2VybmVsX3NpemU7ICsraykge1xuICAgICAgICAgICAgICAgIHN1bSArPSBidWZbayArIGpdICogZmlsdGVyW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHN0X2RbZHBdID0gTWF0aC5taW4oc3VtID4+IDgsIDI1NSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY29udm9sKFxuICAgIGJ1ZjogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSxcbiAgICBzcmNfZDogbnVtYmVyW10sXG4gICAgZHN0X2Q6IG51bWJlcltdLFxuICAgIHc6IG51bWJlcixcbiAgICBoOiBudW1iZXIsXG4gICAgZmlsdGVyOiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5LFxuICAgIGtlcm5lbF9zaXplOiBudW1iZXIsXG4gICAgaGFsZl9rZXJuZWw6IG51bWJlclxuKSB7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBqID0gMCxcbiAgICAgICAgayA9IDAsXG4gICAgICAgIHNwID0gMCxcbiAgICAgICAgZHAgPSAwLFxuICAgICAgICBzdW0gPSAwLjAsXG4gICAgICAgIHN1bTEgPSAwLjAsXG4gICAgICAgIHN1bTIgPSAwLjAsXG4gICAgICAgIHN1bTMgPSAwLjAsXG4gICAgICAgIGYwID0gZmlsdGVyWzBdLFxuICAgICAgICBmayA9IDAuMDtcbiAgICBjb25zdCB3MiA9IHcgPDwgMSxcbiAgICAgICAgdzMgPSB3ICogMyxcbiAgICAgICAgdzQgPSB3IDw8IDI7XG4gICAgLy8gaG9yIHBhc3NcbiAgICBmb3IgKDsgaSA8IGg7ICsraSkge1xuICAgICAgICBzdW0gPSBzcmNfZFtzcF07XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBoYWxmX2tlcm5lbDsgKytqKSB7XG4gICAgICAgICAgICBidWZbal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSB3IC0gMjsgaiArPSAyKSB7XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsXSA9IHNyY19kW3NwICsgal07XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBzcmNfZFtzcCArIGogKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBzcmNfZFtzcCArIGpdO1xuICAgICAgICB9XG4gICAgICAgIHN1bSA9IHNyY19kW3NwICsgdyAtIDFdO1xuICAgICAgICBmb3IgKGogPSB3OyBqIDwgaGFsZl9rZXJuZWwgKyB3OyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaiA9IDA7IGogPD0gdyAtIDQ7IGogKz0gNCkge1xuICAgICAgICAgICAgKHN1bSA9IGJ1ZltqXSAqIGYwKSwgKHN1bTEgPSBidWZbaiArIDFdICogZjApLCAoc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCksIChzdW0zID0gYnVmW2ogKyAzXSAqIGYwKTtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAxXSA9IHN1bTE7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAyXSA9IHN1bTI7XG4gICAgICAgICAgICBkc3RfZFtkcCArIGogKyAzXSA9IHN1bTM7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCB3OyArK2opIHtcbiAgICAgICAgICAgIHN1bSA9IGJ1ZltqXSAqIGYwO1xuICAgICAgICAgICAgZm9yIChrID0gMTsgayA8IGtlcm5lbF9zaXplOyArK2spIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gYnVmW2sgKyBqXSAqIGZpbHRlcltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwICsgal0gPSBzdW07XG4gICAgICAgIH1cbiAgICAgICAgc3AgKz0gdztcbiAgICAgICAgZHAgKz0gdztcbiAgICB9XG5cbiAgICAvLyB2ZXJ0IHBhc3NcbiAgICBmb3IgKGkgPSAwOyBpIDwgdzsgKytpKSB7XG4gICAgICAgIHN1bSA9IGRzdF9kW2ldO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgaGFsZl9rZXJuZWw7ICsraikge1xuICAgICAgICAgICAgYnVmW2pdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGsgPSBpO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDw9IGggLSAyOyBqICs9IDIsIGsgKz0gdzIpIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gZHN0X2Rba107XG4gICAgICAgICAgICBidWZbaiArIGhhbGZfa2VybmVsICsgMV0gPSBkc3RfZFtrICsgd107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGogPCBoOyArK2osIGsgKz0gdykge1xuICAgICAgICAgICAgYnVmW2ogKyBoYWxmX2tlcm5lbF0gPSBkc3RfZFtrXTtcbiAgICAgICAgfVxuICAgICAgICBzdW0gPSBkc3RfZFsoaCAtIDEpICogdyArIGldO1xuICAgICAgICBmb3IgKGogPSBoOyBqIDwgaGFsZl9rZXJuZWwgKyBoOyArK2opIHtcbiAgICAgICAgICAgIGJ1ZltqICsgaGFsZl9rZXJuZWxdID0gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGRwID0gaTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8PSBoIC0gNDsgaiArPSA0LCBkcCArPSB3NCkge1xuICAgICAgICAgICAgKHN1bSA9IGJ1ZltqXSAqIGYwKSwgKHN1bTEgPSBidWZbaiArIDFdICogZjApLCAoc3VtMiA9IGJ1ZltqICsgMl0gKiBmMCksIChzdW0zID0gYnVmW2ogKyAzXSAqIGYwKTtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgZmsgPSBmaWx0ZXJba107XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaztcbiAgICAgICAgICAgICAgICBzdW0xICs9IGJ1ZltrICsgaiArIDFdICogZms7XG4gICAgICAgICAgICAgICAgc3VtMiArPSBidWZbayArIGogKyAyXSAqIGZrO1xuICAgICAgICAgICAgICAgIHN1bTMgKz0gYnVmW2sgKyBqICsgM10gKiBmaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRzdF9kW2RwXSA9IHN1bTtcbiAgICAgICAgICAgIGRzdF9kW2RwICsgd10gPSBzdW0xO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3Ml0gPSBzdW0yO1xuICAgICAgICAgICAgZHN0X2RbZHAgKyB3M10gPSBzdW0zO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBqIDwgaDsgKytqLCBkcCArPSB3KSB7XG4gICAgICAgICAgICBzdW0gPSBidWZbal0gKiBmMDtcbiAgICAgICAgICAgIGZvciAoayA9IDE7IGsgPCBrZXJuZWxfc2l6ZTsgKytrKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9IGJ1ZltrICsgal0gKiBmaWx0ZXJba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkc3RfZFtkcF0gPSBzdW07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBtYXRyaXhfdCB9IGZyb20gXCIuLi9tYXRyaXhfdC9tYXRyaXhfdFwiO1xuaW1wb3J0IHsgY2FjaGUgfSBmcm9tIFwiLi4vY2FjaGUvY2FjaGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIF9yZXNhbXBsZV91OChzcmM6IG1hdHJpeF90LCBkc3Q6IG1hdHJpeF90LCBjYWNoZTogY2FjaGUsIG53OiBudW1iZXIsIG5oOiBudW1iZXIpIHtcbiAgICBsZXQgeG9mc19jb3VudCA9IDA7XG4gICAgY29uc3QgY2ggPSBzcmMuY2hhbm5lbCxcbiAgICAgICAgdyA9IHNyYy5jb2xzLFxuICAgICAgICBoID0gc3JjLnJvd3M7XG4gICAgY29uc3Qgc3JjX2QgPSBzcmMuZGF0YSxcbiAgICAgICAgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICBjb25zdCBzY2FsZV94ID0gdyAvIG53LFxuICAgICAgICBzY2FsZV95ID0gaCAvIG5oO1xuICAgIGNvbnN0IGludl9zY2FsZV8yNTYgPSAoc2NhbGVfeCAqIHNjYWxlX3kgKiAweDEwMDAwKSB8IDA7XG4gICAgbGV0IGR4ID0gMCxcbiAgICAgICAgZHkgPSAwLFxuICAgICAgICBzeCA9IDAsXG4gICAgICAgIHN5ID0gMCxcbiAgICAgICAgc3gxID0gMCxcbiAgICAgICAgc3gyID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGsgPSAwLFxuICAgICAgICBmc3gxID0gMC4wLFxuICAgICAgICBmc3gyID0gMC4wO1xuICAgIGxldCBhID0gMCxcbiAgICAgICAgYiA9IDAsXG4gICAgICAgIGR4biA9IDAsXG4gICAgICAgIGFscGhhID0gMCxcbiAgICAgICAgYmV0YSA9IDAsXG4gICAgICAgIGJldGExID0gMDtcblxuICAgIGNvbnN0IGJ1Zl9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgY29uc3Qgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICBjb25zdCB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgY29uc3QgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgIGNvbnN0IHN1bSA9IHN1bV9ub2RlLmkzMjtcbiAgICBjb25zdCB4b2ZzID0geG9mc19ub2RlLmkzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIChmc3gxID0gZHggKiBzY2FsZV94KSwgKGZzeDIgPSBmc3gxICsgc2NhbGVfeCk7XG4gICAgICAgIChzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCksIChzeDIgPSBmc3gyIHwgMCk7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9ICgoc3gxIC0gMSkgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSBmc3gxKSAqIDB4MTAwKSB8IDA7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3ggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gMjU2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChmc3gyIC0gc3gyID4gMWUtMykge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKGR4ICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeDIgKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChmc3gyIC0gc3gyKSAqIDI1NikgfCAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICBidWZbZHhdID0gc3VtW2R4XSA9IDA7XG4gICAgfVxuICAgIGR5ID0gMDtcbiAgICBmb3IgKHN5ID0gMDsgc3kgPCBoOyBzeSsrKSB7XG4gICAgICAgIGEgPSB3ICogc3k7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCB4b2ZzX2NvdW50OyBrKyspIHtcbiAgICAgICAgICAgIGR4biA9IHhvZnNbayAqIDNdO1xuICAgICAgICAgICAgc3gxID0geG9mc1trICogMyArIDFdO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IChNYXRoLm1heChzeSArIDEgLSAoZHkgKyAxKSAqIHNjYWxlX3ksIDAuMCkgKiAyNTYpIHwgMDtcbiAgICAgICAgICAgIGJldGExID0gMjU2IC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKGJldGEgPD0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IE1hdGgubWluKE1hdGgubWF4KChzdW1bZHhdICsgYnVmW2R4XSAqIDI1NikgLyBpbnZfc2NhbGVfMjU2LCAwKSwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtW2R4XSA9IGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChkeCA9IDA7IGR4IDwgbncgKiBjaDsgZHgrKykge1xuICAgICAgICAgICAgICAgICAgICBkc3RfZFtiICsgZHhdID0gTWF0aC5taW4oTWF0aC5tYXgoKHN1bVtkeF0gKyBidWZbZHhdICogYmV0YTEpIC8gaW52X3NjYWxlXzI1NiwgMCksIDI1NSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bVtkeF0gPSBidWZbZHhdICogYmV0YTtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHkrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICBzdW1bZHhdICs9IGJ1ZltkeF0gKiAyNTY7XG4gICAgICAgICAgICAgICAgYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWNoZS5wdXRfYnVmZmVyKHN1bV9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKGJ1Zl9ub2RlKTtcbiAgICBjYWNoZS5wdXRfYnVmZmVyKHhvZnNfbm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVzYW1wbGUoc3JjOiBtYXRyaXhfdCwgZHN0OiBtYXRyaXhfdCwgY2FjaGU6IGNhY2hlLCBudzogbnVtYmVyLCBuaDogbnVtYmVyKSB7XG4gICAgbGV0IHhvZnNfY291bnQgPSAwO1xuICAgIGNvbnN0IGNoID0gc3JjLmNoYW5uZWwsXG4gICAgICAgIHcgPSBzcmMuY29scyxcbiAgICAgICAgaCA9IHNyYy5yb3dzO1xuICAgIGNvbnN0IHNyY19kID0gc3JjLmRhdGEsXG4gICAgICAgIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgY29uc3Qgc2NhbGVfeCA9IHcgLyBudyxcbiAgICAgICAgc2NhbGVfeSA9IGggLyBuaDtcbiAgICBjb25zdCBzY2FsZSA9IDEuMCAvIChzY2FsZV94ICogc2NhbGVfeSk7XG4gICAgbGV0IGR4ID0gMCxcbiAgICAgICAgZHkgPSAwLFxuICAgICAgICBzeCA9IDAsXG4gICAgICAgIHN5ID0gMCxcbiAgICAgICAgc3gxID0gMCxcbiAgICAgICAgc3gyID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGsgPSAwLFxuICAgICAgICBmc3gxID0gMC4wLFxuICAgICAgICBmc3gyID0gMC4wO1xuICAgIGxldCBhID0gMCxcbiAgICAgICAgYiA9IDAsXG4gICAgICAgIGR4biA9IDAsXG4gICAgICAgIGFscGhhID0gMC4wLFxuICAgICAgICBiZXRhID0gMC4wLFxuICAgICAgICBiZXRhMSA9IDAuMDtcblxuICAgIGNvbnN0IGJ1Zl9ub2RlID0gY2FjaGUuZ2V0X2J1ZmZlcigobncgKiBjaCkgPDwgMik7XG4gICAgY29uc3Qgc3VtX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKChudyAqIGNoKSA8PCAyKTtcbiAgICBjb25zdCB4b2ZzX25vZGUgPSBjYWNoZS5nZXRfYnVmZmVyKCh3ICogMiAqIDMpIDw8IDIpO1xuXG4gICAgY29uc3QgYnVmID0gYnVmX25vZGUuZjMyO1xuICAgIGNvbnN0IHN1bSA9IHN1bV9ub2RlLmYzMjtcbiAgICBjb25zdCB4b2ZzID0geG9mc19ub2RlLmYzMjtcblxuICAgIGZvciAoOyBkeCA8IG53OyBkeCsrKSB7XG4gICAgICAgIChmc3gxID0gZHggKiBzY2FsZV94KSwgKGZzeDIgPSBmc3gxICsgc2NhbGVfeCk7XG4gICAgICAgIChzeDEgPSAoZnN4MSArIDEuMCAtIDFlLTYpIHwgMCksIChzeDIgPSBmc3gyIHwgMCk7XG4gICAgICAgIHN4MSA9IE1hdGgubWluKHN4MSwgdyAtIDEpO1xuICAgICAgICBzeDIgPSBNYXRoLm1pbihzeDIsIHcgLSAxKTtcblxuICAgICAgICBpZiAoc3gxID4gZnN4MSkge1xuICAgICAgICAgICAgeG9mc19jb3VudCsrO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKChzeDEgLSAxKSAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gKHN4MSAtIGZzeDEpICogc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChzeCA9IHN4MTsgc3ggPCBzeDI7IHN4KyspIHtcbiAgICAgICAgICAgIHhvZnNfY291bnQrKztcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChzeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZHggKiBjaCkgfCAwO1xuICAgICAgICAgICAgeG9mc1trKytdID0gc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZzeDIgLSBzeDIgPiAxZS0zKSB7XG4gICAgICAgICAgICB4b2ZzX2NvdW50Kys7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoc3gyICogY2gpIHwgMDtcbiAgICAgICAgICAgIHhvZnNbaysrXSA9IChkeCAqIGNoKSB8IDA7XG4gICAgICAgICAgICB4b2ZzW2srK10gPSAoZnN4MiAtIHN4MikgKiBzY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgYnVmW2R4XSA9IHN1bVtkeF0gPSAwO1xuICAgIH1cbiAgICBkeSA9IDA7XG4gICAgZm9yIChzeSA9IDA7IHN5IDwgaDsgc3krKykge1xuICAgICAgICBhID0gdyAqIHN5O1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgeG9mc19jb3VudDsgaysrKSB7XG4gICAgICAgICAgICBzeDEgPSB4b2ZzW2sgKiAzXSB8IDA7XG4gICAgICAgICAgICBkeG4gPSB4b2ZzW2sgKiAzICsgMV0gfCAwO1xuICAgICAgICAgICAgYWxwaGEgPSB4b2ZzW2sgKiAzICsgMl07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ1ZltkeG4gKyBpXSArPSBzcmNfZFthICsgc3gxICsgaV0gKiBhbHBoYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGR5ICsgMSkgKiBzY2FsZV95IDw9IHN5ICsgMSB8fCBzeSA9PSBoIC0gMSkge1xuICAgICAgICAgICAgYmV0YSA9IE1hdGgubWF4KHN5ICsgMSAtIChkeSArIDEpICogc2NhbGVfeSwgMC4wKTtcbiAgICAgICAgICAgIGJldGExID0gMS4wIC0gYmV0YTtcbiAgICAgICAgICAgIGIgPSBudyAqIGR5O1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGJldGEpIDwgMWUtMykge1xuICAgICAgICAgICAgICAgIGZvciAoZHggPSAwOyBkeCA8IG53ICogY2g7IGR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X2RbYiArIGR4XSA9IHN1bVtkeF0gKyBidWZbZHhdO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9kW2IgKyBkeF0gPSBzdW1bZHhdICsgYnVmW2R4XSAqIGJldGExO1xuICAgICAgICAgICAgICAgICAgICBzdW1bZHhdID0gYnVmW2R4XSAqIGJldGE7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGR5Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGR4ID0gMDsgZHggPCBudyAqIGNoOyBkeCsrKSB7XG4gICAgICAgICAgICAgICAgc3VtW2R4XSArPSBidWZbZHhdO1xuICAgICAgICAgICAgICAgIGJ1ZltkeF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhY2hlLnB1dF9idWZmZXIoc3VtX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgIGNhY2hlLnB1dF9idWZmZXIoeG9mc19ub2RlKTtcbn1cbiIsImltcG9ydCB7IElEYXRhX1R5cGUsIGRhdGFfdHlwZSB9IGZyb20gXCIuL2RhdGFfdHlwZS9kYXRhX3R5cGVcIjtcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSBcIi4vY2FjaGUvY2FjaGVcIjtcbmltcG9ydCB7IGltZ3Byb2MgfSBmcm9tIFwiLi9pbWdwcm9jL2ltZ3Byb2NcIjtcbmltcG9ydCB7IF9yZXNhbXBsZSwgX3Jlc2FtcGxlX3U4IH0gZnJvbSBcIi4vaW1ncHJvYy9yZXNhbXBsZVwiO1xuaW1wb3J0IHsgX2NvbnZvbCwgX2NvbnZvbF91OCB9IGZyb20gXCIuL2ltZ3Byb2MvY29udm9sXCI7XG5pbXBvcnQgeyBsaW5hbGcgfSBmcm9tIFwiLi9saW5hbGcvbGluYWxnXCI7XG5pbXBvcnQgeyBzd2FwLCBoeXBvdCB9IGZyb20gXCIuL2xpbmFsZy9saW5hbGdfYmFzZVwiO1xuaW1wb3J0IHsgZmFzdF9jb3JuZXJzIH0gZnJvbSBcIi4vZmFzdF9jb3JuZXJzL2Zhc3RfY29ybmVyc1wiO1xuaW1wb3J0IHsgX2NtcF9zY29yZV8xNiB9IGZyb20gXCIuL2Zhc3RfY29ybmVycy9mYXN0X3ByaXZhdGVcIjtcbmltcG9ydCB7IG1hdGggfSBmcm9tIFwiLi9tYXRoL21hdGhcIjtcbmltcG9ydCBtYXRtYXRoIGZyb20gXCIuL21hdG1hdGgvbWF0bWF0aFwiO1xuaW1wb3J0IHsgbWF0cml4X3QgfSBmcm9tIFwiLi9tYXRyaXhfdC9tYXRyaXhfdFwiO1xuaW1wb3J0IHsgcHlyYW1pZF90IH0gZnJvbSBcIi4vcHlyYW1pZF90L3B5cmFtaWRfdFwiO1xuaW1wb3J0IHsgcG9pbnRfdCB9IGZyb20gXCIuL3BvaW50X3QvcG9pbnRfdFwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSBcIi4vdHJhbnNmb3JtL3RyYW5zZm9ybVwiO1xuaW1wb3J0IHsga2V5cG9pbnRfdCB9IGZyb20gXCIuL2tleXBvaW50X3Qva2V5cG9pbnRfdFwiO1xuaW1wb3J0IHsgb3JiIH0gZnJvbSBcIi4vb3JiL29yYlwiO1xuaW1wb3J0IHsgYml0X3BhdHRlcm5fMzEgfSBmcm9tIFwiLi9vcmIvYml0X3BhdHRlcm5fMzFcIjtcbmltcG9ydCB7IHJlY3RpZnlfcGF0Y2ggfSBmcm9tIFwiLi9vcmIvcmVjdGlmeV9wYXRjaFwiO1xuaW1wb3J0IHsgeWFwZSB9IGZyb20gXCIuL3lhcGUveWFwZVwiO1xuaW1wb3J0IHsgY29tcHV0ZV9sYXBsYWNpYW4sIGhlc3NpYW5fbWluX2VpZ2VuX3ZhbHVlIH0gZnJvbSBcIi4veWFwZTA2L3lhcGUwNl91dGlsc1wiO1xuaW1wb3J0IHsgeWFwZTA2IH0gZnJvbSBcIi4veWFwZTA2L3lhcGUwNlwiO1xuaW1wb3J0IHsgcmFuc2FjX3BhcmFtc190IH0gZnJvbSBcIi4vbW90aW9uX2VzdGltYXRvci9yYW5zYWNfcGFyYW1zX3RcIjtcbmltcG9ydCB7IG1vdGlvbl9lc3RpbWF0b3IgfSBmcm9tIFwiLi9tb3Rpb25fZXN0aW1hdG9yL21vdGlvbl9lc3RpbWF0b3JcIjtcbmltcG9ydCB7IG9wdGljYWxfZmxvd19sayB9IGZyb20gXCIuL29wdGljYWxfZmxvd19say9vcHRpY2FsX2Zsb3dfbGtcIjtcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tIFwiLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgcGtnIGZyb20gXCIuLi9wYWNrYWdlLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MganNmZWF0TmV4dCB7XG4gICAgcHJpdmF0ZSBkdDogSURhdGFfVHlwZTtcbiAgICBwcm90ZWN0ZWQgY2FjaGU6IGNhY2hlO1xuICAgIHN0YXRpYyBjYWNoZTogdHlwZW9mIGNhY2hlO1xuICAgIHN0YXRpYyBmYXN0X2Nvcm5lcnM6IHR5cGVvZiBmYXN0X2Nvcm5lcnM7XG4gICAgc3RhdGljIGltZ3Byb2M6IHR5cGVvZiBpbWdwcm9jO1xuICAgIHN0YXRpYyBsaW5hbGc6IHR5cGVvZiBsaW5hbGc7XG4gICAgc3RhdGljIG1hdGg6IHR5cGVvZiBtYXRoO1xuICAgIHN0YXRpYyBtYXRtYXRoOiB0eXBlb2YgbWF0bWF0aDtcbiAgICBzdGF0aWMgbWF0cml4X3Q6IHR5cGVvZiBtYXRyaXhfdDtcbiAgICBzdGF0aWMgcHlyYW1pZF90OiB0eXBlb2YgcHlyYW1pZF90O1xuICAgIHN0YXRpYyB0cmFuc2Zvcm06IHR5cGVvZiB0cmFuc2Zvcm07XG4gICAgc3RhdGljIGtleXBvaW50X3Q6IHR5cGVvZiBrZXlwb2ludF90O1xuICAgIHN0YXRpYyB5YXBlOiB0eXBlb2YgeWFwZTtcbiAgICBzdGF0aWMgeWFwZTA2OiB0eXBlb2YgeWFwZTA2O1xuICAgIHN0YXRpYyByYW5zYWNfcGFyYW1zX3Q6IHR5cGVvZiByYW5zYWNfcGFyYW1zX3Q7XG4gICAgc3RhdGljIGFmZmluZTJkOiB0eXBlb2YgYWZmaW5lMmQ7XG4gICAgc3RhdGljIGhvbW9ncmFwaHkyZDogdHlwZW9mIGhvbW9ncmFwaHkyZDtcbiAgICBzdGF0aWMgbW90aW9uX2VzdGltYXRvcjogdHlwZW9mIG1vdGlvbl9lc3RpbWF0b3I7XG4gICAgc3RhdGljIG9wdGljYWxfZmxvd19sazogdHlwZW9mIG9wdGljYWxfZmxvd19saztcbiAgICBzdGF0aWMgb3JiOiB0eXBlb2Ygb3JiO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgfVxuXG4gICAgLy8gVkVSU0lPTlxuICAgIHN0YXRpYyBWRVJTSU9OOiBzdHJpbmcgPSBwa2cudmVyc2lvbjtcblxuICAgIC8vIENPTlNUQU5UU1xuICAgIHN0YXRpYyBFUFNJTE9OID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgIHN0YXRpYyBGTFRfTUlOID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgIHN0YXRpYyBVOF90ID0gSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuICAgIHN0YXRpYyBTMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzMyX3Q7XG4gICAgc3RhdGljIEYzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5GMzJfdDtcbiAgICBzdGF0aWMgUzY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlM2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEMxX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgc3RhdGljIEMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMyX3Q7XG4gICAgc3RhdGljIEMzX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMzX3Q7XG4gICAgc3RhdGljIEM0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkM0X3Q7XG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgc3RhdGljIENPTE9SX1JHQkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9SR0IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVk7XG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBzdGF0aWMgQk9YX0JMVVJfTk9TQ0FMRSA9IEpTRkVBVF9DT05TVEFOVFMuQk9YX0JMVVJfTk9TQ0FMRTtcbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIHN0YXRpYyBTVkRfVV9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UO1xuICAgIHN0YXRpYyBTVkRfVl9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UO1xuXG4gICAgLy8gcG9wdWxhciBmb3JtYXRzXG4gICAgc3RhdGljIFU4QzFfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgVThDM190ID0gdGhpcy5VOF90IHwgdGhpcy5DM190O1xuICAgIHN0YXRpYyBVOEM0X3QgPSB0aGlzLlU4X3QgfCB0aGlzLkM0X3Q7XG5cbiAgICBzdGF0aWMgRjMyQzFfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIEYzMkMyX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMl90O1xuICAgIHN0YXRpYyBTMzJDMV90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgUzMyQzJfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMyX3Q7XG5cbiAgICBnZXRfZGF0YV90eXBlKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9jaGFubmVsKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfY2hhbm5lbCh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfZGF0YV90eXBlX3NpemUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKTtcbiAgICB9XG59XG5cbmNsYXNzIG1vdGlvbl9tb2RlbCBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHB1YmxpYyBUMDogbWF0cml4X3Q7XG4gICAgcHVibGljIFQxOiBtYXRyaXhfdDtcbiAgICBwdWJsaWMgQXRBOiBtYXRyaXhfdDtcbiAgICBwdWJsaWMgQXRCOiBtYXRyaXhfdDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLlQwID0gbmV3IG1hdHJpeF90KDMsIDMsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLlQxID0gbmV3IG1hdHJpeF90KDMsIDMsIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLkF0QSA9IG5ldyBtYXRyaXhfdCg2LCA2LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5BdEIgPSBuZXcgbWF0cml4X3QoNiwgMSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgfVxuXG4gICAgc3FyKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB4ICogeDtcbiAgICB9XG5cbiAgICAvLyBkb2VzIGlzb3Ryb3BpYyBub3JtYWxpemF0aW9uXG4gICAgaXNvX25vcm1hbGl6ZV9wb2ludHMoZnJvbTogcG9pbnRfdFtdLCB0bzogcG9pbnRfdFtdLCBUMDogbnVtYmVyW10sIFQxOiBudW1iZXJbXSwgY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBjeDAgPSAwLjAsXG4gICAgICAgICAgICBjeTAgPSAwLjAsXG4gICAgICAgICAgICBkMCA9IDAuMCxcbiAgICAgICAgICAgIHMwID0gMC4wO1xuICAgICAgICBsZXQgY3gxID0gMC4wLFxuICAgICAgICAgICAgY3kxID0gMC4wLFxuICAgICAgICAgICAgZDEgPSAwLjAsXG4gICAgICAgICAgICBzMSA9IDAuMDtcbiAgICAgICAgbGV0IGR4ID0gMC4wLFxuICAgICAgICAgICAgZHkgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjeDAgKz0gZnJvbVtpXS54O1xuICAgICAgICAgICAgY3kwICs9IGZyb21baV0ueTtcbiAgICAgICAgICAgIGN4MSArPSB0b1tpXS54O1xuICAgICAgICAgICAgY3kxICs9IHRvW2ldLnk7XG4gICAgICAgIH1cblxuICAgICAgICBjeDAgLz0gY291bnQ7XG4gICAgICAgIGN5MCAvPSBjb3VudDtcbiAgICAgICAgY3gxIC89IGNvdW50O1xuICAgICAgICBjeTEgLz0gY291bnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGR4ID0gZnJvbVtpXS54IC0gY3gwO1xuICAgICAgICAgICAgZHkgPSBmcm9tW2ldLnkgLSBjeTA7XG4gICAgICAgICAgICBkMCArPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgZHggPSB0b1tpXS54IC0gY3gxO1xuICAgICAgICAgICAgZHkgPSB0b1tpXS55IC0gY3kxO1xuICAgICAgICAgICAgZDEgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGQwIC89IGNvdW50O1xuICAgICAgICBkMSAvPSBjb3VudDtcblxuICAgICAgICBzMCA9IE1hdGguU1FSVDIgLyBkMDtcbiAgICAgICAgczEgPSBNYXRoLlNRUlQyIC8gZDE7XG5cbiAgICAgICAgVDBbMF0gPSBUMFs0XSA9IHMwO1xuICAgICAgICBUMFsyXSA9IC1jeDAgKiBzMDtcbiAgICAgICAgVDBbNV0gPSAtY3kwICogczA7XG4gICAgICAgIFQwWzFdID0gVDBbM10gPSBUMFs2XSA9IFQwWzddID0gMC4wO1xuICAgICAgICBUMFs4XSA9IDEuMDtcblxuICAgICAgICBUMVswXSA9IFQxWzRdID0gczE7XG4gICAgICAgIFQxWzJdID0gLWN4MSAqIHMxO1xuICAgICAgICBUMVs1XSA9IC1jeTEgKiBzMTtcbiAgICAgICAgVDFbMV0gPSBUMVszXSA9IFQxWzZdID0gVDFbN10gPSAwLjA7XG4gICAgICAgIFQxWzhdID0gMS4wO1xuICAgIH1cblxuICAgIGhhdmVfY29sbGluZWFyX3BvaW50cyhwb2ludHM6IHBvaW50X3RbXSwgY291bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgaiA9IDAsXG4gICAgICAgICAgICBrID0gMCxcbiAgICAgICAgICAgIGkgPSAoY291bnQgLSAxKSB8IDA7XG4gICAgICAgIGxldCBkeDEgPSAwLjAsXG4gICAgICAgICAgICBkeTEgPSAwLjAsXG4gICAgICAgICAgICBkeDIgPSAwLjAsXG4gICAgICAgICAgICBkeTIgPSAwLjA7XG5cbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgaS10aCBzZWxlY3RlZCBwb2ludCBkb2VzIG5vdCBiZWxvbmdcbiAgICAgICAgLy8gdG8gYSBsaW5lIGNvbm5lY3Rpbmcgc29tZSBwcmV2aW91c2x5IHNlbGVjdGVkIHBvaW50c1xuICAgICAgICBmb3IgKDsgaiA8IGk7ICsraikge1xuICAgICAgICAgICAgZHgxID0gcG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgIGR5MSA9IHBvaW50c1tqXS55IC0gcG9pbnRzW2ldLnk7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgajsgKytrKSB7XG4gICAgICAgICAgICAgICAgZHgyID0gcG9pbnRzW2tdLnggLSBwb2ludHNbaV0ueDtcbiAgICAgICAgICAgICAgICBkeTIgPSBwb2ludHNba10ueSAtIHBvaW50c1tpXS55O1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZHgyICogZHkxIC0gZHkyICogZHgxKSA8PVxuICAgICAgICAgICAgICAgICAgICBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiAoTWF0aC5hYnMoZHgxKSArIE1hdGguYWJzKGR5MSkgKyBNYXRoLmFicyhkeDIpICsgTWF0aC5hYnMoZHkyKSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmNsYXNzIGFmZmluZTJkIGV4dGVuZHMgbW90aW9uX21vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZnJvbTogcG9pbnRfdFtdLCB0bzogcG9pbnRfdFtdLCBtb2RlbDogbWF0cml4X3QsIGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgaSA9IDAsXG4gICAgICAgICAgICBqID0gMDtcbiAgICAgICAgY29uc3QgZHQgPSBtb2RlbC50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgICAgICBjb25zdCBtZCA9IG1vZGVsLmRhdGEsXG4gICAgICAgICAgICB0MGQgPSB0aGlzLlQwLmRhdGEsXG4gICAgICAgICAgICB0MWQgPSB0aGlzLlQxLmRhdGE7XG4gICAgICAgIGxldCBwdDAsXG4gICAgICAgICAgICBwdDEsXG4gICAgICAgICAgICBweCA9IDAuMCxcbiAgICAgICAgICAgIHB5ID0gMC4wO1xuICAgICAgICBjb25zdCBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgICAgIGNvbnN0IF9saW5hbGcgPSBuZXcganNmZWF0TmV4dC5saW5hbGcoKTtcblxuICAgICAgICB0aGlzLmlzb19ub3JtYWxpemVfcG9pbnRzKGZyb20sIHRvLCB0MGQsIHQxZCwgY291bnQpO1xuXG4gICAgICAgIGNvbnN0IGFfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMiAqIGNvdW50ICogNikgPDwgMyk7XG4gICAgICAgIGNvbnN0IGJfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoMiAqIGNvdW50KSA8PCAzKTtcblxuICAgICAgICBjb25zdCBhX210ID0gbmV3IG1hdHJpeF90KDYsIDIgKiBjb3VudCwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgY29uc3QgYl9tdCA9IG5ldyBtYXRyaXhfdCgxLCAyICogY291bnQsIGR0LCBiX2J1ZmYuZGF0YSk7XG4gICAgICAgIGNvbnN0IGFkID0gYV9tdC5kYXRhLFxuICAgICAgICAgICAgYmQgPSBiX210LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBwdDAgPSBmcm9tW2ldO1xuICAgICAgICAgICAgcHQxID0gdG9baV07XG5cbiAgICAgICAgICAgIHB4ID0gdDBkWzBdICogcHQwLnggKyB0MGRbMV0gKiBwdDAueSArIHQwZFsyXTtcbiAgICAgICAgICAgIHB5ID0gdDBkWzNdICogcHQwLnggKyB0MGRbNF0gKiBwdDAueSArIHQwZFs1XTtcblxuICAgICAgICAgICAgaiA9IGkgKiAyICogNjtcbiAgICAgICAgICAgIChhZFtqXSA9IHB4KSwgKGFkW2ogKyAxXSA9IHB5KSwgKGFkW2ogKyAyXSA9IDEuMCksIChhZFtqICsgM10gPSAwLjApLCAoYWRbaiArIDRdID0gMC4wKSwgKGFkW2ogKyA1XSA9IDAuMCk7XG5cbiAgICAgICAgICAgIGogKz0gNjtcbiAgICAgICAgICAgIChhZFtqXSA9IDAuMCksIChhZFtqICsgMV0gPSAwLjApLCAoYWRbaiArIDJdID0gMC4wKSwgKGFkW2ogKyAzXSA9IHB4KSwgKGFkW2ogKyA0XSA9IHB5KSwgKGFkW2ogKyA1XSA9IDEuMCk7XG5cbiAgICAgICAgICAgIGJkW2kgPDwgMV0gPSB0MWRbMF0gKiBwdDEueCArIHQxZFsxXSAqIHB0MS55ICsgdDFkWzJdO1xuICAgICAgICAgICAgYmRbKGkgPDwgMSkgKyAxXSA9IHQxZFszXSAqIHB0MS54ICsgdDFkWzRdICogcHQxLnkgKyB0MWRbNV07XG4gICAgICAgIH1cblxuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEEodGhpcy5BdEEsIGFfbXQpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV9BdEIodGhpcy5BdEIsIGFfbXQsIGJfbXQpO1xuXG4gICAgICAgIF9saW5hbGcubHVfc29sdmUodGhpcy5BdEEsIHRoaXMuQXRCKTtcblxuICAgICAgICAobWRbMF0gPSB0aGlzLkF0Qi5kYXRhWzBdKSwgKG1kWzFdID0gdGhpcy5BdEIuZGF0YVsxXSksIChtZFsyXSA9IHRoaXMuQXRCLmRhdGFbMl0pO1xuICAgICAgICAobWRbM10gPSB0aGlzLkF0Qi5kYXRhWzNdKSwgKG1kWzRdID0gdGhpcy5BdEIuZGF0YVs0XSksIChtZFs1XSA9IHRoaXMuQXRCLmRhdGFbNV0pO1xuICAgICAgICAobWRbNl0gPSAwLjApLCAobWRbN10gPSAwLjApLCAobWRbOF0gPSAxLjApOyAvLyBmaWxsIGxhc3Qgcm93XG5cbiAgICAgICAgLy8gZGVub3JtYWxpemVcbiAgICAgICAgX21hdG1hdGguaW52ZXJ0XzN4Myh0aGlzLlQxLCB0aGlzLlQxKTtcbiAgICAgICAgX21hdG1hdGgubXVsdGlwbHlfM3gzKG1vZGVsLCB0aGlzLlQxLCBtb2RlbCk7XG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgbW9kZWwsIHRoaXMuVDApO1xuXG4gICAgICAgIC8vIGZyZWUgYnVmZmVyXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihhX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYl9idWZmKTtcblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG59XG5cbmNsYXNzIGhvbW9ncmFwaHkyZCBleHRlbmRzIG1vdGlvbl9tb2RlbCB7XG4gICAgcHVibGljIG1MdEw6IG1hdHJpeF90O1xuICAgIHB1YmxpYyBFdmVjOiBtYXRyaXhfdDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1MdEwgPSBuZXcgbWF0cml4X3QoOSwgOSwgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCk7XG4gICAgICAgIHRoaXMuRXZlYyA9IG5ldyBtYXRyaXhfdCg5LCA5LCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICB9XG5cbiAgICBydW4oZnJvbTogcG9pbnRfdFtdLCB0bzogcG9pbnRfdFtdLCBtb2RlbDogbWF0cml4X3QsIGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgaSA9IDAsXG4gICAgICAgICAgICBqID0gMDtcbiAgICAgICAgY29uc3QgbWQgPSBtb2RlbC5kYXRhLFxuICAgICAgICAgICAgdDBkID0gdGhpcy5UMC5kYXRhLFxuICAgICAgICAgICAgdDFkID0gdGhpcy5UMS5kYXRhO1xuICAgICAgICBjb25zdCBMdEwgPSB0aGlzLm1MdEwuZGF0YSxcbiAgICAgICAgICAgIGV2ZCA9IHRoaXMuRXZlYy5kYXRhO1xuICAgICAgICBsZXQgeCA9IDAuMCxcbiAgICAgICAgICAgIHkgPSAwLjAsXG4gICAgICAgICAgICBYID0gMC4wLFxuICAgICAgICAgICAgWSA9IDAuMDtcbiAgICAgICAgY29uc3QgX2xpbmFsZyA9IG5ldyBqc2ZlYXROZXh0LmxpbmFsZygpO1xuICAgICAgICBjb25zdCBfbWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG5cbiAgICAgICAgLy8gbm9ybVxuICAgICAgICBsZXQgc214ID0gMC4wLFxuICAgICAgICAgICAgc215ID0gMC4wLFxuICAgICAgICAgICAgY214ID0gMC4wLFxuICAgICAgICAgICAgY215ID0gMC4wLFxuICAgICAgICAgICAgc014ID0gMC4wLFxuICAgICAgICAgICAgc015ID0gMC4wLFxuICAgICAgICAgICAgY014ID0gMC4wLFxuICAgICAgICAgICAgY015ID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICAgICAgY214ICs9IHRvW2ldLng7XG4gICAgICAgICAgICBjbXkgKz0gdG9baV0ueTtcbiAgICAgICAgICAgIGNNeCArPSBmcm9tW2ldLng7XG4gICAgICAgICAgICBjTXkgKz0gZnJvbVtpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgY214IC89IGNvdW50O1xuICAgICAgICBjbXkgLz0gY291bnQ7XG4gICAgICAgIGNNeCAvPSBjb3VudDtcbiAgICAgICAgY015IC89IGNvdW50O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBzbXggKz0gTWF0aC5hYnModG9baV0ueCAtIGNteCk7XG4gICAgICAgICAgICBzbXkgKz0gTWF0aC5hYnModG9baV0ueSAtIGNteSk7XG4gICAgICAgICAgICBzTXggKz0gTWF0aC5hYnMoZnJvbVtpXS54IC0gY014KTtcbiAgICAgICAgICAgIHNNeSArPSBNYXRoLmFicyhmcm9tW2ldLnkgLSBjTXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgTWF0aC5hYnMoc214KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiB8fFxuICAgICAgICAgICAgTWF0aC5hYnMoc215KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiB8fFxuICAgICAgICAgICAgTWF0aC5hYnMoc014KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiB8fFxuICAgICAgICAgICAgTWF0aC5hYnMoc015KSA8IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTlxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gMDtcblxuICAgICAgICBzbXggPSBjb3VudCAvIHNteDtcbiAgICAgICAgc215ID0gY291bnQgLyBzbXk7XG4gICAgICAgIHNNeCA9IGNvdW50IC8gc014O1xuICAgICAgICBzTXkgPSBjb3VudCAvIHNNeTtcblxuICAgICAgICB0MGRbMF0gPSBzTXg7XG4gICAgICAgIHQwZFsxXSA9IDA7XG4gICAgICAgIHQwZFsyXSA9IC1jTXggKiBzTXg7XG4gICAgICAgIHQwZFszXSA9IDA7XG4gICAgICAgIHQwZFs0XSA9IHNNeTtcbiAgICAgICAgdDBkWzVdID0gLWNNeSAqIHNNeTtcbiAgICAgICAgdDBkWzZdID0gMDtcbiAgICAgICAgdDBkWzddID0gMDtcbiAgICAgICAgdDBkWzhdID0gMTtcblxuICAgICAgICB0MWRbMF0gPSAxLjAgLyBzbXg7XG4gICAgICAgIHQxZFsxXSA9IDA7XG4gICAgICAgIHQxZFsyXSA9IGNteDtcbiAgICAgICAgdDFkWzNdID0gMDtcbiAgICAgICAgdDFkWzRdID0gMS4wIC8gc215O1xuICAgICAgICB0MWRbNV0gPSBjbXk7XG4gICAgICAgIHQxZFs2XSA9IDA7XG4gICAgICAgIHQxZFs3XSA9IDA7XG4gICAgICAgIHQxZFs4XSA9IDE7XG4gICAgICAgIC8vXG5cbiAgICAgICAgLy8gY29uc3RydWN0IHN5c3RlbVxuICAgICAgICBpID0gODE7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgTHRMW2ldID0gMC4wO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICB4ID0gKHRvW2ldLnggLSBjbXgpICogc214O1xuICAgICAgICAgICAgeSA9ICh0b1tpXS55IC0gY215KSAqIHNteTtcbiAgICAgICAgICAgIFggPSAoZnJvbVtpXS54IC0gY014KSAqIHNNeDtcbiAgICAgICAgICAgIFkgPSAoZnJvbVtpXS55IC0gY015KSAqIHNNeTtcblxuICAgICAgICAgICAgTHRMWzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzFdICs9IFggKiBZO1xuICAgICAgICAgICAgTHRMWzJdICs9IFg7XG5cbiAgICAgICAgICAgIEx0TFs2XSArPSBYICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzddICs9IFggKiAteCAqIFk7XG4gICAgICAgICAgICBMdExbOF0gKz0gWCAqIC14O1xuICAgICAgICAgICAgTHRMWzEwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFsxMV0gKz0gWTtcblxuICAgICAgICAgICAgTHRMWzE1XSArPSBZICogLXggKiBYO1xuICAgICAgICAgICAgTHRMWzE2XSArPSBZICogLXggKiBZO1xuICAgICAgICAgICAgTHRMWzE3XSArPSBZICogLXg7XG4gICAgICAgICAgICBMdExbMjBdICs9IDEuMDtcblxuICAgICAgICAgICAgTHRMWzI0XSArPSAteCAqIFg7XG4gICAgICAgICAgICBMdExbMjVdICs9IC14ICogWTtcbiAgICAgICAgICAgIEx0TFsyNl0gKz0gLXg7XG4gICAgICAgICAgICBMdExbMzBdICs9IFggKiBYO1xuICAgICAgICAgICAgTHRMWzMxXSArPSBYICogWTtcbiAgICAgICAgICAgIEx0TFszMl0gKz0gWDtcbiAgICAgICAgICAgIEx0TFszM10gKz0gWCAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFszNF0gKz0gWCAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFszNV0gKz0gWCAqIC15O1xuICAgICAgICAgICAgTHRMWzQwXSArPSBZICogWTtcbiAgICAgICAgICAgIEx0TFs0MV0gKz0gWTtcbiAgICAgICAgICAgIEx0TFs0Ml0gKz0gWSAqIC15ICogWDtcbiAgICAgICAgICAgIEx0TFs0M10gKz0gWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs0NF0gKz0gWSAqIC15O1xuICAgICAgICAgICAgTHRMWzUwXSArPSAxLjA7XG4gICAgICAgICAgICBMdExbNTFdICs9IC15ICogWDtcbiAgICAgICAgICAgIEx0TFs1Ml0gKz0gLXkgKiBZO1xuICAgICAgICAgICAgTHRMWzUzXSArPSAteTtcbiAgICAgICAgICAgIEx0TFs2MF0gKz0gLXggKiBYICogLXggKiBYICsgLXkgKiBYICogLXkgKiBYO1xuICAgICAgICAgICAgTHRMWzYxXSArPSAteCAqIFggKiAteCAqIFkgKyAteSAqIFggKiAteSAqIFk7XG4gICAgICAgICAgICBMdExbNjJdICs9IC14ICogWCAqIC14ICsgLXkgKiBYICogLXk7XG4gICAgICAgICAgICBMdExbNzBdICs9IC14ICogWSAqIC14ICogWSArIC15ICogWSAqIC15ICogWTtcbiAgICAgICAgICAgIEx0TFs3MV0gKz0gLXggKiBZICogLXggKyAteSAqIFkgKiAteTtcbiAgICAgICAgICAgIEx0TFs4MF0gKz0gLXggKiAteCArIC15ICogLXk7XG4gICAgICAgIH1cbiAgICAgICAgLy9cblxuICAgICAgICAvLyBzeW1tZXRyeVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgOTsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaTsgKytqKSBMdExbaSAqIDkgKyBqXSA9IEx0TFtqICogOSArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgX2xpbmFsZy5laWdlblZWKHRoaXMubUx0TCwgdGhpcy5FdmVjKTtcblxuICAgICAgICAobWRbMF0gPSBldmRbNzJdKSwgKG1kWzFdID0gZXZkWzczXSksIChtZFsyXSA9IGV2ZFs3NF0pO1xuICAgICAgICAobWRbM10gPSBldmRbNzVdKSwgKG1kWzRdID0gZXZkWzc2XSksIChtZFs1XSA9IGV2ZFs3N10pO1xuICAgICAgICAobWRbNl0gPSBldmRbNzhdKSwgKG1kWzddID0gZXZkWzc5XSksIChtZFs4XSA9IGV2ZFs4MF0pO1xuXG4gICAgICAgIC8vIGRlbm9ybWFsaXplXG4gICAgICAgIF9tYXRtYXRoLm11bHRpcGx5XzN4Myhtb2RlbCwgdGhpcy5UMSwgbW9kZWwpO1xuICAgICAgICBfbWF0bWF0aC5tdWx0aXBseV8zeDMobW9kZWwsIG1vZGVsLCB0aGlzLlQwKTtcblxuICAgICAgICAvLyBzZXQgYm90dG9tIHJpZ2h0IHRvIDEuMFxuICAgICAgICB4ID0gMS4wIC8gbWRbOF07XG4gICAgICAgIG1kWzBdICo9IHg7XG4gICAgICAgIG1kWzFdICo9IHg7XG4gICAgICAgIG1kWzJdICo9IHg7XG4gICAgICAgIG1kWzNdICo9IHg7XG4gICAgICAgIG1kWzRdICo9IHg7XG4gICAgICAgIG1kWzVdICo9IHg7XG4gICAgICAgIG1kWzZdICo9IHg7XG4gICAgICAgIG1kWzddICo9IHg7XG4gICAgICAgIG1kWzhdID0gMS4wO1xuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGVycm9yKGZyb206IHBvaW50X3RbXSwgdG86IHBvaW50X3RbXSwgbW9kZWw6IG1hdHJpeF90LCBlcnI6IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXksIGNvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgcHQwLFxuICAgICAgICAgICAgcHQxLFxuICAgICAgICAgICAgd3cgPSAwLjAsXG4gICAgICAgICAgICBkeCA9IDAuMCxcbiAgICAgICAgICAgIGR5ID0gMC4wO1xuICAgICAgICBjb25zdCBtID0gbW9kZWwuZGF0YTtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHB0MCA9IGZyb21baV07XG4gICAgICAgICAgICBwdDEgPSB0b1tpXTtcblxuICAgICAgICAgICAgd3cgPSAxLjAgLyAobVs2XSAqIHB0MC54ICsgbVs3XSAqIHB0MC55ICsgMS4wKTtcbiAgICAgICAgICAgIGR4ID0gKG1bMF0gKiBwdDAueCArIG1bMV0gKiBwdDAueSArIG1bMl0pICogd3cgLSBwdDEueDtcbiAgICAgICAgICAgIGR5ID0gKG1bM10gKiBwdDAueCArIG1bNF0gKiBwdDAueSArIG1bNV0pICogd3cgLSBwdDEueTtcbiAgICAgICAgICAgIGVycltpXSA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tfc3Vic2V0KGZyb206IHBvaW50X3RbXSwgdG86IHBvaW50X3RbXSwgY291bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICAvLyBzZWVtcyB0byByZWplY3QgZ29vZCBzdWJzZXRzIGFjdHVhbGx5XG4gICAgICAgIC8vaWYoIGhhdmVfY29sbGluZWFyX3BvaW50cyhmcm9tLCBjb3VudCkgfHwgaGF2ZV9jb2xsaW5lYXJfcG9pbnRzKHRvLCBjb3VudCkgKSB7XG4gICAgICAgIC8vcmV0dXJuIGZhbHNlO1xuICAgICAgICAvL31cbiAgICAgICAgY29uc3QgX21hdG1hdGggPSBuZXcgbWF0bWF0aCgpO1xuICAgICAgICBpZiAoY291bnQgPT0gNCkge1xuICAgICAgICAgICAgbGV0IG5lZ2F0aXZlID0gMDtcblxuICAgICAgICAgICAgY29uc3QgZnAwID0gZnJvbVswXSxcbiAgICAgICAgICAgICAgICBmcDEgPSBmcm9tWzFdLFxuICAgICAgICAgICAgICAgIGZwMiA9IGZyb21bMl0sXG4gICAgICAgICAgICAgICAgZnAzID0gZnJvbVszXTtcbiAgICAgICAgICAgIGNvbnN0IHRwMCA9IHRvWzBdLFxuICAgICAgICAgICAgICAgIHRwMSA9IHRvWzFdLFxuICAgICAgICAgICAgICAgIHRwMiA9IHRvWzJdLFxuICAgICAgICAgICAgICAgIHRwMyA9IHRvWzNdO1xuXG4gICAgICAgICAgICAvLyBzZXQxXG4gICAgICAgICAgICBsZXQgQTExID0gZnAwLngsXG4gICAgICAgICAgICAgICAgQTEyID0gZnAwLnksXG4gICAgICAgICAgICAgICAgQTEzID0gMS4wO1xuICAgICAgICAgICAgbGV0IEEyMSA9IGZwMS54LFxuICAgICAgICAgICAgICAgIEEyMiA9IGZwMS55LFxuICAgICAgICAgICAgICAgIEEyMyA9IDEuMDtcbiAgICAgICAgICAgIGxldCBBMzEgPSBmcDIueCxcbiAgICAgICAgICAgICAgICBBMzIgPSBmcDIueSxcbiAgICAgICAgICAgICAgICBBMzMgPSAxLjA7XG5cbiAgICAgICAgICAgIGxldCBCMTEgPSB0cDAueCxcbiAgICAgICAgICAgICAgICBCMTIgPSB0cDAueSxcbiAgICAgICAgICAgICAgICBCMTMgPSAxLjA7XG4gICAgICAgICAgICBsZXQgQjIxID0gdHAxLngsXG4gICAgICAgICAgICAgICAgQjIyID0gdHAxLnksXG4gICAgICAgICAgICAgICAgQjIzID0gMS4wO1xuICAgICAgICAgICAgbGV0IEIzMSA9IHRwMi54LFxuICAgICAgICAgICAgICAgIEIzMiA9IHRwMi55LFxuICAgICAgICAgICAgICAgIEIzMyA9IDEuMDtcblxuICAgICAgICAgICAgbGV0IGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBsZXQgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgLy8gc2V0MlxuICAgICAgICAgICAgKEExMSA9IGZwMS54KSwgKEExMiA9IGZwMS55KTtcbiAgICAgICAgICAgIChBMjEgPSBmcDIueCksIChBMjIgPSBmcDIueSk7XG4gICAgICAgICAgICAoQTMxID0gZnAzLngpLCAoQTMyID0gZnAzLnkpO1xuXG4gICAgICAgICAgICAoQjExID0gdHAxLngpLCAoQjEyID0gdHAxLnkpO1xuICAgICAgICAgICAgKEIyMSA9IHRwMi54KSwgKEIyMiA9IHRwMi55KTtcbiAgICAgICAgICAgIChCMzEgPSB0cDMueCksIChCMzIgPSB0cDMueSk7XG5cbiAgICAgICAgICAgIGRldEEgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQTExLCBBMTIsIEExMywgQTIxLCBBMjIsIEEyMywgQTMxLCBBMzIsIEEzMyk7XG4gICAgICAgICAgICBkZXRCID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEIxMSwgQjEyLCBCMTMsIEIyMSwgQjIyLCBCMjMsIEIzMSwgQjMyLCBCMzMpO1xuXG4gICAgICAgICAgICBpZiAoZGV0QSAqIGRldEIgPCAwKSBuZWdhdGl2ZSsrO1xuXG4gICAgICAgICAgICAvLyBzZXQzXG4gICAgICAgICAgICAoQTExID0gZnAwLngpLCAoQTEyID0gZnAwLnkpO1xuICAgICAgICAgICAgKEEyMSA9IGZwMi54KSwgKEEyMiA9IGZwMi55KTtcbiAgICAgICAgICAgIChBMzEgPSBmcDMueCksIChBMzIgPSBmcDMueSk7XG5cbiAgICAgICAgICAgIChCMTEgPSB0cDAueCksIChCMTIgPSB0cDAueSk7XG4gICAgICAgICAgICAoQjIxID0gdHAyLngpLCAoQjIyID0gdHAyLnkpO1xuICAgICAgICAgICAgKEIzMSA9IHRwMy54KSwgKEIzMiA9IHRwMy55KTtcblxuICAgICAgICAgICAgZGV0QSA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhBMTEsIEExMiwgQTEzLCBBMjEsIEEyMiwgQTIzLCBBMzEsIEEzMiwgQTMzKTtcbiAgICAgICAgICAgIGRldEIgPSBfbWF0bWF0aC5kZXRlcm1pbmFudF8zeDMoQjExLCBCMTIsIEIxMywgQjIxLCBCMjIsIEIyMywgQjMxLCBCMzIsIEIzMyk7XG5cbiAgICAgICAgICAgIGlmIChkZXRBICogZGV0QiA8IDApIG5lZ2F0aXZlKys7XG5cbiAgICAgICAgICAgIC8vIHNldDRcbiAgICAgICAgICAgIChBMTEgPSBmcDAueCksIChBMTIgPSBmcDAueSk7XG4gICAgICAgICAgICAoQTIxID0gZnAxLngpLCAoQTIyID0gZnAxLnkpO1xuICAgICAgICAgICAgKEEzMSA9IGZwMy54KSwgKEEzMiA9IGZwMy55KTtcblxuICAgICAgICAgICAgKEIxMSA9IHRwMC54KSwgKEIxMiA9IHRwMC55KTtcbiAgICAgICAgICAgIChCMjEgPSB0cDEueCksIChCMjIgPSB0cDEueSk7XG4gICAgICAgICAgICAoQjMxID0gdHAzLngpLCAoQjMyID0gdHAzLnkpO1xuXG4gICAgICAgICAgICBkZXRBID0gX21hdG1hdGguZGV0ZXJtaW5hbnRfM3gzKEExMSwgQTEyLCBBMTMsIEEyMSwgQTIyLCBBMjMsIEEzMSwgQTMyLCBBMzMpO1xuICAgICAgICAgICAgZGV0QiA9IF9tYXRtYXRoLmRldGVybWluYW50XzN4MyhCMTEsIEIxMiwgQjEzLCBCMjEsIEIyMiwgQjIzLCBCMzEsIEIzMiwgQjMzKTtcblxuICAgICAgICAgICAgaWYgKGRldEEgKiBkZXRCIDwgMCkgbmVnYXRpdmUrKztcblxuICAgICAgICAgICAgaWYgKG5lZ2F0aXZlICE9IDAgJiYgbmVnYXRpdmUgIT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gYWxsIGdvb2RcbiAgICB9XG59XG5cbmpzZmVhdE5leHQuY2FjaGUgPSBjYWNoZTtcblxuanNmZWF0TmV4dC5weXJhbWlkX3QgPSBjbGFzcyBweXJhbWlkX3QgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwdWJsaWMgbGV2ZWxzOiBudW1iZXI7XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwcml2YXRlIHB5cmRvd246IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKGxldmVsczogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGV2ZWxzID0gbGV2ZWxzIHwgMDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEFycmF5KGxldmVscyk7XG4gICAgICAgIGNvbnN0IF9pbWdwcm9jID0gbmV3IGpzZmVhdE5leHQuaW1ncHJvYygpO1xuICAgICAgICB0aGlzLnB5cmRvd24gPSBfaW1ncHJvYy5weXJkb3duO1xuICAgIH1cblxuICAgIGFsbG9jYXRlKHN0YXJ0X3c6IG51bWJlciwgc3RhcnRfaDogbnVtYmVyLCBkYXRhX3R5cGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgaSA9IHRoaXMubGV2ZWxzO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtpXSA9IG5ldyBtYXRyaXhfdChzdGFydF93ID4+IGksIHN0YXJ0X2ggPj4gaSwgZGF0YV90eXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1aWxkKGlucHV0OiBtYXRyaXhfdCwgc2tpcF9maXJzdF9sZXZlbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIHNraXBfZmlyc3RfbGV2ZWwgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHNraXBfZmlyc3RfbGV2ZWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGp1c3QgY29weSBkYXRhIHRvIGZpcnN0IGxldmVsXG4gICAgICAgIGxldCBpID0gMixcbiAgICAgICAgICAgIGEgPSBpbnB1dCxcbiAgICAgICAgICAgIGI6IGFueSA9IHRoaXMuZGF0YVswXTtcbiAgICAgICAgaWYgKCFza2lwX2ZpcnN0X2xldmVsKSB7XG4gICAgICAgICAgICBsZXQgaiA9IGlucHV0LmNvbHMgKiBpbnB1dC5yb3dzO1xuICAgICAgICAgICAgd2hpbGUgKC0taiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgYi5kYXRhW2pdID0gaW5wdXQuZGF0YVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBiID0gdGhpcy5kYXRhWzFdO1xuICAgICAgICB0aGlzLnB5cmRvd24oYSwgYik7XG4gICAgICAgIGZvciAoOyBpIDwgdGhpcy5sZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgYSA9IGI7XG4gICAgICAgICAgICBiID0gdGhpcy5kYXRhW2ldO1xuICAgICAgICAgICAgdGhpcy5weXJkb3duKGEsIGIpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cbmpzZmVhdE5leHQubWF0cml4X3QgPSBtYXRyaXhfdDtcblxuanNmZWF0TmV4dC5rZXlwb2ludF90ID0ga2V5cG9pbnRfdDtcblxuanNmZWF0TmV4dC5mYXN0X2Nvcm5lcnMgPSBjbGFzcyBmYXN0X2Nvcm5lcnMgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwcml2YXRlIG9mZnNldHMxNjogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgX3RocmVzaG9sZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0aHJlc2hvbGRfdGFiOiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBwaXhlbF9vZmY6IEludDMyQXJyYXk7XG4gICAgcHVibGljIHNjb3JlX2RpZmY6IEludDMyQXJyYXk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vZmZzZXRzMTYgPSBuZXcgSW50MzJBcnJheShbXG4gICAgICAgICAgICAwLCAzLCAxLCAzLCAyLCAyLCAzLCAxLCAzLCAwLCAzLCAtMSwgMiwgLTIsIDEsIC0zLCAwLCAtMywgLTEsIC0zLCAtMiwgLTIsIC0zLCAtMSwgLTMsIDAsIC0zLCAxLCAtMiwgMiwgLTEsXG4gICAgICAgICAgICAzLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy50aHJlc2hvbGRfdGFiID0gbmV3IFVpbnQ4QXJyYXkoNTEyKTtcbiAgICAgICAgdGhpcy5fdGhyZXNob2xkID0gMjA7XG4gICAgICAgIHRoaXMucGl4ZWxfb2ZmID0gbmV3IEludDMyQXJyYXkoMjUpO1xuICAgICAgICB0aGlzLnNjb3JlX2RpZmYgPSBuZXcgSW50MzJBcnJheSgyNSk7XG4gICAgfVxuXG4gICAgc2V0X3RocmVzaG9sZCh0aHJlc2hvbGQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHRoaXMuX3RocmVzaG9sZCA9IE1hdGgubWluKE1hdGgubWF4KHRocmVzaG9sZCwgMCksIDI1NSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAtMjU1OyBpIDw9IDI1NTsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLnRocmVzaG9sZF90YWJbaSArIDI1NV0gPSBpIDwgLXRoaXMuX3RocmVzaG9sZCA/IDEgOiBpID4gdGhpcy5fdGhyZXNob2xkID8gMiA6IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgICB9XG5cbiAgICBkZXRlY3Qoc3JjOiBtYXRyaXhfdCwgY29ybmVyczogcG9pbnRfdFtdLCBib3JkZXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBib3JkZXIgPSAzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgSyA9IDgsXG4gICAgICAgICAgICBOID0gMjU7XG4gICAgICAgIGNvbnN0IGltZyA9IHNyYy5kYXRhLFxuICAgICAgICAgICAgdyA9IHNyYy5jb2xzLFxuICAgICAgICAgICAgaCA9IHNyYy5yb3dzO1xuICAgICAgICBsZXQgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIGsgPSAwLFxuICAgICAgICAgICAgdnQgPSAwLFxuICAgICAgICAgICAgeCA9IDAsXG4gICAgICAgICAgICBtMyA9IDA7XG4gICAgICAgIGNvbnN0IGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKDMgKiB3KTtcbiAgICAgICAgY29uc3QgY3BidWZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoKHcgKyAxKSAqIDMpIDw8IDIpO1xuICAgICAgICBjb25zdCBidWYgPSBidWZfbm9kZS51ODtcbiAgICAgICAgY29uc3QgY3BidWYgPSBjcGJ1Zl9ub2RlLmkzMjtcbiAgICAgICAgY29uc3QgcGl4ZWwgPSB0aGlzLnBpeGVsX29mZjtcbiAgICAgICAgY29uc3Qgc2QgPSB0aGlzLnNjb3JlX2RpZmY7XG4gICAgICAgIGNvbnN0IHN5ID0gTWF0aC5tYXgoMywgYm9yZGVyKTtcbiAgICAgICAgY29uc3QgZXkgPSBNYXRoLm1pbihoIC0gMiwgaCAtIGJvcmRlcik7XG4gICAgICAgIGNvbnN0IHN4ID0gTWF0aC5tYXgoMywgYm9yZGVyKTtcbiAgICAgICAgY29uc3QgZXggPSBNYXRoLm1pbih3IC0gMywgdyAtIGJvcmRlcik7XG4gICAgICAgIGxldCBfY291bnQgPSAwLFxuICAgICAgICAgICAgY29ybmVyc19jbnQgPSAwLFxuICAgICAgICAgICAgcHQ7XG4gICAgICAgIGNvbnN0IHNjb3JlX2Z1bmMgPSBfY21wX3Njb3JlXzE2O1xuICAgICAgICBjb25zdCB0aHJlc2hfdGFiID0gdGhpcy50aHJlc2hvbGRfdGFiO1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSB0aGlzLl90aHJlc2hvbGQ7XG5cbiAgICAgICAgbGV0IHYgPSAwLFxuICAgICAgICAgICAgdGFiID0gMCxcbiAgICAgICAgICAgIGQgPSAwLFxuICAgICAgICAgICAgbmNvcm5lcnMgPSAwLFxuICAgICAgICAgICAgY29ybmVycG9zID0gMCxcbiAgICAgICAgICAgIGN1cnIgPSAwLFxuICAgICAgICAgICAgcHRyID0gMCxcbiAgICAgICAgICAgIHByZXYgPSAwLFxuICAgICAgICAgICAgcHByZXYgPSAwO1xuICAgICAgICBsZXQganAxID0gMCxcbiAgICAgICAgICAgIGptMSA9IDAsXG4gICAgICAgICAgICBzY29yZSA9IDA7XG5cbiAgICAgICAgdGhpcy5fY21wX29mZnNldHMocGl4ZWwsIHcsIDE2KTtcblxuICAgICAgICAvLyBsb2NhbCB2YXJzIGFyZSBmYXN0ZXI/XG4gICAgICAgIGNvbnN0IHBpeGVsMCA9IHBpeGVsWzBdO1xuICAgICAgICBjb25zdCBwaXhlbDEgPSBwaXhlbFsxXTtcbiAgICAgICAgY29uc3QgcGl4ZWwyID0gcGl4ZWxbMl07XG4gICAgICAgIGNvbnN0IHBpeGVsMyA9IHBpeGVsWzNdO1xuICAgICAgICBjb25zdCBwaXhlbDQgPSBwaXhlbFs0XTtcbiAgICAgICAgY29uc3QgcGl4ZWw1ID0gcGl4ZWxbNV07XG4gICAgICAgIGNvbnN0IHBpeGVsNiA9IHBpeGVsWzZdO1xuICAgICAgICBjb25zdCBwaXhlbDcgPSBwaXhlbFs3XTtcbiAgICAgICAgY29uc3QgcGl4ZWw4ID0gcGl4ZWxbOF07XG4gICAgICAgIGNvbnN0IHBpeGVsOSA9IHBpeGVsWzldO1xuICAgICAgICBjb25zdCBwaXhlbDEwID0gcGl4ZWxbMTBdO1xuICAgICAgICBjb25zdCBwaXhlbDExID0gcGl4ZWxbMTFdO1xuICAgICAgICBjb25zdCBwaXhlbDEyID0gcGl4ZWxbMTJdO1xuICAgICAgICBjb25zdCBwaXhlbDEzID0gcGl4ZWxbMTNdO1xuICAgICAgICBjb25zdCBwaXhlbDE0ID0gcGl4ZWxbMTRdO1xuICAgICAgICBjb25zdCBwaXhlbDE1ID0gcGl4ZWxbMTVdO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB3ICogMzsgKytpKSB7XG4gICAgICAgICAgICBidWZbaV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gc3k7IGkgPCBleTsgKytpKSB7XG4gICAgICAgICAgICBwdHIgPSAoaSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICAgICAgbTMgPSAoaSAtIDMpICUgMztcbiAgICAgICAgICAgIGN1cnIgPSAobTMgKiB3KSB8IDA7XG4gICAgICAgICAgICBjb3JuZXJwb3MgPSAobTMgKiAodyArIDEpKSB8IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqKSBidWZbY3VyciArIGpdID0gMDtcbiAgICAgICAgICAgIG5jb3JuZXJzID0gMDtcblxuICAgICAgICAgICAgaWYgKGkgPCBleSAtIDEpIHtcbiAgICAgICAgICAgICAgICBqID0gc3g7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IGV4OyArK2osICsrcHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBpbWdbcHRyXTtcbiAgICAgICAgICAgICAgICAgICAgdGFiID0gLXYgKyAyNTU7XG4gICAgICAgICAgICAgICAgICAgIGQgPSB0aHJlc2hfdGFiW3RhYiArIGltZ1twdHIgKyBwaXhlbDBdXSB8IHRocmVzaF90YWJbdGFiICsgaW1nW3B0ciArIHBpeGVsOF1dO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZCAmPSB0aHJlc2hfdGFiW3RhYiArIGltZ1twdHIgKyBwaXhlbDJdXSB8IHRocmVzaF90YWJbdGFiICsgaW1nW3B0ciArIHBpeGVsMTBdXTtcbiAgICAgICAgICAgICAgICAgICAgZCAmPSB0aHJlc2hfdGFiW3RhYiArIGltZ1twdHIgKyBwaXhlbDRdXSB8IHRocmVzaF90YWJbdGFiICsgaW1nW3B0ciArIHBpeGVsMTJdXTtcbiAgICAgICAgICAgICAgICAgICAgZCAmPSB0aHJlc2hfdGFiW3RhYiArIGltZ1twdHIgKyBwaXhlbDZdXSB8IHRocmVzaF90YWJbdGFiICsgaW1nW3B0ciArIHBpeGVsMTRdXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGQgJj0gdGhyZXNoX3RhYlt0YWIgKyBpbWdbcHRyICsgcGl4ZWwxXV0gfCB0aHJlc2hfdGFiW3RhYiArIGltZ1twdHIgKyBwaXhlbDldXTtcbiAgICAgICAgICAgICAgICAgICAgZCAmPSB0aHJlc2hfdGFiW3RhYiArIGltZ1twdHIgKyBwaXhlbDNdXSB8IHRocmVzaF90YWJbdGFiICsgaW1nW3B0ciArIHBpeGVsMTFdXTtcbiAgICAgICAgICAgICAgICAgICAgZCAmPSB0aHJlc2hfdGFiW3RhYiArIGltZ1twdHIgKyBwaXhlbDVdXSB8IHRocmVzaF90YWJbdGFiICsgaW1nW3B0ciArIHBpeGVsMTNdXTtcbiAgICAgICAgICAgICAgICAgICAgZCAmPSB0aHJlc2hfdGFiW3RhYiArIGltZ1twdHIgKyBwaXhlbDddXSB8IHRocmVzaF90YWJbdGFiICsgaW1nW3B0ciArIHBpeGVsMTVdXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZCAmIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ0ID0gdiAtIHRocmVzaG9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb3VudCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBOOyArK2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gaW1nW3B0ciArIHBpeGVsW2tdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IHZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrX2NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2NvdW50ID4gSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytuY29ybmVycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNwYnVmW2Nvcm5lcnBvcyArIG5jb3JuZXJzXSA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZbY3VyciArIGpdID0gc2NvcmVfZnVuYyhpbWcsIHB0ciwgcGl4ZWwsIHNkLCB0aHJlc2hvbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkICYgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdnQgPSB2ICsgdGhyZXNob2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NvdW50ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IE47ICsraykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBpbWdbcHRyICsgcGl4ZWxba11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4ID4gdnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytfY291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfY291bnQgPiBLKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArK25jb3JuZXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3BidWZbY29ybmVycG9zICsgbmNvcm5lcnNdID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZltjdXJyICsgal0gPSBzY29yZV9mdW5jKGltZywgcHRyLCBwaXhlbCwgc2QsIHRocmVzaG9sZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjcGJ1Zltjb3JuZXJwb3MgKyB3XSA9IG5jb3JuZXJzO1xuXG4gICAgICAgICAgICBpZiAoaSA9PSBzeSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtMyA9IChpIC0gNCArIDMpICUgMztcbiAgICAgICAgICAgIHByZXYgPSAobTMgKiB3KSB8IDA7XG4gICAgICAgICAgICBjb3JuZXJwb3MgPSAobTMgKiAodyArIDEpKSB8IDA7XG4gICAgICAgICAgICBtMyA9IChpIC0gNSArIDMpICUgMztcbiAgICAgICAgICAgIHBwcmV2ID0gKG0zICogdykgfCAwO1xuXG4gICAgICAgICAgICBuY29ybmVycyA9IGNwYnVmW2Nvcm5lcnBvcyArIHddO1xuXG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvcm5lcnM7ICsraykge1xuICAgICAgICAgICAgICAgIGogPSBjcGJ1Zltjb3JuZXJwb3MgKyBrXTtcbiAgICAgICAgICAgICAgICBqcDEgPSAoaiArIDEpIHwgMDtcbiAgICAgICAgICAgICAgICBqbTEgPSAoaiAtIDEpIHwgMDtcbiAgICAgICAgICAgICAgICBzY29yZSA9IGJ1ZltwcmV2ICsgal07XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBzY29yZSA+IGJ1ZltwcmV2ICsganAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBzY29yZSA+IGJ1ZltwcmV2ICsgam0xXSAmJlxuICAgICAgICAgICAgICAgICAgICBzY29yZSA+IGJ1ZltwcHJldiArIGptMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPiBidWZbcHByZXYgKyBqXSAmJlxuICAgICAgICAgICAgICAgICAgICBzY29yZSA+IGJ1ZltwcHJldiArIGpwMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPiBidWZbY3VyciArIGptMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPiBidWZbY3VyciArIGpdICYmXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID4gYnVmW2N1cnIgKyBqcDFdXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgY29ybmVyXG4gICAgICAgICAgICAgICAgICAgIHB0ID0gY29ybmVyc1tjb3JuZXJzX2NudF07XG4gICAgICAgICAgICAgICAgICAgIChwdC54ID0gaiksIChwdC55ID0gaSAtIDEpLCAocHQuc2NvcmUgPSBzY29yZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvcm5lcnNfY250Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IC8vIHkgbG9vcFxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoY3BidWZfbm9kZSk7XG4gICAgICAgIHJldHVybiBjb3JuZXJzX2NudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jbXBfb2Zmc2V0cyhwaXhlbDogVWludDhBcnJheSB8IEludDMyQXJyYXksIHN0ZXA6IG51bWJlciwgcGF0dGVybl9zaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGsgPSAwO1xuICAgICAgICBjb25zdCBvZmZzZXRzID0gdGhpcy5vZmZzZXRzMTY7XG4gICAgICAgIGZvciAoOyBrIDwgcGF0dGVybl9zaXplOyArK2spIHtcbiAgICAgICAgICAgIHBpeGVsW2tdID0gb2Zmc2V0c1trIDw8IDFdICsgb2Zmc2V0c1soayA8PCAxKSArIDFdICogc3RlcDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKDsgayA8IDI1OyArK2spIHtcbiAgICAgICAgICAgIHBpeGVsW2tdID0gcGl4ZWxbayAtIHBhdHRlcm5fc2l6ZV07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5qc2ZlYXROZXh0LmltZ3Byb2MgPSBjbGFzcyBpbWdwcm9jIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ3JheXNjYWxlKHNyYzogVWludDhBcnJheSB8IFVpbnQ4Q2xhbXBlZEFycmF5LCB3OiBudW1iZXIsIGg6IG51bWJlciwgZHN0OiBtYXRyaXhfdCwgY29kZT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyB0aGlzIGlzIGRlZmF1bHQgaW1hZ2UgZGF0YSByZXByZXNlbnRhdGlvbiBpbiBicm93c2VyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29kZSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgICAgICB9XG4gICAgICAgIGxldCB4ID0gMCxcbiAgICAgICAgICAgIHkgPSAwLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIGlyID0gMCxcbiAgICAgICAgICAgIGpyID0gMDtcbiAgICAgICAgbGV0IGNvZWZmX3IgPSA0ODk5LFxuICAgICAgICAgICAgY29lZmZfZyA9IDk2MTcsXG4gICAgICAgICAgICBjb2VmZl9iID0gMTg2OCxcbiAgICAgICAgICAgIGNuID0gNDtcblxuICAgICAgICBpZiAoY29kZSA9PSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX0JHUkEyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNvZWZmX3IgPSAxODY4O1xuICAgICAgICAgICAgY29lZmZfYiA9IDQ4OTk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0IyR1JBWSB8fCBjb2RlID09IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfQkdSMkdSQVkpIHtcbiAgICAgICAgICAgIGNuID0gMztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbjIgPSBjbiA8PCAxLFxuICAgICAgICAgICAgY24zID0gKGNuICogMykgfCAwO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgMSk7XG4gICAgICAgIGNvbnN0IGRzdF91OCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoOyArK3ksIGogKz0gdywgaSArPSB3ICogY24pIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDAsIGlyID0gaSwganIgPSBqOyB4IDw9IHcgLSA0OyB4ICs9IDQsIGlyICs9IGNuIDw8IDIsIGpyICs9IDQpIHtcbiAgICAgICAgICAgICAgICBkc3RfdThbanJdID0gKHNyY1tpcl0gKiBjb2VmZl9yICsgc3JjW2lyICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICAgICAgZHN0X3U4W2pyICsgMV0gPVxuICAgICAgICAgICAgICAgICAgICAoc3JjW2lyICsgY25dICogY29lZmZfciArIHNyY1tpciArIGNuICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24gKyAyXSAqIGNvZWZmX2IgKyA4MTkyKSA+PiAxNDtcbiAgICAgICAgICAgICAgICBkc3RfdThbanIgKyAyXSA9XG4gICAgICAgICAgICAgICAgICAgIChzcmNbaXIgKyBjbjJdICogY29lZmZfciArIHNyY1tpciArIGNuMiArIDFdICogY29lZmZfZyArIHNyY1tpciArIGNuMiArIDJdICogY29lZmZfYiArIDgxOTIpID4+IDE0O1xuICAgICAgICAgICAgICAgIGRzdF91OFtqciArIDNdID1cbiAgICAgICAgICAgICAgICAgICAgKHNyY1tpciArIGNuM10gKiBjb2VmZl9yICsgc3JjW2lyICsgY24zICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgY24zICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCwgKytqciwgaXIgKz0gY24pIHtcbiAgICAgICAgICAgICAgICBkc3RfdThbanJdID0gKHNyY1tpcl0gKiBjb2VmZl9yICsgc3JjW2lyICsgMV0gKiBjb2VmZl9nICsgc3JjW2lyICsgMl0gKiBjb2VmZl9iICsgODE5MikgPj4gMTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZXJpdmVkIGZyb20gQ0NWIGxpYnJhcnlcbiAgICByZXNhbXBsZShzcmM6IG1hdHJpeF90LCBkc3Q6IG1hdHJpeF90LCBudzogbnVtYmVyLCBuaDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGggPSBzcmMucm93cyxcbiAgICAgICAgICAgIHcgPSBzcmMuY29scztcbiAgICAgICAgaWYgKGggPiBuaCAmJiB3ID4gbncpIHtcbiAgICAgICAgICAgIGRzdC5yZXNpemUobncsIG5oLCBzcmMuY2hhbm5lbCk7XG4gICAgICAgICAgICAvLyB1c2luZyB0aGUgZmFzdCBhbHRlcm5hdGl2ZSAoZml4IHBvaW50IHNjYWxlLCAweDEwMCB0byBhdm9pZCBvdmVyZmxvdylcbiAgICAgICAgICAgIGlmIChzcmMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiBkc3QudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCAmJiAoaCAqIHcpIC8gKG5oICogbncpIDwgMHgxMDApIHtcbiAgICAgICAgICAgICAgICBfcmVzYW1wbGVfdTgoc3JjLCBkc3QsIHRoaXMuY2FjaGUsIG53LCBuaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yZXNhbXBsZShzcmMsIGRzdCwgdGhpcy5jYWNoZSwgbncsIG5oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJveF9ibHVyX2dyYXkoc3JjOiBtYXRyaXhfdCwgZHN0OiBtYXRyaXhfdCwgcmFkaXVzOiBudW1iZXIsIG9wdGlvbnM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHcgPSBzcmMuY29scyxcbiAgICAgICAgICAgIGggPSBzcmMucm93cyxcbiAgICAgICAgICAgIGgyID0gaCA8PCAxLFxuICAgICAgICAgICAgdzIgPSB3IDw8IDE7XG4gICAgICAgIGxldCBpID0gMCxcbiAgICAgICAgICAgIHggPSAwLFxuICAgICAgICAgICAgeSA9IDAsXG4gICAgICAgICAgICBlbmQgPSAwO1xuICAgICAgICBjb25zdCB3aW5kb3dTaXplID0gKChyYWRpdXMgPDwgMSkgKyAxKSB8IDA7XG4gICAgICAgIGNvbnN0IHJhZGl1c1BsdXNPbmUgPSAocmFkaXVzICsgMSkgfCAwLFxuICAgICAgICAgICAgcmFkaXVzUGx1czIgPSAocmFkaXVzUGx1c09uZSArIDEpIHwgMDtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBvcHRpb25zICYgSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFID8gMSA6IDEuMCAvICh3aW5kb3dTaXplICogd2luZG93U2l6ZSk7XG5cbiAgICAgICAgY29uc3QgdG1wX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKiBoKSA8PCAyKTtcblxuICAgICAgICBsZXQgc3VtID0gMCxcbiAgICAgICAgICAgIGRzdEluZGV4ID0gMCxcbiAgICAgICAgICAgIHNyY0luZGV4ID0gMCxcbiAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gMCxcbiAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IGRhdGFfaTMyID0gdG1wX2J1ZmYuaTMyOyAvLyB0byBwcmV2ZW50IG92ZXJmbG93XG4gICAgICAgIGxldCBkYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIGxldCBob2xkID0gMDtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICAvLyBmaXJzdCBwYXNzXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gc2NhbGVcbiAgICAgICAgLy9kYXRhX3U4ID0gc3JjLmRhdGE7XG4gICAgICAgIC8vZGF0YV9pMzIgPSB0bXA7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoOyArK3kpIHtcbiAgICAgICAgICAgIGRzdEluZGV4ID0geTtcbiAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX3U4W3NyY0luZGV4XTtcblxuICAgICAgICAgICAgZm9yIChpID0gKHNyY0luZGV4ICsgMSkgfCAwLCBlbmQgPSAoc3JjSW5kZXggKyByYWRpdXMpIHwgMDsgaSA8PSBlbmQ7ICsraSkge1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IChzcmNJbmRleCArIHJhZGl1c1BsdXNPbmUpIHwgMDtcbiAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgaG9sZCA9IGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHcgLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSBoMikge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleCArIGhdID0gc3VtO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX3U4W25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleCArIDFdO1xuXG4gICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdyAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gaCkge1xuICAgICAgICAgICAgICAgIGRhdGFfaTMyW2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleF0gLSBkYXRhX3U4W3ByZXZpb3VzUGl4ZWxJbmRleF07XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBob2xkID0gZGF0YV91OFtuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgZm9yICg7IHggPCB3OyArK3gsIGRzdEluZGV4ICs9IGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhX2kzMltkc3RJbmRleF0gPSBzdW07XG5cbiAgICAgICAgICAgICAgICBzdW0gKz0gaG9sZCAtIGRhdGFfdThbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3JjSW5kZXggKz0gdztcbiAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyBzZWNvbmQgcGFzc1xuICAgICAgICBzcmNJbmRleCA9IDA7XG4gICAgICAgIC8vZGF0YV9pMzIgPSB0bXA7IC8vIHRoaXMgaXMgYSB0cmFuc3Bvc2VcbiAgICAgICAgZGF0YV91OCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIC8vIGRvbnQgc2NhbGUgcmVzdWx0XG4gICAgICAgIGlmIChzY2FsZSA9PSAxKSB7XG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdzsgKyt5KSB7XG4gICAgICAgICAgICAgICAgZHN0SW5kZXggPSB5O1xuICAgICAgICAgICAgICAgIHN1bSA9IHJhZGl1c1BsdXNPbmUgKiBkYXRhX2kzMltzcmNJbmRleF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAoc3JjSW5kZXggKyAxKSB8IDAsIGVuZCA9IChzcmNJbmRleCArIHJhZGl1cykgfCAwOyBpIDw9IGVuZDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCA9IHNyY0luZGV4ICsgcmFkaXVzUGx1c09uZTtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggPSBzcmNJbmRleDtcbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCByYWRpdXM7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGhvbGQ7XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXMyOyB4ICs9IDIsIGRzdEluZGV4ICs9IHcyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4ICsgd10gPSBzdW07XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCArIDFdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4ICs9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaCAtIHJhZGl1c1BsdXNPbmU7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bTtcblxuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFBpeGVsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGZvciAoOyB4IDwgaDsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3JjSW5kZXggKz0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB3OyArK3kpIHtcbiAgICAgICAgICAgICAgICBkc3RJbmRleCA9IHk7XG4gICAgICAgICAgICAgICAgc3VtID0gcmFkaXVzUGx1c09uZSAqIGRhdGFfaTMyW3NyY0luZGV4XTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IChzcmNJbmRleCArIDEpIHwgMCwgZW5kID0gKHNyY0luZGV4ICsgcmFkaXVzKSB8IDA7IGkgPD0gZW5kOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW2ldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4ID0gc3JjSW5kZXggKyByYWRpdXNQbHVzT25lO1xuICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCA9IHNyY0luZGV4O1xuICAgICAgICAgICAgICAgIGhvbGQgPSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IHJhZGl1czsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBkYXRhX2kzMltuZXh0UGl4ZWxJbmRleF0gLSBob2xkO1xuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGggLSByYWRpdXNQbHVzMjsgeCArPSAyLCBkc3RJbmRleCArPSB3Mikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXhdIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4ICsgd10gPSBzdW0gKiBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4ICsgMV0gLSBkYXRhX2kzMltwcmV2aW91c1BpeGVsSW5kZXggKyAxXTtcblxuICAgICAgICAgICAgICAgICAgICBuZXh0UGl4ZWxJbmRleCArPSAyO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1BpeGVsSW5kZXggKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IHggPCBoIC0gcmFkaXVzUGx1c09uZTsgKyt4LCBkc3RJbmRleCArPSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFfdThbZHN0SW5kZXhdID0gc3VtICogc2NhbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGRhdGFfaTMyW25leHRQaXhlbEluZGV4XSAtIGRhdGFfaTMyW3ByZXZpb3VzUGl4ZWxJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIG5leHRQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUGl4ZWxJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob2xkID0gZGF0YV9pMzJbbmV4dFBpeGVsSW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBmb3IgKDsgeCA8IGg7ICsreCwgZHN0SW5kZXggKz0gdykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhX3U4W2RzdEluZGV4XSA9IHN1bSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBob2xkIC0gZGF0YV9pMzJbcHJldmlvdXNQaXhlbEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQaXhlbEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3JjSW5kZXggKz0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih0bXBfYnVmZik7XG4gICAgfVxuXG4gICAgZ2F1c3NpYW5fYmx1cihzcmM6IG1hdHJpeF90LCBkc3Q6IG1hdHJpeF90LCBrZXJuZWxfc2l6ZTogbnVtYmVyLCBzaWdtYTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGpzZmVhdG1hdGggPSBuZXcganNmZWF0TmV4dC5tYXRoKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygc2lnbWEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHNpZ21hID0gMC4wO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Yga2VybmVsX3NpemUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGtlcm5lbF9zaXplID0gMDtcbiAgICAgICAgfVxuICAgICAgICBrZXJuZWxfc2l6ZSA9IGtlcm5lbF9zaXplID09IDAgPyAoTWF0aC5tYXgoMSwgNC4wICogc2lnbWEgKyAxLjAgLSAxZS04KSAqIDIgKyAxKSB8IDAgOiBrZXJuZWxfc2l6ZTtcbiAgICAgICAgY29uc3QgaGFsZl9rZXJuZWwgPSBrZXJuZWxfc2l6ZSA+PiAxO1xuICAgICAgICBjb25zdCB3ID0gc3JjLmNvbHMsXG4gICAgICAgICAgICBoID0gc3JjLnJvd3M7XG4gICAgICAgIGNvbnN0IGRhdGFfdHlwZSA9IHNyYy50eXBlLFxuICAgICAgICAgICAgaXNfdTggPSBkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCBzcmMuY2hhbm5lbCk7XG5cbiAgICAgICAgY29uc3Qgc3JjX2QgPSBzcmMuZGF0YSxcbiAgICAgICAgICAgIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIGxldCBidWYsXG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICBidWZfc3ogPSAoa2VybmVsX3NpemUgKyBNYXRoLm1heChoLCB3KSkgfCAwO1xuXG4gICAgICAgIGNvbnN0IGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGJ1Zl9zeiA8PCAyKTtcbiAgICAgICAgY29uc3QgZmlsdF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGtlcm5lbF9zaXplIDw8IDIpO1xuXG4gICAgICAgIGlmIChpc191OCkge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuaTMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmkzMjtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgICAgICBmaWx0ZXIgPSBmaWx0X25vZGUuZjMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmID0gYnVmX25vZGUuZjMyO1xuICAgICAgICAgICAgZmlsdGVyID0gZmlsdF9ub2RlLmYzMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGpzZmVhdG1hdGguZ2V0X2dhdXNzaWFuX2tlcm5lbChrZXJuZWxfc2l6ZSwgc2lnbWEsIGZpbHRlciwgZGF0YV90eXBlKTtcblxuICAgICAgICBpZiAoaXNfdTgpIHtcbiAgICAgICAgICAgIF9jb252b2xfdTgoYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9jb252b2woYnVmLCBzcmNfZCwgZHN0X2QsIHcsIGgsIGZpbHRlciwga2VybmVsX3NpemUsIGhhbGZfa2VybmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihidWZfbm9kZSk7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihmaWx0X25vZGUpO1xuICAgIH1cblxuICAgIGhvdWdoX3RyYW5zZm9ybShpbWc6IG1hdHJpeF90LCByaG9fcmVzOiBudW1iZXIsIHRoZXRhX3JlczogbnVtYmVyLCB0aHJlc2hvbGQ6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IHI7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGltZy5kYXRhO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gaW1nLmNvbHM7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGltZy5yb3dzO1xuICAgICAgICBjb25zdCBzdGVwID0gd2lkdGg7XG5cbiAgICAgICAgY29uc3QgbWluX3RoZXRhID0gMC4wO1xuICAgICAgICBjb25zdCBtYXhfdGhldGEgPSBNYXRoLlBJO1xuXG4gICAgICAgIGNvbnN0IG51bWFuZ2xlID0gTWF0aC5yb3VuZCgobWF4X3RoZXRhIC0gbWluX3RoZXRhKSAvIHRoZXRhX3Jlcyk7XG4gICAgICAgIGNvbnN0IG51bXJobyA9IE1hdGgucm91bmQoKCh3aWR0aCArIGhlaWdodCkgKiAyICsgMSkgLyByaG9fcmVzKTtcbiAgICAgICAgY29uc3QgaXJobyA9IDEuMCAvIHJob19yZXM7XG5cbiAgICAgICAgY29uc3QgYWNjdW0gPSBuZXcgSW50MzJBcnJheSgobnVtYW5nbGUgKyAyKSAqIChudW1yaG8gKyAyKSk7IC8vdHlwZWQgYXJyYXlzIGFyZSBpbml0aWFsaXplZCB0byAwXG4gICAgICAgIGNvbnN0IHRhYlNpbiA9IG5ldyBGbG9hdDMyQXJyYXkobnVtYW5nbGUpO1xuICAgICAgICBjb25zdCB0YWJDb3MgPSBuZXcgRmxvYXQzMkFycmF5KG51bWFuZ2xlKTtcblxuICAgICAgICBsZXQgbiA9IDA7XG4gICAgICAgIGxldCBhbmcgPSBtaW5fdGhldGE7XG4gICAgICAgIGZvciAoOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgdGFiU2luW25dID0gTWF0aC5zaW4oYW5nKSAqIGlyaG87XG4gICAgICAgICAgICB0YWJDb3Nbbl0gPSBNYXRoLmNvcyhhbmcpICogaXJobztcbiAgICAgICAgICAgIGFuZyArPSB0aGV0YV9yZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGFnZSAxLiBmaWxsIGFjY3VtdWxhdG9yXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB3aWR0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlW2kgKiBzdGVwICsgal0gIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHIsIChuKzEpICogKG51bXJobysyKSArIHIrMSwgdGFiQ29zW25dLCB0YWJTaW5bbl0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG4gPSAwOyBuIDwgbnVtYW5nbGU7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgciA9IE1hdGgucm91bmQoaiAqIHRhYkNvc1tuXSArIGkgKiB0YWJTaW5bbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgciArPSAobnVtcmhvIC0gMSkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW1bKG4gKyAxKSAqIChudW1yaG8gKyAyKSArIHIgKyAxXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMi4gZmluZCBsb2NhbCBtYXhpbXVtc1xuICAgICAgICAvL1RPRE86IENvbnNpZGVyIG1ha2luZyBhIHZlY3RvciBjbGFzcyB0aGF0IHVzZXMgdHlwZWQgYXJyYXlzXG4gICAgICAgIGNvbnN0IF9zb3J0X2J1ZiA9IFtdO1xuICAgICAgICBmb3IgKHIgPSAwOyByIDwgbnVtcmhvOyByKyspIHtcbiAgICAgICAgICAgIGZvciAobiA9IDA7IG4gPCBudW1hbmdsZTsgbisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZSA9IChuICsgMSkgKiAobnVtcmhvICsgMikgKyByICsgMTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID4gdGhyZXNob2xkICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID4gYWNjdW1bYmFzZSAtIDFdICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY3VtW2Jhc2VdID49IGFjY3VtW2Jhc2UgKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+IGFjY3VtW2Jhc2UgLSBudW1yaG8gLSAyXSAmJlxuICAgICAgICAgICAgICAgICAgICBhY2N1bVtiYXNlXSA+PSBhY2N1bVtiYXNlICsgbnVtcmhvICsgMl1cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgX3NvcnRfYnVmLnB1c2goYmFzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RhZ2UgMy4gc29ydCB0aGUgZGV0ZWN0ZWQgbGluZXMgYnkgYWNjdW11bGF0b3IgdmFsdWVcbiAgICAgICAgX3NvcnRfYnVmLnNvcnQoZnVuY3Rpb24gKGwxLCBsMikge1xuICAgICAgICAgICAgcmV0dXJuIDxudW1iZXI+KDx1bmtub3duPihhY2N1bVtsMV0gPiBhY2N1bVtsMl0gfHwgKGFjY3VtW2wxXSA9PSBhY2N1bVtsMl0gJiYgbDEgPCBsMikpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc3RhZ2UgNC4gc3RvcmUgdGhlIGZpcnN0IG1pbih0b3RhbCxsaW5lc01heCkgbGluZXMgdG8gdGhlIG91dHB1dCBidWZmZXJcbiAgICAgICAgY29uc3QgbGluZXNNYXggPSBNYXRoLm1pbihudW1hbmdsZSAqIG51bXJobywgX3NvcnRfYnVmLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gMS4wIC8gKG51bXJobyArIDIpO1xuICAgICAgICBjb25zdCBsaW5lcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGluZXNNYXg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWR4ID0gX3NvcnRfYnVmW2ldO1xuICAgICAgICAgICAgbiA9IE1hdGguZmxvb3IoaWR4ICogc2NhbGUpIC0gMTtcbiAgICAgICAgICAgIHIgPSBpZHggLSAobiArIDEpICogKG51bXJobyArIDIpIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IGxyaG8gPSAociAtIChudW1yaG8gLSAxKSAqIDAuNSkgKiByaG9fcmVzO1xuICAgICAgICAgICAgY29uc3QgbGFuZ2xlID0gbiAqIHRoZXRhX3JlcztcbiAgICAgICAgICAgIGxpbmVzLnB1c2goW2xyaG8sIGxhbmdsZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW5lcztcbiAgICB9XG5cbiAgICBweXJkb3duKHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QsIHN4PzogbnVtYmVyLCBzeT86IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyB0aGlzIGlzIG5lZWRlZCBmb3IgYmJmXG4gICAgICAgIGlmICh0eXBlb2Ygc3ggPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHN4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHN5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBzeSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3ID0gc3JjLmNvbHMsXG4gICAgICAgICAgICBoID0gc3JjLnJvd3M7XG4gICAgICAgIGNvbnN0IHcyID0gdyA+PiAxLFxuICAgICAgICAgICAgaDIgPSBoID4+IDE7XG4gICAgICAgIGNvbnN0IF93MiA9IHcyIC0gKHN4IDw8IDEpLFxuICAgICAgICAgICAgX2gyID0gaDIgLSAoc3kgPDwgMSk7XG4gICAgICAgIGxldCB4ID0gMCxcbiAgICAgICAgICAgIHkgPSAwLFxuICAgICAgICAgICAgc3B0ciA9IHN4ICsgc3kgKiB3LFxuICAgICAgICAgICAgc2xpbmUgPSAwLFxuICAgICAgICAgICAgZHB0ciA9IDAsXG4gICAgICAgICAgICBkbGluZSA9IDA7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3MiwgaDIsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICBjb25zdCBzcmNfZCA9IHNyYy5kYXRhLFxuICAgICAgICAgICAgZHN0X2QgPSBkc3QuZGF0YTtcblxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgX2gyOyArK3kpIHtcbiAgICAgICAgICAgIHNsaW5lID0gc3B0cjtcbiAgICAgICAgICAgIGRsaW5lID0gZHB0cjtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPD0gX3cyIC0gMjsgeCArPSAyLCBkbGluZSArPSAyLCBzbGluZSArPSA0KSB7XG4gICAgICAgICAgICAgICAgZHN0X2RbZGxpbmVdID0gKHNyY19kW3NsaW5lXSArIHNyY19kW3NsaW5lICsgMV0gKyBzcmNfZFtzbGluZSArIHddICsgc3JjX2Rbc2xpbmUgKyB3ICsgMV0gKyAyKSA+PiAyO1xuICAgICAgICAgICAgICAgIGRzdF9kW2RsaW5lICsgMV0gPVxuICAgICAgICAgICAgICAgICAgICAoc3JjX2Rbc2xpbmUgKyAyXSArIHNyY19kW3NsaW5lICsgM10gKyBzcmNfZFtzbGluZSArIHcgKyAyXSArIHNyY19kW3NsaW5lICsgdyArIDNdICsgMikgPj4gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgX3cyOyArK3gsICsrZGxpbmUsIHNsaW5lICs9IDIpIHtcbiAgICAgICAgICAgICAgICBkc3RfZFtkbGluZV0gPSAoc3JjX2Rbc2xpbmVdICsgc3JjX2Rbc2xpbmUgKyAxXSArIHNyY19kW3NsaW5lICsgd10gKyBzcmNfZFtzbGluZSArIHcgKyAxXSArIDIpID4+IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcHRyICs9IHcgPDwgMTtcbiAgICAgICAgICAgIGRwdHIgKz0gdzI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc2NoYXJyX2Rlcml2YXRpdmVzKHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdyA9IHNyYy5jb2xzLFxuICAgICAgICAgICAgaCA9IHNyYy5yb3dzO1xuICAgICAgICBsZXQgZHN0ZXAgPSB3IDw8IDEsXG4gICAgICAgICAgICB4ID0gMCxcbiAgICAgICAgICAgIHkgPSAwLFxuICAgICAgICAgICAgeDEgPSAwLFxuICAgICAgICAgICAgYSxcbiAgICAgICAgICAgIGIsXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgZCxcbiAgICAgICAgICAgIGUsXG4gICAgICAgICAgICBmO1xuICAgICAgICBsZXQgc3JvdzAgPSAwLFxuICAgICAgICAgICAgc3JvdzEgPSAwLFxuICAgICAgICAgICAgc3JvdzIgPSAwLFxuICAgICAgICAgICAgZHJvdyA9IDA7XG4gICAgICAgIGxldCB0cm93MCwgdHJvdzE7XG5cbiAgICAgICAgZHN0LnJlc2l6ZSh3LCBoLCAyKTsgLy8gMiBjaGFubmVsIG91dHB1dCBneCwgZ3lcblxuICAgICAgICBjb25zdCBpbWcgPSBzcmMuZGF0YSxcbiAgICAgICAgICAgIGd4Z3kgPSBkc3QuZGF0YTtcblxuICAgICAgICBjb25zdCBidWYwX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcbiAgICAgICAgY29uc3QgYnVmMV9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCh3ICsgMikgPDwgMik7XG5cbiAgICAgICAgaWYgKHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90IHx8IHNyYy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCkge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuaTMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuaTMyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJvdzAgPSBidWYwX25vZGUuZjMyO1xuICAgICAgICAgICAgdHJvdzEgPSBidWYxX25vZGUuZjMyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IHkgPCBoOyArK3ksIHNyb3cxICs9IHcpIHtcbiAgICAgICAgICAgIHNyb3cwID0gKCh5ID4gMCA/IHkgLSAxIDogMSkgKiB3KSB8IDA7XG4gICAgICAgICAgICBzcm93MiA9ICgoeSA8IGggLSAxID8geSArIDEgOiBoIC0gMikgKiB3KSB8IDA7XG4gICAgICAgICAgICBkcm93ID0gKHkgKiBkc3RlcCkgfCAwO1xuICAgICAgICAgICAgLy8gZG8gdmVydGljYWwgY29udm9sdXRpb25cbiAgICAgICAgICAgIGZvciAoeCA9IDAsIHgxID0gMTsgeCA8PSB3IC0gMjsgeCArPSAyLCB4MSArPSAyKSB7XG4gICAgICAgICAgICAgICAgKGEgPSBpbWdbc3JvdzAgKyB4XSksIChiID0gaW1nW3Nyb3cyICsgeF0pO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9IChhICsgYikgKiAzICsgaW1nW3Nyb3cxICsgeF0gKiAxMDtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSBiIC0gYTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIChhID0gaW1nW3Nyb3cwICsgeCArIDFdKSwgKGIgPSBpbWdbc3JvdzIgKyB4ICsgMV0pO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxICsgMV0gPSAoYSArIGIpICogMyArIGltZ1tzcm93MSArIHggKyAxXSAqIDEwO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxICsgMV0gPSBiIC0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK3gxKSB7XG4gICAgICAgICAgICAgICAgKGEgPSBpbWdbc3JvdzAgKyB4XSksIChiID0gaW1nW3Nyb3cyICsgeF0pO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9IChhICsgYikgKiAzICsgaW1nW3Nyb3cxICsgeF0gKiAxMDtcbiAgICAgICAgICAgICAgICB0cm93MVt4MV0gPSBiIC0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1ha2UgYm9yZGVyXG4gICAgICAgICAgICB4ID0gKHcgKyAxKSB8IDA7XG4gICAgICAgICAgICB0cm93MFswXSA9IHRyb3cwWzFdO1xuICAgICAgICAgICAgdHJvdzBbeF0gPSB0cm93MFt3XTtcbiAgICAgICAgICAgIHRyb3cxWzBdID0gdHJvdzFbMV07XG4gICAgICAgICAgICB0cm93MVt4XSA9IHRyb3cxW3ddO1xuICAgICAgICAgICAgLy8gZG8gaG9yaXpvbnRhbCBjb252b2x1dGlvbiwgaW50ZXJsZWF2ZSB0aGUgcmVzdWx0cyBhbmQgc3RvcmUgdGhlbVxuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8PSB3IC0gNDsgeCArPSA0KSB7XG4gICAgICAgICAgICAgICAgKGEgPSB0cm93MVt4ICsgMl0pLFxuICAgICAgICAgICAgICAgICAgICAoYiA9IHRyb3cxW3ggKyAxXSksXG4gICAgICAgICAgICAgICAgICAgIChjID0gdHJvdzFbeCArIDNdKSxcbiAgICAgICAgICAgICAgICAgICAgKGQgPSB0cm93MVt4ICsgNF0pLFxuICAgICAgICAgICAgICAgICAgICAoZSA9IHRyb3cwW3ggKyAyXSksXG4gICAgICAgICAgICAgICAgICAgIChmID0gdHJvdzBbeCArIDNdKTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSBlIC0gdHJvdzBbeF07XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGEgKyB0cm93MVt4XSkgKiAzICsgYiAqIDEwO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IGYgLSB0cm93MFt4ICsgMV07XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKGMgKyBiKSAqIDMgKyBhICogMTA7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSB0cm93MFt4ICsgNF0gLSBlO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IChkICsgYSkgKiAzICsgYyAqIDEwO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IHRyb3cwW3ggKyA1XSAtIGY7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyA1XSArIGMpICogMyArIGQgKiAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4KSB7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gdHJvdzBbeCArIDJdIC0gdHJvdzBbeF07XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gKHRyb3cxW3ggKyAyXSArIHRyb3cxW3hdKSAqIDMgKyB0cm93MVt4ICsgMV0gKiAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuXG4gICAgLy8gY29tcHV0ZSBncmFkaWVudCB1c2luZyBTb2JlbCBrZXJuZWwgWzEgMiAxXSAqIFstMSAwIDFdXlRcbiAgICAvLyBkc3Q6IFtneCxneSwuLi5dXG4gICAgc29iZWxfZGVyaXZhdGl2ZXMoc3JjOiBtYXRyaXhfdCwgZHN0OiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICBjb25zdCB3ID0gc3JjLmNvbHMsXG4gICAgICAgICAgICBoID0gc3JjLnJvd3M7XG4gICAgICAgIGxldCBkc3RlcCA9IHcgPDwgMSxcbiAgICAgICAgICAgIHggPSAwLFxuICAgICAgICAgICAgeSA9IDAsXG4gICAgICAgICAgICB4MSA9IDAsXG4gICAgICAgICAgICBhLFxuICAgICAgICAgICAgYixcbiAgICAgICAgICAgIGMsXG4gICAgICAgICAgICBkLFxuICAgICAgICAgICAgZSxcbiAgICAgICAgICAgIGY7XG4gICAgICAgIGxldCBzcm93MCA9IDAsXG4gICAgICAgICAgICBzcm93MSA9IDAsXG4gICAgICAgICAgICBzcm93MiA9IDAsXG4gICAgICAgICAgICBkcm93ID0gMDtcbiAgICAgICAgbGV0IHRyb3cwLCB0cm93MTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIDIpOyAvLyAyIGNoYW5uZWwgb3V0cHV0IGd4LCBneVxuXG4gICAgICAgIGNvbnN0IGltZyA9IHNyYy5kYXRhLFxuICAgICAgICAgICAgZ3hneSA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGNvbnN0IGJ1ZjBfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyArIDIpIDw8IDIpO1xuICAgICAgICBjb25zdCBidWYxX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKHcgKyAyKSA8PCAyKTtcblxuICAgICAgICBpZiAoc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfHwgc3JjLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90KSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5pMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5pMzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cm93MCA9IGJ1ZjBfbm9kZS5mMzI7XG4gICAgICAgICAgICB0cm93MSA9IGJ1ZjFfbm9kZS5mMzI7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgeSA8IGg7ICsreSwgc3JvdzEgKz0gdykge1xuICAgICAgICAgICAgc3JvdzAgPSAoKHkgPiAwID8geSAtIDEgOiAxKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIHNyb3cyID0gKCh5IDwgaCAtIDEgPyB5ICsgMSA6IGggLSAyKSAqIHcpIHwgMDtcbiAgICAgICAgICAgIGRyb3cgPSAoeSAqIGRzdGVwKSB8IDA7XG4gICAgICAgICAgICAvLyBkbyB2ZXJ0aWNhbCBjb252b2x1dGlvblxuICAgICAgICAgICAgZm9yICh4ID0gMCwgeDEgPSAxOyB4IDw9IHcgLSAyOyB4ICs9IDIsIHgxICs9IDIpIHtcbiAgICAgICAgICAgICAgICAoYSA9IGltZ1tzcm93MCArIHhdKSwgKGIgPSBpbWdbc3JvdzIgKyB4XSk7XG4gICAgICAgICAgICAgICAgdHJvdzBbeDFdID0gYSArIGIgKyBpbWdbc3JvdzEgKyB4XSAqIDI7XG4gICAgICAgICAgICAgICAgdHJvdzFbeDFdID0gYiAtIGE7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAoYSA9IGltZ1tzcm93MCArIHggKyAxXSksIChiID0gaW1nW3Nyb3cyICsgeCArIDFdKTtcbiAgICAgICAgICAgICAgICB0cm93MFt4MSArIDFdID0gYSArIGIgKyBpbWdbc3JvdzEgKyB4ICsgMV0gKiAyO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxICsgMV0gPSBiIC0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyB4IDwgdzsgKyt4LCArK3gxKSB7XG4gICAgICAgICAgICAgICAgKGEgPSBpbWdbc3JvdzAgKyB4XSksIChiID0gaW1nW3Nyb3cyICsgeF0pO1xuICAgICAgICAgICAgICAgIHRyb3cwW3gxXSA9IGEgKyBiICsgaW1nW3Nyb3cxICsgeF0gKiAyO1xuICAgICAgICAgICAgICAgIHRyb3cxW3gxXSA9IGIgLSBhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFrZSBib3JkZXJcbiAgICAgICAgICAgIHggPSAodyArIDEpIHwgMDtcbiAgICAgICAgICAgIHRyb3cwWzBdID0gdHJvdzBbMV07XG4gICAgICAgICAgICB0cm93MFt4XSA9IHRyb3cwW3ddO1xuICAgICAgICAgICAgdHJvdzFbMF0gPSB0cm93MVsxXTtcbiAgICAgICAgICAgIHRyb3cxW3hdID0gdHJvdzFbd107XG4gICAgICAgICAgICAvLyBkbyBob3Jpem9udGFsIGNvbnZvbHV0aW9uLCBpbnRlcmxlYXZlIHRoZSByZXN1bHRzIGFuZCBzdG9yZSB0aGVtXG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDw9IHcgLSA0OyB4ICs9IDQpIHtcbiAgICAgICAgICAgICAgICAoYSA9IHRyb3cxW3ggKyAyXSksXG4gICAgICAgICAgICAgICAgICAgIChiID0gdHJvdzFbeCArIDFdKSxcbiAgICAgICAgICAgICAgICAgICAgKGMgPSB0cm93MVt4ICsgM10pLFxuICAgICAgICAgICAgICAgICAgICAoZCA9IHRyb3cxW3ggKyA0XSksXG4gICAgICAgICAgICAgICAgICAgIChlID0gdHJvdzBbeCArIDJdKSxcbiAgICAgICAgICAgICAgICAgICAgKGYgPSB0cm93MFt4ICsgM10pO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IGUgLSB0cm93MFt4XTtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSBhICsgdHJvdzFbeF0gKyBiICogMjtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSBmIC0gdHJvdzBbeCArIDFdO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IGMgKyBiICsgYSAqIDI7XG5cbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSB0cm93MFt4ICsgNF0gLSBlO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IGQgKyBhICsgYyAqIDI7XG4gICAgICAgICAgICAgICAgZ3hneVtkcm93KytdID0gdHJvdzBbeCArIDVdIC0gZjtcbiAgICAgICAgICAgICAgICBneGd5W2Ryb3crK10gPSB0cm93MVt4ICsgNV0gKyBjICsgZCAqIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgeCA8IHc7ICsreCkge1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IHRyb3cwW3ggKyAyXSAtIHRyb3cwW3hdO1xuICAgICAgICAgICAgICAgIGd4Z3lbZHJvdysrXSA9IHRyb3cxW3ggKyAyXSArIHRyb3cxW3hdICsgdHJvdzFbeCArIDFdICogMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmMF9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGJ1ZjFfbm9kZSk7XG4gICAgfVxuXG4gICAgLy8gcGxlYXNlIG5vdGU6XG4gICAgLy8gZHN0Xyh0eXBlKSBzaXplIHNob3VsZCBiZSBjb2xzID0gc3JjLmNvbHMrMSwgcm93cyA9IHNyYy5yb3dzKzFcbiAgICBjb21wdXRlX2ludGVncmFsX2ltYWdlKHNyYzogbWF0cml4X3QsIGRzdF9zdW06IG51bWJlcltdLCBkc3Rfc3FzdW06IG51bWJlcltdLCBkc3RfdGlsdGVkOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCB3MCA9IHNyYy5jb2xzIHwgMCxcbiAgICAgICAgICAgIGgwID0gc3JjLnJvd3MgfCAwLFxuICAgICAgICAgICAgc3JjX2QgPSBzcmMuZGF0YTtcbiAgICAgICAgY29uc3QgdzEgPSAodzAgKyAxKSB8IDA7XG4gICAgICAgIGxldCBzID0gMCxcbiAgICAgICAgICAgIHMyID0gMCxcbiAgICAgICAgICAgIHAgPSAwLFxuICAgICAgICAgICAgcHVwID0gMCxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICB2ID0gMCxcbiAgICAgICAgICAgIGsgPSAwO1xuXG4gICAgICAgIGlmIChkc3Rfc3VtICYmIGRzdF9zcXN1bSkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yICg7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgKGRzdF9zdW1baV0gPSAwKSwgKGRzdF9zcXN1bVtpXSA9IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKHAgPSAodzEgKyAxKSB8IDApLCAocHVwID0gMSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBrID0gMDsgaSA8IGgwOyArK2ksICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICBzID0gczIgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIChzICs9IHYpLCAoczIgKz0gdiAqIHYpO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcblxuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2RbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICAocyArPSB2KSwgKHMyICs9IHYgKiB2KTtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3N1bVtwICsgMV0gPSBkc3Rfc3VtW3B1cCArIDFdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3AgKyAxXSA9IGRzdF9zcXN1bVtwdXAgKyAxXSArIHMyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHcwOyArK2osICsraywgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIChzICs9IHYpLCAoczIgKz0gdiAqIHYpO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZHN0X3N1bSkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yICg7IGkgPCB3MTsgKytpKSB7XG4gICAgICAgICAgICAgICAgZHN0X3N1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAocCA9ICh3MSArIDEpIHwgMCksIChwdXAgPSAxKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICBzICs9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBkc3Rfc3VtW3BdID0gZHN0X3N1bVtwdXBdICsgcztcbiAgICAgICAgICAgICAgICAgICAgcyArPSBzcmNfZFtrICsgMV07XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcCArIDFdID0gZHN0X3N1bVtwdXAgKyAxXSArIHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgdzA7ICsraiwgKytrLCArK3AsICsrcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc3JjX2Rba107XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zdW1bcF0gPSBkc3Rfc3VtW3B1cF0gKyBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkc3Rfc3FzdW0pIHtcbiAgICAgICAgICAgIC8vIGZpbGwgZmlyc3Qgcm93IHdpdGggemVyb3NcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdzE7ICsraSkge1xuICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAocCA9ICh3MSArIDEpIHwgMCksIChwdXAgPSAxKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIHMyID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDw9IHcwIC0gMjsgaiArPSAyLCBrICs9IDIsIHAgKz0gMiwgcHVwICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2sgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgczIgKz0gdiAqIHY7XG4gICAgICAgICAgICAgICAgICAgIGRzdF9zcXN1bVtwICsgMV0gPSBkc3Rfc3FzdW1bcHVwICsgMV0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHNyY19kW2tdO1xuICAgICAgICAgICAgICAgICAgICBzMiArPSB2ICogdjtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3Nxc3VtW3BdID0gZHN0X3Nxc3VtW3B1cF0gKyBzMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHN0X3RpbHRlZCkge1xuICAgICAgICAgICAgLy8gZmlsbCBmaXJzdCByb3cgd2l0aCB6ZXJvc1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHcxOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpYWdvbmFsXG4gICAgICAgICAgICAocCA9ICh3MSArIDEpIHwgMCksIChwdXAgPSAwKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGsgPSAwOyBpIDwgaDA7ICsraSwgKytwLCArK3B1cCkge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPD0gdzAgLSAyOyBqICs9IDIsIGsgKz0gMiwgcCArPSAyLCBwdXAgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdID0gc3JjX2Rba10gKyBkc3RfdGlsdGVkW3B1cF07XG4gICAgICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcCArIDFdID0gc3JjX2RbayArIDFdICsgZHN0X3RpbHRlZFtwdXAgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCB3MDsgKytqLCArK2ssICsrcCwgKytwdXApIHtcbiAgICAgICAgICAgICAgICAgICAgZHN0X3RpbHRlZFtwXSA9IHNyY19kW2tdICsgZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRpYWdvbmFsXG4gICAgICAgICAgICAocCA9ICh3MSArIHcwKSB8IDApLCAocHVwID0gdzApO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGgwOyArK2ksIHAgKz0gdzEsIHB1cCArPSB3MSkge1xuICAgICAgICAgICAgICAgIGRzdF90aWx0ZWRbcF0gKz0gZHN0X3RpbHRlZFtwdXBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGogPSB3MCAtIDE7IGogPiAwOyAtLWopIHtcbiAgICAgICAgICAgICAgICAocCA9IGogKyBoMCAqIHcxKSwgKHB1cCA9IHAgLSB3MSk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gaDA7IGkgPiAwOyAtLWksIHAgLT0gdzEsIHB1cCAtPSB3MSkge1xuICAgICAgICAgICAgICAgICAgICBkc3RfdGlsdGVkW3BdICs9IGRzdF90aWx0ZWRbcHVwXSArIGRzdF90aWx0ZWRbcHVwICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXF1YWxpemVfaGlzdG9ncmFtKHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdyA9IHNyYy5jb2xzLFxuICAgICAgICAgICAgaCA9IHNyYy5yb3dzLFxuICAgICAgICAgICAgc3JjX2QgPSBzcmMuZGF0YTtcblxuICAgICAgICBkc3QucmVzaXplKHcsIGgsIHNyYy5jaGFubmVsKTtcblxuICAgICAgICBjb25zdCBkc3RfZCA9IGRzdC5kYXRhLFxuICAgICAgICAgICAgc2l6ZSA9IHcgKiBoO1xuICAgICAgICBsZXQgaSA9IDAsXG4gICAgICAgICAgICBwcmV2ID0gMCxcbiAgICAgICAgICAgIGhpc3QwLFxuICAgICAgICAgICAgbm9ybTtcblxuICAgICAgICBjb25zdCBoaXN0MF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKDI1NiA8PCAyKTtcbiAgICAgICAgaGlzdDAgPSBoaXN0MF9ub2RlLmkzMjtcbiAgICAgICAgZm9yICg7IGkgPCAyNTY7ICsraSkgaGlzdDBbaV0gPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICArK2hpc3QwW3NyY19kW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXYgPSBoaXN0MFswXTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgICAgICBwcmV2ID0gaGlzdDBbaV0gKz0gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vcm0gPSAyNTUgLyBzaXplO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICBkc3RfZFtpXSA9IChoaXN0MFtzcmNfZFtpXV0gKiBub3JtICsgMC41KSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGhpc3QwX25vZGUpO1xuICAgIH1cblxuICAgIGNhbm55KHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QsIGxvd190aHJlc2g6IG51bWJlciwgaGlnaF90aHJlc2g6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB3ID0gc3JjLmNvbHMsXG4gICAgICAgICAgICBoID0gc3JjLnJvd3MsXG4gICAgICAgICAgICBzcmNfZCA9IHNyYy5kYXRhO1xuXG4gICAgICAgIGRzdC5yZXNpemUodywgaCwgc3JjLmNoYW5uZWwpO1xuXG4gICAgICAgIGNvbnN0IGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIGxldCBpID0gMCxcbiAgICAgICAgICAgIGo6IG51bWJlciA9IDAsXG4gICAgICAgICAgICBncmFkID0gMCxcbiAgICAgICAgICAgIHcyID0gdyA8PCAxLFxuICAgICAgICAgICAgX2dyYWQgPSAwLFxuICAgICAgICAgICAgc3VwcHJlc3MgPSAwLFxuICAgICAgICAgICAgZiA9IDAsXG4gICAgICAgICAgICB4ID0gMCxcbiAgICAgICAgICAgIHkgPSAwLFxuICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgIGxldCB0ZzIyeCA9IDAsXG4gICAgICAgICAgICB0ZzY3eCA9IDA7XG5cbiAgICAgICAgLy8gY2FjaGUgYnVmZmVyc1xuICAgICAgICBjb25zdCBkeGR5X25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKGggKiB3MikgPDwgMik7XG4gICAgICAgIGNvbnN0IGJ1Zl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgzICogKHcgKyAyKSkgPDwgMik7XG4gICAgICAgIGNvbnN0IG1hcF9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKCgoaCArIDIpICogKHcgKyAyKSkgPDwgMik7XG4gICAgICAgIGNvbnN0IHN0YWNrX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKGggKiB3KSA8PCAyKTtcblxuICAgICAgICBjb25zdCBidWYgPSBidWZfbm9kZS5pMzI7XG4gICAgICAgIGNvbnN0IG1hcCA9IG1hcF9ub2RlLmkzMjtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBzdGFja19ub2RlLmkzMjtcbiAgICAgICAgY29uc3QgZHhkeSA9IGR4ZHlfbm9kZS5pMzI7XG4gICAgICAgIGNvbnN0IGR4ZHlfbSA9IG5ldyBtYXRyaXhfdCh3LCBoLCBKU0ZFQVRfQ09OU1RBTlRTLlMzMkMyX3QsIGR4ZHlfbm9kZS5kYXRhKTtcbiAgICAgICAgbGV0IHJvdzAgPSAxLFxuICAgICAgICAgICAgcm93MSA9ICh3ICsgMiArIDEpIHwgMCxcbiAgICAgICAgICAgIHJvdzIgPSAoMiAqICh3ICsgMikgKyAxKSB8IDAsXG4gICAgICAgICAgICBtYXBfdyA9ICh3ICsgMikgfCAwLFxuICAgICAgICAgICAgbWFwX2k6IG51bWJlciA9IChtYXBfdyArIDEpIHwgMCxcbiAgICAgICAgICAgIHN0YWNrX2kgPSAwO1xuXG4gICAgICAgIHRoaXMuc29iZWxfZGVyaXZhdGl2ZXMoc3JjLCBkeGR5X20pO1xuXG4gICAgICAgIGlmIChsb3dfdGhyZXNoID4gaGlnaF90aHJlc2gpIHtcbiAgICAgICAgICAgIGkgPSBsb3dfdGhyZXNoO1xuICAgICAgICAgICAgbG93X3RocmVzaCA9IGhpZ2hfdGhyZXNoO1xuICAgICAgICAgICAgaGlnaF90aHJlc2ggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgaSA9ICgzICogKHcgKyAyKSkgfCAwO1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGJ1ZltpXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpID0gKChoICsgMikgKiAodyArIDIpKSB8IDA7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgbWFwW2ldID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBqIDwgdzsgKytqLCBncmFkICs9IDIpIHtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSBNYXRoLmFicyhkeGR5W2dyYWRdKSArIE1hdGguYWJzKGR4ZHlbZ3JhZCsxXSk7XG4gICAgICAgICAgICAoeCA9IGR4ZHlbZ3JhZF0pLCAoeSA9IGR4ZHlbZ3JhZCArIDFdKTtcbiAgICAgICAgICAgIC8vYnVmW3JvdzEral0gPSB4KnggKyB5Knk7XG4gICAgICAgICAgICBidWZbcm93MSArIGpdID0gKHggXiAoeCA+PiAzMSkpIC0gKHggPj4gMzEpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IGg7ICsraSwgZ3JhZCArPSB3Mikge1xuICAgICAgICAgICAgaWYgKGkgPT0gaCkge1xuICAgICAgICAgICAgICAgIGogPSByb3cyICsgdztcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1qID49IHJvdzIpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB3OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy9idWZbcm93MitqXSA9ICBNYXRoLmFicyhkeGR5W2dyYWQrKGo8PDEpXSkgKyBNYXRoLmFicyhkeGR5W2dyYWQrKGo8PDEpKzFdKTtcbiAgICAgICAgICAgICAgICAgICAgKHggPSBkeGR5W2dyYWQgKyAoaiA8PCAxKV0pLCAoeSA9IGR4ZHlbZ3JhZCArIChqIDw8IDEpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAvL2J1Zltyb3cyK2pdID0geCp4ICsgeSp5O1xuICAgICAgICAgICAgICAgICAgICBidWZbcm93MiArIGpdID0gKHggXiAoeCA+PiAzMSkpIC0gKHggPj4gMzEpICsgKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2dyYWQgPSAoZ3JhZCAtIHcyKSB8IDA7XG4gICAgICAgICAgICBtYXBbbWFwX2kgLSAxXSA9IDA7XG4gICAgICAgICAgICBzdXBwcmVzcyA9IDA7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdzsgKytqLCBfZ3JhZCArPSAyKSB7XG4gICAgICAgICAgICAgICAgZiA9IGJ1Zltyb3cxICsgal07XG4gICAgICAgICAgICAgICAgaWYgKGYgPiBsb3dfdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBkeGR5W19ncmFkXTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IGR4ZHlbX2dyYWQgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcyA9IHggXiB5O1xuICAgICAgICAgICAgICAgICAgICAvLyBzZWVtcyBvdCBiZSBmYXN0ZXIgdGhhbiBNYXRoLmFic1xuICAgICAgICAgICAgICAgICAgICB4ID0gKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICB5ID0gKCh5IF4gKHkgPj4gMzEpKSAtICh5ID4+IDMxKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAvL3ggKiB0YW4oMjIuNSkgeCAqIHRhbig2Ny41KSA9PSAyICogeCArIHggKiB0YW4oMjIuNSlcbiAgICAgICAgICAgICAgICAgICAgdGcyMnggPSB4ICogMTM1NzM7XG4gICAgICAgICAgICAgICAgICAgIHRnNjd4ID0gdGcyMnggKyAoKHggKyB4KSA8PCAxNSk7XG4gICAgICAgICAgICAgICAgICAgIHkgPDw9IDE1O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IHRnMjJ4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGJ1Zltyb3cxICsgaiAtIDFdICYmIGYgPj0gYnVmW3JvdzEgKyBqICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh5ID4gdGc2N3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqXSAmJiBmID49IGJ1Zltyb3cyICsgal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiA+IGhpZ2hfdGhyZXNoICYmICFzdXBwcmVzcyAmJiBtYXBbbWFwX2kgKyBqIC0gbWFwX3ddICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzcyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzIDwgMCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID4gYnVmW3JvdzAgKyBqIC0gc10gJiYgZiA+IGJ1Zltyb3cyICsgaiArIHNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYgPiBoaWdoX3RocmVzaCAmJiAhc3VwcHJlc3MgJiYgbWFwW21hcF9pICsgaiAtIG1hcF93XSAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1tzdGFja19pKytdID0gbWFwX2kgKyBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFttYXBfaSArIGpdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFwW21hcF9pICsgal0gPSAwO1xuICAgICAgICAgICAgICAgIHN1cHByZXNzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcFttYXBfaSArIHddID0gMDtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaiA9IHJvdzA7XG4gICAgICAgICAgICByb3cwID0gcm93MTtcbiAgICAgICAgICAgIHJvdzEgPSByb3cyO1xuICAgICAgICAgICAgcm93MiA9IGo7XG4gICAgICAgIH1cblxuICAgICAgICBqID0gbWFwX2kgLSBtYXBfdyAtIDE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXBfdzsgKytpLCArK2opIHtcbiAgICAgICAgICAgIG1hcFtqXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGF0aCBmb2xsb3dpbmdcbiAgICAgICAgd2hpbGUgKHN0YWNrX2kgPiAwKSB7XG4gICAgICAgICAgICBtYXBfaSA9IHN0YWNrWy0tc3RhY2tfaV07XG4gICAgICAgICAgICBtYXBfaSAtPSBtYXBfdyArIDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSAobWFwW21hcF9pXSA9IDIpLCAoc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pKTtcbiAgICAgICAgICAgIG1hcF9pICs9IDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSAobWFwW21hcF9pXSA9IDIpLCAoc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pKTtcbiAgICAgICAgICAgIG1hcF9pICs9IDE7XG4gICAgICAgICAgICBpZiAobWFwW21hcF9pXSA9PSAxKSAobWFwW21hcF9pXSA9IDIpLCAoc3RhY2tbc3RhY2tfaSsrXSA9IG1hcF9pKTtcbiAgICAgICAgICAgIG1hcF9pICs9IG1hcF93O1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgKG1hcFttYXBfaV0gPSAyKSwgKHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSk7XG4gICAgICAgICAgICBtYXBfaSAtPSAyO1xuICAgICAgICAgICAgaWYgKG1hcFttYXBfaV0gPT0gMSkgKG1hcFttYXBfaV0gPSAyKSwgKHN0YWNrW3N0YWNrX2krK10gPSBtYXBfaSk7XG4gICAgICAgICAgICBtYXBfaSArPSBtYXBfdztcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIChtYXBbbWFwX2ldID0gMiksIChzdGFja1tzdGFja19pKytdID0gbWFwX2kpO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIChtYXBbbWFwX2ldID0gMiksIChzdGFja1tzdGFja19pKytdID0gbWFwX2kpO1xuICAgICAgICAgICAgbWFwX2kgKz0gMTtcbiAgICAgICAgICAgIGlmIChtYXBbbWFwX2ldID09IDEpIChtYXBbbWFwX2ldID0gMiksIChzdGFja1tzdGFja19pKytdID0gbWFwX2kpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwX2kgPSBtYXBfdyArIDE7XG4gICAgICAgIHJvdzAgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaDsgKytpLCBtYXBfaSArPSBtYXBfdykge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHc7ICsraikge1xuICAgICAgICAgICAgICAgIGRzdF9kW3JvdzArK10gPSBOdW1iZXIobWFwW21hcF9pICsgal0gPT0gMikgKiAweGZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZnJlZSBidWZmZXJzXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihkeGR5X25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoYnVmX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobWFwX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoc3RhY2tfbm9kZSk7XG4gICAgfVxuXG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBtYXRyaXhfdFxuICAgIHdhcnBfcGVyc3BlY3RpdmUoc3JjOiBtYXRyaXhfdCwgZHN0OiBtYXRyaXhfdCwgdHJhbnNmb3JtOiBtYXRyaXhfdCwgZmlsbF92YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZmlsbF92YWx1ZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3JjX3dpZHRoID0gc3JjLmNvbHMgfCAwLFxuICAgICAgICAgICAgc3JjX2hlaWdodCA9IHNyYy5yb3dzIHwgMCxcbiAgICAgICAgICAgIGRzdF93aWR0aCA9IGRzdC5jb2xzIHwgMCxcbiAgICAgICAgICAgIGRzdF9oZWlnaHQgPSBkc3Qucm93cyB8IDA7XG4gICAgICAgIGNvbnN0IHNyY19kID0gc3JjLmRhdGEsXG4gICAgICAgICAgICBkc3RfZCA9IGRzdC5kYXRhO1xuICAgICAgICBsZXQgeCA9IDAsXG4gICAgICAgICAgICB5ID0gMCxcbiAgICAgICAgICAgIG9mZiA9IDAsXG4gICAgICAgICAgICBpeHMgPSAwLFxuICAgICAgICAgICAgaXlzID0gMCxcbiAgICAgICAgICAgIHhzID0gMC4wLFxuICAgICAgICAgICAgeXMgPSAwLjAsXG4gICAgICAgICAgICB4czAgPSAwLjAsXG4gICAgICAgICAgICB5czAgPSAwLjAsXG4gICAgICAgICAgICB3cyA9IDAuMCxcbiAgICAgICAgICAgIHNjID0gMC4wLFxuICAgICAgICAgICAgYSA9IDAuMCxcbiAgICAgICAgICAgIGIgPSAwLjAsXG4gICAgICAgICAgICBwMCA9IDAuMCxcbiAgICAgICAgICAgIHAxID0gMC4wO1xuICAgICAgICBjb25zdCB0ZCA9IHRyYW5zZm9ybS5kYXRhO1xuICAgICAgICBjb25zdCBtMDAgPSB0ZFswXSxcbiAgICAgICAgICAgIG0wMSA9IHRkWzFdLFxuICAgICAgICAgICAgbTAyID0gdGRbMl0sXG4gICAgICAgICAgICBtMTAgPSB0ZFszXSxcbiAgICAgICAgICAgIG0xMSA9IHRkWzRdLFxuICAgICAgICAgICAgbTEyID0gdGRbNV0sXG4gICAgICAgICAgICBtMjAgPSB0ZFs2XSxcbiAgICAgICAgICAgIG0yMSA9IHRkWzddLFxuICAgICAgICAgICAgbTIyID0gdGRbOF07XG5cbiAgICAgICAgZm9yIChsZXQgZHB0ciA9IDA7IHkgPCBkc3RfaGVpZ2h0OyArK3kpIHtcbiAgICAgICAgICAgICh4czAgPSBtMDEgKiB5ICsgbTAyKSwgKHlzMCA9IG0xMSAqIHkgKyBtMTIpLCAod3MgPSBtMjEgKiB5ICsgbTIyKTtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCBkc3Rfd2lkdGg7ICsreCwgKytkcHRyLCB4czAgKz0gbTAwLCB5czAgKz0gbTEwLCB3cyArPSBtMjApIHtcbiAgICAgICAgICAgICAgICBzYyA9IDEuMCAvIHdzO1xuICAgICAgICAgICAgICAgICh4cyA9IHhzMCAqIHNjKSwgKHlzID0geXMwICogc2MpO1xuICAgICAgICAgICAgICAgIChpeHMgPSB4cyB8IDApLCAoaXlzID0geXMgfCAwKTtcblxuICAgICAgICAgICAgICAgIGlmICh4cyA+IDAgJiYgeXMgPiAwICYmIGl4cyA8IHNyY193aWR0aCAtIDEgJiYgaXlzIDwgc3JjX2hlaWdodCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IE1hdGgubWF4KHhzIC0gaXhzLCAwLjApO1xuICAgICAgICAgICAgICAgICAgICBiID0gTWF0aC5tYXgoeXMgLSBpeXMsIDAuMCk7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IChzcmNfd2lkdGggKiBpeXMgKyBpeHMpIHwgMDtcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgZHN0X2RbZHB0cl0gPSBmaWxsX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHJhbnNmb3JtIGlzIDN4MyBvciAyeDMgbWF0cml4X3Qgb25seSBmaXJzdCA2IHZhbHVlcyByZWZlcmVuY2VkXG4gICAgd2FycF9hZmZpbmUoc3JjOiBtYXRyaXhfdCwgZHN0OiBtYXRyaXhfdCwgdHJhbnNmb3JtOiBtYXRyaXhfdCwgZmlsbF92YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbF92YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZmlsbF92YWx1ZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3JjX3dpZHRoID0gc3JjLmNvbHMsXG4gICAgICAgICAgICBzcmNfaGVpZ2h0ID0gc3JjLnJvd3MsXG4gICAgICAgICAgICBkc3Rfd2lkdGggPSBkc3QuY29scyxcbiAgICAgICAgICAgIGRzdF9oZWlnaHQgPSBkc3Qucm93cztcbiAgICAgICAgY29uc3Qgc3JjX2QgPSBzcmMuZGF0YSxcbiAgICAgICAgICAgIGRzdF9kID0gZHN0LmRhdGE7XG4gICAgICAgIGxldCB4ID0gMCxcbiAgICAgICAgICAgIHkgPSAwLFxuICAgICAgICAgICAgb2ZmID0gMCxcbiAgICAgICAgICAgIGl4cyA9IDAsXG4gICAgICAgICAgICBpeXMgPSAwLFxuICAgICAgICAgICAgeHMgPSAwLjAsXG4gICAgICAgICAgICB5cyA9IDAuMCxcbiAgICAgICAgICAgIGEgPSAwLjAsXG4gICAgICAgICAgICBiID0gMC4wLFxuICAgICAgICAgICAgcDAgPSAwLjAsXG4gICAgICAgICAgICBwMSA9IDAuMDtcbiAgICAgICAgY29uc3QgdGQgPSB0cmFuc2Zvcm0uZGF0YTtcbiAgICAgICAgY29uc3QgbTAwID0gdGRbMF0sXG4gICAgICAgICAgICBtMDEgPSB0ZFsxXSxcbiAgICAgICAgICAgIG0wMiA9IHRkWzJdLFxuICAgICAgICAgICAgbTEwID0gdGRbM10sXG4gICAgICAgICAgICBtMTEgPSB0ZFs0XSxcbiAgICAgICAgICAgIG0xMiA9IHRkWzVdO1xuXG4gICAgICAgIGZvciAobGV0IGRwdHIgPSAwOyB5IDwgZHN0X2hlaWdodDsgKyt5KSB7XG4gICAgICAgICAgICB4cyA9IG0wMSAqIHkgKyBtMDI7XG4gICAgICAgICAgICB5cyA9IG0xMSAqIHkgKyBtMTI7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgZHN0X3dpZHRoOyArK3gsICsrZHB0ciwgeHMgKz0gbTAwLCB5cyArPSBtMTApIHtcbiAgICAgICAgICAgICAgICBpeHMgPSB4cyB8IDA7XG4gICAgICAgICAgICAgICAgaXlzID0geXMgfCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl4cyA+PSAwICYmIGl5cyA+PSAwICYmIGl4cyA8IHNyY193aWR0aCAtIDEgJiYgaXlzIDwgc3JjX2hlaWdodCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9IHhzIC0gaXhzO1xuICAgICAgICAgICAgICAgICAgICBiID0geXMgLSBpeXM7XG4gICAgICAgICAgICAgICAgICAgIG9mZiA9IHNyY193aWR0aCAqIGl5cyArIGl4cztcblxuICAgICAgICAgICAgICAgICAgICBwMCA9IHNyY19kW29mZl0gKyBhICogKHNyY19kW29mZiArIDFdIC0gc3JjX2Rbb2ZmXSk7XG4gICAgICAgICAgICAgICAgICAgIHAxID0gc3JjX2Rbb2ZmICsgc3JjX3dpZHRoXSArIGEgKiAoc3JjX2Rbb2ZmICsgc3JjX3dpZHRoICsgMV0gLSBzcmNfZFtvZmYgKyBzcmNfd2lkdGhdKTtcblxuICAgICAgICAgICAgICAgICAgICBkc3RfZFtkcHRyXSA9IHAwICsgYiAqIChwMSAtIHAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgZHN0X2RbZHB0cl0gPSBmaWxsX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQmFzaWMgUkdCIFNraW4gZGV0ZWN0aW9uIGZpbHRlclxuICAgIC8vIGZyb20gaHR0cDovL3BvcHNjYW4uYmxvZ3Nwb3QuZnIvMjAxMi8wOC9za2luLWRldGVjdGlvbi1pbi1kaWdpdGFsLWltYWdlcy5odG1sXG4gICAgc2tpbmRldGVjdG9yKHNyYzogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgZGF0YTogYW55W10gfSwgZHN0OiBudW1iZXJbXSk6IHZvaWQge1xuICAgICAgICBsZXQgciwgZywgYiwgajtcbiAgICAgICAgbGV0IGkgPSBzcmMud2lkdGggKiBzcmMuaGVpZ2h0O1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBqID0gaSAqIDQ7XG4gICAgICAgICAgICByID0gc3JjLmRhdGFbal07XG4gICAgICAgICAgICBnID0gc3JjLmRhdGFbaiArIDFdO1xuICAgICAgICAgICAgYiA9IHNyYy5kYXRhW2ogKyAyXTtcbiAgICAgICAgICAgIGlmIChyID4gOTUgJiYgZyA+IDQwICYmIGIgPiAyMCAmJiByID4gZyAmJiByID4gYiAmJiByIC0gTWF0aC5taW4oZywgYikgPiAxNSAmJiBNYXRoLmFicyhyIC0gZykgPiAxNSkge1xuICAgICAgICAgICAgICAgIGRzdFtpXSA9IDI1NTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHN0W2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmpzZmVhdE5leHQubWF0aCA9IGNsYXNzIG1hdGggZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBwcml2YXRlIHFzb3J0X3N0YWNrOiBJbnQzMkFycmF5O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucXNvcnRfc3RhY2sgPSBuZXcgSW50MzJBcnJheSg0OCAqIDIpO1xuICAgIH1cblxuICAgIGdldF9nYXVzc2lhbl9rZXJuZWwoc2l6ZTogbnVtYmVyLCBzaWdtYTogbnVtYmVyLCBrZXJuZWw6IEZsb2F0MzJBcnJheSB8IEludDMyQXJyYXksIGRhdGFfdHlwZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBpID0gMCxcbiAgICAgICAgICAgIHggPSAwLjAsXG4gICAgICAgICAgICB0ID0gMC4wLFxuICAgICAgICAgICAgc2lnbWFfeCA9IDAuMCxcbiAgICAgICAgICAgIHNjYWxlXzJ4ID0gMC4wO1xuICAgICAgICBsZXQgc3VtID0gMC4wO1xuICAgICAgICBjb25zdCBrZXJuX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoc2l6ZSA8PCAyKTtcbiAgICAgICAgY29uc3QgX2tlcm5lbCA9IGtlcm5fbm9kZS5mMzI7IC8vbmV3IEZsb2F0MzJBcnJheShzaXplKTtcblxuICAgICAgICBpZiAoKHNpemUgJiAxKSA9PSAxICYmIHNpemUgPD0gNyAmJiBzaWdtYSA8PSAwKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNpemUgPj4gMSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2tlcm5lbFswXSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIChfa2VybmVsWzBdID0gMC4yNSksIChfa2VybmVsWzFdID0gMC41KSwgKF9rZXJuZWxbMl0gPSAwLjI1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4yNSArIDAuNSArIDAuMjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgKF9rZXJuZWxbMF0gPSAwLjA2MjUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKF9rZXJuZWxbMV0gPSAwLjI1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfa2VybmVsWzJdID0gMC4zNzUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKF9rZXJuZWxbM10gPSAwLjI1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfa2VybmVsWzRdID0gMC4wNjI1KTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wNjI1ICsgMC4yNSArIDAuMzc1ICsgMC4yNSArIDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAoX2tlcm5lbFswXSA9IDAuMDMxMjUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKF9rZXJuZWxbMV0gPSAwLjEwOTM3NSksXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2tlcm5lbFsyXSA9IDAuMjE4NzUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKF9rZXJuZWxbM10gPSAwLjI4MTI1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfa2VybmVsWzRdID0gMC4yMTg3NSksXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2tlcm5lbFs1XSA9IDAuMTA5Mzc1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChfa2VybmVsWzZdID0gMC4wMzEyNSk7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMDMxMjUgKyAwLjEwOTM3NSArIDAuMjE4NzUgKyAwLjI4MTI1ICsgMC4yMTg3NSArIDAuMTA5Mzc1ICsgMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWdtYV94ID0gc2lnbWEgPiAwID8gc2lnbWEgOiAoKHNpemUgLSAxKSAqIDAuNSAtIDEuMCkgKiAwLjMgKyAwLjg7XG4gICAgICAgICAgICBzY2FsZV8yeCA9IC0wLjUgLyAoc2lnbWFfeCAqIHNpZ21hX3gpO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIHggPSBpIC0gKHNpemUgLSAxKSAqIDAuNTtcbiAgICAgICAgICAgICAgICB0ID0gTWF0aC5leHAoc2NhbGVfMnggKiB4ICogeCk7XG5cbiAgICAgICAgICAgICAgICBfa2VybmVsW2ldID0gdDtcbiAgICAgICAgICAgICAgICBzdW0gKz0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhX3R5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QpIHtcbiAgICAgICAgICAgIC8vIGludCBiYXNlZCBrZXJuZWxcbiAgICAgICAgICAgIHN1bSA9IDI1Ni4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IChfa2VybmVsW2ldICogc3VtICsgMC41KSB8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjbGFzc2ljIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMS4wIC8gc3VtO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgICAgICAgICAgIGtlcm5lbFtpXSA9IF9rZXJuZWxbaV0gKiBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoa2Vybl9ub2RlKTtcbiAgICB9XG5cbiAgICAvLyBtb2RlbCBpcyAzeDMgbWF0cml4X3RcbiAgICBwZXJzcGVjdGl2ZV80cG9pbnRfdHJhbnNmb3JtKFxuICAgICAgICBtb2RlbDogbWF0cml4X3QsXG4gICAgICAgIHNyY194MDogbnVtYmVyLFxuICAgICAgICBzcmNfeTA6IG51bWJlcixcbiAgICAgICAgZHN0X3gwOiBudW1iZXIsXG4gICAgICAgIGRzdF95MDogbnVtYmVyLFxuICAgICAgICBzcmNfeDE6IG51bWJlcixcbiAgICAgICAgc3JjX3kxOiBudW1iZXIsXG4gICAgICAgIGRzdF94MTogbnVtYmVyLFxuICAgICAgICBkc3RfeTE6IG51bWJlcixcbiAgICAgICAgc3JjX3gyOiBudW1iZXIsXG4gICAgICAgIHNyY195MjogbnVtYmVyLFxuICAgICAgICBkc3RfeDI6IG51bWJlcixcbiAgICAgICAgZHN0X3kyOiBudW1iZXIsXG4gICAgICAgIHNyY194MzogbnVtYmVyLFxuICAgICAgICBzcmNfeTM6IG51bWJlcixcbiAgICAgICAgZHN0X3gzOiBudW1iZXIsXG4gICAgICAgIGRzdF95MzogbnVtYmVyXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwi4pqg77iP4pqg77iP4pqg77iPIFRoaXMgbWV0aG9kIGlzIGRlcHJlY2F0ZWQgYWQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IHJlbGVhc2VzLCB1c2UgdHJhbnNmb3JtLnBlcnNwZWN0aXZlXzRwb2ludF90cmFuc2Zvcm0oKSBpbnN0ZWFkLiDimqDvuI/imqDvuI/imqDvuI9cIlxuICAgICAgICApO1xuICAgICAgICBsZXQgdDEgPSBzcmNfeDA7XG4gICAgICAgIGxldCB0MiA9IHNyY194MjtcbiAgICAgICAgbGV0IHQ0ID0gc3JjX3kxO1xuICAgICAgICBsZXQgdDUgPSB0MSAqIHQyICogdDQ7XG4gICAgICAgIGxldCB0NiA9IHNyY195MztcbiAgICAgICAgbGV0IHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgbGV0IHQ4ID0gdDIgKiB0NztcbiAgICAgICAgbGV0IHQ5ID0gc3JjX3kyO1xuICAgICAgICBsZXQgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgbGV0IHQxMSA9IHNyY194MTtcbiAgICAgICAgbGV0IHQxNCA9IHNyY195MDtcbiAgICAgICAgbGV0IHQxNSA9IHNyY194MztcbiAgICAgICAgbGV0IHQxNiA9IHQxNCAqIHQxNTtcbiAgICAgICAgbGV0IHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgbGV0IHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICBsZXQgdDIxID0gdDE1ICogdDQ7XG4gICAgICAgIGxldCB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgbGV0IHQyNSA9IHQyICogdDQ7XG4gICAgICAgIGxldCB0MjYgPSB0NiAqIHQyO1xuICAgICAgICBsZXQgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIGxldCB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgbGV0IHQzMCA9IDEuMCAvICh0MjEgLSB0MjQgLSB0MjUgKyB0MjYgLSB0MjcgKyB0MjgpO1xuICAgICAgICBsZXQgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIGxldCB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIGxldCB0NDEgPSB0NCAqIHQxO1xuICAgICAgICBsZXQgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIGxldCB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgbGV0IHQ0NiA9IHQxNiAqIHQ5O1xuICAgICAgICBsZXQgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIGxldCB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIGxldCB0NTUgPSB0NiAqIHQxNDtcbiAgICAgICAgbGV0IEhyMCA9IC0odDggLSB0NSArIHQxMCAqIHQxMSAtIHQxMSAqIHQ3IC0gdDE2ICogdDIgKyB0MTggLSB0MjAgKyB0MjEgKiB0MikgKiB0MzA7XG4gICAgICAgIGxldCBIcjEgPSAodDUgLSB0OCAtIHQzMiAqIHQ0ICsgdDMyICogdDkgKyB0MTggLSB0MiAqIHQzNSArIHQyNyAqIHQyIC0gdDIwKSAqIHQzMDtcbiAgICAgICAgbGV0IEhyMiA9IHQxO1xuICAgICAgICBsZXQgSHIzID0gKC10OSAqIHQ3ICsgdDQyICsgdDQzICogdDQgLSB0MTYgKiB0NCArIHQ0NiAtIHQ0OCArIHQyNyAqIHQ5IC0gdDUxKSAqIHQzMDtcbiAgICAgICAgbGV0IEhyNCA9ICgtdDQyICsgdDQxICogdDkgLSB0NTUgKiB0MiArIHQ0NiAtIHQ0OCArIHQ1NSAqIHQxMSArIHQ1MSAtIHQyMSAqIHQ5KSAqIHQzMDtcbiAgICAgICAgbGV0IEhyNSA9IHQxNDtcbiAgICAgICAgbGV0IEhyNiA9ICgtdDEwICsgdDQxICsgdDQzIC0gdDM1ICsgdDI0IC0gdDIxIC0gdDI2ICsgdDI3KSAqIHQzMDtcbiAgICAgICAgbGV0IEhyNyA9ICgtdDcgKyB0MTAgKyB0MTYgLSB0NDMgKyB0MjcgLSB0MjggLSB0MjEgKyB0MjUpICogdDMwO1xuXG4gICAgICAgIHQxID0gZHN0X3gwO1xuICAgICAgICB0MiA9IGRzdF94MjtcbiAgICAgICAgdDQgPSBkc3RfeTE7XG4gICAgICAgIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB0NiA9IGRzdF95MztcbiAgICAgICAgdDcgPSB0MSAqIHQ2O1xuICAgICAgICB0OCA9IHQyICogdDc7XG4gICAgICAgIHQ5ID0gZHN0X3kyO1xuICAgICAgICB0MTAgPSB0MSAqIHQ5O1xuICAgICAgICB0MTEgPSBkc3RfeDE7XG4gICAgICAgIHQxNCA9IGRzdF95MDtcbiAgICAgICAgdDE1ID0gZHN0X3gzO1xuICAgICAgICB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgdDIwID0gdDE1ICogdDExICogdDk7XG4gICAgICAgIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgdDI1ID0gdDIgKiB0NDtcbiAgICAgICAgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIHQyOCA9IHQ5ICogdDExO1xuICAgICAgICB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIHQzNSA9IHQxNCAqIHQxMTtcbiAgICAgICAgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIHQ0MyA9IHQxNCAqIHQyO1xuICAgICAgICB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIHQ1MSA9IHQ0ICogdDYgKiB0MjtcbiAgICAgICAgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIGxldCBIbDAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICBsZXQgSGwxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIGxldCBIbDIgPSB0MTtcbiAgICAgICAgbGV0IEhsMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIGxldCBIbDQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIGxldCBIbDUgPSB0MTQ7XG4gICAgICAgIGxldCBIbDYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIGxldCBIbDcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGNvZGUgY29tcHV0ZXMgUiA9IEhsICogaW52ZXJzZSBIclxuICAgICAgICB0MiA9IEhyNCAtIEhyNyAqIEhyNTtcbiAgICAgICAgdDQgPSBIcjAgKiBIcjQ7XG4gICAgICAgIHQ1ID0gSHIwICogSHI1O1xuICAgICAgICB0NyA9IEhyMyAqIEhyMTtcbiAgICAgICAgdDggPSBIcjIgKiBIcjM7XG4gICAgICAgIHQxMCA9IEhyMSAqIEhyNjtcbiAgICAgICAgbGV0IHQxMiA9IEhyMiAqIEhyNjtcbiAgICAgICAgdDE1ID0gMS4wIC8gKHQ0IC0gdDUgKiBIcjcgLSB0NyArIHQ4ICogSHI3ICsgdDEwICogSHI1IC0gdDEyICogSHI0KTtcbiAgICAgICAgdDE4ID0gLUhyMyArIEhyNSAqIEhyNjtcbiAgICAgICAgbGV0IHQyMyA9IC1IcjMgKiBIcjcgKyBIcjQgKiBIcjY7XG4gICAgICAgIHQyOCA9IC1IcjEgKyBIcjIgKiBIcjc7XG4gICAgICAgIGxldCB0MzEgPSBIcjAgLSB0MTI7XG4gICAgICAgIHQzNSA9IEhyMCAqIEhyNyAtIHQxMDtcbiAgICAgICAgdDQxID0gLUhyMSAqIEhyNSArIEhyMiAqIEhyNDtcbiAgICAgICAgbGV0IHQ0NCA9IHQ1IC0gdDg7XG4gICAgICAgIGxldCB0NDcgPSB0NCAtIHQ3O1xuICAgICAgICB0NDggPSB0MiAqIHQxNTtcbiAgICAgICAgbGV0IHQ0OSA9IHQyOCAqIHQxNTtcbiAgICAgICAgbGV0IHQ1MCA9IHQ0MSAqIHQxNTtcbiAgICAgICAgY29uc3QgbWF0ID0gbW9kZWwuZGF0YTtcbiAgICAgICAgbWF0WzBdID0gSGwwICogdDQ4ICsgSGwxICogKHQxOCAqIHQxNSkgLSBIbDIgKiAodDIzICogdDE1KTtcbiAgICAgICAgbWF0WzFdID0gSGwwICogdDQ5ICsgSGwxICogKHQzMSAqIHQxNSkgLSBIbDIgKiAodDM1ICogdDE1KTtcbiAgICAgICAgbWF0WzJdID0gLUhsMCAqIHQ1MCAtIEhsMSAqICh0NDQgKiB0MTUpICsgSGwyICogKHQ0NyAqIHQxNSk7XG4gICAgICAgIG1hdFszXSA9IEhsMyAqIHQ0OCArIEhsNCAqICh0MTggKiB0MTUpIC0gSGw1ICogKHQyMyAqIHQxNSk7XG4gICAgICAgIG1hdFs0XSA9IEhsMyAqIHQ0OSArIEhsNCAqICh0MzEgKiB0MTUpIC0gSGw1ICogKHQzNSAqIHQxNSk7XG4gICAgICAgIG1hdFs1XSA9IC1IbDMgKiB0NTAgLSBIbDQgKiAodDQ0ICogdDE1KSArIEhsNSAqICh0NDcgKiB0MTUpO1xuICAgICAgICBtYXRbNl0gPSBIbDYgKiB0NDggKyBIbDcgKiAodDE4ICogdDE1KSAtIHQyMyAqIHQxNTtcbiAgICAgICAgbWF0WzddID0gSGw2ICogdDQ5ICsgSGw3ICogKHQzMSAqIHQxNSkgLSB0MzUgKiB0MTU7XG4gICAgICAgIG1hdFs4XSA9IC1IbDYgKiB0NTAgLSBIbDcgKiAodDQ0ICogdDE1KSArIHQ0NyAqIHQxNTtcbiAgICB9XG5cbiAgICAvLyBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiB3YXMgZGVyaXZlZCBmcm9tICpCU0Qgc3lzdGVtIHFzb3J0KCk6XG4gICAgLy8gQ29weXJpZ2h0IChjKSAxOTkyLCAxOTkzXG4gICAgLy8gVGhlIFJlZ2VudHMgb2YgdGhlIFVuaXZlcnNpdHkgb2YgQ2FsaWZvcm5pYS4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgcXNvcnQoYXJyYXk6IG51bWJlcltdLCBsb3c6IG51bWJlciwgaGlnaDogbnVtYmVyLCBjbXA6IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzb3J0X3RocmVzaCA9IDc7XG4gICAgICAgIGxldCB0LCB0YSwgdGIsIHRjO1xuICAgICAgICBsZXQgc3AgPSAwLFxuICAgICAgICAgICAgbGVmdCA9IDAsXG4gICAgICAgICAgICByaWdodCA9IDAsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIG4gPSAwLFxuICAgICAgICAgICAgbSA9IDAsXG4gICAgICAgICAgICBwdHIgPSAwLFxuICAgICAgICAgICAgcHRyMiA9IDAsXG4gICAgICAgICAgICBkID0gMDtcbiAgICAgICAgbGV0IGxlZnQwID0gMCxcbiAgICAgICAgICAgIGxlZnQxID0gMCxcbiAgICAgICAgICAgIHJpZ2h0MCA9IDAsXG4gICAgICAgICAgICByaWdodDEgPSAwLFxuICAgICAgICAgICAgcGl2b3QgPSAwLFxuICAgICAgICAgICAgYSA9IDAsXG4gICAgICAgICAgICBiID0gMCxcbiAgICAgICAgICAgIGMgPSAwLFxuICAgICAgICAgICAgc3dhcF9jbnQgPSAwO1xuXG4gICAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5xc29ydF9zdGFjaztcblxuICAgICAgICBpZiAoaGlnaCAtIGxvdyArIDEgPD0gMSkgcmV0dXJuO1xuXG4gICAgICAgIHN0YWNrWzBdID0gbG93O1xuICAgICAgICBzdGFja1sxXSA9IGhpZ2g7XG5cbiAgICAgICAgd2hpbGUgKHNwID49IDApIHtcbiAgICAgICAgICAgIGxlZnQgPSBzdGFja1tzcCA8PCAxXTtcbiAgICAgICAgICAgIHJpZ2h0ID0gc3RhY2tbKHNwIDw8IDEpICsgMV07XG4gICAgICAgICAgICBzcC0tO1xuXG4gICAgICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgICAgICAgbiA9IHJpZ2h0IC0gbGVmdCArIDE7XG5cbiAgICAgICAgICAgICAgICBpZiAobiA8PSBpc29ydF90aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pbnNlcnRfc29ydDpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIgPSBsZWZ0ICsgMTsgcHRyIDw9IHJpZ2h0OyBwdHIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwdHIyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyXSA9IGFycmF5W3B0cjIgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBsZWZ0MCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0MCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGxlZnQgKyAobiA+PiAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobiA+IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gbiA+PiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGEgPSBsZWZ0KSwgKGIgPSBsZWZ0ICsgZCksIChjID0gbGVmdCArIChkIDw8IDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YSA9IGFycmF5W2FdKSwgKHRiID0gYXJyYXlbYl0pLCAodGMgPSBhcnJheVtjXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gY21wKHRhLCB0YilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNtcCh0YiwgdGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNtcCh0YSwgdGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbXAodGMsIHRiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNtcCh0YSwgdGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIChhID0gcGl2b3QgLSBkKSwgKGIgPSBwaXZvdCksIChjID0gcGl2b3QgKyBkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YSA9IGFycmF5W2FdKSwgKHRiID0gYXJyYXlbYl0pLCAodGMgPSBhcnJheVtjXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaXZvdCA9IGNtcCh0YSwgdGIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjbXAodGIsIHRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbXAodGEsIHRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY21wKHRjLCB0YilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbXAodGEsIHRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAoYSA9IHJpZ2h0IC0gKGQgPDwgMSkpLCAoYiA9IHJpZ2h0IC0gZCksIChjID0gcmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRhID0gYXJyYXlbYV0pLCAodGIgPSBhcnJheVtiXSksICh0YyA9IGFycmF5W2NdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gY21wKHRhLCB0YilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNtcCh0YiwgdGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNtcCh0YSwgdGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbXAodGMsIHRiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNtcCh0YSwgdGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAoYSA9IGxlZnQpLCAoYiA9IHBpdm90KSwgKGMgPSByaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICh0YSA9IGFycmF5W2FdKSwgKHRiID0gYXJyYXlbYl0pLCAodGMgPSBhcnJheVtjXSk7XG4gICAgICAgICAgICAgICAgICAgIHBpdm90ID0gY21wKHRhLCB0YilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY21wKHRiLCB0YylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNtcCh0YSwgdGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjbXAodGMsIHRiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbXAodGEsIHRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpdm90ICE9IGxlZnQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcGl2b3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcGl2b3RdID0gYXJyYXlbbGVmdDBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDBdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90ID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQxID0gbGVmdDAgKyAxO1xuICAgICAgICAgICAgICAgICAgICByaWdodCA9IHJpZ2h0MSA9IHJpZ2h0MDtcblxuICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W3Bpdm90XTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQgJiYgIWNtcCh0YSwgYXJyYXlbbGVmdF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbXAoYXJyYXlbbGVmdF0sIHRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA+IGxlZnQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDFdID0gYXJyYXlbbGVmdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0MSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0ICYmICFjbXAoYXJyYXlbcmlnaHRdLCB0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNtcCh0YSwgYXJyYXlbcmlnaHRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmlnaHQgPCByaWdodDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtyaWdodDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHQxXSA9IGFycmF5W3JpZ2h0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDEtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnQgPiByaWdodCkgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3dhcF9jbnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKGxlZnQgPSBsZWZ0MCksIChyaWdodCA9IHJpZ2h0MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2dvdG8gaW5zZXJ0X3NvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0ciA9IGxlZnQgKyAxOyBwdHIgPD0gcmlnaHQ7IHB0cisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwdHIyID0gcHRyOyBwdHIyID4gbGVmdCAmJiBjbXAoYXJyYXlbcHRyMl0sIGFycmF5W3B0cjIgLSAxXSk7IHB0cjItLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbcHRyMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjJdID0gYXJyYXlbcHRyMiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwdHIyIC0gMV0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbiA9IE1hdGgubWluKGxlZnQxIC0gbGVmdDAsIGxlZnQgLSBsZWZ0MSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAobGVmdCAtIG4pIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSwgKyttKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdDAgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQwICsgaV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG4gPSBNYXRoLm1pbihyaWdodDAgLSByaWdodDEsIHJpZ2h0MSAtIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgbSA9IChyaWdodDAgLSBuICsgMSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpLCArK20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0ICsgaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0ICsgaV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuID0gbGVmdCAtIGxlZnQxO1xuICAgICAgICAgICAgICAgICAgICBtID0gcmlnaHQxIC0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrc3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3NwIDw8IDFdID0gbGVmdDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWyhzcCA8PCAxKSArIDFdID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxlZnQgPSByaWdodDAgLSBtICsgMSksIChyaWdodCA9IHJpZ2h0MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3AgPDwgMV0gPSByaWdodDAgLSBtICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbKHNwIDw8IDEpICsgMV0gPSByaWdodDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsZWZ0ID0gbGVmdDApLCAocmlnaHQgPSBsZWZ0MCArIG4gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsZWZ0ID0gbGVmdDApLCAocmlnaHQgPSBsZWZ0MCArIG4gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtID4gMSkgKGxlZnQgPSByaWdodDAgLSBtICsgMSksIChyaWdodCA9IHJpZ2h0MCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWVkaWFuKGFycmF5OiBudW1iZXJbXSwgbG93OiBudW1iZXIsIGhpZ2g6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCB3O1xuICAgICAgICBsZXQgbWlkZGxlID0gMCxcbiAgICAgICAgICAgIGxsID0gMCxcbiAgICAgICAgICAgIGhoID0gMCxcbiAgICAgICAgICAgIG1lZGlhbiA9IChsb3cgKyBoaWdoKSA+PiAxO1xuICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgICBpZiAoaGlnaCA8PSBsb3cpIHJldHVybiBhcnJheVttZWRpYW5dO1xuICAgICAgICAgICAgaWYgKGhpZ2ggPT0gbG93ICsgMSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtsb3ddID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlbbWVkaWFuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pZGRsZSA9IChsb3cgKyBoaWdoKSA+PiAxO1xuICAgICAgICAgICAgaWYgKGFycmF5W21pZGRsZV0gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJyYXlbbG93XSA+IGFycmF5W2hpZ2hdKSB7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xvd107XG4gICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgIGFycmF5W2hpZ2hdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheVttaWRkbGVdID4gYXJyYXlbbG93XSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVttaWRkbGVdO1xuICAgICAgICAgICAgICAgIGFycmF5W21pZGRsZV0gPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGwgPSBsb3cgKyAxO1xuICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICBhcnJheVttaWRkbGVdID0gYXJyYXlbbGxdO1xuICAgICAgICAgICAgYXJyYXlbbGxdID0gdztcbiAgICAgICAgICAgIGhoID0gaGlnaDtcbiAgICAgICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgICAgICBkbyArK2xsO1xuICAgICAgICAgICAgICAgIHdoaWxlIChhcnJheVtsb3ddID4gYXJyYXlbbGxdKTtcbiAgICAgICAgICAgICAgICBkbyAtLWhoO1xuICAgICAgICAgICAgICAgIHdoaWxlIChhcnJheVtoaF0gPiBhcnJheVtsb3ddKTtcbiAgICAgICAgICAgICAgICBpZiAoaGggPCBsbCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xsXTtcbiAgICAgICAgICAgICAgICBhcnJheVtsbF0gPSBhcnJheVtoaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGhdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hoXTtcbiAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICBpZiAoaGggPD0gbWVkaWFuKSBsb3cgPSBsbDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGhoID49IG1lZGlhbikgaGlnaCA9IGhoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59O1xuXG5qc2ZlYXROZXh0Lm1hdG1hdGggPSBtYXRtYXRoO1xuXG5qc2ZlYXROZXh0LmxpbmFsZyA9IGNsYXNzIGxpbmFsZyBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHB1YmxpYyBtYXRtYXRoOiBtYXRtYXRoO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWF0bWF0aCA9IG5ldyBtYXRtYXRoKCk7XG4gICAgfVxuXG4gICAgSmFjb2JpSW1wbChcbiAgICAgICAgQTogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSB8IEZsb2F0NjRBcnJheSxcbiAgICAgICAgYXN0ZXA6IG51bWJlcixcbiAgICAgICAgVzogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSB8IEZsb2F0NjRBcnJheSxcbiAgICAgICAgVjogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSB8IEZsb2F0NjRBcnJheSxcbiAgICAgICAgdnN0ZXA6IG51bWJlcixcbiAgICAgICAgbjogbnVtYmVyXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVwcyA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICAgICAgbGV0IGkgPSAwLFxuICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICBrID0gMCxcbiAgICAgICAgICAgIG0gPSAwLFxuICAgICAgICAgICAgbCA9IDAsXG4gICAgICAgICAgICBpZHggPSAwLFxuICAgICAgICAgICAgX2luID0gMCxcbiAgICAgICAgICAgIF9pbjIgPSAwO1xuICAgICAgICBsZXQgaXRlcnMgPSAwLFxuICAgICAgICAgICAgbWF4X2l0ZXIgPSBuICogbiAqIDMwO1xuICAgICAgICBsZXQgbXYgPSAwLjAsXG4gICAgICAgICAgICB2YWwgPSAwLjAsXG4gICAgICAgICAgICBwID0gMC4wLFxuICAgICAgICAgICAgeSA9IDAuMCxcbiAgICAgICAgICAgIHQgPSAwLjAsXG4gICAgICAgICAgICBzID0gMC4wLFxuICAgICAgICAgICAgYyA9IDAuMCxcbiAgICAgICAgICAgIGEwID0gMC4wLFxuICAgICAgICAgICAgYjAgPSAwLjA7XG5cbiAgICAgICAgY29uc3QgaW5kUl9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMik7XG4gICAgICAgIGNvbnN0IGluZENfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDIpO1xuICAgICAgICBjb25zdCBpbmRSID0gaW5kUl9idWZmLmkzMjtcbiAgICAgICAgY29uc3QgaW5kQyA9IGluZENfYnVmZi5pMzI7XG5cbiAgICAgICAgaWYgKFYpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgayA9IGkgKiB2c3RlcDtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIFZbayArIGpdID0gMC4wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWW2sgKyBpXSA9IDEuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgIFdba10gPSBBWyhhc3RlcCArIDEpICoga107XG4gICAgICAgICAgICBpZiAoayA8IG4gLSAxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChtID0gayArIDEsIG12ID0gTWF0aC5hYnMoQVthc3RlcCAqIGsgKyBtXSksIGkgPSBrICsgMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogayArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKSAobXYgPSB2YWwpLCAobSA9IGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRSW2tdID0gbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobSA9IDAsIG12ID0gTWF0aC5hYnMoQVtrXSksIGkgPSAxOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpICsga10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpIChtdiA9IHZhbCksIChtID0gaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZENba10gPSBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG4gPiAxKVxuICAgICAgICAgICAgZm9yICg7IGl0ZXJzIDwgbWF4X2l0ZXI7IGl0ZXJzKyspIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kIGluZGV4IChrLGwpIG9mIHBpdm90IHBcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBtdiA9IE1hdGguYWJzKEFbaW5kUlswXV0pLCBpID0gMTsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpbmRSW2ldXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdiA8IHZhbCkgKG12ID0gdmFsKSwgKGsgPSBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbCA9IGluZFJba107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBNYXRoLmFicyhBW2FzdGVwICogaW5kQ1tpXSArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKSAobXYgPSB2YWwpLCAoayA9IGluZENbaV0pLCAobCA9IGkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHAgPSBBW2FzdGVwICogayArIGxdO1xuXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHApIDw9IGVwcykgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICB5ID0gKFdbbF0gLSBXW2tdKSAqIDAuNTtcbiAgICAgICAgICAgICAgICB0ID0gTWF0aC5hYnMoeSkgKyBoeXBvdChwLCB5KTtcbiAgICAgICAgICAgICAgICBzID0gaHlwb3QocCwgdCk7XG4gICAgICAgICAgICAgICAgYyA9IHQgLyBzO1xuICAgICAgICAgICAgICAgIHMgPSBwIC8gcztcbiAgICAgICAgICAgICAgICB0ID0gKHAgLyB0KSAqIHA7XG4gICAgICAgICAgICAgICAgaWYgKHkgPCAwKSAocyA9IC1zKSwgKHQgPSAtdCk7XG4gICAgICAgICAgICAgICAgQVthc3RlcCAqIGsgKyBsXSA9IDA7XG5cbiAgICAgICAgICAgICAgICBXW2tdIC09IHQ7XG4gICAgICAgICAgICAgICAgV1tsXSArPSB0O1xuXG4gICAgICAgICAgICAgICAgLy8gcm90YXRlIHJvd3MgYW5kIGNvbHVtbnMgayBhbmQgbFxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX2luID0gYXN0ZXAgKiBpICsgaztcbiAgICAgICAgICAgICAgICAgICAgX2luMiA9IGFzdGVwICogaSArIGw7XG4gICAgICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX2luID0gYXN0ZXAgKiBrICsgaTtcbiAgICAgICAgICAgICAgICAgICAgX2luMiA9IGFzdGVwICogaSArIGw7XG4gICAgICAgICAgICAgICAgICAgIGEwID0gQVtfaW5dO1xuICAgICAgICAgICAgICAgICAgICBiMCA9IEFbX2luMl07XG4gICAgICAgICAgICAgICAgICAgIEFbX2luXSA9IGEwICogYyAtIGIwICogcztcbiAgICAgICAgICAgICAgICAgICAgQVtfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSA9IGwgKyAxO1xuICAgICAgICAgICAgICAgIF9pbiA9IGFzdGVwICogayArIGk7XG4gICAgICAgICAgICAgICAgX2luMiA9IGFzdGVwICogbCArIGk7XG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYTAgPSBBW19pbl07XG4gICAgICAgICAgICAgICAgICAgIGIwID0gQVtfaW4yXTtcbiAgICAgICAgICAgICAgICAgICAgQVtfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgICAgICBBW19pbjJdID0gYTAgKiBzICsgYjAgKiBjO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHJvdGF0ZSBlaWdlbnZlY3RvcnNcbiAgICAgICAgICAgICAgICBpZiAoVikge1xuICAgICAgICAgICAgICAgICAgICBfaW4gPSB2c3RlcCAqIGs7XG4gICAgICAgICAgICAgICAgICAgIF9pbjIgPSB2c3RlcCAqIGw7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyssIF9pbisrLCBfaW4yKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEwID0gVltfaW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYjAgPSBWW19pbjJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVltfaW5dID0gYTAgKiBjIC0gYjAgKiBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgVltfaW4yXSA9IGEwICogcyArIGIwICogYztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gaiA9PSAwID8gayA6IGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPCBuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gaWR4ICsgMSwgbXYgPSBNYXRoLmFicyhBW2FzdGVwICogaWR4ICsgbV0pLCBpID0gaWR4ICsgMjsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE1hdGguYWJzKEFbYXN0ZXAgKiBpZHggKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG12IDwgdmFsKSAobXYgPSB2YWwpLCAobSA9IGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kUltpZHhdID0gbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbXYgPSBNYXRoLmFicyhBW2lkeF0pLCBpID0gMTsgaSA8IGlkeDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gTWF0aC5hYnMoQVthc3RlcCAqIGkgKyBpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXYgPCB2YWwpIChtdiA9IHZhbCksIChtID0gaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRDW2lkeF0gPSBtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIHNvcnQgZWlnZW52YWx1ZXMgJiBlaWdlbnZlY3RvcnNcbiAgICAgICAgZm9yIChrID0gMDsgayA8IG4gLSAxOyBrKyspIHtcbiAgICAgICAgICAgIG0gPSBrO1xuICAgICAgICAgICAgZm9yIChpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoV1ttXSA8IFdbaV0pIG0gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGsgIT0gbSkge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgbSwgaywgbXYpO1xuICAgICAgICAgICAgICAgIGlmIChWKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoViwgdnN0ZXAgKiBtICsgaSwgdnN0ZXAgKiBrICsgaSwgbXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGluZFJfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpbmRDX2J1ZmYpO1xuICAgIH1cblxuICAgIEphY29iaVNWREltcGwoXG4gICAgICAgIEF0OiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5IHwgRmxvYXQ2NEFycmF5LFxuICAgICAgICBhc3RlcDogbnVtYmVyLFxuICAgICAgICBfVzogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSB8IEZsb2F0NjRBcnJheSxcbiAgICAgICAgVnQ6IEludDMyQXJyYXkgfCBGbG9hdDMyQXJyYXkgfCBGbG9hdDY0QXJyYXksXG4gICAgICAgIHZzdGVwOiBudW1iZXIsXG4gICAgICAgIG06IG51bWJlcixcbiAgICAgICAgbjogbnVtYmVyLFxuICAgICAgICBuMTogbnVtYmVyXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGVwcyA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTiAqIDIuMDtcbiAgICAgICAgY29uc3QgbWludmFsID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgICAgICBsZXQgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIGsgPSAwLFxuICAgICAgICAgICAgaXRlciA9IDAsXG4gICAgICAgICAgICBtYXhfaXRlciA9IE1hdGgubWF4KG0sIDMwKTtcbiAgICAgICAgbGV0IEFpID0gMCxcbiAgICAgICAgICAgIEFqID0gMCxcbiAgICAgICAgICAgIFZpID0gMCxcbiAgICAgICAgICAgIFZqID0gMCxcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuICAgICAgICBsZXQgYyA9IDAuMCxcbiAgICAgICAgICAgIHMgPSAwLjAsXG4gICAgICAgICAgICB0ID0gMC4wO1xuICAgICAgICBsZXQgdDAgPSAwLjAsXG4gICAgICAgICAgICB0MSA9IDAuMCxcbiAgICAgICAgICAgIHNkID0gMC4wLFxuICAgICAgICAgICAgYmV0YSA9IDAuMCxcbiAgICAgICAgICAgIGdhbW1hID0gMC4wLFxuICAgICAgICAgICAgZGVsdGEgPSAwLjAsXG4gICAgICAgICAgICBhID0gMC4wLFxuICAgICAgICAgICAgcCA9IDAuMCxcbiAgICAgICAgICAgIGIgPSAwLjA7XG4gICAgICAgIGxldCBzZWVkID0gMHgxMjM0O1xuICAgICAgICBsZXQgdmFsID0gMC4wLFxuICAgICAgICAgICAgdmFsMCA9IDAuMCxcbiAgICAgICAgICAgIGFzdW0gPSAwLjA7XG5cbiAgICAgICAgY29uc3QgV19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMyk7XG4gICAgICAgIGNvbnN0IFcgPSBXX2J1ZmYuZjY0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBzZCA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga107XG4gICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBXW2ldID0gc2Q7XG5cbiAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgVnRbaSAqIHZzdGVwICsga10gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBWdFtpICogdnN0ZXAgKyBpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaXRlciA8IG1heF9pdGVyOyBpdGVyKyspIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIChBaSA9IChpICogYXN0ZXApIHwgMCksIChBaiA9IChqICogYXN0ZXApIHwgMCk7XG4gICAgICAgICAgICAgICAgICAgIChhID0gV1tpXSksIChwID0gMCksIChiID0gV1tqXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgayA9IDI7XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gQXRbQWldICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICBwICs9IEF0W0FpICsgMV0gKiBBdFtBaiArIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBrIDwgbTsgaysrKSBwICs9IEF0W0FpICsga10gKiBBdFtBaiArIGtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhwKSA8PSBlcHMgKiBNYXRoLnNxcnQoYSAqIGIpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICBwICo9IDIuMDtcbiAgICAgICAgICAgICAgICAgICAgKGJldGEgPSBhIC0gYiksIChnYW1tYSA9IGh5cG90KHAsIGJldGEpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJldGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IChnYW1tYSAtIGJldGEpICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IE1hdGguc3FydChkZWx0YSAvIGdhbW1hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBwIC8gKGdhbW1hICogcyAqIDIuMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gTWF0aC5zcXJ0KChnYW1tYSArIGJldGEpIC8gKGdhbW1hICogMi4wKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gcCAvIChnYW1tYSAqIGMgKiAyLjApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgKGEgPSAwLjApLCAoYiA9IDAuMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgayA9IDI7IC8vIHVucm9sbFxuICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaV0gKyBzICogQXRbQWpdO1xuICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogQXRbQWldICsgYyAqIEF0W0FqXTtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWldID0gdDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W0FqXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICBhICs9IHQwICogdDA7XG4gICAgICAgICAgICAgICAgICAgIGIgKz0gdDEgKiB0MTtcblxuICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBBdFtBaSArIDFdICsgcyAqIEF0W0FqICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHQxID0gLXMgKiBBdFtBaSArIDFdICsgYyAqIEF0W0FqICsgMV07XG4gICAgICAgICAgICAgICAgICAgIEF0W0FpICsgMV0gPSB0MDtcbiAgICAgICAgICAgICAgICAgICAgQXRbQWogKyAxXSA9IHQxO1xuICAgICAgICAgICAgICAgICAgICBhICs9IHQwICogdDA7XG4gICAgICAgICAgICAgICAgICAgIGIgKz0gdDEgKiB0MTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSBjICogQXRbQWkgKyBrXSArIHMgKiBBdFtBaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIEF0W0FpICsga10gKyBjICogQXRbQWogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF0W0FpICsga10gPSB0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF0W0FqICsga10gPSB0MTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSArPSB0MCAqIHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYiArPSB0MSAqIHQxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGE7XG4gICAgICAgICAgICAgICAgICAgIFdbal0gPSBiO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKFZpID0gKGkgKiB2c3RlcCkgfCAwKSwgKFZqID0gKGogKiB2c3RlcCkgfCAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgayA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBWdFtWaV0gKyBzICogVnRbVmpdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSAtcyAqIFZ0W1ZpXSArIGMgKiBWdFtWal07XG4gICAgICAgICAgICAgICAgICAgICAgICBWdFtWaV0gPSB0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZqXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0MCA9IGMgKiBWdFtWaSArIDFdICsgcyAqIFZ0W1ZqICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyAxXSArIGMgKiBWdFtWaiArIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmkgKyAxXSA9IHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnRbVmogKyAxXSA9IHQxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gYyAqIFZ0W1ZpICsga10gKyBzICogVnRbVmogKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IC1zICogVnRbVmkgKyBrXSArIGMgKiBWdFtWaiArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZ0W1ZpICsga10gPSB0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWdFtWaiArIGtdID0gdDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCA9PSAwKSBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIHNkID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICBzZCArPSB0ICogdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFdbaV0gPSBNYXRoLnNxcnQoc2QpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGogPSBpO1xuICAgICAgICAgICAgZm9yIChrID0gaSArIDE7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoV1tqXSA8IFdba10pIGogPSBrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgIT0gaikge1xuICAgICAgICAgICAgICAgIHN3YXAoVywgaSwgaiwgc2QpO1xuICAgICAgICAgICAgICAgIGlmIChWdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKEF0LCBpICogYXN0ZXAgKyBrLCBqICogYXN0ZXAgKyBrLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoVnQsIGkgKiB2c3RlcCArIGssIGogKiB2c3RlcCArIGssIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgX1dbaV0gPSBXW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFWdCkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKFdfYnVmZik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjE7IGkrKykge1xuICAgICAgICAgICAgc2QgPSBpIDwgbiA/IFdbaV0gOiAwO1xuXG4gICAgICAgICAgICB3aGlsZSAoc2QgPD0gbWludmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgZ290IGEgemVybyBzaW5ndWxhciB2YWx1ZSwgdGhlbiBpbiBvcmRlciB0byBnZXQgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCBzaW5ndWxhciB2ZWN0b3JcbiAgICAgICAgICAgICAgICAvLyB3ZSBnZW5lcmF0ZSBhIHJhbmRvbSB2ZWN0b3IsIHByb2plY3QgaXQgdG8gdGhlIHByZXZpb3VzbHkgY29tcHV0ZWQgbGVmdCBzaW5ndWxhciB2ZWN0b3JzLFxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0IHRoZSBwcm9qZWN0aW9uIGFuZCBub3JtYWxpemUgdGhlIGRpZmZlcmVuY2UuXG4gICAgICAgICAgICAgICAgdmFsMCA9IDEuMCAvIG07XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzZWVkID0gc2VlZCAqIDIxNDAxMyArIDI1MzEwMTE7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9ICgoc2VlZCA+PiAxNikgJiAweDdmZmYgJiAyNTYpICE9IDAgPyB2YWwwIDogLXZhbDA7XG4gICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGl0ZXIgPSAwOyBpdGVyIDwgMjsgaXRlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZCArPSBBdFtpICogYXN0ZXAgKyBrXSAqIEF0W2ogKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gQXRbaSAqIGFzdGVwICsga10gLSBzZCAqIEF0W2ogKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3VtICs9IE1hdGguYWJzKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXN1bSA9IGFzdW0gPyAxLjAgLyBhc3VtIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBtOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdFtpICogYXN0ZXAgKyBrXSAqPSBhc3VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNkID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBBdFtpICogYXN0ZXAgKyBrXTtcbiAgICAgICAgICAgICAgICAgICAgc2QgKz0gdCAqIHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNkID0gTWF0aC5zcXJ0KHNkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcyA9IDEuMCAvIHNkO1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG07IGsrKykge1xuICAgICAgICAgICAgICAgIEF0W2kgKiBhc3RlcCArIGtdICo9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoV19idWZmKTtcbiAgICB9XG5cbiAgICBsdV9zb2x2ZShBOiBtYXRyaXhfdCwgQjogbWF0cml4X3QpOiBudW1iZXIge1xuICAgICAgICBsZXQgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIGsgPSAwLFxuICAgICAgICAgICAgcCA9IDEsXG4gICAgICAgICAgICBhc3RlcCA9IEEuY29scztcbiAgICAgICAgY29uc3QgYWQgPSBBLmRhdGEsXG4gICAgICAgICAgICBiZCA9IEIuZGF0YTtcbiAgICAgICAgbGV0IHQsIGFscGhhLCBkLCBzO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhc3RlcDsgaSsrKSB7XG4gICAgICAgICAgICBrID0gaTtcbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYXN0ZXA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhhZFtqICogYXN0ZXAgKyBpXSkgPiBNYXRoLmFicyhhZFtrICogYXN0ZXAgKyBpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgayA9IGo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoYWRbayAqIGFzdGVwICsgaV0pIDwgSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7IC8vIEZBSUxFRFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoayAhPSBpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gaTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhcChhZCwgaSAqIGFzdGVwICsgaiwgayAqIGFzdGVwICsgaiwgdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3dhcChiZCwgaSwgaywgdCk7XG4gICAgICAgICAgICAgICAgcCA9IC1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkID0gLTEuMCAvIGFkW2kgKiBhc3RlcCArIGldO1xuXG4gICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGFzdGVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IGFkW2ogKiBhc3RlcCArIGldICogZDtcblxuICAgICAgICAgICAgICAgIGZvciAoayA9IGkgKyAxOyBrIDwgYXN0ZXA7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBhZFtqICogYXN0ZXAgKyBrXSArPSBhbHBoYSAqIGFkW2kgKiBhc3RlcCArIGtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJkW2pdICs9IGFscGhhICogYmRbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkW2kgKiBhc3RlcCArIGldID0gLWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSBhc3RlcCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBzID0gYmRbaV07XG4gICAgICAgICAgICBmb3IgKGsgPSBpICsgMTsgayA8IGFzdGVwOyBrKyspIHtcbiAgICAgICAgICAgICAgICBzIC09IGFkW2kgKiBhc3RlcCArIGtdICogYmRba107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHMgKiBhZFtpICogYXN0ZXAgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxOyAvLyBPS1xuICAgIH1cblxuICAgIGNob2xlc2t5X3NvbHZlKEE6IG1hdHJpeF90LCBCOiBtYXRyaXhfdCk6IG51bWJlciB7XG4gICAgICAgIGxldCBjb2wgPSAwLFxuICAgICAgICAgICAgcm93ID0gMCxcbiAgICAgICAgICAgIGNvbDIgPSAwLFxuICAgICAgICAgICAgY3MgPSAwLFxuICAgICAgICAgICAgcnMgPSAwLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBqID0gMDtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IEEuY29scztcbiAgICAgICAgY29uc3QgYWQgPSBBLmRhdGEsXG4gICAgICAgICAgICBiZCA9IEIuZGF0YTtcbiAgICAgICAgbGV0IHZhbCwgaW52X2RpYWc7XG5cbiAgICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgICAgICAgICAgaW52X2RpYWcgPSAxLjA7XG4gICAgICAgICAgICBjcyA9IGNvbCAqIHNpemU7XG4gICAgICAgICAgICBycyA9IGNzO1xuICAgICAgICAgICAgZm9yIChyb3cgPSBjb2w7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBmb3IgdGhlIHBhcnRzIG9mIGNob2xlc2t5IGFscmVhZHkgY29tcHV0ZWRcbiAgICAgICAgICAgICAgICB2YWwgPSBhZFtycyArIGNvbF07XG4gICAgICAgICAgICAgICAgZm9yIChjb2wyID0gMDsgY29sMiA8IGNvbDsgY29sMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCAtPSBhZFtjb2wyICogc2l6ZSArIGNvbF0gKiBhZFtycyArIGNvbDJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocm93ID09IGNvbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBkaWFnb25hbCBlbGVtZW50IHNvIGRvbid0IGRpdmlkZVxuICAgICAgICAgICAgICAgICAgICBhZFtycyArIGNvbF0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW52X2RpYWcgPSAxLjAgLyB2YWw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FjaGUgdGhlIHZhbHVlIHdpdGhvdXQgZGl2aXNpb24gaW4gdGhlIHVwcGVyIGhhbGZcbiAgICAgICAgICAgICAgICAgICAgYWRbY3MgKyByb3ddID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXZpZGUgbXkgdGhlIGRpYWdvbmFsIGVsZW1lbnQgZm9yIGFsbCBvdGhlcnNcbiAgICAgICAgICAgICAgICAgICAgYWRbcnMgKyBjb2xdID0gdmFsICogaW52X2RpYWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJzID0gcnMgKyBzaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgYmFja3N1YiB0aHJvdWdoIExcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgLT0gYWRbY3MgKyBqXSAqIGJkW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmRbaV0gPSB2YWw7XG4gICAgICAgICAgICBjcyA9IGNzICsgc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBiYWNrc3ViIHRocm91Z2ggZGlhZ29uYWxcbiAgICAgICAgY3MgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBiZFtpXSAvPSBhZFtjcyArIGldO1xuICAgICAgICAgICAgY3MgPSBjcyArIHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja3N1YiB0aHJvdWdoIEwgVHJhbnNwb3NlXG4gICAgICAgIGkgPSBzaXplIC0gMTtcbiAgICAgICAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YWwgPSBiZFtpXTtcbiAgICAgICAgICAgIGogPSBpICsgMTtcbiAgICAgICAgICAgIGNzID0gaiAqIHNpemU7XG4gICAgICAgICAgICBmb3IgKDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIHZhbCAtPSBhZFtjcyArIGldICogYmRbal07XG4gICAgICAgICAgICAgICAgY3MgPSBjcyArIHNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZFtpXSA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN2ZF9kZWNvbXBvc2UoQTogYW55LCBXOiBtYXRyaXhfdCwgVTogbWF0cml4X3QsIFY6IG1hdHJpeF90LCBvcHRpb25zOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXQgPSAwLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIF9tID0gQS5yb3dzLFxuICAgICAgICAgICAgX24gPSBBLmNvbHMsXG4gICAgICAgICAgICBtID0gX20sXG4gICAgICAgICAgICBuID0gX247XG4gICAgICAgIGNvbnN0IGR0ID0gQS50eXBlIHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90OyAvLyB3ZSBvbmx5IHdvcmsgd2l0aCBzaW5nbGUgY2hhbm5lbFxuXG4gICAgICAgIGlmIChtIDwgbikge1xuICAgICAgICAgICAgYXQgPSAxO1xuICAgICAgICAgICAgaSA9IG07XG4gICAgICAgICAgICBtID0gbjtcbiAgICAgICAgICAgIG4gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChtICogbSkgPDwgMyk7XG4gICAgICAgIGNvbnN0IHdfYnVmZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcihuIDw8IDMpO1xuICAgICAgICBjb25zdCB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcblxuICAgICAgICBjb25zdCBhX210ID0gbmV3IG1hdHJpeF90KG0sIG0sIGR0LCBhX2J1ZmYuZGF0YSk7XG4gICAgICAgIGNvbnN0IHdfbXQgPSBuZXcgbWF0cml4X3QoMSwgbiwgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgY29uc3Qgdl9tdCA9IG5ldyBtYXRyaXhfdChuLCBuLCBkdCwgdl9idWZmLmRhdGEpO1xuXG4gICAgICAgIGlmIChhdCA9PSAwKSB7XG4gICAgICAgICAgICAvLyB0cmFuc3Bvc2VcbiAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoYV9tdCwgQSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX24gKiBfbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7IGkgPCBuICogbTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuSmFjb2JpU1ZESW1wbChhX210LmRhdGEsIG0sIHdfbXQuZGF0YSwgdl9tdC5kYXRhLCBuLCBtLCBuLCBtKTtcblxuICAgICAgICBpZiAoVykge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IHdfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBpIDwgX247IGkrKykge1xuICAgICAgICAgICAgICAgIFcuZGF0YVtpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXQgPT0gMCkge1xuICAgICAgICAgICAgaWYgKFUgJiYgb3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkge1xuICAgICAgICAgICAgICAgIGkgPSBtICogbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gYV9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgYV9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpIHtcbiAgICAgICAgICAgICAgICBpID0gbiAqIG47XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IHZfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIHZfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKFUgJiYgb3B0aW9ucyAmIEpTRkVBVF9DT05TVEFOVFMuU1ZEX1VfVCkge1xuICAgICAgICAgICAgICAgIGkgPSBuICogbjtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVS5kYXRhW2ldID0gdl9tdC5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoVSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0bWF0aC50cmFuc3Bvc2UoVSwgdl9tdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWICYmIG9wdGlvbnMgJiBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1QpIHtcbiAgICAgICAgICAgICAgICBpID0gbSAqIG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFYuZGF0YVtpXSA9IGFfbXQuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdG1hdGgudHJhbnNwb3NlKFYsIGFfbXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodl9idWZmKTtcbiAgICB9XG5cbiAgICBzdmRfc29sdmUoQTogbWF0cml4X3QsIFg6IG1hdHJpeF90LCBCOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICBsZXQgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIGsgPSAwO1xuICAgICAgICBsZXQgcHUgPSAwLFxuICAgICAgICAgICAgcHYgPSAwO1xuICAgICAgICBjb25zdCBucm93cyA9IEEucm93cyxcbiAgICAgICAgICAgIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICBsZXQgc3VtID0gMC4wLFxuICAgICAgICAgICAgeHN1bSA9IDAuMCxcbiAgICAgICAgICAgIHRvbCA9IDAuMDtcbiAgICAgICAgY29uc3QgZHQgPSBBLnR5cGUgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG5cbiAgICAgICAgY29uc3QgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgY29uc3Qgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICBjb25zdCB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuXG4gICAgICAgIGNvbnN0IHVfbXQgPSBuZXcgbWF0cml4X3QobnJvd3MsIG5yb3dzLCBkdCwgdV9idWZmLmRhdGEpO1xuICAgICAgICBjb25zdCB3X210ID0gbmV3IG1hdHJpeF90KDEsIG5jb2xzLCBkdCwgd19idWZmLmRhdGEpO1xuICAgICAgICBjb25zdCB2X210ID0gbmV3IG1hdHJpeF90KG5jb2xzLCBuY29scywgZHQsIHZfYnVmZi5kYXRhKTtcblxuICAgICAgICBjb25zdCBiZCA9IEIuZGF0YSxcbiAgICAgICAgICAgIHVkID0gdV9tdC5kYXRhLFxuICAgICAgICAgICAgd2QgPSB3X210LmRhdGEsXG4gICAgICAgICAgICB2ZCA9IHZfbXQuZGF0YTtcblxuICAgICAgICB0aGlzLnN2ZF9kZWNvbXBvc2UoQSwgd19tdCwgdV9tdCwgdl9tdCwgMCk7XG5cbiAgICAgICAgdG9sID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OICogd2RbMF0gKiBuY29scztcblxuICAgICAgICBmb3IgKDsgaSA8IG5jb2xzOyBpKyssIHB2ICs9IG5jb2xzKSB7XG4gICAgICAgICAgICB4c3VtID0gMC4wO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5jb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAod2Rbal0gPiB0b2wpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMCwgc3VtID0gMC4wLCBwdSA9IDA7IGsgPCBucm93czsgaysrLCBwdSArPSBuY29scykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IHVkW3B1ICsgal0gKiBiZFtrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB4c3VtICs9IChzdW0gKiB2ZFtwdiArIGpdKSAvIHdkW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFguZGF0YVtpXSA9IHhzdW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIHN2ZF9pbnZlcnQoQWk6IG1hdHJpeF90LCBBOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICBsZXQgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIGsgPSAwO1xuICAgICAgICBsZXQgcHUgPSAwLFxuICAgICAgICAgICAgcHYgPSAwLFxuICAgICAgICAgICAgcGEgPSAwO1xuICAgICAgICBjb25zdCBucm93cyA9IEEucm93cyxcbiAgICAgICAgICAgIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICBsZXQgc3VtID0gMC4wLFxuICAgICAgICAgICAgdG9sID0gMC4wO1xuICAgICAgICBjb25zdCBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICAvL2NvbnN0IHVfYnVmZiA9IGNhY2hlMS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgY29uc3QgdV9idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKChucm93cyAqIG5yb3dzKSA8PCAzKTtcbiAgICAgICAgY29uc3Qgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG5jb2xzIDw8IDMpO1xuICAgICAgICBjb25zdCB2X2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG5jb2xzICogbmNvbHMpIDw8IDMpO1xuICAgICAgICBjb25zdCB1X210ID0gbmV3IG1hdHJpeF90KG5yb3dzLCBucm93cywgZHQsIHVfYnVmZi5kYXRhKTtcbiAgICAgICAgY29uc3Qgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuY29scywgZHQsIHdfYnVmZi5kYXRhKTtcbiAgICAgICAgY29uc3Qgdl9tdCA9IG5ldyBtYXRyaXhfdChuY29scywgbmNvbHMsIGR0LCB2X2J1ZmYuZGF0YSk7XG5cbiAgICAgICAgY29uc3QgaWQgPSBBaS5kYXRhLFxuICAgICAgICAgICAgdWQgPSB1X210LmRhdGEsXG4gICAgICAgICAgICB3ZCA9IHdfbXQuZGF0YSxcbiAgICAgICAgICAgIHZkID0gdl9tdC5kYXRhO1xuXG4gICAgICAgIHRoaXMuc3ZkX2RlY29tcG9zZShBLCB3X210LCB1X210LCB2X210LCAwKTtcblxuICAgICAgICB0b2wgPSBKU0ZFQVRfQ09OU1RBTlRTLkVQU0lMT04gKiB3ZFswXSAqIG5jb2xzO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IGkrKywgcHYgKz0gbmNvbHMpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIHB1ID0gMDsgaiA8IG5yb3dzOyBqKyssIHBhKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwLCBzdW0gPSAwLjA7IGsgPCBuY29sczsgaysrLCBwdSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3ZFtrXSA+IHRvbCkgc3VtICs9ICh2ZFtwdiArIGtdICogdWRbcHVdKSAvIHdkW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZFtwYV0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIodV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKHdfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih2X2J1ZmYpO1xuICAgIH1cblxuICAgIGVpZ2VuVlYoQTogbWF0cml4X3QsIHZlY3RzOiBtYXRyaXhfdCwgdmFscz86IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIGxldCBuID0gQS5jb2xzLFxuICAgICAgICAgICAgaSA9IG4gKiBuO1xuICAgICAgICBjb25zdCBkdCA9IEEudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICBjb25zdCBhX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG4gKiBuKSA8PCAzKTtcbiAgICAgICAgY29uc3Qgd19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKG4gPDwgMyk7XG4gICAgICAgIGNvbnN0IGFfbXQgPSBuZXcgbWF0cml4X3QobiwgbiwgZHQsIGFfYnVmZi5kYXRhKTtcbiAgICAgICAgY29uc3Qgd19tdCA9IG5ldyBtYXRyaXhfdCgxLCBuLCBkdCwgd19idWZmLmRhdGEpO1xuXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgYV9tdC5kYXRhW2ldID0gQS5kYXRhW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5KYWNvYmlJbXBsKGFfbXQuZGF0YSwgbiwgd19tdC5kYXRhLCB2ZWN0cyA/IHZlY3RzLmRhdGEgOiBudWxsLCBuLCBuKTtcblxuICAgICAgICBpZiAodmFscykge1xuICAgICAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFscy5kYXRhW25dID0gd19tdC5kYXRhW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGFfYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcih3X2J1ZmYpO1xuICAgIH1cbn07XG5cbmpzZmVhdE5leHQub3JiID0gY2xhc3Mgb3JiIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIGJpdF9wYXR0ZXJuXzMxXzogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgSDogbWF0cml4X3Q7XG4gICAgcHVibGljIHBhdGNoX2ltZzogbWF0cml4X3Q7XG4gICAgcHVibGljIGltZ3Byb2M6IGltZ3Byb2M7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5iaXRfcGF0dGVybl8zMV8gPSBuZXcgSW50MzJBcnJheShiaXRfcGF0dGVybl8zMSk7XG4gICAgICAgIHRoaXMuSCA9IG5ldyBtYXRyaXhfdCgzLCAzLCBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90IHwgSlNGRUFUX0NPTlNUQU5UUy5DMV90KTtcbiAgICAgICAgdGhpcy5wYXRjaF9pbWcgPSBuZXcgbWF0cml4X3QoMzIsIDMyLCBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgfCBKU0ZFQVRfQ09OU1RBTlRTLkMxX3QpO1xuICAgICAgICB0aGlzLmltZ3Byb2MgPSBuZXcganNmZWF0TmV4dC5pbWdwcm9jKCk7XG4gICAgfVxuXG4gICAgZGVzY3JpYmUoc3JjOiBtYXRyaXhfdCwgY29ybmVyczoga2V5cG9pbnRfdFtdLCBjb3VudDogbnVtYmVyLCBkZXNjcmlwdG9yczogbWF0cml4X3QpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgREVTQ1JfU0laRSA9IDMyOyAvLyBieXRlcztcbiAgICAgICAgbGV0IGkgPSAwLFxuICAgICAgICAgICAgYiA9IDAsXG4gICAgICAgICAgICBweCA9IDAuMCxcbiAgICAgICAgICAgIHB5ID0gMC4wLFxuICAgICAgICAgICAgYW5nbGUgPSAwLjA7XG4gICAgICAgIGxldCB0MCA9IDAsXG4gICAgICAgICAgICB0MSA9IDAsXG4gICAgICAgICAgICB2YWwgPSAwO1xuICAgICAgICAvL2xldCBpbWcgPSBzcmMuZGF0YSwgdyA9IHNyYy5jb2xzLCBoID0gc3JjLnJvd3M7XG4gICAgICAgIGNvbnN0IHBhdGNoX2QgPSB0aGlzLnBhdGNoX2ltZy5kYXRhO1xuICAgICAgICBjb25zdCBwYXRjaF9vZmYgPSAxNiAqIDMyICsgMTY7IC8vIGNlbnRlciBvZiBwYXRjaFxuICAgICAgICBsZXQgcGF0dCA9IDA7XG5cbiAgICAgICAgaWYgKCEoZGVzY3JpcHRvcnMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkpIHtcbiAgICAgICAgICAgIC8vIHJlbG9jYXRlIHRvIFU4IHR5cGVcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnR5cGUgPSBKU0ZFQVRfQ09OU1RBTlRTLlU4X3Q7XG4gICAgICAgICAgICBkZXNjcmlwdG9ycy5jb2xzID0gREVTQ1JfU0laRTtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJvd3MgPSBjb3VudDtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLmNoYW5uZWwgPSAxO1xuICAgICAgICAgICAgZGVzY3JpcHRvcnMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3JzLnJlc2l6ZShERVNDUl9TSVpFLCBjb3VudCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZXNjcl9kID0gZGVzY3JpcHRvcnMuZGF0YTtcbiAgICAgICAgbGV0IGRlc2NyX29mZiA9IDA7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIHB4ID0gY29ybmVyc1tpXS54O1xuICAgICAgICAgICAgcHkgPSBjb3JuZXJzW2ldLnk7XG4gICAgICAgICAgICBhbmdsZSA9IGNvcm5lcnNbaV0uYW5nbGU7XG5cbiAgICAgICAgICAgIHJlY3RpZnlfcGF0Y2goc3JjLCB0aGlzLnBhdGNoX2ltZywgYW5nbGUsIHB4LCBweSwgMzIsIHRoaXMuSCwgdGhpcy5pbWdwcm9jKTtcblxuICAgICAgICAgICAgLy8gZGVzY3JpYmUgdGhlIHBhdGNoXG4gICAgICAgICAgICBwYXR0ID0gMDtcbiAgICAgICAgICAgIGZvciAoYiA9IDA7IGIgPCBERVNDUl9TSVpFOyArK2IpIHtcbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07XG4gICAgICAgICAgICAgICAgcGF0dCArPSAyO1xuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTtcbiAgICAgICAgICAgICAgICBwYXR0ICs9IDI7XG4gICAgICAgICAgICAgICAgdmFsID0gKDxudW1iZXI+KDx1bmtub3duPih0MCA8IHQxKSkpIHwgMDtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTtcbiAgICAgICAgICAgICAgICBwYXR0ICs9IDI7XG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dO1xuICAgICAgICAgICAgICAgIHBhdHQgKz0gMjtcbiAgICAgICAgICAgICAgICB2YWwgfD0gKDxudW1iZXI+KDx1bmtub3duPih0MCA8IHQxKSkpIDw8IDE7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07XG4gICAgICAgICAgICAgICAgcGF0dCArPSAyO1xuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTtcbiAgICAgICAgICAgICAgICBwYXR0ICs9IDI7XG4gICAgICAgICAgICAgICAgdmFsIHw9ICg8bnVtYmVyPig8dW5rbm93bj4odDAgPCB0MSkpKSA8PCAyO1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dO1xuICAgICAgICAgICAgICAgIHBhdHQgKz0gMjtcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07XG4gICAgICAgICAgICAgICAgcGF0dCArPSAyO1xuICAgICAgICAgICAgICAgIHZhbCB8PSAoPG51bWJlcj4oPHVua25vd24+KHQwIDwgdDEpKSkgPDwgMztcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTtcbiAgICAgICAgICAgICAgICBwYXR0ICs9IDI7XG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dO1xuICAgICAgICAgICAgICAgIHBhdHQgKz0gMjtcbiAgICAgICAgICAgICAgICB2YWwgfD0gKDxudW1iZXI+KDx1bmtub3duPih0MCA8IHQxKSkpIDw8IDQ7XG5cbiAgICAgICAgICAgICAgICB0MCA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07XG4gICAgICAgICAgICAgICAgcGF0dCArPSAyO1xuICAgICAgICAgICAgICAgIHQxID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTtcbiAgICAgICAgICAgICAgICBwYXR0ICs9IDI7XG4gICAgICAgICAgICAgICAgdmFsIHw9ICg8bnVtYmVyPig8dW5rbm93bj4odDAgPCB0MSkpKSA8PCA1O1xuXG4gICAgICAgICAgICAgICAgdDAgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dO1xuICAgICAgICAgICAgICAgIHBhdHQgKz0gMjtcbiAgICAgICAgICAgICAgICB0MSA9IHBhdGNoX2RbcGF0Y2hfb2ZmICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dCArIDFdICogMzIgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0XV07XG4gICAgICAgICAgICAgICAgcGF0dCArPSAyO1xuICAgICAgICAgICAgICAgIHZhbCB8PSAoPG51bWJlcj4oPHVua25vd24+KHQwIDwgdDEpKSkgPDwgNjtcblxuICAgICAgICAgICAgICAgIHQwID0gcGF0Y2hfZFtwYXRjaF9vZmYgKyB0aGlzLmJpdF9wYXR0ZXJuXzMxX1twYXR0ICsgMV0gKiAzMiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHRdXTtcbiAgICAgICAgICAgICAgICBwYXR0ICs9IDI7XG4gICAgICAgICAgICAgICAgdDEgPSBwYXRjaF9kW3BhdGNoX29mZiArIHRoaXMuYml0X3BhdHRlcm5fMzFfW3BhdHQgKyAxXSAqIDMyICsgdGhpcy5iaXRfcGF0dGVybl8zMV9bcGF0dF1dO1xuICAgICAgICAgICAgICAgIHBhdHQgKz0gMjtcbiAgICAgICAgICAgICAgICB2YWwgfD0gKDxudW1iZXI+KDx1bmtub3duPih0MCA8IHQxKSkpIDw8IDc7XG5cbiAgICAgICAgICAgICAgICBkZXNjcl9kW2Rlc2NyX29mZiArIGJdID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVzY3Jfb2ZmICs9IERFU0NSX1NJWkU7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5qc2ZlYXROZXh0LnlhcGUgPSB5YXBlO1xuXG5qc2ZlYXROZXh0LnlhcGUwNiA9IGNsYXNzIHlhcGUwNiBleHRlbmRzIGpzZmVhdE5leHQge1xuICAgIHB1YmxpYyBsYXBsYWNpYW5fdGhyZXNob2xkOiBudW1iZXI7XG4gICAgcHVibGljIG1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxhcGxhY2lhbl90aHJlc2hvbGQgPSAzMDtcbiAgICAgICAgdGhpcy5taW5fZWlnZW5fdmFsdWVfdGhyZXNob2xkID0gMjU7XG4gICAgfVxuXG4gICAgZGV0ZWN0KHNyYzogbWF0cml4X3QsIHBvaW50czoga2V5cG9pbnRfdFtdLCBib3JkZXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9yZGVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBib3JkZXIgPSA1O1xuICAgICAgICB9XG4gICAgICAgIGxldCB4ID0gMCxcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICBjb25zdCB3ID0gc3JjLmNvbHMsXG4gICAgICAgICAgICBoID0gc3JjLnJvd3MsXG4gICAgICAgICAgICBzcmRfZCA9IHNyYy5kYXRhO1xuICAgICAgICBjb25zdCBEeHggPSA1LFxuICAgICAgICAgICAgRHl5ID0gKDUgKiB3KSB8IDA7XG4gICAgICAgIGNvbnN0IER4eSA9ICgzICsgMyAqIHcpIHwgMCxcbiAgICAgICAgICAgIER5eCA9ICgzIC0gMyAqIHcpIHwgMDtcbiAgICAgICAgY29uc3QgbGFwX2J1ZiA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigodyAqIGgpIDw8IDIpO1xuICAgICAgICBjb25zdCBsYXBsYWNpYW4gPSBsYXBfYnVmLmkzMjtcbiAgICAgICAgbGV0IGx2ID0gMCxcbiAgICAgICAgICAgIHJvdyA9IDAsXG4gICAgICAgICAgICByb3d4ID0gMCxcbiAgICAgICAgICAgIG1pbl9laWdlbl92YWx1ZSA9IDAsXG4gICAgICAgICAgICBwdDtcbiAgICAgICAgbGV0IG51bWJlcl9vZl9wb2ludHMgPSAwO1xuICAgICAgICBjb25zdCBsYXBfdGhyZXNoID0gdGhpcy5sYXBsYWNpYW5fdGhyZXNob2xkO1xuICAgICAgICBjb25zdCBlaWdlbl90aHJlc2ggPSB0aGlzLm1pbl9laWdlbl92YWx1ZV90aHJlc2hvbGQ7XG5cbiAgICAgICAgY29uc3Qgc3ggPSBNYXRoLm1heCg1LCBib3JkZXIpIHwgMDtcbiAgICAgICAgY29uc3Qgc3kgPSBNYXRoLm1heCgzLCBib3JkZXIpIHwgMDtcbiAgICAgICAgY29uc3QgZXggPSBNYXRoLm1pbih3IC0gNSwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICBjb25zdCBleSA9IE1hdGgubWluKGggLSAzLCBoIC0gYm9yZGVyKSB8IDA7XG5cbiAgICAgICAgeCA9IHcgKiBoO1xuICAgICAgICB3aGlsZSAoLS14ID49IDApIHtcbiAgICAgICAgICAgIGxhcGxhY2lhblt4XSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZV9sYXBsYWNpYW4oc3JkX2QsIGxhcGxhY2lhbiwgdywgRHh4LCBEeXksIHN4LCBzeSwgZXgsIGV5KTtcblxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcbiAgICAgICAgICAgICAgICBsdiA9IGxhcGxhY2lhbltyb3d4XTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIChsdiA8IC1sYXBfdGhyZXNoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4IC0gMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPCBsYXBsYWNpYW5bcm93eCAtIHddICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA8IGxhcGxhY2lhbltyb3d4ICsgd10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3IC0gMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3IC0gMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggLSB3ICsgMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2IDwgbGFwbGFjaWFuW3Jvd3ggKyB3ICsgMV0pIHx8XG4gICAgICAgICAgICAgICAgICAgIChsdiA+IGxhcF90aHJlc2ggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggLSAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCArIDFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsdiA+IGxhcGxhY2lhbltyb3d4IC0gd10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2ID4gbGFwbGFjaWFuW3Jvd3ggKyB3XSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgLSAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCArIHcgLSAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCAtIHcgKyAxXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbHYgPiBsYXBsYWNpYW5bcm93eCArIHcgKyAxXSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbWluX2VpZ2VuX3ZhbHVlID0gaGVzc2lhbl9taW5fZWlnZW5fdmFsdWUoc3JkX2QsIHJvd3gsIGx2LCBEeHgsIER5eSwgRHh5LCBEeXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluX2VpZ2VuX3ZhbHVlID4gZWlnZW5fdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdCA9IHBvaW50c1tudW1iZXJfb2ZfcG9pbnRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChwdC54ID0geCksIChwdC55ID0geSksIChwdC5zY29yZSA9IG1pbl9laWdlbl92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICArK251bWJlcl9vZl9wb2ludHM7XG4gICAgICAgICAgICAgICAgICAgICAgICArK3gsICsrcm93eDsgLy8gc2tpcCBuZXh0IHBpeGVsIHNpbmNlIHRoaXMgaXMgbWF4aW1hIGluIDN4M1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGxhcF9idWYpO1xuXG4gICAgICAgIHJldHVybiBudW1iZXJfb2ZfcG9pbnRzO1xuICAgIH1cbn07XG5cbmpzZmVhdE5leHQubW90aW9uX2VzdGltYXRvciA9IGNsYXNzIG1vdGlvbl9lc3RpbWF0b3IgZXh0ZW5kcyBqc2ZlYXROZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXRfc3Vic2V0KFxuICAgICAgICBrZXJuZWw6IGhvbW9ncmFwaHkyZCxcbiAgICAgICAgZnJvbTogcG9pbnRfdFtdLFxuICAgICAgICB0bzogcG9pbnRfdFtdLFxuICAgICAgICBuZWVkX2NudDogbnVtYmVyLFxuICAgICAgICBtYXhfY250OiBudW1iZXIsXG4gICAgICAgIGZyb21fc3ViOiBwb2ludF90W10sXG4gICAgICAgIHRvX3N1YjogcG9pbnRfdFtdXG4gICAgKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG1heF90cnkgPSAxMDAwO1xuICAgICAgICBjb25zdCBpbmRpY2VzID0gW107XG4gICAgICAgIGxldCBpID0gMCxcbiAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgc3NpdGVyID0gMCxcbiAgICAgICAgICAgIGlkeF9pID0gMCxcbiAgICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgIGZvciAoOyBzc2l0ZXIgPCBtYXhfdHJ5OyArK3NzaXRlcikge1xuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IG5lZWRfY250ICYmIHNzaXRlciA8IG1heF90cnk7ICkge1xuICAgICAgICAgICAgICAgIG9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWR4X2kgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlICghb2spIHtcbiAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZHhfaSA9IGluZGljZXNbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhfY250KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHhfaSA9PSBpbmRpY2VzW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcm9tX3N1YltpXSA9IGZyb21baWR4X2ldO1xuICAgICAgICAgICAgICAgIHRvX3N1YltpXSA9IHRvW2lkeF9pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWtlcm5lbC5jaGVja19zdWJzZXQoZnJvbV9zdWIsIHRvX3N1YiwgaSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNzaXRlcisrO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaSA9PSBuZWVkX2NudCAmJiBzc2l0ZXIgPCBtYXhfdHJ5O1xuICAgIH1cblxuICAgIGZpbmRfaW5saWVycyhcbiAgICAgICAga2VybmVsOiBob21vZ3JhcGh5MmQsXG4gICAgICAgIG1vZGVsOiBtYXRyaXhfdCxcbiAgICAgICAgZnJvbTogcG9pbnRfdFtdLFxuICAgICAgICB0bzogcG9pbnRfdFtdLFxuICAgICAgICBjb3VudDogbnVtYmVyLFxuICAgICAgICB0aHJlc2g6IG51bWJlcixcbiAgICAgICAgZXJyOiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5LFxuICAgICAgICBtYXNrOiBudW1iZXJbXVxuICAgICk6IG51bWJlciB7XG4gICAgICAgIGxldCBudW1pbmxpZXJzOiBudW1iZXIgPSAwLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBmID0gMDtcbiAgICAgICAgY29uc3QgdCA9IHRocmVzaCAqIHRocmVzaDtcblxuICAgICAgICBrZXJuZWwuZXJyb3IoZnJvbSwgdG8sIG1vZGVsLCBlcnIsIGNvdW50KTtcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgIGYgPSA8bnVtYmVyPig8dW5rbm93bj4oZXJyW2ldIDw9IHQpKTtcbiAgICAgICAgICAgIG1hc2tbaV0gPSBmO1xuICAgICAgICAgICAgbnVtaW5saWVycyArPSBmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1pbmxpZXJzO1xuICAgIH1cblxuICAgIHJhbnNhYyhcbiAgICAgICAgcGFyYW1zOiByYW5zYWNfcGFyYW1zX3QsXG4gICAgICAgIGtlcm5lbDogYW55LFxuICAgICAgICBmcm9tOiBwb2ludF90W10sXG4gICAgICAgIHRvOiBwb2ludF90W10sXG4gICAgICAgIGNvdW50OiBudW1iZXIsXG4gICAgICAgIG1vZGVsOiBtYXRyaXhfdCxcbiAgICAgICAgbWFzazogbWF0cml4X3QsXG4gICAgICAgIG1heF9pdGVyczogbnVtYmVyXG4gICAgKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0eXBlb2YgbWF4X2l0ZXJzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBtYXhfaXRlcnMgPSAxMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50IDwgcGFyYW1zLnNpemUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBjb25zdCBtb2RlbF9wb2ludHMgPSBwYXJhbXMuc2l6ZTtcbiAgICAgICAgbGV0IG5pdGVycyA9IG1heF9pdGVycyxcbiAgICAgICAgICAgIGl0ZXIgPSAwO1xuICAgICAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic2V0MDogYW55ID0gW107XG4gICAgICAgIGNvbnN0IHN1YnNldDE6IGFueSA9IFtdO1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtYyA9IG1vZGVsLmNvbHMsXG4gICAgICAgICAgICBtciA9IG1vZGVsLnJvd3M7XG4gICAgICAgIGNvbnN0IGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICBjb25zdCBtX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG1jICogbXIpIDw8IDMpO1xuICAgICAgICBjb25zdCBtc19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGNvdW50KTtcbiAgICAgICAgY29uc3QgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIGNvbnN0IE0gPSBuZXcgbWF0cml4X3QobWMsIG1yLCBkdCwgbV9idWZmLmRhdGEpO1xuICAgICAgICBjb25zdCBjdXJyX21hc2sgPSBuZXcgbWF0cml4X3QoY291bnQsIDEsIEpTRkVBVF9DT05TVEFOVFMuVThDMV90LCBtc19idWZmLmRhdGEpO1xuXG4gICAgICAgIGxldCBpbmxpZXJzX21heCA9IC0xLFxuICAgICAgICAgICAgbnVtaW5saWVycyA9IDA7XG4gICAgICAgIGxldCBubW9kZWxzID0gMDtcblxuICAgICAgICBjb25zdCBlcnIgPSBlcnJfYnVmZi5mMzI7XG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlXG4gICAgICAgIGlmIChjb3VudCA9PSBtb2RlbF9wb2ludHMpIHtcbiAgICAgICAgICAgIGlmIChrZXJuZWwucnVuKGZyb20sIHRvLCBNLCBjb3VudCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0tY291bnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXNrLmRhdGFbY291bnRdID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpdGVyIDwgbml0ZXJzOyArK2l0ZXIpIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHN1YnNldFxuICAgICAgICAgICAgZm91bmQgPSB0aGlzLmdldF9zdWJzZXQoa2VybmVsLCBmcm9tLCB0bywgbW9kZWxfcG9pbnRzLCBjb3VudCwgc3Vic2V0MCwgc3Vic2V0MSk7XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBubW9kZWxzID0ga2VybmVsLnJ1bihzdWJzZXQwLCBzdWJzZXQxLCBNLCBtb2RlbF9wb2ludHMpO1xuICAgICAgICAgICAgaWYgKG5tb2RlbHMgPD0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIFRPRE8gaGFuZGxlIG11bHRpbW9kZWwgb3V0cHV0XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIE0sIGZyb20sIHRvLCBjb3VudCwgcGFyYW1zLnRocmVzaCwgZXJyLCBjdXJyX21hc2suZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChudW1pbmxpZXJzID4gTWF0aC5tYXgoaW5saWVyc19tYXgsIG1vZGVsX3BvaW50cyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgTS5jb3B5X3RvKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBpbmxpZXJzX21heCA9IG51bWlubGllcnM7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2spIGN1cnJfbWFzay5jb3B5X3RvKG1hc2spO1xuICAgICAgICAgICAgICAgIG5pdGVycyA9IHBhcmFtcy51cGRhdGVfaXRlcnMoKGNvdW50IC0gbnVtaW5saWVycykgLyBjb3VudCwgbml0ZXJzKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtc19idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxtZWRzKFxuICAgICAgICBwYXJhbXM6IHJhbnNhY19wYXJhbXNfdCxcbiAgICAgICAga2VybmVsOiBhbnksXG4gICAgICAgIGZyb206IHBvaW50X3RbXSxcbiAgICAgICAgdG86IHBvaW50X3RbXSxcbiAgICAgICAgY291bnQ6IG51bWJlcixcbiAgICAgICAgbW9kZWw6IG1hdHJpeF90LFxuICAgICAgICBtYXNrOiBtYXRyaXhfdCxcbiAgICAgICAgbWF4X2l0ZXJzOiBudW1iZXJcbiAgICApOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXhfaXRlcnMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIG1heF9pdGVycyA9IDEwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnQgPCBwYXJhbXMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1vZGVsX3BvaW50cyA9IHBhcmFtcy5zaXplO1xuICAgICAgICBsZXQgbml0ZXJzID0gbWF4X2l0ZXJzLFxuICAgICAgICAgICAgaXRlciA9IDA7XG4gICAgICAgIGxldCByZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgY29uc3QgX21hdGggPSBuZXcganNmZWF0TmV4dC5tYXRoKCk7XG5cbiAgICAgICAgY29uc3Qgc3Vic2V0MDogYW55ID0gW107XG4gICAgICAgIGNvbnN0IHN1YnNldDE6IGFueSA9IFtdO1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtYyA9IG1vZGVsLmNvbHMsXG4gICAgICAgICAgICBtciA9IG1vZGVsLnJvd3M7XG4gICAgICAgIGNvbnN0IGR0ID0gbW9kZWwudHlwZSB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdDtcblxuICAgICAgICBjb25zdCBtX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoKG1jICogbXIpIDw8IDMpO1xuICAgICAgICBjb25zdCBtc19idWZmID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKGNvdW50KTtcbiAgICAgICAgY29uc3QgZXJyX2J1ZmYgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIoY291bnQgPDwgMik7XG4gICAgICAgIGNvbnN0IE0gPSBuZXcgbWF0cml4X3QobWMsIG1yLCBkdCwgbV9idWZmLmRhdGEpO1xuICAgICAgICBjb25zdCBjdXJyX21hc2sgPSBuZXcgbWF0cml4X3QoY291bnQsIDEsIEpTRkVBVF9DT05TVEFOVFMuVThfdCB8IEpTRkVBVF9DT05TVEFOVFMuQzFfdCwgbXNfYnVmZi5kYXRhKTtcblxuICAgICAgICBsZXQgbnVtaW5saWVycyA9IDA7XG4gICAgICAgIGxldCBubW9kZWxzID0gMDtcblxuICAgICAgICBjb25zdCBlcnIgPSBlcnJfYnVmZi5mMzI7XG4gICAgICAgIGxldCBtaW5fbWVkaWFuID0gMTAwMDAwMDAwMC4wLFxuICAgICAgICAgICAgc2lnbWEgPSAwLjAsXG4gICAgICAgICAgICBtZWRpYW4gPSAwLjA7XG5cbiAgICAgICAgcGFyYW1zLmVwcyA9IDAuNDU7XG4gICAgICAgIG5pdGVycyA9IHBhcmFtcy51cGRhdGVfaXRlcnMocGFyYW1zLmVwcywgbml0ZXJzKTtcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2VcbiAgICAgICAgaWYgKGNvdW50ID09IG1vZGVsX3BvaW50cykge1xuICAgICAgICAgICAgaWYgKGtlcm5lbC5ydW4oZnJvbSwgdG8sIE0sIGNvdW50KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1fYnVmZik7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1jb3VudCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2suZGF0YVtjb3VudF0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGVycl9idWZmKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGl0ZXIgPCBuaXRlcnM7ICsraXRlcikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc3Vic2V0XG4gICAgICAgICAgICBmb3VuZCA9IHRoaXMuZ2V0X3N1YnNldChrZXJuZWwsIGZyb20sIHRvLCBtb2RlbF9wb2ludHMsIGNvdW50LCBzdWJzZXQwLCBzdWJzZXQxKTtcbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihtX2J1ZmYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobXNfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihlcnJfYnVmZik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5tb2RlbHMgPSBrZXJuZWwucnVuKHN1YnNldDAsIHN1YnNldDEsIE0sIG1vZGVsX3BvaW50cyk7XG4gICAgICAgICAgICBpZiAobm1vZGVscyA8PSAwKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gVE9ETyBoYW5kbGUgbXVsdGltb2RlbCBvdXRwdXRcblxuICAgICAgICAgICAga2VybmVsLmVycm9yKGZyb20sIHRvLCBNLCBlcnIsIGNvdW50KTtcbiAgICAgICAgICAgIG1lZGlhbiA9IF9tYXRoLm1lZGlhbihlcnIsIDAsIGNvdW50IC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChtZWRpYW4gPCBtaW5fbWVkaWFuKSB7XG4gICAgICAgICAgICAgICAgbWluX21lZGlhbiA9IG1lZGlhbjtcbiAgICAgICAgICAgICAgICBNLmNvcHlfdG8obW9kZWwpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBzaWdtYSA9IDIuNSAqIDEuNDgyNiAqICgxICsgNS4wIC8gKGNvdW50IC0gbW9kZWxfcG9pbnRzKSkgKiBNYXRoLnNxcnQobWluX21lZGlhbik7XG4gICAgICAgICAgICBzaWdtYSA9IE1hdGgubWF4KHNpZ21hLCAwLjAwMSk7XG5cbiAgICAgICAgICAgIG51bWlubGllcnMgPSB0aGlzLmZpbmRfaW5saWVycyhrZXJuZWwsIG1vZGVsLCBmcm9tLCB0bywgY291bnQsIHNpZ21hLCBlcnIsIGN1cnJfbWFzay5kYXRhKTtcbiAgICAgICAgICAgIGlmIChtYXNrKSBjdXJyX21hc2suY29weV90byhtYXNrKTtcblxuICAgICAgICAgICAgcmVzdWx0ID0gbnVtaW5saWVycyA+PSBtb2RlbF9wb2ludHM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIobV9idWZmKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKG1zX2J1ZmYpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZXJyX2J1ZmYpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcblxuanNmZWF0TmV4dC5yYW5zYWNfcGFyYW1zX3QgPSByYW5zYWNfcGFyYW1zX3Q7XG5cbmpzZmVhdE5leHQuYWZmaW5lMmQgPSBhZmZpbmUyZDtcblxuanNmZWF0TmV4dC5ob21vZ3JhcGh5MmQgPSBob21vZ3JhcGh5MmQ7XG5cbmpzZmVhdE5leHQub3B0aWNhbF9mbG93X2xrID0gY2xhc3Mgb3B0aWNhbF9mbG93X2xrIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHVibGljIHNjaGFycl9kZXJpdjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IF9pbWdwcm9jID0gbmV3IGpzZmVhdE5leHQuaW1ncHJvYygpO1xuICAgICAgICB0aGlzLnNjaGFycl9kZXJpdiA9IF9pbWdwcm9jLnNjaGFycl9kZXJpdmF0aXZlcztcbiAgICB9XG5cbiAgICB0cmFjayhcbiAgICAgICAgcHJldl9weXI6IHB5cmFtaWRfdCxcbiAgICAgICAgY3Vycl9weXI6IHB5cmFtaWRfdCxcbiAgICAgICAgcHJldl94eTogRmxvYXQzMkFycmF5LFxuICAgICAgICBjdXJyX3h5OiBGbG9hdDMyQXJyYXksXG4gICAgICAgIGNvdW50OiBudW1iZXIsXG4gICAgICAgIHdpbl9zaXplOiBudW1iZXIsXG4gICAgICAgIG1heF9pdGVyOiBudW1iZXIsXG4gICAgICAgIHN0YXR1czogVWludDhBcnJheSxcbiAgICAgICAgZXBzOiBudW1iZXIsXG4gICAgICAgIG1pbl9laWdlbl90aHJlc2hvbGQ6IG51bWJlclxuICAgICk6IHZvaWQge1xuICAgICAgICBpZiAodHlwZW9mIG1heF9pdGVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBtYXhfaXRlciA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdHVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSBuZXcgVWludDhBcnJheShjb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGVwcyA9IDAuMDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtaW5fZWlnZW5fdGhyZXNob2xkID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBtaW5fZWlnZW5fdGhyZXNob2xkID0gMC4wMDAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFsZl93aW4gPSAod2luX3NpemUgLSAxKSAqIDAuNTtcbiAgICAgICAgY29uc3Qgd2luX2FyZWEgPSAod2luX3NpemUgKiB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICBjb25zdCB3aW5fYXJlYTIgPSB3aW5fYXJlYSA8PCAxO1xuICAgICAgICBjb25zdCBwcmV2X2ltZ3MgPSBwcmV2X3B5ci5kYXRhLFxuICAgICAgICAgICAgbmV4dF9pbWdzID0gY3Vycl9weXIuZGF0YTtcbiAgICAgICAgbGV0IGltZ19wcmV2ID0gcHJldl9pbWdzWzBdLmRhdGEsXG4gICAgICAgICAgICBpbWdfbmV4dCA9IG5leHRfaW1nc1swXS5kYXRhO1xuICAgICAgICBsZXQgdzAgPSBwcmV2X2ltZ3NbMF0uY29scyxcbiAgICAgICAgICAgIGgwID0gcHJldl9pbWdzWzBdLnJvd3MsXG4gICAgICAgICAgICBsdyA9IDAsXG4gICAgICAgICAgICBsaCA9IDA7XG5cbiAgICAgICAgY29uc3QgaXdpbl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHdpbl9hcmVhIDw8IDIpO1xuICAgICAgICBjb25zdCBkZXJpdl9pd2luX25vZGUgPSB0aGlzLmNhY2hlLmdldF9idWZmZXIod2luX2FyZWEyIDw8IDIpO1xuICAgICAgICBjb25zdCBkZXJpdl9sZXZfbm9kZSA9IHRoaXMuY2FjaGUuZ2V0X2J1ZmZlcigoaDAgKiAodzAgPDwgMSkpIDw8IDIpO1xuXG4gICAgICAgIGNvbnN0IGRlcml2X20gPSBuZXcgbWF0cml4X3QodzAsIGgwLCBKU0ZFQVRfQ09OU1RBTlRTLlMzMkMyX3QsIGRlcml2X2xldl9ub2RlLmRhdGEpO1xuXG4gICAgICAgIGNvbnN0IGl3aW5fYnVmID0gaXdpbl9ub2RlLmkzMjtcbiAgICAgICAgY29uc3QgZGVyaXZfaXdpbiA9IGRlcml2X2l3aW5fbm9kZS5pMzI7XG4gICAgICAgIGNvbnN0IGRlcml2X2xldiA9IGRlcml2X2xldl9ub2RlLmkzMjtcblxuICAgICAgICBsZXQgZHN0ZXAgPSAwLFxuICAgICAgICAgICAgc3JjID0gMCxcbiAgICAgICAgICAgIGRzcmMgPSAwLFxuICAgICAgICAgICAgaXB0ciA9IDAsXG4gICAgICAgICAgICBkaXB0ciA9IDAsXG4gICAgICAgICAgICBqcHRyID0gMDtcbiAgICAgICAgbGV0IGxldl9zYyA9IDAuMCxcbiAgICAgICAgICAgIHByZXZfeCA9IDAuMCxcbiAgICAgICAgICAgIHByZXZfeSA9IDAuMCxcbiAgICAgICAgICAgIG5leHRfeCA9IDAuMCxcbiAgICAgICAgICAgIG5leHRfeSA9IDAuMDtcbiAgICAgICAgbGV0IHByZXZfZGVsdGFfeCA9IDAuMCxcbiAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IDAuMCxcbiAgICAgICAgICAgIGRlbHRhX3ggPSAwLjAsXG4gICAgICAgICAgICBkZWx0YV95ID0gMC4wO1xuICAgICAgICBsZXQgaXByZXZfeCA9IDAsXG4gICAgICAgICAgICBpcHJldl95ID0gMCxcbiAgICAgICAgICAgIGluZXh0X3ggPSAwLFxuICAgICAgICAgICAgaW5leHRfeSA9IDA7XG4gICAgICAgIGxldCBpID0gMCxcbiAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgeCA9IDAsXG4gICAgICAgICAgICB5ID0gMCxcbiAgICAgICAgICAgIGxldmVsID0gMCxcbiAgICAgICAgICAgIHB0aWQgPSAwLFxuICAgICAgICAgICAgaXRlciA9IDA7XG4gICAgICAgIGxldCBicmRfdGwgPSAwLFxuICAgICAgICAgICAgYnJkX3IgPSAwLFxuICAgICAgICAgICAgYnJkX2IgPSAwO1xuICAgICAgICBsZXQgYSA9IDAuMCxcbiAgICAgICAgICAgIGIgPSAwLjAsXG4gICAgICAgICAgICBiMSA9IDAuMCxcbiAgICAgICAgICAgIGIyID0gMC4wO1xuXG4gICAgICAgIC8vIGZpeGVkIHBvaW50IG1hdGhcbiAgICAgICAgY29uc3QgV19CSVRTMTQgPSAxNDtcbiAgICAgICAgY29uc3QgV19CSVRTNCA9IDE0O1xuICAgICAgICBjb25zdCBXX0JJVFMxbTUgPSBXX0JJVFM0IC0gNTtcbiAgICAgICAgY29uc3QgV19CSVRTMW01MSA9IDEgPDwgKFdfQklUUzFtNSAtIDEpO1xuICAgICAgICBjb25zdCBXX0JJVFMxNF8gPSAxIDw8IFdfQklUUzE0O1xuICAgICAgICBjb25zdCBXX0JJVFM0MSA9IDEgPDwgKFdfQklUUzQgLSAxKTtcbiAgICAgICAgY29uc3QgRkxUX1NDQUxFID0gMS4wIC8gKDEgPDwgMjApO1xuICAgICAgICBsZXQgaXcwMCA9IDAsXG4gICAgICAgICAgICBpdzAxID0gMCxcbiAgICAgICAgICAgIGl3MTAgPSAwLFxuICAgICAgICAgICAgaXcxMSA9IDAsXG4gICAgICAgICAgICBpdmFsID0gMCxcbiAgICAgICAgICAgIGl4dmFsID0gMCxcbiAgICAgICAgICAgIGl5dmFsID0gMDtcbiAgICAgICAgbGV0IEExMSA9IDAuMCxcbiAgICAgICAgICAgIEExMiA9IDAuMCxcbiAgICAgICAgICAgIEEyMiA9IDAuMCxcbiAgICAgICAgICAgIEQgPSAwLjAsXG4gICAgICAgICAgICBtaW5fZWlnID0gMC4wO1xuXG4gICAgICAgIGNvbnN0IEZMVF9FUFNJTE9OID0gMC4wMDAwMDAxMTkyMDkyOTtcbiAgICAgICAgZXBzICo9IGVwcztcblxuICAgICAgICAvLyByZXNldCBzdGF0dXNcbiAgICAgICAgZm9yICg7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICBzdGF0dXNbaV0gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF4X2xldmVsID0gKHByZXZfcHlyLmxldmVscyAtIDEpIHwgMDtcbiAgICAgICAgbGV2ZWwgPSBtYXhfbGV2ZWw7XG5cbiAgICAgICAgZm9yICg7IGxldmVsID49IDA7IC0tbGV2ZWwpIHtcbiAgICAgICAgICAgIGxldl9zYyA9IDEuMCAvICgxIDw8IGxldmVsKTtcbiAgICAgICAgICAgIGx3ID0gdzAgPj4gbGV2ZWw7XG4gICAgICAgICAgICBsaCA9IGgwID4+IGxldmVsO1xuICAgICAgICAgICAgZHN0ZXAgPSBsdyA8PCAxO1xuICAgICAgICAgICAgaW1nX3ByZXYgPSBwcmV2X2ltZ3NbbGV2ZWxdLmRhdGE7XG4gICAgICAgICAgICBpbWdfbmV4dCA9IG5leHRfaW1nc1tsZXZlbF0uZGF0YTtcblxuICAgICAgICAgICAgYnJkX3IgPSAobHcgLSB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICAgICAgYnJkX2IgPSAobGggLSB3aW5fc2l6ZSkgfCAwO1xuXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGV2ZWwgZGVyaXZhdGl2ZXNcbiAgICAgICAgICAgIHRoaXMuc2NoYXJyX2Rlcml2KHByZXZfaW1nc1tsZXZlbF0sIGRlcml2X20pO1xuXG4gICAgICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggcG9pbnRzXG4gICAgICAgICAgICBmb3IgKHB0aWQgPSAwOyBwdGlkIDwgY291bnQ7ICsrcHRpZCkge1xuICAgICAgICAgICAgICAgIGkgPSBwdGlkIDw8IDE7XG4gICAgICAgICAgICAgICAgaiA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIHByZXZfeCA9IHByZXZfeHlbaV0gKiBsZXZfc2M7XG4gICAgICAgICAgICAgICAgcHJldl95ID0gcHJldl94eVtqXSAqIGxldl9zYztcblxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSBtYXhfbGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gcHJldl94O1xuICAgICAgICAgICAgICAgICAgICBuZXh0X3kgPSBwcmV2X3k7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gY3Vycl94eVtpXSAqIDIuMDtcbiAgICAgICAgICAgICAgICAgICAgbmV4dF95ID0gY3Vycl94eVtqXSAqIDIuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3Vycl94eVtpXSA9IG5leHRfeDtcbiAgICAgICAgICAgICAgICBjdXJyX3h5W2pdID0gbmV4dF95O1xuXG4gICAgICAgICAgICAgICAgcHJldl94IC09IGhhbGZfd2luO1xuICAgICAgICAgICAgICAgIHByZXZfeSAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBpcHJldl94ID0gcHJldl94IHwgMDtcbiAgICAgICAgICAgICAgICBpcHJldl95ID0gcHJldl95IHwgMDtcblxuICAgICAgICAgICAgICAgIC8vIGJvcmRlciBjaGVja1xuICAgICAgICAgICAgICAgIHggPSA8bnVtYmVyPig8dW5rbm93bj4oaXByZXZfeCA8PSBicmRfdGwgfHwgaXByZXZfeCA+PSBicmRfciB8fCBpcHJldl95IDw9IGJyZF90bCB8fCBpcHJldl95ID49IGJyZF9iKSk7XG4gICAgICAgICAgICAgICAgaWYgKHggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhID0gcHJldl94IC0gaXByZXZfeDtcbiAgICAgICAgICAgICAgICBiID0gcHJldl95IC0gaXByZXZfeTtcbiAgICAgICAgICAgICAgICBpdzAwID0gKCgxLjAgLSBhKSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XyArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MDEgPSAoYSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XyArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTAgPSAoKDEuMCAtIGEpICogYiAqIFdfQklUUzE0XyArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgIGl3MTEgPSBXX0JJVFMxNF8gLSBpdzAwIC0gaXcwMSAtIGl3MTA7XG5cbiAgICAgICAgICAgICAgICAoQTExID0gMC4wKSwgKEExMiA9IDAuMCksIChBMjIgPSAwLjApO1xuXG4gICAgICAgICAgICAgICAgLy8gZXh0cmFjdCB0aGUgcGF0Y2ggZnJvbSB0aGUgZmlyc3QgaW1hZ2UsIGNvbXB1dGUgY292YXJpYXRpb24gbWF0cml4IG9mIGRlcml2YXRpdmVzXG4gICAgICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHdpbl9zaXplOyArK3kpIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjID0gKCh5ICsgaXByZXZfeSkgKiBsdyArIGlwcmV2X3gpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZHNyYyA9IHNyYyA8PCAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlwdHIgPSAoeSAqIHdpbl9zaXplKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGRpcHRyID0gaXB0ciA8PCAxO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2luX3NpemU7ICsreCwgKytzcmMsICsraXB0ciwgZHNyYyArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdfcHJldltzcmNdICogaXcwMCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nX3ByZXZbc3JjICsgMV0gKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdfcHJldltzcmMgKyBsd10gKiBpdzEwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdfcHJldltzcmMgKyBsdyArIDFdICogaXcxMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoaXZhbCArIFdfQklUUzFtNTEpID4+IFdfQklUUzFtNTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXh2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2xldltkc3JjXSAqIGl3MDAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2xldltkc3JjICsgMl0gKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwXSAqIGl3MTAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2xldltkc3JjICsgZHN0ZXAgKyAyXSAqIGl3MTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpeHZhbCA9IChpeHZhbCArIFdfQklUUzQxKSA+PiBXX0JJVFM0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpeXZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVyaXZfbGV2W2RzcmMgKyAxXSAqIGl3MDAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcml2X2xldltkc3JjICsgM10gKiBpdzAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgMV0gKiBpdzEwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXJpdl9sZXZbZHNyYyArIGRzdGVwICsgM10gKiBpdzExO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXl2YWwgPSAoaXl2YWwgKyBXX0JJVFM0MSkgPj4gV19CSVRTNDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXdpbl9idWZbaXB0cl0gPSBpdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVyaXZfaXdpbltkaXB0cisrXSA9IGl4dmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVyaXZfaXdpbltkaXB0cisrXSA9IGl5dmFsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBMTEgKz0gaXh2YWwgKiBpeHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEExMiArPSBpeHZhbCAqIGl5dmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgQTIyICs9IGl5dmFsICogaXl2YWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBBMTEgKj0gRkxUX1NDQUxFO1xuICAgICAgICAgICAgICAgIEExMiAqPSBGTFRfU0NBTEU7XG4gICAgICAgICAgICAgICAgQTIyICo9IEZMVF9TQ0FMRTtcblxuICAgICAgICAgICAgICAgIEQgPSBBMTEgKiBBMjIgLSBBMTIgKiBBMTI7XG4gICAgICAgICAgICAgICAgbWluX2VpZyA9IChBMjIgKyBBMTEgLSBNYXRoLnNxcnQoKEExMSAtIEEyMikgKiAoQTExIC0gQTIyKSArIDQuMCAqIEExMiAqIEExMikpIC8gd2luX2FyZWEyO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pbl9laWcgPCBtaW5fZWlnZW5fdGhyZXNob2xkIHx8IEQgPCBGTFRfRVBTSUxPTikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBEID0gMS4wIC8gRDtcblxuICAgICAgICAgICAgICAgIG5leHRfeCAtPSBoYWxmX3dpbjtcbiAgICAgICAgICAgICAgICBuZXh0X3kgLT0gaGFsZl93aW47XG4gICAgICAgICAgICAgICAgcHJldl9kZWx0YV94ID0gMC4wO1xuICAgICAgICAgICAgICAgIHByZXZfZGVsdGFfeSA9IDAuMDtcblxuICAgICAgICAgICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgPCBtYXhfaXRlcjsgKytpdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXh0X3ggPSBuZXh0X3ggfCAwO1xuICAgICAgICAgICAgICAgICAgICBpbmV4dF95ID0gbmV4dF95IHwgMDtcblxuICAgICAgICAgICAgICAgICAgICB4ID0gPG51bWJlcj4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoPHVua25vd24+KGluZXh0X3ggPD0gYnJkX3RsIHx8IGluZXh0X3ggPj0gYnJkX3IgfHwgaW5leHRfeSA8PSBicmRfdGwgfHwgaW5leHRfeSA+PSBicmRfYikpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzW3B0aWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYSA9IG5leHRfeCAtIGluZXh0X3g7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBuZXh0X3kgLSBpbmV4dF95O1xuICAgICAgICAgICAgICAgICAgICBpdzAwID0gKCgxLjAgLSBhKSAqICgxLjAgLSBiKSAqIFdfQklUUzE0XyArIDAuNSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICBpdzAxID0gKGEgKiAoMS4wIC0gYikgKiBXX0JJVFMxNF8gKyAwLjUpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgaXcxMCA9ICgoMS4wIC0gYSkgKiBiICogV19CSVRTMTRfICsgMC41KSB8IDA7XG4gICAgICAgICAgICAgICAgICAgIGl3MTEgPSBXX0JJVFMxNF8gLSBpdzAwIC0gaXcwMSAtIGl3MTA7XG4gICAgICAgICAgICAgICAgICAgIChiMSA9IDAuMCksIChiMiA9IDAuMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHdpbl9zaXplOyArK3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpwdHIgPSAoKHkgKyBpbmV4dF95KSAqIGx3ICsgaW5leHRfeCkgfCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpcHRyID0gKHkgKiB3aW5fc2l6ZSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlwdHIgPSBpcHRyIDw8IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2luX3NpemU7ICsreCwgKytqcHRyLCArK2lwdHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nX25leHRbanB0cl0gKiBpdzAwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nX25leHRbanB0ciArIDFdICogaXcwMSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ19uZXh0W2pwdHIgKyBsd10gKiBpdzEwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nX25leHRbanB0ciArIGx3ICsgMV0gKiBpdzExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl2YWwgPSAoaXZhbCArIFdfQklUUzFtNTEpID4+IFdfQklUUzFtNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdmFsID0gaXZhbCAtIGl3aW5fYnVmW2lwdHJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjEgKz0gaXZhbCAqIGRlcml2X2l3aW5bZGlwdHIrK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjIgKz0gaXZhbCAqIGRlcml2X2l3aW5bZGlwdHIrK107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBiMSAqPSBGTFRfU0NBTEU7XG4gICAgICAgICAgICAgICAgICAgIGIyICo9IEZMVF9TQ0FMRTtcblxuICAgICAgICAgICAgICAgICAgICBkZWx0YV94ID0gKEExMiAqIGIyIC0gQTIyICogYjEpICogRDtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfeSA9IChBMTIgKiBiMSAtIEExMSAqIGIyKSAqIEQ7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ICs9IGRlbHRhX3g7XG4gICAgICAgICAgICAgICAgICAgIG5leHRfeSArPSBkZWx0YV95O1xuICAgICAgICAgICAgICAgICAgICBjdXJyX3h5W2ldID0gbmV4dF94ICsgaGFsZl93aW47XG4gICAgICAgICAgICAgICAgICAgIGN1cnJfeHlbal0gPSBuZXh0X3kgKyBoYWxmX3dpbjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGFfeCAqIGRlbHRhX3ggKyBkZWx0YV95ICogZGVsdGFfeSA8PSBlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlciA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGRlbHRhX3ggKyBwcmV2X2RlbHRhX3gpIDwgMC4wMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZGVsdGFfeSArIHByZXZfZGVsdGFfeSkgPCAwLjAxXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl94eVtpXSAtPSBkZWx0YV94ICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl94eVtqXSAtPSBkZWx0YV95ICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcmV2X2RlbHRhX3ggPSBkZWx0YV94O1xuICAgICAgICAgICAgICAgICAgICBwcmV2X2RlbHRhX3kgPSBkZWx0YV95O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gLy8gcG9pbnRzIGxvb3BcbiAgICAgICAgfSAvLyBsZXZlbHMgbG9vcFxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihpd2luX25vZGUpO1xuICAgICAgICB0aGlzLmNhY2hlLnB1dF9idWZmZXIoZGVyaXZfaXdpbl9ub2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZS5wdXRfYnVmZmVyKGRlcml2X2xldl9ub2RlKTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGNsYXNzIGtleXBvaW50X3Qge1xuICAgIHB1YmxpYyB4OiBudW1iZXI7XG4gICAgcHVibGljIHk6IG51bWJlcjtcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlcjtcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlcjtcbiAgICBwdWJsaWMgYW5nbGU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCBzY29yZTogbnVtYmVyID0gMCwgbGV2ZWw6IG51bWJlciA9IDAsIGFuZ2xlOiBudW1iZXIgPSAtMS4wKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHN3YXAoQTogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSB8IEZsb2F0NjRBcnJheSwgaTA6IG51bWJlciwgaTE6IG51bWJlciwgdDogbnVtYmVyKTogdm9pZCB7XG4gICAgdCA9IEFbaTBdO1xuICAgIEFbaTBdID0gQVtpMV07XG4gICAgQVtpMV0gPSB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlwb3QoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGEgPSBNYXRoLmFicyhhKTtcbiAgICBiID0gTWF0aC5hYnMoYik7XG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICAgIGIgLz0gYTtcbiAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnNxcnQoMS4wICsgYiAqIGIpO1xuICAgIH1cbiAgICBpZiAoYiA+IDApIHtcbiAgICAgICAgYSAvPSBiO1xuICAgICAgICByZXR1cm4gYiAqIE1hdGguc3FydCgxLjAgKyBhICogYSk7XG4gICAgfVxuICAgIHJldHVybiAwLjA7XG59XG4iLCJpbXBvcnQgeyBtYXRyaXhfdCB9IGZyb20gXCIuLi9tYXRyaXhfdC9tYXRyaXhfdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWF0bWF0aCB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgaWRlbnRpdHkoTTogbWF0cml4X3QsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFsdWUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNyYyA9IE0uZGF0YTtcbiAgICAgICAgY29uc3Qgcm93cyA9IE0ucm93cyxcbiAgICAgICAgICAgIGNvbHMgPSBNLmNvbHMsXG4gICAgICAgICAgICBjb2xzXzEgPSAoY29scyArIDEpIHwgMDtcbiAgICAgICAgbGV0IGxlbiA9IHJvd3MgKiBjb2xzO1xuICAgICAgICBsZXQgayA9IGxlbjtcbiAgICAgICAgd2hpbGUgKC0tbGVuID49IDApIHNyY1tsZW5dID0gMC4wO1xuICAgICAgICBsZW4gPSBrO1xuICAgICAgICBrID0gMDtcbiAgICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgICAgIHNyY1trXSA9IHZhbHVlO1xuICAgICAgICAgICAgayA9IGsgKyBjb2xzXzE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc3Bvc2UoQXQ6IG1hdHJpeF90LCBBOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICBsZXQgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIG5yb3dzID0gQS5yb3dzLFxuICAgICAgICAgICAgbmNvbHMgPSBBLmNvbHM7XG4gICAgICAgIGxldCBBaSA9IDAsXG4gICAgICAgICAgICBBdGkgPSAwLFxuICAgICAgICAgICAgcEF0ID0gMDtcbiAgICAgICAgY29uc3QgYWQgPSBBLmRhdGEsXG4gICAgICAgICAgICBhdGQgPSBBdC5kYXRhO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEF0aSArPSAxLCBBaSArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwQXQgPSBBdGk7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbmNvbHM7IHBBdCArPSBucm93cywgaisrKSBhdGRbcEF0XSA9IGFkW0FpICsgal07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseShDOiBtYXRyaXhfdCwgQTogbWF0cml4X3QsIEI6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIGxldCBpID0gMCxcbiAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgayA9IDA7XG4gICAgICAgIGxldCBBcCA9IDAsXG4gICAgICAgICAgICBwQSA9IDAsXG4gICAgICAgICAgICBwQiA9IDAsXG4gICAgICAgICAgICBwX0IgPSAwLFxuICAgICAgICAgICAgQ3AgPSAwO1xuICAgICAgICBjb25zdCBuY29scyA9IEEuY29scyxcbiAgICAgICAgICAgIG5yb3dzID0gQS5yb3dzLFxuICAgICAgICAgICAgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIGNvbnN0IGFkID0gQS5kYXRhLFxuICAgICAgICAgICAgYmQgPSBCLmRhdGEsXG4gICAgICAgICAgICBjZCA9IEMuZGF0YTtcbiAgICAgICAgbGV0IHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IHBBKyssIHBCICs9IG1jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCJ1xuICAgIG11bHRpcGx5X0FCdChDOiBtYXRyaXhfdCwgQTogbWF0cml4X3QsIEI6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIGxldCBpID0gMCxcbiAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgayA9IDA7XG4gICAgICAgIGxldCBBcCA9IDAsXG4gICAgICAgICAgICBwQSA9IDAsXG4gICAgICAgICAgICBwQiA9IDAsXG4gICAgICAgICAgICBDcCA9IDA7XG4gICAgICAgIGNvbnN0IG5jb2xzID0gQS5jb2xzLFxuICAgICAgICAgICAgbnJvd3MgPSBBLnJvd3MsXG4gICAgICAgICAgICBtcm93cyA9IEIucm93cztcbiAgICAgICAgY29uc3QgYWQgPSBBLmRhdGEsXG4gICAgICAgICAgICBiZCA9IEIuZGF0YSxcbiAgICAgICAgICAgIGNkID0gQy5kYXRhO1xuICAgICAgICBsZXQgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IEFwICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIGZvciAocEIgPSAwLCBqID0gMDsgaiA8IG1yb3dzOyBDcCsrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IHBBKyssIHBCKyssIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQScgKiBCXG4gICAgbXVsdGlwbHlfQXRCKEM6IG1hdHJpeF90LCBBOiBtYXRyaXhfdCwgQjogbWF0cml4X3QpOiB2b2lkIHtcbiAgICAgICAgbGV0IGkgPSAwLFxuICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICBrID0gMDtcbiAgICAgICAgbGV0IEFwID0gMCxcbiAgICAgICAgICAgIHBBID0gMCxcbiAgICAgICAgICAgIHBCID0gMCxcbiAgICAgICAgICAgIHBfQiA9IDAsXG4gICAgICAgICAgICBDcCA9IDA7XG4gICAgICAgIGNvbnN0IG5jb2xzID0gQS5jb2xzLFxuICAgICAgICAgICAgbnJvd3MgPSBBLnJvd3MsXG4gICAgICAgICAgICBtY29scyA9IEIuY29scztcbiAgICAgICAgY29uc3QgYWQgPSBBLmRhdGEsXG4gICAgICAgICAgICBiZCA9IEIuZGF0YSxcbiAgICAgICAgICAgIGNkID0gQy5kYXRhO1xuICAgICAgICBsZXQgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IEFwKyssIGkrKykge1xuICAgICAgICAgICAgZm9yIChwX0IgPSAwLCBqID0gMDsgaiA8IG1jb2xzOyBDcCsrLCBwX0IrKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEIgPSBwX0I7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5yb3dzOyBwQSArPSBuY29scywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEEnXG4gICAgbXVsdGlwbHlfQUF0KEM6IG1hdHJpeF90LCBBOiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICBsZXQgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIGsgPSAwO1xuICAgICAgICBsZXQgcENkaWFnID0gMCxcbiAgICAgICAgICAgIHBfQSA9IDAsXG4gICAgICAgICAgICBwQSA9IDAsXG4gICAgICAgICAgICBwQiA9IDAsXG4gICAgICAgICAgICBwQyA9IDAsXG4gICAgICAgICAgICBwQ3QgPSAwO1xuICAgICAgICBjb25zdCBuY29scyA9IEEuY29scyxcbiAgICAgICAgICAgIG5yb3dzID0gQS5yb3dzO1xuICAgICAgICBjb25zdCBhZCA9IEEuZGF0YSxcbiAgICAgICAgICAgIGNkID0gQy5kYXRhO1xuICAgICAgICBsZXQgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IHBDZGlhZyArPSBucm93cyArIDEsIHBfQSA9IHBBLCBpKyspIHtcbiAgICAgICAgICAgIHBDID0gcENkaWFnO1xuICAgICAgICAgICAgcEN0ID0gcENkaWFnO1xuICAgICAgICAgICAgcEIgPSBwX0E7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbnJvd3M7IHBDKyssIHBDdCArPSBucm93cywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBwX0E7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQSsrXSAqIGFkW3BCKytdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtwQ10gPSBzdW07XG4gICAgICAgICAgICAgICAgY2RbcEN0XSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEFcbiAgICBtdWx0aXBseV9BdEEoQzogbWF0cml4X3QsIEE6IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIGxldCBpID0gMCxcbiAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgayA9IDA7XG4gICAgICAgIGxldCBwX0EgPSAwLFxuICAgICAgICAgICAgcEEgPSAwLFxuICAgICAgICAgICAgcEIgPSAwLFxuICAgICAgICAgICAgcF9DID0gMCxcbiAgICAgICAgICAgIHBDID0gMCxcbiAgICAgICAgICAgIHBfQ0MgPSAwO1xuICAgICAgICBjb25zdCBuY29scyA9IEEuY29scyxcbiAgICAgICAgICAgIG5yb3dzID0gQS5yb3dzO1xuICAgICAgICBjb25zdCBhZCA9IEEuZGF0YSxcbiAgICAgICAgICAgIGNkID0gQy5kYXRhO1xuICAgICAgICBsZXQgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IHBfQyArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBwX0EgPSBpO1xuICAgICAgICAgICAgcF9DQyA9IHBfQyArIGk7XG4gICAgICAgICAgICBwQyA9IHBfQ0M7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbmNvbHM7IHBDKyssIHBfQ0MgKz0gbmNvbHMsIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gcF9BO1xuICAgICAgICAgICAgICAgIHBCID0gajtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5yb3dzOyBwQSArPSBuY29scywgcEIgKz0gbmNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYWRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtwQ10gPSBzdW07XG4gICAgICAgICAgICAgICAgY2RbcF9DQ10gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YXJpb3VzIHNtYWxsIG1hdHJpeCBvcGVyYXRpb25zXG4gICAgaWRlbnRpdHlfM3gzKE06IG1hdHJpeF90LCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gMTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkdCA9IE0uZGF0YTtcbiAgICAgICAgZHRbMF0gPSBkdFs0XSA9IGR0WzhdID0gdmFsdWU7XG4gICAgICAgIGR0WzFdID0gZHRbMl0gPSBkdFszXSA9IDA7XG4gICAgICAgIGR0WzVdID0gZHRbNl0gPSBkdFs3XSA9IDA7XG4gICAgfVxuXG4gICAgaW52ZXJ0XzN4Myhmcm9tOiBtYXRyaXhfdCwgdG86IG1hdHJpeF90KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IEEgPSBmcm9tLmRhdGEsXG4gICAgICAgICAgICBpbnZBID0gdG8uZGF0YTtcbiAgICAgICAgY29uc3QgdDEgPSBBWzRdO1xuICAgICAgICBjb25zdCB0MiA9IEFbOF07XG4gICAgICAgIGNvbnN0IHQ0ID0gQVs1XTtcbiAgICAgICAgY29uc3QgdDUgPSBBWzddO1xuICAgICAgICBjb25zdCB0OCA9IEFbMF07XG5cbiAgICAgICAgY29uc3QgdDkgPSB0OCAqIHQxO1xuICAgICAgICBjb25zdCB0MTEgPSB0OCAqIHQ0O1xuICAgICAgICBjb25zdCB0MTMgPSBBWzNdO1xuICAgICAgICBjb25zdCB0MTQgPSBBWzFdO1xuICAgICAgICBjb25zdCB0MTUgPSB0MTMgKiB0MTQ7XG4gICAgICAgIGNvbnN0IHQxNyA9IEFbMl07XG4gICAgICAgIGNvbnN0IHQxOCA9IHQxMyAqIHQxNztcbiAgICAgICAgY29uc3QgdDIwID0gQVs2XTtcbiAgICAgICAgY29uc3QgdDIxID0gdDIwICogdDE0O1xuICAgICAgICBjb25zdCB0MjMgPSB0MjAgKiB0MTc7XG4gICAgICAgIGNvbnN0IHQyNiA9IDEuMCAvICh0OSAqIHQyIC0gdDExICogdDUgLSB0MTUgKiB0MiArIHQxOCAqIHQ1ICsgdDIxICogdDQgLSB0MjMgKiB0MSk7XG4gICAgICAgIGludkFbMF0gPSAodDEgKiB0MiAtIHQ0ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzFdID0gLSh0MTQgKiB0MiAtIHQxNyAqIHQ1KSAqIHQyNjtcbiAgICAgICAgaW52QVsyXSA9IC0oLXQxNCAqIHQ0ICsgdDE3ICogdDEpICogdDI2O1xuICAgICAgICBpbnZBWzNdID0gLSh0MTMgKiB0MiAtIHQ0ICogdDIwKSAqIHQyNjtcbiAgICAgICAgaW52QVs0XSA9ICh0OCAqIHQyIC0gdDIzKSAqIHQyNjtcbiAgICAgICAgaW52QVs1XSA9IC0odDExIC0gdDE4KSAqIHQyNjtcbiAgICAgICAgaW52QVs2XSA9IC0oLXQxMyAqIHQ1ICsgdDEgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzddID0gLSh0OCAqIHQ1IC0gdDIxKSAqIHQyNjtcbiAgICAgICAgaW52QVs4XSA9ICh0OSAtIHQxNSkgKiB0MjY7XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCXG4gICAgbXVsdGlwbHlfM3gzKEM6IG1hdHJpeF90LCBBOiBtYXRyaXhfdCwgQjogbWF0cml4X3QpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgQ2QgPSBDLmRhdGEsXG4gICAgICAgICAgICBBZCA9IEEuZGF0YSxcbiAgICAgICAgICAgIEJkID0gQi5kYXRhO1xuICAgICAgICBjb25zdCBtMV8wID0gQWRbMF0sXG4gICAgICAgICAgICBtMV8xID0gQWRbMV0sXG4gICAgICAgICAgICBtMV8yID0gQWRbMl07XG4gICAgICAgIGNvbnN0IG0xXzMgPSBBZFszXSxcbiAgICAgICAgICAgIG0xXzQgPSBBZFs0XSxcbiAgICAgICAgICAgIG0xXzUgPSBBZFs1XTtcbiAgICAgICAgY29uc3QgbTFfNiA9IEFkWzZdLFxuICAgICAgICAgICAgbTFfNyA9IEFkWzddLFxuICAgICAgICAgICAgbTFfOCA9IEFkWzhdO1xuXG4gICAgICAgIGNvbnN0IG0yXzAgPSBCZFswXSxcbiAgICAgICAgICAgIG0yXzEgPSBCZFsxXSxcbiAgICAgICAgICAgIG0yXzIgPSBCZFsyXTtcbiAgICAgICAgY29uc3QgbTJfMyA9IEJkWzNdLFxuICAgICAgICAgICAgbTJfNCA9IEJkWzRdLFxuICAgICAgICAgICAgbTJfNSA9IEJkWzVdO1xuICAgICAgICBjb25zdCBtMl82ID0gQmRbNl0sXG4gICAgICAgICAgICBtMl83ID0gQmRbN10sXG4gICAgICAgICAgICBtMl84ID0gQmRbOF07XG5cbiAgICAgICAgQ2RbMF0gPSBtMV8wICogbTJfMCArIG0xXzEgKiBtMl8zICsgbTFfMiAqIG0yXzY7XG4gICAgICAgIENkWzFdID0gbTFfMCAqIG0yXzEgKyBtMV8xICogbTJfNCArIG0xXzIgKiBtMl83O1xuICAgICAgICBDZFsyXSA9IG0xXzAgKiBtMl8yICsgbTFfMSAqIG0yXzUgKyBtMV8yICogbTJfODtcbiAgICAgICAgQ2RbM10gPSBtMV8zICogbTJfMCArIG0xXzQgKiBtMl8zICsgbTFfNSAqIG0yXzY7XG4gICAgICAgIENkWzRdID0gbTFfMyAqIG0yXzEgKyBtMV80ICogbTJfNCArIG0xXzUgKiBtMl83O1xuICAgICAgICBDZFs1XSA9IG0xXzMgKiBtMl8yICsgbTFfNCAqIG0yXzUgKyBtMV81ICogbTJfODtcbiAgICAgICAgQ2RbNl0gPSBtMV82ICogbTJfMCArIG0xXzcgKiBtMl8zICsgbTFfOCAqIG0yXzY7XG4gICAgICAgIENkWzddID0gbTFfNiAqIG0yXzEgKyBtMV83ICogbTJfNCArIG0xXzggKiBtMl83O1xuICAgICAgICBDZFs4XSA9IG0xXzYgKiBtMl8yICsgbTFfNyAqIG0yXzUgKyBtMV84ICogbTJfODtcbiAgICB9XG5cbiAgICBtYXQzeDNfZGV0ZXJtaW5hbnQoTTogbWF0cml4X3QpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBtZCA9IE0uZGF0YTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIG1kWzBdICogbWRbNF0gKiBtZFs4XSAtXG4gICAgICAgICAgICBtZFswXSAqIG1kWzVdICogbWRbN10gLVxuICAgICAgICAgICAgbWRbM10gKiBtZFsxXSAqIG1kWzhdICtcbiAgICAgICAgICAgIG1kWzNdICogbWRbMl0gKiBtZFs3XSArXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzFdICogbWRbNV0gLVxuICAgICAgICAgICAgbWRbNl0gKiBtZFsyXSAqIG1kWzRdXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZGV0ZXJtaW5hbnRfM3gzKFxuICAgICAgICBNMTE6IG51bWJlcixcbiAgICAgICAgTTEyOiBudW1iZXIsXG4gICAgICAgIE0xMzogbnVtYmVyLFxuICAgICAgICBNMjE6IG51bWJlcixcbiAgICAgICAgTTIyOiBudW1iZXIsXG4gICAgICAgIE0yMzogbnVtYmVyLFxuICAgICAgICBNMzE6IG51bWJlcixcbiAgICAgICAgTTMyOiBudW1iZXIsXG4gICAgICAgIE0zMzogbnVtYmVyXG4gICAgKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIE0xMSAqIE0yMiAqIE0zMyAtIE0xMSAqIE0yMyAqIE0zMiAtIE0yMSAqIE0xMiAqIE0zMyArIE0yMSAqIE0xMyAqIE0zMiArIE0zMSAqIE0xMiAqIE0yMyAtIE0zMSAqIE0xMyAqIE0yMlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElEYXRhX1R5cGUsIGRhdGFfdHlwZSB9IGZyb20gXCIuLi9kYXRhX3R5cGUvZGF0YV90eXBlXCI7XG5pbXBvcnQgeyBkYXRhX3QgfSBmcm9tIFwiLi4vbm9kZV91dGlscy9kYXRhX3RcIjtcbmltcG9ydCB7IEpTRkVBVF9DT05TVEFOVFMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYXRyaXhfVCB7XG4gICAgY29sczogbnVtYmVyO1xuICAgIHJvd3M6IG51bWJlcjtcbiAgICB0eXBlOiBudW1iZXI7XG4gICAgY2hhbm5lbDogbnVtYmVyO1xuICAgIGRhdGE6IGFueTtcbiAgICBidWZmZXI6IGRhdGFfdDtcbiAgICBhbGxvY2F0ZTogKCkgPT4gdm9pZDtcbiAgICBjb3B5X3RvOiAob3RoZXI6IGFueSkgPT4gdm9pZDtcbiAgICByZXNpemU6IChjOiBudW1iZXIsIHI6IG51bWJlciwgY2g6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIG1hdHJpeF90IGltcGxlbWVudHMgSU1hdHJpeF9UIHtcbiAgICBwcml2YXRlIGR0OiBJRGF0YV9UeXBlO1xuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XG4gICAgcHVibGljIGNoYW5uZWw6IG51bWJlcjtcbiAgICBwdWJsaWMgY29sczogbnVtYmVyO1xuICAgIHB1YmxpYyByb3dzOiBudW1iZXI7XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwdWJsaWMgYnVmZmVyOiBkYXRhX3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihjOiBudW1iZXIsIHI6IG51bWJlciwgX2RhdGFfdHlwZTogbnVtYmVyLCBfZGF0YV9idWZmZXI/OiBkYXRhX3QpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZShfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMuZHQuX2dldF9jaGFubmVsKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jb2xzID0gYyB8IDA7XG4gICAgICAgIHRoaXMucm93cyA9IHIgfCAwO1xuICAgICAgICBpZiAodHlwZW9mIF9kYXRhX2J1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBfZGF0YV9idWZmZXI7XG4gICAgICAgICAgICAvLyBkYXRhIHVzZXIgYXNrZWQgZm9yXG4gICAgICAgICAgICB0aGlzLmRhdGEgPVxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuYnVmZmVyLnU4XG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdFxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5idWZmZXIuaTMyXG4gICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuYnVmZmVyLmYzMlxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmJ1ZmZlci5mNjQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxvY2F0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gY2xlYXIgcmVmZXJlbmNlc1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICBkZWxldGUgdGhpcy5idWZmZXI7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IGRhdGFfdCh0aGlzLmNvbHMgKiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodGhpcy50eXBlKSAqIHRoaXMuY2hhbm5lbCAqIHRoaXMucm93cyk7XG4gICAgICAgIHRoaXMuZGF0YSA9XG4gICAgICAgICAgICB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3RcbiAgICAgICAgICAgICAgICA/IHRoaXMuYnVmZmVyLnU4XG4gICAgICAgICAgICAgICAgOiB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90XG4gICAgICAgICAgICAgICAgICA/IHRoaXMuYnVmZmVyLmkzMlxuICAgICAgICAgICAgICAgICAgOiB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90XG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5idWZmZXIuZjMyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5idWZmZXIuZjY0O1xuICAgIH1cblxuICAgIGNvcHlfdG8ob3RoZXI6IElNYXRyaXhfVCk6IHZvaWQge1xuICAgICAgICBjb25zdCBvZCA9IG90aGVyLmRhdGEsXG4gICAgICAgICAgICB0ZCA9IHRoaXMuZGF0YTtcbiAgICAgICAgbGV0IGkgPSAwLFxuICAgICAgICAgICAgbiA9ICh0aGlzLmNvbHMgKiB0aGlzLnJvd3MgKiB0aGlzLmNoYW5uZWwpIHwgMDtcbiAgICAgICAgZm9yICg7IGkgPCBuIC0gNDsgaSArPSA0KSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICAgICAgb2RbaSArIDFdID0gdGRbaSArIDFdO1xuICAgICAgICAgICAgb2RbaSArIDJdID0gdGRbaSArIDJdO1xuICAgICAgICAgICAgb2RbaSArIDNdID0gdGRbaSArIDNdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzaXplKGM6IG51bWJlciwgcjogbnVtYmVyLCBjaDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0eXBlb2YgY2ggPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNoID0gdGhpcy5jaGFubmVsO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbG9jYXRlIGJ1ZmZlciBvbmx5IGlmIG5ldyBzaXplIGRvZXNudCBmaXRcbiAgICAgICAgY29uc3QgbmV3X3NpemUgPSBjICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiBjaCAqIHI7XG4gICAgICAgIGlmIChuZXdfc2l6ZSA+IHRoaXMuYnVmZmVyLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIHJhbnNhY19wYXJhbXNfdCB7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgdGhyZXNoOiBudW1iZXI7XG4gICAgcHVibGljIGVwczogbnVtYmVyO1xuICAgIHB1YmxpYyBwcm9iOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyID0gMCwgdGhyZXNoOiBudW1iZXIgPSAwLjUsIGVwczogbnVtYmVyID0gMC41LCBwcm9iOiBudW1iZXIgPSAwLjk5KSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMudGhyZXNoID0gdGhyZXNoO1xuICAgICAgICB0aGlzLmVwcyA9IGVwcztcbiAgICAgICAgdGhpcy5wcm9iID0gcHJvYjtcbiAgICB9XG4gICAgdXBkYXRlX2l0ZXJzKF9lcHM6IG51bWJlciwgbWF4X2l0ZXJzOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBudW0gPSBNYXRoLmxvZygxIC0gdGhpcy5wcm9iKTtcbiAgICAgICAgY29uc3QgZGVub20gPSBNYXRoLmxvZygxIC0gTWF0aC5wb3coMSAtIF9lcHMsIHRoaXMuc2l6ZSkpO1xuICAgICAgICByZXR1cm4gKGRlbm9tID49IDAgfHwgLW51bSA+PSBtYXhfaXRlcnMgKiAtZGVub20gPyBtYXhfaXRlcnMgOiBNYXRoLnJvdW5kKG51bSAvIGRlbm9tKSkgfCAwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElEYXRhX1QsIGRhdGFfdCB9IGZyb20gXCIuL2RhdGFfdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb29sX05vZGVfVCB7XG4gICAgcmVzaXplOiAoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfcG9vbF9ub2RlX3QgaW1wbGVtZW50cyBJUG9vbF9Ob2RlX1Qge1xuICAgIHB1YmxpYyBuZXh0OiBhbnk7XG4gICAgcHVibGljIGRhdGE/OiBJRGF0YV9UO1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIGJ1ZmZlcjogYW55O1xuICAgIHB1YmxpYyB1ODogVWludDhBcnJheTtcbiAgICBwdWJsaWMgaTMyOiBJbnQzMkFycmF5O1xuICAgIHB1YmxpYyBmMzI6IEZsb2F0MzJBcnJheTtcbiAgICBwdWJsaWMgZjY0OiBGbG9hdDY0QXJyYXk7XG5cbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGRhdGFfdChzaXplX2luX2J5dGVzKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kYXRhLnNpemU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5kYXRhLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy51OCA9IHRoaXMuZGF0YS51ODtcbiAgICAgICAgdGhpcy5pMzIgPSB0aGlzLmRhdGEuaTMyO1xuICAgICAgICB0aGlzLmYzMiA9IHRoaXMuZGF0YS5mMzI7XG4gICAgICAgIHRoaXMuZjY0ID0gdGhpcy5kYXRhLmY2NDtcbiAgICB9XG4gICAgcmVzaXplKHNpemVfaW5fYnl0ZXM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgSURhdGFfVCB7XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgdTg6IFVpbnQ4QXJyYXk7XG4gICAgaTMyOiBJbnQzMkFycmF5O1xuICAgIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIGY2NDogRmxvYXQ2NEFycmF5O1xufVxuXG5leHBvcnQgY2xhc3MgZGF0YV90IGltcGxlbWVudHMgSURhdGFfVCB7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgYnVmZmVyOiBBcnJheUJ1ZmZlcjtcbiAgICBwdWJsaWMgdTg6IFVpbnQ4QXJyYXk7XG4gICAgcHVibGljIGkzMjogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgZjMyOiBGbG9hdDMyQXJyYXk7XG4gICAgcHVibGljIGY2NDogRmxvYXQ2NEFycmF5O1xuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXM6IG51bWJlciwgYnVmZmVyPzogYW55KSB7XG4gICAgICAgIC8vIHdlIG5lZWQgYWxpZ24gc2l6ZSB0byBtdWx0aXBsZSBvZiA4XG4gICAgICAgIHRoaXMuc2l6ZSA9ICgoc2l6ZV9pbl9ieXRlcyArIDcpIHwgMCkgJiAtODtcbiAgICAgICAgaWYgKHR5cGVvZiBidWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuc2l6ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51OCA9IG5ldyBVaW50OEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5pMzIgPSBuZXcgSW50MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjMyID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZjY0ID0gbmV3IEZsb2F0NjRBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGJpdF9wYXR0ZXJuXzMxID0gW1xuICAgIDgsIC0zLCA5LCA1IC8qbWVhbiAoMCksIGNvcnJlbGF0aW9uICgwKSovLCA0LCAyLCA3LCAtMTIgLyptZWFuICgxLjEyNDYxZS0wNSksIGNvcnJlbGF0aW9uICgwLjA0Mzc1ODQpKi8sIC0xMSwgOSwgLTgsXG4gICAgMiAvKm1lYW4gKDMuMzczODJlLTA1KSwgY29ycmVsYXRpb24gKDAuMDYxNzQwOSkqLywgNywgLTEyLCAxMiwgLTEzIC8qbWVhbiAoNS42MjMwM2UtMDUpLCBjb3JyZWxhdGlvbiAoMC4wNjM2OTc3KSovLFxuICAgIDIsIC0xMywgMiwgMTIgLyptZWFuICgwLjAwMDEzNDk1MyksIGNvcnJlbGF0aW9uICgwLjA4NTA5OSkqLywgMSwgLTcsIDEsXG4gICAgNiAvKm1lYW4gKDAuMDAwNTI4NTY1KSwgY29ycmVsYXRpb24gKDAuMDg1NzE3NSkqLywgLTIsIC0xMCwgLTIsIC00IC8qbWVhbiAoMC4wMTg4ODIxKSwgY29ycmVsYXRpb24gKDAuMDk4NTc3NCkqLyxcbiAgICAtMTMsIC0xMywgLTExLCAtOCAvKm1lYW4gKDAuMDM2MzEzNSksIGNvcnJlbGF0aW9uICgwLjA4OTk2MTYpKi8sIC0xMywgLTMsIC0xMixcbiAgICAtOSAvKm1lYW4gKDAuMTIxODA2KSwgY29ycmVsYXRpb24gKDAuMDk5ODQ5KSovLCAxMCwgNCwgMTEsIDkgLyptZWFuICgwLjEyMjA2NSksIGNvcnJlbGF0aW9uICgwLjA5MzI4NSkqLywgLTEzLCAtOCxcbiAgICAtOCwgLTkgLyptZWFuICgwLjE2Mjc4NyksIGNvcnJlbGF0aW9uICgwLjA5NDI3NDgpKi8sIC0xMSwgNywgLTksIDEyIC8qbWVhbiAoMC4yMTU2MSksIGNvcnJlbGF0aW9uICgwLjA5NzQ0MzgpKi8sIDcsXG4gICAgNywgMTIsIDYgLyptZWFuICgwLjE2MDU4MyksIGNvcnJlbGF0aW9uICgwLjEzMDA2NCkqLywgLTQsIC01LCAtMywgMCAvKm1lYW4gKDAuMjI4MTcxKSwgY29ycmVsYXRpb24gKDAuMTMyOTk4KSovLFxuICAgIC0xMywgMiwgLTEyLCAtMyAvKm1lYW4gKDAuMDA5OTc1MjYpLCBjb3JyZWxhdGlvbiAoMC4xNDU5MjYpKi8sIC05LCAwLCAtNyxcbiAgICA1IC8qbWVhbiAoMC4xOTgyMzQpLCBjb3JyZWxhdGlvbiAoMC4xNDM2MzYpKi8sIDEyLCAtNiwgMTIsIC0xIC8qbWVhbiAoMC4wNjc2MjI2KSwgY29ycmVsYXRpb24gKDAuMTY2ODkpKi8sIC0zLCA2LFxuICAgIC0yLCAxMiAvKm1lYW4gKDAuMTY2ODQ3KSwgY29ycmVsYXRpb24gKDAuMTcxNjgyKSovLCAtNiwgLTEzLCAtNCwgLTggLyptZWFuICgwLjEwMTIxNSksIGNvcnJlbGF0aW9uICgwLjE3OTcxNikqLywgMTEsXG4gICAgLTEzLCAxMiwgLTggLyptZWFuICgwLjIwMDY0MSksIGNvcnJlbGF0aW9uICgwLjE5MjI3OSkqLywgNCwgNywgNSwgMSAvKm1lYW4gKDAuMjA1MTA2KSwgY29ycmVsYXRpb24gKDAuMTg2ODQ4KSovLCA1LFxuICAgIC0zLCAxMCwgLTMgLyptZWFuICgwLjIzNDkwOCksIGNvcnJlbGF0aW9uICgwLjE5MjMxOSkqLywgMywgLTcsIDYsIDEyIC8qbWVhbiAoMC4wNzA5OTY0KSwgY29ycmVsYXRpb24gKDAuMjEwODcyKSovLFxuICAgIC04LCAtNywgLTYsIC0yIC8qbWVhbiAoMC4wOTM5ODM0KSwgY29ycmVsYXRpb24gKDAuMjEyNTg5KSovLCAtMiwgMTEsIC0xLFxuICAgIC0xMCAvKm1lYW4gKDAuMTI3Nzc4KSwgY29ycmVsYXRpb24gKDAuMjA4NjYpKi8sIC0xMywgMTIsIC04LCAxMCAvKm1lYW4gKDAuMTQ3ODMpLCBjb3JyZWxhdGlvbiAoMC4yMDYzNTYpKi8sIC03LCAzLFxuICAgIC01LCAtMyAvKm1lYW4gKDAuMTgyMTQxKSwgY29ycmVsYXRpb24gKDAuMTk4OTQyKSovLCAtNCwgMiwgLTMsIDcgLyptZWFuICgwLjE4ODIzNyksIGNvcnJlbGF0aW9uICgwLjIxMzg0KSovLCAtMTAsXG4gICAgLTEyLCAtNiwgMTEgLyptZWFuICgwLjE0ODY1KSwgY29ycmVsYXRpb24gKDAuMjM1NzEpKi8sIDUsIC0xMiwgNiwgLTcgLyptZWFuICgwLjIyMjMxMiksIGNvcnJlbGF0aW9uICgwLjIzMzI0KSovLCA1LFxuICAgIC02LCA3LCAtMSAvKm1lYW4gKDAuMjI5MDgyKSwgY29ycmVsYXRpb24gKDAuMjMzODkpKi8sIDEsIDAsIDQsIC01IC8qbWVhbiAoMC4yNDE1NzcpLCBjb3JyZWxhdGlvbiAoMC4yMTUyODYpKi8sIDksXG4gICAgMTEsIDExLCAtMTMgLyptZWFuICgwLjAwMzM4NTA3KSwgY29ycmVsYXRpb24gKDAuMjUxMzczKSovLCA0LCA3LCA0LCAxMiAvKm1lYW4gKDAuMTMxMDA1KSwgY29ycmVsYXRpb24gKDAuMjU3NjIyKSovLFxuICAgIDIsIC0xLCA0LCA0IC8qbWVhbiAoMC4xNTI3NTUpLCBjb3JyZWxhdGlvbiAoMC4yNTUyMDUpKi8sIC00LCAtMTIsIC0yLCA3IC8qbWVhbiAoMC4xODI3NzEpLCBjb3JyZWxhdGlvbiAoMC4yNDQ4NjcpKi8sXG4gICAgLTgsIC01LCAtNywgLTEwIC8qbWVhbiAoMC4xODY4OTgpLCBjb3JyZWxhdGlvbiAoMC4yMzkwMSkqLywgNCwgMTEsIDksXG4gICAgMTIgLyptZWFuICgwLjIyNjIyNiksIGNvcnJlbGF0aW9uICgwLjI1ODI1NSkqLywgMCwgLTgsIDEsIC0xMyAvKm1lYW4gKDAuMDg5Nzg4NiksIGNvcnJlbGF0aW9uICgwLjI3NDgyNykqLywgLTEzLCAtMixcbiAgICAtOCwgMiAvKm1lYW4gKDAuMTQ4Nzc0KSwgY29ycmVsYXRpb24gKDAuMjgwNjUpKi8sIC0zLCAtMiwgLTIsIDMgLyptZWFuICgwLjE1MzA0OCksIGNvcnJlbGF0aW9uICgwLjI4MzA2MykqLywgLTYsIDksXG4gICAgLTQsIC05IC8qbWVhbiAoMC4xNjk1MjMpLCBjb3JyZWxhdGlvbiAoMC4yNzgyNDgpKi8sIDgsIDEyLCAxMCwgNyAvKm1lYW4gKDAuMjI1MzM3KSwgY29ycmVsYXRpb24gKDAuMjgyODUxKSovLCAwLCA5LFxuICAgIDEsIDMgLyptZWFuICgwLjIyNjY4NyksIGNvcnJlbGF0aW9uICgwLjI3ODczNCkqLywgNywgLTUsIDExLCAtMTAgLyptZWFuICgwLjAwNjkzODgyKSwgY29ycmVsYXRpb24gKDAuMzA1MTYxKSovLCAtMTMsXG4gICAgLTYsIC0xMSwgMCAvKm1lYW4gKDAuMDIyNzI4MyksIGNvcnJlbGF0aW9uICgwLjMwMDE4MSkqLywgMTAsIDcsIDEyLCAxIC8qbWVhbiAoMC4xMjU1MTcpLCBjb3JyZWxhdGlvbiAoMC4zMTA4OSkqLyxcbiAgICAtNiwgLTMsIC02LCAxMiAvKm1lYW4gKDAuMTMxNzQ4KSwgY29ycmVsYXRpb24gKDAuMzEyNzc5KSovLCAxMCwgLTksIDEyLFxuICAgIC00IC8qbWVhbiAoMC4xNDQ4MjcpLCBjb3JyZWxhdGlvbiAoMC4yOTI3OTcpKi8sIC0xMywgOCwgLTgsIC0xMiAvKm1lYW4gKDAuMTQ5MjAyKSwgY29ycmVsYXRpb24gKDAuMzA4OTE4KSovLCAtMTMsIDAsXG4gICAgLTgsIC00IC8qbWVhbiAoMC4xNjA5MDkpLCBjb3JyZWxhdGlvbiAoMC4zMTAwMTMpKi8sIDMsIDMsIDcsIDggLyptZWFuICgwLjE3Nzc1NSksIGNvcnJlbGF0aW9uICgwLjMwOTM5NCkqLywgNSwgNyxcbiAgICAxMCwgLTcgLyptZWFuICgwLjIxMjMzNyksIGNvcnJlbGF0aW9uICgwLjMxMDMxNSkqLywgLTEsIDcsIDEsIC0xMiAvKm1lYW4gKDAuMjE0NDI5KSwgY29ycmVsYXRpb24gKDAuMzExOTMzKSovLCAzLFxuICAgIC0xMCwgNSwgNiAvKm1lYW4gKDAuMjM1ODA3KSwgY29ycmVsYXRpb24gKDAuMzEzMTA0KSovLCAyLCAtNCwgMywgLTEwIC8qbWVhbiAoMC4wMDQ5NDgyNyksIGNvcnJlbGF0aW9uICgwLjM0NDk0OCkqLyxcbiAgICAtMTMsIDAsIC0xMywgNSAvKm1lYW4gKDAuMDU0OTE0NSksIGNvcnJlbGF0aW9uICgwLjM0NDY3NSkqLywgLTEzLCAtNywgLTEyLFxuICAgIDEyIC8qbWVhbiAoMC4xMDMzODUpLCBjb3JyZWxhdGlvbiAoMC4zNDI3MTUpKi8sIC0xMywgMywgLTExLCA4IC8qbWVhbiAoMC4xMzQyMjIpLCBjb3JyZWxhdGlvbiAoMC4zMjI5MjIpKi8sIC03LCAxMixcbiAgICAtNCwgNyAvKm1lYW4gKDAuMTUzMjg0KSwgY29ycmVsYXRpb24gKDAuMzM3MDYxKSovLCA2LCAtMTAsIDEyLCA4IC8qbWVhbiAoMC4xNTQ4ODEpLCBjb3JyZWxhdGlvbiAoMC4zMjkyNTcpKi8sIC05LFxuICAgIC0xLCAtNywgLTYgLyptZWFuICgwLjIwMDk2NyksIGNvcnJlbGF0aW9uICgwLjMzMzEyKSovLCAtMiwgLTUsIDAsIDEyIC8qbWVhbiAoMC4yMDE1MTgpLCBjb3JyZWxhdGlvbiAoMC4zNDA2MzUpKi8sXG4gICAgLTEyLCA1LCAtNywgNSAvKm1lYW4gKDAuMjA3ODA1KSwgY29ycmVsYXRpb24gKDAuMzM1NjMxKSovLCAzLCAtMTAsIDgsXG4gICAgLTEzIC8qbWVhbiAoMC4yMjQ0MzgpLCBjb3JyZWxhdGlvbiAoMC4zNDUwNCkqLywgLTcsIC03LCAtNCwgNSAvKm1lYW4gKDAuMjM5MzYxKSwgY29ycmVsYXRpb24gKDAuMzM4MDUzKSovLCAtMywgLTIsXG4gICAgLTEsIC03IC8qbWVhbiAoMC4yNDA3NDQpLCBjb3JyZWxhdGlvbiAoMC4zNDQzMjIpKi8sIDIsIDksIDUsIC0xMSAvKm1lYW4gKDAuMjQyOTQ5KSwgY29ycmVsYXRpb24gKDAuMzQxNDUpKi8sIC0xMSxcbiAgICAtMTMsIC01LCAtMTMgLyptZWFuICgwLjI0NDAyOCksIGNvcnJlbGF0aW9uICgwLjMzNjg2MSkqLywgLTEsIDYsIDAsIC0xIC8qbWVhbiAoMC4yNDc1NzEpLCBjb3JyZWxhdGlvbiAoMC4zNDM2ODQpKi8sXG4gICAgNSwgLTMsIDUsIDIgLyptZWFuICgwLjAwMDY5NzI1NiksIGNvcnJlbGF0aW9uICgwLjM1NzI2NSkqLywgLTQsIC0xMywgLTQsXG4gICAgMTIgLyptZWFuICgwLjAwMjEzNjc1KSwgY29ycmVsYXRpb24gKDAuMzczODI3KSovLCAtOSwgLTYsIC05LCA2IC8qbWVhbiAoMC4wMTI2ODU2KSwgY29ycmVsYXRpb24gKDAuMzczOTM4KSovLCAtMTIsXG4gICAgLTEwLCAtOCwgLTQgLyptZWFuICgwLjAxNTI0OTcpLCBjb3JyZWxhdGlvbiAoMC4zNjQyMzcpKi8sIDEwLCAyLCAxMixcbiAgICAtMyAvKm1lYW4gKDAuMDI5OTkzMyksIGNvcnJlbGF0aW9uICgwLjM0NTI5MikqLywgNywgMTIsIDEyLCAxMiAvKm1lYW4gKDAuMDMwNzI0MiksIGNvcnJlbGF0aW9uICgwLjM2NjI5OSkqLywgLTcsXG4gICAgLTEzLCAtNiwgNSAvKm1lYW4gKDAuMDUzNDk3NSksIGNvcnJlbGF0aW9uICgwLjM2ODM1NykqLywgLTQsIDksIC0zLCA0IC8qbWVhbiAoMC4wOTk4NjUpLCBjb3JyZWxhdGlvbiAoMC4zNzIyNzYpKi8sXG4gICAgNywgLTEsIDEyLCAyIC8qbWVhbiAoMC4xMTcwODMpLCBjb3JyZWxhdGlvbiAoMC4zNjQ1MjkpKi8sIC03LCA2LCAtNSwgMSAvKm1lYW4gKDAuMTI2MTI1KSwgY29ycmVsYXRpb24gKDAuMzY5NjA2KSovLFxuICAgIC0xMywgMTEsIC0xMiwgNSAvKm1lYW4gKDAuMTMwMzY0KSwgY29ycmVsYXRpb24gKDAuMzU4NTAyKSovLCAtMywgNywgLTIsXG4gICAgLTYgLyptZWFuICgwLjEzMTY5MSksIGNvcnJlbGF0aW9uICgwLjM3NTUzMSkqLywgNywgLTgsIDEyLCAtNyAvKm1lYW4gKDAuMTYwMTY2KSwgY29ycmVsYXRpb24gKDAuMzc5NTA4KSovLCAtMTMsIC03LFxuICAgIC0xMSwgLTEyIC8qbWVhbiAoMC4xNjc4NDgpLCBjb3JyZWxhdGlvbiAoMC4zNTMzNDMpKi8sIDEsIC0zLCAxMiwgMTIgLyptZWFuICgwLjE4MzM3OCksIGNvcnJlbGF0aW9uICgwLjM3MTkxNikqLywgMixcbiAgICAtNiwgMywgMCAvKm1lYW4gKDAuMjI4NzExKSwgY29ycmVsYXRpb24gKDAuMzcxNzYxKSovLCAtNCwgMywgLTIsIC0xMyAvKm1lYW4gKDAuMjQ3MjExKSwgY29ycmVsYXRpb24gKDAuMzY0MDYzKSovLFxuICAgIC0xLCAtMTMsIDEsIDkgLyptZWFuICgwLjI0OTMyNSksIGNvcnJlbGF0aW9uICgwLjM3ODEzOSkqLywgNywgMSwgOCxcbiAgICAtNiAvKm1lYW4gKDAuMDAwNjUyMjcyKSwgY29ycmVsYXRpb24gKDAuNDExNjgyKSovLCAxLCAtMSwgMywgMTIgLyptZWFuICgwLjAwMjQ4NTM4KSwgY29ycmVsYXRpb24gKDAuMzkyOTg4KSovLCA5LCAxLFxuICAgIDEyLCA2IC8qbWVhbiAoMC4wMjA2ODE1KSwgY29ycmVsYXRpb24gKDAuMzg2MTA2KSovLCAtMSwgLTksIC0xLCAzIC8qbWVhbiAoMC4wMzY0NDg1KSwgY29ycmVsYXRpb24gKDAuNDEwNzUyKSovLCAtMTMsXG4gICAgLTEzLCAtMTAsIDUgLyptZWFuICgwLjAzNzYwNjgpLCBjb3JyZWxhdGlvbiAoMC4zOTgzNzQpKi8sIDcsIDcsIDEwLCAxMiAvKm1lYW4gKDAuMDQyNDIwMiksIGNvcnJlbGF0aW9uICgwLjQwNTY2MykqLyxcbiAgICAxMiwgLTUsIDEyLCA5IC8qbWVhbiAoMC4wOTQyNjQ1KSwgY29ycmVsYXRpb24gKDAuNDEwNDIyKSovLCA2LCAzLCA3LCAxMSAvKm1lYW4gKDAuMTA3NCksIGNvcnJlbGF0aW9uICgwLjQxMzIyNCkqLyxcbiAgICA1LCAtMTMsIDYsIDEwIC8qbWVhbiAoMC4xMDkyNTYpLCBjb3JyZWxhdGlvbiAoMC40MDg2NDYpKi8sIDIsIC0xMiwgMiwgMyAvKm1lYW4gKDAuMTMxNjkxKSwgY29ycmVsYXRpb24gKDAuNDE2MDc2KSovLFxuICAgIDMsIDgsIDQsIC02IC8qbWVhbiAoMC4xNjUwODEpLCBjb3JyZWxhdGlvbiAoMC40MTc1NjkpKi8sIDIsIDYsIDEyLCAtMTMgLyptZWFuICgwLjE3MTg3NCksIGNvcnJlbGF0aW9uICgwLjQwODQ3MSkqLyxcbiAgICA5LCAtMTIsIDEwLCAzIC8qbWVhbiAoMC4xNzUxNDYpLCBjb3JyZWxhdGlvbiAoMC40MTI5NikqLywgLTgsIDQsIC03LCA5IC8qbWVhbiAoMC4xODM2ODIpLCBjb3JyZWxhdGlvbiAoMC40MDI5NTYpKi8sXG4gICAgLTExLCAxMiwgLTQsIC02IC8qbWVhbiAoMC4xODQ2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTYxMjUpKi8sIDEsIDEyLCAyLFxuICAgIC04IC8qbWVhbiAoMC4xOTE0ODcpLCBjb3JyZWxhdGlvbiAoMC4zODY2OTYpKi8sIDYsIC05LCA3LCAtNCAvKm1lYW4gKDAuMTkyNjY4KSwgY29ycmVsYXRpb24gKDAuMzk0NzcxKSovLCAyLCAzLCAzLFxuICAgIC0yIC8qbWVhbiAoMC4yMDAxNTcpLCBjb3JyZWxhdGlvbiAoMC40MDgzMDMpKi8sIDYsIDMsIDExLCAwIC8qbWVhbiAoMC4yMDQ1ODgpLCBjb3JyZWxhdGlvbiAoMC40MTE3NjIpKi8sIDMsIC0zLCA4LFxuICAgIC04IC8qbWVhbiAoMC4yMDU5MDQpLCBjb3JyZWxhdGlvbiAoMC40MTYyOTQpKi8sIDcsIDgsIDksIDMgLyptZWFuICgwLjIxMzIzNyksIGNvcnJlbGF0aW9uICgwLjQwOTMwNikqLywgLTExLCAtNSwgLTYsXG4gICAgLTQgLyptZWFuICgwLjI0MzQ0NCksIGNvcnJlbGF0aW9uICgwLjM5NTA2OSkqLywgLTEwLCAxMSwgLTUsIDEwIC8qbWVhbiAoMC4yNDc2NzIpLCBjb3JyZWxhdGlvbiAoMC40MTMzOTIpKi8sIC01LCAtOCxcbiAgICAtMywgMTIgLyptZWFuICgwLjI0Nzc0KSwgY29ycmVsYXRpb24gKDAuNDExNDE2KSovLCAtMTAsIDUsIC05LCAwIC8qbWVhbiAoMC4wMDIxMzY3NSksIGNvcnJlbGF0aW9uICgwLjQ1NDAwMykqLywgOCxcbiAgICAtMSwgMTIsIC02IC8qbWVhbiAoMC4wMjkzNjM1KSwgY29ycmVsYXRpb24gKDAuNDU1MzY4KSovLCA0LCAtNiwgNiwgLTExIC8qbWVhbiAoMC4wNDA0OTcxKSwgY29ycmVsYXRpb24gKDAuNDU3MzkzKSovLFxuICAgIC0xMCwgMTIsIC04LCA3IC8qbWVhbiAoMC4wNDgxMTA3KSwgY29ycmVsYXRpb24gKDAuNDQ4MzY0KSovLCA0LCAtMiwgNixcbiAgICA3IC8qbWVhbiAoMC4wNTA2NDEpLCBjb3JyZWxhdGlvbiAoMC40NTUwMTkpKi8sIC0yLCAwLCAtMiwgMTIgLyptZWFuICgwLjA1MjU5NzgpLCBjb3JyZWxhdGlvbiAoMC40NDMzOCkqLywgLTUsIC04LFxuICAgIC01LCAyIC8qbWVhbiAoMC4wNjI5NjY3KSwgY29ycmVsYXRpb24gKDAuNDU3MDk2KSovLCA3LCAtNiwgMTAsIDEyIC8qbWVhbiAoMC4wNjUzODQ2KSwgY29ycmVsYXRpb24gKDAuNDQ1NjIzKSovLCAtOSxcbiAgICAtMTMsIC04LCAtOCAvKm1lYW4gKDAuMDg1ODc0OSksIGNvcnJlbGF0aW9uICgwLjQ0OTc4OSkqLywgLTUsIC0xMywgLTUsXG4gICAgLTIgLyptZWFuICgwLjEyMjQwMiksIGNvcnJlbGF0aW9uICgwLjQ1MDIwMSkqLywgOCwgLTgsIDksIC0xMyAvKm1lYW4gKDAuMTI1NDE2KSwgY29ycmVsYXRpb24gKDAuNDUzMjI0KSovLCAtOSwgLTExLFxuICAgIC05LCAwIC8qbWVhbiAoMC4xMzAxMjgpLCBjb3JyZWxhdGlvbiAoMC40NTg3MjQpKi8sIDEsIC04LCAxLCAtMiAvKm1lYW4gKDAuMTMyNDY3KSwgY29ycmVsYXRpb24gKDAuNDQwMTMzKSovLCA3LCAtNCxcbiAgICA5LCAxIC8qbWVhbiAoMC4xMzI2OTIpLCBjb3JyZWxhdGlvbiAoMC40NTQpKi8sIC0yLCAxLCAtMSwgLTQgLyptZWFuICgwLjEzNTY5NSksIGNvcnJlbGF0aW9uICgwLjQ1NTczOSkqLywgMTEsIC02LFxuICAgIDEyLCAtMTEgLyptZWFuICgwLjE0MjkwNCksIGNvcnJlbGF0aW9uICgwLjQ0NjExNCkqLywgLTEyLCAtOSwgLTYsIDQgLyptZWFuICgwLjE0NjE2NSksIGNvcnJlbGF0aW9uICgwLjQ1MTQ3MykqLywgMyxcbiAgICA3LCA3LCAxMiAvKm1lYW4gKDAuMTQ3NjI3KSwgY29ycmVsYXRpb24gKDAuNDU2NjQzKSovLCA1LCA1LCAxMCwgOCAvKm1lYW4gKDAuMTUyOTAxKSwgY29ycmVsYXRpb24gKDAuNDU1MDM2KSovLCAwLFxuICAgIC00LCAyLCA4IC8qbWVhbiAoMC4xNjcwODMpLCBjb3JyZWxhdGlvbiAoMC40NTkzMTUpKi8sIC05LCAxMiwgLTUsIC0xMyAvKm1lYW4gKDAuMTczMjM0KSwgY29ycmVsYXRpb24gKDAuNDU0NzA2KSovLFxuICAgIDAsIDcsIDIsIDEyIC8qbWVhbiAoMC4xODMxMiksIGNvcnJlbGF0aW9uICgwLjQzMzg1NSkqLywgLTEsIDIsIDEsIDcgLyptZWFuICgwLjE4NTUwNCksIGNvcnJlbGF0aW9uICgwLjQ0MzgzOCkqLywgNSxcbiAgICAxMSwgNywgLTkgLyptZWFuICgwLjE4NTcwNiksIGNvcnJlbGF0aW9uICgwLjQ1MTEyMykqLywgMywgNSwgNiwgLTggLyptZWFuICgwLjE4ODk2OCksIGNvcnJlbGF0aW9uICgwLjQ1NTgwOCkqLywgLTEzLFxuICAgIC00LCAtOCwgOSAvKm1lYW4gKDAuMTkxNjY3KSwgY29ycmVsYXRpb24gKDAuNDU5MTI4KSovLCAtNSwgOSwgLTMsIC0zIC8qbWVhbiAoMC4xOTMxOTYpLCBjb3JyZWxhdGlvbiAoMC40NTgzNjQpKi8sXG4gICAgLTQsIC03LCAtMywgLTEyIC8qbWVhbiAoMC4xOTY1MzYpLCBjb3JyZWxhdGlvbiAoMC40NTU3ODIpKi8sIDYsIDUsIDgsIDAgLyptZWFuICgwLjE5NzIpLCBjb3JyZWxhdGlvbiAoMC40NTA0ODEpKi8sXG4gICAgLTcsIDYsIC02LCAxMiAvKm1lYW4gKDAuMTk5NDM4KSwgY29ycmVsYXRpb24gKDAuNDU4MTU2KSovLCAtMTMsIDYsIC01LFxuICAgIC0yIC8qbWVhbiAoMC4yMTEyMjQpLCBjb3JyZWxhdGlvbiAoMC40NDk1NDgpKi8sIDEsIC0xMCwgMywgMTAgLyptZWFuICgwLjIxMTcxOCksIGNvcnJlbGF0aW9uICgwLjQ0MDYwNikqLywgNCwgMSwgOCxcbiAgICAtNCAvKm1lYW4gKDAuMjEzMDM0KSwgY29ycmVsYXRpb24gKDAuNDQzMTc3KSovLCAtMiwgLTIsIDIsIC0xMyAvKm1lYW4gKDAuMjM0MzM0KSwgY29ycmVsYXRpb24gKDAuNDU1MzA0KSovLCAyLCAtMTIsXG4gICAgMTIsIDEyIC8qbWVhbiAoMC4yMzU2ODQpLCBjb3JyZWxhdGlvbiAoMC40NDM0MzYpKi8sIC0yLCAtMTMsIDAsIC02IC8qbWVhbiAoMC4yMzc2NzQpLCBjb3JyZWxhdGlvbiAoMC40NTI1MjUpKi8sIDQsXG4gICAgMSwgOSwgMyAvKm1lYW4gKDAuMjM5NjIpLCBjb3JyZWxhdGlvbiAoMC40NDQ4MjQpKi8sIC02LCAtMTAsIC0zLCAtNSAvKm1lYW4gKDAuMjQ4NDU5KSwgY29ycmVsYXRpb24gKDAuNDM5NjIxKSovLCAtMyxcbiAgICAtMTMsIC0xLCAxIC8qbWVhbiAoMC4yNDk1MDUpLCBjb3JyZWxhdGlvbiAoMC40NTY2NjYpKi8sIDcsIDUsIDEyLCAtMTEgLyptZWFuICgwLjAwMTE5MjA4KSwgY29ycmVsYXRpb24gKDAuNDk1NDY2KSovLFxuICAgIDQsIC0yLCA1LCAtNyAvKm1lYW4gKDAuMDAzNzIyNDUpLCBjb3JyZWxhdGlvbiAoMC40ODQyMTQpKi8sIC0xMywgOSwgLTksXG4gICAgLTUgLyptZWFuICgwLjAwNzQxMTE2KSwgY29ycmVsYXRpb24gKDAuNDk5ODU0KSovLCA3LCAxLCA4LCA2IC8qbWVhbiAoMC4wMjA4OTUyKSwgY29ycmVsYXRpb24gKDAuNDk5NzczKSovLCA3LCAtOCwgNyxcbiAgICA2IC8qbWVhbiAoMC4wMjIwMDg1KSwgY29ycmVsYXRpb24gKDAuNTAxNjA5KSovLCAtNywgLTQsIC03LCAxIC8qbWVhbiAoMC4wMjMzODA2KSwgY29ycmVsYXRpb24gKDAuNDk2NTY4KSovLCAtOCwgMTEsXG4gICAgLTcsIC04IC8qbWVhbiAoMC4wMjM2NTA1KSwgY29ycmVsYXRpb24gKDAuNDg5NzE5KSovLCAtMTMsIDYsIC0xMiwgLTggLyptZWFuICgwLjAyNjg3ODEpLCBjb3JyZWxhdGlvbiAoMC41MDM0ODcpKi8sXG4gICAgMiwgNCwgMywgOSAvKm1lYW4gKDAuMDMyMzMyNCksIGNvcnJlbGF0aW9uICgwLjUwMTkzOCkqLywgMTAsIC01LCAxMiwgMyAvKm1lYW4gKDAuMDM5OTIzNSksIGNvcnJlbGF0aW9uICgwLjQ5NDAyOSkqLyxcbiAgICAtNiwgLTUsIC02LCA3IC8qbWVhbiAoMC4wNDIwMTUzKSwgY29ycmVsYXRpb24gKDAuNDg2NTc5KSovLCA4LCAtMywgOSxcbiAgICAtOCAvKm1lYW4gKDAuMDU0ODAyMSksIGNvcnJlbGF0aW9uICgwLjQ4NDIzNykqLywgMiwgLTEyLCAyLCA4IC8qbWVhbiAoMC4wNjE2NjIyKSwgY29ycmVsYXRpb24gKDAuNDk2NjQyKSovLCAtMTEsIC0yLFxuICAgIC0xMCwgMyAvKm1lYW4gKDAuMDYyNzc1NSksIGNvcnJlbGF0aW9uICgwLjQ5ODU2MykqLywgLTEyLCAtMTMsIC03LCAtOSAvKm1lYW4gKDAuMDgyOTYyMiksIGNvcnJlbGF0aW9uICgwLjQ5NTQ5MSkqLyxcbiAgICAtMTEsIDAsIC0xMCwgLTUgLyptZWFuICgwLjA4NDMzNDIpLCBjb3JyZWxhdGlvbiAoMC40ODcxNDYpKi8sIDUsIC0zLCAxMSxcbiAgICA4IC8qbWVhbiAoMC4wOTI5OTM3KSwgY29ycmVsYXRpb24gKDAuNTAyMzE1KSovLCAtMiwgLTEzLCAtMSwgMTIgLyptZWFuICgwLjExMzMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTQxKSovLCAtMSwgLTgsXG4gICAgMCwgOSAvKm1lYW4gKDAuMTMyMTE5KSwgY29ycmVsYXRpb24gKDAuNDY3MjY4KSovLCAtMTMsIC0xMSwgLTEyLCAtNSAvKm1lYW4gKDAuMTM2MjY5KSwgY29ycmVsYXRpb24gKDAuNDk4NzcxKSovLFxuICAgIC0xMCwgLTIsIC0xMCwgMTEgLyptZWFuICgwLjE0MjE3MyksIGNvcnJlbGF0aW9uICgwLjQ5ODcxNCkqLywgLTMsIDksIC0yLFxuICAgIC0xMyAvKm1lYW4gKDAuMTQ0MTQxKSwgY29ycmVsYXRpb24gKDAuNDkxOTczKSovLCAyLCAtMywgMywgMiAvKm1lYW4gKDAuMTQ4OTIpLCBjb3JyZWxhdGlvbiAoMC41MDA3ODIpKi8sIC05LCAtMTMsXG4gICAgLTQsIDAgLyptZWFuICgwLjE1MDM3MSksIGNvcnJlbGF0aW9uICgwLjQ5ODIxMSkqLywgLTQsIDYsIC0zLCAtMTAgLyptZWFuICgwLjE1MjE1OSksIGNvcnJlbGF0aW9uICgwLjQ5NTU0NykqLywgLTQsXG4gICAgMTIsIC0yLCAtNyAvKm1lYW4gKDAuMTU2MTUyKSwgY29ycmVsYXRpb24gKDAuNDk2OTI1KSovLCAtNiwgLTExLCAtNCwgOSAvKm1lYW4gKDAuMTU3NDkpLCBjb3JyZWxhdGlvbiAoMC40OTkyMjIpKi8sXG4gICAgNiwgLTMsIDYsIDExIC8qbWVhbiAoMC4xNTkyMTEpLCBjb3JyZWxhdGlvbiAoMC41MDM4MjEpKi8sIC0xMywgMTEsIC01LFxuICAgIDUgLyptZWFuICgwLjE2MjQyNyksIGNvcnJlbGF0aW9uICgwLjUwMTkwNykqLywgMTEsIDExLCAxMiwgNiAvKm1lYW4gKDAuMTY2NTIpLCBjb3JyZWxhdGlvbiAoMC40OTc2MzIpKi8sIDcsIC01LCAxMixcbiAgICAtMiAvKm1lYW4gKDAuMTY5MTQxKSwgY29ycmVsYXRpb24gKDAuNDg0NDc0KSovLCAtMSwgMTIsIDAsIDcgLyptZWFuICgwLjE2OTQ1NiksIGNvcnJlbGF0aW9uICgwLjQ5NTMzOSkqLywgLTQsIC04LFxuICAgIC0zLCAtMiAvKm1lYW4gKDAuMTcxNDU3KSwgY29ycmVsYXRpb24gKDAuNDg3MjUxKSovLCAtNywgMSwgLTYsIDcgLyptZWFuICgwLjE3NSksIGNvcnJlbGF0aW9uICgwLjUwMDAyNCkqLywgLTEzLCAtMTIsXG4gICAgLTgsIC0xMyAvKm1lYW4gKDAuMTc1ODY2KSwgY29ycmVsYXRpb24gKDAuNDk3NTIzKSovLCAtNywgLTIsIC02LCAtOCAvKm1lYW4gKDAuMTc4MjczKSwgY29ycmVsYXRpb24gKDAuNTAxODU0KSovLCAtOCxcbiAgICA1LCAtNiwgLTkgLyptZWFuICgwLjE4MTEwNyksIGNvcnJlbGF0aW9uICgwLjQ5NDg4OCkqLywgLTUsIC0xLCAtNCwgNSAvKm1lYW4gKDAuMTkwMjI3KSwgY29ycmVsYXRpb24gKDAuNDgyNTU3KSovLFxuICAgIC0xMywgNywgLTgsIDEwIC8qbWVhbiAoMC4xOTY3MzkpLCBjb3JyZWxhdGlvbiAoMC40OTY1MDMpKi8sIDEsIDUsIDUsIC0xMyAvKm1lYW4gKDAuMTk5NzMpLCBjb3JyZWxhdGlvbiAoMC40OTk3NTkpKi8sXG4gICAgMSwgMCwgMTAsIC0xMyAvKm1lYW4gKDAuMjA0NDY1KSwgY29ycmVsYXRpb24gKDAuNDk4NzMpKi8sIDksIDEyLCAxMCwgLTEgLyptZWFuICgwLjIwOTMzNCksIGNvcnJlbGF0aW9uICgwLjQ5MDYzKSovLFxuICAgIDUsIC04LCAxMCwgLTkgLyptZWFuICgwLjIxMTEzNCksIGNvcnJlbGF0aW9uICgwLjUwMzAxMSkqLywgLTEsIDExLCAxLCAtMTMgLyptZWFuICgwLjIxMiksIGNvcnJlbGF0aW9uICgwLjQ5OTQxNCkqLyxcbiAgICAtOSwgLTMsIC02LCAyIC8qbWVhbiAoMC4yMTIxNjgpLCBjb3JyZWxhdGlvbiAoMC40ODA3MzkpKi8sIC0xLCAtMTAsIDEsXG4gICAgMTIgLyptZWFuICgwLjIxMjczMSksIGNvcnJlbGF0aW9uICgwLjUwMjUyMykqLywgLTEzLCAxLCAtOCwgLTEwIC8qbWVhbiAoMC4yMTMyNyksIGNvcnJlbGF0aW9uICgwLjQ4OTc4NikqLywgOCwgLTExLFxuICAgIDEwLCAtNiAvKm1lYW4gKDAuMjE0MTU5KSwgY29ycmVsYXRpb24gKDAuNDg4MjQ2KSovLCAyLCAtMTMsIDMsIC02IC8qbWVhbiAoMC4yMTY5OTMpLCBjb3JyZWxhdGlvbiAoMC41MDI4NykqLywgNyxcbiAgICAtMTMsIDEyLCAtOSAvKm1lYW4gKDAuMjIzNjM5KSwgY29ycmVsYXRpb24gKDAuNDcwNTAyKSovLCAtMTAsIC0xMCwgLTUsXG4gICAgLTcgLyptZWFuICgwLjIyNDA4OSksIGNvcnJlbGF0aW9uICgwLjUwMDg1MikqLywgLTEwLCAtOCwgLTgsIC0xMyAvKm1lYW4gKDAuMjI4NjY2KSwgY29ycmVsYXRpb24gKDAuNTAyNjI5KSovLCA0LCAtNixcbiAgICA4LCA1IC8qbWVhbiAoMC4yMjkwNiksIGNvcnJlbGF0aW9uICgwLjQ5ODMwNSkqLywgMywgMTIsIDgsIC0xMyAvKm1lYW4gKDAuMjMzMzc4KSwgY29ycmVsYXRpb24gKDAuNTAzODI1KSovLCAtNCwgMixcbiAgICAtMywgLTMgLyptZWFuICgwLjIzNDMyMyksIGNvcnJlbGF0aW9uICgwLjQ3NjY5MikqLywgNSwgLTEzLCAxMCwgLTEyIC8qbWVhbiAoMC4yMzYzOTIpLCBjb3JyZWxhdGlvbiAoMC40NzU0NjIpKi8sIDQsXG4gICAgLTEzLCA1LCAtMSAvKm1lYW4gKDAuMjM2ODQyKSwgY29ycmVsYXRpb24gKDAuNTA0MTMyKSovLCAtOSwgOSwgLTQsIDMgLyptZWFuICgwLjIzNjk3NyksIGNvcnJlbGF0aW9uICgwLjQ5NzczOSkqLywgMCxcbiAgICAzLCAzLCAtOSAvKm1lYW4gKDAuMjQzMTQpLCBjb3JyZWxhdGlvbiAoMC40OTkzOTgpKi8sIC0xMiwgMSwgLTYsIDEgLyptZWFuICgwLjI0MzI5NyksIGNvcnJlbGF0aW9uICgwLjQ4OTQ0NykqLywgMyxcbiAgICAyLCA0LCAtOCAvKm1lYW4gKDAuMDAxNTUxOTYpLCBjb3JyZWxhdGlvbiAoMC41NTM0OTYpKi8sIC0xMCwgLTEwLCAtMTAsXG4gICAgOSAvKm1lYW4gKDAuMDAyMzk1NDEpLCBjb3JyZWxhdGlvbiAoMC41NDI5NykqLywgOCwgLTEzLCAxMiwgMTIgLyptZWFuICgwLjAwMzQ0MTMpLCBjb3JyZWxhdGlvbiAoMC41NDQzNjEpKi8sIC04LFxuICAgIC0xMiwgLTYsIC01IC8qbWVhbiAoMC4wMDM1NjUpLCBjb3JyZWxhdGlvbiAoMC41NTEyMjUpKi8sIDIsIDIsIDMsIDcgLyptZWFuICgwLjAwODM1NTgzKSwgY29ycmVsYXRpb24gKDAuNTUyODUpKi8sXG4gICAgMTAsIDYsIDExLCAtOCAvKm1lYW4gKDAuMDA4ODUwNjUpLCBjb3JyZWxhdGlvbiAoMC41NDA5MTMpKi8sIDYsIDgsIDgsXG4gICAgLTEyIC8qbWVhbiAoMC4wMTAxNTUyKSwgY29ycmVsYXRpb24gKDAuNTUxMDg1KSovLCAtNywgMTAsIC02LCA1IC8qbWVhbiAoMC4wMTAyMjI3KSwgY29ycmVsYXRpb24gKDAuNTMzNjM1KSovLCAtMyxcbiAgICAtOSwgLTMsIDkgLyptZWFuICgwLjAxMTAyMTEpLCBjb3JyZWxhdGlvbiAoMC41NDMxMjEpKi8sIC0xLCAtMTMsIC0xLCA1IC8qbWVhbiAoMC4wMTEzNDczKSwgY29ycmVsYXRpb24gKDAuNTUwMTczKSovLFxuICAgIC0zLCAtNywgLTMsIDQgLyptZWFuICgwLjAxNDA5MTMpLCBjb3JyZWxhdGlvbiAoMC41NTQ3NzQpKi8sIC04LCAtMiwgLTgsXG4gICAgMyAvKm1lYW4gKDAuMDE3MDQ5KSwgY29ycmVsYXRpb24gKDAuNTU0NjEpKi8sIDQsIDIsIDEyLCAxMiAvKm1lYW4gKDAuMDE3NzgpLCBjb3JyZWxhdGlvbiAoMC41NDY5MjEpKi8sIDIsIC01LCAzLFxuICAgIDExIC8qbWVhbiAoMC4wMjI0MDIyKSwgY29ycmVsYXRpb24gKDAuNTQ5NjY3KSovLCA2LCAtOSwgMTEsIC0xMyAvKm1lYW4gKDAuMDI5MTYxKSwgY29ycmVsYXRpb24gKDAuNTQ2Mjk1KSovLCAzLCAtMSxcbiAgICA3LCAxMiAvKm1lYW4gKDAuMDMwMzA4MSksIGNvcnJlbGF0aW9uICgwLjU0ODU5OSkqLywgMTEsIC0xLCAxMiwgNCAvKm1lYW4gKDAuMDM1NTE1MSksIGNvcnJlbGF0aW9uICgwLjUyMzk0MykqLywgLTMsXG4gICAgMCwgLTMsIDYgLyptZWFuICgwLjA0MTc5MDQpLCBjb3JyZWxhdGlvbiAoMC41NDMzOTUpKi8sIDQsIC0xMSwgNCwgMTIgLyptZWFuICgwLjA0ODcyOTIpLCBjb3JyZWxhdGlvbiAoMC41NDI4MTgpKi8sXG4gICAgMiwgLTQsIDIsIDEgLyptZWFuICgwLjA1NzUxMjQpLCBjb3JyZWxhdGlvbiAoMC41NTQ4ODgpKi8sIC0xMCwgLTYsIC04LFxuICAgIDEgLyptZWFuICgwLjA1OTQyNDIpLCBjb3JyZWxhdGlvbiAoMC41NDQwMjYpKi8sIC0xMywgNywgLTExLCAxIC8qbWVhbiAoMC4wNTk3MzkxKSwgY29ycmVsYXRpb24gKDAuNTUwNTI0KSovLCAtMTMsXG4gICAgMTIsIC0xMSwgLTEzIC8qbWVhbiAoMC4wNjA4OTc0KSwgY29ycmVsYXRpb24gKDAuNTUzODMpKi8sIDYsIDAsIDExLCAtMTMgLyptZWFuICgwLjA2NTEyNiksIGNvcnJlbGF0aW9uICgwLjU1MjAwNikqLyxcbiAgICAwLCAtMSwgMSwgNCAvKm1lYW4gKDAuMDc0MjI0KSwgY29ycmVsYXRpb24gKDAuNTQ2MzcyKSovLCAtMTMsIDMsIC05LFxuICAgIC0yIC8qbWVhbiAoMC4wODA4NTkyKSwgY29ycmVsYXRpb24gKDAuNTU0ODc1KSovLCAtOSwgOCwgLTYsIC0zIC8qbWVhbiAoMC4wODgzMzc4KSwgY29ycmVsYXRpb24gKDAuNTUxMTc4KSovLCAtMTMsXG4gICAgLTYsIC04LCAtMiAvKm1lYW4gKDAuMDkwMTAzNSksIGNvcnJlbGF0aW9uICgwLjU0ODQ0NikqLywgNSwgLTksIDgsIDEwIC8qbWVhbiAoMC4wOTQ5ODQzKSwgY29ycmVsYXRpb24gKDAuNTU0Njk0KSovLFxuICAgIDIsIDcsIDMsIC05IC8qbWVhbiAoMC4wOTk0MTUyKSwgY29ycmVsYXRpb24gKDAuNTUwOTc5KSovLCAtMSwgLTYsIC0xLCAtMSAvKm1lYW4gKDAuMTAwNDUpLCBjb3JyZWxhdGlvbiAoMC41NTI3MTQpKi8sXG4gICAgOSwgNSwgMTEsIC0yIC8qbWVhbiAoMC4xMDA2ODYpLCBjb3JyZWxhdGlvbiAoMC41NTI1OTQpKi8sIDExLCAtMywgMTIsXG4gICAgLTggLyptZWFuICgwLjEwMTA5MSksIGNvcnJlbGF0aW9uICgwLjUzMjM5NCkqLywgMywgMCwgMywgNSAvKm1lYW4gKDAuMTAxMTQ3KSwgY29ycmVsYXRpb24gKDAuNTI1NTc2KSovLCAtMSwgNCwgMCxcbiAgICAxMCAvKm1lYW4gKDAuMTA1MjYzKSwgY29ycmVsYXRpb24gKDAuNTMxNDk4KSovLCAzLCAtNiwgNCwgNSAvKm1lYW4gKDAuMTEwNzg1KSwgY29ycmVsYXRpb24gKDAuNTQwNDkxKSovLCAtMTMsIDAsXG4gICAgLTEwLCA1IC8qbWVhbiAoMC4xMTI3OTgpLCBjb3JyZWxhdGlvbiAoMC41MzY1ODIpKi8sIDUsIDgsIDEyLCAxMSAvKm1lYW4gKDAuMTE0MTgxKSwgY29ycmVsYXRpb24gKDAuNTU1NzkzKSovLCA4LCA5LFxuICAgIDksIC02IC8qbWVhbiAoMC4xMTc0MzEpLCBjb3JyZWxhdGlvbiAoMC41NTM3NjMpKi8sIDcsIC00LCA4LCAtMTIgLyptZWFuICgwLjExODUyMiksIGNvcnJlbGF0aW9uICgwLjU1MzQ1MikqLywgLTEwLFxuICAgIDQsIC0xMCwgOSAvKm1lYW4gKDAuMTIwOTQpLCBjb3JyZWxhdGlvbiAoMC41NTQ3ODUpKi8sIDcsIDMsIDEyLCA0IC8qbWVhbiAoMC4xMjI1ODIpLCBjb3JyZWxhdGlvbiAoMC41NTU4MjUpKi8sIDksXG4gICAgLTcsIDEwLCAtMiAvKm1lYW4gKDAuMTI0OTc4KSwgY29ycmVsYXRpb24gKDAuNTQ5ODQ2KSovLCA3LCAwLCAxMiwgLTIgLyptZWFuICgwLjEyNzAwMiksIGNvcnJlbGF0aW9uICgwLjUzNzQ1MikqLyxcbiAgICAtMSwgLTYsIDAsIC0xMSAvKm1lYW4gKDAuMTI3MTQ4KSwgY29ycmVsYXRpb24gKDAuNTQ3NDAxKSovLFxuXTtcbiIsImltcG9ydCB7IG1hdHJpeF90IH0gZnJvbSBcIi4uL21hdHJpeF90L21hdHJpeF90XCI7XG5pbXBvcnQgeyBpbWdwcm9jIH0gZnJvbSBcIi4uL2ltZ3Byb2MvaW1ncHJvY1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjdGlmeV9wYXRjaChcbiAgICBzcmM6IG1hdHJpeF90LFxuICAgIGRzdDogbWF0cml4X3QsXG4gICAgYW5nbGU6IG51bWJlcixcbiAgICBweDogbnVtYmVyLFxuICAgIHB5OiBudW1iZXIsXG4gICAgcHNpemU6IG51bWJlcixcbiAgICBIOiBtYXRyaXhfdCxcbiAgICBpbWdQcm9jZXNzb3I6IGltZ3Byb2Ncbikge1xuICAgIGNvbnN0IGNvc2luZSA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICBjb25zdCBzaW5lID0gTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgSC5kYXRhWzBdID0gY29zaW5lO1xuICAgIEguZGF0YVsxXSA9IC1zaW5lO1xuICAgIEguZGF0YVsyXSA9ICgtY29zaW5lICsgc2luZSkgKiBwc2l6ZSAqIDAuNSArIHB4O1xuICAgIEguZGF0YVszXSA9IHNpbmU7XG4gICAgSC5kYXRhWzRdID0gY29zaW5lO1xuICAgIEguZGF0YVs1XSA9ICgtc2luZSAtIGNvc2luZSkgKiBwc2l6ZSAqIDAuNSArIHB5O1xuXG4gICAgaW1nUHJvY2Vzc29yLndhcnBfYWZmaW5lKHNyYywgZHN0LCBILCAxMjgpO1xufVxuIiwiaW1wb3J0IHsgbWF0cml4X3QgfSBmcm9tIFwiLi4vbWF0cml4X3QvbWF0cml4X3RcIjtcbmV4cG9ydCBjbGFzcyB0cmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8qYWZmaW5lXzNwb2ludF90cmFuc2Zvcm0obWF0LCBzcmNfeDAsIHNyY195MCwgZHN0X3gwLCBkc3RfeTAsXG4gICAgICAgIHNyY194MSwgc3JjX3kxLCBkc3RfeDEsIGRzdF95MSxcbiAgICAgICAgc3JjX3gyLCBzcmNfeTIsIGRzdF94MiwgZHN0X3kyKSB7XG4gICAgICAgIC8vIHdlIG5lZWQgbGluZWFyIGFsZ2VicmEgbW9kdWxlIGZpcnN0XG4gICAgfTsqL1xuXG4gICAgcGVyc3BlY3RpdmVfNHBvaW50X3RyYW5zZm9ybShcbiAgICAgICAgbW9kZWw6IG1hdHJpeF90LFxuICAgICAgICBzcmNfeDA6IG51bWJlcixcbiAgICAgICAgc3JjX3kwOiBudW1iZXIsXG4gICAgICAgIGRzdF94MDogbnVtYmVyLFxuICAgICAgICBkc3RfeTA6IG51bWJlcixcbiAgICAgICAgc3JjX3gxOiBudW1iZXIsXG4gICAgICAgIHNyY195MTogbnVtYmVyLFxuICAgICAgICBkc3RfeDE6IG51bWJlcixcbiAgICAgICAgZHN0X3kxOiBudW1iZXIsXG4gICAgICAgIHNyY194MjogbnVtYmVyLFxuICAgICAgICBzcmNfeTI6IG51bWJlcixcbiAgICAgICAgZHN0X3gyOiBudW1iZXIsXG4gICAgICAgIGRzdF95MjogbnVtYmVyLFxuICAgICAgICBzcmNfeDM6IG51bWJlcixcbiAgICAgICAgc3JjX3kzOiBudW1iZXIsXG4gICAgICAgIGRzdF94MzogbnVtYmVyLFxuICAgICAgICBkc3RfeTM6IG51bWJlclxuICAgICk6IHZvaWQge1xuICAgICAgICBsZXQgdDEgPSBzcmNfeDA7XG4gICAgICAgIGxldCB0MiA9IHNyY194MjtcbiAgICAgICAgbGV0IHQ0ID0gc3JjX3kxO1xuICAgICAgICBsZXQgdDUgPSB0MSAqIHQyICogdDQ7XG4gICAgICAgIGxldCB0NiA9IHNyY195MztcbiAgICAgICAgbGV0IHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgbGV0IHQ4ID0gdDIgKiB0NztcbiAgICAgICAgbGV0IHQ5ID0gc3JjX3kyO1xuICAgICAgICBsZXQgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgbGV0IHQxMSA9IHNyY194MTtcbiAgICAgICAgbGV0IHQxNCA9IHNyY195MDtcbiAgICAgICAgbGV0IHQxNSA9IHNyY194MztcbiAgICAgICAgbGV0IHQxNiA9IHQxNCAqIHQxNTtcbiAgICAgICAgbGV0IHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgbGV0IHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICBsZXQgdDIxID0gdDE1ICogdDQ7XG4gICAgICAgIGxldCB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgbGV0IHQyNSA9IHQyICogdDQ7XG4gICAgICAgIGxldCB0MjYgPSB0NiAqIHQyO1xuICAgICAgICBsZXQgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIGxldCB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgbGV0IHQzMCA9IDEuMCAvICh0MjEgLSB0MjQgLSB0MjUgKyB0MjYgLSB0MjcgKyB0MjgpO1xuICAgICAgICBsZXQgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIGxldCB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIGxldCB0NDEgPSB0NCAqIHQxO1xuICAgICAgICBsZXQgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIGxldCB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgbGV0IHQ0NiA9IHQxNiAqIHQ5O1xuICAgICAgICBsZXQgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIGxldCB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIGxldCB0NTUgPSB0NiAqIHQxNDtcbiAgICAgICAgY29uc3QgSHIwID0gLSh0OCAtIHQ1ICsgdDEwICogdDExIC0gdDExICogdDcgLSB0MTYgKiB0MiArIHQxOCAtIHQyMCArIHQyMSAqIHQyKSAqIHQzMDtcbiAgICAgICAgY29uc3QgSHIxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIGNvbnN0IEhyMiA9IHQxO1xuICAgICAgICBjb25zdCBIcjMgPSAoLXQ5ICogdDcgKyB0NDIgKyB0NDMgKiB0NCAtIHQxNiAqIHQ0ICsgdDQ2IC0gdDQ4ICsgdDI3ICogdDkgLSB0NTEpICogdDMwO1xuICAgICAgICBjb25zdCBIcjQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIGNvbnN0IEhyNSA9IHQxNDtcbiAgICAgICAgY29uc3QgSHI2ID0gKC10MTAgKyB0NDEgKyB0NDMgLSB0MzUgKyB0MjQgLSB0MjEgLSB0MjYgKyB0MjcpICogdDMwO1xuICAgICAgICBjb25zdCBIcjcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICB0MSA9IGRzdF94MDtcbiAgICAgICAgdDIgPSBkc3RfeDI7XG4gICAgICAgIHQ0ID0gZHN0X3kxO1xuICAgICAgICB0NSA9IHQxICogdDIgKiB0NDtcbiAgICAgICAgdDYgPSBkc3RfeTM7XG4gICAgICAgIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdDggPSB0MiAqIHQ3O1xuICAgICAgICB0OSA9IGRzdF95MjtcbiAgICAgICAgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdDExID0gZHN0X3gxO1xuICAgICAgICB0MTQgPSBkc3RfeTA7XG4gICAgICAgIHQxNSA9IGRzdF94MztcbiAgICAgICAgdDE2ID0gdDE0ICogdDE1O1xuICAgICAgICB0MTggPSB0MTYgKiB0MTE7XG4gICAgICAgIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB0MjEgPSB0MTUgKiB0NDtcbiAgICAgICAgdDI0ID0gdDE1ICogdDk7XG4gICAgICAgIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHQyNiA9IHQ2ICogdDI7XG4gICAgICAgIHQyNyA9IHQ2ICogdDExO1xuICAgICAgICB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdDMwID0gMS4wIC8gKHQyMSAtIHQyNCAtIHQyNSArIHQyNiAtIHQyNyArIHQyOCk7XG4gICAgICAgIHQzMiA9IHQxICogdDE1O1xuICAgICAgICB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHQ0MSA9IHQ0ICogdDE7XG4gICAgICAgIHQ0MiA9IHQ2ICogdDQxO1xuICAgICAgICB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdDQ2ID0gdDE2ICogdDk7XG4gICAgICAgIHQ0OCA9IHQxNCAqIHQ5ICogdDExO1xuICAgICAgICB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHQ1NSA9IHQ2ICogdDE0O1xuICAgICAgICBjb25zdCBIbDAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICBjb25zdCBIbDEgPSAodDUgLSB0OCAtIHQzMiAqIHQ0ICsgdDMyICogdDkgKyB0MTggLSB0MiAqIHQzNSArIHQyNyAqIHQyIC0gdDIwKSAqIHQzMDtcbiAgICAgICAgY29uc3QgSGwyID0gdDE7XG4gICAgICAgIGNvbnN0IEhsMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIGNvbnN0IEhsNCA9ICgtdDQyICsgdDQxICogdDkgLSB0NTUgKiB0MiArIHQ0NiAtIHQ0OCArIHQ1NSAqIHQxMSArIHQ1MSAtIHQyMSAqIHQ5KSAqIHQzMDtcbiAgICAgICAgY29uc3QgSGw1ID0gdDE0O1xuICAgICAgICBjb25zdCBIbDYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIGNvbnN0IEhsNyA9ICgtdDcgKyB0MTAgKyB0MTYgLSB0NDMgKyB0MjcgLSB0MjggLSB0MjEgKyB0MjUpICogdDMwO1xuXG4gICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgY29kZSBjb21wdXRlcyBSID0gSGwgKiBpbnZlcnNlIEhyXG4gICAgICAgIHQyID0gSHI0IC0gSHI3ICogSHI1O1xuICAgICAgICB0NCA9IEhyMCAqIEhyNDtcbiAgICAgICAgdDUgPSBIcjAgKiBIcjU7XG4gICAgICAgIHQ3ID0gSHIzICogSHIxO1xuICAgICAgICB0OCA9IEhyMiAqIEhyMztcbiAgICAgICAgdDEwID0gSHIxICogSHI2O1xuICAgICAgICBjb25zdCB0MTIgPSBIcjIgKiBIcjY7XG4gICAgICAgIHQxNSA9IDEuMCAvICh0NCAtIHQ1ICogSHI3IC0gdDcgKyB0OCAqIEhyNyArIHQxMCAqIEhyNSAtIHQxMiAqIEhyNCk7XG4gICAgICAgIHQxOCA9IC1IcjMgKyBIcjUgKiBIcjY7XG4gICAgICAgIGNvbnN0IHQyMyA9IC1IcjMgKiBIcjcgKyBIcjQgKiBIcjY7XG4gICAgICAgIHQyOCA9IC1IcjEgKyBIcjIgKiBIcjc7XG4gICAgICAgIGNvbnN0IHQzMSA9IEhyMCAtIHQxMjtcbiAgICAgICAgdDM1ID0gSHIwICogSHI3IC0gdDEwO1xuICAgICAgICB0NDEgPSAtSHIxICogSHI1ICsgSHIyICogSHI0O1xuICAgICAgICBjb25zdCB0NDQgPSB0NSAtIHQ4O1xuICAgICAgICBjb25zdCB0NDcgPSB0NCAtIHQ3O1xuICAgICAgICB0NDggPSB0MiAqIHQxNTtcbiAgICAgICAgY29uc3QgdDQ5ID0gdDI4ICogdDE1O1xuICAgICAgICBjb25zdCB0NTAgPSB0NDEgKiB0MTU7XG4gICAgICAgIGNvbnN0IG1hdCA9IG1vZGVsLmRhdGE7XG4gICAgICAgIG1hdFswXSA9IEhsMCAqIHQ0OCArIEhsMSAqICh0MTggKiB0MTUpIC0gSGwyICogKHQyMyAqIHQxNSk7XG4gICAgICAgIG1hdFsxXSA9IEhsMCAqIHQ0OSArIEhsMSAqICh0MzEgKiB0MTUpIC0gSGwyICogKHQzNSAqIHQxNSk7XG4gICAgICAgIG1hdFsyXSA9IC1IbDAgKiB0NTAgLSBIbDEgKiAodDQ0ICogdDE1KSArIEhsMiAqICh0NDcgKiB0MTUpO1xuICAgICAgICBtYXRbM10gPSBIbDMgKiB0NDggKyBIbDQgKiAodDE4ICogdDE1KSAtIEhsNSAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbNF0gPSBIbDMgKiB0NDkgKyBIbDQgKiAodDMxICogdDE1KSAtIEhsNSAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbNV0gPSAtSGwzICogdDUwIC0gSGw0ICogKHQ0NCAqIHQxNSkgKyBIbDUgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzZdID0gSGw2ICogdDQ4ICsgSGw3ICogKHQxOCAqIHQxNSkgLSB0MjMgKiB0MTU7XG4gICAgICAgIG1hdFs3XSA9IEhsNiAqIHQ0OSArIEhsNyAqICh0MzEgKiB0MTUpIC0gdDM1ICogdDE1O1xuICAgICAgICBtYXRbOF0gPSAtSGw2ICogdDUwIC0gSGw3ICogKHQ0NCAqIHQxNSkgKyB0NDcgKiB0MTU7XG4gICAgfVxuXG4gICAgaW52ZXJ0X2FmZmluZV90cmFuc2Zvcm0oc3JjOiBtYXRyaXhfdCwgZHN0OiBtYXRyaXhfdCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzcmNfZCA9IHNyYy5kYXRhO1xuICAgICAgICBjb25zdCBkc3RfZCA9IGRzdC5kYXRhO1xuXG4gICAgICAgIGNvbnN0IG0xMSA9IHNyY19kWzBdLFxuICAgICAgICAgICAgbTEyID0gc3JjX2RbMV0sXG4gICAgICAgICAgICBtMTMgPSBzcmNfZFsyXTtcbiAgICAgICAgY29uc3QgbTIxID0gc3JjX2RbM10sXG4gICAgICAgICAgICBtMjIgPSBzcmNfZFs0XSxcbiAgICAgICAgICAgIG0yMyA9IHNyY19kWzVdO1xuXG4gICAgICAgIGNvbnN0IGRldCA9IDEuMCAvIChtMTEgKiBtMjIgLSBtMTIgKiBtMjEpO1xuXG4gICAgICAgIGRzdF9kWzBdID0gZGV0ICogbTIyO1xuICAgICAgICBkc3RfZFsxXSA9IGRldCAqIC1tMTI7XG4gICAgICAgIGRzdF9kWzJdID0gZGV0ICogKG0xMiAqIG0yMyAtIG0xMyAqIG0yMik7XG5cbiAgICAgICAgZHN0X2RbM10gPSBkZXQgKiAtbTIxO1xuICAgICAgICBkc3RfZFs0XSA9IGRldCAqIG0xMTtcbiAgICAgICAgZHN0X2RbNV0gPSBkZXQgKiAobTEzICogbTIxIC0gbTExICogbTIzKTtcbiAgICB9XG5cbiAgICBpbnZlcnRfcGVyc3BlY3RpdmVfdHJhbnNmb3JtKHNyYzogbWF0cml4X3QsIGRzdDogbWF0cml4X3QpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3JjX2QgPSBzcmMuZGF0YTtcbiAgICAgICAgY29uc3QgZHN0X2QgPSBkc3QuZGF0YTtcbiAgICAgICAgY29uc3QgbTExID0gc3JjX2RbMF0sXG4gICAgICAgICAgICBtMTIgPSBzcmNfZFsxXSxcbiAgICAgICAgICAgIG0xMyA9IHNyY19kWzJdO1xuICAgICAgICBjb25zdCBtMjEgPSBzcmNfZFszXSxcbiAgICAgICAgICAgIG0yMiA9IHNyY19kWzRdLFxuICAgICAgICAgICAgbTIzID0gc3JjX2RbNV07XG4gICAgICAgIGNvbnN0IG0zMSA9IHNyY19kWzZdLFxuICAgICAgICAgICAgbTMyID0gc3JjX2RbN10sXG4gICAgICAgICAgICBtMzMgPSBzcmNfZFs4XTtcblxuICAgICAgICBjb25zdCBkZXQgPVxuICAgICAgICAgICAgMS4wIC8gKG0xMSAqIChtMjIgKiBtMzMgLSBtMjMgKiBtMzIpIC0gbTEyICogKG0yMSAqIG0zMyAtIG0yMyAqIG0zMSkgKyBtMTMgKiAobTIxICogbTMyIC0gbTIyICogbTMxKSk7XG5cbiAgICAgICAgZHN0X2RbMF0gPSBkZXQgKiAobTIyICogbTMzIC0gbTIzICogbTMyKTtcbiAgICAgICAgZHN0X2RbMV0gPSBkZXQgKiAobTEzICogbTMyIC0gbTEyICogbTMzKTtcbiAgICAgICAgZHN0X2RbMl0gPSBkZXQgKiAobTEyICogbTIzIC0gbTEzICogbTIyKTtcblxuICAgICAgICBkc3RfZFszXSA9IGRldCAqIChtMjMgKiBtMzEgLSBtMjEgKiBtMzMpO1xuICAgICAgICBkc3RfZFs0XSA9IGRldCAqIChtMTEgKiBtMzMgLSBtMTMgKiBtMzEpO1xuICAgICAgICBkc3RfZFs1XSA9IGRldCAqIChtMTMgKiBtMjEgLSBtMTEgKiBtMjMpO1xuXG4gICAgICAgIGRzdF9kWzZdID0gZGV0ICogKG0yMSAqIG0zMiAtIG0yMiAqIG0zMSk7XG4gICAgICAgIGRzdF9kWzddID0gZGV0ICogKG0xMiAqIG0zMSAtIG0xMSAqIG0zMik7XG4gICAgICAgIGRzdF9kWzhdID0gZGV0ICogKG0xMSAqIG0yMiAtIG0xMiAqIG0yMSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgdGhpcmRfY2hlY2ssIGlzX2xvY2FsX21heGltYSwgcGVyZm9ybV9vbmVfcG9pbnQsIGxldl90YWJsZV90IH0gZnJvbSBcIi4veWFwZV91dGlsc1wiO1xuaW1wb3J0IHsgbWF0cml4X3QgfSBmcm9tIFwiLi4vbWF0cml4X3QvbWF0cml4X3RcIjtcbmltcG9ydCB7IGtleXBvaW50X3QgfSBmcm9tIFwiLi4va2V5cG9pbnRfdC9rZXlwb2ludF90XCI7XG5leHBvcnQgY2xhc3MgeWFwZSB7XG4gICAgcHJpdmF0ZSBsZXZlbF90YWJsZXM6IGxldl90YWJsZV90W107XG4gICAgcHJpdmF0ZSB0YXU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbF90YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy50YXUgPSA3O1xuICAgIH1cblxuICAgIGluaXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBweXJhbWlkX2xldmVsczogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1pbihyYWRpdXMsIDcpO1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1heChyYWRpdXMsIDMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHB5cmFtaWRfbGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfdGFibGVzW2ldID0gbmV3IGxldl90YWJsZV90KHdpZHRoID4+IGksIGhlaWdodCA+PiBpLCByYWRpdXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGV0ZWN0KHNyYzogbWF0cml4X3QsIHBvaW50czoga2V5cG9pbnRfdFtdLCBib3JkZXI6IG51bWJlciA9IDQpOiBudW1iZXIge1xuICAgICAgICBjb25zdCB0ID0gdGhpcy5sZXZlbF90YWJsZXNbMF07XG4gICAgICAgIGNvbnN0IFIgPSB0LnJhZGl1cyB8IDAsXG4gICAgICAgICAgICBSbTEgPSAoUiAtIDEpIHwgMDtcbiAgICAgICAgY29uc3QgZGlycyA9IHQuZGlycztcbiAgICAgICAgY29uc3QgZGlyc19jb3VudCA9IHQuZGlyc19jb3VudCB8IDA7XG4gICAgICAgIGNvbnN0IG9wcG9zaXRlID0gZGlyc19jb3VudCA+PiAxO1xuICAgICAgICBjb25zdCBpbWcgPSBzcmMuZGF0YSxcbiAgICAgICAgICAgIHcgPSBzcmMuY29scyB8IDAsXG4gICAgICAgICAgICBoID0gc3JjLnJvd3MgfCAwLFxuICAgICAgICAgICAgaHcgPSB3ID4+IDE7XG4gICAgICAgIGNvbnN0IHNjb3JlcyA9IHQuc2NvcmVzO1xuICAgICAgICBsZXQgeCA9IDAsXG4gICAgICAgICAgICB5ID0gMCxcbiAgICAgICAgICAgIHJvdyA9IDAsXG4gICAgICAgICAgICByb3d4ID0gMCxcbiAgICAgICAgICAgIGlwID0gMCxcbiAgICAgICAgICAgIGltID0gMCxcbiAgICAgICAgICAgIGFic19zY29yZSA9IDAsXG4gICAgICAgICAgICBzY29yZSA9IDA7XG4gICAgICAgIGNvbnN0IHRhdSA9IHRoaXMudGF1IHwgMDtcbiAgICAgICAgbGV0IG51bWJlcl9vZl9wb2ludHMgPSAwLFxuICAgICAgICAgICAgcHQ7XG5cbiAgICAgICAgY29uc3Qgc3ggPSBNYXRoLm1heChSICsgMSwgYm9yZGVyKSB8IDA7XG4gICAgICAgIGNvbnN0IHN5ID0gTWF0aC5tYXgoUiArIDEsIGJvcmRlcikgfCAwO1xuICAgICAgICBjb25zdCBleCA9IE1hdGgubWluKHcgLSBSIC0gMiwgdyAtIGJvcmRlcikgfCAwO1xuICAgICAgICBjb25zdCBleSA9IE1hdGgubWluKGggLSBSIC0gMiwgaCAtIGJvcmRlcikgfCAwO1xuXG4gICAgICAgIHJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgICAgICBmb3IgKHkgPSBzeTsgeSA8IGV5OyArK3ksIHJvdyArPSB3KSB7XG4gICAgICAgICAgICBmb3IgKHggPSBzeCwgcm93eCA9IHJvdzsgeCA8IGV4OyArK3gsICsrcm93eCkge1xuICAgICAgICAgICAgICAgIChpcCA9IGltZ1tyb3d4XSArIHRhdSksIChpbSA9IGltZ1tyb3d4XSAtIHRhdSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW0gPCBpbWdbcm93eCArIFJdICYmIGltZ1tyb3d4ICsgUl0gPCBpcCAmJiBpbSA8IGltZ1tyb3d4IC0gUl0gJiYgaW1nW3Jvd3ggLSBSXSA8IGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3Jlc1tyb3d4XSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVyZm9ybV9vbmVfcG9pbnQoaW1nLCByb3d4LCBzY29yZXMsIGltLCBpcCwgZGlycywgb3Bwb3NpdGUsIGRpcnNfY291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxvY2FsIG1heGltYVxuICAgICAgICByb3cgPSAoc3kgKiB3ICsgc3gpIHwgMDtcbiAgICAgICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCByb3cgKz0gdykge1xuICAgICAgICAgICAgZm9yICh4ID0gc3gsIHJvd3ggPSByb3c7IHggPCBleDsgKyt4LCArK3Jvd3gpIHtcbiAgICAgICAgICAgICAgICBzY29yZSA9IHNjb3Jlc1tyb3d4XTtcbiAgICAgICAgICAgICAgICBhYnNfc2NvcmUgPSBNYXRoLmFicyhzY29yZSk7XG4gICAgICAgICAgICAgICAgaWYgKGFic19zY29yZSA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBwaXhlbCBpcyAwLCB0aGUgbmV4dCBvbmUgd2lsbCBub3QgYmUgZ29vZCBlbm91Z2guIFNraXAgaXQuXG4gICAgICAgICAgICAgICAgICAgICsreCwgKytyb3d4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlyZF9jaGVjayhzY29yZXMsIHJvd3gsIHcpID49IDMgJiYgaXNfbG9jYWxfbWF4aW1hKHNjb3Jlcywgcm93eCwgc2NvcmUsIGh3LCBSKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHQgPSBwb2ludHNbbnVtYmVyX29mX3BvaW50c107XG4gICAgICAgICAgICAgICAgICAgICAgICAocHQueCA9IHgpLCAocHQueSA9IHkpLCAocHQuc2NvcmUgPSBhYnNfc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKytudW1iZXJfb2ZfcG9pbnRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAoeCArPSBSbTEpLCAocm93eCArPSBSbTEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bWJlcl9vZl9wb2ludHM7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByZWNvbXB1dGVfZGlyZWN0aW9ucyhzdGVwOiBudW1iZXIsIGRpcnM6IEludDMyQXJyYXksIFI6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCB4LCB5O1xuXG4gICAgeCA9IFI7XG4gICAgZm9yICh5ID0gMDsgeSA8IHg7IHkrKywgaSsrKSB7XG4gICAgICAgIHggPSAoTWF0aC5zcXJ0KFIgKiBSIC0geSAqIHkpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSB4ICsgc3RlcCAqIHk7XG4gICAgfVxuICAgIGZvciAoeC0tOyB4IDwgeSAmJiB4ID49IDA7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KFIgKiBSIC0geCAqIHgpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSB4ICsgc3RlcCAqIHk7XG4gICAgfVxuICAgIGZvciAoOyAteCA8IHk7IHgtLSwgaSsrKSB7XG4gICAgICAgIHkgPSAoTWF0aC5zcXJ0KFIgKiBSIC0geCAqIHgpICsgMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSB4ICsgc3RlcCAqIHk7XG4gICAgfVxuICAgIGZvciAoeS0tOyB5ID49IDA7IHktLSwgaSsrKSB7XG4gICAgICAgIHggPSAoLU1hdGguc3FydChSICogUiAtIHkgKiB5KSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0geCArIHN0ZXAgKiB5O1xuICAgIH1cbiAgICBmb3IgKDsgeSA+IHg7IHktLSwgaSsrKSB7XG4gICAgICAgIHggPSAoLU1hdGguc3FydChSICogUiAtIHkgKiB5KSAtIDAuNSkgfCAwO1xuICAgICAgICBkaXJzW2ldID0geCArIHN0ZXAgKiB5O1xuICAgIH1cbiAgICBmb3IgKHgrKzsgeCA8PSAwOyB4KyssIGkrKykge1xuICAgICAgICB5ID0gKC1NYXRoLnNxcnQoUiAqIFIgLSB4ICogeCkgLSAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9IHggKyBzdGVwICogeTtcbiAgICB9XG4gICAgZm9yICg7IHggPCAteTsgeCsrLCBpKyspIHtcbiAgICAgICAgeSA9ICgtTWF0aC5zcXJ0KFIgKiBSIC0geCAqIHgpIC0gMC41KSB8IDA7XG4gICAgICAgIGRpcnNbaV0gPSB4ICsgc3RlcCAqIHk7XG4gICAgfVxuICAgIGZvciAoeSsrOyB5IDwgMDsgeSsrLCBpKyspIHtcbiAgICAgICAgeCA9IChNYXRoLnNxcnQoUiAqIFIgLSB5ICogeSkgKyAwLjUpIHwgMDtcbiAgICAgICAgZGlyc1tpXSA9IHggKyBzdGVwICogeTtcbiAgICB9XG5cbiAgICBkaXJzW2ldID0gZGlyc1swXTtcbiAgICBkaXJzW2kgKyAxXSA9IGRpcnNbMV07XG4gICAgcmV0dXJuIGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZF9jaGVjayhTYjogSW50MzJBcnJheSB8IG51bWJlcltdLCBvZmY6IG51bWJlciwgc3RlcDogbnVtYmVyKSB7XG4gICAgbGV0IG4gPSAwO1xuICAgIGlmIChTYltvZmYgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIDFdICE9IDApIG4rKztcbiAgICBpZiAoU2Jbb2ZmICsgc3RlcF0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwICsgMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgKyBzdGVwIC0gMV0gIT0gMCkgbisrO1xuICAgIGlmIChTYltvZmYgLSBzdGVwXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgKyAxXSAhPSAwKSBuKys7XG4gICAgaWYgKFNiW29mZiAtIHN0ZXAgLSAxXSAhPSAwKSBuKys7XG5cbiAgICByZXR1cm4gbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzX2xvY2FsX21heGltYShwOiBJbnQzMkFycmF5LCBvZmY6IG51bWJlciwgdjogbnVtYmVyLCBzdGVwOiBudW1iZXIsIG5laWdoYm9yaG9vZDogbnVtYmVyKSB7XG4gICAgbGV0IHgsIHk7XG5cbiAgICBpZiAodiA+IDApIHtcbiAgICAgICAgb2ZmIC09IHN0ZXAgKiBuZWlnaGJvcmhvb2Q7XG4gICAgICAgIGZvciAoeSA9IC1uZWlnaGJvcmhvb2Q7IHkgPD0gbmVpZ2hib3Job29kOyArK3kpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IC1uZWlnaGJvcmhvb2Q7IHggPD0gbmVpZ2hib3Job29kOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZiAocFtvZmYgKyB4XSA+IHYpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZiArPSBzdGVwO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2ZmIC09IHN0ZXAgKiBuZWlnaGJvcmhvb2Q7XG4gICAgICAgIGZvciAoeSA9IC1uZWlnaGJvcmhvb2Q7IHkgPD0gbmVpZ2hib3Job29kOyArK3kpIHtcbiAgICAgICAgICAgIGZvciAoeCA9IC1uZWlnaGJvcmhvb2Q7IHggPD0gbmVpZ2hib3Job29kOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZiAocFtvZmYgKyB4XSA8IHYpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZiArPSBzdGVwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyZm9ybV9vbmVfcG9pbnQoXG4gICAgSTogeyBbeDogc3RyaW5nXTogbnVtYmVyIH0sXG4gICAgeDogbnVtYmVyLFxuICAgIFNjb3JlczogSW50MzJBcnJheSxcbiAgICBJbTogbnVtYmVyLFxuICAgIElwOiBudW1iZXIsXG4gICAgZGlyczogYW55W10gfCBJbnQzMkFycmF5LFxuICAgIG9wcG9zaXRlOiBudW1iZXIsXG4gICAgZGlyc19uYjogbnVtYmVyXG4pIHtcbiAgICBsZXQgc2NvcmUgPSAwO1xuICAgIGxldCBhID0gMCxcbiAgICAgICAgYiA9IChvcHBvc2l0ZSAtIDEpIHwgMDtcbiAgICBsZXQgQSA9IDAsXG4gICAgICAgIEIwID0gMCxcbiAgICAgICAgQjEgPSAwLFxuICAgICAgICBCMiA9IDA7XG4gICAgbGV0IHN0YXRlID0gMDtcblxuICAgIC8vIFdFIEtOT1cgVEhBVCBOT1QoQSB+IEkwICYgQjEgfiBJMCk6XG4gICAgQSA9IElbeCArIGRpcnNbYV1dO1xuICAgIGlmIChBIDw9IElwKSB7XG4gICAgICAgIGlmIChBID49IEltKSB7XG4gICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgIEIwID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoQjAgPD0gSXApIHtcbiAgICAgICAgICAgICAgICBpZiAoQjAgPj0gSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGIrKztcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEIxID4gSXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQjIgPiBJcCkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoQjIgPCBJbSkgc3RhdGUgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9IC8vIEEgfiBJMCwgQjIgfiBJMFxuICAgICAgICAgICAgICAgICAgICB9IC8qIGlmICgoQjEgPCBJbSkpKi8gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEIyID4gSXApIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKEIyIDwgSW0pIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2Vsc2UgeyBTY29yZXNbeF0gPSAwOyByZXR1cm47IH0gLy8gQSB+IEkwLCBCMSB+IEkwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBCMCA8IEkwXG4gICAgICAgICAgICAgICAgYisrO1xuICAgICAgICAgICAgICAgIEIxID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKEIxID4gSXApIHtcbiAgICAgICAgICAgICAgICAgICAgYisrO1xuICAgICAgICAgICAgICAgICAgICBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQjIgPiBJcCkgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChCMiA8IEltKSBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEIxIDwgSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgYisrO1xuICAgICAgICAgICAgICAgICAgICBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQjIgPiBJcCkgc3RhdGUgPSA3O1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChCMiA8IEltKSBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSAvLyBBIH4gSTAsIEIyIH4gSTBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSAvLyBBIH4gSTAsIEIxIH4gSTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEEgPiBJMFxuICAgICAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgIGlmIChCMCA+IElwKSB7XG4gICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiKys7XG4gICAgICAgICAgICBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgaWYgKEIxID4gSXApIHtcbiAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGIrKztcbiAgICAgICAgICAgIEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICBpZiAoQjIgPiBJcCkge1xuICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUgPSAxO1xuICAgICAgICB9XG4gICAgfSAvLyBBIDwgSTBcbiAgICBlbHNlIHtcbiAgICAgICAgQjAgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgaWYgKEIwIDwgSW0pIHtcbiAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYisrO1xuICAgICAgICBCMSA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICBpZiAoQjEgPCBJbSkge1xuICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBiKys7XG4gICAgICAgIEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgIGlmIChCMiA8IEltKSB7XG4gICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGEgPSAxOyBhIDw9IG9wcG9zaXRlOyBhKyspIHtcbiAgICAgICAgQSA9IElbeCArIGRpcnNbYV1dO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoQSA+IElwKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7XG4gICAgICAgICAgICAgICAgICAgIGIrKztcbiAgICAgICAgICAgICAgICAgICAgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEIyIDwgSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gQSArIEIxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEEgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQjEgPiBJcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoQjIgPiBJcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyO1xuICAgICAgICAgICAgICAgICAgICBiKys7XG4gICAgICAgICAgICAgICAgICAgIEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChCMiA+IElwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlIC09IEEgKyBCMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEEgfiBJMFxuICAgICAgICAgICAgICAgIGlmIChCMSA8PSBJcCkge1xuICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChCMiA8PSBJcCkge1xuICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7XG4gICAgICAgICAgICAgICAgYisrO1xuICAgICAgICAgICAgICAgIEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKEIyID4gSXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gQSArIEIxO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoQjIgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBBICsgQjE7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmIChBIDwgSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjtcbiAgICAgICAgICAgICAgICAgICAgYisrO1xuICAgICAgICAgICAgICAgICAgICBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQjIgPiBJcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBBICsgQjE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoQSA+IElwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCMSA8IEltKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChCMiA8IEltKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7XG4gICAgICAgICAgICAgICAgICAgIGIrKztcbiAgICAgICAgICAgICAgICAgICAgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEIyIDwgSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gQSArIEIxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKEIxID49IEltKSB7XG4gICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEIyID49IEltKSB7XG4gICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjtcbiAgICAgICAgICAgICAgICBiKys7XG4gICAgICAgICAgICAgICAgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoQjIgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBBICsgQjE7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChCMiA+IElwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlIC09IEEgKyBCMTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSA3O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKEEgPiBJcCkge1xuICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7XG4gICAgICAgICAgICAgICAgYisrO1xuICAgICAgICAgICAgICAgIEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgaWYgKEEgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQjIgPiBJcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBBICsgQjE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoQjIgPiBJcCkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBBICsgQjE7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChCMiA8IEltKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlIC09IEEgKyBCMTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSAvLyBBIH4gSTAsIEIyIH4gSTBcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmIChBIDwgSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyO1xuICAgICAgICAgICAgICAgIGIrKztcbiAgICAgICAgICAgICAgICBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmIChBID4gSXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEIyIDwgSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gQSArIEIxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKEIyID4gSXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gQSArIEIxO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoQjIgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBBICsgQjE7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGlmIChBID4gSXApIHtcbiAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoQSA8IEltKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7XG4gICAgICAgICAgICAgICAgICAgIGIrKztcbiAgICAgICAgICAgICAgICAgICAgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEIyID4gSXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gQSArIEIxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEIyID49IEltKSB7XG4gICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQjEgPSBCMjtcbiAgICAgICAgICAgICAgICBiKys7XG4gICAgICAgICAgICAgICAgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICBpZiAoQjIgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBBICsgQjE7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChCMiA+IElwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlIC09IEEgKyBCMTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSA3O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKEEgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChBID4gSXApIHtcbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjtcbiAgICAgICAgICAgICAgICAgICAgYisrO1xuICAgICAgICAgICAgICAgICAgICBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQjIgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBBICsgQjE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBIH4gSTBcbiAgICAgICAgICAgICAgICBpZiAoQjIgPD0gSXApIHtcbiAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBCMSA9IEIyO1xuICAgICAgICAgICAgICAgIGIrKztcbiAgICAgICAgICAgICAgICBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgIGlmIChCMiA+IElwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlIC09IEEgKyBCMTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEIyIDwgSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gQSArIEIxO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBpZiAoQSA+IElwKSB7XG4gICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEEgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7XG4gICAgICAgICAgICAgICAgYisrO1xuICAgICAgICAgICAgICAgIEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKEIyID4gSXApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gQSArIEIxO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoQjIgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBBICsgQjE7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gLy8gQSB+IEkwLCBCMiB+IEkwXG5cbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpZiAoQSA+IElwKSB7XG4gICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEEgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEIxID0gQjI7XG4gICAgICAgICAgICAgICAgYisrO1xuICAgICAgICAgICAgICAgIEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgLy8gQSB+IEkwXG4gICAgICAgICAgICAgICAgaWYgKEIyIDwgSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gQSArIEIxO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoQjIgPiBJcCkge1xuICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBBICsgQjE7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gNztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gLy8gQSB+IEkwLCBCMiB+IEkwXG5cbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBpZiAoQSA+IElwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCMiA8IEltKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7XG4gICAgICAgICAgICAgICAgICAgIGIrKztcbiAgICAgICAgICAgICAgICAgICAgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEIyIDwgSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gQSArIEIxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEEgPCBJbSkge1xuICAgICAgICAgICAgICAgICAgICBCMSA9IEIyO1xuICAgICAgICAgICAgICAgICAgICBiKys7XG4gICAgICAgICAgICAgICAgICAgIEIyID0gSVt4ICsgZGlyc1tiXV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChCMiA+IElwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlIC09IEEgKyBCMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGlmIChBIDwgSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEIyID4gSXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQjEgPSBCMjtcbiAgICAgICAgICAgICAgICAgICAgYisrO1xuICAgICAgICAgICAgICAgICAgICBCMiA9IElbeCArIGRpcnNbYl1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQjIgPiBJcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU2NvcmVzW3hdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZSAtPSBBICsgQjE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IDg7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoQSA+IElwKSB7XG4gICAgICAgICAgICAgICAgICAgIEIxID0gQjI7XG4gICAgICAgICAgICAgICAgICAgIGIrKztcbiAgICAgICAgICAgICAgICAgICAgQjIgPSBJW3ggKyBkaXJzW2JdXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEIyIDwgSW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjb3Jlc1t4XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gQSArIEIxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBTY29yZXNbeF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vXCJQQiBkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gc3dpdGNoKHN0YXRlKVxuICAgIH0gLy8gZm9yKGEuLi4pXG5cbiAgICBTY29yZXNbeF0gPSBzY29yZSArIGRpcnNfbmIgKiBJW3hdO1xufVxuXG5leHBvcnQgY2xhc3MgbGV2X3RhYmxlX3Qge1xuICAgIHB1YmxpYyBkaXJzOiBJbnQzMkFycmF5O1xuICAgIHB1YmxpYyBkaXJzX2NvdW50OiBudW1iZXI7XG4gICAgcHVibGljIHNjb3JlczogSW50MzJBcnJheTtcbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IodzogbnVtYmVyLCBoOiBudW1iZXIsIHI6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRpcnMgPSBuZXcgSW50MzJBcnJheSgxMDI0KTtcbiAgICAgICAgdGhpcy5kaXJzX2NvdW50ID0gcHJlY29tcHV0ZV9kaXJlY3Rpb25zKHcsIHRoaXMuZGlycywgcikgfCAwO1xuICAgICAgICB0aGlzLnNjb3JlcyA9IG5ldyBJbnQzMkFycmF5KHcgKiBoKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByIHwgMDtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY29tcHV0ZV9sYXBsYWNpYW4oXG4gICAgc3JjOiBJbnQzMkFycmF5IHwgRmxvYXQzMkFycmF5LFxuICAgIGRzdDogSW50MzJBcnJheSB8IEZsb2F0MzJBcnJheSxcbiAgICB3OiBudW1iZXIsXG4gICAgRHh4OiBudW1iZXIsXG4gICAgRHl5OiBudW1iZXIsXG4gICAgc3g6IG51bWJlcixcbiAgICBzeTogbnVtYmVyLFxuICAgIGV4OiBudW1iZXIsXG4gICAgZXk6IG51bWJlclxuKTogdm9pZCB7XG4gICAgbGV0IHkgPSAwO1xuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeXJvdyA9IChzeSAqIHcgKyBzeCkgfCAwO1xuICAgIGxldCByb3cgPSB5cm93O1xuXG4gICAgZm9yICh5ID0gc3k7IHkgPCBleTsgKyt5LCB5cm93ICs9IHcsIHJvdyA9IHlyb3cpIHtcbiAgICAgICAgZm9yICh4ID0gc3g7IHggPCBleDsgKyt4LCArK3Jvdykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHJvdyArIER4eCA8IHNyYy5sZW5ndGggJiYgcm93IC0gRHh4ID49IDAgJiZcbiAgICAgICAgICAgICAgICByb3cgKyBEeXkgPCBzcmMubGVuZ3RoICYmIHJvdyAtIER5eSA+PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBkc3Rbcm93XSA9IC00ICogc3JjW3Jvd10gKyBzcmNbcm93ICsgRHh4XSArIHNyY1tyb3cgLSBEeHhdICsgc3JjW3JvdyArIER5eV0gKyBzcmNbcm93IC0gRHl5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHN0W3Jvd10gPSAwOyAvLyBvciBzb21lIG90aGVyIGRlZmF1bHQgdmFsdWUgb3IgZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgICAgIH1cbiAgICB9XG59XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXNzaWFuX21pbl9laWdlbl92YWx1ZShcbiAgICBzcmM6IG51bWJlcltdLFxuICAgIG9mZjogbnVtYmVyLFxuICAgIHRyOiBudW1iZXIsXG4gICAgRHh4OiBudW1iZXIsXG4gICAgRHl5OiBudW1iZXIsXG4gICAgRHh5OiBudW1iZXIsXG4gICAgRHl4OiBudW1iZXJcbik6IG51bWJlciB7XG4gICAgY29uc3QgSXh4ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeHhdICsgc3JjW29mZiAtIER4eF07XG4gICAgY29uc3QgSXl5ID0gLTIgKiBzcmNbb2ZmXSArIHNyY1tvZmYgKyBEeXldICsgc3JjW29mZiAtIER5eV07XG4gICAgY29uc3QgSXh5ID0gc3JjW29mZiArIER4eV0gKyBzcmNbb2ZmIC0gRHh5XSAtIHNyY1tvZmYgKyBEeXhdIC0gc3JjW29mZiAtIER5eF07XG4gICAgY29uc3Qgc3FydF9kZWx0YSA9IE1hdGguc3FydCgoSXh4IC0gSXl5KSAqIChJeHggLSBJeXkpICsgNCAqIEl4eSAqIEl4eSkgfCAwO1xuXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGguYWJzKHRyIC0gc3FydF9kZWx0YSksIE1hdGguYWJzKC0odHIgKyBzcXJ0X2RlbHRhKSkpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQganNmZWF0TmV4dCBmcm9tIFwiLi9qc2ZlYXROZXh0XCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAganNmZWF0TmV4dCxcbn07XG4iXSwibmFtZXMiOlsiX3Bvb2xfbm9kZV90IiwiY2FjaGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydHkiLCJfcG9vbF9oZWFkIiwiX3Bvb2xfdGFpbCIsIl9wb29sX3NpemUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImFsbG9jYXRlIiwiY2FwYWNpdHkiLCJkYXRhX3NpemUiLCJpIiwibm9kZSIsIm5leHQiLCJnZXRfYnVmZmVyIiwic2l6ZV9pbl9ieXRlcyIsInNpemUiLCJyZXNpemUiLCJwdXRfYnVmZmVyIiwiSlNGRUFUX0NPTlNUQU5UUyIsIkVQU0lMT04iLCJGTFRfTUlOIiwiVThfdCIsIlMzMl90IiwiRjMyX3QiLCJTNjRfdCIsIkY2NF90IiwiQzFfdCIsIkMyX3QiLCJDM190IiwiQzRfdCIsIkNPTE9SX1JHQkEyR1JBWSIsIkNPTE9SX1JHQjJHUkFZIiwiQ09MT1JfQkdSQTJHUkFZIiwiQ09MT1JfQkdSMkdSQVkiLCJCT1hfQkxVUl9OT1NDQUxFIiwiU1ZEX1VfVCIsIlNWRF9WX1QiLCJVOEMxX3QiLCJVOEMzX3QiLCJVOEM0X3QiLCJGMzJDMV90IiwiRjMyQzJfdCIsIlMzMkMxX3QiLCJTMzJDMl90IiwiZGF0YV90eXBlIiwiX2RhdGFfdHlwZV9zaXplIiwiSW50MzJBcnJheSIsIl9nZXRfZGF0YV90eXBlIiwidHlwZSIsIl9nZXRfY2hhbm5lbCIsIl9nZXRfZGF0YV90eXBlX3NpemUiLCJfY21wX3Njb3JlXzE2Iiwic3JjIiwib2ZmIiwicGl4ZWwiLCJkIiwidGhyZXNob2xkIiwiTiIsImsiLCJ2IiwiYTAiLCJhIiwiYjAiLCJiIiwiTWF0aCIsIm1pbiIsIm1heCIsIl9jb252b2xfdTgiLCJidWYiLCJzcmNfZCIsImRzdF9kIiwidyIsImgiLCJmaWx0ZXIiLCJrZXJuZWxfc2l6ZSIsImhhbGZfa2VybmVsIiwiaiIsInNwIiwiZHAiLCJzdW0iLCJzdW0xIiwic3VtMiIsInN1bTMiLCJmMCIsImZrIiwidzIiLCJ3MyIsInc0IiwiX2NvbnZvbCIsIl9yZXNhbXBsZV91OCIsImRzdCIsIm53IiwibmgiLCJ4b2ZzX2NvdW50IiwiY2giLCJjaGFubmVsIiwiY29scyIsInJvd3MiLCJkYXRhIiwic2NhbGVfeCIsInNjYWxlX3kiLCJpbnZfc2NhbGVfMjU2IiwiZHgiLCJkeSIsInN4Iiwic3kiLCJzeDEiLCJzeDIiLCJmc3gxIiwiZnN4MiIsImR4biIsImFscGhhIiwiYmV0YSIsImJldGExIiwiYnVmX25vZGUiLCJzdW1fbm9kZSIsInhvZnNfbm9kZSIsImkzMiIsInhvZnMiLCJfcmVzYW1wbGUiLCJzY2FsZSIsImYzMiIsImFicyIsInN3YXAiLCJoeXBvdCIsIm1hdG1hdGgiLCJtYXRyaXhfdCIsInRyYW5zZm9ybSIsImtleXBvaW50X3QiLCJiaXRfcGF0dGVybl8zMSIsInJlY3RpZnlfcGF0Y2giLCJ5YXBlIiwiY29tcHV0ZV9sYXBsYWNpYW4iLCJoZXNzaWFuX21pbl9laWdlbl92YWx1ZSIsInJhbnNhY19wYXJhbXNfdCIsInBrZyIsImpzZmVhdE5leHQiLCJkdCIsImdldF9kYXRhX3R5cGUiLCJnZXRfY2hhbm5lbCIsImdldF9kYXRhX3R5cGVfc2l6ZSIsIl9qc2ZlYXROZXh0IiwidmVyc2lvbiIsImRlZmF1bHQiLCJtb3Rpb25fbW9kZWwiLCJfanNmZWF0TmV4dDIiLCJfdGhpcyIsIl9jYWxsU3VwZXIiLCJUMCIsIlQxIiwiQXRBIiwiQXRCIiwiX2luaGVyaXRzIiwic3FyIiwieCIsImlzb19ub3JtYWxpemVfcG9pbnRzIiwiZnJvbSIsInRvIiwiY291bnQiLCJjeDAiLCJjeTAiLCJkMCIsInMwIiwiY3gxIiwiY3kxIiwiZDEiLCJzMSIsInkiLCJzcXJ0IiwiU1FSVDIiLCJoYXZlX2NvbGxpbmVhcl9wb2ludHMiLCJwb2ludHMiLCJkeDEiLCJkeTEiLCJkeDIiLCJkeTIiLCJhZmZpbmUyZCIsIl9tb3Rpb25fbW9kZWwyIiwicnVuIiwibW9kZWwiLCJtZCIsInQwZCIsInQxZCIsInB0MCIsInB0MSIsInB4IiwicHkiLCJfbWF0bWF0aCIsIl9saW5hbGciLCJsaW5hbGciLCJhX2J1ZmYiLCJiX2J1ZmYiLCJhX210IiwiYl9tdCIsImFkIiwiYmQiLCJtdWx0aXBseV9BdEEiLCJtdWx0aXBseV9BdEIiLCJsdV9zb2x2ZSIsImludmVydF8zeDMiLCJtdWx0aXBseV8zeDMiLCJob21vZ3JhcGh5MmQiLCJfbW90aW9uX21vZGVsMyIsIl90aGlzMiIsIm1MdEwiLCJFdmVjIiwiTHRMIiwiZXZkIiwiWCIsIlkiLCJzbXgiLCJzbXkiLCJjbXgiLCJjbXkiLCJzTXgiLCJzTXkiLCJjTXgiLCJjTXkiLCJlaWdlblZWIiwiZXJyb3IiLCJlcnIiLCJ3dyIsIm0iLCJjaGVja19zdWJzZXQiLCJuZWdhdGl2ZSIsImZwMCIsImZwMSIsImZwMiIsImZwMyIsInRwMCIsInRwMSIsInRwMiIsInRwMyIsIkExMSIsIkExMiIsIkExMyIsIkEyMSIsIkEyMiIsIkEyMyIsIkEzMSIsIkEzMiIsIkEzMyIsIkIxMSIsIkIxMiIsIkIxMyIsIkIyMSIsIkIyMiIsIkIyMyIsIkIzMSIsIkIzMiIsIkIzMyIsImRldEEiLCJkZXRlcm1pbmFudF8zeDMiLCJkZXRCIiwicHlyYW1pZF90IiwiX2pzZmVhdE5leHQzIiwibGV2ZWxzIiwiX3RoaXMzIiwiQXJyYXkiLCJfaW1ncHJvYyIsImltZ3Byb2MiLCJweXJkb3duIiwic3RhcnRfdyIsInN0YXJ0X2giLCJidWlsZCIsImlucHV0Iiwic2tpcF9maXJzdF9sZXZlbCIsImZhc3RfY29ybmVycyIsIl9qc2ZlYXROZXh0NCIsIl90aGlzNCIsIm9mZnNldHMxNiIsInRocmVzaG9sZF90YWIiLCJVaW50OEFycmF5IiwiX3RocmVzaG9sZCIsInBpeGVsX29mZiIsInNjb3JlX2RpZmYiLCJzZXRfdGhyZXNob2xkIiwiZGV0ZWN0IiwiY29ybmVycyIsImJvcmRlciIsIksiLCJpbWciLCJ2dCIsIm0zIiwiY3BidWZfbm9kZSIsInU4IiwiY3BidWYiLCJzZCIsImV5IiwiZXgiLCJfY291bnQiLCJjb3JuZXJzX2NudCIsInB0Iiwic2NvcmVfZnVuYyIsInRocmVzaF90YWIiLCJ0YWIiLCJuY29ybmVycyIsImNvcm5lcnBvcyIsImN1cnIiLCJwdHIiLCJwcmV2IiwicHByZXYiLCJqcDEiLCJqbTEiLCJzY29yZSIsIl9jbXBfb2Zmc2V0cyIsInBpeGVsMCIsInBpeGVsMSIsInBpeGVsMiIsInBpeGVsMyIsInBpeGVsNCIsInBpeGVsNSIsInBpeGVsNiIsInBpeGVsNyIsInBpeGVsOCIsInBpeGVsOSIsInBpeGVsMTAiLCJwaXhlbDExIiwicGl4ZWwxMiIsInBpeGVsMTMiLCJwaXhlbDE0IiwicGl4ZWwxNSIsInN0ZXAiLCJwYXR0ZXJuX3NpemUiLCJvZmZzZXRzIiwiX2pzZmVhdE5leHQ1IiwiZ3JheXNjYWxlIiwiY29kZSIsImlyIiwianIiLCJjb2VmZl9yIiwiY29lZmZfZyIsImNvZWZmX2IiLCJjbiIsImNuMiIsImNuMyIsImRzdF91OCIsInJlc2FtcGxlIiwiYm94X2JsdXJfZ3JheSIsInJhZGl1cyIsIm9wdGlvbnMiLCJoMiIsImVuZCIsIndpbmRvd1NpemUiLCJyYWRpdXNQbHVzT25lIiwicmFkaXVzUGx1czIiLCJ0bXBfYnVmZiIsImRzdEluZGV4Iiwic3JjSW5kZXgiLCJuZXh0UGl4ZWxJbmRleCIsInByZXZpb3VzUGl4ZWxJbmRleCIsImRhdGFfaTMyIiwiZGF0YV91OCIsImhvbGQiLCJnYXVzc2lhbl9ibHVyIiwic2lnbWEiLCJqc2ZlYXRtYXRoIiwibWF0aCIsImlzX3U4IiwiYnVmX3N6IiwiZmlsdF9ub2RlIiwiZ2V0X2dhdXNzaWFuX2tlcm5lbCIsImhvdWdoX3RyYW5zZm9ybSIsInJob19yZXMiLCJ0aGV0YV9yZXMiLCJyIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm1pbl90aGV0YSIsIm1heF90aGV0YSIsIlBJIiwibnVtYW5nbGUiLCJyb3VuZCIsIm51bXJobyIsImlyaG8iLCJhY2N1bSIsInRhYlNpbiIsIkZsb2F0MzJBcnJheSIsInRhYkNvcyIsIm4iLCJhbmciLCJzaW4iLCJjb3MiLCJfc29ydF9idWYiLCJiYXNlIiwicHVzaCIsInNvcnQiLCJsMSIsImwyIiwibGluZXNNYXgiLCJsZW5ndGgiLCJsaW5lcyIsImlkeCIsImZsb29yIiwibHJobyIsImxhbmdsZSIsIl93MiIsIl9oMiIsInNwdHIiLCJzbGluZSIsImRwdHIiLCJkbGluZSIsInNjaGFycl9kZXJpdmF0aXZlcyIsImRzdGVwIiwieDEiLCJjIiwiZSIsImYiLCJzcm93MCIsInNyb3cxIiwic3JvdzIiLCJkcm93IiwidHJvdzAiLCJ0cm93MSIsImd4Z3kiLCJidWYwX25vZGUiLCJidWYxX25vZGUiLCJzb2JlbF9kZXJpdmF0aXZlcyIsImNvbXB1dGVfaW50ZWdyYWxfaW1hZ2UiLCJkc3Rfc3VtIiwiZHN0X3Nxc3VtIiwiZHN0X3RpbHRlZCIsIncwIiwiaDAiLCJ3MSIsInMiLCJzMiIsInAiLCJwdXAiLCJlcXVhbGl6ZV9oaXN0b2dyYW0iLCJoaXN0MCIsIm5vcm0iLCJoaXN0MF9ub2RlIiwiY2FubnkiLCJsb3dfdGhyZXNoIiwiaGlnaF90aHJlc2giLCJncmFkIiwiX2dyYWQiLCJzdXBwcmVzcyIsInRnMjJ4IiwidGc2N3giLCJkeGR5X25vZGUiLCJtYXBfbm9kZSIsInN0YWNrX25vZGUiLCJtYXAiLCJzdGFjayIsImR4ZHkiLCJkeGR5X20iLCJyb3cwIiwicm93MSIsInJvdzIiLCJtYXBfdyIsIm1hcF9pIiwic3RhY2tfaSIsIk51bWJlciIsIndhcnBfcGVyc3BlY3RpdmUiLCJmaWxsX3ZhbHVlIiwic3JjX3dpZHRoIiwic3JjX2hlaWdodCIsImRzdF93aWR0aCIsImRzdF9oZWlnaHQiLCJpeHMiLCJpeXMiLCJ4cyIsInlzIiwieHMwIiwieXMwIiwid3MiLCJzYyIsInAwIiwicDEiLCJ0ZCIsIm0wMCIsIm0wMSIsIm0wMiIsIm0xMCIsIm0xMSIsIm0xMiIsIm0yMCIsIm0yMSIsIm0yMiIsIndhcnBfYWZmaW5lIiwic2tpbmRldGVjdG9yIiwiZyIsIl9qc2ZlYXROZXh0NiIsIl90aGlzNSIsInFzb3J0X3N0YWNrIiwia2VybmVsIiwidCIsInNpZ21hX3giLCJzY2FsZV8yeCIsImtlcm5fbm9kZSIsIl9rZXJuZWwiLCJleHAiLCJwZXJzcGVjdGl2ZV80cG9pbnRfdHJhbnNmb3JtIiwic3JjX3gwIiwic3JjX3kwIiwiZHN0X3gwIiwiZHN0X3kwIiwic3JjX3gxIiwic3JjX3kxIiwiZHN0X3gxIiwiZHN0X3kxIiwic3JjX3gyIiwic3JjX3kyIiwiZHN0X3gyIiwiZHN0X3kyIiwic3JjX3gzIiwic3JjX3kzIiwiZHN0X3gzIiwiZHN0X3kzIiwiY29uc29sZSIsIndhcm4iLCJ0MSIsInQyIiwidDQiLCJ0NSIsInQ2IiwidDciLCJ0OCIsInQ5IiwidDEwIiwidDExIiwidDE0IiwidDE1IiwidDE2IiwidDE4IiwidDIwIiwidDIxIiwidDI0IiwidDI1IiwidDI2IiwidDI3IiwidDI4IiwidDMwIiwidDMyIiwidDM1IiwidDQxIiwidDQyIiwidDQzIiwidDQ2IiwidDQ4IiwidDUxIiwidDU1IiwiSHIwIiwiSHIxIiwiSHIyIiwiSHIzIiwiSHI0IiwiSHI1IiwiSHI2IiwiSHI3IiwiSGwwIiwiSGwxIiwiSGwyIiwiSGwzIiwiSGw0IiwiSGw1IiwiSGw2IiwiSGw3IiwidDEyIiwidDIzIiwidDMxIiwidDQ0IiwidDQ3IiwidDQ5IiwidDUwIiwibWF0IiwicXNvcnQiLCJhcnJheSIsImxvdyIsImhpZ2giLCJjbXAiLCJpc29ydF90aHJlc2giLCJ0YSIsInRiIiwidGMiLCJsZWZ0IiwicmlnaHQiLCJwdHIyIiwibGVmdDAiLCJsZWZ0MSIsInJpZ2h0MCIsInJpZ2h0MSIsInBpdm90Iiwic3dhcF9jbnQiLCJtZWRpYW4iLCJtaWRkbGUiLCJsbCIsImhoIiwiX2pzZmVhdE5leHQ3IiwiX3RoaXM2IiwiSmFjb2JpSW1wbCIsIkEiLCJhc3RlcCIsIlciLCJWIiwidnN0ZXAiLCJlcHMiLCJsIiwiX2luIiwiX2luMiIsIml0ZXJzIiwibWF4X2l0ZXIiLCJtdiIsInZhbCIsImluZFJfYnVmZiIsImluZENfYnVmZiIsImluZFIiLCJpbmRDIiwiSmFjb2JpU1ZESW1wbCIsIkF0IiwiX1ciLCJWdCIsIm4xIiwibWludmFsIiwiaXRlciIsIkFpIiwiQWoiLCJWaSIsIlZqIiwiY2hhbmdlZCIsInQwIiwiZ2FtbWEiLCJkZWx0YSIsInNlZWQiLCJ2YWwwIiwiYXN1bSIsIldfYnVmZiIsImY2NCIsIkIiLCJjaG9sZXNreV9zb2x2ZSIsImNvbCIsInJvdyIsImNvbDIiLCJjcyIsInJzIiwiaW52X2RpYWciLCJzdmRfZGVjb21wb3NlIiwiVSIsImF0IiwiX20iLCJfbiIsIndfYnVmZiIsInZfYnVmZiIsIndfbXQiLCJ2X210IiwidHJhbnNwb3NlIiwic3ZkX3NvbHZlIiwicHUiLCJwdiIsIm5yb3dzIiwibmNvbHMiLCJ4c3VtIiwidG9sIiwidV9idWZmIiwidV9tdCIsInVkIiwid2QiLCJ2ZCIsInN2ZF9pbnZlcnQiLCJwYSIsImlkIiwidmVjdHMiLCJ2YWxzIiwib3JiIiwiX2pzZmVhdE5leHQ4IiwiX3RoaXM3IiwiYml0X3BhdHRlcm5fMzFfIiwiSCIsInBhdGNoX2ltZyIsImRlc2NyaWJlIiwiZGVzY3JpcHRvcnMiLCJERVNDUl9TSVpFIiwiYW5nbGUiLCJwYXRjaF9kIiwicGF0Y2hfb2ZmIiwicGF0dCIsImRlc2NyX2QiLCJkZXNjcl9vZmYiLCJ5YXBlMDYiLCJfanNmZWF0TmV4dDkiLCJfdGhpczgiLCJsYXBsYWNpYW5fdGhyZXNob2xkIiwibWluX2VpZ2VuX3ZhbHVlX3RocmVzaG9sZCIsInNyZF9kIiwiRHh4IiwiRHl5IiwiRHh5IiwiRHl4IiwibGFwX2J1ZiIsImxhcGxhY2lhbiIsImx2Iiwicm93eCIsIm1pbl9laWdlbl92YWx1ZSIsIm51bWJlcl9vZl9wb2ludHMiLCJsYXBfdGhyZXNoIiwiZWlnZW5fdGhyZXNoIiwibW90aW9uX2VzdGltYXRvciIsIl9qc2ZlYXROZXh0MTAiLCJnZXRfc3Vic2V0IiwibmVlZF9jbnQiLCJtYXhfY250IiwiZnJvbV9zdWIiLCJ0b19zdWIiLCJtYXhfdHJ5IiwiaW5kaWNlcyIsInNzaXRlciIsImlkeF9pIiwib2siLCJyYW5kb20iLCJmaW5kX2lubGllcnMiLCJ0aHJlc2giLCJtYXNrIiwibnVtaW5saWVycyIsInJhbnNhYyIsInBhcmFtcyIsIm1heF9pdGVycyIsIm1vZGVsX3BvaW50cyIsIm5pdGVycyIsInJlc3VsdCIsInN1YnNldDAiLCJzdWJzZXQxIiwiZm91bmQiLCJtYyIsIm1yIiwibV9idWZmIiwibXNfYnVmZiIsImVycl9idWZmIiwiTSIsImN1cnJfbWFzayIsImlubGllcnNfbWF4Iiwibm1vZGVscyIsImNvcHlfdG8iLCJ1cGRhdGVfaXRlcnMiLCJsbWVkcyIsIl9tYXRoIiwibWluX21lZGlhbiIsIm9wdGljYWxfZmxvd19sayIsIl9qc2ZlYXROZXh0MTEiLCJfdGhpczkiLCJzY2hhcnJfZGVyaXYiLCJ0cmFjayIsInByZXZfcHlyIiwiY3Vycl9weXIiLCJwcmV2X3h5IiwiY3Vycl94eSIsIndpbl9zaXplIiwic3RhdHVzIiwibWluX2VpZ2VuX3RocmVzaG9sZCIsImhhbGZfd2luIiwid2luX2FyZWEiLCJ3aW5fYXJlYTIiLCJwcmV2X2ltZ3MiLCJuZXh0X2ltZ3MiLCJpbWdfcHJldiIsImltZ19uZXh0IiwibHciLCJsaCIsIml3aW5fbm9kZSIsImRlcml2X2l3aW5fbm9kZSIsImRlcml2X2xldl9ub2RlIiwiZGVyaXZfbSIsIml3aW5fYnVmIiwiZGVyaXZfaXdpbiIsImRlcml2X2xldiIsImRzcmMiLCJpcHRyIiwiZGlwdHIiLCJqcHRyIiwibGV2X3NjIiwicHJldl94IiwicHJldl95IiwibmV4dF94IiwibmV4dF95IiwicHJldl9kZWx0YV94IiwicHJldl9kZWx0YV95IiwiZGVsdGFfeCIsImRlbHRhX3kiLCJpcHJldl94IiwiaXByZXZfeSIsImluZXh0X3giLCJpbmV4dF95IiwibGV2ZWwiLCJwdGlkIiwiYnJkX3RsIiwiYnJkX3IiLCJicmRfYiIsImIxIiwiYjIiLCJXX0JJVFMxNCIsIldfQklUUzQiLCJXX0JJVFMxbTUiLCJXX0JJVFMxbTUxIiwiV19CSVRTMTRfIiwiV19CSVRTNDEiLCJGTFRfU0NBTEUiLCJpdzAwIiwiaXcwMSIsIml3MTAiLCJpdzExIiwiaXZhbCIsIml4dmFsIiwiaXl2YWwiLCJEIiwibWluX2VpZyIsIkZMVF9FUFNJTE9OIiwibWF4X2xldmVsIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiaTAiLCJpMSIsImlkZW50aXR5IiwiY29sc18xIiwibGVuIiwiQXRpIiwicEF0IiwiYXRkIiwibXVsdGlwbHkiLCJDIiwiQXAiLCJwQSIsInBCIiwicF9CIiwiQ3AiLCJtY29scyIsImNkIiwibXVsdGlwbHlfQUJ0IiwibXJvd3MiLCJtdWx0aXBseV9BQXQiLCJwQ2RpYWciLCJwX0EiLCJwQyIsInBDdCIsInBfQyIsInBfQ0MiLCJpZGVudGl0eV8zeDMiLCJpbnZBIiwidDEzIiwidDE3IiwiQ2QiLCJBZCIsIkJkIiwibTFfMCIsIm0xXzEiLCJtMV8yIiwibTFfMyIsIm0xXzQiLCJtMV81IiwibTFfNiIsIm0xXzciLCJtMV84IiwibTJfMCIsIm0yXzEiLCJtMl8yIiwibTJfMyIsIm0yXzQiLCJtMl81IiwibTJfNiIsIm0yXzciLCJtMl84IiwibWF0M3gzX2RldGVybWluYW50IiwiTTExIiwiTTEyIiwiTTEzIiwiTTIxIiwiTTIyIiwiTTIzIiwiTTMxIiwiTTMyIiwiTTMzIiwiZGF0YV90IiwiX2RhdGFfdHlwZSIsIl9kYXRhX2J1ZmZlciIsImJ1ZmZlciIsIm90aGVyIiwib2QiLCJuZXdfc2l6ZSIsInByb2IiLCJfZXBzIiwibnVtIiwibG9nIiwiZGVub20iLCJwb3ciLCJBcnJheUJ1ZmZlciIsIkZsb2F0NjRBcnJheSIsInBzaXplIiwiaW1nUHJvY2Vzc29yIiwiY29zaW5lIiwic2luZSIsImludmVydF9hZmZpbmVfdHJhbnNmb3JtIiwibTEzIiwibTIzIiwiZGV0IiwiaW52ZXJ0X3BlcnNwZWN0aXZlX3RyYW5zZm9ybSIsIm0zMSIsIm0zMiIsIm0zMyIsInRoaXJkX2NoZWNrIiwiaXNfbG9jYWxfbWF4aW1hIiwicGVyZm9ybV9vbmVfcG9pbnQiLCJsZXZfdGFibGVfdCIsImxldmVsX3RhYmxlcyIsInRhdSIsImluaXQiLCJweXJhbWlkX2xldmVscyIsIlIiLCJSbTEiLCJkaXJzIiwiZGlyc19jb3VudCIsIm9wcG9zaXRlIiwiaHciLCJzY29yZXMiLCJpcCIsImltIiwiYWJzX3Njb3JlIiwicHJlY29tcHV0ZV9kaXJlY3Rpb25zIiwiU2IiLCJuZWlnaGJvcmhvb2QiLCJJIiwiU2NvcmVzIiwiSW0iLCJJcCIsImRpcnNfbmIiLCJCMCIsIkIxIiwiQjIiLCJzdGF0ZSIsInlyb3ciLCJ0ciIsIkl4eCIsIkl5eSIsIkl4eSIsInNxcnRfZGVsdGEiXSwic291cmNlUm9vdCI6IiJ9