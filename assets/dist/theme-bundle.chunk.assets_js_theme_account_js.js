"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_account_js"],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _api_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api-helper */ "./assets/js/api-helper.js");
/* harmony import */ var _consultant_consultant_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./consultant/consultant-helper */ "./assets/js/theme/consultant/consultant-helper.js");
/* harmony import */ var _custom_remove_undesirable_countries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./custom/remove-undesirable-countries */ "./assets/js/theme/custom/remove-undesirable-countries.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);
  function Account(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__.createTranslationDictionary)(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    var $editAccountForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-edit-account-form]');
    var $addressForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-address-form]');
    var $inboxForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-inbox-form]');
    var $accountReturnForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-return-form]');
    var $paymentMethodForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-payment-method-form]');
    var $reorderForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');
    var $bigCommerce = window.BigCommerce;
    this.$modal = null;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context);
    if (this.context.template === 'pages/account/orders/all') {
      this.initOrdersShipments(this.context.customer.orders);
    }
    if (this.context.template === 'pages/account/orders/details') {
      this.initOrderDetailsPage(this.context.orderId);
    }
    if (this.context.pageType === 'editaccount') {
      this.initConsultantData(this.context);
    }

    // Injected via template
    this.passwordRequirements = this.context.passwordRequirements;

    // Instantiates wish list JS
    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);
    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);
      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }
    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }
    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);
      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }
    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }
    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }
    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }
    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }
    if ($bigCommerce && $bigCommerce.accountPayments) {
      var _this$context = this.context,
        countries = _this$context.countries,
        paymentsUrl = _this$context.paymentsUrl,
        storeHash = _this$context.storeHash,
        storeLocale = _this$context.storeLocale,
        vaultToken = _this$context.vaultToken,
        shopperId = _this$context.shopperId,
        customerEmail = _this$context.customerEmail,
        providerId = _this$context.providerId,
        currencyCode = _this$context.currencyCode,
        paymentMethodsUrl = _this$context.paymentMethodsUrl,
        paymentProviderInitializationData = _this$context.paymentProviderInitializationData;
      window.BigCommerce.accountPayments({
        widgetStyles: {
          base: {
            color: '#666666',
            cursor: 'pointer',
            display: 'block',
            fontSize: '1rem',
            lineHeight: '1.5',
            marginBottom: '0.5rem'
          },
          error: {
            color: 'red'
          },
          placeholder: {
            color: '#d8d8d8'
          },
          validated: {
            color: 'green'
          }
        },
        initializeData: {
          countries: countries,
          paymentsUrl: paymentsUrl,
          storeHash: storeHash,
          storeLocale: storeLocale,
          vaultToken: vaultToken,
          shopperId: shopperId,
          customerEmail: customerEmail,
          providerId: providerId,
          currencyCode: currencyCode,
          paymentMethodsUrl: paymentMethodsUrl,
          paymentProviderInitializationData: paymentProviderInitializationData
        }
      });
    }
    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
    this.bindSelectAll();
    this.checkOrderStatus(this.context);
    this.initChangeAddressModal();
    this.aws_url = this.context.themeSetting.aws_url;
    this.aws_cloudfront_url = this.context.themeSetting.aws_cloudfront_url;
    this.orderId = this.getOrderId();
    if (this.orderId) {
      this.getOrderConsultant();
      this.setOrderParty(this.context);
    }
    (0,_custom_remove_undesirable_countries__WEBPACK_IMPORTED_MODULE_14__.removeUndesirableCountries)('select[data-field-type="Country"]');
  };
  _proto.checkOrderStatus = function checkOrderStatus(context) {
    var orderStatus = parseInt(context.orderStatus, 10);
    var editConsultant = $('.edit-button--consultant');
    var shippingElement = $('.heading-wrapper');
    if (orderStatus === 11 || orderStatus >= 7 && orderStatus <= 9) {
      editConsultant.removeClass('u-hidden');
      $('<button>').html('Edit').addClass('edit-button edit-button--address open-change-address').appendTo(shippingElement);
    }
  };
  _proto.getOrderConsultant = /*#__PURE__*/function () {
    var _getOrderConsultant = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var params, consultantWebsite, consultant;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            params = new URLSearchParams(document.location.search);
            consultantWebsite = params.get('consultant_order');
            _context.next = 4;
            return this.setOrderMetafield();
          case 4:
            if (!consultantWebsite) {
              _context.next = 12;
              break;
            }
            _context.next = 7;
            return (0,_api_helper__WEBPACK_IMPORTED_MODULE_12__.getData)(this.aws_cloudfront_url + "getByWebsite?website=" + consultantWebsite);
          case 7:
            consultant = _context.sent;
            this.consultant = (consultant == null ? void 0 : consultant.rep) || null;
            this.updateConsultantMetafield();
            _context.next = 15;
            break;
          case 12:
            if (!this.orderMetafield) {
              _context.next = 15;
              break;
            }
            _context.next = 15;
            return this.getConsultantById(this.orderMetafield.consultant_id);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function getOrderConsultant() {
      return _getOrderConsultant.apply(this, arguments);
    }
    return getOrderConsultant;
  }();
  _proto.setOrderParty = /*#__PURE__*/function () {
    var _setOrderParty = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(context) {
      var partyElement, partyData;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            partyElement = $('.definitionList-value.party-value'); // console.log(partyElement);
            _context2.next = 3;
            return this.getOrderParty(context);
          case 3:
            partyData = _context2.sent;
            if (partyData.party_name) {
              partyElement.html(partyData.party_name + " - partyID: " + partyData.party_id);
            } else {
              partyElement.html(partyData.party_id);
            }
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function setOrderParty(_x) {
      return _setOrderParty.apply(this, arguments);
    }
    return setOrderParty;
  }();
  _proto.getOrderParty = /*#__PURE__*/function () {
    var _getOrderParty = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(context) {
      var orderId, body, _response$data, aws, response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            orderId = parseInt(this.orderId, 10);
            body = {
              orderId: orderId,
              email: context.customer.email
            };
            _context3.prev = 2;
            aws = this.aws_url + "bc/orders/metafields/get";
            _context3.next = 6;
            return (0,_api_helper__WEBPACK_IMPORTED_MODULE_12__.getData_Post)(aws, body);
          case 6:
            response = _context3.sent;
            if (!(response != null && (_response$data = response.data) != null && _response$data.length)) {
              _context3.next = 9;
              break;
            }
            return _context3.abrupt("return", JSON.parse(response.data[0].value));
          case 9:
            return _context3.abrupt("return", '-');
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);
            // Handle any errors that occur during the API request
            console.error(_context3.t0);
            (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)("An error occurred: " + _context3.t0);
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this, [[2, 12]]);
    }));
    function getOrderParty(_x2) {
      return _getOrderParty.apply(this, arguments);
    }
    return getOrderParty;
  }();
  _proto.setOrderMetafield = /*#__PURE__*/function () {
    var _setOrderMetafield = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _this$context2, orderId, customer, body, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _this$context2 = this.context, orderId = _this$context2.orderId, customer = _this$context2.customer;
            body = {
              email: customer.email,
              orderId: orderId
            };
            _context4.next = 4;
            return (0,_api_helper__WEBPACK_IMPORTED_MODULE_12__.createData)(this.aws_cloudfront_url + "bc/orders/metafields/get", body);
          case 4:
            response = _context4.sent;
            if (response != null && response.data && Array.isArray(response.data) && response.data.length) {
              this.orderMetafield = JSON.parse(response.data[0].value);
            }
          case 6:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    function setOrderMetafield() {
      return _setOrderMetafield.apply(this, arguments);
    }
    return setOrderMetafield;
  }();
  _proto.getConsultantById = /*#__PURE__*/function () {
    var _getConsultantById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var consultant;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0,_api_helper__WEBPACK_IMPORTED_MODULE_12__.getData)(this.aws_cloudfront_url + "search?repID=" + 1);
          case 2:
            consultant = _context5.sent;
            // we will need to replace the hardcoded value for the ID
            if (consultant && Array.isArray(consultant)) {
              this.consultant = consultant[0];
              this.enableWebsiteLink();
            }
          case 4:
          case "end":
            return _context5.stop();
        }
      }, _callee5, this);
    }));
    function getConsultantById() {
      return _getConsultantById.apply(this, arguments);
    }
    return getConsultantById;
  }();
  _proto.updateConsultantMetafield = /*#__PURE__*/function () {
    var _updateConsultantMetafield = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _this$consultant;
      var body, action, _response$data2, response, _response$data3;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(!this.orderId || !((_this$consultant = this.consultant) != null && _this$consultant.repID))) {
              _context6.next = 2;
              break;
            }
            return _context6.abrupt("return");
          case 2:
            body = {
              consultant_id: this.consultant.repID,
              cartId: this.orderId
            };
            action = this.orderMetafield ? 'update' : 'create';
            _context6.prev = 4;
            _context6.next = 7;
            return (0,_api_helper__WEBPACK_IMPORTED_MODULE_12__.createData)(this.aws_cloudfront_url + "bc/orders/metafields/" + action, body);
          case 7:
            response = _context6.sent;
            if (!(response != null && (_response$data2 = response.data) != null && _response$data2.id)) {
              _context6.next = 12;
              break;
            }
            this.enableWebsiteLink();
            _context6.next = 15;
            break;
          case 12:
            (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)((response == null || (_response$data3 = response.data) == null ? void 0 : _response$data3.message) || 'Cannot update the consultant');
            _context6.next = 15;
            return this.getConsultantById(this.orderMetafield.consultant_id);
          case 15:
            _context6.next = 21;
            break;
          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](4);
            // Handle any errors that occur during the API request
            console.error(_context6.t0);
            (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)("An error occurred: " + _context6.t0);
          case 21:
          case "end":
            return _context6.stop();
        }
      }, _callee6, this, [[4, 17]]);
    }));
    function updateConsultantMetafield() {
      return _updateConsultantMetafield.apply(this, arguments);
    }
    return updateConsultantMetafield;
  }();
  _proto.getOrderId = function getOrderId() {
    var params = new URLSearchParams(document.location.search);
    return params.get('order_id');
  };
  _proto.enableWebsiteLink = function enableWebsiteLink() {
    var _this$consultant2 = this.consultant,
      website = _this$consultant2.website,
      first_name = _this$consultant2.first_name,
      last_name = _this$consultant2.last_name,
      repID = _this$consultant2.repID;
    var $websiteLink = $('.consultant-value').find('a');
    $websiteLink.attr('href', "/consultant-bio?website=" + website);
    $websiteLink.html(first_name + " " + last_name + " - repID: " + repID);
  };
  _proto.initChangeAddressModal = function initChangeAddressModal() {
    var _this2 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.defaultModal)();
    $('.open-change-address').on('click', function (event) {
      event.preventDefault();
      modal.open();
      modal.updateContent("<form class=\"change-address-form\">\n                <p>Only street address can be changed.</p>\n                <div class=\"input-wrapper\">\n                    <div id=\"formField-address1\" class=\"form-field form-field--input form-field--inputText\" data-type=\"AddressLine1\">\n                        <label class=\"form-label\" for=\"addressLine1\">Address Line 1 *</label>\n                        <input class=\"new-address-input form-input\" type=\"text\" id=\"addressLine1\" name=\"addressLine1\" data-label=\"Address Line 1\" aria-required=\"true\" data-field-type=\"AddressLine1\" >\n                    </div>\n                    <div id=\"formField-address2\" class=\"form-field form-field--input form-field--inputText\" data-type=\"AddressLine2\">\n                        <label class=\"form-label\" for=\"addressLine1\">Address Line 2</label>\n                        <input class=\"new-address-input form-input\" type=\"text\" id=\"addressLine2\" name=\"addressLine2\" data-label=\"Address Line 2\" aria-required=\"false\" data-field-type=\"AddressLine2\" >\n                    </div>\n                    <p class=\"alert-text u-hidden\">Address Line 1 cannot be empty</p>\n                    <p class=\"confirmation-text u-hidden\">Address changed successfully</p>\n                </div>\n                <button class=\"change-address-submit button button--primary\" type=\"submit\">\n                    Change Address\n                </button>\n            </form>");
      $('form .change-address-submit').on('click', function (ev) {
        ev.preventDefault();
        var addressLine1 = $('#addressLine1').val();
        var addressLine2 = $('#addressLine2').val();
        var alertText = $('.alert-text');
        if (addressLine1 === '') {
          alertText.removeClass('u-hidden');
        } else {
          alertText.addClass('u-hidden');
          _this2.updateShippingAddress(addressLine1, addressLine2);
        }
      });
    });
  };
  _proto.updateShippingAddress = /*#__PURE__*/function () {
    var _updateShippingAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(addressLine1, addressLine2) {
      var body, aws, response, confirmationText, _response$data4;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            body = {
              orderId: this.orderId,
              street1: addressLine1,
              street2: addressLine2
            };
            _context7.prev = 1;
            aws = this.aws_url + "bc/orders/shippingStreetAddress/update";
            _context7.next = 5;
            return (0,_api_helper__WEBPACK_IMPORTED_MODULE_12__.getData_Post)(aws, body);
          case 5:
            response = _context7.sent;
            confirmationText = $('.confirmation-text');
            if (response != null && response.data) {
              confirmationText.removeClass('u-hidden');
              window.location.reload();
            } else {
              (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)((response == null || (_response$data4 = response.data) == null ? void 0 : _response$data4.message) || 'Cannot update the consultant');
            }
            _context7.next = 14;
            break;
          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](1);
            // Handle any errors that occur during the API request
            console.error(_context7.t0);
            (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)("An error occurred: " + _context7.t0);
          case 14:
          case "end":
            return _context7.stop();
        }
      }, _callee7, this, [[1, 10]]);
    }));
    function updateShippingAddress(_x3, _x4) {
      return _updateShippingAddress.apply(this, arguments);
    }
    return updateShippingAddress;
  }();
  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.bindSelectAll = function bindSelectAll() {
    $('#select-all-products').on('click', function (event) {
      var checkboxes = $('.account-product-checkItem .form-checkbox');
      if (event.target.checked) {
        checkboxes.each(function (i, element) {
          element.checked = true;
        });
      } else {
        checkboxes.each(function (i, element) {
          element.checked = false;
        });
      }
    });
  };
  _proto.initConsultantData = /*#__PURE__*/function () {
    var _initConsultantData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(context) {
      var idField, nameField, phoneField, emailField, data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            idField = $('.consultant-field .id-field');
            nameField = $('.consultant-field .name-field');
            phoneField = $('.consultant-field .phone-field');
            emailField = $('.consultant-field .email-field');
            _context8.next = 6;
            return (0,_consultant_consultant_helper__WEBPACK_IMPORTED_MODULE_13__.getConsultantFromAttribute)(context);
          case 6:
            data = _context8.sent;
            if (data) {
              idField.text(data.repID);
              nameField.text(data.name);
              phoneField.text(data.phone);
              emailField.text(data.email);
            } else {
              idField.text('-');
              nameField.text('-');
              phoneField.text('-');
              emailField.text('-');
            }
          case 8:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    function initConsultantData(_x5) {
      return _initConsultantData.apply(this, arguments);
    }
    return initConsultantData;
  }();
  _proto.initOrdersShipments = /*#__PURE__*/function () {
    var _initOrdersShipments = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(orders) {
      var _this3 = this;
      var trackingNumberEl, shipments, values;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            trackingNumberEl = $('.order-tracking-number');
            shipments = orders.map( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(order) {
                var response;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return _this3.getOrderShipments(order.id);
                    case 3:
                      response = _context9.sent;
                      if (!(response && Array.isArray(response))) {
                        _context9.next = 6;
                        break;
                      }
                      return _context9.abrupt("return", response.map(function (shipment) {
                        return {
                          orderId: shipment.order_id,
                          trackingNumber: shipment.tracking_number
                        };
                      }));
                    case 6:
                      return _context9.abrupt("return", '-');
                    case 9:
                      _context9.prev = 9;
                      _context9.t0 = _context9["catch"](0);
                      console.log(_context9.t0);
                    case 12:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9, null, [[0, 9]]);
              }));
              return function (_x7) {
                return _ref.apply(this, arguments);
              };
            }());
            if (!shipments) {
              _context10.next = 7;
              break;
            }
            _context10.next = 5;
            return Promise.all(shipments);
          case 5:
            values = _context10.sent;
            trackingNumberEl.each(function (i, element) {
              var trackingText = '';
              if (values[i] && values[i] !== '-') {
                trackingText = values[i][0].trackingNumber;
                values[i].forEach(function (tracking, index) {
                  if (index) {
                    trackingText = trackingText + "\n" + tracking.trackingNumber;
                  } else {
                    trackingText = tracking.trackingNumber;
                  }
                });
              } else {
                trackingText = '-';
              }
              $(element).text(trackingText);
            });
          case 7:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    function initOrdersShipments(_x6) {
      return _initOrdersShipments.apply(this, arguments);
    }
    return initOrdersShipments;
  }();
  _proto.getOrderShipments = /*#__PURE__*/function () {
    var _getOrderShipments = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(orderId) {
      var aws_url, aws, response;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            aws_url = this.context.themeSetting.aws_url;
            aws = aws_url + "bc/orders?orderId=" + orderId;
            _context11.next = 4;
            return (0,_api_helper__WEBPACK_IMPORTED_MODULE_12__.getData)(aws);
          case 4:
            response = _context11.sent;
            return _context11.abrupt("return", response);
          case 6:
          case "end":
            return _context11.stop();
        }
      }, _callee11, this);
    }));
    function getOrderShipments(_x8) {
      return _getOrderShipments.apply(this, arguments);
    }
    return getOrderShipments;
  }();
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this4 = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this4.context.selectItem);
      }
    });
  };
  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this5 = this;
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    addressValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }
        if ($last) {
          addressValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(addressValidator, field, _this5.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
        }
      });
    }
    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();
      if (addressValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false;

      // Iterate until we find a non-zero value in the dropdown for quantity
      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true;

          // Exit out of loop if we found at least one return
          return true;
        }
      });
      if (formSubmit) {
        return true;
      }
      (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(errorMessage);
      return event.preventDefault();
    });
  };
  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this6 = this;
    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, \"prefix\": \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last;
    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }
      var $field = $(field);
      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }
      if ($last) {
        paymentMethodValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(paymentMethodValidator, field, _this6.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
      }
    });

    // Use credit card number input listener to highlight credit card type
    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref2) {
      var target = _ref2.target;
      cardType = (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.creditCardType)(target.value);
      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    });

    // Set of credit card validation
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    });

    // Set of credit card format
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]");

    // Billing address validation
    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault();
      // Perform final form validation
      paymentMethodValidator.performCheck();
      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {});

        // Assign country and state code
        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this6.context.countries, function (_ref3) {
          var value = _ref3.value;
          return value === data.country;
        });
        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref4) {
          var value = _ref4.value;
          return value === data.state;
        });
        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state;

        // Default Instrument
        data.default_instrument = !!data.default_instrument;

        // Store credit card
        (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.storeInstrument)(_this6.context, data, function () {
          window.location.href = _this6.context.paymentMethodsUrl;
        }, function () {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this6.context.generic_error);
        });
      }
    });
  };
  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '${formEditSelector} input[type="submit"]',
      delay: 900
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector);

    // This only handles the custom fields, standard fields are added below
    editValidator.add(validationModel);
    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
        enterPassword = _this$validationDicti.password,
        matchPassword = _this$validationDicti.password_match;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error), true);
    }
    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;
          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }
          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }
    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }, {
      selector: formEditSelector + " input[name='account_phone']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: 'You must enter a phone number.'
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();
      if (editValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.focus();
      }, 900);
    });
  };
  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      delay: 900
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();
      if (inboxValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.focus();
      }, 900);
    });
  };
  _proto.initOrderDetailsPage = /*#__PURE__*/function () {
    var _initOrderDetailsPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(orderId) {
      var _this7 = this;
      var aws_url, response;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            aws_url = this.context.themeSetting.aws_url;
            _context12.next = 3;
            return (0,_api_helper__WEBPACK_IMPORTED_MODULE_12__.getData)(aws_url + "bc/ordersItems?orderId=" + orderId);
          case 3:
            response = _context12.sent;
            response.data.forEach(function (orderItem) {
              var reviewLink = "<a href=\"" + orderItem.url + "#write_review\"\n                class=\"button button--primary productView-reviewLink productView-reviewLink--new\"\n                role=\"button\">" + _this7.context.productsReview + "</a>";
              $("#account-product-" + orderItem.order_item_id).append(reviewLink);
            });
          case 5:
          case "end":
            return _context12.stop();
        }
      }, _callee12, this);
    }));
    function initOrderDetailsPage(_x9) {
      return _initOrderDetailsPage.apply(this, arguments);
    }
    return initOrderDetailsPage;
  }();
  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Formatters: () => (/* binding */ Formatters),
