"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviousOrdersLayout = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsExternal = require("ordering-components-external");
var _styledComponents = require("styled-components");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PreviousOrdersLayout = function PreviousOrdersLayout(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var isProfile = props.isProfile,
    isSkeleton = props.isSkeleton,
    businessesIds = props.businessesIds,
    pagination = props.pagination,
    loadMoreOrders = props.loadMoreOrders,
    isBusinessesPage = props.isBusinessesPage,
    reorderLoading = props.reorderLoading,
    customArray = props.customArray,
    handleReorder = props.handleReorder,
    orderID = props.orderID,
    handleOrderDetails = props.handleOrderDetails,
    handleOrderHelp = props.handleOrderHelp;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDate = _useUtils2$.parseDate;
  var orders = customArray || props.orders;
  var ordersToShow = businessesIds ? orders.filter(function (order) {
    return businessesIds === null || businessesIds === void 0 ? void 0 : businessesIds.includes(order === null || order === void 0 ? void 0 : order.business_id);
  }) : orders;
  var getReviewValue = function getReviewValue(review) {
    if (review) {
      return parseInt(((review === null || review === void 0 ? void 0 : review.delivery) + (review === null || review === void 0 ? void 0 : review.package) + (review === null || review === void 0 ? void 0 : review.quality) + (review === null || review === void 0 ? void 0 : review.service)) / 4 / 5 * 100) + '%';
    } else {
      return '0%';
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderContainer, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(10)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.CardContent, null, /*#__PURE__*/_react.default.createElement(_styles.OrderContent, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 75,
      height: 75
    }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 25
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))), /*#__PURE__*/_react.default.createElement(_styles.ActionContent, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 25
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }))), /*#__PURE__*/_react.default.createElement(_styles.CardBottom, {
      reviewState: isSkeleton
    }, /*#__PURE__*/_react.default.createElement(_styles.ReviewContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    }), /*#__PURE__*/_react.default.createElement(_styles.StarRating, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 15
    }))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    })));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orders.length > 0 && ordersToShow.map(function (order) {
    var _order$business, _theme$images, _theme$images$dummies, _order$business2, _theme$images2, _theme$images2$dummie, _order$business3, _order$summary;
    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: order.id || order.uuid
    }, /*#__PURE__*/_react.default.createElement(_styles.CardContent, null, /*#__PURE__*/_react.default.createElement(_styles.OrderContent, null, (((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo)) && !isBusinessesPage && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
      src: ((_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo),
      alt: "business-logo",
      width: "75px",
      height: "75px"
    })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, null, /*#__PURE__*/_react.default.createElement("h2", null, (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement("p", {
      name: "order_number"
    }, t('ORDER_NUMBER', 'Order No.'), " ", order.id), /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
      utc: false
    })))), /*#__PURE__*/_react.default.createElement(_styles.ActionContent, null, /*#__PURE__*/_react.default.createElement("p", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total) || 0)), !isProfile && /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return handleOrderDetails(order.uuid);
      }
    }, t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order')))), /*#__PURE__*/_react.default.createElement(_styles.CardBottom, {
      reviewState: order === null || order === void 0 ? void 0 : order.review
    }, (order === null || order === void 0 ? void 0 : order.review) && /*#__PURE__*/_react.default.createElement(_styles.ReviewContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('REVIEW', 'Review')), /*#__PURE__*/_react.default.createElement(_styles.StarRating, null, /*#__PURE__*/_react.default.createElement(_styles.StarRatingUpper, {
      style: {
        width: getReviewValue(order === null || order === void 0 ? void 0 : order.review)
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605")), /*#__PURE__*/_react.default.createElement(_styles.StarRatingLower, null, /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605")))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      onClick: function onClick() {
        return !isProfile ? handleReorder(order.id) : handleOrderHelp(order);
      },
      disabled: reorderLoading
    }, !isProfile ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('HELP', 'Help')))));
  }), (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) < (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && /*#__PURE__*/_react.default.createElement(_styles.LoadMoreButtonWrap, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "load-orders",
    color: "primary",
    outline: true,
    onClick: loadMoreOrders
  }, t('LOAD_MORE_ORDERS', 'Load more orders'))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.PreviousOrdersLayout = PreviousOrdersLayout;