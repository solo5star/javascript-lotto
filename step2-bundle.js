/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/LottoController.js":
/*!********************************!*\
  !*** ./src/LottoController.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_RestartCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant/RestartCommand */ "./src/constant/RestartCommand.js");
/* harmony import */ var _domain_LottoResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/LottoResult */ "./src/domain/LottoResult.js");
/* harmony import */ var _domain_subject_Buyer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/subject/Buyer */ "./src/domain/subject/Buyer.js");
/* harmony import */ var _domain_subject_Seller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain/subject/Seller */ "./src/domain/subject/Seller.js");
/* harmony import */ var _errors_LottoError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors/LottoError */ "./src/errors/LottoError.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _inputView = /*#__PURE__*/new WeakMap();
var _outputView = /*#__PURE__*/new WeakMap();
var _buyer = /*#__PURE__*/new WeakMap();
var _seller = /*#__PURE__*/new WeakMap();
var _finished = /*#__PURE__*/new WeakMap();
var _throwIfFinished = /*#__PURE__*/new WeakSet();
var LottoController = /*#__PURE__*/function () {
  /** @type {Buyer} */

  /** @type {Seller} */

  /** @type {boolean} 컨트롤러가 계속 사용될 수 있는지 여부. 재시작 제어를 위해 사용한다. */

  function LottoController(_ref) {
    var inputView = _ref.inputView,
      outputView = _ref.outputView;
    _classCallCheck(this, LottoController);
    _classPrivateMethodInitSpec(this, _throwIfFinished);
    _classPrivateFieldInitSpec(this, _inputView, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _outputView, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _buyer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _seller, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _finished, {
      writable: true,
      value: false
    });
    _classPrivateFieldSet(this, _inputView, inputView);
    _classPrivateFieldSet(this, _outputView, outputView);
  }
  _createClass(LottoController, [{
    key: "isFinished",
    value: function isFinished() {
      return _classPrivateFieldGet(this, _finished);
    }
  }, {
    key: "finish",
    value: function finish() {
      _classPrivateFieldSet(this, _finished, true);
    }
  }, {
    key: "proceedBuyLottos",
    value: function () {
      var _proceedBuyLottos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var money;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _classPrivateMethodGet(this, _throwIfFinished, _throwIfFinished2).call(this);
              _context.next = 3;
              return _classPrivateFieldGet(this, _inputView).readMoney();
            case 3:
              money = _context.sent;
              _classPrivateFieldSet(this, _buyer, new _domain_subject_Buyer__WEBPACK_IMPORTED_MODULE_2__["default"](money));
              _classPrivateFieldSet(this, _seller, new _domain_subject_Seller__WEBPACK_IMPORTED_MODULE_3__["default"]());
              _classPrivateFieldGet(this, _buyer).buyLottos(_classPrivateFieldGet(this, _seller));
              _classPrivateFieldGet(this, _outputView).printLottos(_classPrivateFieldGet(this, _buyer).getLottos());
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function proceedBuyLottos() {
        return _proceedBuyLottos.apply(this, arguments);
      }
      return proceedBuyLottos;
    }()
  }, {
    key: "proceedLottoResult",
    value: function () {
      var _proceedLottoResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var winningLotto, lottoResult, profitRate;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _classPrivateMethodGet(this, _throwIfFinished, _throwIfFinished2).call(this);
              _context2.next = 3;
              return _classPrivateFieldGet(this, _inputView).readWinningLotto();
            case 3:
              winningLotto = _context2.sent;
              lottoResult = new _domain_LottoResult__WEBPACK_IMPORTED_MODULE_1__["default"](winningLotto);
              _classPrivateFieldGet(this, _buyer).receiveRewards(lottoResult);
              profitRate = _classPrivateFieldGet(this, _buyer).getProfitRate();
              _classPrivateFieldGet(this, _outputView).printLottoResult(lottoResult, _classPrivateFieldGet(this, _buyer).getRewards());
              _classPrivateFieldGet(this, _outputView).printProfitRate(profitRate);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function proceedLottoResult() {
        return _proceedLottoResult.apply(this, arguments);
      }
      return proceedLottoResult;
    }()
  }, {
    key: "proceedRestart",
    value: function () {
      var _proceedRestart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var restartCommand;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _classPrivateMethodGet(this, _throwIfFinished, _throwIfFinished2).call(this);
              _context3.next = 3;
              return _classPrivateFieldGet(this, _inputView).readRestartCommand();
            case 3:
              restartCommand = _context3.sent;
              if (!(restartCommand === _constant_RestartCommand__WEBPACK_IMPORTED_MODULE_0__["default"].YES)) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");
            case 6:
              _classPrivateFieldGet(this, _outputView).printExit();
              this.finish();
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function proceedRestart() {
        return _proceedRestart.apply(this, arguments);
      }
      return proceedRestart;
    }()
  }]);
  return LottoController;
}();
function _throwIfFinished2() {
  if (_classPrivateFieldGet(this, _finished)) throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_4__["default"]('사용이 종료된 컨트롤러입니다.');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoController);

/***/ }),

/***/ "./src/Validation.js":
/*!***************************!*\
  !*** ./src/Validation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_Messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant/Messages */ "./src/constant/Messages.js");
/* harmony import */ var _constant_RestartCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant/RestartCommand */ "./src/constant/RestartCommand.js");
/* harmony import */ var _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/lotto/Lotto */ "./src/domain/lotto/Lotto.js");
/* harmony import */ var _errors_LottoError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors/LottoError */ "./src/errors/LottoError.js");




var Validation = {
  REGEX_NUMERIC: /^\d+$/,
  isNumeric: function isNumeric(text) {
    return Validation.REGEX_NUMERIC.test(text);
  },
  validateMoney: function validateMoney(money) {
    if (!Validation.isNumeric(money) || money < 0) {
      throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_3__["default"](_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR_MONEY_SHOULD_POSITIVE_INTEGER);
    }
    if (money % _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_2__["default"].PRICE !== 0 || money / _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_2__["default"].PRICE <= 0) {
      throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_3__["default"](_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR_MONEY_AMOUNT_SHOULD_MULTIPLE_OF, _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_2__["default"].PRICE);
    }
  },
  validateLottoNumber: function validateLottoNumber(lottoNumber) {
    if (!Validation.isNumeric(lottoNumber)) {
      throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_3__["default"](_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR_LOTTO_NUMBER_SHOULD_NUMERIC);
    }
    if (lottoNumber < _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_2__["default"].NUMBER_LOWER_BOUND || _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_2__["default"].NUMBER_UPPER_BOUND < lottoNumber) {
      throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_3__["default"](_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR_LOTTO_NUMBER_SHOULD_BETWEEN, _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_2__["default"].NUMBER_LOWER_BOUND, _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_2__["default"].NUMBER_UPPER_BOUND);
    }
  },
  validateLottoNumbers: function validateLottoNumbers(lottoNumbers) {
    Validation.validateIsArray(lottoNumbers);
    Validation.validateArrayLength(lottoNumbers);
    Validation.validateUniqueNumbers(lottoNumbers);
    lottoNumbers.forEach(Validation.validateLottoNumber);
  },
  validateIsArray: function validateIsArray(lottoNumbers) {
    if (!Array.isArray(lottoNumbers)) {
      throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_3__["default"](_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR_LOTTO_NUMBERS_SHOULD_ARRAY);
    }
  },
  validateArrayLength: function validateArrayLength(lottoNumbers) {
    if (lottoNumbers.length !== _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_2__["default"].LENGTH) {
      throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_3__["default"](_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR_LOTTO_NUMBERS_SHOULD_LENGTH_OF, _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_2__["default"].LENGTH);
    }
  },
  validateUniqueNumbers: function validateUniqueNumbers(lottoNumbers) {
    var lottoSet = new Set(lottoNumbers);
    if (lottoNumbers.length !== lottoSet.size) {
      throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_3__["default"](_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR_LOTTO_NUMBERS_SHOULD_UNIQUE);
    }
  },
  validateBonusNumberUnique: function validateBonusNumberUnique(lottoNumbers, bonusNumber) {
    if (lottoNumbers.includes(bonusNumber)) {
      throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_3__["default"](_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR_BONUS_NUMBER_SHOULD_UNIQUE);
    }
  },
  validateRestartCommand: function validateRestartCommand(command) {
    if (!Object.values(_constant_RestartCommand__WEBPACK_IMPORTED_MODULE_1__["default"]).includes(command)) {
      throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_3__["default"](_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR_RESTART_COMMAND_SHOULD_BE);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validation);

/***/ }),

/***/ "./src/constant/Messages.js":
/*!**********************************!*\
  !*** ./src/constant/Messages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Messages = {
  BONUS_NUMBER_REWARD_NAME: '{0}개 + 보너스 볼 일치',
  REWARD_NAME: '{0}개 일치',
  INPUT_MONEY: '구입 금액을 입력해 주세요.',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUIMBER: '보너스 번호를 입력해 주세요.',
  INPUT_RESTART_COMMAND: '다시 시작하시겠습니까? (y/n)',
  PRINT_BOUGHT_LOTTOS_COUNT: '{0}개를 구매했습니다.',
  PRINT_BOUGHT_LOTTO: '[{0}]',
  PRINT_LOTTO_RESULT_TITLE: '당첨 통계',
  PRINT_LOTTO_RESULT_SUBTITLE: '★-★-★-★-★-★',
  PRINT_LOTTO_RESULT_REWARD: '{0} ({1}원) - {2}개',
  PRINT_PROFIT_RATE: '총 수익률은 {0}% 입니다.',
  PRINT_EXIT: '게임이 종료되었습니다.',
  ERROR_MONEY_SHOULD_POSITIVE_INTEGER: '로또 구매 금액은 0 이상의 정수를 입력해야 합니다.',
  ERROR_MONEY_AMOUNT_SHOULD_MULTIPLE_OF: '{0}원 단위로 금액을 주어야 합니다.',
  ERROR_LOTTO_NUMBER_SHOULD_NUMERIC: '로또 번호는 숫자로 이루어져 있어야 합니다.',
  ERROR_LOTTO_NUMBER_SHOULD_BETWEEN: '로또 번호는 {0}에서 {1} 사이의 숫자여야 합니다.',
  ERROR_LOTTO_NUMBERS_SHOULD_ARRAY: '로또 번호는 배열 타입이어야 합니다.',
  ERROR_LOTTO_NUMBERS_SHOULD_LENGTH_OF: '로또 번호는 {0}자리여야 합니다.',
  ERROR_LOTTO_NUMBERS_SHOULD_UNIQUE: '로또 번호는 중복될 수 없습니다.',
  ERROR_BONUS_NUMBER_SHOULD_UNIQUE: '로또 번호와 보너스 번호는 중복될 수 없습니다.',
  ERROR_RESTART_COMMAND_SHOULD_BE: '재시작 명령어는 y또는 n으로 입력해야 합니다.',
  format: function format(message) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return args.reduce(function (formattedMessage, arg, index) {
      return formattedMessage.replaceAll("{".concat(index, "}"), arg);
    }, message);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messages);

/***/ }),

/***/ "./src/constant/RestartCommand.js":
/*!****************************************!*\
  !*** ./src/constant/RestartCommand.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RestartCommand = {
  YES: 'y',
  NO: 'n'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestartCommand);

/***/ }),

/***/ "./src/domain/LottoResult.js":
/*!***********************************!*\
  !*** ./src/domain/LottoResult.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lotto_Lotto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lotto/Lotto */ "./src/domain/lotto/Lotto.js");
/* harmony import */ var _reward_BonusReward__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward/BonusReward */ "./src/domain/reward/BonusReward.js");
/* harmony import */ var _reward_Reward__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reward/Reward */ "./src/domain/reward/Reward.js");
/* harmony import */ var _WinningLotto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WinningLotto */ "./src/domain/WinningLotto.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _winningLotto = /*#__PURE__*/new WeakMap();
var _rewards = /*#__PURE__*/new WeakMap();
var LottoResult = /*#__PURE__*/function () {
  /** @type {Reward[]} */

  /** @type {WinningLotto} */

  /** @type {Reward[]} */

  /**
   * @param {WinningLotto} winningLotto
   * @param {Reward[]} rewards
   */
  function LottoResult(winningLotto) {
    var rewards = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LottoResult.DEFAULT_REWARDS;
    _classCallCheck(this, LottoResult);
    _classPrivateFieldInitSpec(this, _winningLotto, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _rewards, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _winningLotto, winningLotto);
    _classPrivateFieldSet(this, _rewards, rewards);
  }
  _createClass(LottoResult, [{
    key: "getRewards",
    value: function getRewards() {
      return _classPrivateFieldGet(this, _rewards);
    }

    /**
     * @param {Lotto} lotto
     * @returns {Reward | null}
     */
  }, {
    key: "findReward",
    value: function findReward(lotto) {
      var _classPrivateFieldGet2,
        _this = this;
      var foundReward = (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _rewards).find(function (reward) {
        return reward.isQualified(lotto, _classPrivateFieldGet(_this, _winningLotto));
      })) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : null;
      return foundReward;
    }
  }]);
  return LottoResult;
}();
_defineProperty(LottoResult, "DEFAULT_REWARDS", [new _reward_Reward__WEBPACK_IMPORTED_MODULE_2__["default"](6, 2000000000), new _reward_BonusReward__WEBPACK_IMPORTED_MODULE_1__["default"](5, 30000000), new _reward_Reward__WEBPACK_IMPORTED_MODULE_2__["default"](5, 1500000), new _reward_Reward__WEBPACK_IMPORTED_MODULE_2__["default"](4, 50000), new _reward_Reward__WEBPACK_IMPORTED_MODULE_2__["default"](3, 5000)]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoResult);

/***/ }),

/***/ "./src/domain/WinningLotto.js":
/*!************************************!*\
  !*** ./src/domain/WinningLotto.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Validation */ "./src/Validation.js");
/* harmony import */ var _lotto_Lotto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lotto/Lotto */ "./src/domain/lotto/Lotto.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }


var _lotto = /*#__PURE__*/new WeakMap();
var _bonusNumber = /*#__PURE__*/new WeakMap();
var WinningLotto = /*#__PURE__*/function () {
  /** @type {Lotto} */

  /** @type {number} */

  /**
   * @param {number[]} lottoNumbers
   * @param {number} bonusNumber
   */
  function WinningLotto(lottoNumbers, bonusNumber) {
    _classCallCheck(this, WinningLotto);
    _classPrivateFieldInitSpec(this, _lotto, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _bonusNumber, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _lotto, new _lotto_Lotto__WEBPACK_IMPORTED_MODULE_1__["default"](lottoNumbers));
    _classPrivateFieldSet(this, _bonusNumber, bonusNumber);
    _Validation__WEBPACK_IMPORTED_MODULE_0__["default"].validateLottoNumber(bonusNumber);
    _Validation__WEBPACK_IMPORTED_MODULE_0__["default"].validateBonusNumberUnique(lottoNumbers, bonusNumber);
  }
  _createClass(WinningLotto, [{
    key: "getLottoNumbers",
    value: function getLottoNumbers() {
      return _classPrivateFieldGet(this, _lotto).getLottoNumbers();
    }
  }, {
    key: "getBonusNumber",
    value: function getBonusNumber() {
      return _classPrivateFieldGet(this, _bonusNumber);
    }

    /**
     * @param {Lotto} lotto
     * @returns {number}
     */
  }, {
    key: "getMatchCount",
    value: function getMatchCount(lotto) {
      var countFn = function countFn(count, lottoNumber) {
        return lotto.getLottoNumbers().includes(lottoNumber) ? count + 1 : count;
      };
      return this.getLottoNumbers().reduce(countFn, 0);
    }

    /**
     * @param {Lotto} lotto
     * @returns {boolean}
     */
  }, {
    key: "hasBonusNumber",
    value: function hasBonusNumber(lotto) {
      return lotto.getLottoNumbers().includes(_classPrivateFieldGet(this, _bonusNumber));
    }
  }]);
  return WinningLotto;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinningLotto);

/***/ }),

/***/ "./src/domain/lotto/Lotto.js":
/*!***********************************!*\
  !*** ./src/domain/lotto/Lotto.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Validation */ "./src/Validation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _lottoNumbers = /*#__PURE__*/new WeakMap();
var Lotto = /*#__PURE__*/function () {
  /** @type {number[]} */

  /**
   * @param {number[]} lottoNumbers
   */
  function Lotto(lottoNumbers) {
    _classCallCheck(this, Lotto);
    _classPrivateFieldInitSpec(this, _lottoNumbers, {
      writable: true,
      value: void 0
    });
    _Validation__WEBPACK_IMPORTED_MODULE_0__["default"].validateLottoNumbers(lottoNumbers);
    _classPrivateFieldSet(this, _lottoNumbers, lottoNumbers.sort(function (a, b) {
      return a - b;
    }));
  }
  _createClass(Lotto, [{
    key: "getLottoNumbers",
    value: function getLottoNumbers() {
      return _classPrivateFieldGet(this, _lottoNumbers);
    }
  }]);
  return Lotto;
}();
_defineProperty(Lotto, "LENGTH", 6);
_defineProperty(Lotto, "NUMBER_LOWER_BOUND", 1);
_defineProperty(Lotto, "NUMBER_UPPER_BOUND", 45);
_defineProperty(Lotto, "PRICE", 1000);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lotto);

/***/ }),

/***/ "./src/domain/lotto/LottoFactory.js":
/*!******************************************!*\
  !*** ./src/domain/lotto/LottoFactory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_Random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Random */ "./src/utils/Random.js");
/* harmony import */ var _Lotto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lotto */ "./src/domain/lotto/Lotto.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var LottoFactory = /*#__PURE__*/function () {
  function LottoFactory() {
    _classCallCheck(this, LottoFactory);
  }
  _createClass(LottoFactory, [{
    key: "createRandomLotto",
    value:
    /**
     * @returns {Lotto}
     */
    function createRandomLotto() {
      var allLottoNumbers = Array.from({
        length: _Lotto__WEBPACK_IMPORTED_MODULE_1__["default"].NUMBER_UPPER_BOUND
      }, function (_, i) {
        return i + 1;
      });
      var lottoNumbers = (0,_utils_Random__WEBPACK_IMPORTED_MODULE_0__.shuffle)(allLottoNumbers).slice(0, _Lotto__WEBPACK_IMPORTED_MODULE_1__["default"].LENGTH);
      return new _Lotto__WEBPACK_IMPORTED_MODULE_1__["default"](lottoNumbers);
    }
  }]);
  return LottoFactory;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoFactory);

/***/ }),

/***/ "./src/domain/reward/BonusReward.js":
/*!******************************************!*\
  !*** ./src/domain/reward/BonusReward.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_Messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant/Messages */ "./src/constant/Messages.js");
/* harmony import */ var _lotto_Lotto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lotto/Lotto */ "./src/domain/lotto/Lotto.js");
/* harmony import */ var _WinningLotto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WinningLotto */ "./src/domain/WinningLotto.js");
/* harmony import */ var _Reward__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reward */ "./src/domain/reward/Reward.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var BonusNumberReward = /*#__PURE__*/function (_Reward) {
  _inherits(BonusNumberReward, _Reward);
  var _super = _createSuper(BonusNumberReward);
  function BonusNumberReward() {
    _classCallCheck(this, BonusNumberReward);
    return _super.apply(this, arguments);
  }
  _createClass(BonusNumberReward, [{
    key: "isQualified",
    value:
    /**
     * @param {Lotto} lotto
     * @param {WinningLotto} winningLotto
     * @returns {boolean}
     */
    function isQualified(lotto, winningLotto) {
      return winningLotto.hasBonusNumber(lotto) && winningLotto.getMatchCount(lotto) === this.getMatchCount();
    }
  }, {
    key: "getName",
    value: function getName() {
      return _constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].format(_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].BONUS_NUMBER_REWARD_NAME, this.getMatchCount());
    }
  }]);
  return BonusNumberReward;
}(_Reward__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BonusNumberReward);

/***/ }),

/***/ "./src/domain/reward/Reward.js":
/*!*************************************!*\
  !*** ./src/domain/reward/Reward.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_Messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant/Messages */ "./src/constant/Messages.js");
/* harmony import */ var _lotto_Lotto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lotto/Lotto */ "./src/domain/lotto/Lotto.js");
/* harmony import */ var _WinningLotto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WinningLotto */ "./src/domain/WinningLotto.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _matchCount = /*#__PURE__*/new WeakMap();
var _money = /*#__PURE__*/new WeakMap();
var Reward = /*#__PURE__*/function () {
  /** @type {number} */

  /** @type {number} */

  /**
   * @param {number} matchCount
   * @param {number} money
   */
  function Reward(matchCount, money) {
    _classCallCheck(this, Reward);
    _classPrivateFieldInitSpec(this, _matchCount, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _money, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _matchCount, matchCount);
    _classPrivateFieldSet(this, _money, money);
  }
  _createClass(Reward, [{
    key: "getMatchCount",
    value: function getMatchCount() {
      return _classPrivateFieldGet(this, _matchCount);
    }
  }, {
    key: "getMoney",
    value: function getMoney() {
      return _classPrivateFieldGet(this, _money);
    }

    /**
     * @param {Lotto} lotto
     * @param {WinningLotto} winningLotto
     * @returns {boolean}
     */
  }, {
    key: "isQualified",
    value: function isQualified(lotto, winningLotto) {
      return winningLotto.getMatchCount(lotto) === _classPrivateFieldGet(this, _matchCount);
    }
  }, {
    key: "getName",
    value: function getName() {
      return _constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].format(_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].REWARD_NAME, _classPrivateFieldGet(this, _matchCount));
    }
  }]);
  return Reward;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reward);

/***/ }),

/***/ "./src/domain/subject/Buyer.js":
/*!*************************************!*\
  !*** ./src/domain/subject/Buyer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LottoResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LottoResult */ "./src/domain/LottoResult.js");
/* harmony import */ var _reward_Reward__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reward/Reward */ "./src/domain/reward/Reward.js");
/* harmony import */ var _Seller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Seller */ "./src/domain/subject/Seller.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _money = /*#__PURE__*/new WeakMap();
var _rewards = /*#__PURE__*/new WeakMap();
var _lottos = /*#__PURE__*/new WeakMap();
var Buyer = /*#__PURE__*/function () {
  /** @type {number} */

  /** @type {Reward[]} */

  /** @type {Lotto[]} */

  /**
   * @param {number} money
   */
  function Buyer(money) {
    _classCallCheck(this, Buyer);
    _classPrivateFieldInitSpec(this, _money, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _rewards, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _lottos, {
      writable: true,
      value: []
    });
    _classPrivateFieldSet(this, _money, money);
  }

  /**
   * @param {Seller} seller
   */
  _createClass(Buyer, [{
    key: "buyLottos",
    value: function buyLottos(seller) {
      _classPrivateFieldSet(this, _lottos, [].concat(_toConsumableArray(_classPrivateFieldGet(this, _lottos)), _toConsumableArray(seller.sellLottos(_classPrivateFieldGet(this, _money)))));
    }
  }, {
    key: "getLottos",
    value: function getLottos() {
      return _classPrivateFieldGet(this, _lottos);
    }

    /**
     * @param {LottoResult} lottoResult
     */
  }, {
    key: "receiveRewards",
    value: function receiveRewards(lottoResult) {
      _classPrivateFieldSet(this, _rewards, [].concat(_toConsumableArray(_classPrivateFieldGet(this, _rewards)), _toConsumableArray(_classPrivateFieldGet(this, _lottos).map(function (lotto) {
        return lottoResult.findReward(lotto);
      }).filter(function (lotto) {
        return lotto !== null;
      }))));
      _classPrivateFieldSet(this, _lottos, []);
    }
  }, {
    key: "getRewards",
    value: function getRewards() {
      return _classPrivateFieldGet(this, _rewards);
    }
  }, {
    key: "getProfitRate",
    value: function getProfitRate() {
      var sumGainedMoneyFn = function sumGainedMoneyFn(gainedMoney, reward) {
        return gainedMoney + reward.getMoney();
      };
      return _classPrivateFieldGet(this, _rewards).reduce(sumGainedMoneyFn, 0) / _classPrivateFieldGet(this, _money);
    }
  }]);
  return Buyer;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buyer);

/***/ }),

