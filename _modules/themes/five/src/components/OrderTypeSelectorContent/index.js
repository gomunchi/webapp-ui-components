"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeSelectorContentUI = exports.OrderTypeSelectorContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _styledComponents = require("styled-components");
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderTypeSelectorContentUI = function OrderTypeSelectorContentUI(props) {
  var _theme$order_types, _theme$order_types$co, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var handleChangeOrderType = props.handleChangeOrderType,
    orderTypes = props.orderTypes,
    onClose = props.onClose,
    configTypes = props.configTypes;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderStatus = _useOrder2[0];
  var theme = (0, _styledComponents.useTheme)();
  var handleClickOrderType = function handleClickOrderType(orderType) {
    onClose && onClose();
    handleChangeOrderType && handleChangeOrderType(orderType);
  };
  var titleOrdertype = theme === null || theme === void 0 ? void 0 : (_theme$order_types = theme.order_types) === null || _theme$order_types === void 0 ? void 0 : (_theme$order_types$co = _theme$order_types.components) === null || _theme$order_types$co === void 0 ? void 0 : _theme$order_types$co.title_menu;
  var orderTypeImage = function orderTypeImage(type) {
    var _theme$order_types2, _theme$order_types2$c, _theme$order_types2$c2, _theme$order_types2$c3;
    return theme === null || theme === void 0 ? void 0 : (_theme$order_types2 = theme.order_types) === null || _theme$order_types2 === void 0 ? void 0 : (_theme$order_types2$c = _theme$order_types2.components) === null || _theme$order_types2$c === void 0 ? void 0 : (_theme$order_types2$c2 = _theme$order_types2$c[type]) === null || _theme$order_types2$c2 === void 0 ? void 0 : (_theme$order_types2$c3 = _theme$order_types2$c2.components) === null || _theme$order_types2$c3 === void 0 ? void 0 : _theme$order_types2$c3.image;
  };
  var orderTypeTitle = function orderTypeTitle(type) {
    var _theme$order_types3, _theme$order_types3$c, _theme$order_types3$c2, _theme$order_types3$c3;
    return theme === null || theme === void 0 ? void 0 : (_theme$order_types3 = theme.order_types) === null || _theme$order_types3 === void 0 ? void 0 : (_theme$order_types3$c = _theme$order_types3.components) === null || _theme$order_types3$c === void 0 ? void 0 : (_theme$order_types3$c2 = _theme$order_types3$c[type]) === null || _theme$order_types3$c2 === void 0 ? void 0 : (_theme$order_types3$c3 = _theme$order_types3$c2.components) === null || _theme$order_types3$c3 === void 0 ? void 0 : _theme$order_types3$c3.title;
  };
  var orderTypeDescription = function orderTypeDescription(type) {
    var _theme$order_types4, _theme$order_types4$c, _theme$order_types4$c2, _theme$order_types4$c3;
    return theme === null || theme === void 0 ? void 0 : (_theme$order_types4 = theme.order_types) === null || _theme$order_types4 === void 0 ? void 0 : (_theme$order_types4$c = _theme$order_types4.components) === null || _theme$order_types4$c === void 0 ? void 0 : (_theme$order_types4$c2 = _theme$order_types4$c[type]) === null || _theme$order_types4$c2 === void 0 ? void 0 : (_theme$order_types4$c3 = _theme$order_types4$c2.components) === null || _theme$order_types4$c3 === void 0 ? void 0 : _theme$order_types4$c3.description;
  };
  var orderTypeCallAction = function orderTypeCallAction(type) {
    var _theme$order_types5, _theme$order_types5$c, _theme$order_types5$c2, _theme$order_types5$c3;
    return theme === null || theme === void 0 ? void 0 : (_theme$order_types5 = theme.order_types) === null || _theme$order_types5 === void 0 ? void 0 : (_theme$order_types5$c = _theme$order_types5.components) === null || _theme$order_types5$c === void 0 ? void 0 : (_theme$order_types5$c2 = _theme$order_types5$c[type]) === null || _theme$order_types5$c2 === void 0 ? void 0 : (_theme$order_types5$c3 = _theme$order_types5$c2.components) === null || _theme$order_types5$c3 === void 0 ? void 0 : _theme$order_types5$c3.call_to_action;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "order-type",
    style: {
      overflow: 'hidden'
    }
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListTitle, null, titleOrdertype || t('HOW_WILL_YOU_DELIVERY_TYPE', 'How will you delivery type?')), orderTypes && (configTypes ? orderTypes.filter(function (type) {
    return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
  }) : orderTypes).map(function (item, i) {
    var _item$text, _item$text$replace, _orderStatus$options, _item$text2, _item$text2$replace, _item$text3, _item$text3$replace, _item$text4, _item$text4$replace;
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListItemContainer, {
      key: i,
      bgimage: orderTypeImage(item === null || item === void 0 ? void 0 : (_item$text = item.text) === null || _item$text === void 0 ? void 0 : (_item$text$replace = _item$text.replace(' ', '_')) === null || _item$text$replace === void 0 ? void 0 : _item$text$replace.toLowerCase()) || (item === null || item === void 0 ? void 0 : item.image),
      onClick: function onClick() {
        return handleClickOrderType(item.value);
      },
      active: (orderStatus === null || orderStatus === void 0 ? void 0 : (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.type) === (item === null || item === void 0 ? void 0 : item.value)
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeTitle, null, orderTypeTitle(item === null || item === void 0 ? void 0 : (_item$text2 = item.text) === null || _item$text2 === void 0 ? void 0 : (_item$text2$replace = _item$text2.replace(' ', '_')) === null || _item$text2$replace === void 0 ? void 0 : _item$text2$replace.toLowerCase()) || item.text), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeDescription, null, orderTypeDescription(item === null || item === void 0 ? void 0 : (_item$text3 = item.text) === null || _item$text3 === void 0 ? void 0 : (_item$text3$replace = _item$text3.replace(' ', '_')) === null || _item$text3$replace === void 0 ? void 0 : _item$text3$replace.toLowerCase()) || item.description), /*#__PURE__*/_react.default.createElement(_styles.OrderStartWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, orderTypeCallAction(item === null || item === void 0 ? void 0 : (_item$text4 = item.text) === null || _item$text4 === void 0 ? void 0 : (_item$text4$replace = _item$text4.replace(' ', '_')) === null || _item$text4$replace === void 0 ? void 0 : _item$text4$replace.toLowerCase()) || t('START_MY_ORDER', 'start my order')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeOverlay, null));
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.OrderTypeSelectorContentUI = OrderTypeSelectorContentUI;
var OrderTypeSelectorContent = function OrderTypeSelectorContent(props) {
  var _theme$images, _theme$images$deliver, _theme$images2, _theme$images2$delive, _theme$images3, _theme$images3$delive, _theme$images4, _theme$images4$delive, _theme$images5, _theme$images5$delive;
  var _useLanguage3 = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var theme = (0, _styledComponents.useTheme)();
  var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderTypeSelectorContentUI,
    orderTypes: props.orderTypes || [{
      value: 1,
      text: t('DELIVERY', 'Delivery'),
      description: t('ORDERTYPE_DESCRIPTION_DELIVERY', 'Delivery description'),
      image: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$deliver = _theme$images.deliveryTypes) === null || _theme$images$deliver === void 0 ? void 0 : _theme$images$deliver.delivery
    }, {
      value: 2,
      text: t('PICKUP', 'Pickup'),
      description: t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description'),
      image: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$delive = _theme$images2.deliveryTypes) === null || _theme$images2$delive === void 0 ? void 0 : _theme$images2$delive.pickUp
    }, {
      value: 3,
      text: t('EAT_IN', 'Eat in'),
      description: t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description'),
      image: (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$delive = _theme$images3.deliveryTypes) === null || _theme$images3$delive === void 0 ? void 0 : _theme$images3$delive.eatIn
    }, {
      value: 4,
      text: t('CURBSIDE', 'Curbside'),
      description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description'),
      image: (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$delive = _theme$images4.deliveryTypes) === null || _theme$images4$delive === void 0 ? void 0 : _theme$images4$delive.curbside
    }, {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru'),
      description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description'),
      image: (_theme$images5 = theme.images) === null || _theme$images5 === void 0 ? void 0 : (_theme$images5$delive = _theme$images5.deliveryTypes) === null || _theme$images5$delive === void 0 ? void 0 : _theme$images5$delive.driveThru
    }]
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.OrderTypeControl, orderTypeProps);
};
exports.OrderTypeSelectorContent = OrderTypeSelectorContent;