"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessListWrapper = exports.BusinessList = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessListWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: auto hidden;\n  width: 100%;\n\n  ", "\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ::-webkit-scrollbar {\n        width: 0px;\n        height: 0px;\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      ::-webkit-scrollbar {\n          width: 6px;\n          height: 6px;\n      }\n  "])));
});
exports.BusinessListWrapper = BusinessListWrapper;
var BusinessList = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  align-items: center;\n  ", "\n  @media (min-width: 480px){\n    flex-direction: row;\n  }\n  #searchlistorder {\n    > div {\n      width: calc(100vw - 40px);\n      min-width: calc(100vw - 40px);\n\n      ", "\n\n      @media (min-width: 681px) {\n        width: calc(50vw - 40px);\n        min-width: calc(50vw - 40px);\n      }\n      @media (min-width: 993px) {\n        width: calc(33vw - 40px);\n        min-width: calc(33vw - 40px);\n      }\n      @media (min-width: 1200px) {\n        width: calc(25vw - 40px);\n        min-width: calc(25vw - 40px);\n      }\n    }\n  }\n"])), function (_ref2) {
  var noResults = _ref2.noResults;
  return noResults && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    justify-content: center;\n  "])));
}, function (_ref3) {
  var marginCard = _ref3.marginCard;
  return marginCard && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin: ", " !important;\n      "])), function (_ref4) {
    var marginCard = _ref4.marginCard;
    return marginCard;
  });
});
exports.BusinessList = BusinessList;