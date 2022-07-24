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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _data_type_data_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data_type/data_type */ "./src_ts/data_type/data_type.ts");
/* harmony import */ var _cache_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cache/cache */ "./src_ts/cache/cache.ts");
/* harmony import */ var _matmath_matmath__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./matmath/matmath */ "./src_ts/matmath/matmath.ts");
/* harmony import */ var _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./matrix_t/matrix_t */ "./src_ts/matrix_t/matrix_t.ts");
/* harmony import */ var _keypoint_t_keypoint_t__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./keypoint_t/keypoint_t */ "./src_ts/keypoint_t/keypoint_t.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants/constants */ "./src_ts/constants/constants.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../package.json */ "./package.json");








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

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "math", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "matmath", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "matrix_t", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "keypoint_t", void 0);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "VERSION", _package_json__WEBPACK_IMPORTED_MODULE_13__.version);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "EPSILON", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.EPSILON);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "FLT_MIN", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.FLT_MIN);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8_t", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.U8_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.S32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32_t", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.F32_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.S64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F64_t", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.F64_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C1_t", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C2_t", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C3_t", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "C4_t", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGBA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_RGB2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGRA2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "COLOR_BGR2GRAY", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.COLOR_RGBA2GRAY);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "BOX_BLUR_NOSCALE", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.BOX_BLUR_NOSCALE);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_U_T", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.SVD_U_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "SVD_V_T", _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.SVD_V_T);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C1_t", jsfeatNext.U8_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C3_t", jsfeatNext.U8_t | jsfeatNext.C3_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "U8C4_t", jsfeatNext.U8_t | jsfeatNext.C4_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32C1_t", jsfeatNext.F32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "F32C2_t", jsfeatNext.F32_t | jsfeatNext.C2_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32C1_t", jsfeatNext.S32_t | jsfeatNext.C1_t);

