"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOptionList = exports.WrapperOption = exports.WrapperInput = exports.Title = exports.PlaceSpotContainer = exports.PlaceGroupContainer = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PlaceSpotContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: 80px;\n  position: relative;\n  #select-input, #list {\n    width: 100%;\n    color: #333 !important;\n    background-color: #F8F9FA;\n    border-radius: 7.6px;\n    border: 0px;\n  }\n  #item {\n    background-color: #F8F9FA;\n    font-size: 14px;\n  }\n  #item:hover {\n    background-color: #ccc;\n  }\n  .title {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n  img{\n    ", "\n  }\n  #not-found-source {\n    h1{\n      font-size: 16px;\n    }\n  }\n"])), function (_ref) {
  var isCheckout = _ref.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: 170px;\n      height: 150px;\n    "])));
});
exports.PlaceSpotContainer = PlaceSpotContainer;
var PlaceGroupContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));
exports.PlaceGroupContainer = PlaceGroupContainer;
var Title = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n"])));
exports.Title = Title;
var ButtonWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n\n  button{\n    width: 100%;\n  }\n"])));
exports.ButtonWrapper = ButtonWrapper;
var WrapperInput = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  input {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  button {\n    margin-top: 16px;\n  }\n"])));
exports.WrapperInput = WrapperInput;
var WrapperOption = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  min-width: 240px;\n  flex: 1;\n  padding: 0 10px;\n"])));
exports.WrapperOption = WrapperOption;
var WrapperOptionList = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 20px);\n  margin-left: -10px;\n\n  @media (min-width: 1600px) {\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;\n  }\n"])));
exports.WrapperOptionList = WrapperOptionList;