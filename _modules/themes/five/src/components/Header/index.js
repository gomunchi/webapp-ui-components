"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Header = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsExternal = require("ordering-components-external");
var _styledComponents = require("styled-components");
var _AiOutlineClose = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineClose"));
var _LanguageSelector = require("../../../../../components/LanguageSelector");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _TiWarningOutline = _interopRequireDefault(require("@meronex/icons/ti/TiWarningOutline"));
var _OrderTypeSelectorContent = require("../OrderTypeSelectorContent");
var _styles = require("./styles");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _useOnlineStatus = require("../../../../../hooks/useOnlineStatus");
var _UserPopover = require("../UserPopover");
var _CartPopover = require("../CartPopover");
var _OrderTypeSelectorHeader = require("../OrderTypeSelectorHeader");
var _CartContent = require("../CartContent");
var _Modal = require("../Modal");
var _MomentContent = require("../MomentContent");
var _AddressList = require("../AddressList");
var _AddressForm = require("../AddressForm");
var _HeaderOption = require("../HeaderOption");
var _SidebarMenu = require("../SidebarMenu");
var _UserDetails = require("../UserDetails");
var _Confirm = require("../Confirm");
var _LoginForm = require("../LoginForm");
var _SignUpForm = require("../SignUpForm");
var _ForgotPasswordForm = require("../ForgotPasswordForm");
var _utils = require("../../../../../utils");
var _BusinessPreorder = require("../BusinessPreorder");
var _SearchBar = require("../SearchBar");
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
var Header = function Header(props) {
  var _window$location$path, _configState$configs, _configState$configs$, _configState$configs2, _configState$configs3, _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _theme$header, _theme$header$compone, _theme$header$compone2, _orderState$options, _orderState$options2, _Object$keys, _customerState$user, _orderState$options5, _orderState$options5$, _theme$images, _theme$images$logos, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _orderingTheme$theme6, _orderingTheme$theme7, _orderingTheme$theme8, _theme$images2, _theme$images2$logos, _theme$images3, _theme$images3$logos, _theme$images4, _theme$images4$logos, _orderingTheme$theme9, _orderingTheme$theme10, _orderingTheme$theme11, _orderingTheme$theme12, _orderingTheme$theme13, _orderingTheme$theme14, _orderingTheme$theme15, _theme$images5, _theme$images5$logos, _orderState$options7, _orderState$options7$, _orderState$options8, _orderState$options8$, _configState$configs4, _configState$configs5, _configState$configs6, _configState$configs7, _configState$configs8, _configState$configs9, _orderState$options9, _orderState$options10, _configState$configs10, _configState$configs11, _theme$defaultLanguag2, _theme$defaultLanguag3, _orderState$options11, _orderState$options12, _configState$configs14, _configState$configs15, _orderState$options13, _configState$configs16, _configState$configs17, _configState$configs18, _configState$configs19, _orderState$options14, _orderState$options15, _configState$configs20, _configState$configs21, _orderState$options16, _configState$configs22, _configState$configs23, _configState$configs24, _configState$configs25, _orderState$options17, _orderState$options18, _customerState$user2, _customerState$user3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9;
  var isHome = props.isHome,
    location = props.location,
    isShowOrderOptions = props.isShowOrderOptions,
    isHideSignup = props.isHideSignup,
    isCustomerMode = props.isCustomerMode,
    searchValue = props.searchValue,
    setSearchValue = props.setSearchValue,
    businessSlug = props.businessSlug,
    notificationState = props.notificationState;
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var _useEvent = (0, _orderingComponentsExternal.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    auth = _useSession2[0].auth,
    login = _useSession2[1].login;
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    refreshOrderOptions = _useOrder2[1].refreshOrderOptions;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    openPopover = _useState2[0],
    setOpenPopover = _useState2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useConfig = (0, _orderingComponentsExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useCustomer = (0, _orderingComponentsExternal.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    customerState = _useCustomer2[0],
    deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;
  var _useOrderingTheme = (0, _orderingComponentsExternal.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var _useBusiness = (0, _orderingComponentsExternal.useBusiness)(),
    _useBusiness2 = _slicedToArray(_useBusiness, 1),
    business = _useBusiness2[0].business;
  var clearCustomer = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalIsOpen = _useState4[0],
    setModalIsOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    customerModalOpen = _useState6[0],
    setCustomerModalOpen = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    authModalOpen = _useState8[0],
    setAuthModalOpen = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    modalSelected = _useState10[0],
    setModalSelected = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    modalPageToShow = _useState12[0],
    setModalPageToShow = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    preorderBusiness = _useState14[0],
    setPreorderBusiness = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isAddressFormOpen = _useState16[0],
    setIsAddressFormOpen = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isOpenUserData = _useState18[0],
    setIsOpenUserData = _useState18[1];
  var _useState19 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    confirm = _useState20[0],
    setConfirm = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isFarAway = _useState22[0],
    setIsFarAway = _useState22[1];
  var isMulticheckoutPage = (_window$location$path = window.location.pathname) === null || _window$location$path === void 0 ? void 0 : _window$location$path.includes('/multi-checkout');
  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
    var _cart$products;
    return cart.products && ((_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) > 0;
  }) || null;
  var carts = businessSlug ? cartsWithProducts.filter(function (cart) {
    var _cart$business;
    return (cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug) === businessSlug || businessSlug === (cart === null || cart === void 0 ? void 0 : cart.business_id);
  }) : cartsWithProducts;
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var onlineStatus = (0, _useOnlineStatus.useOnlineStatus)();
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var orderTypeList = [t('DELIVERY', 'Delivery'), t('PICKUP', 'Pickup'), t('EAT_IN', 'Eat in'), t('CURBSIDE', 'Curbside'), t('DRIVE_THRU', 'Drive thru'), '', t('CATERING_DELIVERY', 'Catering Delivery'), t('CATERING_PICKUP', 'Catering pickup')];
  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isPreOrderSetting = (configState === null || configState === void 0 ? void 0 : (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.preorder_status_enabled) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === '1';
  var isChew = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.header) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.layout) === null || _orderingTheme$theme$3 === void 0 ? void 0 : (_orderingTheme$theme$4 = _orderingTheme$theme$3.type) === null || _orderingTheme$theme$4 === void 0 ? void 0 : _orderingTheme$theme$4.toLowerCase()) === 'chew';
  var isHideLanguages = theme === null || theme === void 0 ? void 0 : (_theme$header = theme.header) === null || _theme$header === void 0 ? void 0 : (_theme$header$compone = _theme$header.components) === null || _theme$header$compone === void 0 ? void 0 : (_theme$header$compone2 = _theme$header$compone.language_selector) === null || _theme$header$compone2 === void 0 ? void 0 : _theme$header$compone2.hidden;
  var cateringTypeString = (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 7 ? 'catering_delivery' : (orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 8 ? 'catering_pickup' : null;
  var cateringValues = (0, _utils.getCateringValues)(cateringTypeString, pathname.includes('store') && (Object === null || Object === void 0 ? void 0 : (_Object$keys = Object.keys(business || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0 ? business === null || business === void 0 ? void 0 : business.configs : configState === null || configState === void 0 ? void 0 : configState.configs);
  var handleSuccessSignup = function handleSuccessSignup(user) {
    var _user$session;
    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
  };
  var handleClickUserCustomer = function handleClickUserCustomer(e) {
    var _clearCustomer$curren;
    var isActionsClick = (_clearCustomer$curren = clearCustomer.current) === null || _clearCustomer$curren === void 0 ? void 0 : _clearCustomer$curren.contains(e === null || e === void 0 ? void 0 : e.target);
    if (isActionsClick) {
      var _theme$defaultLanguag;
      setConfirm({
        open: true,
        content: t('QUESTION_CLEAR_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.QUESTION_CLEAR_CUSTOMER) || 'Are you sure that you want to clear the customer?'),
        handleOnAccept: function handleOnAccept() {
          deleteUserCustomer(true);
          refreshOrderOptions();
          handleGoToPage({
            page: 'home'
          });
          setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
            open: false
          }));
        }
      });
      return;
    }
    setCustomerModalOpen(true);
  };
  var openModal = function openModal(opt) {
    setModalSelected(opt);
    setModalIsOpen(true);
  };
  var handleTogglePopover = function handleTogglePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, !openPopover[type])));
  };
  var handleClosePopover = function handleClosePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, false)));
  };
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
    if (isCustomerMode && pathname.includes('/orders')) {
      deleteUserCustomer(true);
      refreshOrderOptions();
    }
  };
  var handleCustomModalClick = function handleCustomModalClick(e, _ref) {
    var page = _ref.page;
    e.preventDefault();
    setModalPageToShow(page);
  };
  var closeAuthModal = function closeAuthModal() {
    setAuthModalOpen(false);
    setModalPageToShow(null);
  };
  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) {
      closeAuthModal();
    }
  };
  var handleOpenLoginSignUp = function handleOpenLoginSignUp(index) {
    if (isCustomerMode) {
      events.emit('go_to_page', {
        page: 'home'
      });
    } else {
      setModalPageToShow(index);
      setAuthModalOpen(true);
    }
  };
  var handleClosePreorder = function handleClosePreorder() {
    setPreorderBusiness(null);
  };
  var handleBusinessClick = function handleBusinessClick(business) {
    events.emit('go_to_page', {
      page: 'business',
      params: {
        store: business.slug
      }
    });
  };
  (0, _react.useEffect)(function () {
    if (isCustomerMode) {
      setCustomerModalOpen(false);
    }
  }, [customerState === null || customerState === void 0 ? void 0 : (_customerState$user = customerState.user) === null || _customerState$user === void 0 ? void 0 : _customerState$user.address]);
  (0, _react.useEffect)(function () {
    if (!(pathname.includes('/search') || pathname.includes('/checkout'))) {
      setIsFarAway(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(function (pos) {
      var _orderState$options3, _orderState$options3$, _orderState$options3$2, _orderState$options4, _orderState$options4$, _orderState$options4$2;
      var crd = pos.coords;
      var distance = (0, _utils.getDistance)(crd.latitude, crd.longitude, orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : (_orderState$options3$ = _orderState$options3.address) === null || _orderState$options3$ === void 0 ? void 0 : (_orderState$options3$2 = _orderState$options3$.location) === null || _orderState$options3$2 === void 0 ? void 0 : _orderState$options3$2.lat, orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : (_orderState$options4$ = _orderState$options4.address) === null || _orderState$options4$ === void 0 ? void 0 : (_orderState$options4$2 = _orderState$options4$.location) === null || _orderState$options4$2 === void 0 ? void 0 : _orderState$options4$2.lng);
      if (distance > 20) setIsFarAway(true);else setIsFarAway(false);
    }, function (err) {
      console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }, [orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : (_orderState$options5$ = _orderState$options5.address) === null || _orderState$options5$ === void 0 ? void 0 : _orderState$options5$.location, pathname]);
  return /*#__PURE__*/_react.default.createElement(_styles.Header, {
    isChew: isChew
  }, /*#__PURE__*/_react.default.createElement(_styles.InnerHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LeftSide, null, /*#__PURE__*/_react.default.createElement(_styles.LeftHeader, {
    id: "left-side"
  }, /*#__PURE__*/_react.default.createElement(_SidebarMenu.SidebarMenu, {
    auth: auth,
    isHideSignup: isHideSignup,
    userCustomer: userCustomer,
    isCustomerMode: isCustomerMode
  }), /*#__PURE__*/_react.default.createElement(_styles.LogoHeader, {
    onClick: function onClick() {
      var _orderState$options6, _orderState$options6$;
      return handleGoToPage({
        page: orderState !== null && orderState !== void 0 && (_orderState$options6 = orderState.options) !== null && _orderState$options6 !== void 0 && (_orderState$options6$ = _orderState$options6.address) !== null && _orderState$options6$ !== void 0 && _orderState$options6$.location && !isCustomerMode ? 'search' : 'home'
      });
    },
    isChew: isChew
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: "170px",
    height: isChew ? '35px' : '45px',
    src: isChew ? theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.chewLogo : (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme2 = orderingTheme.theme) === null || _orderingTheme$theme2 === void 0 ? void 0 : (_orderingTheme$theme3 = _orderingTheme$theme2.my_products) === null || _orderingTheme$theme3 === void 0 ? void 0 : (_orderingTheme$theme4 = _orderingTheme$theme3.components) === null || _orderingTheme$theme4 === void 0 ? void 0 : (_orderingTheme$theme5 = _orderingTheme$theme4.images) === null || _orderingTheme$theme5 === void 0 ? void 0 : (_orderingTheme$theme6 = _orderingTheme$theme5.components) === null || _orderingTheme$theme6 === void 0 ? void 0 : (_orderingTheme$theme7 = _orderingTheme$theme6.logo) === null || _orderingTheme$theme7 === void 0 ? void 0 : (_orderingTheme$theme8 = _orderingTheme$theme7.components) === null || _orderingTheme$theme8 === void 0 ? void 0 : _orderingTheme$theme8.image) || (theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.logotype),
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Isotype",
    width: isChew ? '70px' : '35px',
    height: isChew ? '20px' : '45px',
    src: isChew ? theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$logos = _theme$images3.logos) === null || _theme$images3$logos === void 0 ? void 0 : _theme$images3$logos.chewLogo : windowSize.width <= 768 ? theme === null || theme === void 0 ? void 0 : (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$logos = _theme$images4.logos) === null || _theme$images4$logos === void 0 ? void 0 : _theme$images4$logos.isotypeInvert : (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme9 = orderingTheme.theme) === null || _orderingTheme$theme9 === void 0 ? void 0 : (_orderingTheme$theme10 = _orderingTheme$theme9.my_products) === null || _orderingTheme$theme10 === void 0 ? void 0 : (_orderingTheme$theme11 = _orderingTheme$theme10.components) === null || _orderingTheme$theme11 === void 0 ? void 0 : (_orderingTheme$theme12 = _orderingTheme$theme11.images) === null || _orderingTheme$theme12 === void 0 ? void 0 : (_orderingTheme$theme13 = _orderingTheme$theme12.components) === null || _orderingTheme$theme13 === void 0 ? void 0 : (_orderingTheme$theme14 = _orderingTheme$theme13.logo) === null || _orderingTheme$theme14 === void 0 ? void 0 : (_orderingTheme$theme15 = _orderingTheme$theme14.components) === null || _orderingTheme$theme15 === void 0 ? void 0 : _orderingTheme$theme15.image) || (theme === null || theme === void 0 ? void 0 : (_theme$images5 = theme.images) === null || _theme$images5 === void 0 ? void 0 : (_theme$images5$logos = _theme$images5.logos) === null || _theme$images5$logos === void 0 ? void 0 : _theme$images5$logos.isotype),
    loading: "lazy"
  }))), isShowOrderOptions && windowSize.width >= 576 && /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    id: "center-side",
    className: "left-header",
    isCustomerMode: isCustomerMode,
    isChew: isChew
  }, windowSize.width > 850 && isFarAway && /*#__PURE__*/_react.default.createElement(_styles.FarAwayMessage, null, /*#__PURE__*/_react.default.createElement(_TiWarningOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address'))), isCustomerMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.AddressMenu, {
    isCustomerMode: isCustomerMode,
    onClick: function onClick(e) {
      return handleClickUserCustomer(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null), /*#__PURE__*/_react.default.createElement("span", null, ((_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : (_orderState$options7$ = _orderState$options7.address) === null || _orderState$options7$ === void 0 ? void 0 : _orderState$options7$.address) || t('LANG_WHAT_IS_YOUR_ADDRESS', 'What\'s your address?'))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), isCustomerMode && windowSize.width > 450 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, {
    onClick: function onClick(e) {
      return handleClickUserCustomer(e);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name, " ", userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.lastname)), /*#__PURE__*/_react.default.createElement("span", {
    ref: clearCustomer
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineClose.default, null))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), onlineStatus && windowSize.width > 820 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.AddressMenu, {
    onClick: function onClick() {
      return openModal('address');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, ((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : (_orderState$options8$ = _orderState$options8.address) === null || _orderState$options8$ === void 0 ? void 0 : _orderState$options8$.address) || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')))), !isCustomerMode && (isPreOrderSetting || (configState === null || configState === void 0 ? void 0 : (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 ? void 0 : (_configState$configs5 = _configState$configs4.preorder_status_enabled) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value) === undefined) && /*#__PURE__*/_react.default.createElement(_styles.MomentMenu, {
    onClick: (configState === null || configState === void 0 ? void 0 : (_configState$configs6 = configState.configs) === null || _configState$configs6 === void 0 ? void 0 : (_configState$configs7 = _configState$configs6.max_days_preorder) === null || _configState$configs7 === void 0 ? void 0 : _configState$configs7.value) === -1 || (configState === null || configState === void 0 ? void 0 : (_configState$configs8 = configState.configs) === null || _configState$configs8 === void 0 ? void 0 : (_configState$configs9 = _configState$configs8.max_days_preorder) === null || _configState$configs9 === void 0 ? void 0 : _configState$configs9.value) === 0 ? null : function () {
      return openModal('moment');
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, (_orderState$options9 = orderState.options) !== null && _orderState$options9 !== void 0 && _orderState$options9.moment ? parseDate((_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.moment, {
    outputFormat: configState === null || configState === void 0 ? void 0 : (_configState$configs10 = configState.configs) === null || _configState$configs10 === void 0 ? void 0 : (_configState$configs11 = _configState$configs10.dates_moment_format) === null || _configState$configs11 === void 0 ? void 0 : _configState$configs11.value
  }) : t('ASAP_ABBREVIATION', 'ASAP')))), windowSize.width > 768 ? /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    orderTypeList: orderTypeList,
    onClick: function onClick() {
      return openModal('delivery');
    }
  }) : /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "delivery",
    onClick: function onClick(variant) {
      return openModal(variant);
    },
    orderTypeList: orderTypeList
  }))), windowSize.width > 1200 && window.location.pathname === '/search' && /*#__PURE__*/_react.default.createElement(_styles.HeaderSearchMode, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    starbucksStyle: true,
    onSearch: function onSearch(value) {
      return setSearchValue(value);
    },
    handleCustomEnter: function handleCustomEnter() {
      var _configState$configs12, _configState$configs13;
      return (configState === null || configState === void 0 ? void 0 : (_configState$configs12 = configState.configs) === null || _configState$configs12 === void 0 ? void 0 : (_configState$configs13 = _configState$configs12.advanced_business_search_enabled) === null || _configState$configs13 === void 0 ? void 0 : _configState$configs13.value) === '0' || businessSlug ? null : events.emit('go_to_page', {
        page: 'business_search'
      });
    }
  })), onlineStatus && /*#__PURE__*/_react.default.createElement(_styles.RightHeader, {
    id: "right-side"
  }, /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    isCustomerMode: isCustomerMode
  }, !auth && windowSize.width > 920 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    name: "signin",
    highlight: isChew && 1,
    style: {
      whiteSpace: 'nowrap'
    },
    onClick: function onClick() {
      return handleOpenLoginSignUp('login');
    }
  }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.LOGIN) || 'Login')), !isHideSignup && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    name: "signup",
    highlight: 1,
    style: {
      whiteSpace: 'nowrap'
    },
    onClick: function onClick() {
      return handleOpenLoginSignUp('signup');
    }
  }, t('SIGN_UP', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.SIGN_UP) || 'Sign up'))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isShowOrderOptions && (windowSize.width > 768 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isMulticheckoutPage ? /*#__PURE__*/_react.default.createElement(_CartPopover.CartPopover, {
    open: openPopover.cart,
    carts: carts,
    onClick: function onClick() {
      return handleTogglePopover('cart');
    },
    onClose: function onClose() {
      return handleClosePopover('cart');
    },
    auth: auth,
    location: location,
    isCustomerMode: isCustomerMode,
    setPreorderBusiness: setPreorderBusiness
  }) : null) : /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "cart",
    totalCarts: carts === null || carts === void 0 ? void 0 : carts.length,
    onClick: function onClick(variant) {
      return openModal(variant);
    }
  })), windowSize.width > 768 && /*#__PURE__*/_react.default.createElement(_UserPopover.UserPopover, {
    withLogout: true,
    isCustomerMode: isCustomerMode,
    open: openPopover.user,
    handleOpenAddressModal: function handleOpenAddressModal() {
      return openModal('address');
    },
    onClick: function onClick() {
      return handleTogglePopover('user');
    },
    onClose: function onClose() {
      return handleClosePopover('user');
    }
  })), !isHideLanguages && /*#__PURE__*/_react.default.createElement(_styles.LanguageSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null))))), onlineStatus && isShowOrderOptions && !props.isCustomLayout && !isCustomerMode && (windowSize.width > 768 && windowSize.width <= 820 ? /*#__PURE__*/_react.default.createElement(_styles.SubMenu, null, isFarAway && /*#__PURE__*/_react.default.createElement(_styles.FarAwayMessage, null, /*#__PURE__*/_react.default.createElement(_TiWarningOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address'))), /*#__PURE__*/_react.default.createElement(_styles.AddressMenu, {
    isChew: isChew,
    onClick: function onClick() {
      return openModal('address');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null), " ", ((_orderState$options11 = orderState.options) === null || _orderState$options11 === void 0 ? void 0 : (_orderState$options12 = _orderState$options11.address) === null || _orderState$options12 === void 0 ? void 0 : _orderState$options12.address) || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')), !isCustomerMode && (isPreOrderSetting || (configState === null || configState === void 0 ? void 0 : (_configState$configs14 = configState.configs) === null || _configState$configs14 === void 0 ? void 0 : (_configState$configs15 = _configState$configs14.preorder_status_enabled) === null || _configState$configs15 === void 0 ? void 0 : _configState$configs15.value) === undefined) && /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "moment",
    momentState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options13 = orderState.options) === null || _orderState$options13 === void 0 ? void 0 : _orderState$options13.moment,
    onClick: (configState === null || configState === void 0 ? void 0 : (_configState$configs16 = configState.configs) === null || _configState$configs16 === void 0 ? void 0 : (_configState$configs17 = _configState$configs16.max_days_preorder) === null || _configState$configs17 === void 0 ? void 0 : _configState$configs17.value) === -1 || (configState === null || configState === void 0 ? void 0 : (_configState$configs18 = configState.configs) === null || _configState$configs18 === void 0 ? void 0 : (_configState$configs19 = _configState$configs18.max_days_preorder) === null || _configState$configs19 === void 0 ? void 0 : _configState$configs19.value) === 0 ? null : function (variant) {
      return openModal(variant);
    }
  })) : windowSize.width >= 576 && /*#__PURE__*/_react.default.createElement(_styles.SubMenu, null, isFarAway && /*#__PURE__*/_react.default.createElement(_styles.FarAwayMessage, null, /*#__PURE__*/_react.default.createElement(_TiWarningOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address'))), /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "address",
    addressState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options14 = orderState.options) === null || _orderState$options14 === void 0 ? void 0 : (_orderState$options15 = _orderState$options14.address) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.address,
    onClick: function onClick(variant) {
      return openModal(variant);
    },
    containerStyle: {
      width: '80%'
    }
  }), !isCustomerMode && (isPreOrderSetting || (configState === null || configState === void 0 ? void 0 : (_configState$configs20 = configState.configs) === null || _configState$configs20 === void 0 ? void 0 : (_configState$configs21 = _configState$configs20.preorder_status_enabled) === null || _configState$configs21 === void 0 ? void 0 : _configState$configs21.value) === undefined) && /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "moment",
    momentState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options16 = orderState.options) === null || _orderState$options16 === void 0 ? void 0 : _orderState$options16.moment,
    onClick: (configState === null || configState === void 0 ? void 0 : (_configState$configs22 = configState.configs) === null || _configState$configs22 === void 0 ? void 0 : (_configState$configs23 = _configState$configs22.max_days_preorder) === null || _configState$configs23 === void 0 ? void 0 : _configState$configs23.value) === -1 || (configState === null || configState === void 0 ? void 0 : (_configState$configs24 = configState.configs) === null || _configState$configs24 === void 0 ? void 0 : (_configState$configs25 = _configState$configs24.max_days_preorder) === null || _configState$configs25 === void 0 ? void 0 : _configState$configs25.value) === 0 ? null : function (variant) {
      return openModal(variant);
    }
  }))), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, _extends({}, !auth && modalSelected === 'address' && {
    title: t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')
  }, {
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: modalSelected === 'address' ? orderState !== null && orderState !== void 0 && (_orderState$options17 = orderState.options) !== null && _orderState$options17 !== void 0 && _orderState$options17.user_id ? '70%' : '50%' : '700px'
  }), modalSelected === 'cart' && /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: carts,
    isOrderStateCarts: !!orderState.carts,
    onClose: function onClose() {
      return setModalIsOpen(false);
    }
  }), modalSelected === 'address' && (auth ? /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    },
    isCustomerMode: isCustomerMode
  }) : /*#__PURE__*/_react.default.createElement(_styles.AddressFormWrapper, null, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options18 = orderState.options) === null || _orderState$options18 === void 0 ? void 0 : _orderState$options18.address) || {},
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    },
    onSaveAddress: function onSaveAddress() {
      return setModalIsOpen(false);
    },
    isCustomerMode: isCustomerMode
  }))), modalSelected === 'moment' && /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, _extends({
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    cateringPreorder: !!cateringTypeString,
    isHeader: true,
    business: pathname.includes('store') && business
  }, cateringValues)), modalSelected === 'delivery' && /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorContent.OrderTypeSelectorContent, {
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0) && 1
  })), isCustomerMode && customerModalOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: customerModalOpen,
    width: "80%",
    onClose: function onClose() {
      return setCustomerModalOpen(false);
    },
    padding: "20px",
    hideCloseDefault: true
  }, /*#__PURE__*/_react.default.createElement(_styles.UserEdit, null, !(customerState !== null && customerState !== void 0 && customerState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isAddressFormOpen: isAddressFormOpen,
    userData: customerState === null || customerState === void 0 ? void 0 : customerState.user,
    userId: customerState === null || customerState === void 0 ? void 0 : (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id,
    isOpenUserData: isOpenUserData,
    isCustomerMode: true,
    isModal: true,
    setIsOpenUserData: setIsOpenUserData,
    onClose: function onClose() {
      return setCustomerModalOpen(false);
    }
  }), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: customerState === null || customerState === void 0 ? void 0 : (_customerState$user3 = customerState.user) === null || _customerState$user3 === void 0 ? void 0 : _customerState$user3.id,
    changeOrderAddressWithDefault: true,
    userCustomerSetup: customerState.user,
    isOpenUserData: isOpenUserData,
    setCustomerModalOpen: setCustomerModalOpen,
    setIsOpenUserData: setIsOpenUserData,
    setIsAddressFormOpen: setIsAddressFormOpen,
    isHeader: true,
    isCustomerMode: isCustomerMode
  })))), authModalOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: authModalOpen,
    onRemove: function onRemove() {
      return closeAuthModal();
    },
    onClose: function onClose() {
      return closeAuthModal();
    },
    width: "50%",
    authModal: true,
    closeOnBackdrop: true
  }, modalPageToShow === 'login' && /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
    handleSuccessLogin: handleSuccessLogin,
    elementLinkToSignup: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'signup'
        });
      },
      href: "#"
    }, t('CREATE_ACCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.CREATE_ACCOUNT) || 'Create account')),
    elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'forgotpassword'
        });
      },
      href: "#"
    }, t('RESET_PASSWORD', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.RESET_PASSWORD) || 'Reset password')),
    useLoginByCellphone: true,
    isPopup: true
  }), modalPageToShow === 'signup' && /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.LOGIN) || 'Login')),
    useLoginByCellphone: true,
    useChekoutFileds: true,
    handleSuccessSignup: handleSuccessSignup,
    isPopup: true,
    closeModal: function closeModal() {
      return closeAuthModal();
    }
  }), modalPageToShow === 'forgotpassword' && /*#__PURE__*/_react.default.createElement(_ForgotPasswordForm.ForgotPasswordForm, {
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.LOGIN) || 'Login')),
    isPopup: true
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.CUSTOMER) || 'Customer'),
    content: confirm.content,
    acceptText: t('ACCEPT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ACCEPT) || 'Accept'),
    open: isCustomerMode && confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: !!preorderBusiness,
    width: "760px",
    onClose: function onClose() {
      return handleClosePreorder();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: preorderBusiness,
    handleClick: handleBusinessClick,
    showButton: true
  })));
};
exports.Header = Header;
Header.defaultProps = {
  isShowOrderOptions: true
};
var _default = Header;
exports.default = _default;