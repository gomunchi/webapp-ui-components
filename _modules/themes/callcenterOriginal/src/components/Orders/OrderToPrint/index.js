"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderToPrint = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _EnDotSingle = _interopRequireDefault(require("@meronex/icons/en/EnDotSingle"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _BisBusiness = _interopRequireDefault(require("@meronex/icons/bi/BisBusiness"));
var _OrderBill = require("../OrderBill");
var _styles = require("../OrderDetails/styles");
var _styles2 = require("../OrderContactInformation/styles");
var _styles3 = require("../ProductItemAccordion/styles");
var _styles4 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderToPrint = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _order$payment_events, _order$payment_events2, _order$paymethod, _order$place, _getOrderStatus, _order$business, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _order$business7, _order$business8, _order$business9, _order$business10, _order$business11, _order$business12, _order$business13, _order$business14, _order$customer, _order$customer2, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9, _order$customer10, _order$customer11, _order$customer12, _order$customer13, _order$customer14, _order$customer15, _order$customer16, _order$customer17, _order$customer18, _order$customer19, _order$customer20, _order$customer21, _order$driver, _order$driver2, _order$driver3, _order$driver4, _order$driver5, _order$driver6, _order$products;
  var order = props.order,
    placeSpotEnabled = props.placeSpotEnabled,
    getOrderStatus = props.getOrderStatus,
    getLogisticTag = props.getLogisticTag,
    getPriorityTag = props.getPriorityTag;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    getOrderState = _useUtils2$.getOrderState,
    optimizeImage = _useUtils2$.optimizeImage,
    parsePrice = _useUtils2$.parsePrice;
  var walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet')
    },
    credit_point: {
      name: t('POINTS_WALLET', 'Points Wallet')
    }
  };
  var getOrderType = function getOrderType(value) {
    var statuses = [{
      value: 1,
      content: t('DELIVERY', 'Delivery')
    }, {
      value: 2,
      content: t('PICKUP', 'Pickup')
    }, {
      value: 3,
      content: t('EAT_IN', 'Eat in')
    }, {
      value: 4,
      content: t('CURBSIDE', 'Curbside')
    }, {
      value: 5,
      content: t('DRIVE_THRU', 'Drive thru')
    }];
    var objectStatus = statuses.find(function (status) {
      return status.value === value;
    });
    if (objectStatus) return objectStatus === null || objectStatus === void 0 ? void 0 : objectStatus.content;else return value;
  };
  var getFormattedSubOptionName = function getFormattedSubOptionName(_ref) {
    var quantity = _ref.quantity,
      name = _ref.name,
      position = _ref.position,
      price = _ref.price;
    if (name !== 'No') {
      var pos = position ? "(".concat(position, ")") : '';
      return price > 0 ? "".concat(name, " ").concat(pos, " ").concat(parsePrice(quantity * price, {
        currencyPosition: 'left'
      })) : "".concat(name, " ").concat(pos);
    } else {
      return 'No';
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles4.PrintContainer, {
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('INVOICE_ORDER_NO', 'Order No'), " ", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("p", null, (order === null || order === void 0 ? void 0 : (_order$payment_events = order.payment_events) === null || _order$payment_events === void 0 ? void 0 : _order$payment_events.length) > 0 ? order === null || order === void 0 ? void 0 : (_order$payment_events2 = order.payment_events) === null || _order$payment_events2 === void 0 ? void 0 : _order$payment_events2.map(function (event, i) {
    var _walletName$event$wal, _event$wallet_event, _event$wallet_event$w, _event$paymethod;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("span", null, event !== null && event !== void 0 && event.wallet_event ? (_walletName$event$wal = walletName[event === null || event === void 0 ? void 0 : (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 ? void 0 : (_event$wallet_event$w = _event$wallet_event.wallet) === null || _event$wallet_event$w === void 0 ? void 0 : _event$wallet_event$w.type]) === null || _walletName$event$wal === void 0 ? void 0 : _walletName$event$wal.name : event === null || event === void 0 ? void 0 : (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.name), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.name), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null)), /*#__PURE__*/_react.default.createElement("span", null, getOrderType(order === null || order === void 0 ? void 0 : order.delivery_type))), /*#__PURE__*/_react.default.createElement(_styles.OrderStatus, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, t('ORDER_STATUS_TEXT', 'Order status')), /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), /*#__PURE__*/_react.default.createElement(_styles.OrderStatusSelectorWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, getOrderState(order === null || order === void 0 ? void 0 : order.status)))), (order === null || order === void 0 ? void 0 : order.place) && placeSpotEnabled.includes(order === null || order === void 0 ? void 0 : order.delivery_type) && /*#__PURE__*/_react.default.createElement(_styles.PlaceSpotContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('SPOT', 'Spot'), ": ", order === null || order === void 0 ? void 0 : (_order$place = order.place) === null || _order$place === void 0 ? void 0 : _order$place.name)), /*#__PURE__*/_react.default.createElement(_styles.StatusBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
    percentage: (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.percentage
  })), /*#__PURE__*/_react.default.createElement(_styles.AdvancedLogistic, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('LOGISTIC', 'Logistic')), /*#__PURE__*/_react.default.createElement("p", null, getLogisticTag(order === null || order === void 0 ? void 0 : order.logistic_status))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('ATTEMPTS', 'Attempts')), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : order.logistic_attemps)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement("p", null, getPriorityTag(order === null || order === void 0 ? void 0 : order.priority)))), (user === null || user === void 0 ? void 0 : user.level) !== 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$business = order.business) !== null && _order$business !== void 0 && _order$business.logo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name)), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.phone))), /*#__PURE__*/_react.default.createElement(_styles2.CutsomerDetail, null, /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfoTable, null, /*#__PURE__*/_react.default.createElement("tbody", null, (order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.email) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto: ".concat(order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.email)
  }, order === null || order === void 0 ? void 0 : (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.email))), (order === null || order === void 0 ? void 0 : (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.address) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CHECKOUT_FULL_ADDRESS', 'Full address')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://maps.google.com/?q=".concat(order === null || order === void 0 ? void 0 : (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.address),
    rel: "noopener noreferrer",
    target: "_blank"
  }, order === null || order === void 0 ? void 0 : (_order$business10 = order.business) === null || _order$business10 === void 0 ? void 0 : _order$business10.address))), (order === null || order === void 0 ? void 0 : (_order$business11 = order.business) === null || _order$business11 === void 0 ? void 0 : _order$business11.address_notes) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('NOTES', 'Notes')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$business12 = order.business) === null || _order$business12 === void 0 ? void 0 : _order$business12.address_notes)), (order === null || order === void 0 ? void 0 : (_order$business13 = order.business) === null || _order$business13 === void 0 ? void 0 : _order$business13.zipcode) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$business14 = order.business) === null || _order$business14 === void 0 ? void 0 : _order$business14.zipcode))))), /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$customer = order.customer) !== null && _order$customer !== void 0 && _order$customer.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.name, " ", order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.middle_name, " ", order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.lastname, " ", order === null || order === void 0 ? void 0 : (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.second_lastname)))), /*#__PURE__*/_react.default.createElement(_styles2.CutsomerDetail, null, /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfoTable, null, /*#__PURE__*/_react.default.createElement("tbody", null, (order === null || order === void 0 ? void 0 : (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.cellphone) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CELLPHONE', 'Phone / Mobile')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "tel:".concat(order === null || order === void 0 ? void 0 : (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.cellphone)
  }, order === null || order === void 0 ? void 0 : (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.cellphone))), (order === null || order === void 0 ? void 0 : (_order$customer10 = order.customer) === null || _order$customer10 === void 0 ? void 0 : _order$customer10.email) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto: ".concat(order === null || order === void 0 ? void 0 : (_order$customer11 = order.customer) === null || _order$customer11 === void 0 ? void 0 : _order$customer11.email)
  }, order === null || order === void 0 ? void 0 : (_order$customer12 = order.customer) === null || _order$customer12 === void 0 ? void 0 : _order$customer12.email))), !!(order !== null && order !== void 0 && (_order$customer13 = order.customer) !== null && _order$customer13 !== void 0 && _order$customer13.address) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CHECKOUT_FULL_ADDRESS', 'Full address')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://maps.google.com/?q=".concat(order === null || order === void 0 ? void 0 : (_order$customer14 = order.customer) === null || _order$customer14 === void 0 ? void 0 : _order$customer14.address),
    rel: "noopener noreferrer",
    target: "_blank"
  }, order === null || order === void 0 ? void 0 : (_order$customer15 = order.customer) === null || _order$customer15 === void 0 ? void 0 : _order$customer15.address))), !!(order !== null && order !== void 0 && (_order$customer16 = order.customer) !== null && _order$customer16 !== void 0 && _order$customer16.internal_number) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('INTERNAL_NUMBER', 'Internal number')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$customer17 = order.customer) === null || _order$customer17 === void 0 ? void 0 : _order$customer17.internal_number)), !!(order !== null && order !== void 0 && (_order$customer18 = order.customer) !== null && _order$customer18 !== void 0 && _order$customer18.address_notes) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('NOTES', 'Notes')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$customer19 = order.customer) === null || _order$customer19 === void 0 ? void 0 : _order$customer19.address_notes)), !!(order !== null && order !== void 0 && (_order$customer20 = order.customer) !== null && _order$customer20 !== void 0 && _order$customer20.zipcode) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$customer21 = order.customer) === null || _order$customer21 === void 0 ? void 0 : _order$customer21.zipcode))))), (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DriverInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DriverInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$driver = order.driver) !== null && _order$driver !== void 0 && _order$driver.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), order.driver_id ? /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.name, " ", order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.middle_name, " ", order === null || order === void 0 ? void 0 : (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.lastname, " ", order === null || order === void 0 ? void 0 : (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.second_lastname)), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))) : /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('NO_DRIVER', 'No driver')))))))), /*#__PURE__*/_react.default.createElement(_styles.OrderProducts, null, /*#__PURE__*/_react.default.createElement("h2", null, t('EXPORT_SUMMARY', 'Summary')), (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    var _product$ingredients, _product$options;
    return /*#__PURE__*/_react.default.createElement(_styles3.AccordionSection, {
      key: product.id
    }, /*#__PURE__*/_react.default.createElement(_styles3.ProductInfo, null, (product === null || product === void 0 ? void 0 : product.images) && /*#__PURE__*/_react.default.createElement(_styles3.WrapperProductImage, null, /*#__PURE__*/_react.default.createElement(_styles3.ProductImage, {
      bgimage: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_100,c_limit')
    })), /*#__PURE__*/_react.default.createElement(_styles3.ProductQuantity, null, product === null || product === void 0 ? void 0 : product.quantity), /*#__PURE__*/_react.default.createElement(_styles3.ContentInfo, null, /*#__PURE__*/_react.default.createElement("h3", null, product.name))), /*#__PURE__*/_react.default.createElement(_styles3.AccordionContent, null, ((_product$ingredients = product.ingredients) === null || _product$ingredients === void 0 ? void 0 : _product$ingredients.length) > 0 && product.ingredients.some(function (ingredient) {
      return !ingredient.selected;
    }) && /*#__PURE__*/_react.default.createElement(_styles3.ProductOptionsList, null, /*#__PURE__*/_react.default.createElement("p", null, t('INGREDIENTS', 'Ingredients')), product.ingredients.map(function (ingredient) {
      return !ingredient.selected && /*#__PURE__*/_react.default.createElement("li", {
        className: "ingredient",
        key: ingredient.id
      }, /*#__PURE__*/_react.default.createElement("span", null, t('NO', 'No'), " ", ingredient.name));
    })), ((_product$options = product.options) === null || _product$options === void 0 ? void 0 : _product$options.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles3.ProductOptionsList, null, Array.isArray(product.options) && product.options.map(function (option, i) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: i
      }, /*#__PURE__*/_react.default.createElement("p", null, option.name), /*#__PURE__*/_react.default.createElement(_styles3.ProductOptionsList, {
        className: "suboption"
      }, option.suboptions.map(function (suboption) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
          key: suboption.id
        }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("span", null, getFormattedSubOptionName({
          quantity: suboption.quantity,
          name: suboption.name,
          position: suboption.position !== 'whole' ? t(suboption.position.toUpperCase(), suboption.position) : '',
          price: suboption.price
        }))));
      })));
    })), product.comment && /*#__PURE__*/_react.default.createElement(_styles3.ProductComment, null, /*#__PURE__*/_react.default.createElement("p", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement("h3", null, product.comment))));
  }))), /*#__PURE__*/_react.default.createElement(_OrderBill.OrderBill, {
    order: order
  }));
});
exports.OrderToPrint = OrderToPrint;