/***/ "./src/domain/subject/Seller.js":
/*!**************************************!*\
  !*** ./src/domain/subject/Seller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lotto_Lotto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lotto/Lotto */ "./src/domain/lotto/Lotto.js");
/* harmony import */ var _lotto_LottoFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lotto/LottoFactory */ "./src/domain/lotto/LottoFactory.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }


var _lottoFactory = /*#__PURE__*/new WeakMap();
var Seller = /*#__PURE__*/function () {
  /** @type {LottoFactory} */

  /**
   * @param {LottoFactory} lottoFactory
   */
  function Seller() {
    var lottoFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _lotto_LottoFactory__WEBPACK_IMPORTED_MODULE_1__["default"]();
    _classCallCheck(this, Seller);
    _classPrivateFieldInitSpec(this, _lottoFactory, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _lottoFactory, lottoFactory);
  }

  /**
   * @param {number} money
   * @returns {Lotto[]}
   */
  _createClass(Seller, [{
    key: "sellLottos",
    value: function sellLottos(money) {
      var _this = this;
      var amount = money / _lotto_Lotto__WEBPACK_IMPORTED_MODULE_0__["default"].PRICE;
      return Array(amount).fill().map(function () {
        return _classPrivateFieldGet(_this, _lottoFactory).createRandomLotto();
      });
    }
  }]);
  return Seller;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seller);

/***/ }),

/***/ "./src/errors/LottoError.js":
/*!**********************************!*\
  !*** ./src/errors/LottoError.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_Messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/Messages */ "./src/constant/Messages.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LottoError = /*#__PURE__*/function (_Error) {
  _inherits(LottoError, _Error);
  var _super = _createSuper(LottoError);
  /**
   * @param {string} message
   * @param  {...any} args
   */
  function LottoError(message) {
    var _this;
    _classCallCheck(this, LottoError);
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    _this = _super.call(this, _constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].format.apply(_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"], [message].concat(args)));
    _this.name = _this.constructor.name;
    return _this;
  }
  return _createClass(LottoError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoError);

/***/ }),

/***/ "./src/utils/Random.js":
/*!*****************************!*\
  !*** ./src/utils/Random.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shuffle": () => (/* binding */ shuffle)
/* harmony export */ });
/**
 * @template T
 * @param {T[]} array
 * @returns {T[]}
 */
function shuffle(array) {
  return array.sort(function () {
    return Math.random() > 0.5 ? 1 : -1;
  });
}

/***/ }),

/***/ "./src/view/web/InputView.js":
/*!***********************************!*\
  !*** ./src/view/web/InputView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_RestartCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant/RestartCommand */ "./src/constant/RestartCommand.js");
/* harmony import */ var _domain_WinningLotto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/WinningLotto */ "./src/domain/WinningLotto.js");
/* harmony import */ var _errors_LottoError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/LottoError */ "./src/errors/LottoError.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/view/web/component/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var InputView = {
  /**
   * @returns {Promise<number>}
   */
  readMoney: function readMoney() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var $money, money;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            /** @type {LtMoneyInput} */
            $money = document.getElementById('money');
            money = $money.getMoney();
            if (!(money === null)) {
              _context.next = 4;
              break;
            }
            throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_2__["default"]('로또 번호를 입력해주세요!');
          case 4:
            return _context.abrupt("return", money);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * @returns {Promise<WinningLotto>}
   */
  readWinningLotto: function readWinningLotto() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var $winningLotto, winningLotto;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            /** @type {LtWinningLottoInput} */
            $winningLotto = document.getElementById('winning-lotto');
            winningLotto = $winningLotto.getWinningLotto();
            if (winningLotto instanceof _domain_WinningLotto__WEBPACK_IMPORTED_MODULE_1__["default"]) {
              _context2.next = 4;
              break;
            }
            throw new _errors_LottoError__WEBPACK_IMPORTED_MODULE_2__["default"]('당첨 번호를 입력해주세요!');
          case 4:
            return _context2.abrupt("return", winningLotto);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  /**
   *
   * @returns {Promise<string>}
   */
  readRestartCommand: function readRestartCommand() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var $lottoForm;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            /** @type {HTMLFormElement} */
            $lottoForm = document.getElementById('lotto-form');
            $lottoForm.reset();
            InputView.resetAnchor();
            return _context3.abrupt("return", _constant_RestartCommand__WEBPACK_IMPORTED_MODULE_0__["default"].YES);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  resetAnchor: function resetAnchor() {
    /** @type {HTMLFormElement} */
    var $lottoForm = document.getElementById('lotto-form');

    /** @type {HTMLElement} */
    var $firstAnchor = $lottoForm.querySelector('[data-focus-anchor]');
    $lottoForm.querySelector('[data-focus]').removeAttribute('data-focus');
    $firstAnchor.setAttribute('data-focus', '');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputView);

/***/ }),

/***/ "./src/view/web/OutputView.js":
/*!************************************!*\
  !*** ./src/view/web/OutputView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_Messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant/Messages */ "./src/constant/Messages.js");
/* harmony import */ var _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/lotto/Lotto */ "./src/domain/lotto/Lotto.js");
/* harmony import */ var _domain_LottoResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/LottoResult */ "./src/domain/LottoResult.js");
/* harmony import */ var _domain_reward_Reward__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/reward/Reward */ "./src/domain/reward/Reward.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component */ "./src/view/web/component/index.js");
/* harmony import */ var _component_LtLottoList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/LtLottoList */ "./src/view/web/component/LtLottoList/index.js");






var OutputView = {
  /**
   * @param {Lotto[]} lottos
   */
  printLottos: function printLottos(lottos) {
    /** @type {LtLottoList} */
    var $boughtLottos = document.getElementById('bought-lottos');
    $boughtLottos.setLottos(lottos);
    OutputView.focusNextAnchor();
  },
  /**
   * @param {LottoResult} lottoResult
   * @param {Reward} rewards
   */
  printLottoResult: function printLottoResult(lottoResult, rewards) {
    /** @type {HTMLDialogElement} */
    var $lottoResultDialog = document.getElementById('lotto-result-dialog');
    /** @type {LtLottoResult} */
    var $lottoResult = document.getElementById('lotto-result');
    $lottoResult.setLottoResult(lottoResult);
    $lottoResult.setRewards(rewards);
    $lottoResultDialog.showModal();
    OutputView.focusNextAnchor();
  },
  /**
   * @param {number} profitRate
   */
  printProfitRate: function printProfitRate(profitRate) {
    /** @type {LtTypography} */
    var $lottoResultProfitRate = document.getElementById('lotto-result-profit-rate');
    $lottoResultProfitRate.innerText = _constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].format(_constant_Messages__WEBPACK_IMPORTED_MODULE_0__["default"].PRINT_PROFIT_RATE, (profitRate * 100).toFixed(2));
  },
  printExit: function printExit() {},
  focusNextAnchor: function focusNextAnchor() {
    /** @type {HTMLFormElement} */
    var $lottoForm = document.getElementById('lotto-form');
    /** @type {HTMLElement | null} */
    var $nextAnchor = $lottoForm.querySelector('[data-focus] ~ [data-focus-anchor]');
    if (!$nextAnchor) return;
    $lottoForm.querySelector('[data-focus]').removeAttribute('data-focus');
    $nextAnchor.setAttribute('data-focus', '');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutputView);

/***/ }),

/***/ "./src/view/web/component/LtComponent.js":
/*!***********************************************!*\
  !*** ./src/view/web/component/LtComponent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var LtComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(LtComponent, _HTMLElement);
  var _super = _createSuper(LtComponent);
  function LtComponent() {
    var _this;
    _classCallCheck(this, LtComponent);
    _this = _super.call(this);
    _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }

  /**
   * 엘리먼트의 attribute 값이 변경되었을 때 호출되는 콜백 함수이다.
   *
   * @param {string} name
   * @param {any} oldValue
   * @param {any} newValue
   */
  _createClass(LtComponent, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }

    /**
     * 렌더링 될 HTML 값을 반환한다.
     *
     * {@link LtComponent} 를 상속받는 컴포넌트에서 사용자가 정의한 HTML을
     * 표현하고 싶은 경우, 이 메소드를 상속하여 사용자 정의 값을 반환하면 된다.
     *
     * @example
     * class MyText extends LtComponent {
     *   getRenderContent() {
     *     return `
     *       <div>
     *         <span>${this.#myText}</span>
     *       </div>
     *     `;
     *   }
     * }
     *
     * @returns {string} HTML 문법으로 작성된 문자열 값
     */
  }, {
    key: "getRenderContent",
    value: function getRenderContent() {
      throw new Error('getRenderContent function is not implemented');
    }

    /**
     * Custom Element의 렌더링을 수행하는 함수.
     *
     * {@link getRenderContent} 로 부터 가져온 HTML string을 렌더링한다.
     *
     * ### {@link render} 함수가 수행하는 일
     * 렌더링 과정에서 처리되는 것들은 다음과 같다.
     *
     * - `observedAttributes` 로 등록되어 있는 값들을 HTML string에 주입해준다.
     *
     *   예를 들어,
     *   ```html
     *   <my-text message="반가워요 👋" />
     *   ```
     *   위의 엘리먼트의 HTML string이 아래와 같을 때,
     *   ```html
     *   <div style="color: blue">{placeholder}</div>
     *   ```
     *   이는 아래처럼 렌더링된다.
     *   ```
     *   <div style="color: blue">반가워요 👋<div/>
     *   ```
     *
     * - HTML string 내의 DOM 중 `id` 가 설정되어 있는 엘리먼트를 프로퍼티에 등록해준다.
     *
     *   예를 들어 HTML string이 아래와 같은 경우,
     *   ```html
     *   <span id="myInput"></span>
     *   ```
     *   위의 `span` DOM은 아래와 같이 바인딩된다.
     *   ```javascript
     *   class MyText extends LtComponent {
     *     $myInput; // HTMLSpanElement
     *   }
     *   ```
     *
     * ### DOM 이벤트 핸들링 등의 조작 시
     * {@link render} 함수가 호출될 때 마다 DOM은 새로 생성되므로,
     * DOM에 대해 이벤트를 추가하는 등의 조작을 하려면 {@link render} 함수에서 해줘야 한다.
     * ```javascript
     * class MyText extends LtComponent {
     *   render() {
     *     super.render();
     *
     *     this.$myInput.addEventListener('click', () => this.handleClick());
     *   }
     * }
     * ```
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
        _this$constructor$obs;
      // observedAttributes 로 등록되어 있는 attribute는 HTML에 자동으로 주입됨
      // 예: <lt-text-input placeholder="입력해주세요" /> 로 되어있는 경우,
      //     HTML 내의 '{placeholder}' 는 '입력해주세요' 로 자동으로 대체됨
      var injectAttributeFn = function injectAttributeFn(content, attribute) {
        return content.replaceAll("{".concat(attribute, "}"), _this2.getAttribute(attribute) || '');
      };
      this.shadowRoot.innerHTML = ((_this$constructor$obs = this.constructor.observedAttributes) !== null && _this$constructor$obs !== void 0 ? _this$constructor$obs : []).reduce(injectAttributeFn, this.getRenderContent());

      // id 속성을 가지고 있는 HTMLElement들은 프로퍼티로 접근할 수 있도록 바인딩
      _toConsumableArray(this.shadowRoot.querySelectorAll('[id]')).forEach(function ($element) {
        _this2["$".concat($element.id)] = $element;
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }]);
  return LtComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LtComponent);

/***/ }),

/***/ "./src/view/web/component/LtFormControl.js":
/*!*************************************************!*\
  !*** ./src/view/web/component/LtFormControl.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LtComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LtComponent */ "./src/view/web/component/LtComponent.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }


/**
 * Form Control 역할을 수행하는 Custom Element
 */
var _internals = /*#__PURE__*/new WeakMap();
var LtFormControl = /*#__PURE__*/function (_LtComponent) {
  _inherits(LtFormControl, _LtComponent);
  var _super = _createSuper(LtFormControl);
  function LtFormControl() {
    var _this;
    _classCallCheck(this, LtFormControl);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _internals, {
      writable: true,
      value: _this.attachInternals()
    });
    return _this;
  }
  _createClass(LtFormControl, [{
    key: "getInternals",
    value:
    /**
     * Form Associated Element 에서 사용되는
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals ElementInternals} 를 반환
     *
     * @returns {ElementInternals}
     */
    function getInternals() {
      return _classPrivateFieldGet(this, _internals);
    }

    /**
     * Form Control 의 값을 validation한 결과를 설정하는 함수
     *
     * 만약 오류를 표시하고 싶다면 아래와 같이 사용
     * @example
     * this.setValidation('입력값이 숫자가 아닙니다!');
     *
     * 오류를 제거하고 싶을 시 아래와 같이 null 값을 준다.
     * @example
     * this.setValidation(null);
     *
     * @param {string | null} message
     */
  }, {
    key: "setValidation",
    value: function setValidation(valid, message) {
      _classPrivateFieldGet(this, _internals).setValidity({
        customError: !valid
      }, message || ' ');
    }

    /**
     * Form Associated Element 에서 기본적으로 제공되어야 할 프로퍼티
     */
  }, {
    key: "form",
    get: function get() {
      return _classPrivateFieldGet(this, _internals).form;
    }

    /**
     * Form Associated Element 에서 기본적으로 제공되어야 할 프로퍼티
     */
  }, {
    key: "name",
    get: function get() {
      return this.getAttribute('name');
    }

    /**
     * Form Associated Element 에서 기본적으로 제공되어야 할 프로퍼티
     */
  }, {
    key: "type",
    get: function get() {
      return this.localName;
    }

    /**
     * Form Associated Element 에서 기본적으로 제공되어야 할 프로퍼티
     */
  }, {
    key: "validity",
    get: function get() {
      return _classPrivateFieldGet(this, _internals).validity;
    }

    /**
     * Form Associated Element 에서 기본적으로 제공되어야 할 프로퍼티
     */
  }, {
    key: "validationMessage",
    get: function get() {
      return _classPrivateFieldGet(this, _internals).validationMessage;
    }

    /**
     * Form Associated Element 에서 기본적으로 제공되어야 할 프로퍼티
     */
  }, {
    key: "willValidate",
    get: function get() {
      return _classPrivateFieldGet(this, _internals).willValidate;
    }

    /**
     * Form Associated Element 에서 기본적으로 제공되어야 할 프로퍼티
     */
  }, {
    key: "checkValidity",
    value: function checkValidity() {
      return _classPrivateFieldGet(this, _internals).checkValidity();
    }

    /**
     * Form Associated Element 에서 기본적으로 제공되어야 할 프로퍼티
     */
  }, {
    key: "reportValidity",
    value: function reportValidity() {
      return _classPrivateFieldGet(this, _internals).reportValidity();
    }
  }], [{
    key: "formAssociated",
    get: function get() {
      return true;
    }
  }]);
  return LtFormControl;
}(_LtComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LtFormControl);

/***/ }),

/***/ "./src/view/web/component/LtLottoList/index.js":
/*!*****************************************************!*\
  !*** ./src/view/web/component/LtLottoList/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domain_lotto_Lotto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../domain/lotto/Lotto */ "./src/domain/lotto/Lotto.js");
/* harmony import */ var _LtFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LtFormControl */ "./src/view/web/component/LtFormControl.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html */ "./src/view/web/component/LtLottoList/index.html");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _lottos = /*#__PURE__*/new WeakMap();
var LtLottoList = /*#__PURE__*/function (_LtFormControl) {
  _inherits(LtLottoList, _LtFormControl);
  var _super = _createSuper(LtLottoList);
  function LtLottoList() {
    var _this;
    _classCallCheck(this, LtLottoList);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "$lottoList", void 0);
    _defineProperty(_assertThisInitialized(_this), "$lottoTemplate", void 0);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _lottos, {
      writable: true,
      value: []
    });
    return _this;
  }
  _createClass(LtLottoList, [{
    key: "getLottos",
    value: function getLottos() {
      return _classPrivateFieldGet(this, _lottos);
    }
  }, {
    key: "setLottos",
    value: function setLottos(lottos) {
      _classPrivateFieldSet(this, _lottos, lottos);
      this.render();
    }
  }, {
    key: "formResetCallback",
    value: function formResetCallback() {
      this.setLottos([]);
    }
  }, {
    key: "getRenderContent",
    value: function getRenderContent() {
      return _index_html__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
        _this$$lottoList;
      _get(_getPrototypeOf(LtLottoList.prototype), "render", this).call(this);
      var $lottos = _classPrivateFieldGet(this, _lottos).map(function (lotto) {
        var $lotto = _this2.$lottoTemplate.content.cloneNode(true);
        $lotto.querySelector('.numbers').innerText = lotto.getLottoNumbers().join(', ');
        return $lotto;
      });
      this.$lottoList.dataset.count = _classPrivateFieldGet(this, _lottos).length;
      (_this$$lottoList = this.$lottoList).append.apply(_this$$lottoList, _toConsumableArray($lottos));
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['placeholder'];
    }
  }]);
  return LtLottoList;
}(_LtFormControl__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LtLottoList);

/***/ }),

/***/ "./src/view/web/component/LtLottoResult/index.js":
/*!*******************************************************!*\
  !*** ./src/view/web/component/LtLottoResult/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domain_LottoResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../domain/LottoResult */ "./src/domain/LottoResult.js");
/* harmony import */ var _domain_reward_Reward__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../domain/reward/Reward */ "./src/domain/reward/Reward.js");
/* harmony import */ var _LtComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LtComponent */ "./src/view/web/component/LtComponent.js");
/* harmony import */ var _LtTypography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LtTypography */ "./src/view/web/component/LtTypography/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.html */ "./src/view/web/component/LtLottoResult/index.html");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }





var _lottoResult = /*#__PURE__*/new WeakMap();
var _rewards = /*#__PURE__*/new WeakMap();
var LtLottoResult = /*#__PURE__*/function (_LtComponent) {
  _inherits(LtLottoResult, _LtComponent);
  var _super = _createSuper(LtLottoResult);
  function LtLottoResult() {
    var _this;
    _classCallCheck(this, LtLottoResult);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "$lottoResultRewards", void 0);
    _defineProperty(_assertThisInitialized(_this), "$lottoResultProfitRate", void 0);
    _defineProperty(_assertThisInitialized(_this), "$lottoResultRewardTemplate", void 0);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _lottoResult, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _rewards, {
      writable: true,
      value: []
    });
    return _this;
  }
  _createClass(LtLottoResult, [{
    key: "getLottoResult",
    value: function getLottoResult() {
      return _classPrivateFieldGet(this, _lottoResult);
    }
  }, {
    key: "setLottoResult",
    value: function setLottoResult(lottoResult) {
      _classPrivateFieldSet(this, _lottoResult, lottoResult);
      this.render();
    }
  }, {
    key: "getRewards",
    value: function getRewards() {
      return _classPrivateFieldGet(this, _rewards);
    }
  }, {
    key: "setRewards",
    value: function setRewards(rewards) {
      _classPrivateFieldSet(this, _rewards, rewards);
      this.render();
    }
  }, {
    key: "getRenderContent",
    value: function getRenderContent() {
      return _index_html__WEBPACK_IMPORTED_MODULE_4__["default"];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$$lottoResultRew,
        _this2 = this;
      _get(_getPrototypeOf(LtLottoResult.prototype), "render", this).call(this);
      if (!_classPrivateFieldGet(this, _lottoResult)) return;
      this.$lottoResultRewards.innerHTML = '';
      (_this$$lottoResultRew = this.$lottoResultRewards).append.apply(_this$$lottoResultRew, _toConsumableArray(_classPrivateFieldGet(this, _lottoResult).getRewards().map(function (reward) {
        var $lottoResultReward = _this2.$lottoResultRewardTemplate.content.cloneNode(true);
        var count = _classPrivateFieldGet(_this2, _rewards).filter(function (_reward) {
          return _reward === reward;
        }).length;
        [[reward.getName(), '.match-count'], [reward.getMoney().toLocaleString(), '.reward-money'], [count, '.count']].forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            content = _ref2[0],
            targetId = _ref2[1];
          $lottoResultReward.querySelector(targetId).innerText = content;
        });
        return $lottoResultReward;
      })));
    }
  }]);
  return LtLottoResult;
}(_LtComponent__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LtLottoResult);

/***/ }),

/***/ "./src/view/web/component/LtMoneyInput/index.js":
/*!******************************************************!*\
  !*** ./src/view/web/component/LtMoneyInput/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Validation */ "./src/Validation.js");
/* harmony import */ var _LtFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LtFormControl */ "./src/view/web/component/LtFormControl.js");
/* harmony import */ var _LtTextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LtTextInput */ "./src/view/web/component/LtTextInput/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.html */ "./src/view/web/component/LtMoneyInput/index.html");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }




var _money = /*#__PURE__*/new WeakMap();
var _validate = /*#__PURE__*/new WeakSet();
var LtMoneyInput = /*#__PURE__*/function (_LtFormControl) {
  _inherits(LtMoneyInput, _LtFormControl);
  var _super = _createSuper(LtMoneyInput);
  function LtMoneyInput() {
    var _this;
    _classCallCheck(this, LtMoneyInput);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);
    _defineProperty(_assertThisInitialized(_this), "$input", void 0);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _money, {
      writable: true,
      value: null
    });
    return _this;
  }
  _createClass(LtMoneyInput, [{
    key: "getMoney",
    value: function getMoney() {
      return _classPrivateFieldGet(this, _money);
    }
  }, {
    key: "setMoney",
    value: function setMoney(text) {
      this.$input.setText(text);
      _classPrivateMethodGet(this, _validate, _validate2).call(this, text);
    }
  }, {
    key: "setValidation",
    value: function setValidation(valid, message) {
      _get(_getPrototypeOf(LtMoneyInput.prototype), "setValidation", this).call(this, valid, message);
      this.$input.setErrorMessage(message);
    }
  }, {
    key: "formResetCallback",
    value: function formResetCallback() {
      this.setMoney(null);
      this.setValidation(false);
    }
  }, {
    key: "getRenderContent",
    value: function getRenderContent() {
      return _index_html__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      _get(_getPrototypeOf(LtMoneyInput.prototype), "render", this).call(this);
      this.$input.text = _classPrivateFieldGet(this, _money);
      this.$input.addEventListener('change', function (event) {
        _classPrivateMethodGet(_this2, _validate, _validate2).call(_this2, event.target.getText());
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(LtMoneyInput.prototype), "connectedCallback", this).call(this);
      if (this.hasAttribute('required') && _classPrivateFieldGet(this, _money) === null) {
        this.setValidation(false);
      }
    }
  }]);
  return LtMoneyInput;
}(_LtFormControl__WEBPACK_IMPORTED_MODULE_1__["default"]);
function _validate2(text) {
  _classPrivateFieldSet(this, _money, null);
  var money = Number(text);
  try {
    _Validation__WEBPACK_IMPORTED_MODULE_0__["default"].validateMoney(text);
  } catch (error) {
    this.setValidation(false, error.message);
    return;
  }
  this.setValidation(true);
  _classPrivateFieldSet(this, _money, money);
  this.dispatchEvent(new CustomEvent('change'));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LtMoneyInput);

/***/ }),

/***/ "./src/view/web/component/LtTextInput/index.js":
/*!*****************************************************!*\
  !*** ./src/view/web/component/LtTextInput/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LtFormControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LtFormControl */ "./src/view/web/component/LtFormControl.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/view/web/component/LtTextInput/index.html");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }


