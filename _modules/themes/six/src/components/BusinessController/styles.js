"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessLogo = exports.WrapperBusinessCard = exports.SelectStoreContainer = exports.NameWrapper = exports.Medadata = exports.ContainerCard = exports.Categories = exports.CallCenterInformationBullet = exports.CallCenterInformation = exports.BusinessTags = exports.BusinessName = exports.BusinessLogo = exports.BusinessInfomation = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessHero = exports.BusinessHeader = exports.BusinessContent = exports.Address = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ContainerCard = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n  width: 100%;\n  position: relative;\n  @media (min-width: 768px) {\n    padding: 7px 10px 7px 20px;\n    margin-bottom: 5px;\n  }\n"])));
exports.ContainerCard = ContainerCard;
var WrapperBusinessCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  cursor: ", ";\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton ? 'default' : 'pointer';
});
exports.WrapperBusinessCard = WrapperBusinessCard;
var BusinessHero = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n"])));
exports.BusinessHero = BusinessHero;
var BusinessHeaderStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 175px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n\n  h1 {\n    color: #FFF;\n    opacity: 0.5;\n  }\n\n  @media (min-width: 481px) {\n    min-height: 200px;\n  }\n"])));
var BusinessHeader = function BusinessHeader(props) {
  var style = {};
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessHeaderStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.BusinessHeader = BusinessHeader;
var BusinessTags = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  justify-content: space-between;\n  align-items: center;\n  top: 0;\n  margin: 15px;\n  width: calc(100% - 35px);\n      \n  ", "\n  span.crown {\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    color: #FFC917;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n\n  span {\n    background-color: #6C6C6C;\n    font-size: 12px;\n    color: #FFF;\n    padding: 8px;\n    border-radius: 10px;\n    margin-right: 10px;\n    ", "\n    &:last-child {\n      ", "\n    }\n  }\n"])), function (_ref2) {
  var _theme$business_listi, _theme$business_listi2, _theme$business_listi3;
  var theme = _ref2.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 ? void 0 : (_theme$business_listi2 = _theme$business_listi.components) === null || _theme$business_listi2 === void 0 ? void 0 : (_theme$business_listi3 = _theme$business_listi2.layout) === null || _theme$business_listi3 === void 0 ? void 0 : _theme$business_listi3.type) === 'mapview' && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 100%;\n  "])));
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n    "])));
});
exports.BusinessTags = BusinessTags;
var BusinessContent = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 12px 24px;\n  max-height: 115px;\n"])));
exports.BusinessContent = BusinessContent;
var WrapperBusinessLogo = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  align-self: center;\n  width: 65px;\n  height: 65px;\n  min-height: 65px;\n  min-width: 65px;\n  min-height: 65px;\n  ", "\n\n  @media (min-width: 481px){\n    max-width: 75px;\n    max-height: 75px;\n    height: 75px;\n    width: 75px;\n    min-width: 75px;\n    min-height: 75px;\n  }\n"])), function (_ref3) {
  var isSkeleton = _ref3.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    width: auto;\n    height: auto;\n  "])));
});
exports.WrapperBusinessLogo = WrapperBusinessLogo;
var BusinessLogoStyled = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 65px;\n  height: 65px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 65px;\n  border-radius: 10px;\n\n  @media (min-width: 481px){\n    width: 100%;\n    height: 100%;\n    min-height: 75px;\n  }\n"])));
var BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.BusinessLogo = BusinessLogo;
var BusinessInfo = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  width: calc(100% - 65px);\n\n  @media (min-width: 481px){\n    width: calc(100% - 75px);\n    ", "\n  }\n"])), function (_ref4) {
  var _theme$business_listi4, _theme$business_listi5, _theme$business_listi6;
  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$business_listi4 = theme.business_listing_view) === null || _theme$business_listi4 === void 0 ? void 0 : (_theme$business_listi5 = _theme$business_listi4.components) === null || _theme$business_listi5 === void 0 ? void 0 : (_theme$business_listi6 = _theme$business_listi5.layout) === null || _theme$business_listi6 === void 0 ? void 0 : _theme$business_listi6.type) === 'mapview' && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    "])));
});
exports.BusinessInfo = BusinessInfo;
var BusinessInfoItem = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 92%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0px 5px 0px 10px;\n  font-size: 12px;\n  ", "\n  .reviews {\n    display: flex;\n    align-items: center;\n    svg {\n      margin-right: 3px;\n      font-size: 22px;\n      color: #FDC918;\n      ", "\n    }\n  }\n\n  div {\n    display: flex;\n    justify-content: space-between;\n    ", "\n    p {\n      text-transform: capitalize;\n      display: flex;\n      align-items: center;\n      margin: 0px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      img {\n        margin-right: 4px;\n        ", "\n      }\n    }\n    p.bold {\n      font-weight: bold;\n    }\n  }\n\n  @media (min-width: 1201px) {\n    width: 95%;\n  }\n\n  @media (min-width: 481px){\n    ", "\n    padding: 0px 5px 0px 16px;\n    font-size: 16px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    padding: 0px 10px 0px 5px;\n  "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        margin-left: 3px;\n        margin-right: 0;\n    "])));
}, function (_ref5) {
  var _theme$business_listi7, _theme$business_listi8, _theme$business_listi9;
  var theme = _ref5.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$business_listi7 = theme.business_listing_view) === null || _theme$business_listi7 === void 0 ? void 0 : (_theme$business_listi8 = _theme$business_listi7.components) === null || _theme$business_listi8 === void 0 ? void 0 : (_theme$business_listi9 = _theme$business_listi8.layout) === null || _theme$business_listi9 === void 0 ? void 0 : _theme$business_listi9.type) === 'mapview' && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      align-items: center;\n    "])));
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n          margin-left: 4px;\n          margin-right: 0px;\n       "])));
}, function (_ref6) {
  var _theme$business_listi10, _theme$business_listi11, _theme$business_listi12;
  var theme = _ref6.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$business_listi10 = theme.business_listing_view) === null || _theme$business_listi10 === void 0 ? void 0 : (_theme$business_listi11 = _theme$business_listi10.components) === null || _theme$business_listi11 === void 0 ? void 0 : (_theme$business_listi12 = _theme$business_listi11.layout) === null || _theme$business_listi12 === void 0 ? void 0 : _theme$business_listi12.type) === 'mapview' && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      min-width: 100%;\n      width: 100%;\n    "])));
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n        padding: 0px 16px 0px 5px;\n    "])));
});
exports.BusinessInfoItem = BusinessInfoItem;
var BusinessName = _styledComponents.default.h6(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n  margin-block-start: 0;\n  margin-block-end: 0;\n"])));
exports.BusinessName = BusinessName;
var Categories = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 300;\n  color: #6C6C6C;\n\n  @media (min-width: 481px) {\n    font-size: 16px;\n  }\n"])));
exports.Categories = Categories;
var Medadata = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  font-weight: 300;\n  font-size: 12px;\n  .schedule{\n    font-size: 12px;\n    color: #ADB5BD;\n  }\n  ", "\n  p {\n    svg {\n      margin-right: 3px;\n      ", "\n    }\n  }\n\n  @media (min-width: 481px) {\n    font-size: 14px;\n  }\n"])), function (_ref7) {
  var isCustomerMode = _ref7.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    > div {\n      flex-direction: column;\n    }\n  "])));
}, function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n        margin-left: 3px;\n        margin-right: 0;\n    "])));
});
exports.Medadata = Medadata;
var CallCenterInformation = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  div{\n    justify-content: space-evenly;\n  }\n"])));
exports.CallCenterInformation = CallCenterInformation;
var CallCenterInformationBullet = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 2px;\n  margin-bottom: 2px;\n  border-radius: 16px;\n  background: ", ";\n  width: 50px;\n  color: #fff;\n  svg{\n    font-size: 18px;\n  }\n"])), function (_ref8) {
  var bgcolor = _ref8.bgcolor;
  return bgcolor;
});
exports.CallCenterInformationBullet = CallCenterInformationBullet;
var NameWrapper = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"])));
exports.NameWrapper = NameWrapper;
var BusinessInfomation = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  z-index: 2;\n  .reviews {\n    margin-right: 10px;\n  }\n  .favorite {\n    margin-right: 10px;\n    svg {\n      color: #E63757\n    }\n  }\n  ", "\n\n  svg {\n    font-size: 20px;\n  }\n\n  &:hover svg{\n    font-size: 21px;\n  }\n"])), function (props) {
  var _props$theme8;
  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    right: unset;\n    left: 0;\n  "])));
});
exports.BusinessInfomation = BusinessInfomation;
var Address = _styledComponents.default.p(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  width: 70%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0;\n  font-size: 14px;\n"])));
exports.Address = Address;
var SelectStoreContainer = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  button{ \n    background: transparent;\n    color: ", ";\n    border-color: ", ";\n    height: 27px;\n    line-height: 0;\n    font-size: 14px;\n    white-space: nowrap;\n  }\n"])), function (_ref9) {
  var _theme$colors;
  var theme = _ref9.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary;
}, function (_ref10) {
  var _theme$colors2;
  var theme = _ref10.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.primary;
});
exports.SelectStoreContainer = SelectStoreContainer;