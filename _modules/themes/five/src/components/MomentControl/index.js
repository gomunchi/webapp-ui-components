"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsExternal = require("ordering-components-external");
require("react-datepicker/dist/react-datepicker.css");
var _BsCaretLeftFill = _interopRequireDefault(require("@meronex/icons/bs/BsCaretLeftFill"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _CustomLayout = require("./Layouts/CustomLayout");
var _styles = require("./styles");
var _CgRadioCheck = _interopRequireDefault(require("@meronex/icons/cg/CgRadioCheck"));
var _Buttons = require("../../styles/Buttons");
var _react2 = require("swiper/react");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper-bundle.min.css");
require("swiper/swiper.min.css");
var _utils = require("../../../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_swiper.default.use([_swiper.Navigation]);
var MomentControlUI = function MomentControlUI(props) {
  var _configs$general_hour, _configs$general_hour2, _props$beforeElements, _props$beforeComponen, _configs$max_days_pre, _configs$max_days_pre2, _configs$max_days_pre3, _props$afterComponent, _props$afterElements;
  var isAsap = props.isAsap,
    datesList = props.datesList,
    hoursList = props.hoursList,
    dateSelected = props.dateSelected,
    timeSelected = props.timeSelected,
    handleAsap = props.handleAsap,
    handleChangeDate = props.handleChangeDate,
    handleChangeTime = props.handleChangeTime,
    onClose = props.onClose,
    isAppoint = props.isAppoint;
  var _useConfig = (0, _orderingComponentsExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var is12hours = configs === null || configs === void 0 ? void 0 : (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 ? void 0 : (_configs$general_hour2 = _configs$general_hour.value) === null || _configs$general_hour2 === void 0 ? void 0 : _configs$general_hour2.includes('hh:mm');
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseTime = _useUtils2[0].parseTime;
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isASP = _useState2[0],
    setIsASP = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    timeList = _useState4[0],
    setTimeList = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    scheduleList = _useState6[0],
    setScheduleList = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    isEnabled = _useState8[0],
    setIsEnabled = _useState8[1];
  var handleCheckBoxChange = function handleCheckBoxChange(index) {
    if (index) {
      !orderState.loading && handleAsap();
      setIsASP(true);
    } else setIsASP(false);
  };
  var validateSelectedDate = function validateSelectedDate(curdate, schedule) {
    var day = (0, _moment.default)(curdate).format('d');
    setIsEnabled(schedule[day].enabled);
  };
  var getTimes = function getTimes(curdate, schedule) {
    var _curdate$split;
    validateSelectedDate(curdate, schedule);
    var dateParts = curdate === null || curdate === void 0 ? void 0 : (_curdate$split = curdate.split) === null || _curdate$split === void 0 ? void 0 : _curdate$split.call(curdate, '-');
    var dateSeleted = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    var times = (0, _utils.getTimes)(dateSeleted, schedule, is12hours);
    return times;
  };
  var setLocalMoment = function setLocalMoment() {
    _moment.default.updateLocale('custom', {
      months: [t('MONTH1', 'January'), t('MONTH2', 'February'), t('MONTH3', 'March'), t('MONTH4', 'April'), t('MONTH5', 'May'), t('MONTH6', 'June'), t('MONTH7', 'July'), t('MONTH8', 'August'), t('MONTH9', 'September'), t('MONTH10', 'October'), t('MONTH11', 'November'), t('MONTH12', 'December')],
      monthsShort: [t('MONTHSHORT1', 'Jan'), t('MONTHSHORT2', 'Feb'), t('MONTHSHORT3', 'Mar'), t('MONTHSHORT4', 'Apr'), t('MONTHSHORT5', 'May'), t('MONTHSHORT6', 'Jun'), t('MONTHSHORT7', 'Jul'), t('MONTHSHORT8', 'Aug'), t('MONTHSHORT9', 'Sep'), t('MONTHSHORT10', 'Oct'), t('MONTHSHORT11', 'Nov'), t('MONTHSHORT12', 'Dec')],
      weekdays: [t('DAY7', 'Sunday'), t('DAY1', 'Monday'), t('DAY2', 'Tuesday'), t('DAY3', 'Wednesday'), t('DAY4', 'Thursday'), t('DAY5', 'Friday'), t('DAY6', 'Saturday')],
      weekdaysShort: [t('DAYSHORT7', 'Sun'), t('DAYSHORT1', 'Mon'), t('DAYSHORT2', 'Tue'), t('DAYSHORT3', 'Wed'), t('DAYSHORT4', 'Thu'), t('DAYSHORT5', 'Fri'), t('DAYSHORT6', 'Sat')],
      weekdaysMin: [t('DAYMIN7', 'Su'), t('DAYMIN1', 'Mo'), t('DAYMIN2', 'Tu'), t('DAYMIN3', 'We'), t('DAYMIN4', 'Th'), t('DAYMIN5', 'Fr'), t('DAYMIN6', 'Sa')],
      meridiem: function meridiem(hours) {
        return hours < 12 ? t('AM', 'AM') : t('PM', 'PM');
      }
    });
  };
  (0, _react.useEffect)(function () {
    var _timeLists = [];
    if (!scheduleList) {
      _timeLists = hoursList.map(function (hour) {
        return {
          value: hour.startTime,
          text: is12hours ? hour.startTime.includes('12') ? "".concat(hour.startTime, "PM") : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
            outputFormat: 'hh:mma'
          }) : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
            outputFormat: 'HH:mm'
          })
        };
      });
      setIsEnabled(true);
    } else {
      _timeLists = getTimes(dateSelected, scheduleList);
    }
    setTimeList(_timeLists);
  }, [dateSelected, hoursList, scheduleList]);
  (0, _react.useEffect)(function () {
    handleCheckBoxChange(isAsap);
  }, [isAsap]);
  (0, _react.useEffect)(function () {
    if (!pathname.includes('store')) {
      setScheduleList(null);
      return;
    }
    var schedules = JSON.parse(window.localStorage.getItem('business_schedule'));
    setScheduleList(schedules);
  }, [pathname]);
  (0, _react.useEffect)(function () {
    setLocalMoment();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "moment_control"
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !isAppoint && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('WHEN_DO_WE_DELIVERY', 'When do we delivery?')), /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
    highlight: isAsap && isASP,
    onClick: function onClick() {
      return handleCheckBoxChange(true);
    },
    isLoading: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, isASP ? /*#__PURE__*/_react.default.createElement(_styles.CheckedIcon, null) : /*#__PURE__*/_react.default.createElement(_CgRadioCheck.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('CHECKOUT_ASAP', 'ASAP'), " (", (0, _moment.default)(new Date()).format('LLLL'), " - ", t('DELIVERY_TIME', 'delivery time'), ")")), /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
    highlight: !isASP,
    onClick: function onClick() {
      return handleCheckBoxChange(null);
    }
  }, isASP ? /*#__PURE__*/_react.default.createElement(_CgRadioCheck.default, null) : /*#__PURE__*/_react.default.createElement(_styles.CheckedIcon, null), /*#__PURE__*/_react.default.createElement("span", null, t('SCHEDULE_FOR_LATER', 'Schedule for later')))), (!isASP || isAppoint) && (!props.isCustomLayout ? /*#__PURE__*/_react.default.createElement(_styles.OrderTimeWrapper, null, !isAppoint && /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_TIME', 'Order time')), /*#__PURE__*/_react.default.createElement(_styles.DateWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.MonthYearLayer, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _moment.default)(dateSelected).format('MMMM, yyyy'))), /*#__PURE__*/_react.default.createElement(_styles.DaysSwiper, {
    left: /*#__PURE__*/_react.default.createElement(_BsCaretLeftFill.default, null)
  }, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    spaceBetween: 0,
    navigation: true,
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      400: {
        slidesPerView: 5,
        spaceBetween: 0
      },
      550: {
        slidesPerView: 6,
        spaceBetween: 0
      },
      769: {
        slidesPerView: (configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre = configs.max_days_preorder) === null || _configs$max_days_pre === void 0 ? void 0 : _configs$max_days_pre.value) < 7 ? configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre2 = configs.max_days_preorder) === null || _configs$max_days_pre2 === void 0 ? void 0 : _configs$max_days_pre2.value : 7,
        spaceBetween: 0
      }
    },
    freeMode: true,
    watchSlidesProgress: true,
    className: "swiper-datelist",
    preventClicksPropagation: false
  }, datesList.slice(0, Number((configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre3 = configs.max_days_preorder) === null || _configs$max_days_pre3 === void 0 ? void 0 : _configs$max_days_pre3.value) || 6, 10)).map(function (date) {
    var dateParts = date.split('-');
    var _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    var dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 2);
    var dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate();
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: dayNumber
    }, /*#__PURE__*/_react.default.createElement(_styles.Day, {
      selected: dateSelected === date,
      onClick: function onClick() {
        return handleChangeDate(date);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.DayName, {
      isAppoint: isAppoint
    }, dayName), /*#__PURE__*/_react.default.createElement(_styles.DayNumber, {
      isAppoint: isAppoint
    }, dayNumber)));
  })))), /*#__PURE__*/_react.default.createElement(_styles.TimeListWrapper, null, isEnabled && (timeList === null || timeList === void 0 ? void 0 : timeList.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, timeList.map(function (time, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.TimeItem, {
      key: i,
      active: timeSelected === time.value,
      onClick: function onClick() {
        return handleChangeTime(time.value);
      },
      isAppoint: isAppoint
    }, /*#__PURE__*/_react.default.createElement("span", null, time.text));
  })) : /*#__PURE__*/_react.default.createElement(_styles.ClosedBusinessMsg, null, t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The business is closed at the moment')))) : /*#__PURE__*/_react.default.createElement(_CustomLayout.CustomLayout, {
    handleChangeDate: handleChangeDate,
    datesList: datesList,
    hoursList: hoursList,
    isEnabled: isEnabled,
    timeList: timeList,
    timeSelected: timeSelected,
    handleChangeTime: handleChangeTime
  })), !isAppoint && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, t('CONTINUE', 'Continue')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowRight, null))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var MomentControl = function MomentControl(props) {
  var momentProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MomentControlUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.MomentOption, momentProps);
};
exports.MomentControl = MomentControl;