var _text = /*#__PURE__*/new WeakMap();
var _validate = /*#__PURE__*/new WeakSet();
var LtTextInput = /*#__PURE__*/function (_LtFormControl) {
  _inherits(LtTextInput, _LtFormControl);
  var _super = _createSuper(LtTextInput);
  function LtTextInput() {
    var _this;
    _classCallCheck(this, LtTextInput);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);
    _defineProperty(_assertThisInitialized(_this), "$input", void 0);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _text, {
      writable: true,
      value: ''
    });
    return _this;
  }
  _createClass(LtTextInput, [{
    key: "setErrorMessage",
    value: function setErrorMessage() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.dataset.errorMessage = message || '';
    }
  }, {
    key: "getText",
    value: function getText() {
      return _classPrivateFieldGet(this, _text);
    }
  }, {
    key: "setText",
    value: function setText(text) {
      this.$input.value = text;
      _classPrivateMethodGet(this, _validate, _validate2).call(this, text);
    }
  }, {
    key: "getRenderContent",
    value: function getRenderContent() {
      return _index_html__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      _get(_getPrototypeOf(LtTextInput.prototype), "render", this).call(this);
      this.$input.value = _classPrivateFieldGet(this, _text);
      this.$input.addEventListener('change', function (event) {
        _classPrivateMethodGet(_this2, _validate, _validate2).call(_this2, event.target.value);
      });
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['type', 'min', 'max', 'step', 'placeholder'];
    }
  }]);
  return LtTextInput;
}(_LtFormControl__WEBPACK_IMPORTED_MODULE_0__["default"]);
function _validate2(text) {
  _classPrivateFieldSet(this, _text, text !== null && text !== void 0 ? text : '');
  this.dispatchEvent(new Event('change'));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LtTextInput);

/***/ }),

/***/ "./src/view/web/component/LtTypography/index.js":
/*!******************************************************!*\
  !*** ./src/view/web/component/LtTypography/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LtComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LtComponent */ "./src/view/web/component/LtComponent.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/view/web/component/LtTypography/index.html");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var LtTypography = /*#__PURE__*/function (_LtComponent) {
  _inherits(LtTypography, _LtComponent);
  var _super = _createSuper(LtTypography);
  function LtTypography() {
    _classCallCheck(this, LtTypography);
    return _super.apply(this, arguments);
  }
  _createClass(LtTypography, [{
    key: "getRenderContent",
    value: function getRenderContent() {
      var _LtTypography$VARIANT;
      var variant = this.getAttribute('variant');
      var tag = (_LtTypography$VARIANT = LtTypography.VARIANT_TAGS[variant]) !== null && _LtTypography$VARIANT !== void 0 ? _LtTypography$VARIANT : 'p';
      return "\n      ".concat(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"], "\n\n      <").concat(tag, " class=\"typography\">\n        <slot></slot>\n      </").concat(tag, ">\n    ");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['variant', 'decoration'];
    }
  }]);
  return LtTypography;
}(_LtComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);
_defineProperty(LtTypography, "VARIANT_TAGS", {
  title: 'h1',
  subtitle: 'h2',
  body: 'p',
  caption: 'caption'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LtTypography);

/***/ }),

/***/ "./src/view/web/component/LtWinningLottoInput/index.js":
/*!*************************************************************!*\
  !*** ./src/view/web/component/LtWinningLottoInput/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domain_WinningLotto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../domain/WinningLotto */ "./src/domain/WinningLotto.js");
/* harmony import */ var _LtFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LtFormControl */ "./src/view/web/component/LtFormControl.js");
/* harmony import */ var _LtTextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LtTextInput */ "./src/view/web/component/LtTextInput/index.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.html */ "./src/view/web/component/LtWinningLottoInput/index.html");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }




var _winningLotto = /*#__PURE__*/new WeakMap();
var _validate = /*#__PURE__*/new WeakSet();
var LtWinningLottoInput = /*#__PURE__*/function (_LtFormControl) {
  _inherits(LtWinningLottoInput, _LtFormControl);
  var _super = _createSuper(LtWinningLottoInput);
  function LtWinningLottoInput() {
    var _this;
    _classCallCheck(this, LtWinningLottoInput);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _validate);
    _defineProperty(_assertThisInitialized(_this), "$winningNumbers", void 0);
    _defineProperty(_assertThisInitialized(_this), "$bonusNumber", void 0);
    _defineProperty(_assertThisInitialized(_this), "$winningNumberInputs", void 0);
    _defineProperty(_assertThisInitialized(_this), "$bonusNumberInput", void 0);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _winningLotto, {
      writable: true,
      value: null
    });
    return _this;
  }
  _createClass(LtWinningLottoInput, [{
    key: "getWinningLotto",
    value: function getWinningLotto() {
      return _classPrivateFieldGet(this, _winningLotto);
    }
  }, {
    key: "setWinningLotto",
    value: function setWinningLotto(winningLotto) {
      var _this2 = this;
      if (!(winningLotto instanceof _domain_WinningLotto__WEBPACK_IMPORTED_MODULE_0__["default"])) {
        _classPrivateFieldSet(this, _winningLotto, null);
        this.$winningNumberInputs.forEach(function ($input) {
          $input.setText(null);
        });
        this.$bonusNumberInput.setText(null);
        return;
      }
      _classPrivateFieldSet(this, _winningLotto, winningLotto);
      winningLotto.getLottoNumbers().forEach(function (lottoNumber, index) {
        _this2.$winningNumberInputs[index].setText(lottoNumber);
      });
      this.$bonusNumberInput.setText(winningLotto.getBonusNumber());
    }
  }, {
    key: "setValidation",
    value: function setValidation(valid) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      _get(_getPrototypeOf(LtWinningLottoInput.prototype), "setValidation", this).call(this, valid, message);
      /** @type {LtTextInput} */
      var $firstInput = this.shadowRoot.querySelector('lt-text-input');
      $firstInput.setErrorMessage(message);
    }
  }, {
    key: "formResetCallback",
    value: function formResetCallback() {
      this.setWinningLotto(null);
      this.setValidation(false);
    }
  }, {
    key: "getRenderContent",
    value: function getRenderContent() {
      return _index_html__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      _get(_getPrototypeOf(LtWinningLottoInput.prototype), "render", this).call(this);
      this.$winningNumberInputs = _toConsumableArray(this.$winningNumbers.querySelectorAll('lt-text-input'));
      this.$bonusNumberInput = this.$bonusNumber.querySelector('lt-text-input');
      _toConsumableArray(this.shadowRoot.querySelectorAll('lt-text-input')).forEach(function ($input) {
        $input.addEventListener('change', function (event) {
          _classPrivateMethodGet(_this3, _validate, _validate2).call(_this3);
        });
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(LtWinningLottoInput.prototype), "connectedCallback", this).call(this);
      if (this.hasAttribute('required') && _classPrivateFieldGet(this, _winningLotto) === null) {
        this.setValidation(false);
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['placeholder'];
    }
  }]);
  return LtWinningLottoInput;
}(_LtFormControl__WEBPACK_IMPORTED_MODULE_1__["default"]);
function _validate2() {
  var lottoNumbers = this.$winningNumberInputs.map(function ($input) {
    return Number($input.getText());
  });
  var bonusNumber = Number(this.$bonusNumberInput.getText());
  try {
    _classPrivateFieldSet(this, _winningLotto, new _domain_WinningLotto__WEBPACK_IMPORTED_MODULE_0__["default"](lottoNumbers, bonusNumber));
  } catch (error) {
    this.setValidation(false, error.message);
    return;
  }
  this.setValidation(true);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LtWinningLottoInput);

/***/ }),

/***/ "./src/view/web/component/index.js":
/*!*****************************************!*\
  !*** ./src/view/web/component/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LtLottoList": () => (/* reexport safe */ _LtLottoList__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "LtLottoResult": () => (/* reexport safe */ _LtLottoResult__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "LtMoneyInput": () => (/* reexport safe */ _LtMoneyInput__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "LtTextInput": () => (/* reexport safe */ _LtTextInput__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "LtTypography": () => (/* reexport safe */ _LtTypography__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "LtWinningLottoInput": () => (/* reexport safe */ _LtWinningLottoInput__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _LtLottoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LtLottoList */ "./src/view/web/component/LtLottoList/index.js");
/* harmony import */ var _LtLottoResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LtLottoResult */ "./src/view/web/component/LtLottoResult/index.js");
/* harmony import */ var _LtMoneyInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LtMoneyInput */ "./src/view/web/component/LtMoneyInput/index.js");
/* harmony import */ var _LtTextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LtTextInput */ "./src/view/web/component/LtTextInput/index.js");
/* harmony import */ var _LtTypography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LtTypography */ "./src/view/web/component/LtTypography/index.js");
/* harmony import */ var _LtWinningLottoInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LtWinningLottoInput */ "./src/view/web/component/LtWinningLottoInput/index.js");






function toKebabCase(text) {
  return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// NOTE: 의존성의 순서에 맞춰 정렬할 것 (의존성이 없는 것부터 가장 위에)
var components = [_LtTextInput__WEBPACK_IMPORTED_MODULE_3__["default"], _LtLottoList__WEBPACK_IMPORTED_MODULE_0__["default"], _LtLottoResult__WEBPACK_IMPORTED_MODULE_1__["default"], _LtTypography__WEBPACK_IMPORTED_MODULE_4__["default"], _LtMoneyInput__WEBPACK_IMPORTED_MODULE_2__["default"], _LtWinningLottoInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
components.forEach(function (component) {
  customElements.define(toKebabCase(component.name), component);
});


/***/ }),

/***/ "./src/view/web/index.js":
/*!*******************************!*\
  !*** ./src/view/web/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fontsource_roboto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fontsource/roboto */ "./node_modules/@fontsource/roboto/index.css");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/view/web/component/index.js");
/* harmony import */ var _css_dialog_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/dialog.css */ "./src/view/web/css/dialog.css");
/* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/form.css */ "./src/view/web/css/form.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/index.css */ "./src/view/web/css/index.css");






/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@fontsource/roboto/index.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@fontsource/roboto/index.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./files/roboto-cyrillic-ext-400-normal.woff2 */ "./node_modules/@fontsource/roboto/files/roboto-cyrillic-ext-400-normal.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./files/roboto-all-400-normal.woff */ "./node_modules/@fontsource/roboto/files/roboto-all-400-normal.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./files/roboto-cyrillic-400-normal.woff2 */ "./node_modules/@fontsource/roboto/files/roboto-cyrillic-400-normal.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./files/roboto-greek-ext-400-normal.woff2 */ "./node_modules/@fontsource/roboto/files/roboto-greek-ext-400-normal.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./files/roboto-greek-400-normal.woff2 */ "./node_modules/@fontsource/roboto/files/roboto-greek-400-normal.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./files/roboto-vietnamese-400-normal.woff2 */ "./node_modules/@fontsource/roboto/files/roboto-vietnamese-400-normal.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./files/roboto-latin-ext-400-normal.woff2 */ "./node_modules/@fontsource/roboto/files/roboto-latin-ext-400-normal.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./files/roboto-latin-400-normal.woff2 */ "./node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* roboto-cyrillic-ext-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;\n}\n/* roboto-cyrillic-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;\n}\n/* roboto-greek-ext-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff2'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  unicode-range: U+1F00-1FFF;\n}\n/* roboto-greek-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('woff2'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* roboto-vietnamese-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('woff2'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;\n}\n/* roboto-latin-ext-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('woff2'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  unicode-range: U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;\n}\n/* roboto-latin-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff2'), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/@fontsource/roboto/index.css"],"names":[],"mappings":"AAAA,kCAAkC;AAClC;EACE,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,oHAAkI;EAClI,iFAAiF;AACnF;AACA,8BAA8B;AAC9B;EACE,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,oHAA8H;EAC9H,gEAAgE;AAClE;AACA,+BAA+B;AAC/B;EACE,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,oHAA+H;EAC/H,0BAA0B;AAC5B;AACA,2BAA2B;AAC3B;EACE,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,oHAA2H;EAC3H,0BAA0B;AAC5B;AACA,gCAAgC;AAChC;EACE,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,oHAAgI;EAChI,yGAAyG;AAC3G;AACA,+BAA+B;AAC/B;EACE,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,oHAA+H;EAC/H,2GAA2G;AAC7G;AACA,2BAA2B;AAC3B;EACE,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,oHAA2H;EAC3H,yJAAyJ;AAC3J","sourcesContent":["/* roboto-cyrillic-ext-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('./files/roboto-cyrillic-ext-400-normal.woff2') format('woff2'), url('./files/roboto-all-400-normal.woff') format('woff');\n  unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;\n}\n/* roboto-cyrillic-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('./files/roboto-cyrillic-400-normal.woff2') format('woff2'), url('./files/roboto-all-400-normal.woff') format('woff');\n  unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;\n}\n/* roboto-greek-ext-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('./files/roboto-greek-ext-400-normal.woff2') format('woff2'), url('./files/roboto-all-400-normal.woff') format('woff');\n  unicode-range: U+1F00-1FFF;\n}\n/* roboto-greek-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('./files/roboto-greek-400-normal.woff2') format('woff2'), url('./files/roboto-all-400-normal.woff') format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* roboto-vietnamese-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('./files/roboto-vietnamese-400-normal.woff2') format('woff2'), url('./files/roboto-all-400-normal.woff') format('woff');\n  unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;\n}\n/* roboto-latin-ext-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('./files/roboto-latin-ext-400-normal.woff2') format('woff2'), url('./files/roboto-all-400-normal.woff') format('woff');\n  unicode-range: U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;\n}\n/* roboto-latin-400-normal*/\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 400;\n  src: url('./files/roboto-latin-400-normal.woff2') format('woff2'), url('./files/roboto-all-400-normal.woff') format('woff');\n  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/web/css/dialog.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/web/css/dialog.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "dialog {\n  border: none;\n  padding: 0;\n  background-color: transparent;\n}\n\ndialog > form {\n  margin: 0;\n}\n\ndialog::backdrop {\n  background: rgba(0, 0, 0, 0.5);\n}\n", "",{"version":3,"sources":["webpack://./src/view/web/css/dialog.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,UAAU;EACV,6BAA6B;AAC/B;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":["dialog {\n  border: none;\n  padding: 0;\n  background-color: transparent;\n}\n\ndialog > form {\n  margin: 0;\n}\n\ndialog::backdrop {\n  background: rgba(0, 0, 0, 0.5);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/web/css/form.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/web/css/form.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "form#lotto-form {\n  width: 420px;\n}\n\nform#lotto-result-form {\n  width: 350px;\n}\n\nform > *:not(:first-child) {\n  margin-top: 2rem;\n}\n\nform > lt-typography {\n  text-align: center;\n}\n\nform > fieldset {\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 1rem;\n  border: none;\n}\n\nform > fieldset > legend {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n\nform > fieldset > lt-money-input,\nform > fieldset > lt-winning-lotto-input {\n  flex: 1;\n}\n\nform > fieldset > lt-lotto {\n  width: 100%;\n}\n\nform:invalid > button[type=\"submit\"] {\n  opacity: 0.5;\n}\n\n[data-focus] ~ * {\n  display: none;\n}\n\n", "",{"version":3,"sources":["webpack://./src/view/web/css/form.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,qBAAqB;AACvB;;AAEA;;EAEE,OAAO;AACT;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf","sourcesContent":["form#lotto-form {\n  width: 420px;\n}\n\nform#lotto-result-form {\n  width: 350px;\n}\n\nform > *:not(:first-child) {\n  margin-top: 2rem;\n}\n\nform > lt-typography {\n  text-align: center;\n}\n\nform > fieldset {\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0 1rem;\n  border: none;\n}\n\nform > fieldset > legend {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n\nform > fieldset > lt-money-input,\nform > fieldset > lt-winning-lotto-input {\n  flex: 1;\n}\n\nform > fieldset > lt-lotto {\n  width: 100%;\n}\n\nform:invalid > button[type=\"submit\"] {\n  opacity: 0.5;\n}\n\n[data-focus] ~ * {\n  display: none;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/web/css/index.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/web/css/index.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-color: #4E5BA6;\n  --main-text-color: rgba(0, 0, 0, 0.87);\n  --main-secondary-text-color: #8B8B8B;\n\n  --typography-title-font-size: 1.5rem;\n  --typography-title-font-weight: 800;\n  --typography-subtitle-font-size: 1.25rem;\n  --typography-subtitle-font-weight: 600;\n  --typography-body-font-size: 0.9375rem;\n  --typography-body-font-weight: 400;\n  --typography-caption-font-size: 0.875rem;\n  --typography-caption-font-weight: 700;\n\n  --container-max-width: 960px;\n}\n\nbody {\n  font-family: 'Roboto';\n  color: var(--main-text-color);\n  margin: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nbody > main {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbody > *:last-child {\n  margin-top: auto;\n}\n\nheader {\n  padding: 0.875rem;\n  background: var(--main-color);\n  color: white;\n}\n\nheader > nav {\n  margin: 0 auto;\n  max-width: var(--container-max-width);\n}\n\nheader > nav > a.home {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n\nheader > nav > a.home::before {\n  content: '🎱';\n  font-size: 1.5rem;\n}\n\nfooter {\n  padding: 2rem;\n  color: var(--main-color);\n  letter-spacing: 0.078125rem;\n  text-align: center;\n  border-top: 1px solid rgba(78, 91, 166, 0.2);\n}\n\nh1 {\n  font-size: var(--typography-title-font-size);\n  font-weight: var(--typography-title-font-weight);\n}\n\nh2 {\n  font-size: var(--typography-subtitle-font-size);\n  font-weight: var(--typography-subtitle-font-weight);\n}\n\nbody, p {\n  font-size: var(--typography-body-font-size);\n  font-weight: var(--typography-body-font-weight);\n}\n\ncaption {\n  font-size: var(--typography-caption-font-size);\n  font-weight: var(--typography-caption-font-weight);\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  background: var(--main-color);\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n\n.frame {\n  padding: 32px 16px;\n  margin: 32px 16px;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n", "",{"version":3,"sources":["webpack://./src/view/web/css/index.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,sCAAsC;EACtC,oCAAoC;;EAEpC,oCAAoC;EACpC,mCAAmC;EACnC,wCAAwC;EACxC,sCAAsC;EACtC,sCAAsC;EACtC,kCAAkC;EAClC,wCAAwC;EACxC,qCAAqC;;EAErC,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;EACrB,6BAA6B;EAC7B,SAAS;EACT,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;EACd,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,2BAA2B;EAC3B,kBAAkB;EAClB,4CAA4C;AAC9C;;AAEA;EACE,4CAA4C;EAC5C,gDAAgD;AAClD;;AAEA;EACE,+CAA+C;EAC/C,mDAAmD;AACrD;;AAEA;EACE,2CAA2C;EAC3C,+CAA+C;AACjD;;AAEA;EACE,8CAA8C;EAC9C,kDAAkD;AACpD;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,oBAAoB;EACpB,sBAAsB;EACtB,iBAAiB;EACjB,qCAAqC;EACrC,kBAAkB;AACpB","sourcesContent":[":root {\n  --main-color: #4E5BA6;\n  --main-text-color: rgba(0, 0, 0, 0.87);\n  --main-secondary-text-color: #8B8B8B;\n\n  --typography-title-font-size: 1.5rem;\n  --typography-title-font-weight: 800;\n  --typography-subtitle-font-size: 1.25rem;\n  --typography-subtitle-font-weight: 600;\n  --typography-body-font-size: 0.9375rem;\n  --typography-body-font-weight: 400;\n  --typography-caption-font-size: 0.875rem;\n  --typography-caption-font-weight: 700;\n\n  --container-max-width: 960px;\n}\n\nbody {\n  font-family: 'Roboto';\n  color: var(--main-text-color);\n  margin: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nbody > main {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbody > *:last-child {\n  margin-top: auto;\n}\n\nheader {\n  padding: 0.875rem;\n  background: var(--main-color);\n  color: white;\n}\n\nheader > nav {\n  margin: 0 auto;\n  max-width: var(--container-max-width);\n}\n\nheader > nav > a.home {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n\nheader > nav > a.home::before {\n  content: '🎱';\n  font-size: 1.5rem;\n}\n\nfooter {\n  padding: 2rem;\n  color: var(--main-color);\n  letter-spacing: 0.078125rem;\n  text-align: center;\n  border-top: 1px solid rgba(78, 91, 166, 0.2);\n}\n\nh1 {\n  font-size: var(--typography-title-font-size);\n  font-weight: var(--typography-title-font-weight);\n}\n\nh2 {\n  font-size: var(--typography-subtitle-font-size);\n  font-weight: var(--typography-subtitle-font-weight);\n}\n\nbody, p {\n  font-size: var(--typography-body-font-size);\n  font-weight: var(--typography-body-font-weight);\n}\n\ncaption {\n  font-size: var(--typography-caption-font-size);\n  font-weight: var(--typography-caption-font-weight);\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  background: var(--main-color);\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n\n.frame {\n  padding: 32px 16px;\n  margin: 32px 16px;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/view/web/component/LtLottoList/index.html":
/*!*******************************************************!*\
  !*** ./src/view/web/component/LtLottoList/index.html ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/icon/lotto.png */ "./assets/icon/lotto.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<style>:host{display:block;width:100%}section{font-size:var(--typography-caption-font-size);color:var(--main-secondary-text-color);width:100%;height:100px;display:flex;align-items:center;justify-content:center}p{font-size:var(--typography-body-font-size);font-weight:var(--typography-body-font-weight)}ul{margin:0;padding-left:0;list-style:none}ul::before{content:attr(data-count) '장을 구매하셨습니다.';display:block;margin-bottom:.5rem}li{display:flex;align-items:center;gap:.5rem}li>img{width:2rem;height:2rem}#lottoList:empty{display:none}#lottoList:not(:empty)~section{display:none}</style> <ul id=\"lottoList\"></ul> <section>{placeholder}</section> <template id=\"lottoTemplate\"> <li> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"> <lt-typography variant=\"body\" class=\"numbers\"></lt-typography> </li> </template> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/view/web/component/LtLottoResult/index.html":
/*!*********************************************************!*\
  !*** ./src/view/web/component/LtLottoResult/index.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<style>table{border-collapse:collapse;width:100%}td,th{padding:.5rem;border-bottom:1px solid rgba(0,0,0,.12);text-align:center;font-size:var(--typography-body-font-size);font-weight:var(--typography-body-font-weight)}th{font-weight:600}</style> <table> <thead> <tr> <th>일치 갯수</th> <th>당첨금</th> <th>당첨 갯수</th> </tr> </thead> <tbody id=\"lottoResultRewards\"> </tbody> </table> <template id=\"lottoResultRewardTemplate\"> <tr> <td class=\"match-count\"></td> <td class=\"reward-money\"></td> <td class=\"count\"></td> </tr> </template> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/view/web/component/LtMoneyInput/index.html":
/*!********************************************************!*\
  !*** ./src/view/web/component/LtMoneyInput/index.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<lt-text-input id=\"input\" type=\"number\" min=\"1000\" step=\"1000\" placeholder=\"금액\"></lt-text-input> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/view/web/component/LtTextInput/index.html":
/*!*******************************************************!*\
  !*** ./src/view/web/component/LtTextInput/index.html ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<style>input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield;appearance:textfield}input{box-sizing:border-box;width:100%;border:1px solid var(--main-secondary-text-color);border-radius:4px;padding:10px;font-size:.9375rem;font-weight:400;text-align:inherit}input::placeholder{color:#8b8b8b}p{position:absolute;margin:0;margin-left:.2rem;font-size:var(--typography-caption-font-size);color:red}:host{position:relative}:host:after{content:attr(data-error-message);position:absolute;left:4px;font-size:var(--typography-caption-font-size);color:red;white-space:nowrap}</style> <div> <input id=\"input\" type=\"{type}\" min=\"{min}\" max=\"{max}\" step=\"{step}\" placeholder=\"{placeholder}\" autocomplete=\"off\"> </div> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/view/web/component/LtTypography/index.html":
/*!********************************************************!*\
  !*** ./src/view/web/component/LtTypography/index.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<style>h1{font-size:1.5rem;font-weight:800}h2{font-size:1.25rem;font-weight:600}p{font-size:.9375rem;font-weight:400}caption{font-size:.875rem;font-weight:700}.typography{margin:0}:host-context([decoration]) .typography::before{content:'{decoration}';margin-right:.5rem}:host-context([decoration]) .typography::after{content:'{decoration}';margin-left:.5rem}</style> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/view/web/component/LtWinningLottoInput/index.html":
/*!***************************************************************!*\
  !*** ./src/view/web/component/LtWinningLottoInput/index.html ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<style>input{box-sizing:border-box;width:100%;border:1px solid var(--main-secondary-text-color);border-radius:4px;padding:10px;font-size:.9375rem;font-weight:400}input::placeholder{color:#8b8b8b}div{width:100%;display:flex;justify-content:space-between}lt-text-input{width:2.4rem;text-align:center}fieldset{margin:0;padding:0;border:none;display:flex;flex-wrap:wrap;gap:.5rem}fieldset>legend{margin-bottom:.5rem;box-sizing:border-box;width:100%}fieldset#bonusNumber{justify-content:flex-end}</style> <div> <fieldset id=\"winningNumbers\"> <legend>당첨 번호</legend> <lt-text-input type=\"number\" min=\"1\" max=\"45\"></lt-text-input> <lt-text-input type=\"number\" min=\"1\" max=\"45\"></lt-text-input> <lt-text-input type=\"number\" min=\"1\" max=\"45\"></lt-text-input> <lt-text-input type=\"number\" min=\"1\" max=\"45\"></lt-text-input> <lt-text-input type=\"number\" min=\"1\" max=\"45\"></lt-text-input> <lt-text-input type=\"number\" min=\"1\" max=\"45\"></lt-text-input> </fieldset> <fieldset id=\"bonusNumber\"> <legend>보너스 번호</legend> <lt-text-input type=\"number\" min=\"1\" max=\"45\"></lt-text-input> </fieldset> </div> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/@fontsource/roboto/index.css":
/*!***************************************************!*\
  !*** ./node_modules/@fontsource/roboto/index.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@fontsource/roboto/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/web/css/dialog.css":
/*!*************************************!*\
  !*** ./src/view/web/css/dialog.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./dialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/web/css/dialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/web/css/form.css":
/*!***********************************!*\
  !*** ./src/view/web/css/form.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/web/css/form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/web/css/index.css":
/*!************************************!*\
  !*** ./src/view/web/css/index.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/web/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/icon/lotto.png":
/*!*******************************!*\
  !*** ./assets/icon/lotto.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b77ba85a37eb883d2d8.png";

/***/ }),

/***/ "./node_modules/@fontsource/roboto/files/roboto-all-400-normal.woff":
/*!**************************************************************************!*\
  !*** ./node_modules/@fontsource/roboto/files/roboto-all-400-normal.woff ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5d001fa922fa66a147f.woff";

/***/ }),

