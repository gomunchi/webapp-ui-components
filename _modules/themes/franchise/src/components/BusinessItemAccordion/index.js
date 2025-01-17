"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessItemAccordion = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FiClock = _interopRequireDefault(require("@meronex/icons/fi/FiClock"));
var _TiArrowSortedUp = _interopRequireDefault(require("@meronex/icons/ti/TiArrowSortedUp"));
var _orderingComponentsExternal = require("ordering-components-external");
var _utils = require("../../../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessItemAccordion = function BusinessItemAccordion(props) {
  var _Object$values$find$b, _Object$values$find, _props$beforeElements, _props$beforeComponen, _orderState$options, _props$afterComponent, _props$afterElements;
  var uuid = props.uuid,
    isCartPending = props.isCartPending,
    currentCartUuid = props.currentCartUuid,
    isCheckout = props.isCheckout,
    isClosed = props.isClosed,
    moment = props.moment,
    orderTotal = props.orderTotal,
    isProducts = props.isProducts,
    isValidProducts = props.isValidProducts,
    isForceOpenAccordion = props.isForceOpenAccordion,
    isCartOnProductsList = props.isCartOnProductsList,
    handleClearProducts = props.handleClearProducts,
    handleStoreRedirect = props.handleStoreRedirect,
    handleCartOpen = props.handleCartOpen,
    isStore = props.isStore,
    handleChangeStore = props.handleChangeStore;
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useEvent = (0, _orderingComponentsExternal.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    setActive = _useState2[0],
    setActiveState = _useState2[1];
  var _useState3 = (0, _react.useState)('0px'),
    _useState4 = _slicedToArray(_useState3, 2),
    setHeight = _useState4[0],
    setHeightState = _useState4[1];
  var _useState5 = (0, _react.useState)('accordion__icon'),
    _useState6 = _slicedToArray(_useState5, 2),
    setRotate = _useState6[0],
    setRotateState = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    cartProductUpdated = _useState8[0],
    setCartProductUpdated = _useState8[1];
  var business = (_Object$values$find$b = (_Object$values$find = Object.values(orderState.carts).find(function (_cart) {
    return (_cart === null || _cart === void 0 ? void 0 : _cart.uuid) === uuid;
  })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.business) !== null && _Object$values$find$b !== void 0 ? _Object$values$find$b : {};
  var content = (0, _react.useRef)(null);
  var businessStore = (0, _react.useRef)(null);
  var businessDelete = (0, _react.useRef)(null);
  var changeStore = (0, _react.useRef)(null);
  var toggleAccordion = function toggleAccordion(e) {
    var _businessStore$curren, _businessDelete$curre, _changeStore$current;
    if (isStore) return;
    var isActionsClick = ((_businessStore$curren = businessStore.current) === null || _businessStore$curren === void 0 ? void 0 : _businessStore$curren.contains(e === null || e === void 0 ? void 0 : e.target)) || ((_businessDelete$curre = businessDelete.current) === null || _businessDelete$curre === void 0 ? void 0 : _businessDelete$curre.contains(e === null || e === void 0 ? void 0 : e.target)) || ((_changeStore$current = changeStore.current) === null || _changeStore$current === void 0 ? void 0 : _changeStore$current.contains(e === null || e === void 0 ? void 0 : e.target));
    if (isClosed || !isProducts || isActionsClick) return;
    setActiveState(setActive === '' ? 'active' : '');
    // setHeightState(
    //   setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    // )
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };
  var activeAccordion = function activeAccordion(value) {
    setActiveState(value ? 'active' : '');
    // setHeightState(value ? `${content.current.scrollHeight}px` : '0px')
    setRotateState(value ? 'accordion__icon rotate' : 'accordion__icon');
  };
  var handleCloseCartPopover = function handleCloseCartPopover() {
    var _Object$values$filter;
    var cartsLength = (_Object$values$filter = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
      return cart.products.length > 0;
    }).length) !== null && _Object$values$filter !== void 0 ? _Object$values$filter : 0;
    if (cartsLength > 1 && !isCheckout && !isForceOpenAccordion) {
      activeAccordion(false);
    }
  };
  var handleCartProductUpdated = function handleCartProductUpdated(product, cart) {
    setCartProductUpdated(cart === null || cart === void 0 ? void 0 : cart.uuid);
  };
  (0, _react.useEffect)(function () {
    if (cartProductUpdated === uuid || currentCartUuid === uuid && (!cartProductUpdated || cartProductUpdated === uuid)) {
      activeAccordion(true);
    } else {
      activeAccordion(false);
    }
  }, [cartProductUpdated, currentCartUuid]);
  (0, _react.useEffect)(function () {
    var _Object$values$filter2;
    var cartsLength = (_Object$values$filter2 = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
      return cart.products.length > 0;
    }).length) !== null && _Object$values$filter2 !== void 0 ? _Object$values$filter2 : 0;
    if ((cartsLength === 1 || isCheckout) && !isClosed) {
      activeAccordion(true);
    }
  }, [orderState === null || orderState === void 0 ? void 0 : orderState.carts]);
  (0, _react.useEffect)(function () {
    if (isForceOpenAccordion) {
      activeAccordion(true);
    }
  }, [isForceOpenAccordion]);
  (0, _react.useEffect)(function () {
    events.on('cart_popover_closed', handleCloseCartPopover);
    events.on('cart_product_updated', handleCartProductUpdated);
    return function () {
      events.off('cart_popover_closed', handleCloseCartPopover);
      events.off('cart_product_updated', handleCartProductUpdated);
    };
  }, []);
  (0, _react.useEffect)(function () {
    handleCartOpen && handleCartOpen(!!setActive);
  }, [setActive]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, {
    isClosed: isClosed,
    isCartOnProductsList: isCartOnProductsList
  }, !isCheckout && /*#__PURE__*/_react.default.createElement(_styles.Accordion, {
    isClosed: isClosed,
    className: "accordion ".concat(setActive),
    onClick: function onClick(e) {
      return toggleAccordion(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ContentInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement("h2", null, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement("div", null, handleStoreRedirect && !isCartOnProductsList && !isStore && /*#__PURE__*/_react.default.createElement("span", {
    ref: businessStore,
    onClick: function onClick() {
      return handleStoreRedirect(business === null || business === void 0 ? void 0 : business.slug);
    },
    className: "go-store"
  }, t('GO_TO_STORE', 'Go to store')), !isClosed && !!isProducts && !isCartPending && !isStore && /*#__PURE__*/_react.default.createElement("span", {
    ref: businessDelete,
    onClick: function onClick() {
      return handleClearProducts();
    },
    className: "clear-cart"
  }, t('CLEAR_CART', 'Clear cart'))), /*#__PURE__*/_react.default.createElement("span", {
    ref: changeStore,
    onClick: handleChangeStore,
    className: "change-store"
  }, t('CHANGE_STORE', 'Change store'))), !isStore && ((orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement(_styles.TimeInfo, null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)) : /*#__PURE__*/_react.default.createElement(_styles.TimeInfo, null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time)))), !isClosed && !!isProducts && !isStore && /*#__PURE__*/_react.default.createElement(_styles.BusinessTotal, {
    className: "total",
    isCartOnProductsList: isCartOnProductsList
  }, isValidProducts && orderTotal > 0 && /*#__PURE__*/_react.default.createElement("p", null, parsePrice(orderTotal)), /*#__PURE__*/_react.default.createElement("p", null, t('CART_TOTAL', 'Total'))), isClosed && !isStore && /*#__PURE__*/_react.default.createElement(_styles.BusinessTotal, {
    className: "closed"
  }, /*#__PURE__*/_react.default.createElement("p", null, t('CLOSED', 'Closed'), " ", moment)), !isClosed && !isProducts && !isStore && /*#__PURE__*/_react.default.createElement(_styles.BusinessTotal, null, /*#__PURE__*/_react.default.createElement("p", null, t('NO_PRODUCTS', 'No products'))), !isStore && /*#__PURE__*/_react.default.createElement(_styles.BusinessActions, null, !isClosed && !!isProducts && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_TiArrowSortedUp.default, {
    className: "".concat(setRotate)
  })))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      minHeight: "".concat(setHeight),
      maxHeight: !setActive && '0px'
    }
  }, isCheckout && handleChangeStore && /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ContentInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: changeStore,
    onClick: handleChangeStore,
    className: "change-store"
  }, t('CHANGE_STORE', 'Change store')))), props.children)), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.BusinessItemAccordion = BusinessItemAccordion;