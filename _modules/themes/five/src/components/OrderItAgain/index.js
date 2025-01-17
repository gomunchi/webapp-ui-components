"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderItAgain = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _SingleProductCard = require("../SingleProductCard");
var _styles = require("./styles");
var _AutoScroll = require("../AutoScroll");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderItAgain = function OrderItAgain(props) {
  var onProductClick = props.onProductClick,
    isGroceries = props.isGroceries,
    productList = props.productList,
    businessId = props.businessId;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    isGroceries: isGroceries
  }, /*#__PURE__*/_react.default.createElement(_styles.ContentHeader, {
    isGroceries: isGroceries
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('ORDER_IT_AGAIN', 'Order it again')), /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_IT_AGAIN_DESC', 'Quickly add items from your past orders.'))), /*#__PURE__*/_react.default.createElement(_styles.ProductListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProductList, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "orderItAgain"
  }, productList.map(function (product, i) {
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: i,
      isSoldOut: product.inventoried && !product.quantity,
      businessId: businessId,
      product: product,
      onProductClick: onProductClick,
      isPreviously: true
    });
  })))));
};
exports.OrderItAgain = OrderItAgain;