"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperProductImage = exports.ProductSelect = exports.ProductQuantity = exports.ProductPriceSection = exports.ProductPrice = exports.ProductOptionsList = exports.ProductNotAvailable = exports.ProductInfoContent = exports.ProductInfoContainer = exports.ProductInfo = exports.ProductImage = exports.ProductError = exports.ProductComment = exports.ProductCardContainer = exports.ProductActionsEdit = exports.ProductActionsDelete = exports.ProductActions = exports.IncDecActions = exports.ContentInfo = exports.AccordionText = exports.AccordionSection = exports.AccordionContent = exports.Accordion = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AccordionSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 10px 0px;\n  background: #FFF;\n  border-bottom: 1px solid #D9D9D9;\n"])));
exports.AccordionSection = AccordionSection;
var AccordionStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  cursor: initial;\n  transition: background-color 0.6s ease;\n  margin: 0px 10px;\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    margin-left: auto;\n    transition: transform 0.6s ease;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: auto;\n      margin-left: initial;\n    "])));
});
var Accordion = function Accordion(props) {
  var style = {};
  if (!props.isValid) {
    style.opacity = '0.5';
  }
  return /*#__PURE__*/_react.default.createElement(AccordionStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.Accordion = Accordion;
var WrapperProductImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: 55px;\n  max-height: 55px;\n  height: 55px;\n  width: 55px;\n\n  ", "\n\n  @media (min-width: 361px) {\n    max-width: 65px;\n    max-height: 65px;\n    height: 65px;\n    width: 65px;\n  }\n\n  @media (min-width: 411px) {\n    max-width: 75px;\n    max-height: 75px;\n    height: 75px;\n    width: 75px;\n  }\n\n  @media (min-width: 768px) {\n    ", "\n  }\n"])), function (_ref) {
  var isBigSize = _ref.isBigSize;
  return isBigSize && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n  "])));
}, function (_ref2) {
  var isBigSize = _ref2.isBigSize;
  return isBigSize && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      max-width: 120px;\n      max-height: 120px;\n      height: 120px;\n      width: 120px;\n    "])));
});
exports.WrapperProductImage = WrapperProductImage;
var ProductImageStyled = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: contain;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 7.6px;\n"])));
var ProductImage = function ProductImage(props) {
  return /*#__PURE__*/_react.default.createElement(ProductImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
exports.ProductImage = ProductImage;
var ContentInfo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  margin-left: 10px;\n  width: calc(65% - 60px);\n\n  ", "\n\n  h3 {\n    font-size: 14px;\n    margin: 0px;\n    font-weight: 400;\n    color: ", ";\n  }\n\n  span {\n    display: flex;\n    justify-content: space-between;\n    margin: 0px;\n\n    p {\n      margin: 0px;\n      font-size: 14px;\n    }\n\n    div {\n      display: flex;\n\n      span {\n        height: 20px;\n        svg {\n          font-size: 20px;\n          &:nth-child(1) {\n            margin-right: 3px;\n            ", "\n          }\n        }\n      }\n    }\n  }\n\n  @media (min-width: 577px) {\n    h3 {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n              margin-left: 3px;\n              margin-right: 0px;\n            "])));
});
exports.ContentInfo = ContentInfo;
var AccordionContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n\n  ", "\n\n  @media (min-width: 361px) {\n    ", "\n  }\n\n  @media (min-width: 411px) {\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-right: 95px;\n  "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    margin-left: 95px;\n  "])));
}, function (_ref3) {
  var isCustomMode = _ref3.isCustomMode;
  return isCustomMode ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      ", "\n    "])), function (props) {
    var _props$theme5;
    return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-right: 105px;\n      "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin-left: 105px;\n      "])));
  }) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      ", "\n    "])), function (props) {
    var _props$theme6;
    return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        margin-right: 90px;\n      "]))) : (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        margin-left: 90px;\n      "])));
  });
}, function (props) {
  var _props$theme7;
  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin-right: 115px;\n    "]))) : (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      margin-left: 115px;\n    "])));
});
exports.AccordionContent = AccordionContent;
var AccordionText = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  padding: 18px;\n"])));
exports.AccordionText = AccordionText;
var ProductComment = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  ", "\n  p {\n    margin: 0px;\n    font-weight: 400;\n    font-size: 12px;\n    color: ", ";\n  }\n\n  h3 {\n    font-size: 12px;\n    font-weight: 400;\n    text-transform: capitalize;\n    margin: 0px 20px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    color: ", ";\n  }\n\n  @media (min-width: 681px) {\n    p, h3 {\n      font-size: 14px;\n    }\n  }\n"])), function (_ref4) {
  var isCustomMode = _ref4.isCustomMode;
  return !isCustomMode && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    padding-left: 40px;\n    ", "\n  "])), function (props) {
    var _props$theme8;
    return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      padding-right: 40px;\n      padding-left: 0px;\n    "])));
  });
}, function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.grayDark;
});
exports.ProductComment = ProductComment;
var ProductInfo = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 70%;\n\n  h1,\n  h3 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p {\n    font-size: 20px;\n    margin: 0px 5px;\n  }\n"])));
exports.ProductInfo = ProductInfo;
var ProductError = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  span {\n    font-size: 18px;\n    text-align: center;\n  }\n\n  @media (min-width: 411px){\n    width: 35%;\n\n    span{\n      text-align: right;\n    }\n  }\n"])));
exports.ProductError = ProductError;
var ProductActions = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n"])));
exports.ProductActions = ProductActions;
var ProductActionsEdit = _styledComponents.default.span(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  svg {\n    font-size: 20px;\n    margin-right: 5px;\n    cursor: pointer;\n    ", "\n  }\n"])), function (props) {
  var _props$theme9;
  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
exports.ProductActionsEdit = ProductActionsEdit;
var ProductActionsDelete = (0, _styledComponents.default)(ProductActionsEdit)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  svg {\n    margin-right: 0px;\n  }\n"])));
exports.ProductActionsDelete = ProductActionsDelete;
var ProductPriceSection = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  width: 28%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"])));
exports.ProductPriceSection = ProductPriceSection;
var ProductPrice = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 10px;\n\n  p,\n  span {\n    font-size: 14px;\n  }\n\n  span {\n    color: ", ";\n  }\n\n  p {\n    margin-top: 0px;\n    margin-bottom: 0px;\n    ", "\n  }\n\n  svg {\n    cursor: pointer;\n  }\n\n  @media (min-width: 512px) {\n    span,\n    p {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  var _props$theme10;
  return (_props$theme10 = props.theme) !== null && _props$theme10 !== void 0 && _props$theme10.rtl ? (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "])));
});
exports.ProductPrice = ProductPrice;
var ProductSelect = _styledComponents.default.select(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  padding: 0px;\n  max-width: 40px;\n  height: 25px;\n  border: none;\n  background-color: #FFF;\n  border-radius: 7.6px;\n  outline: none;\n  margin-left: 5px;\n  cursor: pointer;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-progress-appearance: none;\n\n  background-image: url('https://res.cloudinary.com/dq4bhnmtt/image/upload/q_50/v1613334826/bzydg4yrmrz0hzihtsxs.png');\n  background-repeat: no-repeat, repeat;\n  background-position: right .7em top 50%, 0 0;\n  background-size: .65em auto, 100%;\n\n  ", "\n\n  @media (min-width: 681px) {\n    font-size: 17px;\n    padding: 0 5px;\n    max-width: 55px;\n  }\n"])), function (props) {
  var _props$theme11;
  return ((_props$theme11 = props.theme) === null || _props$theme11 === void 0 ? void 0 : _props$theme11.rtl) && (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    margin-left: 0px;\n  "])));
});
exports.ProductSelect = ProductSelect;
var ProductNotAvailable = _styledComponents.default.span(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  color: #D81212;\n"])));
exports.ProductNotAvailable = ProductNotAvailable;
var ProductOptionsList = _styledComponents.default.ul(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  list-style-type: none;\n  color: ", ";\n  font-size: 12px;\n\n  ", "\n\n  .suboption {\n    margin-left: -25px;\n    ", "\n  }\n\n  p:nth-child(1) {\n    margin-bottom: 0;\n  }\n\n  p {\n    font-weight: 400;\n    margin: 0px;\n    color: ", ";\n  }\n\n  li span {\n    font-weight: 400;\n    color: ", ";\n  }\n\n  li.ingredient {\n    padding-left: 15px;\n    ", "\n  }\n\n  @media (min-width: 681px) {\n    font-size: 14px;\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (_ref5) {
  var isCustomMode = _ref5.isCustomMode;
  return isCustomMode && (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n    padding: 0px;\n    margin: 0px;\n  "])));
}, function (props) {
  var _props$theme12;
  return ((_props$theme12 = props.theme) === null || _props$theme12 === void 0 ? void 0 : _props$theme12.rtl) && (0, _styledComponents.css)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n      margin-right: -25px;\n      margin-left: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  var _props$theme13;
  return ((_props$theme13 = props.theme) === null || _props$theme13 === void 0 ? void 0 : _props$theme13.rtl) && (0, _styledComponents.css)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n      padding-right: 15px;\n      padding-left: 0px;\n    "])));
});
exports.ProductOptionsList = ProductOptionsList;
var ProductQuantity = _styledComponents.default.span(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  margin-left: 5px;\n  ", "\n"])), function (props) {
  var _props$theme14;
  return ((_props$theme14 = props.theme) === null || _props$theme14 === void 0 ? void 0 : _props$theme14.rtl) && (0, _styledComponents.css)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    margin-left: 0px;\n  "])));
});
exports.ProductQuantity = ProductQuantity;
var ProductCardContainer = _styledComponents.default.div(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px dashed #ACB2B6;\n\n  @media (min-width: 681px) {\n    padding: 20px 30px 30px 30px;\n    border-bottom: none;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    border-radius: 20px;\n    margin-bottom: 40px;\n  }\n"])));
exports.ProductCardContainer = ProductCardContainer;
var ProductInfoContainer = _styledComponents.default.div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: calc(100% - 75px);\n  flex-direction: row;\n\n  > div:last-child {\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n\n    > div {\n      span {\n        font-size: 14px;\n        margin: 0 5px;\n      }\n    }\n  }\n\n  @media (min-width: 361px) {\n    width: calc(100% - 85px);\n  }\n\n  @media (min-width: 411px) {\n    width: calc(100% - 95px);\n  }\n\n  @media (min-width: 768px) {\n    width: calc(100% - 140px);\n    flex-direction: row;\n\n    > div:last-child {\n      width: 25%;\n      align-items: flex-end;\n      > div {\n        span {\n          font-size: 16px;\n        }\n      }\n    }\n  }\n"])));
exports.ProductInfoContainer = ProductInfoContainer;
var ProductInfoContent = _styledComponents.default.div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  width: 60%;\n  h1 {\n    color: ", ";\n    font-weight: 500;\n    font-size: 16px;\n    margin: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 768px) {\n    width: calc(75% - 20px);\n    h1 {\n      font-size: 20px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
exports.ProductInfoContent = ProductInfoContent;
var IncDecActions = _styledComponents.default.div(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);\n  border-radius: 30px;\n  position: absolute;\n  bottom: -10px;\n  background-color: #FFF;\n  button {\n    cursor: pointer;\n    outline: none;\n    height: 24px;\n    border: none;\n    font-size: 20px;\n    background: #FFF;\n    transition: all .3s ease-in-out;\n    padding: 0 5px;\n    display: flex;\n    align-items: center;\n    &:active {\n      background: ", ";\n    }\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  button.decrease {\n    color: ", ";\n    ", "    \n  }\n  \n  button.increase {\n    color: ", ";\n    ", "\n  }\n\n  span {\n    min-width: 30px;\n    height: 24px;\n    color: ", ";\n    font-weight: 500;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  @media (min-width: 681px) {\n    button {\n      padding: 0 10px;\n    }\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#FFF');
}, function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  var _props$theme15;
  return (_props$theme15 = props.theme) !== null && _props$theme15 !== void 0 && _props$theme15.rtl ? (0, _styledComponents.css)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n      border-radius: 0 30px 30px 0;\n      border-left: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.gray;
  }) : (0, _styledComponents.css)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n      border-radius: 30px 0 0 30px;\n      border-right: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.gray;
  });
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme16;
  return (_props$theme16 = props.theme) !== null && _props$theme16 !== void 0 && _props$theme16.rtl ? (0, _styledComponents.css)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n      border-radius: 30px 0 0 30px;\n      border-right: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.gray;
  }) : (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n      border-radius: 0 30px 30px 0;\n      border-left: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.gray;
  });
}, function (props) {
  return props.theme.colors.primary;
});
exports.IncDecActions = IncDecActions;