(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(jsfeatNext, "S32C2_t", jsfeatNext.S32_t | jsfeatNext.C2_t);


jsfeatNext.cache = _cache_cache__WEBPACK_IMPORTED_MODULE_8__.cache;
jsfeatNext.matrix_t = _matrix_t_matrix_t__WEBPACK_IMPORTED_MODULE_10__.matrix_t;
jsfeatNext.keypoint_t = _keypoint_t_keypoint_t__WEBPACK_IMPORTED_MODULE_11__.keypoint_t;

jsfeatNext.math = /*#__PURE__*/function (_jsfeatNext) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(_math, _jsfeatNext);

  var _super = _createSuper(_math);

  function _math() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _math);

    _this = _super.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "qsort_stack", void 0);

    _this.qsort_stack = new Int32Array(48 * 2);
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_math, [{
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

      if (data_type & _constants_constants__WEBPACK_IMPORTED_MODULE_12__.JSFEAT_CONSTANTS.U8_t) {
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

  return _math;
}(jsfeatNext);

jsfeatNext.matmath = _matmath_matmath__WEBPACK_IMPORTED_MODULE_9__["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUFrQiw4REFBYztBQUNoQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCa0M7QUFDNkI7QUFDaEQ7QUFDZixlQUFlLHNEQUFPO0FBQ3RCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsU0FBUyxxRUFBcUI7QUFDOUI7Ozs7Ozs7Ozs7Ozs7O0FDVmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUVBQWU7RUFDWmhOLFVBQVUsRUFBVkEsbURBQVVBO0FBREUsQ0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9jYWNoZS9jYWNoZS50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9kYXRhX3R5cGUvZGF0YV90eXBlLnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvanNmZWF0TmV4dC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL2tleXBvaW50X3Qva2V5cG9pbnRfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL21hdG1hdGgvbWF0bWF0aC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vc3JjX3RzL21hdHJpeF90L21hdHJpeF90LnRzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvbm9kZV91dGlscy9fcG9vbF9ub2RlX3QudHMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL3NyY190cy9ub2RlX3V0aWxzL2RhdGFfdC50cyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL2pzZmVhdE5leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc2ZlYXROZXh0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanNmZWF0TmV4dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzZmVhdE5leHQvLi9zcmNfdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wianNmZWF0TmV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqc2ZlYXROZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi8uLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdCdcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGUge1xuICAgIGFsbG9jYXRlOiAoY2FwYWNpdHk6IGFueSwgZGF0YV9zaXplOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgZ2V0X2J1ZmZlcjogKHNpemVfaW5fYnl0ZXM6IG51bWJlcikgPT4gYW55O1xuICAgIHB1dF9idWZmZXI6IChub2RlOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBjYWNoZSBpbXBsZW1lbnRzIElDYWNoZSB7XG4gICAgcHJpdmF0ZSBfcG9vbF9oZWFkOiBhbnk7XG4gICAgcHJpdmF0ZSBfcG9vbF90YWlsOiBhbnk7XG4gICAgcHJpdmF0ZSBfcG9vbF9zaXplOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfaGVhZDtcbiAgICAgICAgdGhpcy5fcG9vbF90YWlsO1xuICAgICAgICB0aGlzLl9wb29sX3NpemUgPSAwO1xuICAgIH1cbiAgICBhbGxvY2F0ZShjYXBhY2l0eTogYW55LCBkYXRhX3NpemU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX3RhaWwgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwYWNpdHk7ICsraSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgX3Bvb2xfbm9kZV90KGRhdGFfc2l6ZSk7XG4gICAgICAgICAgICB0aGlzLl9wb29sX3RhaWwgPSB0aGlzLl9wb29sX3RhaWwubmV4dCA9IG5vZGU7XG5cbiAgICAgICAgICAgIHRoaXMuX3Bvb2xfc2l6ZSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldF9idWZmZXIoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSB7XG4gICAgICAgIC8vIGFzc3VtZSB3ZSBoYXZlIGVub3VnaCBmcmVlIG5vZGVzXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5fcG9vbF9oZWFkO1xuICAgICAgICB0aGlzLl9wb29sX2hlYWQgPSB0aGlzLl9wb29sX2hlYWQubmV4dDtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplLS07XG5cbiAgICAgICAgaWYgKHNpemVfaW5fYnl0ZXMgPiBub2RlLnNpemUpIHtcbiAgICAgICAgICAgIG5vZGUucmVzaXplKHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHB1dF9idWZmZXIobm9kZTogYW55KSB7XG4gICAgICAgIHRoaXMuX3Bvb2xfdGFpbCA9IHRoaXMuX3Bvb2xfdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgdGhpcy5fcG9vbF9zaXplKys7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBKU0ZFQVRfQ09OU1RBTlRTID0ge1xuICAgIC8vIENPTlNUQU5UU1xuICAgIEVQU0lMT046IDAuMDAwMDAwMTE5MjA5Mjg5NixcbiAgICBGTFRfTUlOOiAxRS0zNyxcbiAgICBVOF90OiAweDAxMDAsXG4gICAgUzMyX3Q6IDB4MDIwMCxcbiAgICBGMzJfdDogMHgwNDAwLFxuICAgIFM2NF90OiAweDA4MDAsXG4gICAgRjY0X3Q6IDB4MTAwMCxcbiAgICBDMV90OiAweDAxLFxuICAgIEMyX3Q6IDB4MDIsXG4gICAgQzNfdDogMHgwMyxcbiAgICBDNF90OiAweDA0LFxuXG4gICAgLy8gY29sb3IgY29udmVyc2lvblxuICAgIENPTE9SX1JHQkEyR1JBWTogMCxcbiAgICBDT0xPUl9SR0IyR1JBWTogMSxcbiAgICBDT0xPUl9CR1JBMkdSQVk6IDIsXG4gICAgQ09MT1JfQkdSMkdSQVk6IDMsXG5cbiAgICAvLyBib3ggYmx1ciBvcHRpb25cbiAgICBCT1hfQkxVUl9OT1NDQUxFOiAweDAxLFxuXG4gICAgLy8gc3ZkIG9wdGlvbnNcbiAgICBTVkRfVV9UOiAweDAxLFxuICAgIFNWRF9WX1Q6IDB4MDIsXG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBVOEMxX3Q6IDB4MDEwMCB8IDB4MDEsXG4gICAgVThDM190OiAweDAxMDAgfCAweDAzLFxuICAgIFU4QzRfdDogMHgwMTAwIHwgMHgwNCxcblxuICAgIEYzMkMxX3Q6IDB4MDQwMCB8IDB4MDEsXG4gICAgRjMyQzJfdDogMHgwNDAwIHwgMHgwMixcbiAgICBTMzJDMV90OiAweDAyMDAgfCAweDAxLFxuICAgIFMzMkMyX3Q6IDB4MDIwMCB8IDB4MDJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElEYXRhX1R5cGUge1xuICAgIF9nZXRfZGF0YV90eXBlOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG4gICAgX2dldF9jaGFubmVsOiAodHlwZTogbnVtYmVyKSA9PiBudW1iZXI7XG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZTogKHR5cGU6IG51bWJlcikgPT4gbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgZGF0YV90eXBlIGltcGxlbWVudHMgSURhdGFfVHlwZSB7XG4gICAgcHJpdmF0ZSBfZGF0YV90eXBlX3NpemU6IEludDMyQXJyYXk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFfdHlwZV9zaXplID0gbmV3IEludDMyQXJyYXkoWy0xLCAxLCA0LCAtMSwgNCwgLTEsIC0xLCAtMSwgOCwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIDhdKTs7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRjAwKTtcbiAgICB9XG5cbiAgICBfZ2V0X2NoYW5uZWwodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICh0eXBlICYgMHhGRik7XG4gICAgfVxuXG4gICAgX2dldF9kYXRhX3R5cGVfc2l6ZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YV90eXBlX3NpemVbKHR5cGUgJiAweEZGMDApID4+IDhdO1xuICAgIH1cbn0iLCIvL2ltcG9ydCBfcG9vbF9ub2RlX3QgZnJvbSAnLi9ub2RlX3V0aWxzL19wb29sX25vZGVfdCdcbmltcG9ydCB7IElEYXRhX1R5cGUsIGRhdGFfdHlwZSB9IGZyb20gJy4vZGF0YV90eXBlL2RhdGFfdHlwZSdcbmltcG9ydCB7IElDYWNoZSwgY2FjaGUgfSBmcm9tICcuL2NhY2hlL2NhY2hlJ1xuaW1wb3J0IHsgbWF0aCB9IGZyb20gJy4vbWF0aC9tYXRoJ1xuaW1wb3J0IG1hdG1hdGggZnJvbSAnLi9tYXRtYXRoL21hdG1hdGgnXG5pbXBvcnQgeyBtYXRyaXhfdCB9IGZyb20gJy4vbWF0cml4X3QvbWF0cml4X3QnXG5pbXBvcnQgeyBrZXlwb2ludF90IH0gZnJvbSAnLi9rZXlwb2ludF90L2tleXBvaW50X3QnXG5pbXBvcnQgeyBKU0ZFQVRfQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuaW1wb3J0IHBrZyBmcm9tICcuLi9wYWNrYWdlLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpzZmVhdE5leHQge1xuICAgIHByaXZhdGUgZHQ6IElEYXRhX1R5cGU7XG4gICAgcHJvdGVjdGVkIGNhY2hlOiBJQ2FjaGU7XG4gICAgc3RhdGljIGNhY2hlOiB0eXBlb2YgY2FjaGU7XG4gICAgc3RhdGljIG1hdGg6IHR5cGVvZiBtYXRoO1xuICAgIHN0YXRpYyBtYXRtYXRoOiB0eXBlb2YgbWF0bWF0aDtcbiAgICBzdGF0aWMgbWF0cml4X3Q6IHR5cGVvZiBtYXRyaXhfdDtcbiAgICBzdGF0aWMga2V5cG9pbnRfdDogdHlwZW9mIGtleXBvaW50X3Q7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgY2FjaGUoKTtcbiAgICAgICAgdGhpcy5jYWNoZS5hbGxvY2F0ZSgzMCwgNjQwICogNCk7XG4gICAgfVxuXG4gICAgLy8gVkVSU0lPTlxuICAgIHN0YXRpYyBWRVJTSU9OOiBzdHJpbmcgPSBwa2cudmVyc2lvbjtcblxuICAgIC8vIENPTlNUQU5UU1xuICAgIHN0YXRpYyBFUFNJTE9OID0gSlNGRUFUX0NPTlNUQU5UUy5FUFNJTE9OO1xuICAgIHN0YXRpYyBGTFRfTUlOID0gSlNGRUFUX0NPTlNUQU5UUy5GTFRfTUlOO1xuICAgIHN0YXRpYyBVOF90ID0gSlNGRUFUX0NPTlNUQU5UUy5VOF90O1xuICAgIHN0YXRpYyBTMzJfdCA9IEpTRkVBVF9DT05TVEFOVFMuUzMyX3Q7XG4gICAgc3RhdGljIEYzMl90ID0gSlNGRUFUX0NPTlNUQU5UUy5GMzJfdDtcbiAgICBzdGF0aWMgUzY0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLlM2NF90O1xuICAgIHN0YXRpYyBGNjRfdCA9IEpTRkVBVF9DT05TVEFOVFMuRjY0X3Q7XG4gICAgc3RhdGljIEMxX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMxX3Q7XG4gICAgc3RhdGljIEMyX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMyX3Q7XG4gICAgc3RhdGljIEMzX3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkMzX3Q7XG4gICAgc3RhdGljIEM0X3QgPSBKU0ZFQVRfQ09OU1RBTlRTLkM0X3Q7XG5cbiAgICAvLyBjb2xvciBjb252ZXJzaW9uXG4gICAgc3RhdGljIENPTE9SX1JHQkEyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9SR0IyR1JBWSA9IEpTRkVBVF9DT05TVEFOVFMuQ09MT1JfUkdCQTJHUkFZO1xuICAgIHN0YXRpYyBDT0xPUl9CR1JBMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcbiAgICBzdGF0aWMgQ09MT1JfQkdSMkdSQVkgPSBKU0ZFQVRfQ09OU1RBTlRTLkNPTE9SX1JHQkEyR1JBWTtcblxuICAgIC8vIGJveCBibHVyIG9wdGlvblxuICAgIHN0YXRpYyBCT1hfQkxVUl9OT1NDQUxFID0gSlNGRUFUX0NPTlNUQU5UUy5CT1hfQkxVUl9OT1NDQUxFO1xuICAgIC8vIHN2ZCBvcHRpb25zXG4gICAgc3RhdGljIFNWRF9VX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9VX1Q7XG4gICAgc3RhdGljIFNWRF9WX1QgPSBKU0ZFQVRfQ09OU1RBTlRTLlNWRF9WX1Q7XG5cbiAgICAvLyBwb3B1bGFyIGZvcm1hdHNcbiAgICBzdGF0aWMgVThDMV90ID0gdGhpcy5VOF90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBVOEMzX3QgPSB0aGlzLlU4X3QgfCB0aGlzLkMzX3Q7XG4gICAgc3RhdGljIFU4QzRfdCA9IHRoaXMuVThfdCB8IHRoaXMuQzRfdDtcblxuICAgIHN0YXRpYyBGMzJDMV90ID0gdGhpcy5GMzJfdCB8IHRoaXMuQzFfdDtcbiAgICBzdGF0aWMgRjMyQzJfdCA9IHRoaXMuRjMyX3QgfCB0aGlzLkMyX3Q7XG4gICAgc3RhdGljIFMzMkMxX3QgPSB0aGlzLlMzMl90IHwgdGhpcy5DMV90O1xuICAgIHN0YXRpYyBTMzJDMl90ID0gdGhpcy5TMzJfdCB8IHRoaXMuQzJfdDtcblxuICAgIGdldF9kYXRhX3R5cGUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9kYXRhX3R5cGUodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0X2NoYW5uZWwodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHQuX2dldF9jaGFubmVsKHR5cGUpO1xuICAgIH1cblxuICAgIGdldF9kYXRhX3R5cGVfc2l6ZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5kdC5fZ2V0X2RhdGFfdHlwZV9zaXplKHR5cGUpO1xuICAgIH1cbn1cblxuanNmZWF0TmV4dC5jYWNoZSA9IGNhY2hlO1xuXG5qc2ZlYXROZXh0Lm1hdHJpeF90ID0gbWF0cml4X3Q7XG5cbmpzZmVhdE5leHQua2V5cG9pbnRfdCA9IGtleXBvaW50X3Q7XG5cbmpzZmVhdE5leHQubWF0aCA9IGNsYXNzIF9tYXRoIGV4dGVuZHMganNmZWF0TmV4dCB7XG4gICAgcHJpdmF0ZSBxc29ydF9zdGFjazogSW50MzJBcnJheTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5xc29ydF9zdGFjayA9IG5ldyBJbnQzMkFycmF5KDQ4ICogMik7XG4gICAgfVxuXG4gICAgZ2V0X2dhdXNzaWFuX2tlcm5lbChzaXplOiBudW1iZXIsIHNpZ21hOiBudW1iZXIsIGtlcm5lbDogYW55LCBkYXRhX3R5cGU6IGFueSkge1xuICAgICAgICB2YXIgaSA9IDAsIHggPSAwLjAsIHQgPSAwLjAsIHNpZ21hX3ggPSAwLjAsIHNjYWxlXzJ4ID0gMC4wO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuICAgICAgICB2YXIga2Vybl9ub2RlID0gdGhpcy5jYWNoZS5nZXRfYnVmZmVyKHNpemUgPDwgMik7XG4gICAgICAgIHZhciBfa2VybmVsID0ga2Vybl9ub2RlLmYzMjsvL25ldyBGbG9hdDMyQXJyYXkoc2l6ZSk7XG5cbiAgICAgICAgaWYgKChzaXplICYgMSkgPT0gMSAmJiBzaXplIDw9IDcgJiYgc2lnbWEgPD0gMCkge1xuICAgICAgICAgICAgc3dpdGNoIChzaXplID4+IDEpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4yNSwgX2tlcm5lbFsxXSA9IDAuNSwgX2tlcm5lbFsyXSA9IDAuMjU7XG4gICAgICAgICAgICAgICAgICAgIHN1bSA9IDAuMjUgKyAwLjUgKyAwLjI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbMF0gPSAwLjA2MjUsIF9rZXJuZWxbMV0gPSAwLjI1LCBfa2VybmVsWzJdID0gMC4zNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzNdID0gMC4yNSwgX2tlcm5lbFs0XSA9IDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wNjI1ICsgMC4yNSArIDAuMzc1ICsgMC4yNSArIDAuMDYyNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfa2VybmVsWzBdID0gMC4wMzEyNSwgX2tlcm5lbFsxXSA9IDAuMTA5Mzc1LCBfa2VybmVsWzJdID0gMC4yMTg3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9rZXJuZWxbM10gPSAwLjI4MTI1LCBfa2VybmVsWzRdID0gMC4yMTg3NSwgX2tlcm5lbFs1XSA9IDAuMTA5Mzc1LCBfa2VybmVsWzZdID0gMC4wMzEyNTtcbiAgICAgICAgICAgICAgICAgICAgc3VtID0gMC4wMzEyNSArIDAuMTA5Mzc1ICsgMC4yMTg3NSArIDAuMjgxMjUgKyAwLjIxODc1ICsgMC4xMDkzNzUgKyAwLjAzMTI1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpZ21hX3ggPSBzaWdtYSA+IDAgPyBzaWdtYSA6ICgoc2l6ZSAtIDEpICogMC41IC0gMS4wKSAqIDAuMyArIDAuODtcbiAgICAgICAgICAgIHNjYWxlXzJ4ID0gLTAuNSAvIChzaWdtYV94ICogc2lnbWFfeCk7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAgeCA9IGkgLSAoc2l6ZSAtIDEpICogMC41O1xuICAgICAgICAgICAgICAgIHQgPSBNYXRoLmV4cChzY2FsZV8yeCAqIHggKiB4KTtcblxuICAgICAgICAgICAgICAgIF9rZXJuZWxbaV0gPSB0O1xuICAgICAgICAgICAgICAgIHN1bSArPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFfdHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCkge1xuICAgICAgICAgICAgLy8gaW50IGJhc2VkIGtlcm5lbFxuICAgICAgICAgICAgc3VtID0gMjU2LjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gKF9rZXJuZWxbaV0gKiBzdW0gKyAwLjUpIHwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNsYXNzaWMga2VybmVsXG4gICAgICAgICAgICBzdW0gPSAxLjAgLyBzdW07XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgICAgICAga2VybmVsW2ldID0gX2tlcm5lbFtpXSAqIHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGUucHV0X2J1ZmZlcihrZXJuX25vZGUpO1xuICAgIH1cblxuICAgIC8vIG1vZGVsIGlzIDN4MyBtYXRyaXhfdFxuICAgIHBlcnNwZWN0aXZlXzRwb2ludF90cmFuc2Zvcm0obW9kZWw6IGFueSwgc3JjX3gwOiBudW1iZXIsIHNyY195MDpudW1iZXIsIGRzdF94MDogbnVtYmVyLCBkc3RfeTA6IG51bWJlcixcbiAgICAgICAgc3JjX3gxOiBudW1iZXIsIHNyY195MTogbnVtYmVyLCBkc3RfeDE6IG51bWJlciwgZHN0X3kxOiBudW1iZXIsXG4gICAgICAgIHNyY194MjogbnVtYmVyLCBzcmNfeTI6IG51bWJlciwgZHN0X3gyOiBudW1iZXIsIGRzdF95MjogbnVtYmVyLFxuICAgICAgICBzcmNfeDM6IG51bWJlciwgc3JjX3kzOiBudW1iZXIsIGRzdF94MzogbnVtYmVyLCBkc3RfeTM6IG51bWJlcikge1xuICAgICAgICB2YXIgdDEgPSBzcmNfeDA7XG4gICAgICAgIHZhciB0MiA9IHNyY194MjtcbiAgICAgICAgdmFyIHQ0ID0gc3JjX3kxO1xuICAgICAgICB2YXIgdDUgPSB0MSAqIHQyICogdDQ7XG4gICAgICAgIHZhciB0NiA9IHNyY195MztcbiAgICAgICAgdmFyIHQ3ID0gdDEgKiB0NjtcbiAgICAgICAgdmFyIHQ4ID0gdDIgKiB0NztcbiAgICAgICAgdmFyIHQ5ID0gc3JjX3kyO1xuICAgICAgICB2YXIgdDEwID0gdDEgKiB0OTtcbiAgICAgICAgdmFyIHQxMSA9IHNyY194MTtcbiAgICAgICAgdmFyIHQxNCA9IHNyY195MDtcbiAgICAgICAgdmFyIHQxNSA9IHNyY194MztcbiAgICAgICAgdmFyIHQxNiA9IHQxNCAqIHQxNTtcbiAgICAgICAgdmFyIHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgdmFyIHQyMCA9IHQxNSAqIHQxMSAqIHQ5O1xuICAgICAgICB2YXIgdDIxID0gdDE1ICogdDQ7XG4gICAgICAgIHZhciB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgdmFyIHQyNSA9IHQyICogdDQ7XG4gICAgICAgIHZhciB0MjYgPSB0NiAqIHQyO1xuICAgICAgICB2YXIgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIHZhciB0MjggPSB0OSAqIHQxMTtcbiAgICAgICAgdmFyIHQzMCA9IDEuMCAvICh0MjEgLSB0MjQgLSB0MjUgKyB0MjYgLSB0MjcgKyB0MjgpO1xuICAgICAgICB2YXIgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIHZhciB0MzUgPSB0MTQgKiB0MTE7XG4gICAgICAgIHZhciB0NDEgPSB0NCAqIHQxO1xuICAgICAgICB2YXIgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIHZhciB0NDMgPSB0MTQgKiB0MjtcbiAgICAgICAgdmFyIHQ0NiA9IHQxNiAqIHQ5O1xuICAgICAgICB2YXIgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIHZhciB0NTEgPSB0NCAqIHQ2ICogdDI7XG4gICAgICAgIHZhciB0NTUgPSB0NiAqIHQxNDtcbiAgICAgICAgdmFyIEhyMCA9IC0odDggLSB0NSArIHQxMCAqIHQxMSAtIHQxMSAqIHQ3IC0gdDE2ICogdDIgKyB0MTggLSB0MjAgKyB0MjEgKiB0MikgKiB0MzA7XG4gICAgICAgIHZhciBIcjEgPSAodDUgLSB0OCAtIHQzMiAqIHQ0ICsgdDMyICogdDkgKyB0MTggLSB0MiAqIHQzNSArIHQyNyAqIHQyIC0gdDIwKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyMiA9IHQxO1xuICAgICAgICB2YXIgSHIzID0gKC10OSAqIHQ3ICsgdDQyICsgdDQzICogdDQgLSB0MTYgKiB0NCArIHQ0NiAtIHQ0OCArIHQyNyAqIHQ5IC0gdDUxKSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNCA9ICgtdDQyICsgdDQxICogdDkgLSB0NTUgKiB0MiArIHQ0NiAtIHQ0OCArIHQ1NSAqIHQxMSArIHQ1MSAtIHQyMSAqIHQ5KSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNSA9IHQxNDtcbiAgICAgICAgdmFyIEhyNiA9ICgtdDEwICsgdDQxICsgdDQzIC0gdDM1ICsgdDI0IC0gdDIxIC0gdDI2ICsgdDI3KSAqIHQzMDtcbiAgICAgICAgdmFyIEhyNyA9ICgtdDcgKyB0MTAgKyB0MTYgLSB0NDMgKyB0MjcgLSB0MjggLSB0MjEgKyB0MjUpICogdDMwO1xuXG4gICAgICAgIHQxID0gZHN0X3gwO1xuICAgICAgICB0MiA9IGRzdF94MjtcbiAgICAgICAgdDQgPSBkc3RfeTE7XG4gICAgICAgIHQ1ID0gdDEgKiB0MiAqIHQ0O1xuICAgICAgICB0NiA9IGRzdF95MztcbiAgICAgICAgdDcgPSB0MSAqIHQ2O1xuICAgICAgICB0OCA9IHQyICogdDc7XG4gICAgICAgIHQ5ID0gZHN0X3kyO1xuICAgICAgICB0MTAgPSB0MSAqIHQ5O1xuICAgICAgICB0MTEgPSBkc3RfeDE7XG4gICAgICAgIHQxNCA9IGRzdF95MDtcbiAgICAgICAgdDE1ID0gZHN0X3gzO1xuICAgICAgICB0MTYgPSB0MTQgKiB0MTU7XG4gICAgICAgIHQxOCA9IHQxNiAqIHQxMTtcbiAgICAgICAgdDIwID0gdDE1ICogdDExICogdDk7XG4gICAgICAgIHQyMSA9IHQxNSAqIHQ0O1xuICAgICAgICB0MjQgPSB0MTUgKiB0OTtcbiAgICAgICAgdDI1ID0gdDIgKiB0NDtcbiAgICAgICAgdDI2ID0gdDYgKiB0MjtcbiAgICAgICAgdDI3ID0gdDYgKiB0MTE7XG4gICAgICAgIHQyOCA9IHQ5ICogdDExO1xuICAgICAgICB0MzAgPSAxLjAgLyAodDIxIC0gdDI0IC0gdDI1ICsgdDI2IC0gdDI3ICsgdDI4KTtcbiAgICAgICAgdDMyID0gdDEgKiB0MTU7XG4gICAgICAgIHQzNSA9IHQxNCAqIHQxMTtcbiAgICAgICAgdDQxID0gdDQgKiB0MTtcbiAgICAgICAgdDQyID0gdDYgKiB0NDE7XG4gICAgICAgIHQ0MyA9IHQxNCAqIHQyO1xuICAgICAgICB0NDYgPSB0MTYgKiB0OTtcbiAgICAgICAgdDQ4ID0gdDE0ICogdDkgKiB0MTE7XG4gICAgICAgIHQ1MSA9IHQ0ICogdDYgKiB0MjtcbiAgICAgICAgdDU1ID0gdDYgKiB0MTQ7XG4gICAgICAgIHZhciBIbDAgPSAtKHQ4IC0gdDUgKyB0MTAgKiB0MTEgLSB0MTEgKiB0NyAtIHQxNiAqIHQyICsgdDE4IC0gdDIwICsgdDIxICogdDIpICogdDMwO1xuICAgICAgICB2YXIgSGwxID0gKHQ1IC0gdDggLSB0MzIgKiB0NCArIHQzMiAqIHQ5ICsgdDE4IC0gdDIgKiB0MzUgKyB0MjcgKiB0MiAtIHQyMCkgKiB0MzA7XG4gICAgICAgIHZhciBIbDIgPSB0MTtcbiAgICAgICAgdmFyIEhsMyA9ICgtdDkgKiB0NyArIHQ0MiArIHQ0MyAqIHQ0IC0gdDE2ICogdDQgKyB0NDYgLSB0NDggKyB0MjcgKiB0OSAtIHQ1MSkgKiB0MzA7XG4gICAgICAgIHZhciBIbDQgPSAoLXQ0MiArIHQ0MSAqIHQ5IC0gdDU1ICogdDIgKyB0NDYgLSB0NDggKyB0NTUgKiB0MTEgKyB0NTEgLSB0MjEgKiB0OSkgKiB0MzA7XG4gICAgICAgIHZhciBIbDUgPSB0MTQ7XG4gICAgICAgIHZhciBIbDYgPSAoLXQxMCArIHQ0MSArIHQ0MyAtIHQzNSArIHQyNCAtIHQyMSAtIHQyNiArIHQyNykgKiB0MzA7XG4gICAgICAgIHZhciBIbDcgPSAoLXQ3ICsgdDEwICsgdDE2IC0gdDQzICsgdDI3IC0gdDI4IC0gdDIxICsgdDI1KSAqIHQzMDtcblxuICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGNvZGUgY29tcHV0ZXMgUiA9IEhsICogaW52ZXJzZSBIclxuICAgICAgICB0MiA9IEhyNCAtIEhyNyAqIEhyNTtcbiAgICAgICAgdDQgPSBIcjAgKiBIcjQ7XG4gICAgICAgIHQ1ID0gSHIwICogSHI1O1xuICAgICAgICB0NyA9IEhyMyAqIEhyMTtcbiAgICAgICAgdDggPSBIcjIgKiBIcjM7XG4gICAgICAgIHQxMCA9IEhyMSAqIEhyNjtcbiAgICAgICAgdmFyIHQxMiA9IEhyMiAqIEhyNjtcbiAgICAgICAgdDE1ID0gMS4wIC8gKHQ0IC0gdDUgKiBIcjcgLSB0NyArIHQ4ICogSHI3ICsgdDEwICogSHI1IC0gdDEyICogSHI0KTtcbiAgICAgICAgdDE4ID0gLUhyMyArIEhyNSAqIEhyNjtcbiAgICAgICAgdmFyIHQyMyA9IC1IcjMgKiBIcjcgKyBIcjQgKiBIcjY7XG4gICAgICAgIHQyOCA9IC1IcjEgKyBIcjIgKiBIcjc7XG4gICAgICAgIHZhciB0MzEgPSBIcjAgLSB0MTI7XG4gICAgICAgIHQzNSA9IEhyMCAqIEhyNyAtIHQxMDtcbiAgICAgICAgdDQxID0gLUhyMSAqIEhyNSArIEhyMiAqIEhyNDtcbiAgICAgICAgdmFyIHQ0NCA9IHQ1IC0gdDg7XG4gICAgICAgIHZhciB0NDcgPSB0NCAtIHQ3O1xuICAgICAgICB0NDggPSB0MiAqIHQxNTtcbiAgICAgICAgdmFyIHQ0OSA9IHQyOCAqIHQxNTtcbiAgICAgICAgdmFyIHQ1MCA9IHQ0MSAqIHQxNTtcbiAgICAgICAgdmFyIG1hdCA9IG1vZGVsLmRhdGE7XG4gICAgICAgIG1hdFswXSA9IEhsMCAqIHQ0OCArIEhsMSAqICh0MTggKiB0MTUpIC0gSGwyICogKHQyMyAqIHQxNSk7XG4gICAgICAgIG1hdFsxXSA9IEhsMCAqIHQ0OSArIEhsMSAqICh0MzEgKiB0MTUpIC0gSGwyICogKHQzNSAqIHQxNSk7XG4gICAgICAgIG1hdFsyXSA9IC1IbDAgKiB0NTAgLSBIbDEgKiAodDQ0ICogdDE1KSArIEhsMiAqICh0NDcgKiB0MTUpO1xuICAgICAgICBtYXRbM10gPSBIbDMgKiB0NDggKyBIbDQgKiAodDE4ICogdDE1KSAtIEhsNSAqICh0MjMgKiB0MTUpO1xuICAgICAgICBtYXRbNF0gPSBIbDMgKiB0NDkgKyBIbDQgKiAodDMxICogdDE1KSAtIEhsNSAqICh0MzUgKiB0MTUpO1xuICAgICAgICBtYXRbNV0gPSAtSGwzICogdDUwIC0gSGw0ICogKHQ0NCAqIHQxNSkgKyBIbDUgKiAodDQ3ICogdDE1KTtcbiAgICAgICAgbWF0WzZdID0gSGw2ICogdDQ4ICsgSGw3ICogKHQxOCAqIHQxNSkgLSB0MjMgKiB0MTU7XG4gICAgICAgIG1hdFs3XSA9IEhsNiAqIHQ0OSArIEhsNyAqICh0MzEgKiB0MTUpIC0gdDM1ICogdDE1O1xuICAgICAgICBtYXRbOF0gPSAtSGw2ICogdDUwIC0gSGw3ICogKHQ0NCAqIHQxNSkgKyB0NDcgKiB0MTU7XG4gICAgfVxuXG4gICAgLy8gVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gd2FzIGRlcml2ZWQgZnJvbSAqQlNEIHN5c3RlbSBxc29ydCgpOlxuICAgIC8vIENvcHlyaWdodCAoYykgMTk5MiwgMTk5M1xuICAgIC8vIFRoZSBSZWdlbnRzIG9mIHRoZSBVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIHFzb3J0KGFycmF5OiBhbnksIGxvdzogbnVtYmVyLCBoaWdoOiBudW1iZXIsIGNtcDogYW55KSB7XG4gICAgICAgIHZhciBpc29ydF90aHJlc2ggPSA3O1xuICAgICAgICB2YXIgdCwgdGEsIHRiLCB0YztcbiAgICAgICAgdmFyIHNwID0gMCwgbGVmdCA9IDAsIHJpZ2h0ID0gMCwgaSA9IDAsIG4gPSAwLCBtID0gMCwgcHRyID0gMCwgcHRyMiA9IDAsIGQgPSAwO1xuICAgICAgICB2YXIgbGVmdDAgPSAwLCBsZWZ0MSA9IDAsIHJpZ2h0MCA9IDAsIHJpZ2h0MSA9IDAsIHBpdm90ID0gMCwgYSA9IDAsIGIgPSAwLCBjID0gMCwgc3dhcF9jbnQgPSAwO1xuXG4gICAgICAgIHZhciBzdGFjayA9IHRoaXMucXNvcnRfc3RhY2s7XG5cbiAgICAgICAgaWYgKChoaWdoIC0gbG93ICsgMSkgPD0gMSkgcmV0dXJuO1xuXG4gICAgICAgIHN0YWNrWzBdID0gbG93O1xuICAgICAgICBzdGFja1sxXSA9IGhpZ2g7XG5cbiAgICAgICAgd2hpbGUgKHNwID49IDApIHtcblxuICAgICAgICAgICAgbGVmdCA9IHN0YWNrW3NwIDw8IDFdO1xuICAgICAgICAgICAgcmlnaHQgPSBzdGFja1soc3AgPDwgMSkgKyAxXTtcbiAgICAgICAgICAgIHNwLS07XG5cbiAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgbiA9IChyaWdodCAtIGxlZnQpICsgMTtcblxuICAgICAgICAgICAgICAgIGlmIChuIDw9IGlzb3J0X3RocmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAvL2luc2VydF9zb3J0OlxuICAgICAgICAgICAgICAgICAgICBmb3IgKHB0ciA9IGxlZnQgKyAxOyBwdHIgPD0gcmlnaHQ7IHB0cisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0cjIgPSBwdHI7IHB0cjIgPiBsZWZ0ICYmIGNtcChhcnJheVtwdHIyXSwgYXJyYXlbcHRyMiAtIDFdKTsgcHRyMi0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IGFycmF5W3B0cjJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjJdID0gYXJyYXlbcHRyMiAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjIgLSAxXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGxlZnQwID0gbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQwID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHBpdm90ID0gbGVmdCArIChuID4+IDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuID4gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBuID4+IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gbGVmdCwgYiA9IGxlZnQgKyBkLCBjID0gbGVmdCArIChkIDw8IDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHBpdm90IC0gZCwgYiA9IHBpdm90LCBjID0gcGl2b3QgKyBkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpdm90ID0gY21wKHRhLCB0YikgPyAoY21wKHRiLCB0YykgPyBiIDogKGNtcCh0YSwgdGMpID8gYyA6IGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKGNtcCh0YywgdGIpID8gYiA6IChjbXAodGEsIHRjKSA/IGEgOiBjKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSByaWdodCAtIChkIDw8IDEpLCBiID0gcmlnaHQgLSBkLCBjID0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YSA9IGFycmF5W2FdLCB0YiA9IGFycmF5W2JdLCB0YyA9IGFycmF5W2NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoY21wKHRjLCB0YikgPyBiIDogKGNtcCh0YSwgdGMpID8gYSA6IGMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGEgPSBsZWZ0LCBiID0gcGl2b3QsIGMgPSByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgdGEgPSBhcnJheVthXSwgdGIgPSBhcnJheVtiXSwgdGMgPSBhcnJheVtjXTtcbiAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBjbXAodGEsIHRiKSA/IChjbXAodGIsIHRjKSA/IGIgOiAoY21wKHRhLCB0YykgPyBjIDogYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChjbXAodGMsIHRiKSA/IGIgOiAoY21wKHRhLCB0YykgPyBhIDogYykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGl2b3QgIT0gbGVmdDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwaXZvdF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtwaXZvdF0gPSBhcnJheVtsZWZ0MF07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0MF0gPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGl2b3QgPSBsZWZ0MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDEgPSBsZWZ0MCArIDE7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gcmlnaHQxID0gcmlnaHQwO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhID0gYXJyYXlbcGl2b3RdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgOykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGxlZnQgPD0gcmlnaHQgJiYgIWNtcCh0YSwgYXJyYXlbbGVmdF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjbXAoYXJyYXlbbGVmdF0sIHRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVmdCA+IGxlZnQxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdDFdID0gYXJyYXlbbGVmdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVtsZWZ0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0MSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChsZWZ0IDw9IHJpZ2h0ICYmICFjbXAoYXJyYXlbcmlnaHRdLCB0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNtcCh0YSwgYXJyYXlbcmlnaHRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmlnaHQgPCByaWdodDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtyaWdodDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHQxXSA9IGFycmF5W3JpZ2h0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3JpZ2h0XSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhcF9jbnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDEtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnQgPiByaWdodCkgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtsZWZ0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnRdID0gYXJyYXlbcmlnaHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcmlnaHRdID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXBfY250ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0LS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3dhcF9jbnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQwLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZ290byBpbnNlcnRfc29ydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocHRyID0gbGVmdCArIDE7IHB0ciA8PSByaWdodDsgcHRyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHB0cjIgPSBwdHI7IHB0cjIgPiBsZWZ0ICYmIGNtcChhcnJheVtwdHIyXSwgYXJyYXlbcHRyMiAtIDFdKTsgcHRyMi0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBhcnJheVtwdHIyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbcHRyMl0gPSBhcnJheVtwdHIyIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W3B0cjIgLSAxXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuID0gTWF0aC5taW4oKGxlZnQxIC0gbGVmdDApLCAobGVmdCAtIGxlZnQxKSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAobGVmdCAtIG4pIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSwgKyttKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdDAgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2xlZnQwICsgaV0gPSBhcnJheVttXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W21dID0gdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG4gPSBNYXRoLm1pbigocmlnaHQwIC0gcmlnaHQxKSwgKHJpZ2h0MSAtIHJpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSAocmlnaHQwIC0gbiArIDEpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSwgKyttKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gYXJyYXlbbGVmdCArIGldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlbbGVmdCArIGldID0gYXJyYXlbbV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVttXSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbiA9IChsZWZ0IC0gbGVmdDEpO1xuICAgICAgICAgICAgICAgICAgICBtID0gKHJpZ2h0MSAtIHJpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbc3AgPDwgMV0gPSBsZWZ0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tbKHNwIDw8IDEpICsgMV0gPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQwIC0gbSArIDEsIHJpZ2h0ID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrc3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrW3NwIDw8IDFdID0gcmlnaHQwIC0gbSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrWyhzcCA8PCAxKSArIDFdID0gcmlnaHQwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdDAsIHJpZ2h0ID0gbGVmdDAgKyBuIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0MCwgcmlnaHQgPSBsZWZ0MCArIG4gLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG0gPiAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0MCAtIG0gKyAxLCByaWdodCA9IHJpZ2h0MDtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWVkaWFuKGFycmF5OiBhbnksIGxvdzogbnVtYmVyLCBoaWdoOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHc7XG4gICAgICAgIHZhciBtaWRkbGUgPSAwLCBsbCA9IDAsIGhoID0gMCwgbWVkaWFuID0gKGxvdyArIGhpZ2gpID4+IDE7XG4gICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICBpZiAoaGlnaCA8PSBsb3cpIHJldHVybiBhcnJheVttZWRpYW5dO1xuICAgICAgICAgICAgaWYgKGhpZ2ggPT0gKGxvdyArIDEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5W2xvd10gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hpZ2hdO1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVttZWRpYW5dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWlkZGxlID0gKChsb3cgKyBoaWdoKSA+PiAxKTtcbiAgICAgICAgICAgIGlmIChhcnJheVttaWRkbGVdID4gYXJyYXlbaGlnaF0pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgICAgICBhcnJheVttaWRkbGVdID0gYXJyYXlbaGlnaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGlnaF0gPSB3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFycmF5W2xvd10gPiBhcnJheVtoaWdoXSkge1xuICAgICAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgICAgIGFycmF5W2xvd10gPSBhcnJheVtoaWdoXTtcbiAgICAgICAgICAgICAgICBhcnJheVtoaWdoXSA9IHc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJyYXlbbWlkZGxlXSA+IGFycmF5W2xvd10pIHtcbiAgICAgICAgICAgICAgICB3ID0gYXJyYXlbbWlkZGxlXTtcbiAgICAgICAgICAgICAgICBhcnJheVttaWRkbGVdID0gYXJyYXlbbG93XTtcbiAgICAgICAgICAgICAgICBhcnJheVtsb3ddID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxsID0gKGxvdyArIDEpO1xuICAgICAgICAgICAgdyA9IGFycmF5W21pZGRsZV07XG4gICAgICAgICAgICBhcnJheVttaWRkbGVdID0gYXJyYXlbbGxdO1xuICAgICAgICAgICAgYXJyYXlbbGxdID0gdztcbiAgICAgICAgICAgIGhoID0gaGlnaDtcbiAgICAgICAgICAgIGZvciAoOyA7KSB7XG4gICAgICAgICAgICAgICAgZG8gKytsbDsgd2hpbGUgKGFycmF5W2xvd10gPiBhcnJheVtsbF0pO1xuICAgICAgICAgICAgICAgIGRvIC0taGg7IHdoaWxlIChhcnJheVtoaF0gPiBhcnJheVtsb3ddKTtcbiAgICAgICAgICAgICAgICBpZiAoaGggPCBsbCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgdyA9IGFycmF5W2xsXTtcbiAgICAgICAgICAgICAgICBhcnJheVtsbF0gPSBhcnJheVtoaF07XG4gICAgICAgICAgICAgICAgYXJyYXlbaGhdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHcgPSBhcnJheVtsb3ddO1xuICAgICAgICAgICAgYXJyYXlbbG93XSA9IGFycmF5W2hoXTtcbiAgICAgICAgICAgIGFycmF5W2hoXSA9IHc7XG4gICAgICAgICAgICBpZiAoaGggPD0gbWVkaWFuKVxuICAgICAgICAgICAgICAgIGxvdyA9IGxsO1xuICAgICAgICAgICAgZWxzZSBpZiAoaGggPj0gbWVkaWFuKVxuICAgICAgICAgICAgICAgIGhpZ2ggPSAoaGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59O1xuXG5qc2ZlYXROZXh0Lm1hdG1hdGggPSBtYXRtYXRoO1xuXG4iLCJleHBvcnQgY2xhc3Mga2V5cG9pbnRfdCB7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyO1xuICAgIHB1YmxpYyBhbmdsZTogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY29yZTogbnVtYmVyLCBsZXZlbDogbnVtYmVyLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gXCJ1bmRlZmluZWRcIikgeyB4ID0gMDsgfVxuICAgICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHsgeSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBzY29yZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBzY29yZSA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gXCJ1bmRlZmluZWRcIikgeyBsZXZlbCA9IDA7IH1cbiAgICAgICAgaWYgKHR5cGVvZiBhbmdsZSA9PT0gXCJ1bmRlZmluZWRcIikgeyBhbmdsZSA9IC0xLjA7IH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtYXRtYXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgaWRlbnRpdHkoTTogeyBkYXRhOiBhbnk7IHJvd3M6IGFueTsgY29sczogYW55OyB9LCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHsgdmFsdWUgPSAxOyB9XG4gICAgICAgIHZhciBzcmMgPSBNLmRhdGE7XG4gICAgICAgIHZhciByb3dzID0gTS5yb3dzLCBjb2xzID0gTS5jb2xzLCBjb2xzXzEgPSAoY29scyArIDEpIHwgMDtcbiAgICAgICAgdmFyIGxlbiA9IHJvd3MgKiBjb2xzO1xuICAgICAgICB2YXIgayA9IGxlbjtcbiAgICAgICAgd2hpbGUgKC0tbGVuID49IDApIHNyY1tsZW5dID0gMC4wO1xuICAgICAgICBsZW4gPSBrO1xuICAgICAgICBrID0gMDtcbiAgICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgICAgIHNyY1trXSA9IHZhbHVlO1xuICAgICAgICAgICAgayA9IGsgKyBjb2xzXzE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc3Bvc2UoQXQ6IHsgZGF0YTogYW55OyB9LCBBOiB7IHJvd3M6IGFueTsgY29sczogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgbnJvd3MgPSBBLnJvd3MsIG5jb2xzID0gQS5jb2xzO1xuICAgICAgICB2YXIgQWkgPSAwLCBBdGkgPSAwLCBwQXQgPSAwO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGF0ZCA9IEF0LmRhdGE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXRpICs9IDEsIEFpICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIHBBdCA9IEF0aTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuY29sczsgcEF0ICs9IG5yb3dzLCBqKyspIGF0ZFtwQXRdID0gYWRbQWkgKyBqXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBICogQlxuICAgIG11bHRpcGx5KEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0sIEI6IHsgY29sczogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBBcCA9IDAsIHBBID0gMCwgcEIgPSAwLCBwX0IgPSAwLCBDcCA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3MsIG1jb2xzID0gQi5jb2xzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGJkID0gQi5kYXRhLCBjZCA9IEMuZGF0YTtcbiAgICAgICAgdmFyIHN1bSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG5yb3dzOyBBcCArPSBuY29scywgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHBfQiA9IDAsIGogPSAwOyBqIDwgbWNvbHM7IENwKyssIHBfQisrLCBqKyspIHtcbiAgICAgICAgICAgICAgICBwQiA9IHBfQjtcbiAgICAgICAgICAgICAgICBwQSA9IEFwO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbmNvbHM7IHBBKyssIHBCICs9IG1jb2xzLCBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGFkW3BBXSAqIGJkW3BCXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2RbQ3BdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEgKiBCJ1xuICAgIG11bHRpcGx5X0FCdChDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9LCBCOiB7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgQXAgPSAwLCBwQSA9IDAsIHBCID0gMCwgQ3AgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzLCBtcm93cyA9IEIucm93cztcbiAgICAgICAgdmFyIGFkID0gQS5kYXRhLCBiZCA9IEIuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBucm93czsgQXAgKz0gbmNvbHMsIGkrKykge1xuICAgICAgICAgICAgZm9yIChwQiA9IDAsIGogPSAwOyBqIDwgbXJvd3M7IENwKyssIGorKykge1xuICAgICAgICAgICAgICAgIHBBID0gQXA7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgcEErKywgcEIrKywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBiZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW0NwXSA9IHN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEMgPSBBJyAqIEJcbiAgICBtdWx0aXBseV9BdEIoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgY29sczogYW55OyByb3dzOiBhbnk7IGRhdGE6IGFueTsgfSwgQjogeyBjb2xzOiBhbnk7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgaSA9IDAsIGogPSAwLCBrID0gMDtcbiAgICAgICAgdmFyIEFwID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQiA9IDAsIENwID0gMDtcbiAgICAgICAgdmFyIG5jb2xzID0gQS5jb2xzLCBucm93cyA9IEEucm93cywgbWNvbHMgPSBCLmNvbHM7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgYmQgPSBCLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbmNvbHM7IEFwKyssIGkrKykge1xuICAgICAgICAgICAgZm9yIChwX0IgPSAwLCBqID0gMDsgaiA8IG1jb2xzOyBDcCsrLCBwX0IrKywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEIgPSBwX0I7XG4gICAgICAgICAgICAgICAgcEEgPSBBcDtcbiAgICAgICAgICAgICAgICBzdW0gPSAwLjA7XG4gICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG5yb3dzOyBwQSArPSBuY29scywgcEIgKz0gbWNvbHMsIGsrKykge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gYWRbcEFdICogYmRbcEJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtDcF0gPSBzdW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEEnXG4gICAgbXVsdGlwbHlfQUF0KEM6IHsgZGF0YTogYW55OyB9LCBBOiB7IGNvbHM6IGFueTsgcm93czogYW55OyBkYXRhOiBhbnk7IH0pIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqID0gMCwgayA9IDA7XG4gICAgICAgIHZhciBwQ2RpYWcgPSAwLCBwX0EgPSAwLCBwQSA9IDAsIHBCID0gMCwgcEMgPSAwLCBwQ3QgPSAwO1xuICAgICAgICB2YXIgbmNvbHMgPSBBLmNvbHMsIG5yb3dzID0gQS5yb3dzO1xuICAgICAgICB2YXIgYWQgPSBBLmRhdGEsIGNkID0gQy5kYXRhO1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnJvd3M7IHBDZGlhZyArPSBucm93cyArIDEsIHBfQSA9IHBBLCBpKyspIHtcbiAgICAgICAgICAgIHBDID0gcENkaWFnO1xuICAgICAgICAgICAgcEN0ID0gcENkaWFnO1xuICAgICAgICAgICAgcEIgPSBwX0E7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDwgbnJvd3M7IHBDKyssIHBDdCArPSBucm93cywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBwX0E7XG4gICAgICAgICAgICAgICAgc3VtID0gMC4wO1xuICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBuY29sczsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQSsrXSAqIGFkW3BCKytdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjZFtwQ10gPSBzdW1cbiAgICAgICAgICAgICAgICBjZFtwQ3RdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQyA9IEEnICogQVxuICAgIG11bHRpcGx5X0F0QShDOiB7IGRhdGE6IGFueTsgfSwgQTogeyBjb2xzOiBhbnk7IHJvd3M6IGFueTsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiA9IDAsIGsgPSAwO1xuICAgICAgICB2YXIgcF9BID0gMCwgcEEgPSAwLCBwQiA9IDAsIHBfQyA9IDAsIHBDID0gMCwgcF9DQyA9IDA7XG4gICAgICAgIHZhciBuY29scyA9IEEuY29scywgbnJvd3MgPSBBLnJvd3M7XG4gICAgICAgIHZhciBhZCA9IEEuZGF0YSwgY2QgPSBDLmRhdGE7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBuY29sczsgcF9DICs9IG5jb2xzLCBpKyspIHtcbiAgICAgICAgICAgIHBfQSA9IGk7XG4gICAgICAgICAgICBwX0NDID0gcF9DICsgaTtcbiAgICAgICAgICAgIHBDID0gcF9DQztcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPCBuY29sczsgcEMrKywgcF9DQyArPSBuY29scywgaisrKSB7XG4gICAgICAgICAgICAgICAgcEEgPSBwX0E7XG4gICAgICAgICAgICAgICAgcEIgPSBqO1xuICAgICAgICAgICAgICAgIHN1bSA9IDAuMDtcbiAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbnJvd3M7IHBBICs9IG5jb2xzLCBwQiArPSBuY29scywgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBhZFtwQV0gKiBhZFtwQl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNkW3BDXSA9IHN1bVxuICAgICAgICAgICAgICAgIGNkW3BfQ0NdID0gc3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmFyaW91cyBzbWFsbCBtYXRyaXggb3BlcmF0aW9uc1xuICAgIGlkZW50aXR5XzN4MyhNOiB7IGRhdGE6IGFueTsgfSwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7IHZhbHVlID0gMTsgfVxuICAgICAgICB2YXIgZHQgPSBNLmRhdGE7XG4gICAgICAgIGR0WzBdID0gZHRbNF0gPSBkdFs4XSA9IHZhbHVlO1xuICAgICAgICBkdFsxXSA9IGR0WzJdID0gZHRbM10gPSAwO1xuICAgICAgICBkdFs1XSA9IGR0WzZdID0gZHRbN10gPSAwO1xuICAgIH1cblxuICAgIGludmVydF8zeDMoZnJvbTogeyBkYXRhOiBhbnk7IH0sIHRvOiB7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgQSA9IGZyb20uZGF0YSwgaW52QSA9IHRvLmRhdGE7XG4gICAgICAgIHZhciB0MSA9IEFbNF07XG4gICAgICAgIHZhciB0MiA9IEFbOF07XG4gICAgICAgIHZhciB0NCA9IEFbNV07XG4gICAgICAgIHZhciB0NSA9IEFbN107XG4gICAgICAgIHZhciB0OCA9IEFbMF07XG5cbiAgICAgICAgdmFyIHQ5ID0gdDggKiB0MTtcbiAgICAgICAgdmFyIHQxMSA9IHQ4ICogdDQ7XG4gICAgICAgIHZhciB0MTMgPSBBWzNdO1xuICAgICAgICB2YXIgdDE0ID0gQVsxXTtcbiAgICAgICAgdmFyIHQxNSA9IHQxMyAqIHQxNDtcbiAgICAgICAgdmFyIHQxNyA9IEFbMl07XG4gICAgICAgIHZhciB0MTggPSB0MTMgKiB0MTc7XG4gICAgICAgIHZhciB0MjAgPSBBWzZdO1xuICAgICAgICB2YXIgdDIxID0gdDIwICogdDE0O1xuICAgICAgICB2YXIgdDIzID0gdDIwICogdDE3O1xuICAgICAgICB2YXIgdDI2ID0gMS4wIC8gKHQ5ICogdDIgLSB0MTEgKiB0NSAtIHQxNSAqIHQyICsgdDE4ICogdDUgKyB0MjEgKiB0NCAtIHQyMyAqIHQxKTtcbiAgICAgICAgaW52QVswXSA9ICh0MSAqIHQyIC0gdDQgKiB0NSkgKiB0MjY7XG4gICAgICAgIGludkFbMV0gPSAtKHQxNCAqIHQyIC0gdDE3ICogdDUpICogdDI2O1xuICAgICAgICBpbnZBWzJdID0gLSgtdDE0ICogdDQgKyB0MTcgKiB0MSkgKiB0MjY7XG4gICAgICAgIGludkFbM10gPSAtKHQxMyAqIHQyIC0gdDQgKiB0MjApICogdDI2O1xuICAgICAgICBpbnZBWzRdID0gKHQ4ICogdDIgLSB0MjMpICogdDI2O1xuICAgICAgICBpbnZBWzVdID0gLSh0MTEgLSB0MTgpICogdDI2O1xuICAgICAgICBpbnZBWzZdID0gLSgtdDEzICogdDUgKyB0MSAqIHQyMCkgKiB0MjY7XG4gICAgICAgIGludkFbN10gPSAtKHQ4ICogdDUgLSB0MjEpICogdDI2O1xuICAgICAgICBpbnZBWzhdID0gKHQ5IC0gdDE1KSAqIHQyNjtcbiAgICB9XG5cbiAgICAvLyBDID0gQSAqIEJcbiAgICBtdWx0aXBseV8zeDMoQzogeyBkYXRhOiBhbnk7IH0sIEE6IHsgZGF0YTogYW55OyB9LCBCOiB7IGRhdGE6IGFueTsgfSkge1xuICAgICAgICB2YXIgQ2QgPSBDLmRhdGEsIEFkID0gQS5kYXRhLCBCZCA9IEIuZGF0YTtcbiAgICAgICAgdmFyIG0xXzAgPSBBZFswXSwgbTFfMSA9IEFkWzFdLCBtMV8yID0gQWRbMl07XG4gICAgICAgIHZhciBtMV8zID0gQWRbM10sIG0xXzQgPSBBZFs0XSwgbTFfNSA9IEFkWzVdO1xuICAgICAgICB2YXIgbTFfNiA9IEFkWzZdLCBtMV83ID0gQWRbN10sIG0xXzggPSBBZFs4XTtcblxuICAgICAgICB2YXIgbTJfMCA9IEJkWzBdLCBtMl8xID0gQmRbMV0sIG0yXzIgPSBCZFsyXTtcbiAgICAgICAgdmFyIG0yXzMgPSBCZFszXSwgbTJfNCA9IEJkWzRdLCBtMl81ID0gQmRbNV07XG4gICAgICAgIHZhciBtMl82ID0gQmRbNl0sIG0yXzcgPSBCZFs3XSwgbTJfOCA9IEJkWzhdO1xuXG4gICAgICAgIENkWzBdID0gbTFfMCAqIG0yXzAgKyBtMV8xICogbTJfMyArIG0xXzIgKiBtMl82O1xuICAgICAgICBDZFsxXSA9IG0xXzAgKiBtMl8xICsgbTFfMSAqIG0yXzQgKyBtMV8yICogbTJfNztcbiAgICAgICAgQ2RbMl0gPSBtMV8wICogbTJfMiArIG0xXzEgKiBtMl81ICsgbTFfMiAqIG0yXzg7XG4gICAgICAgIENkWzNdID0gbTFfMyAqIG0yXzAgKyBtMV80ICogbTJfMyArIG0xXzUgKiBtMl82O1xuICAgICAgICBDZFs0XSA9IG0xXzMgKiBtMl8xICsgbTFfNCAqIG0yXzQgKyBtMV81ICogbTJfNztcbiAgICAgICAgQ2RbNV0gPSBtMV8zICogbTJfMiArIG0xXzQgKiBtMl81ICsgbTFfNSAqIG0yXzg7XG4gICAgICAgIENkWzZdID0gbTFfNiAqIG0yXzAgKyBtMV83ICogbTJfMyArIG0xXzggKiBtMl82O1xuICAgICAgICBDZFs3XSA9IG0xXzYgKiBtMl8xICsgbTFfNyAqIG0yXzQgKyBtMV84ICogbTJfNztcbiAgICAgICAgQ2RbOF0gPSBtMV82ICogbTJfMiArIG0xXzcgKiBtMl81ICsgbTFfOCAqIG0yXzg7XG4gICAgfVxuXG4gICAgbWF0M3gzX2RldGVybWluYW50KE06IHsgZGF0YTogYW55OyB9KSB7XG4gICAgICAgIHZhciBtZCA9IE0uZGF0YTtcbiAgICAgICAgcmV0dXJuIG1kWzBdICogbWRbNF0gKiBtZFs4XSAtXG4gICAgICAgICAgICBtZFswXSAqIG1kWzVdICogbWRbN10gLVxuICAgICAgICAgICAgbWRbM10gKiBtZFsxXSAqIG1kWzhdICtcbiAgICAgICAgICAgIG1kWzNdICogbWRbMl0gKiBtZFs3XSArXG4gICAgICAgICAgICBtZFs2XSAqIG1kWzFdICogbWRbNV0gLVxuICAgICAgICAgICAgbWRbNl0gKiBtZFsyXSAqIG1kWzRdO1xuICAgIH1cblxuICAgIGRldGVybWluYW50XzN4MyhNMTE6IG51bWJlciwgTTEyOiBudW1iZXIsIE0xMzogbnVtYmVyLFxuICAgICAgICBNMjE6IG51bWJlciwgTTIyOiBudW1iZXIsIE0yMzogbnVtYmVyLFxuICAgICAgICBNMzE6IG51bWJlciwgTTMyOiBudW1iZXIsIE0zMzogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBNMTEgKiBNMjIgKiBNMzMgLSBNMTEgKiBNMjMgKiBNMzIgLVxuICAgICAgICAgICAgTTIxICogTTEyICogTTMzICsgTTIxICogTTEzICogTTMyICtcbiAgICAgICAgICAgIE0zMSAqIE0xMiAqIE0yMyAtIE0zMSAqIE0xMyAqIE0yMjtcbiAgICB9XG59IiwiaW1wb3J0IHsgSURhdGFfVHlwZSwgZGF0YV90eXBlIH0gZnJvbSAnLi4vZGF0YV90eXBlL2RhdGFfdHlwZSdcbmltcG9ydCB7IGRhdGFfdCB9IGZyb20gJy4uL25vZGVfdXRpbHMvZGF0YV90J1xuaW1wb3J0IHsgSlNGRUFUX0NPTlNUQU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1hdHJpeF9UIHtcbiAgICBhbGxvY2F0ZTogKCkgPT4gdm9pZDtcbiAgICBjb3B5X3RvOiAob3RoZXI6IGFueSkgPT4gdm9pZDtcbiAgICByZXNpemU6IChjOiBudW1iZXIsIHI6IG51bWJlciwgY2g6IGFueSkgPT4gdm9pZDtcbn1cbmV4cG9ydCBjbGFzcyBtYXRyaXhfdCBpbXBsZW1lbnRzIElNYXRyaXhfVCB7XG4gICAgcHJpdmF0ZSBkdDogSURhdGFfVHlwZTtcbiAgICBwdWJsaWMgdHlwZTogbnVtYmVyO1xuICAgIHB1YmxpYyBjaGFubmVsOiBudW1iZXI7XG4gICAgcHVibGljIGNvbHM6IG51bWJlcjtcbiAgICBwdWJsaWMgcm93czogbnVtYmVyO1xuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG4gICAgcHVibGljIGJ1ZmZlcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKGM6IG51bWJlciwgcjogbnVtYmVyLCBfZGF0YV90eXBlOiBudW1iZXIsIF9kYXRhX2J1ZmZlcjogYW55KSB7XG4gICAgICAgIHRoaXMuZHQgPSBuZXcgZGF0YV90eXBlKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuZHQuX2dldF9kYXRhX3R5cGUoX2RhdGFfdHlwZSkgfCAwO1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLmR0Ll9nZXRfY2hhbm5lbChfZGF0YV90eXBlKSB8IDA7XG4gICAgICAgIHRoaXMuY29scyA9IGMgfCAwO1xuICAgICAgICB0aGlzLnJvd3MgPSByIHwgMDtcbiAgICAgICAgaWYgKHR5cGVvZiBfZGF0YV9idWZmZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsb2NhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gX2RhdGFfYnVmZmVyO1xuICAgICAgICAgICAgLy8gZGF0YSB1c2VyIGFza2VkIGZvclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5VOF90ID8gdGhpcy5idWZmZXIudTggOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5TMzJfdCA/IHRoaXMuYnVmZmVyLmkzMiA6ICh0aGlzLnR5cGUgJiBKU0ZFQVRfQ09OU1RBTlRTLkYzMl90ID8gdGhpcy5idWZmZXIuZjMyIDogdGhpcy5idWZmZXIuZjY0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsb2NhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vIGNsZWFyIHJlZmVyZW5jZXNcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgZGVsZXRlIHRoaXMuYnVmZmVyO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBkYXRhX3QoKHRoaXMuY29scyAqIHRoaXMuZHQuX2dldF9kYXRhX3R5cGVfc2l6ZSh0aGlzLnR5cGUpICogdGhpcy5jaGFubmVsKSAqIHRoaXMucm93cyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuVThfdCA/IHRoaXMuYnVmZmVyLnU4IDogKHRoaXMudHlwZSAmIEpTRkVBVF9DT05TVEFOVFMuUzMyX3QgPyB0aGlzLmJ1ZmZlci5pMzIgOiAodGhpcy50eXBlICYgSlNGRUFUX0NPTlNUQU5UUy5GMzJfdCA/IHRoaXMuYnVmZmVyLmYzMiA6IHRoaXMuYnVmZmVyLmY2NCkpO1xuICAgIH1cbiAgICBjb3B5X3RvKG90aGVyOiBhbnkpIHtcbiAgICAgICAgdmFyIG9kID0gb3RoZXIuZGF0YSwgdGQgPSB0aGlzLmRhdGE7XG4gICAgICAgIHZhciBpID0gMCwgbiA9ICh0aGlzLmNvbHMgKiB0aGlzLnJvd3MgKiB0aGlzLmNoYW5uZWwpIHwgMDtcbiAgICAgICAgZm9yICg7IGkgPCBuIC0gNDsgaSArPSA0KSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICAgICAgb2RbaSArIDFdID0gdGRbaSArIDFdO1xuICAgICAgICAgICAgb2RbaSArIDJdID0gdGRbaSArIDJdO1xuICAgICAgICAgICAgb2RbaSArIDNdID0gdGRbaSArIDNdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgICAgICBvZFtpXSA9IHRkW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2l6ZShjOiBudW1iZXIsIHI6IG51bWJlciwgY2g6IGFueSkge1xuICAgICAgICBpZiAodHlwZW9mIGNoID09PSBcInVuZGVmaW5lZFwiKSB7IGNoID0gdGhpcy5jaGFubmVsOyB9XG4gICAgICAgIC8vIHJlbG9jYXRlIGJ1ZmZlciBvbmx5IGlmIG5ldyBzaXplIGRvZXNudCBmaXRcbiAgICAgICAgdmFyIG5ld19zaXplID0gKGMgKiB0aGlzLmR0Ll9nZXRfZGF0YV90eXBlX3NpemUodGhpcy50eXBlKSAqIGNoKSAqIHI7XG4gICAgICAgIGlmIChuZXdfc2l6ZSA+IHRoaXMuYnVmZmVyLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuY29scyA9IGM7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSByO1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gY2g7XG4gICAgICAgICAgICB0aGlzLmFsbG9jYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbHMgPSBjO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gcjtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbCA9IGNoO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IElEYXRhX1QsIGRhdGFfdCB9IGZyb20gJy4vZGF0YV90J1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb29sX05vZGVfVCB7XG4gICAgcmVzaXplOiAoc2l6ZV9pbl9ieXRlczogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBfcG9vbF9ub2RlX3QgaW1wbGVtZW50cyBJUG9vbF9Ob2RlX1Qge1xuICAgIHB1YmxpYyBuZXh0OiBhbnk7XG4gICAgcHVibGljIGRhdGE/OiBJRGF0YV9UO1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIGJ1ZmZlcjogYW55O1xuICAgIHB1YmxpYyB1ODogVWludDhBcnJheTtcbiAgICBwdWJsaWMgaTMyOiBJbnQzMkFycmF5O1xuICAgIHB1YmxpYyBmMzI6IEZsb2F0MzJBcnJheTtcbiAgICBwdWJsaWMgZjY0OiBGbG9hdDY0QXJyYXk7XG5cbiAgICBjb25zdHJ1Y3RvcihzaXplX2luX2J5dGVzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IGRhdGFfdChzaXplX2luX2J5dGVzKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kYXRhLnNpemU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5kYXRhLmJ1ZmZlcjtcbiAgICAgICAgdGhpcy51OCA9IHRoaXMuZGF0YS51ODtcbiAgICAgICAgdGhpcy5pMzIgPSB0aGlzLmRhdGEuaTMyO1xuICAgICAgICB0aGlzLmYzMiA9IHRoaXMuZGF0YS5mMzI7XG4gICAgICAgIHRoaXMuZjY0ID0gdGhpcy5kYXRhLmY2NDtcbiAgICB9XG4gICAgcmVzaXplKHNpemVfaW5fYnl0ZXM6IG51bWJlcikge1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgZGF0YV90KHNpemVfaW5fYnl0ZXMpO1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRhdGEuc2l6ZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmRhdGEuYnVmZmVyO1xuICAgICAgICB0aGlzLnU4ID0gdGhpcy5kYXRhLnU4O1xuICAgICAgICB0aGlzLmkzMiA9IHRoaXMuZGF0YS5pMzI7XG4gICAgICAgIHRoaXMuZjMyID0gdGhpcy5kYXRhLmYzMjtcbiAgICAgICAgdGhpcy5mNjQgPSB0aGlzLmRhdGEuZjY0O1xuICAgIH1cbn0iLCJleHBvcnQgaW50ZXJmYWNlIElEYXRhX1Qge1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBidWZmZXI6IEFycmF5QnVmZmVyO1xuICAgIHU4OiBVaW50OEFycmF5O1xuICAgIGkzMjogSW50MzJBcnJheTtcbiAgICBmMzI6IEZsb2F0MzJBcnJheTtcbiAgICBmNjQ6IEZsb2F0NjRBcnJheTtcbn1cblxuZXhwb3J0IGNsYXNzIGRhdGFfdCBpbXBsZW1lbnRzIElEYXRhX1QgIHtcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBidWZmZXI6IEFycmF5QnVmZmVyO1xuICAgIHB1YmxpYyB1ODogVWludDhBcnJheTtcbiAgICBwdWJsaWMgaTMyOiBJbnQzMkFycmF5O1xuICAgIHB1YmxpYyBmMzI6IEZsb2F0MzJBcnJheTtcbiAgICBwdWJsaWMgZjY0OiBGbG9hdDY0QXJyYXk7XG4gICAgY29uc3RydWN0b3Ioc2l6ZV9pbl9ieXRlczogbnVtYmVyLCBidWZmZXI/OiBhbnkpIHtcbiAgICAgICAgLy8gd2UgbmVlZCBhbGlnbiBzaXplIHRvIG11bHRpcGxlIG9mIDhcbiAgICAgICAgdGhpcy5zaXplID0gKChzaXplX2luX2J5dGVzICsgNykgfCAwKSAmIC04O1xuICAgICAgICBpZiAodHlwZW9mIGJ1ZmZlciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5zaXplKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgICAgdGhpcy5zaXplID0gYnVmZmVyLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnU4ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmkzMiA9IG5ldyBJbnQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mMzIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5mNjQgPSBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuYnVmZmVyKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBqc2ZlYXROZXh0IGZyb20gJy4vanNmZWF0TmV4dCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgIGpzZmVhdE5leHRcbn0iXSwibmFtZXMiOlsiX3Bvb2xfbm9kZV90IiwiY2FjaGUiLCJfcG9vbF9oZWFkIiwiX3Bvb2xfdGFpbCIsIl9wb29sX3NpemUiLCJjYXBhY2l0eSIsImRhdGFfc2l6ZSIsImkiLCJub2RlIiwibmV4dCIsInNpemVfaW5fYnl0ZXMiLCJzaXplIiwicmVzaXplIiwiSlNGRUFUX0NPTlNUQU5UUyIsIkVQU0lMT04iLCJGTFRfTUlOIiwiVThfdCIsIlMzMl90IiwiRjMyX3QiLCJTNjRfdCIsIkY2NF90IiwiQzFfdCIsIkMyX3QiLCJDM190IiwiQzRfdCIsIkNPTE9SX1JHQkEyR1JBWSIsIkNPTE9SX1JHQjJHUkFZIiwiQ09MT1JfQkdSQTJHUkFZIiwiQ09MT1JfQkdSMkdSQVkiLCJCT1hfQkxVUl9OT1NDQUxFIiwiU1ZEX1VfVCIsIlNWRF9WX1QiLCJVOEMxX3QiLCJVOEMzX3QiLCJVOEM0X3QiLCJGMzJDMV90IiwiRjMyQzJfdCIsIlMzMkMxX3QiLCJTMzJDMl90IiwiZGF0YV90eXBlIiwiX2RhdGFfdHlwZV9zaXplIiwiSW50MzJBcnJheSIsInR5cGUiLCJtYXRtYXRoIiwibWF0cml4X3QiLCJrZXlwb2ludF90IiwicGtnIiwianNmZWF0TmV4dCIsImR0IiwiYWxsb2NhdGUiLCJfZ2V0X2RhdGFfdHlwZSIsIl9nZXRfY2hhbm5lbCIsIl9nZXRfZGF0YV90eXBlX3NpemUiLCJ2ZXJzaW9uIiwibWF0aCIsInFzb3J0X3N0YWNrIiwic2lnbWEiLCJrZXJuZWwiLCJ4IiwidCIsInNpZ21hX3giLCJzY2FsZV8yeCIsInN1bSIsImtlcm5fbm9kZSIsImdldF9idWZmZXIiLCJfa2VybmVsIiwiZjMyIiwiTWF0aCIsImV4cCIsInB1dF9idWZmZXIiLCJtb2RlbCIsInNyY194MCIsInNyY195MCIsImRzdF94MCIsImRzdF95MCIsInNyY194MSIsInNyY195MSIsImRzdF94MSIsImRzdF95MSIsInNyY194MiIsInNyY195MiIsImRzdF94MiIsImRzdF95MiIsInNyY194MyIsInNyY195MyIsImRzdF94MyIsImRzdF95MyIsInQxIiwidDIiLCJ0NCIsInQ1IiwidDYiLCJ0NyIsInQ4IiwidDkiLCJ0MTAiLCJ0MTEiLCJ0MTQiLCJ0MTUiLCJ0MTYiLCJ0MTgiLCJ0MjAiLCJ0MjEiLCJ0MjQiLCJ0MjUiLCJ0MjYiLCJ0MjciLCJ0MjgiLCJ0MzAiLCJ0MzIiLCJ0MzUiLCJ0NDEiLCJ0NDIiLCJ0NDMiLCJ0NDYiLCJ0NDgiLCJ0NTEiLCJ0NTUiLCJIcjAiLCJIcjEiLCJIcjIiLCJIcjMiLCJIcjQiLCJIcjUiLCJIcjYiLCJIcjciLCJIbDAiLCJIbDEiLCJIbDIiLCJIbDMiLCJIbDQiLCJIbDUiLCJIbDYiLCJIbDciLCJ0MTIiLCJ0MjMiLCJ0MzEiLCJ0NDQiLCJ0NDciLCJ0NDkiLCJ0NTAiLCJtYXQiLCJkYXRhIiwiYXJyYXkiLCJsb3ciLCJoaWdoIiwiY21wIiwiaXNvcnRfdGhyZXNoIiwidGEiLCJ0YiIsInRjIiwic3AiLCJsZWZ0IiwicmlnaHQiLCJuIiwibSIsInB0ciIsInB0cjIiLCJkIiwibGVmdDAiLCJsZWZ0MSIsInJpZ2h0MCIsInJpZ2h0MSIsInBpdm90IiwiYSIsImIiLCJjIiwic3dhcF9jbnQiLCJzdGFjayIsIm1pbiIsInciLCJtaWRkbGUiLCJsbCIsImhoIiwibWVkaWFuIiwieSIsInNjb3JlIiwibGV2ZWwiLCJhbmdsZSIsIk0iLCJ2YWx1ZSIsInNyYyIsInJvd3MiLCJjb2xzIiwiY29sc18xIiwibGVuIiwiayIsIkF0IiwiQSIsImoiLCJucm93cyIsIm5jb2xzIiwiQWkiLCJBdGkiLCJwQXQiLCJhZCIsImF0ZCIsIkMiLCJCIiwiQXAiLCJwQSIsInBCIiwicF9CIiwiQ3AiLCJtY29scyIsImJkIiwiY2QiLCJtcm93cyIsInBDZGlhZyIsInBfQSIsInBDIiwicEN0IiwicF9DIiwicF9DQyIsImZyb20iLCJ0byIsImludkEiLCJ0MTMiLCJ0MTciLCJDZCIsIkFkIiwiQmQiLCJtMV8wIiwibTFfMSIsIm0xXzIiLCJtMV8zIiwibTFfNCIsIm0xXzUiLCJtMV82IiwibTFfNyIsIm0xXzgiLCJtMl8wIiwibTJfMSIsIm0yXzIiLCJtMl8zIiwibTJfNCIsIm0yXzUiLCJtMl82IiwibTJfNyIsIm0yXzgiLCJtZCIsIk0xMSIsIk0xMiIsIk0xMyIsIk0yMSIsIk0yMiIsIk0yMyIsIk0zMSIsIk0zMiIsIk0zMyIsImRhdGFfdCIsInIiLCJfZGF0YV90eXBlIiwiX2RhdGFfYnVmZmVyIiwiY2hhbm5lbCIsImJ1ZmZlciIsInU4IiwiaTMyIiwiZjY0Iiwib3RoZXIiLCJvZCIsInRkIiwiY2giLCJuZXdfc2l6ZSIsIkFycmF5QnVmZmVyIiwibGVuZ3RoIiwiVWludDhBcnJheSIsIkZsb2F0MzJBcnJheSIsIkZsb2F0NjRBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=