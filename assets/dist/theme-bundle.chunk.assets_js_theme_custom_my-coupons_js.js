"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_custom_my-coupons_js"],{

/***/ "./assets/js/theme/custom/my-coupons.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/custom/my-coupons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyCoupons)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/theme/page-manager.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// TODO
// IMPORTANT: GET COUPONS REQUEST HAS BEEN MOCKED DUE TO MISSING WORKING ENDPOINT.
// IS UP TO PINK ZEBRA TO COMPLETE IT WHEN THE API IS WORKING.

var bodyMockResponse = {
  coupons: [{
    name: '10% OFF',
    code: '10OFF',
    end_date: 'Jan 11th 2024',
    status: 'Active'
  }, {
    name: '20% OFF',
    code: '20OFF',
    end_date: 'Mar 20th 2024',
    status: 'Used'
  }]
};
var MyCoupons = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(MyCoupons, _PageManager);
  function MyCoupons(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.$overlay = $('.page .loadingOverlay');
    _this.$couponsContainer = $('.page #my-coupons');
    _this.context = context;
    return _this;
  }
  var _proto = MyCoupons.prototype;
  _proto.onReady = function onReady() {
    this.getCouponsByHost();
  };
  _proto.getCouponsByHost = function getCouponsByHost() {
    // COMPLETE WITH API REQUEST AND LOADING STATE WHILE GETTING DATA
    // DATE WHEN coupon WAS CREATED IS NOT PART OF THE RESPONSE.
    // coupon END DATE IS USED FOR DISPLAY.
    this.handleResults(bodyMockResponse.coupons);
  };
  _proto.handleResults = function handleResults(coupons) {
    var couponsHtml = coupons.map(function (_ref) {
      var name = _ref.name,
        code = _ref.code,
        endDate = _ref.end_date,
        status = _ref.status;
      return "\n            <div class='coupon-wrapper'>\n                <div class='coupon-info'>\n                    <div class='coupon-id'>" + name + "</div>\n                    <div class='coupon-status desktop'>" + status + "</div>\n                </div>\n                <div class='coupon-table'>\n                    <div class='data-column'>\n                        <h6 class='data-title'>Code</h6>\n                        <span class='coupon-code data-value'>" + code + "</span>\n                    </div>\n                    <div class='data-column'>\n                        <h6 class='data-title'>Valid Until</h6>\n                        <span class='data-value'>" + endDate + "</span>\n                    </div>\n                    <div class='data-column'>\n                        <button class='button button--primary copy-button " + (status !== 'Active' ? 'u-hidden' : '') + "'>Copy Code</button>\n                    </div>\n                    <div class='data-column mobile'>\n                        <div class='coupon-status'>" + status + "</div>\n                    </div>\n                </div>\n            </div>\n        ";
    }).join('');
    this.$couponsContainer.html(couponsHtml);
    this.bindCopyLink();
  };
  _proto.handleNoResults = function handleNoResults() {
    var resultsHTML = '<div>No coupons found.</div>';
    this.$couponsContainer.html(resultsHTML);
  };
  _proto.handleError = function handleError(error) {
    console.error(error);
    this.handleNoResults();
  };
  _proto.bindCopyLink = function bindCopyLink() {
    $('.coupon-table .copy-button').on('click', function () {
      var code = $('.coupon-table .coupon-code').html();
      navigator.clipboard.writeText(code);
    });
  };
  _proto.loading = function loading(flag) {
    this.$overlay[flag ? 'show' : 'hide']();
  };
  return MyCoupons;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jdXN0b21fbXktY291cG9uc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBLElBQU1DLGdCQUFnQixHQUFHO0VBQ3JCQyxPQUFPLEVBQUUsQ0FDTDtJQUNJQyxJQUFJLEVBQUUsU0FBUztJQUNmQyxJQUFJLEVBQUUsT0FBTztJQUNiQyxRQUFRLEVBQUUsZUFBZTtJQUN6QkMsTUFBTSxFQUFFO0VBQ1osQ0FBQyxFQUNEO0lBQ0lILElBQUksRUFBRSxTQUFTO0lBQ2ZDLElBQUksRUFBRSxPQUFPO0lBQ2JDLFFBQVEsRUFBRSxlQUFlO0lBQ3pCQyxNQUFNLEVBQUU7RUFDWixDQUFDO0FBRVQsQ0FBQztBQUFDLElBRW1CQyxTQUFTLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsU0FBQSxFQUFBQyxZQUFBO0VBQzFCLFNBQUFELFVBQVlHLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDakJBLEtBQUEsR0FBQUgsWUFBQSxDQUFBSSxJQUFBLE9BQU1GLE9BQU8sQ0FBQztJQUNkQyxLQUFBLENBQUtFLFFBQVEsR0FBR0MsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO0lBQzFDSCxLQUFBLENBQUtJLGlCQUFpQixHQUFHRCxDQUFDLENBQUMsbUJBQW1CLENBQUM7SUFDL0NILEtBQUEsQ0FBS0QsT0FBTyxHQUFHQSxPQUFPO0lBQUMsT0FBQUMsS0FBQTtFQUMzQjtFQUFDLElBQUFLLE1BQUEsR0FBQVQsU0FBQSxDQUFBVSxTQUFBO0VBQUFELE1BQUEsQ0FFREUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUNOLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztFQUMzQixDQUFDO0VBQUFILE1BQUEsQ0FFREcsZ0JBQWdCLEdBQWhCLFNBQUFBLGlCQUFBLEVBQW1CO0lBQ2Y7SUFDQTtJQUNBO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLENBQUNuQixnQkFBZ0IsQ0FBQ0MsT0FBTyxDQUFDO0VBQ2hELENBQUM7RUFBQWMsTUFBQSxDQUVESSxhQUFhLEdBQWIsU0FBQUEsY0FBY2xCLE9BQU8sRUFBRTtJQUNuQixJQUFNbUIsV0FBVyxHQUFHbkIsT0FBTyxDQUFDb0IsR0FBRyxDQUFDLFVBQUFDLElBQUE7TUFBQSxJQUM1QnBCLElBQUksR0FBQW9CLElBQUEsQ0FBSnBCLElBQUk7UUFDSkMsSUFBSSxHQUFBbUIsSUFBQSxDQUFKbkIsSUFBSTtRQUNNb0IsT0FBTyxHQUFBRCxJQUFBLENBQWpCbEIsUUFBUTtRQUNSQyxNQUFNLEdBQUFpQixJQUFBLENBQU5qQixNQUFNO01BQUEsOElBSTJCSCxJQUFJLHVFQUNRRyxNQUFNLDBQQUtBRixJQUFJLDhNQUloQm9CLE9BQU8sdUtBR2tCbEIsTUFBTSxLQUFLLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRSxvS0FHNURBLE1BQU07SUFBQSxDQUlqRCxDQUFDLENBQUNtQixJQUFJLENBQUMsRUFBRSxDQUFDO0lBRVosSUFBSSxDQUFDVixpQkFBaUIsQ0FBQ1csSUFBSSxDQUFDTCxXQUFXLENBQUM7SUFDeEMsSUFBSSxDQUFDTSxZQUFZLENBQUMsQ0FBQztFQUN2QixDQUFDO0VBQUFYLE1BQUEsQ0FFRFksZUFBZSxHQUFmLFNBQUFBLGdCQUFBLEVBQWtCO0lBQ2QsSUFBTUMsV0FBVyxHQUFHLDhCQUE4QjtJQUVsRCxJQUFJLENBQUNkLGlCQUFpQixDQUFDVyxJQUFJLENBQUNHLFdBQVcsQ0FBQztFQUM1QyxDQUFDO0VBQUFiLE1BQUEsQ0FFRGMsV0FBVyxHQUFYLFNBQUFBLFlBQVlDLEtBQUssRUFBRTtJQUNmQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0gsZUFBZSxDQUFDLENBQUM7RUFDMUIsQ0FBQztFQUFBWixNQUFBLENBRURXLFlBQVksR0FBWixTQUFBQSxhQUFBLEVBQWU7SUFDWGIsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUNtQixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDOUMsSUFBTTdCLElBQUksR0FBR1UsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUNZLElBQUksQ0FBQyxDQUFDO01BQ25EUSxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDaEMsSUFBSSxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQVksTUFBQSxDQUVEcUIsT0FBTyxHQUFQLFNBQUFBLFFBQVFDLElBQUksRUFBRTtJQUNWLElBQUksQ0FBQ3pCLFFBQVEsQ0FBQ3lCLElBQUksR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztFQUMzQyxDQUFDO0VBQUEsT0FBQS9CLFNBQUE7QUFBQSxFQTFFa0NQLHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL215LWNvdXBvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XHJcblxyXG4vLyBUT0RPXHJcbi8vIElNUE9SVEFOVDogR0VUIENPVVBPTlMgUkVRVUVTVCBIQVMgQkVFTiBNT0NLRUQgRFVFIFRPIE1JU1NJTkcgV09SS0lORyBFTkRQT0lOVC5cclxuLy8gSVMgVVAgVE8gUElOSyBaRUJSQSBUTyBDT01QTEVURSBJVCBXSEVOIFRIRSBBUEkgSVMgV09SS0lORy5cclxuXHJcbmNvbnN0IGJvZHlNb2NrUmVzcG9uc2UgPSB7XHJcbiAgICBjb3Vwb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnMTAlIE9GRicsXHJcbiAgICAgICAgICAgIGNvZGU6ICcxME9GRicsXHJcbiAgICAgICAgICAgIGVuZF9kYXRlOiAnSmFuIDExdGggMjAyNCcsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ0FjdGl2ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcyMCUgT0ZGJyxcclxuICAgICAgICAgICAgY29kZTogJzIwT0ZGJyxcclxuICAgICAgICAgICAgZW5kX2RhdGU6ICdNYXIgMjB0aCAyMDI0JyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnVXNlZCcsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUNvdXBvbnMgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJy5wYWdlIC5sb2FkaW5nT3ZlcmxheScpO1xyXG4gICAgICAgIHRoaXMuJGNvdXBvbnNDb250YWluZXIgPSAkKCcucGFnZSAjbXktY291cG9ucycpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLmdldENvdXBvbnNCeUhvc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb3Vwb25zQnlIb3N0KCkge1xyXG4gICAgICAgIC8vIENPTVBMRVRFIFdJVEggQVBJIFJFUVVFU1QgQU5EIExPQURJTkcgU1RBVEUgV0hJTEUgR0VUVElORyBEQVRBXHJcbiAgICAgICAgLy8gREFURSBXSEVOIGNvdXBvbiBXQVMgQ1JFQVRFRCBJUyBOT1QgUEFSVCBPRiBUSEUgUkVTUE9OU0UuXHJcbiAgICAgICAgLy8gY291cG9uIEVORCBEQVRFIElTIFVTRUQgRk9SIERJU1BMQVkuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHRzKGJvZHlNb2NrUmVzcG9uc2UuY291cG9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVzdWx0cyhjb3Vwb25zKSB7XHJcbiAgICAgICAgY29uc3QgY291cG9uc0h0bWwgPSBjb3Vwb25zLm1hcCgoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBjb2RlLFxyXG4gICAgICAgICAgICBlbmRfZGF0ZTogZW5kRGF0ZSxcclxuICAgICAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIH0pID0+IChgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvdXBvbi13cmFwcGVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvdXBvbi1pbmZvJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb3Vwb24taWQnPiR7bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb3Vwb24tc3RhdHVzIGRlc2t0b3AnPiR7c3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjb3Vwb24tdGFibGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RhdGEtY29sdW1uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPSdkYXRhLXRpdGxlJz5Db2RlPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2NvdXBvbi1jb2RlIGRhdGEtdmFsdWUnPiR7Y29kZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGF0YS1jb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9J2RhdGEtdGl0bGUnPlZhbGlkIFVudGlsPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2RhdGEtdmFsdWUnPiR7ZW5kRGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGF0YS1jb2x1bW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gYnV0dG9uLS1wcmltYXJ5IGNvcHktYnV0dG9uICR7c3RhdHVzICE9PSAnQWN0aXZlJyA/ICd1LWhpZGRlbicgOiAnJ30nPkNvcHkgQ29kZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2RhdGEtY29sdW1uIG1vYmlsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvdXBvbi1zdGF0dXMnPiR7c3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGApKS5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgdGhpcy4kY291cG9uc0NvbnRhaW5lci5odG1sKGNvdXBvbnNIdG1sKTtcclxuICAgICAgICB0aGlzLmJpbmRDb3B5TGluaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU5vUmVzdWx0cygpIHtcclxuICAgICAgICBjb25zdCByZXN1bHRzSFRNTCA9ICc8ZGl2Pk5vIGNvdXBvbnMgZm91bmQuPC9kaXY+JztcclxuXHJcbiAgICAgICAgdGhpcy4kY291cG9uc0NvbnRhaW5lci5odG1sKHJlc3VsdHNIVE1MKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcihlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTm9SZXN1bHRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZENvcHlMaW5rKCkge1xyXG4gICAgICAgICQoJy5jb3Vwb24tdGFibGUgLmNvcHktYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJCgnLmNvdXBvbi10YWJsZSAuY291cG9uLWNvZGUnKS5odG1sKCk7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRpbmcoZmxhZykge1xyXG4gICAgICAgIHRoaXMuJG92ZXJsYXlbZmxhZyA/ICdzaG93JyA6ICdoaWRlJ10oKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJib2R5TW9ja1Jlc3BvbnNlIiwiY291cG9ucyIsIm5hbWUiLCJjb2RlIiwiZW5kX2RhdGUiLCJzdGF0dXMiLCJNeUNvdXBvbnMiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCIkb3ZlcmxheSIsIiQiLCIkY291cG9uc0NvbnRhaW5lciIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJnZXRDb3Vwb25zQnlIb3N0IiwiaGFuZGxlUmVzdWx0cyIsImNvdXBvbnNIdG1sIiwibWFwIiwiX3JlZiIsImVuZERhdGUiLCJqb2luIiwiaHRtbCIsImJpbmRDb3B5TGluayIsImhhbmRsZU5vUmVzdWx0cyIsInJlc3VsdHNIVE1MIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImxvYWRpbmciLCJmbGFnIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=