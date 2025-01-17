"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchHeader = exports.SearchContainer = exports.SearchBarWrapper = exports.LogoHeader = exports.Container = exports.CancelButton = exports.BusinessProductsListWrapper = exports.BusinessProductsListContainer = exports.BackDropContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10002;\n"])));
exports.Container = Container;
var BackDropContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: rgba(0,0,0,0.3);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n"])));
exports.BackDropContainer = BackDropContainer;
var SearchContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.gray200;
});
exports.SearchContainer = SearchContainer;
var SearchHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  \n  @media (min-width: 768px) {\n    width: 98%;\n    margin: 0px auto;\n    padding: 21px 0;\n  }\n"])));
exports.SearchHeader = SearchHeader;
var SearchBarWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  flex: 1;\n  > div {\n    ", "\n    width: 100%;\n    justify-content: flex-start;\n    box-sizing: border-box;\n\n    input {\n      width: 100%;\n      border: none;\n      background-color: transparent;\n      &::placeholder,\n      &::-webkit-input-placeholder {\n        color: ", ";\n      }\n      &:-ms-input-placeholder {\n        color: ", ";\n      }\n    }\n\n    > span {\n      ", "\n    }\n  }\n  @media (min-width: 768px) {\n    margin: 0 15px;\n    > div {\n      background-color: ", ";\n      border-radius: 20px;\n      border: 1px solid #DEE2E6;\n    }\n  }\n  @media (min-width: 1024px) {\n    margin: 0 70px;\n  }\n  @media (min-width: 1200px) {\n    margin: 0 100px;\n  }\n  @media (min-width: 1500px) {\n    margin: 0 130px;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding-right: 15px;\n      border-left: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.darkGray;
  }) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      padding-left: 15px;\n      border-right: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.darkGray;
  });
}, function (props) {
  return props.theme.colors.darkGray;
}, function (props) {
  return props.theme.colors.darkGray;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        left: 0px;\n      "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        right: 0px;\n      "])));
}, function (props) {
  return props.theme.colors.gray200;
});
exports.SearchBarWrapper = SearchBarWrapper;
var CancelButton = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  padding: 0 15px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n"])));
exports.CancelButton = CancelButton;
var LogoHeader = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: none;  \n  @media (min-width: 768px) {\n    cursor: pointer;\n    display: flex;\n  }\n"])));
exports.LogoHeader = LogoHeader;
var BusinessProductsListContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  max-height: calc(100vh - 88px);\n  overflow: auto;\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
exports.BusinessProductsListContainer = BusinessProductsListContainer;
var BusinessProductsListWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 95%;\n  margin: 0px auto;\n"])));
exports.BusinessProductsListWrapper = BusinessProductsListWrapper;