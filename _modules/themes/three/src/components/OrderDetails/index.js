"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsExternal = require("ordering-components-external");
var _FiPhone = _interopRequireDefault(require("@meronex/icons/fi/FiPhone"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _HiOutlineChat = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineChat"));
var _BiCaretUp = _interopRequireDefault(require("@meronex/icons/bi/BiCaretUp"));
var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));
var _BiStoreAlt = _interopRequireDefault(require("@meronex/icons/bi/BiStoreAlt"));
var _AiFillExclamationCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillExclamationCircle"));
var _AiOutlineExclamationCircle = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineExclamationCircle"));
var _Buttons = require("../../styles/Buttons");
var _NotFoundSource = require("../../../../../components/NotFoundSource");
var _ProductItemAccordion = require("../ProductItemAccordion");
var _Modal = require("../../../../../components/Modal");
var _Messages = require("../../../../../components/Messages");
var _ReviewOrder = require("../../../../../components/ReviewOrder");
var _ReviewProduct = require("../../../../../components/ReviewProduct");
var _ReviewDriver = require("../../../../../components/ReviewDriver");
var _ProductShare = require("../ProductShare");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
var _utils = require("../../../../../utils");
var _TaxInformation = require("../TaxInformation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderDetailsUI = function OrderDetailsUI(props) {
  var _order$driver, _order$driver2, _theme$images2, _theme$images2$dummie, _order$business, _order$business2, _theme$images3, _theme$images3$dummie, _order$customer, _order$customer2, _theme$images4, _theme$images4$dummie, _props$beforeElements, _props$beforeComponen, _order$business3, _theme$images5, _theme$images5$dummie, _order$business4, _order$business5, _order$business6, _order$business7, _getOrderStatus, _getOrderStatus2, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _configs$guest_uuid_a, _order$driver3, _configs$google_maps_, _order$driver4, _order$driver5, _order$driver6, _order$driver7, _order$driver8, _order$products, _order$summary2, _order$summary3, _order$summary4, _order$taxes2, _order$summary5, _order$fees, _order$summary6, _order$taxes3, _order$taxes4, _order$fees2, _order$fees3, _order$fees3$filter, _order$summary7, _order$summary8, _order$summary9, _order$summary10, _configs$driver_tip_t, _configs$driver_tip_u, _order$summary11, _order$summary12, _theme$defaultLanguag3, _openTaxModal$data, _openTaxModal$data2, _openTaxModal$data3, _openTaxModal$data$fi, _openTaxModal$data4, _openTaxModal$data5, _props$afterComponent, _props$afterElements;
  var userCustomerId = props.userCustomerId,
    handleBusinessRedirect = props.handleBusinessRedirect,
    handleOrderRedirect = props.handleOrderRedirect,
    googleMapsControls = props.googleMapsControls,
    driverLocation = props.driverLocation,
    urlToShare = props.urlToShare,
    messages = props.messages,
    setMessages = props.setMessages,
    readMessages = props.readMessages,
    messagesReadList = props.messagesReadList;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponentsExternal.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseNumber = _useUtils2$.parseNumber,
    parseDate = _useUtils2$.parseDate;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isReviewOpen = _useState2[0],
    setIsReviewOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOrderReviewed = _useState4[0],
    setIsOrderReviewed = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isProductReviewed = _useState6[0],
    setIsProductReviewed = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isDriverReviewed = _useState8[0],
    setIsDriverReviewed = _useState8[1];
  var _useState9 = (0, _react.useState)({
      business: false,
      driver: false
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    unreadAlert = _useState10[0],
    setUnreadAlert = _useState10[1];
  var _useState11 = (0, _react.useState)({
      business: false,
      driver: false
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    openMessages = _useState12[0],
    setOpenMessages = _useState12[1];
  var _useState13 = (0, _react.useState)({
      order: false,
      product: false,
      driver: false
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    reviewStatus = _useState14[0],
    setReviewStatus = _useState14[1];
  var _useState15 = (0, _react.useState)({
      open: false,
      tax: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    openTaxModal = _useState16[0],
    setOpenTaxModal = _useState16[1];
  var _props$order = props.order,
    order = _props$order.order,
    loading = _props$order.loading,
    businessData = _props$order.businessData,
    error = _props$order.error;
  var getOrderStatus = function getOrderStatus(s) {
    var _theme$defaultLanguag, _theme$defaultLanguag2;
    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', 'Pending'),
      slug: 'PENDING',
      percentage: 25
    }, {
      key: 1,
      value: t('COMPLETED', 'Completed'),
      slug: 'COMPLETED',
      percentage: 100
    }, {
      key: 2,
      value: t('REJECTED', 'Rejected'),
      slug: 'REJECTED',
      percentage: 0
    }, {
      key: 3,
      value: t('DRIVER_IN_BUSINESS', 'Driver in business'),
      slug: 'DRIVER_IN_BUSINESS',
      percentage: 60
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', 'Preparation Completed'),
      slug: 'PREPARATION_COMPLETED',
      percentage: 70
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', 'Rejected by business'),
      slug: 'REJECTED_BY_BUSINESS',
      percentage: 0
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', 'Rejected by Driver'),
      slug: 'REJECTED_BY_DRIVER',
      percentage: 0
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business'),
      slug: 'ACCEPTED_BY_BUSINESS',
      percentage: 35
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver'),
      slug: 'ACCEPTED_BY_DRIVER',
      percentage: 45
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver'),
      slug: 'PICK_UP_COMPLETED_BY_DRIVER',
      percentage: 80
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver'),
      slug: 'PICK_UP_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver'),
      slug: 'DELIVERY_COMPLETED_BY_DRIVER',
      percentage: 100
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver'),
      slug: 'DELIVERY_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 13,
      value: t('PREORDER', 'PreOrder'),
      slug: 'PREORDER',
      percentage: 0
    }, {
      key: 14,
      value: t('ORDER_NOT_READY', 'Order not ready'),
      slug: 'ORDER_NOT_READY',
      percentage: 65
    }, {
      key: 15,
      value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Order picked up completed by customer'),
      slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER',
      percentage: 100
    }, {
      key: 16,
      value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Order cancelled by customer'),
      slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 17,
      value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Order not picked up by customer'),
      slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 18,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business'),
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS',
      percentage: 55
    }, {
      key: 19,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer'),
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER',
      percentage: 90
    }, {
      key: 20,
      value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business'),
      slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS',
      percentage: 90
    }, {
      key: 21,
      value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business'),
      slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS',
      percentage: 95
    }, {
      key: 22,
      value: t('ORDER_LOOKING_FOR_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ORDER_LOOKING_FOR_DRIVER) || 'Looking for driver'),
      slug: 'ORDER_LOOKING_FOR_DRIVER',
      percentage: 35
    }, {
      key: 23,
      value: t('ORDER_DRIVER_ON_WAY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.ORDER_DRIVER_ON_WAY) || 'Driver on way'),
      slug: 'ORDER_DRIVER_ON_WAY',
      percentage: 45
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };
  var getImage = function getImage(status) {
    try {
      var _theme$images, _theme$images$order;
      return (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$order = _theme$images.order) === null || _theme$images$order === void 0 ? void 0 : _theme$images$order["status".concat(status)];
    } catch (error) {
      return 'https://picsum.photos/75';
    }
  };
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  var handleOpenMessages = function handleOpenMessages(data) {
    setOpenMessages(data);
    readMessages();
    if ((order === null || order === void 0 ? void 0 : order.unread_count) > 0) {
      data.business ? setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      })) : setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }
  };
  var unreadMessages = function unreadMessages() {
    var length = messages === null || messages === void 0 ? void 0 : messages.messages.length;
    var unreadLength = order === null || order === void 0 ? void 0 : order.unread_count;
    var unreadedMessages = messages.messages.slice(length - unreadLength, length);
    var business = unreadedMessages.some(function (message) {
      var _message$can_see;
      return message === null || message === void 0 ? void 0 : (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes(2);
    });
    var driver = unreadedMessages.some(function (message) {
      var _message$can_see2;
      return message === null || message === void 0 ? void 0 : (_message$can_see2 = message.can_see) === null || _message$can_see2 === void 0 ? void 0 : _message$can_see2.includes(4);
    });
    setUnreadAlert({
      business: business,
      driver: driver
    });
  };
  var locations = [_objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.driverPhoto)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.businessLogo)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo) || ((_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$dummie = _theme$images4.dummies) === null || _theme$images4$dummie === void 0 ? void 0 : _theme$images4$dummie.customerPhoto)
  })];
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
  var getIncludedTaxes = function getIncludedTaxes() {
    var _order$taxes;
    if ((order === null || order === void 0 ? void 0 : (_order$taxes = order.taxes) === null || _order$taxes === void 0 ? void 0 : _order$taxes.length) === 0) {
      var _order$summary$tax, _order$summary;
      return order.tax_type === 1 ? (_order$summary$tax = order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.tax) !== null && _order$summary$tax !== void 0 ? _order$summary$tax : 0 : 0;
    } else {
      return order === null || order === void 0 ? void 0 : order.taxes.reduce(function (taxIncluded, tax) {
        var _tax$summary;
        return taxIncluded + (tax.type === 1 ? (_tax$summary = tax.summary) === null || _tax$summary === void 0 ? void 0 : _tax$summary.tax : 0);
      }, 0);
    }
  };
  (0, _react.useEffect)(function () {
    if (driverLocation) {
      locations[0] = driverLocation;
    }
  }, [driverLocation]);
  (0, _react.useEffect)(function () {
    unreadMessages();
  }, [messages === null || messages === void 0 ? void 0 : messages.messages]);
  (0, _react.useEffect)(function () {
    if (messagesReadList !== null && messagesReadList !== void 0 && messagesReadList.length) {
      openMessages.business ? setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      })) : setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }
  }, [messagesReadList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, order && Object.keys(order).length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Content, {
    className: "order-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderImg, null, /*#__PURE__*/_react.default.createElement("img", {
    src: businessData === null || businessData === void 0 ? void 0 : businessData.header,
    alt: "business-header",
    height: "200px",
    width: "355px",
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.HeaderInfo, {
    className: "order-header"
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderText, {
    column: true
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER_MESSAGE_RECEIVED', 'Your order has been received')), /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_MESSAGE_HEADER_TEXT', 'Once business accepts your order, we will send you an email, thank you!'))))), /*#__PURE__*/_react.default.createElement(_styles.OrderBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: (order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.logo) || ((_theme$images5 = theme.images) === null || _theme$images5 === void 0 ? void 0 : (_theme$images5$dummie = _theme$images5.dummies) === null || _theme$images5$dummie === void 0 ? void 0 : _theme$images5$dummie.businessLogo)
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.address), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.cellphone), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.email))), /*#__PURE__*/_react.default.createElement(_styles.ActionsBlock, null, order.driver && order.driver.phone && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return window.open("tel:".concat(order.driver.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_FiPhone.default, null)), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_BiStoreAlt.default, {
    onClick: function onClick() {
      return handleBusinessRedirect(businessData === null || businessData === void 0 ? void 0 : businessData.slug);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.MessagesIcon, {
    onClick: function onClick() {
      return handleOpenMessages({
        driver: false,
        business: true
      });
    }
  }, (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && unreadAlert.business && /*#__PURE__*/_react.default.createElement(_styles.ExclamationWrapper, null, /*#__PURE__*/_react.default.createElement(_AiFillExclamationCircle.default, null)), /*#__PURE__*/_react.default.createElement(_HiOutlineChat.default, null)))), /*#__PURE__*/_react.default.createElement(_styles.OrderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.OrderData, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER', 'Order'), " #", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("p", {
    className: "description"
  }, t('DATE_TIME_FOR_ORDER', 'Date and time for your order')), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })), /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
    percentage: (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.percentage
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderStatus, null, /*#__PURE__*/_react.default.createElement(_styles.StatusImage, null, /*#__PURE__*/_react.default.createElement("img", {
    src: getImage((order === null || order === void 0 ? void 0 : order.status) || 0),
    alt: "status",
    width: "70px",
    height: "70px",
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement("span", null, (_getOrderStatus2 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus2 === void 0 ? void 0 : _getOrderStatus2.value))), /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('CUSTOMER', 'Customer')), /*#__PURE__*/_react.default.createElement(_styles.OrderCustomer, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "photo"
  }, order !== null && order !== void 0 && (_order$customer3 = order.customer) !== null && _order$customer3 !== void 0 && _order$customer3.photo ? /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.name, " ", order === null || order === void 0 ? void 0 : (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.lastname), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.address))), parseInt(configs === null || configs === void 0 ? void 0 : (_configs$guest_uuid_a = configs.guest_uuid_access) === null || _configs$guest_uuid_a === void 0 ? void 0 : _configs$guest_uuid_a.value, 10) && (order === null || order === void 0 ? void 0 : order.hash_key) && /*#__PURE__*/_react.default.createElement(_styles.ShareOrder, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('SHARE_THIS_DELIVERY', 'Share this delivery')), /*#__PURE__*/_react.default.createElement("p", null, t('LET_SOMEONE_FOLLOW_ALONG', 'Let someone follow along'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/_react.default.createElement(_ProductShare.ProductShare, {
    withBtn: true,
    btnText: t('SHARE', 'Share'),
    defaultUrl: urlToShare(order === null || order === void 0 ? void 0 : order.hash_key)
  }))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.location) && parseInt(order === null || order === void 0 ? void 0 : order.status) === 9 && /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    location: order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.location,
    locations: locations,
    mapControls: googleMapsControls
  })), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('YOUR_DRIVER', 'Your Driver')), /*#__PURE__*/_react.default.createElement(_styles.OrderDriver, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriver, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "photo"
  }, order !== null && order !== void 0 && (_order$driver5 = order.driver) !== null && _order$driver5 !== void 0 && _order$driver5.photo ? /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 ? void 0 : (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.photo,
    width: "70",
    height: "70"
  }) : /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.name, " ", order === null || order === void 0 ? void 0 : (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.lastname), /*#__PURE__*/_react.default.createElement("span", null, t('DRIVER', 'Driver')))), /*#__PURE__*/_react.default.createElement(_styles.ActionsBlock, null, order.driver && order.driver.phone && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return window.open("tel:".concat(order.driver.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_FiPhone.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MessagesIcon, {
    onClick: function onClick() {
      return handleOpenMessages({
        driver: true,
        business: false
      });
    }
  }, (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && unreadAlert.driver && /*#__PURE__*/_react.default.createElement(_styles.ExclamationWrapper, null, /*#__PURE__*/_react.default.createElement(_AiFillExclamationCircle.default, null)), /*#__PURE__*/_react.default.createElement(_HiOutlineChat.default, null)))))), /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('YOUR_ORDER', 'Your Order')), /*#__PURE__*/_react.default.createElement(_styles.OrderProducts, null, (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles.OrderBill, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(((order === null || order === void 0 ? void 0 : (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.subtotal) || (order === null || order === void 0 ? void 0 : order.subtotal)) + getIncludedTaxes()))), ((order === null || order === void 0 ? void 0 : (_order$summary3 = order.summary) === null || _order$summary3 === void 0 ? void 0 : _order$summary3.discount) > 0 || (order === null || order === void 0 ? void 0 : order.discount) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, (order === null || order === void 0 ? void 0 : order.offer_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.offer_rate, parsePrice), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((order === null || order === void 0 ? void 0 : (_order$summary4 = order.summary) === null || _order$summary4 === void 0 ? void 0 : _order$summary4.discount) || (order === null || order === void 0 ? void 0 : order.discount)))), (order === null || order === void 0 ? void 0 : (_order$taxes2 = order.taxes) === null || _order$taxes2 === void 0 ? void 0 : _order$taxes2.length) === 0 && (order === null || order === void 0 ? void 0 : order.tax_type) === 2 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TAX', 'Tax'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.tax, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary5 = order.summary) === null || _order$summary5 === void 0 ? void 0 : _order$summary5.tax) || 0))), (order === null || order === void 0 ? void 0 : (_order$fees = order.fees) === null || _order$fees === void 0 ? void 0 : _order$fees.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE_FEE', 'Service fee'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.service_fee, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary6 = order.summary) === null || _order$summary6 === void 0 ? void 0 : _order$summary6.service_fee) || 0))), (order === null || order === void 0 ? void 0 : (_order$taxes3 = order.taxes) === null || _order$taxes3 === void 0 ? void 0 : _order$taxes3.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$taxes4 = order.taxes) === null || _order$taxes4 === void 0 ? void 0 : _order$taxes4.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0;
  }).map(function (tax) {
    var _tax$summary2;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement("td", null, (tax === null || tax === void 0 ? void 0 : tax.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)")), /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: tax
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_AiOutlineExclamationCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((tax === null || tax === void 0 ? void 0 : (_tax$summary2 = tax.summary) === null || _tax$summary2 === void 0 ? void 0 : _tax$summary2.tax) || 0)));
  })), (order === null || order === void 0 ? void 0 : (_order$fees2 = order.fees) === null || _order$fees2 === void 0 ? void 0 : _order$fees2.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$fees3 = order.fees) === null || _order$fees3 === void 0 ? void 0 : (_order$fees3$filter = _order$fees3.filter(function (fee) {
    return !((fee === null || fee === void 0 ? void 0 : fee.fixed) === 0 && (fee === null || fee === void 0 ? void 0 : fee.percentage) === 0);
  })) === null || _order$fees3$filter === void 0 ? void 0 : _order$fees3$filter.map(function (fee) {
    var _fee$summary;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: fee.id
    }, /*#__PURE__*/_react.default.createElement("td", null, (fee === null || fee === void 0 ? void 0 : fee.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), "(", parsePrice(fee === null || fee === void 0 ? void 0 : fee.fixed), " + ", fee === null || fee === void 0 ? void 0 : fee.percentage, "%)", /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: fee
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_AiOutlineExclamationCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((fee === null || fee === void 0 ? void 0 : fee.fixed) + (fee === null || fee === void 0 ? void 0 : (_fee$summary = fee.summary) === null || _fee$summary === void 0 ? void 0 : _fee$summary.percentage) || 0)));
  })), ((order === null || order === void 0 ? void 0 : (_order$summary7 = order.summary) === null || _order$summary7 === void 0 ? void 0 : _order$summary7.delivery_price) > 0 || (order === null || order === void 0 ? void 0 : order.deliveryFee) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary8 = order.summary) === null || _order$summary8 === void 0 ? void 0 : _order$summary8.delivery_price) || (order === null || order === void 0 ? void 0 : order.deliveryFee)))), ((order === null || order === void 0 ? void 0 : (_order$summary9 = order.summary) === null || _order$summary9 === void 0 ? void 0 : _order$summary9.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', 'Driver tip'), ((order === null || order === void 0 ? void 0 : (_order$summary10 = order.summary) === null || _order$summary10 === void 0 ? void 0 : _order$summary10.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.driver_tip, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary11 = order.summary) === null || _order$summary11 === void 0 ? void 0 : _order$summary11.driver_tip) || (order === null || order === void 0 ? void 0 : order.totalDriverTip)))))), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary12 = order.summary) === null || _order$summary12 === void 0 ? void 0 : _order$summary12.total) || (order === null || order === void 0 ? void 0 : order.total)))))), (order === null || order === void 0 ? void 0 : order.comment) && /*#__PURE__*/_react.default.createElement("table", {
    className: "comments"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : order.comment))))), (parseInt(order === null || order === void 0 ? void 0 : order.status) === 1 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 2 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 5 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 6 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 10 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 11 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 12) && (!(order !== null && order !== void 0 && order.review) || order.driver && !(order !== null && order !== void 0 && order.user_review)) && (!isOrderReviewed || !isProductReviewed || !isDriverReviewed) && /*#__PURE__*/_react.default.createElement(_styles.ReviewsAction, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: handleOpenReview
  }, t('REVIEW_ORDER', 'Review your Order'))), !userCustomerId && /*#__PURE__*/_react.default.createElement(_styles.FootActions, null, /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    }
  }, t('MY_ORDERS', 'My Orders'), /*#__PURE__*/_react.default.createElement(_BiCaretUp.default, null))))), loading && !error && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, {
    isLoading: true,
    className: "skeleton-loading"
  }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlockWrapp, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 80
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 300
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 100
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 100
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200
  })))), !loading && error && (error.includes('ERROR_ACCESS_EXPIRED') ? /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t(error[0], 'Sorry, the order has expired.')
  }) : /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('ORDERS_REDIRECT', 'Go to Orders'),
    onClickButton: handleOrderRedirect
  })), (openMessages.driver || openMessages.business) && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openMessages.driver || openMessages.business,
    onClose: function onClose() {
      return setOpenMessages({
        driver: false,
        business: false
      });
    },
    padding: "0",
    width: "70%"
  }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    business: openMessages.business,
    driver: openMessages.driver,
    messages: messages,
    setMessages: setMessages,
    readMessages: readMessages
  })), isReviewOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isReviewOpen,
    onClose: handleCloseReivew,
    title: order ? reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? t('REVIEW_ORDER', 'Review order') : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? t('REVIEW_PRODUCT', 'Review Product') : t('REVIEW_DRIVER', 'Review Driver') : t('LOADING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.LOADING) || 'Loading...')
  }, reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
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
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openTaxModal.open,
    padding: "20px",
    closeOnBackdrop: true,
    title: "".concat(((_openTaxModal$data = openTaxModal.data) === null || _openTaxModal$data === void 0 ? void 0 : _openTaxModal$data.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " (").concat(typeof ((_openTaxModal$data2 = openTaxModal.data) === null || _openTaxModal$data2 === void 0 ? void 0 : _openTaxModal$data2.rate) === 'number' ? "".concat((_openTaxModal$data3 = openTaxModal.data) === null || _openTaxModal$data3 === void 0 ? void 0 : _openTaxModal$data3.rate, "%") : "".concat(parsePrice((_openTaxModal$data$fi = (_openTaxModal$data4 = openTaxModal.data) === null || _openTaxModal$data4 === void 0 ? void 0 : _openTaxModal$data4.fixed) !== null && _openTaxModal$data$fi !== void 0 ? _openTaxModal$data$fi : 0), " + ").concat((_openTaxModal$data5 = openTaxModal.data) === null || _openTaxModal$data5 === void 0 ? void 0 : _openTaxModal$data5.percentage, "%"), ") "),
    onClose: function onClose() {
      return setOpenTaxModal({
        open: false,
        tax: null
      });
    },
    modalTitleStyle: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_TaxInformation.TaxInformation, {
    data: openTaxModal === null || openTaxModal === void 0 ? void 0 : openTaxModal.data,
    products: order === null || order === void 0 ? void 0 : order.products
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var OrderDetails = function OrderDetails(props) {
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap',
      // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    UIComponent: OrderDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.OrderDetails, orderDetailsProps);
};
exports.OrderDetails = OrderDetails;