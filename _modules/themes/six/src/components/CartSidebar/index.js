"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartSidebar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _MdCart = _interopRequireDefault(require("@meronex/icons/ios/MdCart"));
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _CartContent = require("../CartContent");
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
var CartSidebar = function CartSidebar(props) {
  var _props$carts;
  var open = props.open,
    carts = props.carts;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      props.onClose();
    }
    setIsMenuOpen(value);
    document.getElementById('cartSidebar').style.width = value ? width > 489 ? '500px' : '100vw' : '0';
  };
  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('cartSidebar').style.width = '100vw';
      } else {
        document.getElementById('cartSidebar').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.IconContent, {
    onClick: function onClick() {
      return actionSidebar(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdCart.default, null), (carts === null || carts === void 0 ? void 0 : carts.length) > 0 && /*#__PURE__*/_react.default.createElement("span", null, (_props$carts = props.carts) === null || _props$carts === void 0 ? void 0 : _props$carts.length)), isMenuOpen && /*#__PURE__*/_react.default.createElement(_styles.BackDropContainer, {
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, {
    id: "cartSidebar"
  }, /*#__PURE__*/_react.default.createElement(_styles.TopContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('MY_CART', 'My cart')), /*#__PURE__*/_react.default.createElement(_styles.MenuClose, {
    "aria-label": "close",
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null), t('CLOSE', 'close'))), /*#__PURE__*/_react.default.createElement(_styles.CartContentWrapper, null, /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    isCartPopover: true,
    isSidebar: true,
    carts: props.carts,
    isOrderStateCarts: !!orderState.carts,
    onClose: function onClose() {
      return actionSidebar(false);
    }
  })))));
};
exports.CartSidebar = CartSidebar;