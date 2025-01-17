"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SplitFormElement = exports.Label = exports.FormStripe = exports.FormRow = exports.FormActions = exports.ExpiryCsv = exports.Expiry = exports.ErrorMessage = exports.Cvs = exports.CardNumber = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FormStripe = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 5px;\n\n  .StripeElement,\n  .StripeElementIdeal {\n    display: block;\n    padding: 10px 14px;\n    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,\n      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;\n    border-radius: 4px;\n    background: white;\n  }\n\n  .StripeElement--focus,\n  .StripeElementIdeal--focus {\n    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,\n      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;\n    -webkit-transition: all 150ms ease;\n    transition: all 150ms ease;\n  }\n\n  .StripeElement.loading {\n    height: 41.6px;\n    opacity: 0.6;\n  }\n\n  .StripeElementIdeal {\n    padding: 0;\n  }\n"])));
exports.FormStripe = FormStripe;
var FormRow = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  input {\n    display: block;\n    border: none;\n    font-size: 18px;\n    margin: 10px 0 20px 0;\n    max-width: 100%;\n    padding: 10px 14px;\n    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,\n      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;\n    border-radius: 4px;\n    background: white;\n    color: #424770;\n    letter-spacing: 0.025em;\n    width: 500px;\n  }\n\n  input::placeholder {\n    color: #aab7c4;\n  }\n"])));
exports.FormRow = FormRow;
var ErrorMessage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  color: #D81212;\n  margin: 10px 0px 0px 10px;\n  ", "  \n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin: 10px 10px 0px 0px;   \n  "])));
});
exports.ErrorMessage = ErrorMessage;
var FormActions = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 20px;\n\n  button {\n    height: 44px;\n    width: 100%;\n    border-radius: 7.6px;\n\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n"])));
exports.FormActions = FormActions;
var SplitFormElement = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  .StripeElement {\n    border: 1px solid #DEE2E6 !important;\n    box-sizing: border-box !important;\n    border-radius: 7.6px !important;\n    box-shadow: none !important;\n  }\n"])));
exports.SplitFormElement = SplitFormElement;
var Label = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: inline-flex;\n  margin-bottom: 11px;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #344050;\n"])));
exports.Label = Label;
var CardNumber = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 26px;\n"])));
exports.CardNumber = CardNumber;
var ExpiryCsv = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));
exports.ExpiryCsv = ExpiryCsv;
var Expiry = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 45%;\n"])));
exports.Expiry = Expiry;
var Cvs = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 45%;\n"])));
exports.Cvs = Cvs;