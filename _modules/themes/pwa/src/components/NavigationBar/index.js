"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsExternal = require("ordering-components-external");
var _BsSearch = _interopRequireDefault(require("@meronex/icons/bs/BsSearch"));
var _AiOutlineShoppingCart = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineShoppingCart"));
var _BsCardChecklist = _interopRequireDefault(require("@meronex/icons/bs/BsCardChecklist"));
var _FaRegUser = _interopRequireDefault(require("@meronex/icons/fa/FaRegUser"));
var _CartContent = require("../CartContent");
var _Modal = require("../Modal");
var _AddressForm = require("../AddressForm");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var NavigationBar = function NavigationBar() {
  var _orderState$options;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var location = (0, _reactRouterDom.useLocation)();
  var _useEvent = (0, _orderingComponentsExternal.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useSession = (0, _orderingComponentsExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCart = _useState2[0],
    setIsCart = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isAddress = _useState4[0],
    setIsAddress = _useState4[1];
  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
    var _cart$products;
    return cart.products && ((_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) > 0;
  }) || null;
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  var handleChangeExplore = function handleChangeExplore() {
    if (auth) handleGoToPage({
      page: 'search'
    });else setIsAddress(true);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.NavigationBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles.NavigationLink, {
    active: location.pathname === '/search' || isAddress,
    onClick: handleChangeExplore
  }, /*#__PURE__*/_react.default.createElement(_BsSearch.default, null), /*#__PURE__*/_react.default.createElement("p", null, t('EXPLORE', 'Explore'))), /*#__PURE__*/_react.default.createElement(_styles.NavigationLink, {
    active: isCart,
    onClick: function onClick() {
      return setIsCart(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineShoppingCart.default, null), /*#__PURE__*/_react.default.createElement("p", null, t('MY_CART', 'My cart'))), /*#__PURE__*/_react.default.createElement(_styles.NavigationLink, {
    active: location.pathname === '/profile/orders',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_BsCardChecklist.default, null), /*#__PURE__*/_react.default.createElement("p", null, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_styles.NavigationLink, {
    active: location.pathname === '/profile',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'profile'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_FaRegUser.default, null), /*#__PURE__*/_react.default.createElement("p", null, t('PROFILE', 'Profile')))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isCart,
    onClose: function onClose() {
      return setIsCart(false);
    },
    width: "50%"
  }, /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: cartsWithProducts,
    isOrderStateCarts: !!orderState.carts,
    onClose: function onClose() {
      return setIsCart(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isAddress,
    title: t('WHERE_DO_WE_DELIVERY', 'Where do we delivery?'),
    onClose: function onClose() {
      return setIsAddress(false);
    },
    width: "50%"
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.address) || {},
    onCancel: function onCancel() {
      return setIsAddress(false);
    },
    onSaveAddress: function onSaveAddress() {
      return setIsAddress(false);
    }
  })));
};
exports.NavigationBar = NavigationBar;