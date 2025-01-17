"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleOrderCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _ReviewOrder = require("../ReviewOrder");
var _ReviewProduct = require("../ReviewProduct");
var _ReviewDriver = require("../ReviewDriver");
var _styledComponents = require("styled-components");
var _utils = require("../../../../../utils");
var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));
var _Buttons = require("../../styles/Buttons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Modal = require("../Modal");
var _Confirm = require("../Confirm");
var _OrderEta = require("../OrderDetails/OrderEta");
var _styles = require("./styles");
var _styles2 = require("../OrdersOption/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SingleOrderCardUI = function SingleOrderCardUI(props) {
  var _theme$orders, _theme$orders$compone, _theme$orders$compone2, _theme$orders2, _theme$orders2$compon, _theme$orders2$compon2, _theme$orders3, _theme$orders3$compon, _theme$orders3$compon2, _theme$orders4, _theme$orders4$compon, _theme$orders4$compon2, _theme$orders5, _theme$orders5$compon, _theme$orders5$compon2, _theme$orders6, _theme$orders6$compon, _theme$orders6$compon2, _theme$orders7, _theme$orders7$compon, _theme$orders7$compon2, _theme$orders8, _theme$orders8$compon, _theme$orders8$compon2, _props$beforeElements, _props$beforeComponen, _order$business, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _theme$images2, _theme$images2$dummie, _order$business7, _theme$images3, _theme$images3$dummie, _order$business8, _theme$images4, _theme$images4$dummie, _order$business9, _order$business10, _order$summary, _order$business11, _order$business12, _order$business13, _order$business14, _getOrderStatus, _order$business15, _order$summary2, _order$business16, _props$afterComponent, _props$afterElements;
  var order = props.order,
    isBusinessesPage = props.isBusinessesPage,
    handleReorder = props.handleReorder,
    customArray = props.customArray,
    onRedirectPage = props.onRedirectPage,
    pastOrders = props.pastOrders,
    isCustomerMode = props.isCustomerMode,
    handleFavoriteOrder = props.handleFavoriteOrder,
    isSkeleton = props.isSkeleton,
    isFavorite = props.isFavorite,
    handleRemoveCart = props.handleRemoveCart,
    cartState = props.cartState;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    carts = _useOrder2[0].carts;
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDate = _useUtils2$.parseDate,
    optimizeImage = _useUtils2$.optimizeImage;
  var _useConfig = (0, _orderingComponentsExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isReviewOpen = _useState2[0],
    setIsReviewOpen = _useState2[1];
  var _useState3 = (0, _react.useState)({
      order: false,
      product: false,
      driver: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    reviewStatus = _useState4[0],
    setReviewStatus = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isOrderReviewed = _useState8[0],
    setIsOrderReviewed = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isProductReviewed = _useState10[0],
    setIsProductReviewed = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isDriverReviewed = _useState12[0],
    setIsDriverReviewed = _useState12[1];
  var handleClickCard = function handleClickCard(e, order) {
    if (e.target.closest('.favorite') || e.target.closest('.review') || e.target.closest('.reorder')) return;
    if (customArray) {
      onRedirectPage({
        page: 'checkout',
        params: {
          cartUuid: order.uuid
        }
      });
    } else {
      order !== null && order !== void 0 && order.cart_group_id ? onRedirectPage({
        page: 'multi_orders',
        params: {
          orderId: order.cart_group_id
        }
      }) : onRedirectPage({
        page: 'order_detail',
        params: {
          orderId: order.uuid
        }
      });
    }
  };
  var closeReviewOrder = function closeReviewOrder() {
    if (!isProductReviewed) setReviewStatus({
      order: false,
      product: true,
      driver: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else handleCloseReivew();
  };
  var closeReviewProduct = function closeReviewProduct() {
    if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else {
      setIsDriverReviewed(true);
      handleCloseReivew();
    }
  };
  var handleOpenReview = function handleOpenReview() {
    if (!(order !== null && order !== void 0 && order.review) && !isOrderReviewed) setReviewStatus({
      order: true,
      product: false,
      driver: false
    });else if (!isProductReviewed) setReviewStatus({
      order: false,
      product: true,
      driver: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else {
      setIsReviewOpen(false);
      return;
    }
    setIsReviewOpen(true);
  };
  var handleCloseReivew = function handleCloseReivew() {
    setReviewStatus({
      order: false,
      product: false,
      driver: false
    });
    setIsReviewOpen(false);
  };
  var handleClickReview = function handleClickReview(order) {
    handleOpenReview && handleOpenReview();
  };
  var handleChangeFavorite = function handleChangeFavorite(order) {
    handleFavoriteOrder && handleFavoriteOrder(!(order !== null && order !== void 0 && order.favorite));
  };
  var handleClickReorder = function handleClickReorder(order) {
    var _carts, _carts$products;
    if (carts["businessId:".concat(order === null || order === void 0 ? void 0 : order.business_id)] && ((_carts = carts["businessId:".concat(order === null || order === void 0 ? void 0 : order.business_id)]) === null || _carts === void 0 ? void 0 : (_carts$products = _carts.products) === null || _carts$products === void 0 ? void 0 : _carts$products.length) > 0) {
      setConfirm({
        open: true,
        content: t('QUESTION_DELETE_PRODUCTS_FROM_CART', 'Are you sure that you want to delete all products from cart?'),
        handleOnAccept: function () {
          var _handleOnAccept = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  handleRemoveCart();
                  setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
                    open: false
                  }));
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function handleOnAccept() {
            return _handleOnAccept.apply(this, arguments);
          }
          return handleOnAccept;
        }()
      });
    } else {
      handleReorder(order.id);
    }
  };
  var handleOriginalReorder = function handleOriginalReorder() {
    setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
      open: false
    }));
    handleReorder(order.id);
  };
  var hideBusinessLogo = theme === null || theme === void 0 ? void 0 : (_theme$orders = theme.orders) === null || _theme$orders === void 0 ? void 0 : (_theme$orders$compone = _theme$orders.components) === null || _theme$orders$compone === void 0 ? void 0 : (_theme$orders$compone2 = _theme$orders$compone.business_logo) === null || _theme$orders$compone2 === void 0 ? void 0 : _theme$orders$compone2.hidden;
  var hideDate = theme === null || theme === void 0 ? void 0 : (_theme$orders2 = theme.orders) === null || _theme$orders2 === void 0 ? void 0 : (_theme$orders2$compon = _theme$orders2.components) === null || _theme$orders2$compon === void 0 ? void 0 : (_theme$orders2$compon2 = _theme$orders2$compon.date) === null || _theme$orders2$compon2 === void 0 ? void 0 : _theme$orders2$compon2.hidden;
  var hideBusinessName = theme === null || theme === void 0 ? void 0 : (_theme$orders3 = theme.orders) === null || _theme$orders3 === void 0 ? void 0 : (_theme$orders3$compon = _theme$orders3.components) === null || _theme$orders3$compon === void 0 ? void 0 : (_theme$orders3$compon2 = _theme$orders3$compon.business_name) === null || _theme$orders3$compon2 === void 0 ? void 0 : _theme$orders3$compon2.hidden;
  var hideOrderNumber = theme === null || theme === void 0 ? void 0 : (_theme$orders4 = theme.orders) === null || _theme$orders4 === void 0 ? void 0 : (_theme$orders4$compon = _theme$orders4.components) === null || _theme$orders4$compon === void 0 ? void 0 : (_theme$orders4$compon2 = _theme$orders4$compon.order_number) === null || _theme$orders4$compon2 === void 0 ? void 0 : _theme$orders4$compon2.hidden;
  var hideReviewOrderButton = theme === null || theme === void 0 ? void 0 : (_theme$orders5 = theme.orders) === null || _theme$orders5 === void 0 ? void 0 : (_theme$orders5$compon = _theme$orders5.components) === null || _theme$orders5$compon === void 0 ? void 0 : (_theme$orders5$compon2 = _theme$orders5$compon.review_order_button) === null || _theme$orders5$compon2 === void 0 ? void 0 : _theme$orders5$compon2.hidden;
  var hideReorderButton = theme === null || theme === void 0 ? void 0 : (_theme$orders6 = theme.orders) === null || _theme$orders6 === void 0 ? void 0 : (_theme$orders6$compon = _theme$orders6.components) === null || _theme$orders6$compon === void 0 ? void 0 : (_theme$orders6$compon2 = _theme$orders6$compon.reorder_button) === null || _theme$orders6$compon2 === void 0 ? void 0 : _theme$orders6$compon2.hidden;
  var hideFavorite = theme === null || theme === void 0 ? void 0 : (_theme$orders7 = theme.orders) === null || _theme$orders7 === void 0 ? void 0 : (_theme$orders7$compon = _theme$orders7.components) === null || _theme$orders7$compon === void 0 ? void 0 : (_theme$orders7$compon2 = _theme$orders7$compon.favorite) === null || _theme$orders7$compon2 === void 0 ? void 0 : _theme$orders7$compon2.hidden;
  var hideOrderStatus = theme === null || theme === void 0 ? void 0 : (_theme$orders8 = theme.orders) === null || _theme$orders8 === void 0 ? void 0 : (_theme$orders8$compon = _theme$orders8.components) === null || _theme$orders8$compon === void 0 ? void 0 : (_theme$orders8$compon2 = _theme$orders8$compon.order_status) === null || _theme$orders8$compon2 === void 0 ? void 0 : _theme$orders8$compon2.hidden;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "order-card",
    w: screen.width - (screen.width < 411 ? -60 : 60),
    isBusinessesPage: isBusinessesPage,
    isCustomerMode: isCustomerMode,
    onClick: function onClick(e) {
      return handleClickCard(e, order);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.Content, {
    isCustomerMode: isCustomerMode
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 60,
    height: 60
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCustomerMode && !hideBusinessLogo && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.length) > 1 ? /*#__PURE__*/_react.default.createElement(_styles.MultiLogosContainer, null, order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.map(function (business, i) {
    var _theme$images, _theme$images$dummies;
    return i < 2 && /*#__PURE__*/_react.default.createElement(_styles.BusinessLogoWrapper, {
      key: business === null || business === void 0 ? void 0 : business.id,
      bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_400,c_limit'),
      isMulti: true
    });
  }), (order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.length) > 1 && (order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.length) - 2 > 0 && /*#__PURE__*/_react.default.createElement("p", null, "+ ", (order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.length) - 2)) : /*#__PURE__*/_react.default.createElement(_styles.BusinessLogoWrapper, {
    bgimage: optimizeImage((order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo), 'h_400,c_limit')
  })), isCustomerMode && !hideBusinessLogo && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (((_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: ((_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.logo) || ((_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$dummie = _theme$images4.dummies) === null || _theme$images4$dummie === void 0 ? void 0 : _theme$images4$dummie.businessLogo),
    alt: "business-logo",
    width: "75px",
    height: "75px"
  })))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessInformation, {
    activeOrders: true,
    isMultiCart: (order === null || order === void 0 ? void 0 : (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.length) > 1
  }, !hideBusinessName && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isCustomerMode ? /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120
  }) : (_order$business10 = order.business) === null || _order$business10 === void 0 ? void 0 : _order$business10.name), /*#__PURE__*/_react.default.createElement(_styles.Price, {
    isBusinessesPage: isBusinessesPage,
    isCustomerMode: isCustomerMode
  }, /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }) : parsePrice((order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total) || (order === null || order === void 0 ? void 0 : order.total))))) : /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120
  }) : (order === null || order === void 0 ? void 0 : (_order$business11 = order.business) === null || _order$business11 === void 0 ? void 0 : _order$business11.length) > 1 ? "".concat(t('GROUP_ORDER', 'Group Order'), " ").concat(t('No', 'No'), ". ").concat(order === null || order === void 0 ? void 0 : order.cart_group_id) : (_order$business12 = order.business) === null || _order$business12 === void 0 ? void 0 : _order$business12.name)), isSkeleton ? /*#__PURE__*/_react.default.createElement("div", {
    className: "orders-detail"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  })) : /*#__PURE__*/_react.default.createElement("div", {
    className: "orders-detail"
  }, (order === null || order === void 0 ? void 0 : order.id) && !hideOrderNumber && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("p", {
    name: "order_number"
  }, (order === null || order === void 0 ? void 0 : (_order$business13 = order.business) === null || _order$business13 === void 0 ? void 0 : _order$business13.length) > 1 ? "".concat(order === null || order === void 0 ? void 0 : (_order$business14 = order.business) === null || _order$business14 === void 0 ? void 0 : _order$business14.length, " ").concat(t('ORDERS', 'orders')) : "".concat(t('ORDER_NUM', 'Order No.'), " ").concat(order.id))), !hideDate && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("p", null, pastOrders ? order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc, {
    outputFormat: 'MM/DD/YY hh:mm A'
  }) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }) : /*#__PURE__*/_react.default.createElement(_OrderEta.OrderEta, {
    order: order
  })))), !hideOrderStatus && /*#__PURE__*/_react.default.createElement("p", {
    className: "order-status"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }) : (_getOrderStatus = (0, _utils.getOrderStatus)(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value)), !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.Price, {
    isBusinessesPage: isBusinessesPage
  }, !pastOrders && /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }) : parsePrice((order === null || order === void 0 ? void 0 : (_order$business15 = order.business) === null || _order$business15 === void 0 ? void 0 : _order$business15.length) > 1 ? order === null || order === void 0 ? void 0 : order.total : (order === null || order === void 0 ? void 0 : (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.total) || (order === null || order === void 0 ? void 0 : order.total)))), pastOrders && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, {
    isCustomerMode: isCustomerMode
  }, !isOrderReviewed && !isFavorite && (!(order !== null && order !== void 0 && order.review) || order.driver && !(order !== null && order !== void 0 && order.user_review)) && !hideReviewOrderButton && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    className: "review",
    onClick: function onClick() {
      return handleClickReview(order);
    }
  }, t('REVIEW', 'Review')), order.cart && typeof (order === null || order === void 0 ? void 0 : order.id) === 'number' && !hideReorderButton && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    className: "reorder",
    outline: true,
    onClick: function onClick() {
      return handleClickReorder(order);
    }
  }, cartState !== null && cartState !== void 0 && cartState.loading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder'))), !(order !== null && order !== void 0 && (_order$business16 = order.business) !== null && _order$business16 !== void 0 && _order$business16.length) && !hideFavorite && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.FavoriteWrapper, {
    onClick: function onClick() {
      return handleChangeFavorite(order);
    },
    className: "favorite"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 20,
    height: 20
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, order !== null && order !== void 0 && order.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null))))), isReviewOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isReviewOpen,
    onClose: handleCloseReivew,
    title: order ? reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? t('REVIEW_ORDER', 'Review order') : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? t('REVIEW_PRODUCT', 'Review Product') : t('REVIEW_DRIVER', 'Review Driver') : t('LOADING', 'Loading...')
  }, /*#__PURE__*/_react.default.createElement(_styles.ReviewWrapper, null, reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: order,
    closeReviewOrder: closeReviewOrder,
    setIsReviewed: setIsOrderReviewed
  }) : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? /*#__PURE__*/_react.default.createElement(_ReviewProduct.ReviewProduct, {
    order: order,
    closeReviewProduct: closeReviewProduct,
    setIsProductReviewed: setIsProductReviewed
  }) : /*#__PURE__*/_react.default.createElement(_ReviewDriver.ReviewDriver, {
    order: order,
    closeReviewDriver: handleCloseReivew,
    setIsDriverReviewed: setIsDriverReviewed
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('ORDER', 'Order'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return handleOriginalReorder();
    },
    onCancel: function onCancel() {
      return handleOriginalReorder();
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var SingleOrderCard = function SingleOrderCard(props) {
  var singleOrderCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleOrderCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.SingleOrderCard, singleOrderCardProps);
};
exports.SingleOrderCard = SingleOrderCard;