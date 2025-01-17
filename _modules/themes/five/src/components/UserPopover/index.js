"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPopover = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _reactPopper = require("react-popper");
var _styles = require("./styles");
var _style = require("../../../../../components/Dropdown/style");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _utils = require("../../../../../utils");
var _AiOutlineMenu = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineMenu"));
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var UserPopover = function UserPopover(props) {
  var _configs$cash_wallet, _configs$wallet_enabl, _configs$wallet_cash_, _configs$wallet_credi, _configs$advanced_off, _configs$advanced_off2, _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _orderingTheme$theme$5, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _orderingTheme$theme6, _theme$bar_menu, _theme$bar_menu$compo, _theme$bar_menu$compo2, _theme$bar_menu2, _theme$bar_menu2$comp, _theme$bar_menu2$comp2, _theme$bar_menu3, _theme$bar_menu3$comp, _theme$bar_menu3$comp2, _theme$bar_menu4, _theme$bar_menu4$comp, _theme$bar_menu4$comp2, _theme$bar_menu5, _theme$bar_menu5$comp, _theme$bar_menu5$comp2, _theme$bar_menu6, _theme$bar_menu6$comp, _theme$bar_menu6$comp2, _theme$bar_menu7, _theme$bar_menu7$comp, _theme$bar_menu7$comp2, _theme$bar_menu8, _theme$bar_menu8$comp, _theme$bar_menu8$comp2, _theme$bar_menu9, _theme$bar_menu9$comp, _theme$bar_menu9$comp2, _props$beforeElements, _props$beforeComponen, _sessionState$user, _sessionState$user2, _props$afterComponent, _props$afterElements;
  var open = props.open,
    isHome = props.isHome,
    optionsList = props.optionsList,
    withLogout = props.withLogout,
    isCustomerMode = props.isCustomerMode,
    handleOpenAddressModal = props.handleOpenAddressModal;
  var _useSession = (0, _orderingComponentsExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    sessionState = _useSession2[0];
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponentsExternal.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _orderingComponentsExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useOrderingTheme = (0, _orderingComponentsExternal.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderStatus = _useOrder2[0];
  var theme = (0, _styledComponents.useTheme)();
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var arrowElement = (0, _react.useRef)();
  var isWalletEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 ? void 0 : (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && ((configs === null || configs === void 0 ? void 0 : (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1' || (configs === null || configs === void 0 ? void 0 : (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1');
  var isPromotionsEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$advanced_off = configs.advanced_offers_module) === null || _configs$advanced_off === void 0 ? void 0 : _configs$advanced_off.value) === '1' || (configs === null || configs === void 0 ? void 0 : (_configs$advanced_off2 = configs.advanced_offers_module) === null || _configs$advanced_off2 === void 0 ? void 0 : _configs$advanced_off2.value) === true;
  var isAddressListNewPage = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.profile) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.address_list) === null || _orderingTheme$theme$3 === void 0 ? void 0 : (_orderingTheme$theme$4 = _orderingTheme$theme$3.components) === null || _orderingTheme$theme$4 === void 0 ? void 0 : (_orderingTheme$theme$5 = _orderingTheme$theme$4.layout) === null || _orderingTheme$theme$5 === void 0 ? void 0 : _orderingTheme$theme$5.position) === 'new_page';
  var isChew = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme2 = orderingTheme.theme) === null || _orderingTheme$theme2 === void 0 ? void 0 : (_orderingTheme$theme3 = _orderingTheme$theme2.header) === null || _orderingTheme$theme3 === void 0 ? void 0 : (_orderingTheme$theme4 = _orderingTheme$theme3.components) === null || _orderingTheme$theme4 === void 0 ? void 0 : (_orderingTheme$theme5 = _orderingTheme$theme4.layout) === null || _orderingTheme$theme5 === void 0 ? void 0 : (_orderingTheme$theme6 = _orderingTheme$theme5.type) === null || _orderingTheme$theme6 === void 0 ? void 0 : _orderingTheme$theme6.toLowerCase()) === 'chew';
  var hideBrowse = theme === null || theme === void 0 ? void 0 : (_theme$bar_menu = theme.bar_menu) === null || _theme$bar_menu === void 0 ? void 0 : (_theme$bar_menu$compo = _theme$bar_menu.components) === null || _theme$bar_menu$compo === void 0 ? void 0 : (_theme$bar_menu$compo2 = _theme$bar_menu$compo.browse) === null || _theme$bar_menu$compo2 === void 0 ? void 0 : _theme$bar_menu$compo2.hidden;
  var hideOrders = theme === null || theme === void 0 ? void 0 : (_theme$bar_menu2 = theme.bar_menu) === null || _theme$bar_menu2 === void 0 ? void 0 : (_theme$bar_menu2$comp = _theme$bar_menu2.components) === null || _theme$bar_menu2$comp === void 0 ? void 0 : (_theme$bar_menu2$comp2 = _theme$bar_menu2$comp.orders) === null || _theme$bar_menu2$comp2 === void 0 ? void 0 : _theme$bar_menu2$comp2.hidden;
  var hideProfile = theme === null || theme === void 0 ? void 0 : (_theme$bar_menu3 = theme.bar_menu) === null || _theme$bar_menu3 === void 0 ? void 0 : (_theme$bar_menu3$comp = _theme$bar_menu3.components) === null || _theme$bar_menu3$comp === void 0 ? void 0 : (_theme$bar_menu3$comp2 = _theme$bar_menu3$comp.profile) === null || _theme$bar_menu3$comp2 === void 0 ? void 0 : _theme$bar_menu3$comp2.hidden;
  var hideWallet = theme === null || theme === void 0 ? void 0 : (_theme$bar_menu4 = theme.bar_menu) === null || _theme$bar_menu4 === void 0 ? void 0 : (_theme$bar_menu4$comp = _theme$bar_menu4.components) === null || _theme$bar_menu4$comp === void 0 ? void 0 : (_theme$bar_menu4$comp2 = _theme$bar_menu4$comp.wallet) === null || _theme$bar_menu4$comp2 === void 0 ? void 0 : _theme$bar_menu4$comp2.hidden;
  var hideMessages = theme === null || theme === void 0 ? void 0 : (_theme$bar_menu5 = theme.bar_menu) === null || _theme$bar_menu5 === void 0 ? void 0 : (_theme$bar_menu5$comp = _theme$bar_menu5.components) === null || _theme$bar_menu5$comp === void 0 ? void 0 : (_theme$bar_menu5$comp2 = _theme$bar_menu5$comp.messages) === null || _theme$bar_menu5$comp2 === void 0 ? void 0 : _theme$bar_menu5$comp2.hidden;
  var hideHelp = theme === null || theme === void 0 ? void 0 : (_theme$bar_menu6 = theme.bar_menu) === null || _theme$bar_menu6 === void 0 ? void 0 : (_theme$bar_menu6$comp = _theme$bar_menu6.components) === null || _theme$bar_menu6$comp === void 0 ? void 0 : (_theme$bar_menu6$comp2 = _theme$bar_menu6$comp.help) === null || _theme$bar_menu6$comp2 === void 0 ? void 0 : _theme$bar_menu6$comp2.hidden;
  var hideFavorites = theme === null || theme === void 0 ? void 0 : (_theme$bar_menu7 = theme.bar_menu) === null || _theme$bar_menu7 === void 0 ? void 0 : (_theme$bar_menu7$comp = _theme$bar_menu7.components) === null || _theme$bar_menu7$comp === void 0 ? void 0 : (_theme$bar_menu7$comp2 = _theme$bar_menu7$comp.favortes) === null || _theme$bar_menu7$comp2 === void 0 ? void 0 : _theme$bar_menu7$comp2.hidden;
  var hideSession = theme === null || theme === void 0 ? void 0 : (_theme$bar_menu8 = theme.bar_menu) === null || _theme$bar_menu8 === void 0 ? void 0 : (_theme$bar_menu8$comp = _theme$bar_menu8.components) === null || _theme$bar_menu8$comp === void 0 ? void 0 : (_theme$bar_menu8$comp2 = _theme$bar_menu8$comp.sessions) === null || _theme$bar_menu8$comp2 === void 0 ? void 0 : _theme$bar_menu8$comp2.hidden;
  var hidePromotions = theme === null || theme === void 0 ? void 0 : (_theme$bar_menu9 = theme.bar_menu) === null || _theme$bar_menu9 === void 0 ? void 0 : (_theme$bar_menu9$comp = _theme$bar_menu9.components) === null || _theme$bar_menu9$comp === void 0 ? void 0 : (_theme$bar_menu9$comp2 = _theme$bar_menu9$comp.promotions) === null || _theme$bar_menu9$comp2 === void 0 ? void 0 : _theme$bar_menu9$comp2.hidden;
  var optionsDefault = [{
    name: 'search',
    pathname: '/explore',
    displayName: 'My home',
    key: 'my_home',
    isActive: true
  }, {
    name: 'business_search',
    pathname: '/business_search',
    displayName: 'Browse & Search',
    key: 'browse_search',
    isActive: !hideBrowse
  }, {
    name: 'orders',
    pathname: '/profile/orders',
    displayName: 'orders',
    key: 'orders',
    isActive: !hideOrders
  }];
  var extraOptions = [{
    name: 'profile',
    pathname: '/profile',
    displayName: 'view account',
    key: 'view_account',
    isActive: !hideProfile
  }, {
    name: 'wallets',
    pathname: '/wallets',
    displayName: 'wallets',
    key: 'wallets',
    isActive: !hideWallet && isWalletEnabled && !isCustomerMode
  }, {
    name: 'promotions',
    pathname: '/promotions',
    displayName: 'promotions',
    key: 'promotions',
    isActive: !hidePromotions && isPromotionsEnabled
  }, {
    name: 'messages',
    pathname: '/messages',
    displayName: 'messages',
    key: 'messages',
    isActive: !hideMessages && !isCustomerMode
  }, {
    name: 'help',
    pathname: '/help',
    displayName: 'help',
    key: 'help',
    isActive: !hideHelp
  }, {
    name: 'sessions',
    pathname: '/sessions',
    displayName: 'sessions',
    key: 'sessions',
    isActive: !hideSession
  }, {
    name: 'favorite',
    pathname: '/favorite',
    displayName: 'favorites',
    key: 'favorites',
    isActive: !hideFavorites
  }, {
    name: 'addresses',
    pathname: '/profile/addresses',
    displayName: 'places',
    key: 'places',
    isActive: isAddressListNewPage
  }];
  var addressRequiredPageNames = ['business_search', 'promotions'];
  var options = isCustomerMode ? optionsDefault.filter(function (option) {
    return option.name === 'profile';
  }) : optionsList || optionsDefault;
  var popper = (0, _reactPopper.usePopper)(referenceElement.current, popperElement.current, {
    placement: 'auto',
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement.current
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 12]
      }
    }]
  });
  var styles = popper.styles,
    attributes = popper.attributes;
  (0, _react.useEffect)(function () {
    // forceUpdate && forceUpdate()
  }, [open, sessionState]);
  var handleClickOutside = function handleClickOutside(e) {
    var _popperElement$curren, _referenceElement$cur;
    if (!open) return;
    var outsidePopover = !((_popperElement$curren = popperElement.current) !== null && _popperElement$curren !== void 0 && _popperElement$curren.contains(e.target));
    var outsidePopoverMenu = !((_referenceElement$cur = referenceElement.current) !== null && _referenceElement$cur !== void 0 && _referenceElement$cur.contains(e.target));
    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose();
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 27) {
      props.onClose && props.onClose();
    }
  };
  var handleGoToPage = function handleGoToPage(page) {
    var _orderStatus$options, _orderStatus$options$;
    if (!((_orderStatus$options = orderStatus.options) !== null && _orderStatus$options !== void 0 && (_orderStatus$options$ = _orderStatus$options.address) !== null && _orderStatus$options$ !== void 0 && _orderStatus$options$.location) && addressRequiredPageNames.includes(page)) {
      handleOpenAddressModal();
    } else {
      events.emit('go_to_page', {
        page: page
      });
    }
    props.onClick && props.onClick();
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('mouseup', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  var popStyle = _objectSpread(_objectSpread({}, styles.popper), {}, {
    visibility: open ? 'visible' : 'hidden',
    minWidth: '150px'
  });
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)';
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
    isPhoto: sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.photo,
    isHome: isHome,
    isChew: isChew,
    ref: referenceElement,
    isOpen: open,
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineMenu.default, {
    className: "menu-list"
  }), /*#__PURE__*/_react.default.createElement(_styles.UserImgWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.RoundMark, null), /*#__PURE__*/_react.default.createElement(_style.DropDownCircleImage, {
    src: sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }))), /*#__PURE__*/_react.default.createElement(_styles.PopoverBody, _extends({
    ref: popperElement,
    style: popStyle
  }, attributes.popper), /*#__PURE__*/_react.default.createElement(_styles.PopoverList, null, options && options.length > 0 && options.filter(function (option) {
    return option.isActive;
  }).map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.PopoverListLink, {
      key: i,
      active: window.location.pathname === option.pathname,
      onClick: function onClick() {
        return handleGoToPage(option.name);
      }
    }, t((option.key || option.name).toUpperCase(), (0, _utils.capitalize)(option.displayName || option.name)));
  }), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_styles.ExtraOptions, null, extraOptions && extraOptions.length > 0 && extraOptions.map(function (option, i) {
    return option.isActive && /*#__PURE__*/_react.default.createElement(_styles.PopoverListLink, {
      key: i,
      active: window.location.pathname === option.pathname,
      onClick: function onClick() {
        return handleGoToPage(option.name);
      }
    }, t((option.key || option.name).toUpperCase(), (0, _utils.capitalize)(option.displayName || option.name)));
  }), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), withLogout && /*#__PURE__*/_react.default.createElement(PopoverListItemLogout, {
    onClose: props.onClose
  })))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.UserPopover = UserPopover;
