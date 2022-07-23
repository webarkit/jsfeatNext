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

/***/ "./src_ts/jsfeatNext.ts":
/*!******************************!*\
  !*** ./src_ts/jsfeatNext.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ jsfeatNext)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _data_type_data_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data_type/data_type */ "./src_ts/data_type/data_type.ts");
/* harmony import */ var _cache_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cache/cache */ "./src_ts/cache/cache.ts");
/* harmony import */ var _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matrix_t/matrix_t */ "./src_ts/matrix_t/matrix_t.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/constants */ "./src_ts/constants/constants.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../package.json */ "./package.json");









var jsfeatNext = /*#__PURE__*/function () {
  function jsfeatNext() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, jsfeatNext);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dt", void 0);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "cache", void 0);

    this.dt = new _data_type_data_type__WEBPACK_IMPORTED_MODULE_3__.data_type();
    this.cache = new _cache_cache__WEBPACK_IMPORTED_MODULE_4__.cache();
    this.cache.allocate(30, 640 * 4);
  }

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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "matrix_t", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_7__.version);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "EPSILON", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "FLT_MIN", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8_t", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C1_t", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C2_t", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C3_t", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "C4_t", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "SVD_U_T", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "SVD_V_T", _constants_constants__WEBPACK_IMPORTED_MODULE_6__.JSFEAT_CONSTANTS.SVD_V_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8C1_t", jsfeatNext.U8_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8C3_t", jsfeatNext.U8_t | jsfeatNext.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "U8C4_t", jsfeatNext.U8_t | jsfeatNext.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F32C1_t", jsfeatNext.F32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "F32C2_t", jsfeatNext.F32_t | jsfeatNext.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S32C1_t", jsfeatNext.S32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(jsfeatNext, "S32C2_t", jsfeatNext.S32_t | jsfeatNext.C2_t);


