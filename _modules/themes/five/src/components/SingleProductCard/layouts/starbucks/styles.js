"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapLogo = exports.TitleWrapper = exports.SoldOut = exports.SkeletonWrapper = exports.SkeletonCardLogo = exports.SkeletonCardInfo = exports.RibbonBox = exports.QuantityContainer = exports.PriceWrapper = exports.LastOrder = exports.CardLogo = exports.CardInfo = exports.CardContainer = exports.AddButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CardContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  background: ", ";\n  padding: 10px;\n  border-radius: 7.6px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  > div {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  ", "\n"])), function (_ref) {
  var isShowAddButt = _ref.isShowAddButt;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    min-height: ", ";\n    max-height: ", ";\n  "])), isShowAddButt ? '230px' : '200px', isShowAddButt ? '230px' : '200px');
}, function (_ref2) {
  var soldOut = _ref2.soldOut;
  return soldOut ? '#6c757d33' : '#FFF';
}, function (_ref3) {
  var productsRows = _ref3.productsRows;
  return productsRows ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: ", ";\n    margin: 10px;\n  "])), function () {
    return productsRows === 3 ? 'calc(33% - 20px)' : 'calc(50% - 20px)';
  }) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px 0px;\n\n  @media (min-width: 380px) {\n    margin: 10px;\n    width: calc(100% - 20px);\n  }\n  @media (min-width: 480px) {\n    margin: 10px;\n    width: calc(50% - 20px);\n  }\n  ", "\n  \n  "])), function (_ref4) {
    var isCartOnProductsList = _ref4.isCartOnProductsList;
    return isCartOnProductsList ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    @media (min-width: 993px) {\n      width: calc(25% - 20px); // 4 per row\n      margin: 10px 20px 10px 0px;\n      ", "\n    }\n  "])), function (props) {
      var _props$theme;
      return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin: 10px 0px 10px 20px;\n      "])));
    }) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    @media (min-width: 681px) {\n      width: calc(33% - 20px);\n    }\n\n    @media (min-width: 993px) {\n      width: calc(25% - 20px);\n    }\n\n    @media (min-width: 1440px) {\n      width: calc(20% - 20px);\n      margin: 10px 20px 10px 0px;\n      ", "\n    }\n  "])), function (props) {
      var _props$theme2;
      return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin: 10px 0px 10px 20px;\n      "])));
    });
  });
});
exports.CardContainer = CardContainer;
var SoldOut = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  position: absolute;\n  background: #495057 0% 0% no-repeat padding-box;\n  padding: 5px 10px;\n  top: 7px;\n  border-radius: 2px 0px 0px 2px;\n  right: 0px;\n  color: white;\n  font-size: 12px;\n  ", "\n  &:first-letter {\n    text-transform: uppercase;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (_ref5) {
  var isBottom = _ref5.isBottom;
  return isBottom && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    bottom: 7px;\n    top: initial;\n  "])));
});
exports.SoldOut = SoldOut;
var CardInfo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  > * {\n    margin: 3px;\n  }\n  ", "\n  p {\n    color: #909BA9;\n    text-align: left;\n    font-size: 10px;\n    ", "\n\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n    white-space: pre-wrap;\n    text-align: center;\n  }\n\n  span {\n    color: ", ";\n    font-size: 14px;\n  }\n\n  ", "\n\n  h1 {\n    font-size: 14px;\n    font-weight: 500;\n    text-align: center;\n    color: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin: 0px;\n  }\n\n  > span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    text-align: center;\n    svg {\n      color: ", ";\n      font-size: 16px;\n    }\n  }\n\n  @media (min-width: 1024px) {\n    p {\n      font-size: 12px;\n    }\n\n    span {\n      font-size: 14px;\n    }\n  }\n"])), function (_ref6) {
  var _theme$business_view, _theme$business_view$, _theme$business_view$2, _theme$business_view$3, _theme$business_view$4;
  var theme = _ref6.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 ? void 0 : (_theme$business_view$ = _theme$business_view.components) === null || _theme$business_view$ === void 0 ? void 0 : (_theme$business_view$2 = _theme$business_view$.products) === null || _theme$business_view$2 === void 0 ? void 0 : (_theme$business_view$3 = _theme$business_view$2.components) === null || _theme$business_view$3 === void 0 ? void 0 : (_theme$business_view$4 = _theme$business_view$3.layout) === null || _theme$business_view$4 === void 0 ? void 0 : _theme$business_view$4.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    \n  "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref7) {
  var oneLine = _ref7.oneLine;
  return oneLine && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    p {\n      -webkit-line-clamp: 1;\n    }\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.danger500;
});
exports.CardInfo = CardInfo;
var WrapLogo = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: 100px;\n  max-height: 100px;\n  height: 100px;\n  align-self: center;\n  ", "\n  ", "\n"])), function (_ref8) {
  var isBgimage = _ref8.isBgimage;
  return isBgimage && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    width: 100px;\n  "])));
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    margin-left: 0px;\n  "])));
});
exports.WrapLogo = WrapLogo;
var CardLogoStyled = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  min-height: 100px;\n  border-radius: ", ";\n"])), function (_ref9) {
  var _theme$business_view2, _theme$business_view3, _theme$business_view4, _theme$business_view5, _theme$business_view6, _theme$business_view7, _theme$business_view8;
  var theme = _ref9.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$business_view2 = theme.business_view) === null || _theme$business_view2 === void 0 ? void 0 : (_theme$business_view3 = _theme$business_view2.components) === null || _theme$business_view3 === void 0 ? void 0 : (_theme$business_view4 = _theme$business_view3.products) === null || _theme$business_view4 === void 0 ? void 0 : (_theme$business_view5 = _theme$business_view4.components) === null || _theme$business_view5 === void 0 ? void 0 : (_theme$business_view6 = _theme$business_view5.photo) === null || _theme$business_view6 === void 0 ? void 0 : (_theme$business_view7 = _theme$business_view6.components) === null || _theme$business_view7 === void 0 ? void 0 : (_theme$business_view8 = _theme$business_view7.style) === null || _theme$business_view8 === void 0 ? void 0 : _theme$business_view8.borderRadius) || '10px';
});
var CardLogo = function CardLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)';
  }
  return /*#__PURE__*/_react.default.createElement(CardLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.CardLogo = CardLogo;
var PriceWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .off-price {\n    ", "\n    font-size: 10px;\n    color: #909BA9;\n    text-decoration: line-through;\n    text-align: center;\n    ", "\n\n    @media (min-width: 1024px) {\n      font-size: 13px;\n    }\n  }\n"])), function (_ref10) {
  var hasOffer = _ref10.hasOffer;
  return !hasOffer && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      display: none;\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n    "])));
});
exports.PriceWrapper = PriceWrapper;
var QuantityContainer = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  background: ", ";\n  color: #fff;\n  position: absolute;\n  left: 100%;\n  bottom: 100%;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  border-radius: 50%;\n  transform: translate(-20px, 80%);\n  z-index: 100;\n  span{\n    color: #fff\n  }\n  @media (min-width: 768px) {\n    transform: translate(-50%, 80%);\n  }\n"])), function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.primary;
});
exports.QuantityContainer = QuantityContainer;
var RibbonBox = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: 2px 8px;\n  box-sizing: border-box;\n  z-index: 10;\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 13px;\n  top: -4px;\n  background-color: ", ";\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  max-width: 70px;\n  word-break: break-all;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.colorTextSignForm;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    left: -3px;\n    right: initial;\n  "])));
}, function (_ref12) {
  var bgColor = _ref12.bgColor;
  return bgColor && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), bgColor);
}, function (_ref13) {
  var isRoundRect = _ref13.isRoundRect;
  return isRoundRect && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    border-radius: 7.6px;\n  "])));
}, function (_ref14) {
  var isCapsule = _ref14.isCapsule;
  return isCapsule && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    border-radius: 50px;\n  "])));
});
exports.RibbonBox = RibbonBox;
var LastOrder = _styledComponents.default.span(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px !important;\n  margin: 0px 3px;\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.LastOrder = LastOrder;
var TitleWrapper = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  h1 {\n    font-size: 14px;\n    font-weight: 500;\n    text-align: left;\n    color: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin: 0px;\n  }\n\n  > span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    svg {\n      color: ", ";\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.danger500;
});
exports.TitleWrapper = TitleWrapper;
var SkeletonCardInfo = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 10px);\n  > * {\n    margin: 3px;\n  }\n"])));
exports.SkeletonCardInfo = SkeletonCardInfo;
var SkeletonCardLogo = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  max-width: 100px;\n  max-height: 100px;\n  width: 100px;\n  height: 100px;\n  margin-left: 5px;\n  span{\n    border-radius: ", ";\n  }\n  ", "\n"])), function (_ref15) {
  var _theme$business_view9, _theme$business_view10, _theme$business_view11, _theme$business_view12, _theme$business_view13, _theme$business_view14, _theme$business_view15;
  var theme = _ref15.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$business_view9 = theme.business_view) === null || _theme$business_view9 === void 0 ? void 0 : (_theme$business_view10 = _theme$business_view9.components) === null || _theme$business_view10 === void 0 ? void 0 : (_theme$business_view11 = _theme$business_view10.products) === null || _theme$business_view11 === void 0 ? void 0 : (_theme$business_view12 = _theme$business_view11.components) === null || _theme$business_view12 === void 0 ? void 0 : (_theme$business_view13 = _theme$business_view12.photo) === null || _theme$business_view13 === void 0 ? void 0 : (_theme$business_view14 = _theme$business_view13.components) === null || _theme$business_view14 === void 0 ? void 0 : (_theme$business_view15 = _theme$business_view14.style) === null || _theme$business_view15 === void 0 ? void 0 : _theme$business_view15.borderRadius) || '10px';
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    margin-left: 0px;\n  "])));
});
exports.SkeletonCardLogo = SkeletonCardLogo;
var AddButton = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  \n  svg {\n    width: 30px;\n    height: 30px;\n    color: #016341;\n  }\n"])));
exports.AddButton = AddButton;
var SkeletonWrapper = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  text-align: center;\n"])));
exports.SkeletonWrapper = SkeletonWrapper;