/***/ "./node_modules/@fontsource/roboto/files/roboto-cyrillic-400-normal.woff2":
/*!********************************************************************************!*\
  !*** ./node_modules/@fontsource/roboto/files/roboto-cyrillic-400-normal.woff2 ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71a33b6b50457b2c903a.woff2";

/***/ }),

/***/ "./node_modules/@fontsource/roboto/files/roboto-cyrillic-ext-400-normal.woff2":
/*!************************************************************************************!*\
  !*** ./node_modules/@fontsource/roboto/files/roboto-cyrillic-ext-400-normal.woff2 ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "804378952da8a10faae2.woff2";

/***/ }),

/***/ "./node_modules/@fontsource/roboto/files/roboto-greek-400-normal.woff2":
/*!*****************************************************************************!*\
  !*** ./node_modules/@fontsource/roboto/files/roboto-greek-400-normal.woff2 ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c35e4c3958e209d17b31.woff2";

/***/ }),

/***/ "./node_modules/@fontsource/roboto/files/roboto-greek-ext-400-normal.woff2":
/*!*********************************************************************************!*\
  !*** ./node_modules/@fontsource/roboto/files/roboto-greek-ext-400-normal.woff2 ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "169619821ea93019d1bb.woff2";

/***/ }),

/***/ "./node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff2":
/*!*****************************************************************************!*\
  !*** ./node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff2 ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b009a76ad6afe4ebd301.woff2";

/***/ }),

/***/ "./node_modules/@fontsource/roboto/files/roboto-latin-ext-400-normal.woff2":
/*!*********************************************************************************!*\
  !*** ./node_modules/@fontsource/roboto/files/roboto-latin-ext-400-normal.woff2 ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "861b791f9de857a6e7bc.woff2";

/***/ }),

/***/ "./node_modules/@fontsource/roboto/files/roboto-vietnamese-400-normal.woff2":
/*!**********************************************************************************!*\
  !*** ./node_modules/@fontsource/roboto/files/roboto-vietnamese-400-normal.woff2 ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3230f9b040f3c630e0c3.woff2";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/step2-index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LottoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LottoController */ "./src/LottoController.js");
/* harmony import */ var _view_web_InputView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/web/InputView */ "./src/view/web/InputView.js");
/* harmony import */ var _view_web_OutputView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/web/OutputView */ "./src/view/web/OutputView.js");
/* harmony import */ var _view_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/web */ "./src/view/web/index.js");




var lottoController = new _LottoController__WEBPACK_IMPORTED_MODULE_0__["default"]({
  inputView: _view_web_InputView__WEBPACK_IMPORTED_MODULE_1__["default"],
  outputView: _view_web_OutputView__WEBPACK_IMPORTED_MODULE_2__["default"]
});

