"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoriteList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _BusinessController = require("../BusinessController");
var _BusinessPreorder = require("../BusinessPreorder");
var _NotFoundSource = require("../NotFoundSource");
var _Buttons = require("../../styles/Buttons");
var _Modal = require("../Modal");
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _AutoScroll = require("../AutoScroll");
var _SingleProductCard = require("../SingleProductCard");
var _styledComponents = require("styled-components");
var _SingleOrderCard = require("../SingleOrderCard");
var _utils = require("../../../../../utils");
var _SingleProfessionalCard = require("../SingleProfessionalCard");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FavoriteListUI = function FavoriteListUI(props) {
  var _props$beforeElements, _props$beforeComponen, _favoriteList$favorit2, _favoriteList$favorit3, _favoriteList$favorit4, _favoriteList$favorit5, _favoriteList$favorit6, _props$afterComponent, _props$afterElements;
  var favoriteList = props.favoriteList,
    handleUpdateFavoriteList = props.handleUpdateFavoriteList,
    pagination = props.pagination,
    getFavoriteList = props.getFavoriteList,
    isBusiness = props.isBusiness,
    isProduct = props.isProduct,
    isOrder = props.isOrder,
    isProfessional = props.isProfessional,
    handleReorder = props.handleReorder,
    reorderState = props.reorderState;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useEvent = (0, _orderingComponentsExternal.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useSite = (0, _orderingComponentsExternal.useSite)(),
    _useSite2 = _slicedToArray(_useSite, 1),
    site = _useSite2[0].site;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var theme = (0, _styledComponents.useTheme)();
  var businessUrlTemplate = (0, _utils.checkSiteUrl)(site === null || site === void 0 ? void 0 : site.business_url_template, '/store/:business_slug');
  var productUrlTemplate = (0, _utils.checkSiteUrl)(site === null || site === void 0 ? void 0 : site.product_url_template, '/store/:business_slug?category=:category_id&product=:product_id');
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPreorder = _useState2[0],
    setIsPreorder = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    preorderBusiness = _useState4[0],
    setPreorderBusiness = _useState4[1];
  var pastOrders = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17];
  var handleClickBusiness = function handleClickBusiness(business) {
    if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
      events.emit('go_to_page', {
        page: 'business',
        params: {
          business_slug: business.slug
        }
      });
    } else {
      events.emit('go_to_page', {
        page: 'business',
        search: "?".concat(businessUrlTemplate.split('?')[1].replace(':business_slug', '')).concat(business.slug)
      });
    }
  };
  var handleGoToList = function handleGoToList() {
    if (isOrder) {
      events.emit('go_to_page', {
        page: 'orders'
      });
      return;
    }
    events.emit('go_to_page', {
      page: 'search'
    });
  };
  var handleClosePreorder = function handleClosePreorder() {
    setIsPreorder(false);
    setPreorderBusiness(null);
  };
  var onRedirectPage = function onRedirectPage(data) {
    events.emit('go_to_page', data);
  };
  var _onProductClick = function onProductClick(product) {
    var _product$category, _product$category$bus, _product$category2;
    var slug = product === null || product === void 0 ? void 0 : (_product$category = product.category) === null || _product$category === void 0 ? void 0 : (_product$category$bus = _product$category.business) === null || _product$category$bus === void 0 ? void 0 : _product$category$bus.slug;
    var categoryId = product === null || product === void 0 ? void 0 : (_product$category2 = product.category) === null || _product$category2 === void 0 ? void 0 : _product$category2.id;
    var productId = product === null || product === void 0 ? void 0 : product.id;
    if (!categoryId && !productId) {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        events.emit('go_to_page', {
          page: 'business',
          params: {
            business_slug: slug
          }
        });
      } else {
        events.emit('go_to_page', {
          page: 'business',
          search: "?".concat(businessUrlTemplate.split('?')[1].replace(':business_slug', '')).concat(slug)
        });
      }
      return;
    }
    if (productUrlTemplate === '/store/:business_slug/:category_slug/:product_slug' || productUrlTemplate === '/:business_slug/:category_slug/:product_slug') {
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          business_slug: slug,
          category_slug: categoryId,
          product_slug: productId
        }
      });
    }
    if (productUrlTemplate.includes('/store/:category_slug/:product_slug')) {
      var businessParameter = businessUrlTemplate.replace('/store?', '').replace('=:business_slug', '');
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          category_slug: categoryId,
          product_slug: productId
        },
        search: "?".concat(businessParameter, "=").concat(slug)
      });
    }
    if (productUrlTemplate.includes('/store/:business_slug') && productUrlTemplate.includes('category_id')) {
      var ids = productUrlTemplate.split('?')[1].split('&');
      var categoryParameter = ids[0].replace('=:category_id', '');
      var productParameter = ids[1].replace('=:product_id', '');
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          business_slug: slug
        },
        search: "?".concat(categoryParameter, "=").concat(categoryId, "&").concat(productParameter, "=").concat(productId)
      });
    }
    if (productUrlTemplate.includes('/:business_slug') && !productUrlTemplate.includes('store')) {
      var _ids = productUrlTemplate.split('?')[1].split('&');
      var _categoryParameter = _ids[0].replace('=:category_id', '');
      var _productParameter = _ids[1].replace('=:product_id', '');
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          business_slug: slug
        },
        search: "?".concat(_categoryParameter, "=").concat(categoryId, "&").concat(_productParameter, "=").concat(productId)
      });
    }
  };
  var closeOrderModal = function closeOrderModal(e) {
    var outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target);
    if (outsideModal) {
      var _reorderState$result, _reorderState$result2, _reorderState$result3;
      var _businessId = 'businessId:' + (reorderState === null || reorderState === void 0 ? void 0 : (_reorderState$result = reorderState.result) === null || _reorderState$result === void 0 ? void 0 : _reorderState$result.business_id);
      sessionStorage.setItem('adjust-cart-products', _businessId);
      onRedirectPage && onRedirectPage({
        page: 'business',
        params: {
          store: reorderState === null || reorderState === void 0 ? void 0 : (_reorderState$result2 = reorderState.result) === null || _reorderState$result2 === void 0 ? void 0 : (_reorderState$result3 = _reorderState$result2.business) === null || _reorderState$result3 === void 0 ? void 0 : _reorderState$result3.slug
        }
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (preorderBusiness) setIsPreorder(true);
  }, [preorderBusiness]);
  (0, _react.useEffect)(function () {
    var _reorderState$result4;
    if (!isOrder) return;
    if (reorderState !== null && reorderState !== void 0 && reorderState.error) {
      window.addEventListener('click', closeOrderModal);
      return function () {
        window.removeEventListener('click', closeOrderModal);
      };
    }
    if (!(reorderState !== null && reorderState !== void 0 && reorderState.error) && (reorderState === null || reorderState === void 0 ? void 0 : reorderState.loading) === false && reorderState !== null && reorderState !== void 0 && (_reorderState$result4 = reorderState.result) !== null && _reorderState$result4 !== void 0 && _reorderState$result4.business_id) {
      var _reorderState$result5, _orderState$carts, _orderState$carts$_bu, _favoriteList$favorit, _reorderState$result7;
      var _businessId = 'businessId:' + (reorderState === null || reorderState === void 0 ? void 0 : (_reorderState$result5 = reorderState.result) === null || _reorderState$result5 === void 0 ? void 0 : _reorderState$result5.business_id);
      var cartProducts = orderState === null || orderState === void 0 ? void 0 : (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : (_orderState$carts$_bu = _orderState$carts[_businessId]) === null || _orderState$carts$_bu === void 0 ? void 0 : _orderState$carts$_bu.products;
      var available = cartProducts.every(function (product) {
        return product.valid === true;
      });
      var orderProducts = favoriteList === null || favoriteList === void 0 ? void 0 : (_favoriteList$favorit = favoriteList.favorites.find(function (order) {
        var _reorderState$result6;
        return (order === null || order === void 0 ? void 0 : order.id) === (reorderState === null || reorderState === void 0 ? void 0 : (_reorderState$result6 = reorderState.result) === null || _reorderState$result6 === void 0 ? void 0 : _reorderState$result6.orderId);
      })) === null || _favoriteList$favorit === void 0 ? void 0 : _favoriteList$favorit.products;
      if (available && reorderState !== null && reorderState !== void 0 && (_reorderState$result7 = reorderState.result) !== null && _reorderState$result7 !== void 0 && _reorderState$result7.uuid && (cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.length) === (orderProducts === null || orderProducts === void 0 ? void 0 : orderProducts.length)) {
        onRedirectPage && onRedirectPage({
          page: 'checkout',
          params: {
            cartUuid: reorderState === null || reorderState === void 0 ? void 0 : reorderState.result.uuid
          }
        });
      } else {
        var _reorderState$result8, _reorderState$result9;
        sessionStorage.setItem('adjust-cart-products', _businessId);
        (cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.length) !== (orderProducts === null || orderProducts === void 0 ? void 0 : orderProducts.length) && sessionStorage.setItem('already-removed', 'removed');
        onRedirectPage && onRedirectPage({
          page: 'business',
          params: {
            store: reorderState === null || reorderState === void 0 ? void 0 : (_reorderState$result8 = reorderState.result) === null || _reorderState$result8 === void 0 ? void 0 : (_reorderState$result9 = _reorderState$result8.business) === null || _reorderState$result9 === void 0 ? void 0 : _reorderState$result9.slug
          }
        });
      }
    }
  }, [reorderState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, !(favoriteList !== null && favoriteList !== void 0 && favoriteList.loading) && (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.favorites.length) === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return handleGoToList();
    },
    style: {
      height: '44px'
    }
  }, t('ADD_FAVORITE', 'Add favorite'))), /*#__PURE__*/_react.default.createElement(_styles.FavoriteListWrapper, {
    isLoading: (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.loading) || (favoriteList === null || favoriteList === void 0 ? void 0 : (_favoriteList$favorit2 = favoriteList.favorites) === null || _favoriteList$favorit2 === void 0 ? void 0 : _favoriteList$favorit2.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.FavoriteListing, {
    isOrder: isOrder
  }, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "favorite"
  }, isBusiness && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(favoriteList !== null && favoriteList !== void 0 && favoriteList.loading) && (favoriteList === null || favoriteList === void 0 ? void 0 : (_favoriteList$favorit3 = favoriteList.favorites) === null || _favoriteList$favorit3 === void 0 ? void 0 : _favoriteList$favorit3.map(function (business, i) {
    var _orderState$options, _business$reviews;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      isBusinessOpen: business.open,
      handleCustomClick: handleClickBusiness,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type,
      onPreorderBusiness: setPreorderBusiness,
      businessHeader: business === null || business === void 0 ? void 0 : business.header,
      businessFeatured: business === null || business === void 0 ? void 0 : business.featured,
      businessOffers: business === null || business === void 0 ? void 0 : business.offers,
      businessLogo: business === null || business === void 0 ? void 0 : business.logo,
      businessReviews: business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total,
      businessDeliveryPrice: business === null || business === void 0 ? void 0 : business.delivery_price,
      businessDeliveryTime: business === null || business === void 0 ? void 0 : business.delivery_time,
      businessPickupTime: business === null || business === void 0 ? void 0 : business.pickup_time,
      businessDistance: business === null || business === void 0 ? void 0 : business.distance,
      handleUpdateBusinessList: handleUpdateFavoriteList,
      firstCard: i === 0 && width > 681
    });
  })), (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.loading) && _toConsumableArray(Array(5).keys()).map(function (i) {
    var _orderState$options2;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type
    });
  })), isProduct && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(favoriteList !== null && favoriteList !== void 0 && favoriteList.loading) && (favoriteList === null || favoriteList === void 0 ? void 0 : (_favoriteList$favorit4 = favoriteList.favorites) === null || _favoriteList$favorit4 === void 0 ? void 0 : _favoriteList$favorit4.map(function (product, i) {
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: "".concat(product.id, "_").concat(i),
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      onProductClick: function onProductClick() {
        return _onProductClick(product);
      },
      handleUpdateProducts: handleUpdateFavoriteList,
      isFavorite: true
    });
  })), (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.loading) && _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: "skeleton:".concat(i),
      isSkeleton: true
    });
  })), isOrder && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(favoriteList !== null && favoriteList !== void 0 && favoriteList.loading) && (favoriteList === null || favoriteList === void 0 ? void 0 : (_favoriteList$favorit5 = favoriteList.favorites) === null || _favoriteList$favorit5 === void 0 ? void 0 : _favoriteList$favorit5.map(function (order, i) {
    return /*#__PURE__*/_react.default.createElement(_SingleOrderCard.SingleOrderCard, {
      key: "".concat(order === null || order === void 0 ? void 0 : order.id, "_").concat(i),
      order: order,
      onRedirectPage: onRedirectPage,
      getOrderStatus: _utils.getOrderStatus,
      pastOrders: pastOrders.includes(order === null || order === void 0 ? void 0 : order.status),
      handleReorder: handleReorder,
      handleUpdateOrderList: handleUpdateFavoriteList,
      isFavorite: true
    });
  })), (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.loading) && _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleOrderCard.SingleOrderCard, {
      key: i,
      isSkeleton: true,
      order: {},
      onRedirectPage: onRedirectPage,
      getOrderStatus: _utils.getOrderStatus,
      handleReorder: handleReorder
    });
  })), isProfessional && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(favoriteList !== null && favoriteList !== void 0 && favoriteList.loading) && (favoriteList === null || favoriteList === void 0 ? void 0 : (_favoriteList$favorit6 = favoriteList.favorites) === null || _favoriteList$favorit6 === void 0 ? void 0 : _favoriteList$favorit6.map(function (professional, i) {
    return /*#__PURE__*/_react.default.createElement(_SingleProfessionalCard.SingleProfessionalCard, {
      key: i,
      professional: professional,
      handleUpdateProfessionals: handleUpdateFavoriteList
    });
  })), (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.loading) && _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleProfessionalCard.SingleProfessionalCard, {
      key: i,
      professional: {},
      isSkeleton: true
    });
  })), !(favoriteList !== null && favoriteList !== void 0 && favoriteList.loading) && (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) < (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && /*#__PURE__*/_react.default.createElement(_styles.ReadMoreCard, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return getFavoriteList((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) + 1);
    }
  }, t('LOAD_MORE_ITEMS', 'Load more items')))))), (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.error) && (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.error.length) > 0 && (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.favorites.length) === 0 && (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.error.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, t('ERROR', 'ERROR'), ": [", (e === null || e === void 0 ? void 0 : e.message) || e, "]");
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isPreorder,
    width: "760px",
    onClose: function onClose() {
      return handleClosePreorder();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: preorderBusiness,
    handleClick: handleClickBusiness,
    showButton: true
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
var FavoriteList = function FavoriteList(props) {
  var favoriteListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: FavoriteListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.FavoriteList, favoriteListProps);
};
exports.FavoriteList = FavoriteList;