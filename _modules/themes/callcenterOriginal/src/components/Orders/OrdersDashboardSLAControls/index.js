"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersDashboardSLAControls = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrdersDashboardSLAControls = function OrdersDashboardSLAControls(props) {
  var setTimeStatus = props.setTimeStatus;
  var _useState = (0, _react.useState)('default'),
    _useState2 = _slicedToArray(_useState, 2),
    defaultOptionValue = _useState2[0],
    setDefaultOptionValue = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredTimeStatus = _useState4[0],
    setFilteredTimeStatus = _useState4[1];
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var timeStatus = [{
    value: 'default',
    name: t('SLA_S', 'SLA’s'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: true
    }, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, {
      timeState: ""
    }), /*#__PURE__*/_react.default.createElement("p", null, t('SLA_S', 'SLA’s')))
  }, {
    value: 'in_time',
    name: t('OK', 'Ok'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: true
    }, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, {
      timeState: "in_time"
    }), /*#__PURE__*/_react.default.createElement("p", null, t('OK', 'Ok')))
  }, {
    value: 'at_risk',
    name: t('AT_RISK', 'At Risk'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: true
    }, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, {
      timeState: "at_risk"
    }), /*#__PURE__*/_react.default.createElement("p", null, t('AT_RISK', 'At Risk')))
  }, {
    value: 'delayed',
    name: t('DELAYED', 'Delayed'),
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: true
    }, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, {
      timeState: "delayed"
    }), /*#__PURE__*/_react.default.createElement("p", null, t('DELAYED', 'Delayed')))
  }];
  var changeOrderTimeStatus = function changeOrderTimeStatus(val) {
    setDefaultOptionValue(val);
    if (val === 'default') {
      setTimeStatus(null);
      return;
    }
    setTimeStatus(val);
  };
  var handleChangeSearch = function handleChangeSearch(searchValue) {
    var _filteredTimeStatus = _toConsumableArray(timeStatus === null || timeStatus === void 0 ? void 0 : timeStatus.filter(function (orderStatuse) {
      return orderStatuse === null || orderStatuse === void 0 ? void 0 : orderStatuse.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }));
    setFilteredTimeStatus(_filteredTimeStatus);
  };
  (0, _react.useEffect)(function () {
    setFilteredTimeStatus(timeStatus);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.OrdersDashboardSLAControlsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTimeStatusSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    searchBarIsCustomLayout: true,
    placeholder: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      noPadding: true
    }, /*#__PURE__*/_react.default.createElement("p", null, t('SLA_S', 'SLA’s'))),
    options: filteredTimeStatus,
    defaultValue: defaultOptionValue,
    onChange: function onChange(timeState) {
      return changeOrderTimeStatus(timeState);
    },
    className: "timeStatusSelect",
    isShowSearchBar: true,
    searchBarPlaceholder: t('SEARCH', 'Search'),
    handleChangeSearch: handleChangeSearch
  })));
};
exports.OrdersDashboardSLAControls = OrdersDashboardSLAControls;