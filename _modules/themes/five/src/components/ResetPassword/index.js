"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetPassword = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _Confirm = require("../Confirm");
var _orderingComponentsExternal = require("ordering-components-external");
var _styles = require("./styles");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _styledComponents = require("styled-components");
var _LoginForm = require("../LoginForm");
var _Modal = require("../Modal");
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
var ResetPasswordUI = function ResetPasswordUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _theme$images, _theme$images$logos, _formState$result5, _formState$result5$re, _formState$result6, _formState$result6$re, _theme$images2, _theme$images2$logos, _props$afterMidElemen, _props$afterMidCompon, _props$afterComponent, _props$afterElements;
  var code = props.code,
    random = props.random,
    formState = props.formState,
    resetPasswordData = props.resetPasswordData,
    handleResetPassword = props.handleResetPassword,
    handleChangeInput = props.handleChangeInput,
    redirectResetPassword = props.redirectResetPassword;
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors,
    watch = _useForm.watch;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openAuthModal = _useState4[0],
    setOpenAuthModal = _useState4[1];
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var password = (0, _react.useRef)({});
  password.current = watch('password', '');
  var onSubmit = function onSubmit() {
    if (code && random) {
      handleResetPassword();
    } else {
      redirectResetPassword && redirectResetPassword(resetPasswordData);
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) {
      setOpenAuthModal(false);
    }
  };
  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result3, _formState$result3$re, _formState$result4, _formState$result4$re;
    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    } else if (!formState.loading && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && (_formState$result3$re = _formState$result3.result) !== null && _formState$result3$re !== void 0 && _formState$result3$re.length) {
      setAlertState({
        open: true,
        content: t('PASSWORD_RESET_SUCCESS', 'Password changed successfully')
      });
    }
    if (!formState.loading && ((_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : (_formState$result4$re = _formState$result4.result) === null || _formState$result4$re === void 0 ? void 0 : _formState$result4$re.length) > 0 && !formState.result.error) {
      setOpenAuthModal(true);
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    return function () {
      return closeAlert();
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ResetPasswordContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeroSide, null, /*#__PURE__*/_react.default.createElement(_styles.TitleHeroSide, null, /*#__PURE__*/_react.default.createElement("h1", null, t('TITLE_RESET_PASSWORD', 'Reset password')), /*#__PURE__*/_react.default.createElement("p", null, code && random ? t('SUBTITLE_RESET_PASSWORD', 'Reset your password') : t('RESET_PASSWORD_CODES_TITLE', 'Please insert the codes')))), (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), code && random ? /*#__PURE__*/_react.default.createElement(_styles.FormSide, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.logotype,
    alt: "Logo",
    width: "200",
    height: "66",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    noValidate: true,
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "password",
    name: "password",
    "aria-label": "password",
    spellcheck: "false",
    ref: register({
      required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field password is required'),
      minLength: {
        value: 8,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    }),
    placeholder: t('NEW_PASSWORD', 'New passowrd'),
    onChange: handleChangeInput,
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "password",
    name: "confirm-password",
    "aria-label": "confirm-password",
    spellcheck: "false",
    ref: register({
      required: t('VALIDATION_ERROR_PASSWORD_CONFIRM_REQUIRED', 'The field password confirm is required'),
      validate: function validate(value) {
        return value === password.current || t('VALIDATION_ERROR_PASSWORDS_MATCH', 'The passwords do not match');
      }
    }),
    placeholder: t('CONFIRM_PASSWORD', 'Confirm Password'),
    onChange: handleChangeInput,
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "submit",
    color: formState.loading || (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && (_formState$result5$re = _formState$result5.result) !== null && _formState$result5$re !== void 0 && _formState$result5$re.length ? 'secondary' : 'primary',
    disabled: formState.loading || ((_formState$result6 = formState.result) === null || _formState$result6 === void 0 ? void 0 : (_formState$result6$re = _formState$result6.result) === null || _formState$result6$re === void 0 ? void 0 : _formState$result6$re.length)
  }, !formState.loading ? t('CHANGE_PASSWORD', 'Change password') : t('LOADING', 'Loading')))) : /*#__PURE__*/_react.default.createElement(_styles.FormSide, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.logotype,
    alt: "Logo",
    width: "200",
    height: "66",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    noValidate: true,
    onSubmit: handleSubmit(onSubmit)
  }, !code && /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "code",
    "aria-label": "code",
    ref: register({
      required: t('RESET_PASSWORD_CODE_REQUIRED', 'The field code is required')
    }),
    placeholder: t('CODE', 'Code'),
    onChange: handleChangeInput,
    autoComplete: "off"
  }), !random && /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "random",
    "aria-label": "random",
    ref: register({
      required: t('RESET_PASSWORD_RANDOM_REQUIRED', 'The field random is required')
    }),
    placeholder: t('RAMDON', 'Random'),
    onChange: handleChangeInput,
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "submit",
    color: "primary"
  }, t('SUBMIT_CODES', 'Submit codes')))), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), openAuthModal && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openAuthModal,
    onClose: function onClose() {
      return setOpenAuthModal(false);
    },
    width: "700px"
  }, /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
    handleSuccessLogin: handleSuccessLogin,
    useLoginByCellphone: true,
    isPopup: true
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('RESET_PASSWORD', 'Reset Password'),
    content: alertState === null || alertState === void 0 ? void 0 : alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var ResetPassword = function ResetPassword(props) {
  var resetPasswordProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ResetPasswordUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.ResetPassword, resetPasswordProps);
};
exports.ResetPassword = ResetPassword;