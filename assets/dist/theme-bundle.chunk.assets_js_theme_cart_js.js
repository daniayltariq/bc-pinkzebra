"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_cart_js"],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/cart-item-details */ "./assets/js/theme/common/cart-item-details.js");
/* harmony import */ var _graph_ql_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../graph-ql-service */ "./assets/js/graph-ql-service.js");
/* harmony import */ var _api_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api-helper */ "./assets/js/api-helper.js");
/* harmony import */ var _local_storage_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../local-storage-manager */ "./assets/js/local-storage-manager.js");
/* harmony import */ var _consultant_parties_parties_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./consultant/parties/parties-helper */ "./assets/js/theme/consultant/parties/parties-helper.js");
/* harmony import */ var _common_utils_scentflirt_products__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/utils/scentflirt-products */ "./assets/js/theme/common/utils/scentflirt-products.js");
/* harmony import */ var _common_utils_product_scentflirt_label__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/utils/product-scentflirt-label */ "./assets/js/theme/common/utils/product-scentflirt-label.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Cart = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Cart, _PageManager);
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$modal = null;
    this.$cartPageContent = $('[data-cart]');
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components
    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;
    this.graphApiService = _graph_ql_service__WEBPACK_IMPORTED_MODULE_9__.graphqlService;
    if ($('#coupon-name')) {
      var _getLocalStorageItem;
      var couponName = (_getLocalStorageItem = (0,_local_storage_manager__WEBPACK_IMPORTED_MODULE_11__.getLocalStorageItem)('couponName')) == null ? void 0 : _getLocalStorageItem.value;
      $('#coupon-name').text(couponName);
    }
    this.setApplePaySupport();
    this.bindEvents();
    this.checkProductsCountry();
    this.checkPartyCode();
  };
  _proto.refreshContentBeforeRedirect = function refreshContentBeforeRedirect() {
    var _this = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.refreshContent(true);
              resolve();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };
  _proto.cartRemoveItemAnotherZoneItem = function cartRemoveItemAnotherZoneItem(itemId) {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
                if (response.data.status === 'succeed') {
                  resolve(true);
                } else {
                  resolve(response);
                }
              });
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
  _proto.removeAllItemsFromAnotherZone = /*#__PURE__*/function () {
    var _removeAllItemsFromAnotherZone = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event, products) {
      var _iterator, _step, product, status;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            event.preventDefault();
            this.$overlay.show();
            _iterator = _createForOfIteratorHelperLoose(products);
          case 3:
            if ((_step = _iterator()).done) {
              _context3.next = 11;
              break;
            }
            product = _step.value;
            _context3.next = 7;
            return this.cartRemoveItemAnotherZoneItem(product);
          case 7:
            status = _context3.sent;
            if (status !== true && status.data.errors) {
              this.$overlay.hide();
              (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(status.data.errors.join('\n'));
            }
          case 9:
            _context3.next = 3;
            break;
          case 11:
            this.refreshContentBeforeRedirect().then(function () {
              window.location.href = event.target.href;
            });
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function removeAllItemsFromAnotherZone(_x3, _x4) {
      return _removeAllItemsFromAnotherZone.apply(this, arguments);
    }
    return removeAllItemsFromAnotherZone;
  }();
  _proto.checkProductsCountry = /*#__PURE__*/function () {
    var _checkProductsCountry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _this2 = this;
      var params, selectedCountry, $neededButton, itemsToRemove, getCountry;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            getCountry = function _getCountry(selector) {
              return selector === 'CAD' ? 'USA' : 'CAD';
            };
            params = new URLSearchParams(window.location.search);
            selectedCountry = params.get('country');
            $neededButton = $('a.button.button--primary');
            itemsToRemove = [];
            if (selectedCountry && selectedCountry !== '' && this.context.cartItems && this.context.cartItems.length !== 0) {
              this.context.cartItems.forEach(function (item) {
                var available = item.custom_fields.find(function (field) {
                  return field.name === 'availability' && field.value !== selectedCountry;
                });
                if (available && available.id !== undefined) {
                  var $neededElement = $("#cover-element-" + item.product_id)[0];
                  var $countryCodeElement = $('.cover-element-country-code');
                  var $cartItemElement = $("[data-product-id=\"" + item.product_id + "\"]")[0];
                  $neededElement.classList.add('display-cover-element');
                  $cartItemElement.classList.add('decrease-opacity');
                  $countryCodeElement.text(getCountry(selectedCountry));
                  itemsToRemove.push(item.id);
                }
              });
              this.$overlay.show();
              $neededButton.on('click', function (event) {
                return _this2.removeAllItemsFromAnotherZone(event, itemsToRemove);
              });
              this.$overlay.hide();
            }
          case 6:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    function checkProductsCountry() {
      return _checkProductsCountry.apply(this, arguments);
    }
    return checkProductsCountry;
  }();
  _proto.setApplePaySupport = function setApplePaySupport() {
    if (window.ApplePaySession) {
      this.$cartPageContent.addClass('apple-pay-supported');
    }
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this3 = this;
    var itemId = $target.data('cartItemid');
    this.$activeCartItemId = itemId;
    this.$activeCartItemBtnAction = $target.data('action');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this3.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this3.refreshContent(remove);
      } else {
        $el.val(oldQty);
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this4 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!Number.isInteger(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry));
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this4.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this4.refreshContent(remove);
      } else {
        $el.val(oldQty);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this5 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this5.refreshContent(true);
      } else {
        _this5.$overlay.hide();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this6 = this;
    var context = _extends({
      productForChangeId: productId
    }, this.context);
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    if (this.$modal === null) {
      this.$modal = $('#modal');
    }
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    this.$modal.find('.modal-content').addClass('hide-content');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      var optionChangeHandler = function optionChangeHandler() {
        var $productOptionsContainer = $('[data-product-attributes-wrapper]', _this6.$modal);
        var modalBodyReservedHeight = $productOptionsContainer.outerHeight();
        if ($productOptionsContainer.length && modalBodyReservedHeight) {
          $productOptionsContainer.css('height', modalBodyReservedHeight);
        }
      };
      if (_this6.$modal.hasClass('open')) {
        optionChangeHandler();
      } else {
        _this6.$modal.one(_global_modal__WEBPACK_IMPORTED_MODULE_7__.ModalEvents.opened, optionChangeHandler);
      }
      _this6.productDetails = new _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__["default"](_this6.$modal, context);
      _this6.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $form = $(currentTarget).find('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(productId, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(err);
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this7 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages',
        additionalCheckoutButtons: 'cart/additional-checkout-buttons'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
      if (response) {
        _this7.$cartContent.html(response.content);
        _this7.$cartTotals.html(response.totals);
        _this7.$cartMessages.html(response.statusMessages);
        _this7.$cartAdditionalCheckoutBtns.html(response.additionalCheckoutButtons);
        $cartPageTitle.replaceWith(response.pageTitle);
      }
      _this7.bindEvents();
      _this7.$overlay.hide();
      _this7.checkProductsCountry();
      var couponName = (0,_local_storage_manager__WEBPACK_IMPORTED_MODULE_11__.getLocalStorageItem)('couponName').value;
      $('#coupon-name').text(couponName);
      var quantity = $('[data-cart-quantity]', _this7.$cartContent).data('cartQuantity') || 0;
      var subTotal = $('[data-cart-subTotal]').text().trim().slice(1);
      $('body').trigger('cart-quantity-update', [quantity, subTotal]);
      $("[data-cart-itemid='" + _this7.$activeCartItemId + "']", _this7.$cartContent).filter("[data-action='" + _this7.$activeCartItemBtnAction + "']").trigger('focus');
    });
  };
  _proto.getCouponData = /*#__PURE__*/function () {
    var _getCouponData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(couponCode) {
      var aws_url, aws, response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            aws_url = this.context.themeSetting.aws_url;
            aws = aws_url + "bc/coupons?couponCode=" + couponCode;
            _context5.next = 4;
            return (0,_api_helper__WEBPACK_IMPORTED_MODULE_10__.getData)(aws);
          case 4:
            response = _context5.sent;
            (0,_local_storage_manager__WEBPACK_IMPORTED_MODULE_11__.setLocalStorageWithExpiration)('couponName', response[0].name, 365 * 24 * 60 * 60 * 1000);
          case 6:
          case "end":
            return _context5.stop();
        }
      }, _callee5, this);
    }));
    function getCouponData(_x5) {
      return _getCouponData.apply(this, arguments);
    }
    return getCouponData;
  }();
  _proto.bindCartEvents = function bindCartEvents() {
    var _this8 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var removeScentflirtItems = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.removeScentflirtItems, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    var subscription_products_ids = this.context.subscription_products_ids;
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      var productId = $(event.currentTarget).data('productId');
      (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(string, {
        icon: 'warning',
        showCancelButton: true,
        onConfirm: function onConfirm() {
          if (subscription_products_ids.includes(productId)) {
            (0,_local_storage_manager__WEBPACK_IMPORTED_MODULE_11__.removeLocalStorageItem)('cartFromJoinProcess');
            removeScentflirtItems(productId);
          } else {
            cartRemoveItem(itemId);
          }
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      var productId = $(event.currentTarget).data('productId');
      event.preventDefault();
      // edit item in cart
      _this8.cartEditOptions(itemId, productId);
    });
  };
  _proto.removeScentflirtItems = /*#__PURE__*/function () {
    var _removeScentflirtItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(subscriptionId) {
      var scentflirt_subscriber_type_id, isCustomerExclusive, _customerAttrSubscrib, customerAttrSubscriberType, customerSubsValue, customerSubsValueSplitted, items, itemsKeptInCart, removalPromises, index, cartItem, removeBtn, itemId, productId, customFields, isScentflirtProduct;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            scentflirt_subscriber_type_id = this.context.themeSetting.scentflirt_subscriber_type_id;
            isCustomerExclusive = false;
            if (!this.context.customer) {
              _context6.next = 9;
              break;
            }
            _context6.next = 5;
            return (0,_graph_ql_service__WEBPACK_IMPORTED_MODULE_9__.getDataFromGraphql)(this.context, 'getCustomerAttr', this.context.storefrontAPIToken, {
              attributeId: scentflirt_subscriber_type_id
            });
          case 5:
            customerAttrSubscriberType = _context6.sent;
            customerSubsValue = customerAttrSubscriberType == null || (_customerAttrSubscrib = customerAttrSubscriberType.customer) == null || (_customerAttrSubscrib = _customerAttrSubscrib.attributes) == null || (_customerAttrSubscrib = _customerAttrSubscrib.attribute) == null ? void 0 : _customerAttrSubscrib.value;
            customerSubsValueSplitted = (customerSubsValue == null ? void 0 : customerSubsValue.split(',')) || [];
            isCustomerExclusive = customerSubsValueSplitted.includes('exclusive') || customerSubsValueSplitted.includes('preferred');
          case 9:
            items = $('.cart-item');
            itemsKeptInCart = 0;
            removalPromises = [];
            /* eslint-disable no-await-in-loop */
            index = 0;
          case 13:
            if (!(index < items.length)) {
              _context6.next = 26;
              break;
            }
            cartItem = $(items[index]);
            removeBtn = cartItem.find('.cart-remove');
            itemId = removeBtn.data('cartItemid');
            productId = removeBtn.data('productId');
            _context6.next = 20;
            return (0,_common_utils_scentflirt_products__WEBPACK_IMPORTED_MODULE_13__.getCustomFieldsByProductId)(this.context, productId);
          case 20:
            customFields = _context6.sent;
            isScentflirtProduct = (0,_common_utils_product_scentflirt_label__WEBPACK_IMPORTED_MODULE_14__.isProductAvailableForSubscription)(customFields);
            if (subscriptionId === productId || isScentflirtProduct && !isCustomerExclusive) {
              removalPromises.push(_bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId));
            } else {
              itemsKeptInCart++;
            }
          case 23:
            index++;
            _context6.next = 13;
            break;
          case 26:
            _context6.next = 28;
            return Promise.all(removalPromises);
          case 28:
            if (itemsKeptInCart > 0) {
              this.refreshContent(true);
            } else {
              window.location.reload();
            }
          case 29:
          case "end":
            return _context6.stop();
        }
      }, _callee6, this);
    }));
    function removeScentflirtItems(_x6) {
      return _removeScentflirtItems.apply(this, arguments);
    }
    return removeScentflirtItems;
  }();
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this9 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)($codeInput.data('error'));
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this9.refreshContent();
          _this9.getCouponData(code);
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindPartyCodeEvents = function bindPartyCodeEvents() {
    var $partyContainer = $('.party-code');
    var $partyForm = $('.party-form');
    var $codeInput = $('[name="partycode"]', $partyForm);
    $('.party-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $partyContainer.show();
      $('.party-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.party-code-cancel').on('click', function (event) {
      event.preventDefault();
      $partyContainer.hide();
      $('.party-code-cancel').hide();
      $('.party-code-add').show();
    });
    $partyForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)($codeInput.data('error'));
      }
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this10 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        var validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(_this10.context);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(validationDictionary.invalid_gift_certificate);
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this10.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(resp.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this11 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this11.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    // this.bindPartyCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();
    this.bindRemoveParty();

    // initiate shipping estimator module
    var shippingErrorMessages = {
      country: this.context.shippingCountryErrorMessage,
      province: this.context.shippingProvinceErrorMessage
    };
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"]($('[data-shipping-estimator]'), shippingErrorMessages);
  };
  _proto.checkPartyCode = function checkPartyCode() {
    var id = this.getPartyCodeFromUrl() || this.getPartyCode();
    if (id) {
      $('.party-code-value').text(id);
      $('.party-code-cancel').removeClass('hidden');
    }
  };
  _proto.getPartyCodeFromUrl = function getPartyCodeFromUrl() {
    var _getPartyById;
    var urlParams = new URLSearchParams(window.location.search);
    var partyId = urlParams.get('partyId');
    return partyId ? (_getPartyById = (0,_consultant_parties_parties_helper__WEBPACK_IMPORTED_MODULE_12__.getPartyById)(partyId)) == null ? void 0 : _getPartyById.id : null;
  };
  _proto.getPartyCode = function getPartyCode() {
    var _currentParty$value;
    var currentParty = (0,_local_storage_manager__WEBPACK_IMPORTED_MODULE_11__.getLocalStorageItem)('current_party');
    return (currentParty == null || (_currentParty$value = currentParty.value) == null ? void 0 : _currentParty$value.id) || null;
  };
  _proto.bindRemoveParty = function bindRemoveParty() {
    var self = this;
    $('.party-code-cancel').on('click', function () {
      if (self.getPartyCode()) {
        (0,_local_storage_manager__WEBPACK_IMPORTED_MODULE_11__.removeLocalStorageItem)('current_party');
        $('.party-code-value').text('-');
        $('.party-code-cancel').addClass('hidden');
      }
    });
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShippingEstimator)
/* harmony export */ });
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element, shippingErrorMessages) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.isEstimatorFormOpened = false;
    this.shippingErrorMessages = shippingErrorMessages;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    var shippingEstimatorAlert = $('.shipping-quotes');
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // estimator error messages are being injected in html as a result
      // of user submit; clearing and adding role on submit provides
      // regular announcement of these error messages
      if (shippingEstimatorAlert.attr('role')) {
        shippingEstimatorAlert.removeAttr('role');
      }
      shippingEstimatorAlert.attr('role', 'alert');
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.country
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.province
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__.showAlertModal)(err);
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.Validators.cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.toggleEstimatorFormState = function toggleEstimatorFormState(toggleButton, buttonSelector, $toggleContainer) {
    var changeAttributesOnToggle = function changeAttributesOnToggle(selectorToActivate) {
      $(toggleButton).attr('aria-labelledby', selectorToActivate);
      $(buttonSelector).text($("#" + selectorToActivate).text());
    };
    if (!this.isEstimatorFormOpened) {
      changeAttributesOnToggle('estimator-close');
      $toggleContainer.removeClass('u-hidden');
    } else {
      changeAttributesOnToggle('estimator-add');
      $toggleContainer.addClass('u-hidden');
    }
    this.isEstimatorFormOpened = !this.isEstimatorFormOpened;
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var _this4 = this;
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      _this4.toggleEstimatorFormState(event.currentTarget, '.shipping-estimate-show__btn-name', $estimatorContainer);
    });
  };
  return ShippingEstimator;
}();