jsfeatNext.matrix_t = _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_5__.matrix_t;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S1gsRUFBTCxHQUFVLElBQUlZLFVBQUosQ0FBZSxLQUFLZCxNQUFwQixDQUFWO0VBQ0EsS0FBS0csR0FBTCxHQUFXLElBQUl0QixVQUFKLENBQWUsS0FBS21CLE1BQXBCLENBQVg7RUFDQSxLQUFLSSxHQUFMLEdBQVcsSUFBSVcsWUFBSixDQUFpQixLQUFLZixNQUF0QixDQUFYO0VBQ0EsS0FBS0ssR0FBTCxHQUFXLElBQUlXLFlBQUosQ0FBaUIsS0FBS2hCLE1BQXRCLENBQVg7QUFDSCxDQXBCTDs7Ozs7Ozs7Ozs7Ozs7QUNUZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpRUFBZTtFQUNaZixVQUFVLEVBQVZBLG1EQUFVQTtBQURFLENBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzZmVhdE5leHQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvY2FjaGUvY2FjaGUudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9jb25zdGFudHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvZGF0YV90eXBlL2RhdGFfdHlwZS50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2pzZmVhdE5leHQudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9tYXRyaXhfdC9tYXRyaXhfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL25vZGVfdXRpbHMvX3Bvb2xfbm9kZV90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbm9kZV91dGlscy9kYXRhX3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi8uLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdCdcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGUge1xuICAgIGFsbG9jYXRlOiAoY2FwYWNpdHk6IGFueSwgZGF0YV9zaXplOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgZ2V0X2J1ZmZlcjogKHNpemVfaW5fYnl0ZXM6IG51bWJlcikgPT4gYW55O1xuICAgIHB1dF9idWZmZXI6IChub2RlOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBjYWNoZSBpbXBsZW1lbnRzIElDYWNoZSB7XG4gICAgcHJpdmF0ZSBfcG9vbF9oZWFkOiBhbnk7XG4gICAgcHJpdmF0ZSBfcG9vbF90YWlsOiBhbnk7XG4gICAgcHJpdmF0ZSBfcG9vbF9zaXplOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZDtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUgPSAwO1xuICAgIH1cbiAgICBhbGxvY2F0ZShjYXBhY2l0eTogYW55LCBkYXRhX3NpemU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX3RhaWwgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwYWNpdHk7ICsraSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgICAgICB0aGlzLl9wb29sX3RhaWwgPSB0aGlzLl9wb29sX3RhaWwubmV4dCA9IG5vZGU7XG5cbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldF9idWZmZXIoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSB7XG4gICAgICAgIC8vIGFzc3VtZSB3ZSBoYXZlIGVub3VnaCBmcmVlIG5vZGVzXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX2hlYWQubmV4dDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplLS07XG5cbiAgICAgICAgaWYgKHNpemVfaW5fYnl0ZXMgPiBub2RlLnNpemUpIHtcbiAgICAgICAgICAgIG5vZGUucmVzaXplKHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHB1dF9idWZmZXIobm9kZTogYW55KSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBKU0ZFQVRfQ09OU1RBTlRTID0ge1xuICAgIC8vIENPTlNUQU5UU1xuICAgIEVQU0lMT046IDAuMDAwMDAwMTE5MjA5Mjg5NixcbiAgICBGTFRfTUlOOiAxRS0zNyxcbiAgICBVOF90OiAweDAxMDAsXG4gICAgUzMyX3Q6IDB4MDIwMCxcbiAgICBGMzJfdDogMHgwNDAwLFxuICAgIFM2NF90OiAweDA4MDAsXG4gICAgRjY0X3Q6IDB4MTAwMCxcbiAgICBDMV90OiAweDAxLFxuICAgIEMyX3Q6IDB4MDIsXG4gICAgQzNfdDogMHgwMyxcbiAgICBDNF90OiAweDA0LFxuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIENPTE9SX1JHQkEyR1JBWTogMCxcbiAgICBDT0xPUl9SR0IyR1JBWTogMSxcbiAgICBDT0xPUl9CR1JBMkdSQVk6IDIsXG4gICAgQ09MT1JfQkdSMkdSQVk6IDMsXG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBCT1hfQkxVUl9OT1NDQUxFOiAweDAxLFxuXG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBTVkRfVV9UOiAweDAxLFxuICAgIFNWRF9WX1Q6IDB4MDIsXG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBVOEMxX3Q6IDB4MDEwMCB8IDB4MDEsXG4gICAgVThDM190OiAweDAxMDAgfCAweDAzLFxuICAgIFU4QzRfdDogMHgwMTAwIHwgMHgwNCxcblxuICAgIEYzMkMxX3Q6IDB4MDQwMCB8IDB4MDEsXG4gICAgRjMyQzJfdDogMHgwNDAwIHwgMHgwMixcbiAgICBTMzJDMV90OiAweDAyMDAgfCAweDAxLFxuICAgIFMzMkMyX3Q6IDB4MDIwMCB8IDB4MDJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElEYXRhX1R5cGUge1xuICAgIF9nZXRfZGF0YV90eXBlOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG4gICAgX2dldF9jaGFubmVsOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZTogKHR5cGU6IG51bWJlcikgPT4gbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgZGF0YV90eXBlIGltcGxlbWVudHMgSURhdGFfVHlwZSB7XG4gICAgcHJpdmF0ZSBfZGF0YV90eXBlX3NpemU6IEludDMyQXJyYXk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFfdHlwZV9zaXplID0gbmV3IEludDMyQXJyYXkoWy0xLCAxLCA0LCAtMSwgNCwgLTEsIC0xLCAtMSwgOCwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIDhdKTs7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRjAwKTtcbiAgICB9XG5cbiAgICBfZ2V0X2NoYW5uZWwodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRik7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YV90eXBlX3NpemVbKHR5cGUgJiAweEZGMDApID4+IDhdO1xuICAgIH1cbn0iLCIvL2ltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdCdcbmltcG9ydCB7IElEYXRhX1R5cGUsIGRhdGFfdHlwZSB9IGZyb20gJy4vZGF0YV90eXBlL2RhdGFfdHlwZSdcbmltcG9ydCB7IElDYWNoZSwgY2FjaGUgfSBmcm9tICcuL2NhY2hlL2NhY2hlJ1xuaW1wb3J0IHsgbWF0cml4X3QgfSBmcm9tICcuL21hdHJpeF90L21hdHJpeF90J1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqc2ZlYXROZXh0IHtcbiAgICBwcml2YXRlIGR0OiBJRGF0YV9UeXBlO1xuICAgIHByaXZhdGUgY2FjaGU6IElDYWNoZTtcbiAgICBzdGF0aWMgbWF0cml4X3Q6IHR5cGVvZiBtYXRyaXhfdFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmR0ID0gbmV3IGRhdGFfdHlwZSgpO1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IGNhY2hlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUuYWxsb2NhdGUoMzAsIDY0MCAqIDQpO1xuICAgIH1cblxuICAgIC8vIFZFUlNJT05cbiAgICBzdGF0aWMgVkVSU0lPTjogc3RyaW5nID0gcGtnLnZlcnNpb247XG5cbiAgICAvLyBDT05TVEFOVFNcbiAgICBzdGF0aWMgRVBTSUxPTiA9IEpTRkVBVF9DT05TVEFOVFMuRVBTSUxPTjtcbiAgICBzdGF0aWMgRkxUX01JTiA9IEpTRkVBVF9DT05TVEFOVFMuRkxUX01JTjtcbiAgICBzdGF0aWMgVThfdCA9IEpTRkVBVF9DT05TVEFOVFMuVThfdDtcbiAgICBzdGF0aWMgUzMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90O1xuICAgIHN0YXRpYyBGMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjMyX3Q7XG4gICAgc3RhdGljIFM2NF90ID0gSlNGRUFUX0NPTlNUQU5UUy5TNjRfdDtcbiAgICBzdGF0aWMgRjY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkY2NF90O1xuICAgIHN0YXRpYyBDMV90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMV90O1xuICAgIHN0YXRpYyBDMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5DMl90O1xuICAgIHN0YXRpYyBDM190ID0gSlNGRUFUX0NPTlNUQU5UUy5DM190O1xuICAgIHN0YXRpYyBDNF90ID0gSlNGRUFUX0NPTlNUQU5UUy5DNF90O1xuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIHN0YXRpYyBDT0xPUl9SR0JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfUkdCMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSQTJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG4gICAgc3RhdGljIENPTE9SX0JHUjJHUkFZID0gSlNGRUFUX0NPTlNUQU5UUy5DT0xPUl9SR0JBMkdSQVk7XG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBzdGF0aWMgQk9YX0JMVVJfTk9TQ0FMRSA9IEpTRkVBVF9DT05TVEFOVFMuQk9YX0JMVVJfTk9TQ0FMRTtcbiAgICAvLyBzdmQgb3B0aW9uc1xuICAgIHN0YXRpYyBTVkRfVV9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVV9UO1xuICAgIHN0YXRpYyBTVkRfVl9UID0gSlNGRUFUX0NPTlNUQU5UUy5TVkRfVl9UO1xuXG4gICAgLy8gcG9wdWxhciBmb3JtYXRzXG4gICAgc3RhdGljIFU4QzFfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgVThDM190ID0gdGhpcy5VOF90IHwgdGhpcy5DM190O1xuICAgIHN0YXRpYyBVOEM0X3QgPSB0aGlzLlU4X3QgfCB0aGlzLkM0X3Q7XG5cbiAgICBzdGF0aWMgRjMyQzFfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMxX3Q7XG4gICAgc3RhdGljIEYzMkMyX3QgPSB0aGlzLkYzMl90IHwgdGhpcy5DMl90O1xuICAgIHN0YXRpYyBTMzJDMV90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgUzMyQzJfdCA9IHRoaXMuUzMyX3QgfCB0aGlzLkMyX3Q7XG5cbiAgICBnZXRfZGF0YV90eXBlKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9jaGFubmVsKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmR0Ll9nZXRfY2hhbm5lbCh0eXBlKTtcbiAgICB9XG5cbiAgICBnZXRfZGF0YV90eXBlX3NpemUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlKTtcbiAgICB9XG59XG5cbmpzZmVhdE5leHQubWF0cml4X3QgPSBtYXRyaXhfdDsiLCJpbXBvcnQgeyBJRGF0YV9UeXBlLCBkYXRhX3R5cGUgfSBmcm9tICcuLi9kYXRhX3R5cGUvZGF0YV90eXBlJ1xuaW1wb3J0IHsgZGF0YV90IH0gZnJvbSAnLi4vbm9kZV91dGlscy9kYXRhX3QnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcblxuZXhwb3J0IGludGVyZmFjZSBJTWF0cml4X1Qge1xuICAgIGFsbG9jYXRlOiAoKSA9PiB2b2lkO1xuICAgIGNvcHlfdG86IChvdGhlcjogYW55KSA9PiB2b2lkO1xuICAgIHJlc2l6ZTogKGM6IG51bWJlciwgcjogbnVtYmVyLCBjaDogYW55KSA9PiB2b2lkO1xufVxuZXhwb3J0IGNsYXNzIG1hdHJpeF90IGltcGxlbWVudHMgSU1hdHJpeF9UIHtcbiAgICBwcml2YXRlIGR0OiBJRGF0YV9UeXBlO1xuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XG4gICAgcHVibGljIGNoYW5uZWw6IG51bWJlcjtcbiAgICBwdWJsaWMgY29sczogbnVtYmVyO1xuICAgIHB1YmxpYyByb3dzOiBudW1iZXI7XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwdWJsaWMgYnVmZmVyOiBhbnk7XG4gICAgY29uc3RydWN0b3IoYzogbnVtYmVyLCByOiBudW1iZXIsIF9kYXRhX3R5cGU6IG51bWJlciwgX2RhdGFfYnVmZmVyOiBhbnkpIHtcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBkYXRhX3R5cGUoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZShfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY2hhbm5lbCA9IHRoaXMuZHQuX2dldF9jaGFubmVsKF9kYXRhX3R5cGUpIHwgMDtcbiAgICAgICAgdGhpcy5jb2xzID0gYyB8IDA7XG4gICAgICAgIHRoaXMucm93cyA9IHIgfCAwO1xuICAgICAgICBpZiAodHlwZW9mIF9kYXRhX2J1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxvY2F0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBfZGF0YV9idWZmZXI7XG4gICAgICAgICAgICAvLyBkYXRhIHVzZXIgYXNrZWQgZm9yXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlU4X3QgPyB0aGlzLmJ1ZmZlci51OCA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLlMzMl90ID8gdGhpcy5idWZmZXIuaTMyIDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuRjMyX3QgPyB0aGlzLmJ1ZmZlci5mMzIgOiB0aGlzLmJ1ZmZlci5mNjQpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGxvY2F0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gY2xlYXIgcmVmZXJlbmNlc1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICBkZWxldGUgdGhpcy5idWZmZXI7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IGRhdGFfdCgodGhpcy5jb2xzICogdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHRoaXMudHlwZSkgKiB0aGlzLmNoYW5uZWwpICogdGhpcy5yb3dzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgfVxuICAgIGNvcHlfdG8ob3RoZXI6IGFueSkge1xuICAgICAgICB2YXIgb2QgPSBvdGhlci5kYXRhLCB0ZCA9IHRoaXMuZGF0YTtcbiAgICAgICAgdmFyIGkgPSAwLCBuID0gKHRoaXMuY29scyAqIHRoaXMucm93cyAqIHRoaXMuY2hhbm5lbCkgfCAwO1xuICAgICAgICBmb3IgKDsgaSA8IG4gLSA0OyBpICs9IDQpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgICAgICBvZFtpICsgMV0gPSB0ZFtpICsgMV07XG4gICAgICAgICAgICBvZFtpICsgMl0gPSB0ZFtpICsgMl07XG4gICAgICAgICAgICBvZFtpICsgM10gPSB0ZFtpICsgM107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgICAgIG9kW2ldID0gdGRbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzaXplKGM6IG51bWJlciwgcjogbnVtYmVyLCBjaDogYW55KSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2ggPT09IFwidW5kZWZpbmVkXCIpIHsgY2ggPSB0aGlzLmNoYW5uZWw7IH1cbiAgICAgICAgLy8gcmVsb2NhdGUgYnVmZmVyIG9ubHkgaWYgbmV3IHNpemUgZG9lc250IGZpdFxuICAgICAgICB2YXIgbmV3X3NpemUgPSAoYyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogY2gpICogcjtcbiAgICAgICAgaWYgKG5ld19zaXplID4gdGhpcy5idWZmZXIuc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5jb2xzID0gYztcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHI7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaDtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgSURhdGFfVCwgZGF0YV90IH0gZnJvbSAnLi9kYXRhX3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvb2xfTm9kZV9UIHtcbiAgICByZXNpemU6IChzaXplX2luX2J5dGVzOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIF9wb29sX25vZGVfdCBpbXBsZW1lbnRzIElQb29sX05vZGVfVCB7XG4gICAgcHVibGljIG5leHQ6IGFueTtcbiAgICBwdWJsaWMgZGF0YT86IElEYXRhX1Q7XG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgYnVmZmVyOiBhbnk7XG4gICAgcHVibGljIHU4OiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBpMzI6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIHB1YmxpYyBmNjQ6IEZsb2F0NjRBcnJheTtcblxuICAgIGNvbnN0cnVjdG9yKHNpemVfaW5fYnl0ZXM6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbiAgICByZXNpemUoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBkYXRhX3Qoc2l6ZV9pbl9ieXRlcyk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGF0YS5zaXplO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuZGF0YS5idWZmZXI7XG4gICAgICAgIHRoaXMudTggPSB0aGlzLmRhdGEudTg7XG4gICAgICAgIHRoaXMuaTMyID0gdGhpcy5kYXRhLmkzMjtcbiAgICAgICAgdGhpcy5mMzIgPSB0aGlzLmRhdGEuZjMyO1xuICAgICAgICB0aGlzLmY2NCA9IHRoaXMuZGF0YS5mNjQ7XG4gICAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgSURhdGFfVCB7XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgdTg6IFVpbnQ4QXJyYXk7XG4gICAgaTMyOiBJbnQzMkFycmF5O1xuICAgIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIGY2NDogRmxvYXQ2NEFycmF5O1xufVxuXG5leHBvcnQgY2xhc3MgZGF0YV90IGltcGxlbWVudHMgSURhdGFfVCAge1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIGJ1ZmZlcjogQXJyYXlCdWZmZXI7XG4gICAgcHVibGljIHU4OiBVaW50OEFycmF5O1xuICAgIHB1YmxpYyBpMzI6IEludDMyQXJyYXk7XG4gICAgcHVibGljIGYzMjogRmxvYXQzMkFycmF5O1xuICAgIHB1YmxpYyBmNjQ6IEZsb2F0NjRBcnJheTtcbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzOiBudW1iZXIsIGJ1ZmZlcj86IGFueSkge1xuICAgICAgICAvLyB3ZSBuZWVkIGFsaWduIHNpemUgdG8gbXVsdGlwbGUgb2YgOFxuICAgICAgICB0aGlzLnNpemUgPSAoKHNpemVfaW5fYnl0ZXMgKyA3KSB8IDApICYgLTg7XG4gICAgICAgIGlmICh0eXBlb2YgYnVmZmVyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLnNpemUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBidWZmZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudTggPSBuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuaTMyID0gbmV3IEludDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmYzMiA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmY2NCA9IG5ldyBGbG9hdDY0QXJyYXkodGhpcy5idWZmZXIpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGpzZmVhdE5leHQgZnJvbSAnLi9qc2ZlYXROZXh0J1xuZXhwb3J0IGRlZmF1bHQge1xuICAganNmZWF0TmV4dFxufSJdLCJuYW1lcyI6WyJfcG9vbF9ub2RlX3QiLCJjYWNoZSIsIl9wb29sX2hlYWQiLCJfcG9vbF90YWlsIiwiX3Bvb2xfc2l6ZSIsImNhcGFjaXR5IiwiZGF0YV9zaXplIiwiaSIsIm5vZGUiLCJuZXh0Iiwic2l6ZV9pbl9ieXRlcyIsInNpemUiLCJyZXNpemUiLCJKU0ZFQVRfQ09OU1RBTlRTIiwiRVBTSUxPTiIsIkZMVF9NSU4iLCJVOF90IiwiUzMyX3QiLCJGMzJfdCIsIlM2NF90IiwiRjY0X3QiLCJDMV90IiwiQzJfdCIsIkMzX3QiLCJDNF90IiwiQ09MT1JfUkdCQTJHUkFZIiwiQ09MT1JfUkdCMkdSQVkiLCJDT0xPUl9CR1JBMkdSQVkiLCJDT0xPUl9CR1IyR1JBWSIsIkJPWF9CTFVSX05PU0NBTEUiLCJTVkRfVV9UIiwiU1ZEX1ZfVCIsIlU4QzFfdCIsIlU4QzNfdCIsIlU4QzRfdCIsIkYzMkMxX3QiLCJGMzJDMl90IiwiUzMyQzFfdCIsIlMzMkMyX3QiLCJkYXRhX3R5cGUiLCJfZGF0YV90eXBlX3NpemUiLCJJbnQzMkFycmF5IiwidHlwZSIsIm1hdHJpeF90IiwicGtnIiwianNmZWF0TmV4dCIsImR0IiwiYWxsb2NhdGUiLCJfZ2V0X2RhdGFfdHlwZSIsIl9nZXRfY2hhbm5lbCIsIl9nZXRfZGF0YV90eXBlX3NpemUiLCJ2ZXJzaW9uIiwiZGF0YV90IiwiYyIsInIiLCJfZGF0YV90eXBlIiwiX2RhdGFfYnVmZmVyIiwiY2hhbm5lbCIsImNvbHMiLCJyb3dzIiwiYnVmZmVyIiwiZGF0YSIsInU4IiwiaTMyIiwiZjMyIiwiZjY0Iiwib3RoZXIiLCJvZCIsInRkIiwibiIsImNoIiwibmV3X3NpemUiLCJBcnJheUJ1ZmZlciIsImxlbmd0aCIsIlVpbnQ4QXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiXSwic291cmNlUm9vdCI6IiJ9