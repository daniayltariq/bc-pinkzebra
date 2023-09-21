"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_custom_my-account_js"],{

/***/ "./assets/js/theme/custom/my-account.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/custom/my-account.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyAccount)
/* harmony export */ });
/* harmony import */ var _consultant_consultant_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consultant/consultant-helper */ "./assets/js/theme/consultant/consultant-helper.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-manager */ "./assets/js/theme/page-manager.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var MyAccount = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(MyAccount, _PageManager);
  function MyAccount() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = MyAccount.prototype;
  _proto.onReady = function onReady() {
    this.bindOnLogout();
  };
  _proto.bindOnLogout = function bindOnLogout() {
    $('.logout').on('click', function () {
      (0,_consultant_consultant_helper__WEBPACK_IMPORTED_MODULE_0__.removeConsultantFromStorage)();
    });
  };
  return MyAccount;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jdXN0b21fbXktYWNjb3VudF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEU7QUFDcEM7QUFBQSxJQUVyQkUsU0FBUywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLFNBQUEsRUFBQUMsWUFBQTtFQUFBLFNBQUFELFVBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFFLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUEsSUFBQUMsTUFBQSxHQUFBTCxTQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUMxQkUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUNOLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7RUFDdkIsQ0FBQztFQUFBSCxNQUFBLENBRURHLFlBQVksR0FBWixTQUFBQSxhQUFBLEVBQWU7SUFDWEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDM0JaLDBGQUEyQixDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFFLFNBQUE7QUFBQSxFQVRrQ0QscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jdXN0b20vbXktYWNjb3VudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW1vdmVDb25zdWx0YW50RnJvbVN0b3JhZ2UgfSBmcm9tICcuLi9jb25zdWx0YW50L2NvbnN1bHRhbnQtaGVscGVyJztcclxuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFjY291bnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuYmluZE9uTG9nb3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZE9uTG9nb3V0KCkge1xyXG4gICAgICAgICQoJy5sb2dvdXQnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbW92ZUNvbnN1bHRhbnRGcm9tU3RvcmFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJyZW1vdmVDb25zdWx0YW50RnJvbVN0b3JhZ2UiLCJQYWdlTWFuYWdlciIsIk15QWNjb3VudCIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiYmluZE9uTG9nb3V0IiwiJCIsIm9uIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=