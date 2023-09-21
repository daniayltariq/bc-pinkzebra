"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_custom_my-parties_js"],{

/***/ "./assets/js/theme/custom/my-parties.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/custom/my-parties.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyParties)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/theme/page-manager.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// TODO
// IMPORTANT: GET PARTIES REQUEST HAS BEEN MOCKED DUE TO MISSING WORKING ENDPOINT.
// IS UP TO PINK ZEBRA TO COMPLETE IT WHEN THE API IS WORKING.

var bodyMockResponse = {
  parties: [{
    party_id: 4353522,
    repID: 1234,
    host_name: 'Candace Mertens',
    party_name: 'Exotic Party',
    ends_date: 'Jan 11th 2024',
    orders_qty: 12,
    dolars: '$17.20',
    status: 'Booked',
    share_link: '/?consultant=ittest%201&partyId=3'
  }, {
    party_id: 56436,
    repID: 5678,
    host_name: 'Felicia Cheshire',
    party_name: 'Best Party Ever',
    ends_date: 'Mar 20th 2024',
    orders_qty: 9,
    dolars: '$12.50',
    status: 'Cancelled',
    share_link: '/?consultant=ittest%201&partyId=3'
  }]
};
var MyParties = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(MyParties, _PageManager);
  function MyParties(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.$overlay = $('.page .loadingOverlay');
    _this.$partiesContainer = $('.page #my-parties');
    _this.context = context;
    return _this;
  }
  var _proto = MyParties.prototype;
  _proto.onReady = function onReady() {
    this.getPartiesByHost(this.context);
  };
  _proto.getPartiesByHost = function getPartiesByHost(context) {
    // COMPLETE WITH API REQUEST AND LOADING STATE WHILE GETTING DATA
    // DATE WHEN PARTY WAS CREATED IS NOT PART OF THE RESPONSE.
    // PARTY END DATE IS USED FOR DISPLAY.
    this.handleResults(context, bodyMockResponse.parties);
  };
  _proto.handleResults = function handleResults(context, parties) {
    var partiesHtml = parties.map(function (_ref) {
      var partyId = _ref.party_id,
        endsDate = _ref.ends_date,
        ordersQty = _ref.orders_qty,
        dolars = _ref.dolars,
        status = _ref.status,
        shareLink = _ref.share_link;
      var fullUrl = "" + context.secureBaseUrl + shareLink;
      return "\n                <div class=\"party-wrapper\">\n                    <div class=\"party-info\">\n                        <div class=\"party-id\">Party ID " + partyId + "</div>\n                        <div class=\"party-status desktop\">" + status + "</div>\n                    </div>\n                    <div class=\"party-table\">\n                        <div class=\"data-column\">\n                            <h6 class=\"data-title\">Date</h6>\n                            <span class=\"data-value\">" + endsDate + "</span>\n                        </div>\n                        <div class=\"data-column\">\n                            <h6 class=\"data-title\">Orders</h6>\n                            <span class=\"data-value\">" + ordersQty + "</span>\n                        </div>\n                        <div class=\"data-column\">\n                            <h6 class=\"data-title\">Dollars</h6>\n                            <span class=\"data-value\">" + dolars + "</span>\n                        </div>\n                        <div class=\"data-column\">\n                            <h6 class=\"data-title\">Share</h6>\n                            <div class=\"share-icons-wrapper\">\n                                <button href=\"" + shareLink + "\" class=\"share-button\">Copy Link</button>\n                                <button class=\"email-share-button\">\n                                    <svg width=\"38px\" height=\"38px\"><use href=\"#icon-email_2\"></use></svg>\n                                </button>\n                                <button id=\"shareBtn\" class=\"fb-share-button\">\n                                    <svg width=\"38px\" height=\"38px\"><use href=\"#icon-facebook\"></use></svg>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"party-info\">\n                        <div class=\"party-status mobile\">" + status + "</div>\n                    </div>\n                </div>\n                <script>\n                    document.getElementById('shareBtn').onclick = function() {\n                    FB.ui({\n                        display: 'popup',\n                        method: 'share',\n                        href: '" + fullUrl + "',\n                    }, function(response){});\n                    }\n                </script>\n            ";
    }).join('');
    this.$partiesContainer.html(partiesHtml);
    this.bindCopyLink();
  };
  _proto.handleNoResults = function handleNoResults() {
    var resultsHTML = '<div>No parties found.</div>';
    this.$partiesContainer.html(resultsHTML);
  };
  _proto.handleError = function handleError(error) {
    console.error(error);
    this.handleNoResults();
  };
  _proto.bindCopyLink = function bindCopyLink() {
    var _this2 = this;
    $('.party-table .share-button').on('click', function (event) {
      var url = event.target.getAttribute('href');
      var secureBaseUrl = _this2.context.secureBaseUrl;
      navigator.clipboard.writeText(secureBaseUrl + url);
    });
  };
  _proto.loading = function loading(flag) {
    this.$overlay[flag ? 'show' : 'hide']();
  };
  return MyParties;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jdXN0b21fbXktcGFydGllc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBLElBQU1DLGdCQUFnQixHQUFHO0VBQ3JCQyxPQUFPLEVBQUUsQ0FDTDtJQUNJQyxRQUFRLEVBQUUsT0FBTztJQUNqQkMsS0FBSyxFQUFFLElBQUk7SUFDWEMsU0FBUyxFQUFFLGlCQUFpQjtJQUM1QkMsVUFBVSxFQUFFLGNBQWM7SUFDMUJDLFNBQVMsRUFBRSxlQUFlO0lBQzFCQyxVQUFVLEVBQUUsRUFBRTtJQUNkQyxNQUFNLEVBQUUsUUFBUTtJQUNoQkMsTUFBTSxFQUFFLFFBQVE7SUFDaEJDLFVBQVUsRUFBRTtFQUNoQixDQUFDLEVBQ0Q7SUFDSVIsUUFBUSxFQUFFLEtBQUs7SUFDZkMsS0FBSyxFQUFFLElBQUk7SUFDWEMsU0FBUyxFQUFFLGtCQUFrQjtJQUM3QkMsVUFBVSxFQUFFLGlCQUFpQjtJQUM3QkMsU0FBUyxFQUFFLGVBQWU7SUFDMUJDLFVBQVUsRUFBRSxDQUFDO0lBQ2JDLE1BQU0sRUFBRSxRQUFRO0lBQ2hCQyxNQUFNLEVBQUUsV0FBVztJQUNuQkMsVUFBVSxFQUFFO0VBQ2hCLENBQUM7QUFFVCxDQUFDO0FBQUMsSUFFbUJDLFNBQVMsMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixTQUFBLEVBQUFDLFlBQUE7RUFDMUIsU0FBQUQsVUFBWUcsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBSCxZQUFBLENBQUFJLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0UsUUFBUSxHQUFHQyxDQUFDLENBQUMsdUJBQXVCLENBQUM7SUFDMUNILEtBQUEsQ0FBS0ksaUJBQWlCLEdBQUdELENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztJQUMvQ0gsS0FBQSxDQUFLRCxPQUFPLEdBQUdBLE9BQU87SUFBQyxPQUFBQyxLQUFBO0VBQzNCO0VBQUMsSUFBQUssTUFBQSxHQUFBVCxTQUFBLENBQUFVLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxPQUFPLEdBQVAsU0FBQUEsUUFBQSxFQUFVO0lBQ04sSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNULE9BQU8sQ0FBQztFQUN2QyxDQUFDO0VBQUFNLE1BQUEsQ0FFREcsZ0JBQWdCLEdBQWhCLFNBQUFBLGlCQUFpQlQsT0FBTyxFQUFFO0lBQ3RCO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBQ1UsYUFBYSxDQUFDVixPQUFPLEVBQUVkLGdCQUFnQixDQUFDQyxPQUFPLENBQUM7RUFDekQsQ0FBQztFQUFBbUIsTUFBQSxDQUVESSxhQUFhLEdBQWIsU0FBQUEsY0FBY1YsT0FBTyxFQUFFYixPQUFPLEVBQUU7SUFDNUIsSUFBTXdCLFdBQVcsR0FBR3hCLE9BQU8sQ0FBQ3lCLEdBQUcsQ0FBQyxVQUFBQyxJQUFBLEVBVTFCO01BQUEsSUFUUUMsT0FBTyxHQUFBRCxJQUFBLENBQWpCekIsUUFBUTtRQUlHMkIsUUFBUSxHQUFBRixJQUFBLENBQW5CckIsU0FBUztRQUNHd0IsU0FBUyxHQUFBSCxJQUFBLENBQXJCcEIsVUFBVTtRQUNWQyxNQUFNLEdBQUFtQixJQUFBLENBQU5uQixNQUFNO1FBQ05DLE1BQU0sR0FBQWtCLElBQUEsQ0FBTmxCLE1BQU07UUFDTXNCLFNBQVMsR0FBQUosSUFBQSxDQUFyQmpCLFVBQVU7TUFFVixJQUFNc0IsT0FBTyxRQUFNbEIsT0FBTyxDQUFDbUIsYUFBYSxHQUFHRixTQUFXO01BRXRELHNLQUc2Q0gsT0FBTyw0RUFDSm5CLE1BQU0seVFBS1hvQixRQUFRLCtOQUlSQyxTQUFTLGdPQUlUdEIsTUFBTSx1UkFLYnVCLFNBQVMsdXRCQVdFdEIsTUFBTSwrVEFRaEN1QixPQUFPO0lBS2hDLENBQUMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDO0lBRVgsSUFBSSxDQUFDZixpQkFBaUIsQ0FBQ2dCLElBQUksQ0FBQ1YsV0FBVyxDQUFDO0lBQ3hDLElBQUksQ0FBQ1csWUFBWSxDQUFDLENBQUM7RUFDdkIsQ0FBQztFQUFBaEIsTUFBQSxDQUVEaUIsZUFBZSxHQUFmLFNBQUFBLGdCQUFBLEVBQWtCO0lBQ2QsSUFBTUMsV0FBVyxHQUFHLDhCQUE4QjtJQUVsRCxJQUFJLENBQUNuQixpQkFBaUIsQ0FBQ2dCLElBQUksQ0FBQ0csV0FBVyxDQUFDO0VBQzVDLENBQUM7RUFBQWxCLE1BQUEsQ0FFRG1CLFdBQVcsR0FBWCxTQUFBQSxZQUFZQyxLQUFLLEVBQUU7SUFDZkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQztJQUNwQixJQUFJLENBQUNILGVBQWUsQ0FBQyxDQUFDO0VBQzFCLENBQUM7RUFBQWpCLE1BQUEsQ0FFRGdCLFlBQVksR0FBWixTQUFBQSxhQUFBLEVBQWU7SUFBQSxJQUFBTSxNQUFBO0lBQ1h4QixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ3lCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQ2pELElBQU1DLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNDLFlBQVksQ0FBQyxNQUFNLENBQUM7TUFDN0MsSUFBUWQsYUFBYSxHQUFLUyxNQUFJLENBQUM1QixPQUFPLENBQTlCbUIsYUFBYTtNQUNyQmUsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ2pCLGFBQWEsR0FBR1ksR0FBRyxDQUFDO0lBQ3RELENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXpCLE1BQUEsQ0FFRCtCLE9BQU8sR0FBUCxTQUFBQSxRQUFRQyxJQUFJLEVBQUU7SUFDVixJQUFJLENBQUNuQyxRQUFRLENBQUNtQyxJQUFJLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFDM0MsQ0FBQztFQUFBLE9BQUF6QyxTQUFBO0FBQUEsRUExR2tDWixxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9teS1wYXJ0aWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xyXG5cclxuLy8gVE9ET1xyXG4vLyBJTVBPUlRBTlQ6IEdFVCBQQVJUSUVTIFJFUVVFU1QgSEFTIEJFRU4gTU9DS0VEIERVRSBUTyBNSVNTSU5HIFdPUktJTkcgRU5EUE9JTlQuXHJcbi8vIElTIFVQIFRPIFBJTksgWkVCUkEgVE8gQ09NUExFVEUgSVQgV0hFTiBUSEUgQVBJIElTIFdPUktJTkcuXHJcblxyXG5jb25zdCBib2R5TW9ja1Jlc3BvbnNlID0ge1xyXG4gICAgcGFydGllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFydHlfaWQ6IDQzNTM1MjIsXHJcbiAgICAgICAgICAgIHJlcElEOiAxMjM0LFxyXG4gICAgICAgICAgICBob3N0X25hbWU6ICdDYW5kYWNlIE1lcnRlbnMnLFxyXG4gICAgICAgICAgICBwYXJ0eV9uYW1lOiAnRXhvdGljIFBhcnR5JyxcclxuICAgICAgICAgICAgZW5kc19kYXRlOiAnSmFuIDExdGggMjAyNCcsXHJcbiAgICAgICAgICAgIG9yZGVyc19xdHk6IDEyLFxyXG4gICAgICAgICAgICBkb2xhcnM6ICckMTcuMjAnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdCb29rZWQnLFxyXG4gICAgICAgICAgICBzaGFyZV9saW5rOiAnLz9jb25zdWx0YW50PWl0dGVzdCUyMDEmcGFydHlJZD0zJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFydHlfaWQ6IDU2NDM2LFxyXG4gICAgICAgICAgICByZXBJRDogNTY3OCxcclxuICAgICAgICAgICAgaG9zdF9uYW1lOiAnRmVsaWNpYSBDaGVzaGlyZScsXHJcbiAgICAgICAgICAgIHBhcnR5X25hbWU6ICdCZXN0IFBhcnR5IEV2ZXInLFxyXG4gICAgICAgICAgICBlbmRzX2RhdGU6ICdNYXIgMjB0aCAyMDI0JyxcclxuICAgICAgICAgICAgb3JkZXJzX3F0eTogOSxcclxuICAgICAgICAgICAgZG9sYXJzOiAnJDEyLjUwJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnQ2FuY2VsbGVkJyxcclxuICAgICAgICAgICAgc2hhcmVfbGluazogJy8/Y29uc3VsdGFudD1pdHRlc3QlMjAxJnBhcnR5SWQ9MycsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVBhcnRpZXMgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJy5wYWdlIC5sb2FkaW5nT3ZlcmxheScpO1xyXG4gICAgICAgIHRoaXMuJHBhcnRpZXNDb250YWluZXIgPSAkKCcucGFnZSAjbXktcGFydGllcycpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLmdldFBhcnRpZXNCeUhvc3QodGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJ0aWVzQnlIb3N0KGNvbnRleHQpIHtcclxuICAgICAgICAvLyBDT01QTEVURSBXSVRIIEFQSSBSRVFVRVNUIEFORCBMT0FESU5HIFNUQVRFIFdISUxFIEdFVFRJTkcgREFUQVxyXG4gICAgICAgIC8vIERBVEUgV0hFTiBQQVJUWSBXQVMgQ1JFQVRFRCBJUyBOT1QgUEFSVCBPRiBUSEUgUkVTUE9OU0UuXHJcbiAgICAgICAgLy8gUEFSVFkgRU5EIERBVEUgSVMgVVNFRCBGT1IgRElTUExBWS5cclxuICAgICAgICB0aGlzLmhhbmRsZVJlc3VsdHMoY29udGV4dCwgYm9keU1vY2tSZXNwb25zZS5wYXJ0aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXN1bHRzKGNvbnRleHQsIHBhcnRpZXMpIHtcclxuICAgICAgICBjb25zdCBwYXJ0aWVzSHRtbCA9IHBhcnRpZXMubWFwKCh7XHJcbiAgICAgICAgICAgIHBhcnR5X2lkOiBwYXJ0eUlkLFxyXG4gICAgICAgICAgICAvLyByZXBJRDogcmVwSWQsXHJcbiAgICAgICAgICAgIC8vIGhvc3RfbmFtZTogaG9zdE5hbWUsXHJcbiAgICAgICAgICAgIC8vIHBhcnR5X25hbWU6IHBhcnR5TmFtZSxcclxuICAgICAgICAgICAgZW5kc19kYXRlOiBlbmRzRGF0ZSxcclxuICAgICAgICAgICAgb3JkZXJzX3F0eTogb3JkZXJzUXR5LFxyXG4gICAgICAgICAgICBkb2xhcnMsXHJcbiAgICAgICAgICAgIHN0YXR1cyxcclxuICAgICAgICAgICAgc2hhcmVfbGluazogc2hhcmVMaW5rLFxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZnVsbFVybCA9IGAke2NvbnRleHQuc2VjdXJlQmFzZVVybH0ke3NoYXJlTGlua31gO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFydHktd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0eS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0eS1pZFwiPlBhcnR5IElEICR7cGFydHlJZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcnR5LXN0YXR1cyBkZXNrdG9wXCI+JHtzdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcnR5LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwiZGF0YS10aXRsZVwiPkRhdGU8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRhLXZhbHVlXCI+JHtlbmRzRGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImRhdGEtdGl0bGVcIj5PcmRlcnM8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRhLXZhbHVlXCI+JHtvcmRlcnNRdHl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJkYXRhLXRpdGxlXCI+RG9sbGFyczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGEtdmFsdWVcIj4ke2RvbGFyc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImRhdGEtdGl0bGVcIj5TaGFyZTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hhcmUtaWNvbnMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaHJlZj1cIiR7c2hhcmVMaW5rfVwiIGNsYXNzPVwic2hhcmUtYnV0dG9uXCI+Q29weSBMaW5rPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVtYWlsLXNoYXJlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzhweFwiIGhlaWdodD1cIjM4cHhcIj48dXNlIGhyZWY9XCIjaWNvbi1lbWFpbF8yXCI+PC91c2U+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNoYXJlQnRuXCIgY2xhc3M9XCJmYi1zaGFyZS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjM4cHhcIiBoZWlnaHQ9XCIzOHB4XCI+PHVzZSBocmVmPVwiI2ljb24tZmFjZWJvb2tcIj48L3VzZT48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFydHktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFydHktc3RhdHVzIG1vYmlsZVwiPiR7c3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZUJ0bicpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBGQi51aSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdwb3B1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3NoYXJlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJyR7ZnVsbFVybH0nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKXt9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgICAgICAgYCk7XHJcbiAgICAgICAgfSkuam9pbignJyk7XHJcblxyXG4gICAgICAgIHRoaXMuJHBhcnRpZXNDb250YWluZXIuaHRtbChwYXJ0aWVzSHRtbCk7XHJcbiAgICAgICAgdGhpcy5iaW5kQ29weUxpbmsoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOb1Jlc3VsdHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0c0hUTUwgPSAnPGRpdj5ObyBwYXJ0aWVzIGZvdW5kLjwvZGl2Pic7XHJcblxyXG4gICAgICAgIHRoaXMuJHBhcnRpZXNDb250YWluZXIuaHRtbChyZXN1bHRzSFRNTCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU5vUmVzdWx0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRDb3B5TGluaygpIHtcclxuICAgICAgICAkKCcucGFydHktdGFibGUgLnNoYXJlLWJ1dHRvbicpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICBjb25zdCB7IHNlY3VyZUJhc2VVcmwgfSA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc2VjdXJlQmFzZVVybCArIHVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGluZyhmbGFnKSB7XHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheVtmbGFnID8gJ3Nob3cnIDogJ2hpZGUnXSgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsImJvZHlNb2NrUmVzcG9uc2UiLCJwYXJ0aWVzIiwicGFydHlfaWQiLCJyZXBJRCIsImhvc3RfbmFtZSIsInBhcnR5X25hbWUiLCJlbmRzX2RhdGUiLCJvcmRlcnNfcXR5IiwiZG9sYXJzIiwic3RhdHVzIiwic2hhcmVfbGluayIsIk15UGFydGllcyIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsIiRvdmVybGF5IiwiJCIsIiRwYXJ0aWVzQ29udGFpbmVyIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImdldFBhcnRpZXNCeUhvc3QiLCJoYW5kbGVSZXN1bHRzIiwicGFydGllc0h0bWwiLCJtYXAiLCJfcmVmIiwicGFydHlJZCIsImVuZHNEYXRlIiwib3JkZXJzUXR5Iiwic2hhcmVMaW5rIiwiZnVsbFVybCIsInNlY3VyZUJhc2VVcmwiLCJqb2luIiwiaHRtbCIsImJpbmRDb3B5TGluayIsImhhbmRsZU5vUmVzdWx0cyIsInJlc3VsdHNIVE1MIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJfdGhpczIiLCJvbiIsImV2ZW50IiwidXJsIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwibG9hZGluZyIsImZsYWciLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==