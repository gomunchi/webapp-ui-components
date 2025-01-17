"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserDetails = exports.WrapperRightContainer = exports.WrapperPlaceOrderButton = exports.WrapperLeftContent = exports.WrapperLeftContainer = exports.WarningText = exports.WarningMessage = exports.UserDetailsContainer = exports.PaymentMethodContainer = exports.OrderDetailsContainer = exports.NotFoundImage = exports.DriverTipDivider = exports.DriverTipContainer = exports.DeliveryOptionsContainer = exports.Container = exports.CheckOutDivider = exports.CartsList = exports.CartContainer = exports.BusinessName = exports.BusinessDetailsInfo = exports.BusinessDetailsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  min-height: auto;\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 993px) {\n    min-height: calc(100vh - 337px);\n    box-sizing: border-box;\n  }\n"])));
exports.Container = Container;
var WrapperLeftContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 40px 20px;\n\n  @media (min-width: 769px) {\n    width: 55%;\n    padding: 55px 60px 55px 40px;\n  }\n"])));
exports.WrapperLeftContainer = WrapperLeftContainer;
var WrapperRightContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 40px 20px;\n\n  @media (min-width: 769px) {\n    width: 45%;\n    padding: 55px 40px;\n  }\n"])));
exports.WrapperRightContainer = WrapperRightContainer;
var WrapperUserDetails = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.WrapperUserDetails = WrapperUserDetails;
var UserDetailsContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 25px;\n  flex-wrap: wrap;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E9ECEF;\n"])));
exports.UserDetailsContainer = UserDetailsContainer;
var BusinessDetailsContainer = (0, _styledComponents.default)(UserDetailsContainer)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border: none;\n  div {\n    h1 {\n      text-transform: capitalize;\n      margin: 0px;\n      font-weight: 500;\n      font-size: 20px;\n      margin-bottom: 10px;\n    }\n    p {\n      font-size: 14px;\n      margin: 5px 0;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.BusinessDetailsContainer = BusinessDetailsContainer;
var PaymentMethodContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.PaymentMethodContainer = PaymentMethodContainer;
var DriverTipContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  > p {\n    margin: 0;\n    font-size: 16px;\n    color: #909BA9;\n  }\n"])));
exports.DriverTipContainer = DriverTipContainer;
var CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  h1 {\n    margin: 20px 0px;\n  }\n"])));
exports.CartContainer = CartContainer;
var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 50px 0px 10px;\n  padding: 0 10px;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"])));
exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;
var WarningMessage = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: fit-content;\n  max-height: fit-content;\n  min-height: 150px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial;\n    "])));
});
exports.WarningMessage = WarningMessage;
var NotFoundImage = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));
exports.NotFoundImage = NotFoundImage;
var CartsList = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));
exports.CartsList = CartsList;
var WarningText = _styledComponents.default.p(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.WarningText = WarningText;
var WrapperLeftContent = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  .checkout-title {\n    margin: 0;\n    font-weight: 600;\n    font-size: 32px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.darkTextColor;
});
exports.WrapperLeftContent = WrapperLeftContent;
var CheckOutDivider = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  height: 4px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #F8F9FA;\n\n  @media(min-width: 769px) {\n    width: calc(100% + 100px);\n    margin-left: -40px;\n  }\n"])));
exports.CheckOutDivider = CheckOutDivider;
var DriverTipDivider = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  height: 4px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #E9ECEF;\n\n  @media(min-width: 769px) {\n    width: calc(100% + 80px);\n    margin-left: -40px;\n  }\n"])));
exports.DriverTipDivider = DriverTipDivider;
var DeliveryOptionsContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  h1 {\n    margin: 0px;\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n    margin-bottom: 20px;\n  }\n  #select-input {\n    margin-bottom: 10px;\n  }\n  #list {\n    width: 100%;\n  }\n\n  > div {\n    width: 100%;\n    background-color: #F8F9FA!important;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n    height: 44px;\n    border: none;\n    border-radius: 7.6px;\n    color: #909BA9 !important;\n\n    > div:first-child {\n      padding-top: 5px;\n      padding-bottom: 5px;\n      justify-content: space-between;\n    }\n    > div#list {\n      width: 100%;\n      background-color: #F8F9FA;\n      border: 1px solid #F8F9FA;\n      border-radius: 7.6px;\n      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.DeliveryOptionsContainer = DeliveryOptionsContainer;
var BusinessDetailsInfo = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex; \n  align-items: center;\n  img{\n    width: 76px;\n    height: 76px;\n    border-radius: 7.6px;\n    margin-right: 30px;\n  }\n"])));
exports.BusinessDetailsInfo = BusinessDetailsInfo;
var BusinessName = _styledComponents.default.p(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 600;\n"])));
exports.BusinessName = BusinessName;
var OrderDetailsContainer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  margin-top: 60px;\n  h1 {\n    font-size: 20px;\n    font-weight: 500;\n  }\n  div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 40px;\n  }\n  span {\n    font-size: 13px!important;\n    text-decoration: underline;\n    cursor: pointer;\n    user-select: none;\n    color: ", ";\n    margin-left: 10px;\n    font-weight: normal;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: initial;\n    "])));
});
exports.OrderDetailsContainer = OrderDetailsContainer;