var LogoutActionUI = function LogoutActionUI(props) {
  var _useLanguage3 = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useEvent3 = (0, _orderingComponentsExternal.useEvent)(),
    _useEvent4 = _slicedToArray(_useEvent3, 1),
    events = _useEvent4[0];
  var _useCustomer = (0, _orderingComponentsExternal.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;
  var handleClick = function handleClick() {
    var _window, _window$gapi, _window$gapi$auth;
    var GoogleAuth = (_window = window) === null || _window === void 0 ? void 0 : (_window$gapi = _window.gapi) === null || _window$gapi === void 0 ? void 0 : (_window$gapi$auth = _window$gapi.auth2) === null || _window$gapi$auth === void 0 ? void 0 : _window$gapi$auth.getAuthInstance();
    if (GoogleAuth) {
      var signedIn = GoogleAuth.isSignedIn.get();
      if (signedIn) {
        GoogleAuth.signOut().then(function () {
          GoogleAuth.disconnect();
        });
      }
    }
    deleteUserCustomer(true);
    props.handleLogoutClick();
    props.onClose && props.onClose();
    events.emit('go_to_page', {
      page: 'home'
    });
  };
  return /*#__PURE__*/_react.default.createElement(_styles.PopoverListItem, {
    onClick: handleClick
  }, t('LOGOUT', 'Logout'));
};
var PopoverListItemLogout = function PopoverListItemLogout(props) {
  var logoutActionProps = {
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  };
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.LogoutAction, logoutActionProps);
};