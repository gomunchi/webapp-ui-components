"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewDriver = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _orderingComponentsExternal = require("ordering-components-external");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _Confirm = require("../Confirm");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var ReviewDriverUI = function ReviewDriverUI(props) {
  var _props$beforeElements, _props$beforeComponen, _order$driver, _order$driver2, _order$driver3, _order$driver4, _commentsList, _commentsList2, _commentsList2$list, _props$afterMidElemen, _props$afterMidCompon, _props$afterComponent, _props$afterElements;
  var dirverReviews = props.dirverReviews,
    order = props.order,
    formState = props.formState,
    setDriverReviews = props.setDriverReviews,
    closeReviewDriver = props.closeReviewDriver,
    setIsDriverReviewed = props.setIsDriverReviewed,
    handleSendDriverReview = props.handleSendDriverReview;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    comments = _useState2[0],
    setComments = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    extraComment = _useState4[0],
    setExtraComment = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: [],
      success: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var commentsList = (0, _utils.reviewCommentList)('driver');
  var qualificationList = [{
    key: 1,
    text: t('TERRIBLE', 'Terrible'),
    middleNode: false,
    left: 0,
    right: 'initial'
  }, {
    key: 2,
    text: t('BAD', 'Bad'),
    middleNode: true,
    left: '25%',
    right: '75%'
  }, {
    key: 3,
    text: t('OKAY', 'Okay'),
    middleNode: true,
    left: '50%',
    right: '50%'
  }, {
    key: 4,
    text: t('GOOD', 'Good'),
    middleNode: true,
    left: '75%',
    right: '25%'
  }, {
    key: 5,
    text: t('GREAT', 'Great'),
    middleNode: false,
    left: 'initial',
    right: 0
  }];
  var handleChangeReviews = function handleChangeReviews(index) {
    if (index) setDriverReviews(_objectSpread(_objectSpread({}, dirverReviews), {}, {
      qualification: index,
      comment: ''
    }));
    setComments([]);
  };
  var onSubmit = function onSubmit(values) {
    if ((dirverReviews === null || dirverReviews === void 0 ? void 0 : dirverReviews.qualification) === 0) {
      setAlertState({
        open: true,
        content: ["".concat(t('REVIEW_QUALIFICATION_REQUIRED', 'Review qualification is required'))]
      });
      return;
    }
    setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
      success: true
    }));
    handleSendDriverReview();
  };
  var handleChangeComment = function handleChangeComment(commentItem) {
    var found = comments.find(function (comment) {
      return (comment === null || comment === void 0 ? void 0 : comment.key) === commentItem.key;
    });
    if (found) {
      var _comments = comments.filter(function (comment) {
        return (comment === null || comment === void 0 ? void 0 : comment.key) !== commentItem.key;
      });
      setComments(_comments);
    } else {
      setComments([].concat(_toConsumableArray(comments), [commentItem]));
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var isSelectedComment = function isSelectedComment(commentKey) {
    var found = comments.find(function (comment) {
      return (comment === null || comment === void 0 ? void 0 : comment.key) === commentKey;
    });
    return found;
  };
  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result3;
    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        success: false,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
    if (!formState.loading && !((_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.error) && alertState.success) {
      setIsDriverReviewed && setIsDriverReviewed(true);
      closeReviewDriver && closeReviewDriver();
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        success: false,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    var _comments = '';
    if (comments.length > 0) {
      comments.map(function (comment) {
        return _comments += comment.content + '. ';
      });
    }
    var _comment = _comments + extraComment;
    setDriverReviews(_objectSpread(_objectSpread({}, dirverReviews), {}, {
      comment: _comment
    }));
  }, [comments, extraComment]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.LogoAndReviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverPhoto, null, order !== null && order !== void 0 && (_order$driver = order.driver) !== null && _order$driver !== void 0 && _order$driver.photo ? /*#__PURE__*/_react.default.createElement(_styles.DriverPhoto, {
    bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo, 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), (order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.name) && /*#__PURE__*/_react.default.createElement(_styles.DriverInfoBlock, null, order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.name), /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('HOW_WAS_YOUR_DRIVER', 'How was your driver?')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressContent, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressBar, {
    style: {
      width: "".concat(((dirverReviews === null || dirverReviews === void 0 ? void 0 : dirverReviews.qualification) === 0 ? 0 : ((dirverReviews === null || dirverReviews === void 0 ? void 0 : dirverReviews.qualification) - 1) / 4) * 100, "%")
    }
  }), qualificationList === null || qualificationList === void 0 ? void 0 : qualificationList.map(function (qualification) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
      key: qualification === null || qualification === void 0 ? void 0 : qualification.key,
      style: {
        left: theme.rtl ? qualification !== null && qualification !== void 0 && qualification.middleNode ? 'initial' : qualification === null || qualification === void 0 ? void 0 : qualification.right : qualification === null || qualification === void 0 ? void 0 : qualification.left,
        right: theme !== null && theme !== void 0 && theme.rtl ? qualification === null || qualification === void 0 ? void 0 : qualification.left : qualification !== null && qualification !== void 0 && qualification.middleNode ? 'initial' : qualification === null || qualification === void 0 ? void 0 : qualification.right
      },
      active: (dirverReviews === null || dirverReviews === void 0 ? void 0 : dirverReviews.qualification) === (qualification === null || qualification === void 0 ? void 0 : qualification.key),
      pass: (dirverReviews === null || dirverReviews === void 0 ? void 0 : dirverReviews.qualification) >= (qualification === null || qualification === void 0 ? void 0 : qualification.key),
      className: qualification !== null && qualification !== void 0 && qualification.middleNode ? 'mark-point' : '',
      onClick: function onClick() {
        return handleChangeReviews(qualification === null || qualification === void 0 ? void 0 : qualification.key);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, qualification === null || qualification === void 0 ? void 0 : qualification.text, /*#__PURE__*/_react.default.createElement("span", null)));
  }))), /*#__PURE__*/_react.default.createElement(_styles.CommentsList, null, /*#__PURE__*/_react.default.createElement("p", null, (_commentsList = commentsList[(dirverReviews === null || dirverReviews === void 0 ? void 0 : dirverReviews.qualification) || 1]) === null || _commentsList === void 0 ? void 0 : _commentsList.title), (_commentsList2 = commentsList[(dirverReviews === null || dirverReviews === void 0 ? void 0 : dirverReviews.qualification) || 1]) === null || _commentsList2 === void 0 ? void 0 : (_commentsList2$list = _commentsList2.list) === null || _commentsList2$list === void 0 ? void 0 : _commentsList2$list.map(function (commentItem, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.CommentButton, {
      key: i,
      active: isSelectedComment(commentItem.key),
      onClick: function onClick() {
        return handleChangeComment(commentItem);
      },
      initialIcon: true
    }, commentItem.content, isSelectedComment(commentItem.key) && /*#__PURE__*/_react.default.createElement(_MdClose.default, null));
  }))), /*#__PURE__*/_react.default.createElement(_styles.ReviewDriverContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.Comments, null, /*#__PURE__*/_react.default.createElement("p", null, t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    name: "comment",
    value: extraComment,
    onChange: function onChange(e) {
      return setExtraComment(e.target.value);
    },
    autoComplete: "off"
  })), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ActionBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !formState.loading ? 'primary' : 'secondary',
    type: "submit",
    disabled: formState.loading,
    className: "review-sent"
  }, !formState.loading ? t('SEND_REVIEW', 'Send review') : t('LOADING', 'Loading'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('DRIVER_REVIEW', 'Driver Review'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var ReviewDriver = function ReviewDriver(props) {
  var reviewDriverProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReviewDriverUI,
    isToast: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.ReviewDriver, reviewDriverProps);
};
exports.ReviewDriver = ReviewDriver;