/* harmony export */   Validators: () => (/* binding */ Validators),
/* harmony export */   creditCardType: () => (/* binding */ creditCardType),
/* harmony export */   storeInstrument: () => (/* binding */ storeInstrument)
/* harmony export */ });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
    shopperId = _ref.shopperId,
    storeHash = _ref.storeHash,
    vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
    currency_code = _ref2.currency_code,
    credit_card_number = _ref2.credit_card_number,
    expiration = _ref2.expiration,
    name_on_card = _ref2.name_on_card,
    cvv = _ref2.cvv,
    default_instrument = _ref2.default_instrument,
    address1 = _ref2.address1,
    address2 = _ref2.address2,
    city = _ref2.city,
    postal_code = _ref2.postal_code,
    state_or_province_code = _ref2.state_or_province_code,
    country_code = _ref2.country_code,
    company = _ref2.company,
    first_name = _ref2.first_name,
    last_name = _ref2.last_name,
    email = _ref2.email,
    phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(target.value));
      });
    }
  },
  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
          which = _ref4.which;
        var refTarget = target;
        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var noCompareMessage = _ref.noCompareMessage,
    urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showAlertModal)(noCompareMessage);
      return false;
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9hY2NvdW50X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVB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QUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUVwRCxJQUFJK0osS0FBSyxDQUFDb0IsYUFBYSxDQUFDSSxPQUFPLEVBQUU7TUFDN0IrTSxnQkFBZ0IsQ0FBQ08sY0FBYyxFQUFFSSxPQUFPLENBQUM7SUFDN0MsQ0FBQyxNQUFNO01BQ0hmLGdCQUFnQixDQUFDVyxjQUFjLEVBQUVJLE9BQU8sQ0FBQztJQUM3QztJQUVBVixnQkFBZ0IsQ0FBQ00sY0FBYyxFQUFFSyxtQkFBbUIsRUFBRVQsSUFBSSxDQUFDO0VBQy9ELENBQUMsQ0FBQztFQUVGelksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDMkIsRUFBRSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxZQUFNO0lBQy9DLElBQU13WCxvQkFBb0IsR0FBR25aLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzJKLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUVqRixJQUFJd1Asb0JBQW9CLENBQUM5ZCxNQUFNLElBQUksQ0FBQyxFQUFFO01BQ2xDNkQsc0RBQWMsQ0FBQzBaLGdCQUFnQixDQUFDO01BQ2hDLE9BQU8sS0FBSztJQUNoQjtFQUNKLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcGF5bWVudC1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi93aXNobGlzdCc7XHJcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vY29tbW9uL2Zvcm0tdmFsaWRhdGlvbic7XHJcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XHJcbmltcG9ydCB7XHJcbiAgICBjbGFzc2lmeUZvcm0sXHJcbiAgICBWYWxpZGF0b3JzLFxyXG4gICAgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQsXHJcbiAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QsXHJcbn0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcbmltcG9ydCB7IGNyZWRpdENhcmRUeXBlLCBzdG9yZUluc3RydW1lbnQsIFZhbGlkYXRvcnMgYXMgQ0NWYWxpZGF0b3JzLCBGb3JtYXR0ZXJzIGFzIENDRm9ybWF0dGVycyB9IGZyb20gJy4vY29tbW9uL3BheW1lbnQtbWV0aG9kJztcclxuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwsIGRlZmF1bHRNb2RhbCB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuaW1wb3J0IHsgZ2V0RGF0YSwgY3JlYXRlRGF0YSwgZ2V0RGF0YV9Qb3N0IH0gZnJvbSAnLi4vYXBpLWhlbHBlcic7XHJcbmltcG9ydCB7IGdldENvbnN1bHRhbnRGcm9tQXR0cmlidXRlIH0gZnJvbSAnLi9jb25zdWx0YW50L2NvbnN1bHRhbnQtaGVscGVyJztcclxuaW1wb3J0IHsgcmVtb3ZlVW5kZXNpcmFibGVDb3VudHJpZXMgfSBmcm9tICcuL2N1c3RvbS9yZW1vdmUtdW5kZXNpcmFibGUtY291bnRyaWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcclxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBjb25zdCAkZWRpdEFjY291bnRGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJGFkZHJlc3NGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRpbmJveEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRhY2NvdW50UmV0dXJuRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZXR1cm4tZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkcGF5bWVudE1ldGhvZEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRyZW9yZGVyRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZW9yZGVyLWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJGludm9pY2VCdXR0b24gPSAkKCdbZGF0YS1wcmludC1pbnZvaWNlXScpO1xyXG4gICAgICAgIGNvbnN0ICRiaWdDb21tZXJjZSA9IHdpbmRvdy5CaWdDb21tZXJjZTtcclxuICAgICAgICB0aGlzLiRtb2RhbCA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRlbXBsYXRlID09PSAncGFnZXMvYWNjb3VudC9vcmRlcnMvYWxsJykge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRPcmRlcnNTaGlwbWVudHModGhpcy5jb250ZXh0LmN1c3RvbWVyLm9yZGVycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRlbXBsYXRlID09PSAncGFnZXMvYWNjb3VudC9vcmRlcnMvZGV0YWlscycpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0T3JkZXJEZXRhaWxzUGFnZSh0aGlzLmNvbnRleHQub3JkZXJJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnBhZ2VUeXBlID09PSAnZWRpdGFjY291bnQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdENvbnN1bHRhbnREYXRhKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgdGVtcGxhdGVcclxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkUmVxdWlyZW1lbnRzO1xyXG5cclxuICAgICAgICAvLyBJbnN0YW50aWF0ZXMgd2lzaCBsaXN0IEpTXHJcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgICAgICBpZiAoJGVkaXRBY2NvdW50Rm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRpbnZvaWNlQnV0dG9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkaW52b2ljZUJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoIC8gMiAtIDQ1MDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLyAyIC0gMzIwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJGludm9pY2VCdXR0b24uZGF0YSgncHJpbnRJbnZvaWNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnb3JkZXJJbnZvaWNlJywgYHdpZHRoPTkwMCxoZWlnaHQ9NjUwLGxlZnQ9JHtsZWZ0fSx0b3A9JHt0b3B9LHNjcm9sbGJhcnM9MWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkYWRkcmVzc0Zvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRpbmJveEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGFjY291bnRSZXR1cm5Gb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkcGF5bWVudE1ldGhvZEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRyZW9yZGVyRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkYmlnQ29tbWVyY2UgJiYgJGJpZ0NvbW1lcmNlLmFjY291bnRQYXltZW50cykge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJpZXMsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50c1VybCxcclxuICAgICAgICAgICAgICAgIHN0b3JlSGFzaCxcclxuICAgICAgICAgICAgICAgIHN0b3JlTG9jYWxlLFxyXG4gICAgICAgICAgICAgICAgdmF1bHRUb2tlbixcclxuICAgICAgICAgICAgICAgIHNob3BwZXJJZCxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyRW1haWwsXHJcbiAgICAgICAgICAgICAgICBwcm92aWRlcklkLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZHNVcmwsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50UHJvdmlkZXJJbml0aWFsaXphdGlvbkRhdGEsXHJcbiAgICAgICAgICAgIH0gPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuQmlnQ29tbWVyY2UuYWNjb3VudFBheW1lbnRzKHtcclxuICAgICAgICAgICAgICAgIHdpZGdldFN0eWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNjY2NjY2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwLjVyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZDhkOGQ4JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyaWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRzVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlSGFzaCxcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZUxvY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICB2YXVsdFRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RzVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRQcm92aWRlckluaXRpYWxpemF0aW9uRGF0YSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlQWRkcmVzcygpO1xyXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKTtcclxuICAgICAgICB0aGlzLmJpbmRTZWxlY3RBbGwoKTtcclxuICAgICAgICB0aGlzLmNoZWNrT3JkZXJTdGF0dXModGhpcy5jb250ZXh0KTtcclxuICAgICAgICB0aGlzLmluaXRDaGFuZ2VBZGRyZXNzTW9kYWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hd3NfdXJsID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZy5hd3NfdXJsO1xyXG4gICAgICAgIHRoaXMuYXdzX2Nsb3VkZnJvbnRfdXJsID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZy5hd3NfY2xvdWRmcm9udF91cmw7XHJcbiAgICAgICAgdGhpcy5vcmRlcklkID0gdGhpcy5nZXRPcmRlcklkKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9yZGVySWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRPcmRlckNvbnN1bHRhbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRPcmRlclBhcnR5KHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW1vdmVVbmRlc2lyYWJsZUNvdW50cmllcygnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja09yZGVyU3RhdHVzKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCBvcmRlclN0YXR1cyA9IHBhcnNlSW50KGNvbnRleHQub3JkZXJTdGF0dXMsIDEwKTtcclxuICAgICAgICBjb25zdCBlZGl0Q29uc3VsdGFudCA9ICQoJy5lZGl0LWJ1dHRvbi0tY29uc3VsdGFudCcpO1xyXG4gICAgICAgIGNvbnN0IHNoaXBwaW5nRWxlbWVudCA9ICQoJy5oZWFkaW5nLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICAgaWYgKG9yZGVyU3RhdHVzID09PSAxMSB8fCAob3JkZXJTdGF0dXMgPj0gNyAmJiBvcmRlclN0YXR1cyA8PSA5KSkge1xyXG4gICAgICAgICAgICBlZGl0Q29uc3VsdGFudC5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcclxuICAgICAgICAgICAgJCgnPGJ1dHRvbj4nKS5odG1sKCdFZGl0JykuYWRkQ2xhc3MoJ2VkaXQtYnV0dG9uIGVkaXQtYnV0dG9uLS1hZGRyZXNzIG9wZW4tY2hhbmdlLWFkZHJlc3MnKS5hcHBlbmRUbyhzaGlwcGluZ0VsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRPcmRlckNvbnN1bHRhbnQoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhbnRXZWJzaXRlID0gcGFyYW1zLmdldCgnY29uc3VsdGFudF9vcmRlcicpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0T3JkZXJNZXRhZmllbGQoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnN1bHRhbnRXZWJzaXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnN1bHRhbnQgPSBhd2FpdCBnZXREYXRhKGAke3RoaXMuYXdzX2Nsb3VkZnJvbnRfdXJsfWdldEJ5V2Vic2l0ZT93ZWJzaXRlPSR7Y29uc3VsdGFudFdlYnNpdGV9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3VsdGFudCA9IGNvbnN1bHRhbnQ/LnJlcCB8fCBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnN1bHRhbnRNZXRhZmllbGQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3JkZXJNZXRhZmllbGQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRDb25zdWx0YW50QnlJZCh0aGlzLm9yZGVyTWV0YWZpZWxkLmNvbnN1bHRhbnRfaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRPcmRlclBhcnR5KGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCBwYXJ0eUVsZW1lbnQgPSAkKCcuZGVmaW5pdGlvbkxpc3QtdmFsdWUucGFydHktdmFsdWUnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXJ0eUVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IHBhcnR5RGF0YSA9IGF3YWl0IHRoaXMuZ2V0T3JkZXJQYXJ0eShjb250ZXh0KTtcclxuXHJcbiAgICAgICAgaWYgKHBhcnR5RGF0YS5wYXJ0eV9uYW1lKSB7XHJcbiAgICAgICAgICAgIHBhcnR5RWxlbWVudC5odG1sKGAke3BhcnR5RGF0YS5wYXJ0eV9uYW1lfSAtIHBhcnR5SUQ6ICR7cGFydHlEYXRhLnBhcnR5X2lkfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcnR5RWxlbWVudC5odG1sKHBhcnR5RGF0YS5wYXJ0eV9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldE9yZGVyUGFydHkoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IG9yZGVySWQgPSBwYXJzZUludCh0aGlzLm9yZGVySWQsIDEwKTtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBvcmRlcklkLFxyXG4gICAgICAgICAgICBlbWFpbDogY29udGV4dC5jdXN0b21lci5lbWFpbCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhd3MgPSBgJHt0aGlzLmF3c191cmx9YmMvb3JkZXJzL21ldGFmaWVsZHMvZ2V0YDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXREYXRhX1Bvc3QoYXdzLCBib2R5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZT8uZGF0YT8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhWzBdLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICctJztcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9ycyB0aGF0IG9jY3VyIGR1cmluZyB0aGUgQVBJIHJlcXVlc3RcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGBBbiBlcnJvciBvY2N1cnJlZDogJHtlcnJvcn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0T3JkZXJNZXRhZmllbGQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBvcmRlcklkLCBjdXN0b21lciB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBjdXN0b21lci5lbWFpbCxcclxuICAgICAgICAgICAgb3JkZXJJZCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNyZWF0ZURhdGEoYCR7dGhpcy5hd3NfY2xvdWRmcm9udF91cmx9YmMvb3JkZXJzL21ldGFmaWVsZHMvZ2V0YCwgYm9keSk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZT8uZGF0YSAmJiBBcnJheS5pc0FycmF5KHJlc3BvbnNlLmRhdGEpICYmIHJlc3BvbnNlLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JkZXJNZXRhZmllbGQgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmRhdGFbMF0udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRDb25zdWx0YW50QnlJZCgpIHtcclxuICAgICAgICBjb25zdCBjb25zdWx0YW50ID0gYXdhaXQgZ2V0RGF0YShgJHt0aGlzLmF3c19jbG91ZGZyb250X3VybH1zZWFyY2g/cmVwSUQ9JHsxfWApOyAvLyB3ZSB3aWxsIG5lZWQgdG8gcmVwbGFjZSB0aGUgaGFyZGNvZGVkIHZhbHVlIGZvciB0aGUgSURcclxuICAgICAgICBpZiAoY29uc3VsdGFudCAmJiBBcnJheS5pc0FycmF5KGNvbnN1bHRhbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3VsdGFudCA9IGNvbnN1bHRhbnRbMF07XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlV2Vic2l0ZUxpbmsoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlQ29uc3VsdGFudE1ldGFmaWVsZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMub3JkZXJJZCB8fCAhdGhpcy5jb25zdWx0YW50Py5yZXBJRCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBjb25zdWx0YW50X2lkOiB0aGlzLmNvbnN1bHRhbnQucmVwSUQsXHJcbiAgICAgICAgICAgIGNhcnRJZDogdGhpcy5vcmRlcklkLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMub3JkZXJNZXRhZmllbGQgPyAndXBkYXRlJyA6ICdjcmVhdGUnO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNyZWF0ZURhdGEoXHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmF3c19jbG91ZGZyb250X3VybH1iYy9vcmRlcnMvbWV0YWZpZWxkcy8ke2FjdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgYm9keSxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZT8uZGF0YT8uaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlV2Vic2l0ZUxpbmsoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8ICdDYW5ub3QgdXBkYXRlIHRoZSBjb25zdWx0YW50Jyk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENvbnN1bHRhbnRCeUlkKHRoaXMub3JkZXJNZXRhZmllbGQuY29uc3VsdGFudF9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9ycyB0aGF0IG9jY3VyIGR1cmluZyB0aGUgQVBJIHJlcXVlc3RcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGBBbiBlcnJvciBvY2N1cnJlZDogJHtlcnJvcn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JkZXJJZCgpIHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5nZXQoJ29yZGVyX2lkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlV2Vic2l0ZUxpbmsoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICB3ZWJzaXRlLFxyXG4gICAgICAgICAgICBmaXJzdF9uYW1lLFxyXG4gICAgICAgICAgICBsYXN0X25hbWUsXHJcbiAgICAgICAgICAgIHJlcElELFxyXG4gICAgICAgIH0gPSB0aGlzLmNvbnN1bHRhbnQ7XHJcbiAgICAgICAgY29uc3QgJHdlYnNpdGVMaW5rID0gJCgnLmNvbnN1bHRhbnQtdmFsdWUnKS5maW5kKCdhJyk7XHJcbiAgICAgICAgJHdlYnNpdGVMaW5rLmF0dHIoJ2hyZWYnLCBgL2NvbnN1bHRhbnQtYmlvP3dlYnNpdGU9JHt3ZWJzaXRlfWApO1xyXG4gICAgICAgICR3ZWJzaXRlTGluay5odG1sKGAke2ZpcnN0X25hbWV9ICR7bGFzdF9uYW1lfSAtIHJlcElEOiAke3JlcElEfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDaGFuZ2VBZGRyZXNzTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcclxuXHJcbiAgICAgICAgJCgnLm9wZW4tY2hhbmdlLWFkZHJlc3MnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XHJcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoYDxmb3JtIGNsYXNzPVwiY2hhbmdlLWFkZHJlc3MtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+T25seSBzdHJlZXQgYWRkcmVzcyBjYW4gYmUgY2hhbmdlZC48L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtRmllbGQtYWRkcmVzczFcIiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0taW5wdXQgZm9ybS1maWVsZC0taW5wdXRUZXh0XCIgZGF0YS10eXBlPVwiQWRkcmVzc0xpbmUxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIiBmb3I9XCJhZGRyZXNzTGluZTFcIj5BZGRyZXNzIExpbmUgMSAqPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibmV3LWFkZHJlc3MtaW5wdXQgZm9ybS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGRyZXNzTGluZTFcIiBuYW1lPVwiYWRkcmVzc0xpbmUxXCIgZGF0YS1sYWJlbD1cIkFkZHJlc3MgTGluZSAxXCIgYXJpYS1yZXF1aXJlZD1cInRydWVcIiBkYXRhLWZpZWxkLXR5cGU9XCJBZGRyZXNzTGluZTFcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImZvcm1GaWVsZC1hZGRyZXNzMlwiIGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1pbnB1dCBmb3JtLWZpZWxkLS1pbnB1dFRleHRcIiBkYXRhLXR5cGU9XCJBZGRyZXNzTGluZTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiIGZvcj1cImFkZHJlc3NMaW5lMVwiPkFkZHJlc3MgTGluZSAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibmV3LWFkZHJlc3MtaW5wdXQgZm9ybS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGRyZXNzTGluZTJcIiBuYW1lPVwiYWRkcmVzc0xpbmUyXCIgZGF0YS1sYWJlbD1cIkFkZHJlc3MgTGluZSAyXCIgYXJpYS1yZXF1aXJlZD1cImZhbHNlXCIgZGF0YS1maWVsZC10eXBlPVwiQWRkcmVzc0xpbmUyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWxlcnQtdGV4dCB1LWhpZGRlblwiPkFkZHJlc3MgTGluZSAxIGNhbm5vdCBiZSBlbXB0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbmZpcm1hdGlvbi10ZXh0IHUtaGlkZGVuXCI+QWRkcmVzcyBjaGFuZ2VkIHN1Y2Nlc3NmdWxseTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoYW5nZS1hZGRyZXNzLXN1Ym1pdCBidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENoYW5nZSBBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPmApO1xyXG5cclxuICAgICAgICAgICAgJCgnZm9ybSAuY2hhbmdlLWFkZHJlc3Mtc3VibWl0Jykub24oJ2NsaWNrJywgZXYgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9ICQoJyNhZGRyZXNzTGluZTEnKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9ICQoJyNhZGRyZXNzTGluZTInKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsZXJ0VGV4dCA9ICQoJy5hbGVydC10ZXh0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NMaW5lMSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydFRleHQucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0VGV4dC5hZGRDbGFzcygndS1oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaXBwaW5nQWRkcmVzcyhhZGRyZXNzTGluZTEsIGFkZHJlc3NMaW5lMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZVNoaXBwaW5nQWRkcmVzcyhhZGRyZXNzTGluZTEsIGFkZHJlc3NMaW5lMikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIG9yZGVySWQ6IHRoaXMub3JkZXJJZCxcclxuICAgICAgICAgICAgc3RyZWV0MTogYWRkcmVzc0xpbmUxLFxyXG4gICAgICAgICAgICBzdHJlZXQyOiBhZGRyZXNzTGluZTIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYXdzID0gYCR7dGhpcy5hd3NfdXJsfWJjL29yZGVycy9zaGlwcGluZ1N0cmVldEFkZHJlc3MvdXBkYXRlYDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXREYXRhX1Bvc3QoYXdzLCBib2R5KTtcclxuICAgICAgICAgICAgY29uc3QgY29uZmlybWF0aW9uVGV4dCA9ICQoJy5jb25maXJtYXRpb24tdGV4dCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlPy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb25UZXh0LnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgJ0Nhbm5vdCB1cGRhdGUgdGhlIGNvbnN1bHRhbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgZHVyaW5nIHRoZSBBUEkgcmVxdWVzdFxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoYEFuIGVycm9yIG9jY3VycmVkOiAke2Vycm9yfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRGVsZXRlQWRkcmVzcygpIHtcclxuICAgICAgICAkKCdbZGF0YS1kZWxldGUtYWRkcmVzc10nKS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVBZGRyZXNzJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLXBheW1lbnQtbWV0aG9kXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZVBheW1lbnRNZXRob2QnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kU2VsZWN0QWxsKCkge1xyXG4gICAgICAgICQoJyNzZWxlY3QtYWxsLXByb2R1Y3RzJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveGVzID0gJCgnLmFjY291bnQtcHJvZHVjdC1jaGVja0l0ZW0gLmZvcm0tY2hlY2tib3gnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3hlcy5lYWNoKChpLCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3hlcy5lYWNoKChpLCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXRDb25zdWx0YW50RGF0YShjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgaWRGaWVsZCA9ICQoJy5jb25zdWx0YW50LWZpZWxkIC5pZC1maWVsZCcpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVGaWVsZCA9ICQoJy5jb25zdWx0YW50LWZpZWxkIC5uYW1lLWZpZWxkJyk7XHJcbiAgICAgICAgY29uc3QgcGhvbmVGaWVsZCA9ICQoJy5jb25zdWx0YW50LWZpZWxkIC5waG9uZS1maWVsZCcpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsRmllbGQgPSAkKCcuY29uc3VsdGFudC1maWVsZCAuZW1haWwtZmllbGQnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENvbnN1bHRhbnRGcm9tQXR0cmlidXRlKGNvbnRleHQpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZEZpZWxkLnRleHQoZGF0YS5yZXBJRCk7XHJcbiAgICAgICAgICAgIG5hbWVGaWVsZC50ZXh0KGRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgIHBob25lRmllbGQudGV4dChkYXRhLnBob25lKTtcclxuICAgICAgICAgICAgZW1haWxGaWVsZC50ZXh0KGRhdGEuZW1haWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlkRmllbGQudGV4dCgnLScpO1xyXG4gICAgICAgICAgICBuYW1lRmllbGQudGV4dCgnLScpO1xyXG4gICAgICAgICAgICBwaG9uZUZpZWxkLnRleHQoJy0nKTtcclxuICAgICAgICAgICAgZW1haWxGaWVsZC50ZXh0KCctJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXRPcmRlcnNTaGlwbWVudHMob3JkZXJzKSB7XHJcbiAgICAgICAgY29uc3QgdHJhY2tpbmdOdW1iZXJFbCA9ICQoJy5vcmRlci10cmFja2luZy1udW1iZXInKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hpcG1lbnRzID0gb3JkZXJzLm1hcChhc3luYyAob3JkZXIpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRPcmRlclNoaXBtZW50cyhvcmRlci5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIEFycmF5LmlzQXJyYXkocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm1hcCgoc2hpcG1lbnQpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVySWQ6IHNoaXBtZW50Lm9yZGVyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFja2luZ051bWJlcjogc2hpcG1lbnQudHJhY2tpbmdfbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJy0nO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc2hpcG1lbnRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IFByb21pc2UuYWxsKHNoaXBtZW50cyk7XHJcblxyXG4gICAgICAgICAgICB0cmFja2luZ051bWJlckVsLmVhY2goKGksIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0cmFja2luZ1RleHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2ldICYmIHZhbHVlc1tpXSAhPT0gJy0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tpbmdUZXh0ID0gdmFsdWVzW2ldWzBdLnRyYWNraW5nTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpXS5mb3JFYWNoKCh0cmFja2luZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja2luZ1RleHQgPSBgJHt0cmFja2luZ1RleHR9XFxuJHt0cmFja2luZy50cmFja2luZ051bWJlcn1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tpbmdUZXh0ID0gdHJhY2tpbmcudHJhY2tpbmdOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tpbmdUZXh0ID0gJy0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkudGV4dCh0cmFja2luZ1RleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0T3JkZXJTaGlwbWVudHMob3JkZXJJZCkge1xyXG4gICAgICAgIGNvbnN0IHsgYXdzX3VybCB9ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZztcclxuXHJcbiAgICAgICAgY29uc3QgYXdzID0gYCR7YXdzX3VybH1iYy9vcmRlcnM/b3JkZXJJZD0ke29yZGVySWR9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldERhdGEoYXdzKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSkge1xyXG4gICAgICAgICRyZW9yZGVyRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzID0gJCgnLmFjY291bnQtbGlzdEl0ZW0gLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICBsZXQgc3VibWl0Rm9ybSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzLmVhY2goKGluZGV4LCBwcm9kdWN0Q2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwodGhpcy5jb250ZXh0LnNlbGVjdEl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRhZGRyZXNzRm9ybSwgdGhpcy5jb250ZXh0KTtcclxuICAgICAgICBjb25zdCBzdGF0ZVNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dIFtkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXSc7XHJcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoc3RhdGVTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc1ZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFkZHJlc3NWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XHJcblxyXG4gICAgICAgIGlmICgkc3RhdGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCAkbGFzdDtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcclxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRsYXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24oYWRkcmVzc1ZhbGlkYXRvciwgZmllbGQsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuZmllbGRfbm90X2JsYW5rKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkYWRkcmVzc0Zvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhZGRyZXNzVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJGFjY291bnRSZXR1cm5Gb3JtLmRhdGEoJ2FjY291bnRSZXR1cm5Gb3JtRXJyb3InKTtcclxuXHJcbiAgICAgICAgJGFjY291bnRSZXR1cm5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtU3VibWl0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHVudGlsIHdlIGZpbmQgYSBub24temVybyB2YWx1ZSBpbiB0aGUgZHJvcGRvd24gZm9yIHF1YW50aXR5XHJcbiAgICAgICAgICAgICQoJ1tuYW1lXj1cInJldHVybl9xdHlcIl0nLCAkYWNjb3VudFJldHVybkZvcm0pLmVhY2goKGksIGVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KCQoZWxlKS52YWwoKSwgMTApICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVN1Ym1pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4aXQgb3V0IG9mIGxvb3AgaWYgd2UgZm91bmQgYXQgbGVhc3Qgb25lIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtU3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoZXJyb3JNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKSB7XHJcbiAgICAgICAgLy8gSW5qZWN0IHZhbGlkYXRpb25zIGludG8gZm9ybSBmaWVsZHMgYmVmb3JlIHZhbGlkYXRpb24gcnVuc1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjZmlyc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuZmlyc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNsYXN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0Lmxhc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb21wYW55LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb21wYW55TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjcGhvbmUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnBob25lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczEuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MxTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMi5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczJMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjaXR5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jaXR5TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb3VudHJ5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVzZWxlY3RcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvdW50cnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInByZWZpeFwiOiBcIiR7dGhpcy5jb250ZXh0LmNob29zZUNvdW50cnlMYWJlbH1cIiB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNzdGF0ZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuc3RhdGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bvc3RhbF9jb2RlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5wb3N0YWxDb2RlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtLCB0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RTZWxlY3RvciA9ICdmb3JtW2RhdGEtcGF5bWVudC1tZXRob2QtZm9ybV0nO1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6IGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXWApO1xyXG5cclxuICAgICAgICBsZXQgJGxhc3Q7XHJcbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxyXG4gICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJGxhc3QpIHtcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgZmllbGQsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuZmllbGRfbm90X2JsYW5rKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVXNlIGNyZWRpdCBjYXJkIG51bWJlciBpbnB1dCBsaXN0ZW5lciB0byBoaWdobGlnaHQgY3JlZGl0IGNhcmQgdHlwZVxyXG4gICAgICAgIGxldCBjYXJkVHlwZTtcclxuICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmRUeXBlID0gY3JlZGl0Q2FyZFR5cGUodGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGNhcmRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nW2FsdD1cIiR7Y2FyZFR5cGV9XCJdYCkuc2libGluZ3MoKS5jc3MoJ29wYWNpdHknLCAnLjInKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdgKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCB2YWxpZGF0aW9uXHJcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWAsIHRoaXMuY29udGV4dC5jcmVkaXRDYXJkTnVtYmVyKTtcclxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0RXhwaXJhdGlvblZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWAsIHRoaXMuY29udGV4dC5leHBpcmF0aW9uKTtcclxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwibmFtZV9vbl9jYXJkXCJdYCwgdGhpcy5jb250ZXh0Lm5hbWVPbkNhcmQpO1xyXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDdnZWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImN2dlwiXWAsIHRoaXMuY29udGV4dC5jdnYsICgpID0+IGNhcmRUeXBlKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIGZvcm1hdFxyXG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApO1xyXG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRFeHBpcmF0aW9uRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gKTtcclxuXHJcbiAgICAgICAgLy8gQmlsbGluZyBhZGRyZXNzIHZhbGlkYXRpb25cclxuICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBmaW5hbCBmb3JtIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXJpYWxpemUgZm9ybSBkYXRhIGFuZCByZWR1Y2UgaXQgdG8gb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gXy5yZWR1Y2UoJHBheW1lbnRNZXRob2RGb3JtLnNlcmlhbGl6ZUFycmF5KCksIChvYmosIGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZPYmogPSBvYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmT2JqW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZPYmo7XHJcbiAgICAgICAgICAgICAgICB9LCB7fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGNvdW50cnkgYW5kIHN0YXRlIGNvZGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBfLmZpbmQodGhpcy5jb250ZXh0LmNvdW50cmllcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuY291bnRyeSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvdW50cnkgJiYgXy5maW5kKGNvdW50cnkuc3RhdGVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnlfY29kZSA9IGNvdW50cnkgPyBjb3VudHJ5LmNvZGUgOiBkYXRhLmNvdW50cnk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXRlX29yX3Byb3ZpbmNlX2NvZGUgPSBzdGF0ZSA/IHN0YXRlLmNvZGUgOiBkYXRhLnN0YXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgSW5zdHJ1bWVudFxyXG4gICAgICAgICAgICAgICAgZGF0YS5kZWZhdWx0X2luc3RydW1lbnQgPSAhIWRhdGEuZGVmYXVsdF9pbnN0cnVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGNyZWRpdCBjYXJkXHJcbiAgICAgICAgICAgICAgICBzdG9yZUluc3RydW1lbnQodGhpcy5jb250ZXh0LCBkYXRhLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNvbnRleHQucGF5bWVudE1ldGhvZHNVcmw7XHJcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwodGhpcy5jb250ZXh0LmdlbmVyaWNfZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtLCB0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1FZGl0U2VsZWN0b3IgPSAnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXSc7XHJcbiAgICAgICAgY29uc3QgZWRpdFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJyR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIGRlbGF5OiA5MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJFbWFpbEFkZHJlc3NcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRlbWFpbEVsZW1lbnQgPSAkKGVtYWlsU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiUGFzc3dvcmRcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkNvbmZpcm1QYXNzd29yZFwiXWA7XHJcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDdXJyZW50UGFzc3dvcmRcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRjdXJyZW50UGFzc3dvcmQgPSAkKGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyBvbmx5IGhhbmRsZXMgdGhlIGN1c3RvbSBmaWVsZHMsIHN0YW5kYXJkIGZpZWxkcyBhcmUgYWRkZWQgYmVsb3dcclxuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShlbWFpbFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRFbWFpbFZhbGlkYXRpb24oZWRpdFZhbGlkYXRvciwgZW1haWxTZWxlY3RvciwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS52YWxpZF9lbWFpbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJHBhc3N3b3JkRWxlbWVudCAmJiAkcGFzc3dvcmQyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHBhc3N3b3JkOiBlbnRlclBhc3N3b3JkLCBwYXNzd29yZF9tYXRjaDogbWF0Y2hQYXNzd29yZCB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcclxuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgICAgICBlZGl0VmFsaWRhdG9yLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdChlbnRlclBhc3N3b3JkLCBlbnRlclBhc3N3b3JkLCBtYXRjaFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLmVycm9yKSxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGN1cnJlbnRQYXNzd29yZCkge1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogY3VycmVudFBhc3N3b3JkU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gJycgJiYgJHBhc3N3b3JkRWxlbWVudC52YWwoKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmN1cnJlbnRQYXNzd29yZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2ZpcnN0bmFtZSddYCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9sYXN0bmFtZSddYCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X3Bob25lJ11gLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBob25lIG51bWJlci4nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAkZWRpdEFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWRpdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlYXJsaWVzdEVycm9yID0gJCgnc3Bhbi5mb3JtLWlubGluZU1lc3NhZ2U6Zmlyc3QnKS5wcmV2KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgZWFybGllc3RFcnJvci5mb2N1cygpO1xyXG4gICAgICAgICAgICB9LCA5MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pIHtcclxuICAgICAgICBjb25zdCBpbmJveFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICAgICAgZGVsYXk6IDkwMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5ib3hWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gc2VsZWN0W25hbWU9XCJtZXNzYWdlX29yZGVyX2lkXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE51bWJlcih2YWwpICE9PSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyT3JkZXJOdW0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W25hbWU9XCJtZXNzYWdlX3N1YmplY3RcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclN1YmplY3QsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHRleHRhcmVhW25hbWU9XCJtZXNzYWdlX2NvbnRlbnRcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICRpbmJveEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaW5ib3hWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5ib3hWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVhcmxpZXN0RXJyb3IgPSAkKCdzcGFuLmZvcm0taW5saW5lTWVzc2FnZTpmaXJzdCcpLnByZXYoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBlYXJsaWVzdEVycm9yLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sIDkwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdE9yZGVyRGV0YWlsc1BhZ2Uob3JkZXJJZCkge1xyXG4gICAgICAgIGNvbnN0IHsgYXdzX3VybCB9ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZztcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldERhdGEoYCR7YXdzX3VybH1iYy9vcmRlcnNJdGVtcz9vcmRlcklkPSR7b3JkZXJJZH1gKTtcclxuXHJcbiAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKG9yZGVySXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldmlld0xpbmsgPSBgPGEgaHJlZj1cIiR7b3JkZXJJdGVtLnVybH0jd3JpdGVfcmV2aWV3XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBwcm9kdWN0Vmlldy1yZXZpZXdMaW5rIHByb2R1Y3RWaWV3LXJldmlld0xpbmstLW5ld1wiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCI+JHt0aGlzLmNvbnRleHQucHJvZHVjdHNSZXZpZXd9PC9hPmA7XHJcblxyXG4gICAgICAgICAgICAkKGAjYWNjb3VudC1wcm9kdWN0LSR7b3JkZXJJdGVtLm9yZGVyX2l0ZW1faWR9YCkuYXBwZW5kKHJldmlld0xpbmspO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBjcmVkaXRjYXJkcyBmcm9tICdjcmVkaXRjYXJkcyc7XHJcblxyXG4vKipcclxuICogT21pdCBudWxsIG9yIGVtcHR5IHN0cmluZyBwcm9wZXJ0aWVzIG9mIG9iamVjdFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5jb25zdCBvbWl0TnVsbFN0cmluZyA9IG9iaiA9PiB7XHJcbiAgICBjb25zdCByZWZPYmogPSBvYmo7XHJcblxyXG4gICAgJC5lYWNoKHJlZk9iaiwgKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZWZPYmpba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVmT2JqO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldCBjcmVkaXQgY2FyZCB0eXBlIGZyb20gY3JlZGl0IGNhcmQgbnVtYmVyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWRpdENhcmRUeXBlID0gdmFsdWUgPT4gY3JlZGl0Y2FyZHMuY2FyZC50eXBlKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsdWUpLCB0cnVlKTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciBhamF4IHJlcXVlc3QgdG8gc3RvcmUgYSBuZXcgaW5zdHJ1bWVudCBpbiBiaWdwYXlcclxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBoZWFkZXJcclxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBib2R5XHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZmFpbCBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgdW5zdWNjZXNzZnVsIHJlc3BvbnNlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RvcmVJbnN0cnVtZW50ID0gKHtcclxuICAgIC8vIEhvc3RuYW1lLCBJZHMgJiBUb2tlblxyXG4gICAgcGF5bWVudHNVcmwsXHJcbiAgICBzaG9wcGVySWQsXHJcbiAgICBzdG9yZUhhc2gsXHJcbiAgICB2YXVsdFRva2VuLFxyXG59LCB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgLy8gUHJvdmlkZXIgSW5mb1xyXG4gICAgcHJvdmlkZXJfaWQsXHJcbiAgICBjdXJyZW5jeV9jb2RlLFxyXG5cclxuICAgIC8vIEluc3RydW1lbnQgRGV0YWlsc1xyXG4gICAgY3JlZGl0X2NhcmRfbnVtYmVyLFxyXG4gICAgZXhwaXJhdGlvbixcclxuICAgIG5hbWVfb25fY2FyZCxcclxuICAgIGN2dixcclxuICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcclxuXHJcbiAgICAvLyBCaWxsaW5nIEFkZHJlc3NcclxuICAgIGFkZHJlc3MxLFxyXG4gICAgYWRkcmVzczIsXHJcbiAgICBjaXR5LFxyXG4gICAgcG9zdGFsX2NvZGUsXHJcbiAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxyXG4gICAgY291bnRyeV9jb2RlLFxyXG4gICAgY29tcGFueSxcclxuICAgIGZpcnN0X25hbWUsXHJcbiAgICBsYXN0X25hbWUsXHJcbiAgICBlbWFpbCxcclxuICAgIHBob25lLFxyXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG59LCBkb25lLCBmYWlsKSA9PiB7XHJcbiAgICBjb25zdCBleHBpcnkgPSBleHBpcmF0aW9uLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IGAke3BheW1lbnRzVXJsfS9zdG9yZXMvJHtzdG9yZUhhc2h9L2N1c3RvbWVycy8ke3Nob3BwZXJJZH0vc3RvcmVkX2luc3RydW1lbnRzYCxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHZhdWx0VG9rZW4sXHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGluc3RydW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjYXJkJyxcclxuICAgICAgICAgICAgICAgIGNhcmRob2xkZXJfbmFtZTogbmFtZV9vbl9jYXJkLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKGNyZWRpdF9jYXJkX251bWJlciksXHJcbiAgICAgICAgICAgICAgICBleHBpcnlfbW9udGg6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSxcclxuICAgICAgICAgICAgICAgIGV4cGlyeV95ZWFyOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbl92YWx1ZTogY3Z2LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaWxsaW5nX2FkZHJlc3M6IG9taXROdWxsU3RyaW5nKHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MxLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczIsXHJcbiAgICAgICAgICAgICAgICBjaXR5LFxyXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgY29tcGFueSxcclxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob25lLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcHJvdmlkZXJfaWQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcclxuICAgICAgICAgICAgY3VycmVuY3lfY29kZSxcclxuICAgICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgICAgLmRvbmUoZG9uZSlcclxuICAgICAgICAuZmFpbChmYWlsKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtYXR0ZXJzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBjcmVkaXQgY2FyZCBudW1iZXJcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0OiBmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSBjcmVkaXRjYXJkcy5jYXJkLmZvcm1hdChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqL1xyXG4gICAgc2V0RXhwaXJhdGlvbkZvcm1hdDogZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQsIHdoaWNoIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmICh3aGljaCA9PT0gOCAmJiAvLiooXFwvKSQvLnRlc3QodGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC52YWx1ZS5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIDUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aGljaCAhPT0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMS05XVxcL3xbMi05XSkkL2csICcwJDEvJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkkL2csICckMS8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMC0xXSkoWzMtOV0pJC9nLCAnMCQxLyQyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkoWzAtOV17Mn0pJC9nLCAnJDEvJDInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMF0rKVxcL3xbMF0rJC9nLCAnMCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcZFxcL118XltcXC9dKiQvZywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBWYWxpZGF0b3JzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmNhcmQuaXNWYWxpZChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBleHBpcmF0aW9uIGRhdGVcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyeSA9IHZhbC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIC9eKDBbMS05XXwxWzAtMl0pXFwvKFswLTldezJ9KSQvLnRlc3QodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgIWNyZWRpdGNhcmRzLmV4cGlyYXRpb24uaXNQYXN0KGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSwgY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBuYW1lIG9uIGNhcmRcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBzZXROYW1lT25DYXJkVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICEhdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3Z2XHJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcclxuICAgICAqIEBwYXJhbSB7YW55fSBjYXJkVHlwZSBUaGUgY3JlZGl0IGNhcmQgbnVtYmVyIHR5cGVcclxuICAgICAqL1xyXG4gICAgc2V0Q3Z2VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSwgY2FyZFR5cGUpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGNhcmRUeXBlID09PSAnZnVuY3Rpb24nID8gY2FyZFR5cGUoKSA6IGNhcmRUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY3ZjLmlzVmFsaWQodmFsLCB0eXBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XHJcblxyXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcclxuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcclxuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJscykge1xyXG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxzLmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XHJcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgbm9Db21wYXJlTWVzc2FnZSwgdXJscyB9KSB7XHJcbiAgICBsZXQgY29tcGFyZUNvdW50ZXIgPSBbXTtcclxuXHJcbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyAkY2hlY2tlZC5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlKS5nZXQoKSA6IFtdO1xyXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjb21wYXJlTGluaywgdXJscyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybHMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChub0NvbXBhcmVNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJfc2V0UHJvdG90eXBlT2YiLCJiaW5kIiwiUGFnZU1hbmFnZXIiLCJub2QiLCJXaXNobGlzdCIsInZhbGlkYXRpb24iLCJzdGF0ZUNvdW50cnkiLCJjbGFzc2lmeUZvcm0iLCJWYWxpZGF0b3JzIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJjcmVkaXRDYXJkVHlwZSIsInN0b3JlSW5zdHJ1bWVudCIsIkNDVmFsaWRhdG9ycyIsIkZvcm1hdHRlcnMiLCJDQ0Zvcm1hdHRlcnMiLCJzaG93QWxlcnRNb2RhbCIsImRlZmF1bHRNb2RhbCIsImNvbXBhcmVQcm9kdWN0cyIsImdldERhdGEiLCJjcmVhdGVEYXRhIiwiZ2V0RGF0YV9Qb3N0IiwiZ2V0Q29uc3VsdGFudEZyb21BdHRyaWJ1dGUiLCJyZW1vdmVVbmRlc2lyYWJsZUNvdW50cmllcyIsIkFjY291bnQiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsIiRzdGF0ZSIsIiQiLCIkYm9keSIsIl9wcm90byIsIm9uUmVhZHkiLCIkZWRpdEFjY291bnRGb3JtIiwiJGFkZHJlc3NGb3JtIiwiJGluYm94Rm9ybSIsIiRhY2NvdW50UmV0dXJuRm9ybSIsIiRwYXltZW50TWV0aG9kRm9ybSIsIiRyZW9yZGVyRm9ybSIsIiRpbnZvaWNlQnV0dG9uIiwiJGJpZ0NvbW1lcmNlIiwid2luZG93IiwiQmlnQ29tbWVyY2UiLCIkbW9kYWwiLCJ0ZW1wbGF0ZSIsImluaXRPcmRlcnNTaGlwbWVudHMiLCJjdXN0b21lciIsIm9yZGVycyIsImluaXRPcmRlckRldGFpbHNQYWdlIiwib3JkZXJJZCIsInBhZ2VUeXBlIiwiaW5pdENvbnN1bHRhbnREYXRhIiwicGFzc3dvcmRSZXF1aXJlbWVudHMiLCJsb2FkIiwicmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24iLCJpcyIsIm9uIiwibGVmdCIsInNjcmVlbiIsImF2YWlsV2lkdGgiLCJ0b3AiLCJhdmFpbEhlaWdodCIsInVybCIsImRhdGEiLCJvcGVuIiwiaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbiIsInJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uIiwiaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbiIsImluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24iLCJpbml0UmVvcmRlckZvcm0iLCJhY2NvdW50UGF5bWVudHMiLCJfdGhpcyRjb250ZXh0IiwiY291bnRyaWVzIiwicGF5bWVudHNVcmwiLCJzdG9yZUhhc2giLCJzdG9yZUxvY2FsZSIsInZhdWx0VG9rZW4iLCJzaG9wcGVySWQiLCJjdXN0b21lckVtYWlsIiwicHJvdmlkZXJJZCIsImN1cnJlbmN5Q29kZSIsInBheW1lbnRNZXRob2RzVXJsIiwicGF5bWVudFByb3ZpZGVySW5pdGlhbGl6YXRpb25EYXRhIiwid2lkZ2V0U3R5bGVzIiwiYmFzZSIsImNvbG9yIiwiY3Vyc29yIiwiZGlzcGxheSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIm1hcmdpbkJvdHRvbSIsInBsYWNlaG9sZGVyIiwidmFsaWRhdGVkIiwiaW5pdGlhbGl6ZURhdGEiLCJiaW5kRGVsZXRlQWRkcmVzcyIsImJpbmREZWxldGVQYXltZW50TWV0aG9kIiwiYmluZFNlbGVjdEFsbCIsImNoZWNrT3JkZXJTdGF0dXMiLCJpbml0Q2hhbmdlQWRkcmVzc01vZGFsIiwiYXdzX3VybCIsInRoZW1lU2V0dGluZyIsImF3c19jbG91ZGZyb250X3VybCIsImdldE9yZGVySWQiLCJnZXRPcmRlckNvbnN1bHRhbnQiLCJzZXRPcmRlclBhcnR5Iiwib3JkZXJTdGF0dXMiLCJwYXJzZUludCIsImVkaXRDb25zdWx0YW50Iiwic2hpcHBpbmdFbGVtZW50IiwicmVtb3ZlQ2xhc3MiLCJodG1sIiwiYWRkQ2xhc3MiLCJhcHBlbmRUbyIsIl9nZXRPcmRlckNvbnN1bHRhbnQiLCJfY2FsbGVlIiwicGFyYW1zIiwiY29uc3VsdGFudFdlYnNpdGUiLCJjb25zdWx0YW50IiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIlVSTFNlYXJjaFBhcmFtcyIsImRvY3VtZW50IiwibG9jYXRpb24iLCJzZWFyY2giLCJnZXQiLCJzZXRPcmRlck1ldGFmaWVsZCIsInJlcCIsInVwZGF0ZUNvbnN1bHRhbnRNZXRhZmllbGQiLCJvcmRlck1ldGFmaWVsZCIsImdldENvbnN1bHRhbnRCeUlkIiwiY29uc3VsdGFudF9pZCIsIl9zZXRPcmRlclBhcnR5IiwiX2NhbGxlZTIiLCJwYXJ0eUVsZW1lbnQiLCJwYXJ0eURhdGEiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXRPcmRlclBhcnR5IiwicGFydHlfbmFtZSIsInBhcnR5X2lkIiwiX3giLCJfZ2V0T3JkZXJQYXJ0eSIsIl9jYWxsZWUzIiwiYm9keSIsIl9yZXNwb25zZSRkYXRhIiwiYXdzIiwicmVzcG9uc2UiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJlbWFpbCIsIkpTT04iLCJwYXJzZSIsInQwIiwiY29uc29sZSIsIl94MiIsIl9zZXRPcmRlck1ldGFmaWVsZCIsIl9jYWxsZWU0IiwiX3RoaXMkY29udGV4dDIiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJBcnJheSIsImlzQXJyYXkiLCJfZ2V0Q29uc3VsdGFudEJ5SWQiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImVuYWJsZVdlYnNpdGVMaW5rIiwiX3VwZGF0ZUNvbnN1bHRhbnRNZXRhZmllbGQiLCJfY2FsbGVlNiIsIl90aGlzJGNvbnN1bHRhbnQiLCJhY3Rpb24iLCJfcmVzcG9uc2UkZGF0YTIiLCJfcmVzcG9uc2UkZGF0YTMiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJyZXBJRCIsImNhcnRJZCIsImlkIiwibWVzc2FnZSIsIl90aGlzJGNvbnN1bHRhbnQyIiwid2Vic2l0ZSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCIkd2Vic2l0ZUxpbmsiLCJmaW5kIiwiYXR0ciIsIl90aGlzMiIsIm1vZGFsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZUNvbnRlbnQiLCJldiIsImFkZHJlc3NMaW5lMSIsInZhbCIsImFkZHJlc3NMaW5lMiIsImFsZXJ0VGV4dCIsInVwZGF0ZVNoaXBwaW5nQWRkcmVzcyIsIl91cGRhdGVTaGlwcGluZ0FkZHJlc3MiLCJfY2FsbGVlNyIsImNvbmZpcm1hdGlvblRleHQiLCJfcmVzcG9uc2UkZGF0YTQiLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJzdHJlZXQxIiwic3RyZWV0MiIsInJlbG9hZCIsIl94MyIsIl94NCIsImN1cnJlbnRUYXJnZXQiLCJjb25maXJtIiwiY2hlY2tib3hlcyIsInRhcmdldCIsImNoZWNrZWQiLCJlYWNoIiwiZWxlbWVudCIsIl9pbml0Q29uc3VsdGFudERhdGEiLCJfY2FsbGVlOCIsImlkRmllbGQiLCJuYW1lRmllbGQiLCJwaG9uZUZpZWxkIiwiZW1haWxGaWVsZCIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsInRleHQiLCJwaG9uZSIsIl94NSIsIl9pbml0T3JkZXJzU2hpcG1lbnRzIiwiX2NhbGxlZTEwIiwiX3RoaXMzIiwidHJhY2tpbmdOdW1iZXJFbCIsInNoaXBtZW50cyIsIl9jYWxsZWUxMCQiLCJfY29udGV4dDEwIiwibWFwIiwiX3JlZiIsIl9jYWxsZWU5Iiwib3JkZXIiLCJfY2FsbGVlOSQiLCJfY29udGV4dDkiLCJnZXRPcmRlclNoaXBtZW50cyIsInNoaXBtZW50Iiwib3JkZXJfaWQiLCJ0cmFja2luZ051bWJlciIsInRyYWNraW5nX251bWJlciIsImxvZyIsIl94NyIsImFsbCIsInRyYWNraW5nVGV4dCIsInRyYWNraW5nIiwiaW5kZXgiLCJfeDYiLCJfZ2V0T3JkZXJTaGlwbWVudHMiLCJfY2FsbGVlMTEiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMSIsIl94OCIsIl90aGlzNCIsIiRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMiLCJzdWJtaXRGb3JtIiwicmVtb3ZlIiwicHJvZHVjdENoZWNrYm94IiwicHJvZHVjdElkIiwiJGlucHV0IiwiYXBwZW5kIiwic2VsZWN0SXRlbSIsIl90aGlzNSIsInZhbGlkYXRpb25Nb2RlbCIsInN0YXRlU2VsZWN0b3IiLCIkc3RhdGVFbGVtZW50IiwiYWRkcmVzc1ZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsImFkZCIsIiRsYXN0IiwiZmllbGQiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiZmllbGRfbm90X2JsYW5rIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImVycm9yTWVzc2FnZSIsImZvcm1TdWJtaXQiLCJlbGUiLCJfdGhpczYiLCJmaXJzdE5hbWVMYWJlbCIsImxhc3ROYW1lTGFiZWwiLCJjb21wYW55TGFiZWwiLCJwaG9uZUxhYmVsIiwiYWRkcmVzczFMYWJlbCIsImFkZHJlc3MyTGFiZWwiLCJjaXR5TGFiZWwiLCJjb3VudHJ5TGFiZWwiLCJjaG9vc2VDb3VudHJ5TGFiZWwiLCJzdGF0ZUxhYmVsIiwicG9zdGFsQ29kZUxhYmVsIiwicGF5bWVudE1ldGhvZFNlbGVjdG9yIiwicGF5bWVudE1ldGhvZFZhbGlkYXRvciIsImNhcmRUeXBlIiwiX3JlZjIiLCJzaWJsaW5ncyIsImNzcyIsInNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uIiwiY3JlZGl0Q2FyZE51bWJlciIsInNldEV4cGlyYXRpb25WYWxpZGF0aW9uIiwiZXhwaXJhdGlvbiIsInNldE5hbWVPbkNhcmRWYWxpZGF0aW9uIiwibmFtZU9uQ2FyZCIsInNldEN2dlZhbGlkYXRpb24iLCJjdnYiLCJzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0Iiwic2V0RXhwaXJhdGlvbkZvcm1hdCIsIl9yZWR1Y2UiLCJzZXJpYWxpemVBcnJheSIsIm9iaiIsIml0ZW0iLCJyZWZPYmoiLCJjb3VudHJ5IiwiX2ZpbmQiLCJfcmVmMyIsInN0YXRlIiwic3RhdGVzIiwiX3JlZjQiLCJjb3VudHJ5X2NvZGUiLCJjb2RlIiwic3RhdGVfb3JfcHJvdmluY2VfY29kZSIsImRlZmF1bHRfaW5zdHJ1bWVudCIsImhyZWYiLCJnZW5lcmljX2Vycm9yIiwiZm9ybUVkaXRTZWxlY3RvciIsImVkaXRWYWxpZGF0b3IiLCJkZWxheSIsImVtYWlsU2VsZWN0b3IiLCIkZW1haWxFbGVtZW50IiwicGFzc3dvcmRTZWxlY3RvciIsIiRwYXNzd29yZEVsZW1lbnQiLCJwYXNzd29yZDJTZWxlY3RvciIsIiRwYXNzd29yZDJFbGVtZW50IiwiY3VycmVudFBhc3N3b3JkU2VsZWN0b3IiLCIkY3VycmVudFBhc3N3b3JkIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRfZW1haWwiLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkiLCJlbnRlclBhc3N3b3JkIiwicGFzc3dvcmQiLCJtYXRjaFBhc3N3b3JkIiwicGFzc3dvcmRfbWF0Y2giLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJyZXN1bHQiLCJjdXJyZW50UGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldFRpbWVvdXQiLCJlYXJsaWVzdEVycm9yIiwiZm9jdXMiLCJpbmJveFZhbGlkYXRvciIsIk51bWJlciIsImVudGVyT3JkZXJOdW0iLCJlbnRlclN1YmplY3QiLCJlbnRlck1lc3NhZ2UiLCJfaW5pdE9yZGVyRGV0YWlsc1BhZ2UiLCJfY2FsbGVlMTIiLCJfdGhpczciLCJfY2FsbGVlMTIkIiwiX2NvbnRleHQxMiIsIm9yZGVySXRlbSIsInJldmlld0xpbmsiLCJwcm9kdWN0c1JldmlldyIsIm9yZGVyX2l0ZW1faWQiLCJfeDkiLCJkZWZhdWx0IiwiY3JlZGl0Y2FyZHMiLCJvbWl0TnVsbFN0cmluZyIsImNhcmQiLCJmYWlsIiwicHJvdmlkZXJfaWQiLCJjdXJyZW5jeV9jb2RlIiwiY3JlZGl0X2NhcmRfbnVtYmVyIiwibmFtZV9vbl9jYXJkIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJwb3N0YWxfY29kZSIsImNvbXBhbnkiLCJleHBpcnkiLCJzcGxpdCIsImFqYXgiLCJkYXRhVHlwZSIsImNhY2hlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBY2NlcHQiLCJzdHJpbmdpZnkiLCJpbnN0cnVtZW50IiwiY2FyZGhvbGRlcl9uYW1lIiwibnVtYmVyIiwiZXhwaXJ5X21vbnRoIiwibW9udGgiLCJleHBpcnlfeWVhciIsInllYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJiaWxsaW5nX2FkZHJlc3MiLCJyZWZUYXJnZXQiLCJmb3JtYXQiLCJ3aGljaCIsInRlc3QiLCJyZXBsYWNlIiwidmFsaWRhdG9yIiwiaXNWYWxpZCIsImlzUGFzdCIsImN2YyIsImRlY3JlbWVudENvdW50ZXIiLCJjb3VudGVyIiwiaW5kZXhPZiIsInNwbGljZSIsImluY3JlbWVudENvdW50ZXIiLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxzIiwiY29tcGFyZSIsImpvaW4iLCJub0NvbXBhcmVNZXNzYWdlIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsInRyaWdnZXJIYW5kbGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=