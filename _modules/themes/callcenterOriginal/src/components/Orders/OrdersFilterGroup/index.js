"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersFilterGroup = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _BusinessesSelector = require("../BusinessesSelector");
var _DriversGroupTypeSelector = require("../DriversGroupTypeSelector");
var _DateTypeSelector = require("../DateTypeSelector");
var _DriverSelector = require("../DriverSelector");
var _Shared = require("../../Shared");
var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");
var _DeliveryTypeSelector = require("../DeliveryTypeSelector");
var _PaymethodTypeSelector = require("../PaymethodTypeSelector");
var _CountryFilter = require("../CountryFilter");
var _styles = require("../../../styles");
var _CurrencyFilter = require("../CurrencyFilter");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrdersFilterGroupUI = function OrdersFilterGroupUI(props) {
  var open = props.open,
    handleCloseFilterModal = props.handleCloseFilterModal,
    filterValues = props.filterValues,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
    citiesList = props.citiesList,
    handleChangeGroup = props.handleChangeGroup,
    handleChangeDateType = props.handleChangeDateType,
    handleChangeFromDate = props.handleChangeFromDate,
    handleChangeEndDate = props.handleChangeEndDate,
    handleChangeBusinesses = props.handleChangeBusinesses,
    handleChangeDriver = props.handleChangeDriver,
    handleChangeCity = props.handleChangeCity,
    handleChangeOrderStatus = props.handleChangeOrderStatus,
    handleChangeDeliveryType = props.handleChangeDeliveryType,
    handleChangePaymethodType = props.handleChangePaymethodType,
    handleResetFilterValues = props.handleResetFilterValues,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleChangeOrderId = props.handleChangeOrderId,
    handleChangeCountryCode = props.handleChangeCountryCode,
    handleChangeCurrency = props.handleChangeCurrency;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var handleAcceptFilter = function handleAcceptFilter() {
    handleChangeFilterValues(filterValues);
    handleCloseFilterModal();
  };
  var handleClearFilter = function handleClearFilter() {
    handleResetFilterValues();
    handleChangeFilterValues({});
  };
  return /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    padding: "0px",
    open: open,
    onClose: function onClose() {
      return handleCloseFilterModal();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.FilterGroupListContainer, {
    className: "filter-modal"
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('FILTER', 'Filter')), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "ID",
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId) || '',
    onChange: function onChange(e) {
      return handleChangeOrderId(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_DriversGroupTypeSelector.DriversGroupTypeSelector, {
    driverGroupList: driverGroupList,
    handleChangeGroup: handleChangeGroup,
    filterValues: filterValues
  }), /*#__PURE__*/_react.default.createElement(_DateTypeSelector.DateTypeSelector, {
    filterValues: filterValues,
    handleChangeDateType: handleChangeDateType,
    handleChangeFromDate: handleChangeFromDate,
    handleChangeEndDate: handleChangeEndDate
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_BusinessesSelector.BusinessesSelector, {
    filterValues: filterValues,
    businessesList: businessesList,
    handleChangeBusinesses: handleChangeBusinesses
  }), /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
    isFilterView: true,
    drivers: driversList.drivers,
    filterValues: filterValues,
    handleChangeDriver: handleChangeDriver
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_Shared.CitySelector, {
    cities: citiesList,
    filterValues: filterValues,
    handleChangeCity: handleChangeCity
  }), /*#__PURE__*/_react.default.createElement(_styles2.MultiSelectContainer, null, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
    isFilterView: true,
    filterValues: filterValues,
    handleChangeOrderStatus: handleChangeOrderStatus
  }))), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_DeliveryTypeSelector.DeliveryTypeSelector, {
    filterValues: filterValues,
    handleChangeDeliveryType: handleChangeDeliveryType
  }), /*#__PURE__*/_react.default.createElement(_PaymethodTypeSelector.PaymethodTypeSelector, {
    paymethodsList: paymethodsList,
    filterValues: filterValues,
    handleChangePaymethodType: handleChangePaymethodType
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_CountryFilter.CountryFilter, {
    filterValues: filterValues,
    handleChangeCountryCode: handleChangeCountryCode
  }), /*#__PURE__*/_react.default.createElement(_CurrencyFilter.CurrencyFilter, {
    filterValues: filterValues,
    handleChangeCurrency: handleChangeCurrency
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleAcceptFilter();
    }
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleClearFilter();
    }
  }, t('CLEAR', 'Clear')))));
};
var OrdersFilterGroup = function OrdersFilterGroup(props) {
  var FilterControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersFilterGroupUI,
    driverGroupList: props.driverGroupList
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.OrdersFilter, FilterControlProps));
};
exports.OrdersFilterGroup = OrdersFilterGroup;