/***/ }),

/***/ "./assets/js/theme/common/cart-item-details.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/cart-item-details.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartItemDetails)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CartItemDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  _inheritsLoose(CartItemDetails, _ProductDetailsBase);
  function CartItemDetails($scope, context, productAttributesData) {
    var _this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    var $form = $('#CartEditProductFieldsForm', _this.$scope);
    var $productOptionsElement = $('[data-product-attributes-wrapper]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function () {
      _this.setProductVariant();
    });
    var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_2__.optionChangeDecorator.call(_assertThisInitialized(_this), hasDefaultOptions);

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var productId = _this.context.productForChangeId;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
    }
    return _this;
  }
  var _proto = CartItemDetails.prototype;
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          var getSelectedOptionLabel = function getSelectedOptionLabel() {
            var productVariantslist = (0,_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.convertIntoArray)(value.children);
            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };
            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.modal-header-title');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.html().match(/'(.*?)'/)[1];
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);
    this.$scope.find('.modal-content').removeClass('hide-content');
  };
  return CartItemDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    (0,_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.insertStateHiddenField)($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()($selectElement)) {
    statesArray.states.forEach(function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + (stateObj.label ? stateObj.label : stateObj.name) + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }

  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.showAlertModal)(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxF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N0MsT0FBT0EsVUFBVTtJQUNyQjtFQUNKO0FBQ0osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNL1osMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUEyQkEsQ0FBSWdHLE9BQU8sRUFBSztFQUNwRCxJQUFRbVUsd0JBQXdCLEdBQXdFblUsT0FBTyxDQUF2R21VLHdCQUF3QjtJQUFFQyxnQ0FBZ0MsR0FBc0NwVSxPQUFPLENBQTdFb1UsZ0NBQWdDO0lBQUVDLCtCQUErQixHQUFLclUsT0FBTyxDQUEzQ3FVLCtCQUErQjtFQUNuRyxJQUFNQyxnQkFBZ0IsR0FBR04sc0JBQXNCLENBQUNHLHdCQUF3QixFQUFFQyxnQ0FBZ0MsRUFBRUMsK0JBQStCLENBQUM7RUFDNUksSUFBTUUsYUFBYSxHQUFHaGlCLE1BQU0sQ0FBQ3VDLE1BQU0sQ0FBQ3dmLGdCQUFnQixDQUFDVCxZQUFZLENBQUMsQ0FBQztFQUNuRSxJQUFNVyxlQUFlLEdBQUdqaUIsTUFBTSxDQUFDcUYsSUFBSSxDQUFDMGMsZ0JBQWdCLENBQUNULFlBQVksQ0FBQyxDQUFDLENBQUMzQyxHQUFHLENBQUMsVUFBQXBZLEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUM4UCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM5USxHQUFHLENBQUMsQ0FBQztFQUFBLEVBQUM7RUFFcEcsT0FBTzBjLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRTViLEdBQUcsRUFBRWhHLENBQUMsRUFBSztJQUMzQzRoQixHQUFHLENBQUM1YixHQUFHLENBQUMsR0FBR3liLGFBQWEsQ0FBQ3poQixDQUFDLENBQUM7SUFDM0IsT0FBTzRoQixHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NhcnQuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2NhcnQtaXRlbS1kZXRhaWxzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vc3RhdGUtY291bnRyeS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCB7IGJpbmQsIGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGNoZWNrSXNHaWZ0Q2VydFZhbGlkIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IFNoaXBwaW5nRXN0aW1hdG9yIGZyb20gJy4vY2FydC9zaGlwcGluZy1lc3RpbWF0b3InO1xyXG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwsIHNob3dBbGVydE1vZGFsLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IENhcnRJdGVtRGV0YWlscyBmcm9tICcuL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscyc7XHJcbmltcG9ydCB7IGdyYXBocWxTZXJ2aWNlLCBnZXREYXRhRnJvbUdyYXBocWwgfSBmcm9tICcuLi9ncmFwaC1xbC1zZXJ2aWNlJztcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL2FwaS1oZWxwZXInO1xyXG5pbXBvcnQgeyBzZXRMb2NhbFN0b3JhZ2VXaXRoRXhwaXJhdGlvbiwgZ2V0TG9jYWxTdG9yYWdlSXRlbSwgcmVtb3ZlTG9jYWxTdG9yYWdlSXRlbSB9IGZyb20gJy4uL2xvY2FsLXN0b3JhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCB7IGdldFBhcnR5QnlJZCB9IGZyb20gJy4vY29uc3VsdGFudC9wYXJ0aWVzL3BhcnRpZXMtaGVscGVyJztcclxuaW1wb3J0IHsgZ2V0Q3VzdG9tRmllbGRzQnlQcm9kdWN0SWQgfSBmcm9tICcuL2NvbW1vbi91dGlscy9zY2VudGZsaXJ0LXByb2R1Y3RzJztcclxuaW1wb3J0IHsgaXNQcm9kdWN0QXZhaWxhYmxlRm9yU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvcHJvZHVjdC1zY2VudGZsaXJ0LWxhYmVsJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLiRtb2RhbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kY2FydFBhZ2VDb250ZW50ID0gJCgnW2RhdGEtY2FydF0nKTtcclxuICAgICAgICB0aGlzLiRjYXJ0Q29udGVudCA9ICQoJ1tkYXRhLWNhcnQtY29udGVudF0nKTtcclxuICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nKTtcclxuICAgICAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XHJcbiAgICAgICAgdGhpcy4kY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMgPSAkKCdbZGF0YS1jYXJ0LWFkZGl0aW9uYWwtY2hlY2tvdXQtYnV0dG9uc10nKTtcclxuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydF0gLmxvYWRpbmdPdmVybGF5JylcclxuICAgICAgICAgICAgLmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcclxuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ncmFwaEFwaVNlcnZpY2UgPSBncmFwaHFsU2VydmljZTtcclxuICAgICAgICBpZiAoJCgnI2NvdXBvbi1uYW1lJykpIHtcclxuICAgICAgICAgICAgY29uc3QgY291cG9uTmFtZSA9IGdldExvY2FsU3RvcmFnZUl0ZW0oJ2NvdXBvbk5hbWUnKT8udmFsdWU7XHJcbiAgICAgICAgICAgICQoJyNjb3Vwb24tbmFtZScpLnRleHQoY291cG9uTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEFwcGxlUGF5U3VwcG9ydCgpO1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tQcm9kdWN0c0NvdW50cnkoKTtcclxuICAgICAgICB0aGlzLmNoZWNrUGFydHlDb2RlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaENvbnRlbnRCZWZvcmVSZWRpcmVjdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FydFJlbW92ZUl0ZW1Bbm90aGVyWm9uZUl0ZW0oaXRlbUlkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVtb3ZlQWxsSXRlbXNGcm9tQW5vdGhlclpvbmUoZXZlbnQsIHByb2R1Y3RzKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgcHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGhpcy5jYXJ0UmVtb3ZlSXRlbUFub3RoZXJab25lSXRlbShwcm9kdWN0KTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gdHJ1ZSAmJiBzdGF0dXMuZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoc3RhdHVzLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50QmVmb3JlUmVkaXJlY3QoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGV2ZW50LnRhcmdldC5ocmVmO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjaGVja1Byb2R1Y3RzQ291bnRyeSgpIHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ291bnRyeSA9IHBhcmFtcy5nZXQoJ2NvdW50cnknKTtcclxuICAgICAgICBjb25zdCAkbmVlZGVkQnV0dG9uID0gJCgnYS5idXR0b24uYnV0dG9uLS1wcmltYXJ5Jyk7XHJcbiAgICAgICAgY29uc3QgaXRlbXNUb1JlbW92ZSA9IFtdO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldENvdW50cnkoc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yID09PSAnQ0FEJyA/ICdVU0EnIDogJ0NBRCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxlY3RlZENvdW50cnlcclxuICAgICAgICAgICAgJiYgc2VsZWN0ZWRDb3VudHJ5ICE9PSAnJ1xyXG4gICAgICAgICAgICAmJiB0aGlzLmNvbnRleHQuY2FydEl0ZW1zXHJcbiAgICAgICAgICAgICYmIHRoaXMuY29udGV4dC5jYXJ0SXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jYXJ0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IGl0ZW0uY3VzdG9tX2ZpZWxkcy5maW5kKGZpZWxkID0+IGZpZWxkLm5hbWUgPT09ICdhdmFpbGFiaWxpdHknICYmIGZpZWxkLnZhbHVlICE9PSBzZWxlY3RlZENvdW50cnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSAmJiBhdmFpbGFibGUuaWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRuZWVkZWRFbGVtZW50ID0gJChgI2NvdmVyLWVsZW1lbnQtJHtpdGVtLnByb2R1Y3RfaWR9YClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNvdW50cnlDb2RlRWxlbWVudCA9ICQoJy5jb3Zlci1lbGVtZW50LWNvdW50cnktY29kZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRjYXJ0SXRlbUVsZW1lbnQgPSAkKGBbZGF0YS1wcm9kdWN0LWlkPVwiJHtpdGVtLnByb2R1Y3RfaWR9XCJdYClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgJG5lZWRlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1jb3Zlci1lbGVtZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNhcnRJdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkZWNyZWFzZS1vcGFjaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvdW50cnlDb2RlRWxlbWVudC50ZXh0KGdldENvdW50cnkoc2VsZWN0ZWRDb3VudHJ5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNUb1JlbW92ZS5wdXNoKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcbiAgICAgICAgICAgICRuZWVkZWRCdXR0b24ub24oJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5yZW1vdmVBbGxJdGVtc0Zyb21Bbm90aGVyWm9uZShldmVudCwgaXRlbXNUb1JlbW92ZSkpO1xyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXBwbGVQYXlTdXBwb3J0KCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcnRQYWdlQ29udGVudC5hZGRDbGFzcygnYXBwbGUtcGF5LXN1cHBvcnRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcclxuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcclxuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkID0gaXRlbUlkO1xyXG4gICAgICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9uID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcclxuICAgICAgICBjb25zdCBvbGRRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcclxuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xyXG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcclxuICAgICAgICBjb25zdCBuZXdRdHkgPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJyA/IG9sZFF0eSArIDEgOiBvbGRRdHkgLSAxO1xyXG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcclxuICAgICAgICBpZiAobmV3UXR5IDwgbWluUXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChtaW5FcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwobWF4RXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XHJcbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcclxuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XHJcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcHJlVmFsICE9PSBudWxsID8gcHJlVmFsIDogbWluUXR5O1xyXG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcclxuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XHJcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoTnVtYmVyKCRlbC52YWwoKSksIDEwKTtcclxuICAgICAgICBsZXQgaW52YWxpZEVudHJ5O1xyXG5cclxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XHJcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG5ld1F0eSkpIHtcclxuICAgICAgICAgICAgaW52YWxpZEVudHJ5ID0gJGVsLnZhbCgpO1xyXG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0aGlzLmNvbnRleHQuaW52YWxpZEVudHJ5TWVzc2FnZS5yZXBsYWNlKCdbRU5UUlldJywgaW52YWxpZEVudHJ5KSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcclxuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwobWluRXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcclxuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwobWF4RXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IChuZXdRdHkgPT09IDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKSB7XHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYXJ0RWRpdE9wdGlvbnMoaXRlbUlkLCBwcm9kdWN0SWQpIHtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0geyBwcm9kdWN0Rm9yQ2hhbmdlSWQ6IHByb2R1Y3RJZCwgLi4udGhpcy5jb250ZXh0IH07XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJG1vZGFsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG1vZGFsID0gJCgnI21vZGFsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2NvbmZpZ3VyZS1wcm9kdWN0JyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtb2RhbC5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy4kbW9kYWwuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygnaGlkZS1jb250ZW50Jyk7XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5jb25maWd1cmVJbkNhcnQoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25DaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyID0gJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVzLXdyYXBwZXJdJywgdGhpcy4kbW9kYWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQgPSAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyLmxlbmd0aCAmJiBtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lci5jc3MoJ2hlaWdodCcsIG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRtb2RhbC5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25DaGFuZ2VIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbC5vbmUoTW9kYWxFdmVudHMub3BlbmVkLCBvcHRpb25DaGFuZ2VIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBDYXJ0SXRlbURldGFpbHModGhpcy4kbW9kYWwsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJChjdXJyZW50VGFyZ2V0KS5maW5kKCdmb3JtJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRzdWJtaXQgPSAkKCdpbnB1dC5idXR0b24nLCAkZm9ybSk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLmFsZXJ0TWVzc2FnZUJveCcpO1xyXG5cclxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgncC5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoQ29udGVudChyZW1vdmUpIHtcclxuICAgICAgICBjb25zdCAkY2FydEl0ZW1zUm93cyA9ICQoJ1tkYXRhLWl0ZW0tcm93XScsIHRoaXMuJGNhcnRDb250ZW50KTtcclxuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICB0b3RhbHM6ICdjYXJ0L3RvdGFscycsXHJcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU6ICdjYXJ0L3BhZ2UtdGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXHJcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsQ2hlY2tvdXRCdXR0b25zOiAnY2FydC9hZGRpdGlvbmFsLWNoZWNrb3V0LWJ1dHRvbnMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbGFzdCBpdGVtIGZyb20gY2FydD8gUmVsb2FkXHJcbiAgICAgICAgaWYgKHJlbW92ZSAmJiAkY2FydEl0ZW1zUm93cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKHJlc3BvbnNlLnRvdGFscyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjYXJ0QWRkaXRpb25hbENoZWNrb3V0QnRucy5odG1sKHJlc3BvbnNlLmFkZGl0aW9uYWxDaGVja291dEJ1dHRvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1Byb2R1Y3RzQ291bnRyeSgpO1xyXG4gICAgICAgICAgICBjb25zdCBjb3Vwb25OYW1lID0gZ2V0TG9jYWxTdG9yYWdlSXRlbSgnY291cG9uTmFtZScpLnZhbHVlO1xyXG4gICAgICAgICAgICAkKCcjY291cG9uLW5hbWUnKS50ZXh0KGNvdXBvbk5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIHRoaXMuJGNhcnRDb250ZW50KS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJUb3RhbCA9ICQoJ1tkYXRhLWNhcnQtc3ViVG90YWxdJykudGV4dCgpLnRyaW0oKS5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIFtxdWFudGl0eSwgc3ViVG90YWxdKTtcclxuXHJcbiAgICAgICAgICAgICQoYFtkYXRhLWNhcnQtaXRlbWlkPScke3RoaXMuJGFjdGl2ZUNhcnRJdGVtSWR9J11gLCB0aGlzLiRjYXJ0Q29udGVudClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYFtkYXRhLWFjdGlvbj0nJHt0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbn0nXWApXHJcbiAgICAgICAgICAgICAgICAudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRDb3Vwb25EYXRhKGNvdXBvbkNvZGUpIHtcclxuICAgICAgICBjb25zdCB7IGF3c191cmwgfSA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0IGF3cyA9IGAke2F3c191cmx9YmMvY291cG9ucz9jb3Vwb25Db2RlPSR7Y291cG9uQ29kZX1gO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RGF0YShhd3MpO1xyXG4gICAgICAgIHNldExvY2FsU3RvcmFnZVdpdGhFeHBpcmF0aW9uKCdjb3Vwb25OYW1lJywgcmVzcG9uc2VbMF0ubmFtZSwgMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZENhcnRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xyXG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XHJcbiAgICAgICAgY29uc3QgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UgPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcclxuICAgICAgICBjb25zdCByZW1vdmVTY2VudGZsaXJ0SXRlbXMgPSBiaW5kKGRlYm91bmNlKHRoaXMucmVtb3ZlU2NlbnRmbGlydEl0ZW1zLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHByZVZhbDtcclxuXHJcbiAgICAgICAgLy8gY2FydCB1cGRhdGVcclxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxyXG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXHJcbiAgICAgICAgJCgnLmNhcnQtaXRlbS1xdHktaW5wdXQnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2ZvY3VzJywgZnVuY3Rpb24gb25RdHlGb2N1cygpIHtcclxuICAgICAgICAgICAgcHJlVmFsID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB9KS5jaGFuZ2UoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XHJcbiAgICAgICAgICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgc3Vic2NyaXB0aW9uX3Byb2R1Y3RzX2lkcyB9ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgICAgICAkKCcuY2FydC1yZW1vdmUnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtRGVsZXRlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJvZHVjdElkJyk7XHJcblxyXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChzdHJpbmcsIHtcclxuICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uX3Byb2R1Y3RzX2lkcy5pbmNsdWRlcyhwcm9kdWN0SWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxvY2FsU3RvcmFnZUl0ZW0oJ2NhcnRGcm9tSm9pblByb2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NlbnRmbGlydEl0ZW1zKHByb2R1Y3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUVkaXQnKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdwcm9kdWN0SWQnKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gZWRpdCBpdGVtIGluIGNhcnRcclxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkLCBwcm9kdWN0SWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlbW92ZVNjZW50ZmxpcnRJdGVtcyhzdWJzY3JpcHRpb25JZCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2NlbnRmbGlydF9zdWJzY3JpYmVyX3R5cGVfaWQgfSA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmc7XHJcbiAgICAgICAgbGV0IGlzQ3VzdG9tZXJFeGNsdXNpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5jdXN0b21lcikge1xyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21lckF0dHJTdWJzY3JpYmVyVHlwZSA9IGF3YWl0IGdldERhdGFGcm9tR3JhcGhxbCh0aGlzLmNvbnRleHQsICdnZXRDdXN0b21lckF0dHInLCB0aGlzLmNvbnRleHQuc3RvcmVmcm9udEFQSVRva2VuLCB7IGF0dHJpYnV0ZUlkOiBzY2VudGZsaXJ0X3N1YnNjcmliZXJfdHlwZV9pZCB9KTtcclxuICAgICAgICAgICAgY29uc3QgY3VzdG9tZXJTdWJzVmFsdWUgPSBjdXN0b21lckF0dHJTdWJzY3JpYmVyVHlwZT8uY3VzdG9tZXI/LmF0dHJpYnV0ZXM/LmF0dHJpYnV0ZT8udmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbWVyU3Vic1ZhbHVlU3BsaXR0ZWQgPSBjdXN0b21lclN1YnNWYWx1ZT8uc3BsaXQoJywnKSB8fCBbXTtcclxuICAgICAgICAgICAgaXNDdXN0b21lckV4Y2x1c2l2ZSA9IGN1c3RvbWVyU3Vic1ZhbHVlU3BsaXR0ZWQuaW5jbHVkZXMoJ2V4Y2x1c2l2ZScpIHx8IGN1c3RvbWVyU3Vic1ZhbHVlU3BsaXR0ZWQuaW5jbHVkZXMoJ3ByZWZlcnJlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSAkKCcuY2FydC1pdGVtJyk7XHJcbiAgICAgICAgbGV0IGl0ZW1zS2VwdEluQ2FydCA9IDA7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZhbFByb21pc2VzID0gW107XHJcblxyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWF3YWl0LWluLWxvb3AgKi9cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtID0gJChpdGVtc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBjYXJ0SXRlbS5maW5kKCcuY2FydC1yZW1vdmUnKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gcmVtb3ZlQnRuLmRhdGEoJ2NhcnRJdGVtaWQnKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gcmVtb3ZlQnRuLmRhdGEoJ3Byb2R1Y3RJZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXN0b21GaWVsZHMgPSBhd2FpdCBnZXRDdXN0b21GaWVsZHNCeVByb2R1Y3RJZCh0aGlzLmNvbnRleHQsIHByb2R1Y3RJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzU2NlbnRmbGlydFByb2R1Y3QgPSBpc1Byb2R1Y3RBdmFpbGFibGVGb3JTdWJzY3JpcHRpb24oY3VzdG9tRmllbGRzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb25JZCA9PT0gcHJvZHVjdElkIHx8IChpc1NjZW50ZmxpcnRQcm9kdWN0ICYmICFpc0N1c3RvbWVyRXhjbHVzaXZlKSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZhbFByb21pc2VzLnB1c2godXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zS2VwdEluQ2FydCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChyZW1vdmFsUHJvbWlzZXMpO1xyXG5cclxuICAgICAgICBpZiAoaXRlbXNLZXB0SW5DYXJ0ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFByb21vQ29kZUV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCAkY291cG9uQ29udGFpbmVyID0gJCgnLmNvdXBvbi1jb2RlJyk7XHJcbiAgICAgICAgY29uc3QgJGNvdXBvbkZvcm0gPSAkKCcuY291cG9uLWZvcm0nKTtcclxuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJjb3Vwb25jb2RlXCJdJywgJGNvdXBvbkZvcm0pO1xyXG5cclxuICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuc2hvdygpO1xyXG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuc2hvdygpO1xyXG4gICAgICAgICAgICAkY29kZUlucHV0LnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGNvdXBvbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9ICRjb2RlSW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXHJcbiAgICAgICAgICAgIGlmICghY29kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKCRjb2RlSW5wdXQuZGF0YSgnZXJyb3InKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb3Vwb25EYXRhKGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRQYXJ0eUNvZGVFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgJHBhcnR5Q29udGFpbmVyID0gJCgnLnBhcnR5LWNvZGUnKTtcclxuICAgICAgICBjb25zdCAkcGFydHlGb3JtID0gJCgnLnBhcnR5LWZvcm0nKTtcclxuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJwYXJ0eWNvZGVcIl0nLCAkcGFydHlGb3JtKTtcclxuXHJcbiAgICAgICAgJCgnLnBhcnR5LWNvZGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICRwYXJ0eUNvbnRhaW5lci5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJy5wYXJ0eS1jb2RlLWNhbmNlbCcpLnNob3coKTtcclxuICAgICAgICAgICAgJGNvZGVJbnB1dC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcucGFydHktY29kZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkcGFydHlDb250YWluZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcucGFydHktY29kZS1jYW5jZWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy5wYXJ0eS1jb2RlLWFkZCcpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHBhcnR5Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXHJcbiAgICAgICAgICAgIGlmICghY29kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKCRjb2RlSW5wdXQuZGF0YSgnZXJyb3InKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xyXG4gICAgICAgIGNvbnN0ICRjZXJ0Rm9ybSA9ICQoJy5jYXJ0LWdpZnQtY2VydGlmaWNhdGUtZm9ybScpO1xyXG4gICAgICAgIGNvbnN0ICRjZXJ0SW5wdXQgPSAkKCdbbmFtZT1cImNlcnRjb2RlXCJdJywgJGNlcnRGb3JtKTtcclxuXHJcbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcclxuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY2VydElucHV0LnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY2hlY2tJc0dpZnRDZXJ0VmFsaWQoY29kZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodmFsaWRhdGlvbkRpY3Rpb25hcnkuaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlHaWZ0Q2VydGlmaWNhdGUoY29kZSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcC5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtaXRlbS1naWZ0d3JhcF0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2dpZnQtd3JhcHBpbmctZm9ybScsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgbW9kYWwub3BlbigpO1xyXG5cclxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRHaWZ0V3JhcHBpbmdGb3JtKCkge1xyXG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJHNlbGVjdC52YWwoKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xyXG5cclxuICAgICAgICAgICAgJChgLmdpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fWApLmhpZGUoKTtcclxuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhbGxvd01lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVWaWV3cygpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRzaW5nbGVGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1zaW5nbGUnKTtcclxuICAgICAgICAgICAgY29uc3QgJG11bHRpRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctbXVsdGlwbGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ3NhbWUnKSB7XHJcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdbbmFtZT1cImdpZnR3cmFwdHlwZVwiXScpLm9uKCdjbGljaycsIHRvZ2dsZVZpZXdzKTtcclxuXHJcbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuYmluZENhcnRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRQcm9tb0NvZGVFdmVudHMoKTtcclxuICAgICAgICAvLyB0aGlzLmJpbmRQYXJ0eUNvZGVFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRSZW1vdmVQYXJ0eSgpO1xyXG5cclxuICAgICAgICAvLyBpbml0aWF0ZSBzaGlwcGluZyBlc3RpbWF0b3IgbW9kdWxlXHJcbiAgICAgICAgY29uc3Qgc2hpcHBpbmdFcnJvck1lc3NhZ2VzID0ge1xyXG4gICAgICAgICAgICBjb3VudHJ5OiB0aGlzLmNvbnRleHQuc2hpcHBpbmdDb3VudHJ5RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICBwcm92aW5jZTogdGhpcy5jb250ZXh0LnNoaXBwaW5nUHJvdmluY2VFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSwgc2hpcHBpbmdFcnJvck1lc3NhZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1BhcnR5Q29kZSgpIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0UGFydHlDb2RlRnJvbVVybCgpIHx8IHRoaXMuZ2V0UGFydHlDb2RlKCk7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgICQoJy5wYXJ0eS1jb2RlLXZhbHVlJykudGV4dChpZCk7XHJcbiAgICAgICAgICAgICQoJy5wYXJ0eS1jb2RlLWNhbmNlbCcpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFydHlDb2RlRnJvbVVybCgpIHtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IHBhcnR5SWQgPSB1cmxQYXJhbXMuZ2V0KCdwYXJ0eUlkJyk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnR5SWQgPyBnZXRQYXJ0eUJ5SWQocGFydHlJZCk/LmlkIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJ0eUNvZGUoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhcnR5ID0gZ2V0TG9jYWxTdG9yYWdlSXRlbSgnY3VycmVudF9wYXJ0eScpO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50UGFydHk/LnZhbHVlPy5pZCB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRSZW1vdmVQYXJ0eSgpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAkKCcucGFydHktY29kZS1jYW5jZWwnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmdldFBhcnR5Q29kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVMb2NhbFN0b3JhZ2VJdGVtKCdjdXJyZW50X3BhcnR5Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcucGFydHktY29kZS12YWx1ZScpLnRleHQoJy0nKTtcclxuICAgICAgICAgICAgICAgICQoJy5wYXJ0eS1jb2RlLWNhbmNlbCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nRXN0aW1hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50LCBzaGlwcGluZ0Vycm9yTWVzc2FnZXMpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJywgdGhpcy4kZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNoaXBwaW5nRXJyb3JNZXNzYWdlcyA9IHNoaXBwaW5nRXJyb3JNZXNzYWdlcztcclxuICAgICAgICB0aGlzLmluaXRGb3JtVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpO1xyXG4gICAgICAgIHRoaXMuYmluZEVzdGltYXRvckV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRGb3JtVmFsaWRhdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzaGlwcGluZ0VzdGltYXRvckFsZXJ0ID0gJCgnLnNoaXBwaW5nLXF1b3RlcycpO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcclxuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSAuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0YCxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0JywgdGhpcy4kZWxlbWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAvLyBlc3RpbWF0b3IgZXJyb3IgbWVzc2FnZXMgYXJlIGJlaW5nIGluamVjdGVkIGluIGh0bWwgYXMgYSByZXN1bHRcclxuICAgICAgICAgICAgLy8gb2YgdXNlciBzdWJtaXQ7IGNsZWFyaW5nIGFuZCBhZGRpbmcgcm9sZSBvbiBzdWJtaXQgcHJvdmlkZXNcclxuICAgICAgICAgICAgLy8gcmVndWxhciBhbm5vdW5jZW1lbnQgb2YgdGhlc2UgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAgICAgaWYgKHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQuYXR0cigncm9sZScpKSB7XHJcbiAgICAgICAgICAgICAgICBzaGlwcGluZ0VzdGltYXRvckFsZXJ0LnJlbW92ZUF0dHIoJ3JvbGUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2hpcHBpbmdFc3RpbWF0b3JBbGVydC5hdHRyKCdyb2xlJywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgIC8vIFdoZW4gc3dpdGNoaW5nIGJldHdlZW4gY291bnRyaWVzLCB0aGUgc3RhdGUvcmVnaW9uIGlzIGR5bmFtaWNcclxuICAgICAgICAgICAgLy8gT25seSBwZXJmb3JtIGEgY2hlY2sgZm9yIGFsbCBmaWVsZHMgd2hlbiBjb3VudHJ5IGhhcyBhIHZhbHVlXHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhcmVBbGwoJ3ZhbGlkJykgd2lsbCBjaGVjayBjb3VudHJ5IGZvciB2YWxpZGl0eVxyXG4gICAgICAgICAgICBpZiAoJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gKS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb24oKTtcclxuICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcclxuICAgICAgICB0aGlzLmJpbmRVUFNSYXRlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWAsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5SWQgPSBOdW1iZXIodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3VudHJ5SWQgIT09IDAgJiYgIU51bWJlci5pc05hTihjb3VudHJ5SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMuY291bnRyeSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kU3RhdGVWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRlbGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBlbGVWYWwgJiYgZWxlVmFsLmxlbmd0aCAmJiBlbGVWYWwgIT09ICdTdGF0ZS9wcm92aW5jZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMucHJvdmluY2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcclxuICAgICAqL1xyXG4gICAgYmluZFVQU1JhdGVzKCkge1xyXG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xyXG5cclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgVVBTUmF0ZVRvZ2dsZSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcclxuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1EZWZhdWx0ID0gJCgnLmVzdGltYXRvci1mb3JtLS1kZWZhdWx0Jyk7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1VcHMudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcclxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpIHtcclxuICAgICAgICBsZXQgJGxhc3Q7XHJcblxyXG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcclxuICAgICAgICBzdGF0ZUNvdW50cnkodGhpcy4kc3RhdGUsIHRoaXMuY29udGV4dCwgeyB1c2VJZEZvclN0YXRlczogdHJ1ZSB9LCAoZXJyLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChlcnIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuZ2V0U3RhdHVzKHRoaXMuJHN0YXRlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZmllbGQuYXR0cigncGxhY2Vob2xkZXInLCAnU3RhdGUvcHJvdmluY2UnKTtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxyXG4gICAgICAgICAgICAvLyBOb3QgYWxsIGNvdW50cmllcyByZXF1aXJlIHRoZSBwcm92aW5jZSB0byBiZSBmaWxsZWRcclxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZW1vdmUgdGhpcyBjbGFzcyB3aGVuIHdlIHN3YXAgc2luY2Ugbm9kIHZhbGlkYXRpb24gZG9lc24ndCBjbGVhbnVwIGZvciB1c1xyXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVFc3RpbWF0b3JGb3JtU3RhdGUodG9nZ2xlQnV0dG9uLCBidXR0b25TZWxlY3RvciwgJHRvZ2dsZUNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSA9IChzZWxlY3RvclRvQWN0aXZhdGUpID0+IHtcclxuICAgICAgICAgICAgJCh0b2dnbGVCdXR0b24pLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIHNlbGVjdG9yVG9BY3RpdmF0ZSk7XHJcbiAgICAgICAgICAgICQoYnV0dG9uU2VsZWN0b3IpLnRleHQoJChgIyR7c2VsZWN0b3JUb0FjdGl2YXRlfWApLnRleHQoKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCkge1xyXG4gICAgICAgICAgICBjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUoJ2VzdGltYXRvci1jbG9zZScpO1xyXG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSgnZXN0aW1hdG9yLWFkZCcpO1xyXG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCA9ICF0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXN0aW1hdG9yRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XHJcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcclxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcclxuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXHJcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIGNpdHk6ICQoJ1tuYW1lPVwic2hpcHBpbmctY2l0eVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIHppcF9jb2RlOiAkKCdbbmFtZT1cInNoaXBwaW5nLXppcFwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRTaGlwcGluZ1F1b3RlcyhwYXJhbXMsICdjYXJ0L3NoaXBwaW5nLXF1b3RlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2hpcHBpbmctcXVvdGVzJykuaHRtbChyZXNwb25zZS5jb250ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBiaW5kIHRoZSBzZWxlY3QgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAkKCcuc2VsZWN0LXNoaXBwaW5nLXF1b3RlJykub24oJ2NsaWNrJywgY2xpY2tFdmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuc3VibWl0U2hpcHBpbmdRdW90ZShxdW90ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlKGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuc2hpcHBpbmctZXN0aW1hdGUtc2hvd19fYnRuLW5hbWUnLCAkZXN0aW1hdG9yQ29udGFpbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHNCYXNlLCB7IG9wdGlvbkNoYW5nZURlY29yYXRvciB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xyXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgaXNCcm93c2VySUUsIGNvbnZlcnRJbnRvQXJyYXkgfSBmcm9tICcuL3V0aWxzL2llLWhlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEl0ZW1EZXRhaWxzIGV4dGVuZHMgUHJvZHVjdERldGFpbHNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0ge30pIHtcclxuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJyNDYXJ0RWRpdFByb2R1Y3RGaWVsZHNGb3JtJywgdGhpcy4kc2NvcGUpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCAkZm9ybSk7XHJcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlQ2FsbGJhY2sgPSBvcHRpb25DaGFuZ2VEZWNvcmF0b3IuY2FsbCh0aGlzLCBoYXNEZWZhdWx0T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXHJcbiAgICAgICAgLy8gb3IgaGF2ZSBkZWZhdWx0IHZhcmlhbnQgcHJvcGVydGllcyB0aGF0IGNoYW5nZSB0aGUgdmlld1xyXG4gICAgICAgIGlmICgoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHRoaXMuY29udGV4dC5wcm9kdWN0Rm9yQ2hhbmdlSWQ7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQoKSB7XHJcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGV4dGFyZWEnICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFudHNsaXN0ID0gY29udmVydEludG9BcnJheSh2YWx1ZS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQgPSBpbnB0ID0+IGlucHQuZGF0YXNldC5wcm9kdWN0QXR0cmlidXRlVmFsdWUgPT09IGNoZWNrZWQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0KVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuY2hpbGRyZW5bMF0gOiBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJykgOiAndW5zYXRpc2ZpZWQnO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcubW9kYWwtaGVhZGVyLXRpdGxlJyk7XHJcblxyXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xyXG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9IHByb2R1Y3RWYXJpYW50ID09PSAndW5zYXRpc2ZpZWQnID8gJycgOiBwcm9kdWN0VmFyaWFudDtcclxuICAgICAgICAgICAgaWYgKHZpZXcuYXR0cignZGF0YS1ldmVudC10eXBlJykpIHtcclxuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IHZpZXcuaHRtbCgpLm1hdGNoKC8nKC4qPyknLylbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaGlkZS1jb250ZW50Jyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcclxuICAgIGlmICh0eXBlb2YgY2VydCAhPT0gJ3N0cmluZycgfHwgY2VydC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGluc2VydFN0YXRlSGlkZGVuRmllbGQgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcblxyXG4vKipcclxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXHJcbiAqIEByZXR1cm5zIHtqUXVlcnl8SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcclxuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcclxuICAgICAgICBpZDogYXR0cnMuaWQsXHJcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxyXG4gICAgICAgIGNsYXNzOiAnZm9ybS1zZWxlY3QnLFxyXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXHJcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XHJcblxyXG4gICAgY29uc3QgJG5ld0VsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcclxuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xyXG5cclxuICAgIGlmICgkaGlkZGVuSW5wdXQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAvLyBTdHJpbmcgaXMgaW5qZWN0ZWQgZnJvbSBsb2NhbGl6ZXJcclxuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuYXBwZW5kKGA8c21hbGw+JHtjb250ZXh0LnJlcXVpcmVkfTwvc21hbGw+YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZiBhIGNvdW50cnkgd2l0aCBzdGF0ZXMgaXMgdGhlIGRlZmF1bHQsIGEgc2VsZWN0IHdpbGwgYmUgc2VudCxcclxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlU3RhdGVPcHRpb25hbChzdGF0ZUVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcclxuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIGlkOiBhdHRycy5pZCxcclxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXHJcbiAgICAgICAgY2xhc3M6ICdmb3JtLWlucHV0JyxcclxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxyXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8aW5wdXQgLz4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcclxuXHJcbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG5cclxuICAgIGlmICgkbmV3RWxlbWVudC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcclxuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyB0aGUgYXJyYXkgb2Ygb3B0aW9ucyBmcm9tIHRoZSByZW1vdGUgcmVxdWVzdCB0byB0aGUgbmV3bHkgY3JlYXRlZCBzZWxlY3QgYm94LlxyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcclxuICogQHBhcmFtIHtqUXVlcnl9ICRzZWxlY3RFbGVtZW50XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRPcHRpb25zKHN0YXRlc0FycmF5LCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gW107XHJcblxyXG4gICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCJcIj4ke3N0YXRlc0FycmF5LnByZWZpeH08L29wdGlvbj5gKTtcclxuXHJcbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcclxuICAgICAgICBzdGF0ZXNBcnJheS5zdGF0ZXMuZm9yRWFjaCgoc3RhdGVPYmopID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudXNlSWRGb3JTdGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7c3RhdGVPYmoubmFtZX1cIj4ke3N0YXRlT2JqLmxhYmVsID8gc3RhdGVPYmoubGFiZWwgOiBzdGF0ZU9iai5uYW1lfTwvb3B0aW9uPmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRzZWxlY3RFbGVtZW50Lmh0bWwoY29udGFpbmVyLmpvaW4oJyAnKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge2pRdWVyeX0gc3RhdGVFbGVtZW50XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGVFbGVtZW50LCBjb250ZXh0ID0ge30sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxyXG4gICAgICpcclxuICAgICAqIEF2YWlsYWJsZSBvcHRpb25zOlxyXG4gICAgICpcclxuICAgICAqIHVzZUlkRm9yU3RhdGVzIHtCb29sfSAtIEdlbmVyYXRlcyBzdGF0ZXMgZHJvcGRvd24gdXNpbmcgaWQgZm9yIHZhbHVlcyBpbnN0ZWFkIG9mIHN0cmluZ3NcclxuICAgICAqL1xyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuICAgIH1cclxuXHJcbiAgICAkKCdzZWxlY3RbZGF0YS1maWVsZC10eXBlPVwiQ291bnRyeVwiXScpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgY291bnRyeU5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRyeU5hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jb3VudHJ5LmdldEJ5TmFtZShjb3VudHJ5TmFtZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoY29udGV4dC5zdGF0ZV9lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRJbnB1dCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFfLmlzRW1wdHkocmVzcG9uc2UuZGF0YS5zdGF0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHJlcGxhY2VkIHdpdGggYSBzZWxlY3QsIHJlc2VsZWN0IGl0XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFkZE9wdGlvbnMocmVzcG9uc2UuZGF0YSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG1ha2VTdGF0ZU9wdGlvbmFsKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG5ld0VsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcclxuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xyXG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xyXG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXHJcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxyXG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xyXG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJfc2V0UHJvdG90eXBlT2YiLCJiaW5kIiwiUGFnZU1hbmFnZXIiLCJjaGVja0lzR2lmdENlcnRWYWxpZCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsInV0aWxzIiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJkZWZhdWx0TW9kYWwiLCJzaG93QWxlcnRNb2RhbCIsIk1vZGFsRXZlbnRzIiwiQ2FydEl0ZW1EZXRhaWxzIiwiZ3JhcGhxbFNlcnZpY2UiLCJnZXREYXRhRnJvbUdyYXBocWwiLCJnZXREYXRhIiwic2V0TG9jYWxTdG9yYWdlV2l0aEV4cGlyYXRpb24iLCJnZXRMb2NhbFN0b3JhZ2VJdGVtIiwicmVtb3ZlTG9jYWxTdG9yYWdlSXRlbSIsImdldFBhcnR5QnlJZCIsImdldEN1c3RvbUZpZWxkc0J5UHJvZHVjdElkIiwiaXNQcm9kdWN0QXZhaWxhYmxlRm9yU3Vic2NyaXB0aW9uIiwiQ2FydCIsIl9QYWdlTWFuYWdlciIsIl9wcm90byIsIm9uUmVhZHkiLCIkbW9kYWwiLCIkY2FydFBhZ2VDb250ZW50IiwiJCIsIiRjYXJ0Q29udGVudCIsIiRjYXJ0TWVzc2FnZXMiLCIkY2FydFRvdGFscyIsIiRjYXJ0QWRkaXRpb25hbENoZWNrb3V0QnRucyIsIiRvdmVybGF5IiwiaGlkZSIsIiRhY3RpdmVDYXJ0SXRlbUlkIiwiJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9uIiwiZ3JhcGhBcGlTZXJ2aWNlIiwiX2dldExvY2FsU3RvcmFnZUl0ZW0iLCJjb3Vwb25OYW1lIiwidGV4dCIsInNldEFwcGxlUGF5U3VwcG9ydCIsImJpbmRFdmVudHMiLCJjaGVja1Byb2R1Y3RzQ291bnRyeSIsImNoZWNrUGFydHlDb2RlIiwicmVmcmVzaENvbnRlbnRCZWZvcmVSZWRpcmVjdCIsIl90aGlzIiwiX3JlZiIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicmVmcmVzaENvbnRlbnQiLCJfeCIsImNhcnRSZW1vdmVJdGVtQW5vdGhlclpvbmVJdGVtIiwiaXRlbUlkIiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImFwaSIsImNhcnQiLCJpdGVtUmVtb3ZlIiwicmVzcG9uc2UiLCJkYXRhIiwic3RhdHVzIiwiX3gyIiwicmVtb3ZlQWxsSXRlbXNGcm9tQW5vdGhlclpvbmUiLCJfcmVtb3ZlQWxsSXRlbXNGcm9tQW5vdGhlclpvbmUiLCJfY2FsbGVlMyIsImV2ZW50IiwicHJvZHVjdHMiLCJfaXRlcmF0b3IiLCJfc3RlcCIsInByb2R1Y3QiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJwcmV2ZW50RGVmYXVsdCIsInNob3ciLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiZXJyb3JzIiwiam9pbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRhcmdldCIsIl94MyIsIl94NCIsIl9jaGVja1Byb2R1Y3RzQ291bnRyeSIsIl9jYWxsZWU0IiwiX3RoaXMyIiwicGFyYW1zIiwic2VsZWN0ZWRDb3VudHJ5IiwiJG5lZWRlZEJ1dHRvbiIsIml0ZW1zVG9SZW1vdmUiLCJnZXRDb3VudHJ5IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX2dldENvdW50cnkiLCJzZWxlY3RvciIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImdldCIsImNvbnRleHQiLCJjYXJ0SXRlbXMiLCJpdGVtIiwiYXZhaWxhYmxlIiwiY3VzdG9tX2ZpZWxkcyIsImZpbmQiLCJmaWVsZCIsImlkIiwiJG5lZWRlZEVsZW1lbnQiLCJwcm9kdWN0X2lkIiwiJGNvdW50cnlDb2RlRWxlbWVudCIsIiRjYXJ0SXRlbUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJvbiIsIkFwcGxlUGF5U2Vzc2lvbiIsImFkZENsYXNzIiwiY2FydFVwZGF0ZSIsIiR0YXJnZXQiLCJfdGhpczMiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsInZhbCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJpdGVtVXBkYXRlIiwicmVtb3ZlIiwiY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UiLCJwcmVWYWwiLCJfdGhpczQiLCJOdW1iZXIiLCJpbnZhbGlkRW50cnkiLCJpc0ludGVnZXIiLCJpbnZhbGlkRW50cnlNZXNzYWdlIiwicmVwbGFjZSIsImNhcnRSZW1vdmVJdGVtIiwiX3RoaXM1IiwiY2FydEVkaXRPcHRpb25zIiwicHJvZHVjdElkIiwiX3RoaXM2IiwiX2V4dGVuZHMiLCJwcm9kdWN0Rm9yQ2hhbmdlSWQiLCJtb2RhbCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIm9wZW4iLCJwcm9kdWN0QXR0cmlidXRlcyIsImNvbmZpZ3VyZUluQ2FydCIsInVwZGF0ZUNvbnRlbnQiLCJjb250ZW50Iiwib3B0aW9uQ2hhbmdlSGFuZGxlciIsIiRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lciIsIm1vZGFsQm9keVJlc2VydmVkSGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjc3MiLCJoYXNDbGFzcyIsIm9uZSIsIm9wZW5lZCIsInByb2R1Y3REZXRhaWxzIiwiYmluZEdpZnRXcmFwcGluZ0Zvcm0iLCJob29rcyIsImN1cnJlbnRUYXJnZXQiLCIkZm9ybSIsIiRzdWJtaXQiLCIkbWVzc2FnZUJveCIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInByb3AiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJfdGhpczciLCIkY2FydEl0ZW1zUm93cyIsIiRjYXJ0UGFnZVRpdGxlIiwidG90YWxzIiwicGFnZVRpdGxlIiwic3RhdHVzTWVzc2FnZXMiLCJhZGRpdGlvbmFsQ2hlY2tvdXRCdXR0b25zIiwicmVsb2FkIiwiZ2V0Q29udGVudCIsImh0bWwiLCJyZXBsYWNlV2l0aCIsInF1YW50aXR5Iiwic3ViVG90YWwiLCJ0cmltIiwidHJpZ2dlciIsImZpbHRlciIsImdldENvdXBvbkRhdGEiLCJfZ2V0Q291cG9uRGF0YSIsIl9jYWxsZWU1IiwiY291cG9uQ29kZSIsImF3c191cmwiLCJhd3MiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJ0aGVtZVNldHRpbmciLCJfeDUiLCJiaW5kQ2FydEV2ZW50cyIsIl90aGlzOCIsImRlYm91bmNlVGltZW91dCIsIl9iaW5kIiwiX2RlYm91bmNlIiwicmVtb3ZlU2NlbnRmbGlydEl0ZW1zIiwib25RdHlGb2N1cyIsImNoYW5nZSIsInN1YnNjcmlwdGlvbl9wcm9kdWN0c19pZHMiLCJzdHJpbmciLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsIm9uQ29uZmlybSIsImluY2x1ZGVzIiwiX3JlbW92ZVNjZW50ZmxpcnRJdGVtcyIsIl9jYWxsZWU2Iiwic3Vic2NyaXB0aW9uSWQiLCJzY2VudGZsaXJ0X3N1YnNjcmliZXJfdHlwZV9pZCIsImlzQ3VzdG9tZXJFeGNsdXNpdmUiLCJfY3VzdG9tZXJBdHRyU3Vic2NyaWIiLCJjdXN0b21lckF0dHJTdWJzY3JpYmVyVHlwZSIsImN1c3RvbWVyU3Vic1ZhbHVlIiwiY3VzdG9tZXJTdWJzVmFsdWVTcGxpdHRlZCIsIml0ZW1zIiwiaXRlbXNLZXB0SW5DYXJ0IiwicmVtb3ZhbFByb21pc2VzIiwiaW5kZXgiLCJjYXJ0SXRlbSIsInJlbW92ZUJ0biIsImN1c3RvbUZpZWxkcyIsImlzU2NlbnRmbGlydFByb2R1Y3QiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJjdXN0b21lciIsInN0b3JlZnJvbnRBUElUb2tlbiIsImF0dHJpYnV0ZUlkIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZSIsInNwbGl0IiwiYWxsIiwiX3g2IiwiYmluZFByb21vQ29kZUV2ZW50cyIsIl90aGlzOSIsIiRjb3Vwb25Db250YWluZXIiLCIkY291cG9uRm9ybSIsIiRjb2RlSW5wdXQiLCJjb2RlIiwiYXBwbHlDb2RlIiwiYmluZFBhcnR5Q29kZUV2ZW50cyIsIiRwYXJ0eUNvbnRhaW5lciIsIiRwYXJ0eUZvcm0iLCJiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzIiwiX3RoaXMxMCIsIiRjZXJ0Q29udGFpbmVyIiwiJGNlcnRGb3JtIiwiJGNlcnRJbnB1dCIsInRvZ2dsZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJyZXNwIiwiYmluZEdpZnRXcmFwcGluZ0V2ZW50cyIsIl90aGlzMTEiLCJnZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyIsIiRzZWxlY3QiLCJhbGxvd01lc3NhZ2UiLCJ0b2dnbGVWaWV3cyIsIiRzaW5nbGVGb3JtIiwiJG11bHRpRm9ybSIsImJpbmRSZW1vdmVQYXJ0eSIsInNoaXBwaW5nRXJyb3JNZXNzYWdlcyIsImNvdW50cnkiLCJzaGlwcGluZ0NvdW50cnlFcnJvck1lc3NhZ2UiLCJwcm92aW5jZSIsInNoaXBwaW5nUHJvdmluY2VFcnJvck1lc3NhZ2UiLCJzaGlwcGluZ0VzdGltYXRvciIsImdldFBhcnR5Q29kZUZyb21VcmwiLCJnZXRQYXJ0eUNvZGUiLCJyZW1vdmVDbGFzcyIsIl9nZXRQYXJ0eUJ5SWQiLCJ1cmxQYXJhbXMiLCJwYXJ0eUlkIiwiX2N1cnJlbnRQYXJ0eSR2YWx1ZSIsImN1cnJlbnRQYXJ0eSIsImRlZmF1bHQiLCJzdGF0ZUNvdW50cnkiLCJub2QiLCJWYWxpZGF0b3JzIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaXNFc3RpbWF0b3JGb3JtT3BlbmVkIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ0VzdGltYXRvckFsZXJ0Iiwic2hpcHBpbmdWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCJhdHRyIiwicmVtb3ZlQXR0ciIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImJpbmRWYWxpZGF0aW9uIiwiYmluZFN0YXRlVmFsaWRhdGlvbiIsImJpbmRVUFNSYXRlcyIsInZhbGlkYXRlIiwiY2IiLCJjb3VudHJ5SWQiLCJlcnJvck1lc3NhZ2UiLCIkZWxlIiwiZWxlVmFsIiwiVVBTUmF0ZVRvZ2dsZSIsIiRlc3RpbWF0b3JGb3JtVXBzIiwiJGVzdGltYXRvckZvcm1EZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCIkbGFzdCIsInVzZUlkRm9yU3RhdGVzIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiaXMiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwidG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlIiwidG9nZ2xlQnV0dG9uIiwiYnV0dG9uU2VsZWN0b3IiLCIkdG9nZ2xlQ29udGFpbmVyIiwiY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlIiwic2VsZWN0b3JUb0FjdGl2YXRlIiwiJGVzdGltYXRvckNvbnRhaW5lciIsIiRlc3RpbWF0b3JGb3JtIiwiY291bnRyeV9pZCIsInN0YXRlX2lkIiwiY2l0eSIsInppcF9jb2RlIiwiZ2V0U2hpcHBpbmdRdW90ZXMiLCJjbGlja0V2ZW50IiwicXVvdGVJZCIsInN1Ym1pdFNoaXBwaW5nUXVvdGUiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJpc0Jyb3dzZXJJRSIsImNvbnZlcnRJbnRvQXJyYXkiLCJfUHJvZHVjdERldGFpbHNCYXNlIiwiJHNjb3BlIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJoYXNEZWZhdWx0T3B0aW9ucyIsInNldFByb2R1Y3RWYXJpYW50Iiwib3B0aW9uQ2hhbmdlQ2FsbGJhY2siLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX2lzRW1wdHkiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJlYWNoIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsIm9wdGlvblRpdGxlIiwicmVxdWlyZWQiLCJ0b0xvd2VyQ2FzZSIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJpc1NhdGlzZmllZCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwibWFwIiwieCIsImNoZWNrZWQiLCJnZXRTZWxlY3RlZE9wdGlvbkxhYmVsIiwicHJvZHVjdFZhcmlhbnRzbGlzdCIsIm1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQiLCJpbnB0IiwiZGF0YXNldCIsInByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSIsImxhYmVsIiwibGFiZWxzIiwidGl0bGUiLCJwcm9kdWN0VmFyaWFudCIsInNvcnQiLCJ2aWV3IiwicHJvZHVjdE5hbWUiLCJtYXRjaCIsImNhcmQiLCJjZXJ0IiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIm1ha2VTdGF0ZVJlcXVpcmVkIiwic3RhdGVFbGVtZW50IiwiYXR0cnMiLCJfdHJhbnNmb3JtIiwicmV0IiwicmVwbGFjZW1lbnRBdHRyaWJ1dGVzIiwiJG5ld0VsZW1lbnQiLCIkaGlkZGVuSW5wdXQiLCJhcHBlbmQiLCJtYWtlU3RhdGVPcHRpb25hbCIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50IiwiY29udGFpbmVyIiwicHJlZml4Iiwic3RhdGVzIiwic3RhdGVPYmoiLCJjYWxsYmFjayIsImNvdW50cnlOYW1lIiwiZ2V0QnlOYW1lIiwic3RhdGVfZXJyb3IiLCIkY3VycmVudElucHV0IiwibmV3RWxlbWVudCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsIkpTT04iLCJwYXJzZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidHJhbnNsYXRpb25LZXlzIiwicmVkdWNlIiwiYWNjIl0sInNvdXJjZVJvb3QiOiIifQ==