// DOM에서 LottoController에 접근할 수 있도록 설정
globalThis.lottoController = lottoController;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ0g7QUFDRTtBQUUzQjtBQUVwQixJQUFNRyxlQUFlLEdBQUcsSUFBSXhQLHdEQUFlLENBQUM7RUFDMUNDLFNBQVMsRUFBRW1JLDJEQUFTO0VBQ3BCbEksVUFBVSxFQUFFa0osNERBQVVBO0FBQ3hCLENBQUMsQ0FBQzs7QUFFRjtBQUNBcUcsVUFBVSxDQUFDRCxlQUFlLEdBQUdBLGVBQWUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvTG90dG9Db250cm9sbGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL2NvbnN0YW50L01lc3NhZ2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvY29uc3RhbnQvUmVzdGFydENvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9kb21haW4vTG90dG9SZXN1bHQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9kb21haW4vV2lubmluZ0xvdHRvLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvZG9tYWluL2xvdHRvL0xvdHRvLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvZG9tYWluL2xvdHRvL0xvdHRvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL2RvbWFpbi9yZXdhcmQvQm9udXNSZXdhcmQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9kb21haW4vcmV3YXJkL1Jld2FyZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL2RvbWFpbi9zdWJqZWN0L0J1eWVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvZG9tYWluL3N1YmplY3QvU2VsbGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvZXJyb3JzL0xvdHRvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy91dGlscy9SYW5kb20uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9JbnB1dFZpZXcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9PdXRwdXRWaWV3LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvdmlldy93ZWIvY29tcG9uZW50L0x0Q29tcG9uZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvdmlldy93ZWIvY29tcG9uZW50L0x0Rm9ybUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9jb21wb25lbnQvTHRMb3R0b0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9jb21wb25lbnQvTHRMb3R0b1Jlc3VsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL3ZpZXcvd2ViL2NvbXBvbmVudC9MdE1vbmV5SW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9jb21wb25lbnQvTHRUZXh0SW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9jb21wb25lbnQvTHRUeXBvZ3JhcGh5L2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvdmlldy93ZWIvY29tcG9uZW50L0x0V2lubmluZ0xvdHRvSW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL0Bmb250c291cmNlL3JvYm90by9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9jc3MvZGlhbG9nLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL3ZpZXcvd2ViL2Nzcy9mb3JtLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL3ZpZXcvd2ViL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvdmlldy93ZWIvY29tcG9uZW50L0x0TG90dG9MaXN0L2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9jb21wb25lbnQvTHRMb3R0b1Jlc3VsdC9pbmRleC5odG1sIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvdmlldy93ZWIvY29tcG9uZW50L0x0TW9uZXlJbnB1dC9pbmRleC5odG1sIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9zcmMvdmlldy93ZWIvY29tcG9uZW50L0x0VGV4dElucHV0L2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9jb21wb25lbnQvTHRUeXBvZ3JhcGh5L2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9jb21wb25lbnQvTHRXaW5uaW5nTG90dG9JbnB1dC9pbmRleC5odG1sIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL0Bmb250c291cmNlL3JvYm90by9pbmRleC5jc3M/MzAxMSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL3ZpZXcvd2ViL2Nzcy9kaWFsb2cuY3NzPzVjZWEiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy92aWV3L3dlYi9jc3MvZm9ybS5jc3M/ZGIzMiIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vc3JjL3ZpZXcvd2ViL2Nzcy9pbmRleC5jc3M/OTE1MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWxvdHRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtbG90dG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1sb3R0by8uL3NyYy9zdGVwMi1pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzdGFydENvbW1hbmQgZnJvbSAnLi9jb25zdGFudC9SZXN0YXJ0Q29tbWFuZCc7XG5pbXBvcnQgTG90dG9SZXN1bHQgZnJvbSAnLi9kb21haW4vTG90dG9SZXN1bHQnO1xuaW1wb3J0IEJ1eWVyIGZyb20gJy4vZG9tYWluL3N1YmplY3QvQnV5ZXInO1xuaW1wb3J0IFNlbGxlciBmcm9tICcuL2RvbWFpbi9zdWJqZWN0L1NlbGxlcic7XG5pbXBvcnQgTG90dG9FcnJvciBmcm9tICcuL2Vycm9ycy9Mb3R0b0Vycm9yJztcblxuY2xhc3MgTG90dG9Db250cm9sbGVyIHtcbiAgI2lucHV0VmlldztcbiAgI291dHB1dFZpZXc7XG5cbiAgLyoqIEB0eXBlIHtCdXllcn0gKi9cbiAgI2J1eWVyO1xuXG4gIC8qKiBAdHlwZSB7U2VsbGVyfSAqL1xuICAjc2VsbGVyO1xuXG4gIC8qKiBAdHlwZSB7Ym9vbGVhbn0g7Luo7Yq466Gk65+s6rCAIOqzhOyGjSDsgqzsmqnrkKAg7IiYIOyeiOuKlOyngCDsl6zrtoAuIOyerOyLnOyekSDsoJzslrTrpbwg7JyE7ZW0IOyCrOyaqe2VnOuLpC4gKi9cbiAgI2ZpbmlzaGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoeyBpbnB1dFZpZXcsIG91dHB1dFZpZXcgfSkge1xuICAgIHRoaXMuI2lucHV0VmlldyA9IGlucHV0VmlldztcbiAgICB0aGlzLiNvdXRwdXRWaWV3ID0gb3V0cHV0VmlldztcbiAgfVxuXG4gIGlzRmluaXNoZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2ZpbmlzaGVkO1xuICB9XG5cbiAgZmluaXNoKCkge1xuICAgIHRoaXMuI2ZpbmlzaGVkID0gdHJ1ZTtcbiAgfVxuXG4gICN0aHJvd0lmRmluaXNoZWQoKSB7XG4gICAgaWYgKHRoaXMuI2ZpbmlzaGVkKSB0aHJvdyBuZXcgTG90dG9FcnJvcign7IKs7Jqp7J20IOyiheujjOuQnCDsu6jtirjroaTrn6zsnoXri4jri6QuJyk7XG4gIH1cblxuICBhc3luYyBwcm9jZWVkQnV5TG90dG9zKCkge1xuICAgIHRoaXMuI3Rocm93SWZGaW5pc2hlZCgpO1xuXG4gICAgY29uc3QgbW9uZXkgPSBhd2FpdCB0aGlzLiNpbnB1dFZpZXcucmVhZE1vbmV5KCk7XG4gICAgdGhpcy4jYnV5ZXIgPSBuZXcgQnV5ZXIobW9uZXkpO1xuICAgIHRoaXMuI3NlbGxlciA9IG5ldyBTZWxsZXIoKTtcbiAgICB0aGlzLiNidXllci5idXlMb3R0b3ModGhpcy4jc2VsbGVyKTtcblxuICAgIHRoaXMuI291dHB1dFZpZXcucHJpbnRMb3R0b3ModGhpcy4jYnV5ZXIuZ2V0TG90dG9zKCkpO1xuICB9XG5cbiAgYXN5bmMgcHJvY2VlZExvdHRvUmVzdWx0KCkge1xuICAgIHRoaXMuI3Rocm93SWZGaW5pc2hlZCgpO1xuXG4gICAgY29uc3Qgd2lubmluZ0xvdHRvID0gYXdhaXQgdGhpcy4jaW5wdXRWaWV3LnJlYWRXaW5uaW5nTG90dG8oKTtcbiAgICBjb25zdCBsb3R0b1Jlc3VsdCA9IG5ldyBMb3R0b1Jlc3VsdCh3aW5uaW5nTG90dG8pO1xuICAgIHRoaXMuI2J1eWVyLnJlY2VpdmVSZXdhcmRzKGxvdHRvUmVzdWx0KTtcbiAgICBjb25zdCBwcm9maXRSYXRlID0gdGhpcy4jYnV5ZXIuZ2V0UHJvZml0UmF0ZSgpO1xuXG4gICAgdGhpcy4jb3V0cHV0Vmlldy5wcmludExvdHRvUmVzdWx0KGxvdHRvUmVzdWx0LCB0aGlzLiNidXllci5nZXRSZXdhcmRzKCkpO1xuICAgIHRoaXMuI291dHB1dFZpZXcucHJpbnRQcm9maXRSYXRlKHByb2ZpdFJhdGUpO1xuICB9XG5cbiAgYXN5bmMgcHJvY2VlZFJlc3RhcnQoKSB7XG4gICAgdGhpcy4jdGhyb3dJZkZpbmlzaGVkKCk7XG5cbiAgICBjb25zdCByZXN0YXJ0Q29tbWFuZCA9IGF3YWl0IHRoaXMuI2lucHV0Vmlldy5yZWFkUmVzdGFydENvbW1hbmQoKTtcbiAgICBpZiAocmVzdGFydENvbW1hbmQgPT09IFJlc3RhcnRDb21tYW5kLllFUykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiNvdXRwdXRWaWV3LnByaW50RXhpdCgpO1xuICAgIHRoaXMuZmluaXNoKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG90dG9Db250cm9sbGVyO1xuIiwiaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4vY29uc3RhbnQvTWVzc2FnZXMnO1xuaW1wb3J0IFJlc3RhcnRDb21tYW5kIGZyb20gJy4vY29uc3RhbnQvUmVzdGFydENvbW1hbmQnO1xuaW1wb3J0IExvdHRvIGZyb20gJy4vZG9tYWluL2xvdHRvL0xvdHRvJztcbmltcG9ydCBMb3R0b0Vycm9yIGZyb20gJy4vZXJyb3JzL0xvdHRvRXJyb3InO1xuXG5jb25zdCBWYWxpZGF0aW9uID0ge1xuICBSRUdFWF9OVU1FUklDOiAvXlxcZCskLyxcblxuICBpc051bWVyaWModGV4dCkge1xuICAgIHJldHVybiBWYWxpZGF0aW9uLlJFR0VYX05VTUVSSUMudGVzdCh0ZXh0KTtcbiAgfSxcblxuICB2YWxpZGF0ZU1vbmV5KG1vbmV5KSB7XG4gICAgaWYgKCFWYWxpZGF0aW9uLmlzTnVtZXJpYyhtb25leSkgfHwgbW9uZXkgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgTG90dG9FcnJvcihNZXNzYWdlcy5FUlJPUl9NT05FWV9TSE9VTERfUE9TSVRJVkVfSU5URUdFUik7XG4gICAgfVxuICAgIGlmIChtb25leSAlIExvdHRvLlBSSUNFICE9PSAwIHx8IG1vbmV5IC8gTG90dG8uUFJJQ0UgPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IExvdHRvRXJyb3IoTWVzc2FnZXMuRVJST1JfTU9ORVlfQU1PVU5UX1NIT1VMRF9NVUxUSVBMRV9PRiwgTG90dG8uUFJJQ0UpO1xuICAgIH1cbiAgfSxcblxuICB2YWxpZGF0ZUxvdHRvTnVtYmVyKGxvdHRvTnVtYmVyKSB7XG4gICAgaWYgKCFWYWxpZGF0aW9uLmlzTnVtZXJpYyhsb3R0b051bWJlcikpIHtcbiAgICAgIHRocm93IG5ldyBMb3R0b0Vycm9yKE1lc3NhZ2VzLkVSUk9SX0xPVFRPX05VTUJFUl9TSE9VTERfTlVNRVJJQyk7XG4gICAgfVxuICAgIGlmIChsb3R0b051bWJlciA8IExvdHRvLk5VTUJFUl9MT1dFUl9CT1VORCB8fCBMb3R0by5OVU1CRVJfVVBQRVJfQk9VTkQgPCBsb3R0b051bWJlcikge1xuICAgICAgdGhyb3cgbmV3IExvdHRvRXJyb3IoXG4gICAgICAgIE1lc3NhZ2VzLkVSUk9SX0xPVFRPX05VTUJFUl9TSE9VTERfQkVUV0VFTixcbiAgICAgICAgTG90dG8uTlVNQkVSX0xPV0VSX0JPVU5ELFxuICAgICAgICBMb3R0by5OVU1CRVJfVVBQRVJfQk9VTkQsXG4gICAgICApO1xuICAgIH1cbiAgfSxcblxuICB2YWxpZGF0ZUxvdHRvTnVtYmVycyhsb3R0b051bWJlcnMpIHtcbiAgICBWYWxpZGF0aW9uLnZhbGlkYXRlSXNBcnJheShsb3R0b051bWJlcnMpO1xuICAgIFZhbGlkYXRpb24udmFsaWRhdGVBcnJheUxlbmd0aChsb3R0b051bWJlcnMpO1xuICAgIFZhbGlkYXRpb24udmFsaWRhdGVVbmlxdWVOdW1iZXJzKGxvdHRvTnVtYmVycyk7XG5cbiAgICBsb3R0b051bWJlcnMuZm9yRWFjaChWYWxpZGF0aW9uLnZhbGlkYXRlTG90dG9OdW1iZXIpO1xuICB9LFxuXG4gIHZhbGlkYXRlSXNBcnJheShsb3R0b051bWJlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobG90dG9OdW1iZXJzKSkge1xuICAgICAgdGhyb3cgbmV3IExvdHRvRXJyb3IoTWVzc2FnZXMuRVJST1JfTE9UVE9fTlVNQkVSU19TSE9VTERfQVJSQVkpO1xuICAgIH1cbiAgfSxcblxuICB2YWxpZGF0ZUFycmF5TGVuZ3RoKGxvdHRvTnVtYmVycykge1xuICAgIGlmIChsb3R0b051bWJlcnMubGVuZ3RoICE9PSBMb3R0by5MRU5HVEgpIHtcbiAgICAgIHRocm93IG5ldyBMb3R0b0Vycm9yKE1lc3NhZ2VzLkVSUk9SX0xPVFRPX05VTUJFUlNfU0hPVUxEX0xFTkdUSF9PRiwgTG90dG8uTEVOR1RIKTtcbiAgICB9XG4gIH0sXG5cbiAgdmFsaWRhdGVVbmlxdWVOdW1iZXJzKGxvdHRvTnVtYmVycykge1xuICAgIGNvbnN0IGxvdHRvU2V0ID0gbmV3IFNldChsb3R0b051bWJlcnMpO1xuICAgIGlmIChsb3R0b051bWJlcnMubGVuZ3RoICE9PSBsb3R0b1NldC5zaXplKSB7XG4gICAgICB0aHJvdyBuZXcgTG90dG9FcnJvcihNZXNzYWdlcy5FUlJPUl9MT1RUT19OVU1CRVJTX1NIT1VMRF9VTklRVUUpO1xuICAgIH1cbiAgfSxcblxuICB2YWxpZGF0ZUJvbnVzTnVtYmVyVW5pcXVlKGxvdHRvTnVtYmVycywgYm9udXNOdW1iZXIpIHtcbiAgICBpZiAobG90dG9OdW1iZXJzLmluY2x1ZGVzKGJvbnVzTnVtYmVyKSkge1xuICAgICAgdGhyb3cgbmV3IExvdHRvRXJyb3IoTWVzc2FnZXMuRVJST1JfQk9OVVNfTlVNQkVSX1NIT1VMRF9VTklRVUUpO1xuICAgIH1cbiAgfSxcblxuICB2YWxpZGF0ZVJlc3RhcnRDb21tYW5kKGNvbW1hbmQpIHtcbiAgICBpZiAoIU9iamVjdC52YWx1ZXMoUmVzdGFydENvbW1hbmQpLmluY2x1ZGVzKGNvbW1hbmQpKSB7XG4gICAgICB0aHJvdyBuZXcgTG90dG9FcnJvcihNZXNzYWdlcy5FUlJPUl9SRVNUQVJUX0NPTU1BTkRfU0hPVUxEX0JFKTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uO1xuIiwiY29uc3QgTWVzc2FnZXMgPSB7XG4gIEJPTlVTX05VTUJFUl9SRVdBUkRfTkFNRTogJ3swfeqwnCArIOuztOuEiOyKpCDrs7wg7J287LmYJyxcbiAgUkVXQVJEX05BTUU6ICd7MH3qsJwg7J287LmYJyxcblxuICBJTlBVVF9NT05FWTogJ+q1rOyehSDquIjslaHsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC4nLFxuICBJTlBVVF9XSU5OSU5HX05VTUJFUlM6ICfri7nssqgg67KI7Zi466W8IOyeheugpe2VtCDso7zshLjsmpQuJyxcbiAgSU5QVVRfQk9OVVNfTlVJTUJFUjogJ+uztOuEiOyKpCDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalC4nLFxuICBJTlBVVF9SRVNUQVJUX0NPTU1BTkQ6ICfri6Tsi5wg7Iuc7J6R7ZWY7Iuc6rKg7Iq164uI6rmMPyAoeS9uKScsXG5cbiAgUFJJTlRfQk9VR0hUX0xPVFRPU19DT1VOVDogJ3swfeqwnOulvCDqtazrp6TtlojsirXri4jri6QuJyxcbiAgUFJJTlRfQk9VR0hUX0xPVFRPOiAnW3swfV0nLFxuICBQUklOVF9MT1RUT19SRVNVTFRfVElUTEU6ICfri7nssqgg7Ya16rOEJyxcbiAgUFJJTlRfTE9UVE9fUkVTVUxUX1NVQlRJVExFOiAn4piFLeKYhS3imIUt4piFLeKYhS3imIUnLFxuICBQUklOVF9MT1RUT19SRVNVTFRfUkVXQVJEOiAnezB9ICh7MX3sm5ApIC0gezJ96rCcJyxcbiAgUFJJTlRfUFJPRklUX1JBVEU6ICfstJ0g7IiY7J2166Wg7J2AIHswfSUg7J6F64uI64ukLicsXG4gIFBSSU5UX0VYSVQ6ICfqsozsnoTsnbQg7KKF66OM65CY7JeI7Iq164uI64ukLicsXG5cbiAgRVJST1JfTU9ORVlfU0hPVUxEX1BPU0lUSVZFX0lOVEVHRVI6ICfroZzrmJAg6rWs66ekIOq4iOyVoeydgCAwIOydtOyDgeydmCDsoJXsiJjrpbwg7J6F66Cl7ZW07JW8IO2VqeuLiOuLpC4nLFxuICBFUlJPUl9NT05FWV9BTU9VTlRfU0hPVUxEX01VTFRJUExFX09GOiAnezB97JuQIOuLqOychOuhnCDquIjslaHsnYQg7KO87Ja07JW8IO2VqeuLiOuLpC4nLFxuICBFUlJPUl9MT1RUT19OVU1CRVJfU0hPVUxEX05VTUVSSUM6ICfroZzrmJAg67KI7Zi464qUIOyIq+yekOuhnCDsnbTro6jslrTsoLgg7J6I7Ja07JW8IO2VqeuLiOuLpC4nLFxuICBFUlJPUl9MT1RUT19OVU1CRVJfU0hPVUxEX0JFVFdFRU46ICfroZzrmJAg67KI7Zi464qUIHswfeyXkOyEnCB7MX0g7IKs7J207J2YIOyIq+yekOyXrOyVvCDtlanri4jri6QuJyxcbiAgRVJST1JfTE9UVE9fTlVNQkVSU19TSE9VTERfQVJSQVk6ICfroZzrmJAg67KI7Zi464qUIOuwsOyXtCDtg4DsnoXsnbTslrTslbwg7ZWp64uI64ukLicsXG4gIEVSUk9SX0xPVFRPX05VTUJFUlNfU0hPVUxEX0xFTkdUSF9PRjogJ+uhnOuYkCDrsojtmLjripQgezB97J6Q66as7Jes7JW8IO2VqeuLiOuLpC4nLFxuICBFUlJPUl9MT1RUT19OVU1CRVJTX1NIT1VMRF9VTklRVUU6ICfroZzrmJAg67KI7Zi464qUIOykkeuzteuQoCDsiJgg7JeG7Iq164uI64ukLicsXG4gIEVSUk9SX0JPTlVTX05VTUJFUl9TSE9VTERfVU5JUVVFOiAn66Gc65iQIOuyiO2YuOyZgCDrs7TrhIjsiqQg67KI7Zi464qUIOykkeuzteuQoCDsiJgg7JeG7Iq164uI64ukLicsXG4gIEVSUk9SX1JFU1RBUlRfQ09NTUFORF9TSE9VTERfQkU6ICfsnqzsi5zsnpEg66qF66C57Ja064qUIHnrmJDripQgbuycvOuhnCDsnoXroKXtlbTslbwg7ZWp64uI64ukLicsXG5cbiAgZm9ybWF0KG1lc3NhZ2UsIC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gYXJncy5yZWR1Y2UoXG4gICAgICAoZm9ybWF0dGVkTWVzc2FnZSwgYXJnLCBpbmRleCkgPT4gZm9ybWF0dGVkTWVzc2FnZS5yZXBsYWNlQWxsKGB7JHtpbmRleH19YCwgYXJnKSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzO1xuIiwiY29uc3QgUmVzdGFydENvbW1hbmQgPSB7XG4gIFlFUzogJ3knLFxuICBOTzogJ24nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdGFydENvbW1hbmQ7XG4iLCJpbXBvcnQgTG90dG8gZnJvbSAnLi9sb3R0by9Mb3R0byc7XG5pbXBvcnQgQm9udXNOdW1iZXJSZXdhcmQgZnJvbSAnLi9yZXdhcmQvQm9udXNSZXdhcmQnO1xuaW1wb3J0IFJld2FyZCBmcm9tICcuL3Jld2FyZC9SZXdhcmQnO1xuaW1wb3J0IFdpbm5pbmdMb3R0byBmcm9tICcuL1dpbm5pbmdMb3R0byc7XG5cbmNsYXNzIExvdHRvUmVzdWx0IHtcbiAgLyoqIEB0eXBlIHtSZXdhcmRbXX0gKi9cbiAgc3RhdGljIERFRkFVTFRfUkVXQVJEUyA9IFtcbiAgICBuZXcgUmV3YXJkKDYsIDJfMDAwXzAwMF8wMDApLFxuICAgIG5ldyBCb251c051bWJlclJld2FyZCg1LCAzMF8wMDBfMDAwKSxcbiAgICBuZXcgUmV3YXJkKDUsIDFfNTAwXzAwMCksXG4gICAgbmV3IFJld2FyZCg0LCA1MF8wMDApLFxuICAgIG5ldyBSZXdhcmQoMywgNV8wMDApLFxuICBdO1xuXG4gIC8qKiBAdHlwZSB7V2lubmluZ0xvdHRvfSAqL1xuICAjd2lubmluZ0xvdHRvO1xuXG4gIC8qKiBAdHlwZSB7UmV3YXJkW119ICovXG4gICNyZXdhcmRzO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1dpbm5pbmdMb3R0b30gd2lubmluZ0xvdHRvXG4gICAqIEBwYXJhbSB7UmV3YXJkW119IHJld2FyZHNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdpbm5pbmdMb3R0bywgcmV3YXJkcyA9IExvdHRvUmVzdWx0LkRFRkFVTFRfUkVXQVJEUykge1xuICAgIHRoaXMuI3dpbm5pbmdMb3R0byA9IHdpbm5pbmdMb3R0bztcbiAgICB0aGlzLiNyZXdhcmRzID0gcmV3YXJkcztcbiAgfVxuXG4gIGdldFJld2FyZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Jld2FyZHM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtMb3R0b30gbG90dG9cbiAgICogQHJldHVybnMge1Jld2FyZCB8IG51bGx9XG4gICAqL1xuICBmaW5kUmV3YXJkKGxvdHRvKSB7XG4gICAgY29uc3QgZm91bmRSZXdhcmQgPVxuICAgICAgdGhpcy4jcmV3YXJkcy5maW5kKChyZXdhcmQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJld2FyZC5pc1F1YWxpZmllZChsb3R0bywgdGhpcy4jd2lubmluZ0xvdHRvKTtcbiAgICAgIH0pID8/IG51bGw7XG4gICAgcmV0dXJuIGZvdW5kUmV3YXJkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvdHRvUmVzdWx0O1xuIiwiaW1wb3J0IFZhbGlkYXRpb24gZnJvbSAnLi4vVmFsaWRhdGlvbic7XG5pbXBvcnQgTG90dG8gZnJvbSAnLi9sb3R0by9Mb3R0byc7XG5cbmNsYXNzIFdpbm5pbmdMb3R0byB7XG4gIC8qKiBAdHlwZSB7TG90dG99ICovXG4gICNsb3R0bztcblxuICAvKiogQHR5cGUge251bWJlcn0gKi9cbiAgI2JvbnVzTnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcltdfSBsb3R0b051bWJlcnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGJvbnVzTnVtYmVyXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihsb3R0b051bWJlcnMsIGJvbnVzTnVtYmVyKSB7XG4gICAgdGhpcy4jbG90dG8gPSBuZXcgTG90dG8obG90dG9OdW1iZXJzKTtcbiAgICB0aGlzLiNib251c051bWJlciA9IGJvbnVzTnVtYmVyO1xuXG4gICAgVmFsaWRhdGlvbi52YWxpZGF0ZUxvdHRvTnVtYmVyKGJvbnVzTnVtYmVyKTtcbiAgICBWYWxpZGF0aW9uLnZhbGlkYXRlQm9udXNOdW1iZXJVbmlxdWUobG90dG9OdW1iZXJzLCBib251c051bWJlcik7XG4gIH1cblxuICBnZXRMb3R0b051bWJlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xvdHRvLmdldExvdHRvTnVtYmVycygpO1xuICB9XG5cbiAgZ2V0Qm9udXNOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvbnVzTnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TG90dG99IGxvdHRvXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRNYXRjaENvdW50KGxvdHRvKSB7XG4gICAgY29uc3QgY291bnRGbiA9IChjb3VudCwgbG90dG9OdW1iZXIpID0+XG4gICAgICBsb3R0by5nZXRMb3R0b051bWJlcnMoKS5pbmNsdWRlcyhsb3R0b051bWJlcikgPyBjb3VudCArIDEgOiBjb3VudDtcbiAgICByZXR1cm4gdGhpcy5nZXRMb3R0b051bWJlcnMoKS5yZWR1Y2UoY291bnRGbiwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtMb3R0b30gbG90dG9cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBoYXNCb251c051bWJlcihsb3R0bykge1xuICAgIHJldHVybiBsb3R0by5nZXRMb3R0b051bWJlcnMoKS5pbmNsdWRlcyh0aGlzLiNib251c051bWJlcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lubmluZ0xvdHRvO1xuIiwiaW1wb3J0IFZhbGlkYXRpb24gZnJvbSAnLi4vLi4vVmFsaWRhdGlvbic7XG5cbmNsYXNzIExvdHRvIHtcbiAgc3RhdGljIExFTkdUSCA9IDY7XG5cbiAgc3RhdGljIE5VTUJFUl9MT1dFUl9CT1VORCA9IDE7XG5cbiAgc3RhdGljIE5VTUJFUl9VUFBFUl9CT1VORCA9IDQ1O1xuXG4gIHN0YXRpYyBQUklDRSA9IDEwMDA7XG5cbiAgLyoqIEB0eXBlIHtudW1iZXJbXX0gKi9cbiAgI2xvdHRvTnVtYmVycztcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gbG90dG9OdW1iZXJzXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihsb3R0b051bWJlcnMpIHtcbiAgICBWYWxpZGF0aW9uLnZhbGlkYXRlTG90dG9OdW1iZXJzKGxvdHRvTnVtYmVycyk7XG4gICAgdGhpcy4jbG90dG9OdW1iZXJzID0gbG90dG9OdW1iZXJzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgfVxuXG4gIGdldExvdHRvTnVtYmVycygpIHtcbiAgICByZXR1cm4gdGhpcy4jbG90dG9OdW1iZXJzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvdHRvO1xuIiwiaW1wb3J0IHsgc2h1ZmZsZSB9IGZyb20gJy4uLy4uL3V0aWxzL1JhbmRvbSc7XG5pbXBvcnQgTG90dG8gZnJvbSAnLi9Mb3R0byc7XG5cbmNsYXNzIExvdHRvRmFjdG9yeSB7XG4gIC8qKlxuICAgKiBAcmV0dXJucyB7TG90dG99XG4gICAqL1xuICBjcmVhdGVSYW5kb21Mb3R0bygpIHtcbiAgICBjb25zdCBhbGxMb3R0b051bWJlcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBMb3R0by5OVU1CRVJfVVBQRVJfQk9VTkQgfSwgKF8sIGkpID0+IGkgKyAxKTtcbiAgICBjb25zdCBsb3R0b051bWJlcnMgPSBzaHVmZmxlKGFsbExvdHRvTnVtYmVycykuc2xpY2UoMCwgTG90dG8uTEVOR1RIKTtcbiAgICByZXR1cm4gbmV3IExvdHRvKGxvdHRvTnVtYmVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG90dG9GYWN0b3J5O1xuIiwiaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4uLy4uL2NvbnN0YW50L01lc3NhZ2VzJztcbmltcG9ydCBMb3R0byBmcm9tICcuLi9sb3R0by9Mb3R0byc7XG5pbXBvcnQgV2lubmluZ0xvdHRvIGZyb20gJy4uL1dpbm5pbmdMb3R0byc7XG5pbXBvcnQgUmV3YXJkIGZyb20gJy4vUmV3YXJkJztcblxuY2xhc3MgQm9udXNOdW1iZXJSZXdhcmQgZXh0ZW5kcyBSZXdhcmQge1xuICAvKipcbiAgICogQHBhcmFtIHtMb3R0b30gbG90dG9cbiAgICogQHBhcmFtIHtXaW5uaW5nTG90dG99IHdpbm5pbmdMb3R0b1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzUXVhbGlmaWVkKGxvdHRvLCB3aW5uaW5nTG90dG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgd2lubmluZ0xvdHRvLmhhc0JvbnVzTnVtYmVyKGxvdHRvKSAmJlxuICAgICAgd2lubmluZ0xvdHRvLmdldE1hdGNoQ291bnQobG90dG8pID09PSB0aGlzLmdldE1hdGNoQ291bnQoKVxuICAgICk7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiBNZXNzYWdlcy5mb3JtYXQoTWVzc2FnZXMuQk9OVVNfTlVNQkVSX1JFV0FSRF9OQU1FLCB0aGlzLmdldE1hdGNoQ291bnQoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9udXNOdW1iZXJSZXdhcmQ7XG4iLCJpbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi4vLi4vY29uc3RhbnQvTWVzc2FnZXMnO1xuaW1wb3J0IExvdHRvIGZyb20gJy4uL2xvdHRvL0xvdHRvJztcbmltcG9ydCBXaW5uaW5nTG90dG8gZnJvbSAnLi4vV2lubmluZ0xvdHRvJztcblxuY2xhc3MgUmV3YXJkIHtcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICNtYXRjaENvdW50O1xuXG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAjbW9uZXk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXRjaENvdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb25leVxuICAgKi9cbiAgY29uc3RydWN0b3IobWF0Y2hDb3VudCwgbW9uZXkpIHtcbiAgICB0aGlzLiNtYXRjaENvdW50ID0gbWF0Y2hDb3VudDtcbiAgICB0aGlzLiNtb25leSA9IG1vbmV5O1xuICB9XG5cbiAgZ2V0TWF0Y2hDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbWF0Y2hDb3VudDtcbiAgfVxuXG4gIGdldE1vbmV5KCkge1xuICAgIHJldHVybiB0aGlzLiNtb25leTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0xvdHRvfSBsb3R0b1xuICAgKiBAcGFyYW0ge1dpbm5pbmdMb3R0b30gd2lubmluZ0xvdHRvXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNRdWFsaWZpZWQobG90dG8sIHdpbm5pbmdMb3R0bykge1xuICAgIHJldHVybiB3aW5uaW5nTG90dG8uZ2V0TWF0Y2hDb3VudChsb3R0bykgPT09IHRoaXMuI21hdGNoQ291bnQ7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiBNZXNzYWdlcy5mb3JtYXQoTWVzc2FnZXMuUkVXQVJEX05BTUUsIHRoaXMuI21hdGNoQ291bnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJld2FyZDtcbiIsImltcG9ydCBMb3R0b1Jlc3VsdCBmcm9tICcuLi9Mb3R0b1Jlc3VsdCc7XG5pbXBvcnQgUmV3YXJkIGZyb20gJy4uL3Jld2FyZC9SZXdhcmQnO1xuaW1wb3J0IFNlbGxlciBmcm9tICcuL1NlbGxlcic7XG5cbmNsYXNzIEJ1eWVyIHtcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gICNtb25leTtcblxuICAvKiogQHR5cGUge1Jld2FyZFtdfSAqL1xuICAjcmV3YXJkcyA9IFtdO1xuXG4gIC8qKiBAdHlwZSB7TG90dG9bXX0gKi9cbiAgI2xvdHRvcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbW9uZXlcbiAgICovXG4gIGNvbnN0cnVjdG9yKG1vbmV5KSB7XG4gICAgdGhpcy4jbW9uZXkgPSBtb25leTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1NlbGxlcn0gc2VsbGVyXG4gICAqL1xuICBidXlMb3R0b3Moc2VsbGVyKSB7XG4gICAgdGhpcy4jbG90dG9zID0gWy4uLnRoaXMuI2xvdHRvcywgLi4uc2VsbGVyLnNlbGxMb3R0b3ModGhpcy4jbW9uZXkpXTtcbiAgfVxuXG4gIGdldExvdHRvcygpIHtcbiAgICByZXR1cm4gdGhpcy4jbG90dG9zO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TG90dG9SZXN1bHR9IGxvdHRvUmVzdWx0XG4gICAqL1xuICByZWNlaXZlUmV3YXJkcyhsb3R0b1Jlc3VsdCkge1xuICAgIHRoaXMuI3Jld2FyZHMgPSBbXG4gICAgICAuLi50aGlzLiNyZXdhcmRzLFxuICAgICAgLi4udGhpcy4jbG90dG9zXG4gICAgICAgIC5tYXAoKGxvdHRvKSA9PiBsb3R0b1Jlc3VsdC5maW5kUmV3YXJkKGxvdHRvKSlcbiAgICAgICAgLmZpbHRlcigobG90dG8pID0+IGxvdHRvICE9PSBudWxsKSxcbiAgICBdO1xuICAgIHRoaXMuI2xvdHRvcyA9IFtdO1xuICB9XG5cbiAgZ2V0UmV3YXJkcygpIHtcbiAgICByZXR1cm4gdGhpcy4jcmV3YXJkcztcbiAgfVxuXG4gIGdldFByb2ZpdFJhdGUoKSB7XG4gICAgY29uc3Qgc3VtR2FpbmVkTW9uZXlGbiA9IChnYWluZWRNb25leSwgcmV3YXJkKSA9PiBnYWluZWRNb25leSArIHJld2FyZC5nZXRNb25leSgpO1xuICAgIHJldHVybiB0aGlzLiNyZXdhcmRzLnJlZHVjZShzdW1HYWluZWRNb25leUZuLCAwKSAvIHRoaXMuI21vbmV5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1eWVyO1xuIiwiaW1wb3J0IExvdHRvIGZyb20gJy4uL2xvdHRvL0xvdHRvJztcbmltcG9ydCBMb3R0b0ZhY3RvcnkgZnJvbSAnLi4vbG90dG8vTG90dG9GYWN0b3J5JztcblxuY2xhc3MgU2VsbGVyIHtcbiAgLyoqIEB0eXBlIHtMb3R0b0ZhY3Rvcnl9ICovXG4gICNsb3R0b0ZhY3Rvcnk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TG90dG9GYWN0b3J5fSBsb3R0b0ZhY3RvcnlcbiAgICovXG4gIGNvbnN0cnVjdG9yKGxvdHRvRmFjdG9yeSA9IG5ldyBMb3R0b0ZhY3RvcnkoKSkge1xuICAgIHRoaXMuI2xvdHRvRmFjdG9yeSA9IGxvdHRvRmFjdG9yeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbW9uZXlcbiAgICogQHJldHVybnMge0xvdHRvW119XG4gICAqL1xuICBzZWxsTG90dG9zKG1vbmV5KSB7XG4gICAgY29uc3QgYW1vdW50ID0gbW9uZXkgLyBMb3R0by5QUklDRTtcbiAgICByZXR1cm4gQXJyYXkoYW1vdW50KVxuICAgICAgLmZpbGwoKVxuICAgICAgLm1hcCgoKSA9PiB0aGlzLiNsb3R0b0ZhY3RvcnkuY3JlYXRlUmFuZG9tTG90dG8oKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsbGVyO1xuIiwiaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4uL2NvbnN0YW50L01lc3NhZ2VzJztcblxuY2xhc3MgTG90dG9FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqIEBwYXJhbSAgey4uLmFueX0gYXJnc1xuICAgKi9cbiAgY29uc3RydWN0b3IobWVzc2FnZSwgLi4uYXJncykge1xuICAgIHN1cGVyKE1lc3NhZ2VzLmZvcm1hdChtZXNzYWdlLCAuLi5hcmdzKSk7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvdHRvRXJyb3I7XG4iLCIvKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1RbXX0gYXJyYXlcbiAqIEByZXR1cm5zIHtUW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5zb3J0KCgpID0+IChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSk7XG59XG4iLCJpbXBvcnQgUmVzdGFydENvbW1hbmQgZnJvbSAnLi4vLi4vY29uc3RhbnQvUmVzdGFydENvbW1hbmQnO1xuaW1wb3J0IFdpbm5pbmdMb3R0byBmcm9tICcuLi8uLi9kb21haW4vV2lubmluZ0xvdHRvJztcbmltcG9ydCBMb3R0b0Vycm9yIGZyb20gJy4uLy4uL2Vycm9ycy9Mb3R0b0Vycm9yJztcbmltcG9ydCB7IEx0TW9uZXlJbnB1dCwgTHRXaW5uaW5nTG90dG9JbnB1dCB9IGZyb20gJy4vY29tcG9uZW50JztcblxuY29uc3QgSW5wdXRWaWV3ID0ge1xuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cbiAgICovXG4gIGFzeW5jIHJlYWRNb25leSgpIHtcbiAgICAvKiogQHR5cGUge0x0TW9uZXlJbnB1dH0gKi9cbiAgICBjb25zdCAkbW9uZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9uZXknKTtcblxuICAgIGNvbnN0IG1vbmV5ID0gJG1vbmV5LmdldE1vbmV5KCk7XG4gICAgaWYgKG1vbmV5ID09PSBudWxsKSB0aHJvdyBuZXcgTG90dG9FcnJvcign66Gc65iQIOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpQhJyk7XG5cbiAgICByZXR1cm4gbW9uZXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFdpbm5pbmdMb3R0bz59XG4gICAqL1xuICBhc3luYyByZWFkV2lubmluZ0xvdHRvKCkge1xuICAgIC8qKiBAdHlwZSB7THRXaW5uaW5nTG90dG9JbnB1dH0gKi9cbiAgICBjb25zdCAkd2lubmluZ0xvdHRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5pbmctbG90dG8nKTtcblxuICAgIGNvbnN0IHdpbm5pbmdMb3R0byA9ICR3aW5uaW5nTG90dG8uZ2V0V2lubmluZ0xvdHRvKCk7XG4gICAgaWYgKCEod2lubmluZ0xvdHRvIGluc3RhbmNlb2YgV2lubmluZ0xvdHRvKSkgdGhyb3cgbmV3IExvdHRvRXJyb3IoJ+uLueyyqCDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUIScpO1xuXG4gICAgcmV0dXJuIHdpbm5pbmdMb3R0bztcbiAgfSxcblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIGFzeW5jIHJlYWRSZXN0YXJ0Q29tbWFuZCgpIHtcbiAgICAvKiogQHR5cGUge0hUTUxGb3JtRWxlbWVudH0gKi9cbiAgICBjb25zdCAkbG90dG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvdHRvLWZvcm0nKTtcblxuICAgICRsb3R0b0Zvcm0ucmVzZXQoKTtcbiAgICBJbnB1dFZpZXcucmVzZXRBbmNob3IoKTtcbiAgICByZXR1cm4gUmVzdGFydENvbW1hbmQuWUVTO1xuICB9LFxuXG4gIHJlc2V0QW5jaG9yKCkge1xuICAgIC8qKiBAdHlwZSB7SFRNTEZvcm1FbGVtZW50fSAqL1xuICAgIGNvbnN0ICRsb3R0b0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG90dG8tZm9ybScpO1xuXG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICBjb25zdCAkZmlyc3RBbmNob3IgPSAkbG90dG9Gb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvY3VzLWFuY2hvcl0nKTtcblxuICAgICRsb3R0b0Zvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZm9jdXNdJykucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZvY3VzJyk7XG4gICAgJGZpcnN0QW5jaG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1mb2N1cycsICcnKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0VmlldztcbiIsImltcG9ydCBNZXNzYWdlcyBmcm9tICcuLi8uLi9jb25zdGFudC9NZXNzYWdlcyc7XG5pbXBvcnQgTG90dG8gZnJvbSAnLi4vLi4vZG9tYWluL2xvdHRvL0xvdHRvJztcbmltcG9ydCBMb3R0b1Jlc3VsdCBmcm9tICcuLi8uLi9kb21haW4vTG90dG9SZXN1bHQnO1xuaW1wb3J0IFJld2FyZCBmcm9tICcuLi8uLi9kb21haW4vcmV3YXJkL1Jld2FyZCc7XG5pbXBvcnQgeyBMdExvdHRvUmVzdWx0LCBMdFR5cG9ncmFwaHkgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgTHRMb3R0b0xpc3QgZnJvbSAnLi9jb21wb25lbnQvTHRMb3R0b0xpc3QnO1xuXG5jb25zdCBPdXRwdXRWaWV3ID0ge1xuICAvKipcbiAgICogQHBhcmFtIHtMb3R0b1tdfSBsb3R0b3NcbiAgICovXG4gIHByaW50TG90dG9zKGxvdHRvcykge1xuICAgIC8qKiBAdHlwZSB7THRMb3R0b0xpc3R9ICovXG4gICAgY29uc3QgJGJvdWdodExvdHRvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3VnaHQtbG90dG9zJyk7XG5cbiAgICAkYm91Z2h0TG90dG9zLnNldExvdHRvcyhsb3R0b3MpO1xuICAgIE91dHB1dFZpZXcuZm9jdXNOZXh0QW5jaG9yKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7TG90dG9SZXN1bHR9IGxvdHRvUmVzdWx0XG4gICAqIEBwYXJhbSB7UmV3YXJkfSByZXdhcmRzXG4gICAqL1xuICBwcmludExvdHRvUmVzdWx0KGxvdHRvUmVzdWx0LCByZXdhcmRzKSB7XG4gICAgLyoqIEB0eXBlIHtIVE1MRGlhbG9nRWxlbWVudH0gKi9cbiAgICBjb25zdCAkbG90dG9SZXN1bHREaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG90dG8tcmVzdWx0LWRpYWxvZycpO1xuICAgIC8qKiBAdHlwZSB7THRMb3R0b1Jlc3VsdH0gKi9cbiAgICBjb25zdCAkbG90dG9SZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG90dG8tcmVzdWx0Jyk7XG5cbiAgICAkbG90dG9SZXN1bHQuc2V0TG90dG9SZXN1bHQobG90dG9SZXN1bHQpO1xuICAgICRsb3R0b1Jlc3VsdC5zZXRSZXdhcmRzKHJld2FyZHMpO1xuXG4gICAgJGxvdHRvUmVzdWx0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIE91dHB1dFZpZXcuZm9jdXNOZXh0QW5jaG9yKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9maXRSYXRlXG4gICAqL1xuICBwcmludFByb2ZpdFJhdGUocHJvZml0UmF0ZSkge1xuICAgIC8qKiBAdHlwZSB7THRUeXBvZ3JhcGh5fSAqL1xuICAgIGNvbnN0ICRsb3R0b1Jlc3VsdFByb2ZpdFJhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG90dG8tcmVzdWx0LXByb2ZpdC1yYXRlJyk7XG5cbiAgICAkbG90dG9SZXN1bHRQcm9maXRSYXRlLmlubmVyVGV4dCA9IE1lc3NhZ2VzLmZvcm1hdChcbiAgICAgIE1lc3NhZ2VzLlBSSU5UX1BST0ZJVF9SQVRFLFxuICAgICAgKHByb2ZpdFJhdGUgKiAxMDApLnRvRml4ZWQoMiksXG4gICAgKTtcbiAgfSxcblxuICBwcmludEV4aXQoKSB7fSxcblxuICBmb2N1c05leHRBbmNob3IoKSB7XG4gICAgLyoqIEB0eXBlIHtIVE1MRm9ybUVsZW1lbnR9ICovXG4gICAgY29uc3QgJGxvdHRvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3R0by1mb3JtJyk7XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9ICovXG4gICAgY29uc3QgJG5leHRBbmNob3IgPSAkbG90dG9Gb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvY3VzXSB+IFtkYXRhLWZvY3VzLWFuY2hvcl0nKTtcblxuICAgIGlmICghJG5leHRBbmNob3IpIHJldHVybjtcblxuICAgICRsb3R0b0Zvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEtZm9jdXNdJykucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZvY3VzJyk7XG4gICAgJG5leHRBbmNob3Iuc2V0QXR0cmlidXRlKCdkYXRhLWZvY3VzJywgJycpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgT3V0cHV0VmlldztcbiIsImNsYXNzIEx0Q29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOyXmOumrOuovO2KuOydmCBhdHRyaWJ1dGUg6rCS7J20IOuzgOqyveuQmOyXiOydhCDrlYwg7Zi47Lac65CY64qUIOy9nOuwsSDtlajsiJjsnbTri6QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7YW55fSBvbGRWYWx1ZVxuICAgKiBAcGFyYW0ge2FueX0gbmV3VmFsdWVcbiAgICovXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOugjOuNlOungSDrkKAgSFRNTCDqsJLsnYQg67CY7ZmY7ZWc64ukLlxuICAgKlxuICAgKiB7QGxpbmsgTHRDb21wb25lbnR9IOulvCDsg4Hsho3rsJvripQg7Lu07Y+s64SM7Yq47JeQ7IScIOyCrOyaqeyekOqwgCDsoJXsnZjtlZwgSFRNTOydhFxuICAgKiDtkZztmITtlZjqs6Ag7Iu27J2AIOqyveyasCwg7J20IOuplOyGjOuTnOulvCDsg4Hsho3tlZjsl6wg7IKs7Jqp7J6QIOygleydmCDqsJLsnYQg67CY7ZmY7ZWY66m0IOuQnOuLpC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY2xhc3MgTXlUZXh0IGV4dGVuZHMgTHRDb21wb25lbnQge1xuICAgKiAgIGdldFJlbmRlckNvbnRlbnQoKSB7XG4gICAqICAgICByZXR1cm4gYFxuICAgKiAgICAgICA8ZGl2PlxuICAgKiAgICAgICAgIDxzcGFuPiR7dGhpcy4jbXlUZXh0fTwvc3Bhbj5cbiAgICogICAgICAgPC9kaXY+XG4gICAqICAgICBgO1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBIVE1MIOusuOuyleycvOuhnCDsnpHshLHrkJwg66y47J6Q7Je0IOqwklxuICAgKi9cbiAgZ2V0UmVuZGVyQ29udGVudCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFJlbmRlckNvbnRlbnQgZnVuY3Rpb24gaXMgbm90IGltcGxlbWVudGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9tIEVsZW1lbnTsnZgg66CM642U66eB7J2EIOyImO2Wie2VmOuKlCDtlajsiJguXG4gICAqXG4gICAqIHtAbGluayBnZXRSZW5kZXJDb250ZW50fSDroZwg67aA7YSwIOqwgOyguOyYqCBIVE1MIHN0cmluZ+ydhCDroIzrjZTrp4HtlZzri6QuXG4gICAqXG4gICAqICMjIyB7QGxpbmsgcmVuZGVyfSDtlajsiJjqsIAg7IiY7ZaJ7ZWY64qUIOydvFxuICAgKiDroIzrjZTrp4Eg6rO87KCV7JeQ7IScIOyymOumrOuQmOuKlCDqsoPrk6TsnYAg64uk7J2M6rO8IOqwmeuLpC5cbiAgICpcbiAgICogLSBgb2JzZXJ2ZWRBdHRyaWJ1dGVzYCDroZwg65Ox66Gd65CY7Ja0IOyeiOuKlCDqsJLrk6TsnYQgSFRNTCBzdHJpbmfsl5Ag7KO87J6F7ZW07KSA64ukLlxuICAgKlxuICAgKiAgIOyYiOulvCDrk6TslrQsXG4gICAqICAgYGBgaHRtbFxuICAgKiAgIDxteS10ZXh0IG1lc3NhZ2U9XCLrsJjqsIDsm4zsmpQg8J+Ri1wiIC8+XG4gICAqICAgYGBgXG4gICAqICAg7JyE7J2YIOyXmOumrOuovO2KuOydmCBIVE1MIHN0cmluZ+ydtCDslYTrnpjsmYAg6rCZ7J2EIOuVjCxcbiAgICogICBgYGBodG1sXG4gICAqICAgPGRpdiBzdHlsZT1cImNvbG9yOiBibHVlXCI+e3BsYWNlaG9sZGVyfTwvZGl2PlxuICAgKiAgIGBgYFxuICAgKiAgIOydtOuKlCDslYTrnpjsspjrn7wg66CM642U66eB65Cc64ukLlxuICAgKiAgIGBgYFxuICAgKiAgIDxkaXYgc3R5bGU9XCJjb2xvcjogYmx1ZVwiPuuwmOqwgOybjOyalCDwn5GLPGRpdi8+XG4gICAqICAgYGBgXG4gICAqXG4gICAqIC0gSFRNTCBzdHJpbmcg64K07J2YIERPTSDspJEgYGlkYCDqsIAg7ISk7KCV65CY7Ja0IOyeiOuKlCDsl5jrpqzrqLztirjrpbwg7ZSE66Gc7Y287Yuw7JeQIOuTseuhne2VtOykgOuLpC5cbiAgICpcbiAgICogICDsmIjrpbwg65Ok7Ja0IEhUTUwgc3RyaW5n7J20IOyVhOuemOyZgCDqsJnsnYAg6rK97JqwLFxuICAgKiAgIGBgYGh0bWxcbiAgICogICA8c3BhbiBpZD1cIm15SW5wdXRcIj48L3NwYW4+XG4gICAqICAgYGBgXG4gICAqICAg7JyE7J2YIGBzcGFuYCBET03snYAg7JWE656Y7JmAIOqwmeydtCDrsJTsnbjrlKnrkJzri6QuXG4gICAqICAgYGBgamF2YXNjcmlwdFxuICAgKiAgIGNsYXNzIE15VGV4dCBleHRlbmRzIEx0Q29tcG9uZW50IHtcbiAgICogICAgICRteUlucHV0OyAvLyBIVE1MU3BhbkVsZW1lbnRcbiAgICogICB9XG4gICAqICAgYGBgXG4gICAqXG4gICAqICMjIyBET00g7J2067Kk7Yq4IO2VuOuTpOungSDrk7HsnZgg7KGw7J6RIOyLnFxuICAgKiB7QGxpbmsgcmVuZGVyfSDtlajsiJjqsIAg7Zi47Lac65CgIOuVjCDrp4jri6QgRE9N7J2AIOyDiOuhnCDsg53shLHrkJjrr4DroZwsXG4gICAqIERPTeyXkCDrjIDtlbQg7J2067Kk7Yq466W8IOy2lOqwgO2VmOuKlCDrk7HsnZgg7KGw7J6R7J2EIO2VmOugpOuptCB7QGxpbmsgcmVuZGVyfSDtlajsiJjsl5DshJwg7ZW07KSY7JW8IO2VnOuLpC5cbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjbGFzcyBNeVRleHQgZXh0ZW5kcyBMdENvbXBvbmVudCB7XG4gICAqICAgcmVuZGVyKCkge1xuICAgKiAgICAgc3VwZXIucmVuZGVyKCk7XG4gICAqXG4gICAqICAgICB0aGlzLiRteUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpKTtcbiAgICogICB9XG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgLy8gb2JzZXJ2ZWRBdHRyaWJ1dGVzIOuhnCDrk7HroZ3rkJjslrQg7J6I64qUIGF0dHJpYnV0ZeuKlCBIVE1M7JeQIOyekOuPmeycvOuhnCDso7zsnoXrkKhcbiAgICAvLyDsmIg6IDxsdC10ZXh0LWlucHV0IHBsYWNlaG9sZGVyPVwi7J6F66Cl7ZW07KO87IS47JqUXCIgLz4g66GcIOuQmOyWtOyeiOuKlCDqsr3smrAsXG4gICAgLy8gICAgIEhUTUwg64K07J2YICd7cGxhY2Vob2xkZXJ9JyDripQgJ+yeheugpe2VtOyjvOyEuOyalCcg66GcIOyekOuPmeycvOuhnCDrjIDssrTrkKhcbiAgICBjb25zdCBpbmplY3RBdHRyaWJ1dGVGbiA9IChjb250ZW50LCBhdHRyaWJ1dGUpID0+IHtcbiAgICAgIHJldHVybiBjb250ZW50LnJlcGxhY2VBbGwoYHske2F0dHJpYnV0ZX19YCwgdGhpcy5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSB8fCAnJyk7XG4gICAgfTtcblxuICAgIHRoaXMuc2hhZG93Um9vdC5pbm5lckhUTUwgPSAodGhpcy5jb25zdHJ1Y3Rvci5vYnNlcnZlZEF0dHJpYnV0ZXMgPz8gW10pLnJlZHVjZShcbiAgICAgIGluamVjdEF0dHJpYnV0ZUZuLFxuICAgICAgdGhpcy5nZXRSZW5kZXJDb250ZW50KCksXG4gICAgKTtcblxuICAgIC8vIGlkIOyGjeyEseydhCDqsIDsp4Dqs6Ag7J6I64qUIEhUTUxFbGVtZW5065Ok7J2AIO2UhOuhnO2NvO2LsOuhnCDsoJHqt7ztlaAg7IiYIOyeiOuPhOuhnSDrsJTsnbjrlKlcbiAgICBbLi4udGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKV0uZm9yRWFjaCgoJGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXNbYCQkeyRlbGVtZW50LmlkfWBdID0gJGVsZW1lbnQ7XG4gICAgfSk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEx0Q29tcG9uZW50O1xuIiwiaW1wb3J0IEx0Q29tcG9uZW50IGZyb20gJy4vTHRDb21wb25lbnQnO1xuXG4vKipcbiAqIEZvcm0gQ29udHJvbCDsl63tlaDsnYQg7IiY7ZaJ7ZWY64qUIEN1c3RvbSBFbGVtZW50XG4gKi9cbmNsYXNzIEx0Rm9ybUNvbnRyb2wgZXh0ZW5kcyBMdENvbXBvbmVudCB7XG4gIC8qKiBAdHlwZSB7RWxlbWVudEludGVybmFsc30gKi9cbiAgI2ludGVybmFscyA9IHRoaXMuYXR0YWNoSW50ZXJuYWxzKCk7XG5cbiAgc3RhdGljIGdldCBmb3JtQXNzb2NpYXRlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtIEFzc29jaWF0ZWQgRWxlbWVudCDsl5DshJwg7IKs7Jqp65CY64qUXG4gICAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudEludGVybmFscyBFbGVtZW50SW50ZXJuYWxzfSDrpbwg67CY7ZmYXG4gICAqXG4gICAqIEByZXR1cm5zIHtFbGVtZW50SW50ZXJuYWxzfVxuICAgKi9cbiAgZ2V0SW50ZXJuYWxzKCkge1xuICAgIHJldHVybiB0aGlzLiNpbnRlcm5hbHM7XG4gIH1cblxuICAvKipcbiAgICogRm9ybSBDb250cm9sIOydmCDqsJLsnYQgdmFsaWRhdGlvbu2VnCDqsrDqs7zrpbwg7ISk7KCV7ZWY64qUIO2VqOyImFxuICAgKlxuICAgKiDrp4zslb0g7Jik66WY66W8IO2RnOyLnO2VmOqzoCDsi7bri6TrqbQg7JWE656Y7JmAIOqwmeydtCDsgqzsmqlcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5zZXRWYWxpZGF0aW9uKCfsnoXroKXqsJLsnbQg7Iir7J6Q6rCAIOyVhOuLmeuLiOuLpCEnKTtcbiAgICpcbiAgICog7Jik66WY66W8IOygnOqxsO2VmOqzoCDsi7bsnYQg7IucIOyVhOuemOyZgCDqsJnsnbQgbnVsbCDqsJLsnYQg7KSA64ukLlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLnNldFZhbGlkYXRpb24obnVsbCk7XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gbWVzc2FnZVxuICAgKi9cbiAgc2V0VmFsaWRhdGlvbih2YWxpZCwgbWVzc2FnZSkge1xuICAgIHRoaXMuI2ludGVybmFscy5zZXRWYWxpZGl0eSh7IGN1c3RvbUVycm9yOiAhdmFsaWQgfSwgbWVzc2FnZSB8fCAnICcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm0gQXNzb2NpYXRlZCBFbGVtZW50IOyXkOyEnCDquLDrs7jsoIHsnLzroZwg7KCc6rO165CY7Ja07JW8IO2VoCDtlITroZztjbzti7BcbiAgICovXG4gIGdldCBmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLiNpbnRlcm5hbHMuZm9ybTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtIEFzc29jaWF0ZWQgRWxlbWVudCDsl5DshJwg6riw67O47KCB7Jy866GcIOygnOqzteuQmOyWtOyVvCDtlaAg7ZSE66Gc7Y287YuwXG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtIEFzc29jaWF0ZWQgRWxlbWVudCDsl5DshJwg6riw67O47KCB7Jy866GcIOygnOqzteuQmOyWtOyVvCDtlaAg7ZSE66Gc7Y287YuwXG4gICAqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbE5hbWU7XG4gIH1cblxuICAvKipcbiAgICogRm9ybSBBc3NvY2lhdGVkIEVsZW1lbnQg7JeQ7IScIOq4sOuzuOyggeycvOuhnCDsoJzqs7XrkJjslrTslbwg7ZWgIO2UhOuhnO2NvO2LsFxuICAgKi9cbiAgZ2V0IHZhbGlkaXR5KCkge1xuICAgIHJldHVybiB0aGlzLiNpbnRlcm5hbHMudmFsaWRpdHk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybSBBc3NvY2lhdGVkIEVsZW1lbnQg7JeQ7IScIOq4sOuzuOyggeycvOuhnCDsoJzqs7XrkJjslrTslbwg7ZWgIO2UhOuhnO2NvO2LsFxuICAgKi9cbiAgZ2V0IHZhbGlkYXRpb25NZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLiNpbnRlcm5hbHMudmFsaWRhdGlvbk1lc3NhZ2U7XG4gIH1cblxuICAvKipcbiAgICogRm9ybSBBc3NvY2lhdGVkIEVsZW1lbnQg7JeQ7IScIOq4sOuzuOyggeycvOuhnCDsoJzqs7XrkJjslrTslbwg7ZWgIO2UhOuhnO2NvO2LsFxuICAgKi9cbiAgZ2V0IHdpbGxWYWxpZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jaW50ZXJuYWxzLndpbGxWYWxpZGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtIEFzc29jaWF0ZWQgRWxlbWVudCDsl5DshJwg6riw67O47KCB7Jy866GcIOygnOqzteuQmOyWtOyVvCDtlaAg7ZSE66Gc7Y287YuwXG4gICAqL1xuICBjaGVja1ZhbGlkaXR5KCkge1xuICAgIHJldHVybiB0aGlzLiNpbnRlcm5hbHMuY2hlY2tWYWxpZGl0eSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm0gQXNzb2NpYXRlZCBFbGVtZW50IOyXkOyEnCDquLDrs7jsoIHsnLzroZwg7KCc6rO165CY7Ja07JW8IO2VoCDtlITroZztjbzti7BcbiAgICovXG4gIHJlcG9ydFZhbGlkaXR5KCkge1xuICAgIHJldHVybiB0aGlzLiNpbnRlcm5hbHMucmVwb3J0VmFsaWRpdHkoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMdEZvcm1Db250cm9sO1xuIiwiaW1wb3J0IExvdHRvIGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9sb3R0by9Mb3R0byc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEx0Rm9ybUNvbnRyb2wgfSBmcm9tICcuLi9MdEZvcm1Db250cm9sJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4Lmh0bWwnO1xuXG5jbGFzcyBMdExvdHRvTGlzdCBleHRlbmRzIEx0Rm9ybUNvbnRyb2wge1xuICAvKiogQHR5cGUge0hUTUxVTGlzdEVsZW1lbnR9ICovXG4gICRsb3R0b0xpc3Q7XG5cbiAgLyoqIEB0eXBlIHtIVE1MVGVtcGxhdGVFbGVtZW50fSAqL1xuICAkbG90dG9UZW1wbGF0ZTtcblxuICAvKiogQHR5cGUge0xvdHRvW119ICovXG4gICNsb3R0b3MgPSBbXTtcblxuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gWydwbGFjZWhvbGRlciddO1xuICB9XG5cbiAgZ2V0TG90dG9zKCkge1xuICAgIHJldHVybiB0aGlzLiNsb3R0b3M7XG4gIH1cblxuICBzZXRMb3R0b3MobG90dG9zKSB7XG4gICAgdGhpcy4jbG90dG9zID0gbG90dG9zO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBmb3JtUmVzZXRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnNldExvdHRvcyhbXSk7XG4gIH1cblxuICBnZXRSZW5kZXJDb250ZW50KCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBzdXBlci5yZW5kZXIoKTtcblxuICAgIGNvbnN0ICRsb3R0b3MgPSB0aGlzLiNsb3R0b3MubWFwKChsb3R0bykgPT4ge1xuICAgICAgY29uc3QgJGxvdHRvID0gdGhpcy4kbG90dG9UZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICRsb3R0by5xdWVyeVNlbGVjdG9yKCcubnVtYmVycycpLmlubmVyVGV4dCA9IGxvdHRvLmdldExvdHRvTnVtYmVycygpLmpvaW4oJywgJyk7XG4gICAgICByZXR1cm4gJGxvdHRvO1xuICAgIH0pO1xuICAgIHRoaXMuJGxvdHRvTGlzdC5kYXRhc2V0LmNvdW50ID0gdGhpcy4jbG90dG9zLmxlbmd0aDtcbiAgICB0aGlzLiRsb3R0b0xpc3QuYXBwZW5kKC4uLiRsb3R0b3MpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEx0TG90dG9MaXN0O1xuIiwiaW1wb3J0IExvdHRvUmVzdWx0IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9Mb3R0b1Jlc3VsdCc7XG5pbXBvcnQgUmV3YXJkIGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9yZXdhcmQvUmV3YXJkJztcbmltcG9ydCBMdENvbXBvbmVudCBmcm9tICcuLi9MdENvbXBvbmVudCc7XG5pbXBvcnQgTHRUeXBvZ3JhcGh5IGZyb20gJy4uL0x0VHlwb2dyYXBoeSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC5odG1sJztcblxuY2xhc3MgTHRMb3R0b1Jlc3VsdCBleHRlbmRzIEx0Q29tcG9uZW50IHtcbiAgLyoqIEB0eXBlIHtIVE1MVGFibGVTZWN0aW9uRWxlbWVudH0gKi9cbiAgJGxvdHRvUmVzdWx0UmV3YXJkcztcblxuICAvKiogQHR5cGUge0x0VHlwb2dyYXBoeX0gKi9cbiAgJGxvdHRvUmVzdWx0UHJvZml0UmF0ZTtcblxuICAvKiogQHR5cGUge0hUTUxUZW1wbGF0ZUVsZW1lbnR9ICovXG4gICRsb3R0b1Jlc3VsdFJld2FyZFRlbXBsYXRlO1xuXG4gIC8qKiBAdHlwZSB7TG90dG9SZXN1bHQgfCBudWxsfSAqL1xuICAjbG90dG9SZXN1bHQgPSBudWxsO1xuXG4gIC8qKiBAdHlwZSB7UmV3YXJkW119ICovXG4gICNyZXdhcmRzID0gW107XG5cbiAgZ2V0TG90dG9SZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xvdHRvUmVzdWx0O1xuICB9XG5cbiAgc2V0TG90dG9SZXN1bHQobG90dG9SZXN1bHQpIHtcbiAgICB0aGlzLiNsb3R0b1Jlc3VsdCA9IGxvdHRvUmVzdWx0O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXRSZXdhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLiNyZXdhcmRzO1xuICB9XG5cbiAgc2V0UmV3YXJkcyhyZXdhcmRzKSB7XG4gICAgdGhpcy4jcmV3YXJkcyA9IHJld2FyZHM7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGdldFJlbmRlckNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHN1cGVyLnJlbmRlcigpO1xuXG4gICAgaWYgKCF0aGlzLiNsb3R0b1Jlc3VsdCkgcmV0dXJuO1xuXG4gICAgdGhpcy4kbG90dG9SZXN1bHRSZXdhcmRzLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuJGxvdHRvUmVzdWx0UmV3YXJkcy5hcHBlbmQoXG4gICAgICAuLi50aGlzLiNsb3R0b1Jlc3VsdC5nZXRSZXdhcmRzKCkubWFwKChyZXdhcmQpID0+IHtcbiAgICAgICAgY29uc3QgJGxvdHRvUmVzdWx0UmV3YXJkID0gdGhpcy4kbG90dG9SZXN1bHRSZXdhcmRUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLiNyZXdhcmRzLmZpbHRlcigoX3Jld2FyZCkgPT4gX3Jld2FyZCA9PT0gcmV3YXJkKS5sZW5ndGg7XG5cbiAgICAgICAgW1xuICAgICAgICAgIFtyZXdhcmQuZ2V0TmFtZSgpLCAnLm1hdGNoLWNvdW50J10sXG4gICAgICAgICAgW3Jld2FyZC5nZXRNb25leSgpLnRvTG9jYWxlU3RyaW5nKCksICcucmV3YXJkLW1vbmV5J10sXG4gICAgICAgICAgW2NvdW50LCAnLmNvdW50J10sXG4gICAgICAgIF0uZm9yRWFjaCgoW2NvbnRlbnQsIHRhcmdldElkXSkgPT4ge1xuICAgICAgICAgICRsb3R0b1Jlc3VsdFJld2FyZC5xdWVyeVNlbGVjdG9yKHRhcmdldElkKS5pbm5lclRleHQgPSBjb250ZW50O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICRsb3R0b1Jlc3VsdFJld2FyZDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTHRMb3R0b1Jlc3VsdDtcbiIsImltcG9ydCBWYWxpZGF0aW9uIGZyb20gJy4uLy4uLy4uLy4uL1ZhbGlkYXRpb24nO1xuaW1wb3J0IEx0Rm9ybUNvbnRyb2wgZnJvbSAnLi4vTHRGb3JtQ29udHJvbCc7XG5pbXBvcnQgTHRUZXh0SW5wdXQgZnJvbSAnLi4vTHRUZXh0SW5wdXQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXguaHRtbCc7XG5cbmNsYXNzIEx0TW9uZXlJbnB1dCBleHRlbmRzIEx0Rm9ybUNvbnRyb2wge1xuICAvKiogQHR5cGUge0x0VGV4dElucHV0fSAqL1xuICAkaW5wdXQ7XG5cbiAgLyoqIEB0eXBlIHtudW1iZXIgfCBudWxsfSAqL1xuICAjbW9uZXkgPSBudWxsO1xuXG4gIGdldE1vbmV5KCkge1xuICAgIHJldHVybiB0aGlzLiNtb25leTtcbiAgfVxuXG4gIHNldE1vbmV5KHRleHQpIHtcbiAgICB0aGlzLiRpbnB1dC5zZXRUZXh0KHRleHQpO1xuICAgIHRoaXMuI3ZhbGlkYXRlKHRleHQpO1xuICB9XG5cbiAgI3ZhbGlkYXRlKHRleHQpIHtcbiAgICB0aGlzLiNtb25leSA9IG51bGw7XG4gICAgY29uc3QgbW9uZXkgPSBOdW1iZXIodGV4dCk7XG4gICAgdHJ5IHtcbiAgICAgIFZhbGlkYXRpb24udmFsaWRhdGVNb25leSh0ZXh0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zZXRWYWxpZGF0aW9uKGZhbHNlLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRWYWxpZGF0aW9uKHRydWUpO1xuICAgIHRoaXMuI21vbmV5ID0gbW9uZXk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJykpO1xuICB9XG5cbiAgc2V0VmFsaWRhdGlvbih2YWxpZCwgbWVzc2FnZSkge1xuICAgIHN1cGVyLnNldFZhbGlkYXRpb24odmFsaWQsIG1lc3NhZ2UpO1xuICAgIHRoaXMuJGlucHV0LnNldEVycm9yTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIGZvcm1SZXNldENhbGxiYWNrKCkge1xuICAgIHRoaXMuc2V0TW9uZXkobnVsbCk7XG4gICAgdGhpcy5zZXRWYWxpZGF0aW9uKGZhbHNlKTtcbiAgfVxuXG4gIGdldFJlbmRlckNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHN1cGVyLnJlbmRlcigpO1xuXG4gICAgdGhpcy4kaW5wdXQudGV4dCA9IHRoaXMuI21vbmV5O1xuICAgIHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy4jdmFsaWRhdGUoZXZlbnQudGFyZ2V0LmdldFRleHQoKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpICYmIHRoaXMuI21vbmV5ID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZhbGlkYXRpb24oZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMdE1vbmV5SW5wdXQ7XG4iLCJpbXBvcnQgTHRGb3JtQ29udHJvbCBmcm9tICcuLi9MdEZvcm1Db250cm9sJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4Lmh0bWwnO1xuXG5jbGFzcyBMdFRleHRJbnB1dCBleHRlbmRzIEx0Rm9ybUNvbnRyb2wge1xuICAvKiogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovXG4gICRpbnB1dDtcblxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgI3RleHQgPSAnJztcblxuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gWyd0eXBlJywgJ21pbicsICdtYXgnLCAnc3RlcCcsICdwbGFjZWhvbGRlciddO1xuICB9XG5cbiAgc2V0RXJyb3JNZXNzYWdlKG1lc3NhZ2UgPSBudWxsKSB7XG4gICAgdGhpcy5kYXRhc2V0LmVycm9yTWVzc2FnZSA9IG1lc3NhZ2UgfHwgJyc7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLiN0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgdGhpcy4kaW5wdXQudmFsdWUgPSB0ZXh0O1xuICAgIHRoaXMuI3ZhbGlkYXRlKHRleHQpO1xuICB9XG5cbiAgI3ZhbGlkYXRlKHRleHQpIHtcbiAgICB0aGlzLiN0ZXh0ID0gdGV4dCA/PyAnJztcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gIH1cblxuICBnZXRSZW5kZXJDb250ZW50KCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBzdXBlci5yZW5kZXIoKTtcblxuICAgIHRoaXMuJGlucHV0LnZhbHVlID0gdGhpcy4jdGV4dDtcbiAgICB0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuI3ZhbGlkYXRlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTHRUZXh0SW5wdXQ7XG4iLCJpbXBvcnQgTHRDb21wb25lbnQgZnJvbSAnLi4vTHRDb21wb25lbnQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXguaHRtbCc7XG5cbmNsYXNzIEx0VHlwb2dyYXBoeSBleHRlbmRzIEx0Q29tcG9uZW50IHtcbiAgc3RhdGljIFZBUklBTlRfVEFHUyA9IHtcbiAgICB0aXRsZTogJ2gxJyxcbiAgICBzdWJ0aXRsZTogJ2gyJyxcbiAgICBib2R5OiAncCcsXG4gICAgY2FwdGlvbjogJ2NhcHRpb24nLFxuICB9O1xuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbJ3ZhcmlhbnQnLCAnZGVjb3JhdGlvbiddO1xuICB9XG5cbiAgZ2V0UmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCB2YXJpYW50ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhcmlhbnQnKTtcbiAgICBjb25zdCB0YWcgPSBMdFR5cG9ncmFwaHkuVkFSSUFOVF9UQUdTW3ZhcmlhbnRdID8/ICdwJztcblxuICAgIHJldHVybiBgXG4gICAgICAke3RlbXBsYXRlfVxuXG4gICAgICA8JHt0YWd9IGNsYXNzPVwidHlwb2dyYXBoeVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8LyR7dGFnfT5cbiAgICBgO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEx0VHlwb2dyYXBoeTtcbiIsImltcG9ydCBXaW5uaW5nTG90dG8gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL1dpbm5pbmdMb3R0byc7XG5pbXBvcnQgTHRGb3JtQ29udHJvbCBmcm9tICcuLi9MdEZvcm1Db250cm9sJztcbmltcG9ydCBMdFRleHRJbnB1dCBmcm9tICcuLi9MdFRleHRJbnB1dCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC5odG1sJztcblxuY2xhc3MgTHRXaW5uaW5nTG90dG9JbnB1dCBleHRlbmRzIEx0Rm9ybUNvbnRyb2wge1xuICAvKiogQHR5cGUge0hUTUxGaWVsZFNldEVsZW1lbnR9ICovXG4gICR3aW5uaW5nTnVtYmVycztcblxuICAvKiogQHR5cGUge0hUTUxGaWVsZFNldEVsZW1lbnR9ICovXG4gICRib251c051bWJlcjtcblxuICAvKiogQHR5cGUge0x0VGV4dElucHV0W119ICovXG4gICR3aW5uaW5nTnVtYmVySW5wdXRzO1xuXG4gIC8qKiBAdHlwZSB7THRUZXh0SW5wdXR9ICovXG4gICRib251c051bWJlcklucHV0O1xuXG4gIC8qKiBAdHlwZSB7V2lubmluZ0xvdHRvIHwgbnVsbH0gKi9cbiAgI3dpbm5pbmdMb3R0byA9IG51bGw7XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsncGxhY2Vob2xkZXInXTtcbiAgfVxuXG4gIGdldFdpbm5pbmdMb3R0bygpIHtcbiAgICByZXR1cm4gdGhpcy4jd2lubmluZ0xvdHRvO1xuICB9XG5cbiAgc2V0V2lubmluZ0xvdHRvKHdpbm5pbmdMb3R0bykge1xuICAgIGlmICghKHdpbm5pbmdMb3R0byBpbnN0YW5jZW9mIFdpbm5pbmdMb3R0bykpIHtcbiAgICAgIHRoaXMuI3dpbm5pbmdMb3R0byA9IG51bGw7XG4gICAgICB0aGlzLiR3aW5uaW5nTnVtYmVySW5wdXRzLmZvckVhY2goKCRpbnB1dCkgPT4ge1xuICAgICAgICAkaW5wdXQuc2V0VGV4dChudWxsKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kYm9udXNOdW1iZXJJbnB1dC5zZXRUZXh0KG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiN3aW5uaW5nTG90dG8gPSB3aW5uaW5nTG90dG87XG5cbiAgICB3aW5uaW5nTG90dG8uZ2V0TG90dG9OdW1iZXJzKCkuZm9yRWFjaCgobG90dG9OdW1iZXIsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLiR3aW5uaW5nTnVtYmVySW5wdXRzW2luZGV4XS5zZXRUZXh0KGxvdHRvTnVtYmVyKTtcbiAgICB9KTtcbiAgICB0aGlzLiRib251c051bWJlcklucHV0LnNldFRleHQod2lubmluZ0xvdHRvLmdldEJvbnVzTnVtYmVyKCkpO1xuICB9XG5cbiAgI3ZhbGlkYXRlKCkge1xuICAgIGNvbnN0IGxvdHRvTnVtYmVycyA9IHRoaXMuJHdpbm5pbmdOdW1iZXJJbnB1dHMubWFwKCgkaW5wdXQpID0+IE51bWJlcigkaW5wdXQuZ2V0VGV4dCgpKSk7XG4gICAgY29uc3QgYm9udXNOdW1iZXIgPSBOdW1iZXIodGhpcy4kYm9udXNOdW1iZXJJbnB1dC5nZXRUZXh0KCkpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuI3dpbm5pbmdMb3R0byA9IG5ldyBXaW5uaW5nTG90dG8obG90dG9OdW1iZXJzLCBib251c051bWJlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0VmFsaWRhdGlvbihmYWxzZSwgZXJyb3IubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsaWRhdGlvbih0cnVlKTtcbiAgfVxuXG4gIHNldFZhbGlkYXRpb24odmFsaWQsIG1lc3NhZ2UgPSBudWxsKSB7XG4gICAgc3VwZXIuc2V0VmFsaWRhdGlvbih2YWxpZCwgbWVzc2FnZSk7XG4gICAgLyoqIEB0eXBlIHtMdFRleHRJbnB1dH0gKi9cbiAgICBjb25zdCAkZmlyc3RJbnB1dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdsdC10ZXh0LWlucHV0Jyk7XG4gICAgJGZpcnN0SW5wdXQuc2V0RXJyb3JNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG5cbiAgZm9ybVJlc2V0Q2FsbGJhY2soKSB7XG4gICAgdGhpcy5zZXRXaW5uaW5nTG90dG8obnVsbCk7XG4gICAgdGhpcy5zZXRWYWxpZGF0aW9uKGZhbHNlKTtcbiAgfVxuXG4gIGdldFJlbmRlckNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHN1cGVyLnJlbmRlcigpO1xuXG4gICAgdGhpcy4kd2lubmluZ051bWJlcklucHV0cyA9IFsuLi50aGlzLiR3aW5uaW5nTnVtYmVycy5xdWVyeVNlbGVjdG9yQWxsKCdsdC10ZXh0LWlucHV0JyldO1xuICAgIHRoaXMuJGJvbnVzTnVtYmVySW5wdXQgPSB0aGlzLiRib251c051bWJlci5xdWVyeVNlbGVjdG9yKCdsdC10ZXh0LWlucHV0Jyk7XG5cbiAgICBbLi4udGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ2x0LXRleHQtaW5wdXQnKV0uZm9yRWFjaCgoJGlucHV0KSA9PiB7XG4gICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuI3ZhbGlkYXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ3JlcXVpcmVkJykgJiYgdGhpcy4jd2lubmluZ0xvdHRvID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZhbGlkYXRpb24oZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMdFdpbm5pbmdMb3R0b0lucHV0O1xuIiwiaW1wb3J0IEx0TG90dG9MaXN0IGZyb20gJy4vTHRMb3R0b0xpc3QnO1xuaW1wb3J0IEx0TG90dG9SZXN1bHQgZnJvbSAnLi9MdExvdHRvUmVzdWx0JztcbmltcG9ydCBMdE1vbmV5SW5wdXQgZnJvbSAnLi9MdE1vbmV5SW5wdXQnO1xuaW1wb3J0IEx0VGV4dElucHV0IGZyb20gJy4vTHRUZXh0SW5wdXQnO1xuaW1wb3J0IEx0VHlwb2dyYXBoeSBmcm9tICcuL0x0VHlwb2dyYXBoeSc7XG5pbXBvcnQgTHRXaW5uaW5nTG90dG9JbnB1dCBmcm9tICcuL0x0V2lubmluZ0xvdHRvSW5wdXQnO1xuXG5mdW5jdGlvbiB0b0tlYmFiQ2FzZSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8vIE5PVEU6IOydmOyhtOyEseydmCDsiJzshJzsl5Ag66ee7LawIOygleugrO2VoCDqsoMgKOydmOyhtOyEseydtCDsl4bripQg6rKD67aA7YSwIOqwgOyepSDsnITsl5ApXG5jb25zdCBjb21wb25lbnRzID0gW1xuICBMdFRleHRJbnB1dCxcbiAgTHRMb3R0b0xpc3QsXG4gIEx0TG90dG9SZXN1bHQsXG4gIEx0VHlwb2dyYXBoeSxcbiAgTHRNb25leUlucHV0LFxuICBMdFdpbm5pbmdMb3R0b0lucHV0LFxuXTtcblxuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRvS2ViYWJDYXNlKGNvbXBvbmVudC5uYW1lKSwgY29tcG9uZW50KTtcbn0pO1xuXG5leHBvcnQgeyBMdExvdHRvTGlzdCwgTHRMb3R0b1Jlc3VsdCwgTHRNb25leUlucHV0LCBMdFRleHRJbnB1dCwgTHRUeXBvZ3JhcGh5LCBMdFdpbm5pbmdMb3R0b0lucHV0IH07XG4iLCJpbXBvcnQgJ0Bmb250c291cmNlL3JvYm90byc7XG5pbXBvcnQgJy4vY29tcG9uZW50JztcbmltcG9ydCAnLi9jc3MvZGlhbG9nLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2Zvcm0uY3NzJztcbmltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZpbGVzL3JvYm90by1jeXJpbGxpYy1leHQtNDAwLW5vcm1hbC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZmlsZXMvcm9ib3RvLWFsbC00MDAtbm9ybWFsLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZpbGVzL3JvYm90by1jeXJpbGxpYy00MDAtbm9ybWFsLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9maWxlcy9yb2JvdG8tZ3JlZWstZXh0LTQwMC1ub3JtYWwud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ZpbGVzL3JvYm90by1ncmVlay00MDAtbm9ybWFsLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9maWxlcy9yb2JvdG8tdmlldG5hbWVzZS00MDAtbm9ybWFsLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9maWxlcy9yb2JvdG8tbGF0aW4tZXh0LTQwMC1ub3JtYWwud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuL2ZpbGVzL3JvYm90by1sYXRpbi00MDAtbm9ybWFsLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHJvYm90by1jeXJpbGxpYy1leHQtNDAwLW5vcm1hbCovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLFUrMUM4MC0xQzg4LFUrMjBCNCxVKzJERTAtMkRGRixVK0E2NDAtQTY5RixVK0ZFMkUtRkUyRjtcXG59XFxuLyogcm9ib3RvLWN5cmlsbGljLTQwMC1ub3JtYWwqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICB1bmljb2RlLXJhbmdlOiBVKzAzMDEsVSswNDAwLTA0NUYsVSswNDkwLTA0OTEsVSswNEIwLTA0QjEsVSsyMTE2O1xcbn1cXG4vKiByb2JvdG8tZ3JlZWstZXh0LTQwMC1ub3JtYWwqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICB1bmljb2RlLXJhbmdlOiBVKzFGMDAtMUZGRjtcXG59XFxuLyogcm9ib3RvLWdyZWVrLTQwMC1ub3JtYWwqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjtcXG59XFxuLyogcm9ib3RvLXZpZXRuYW1lc2UtNDAwLW5vcm1hbCovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLFUrMDExMC0wMTExLFUrMDEyOC0wMTI5LFUrMDE2OC0wMTY5LFUrMDFBMC0wMUExLFUrMDFBRi0wMUIwLFUrMUVBMC0xRUY5LFUrMjBBQjtcXG59XFxuLyogcm9ib3RvLWxhdGluLWV4dC00MDAtbm9ybWFsKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsVSswMjU5LFUrMUUwMC0xRUZGLFUrMjAyMCxVKzIwQTAtMjBBQixVKzIwQUQtMjBDRixVKzIxMTMsVSsyQzYwLTJDN0YsVStBNzIwLUE3RkY7XFxufVxcbi8qIHJvYm90by1sYXRpbi00MDAtbm9ybWFsKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsVSswMTMxLFUrMDE1Mi0wMTUzLFUrMDJCQi0wMkJDLFUrMDJDNixVKzAyREEsVSswMkRDLFUrMjAwMC0yMDZGLFUrMjA3NCxVKzIwQUMsVSsyMTIyLFUrMjE5MSxVKzIxOTMsVSsyMjEyLFUrMjIxNSxVK0ZFRkYsVStGRkZEO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGZvbnRzb3VyY2Uvcm9ib3RvL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQ0FBa0M7QUFDbEM7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0hBQWtJO0VBQ2xJLGlGQUFpRjtBQUNuRjtBQUNBLDhCQUE4QjtBQUM5QjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvSEFBOEg7RUFDOUgsZ0VBQWdFO0FBQ2xFO0FBQ0EsK0JBQStCO0FBQy9CO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9IQUErSDtFQUMvSCwwQkFBMEI7QUFDNUI7QUFDQSwyQkFBMkI7QUFDM0I7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0hBQTJIO0VBQzNILDBCQUEwQjtBQUM1QjtBQUNBLGdDQUFnQztBQUNoQztFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvSEFBZ0k7RUFDaEkseUdBQXlHO0FBQzNHO0FBQ0EsK0JBQStCO0FBQy9CO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9IQUErSDtFQUMvSCwyR0FBMkc7QUFDN0c7QUFDQSwyQkFBMkI7QUFDM0I7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0hBQTJIO0VBQzNILHlKQUF5SjtBQUMzSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiByb2JvdG8tY3lyaWxsaWMtZXh0LTQwMC1ub3JtYWwqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKCcuL2ZpbGVzL3JvYm90by1jeXJpbGxpYy1leHQtNDAwLW5vcm1hbC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcuL2ZpbGVzL3JvYm90by1hbGwtNDAwLW5vcm1hbC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRixVKzFDODAtMUM4OCxVKzIwQjQsVSsyREUwLTJERkYsVStBNjQwLUE2OUYsVStGRTJFLUZFMkY7XFxufVxcbi8qIHJvYm90by1jeXJpbGxpYy00MDAtbm9ybWFsKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi9maWxlcy9yb2JvdG8tY3lyaWxsaWMtNDAwLW5vcm1hbC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcuL2ZpbGVzL3JvYm90by1hbGwtNDAwLW5vcm1hbC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICB1bmljb2RlLXJhbmdlOiBVKzAzMDEsVSswNDAwLTA0NUYsVSswNDkwLTA0OTEsVSswNEIwLTA0QjEsVSsyMTE2O1xcbn1cXG4vKiByb2JvdG8tZ3JlZWstZXh0LTQwMC1ub3JtYWwqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKCcuL2ZpbGVzL3JvYm90by1ncmVlay1leHQtNDAwLW5vcm1hbC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcuL2ZpbGVzL3JvYm90by1hbGwtNDAwLW5vcm1hbC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICB1bmljb2RlLXJhbmdlOiBVKzFGMDAtMUZGRjtcXG59XFxuLyogcm9ib3RvLWdyZWVrLTQwMC1ub3JtYWwqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKCcuL2ZpbGVzL3JvYm90by1ncmVlay00MDAtbm9ybWFsLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy4vZmlsZXMvcm9ib3RvLWFsbC00MDAtbm9ybWFsLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xcbn1cXG4vKiByb2JvdG8tdmlldG5hbWVzZS00MDAtbm9ybWFsKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi9maWxlcy9yb2JvdG8tdmlldG5hbWVzZS00MDAtbm9ybWFsLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy4vZmlsZXMvcm9ib3RvLWFsbC00MDAtbm9ybWFsLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLFUrMDExMC0wMTExLFUrMDEyOC0wMTI5LFUrMDE2OC0wMTY5LFUrMDFBMC0wMUExLFUrMDFBRi0wMUIwLFUrMUVBMC0xRUY5LFUrMjBBQjtcXG59XFxuLyogcm9ib3RvLWxhdGluLWV4dC00MDAtbm9ybWFsKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi9maWxlcy9yb2JvdG8tbGF0aW4tZXh0LTQwMC1ub3JtYWwud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnLi9maWxlcy9yb2JvdG8tYWxsLTQwMC1ub3JtYWwud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyNEYsVSswMjU5LFUrMUUwMC0xRUZGLFUrMjAyMCxVKzIwQTAtMjBBQixVKzIwQUQtMjBDRixVKzIxMTMsVSsyQzYwLTJDN0YsVStBNzIwLUE3RkY7XFxufVxcbi8qIHJvYm90by1sYXRpbi00MDAtbm9ybWFsKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCgnLi9maWxlcy9yb2JvdG8tbGF0aW4tNDAwLW5vcm1hbC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcuL2ZpbGVzL3JvYm90by1hbGwtNDAwLW5vcm1hbC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRixVKzAxMzEsVSswMTUyLTAxNTMsVSswMkJCLTAyQkMsVSswMkM2LFUrMDJEQSxVKzAyREMsVSsyMDAwLTIwNkYsVSsyMDc0LFUrMjBBQyxVKzIxMjIsVSsyMTkxLFUrMjE5MyxVKzIyMTIsVSsyMjE1LFUrRkVGRixVK0ZGRkQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpYWxvZyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmRpYWxvZyA+IGZvcm0ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXcvd2ViL2Nzcy9kaWFsb2cuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGlhbG9nIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuZGlhbG9nID4gZm9ybSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJmb3JtI2xvdHRvLWZvcm0ge1xcbiAgd2lkdGg6IDQyMHB4O1xcbn1cXG5cXG5mb3JtI2xvdHRvLXJlc3VsdC1mb3JtIHtcXG4gIHdpZHRoOiAzNTBweDtcXG59XFxuXFxuZm9ybSA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuZm9ybSA+IGx0LXR5cG9ncmFwaHkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb3JtID4gZmllbGRzZXQge1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDAgMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9ybSA+IGZpZWxkc2V0ID4gbGVnZW5kIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5mb3JtID4gZmllbGRzZXQgPiBsdC1tb25leS1pbnB1dCxcXG5mb3JtID4gZmllbGRzZXQgPiBsdC13aW5uaW5nLWxvdHRvLWlucHV0IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmZvcm0gPiBmaWVsZHNldCA+IGx0LWxvdHRvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5mb3JtOmludmFsaWQgPiBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5bZGF0YS1mb2N1c10gfiAqIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3L3dlYi9jc3MvZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZm9ybSNsb3R0by1mb3JtIHtcXG4gIHdpZHRoOiA0MjBweDtcXG59XFxuXFxuZm9ybSNsb3R0by1yZXN1bHQtZm9ybSB7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcblxcbmZvcm0gPiAqOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbmZvcm0gPiBsdC10eXBvZ3JhcGh5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9ybSA+IGZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAwIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmZvcm0gPiBmaWVsZHNldCA+IGxlZ2VuZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuZm9ybSA+IGZpZWxkc2V0ID4gbHQtbW9uZXktaW5wdXQsXFxuZm9ybSA+IGZpZWxkc2V0ID4gbHQtd2lubmluZy1sb3R0by1pbnB1dCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG5mb3JtID4gZmllbGRzZXQgPiBsdC1sb3R0byB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9ybTppbnZhbGlkID4gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuW2RhdGEtZm9jdXNdIH4gKiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLW1haW4tY29sb3I6ICM0RTVCQTY7XFxuICAtLW1haW4tdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG4gIC0tbWFpbi1zZWNvbmRhcnktdGV4dC1jb2xvcjogIzhCOEI4QjtcXG5cXG4gIC0tdHlwb2dyYXBoeS10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcXG4gIC0tdHlwb2dyYXBoeS10aXRsZS1mb250LXdlaWdodDogODAwO1xcbiAgLS10eXBvZ3JhcGh5LXN1YnRpdGxlLWZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIC0tdHlwb2dyYXBoeS1zdWJ0aXRsZS1mb250LXdlaWdodDogNjAwO1xcbiAgLS10eXBvZ3JhcGh5LWJvZHktZm9udC1zaXplOiAwLjkzNzVyZW07XFxuICAtLXR5cG9ncmFwaHktYm9keS1mb250LXdlaWdodDogNDAwO1xcbiAgLS10eXBvZ3JhcGh5LWNhcHRpb24tZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIC0tdHlwb2dyYXBoeS1jYXB0aW9uLWZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAtLWNvbnRhaW5lci1tYXgtd2lkdGg6IDk2MHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYm9keSA+IG1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmJvZHkgPiAqOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDAuODc1cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciA+IG5hdiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLW1heC13aWR0aCk7XFxufVxcblxcbmhlYWRlciA+IG5hdiA+IGEuaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuaGVhZGVyID4gbmF2ID4gYS5ob21lOjpiZWZvcmUge1xcbiAgY29udGVudDogJ/CfjrEnO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDc4MTI1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNzgsIDkxLCAxNjYsIDAuMik7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS10aXRsZS1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXR5cG9ncmFwaHktdGl0bGUtZm9udC13ZWlnaHQpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktc3VidGl0bGUtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10eXBvZ3JhcGh5LXN1YnRpdGxlLWZvbnQtd2VpZ2h0KTtcXG59XFxuXFxuYm9keSwgcCB7XFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktYm9keS1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXR5cG9ncmFwaHktYm9keS1mb250LXdlaWdodCk7XFxufVxcblxcbmNhcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWNhcHRpb24tZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10eXBvZ3JhcGh5LWNhcHRpb24tZm9udC13ZWlnaHQpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZnJhbWUge1xcbiAgcGFkZGluZzogMzJweCAxNnB4O1xcbiAgbWFyZ2luOiAzMnB4IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlldy93ZWIvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixzQ0FBc0M7RUFDdEMsb0NBQW9DOztFQUVwQyxvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DLHdDQUF3QztFQUN4QyxzQ0FBc0M7RUFDdEMsc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQyx3Q0FBd0M7RUFDeEMscUNBQXFDOztFQUVyQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQywrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLW1haW4tY29sb3I6ICM0RTVCQTY7XFxuICAtLW1haW4tdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG4gIC0tbWFpbi1zZWNvbmRhcnktdGV4dC1jb2xvcjogIzhCOEI4QjtcXG5cXG4gIC0tdHlwb2dyYXBoeS10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcXG4gIC0tdHlwb2dyYXBoeS10aXRsZS1mb250LXdlaWdodDogODAwO1xcbiAgLS10eXBvZ3JhcGh5LXN1YnRpdGxlLWZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIC0tdHlwb2dyYXBoeS1zdWJ0aXRsZS1mb250LXdlaWdodDogNjAwO1xcbiAgLS10eXBvZ3JhcGh5LWJvZHktZm9udC1zaXplOiAwLjkzNzVyZW07XFxuICAtLXR5cG9ncmFwaHktYm9keS1mb250LXdlaWdodDogNDAwO1xcbiAgLS10eXBvZ3JhcGh5LWNhcHRpb24tZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIC0tdHlwb2dyYXBoeS1jYXB0aW9uLWZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICAtLWNvbnRhaW5lci1tYXgtd2lkdGg6IDk2MHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYm9keSA+IG1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmJvZHkgPiAqOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDAuODc1cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciA+IG5hdiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLW1heC13aWR0aCk7XFxufVxcblxcbmhlYWRlciA+IG5hdiA+IGEuaG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuaGVhZGVyID4gbmF2ID4gYS5ob21lOjpiZWZvcmUge1xcbiAgY29udGVudDogJ/CfjrEnO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDc4MTI1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNzgsIDkxLCAxNjYsIDAuMik7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdHlwb2dyYXBoeS10aXRsZS1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXR5cG9ncmFwaHktdGl0bGUtZm9udC13ZWlnaHQpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktc3VidGl0bGUtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10eXBvZ3JhcGh5LXN1YnRpdGxlLWZvbnQtd2VpZ2h0KTtcXG59XFxuXFxuYm9keSwgcCB7XFxuICBmb250LXNpemU6IHZhcigtLXR5cG9ncmFwaHktYm9keS1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXR5cG9ncmFwaHktYm9keS1mb250LXdlaWdodCk7XFxufVxcblxcbmNhcHRpb24ge1xcbiAgZm9udC1zaXplOiB2YXIoLS10eXBvZ3JhcGh5LWNhcHRpb24tZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS10eXBvZ3JhcGh5LWNhcHRpb24tZm9udC13ZWlnaHQpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZnJhbWUge1xcbiAgcGFkZGluZzogMzJweCAxNnB4O1xcbiAgbWFyZ2luOiAzMnB4IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2ljb24vbG90dG8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPHN0eWxlPjpob3N0e2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX1zZWN0aW9ue2ZvbnQtc2l6ZTp2YXIoLS10eXBvZ3JhcGh5LWNhcHRpb24tZm9udC1zaXplKTtjb2xvcjp2YXIoLS1tYWluLXNlY29uZGFyeS10ZXh0LWNvbG9yKTt3aWR0aDoxMDAlO2hlaWdodDoxMDBweDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9cHtmb250LXNpemU6dmFyKC0tdHlwb2dyYXBoeS1ib2R5LWZvbnQtc2l6ZSk7Zm9udC13ZWlnaHQ6dmFyKC0tdHlwb2dyYXBoeS1ib2R5LWZvbnQtd2VpZ2h0KX11bHttYXJnaW46MDtwYWRkaW5nLWxlZnQ6MDtsaXN0LXN0eWxlOm5vbmV9dWw6OmJlZm9yZXtjb250ZW50OmF0dHIoZGF0YS1jb3VudCkgJ+yepeydhCDqtazrp6TtlZjshajsirXri4jri6QuJztkaXNwbGF5OmJsb2NrO21hcmdpbi1ib3R0b206LjVyZW19bGl7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6LjVyZW19bGk+aW1ne3dpZHRoOjJyZW07aGVpZ2h0OjJyZW19I2xvdHRvTGlzdDplbXB0eXtkaXNwbGF5Om5vbmV9I2xvdHRvTGlzdDpub3QoOmVtcHR5KX5zZWN0aW9ue2Rpc3BsYXk6bm9uZX08L3N0eWxlPiA8dWwgaWQ9XFxcImxvdHRvTGlzdFxcXCI+PC91bD4gPHNlY3Rpb24+e3BsYWNlaG9sZGVyfTwvc2VjdGlvbj4gPHRlbXBsYXRlIGlkPVxcXCJsb3R0b1RlbXBsYXRlXFxcIj4gPGxpPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPiA8bHQtdHlwb2dyYXBoeSB2YXJpYW50PVxcXCJib2R5XFxcIiBjbGFzcz1cXFwibnVtYmVyc1xcXCI+PC9sdC10eXBvZ3JhcGh5PiA8L2xpPiA8L3RlbXBsYXRlPiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHN0eWxlPnRhYmxle2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTt3aWR0aDoxMDAlfXRkLHRoe3BhZGRpbmc6LjVyZW07Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTp2YXIoLS10eXBvZ3JhcGh5LWJvZHktZm9udC1zaXplKTtmb250LXdlaWdodDp2YXIoLS10eXBvZ3JhcGh5LWJvZHktZm9udC13ZWlnaHQpfXRoe2ZvbnQtd2VpZ2h0OjYwMH08L3N0eWxlPiA8dGFibGU+IDx0aGVhZD4gPHRyPiA8dGg+7J287LmYIOqwr+yImDwvdGg+IDx0aD7ri7nssqjquIg8L3RoPiA8dGg+64u57LKoIOqwr+yImDwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keSBpZD1cXFwibG90dG9SZXN1bHRSZXdhcmRzXFxcIj4gPC90Ym9keT4gPC90YWJsZT4gPHRlbXBsYXRlIGlkPVxcXCJsb3R0b1Jlc3VsdFJld2FyZFRlbXBsYXRlXFxcIj4gPHRyPiA8dGQgY2xhc3M9XFxcIm1hdGNoLWNvdW50XFxcIj48L3RkPiA8dGQgY2xhc3M9XFxcInJld2FyZC1tb25leVxcXCI+PC90ZD4gPHRkIGNsYXNzPVxcXCJjb3VudFxcXCI+PC90ZD4gPC90cj4gPC90ZW1wbGF0ZT4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxsdC10ZXh0LWlucHV0IGlkPVxcXCJpbnB1dFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjEwMDBcXFwiIHN0ZXA9XFxcIjEwMDBcXFwiIHBsYWNlaG9sZGVyPVxcXCLquIjslaFcXFwiPjwvbHQtdGV4dC1pbnB1dD4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxzdHlsZT5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24saW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfWlucHV0W3R5cGU9bnVtYmVyXXstbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO2FwcGVhcmFuY2U6dGV4dGZpZWxkfWlucHV0e2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2JvcmRlcjoxcHggc29saWQgdmFyKC0tbWFpbi1zZWNvbmRhcnktdGV4dC1jb2xvcik7Ym9yZGVyLXJhZGl1czo0cHg7cGFkZGluZzoxMHB4O2ZvbnQtc2l6ZTouOTM3NXJlbTtmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjppbmhlcml0fWlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjojOGI4YjhifXB7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOjA7bWFyZ2luLWxlZnQ6LjJyZW07Zm9udC1zaXplOnZhcigtLXR5cG9ncmFwaHktY2FwdGlvbi1mb250LXNpemUpO2NvbG9yOnJlZH06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZX06aG9zdDphZnRlcntjb250ZW50OmF0dHIoZGF0YS1lcnJvci1tZXNzYWdlKTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjRweDtmb250LXNpemU6dmFyKC0tdHlwb2dyYXBoeS1jYXB0aW9uLWZvbnQtc2l6ZSk7Y29sb3I6cmVkO3doaXRlLXNwYWNlOm5vd3JhcH08L3N0eWxlPiA8ZGl2PiA8aW5wdXQgaWQ9XFxcImlucHV0XFxcIiB0eXBlPVxcXCJ7dHlwZX1cXFwiIG1pbj1cXFwie21pbn1cXFwiIG1heD1cXFwie21heH1cXFwiIHN0ZXA9XFxcIntzdGVwfVxcXCIgcGxhY2Vob2xkZXI9XFxcIntwbGFjZWhvbGRlcn1cXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj4gPC9kaXY+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8c3R5bGU+aDF7Zm9udC1zaXplOjEuNXJlbTtmb250LXdlaWdodDo4MDB9aDJ7Zm9udC1zaXplOjEuMjVyZW07Zm9udC13ZWlnaHQ6NjAwfXB7Zm9udC1zaXplOi45Mzc1cmVtO2ZvbnQtd2VpZ2h0OjQwMH1jYXB0aW9ue2ZvbnQtc2l6ZTouODc1cmVtO2ZvbnQtd2VpZ2h0OjcwMH0udHlwb2dyYXBoeXttYXJnaW46MH06aG9zdC1jb250ZXh0KFtkZWNvcmF0aW9uXSkgLnR5cG9ncmFwaHk6OmJlZm9yZXtjb250ZW50Oid7ZGVjb3JhdGlvbn0nO21hcmdpbi1yaWdodDouNXJlbX06aG9zdC1jb250ZXh0KFtkZWNvcmF0aW9uXSkgLnR5cG9ncmFwaHk6OmFmdGVye2NvbnRlbnQ6J3tkZWNvcmF0aW9ufSc7bWFyZ2luLWxlZnQ6LjVyZW19PC9zdHlsZT4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxzdHlsZT5pbnB1dHtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTAwJTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLW1haW4tc2Vjb25kYXJ5LXRleHQtY29sb3IpO2JvcmRlci1yYWRpdXM6NHB4O3BhZGRpbmc6MTBweDtmb250LXNpemU6LjkzNzVyZW07Zm9udC13ZWlnaHQ6NDAwfWlucHV0OjpwbGFjZWhvbGRlcntjb2xvcjojOGI4YjhifWRpdnt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1sdC10ZXh0LWlucHV0e3dpZHRoOjIuNHJlbTt0ZXh0LWFsaWduOmNlbnRlcn1maWVsZHNldHttYXJnaW46MDtwYWRkaW5nOjA7Ym9yZGVyOm5vbmU7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2dhcDouNXJlbX1maWVsZHNldD5sZWdlbmR7bWFyZ2luLWJvdHRvbTouNXJlbTtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTAwJX1maWVsZHNldCNib251c051bWJlcntqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9PC9zdHlsZT4gPGRpdj4gPGZpZWxkc2V0IGlkPVxcXCJ3aW5uaW5nTnVtYmVyc1xcXCI+IDxsZWdlbmQ+64u57LKoIOuyiO2YuDwvbGVnZW5kPiA8bHQtdGV4dC1pbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI0NVxcXCI+PC9sdC10ZXh0LWlucHV0PiA8bHQtdGV4dC1pbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI0NVxcXCI+PC9sdC10ZXh0LWlucHV0PiA8bHQtdGV4dC1pbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI0NVxcXCI+PC9sdC10ZXh0LWlucHV0PiA8bHQtdGV4dC1pbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI0NVxcXCI+PC9sdC10ZXh0LWlucHV0PiA8bHQtdGV4dC1pbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI0NVxcXCI+PC9sdC10ZXh0LWlucHV0PiA8bHQtdGV4dC1pbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI0NVxcXCI+PC9sdC10ZXh0LWlucHV0PiA8L2ZpZWxkc2V0PiA8ZmllbGRzZXQgaWQ9XFxcImJvbnVzTnVtYmVyXFxcIj4gPGxlZ2VuZD7rs7TrhIjsiqQg67KI7Zi4PC9sZWdlbmQ+IDxsdC10ZXh0LWlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIxXFxcIiBtYXg9XFxcIjQ1XFxcIj48L2x0LXRleHQtaW5wdXQ+IDwvZmllbGRzZXQ+IDwvZGl2PiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IExvdHRvQ29udHJvbGxlciBmcm9tICcuL0xvdHRvQ29udHJvbGxlcic7XG5pbXBvcnQgSW5wdXRWaWV3IGZyb20gJy4vdmlldy93ZWIvSW5wdXRWaWV3JztcbmltcG9ydCBPdXRwdXRWaWV3IGZyb20gJy4vdmlldy93ZWIvT3V0cHV0Vmlldyc7XG5cbmltcG9ydCAnLi92aWV3L3dlYic7XG5cbmNvbnN0IGxvdHRvQ29udHJvbGxlciA9IG5ldyBMb3R0b0NvbnRyb2xsZXIoe1xuICBpbnB1dFZpZXc6IElucHV0VmlldyxcbiAgb3V0cHV0VmlldzogT3V0cHV0Vmlldyxcbn0pO1xuXG4vLyBET03sl5DshJwgTG90dG9Db250cm9sbGVy7JeQIOygkeq3vO2VoCDsiJgg7J6I64+E66GdIOyEpOyglVxuZ2xvYmFsVGhpcy5sb3R0b0NvbnRyb2xsZXIgPSBsb3R0b0NvbnRyb2xsZXI7XG4iXSwibmFtZXMiOlsiUmVzdGFydENvbW1hbmQiLCJMb3R0b1Jlc3VsdCIsIkJ1eWVyIiwiU2VsbGVyIiwiTG90dG9FcnJvciIsIkxvdHRvQ29udHJvbGxlciIsImlucHV0VmlldyIsIm91dHB1dFZpZXciLCJyZWFkTW9uZXkiLCJtb25leSIsImJ1eUxvdHRvcyIsInByaW50TG90dG9zIiwiZ2V0TG90dG9zIiwicmVhZFdpbm5pbmdMb3R0byIsIndpbm5pbmdMb3R0byIsImxvdHRvUmVzdWx0IiwicmVjZWl2ZVJld2FyZHMiLCJwcm9maXRSYXRlIiwiZ2V0UHJvZml0UmF0ZSIsInByaW50TG90dG9SZXN1bHQiLCJnZXRSZXdhcmRzIiwicHJpbnRQcm9maXRSYXRlIiwicmVhZFJlc3RhcnRDb21tYW5kIiwicmVzdGFydENvbW1hbmQiLCJZRVMiLCJwcmludEV4aXQiLCJmaW5pc2giLCJNZXNzYWdlcyIsIkxvdHRvIiwiVmFsaWRhdGlvbiIsIlJFR0VYX05VTUVSSUMiLCJpc051bWVyaWMiLCJ0ZXh0IiwidGVzdCIsInZhbGlkYXRlTW9uZXkiLCJFUlJPUl9NT05FWV9TSE9VTERfUE9TSVRJVkVfSU5URUdFUiIsIlBSSUNFIiwiRVJST1JfTU9ORVlfQU1PVU5UX1NIT1VMRF9NVUxUSVBMRV9PRiIsInZhbGlkYXRlTG90dG9OdW1iZXIiLCJsb3R0b051bWJlciIsIkVSUk9SX0xPVFRPX05VTUJFUl9TSE9VTERfTlVNRVJJQyIsIk5VTUJFUl9MT1dFUl9CT1VORCIsIk5VTUJFUl9VUFBFUl9CT1VORCIsIkVSUk9SX0xPVFRPX05VTUJFUl9TSE9VTERfQkVUV0VFTiIsInZhbGlkYXRlTG90dG9OdW1iZXJzIiwibG90dG9OdW1iZXJzIiwidmFsaWRhdGVJc0FycmF5IiwidmFsaWRhdGVBcnJheUxlbmd0aCIsInZhbGlkYXRlVW5pcXVlTnVtYmVycyIsImZvckVhY2giLCJBcnJheSIsImlzQXJyYXkiLCJFUlJPUl9MT1RUT19OVU1CRVJTX1NIT1VMRF9BUlJBWSIsImxlbmd0aCIsIkxFTkdUSCIsIkVSUk9SX0xPVFRPX05VTUJFUlNfU0hPVUxEX0xFTkdUSF9PRiIsImxvdHRvU2V0IiwiU2V0Iiwic2l6ZSIsIkVSUk9SX0xPVFRPX05VTUJFUlNfU0hPVUxEX1VOSVFVRSIsInZhbGlkYXRlQm9udXNOdW1iZXJVbmlxdWUiLCJib251c051bWJlciIsImluY2x1ZGVzIiwiRVJST1JfQk9OVVNfTlVNQkVSX1NIT1VMRF9VTklRVUUiLCJ2YWxpZGF0ZVJlc3RhcnRDb21tYW5kIiwiY29tbWFuZCIsIk9iamVjdCIsInZhbHVlcyIsIkVSUk9SX1JFU1RBUlRfQ09NTUFORF9TSE9VTERfQkUiLCJCT05VU19OVU1CRVJfUkVXQVJEX05BTUUiLCJSRVdBUkRfTkFNRSIsIklOUFVUX01PTkVZIiwiSU5QVVRfV0lOTklOR19OVU1CRVJTIiwiSU5QVVRfQk9OVVNfTlVJTUJFUiIsIklOUFVUX1JFU1RBUlRfQ09NTUFORCIsIlBSSU5UX0JPVUdIVF9MT1RUT1NfQ09VTlQiLCJQUklOVF9CT1VHSFRfTE9UVE8iLCJQUklOVF9MT1RUT19SRVNVTFRfVElUTEUiLCJQUklOVF9MT1RUT19SRVNVTFRfU1VCVElUTEUiLCJQUklOVF9MT1RUT19SRVNVTFRfUkVXQVJEIiwiUFJJTlRfUFJPRklUX1JBVEUiLCJQUklOVF9FWElUIiwiZm9ybWF0IiwibWVzc2FnZSIsImFyZ3MiLCJyZWR1Y2UiLCJmb3JtYXR0ZWRNZXNzYWdlIiwiYXJnIiwiaW5kZXgiLCJyZXBsYWNlQWxsIiwiTk8iLCJCb251c051bWJlclJld2FyZCIsIlJld2FyZCIsIldpbm5pbmdMb3R0byIsInJld2FyZHMiLCJERUZBVUxUX1JFV0FSRFMiLCJsb3R0byIsImZvdW5kUmV3YXJkIiwiZmluZCIsInJld2FyZCIsImlzUXVhbGlmaWVkIiwiZ2V0TG90dG9OdW1iZXJzIiwiY291bnRGbiIsImNvdW50Iiwic29ydCIsImEiLCJiIiwic2h1ZmZsZSIsIkxvdHRvRmFjdG9yeSIsImFsbExvdHRvTnVtYmVycyIsImZyb20iLCJfIiwiaSIsInNsaWNlIiwiaGFzQm9udXNOdW1iZXIiLCJnZXRNYXRjaENvdW50IiwibWF0Y2hDb3VudCIsInNlbGxlciIsInNlbGxMb3R0b3MiLCJtYXAiLCJmaW5kUmV3YXJkIiwiZmlsdGVyIiwic3VtR2FpbmVkTW9uZXlGbiIsImdhaW5lZE1vbmV5IiwiZ2V0TW9uZXkiLCJsb3R0b0ZhY3RvcnkiLCJhbW91bnQiLCJmaWxsIiwiY3JlYXRlUmFuZG9tTG90dG8iLCJuYW1lIiwiY29uc3RydWN0b3IiLCJFcnJvciIsImFycmF5IiwiTWF0aCIsInJhbmRvbSIsIkx0TW9uZXlJbnB1dCIsIkx0V2lubmluZ0xvdHRvSW5wdXQiLCJJbnB1dFZpZXciLCIkbW9uZXkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiJHdpbm5pbmdMb3R0byIsImdldFdpbm5pbmdMb3R0byIsIiRsb3R0b0Zvcm0iLCJyZXNldCIsInJlc2V0QW5jaG9yIiwiJGZpcnN0QW5jaG9yIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIkx0TG90dG9SZXN1bHQiLCJMdFR5cG9ncmFwaHkiLCJMdExvdHRvTGlzdCIsIk91dHB1dFZpZXciLCJsb3R0b3MiLCIkYm91Z2h0TG90dG9zIiwic2V0TG90dG9zIiwiZm9jdXNOZXh0QW5jaG9yIiwiJGxvdHRvUmVzdWx0RGlhbG9nIiwiJGxvdHRvUmVzdWx0Iiwic2V0TG90dG9SZXN1bHQiLCJzZXRSZXdhcmRzIiwic2hvd01vZGFsIiwiJGxvdHRvUmVzdWx0UHJvZml0UmF0ZSIsImlubmVyVGV4dCIsInRvRml4ZWQiLCIkbmV4dEFuY2hvciIsIkx0Q29tcG9uZW50IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJyZW5kZXIiLCJpbmplY3RBdHRyaWJ1dGVGbiIsImNvbnRlbnQiLCJhdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzaGFkb3dSb290IiwiaW5uZXJIVE1MIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiZ2V0UmVuZGVyQ29udGVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCIkZWxlbWVudCIsImlkIiwiSFRNTEVsZW1lbnQiLCJMdEZvcm1Db250cm9sIiwiYXR0YWNoSW50ZXJuYWxzIiwidmFsaWQiLCJzZXRWYWxpZGl0eSIsImN1c3RvbUVycm9yIiwiZm9ybSIsImxvY2FsTmFtZSIsInZhbGlkaXR5IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ3aWxsVmFsaWRhdGUiLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJkZWZhdWx0IiwidGVtcGxhdGUiLCIkbG90dG9zIiwiJGxvdHRvIiwiJGxvdHRvVGVtcGxhdGUiLCJjbG9uZU5vZGUiLCJqb2luIiwiJGxvdHRvTGlzdCIsImRhdGFzZXQiLCJhcHBlbmQiLCIkbG90dG9SZXN1bHRSZXdhcmRzIiwiJGxvdHRvUmVzdWx0UmV3YXJkIiwiJGxvdHRvUmVzdWx0UmV3YXJkVGVtcGxhdGUiLCJfcmV3YXJkIiwiZ2V0TmFtZSIsInRvTG9jYWxlU3RyaW5nIiwidGFyZ2V0SWQiLCJMdFRleHRJbnB1dCIsIiRpbnB1dCIsInNldFRleHQiLCJzZXRFcnJvck1lc3NhZ2UiLCJzZXRNb25leSIsInNldFZhbGlkYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRUZXh0IiwiaGFzQXR0cmlidXRlIiwiTnVtYmVyIiwiZXJyb3IiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJlcnJvck1lc3NhZ2UiLCJ2YWx1ZSIsIkV2ZW50IiwidmFyaWFudCIsInRhZyIsIlZBUklBTlRfVEFHUyIsInRpdGxlIiwic3VidGl0bGUiLCJib2R5IiwiY2FwdGlvbiIsIiR3aW5uaW5nTnVtYmVySW5wdXRzIiwiJGJvbnVzTnVtYmVySW5wdXQiLCJnZXRCb251c051bWJlciIsIiRmaXJzdElucHV0Iiwic2V0V2lubmluZ0xvdHRvIiwiJHdpbm5pbmdOdW1iZXJzIiwiJGJvbnVzTnVtYmVyIiwidG9LZWJhYkNhc2UiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJjb21wb25lbnRzIiwiY29tcG9uZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJsb3R0b0NvbnRyb2xsZXIiLCJnbG9iYWxUaGlzIl0sInNvdXJjZVJvb3QiOiIifQ==