"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletPaymentOptionContainer = exports.WalletOptionContainer = exports.SectionLeftText = exports.SectionLeft = exports.PaymethodsListContainer = exports.PayCardSelected = exports.PayCard = exports.Container = exports.CardItemContent = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
exports.Container = Container;
var PaymethodsListContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 15px);\n  margin-left: -15px;\n"])));
exports.PaymethodsListContainer = PaymethodsListContainer;
var PayCard = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: calc(50% - 30px);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px;\n  text-align: center;\n\n  ", "\n\n  > div {\n    max-width: 88px;\n    width: 100%;\n    border: 1px solid #DEE2E6;\n    border-radius: 7.6px;\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 12px;\n    box-sizing: border-box;\n\n    > svg {\n      font-size: 25px;\n      path {\n        fill: #DEE2E6;\n      }\n    }\n  }\n\n  p {\n    margin: 0px;\n    font-size: 13px;\n    text-align: center;\n    color: #DEE2E6;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 351px) {\n    width: calc(33% - 30px);\n  }\n\n  @media (min-width: 513px) {\n    width: calc(25% - 30px);\n  }\n\n  @media (min-width: 768px) {\n    width: calc(25% - 30px);\n  }\n\n  @media (min-width: 1200px) {\n    width: calc(20% - 30px);\n  }\n\n  ", "\n"])), function (props) {
  return props.isDisabled && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
}, function (_ref) {
  var isActive = _ref.isActive;
  return isActive && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    > div {\n      border: 1px solid ", ";\n      svg path {\n        fill: ", ";\n      }\n    }\n    p {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.headingColor;
  });
});
exports.PayCard = PayCard;
var WalletPaymentOptionContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding-top: 20px;\n"])));
exports.WalletPaymentOptionContainer = WalletPaymentOptionContainer;
var WalletOptionContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid ", ";\n  ", "\n  padding: 20px 0;\n\n  > label {\n    flex: 1;\n    margin: 0 10px;\n  }\n"])), function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.isBottomBorder && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.gray200;
  });
});
exports.WalletOptionContainer = WalletOptionContainer;
var SectionLeft = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));
exports.SectionLeft = SectionLeft;
var SectionLeftText = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n"])));
exports.SectionLeftText = SectionLeftText;
var PayCardSelected = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 30px 0px 0px;\n"])));
exports.PayCardSelected = PayCardSelected;
var CardItemContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-weight: bold;\n\n  span {\n    display: flex;\n  }\n\n  .checks svg {\n    color: ", ";\n    font-size: 22px;\n  }\n\n  .brand img {\n    width: 24px;\n  }\n\n  > * {\n    margin-right: 10px\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
});
exports.CardItemContent = CardItemContent;