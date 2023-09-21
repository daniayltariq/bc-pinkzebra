"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_custom_consultant-search_js"],{

/***/ "./assets/js/theme/custom/consultant-search.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/custom/consultant-search.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsultantSearch)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _api_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api-helper */ "./assets/js/api-helper.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ConsultantSearch = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(ConsultantSearch, _PageManager);
  function ConsultantSearch(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.$overlay = $('.page .loadingOverlay');
    _this.$resultsContainer = $('.page #search-results');
    _this.context = context;
    return _this;
  }
  var _proto = ConsultantSearch.prototype;
  _proto.onReady = function onReady() {
    var search = new URLSearchParams(window.location.search);
    this.searchType = search.get('type');
    this.searchParams = {};
    for (var _iterator = _createForOfIteratorHelperLoose(new URLSearchParams(window.location.search)), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
        key = _step$value[0],
        value = _step$value[1];
      if (key !== 'type') {
        this.searchParams[key] = value;
      }
    }
    this.searchConsultants();
    this.pageTitle = 'Your search results';
    var urlReturn = search.get('url_return');
    if (urlReturn && urlReturn.includes('account') && urlReturn.includes('view_order')) {
      this.pageTitle = 'The consultant assigned to your order will be updated.';
      this.extraMessage = 'Please note that proceeding with this action will result in the removal of the Party ID associated with the order.';
    }
  };
  _proto.searchConsultants = function searchConsultants() {
    var _this2 = this;
    var searchTypes = {
      zip: function zip() {
        return _this2.searchByZip(new URLSearchParams(window.location.search));
      },
      params: function params() {
        return _this2.searchByParams(new URLSearchParams(window.location.search));
      }
    };
    if (searchTypes && searchTypes[this.searchType]) {
      this.loading(true);
      searchTypes[this.searchType]().then(function (consultants) {
        if (consultants.length > 0) {
          _this2.handleResults(consultants);
        } else {
          _this2.handleNoResults();
        }
        _this2.loading(false);
      })["catch"](function (error) {
        _this2.handleError(error);
        _this2.loading(false);
      });
    }
  };
  _proto.handleResults = function handleResults(consultants) {
    var consultantsHtml = consultants.map(function (_ref) {
      var firstName = _ref.first_name,
        lastName = _ref.last_name,
        imageUrl = _ref.rep_img,
        city = _ref.city,
        state = _ref.state,
        websiteName = _ref.website;
      return "\n            <div class=\"consultant-information\">\n                <img src=\"" + imageUrl + "\"/>\n                <p class=\"fullname\" >" + firstName + " " + lastName + "</p>\n                <p class=\"location\">" + city + ", " + state + "</p>\n                <button class=\"button button--primary my-consultant\" data-website=\"" + websiteName + "\" href=\"#\">My consultant</button>\n            </div>\n        ";
    }).join('');
    var extraText = '';
    if (this.extraMessage) {
      extraText = "<span class=\"consultant-alert\"> " + this.extraMessage + " </span>";
    }
    var resultsHTML = "<div>\n            <h2 class=\"consultants-title\">" + this.pageTitle + "</h2>\n            " + extraText + "\n            <div class=\"consultants-wrapper\">\n                " + consultantsHtml + "\n            </div>\n        </div>";
    this.$resultsContainer.html(resultsHTML);
    this.bindConsultantSelection();
  };
  _proto.handleNoResults = function handleNoResults() {
    var resultsHTML = '<div>No consultants were found.</div>';
    this.$resultsContainer.html(resultsHTML);
  };
  _proto.handleError = function handleError(error) {
    console.error(error);
    this.handleNoResults();
  };
  _proto.searchByZip = function searchByZip() {
    var zipCode = '';
    for (var _iterator2 = _createForOfIteratorHelperLoose(new URLSearchParams(window.location.search)), _step2; !(_step2 = _iterator2()).done;) {
      var _step2$value = _step2.value,
        key = _step2$value[0],
        value = _step2$value[1];
      if (key === 'zipcode') {
        zipCode = value;
      }
    }
    var aws_cloudfront_url = this.context.themeSetting.aws_cloudfront_url;
    var aws = aws_cloudfront_url + "searchByZipCode?zip_code=" + zipCode;
    return (0,_api_helper__WEBPACK_IMPORTED_MODULE_1__.getData)(aws);
  };
  _proto.searchByParams = function searchByParams() {
    var aws_url = this.context.themeSetting.aws_url;
    var aws_search = new URL(aws_url + "search");
    var queryParams = new URLSearchParams(aws_search.search);
    for (var _iterator3 = _createForOfIteratorHelperLoose(new URLSearchParams(window.location.search)), _step3; !(_step3 = _iterator3()).done;) {
      var _step3$value = _step3.value,
        key = _step3$value[0],
        value = _step3$value[1];
      if (key === 'firstName' && value.length >= 1) {
        queryParams.append('first_name', value);
      }
      if (key === 'lastName' && value.length >= 1) {
        queryParams.append('last_name', value);
      }
      if (key === 'consultantId' && value.length >= 1) {
        queryParams.append('repID', value);
      }
      if (key === 'webAddress' && value.length >= 1) {
        queryParams.append('website', value);
      }
      if (key === 'location' && value.length >= 1) {
        queryParams.append('state', value);
      }
    }
    aws_search.search = queryParams.toString();
    return (0,_api_helper__WEBPACK_IMPORTED_MODULE_1__.getData)(aws_search.toString());
  };
  _proto.bindConsultantSelection = function bindConsultantSelection() {
    var consultansFound = document.getElementsByClassName('my-consultant');
    for (var i = 0; i < consultansFound.length; i++) {
      consultansFound[i].addEventListener('click', function (event) {
        var website = $(event.currentTarget).data('website');
        var search = new URLSearchParams(window.location.search);
        var returnUrl = (search == null ? void 0 : search.get('url_return')) || '';
        var regex = /[?&][^=#]+=[^&#]+/;
        var url = window.location.protocol + "//" + window.location.host + returnUrl + "?consultant=" + website;

        // Test if we have any other query parameters. Currently, it is only used for my account
        if (regex.test(search.get('url_return'))) {
          url = window.location.protocol + "//" + window.location.host + returnUrl.replace(/&?consultant_order=[^&]*/g, '') + "&consultant_order=" + website;
        }
        window.location.replace(url);
      });
    }
  };
  _proto.loading = function loading(flag) {
    this.$overlay[flag ? 'show' : 'hide']();
  };
  return ConsultantSearch;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jdXN0b21fY29uc3VsdGFudC1zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0M7QUFBQSxJQUV0QkUsZ0JBQWdCLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsZ0JBQUEsRUFBQUMsWUFBQTtFQUNqQyxTQUFBRCxpQkFBWUcsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBSCxZQUFBLENBQUFJLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0UsUUFBUSxHQUFHQyxDQUFDLENBQUMsdUJBQXVCLENBQUM7SUFDMUNILEtBQUEsQ0FBS0ksaUJBQWlCLEdBQUdELENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztJQUNuREgsS0FBQSxDQUFLRCxPQUFPLEdBQUdBLE9BQU87SUFBQyxPQUFBQyxLQUFBO0VBQzNCO0VBQUMsSUFBQUssTUFBQSxHQUFBVCxnQkFBQSxDQUFBVSxTQUFBO0VBQUFELE1BQUEsQ0FFREUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUNOLElBQU1DLE1BQU0sR0FBRyxJQUFJQyxlQUFlLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDSCxNQUFNLENBQUM7SUFDMUQsSUFBSSxDQUFDSSxVQUFVLEdBQUdKLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFJLENBQUNDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDdEIsU0FBQUMsU0FBQSxHQUFBQywrQkFBQSxDQUEyQixJQUFJUCxlQUFlLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDSCxNQUFNLENBQUMsR0FBQVMsS0FBQSxJQUFBQSxLQUFBLEdBQUFGLFNBQUEsSUFBQUcsSUFBQSxHQUFFO01BQUEsSUFBQUMsV0FBQSxHQUFBRixLQUFBLENBQUFHLEtBQUE7UUFBNURDLEdBQUcsR0FBQUYsV0FBQTtRQUFFQyxL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QUFNNUUsTUFBTSxDQUFDQyxRQUFRLENBQUM0RSxRQUFRLFVBQUs3RSxNQUFNLENBQUNDLFFBQVEsQ0FBQzZFLElBQUksR0FBR0osU0FBUyxvQkFBZS9CLE9BQVM7O1FBRWxHO1FBQ0EsSUFBSWdDLEtBQUssQ0FBQ0ksSUFBSSxDQUFDakYsTUFBTSxDQUFDSyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRTtVQUN0Q3lFLEdBQUcsR0FBTTVFLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDNEUsUUFBUSxVQUFLN0UsTUFBTSxDQUFDQyxRQUFRLENBQUM2RSxJQUFJLEdBQUdKLFNBQVMsQ0FBQ00sT0FBTyxDQUFDLDJCQUEyQixFQUFFLEVBQUUsQ0FBQywwQkFBcUJyQyxPQUFTO1FBQ2pKO1FBRUEzQyxNQUFNLENBQUNDLFFBQVEsQ0FBQytFLE9BQU8sQ0FBQ0osR0FBRyxDQUFDO01BQ2hDLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUFBakYsTUFBQSxDQUVENEIsT0FBTyxHQUFQLFNBQUFBLFFBQVEwRCxJQUFJLEVBQUU7SUFDVixJQUFJLENBQUN6RixRQUFRLENBQUN5RixJQUFJLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFDM0MsQ0FBQztFQUFBLE9BQUEvRixnQkFBQTtBQUFBLEVBdkt5Q0YscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jdXN0b20vY29uc3VsdGFudC1zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi9hcGktaGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN1bHRhbnRTZWFyY2ggZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJy5wYWdlIC5sb2FkaW5nT3ZlcmxheScpO1xyXG4gICAgICAgIHRoaXMuJHJlc3VsdHNDb250YWluZXIgPSAkKCcucGFnZSAjc2VhcmNoLXJlc3VsdHMnKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICB0aGlzLnNlYXJjaFR5cGUgPSBzZWFyY2guZ2V0KCd0eXBlJyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICd0eXBlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQYXJhbXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQ29uc3VsdGFudHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlVGl0bGUgPSAnWW91ciBzZWFyY2ggcmVzdWx0cyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybFJldHVybiA9IHNlYXJjaC5nZXQoJ3VybF9yZXR1cm4nKTtcclxuICAgICAgICBpZiAodXJsUmV0dXJuICYmIHVybFJldHVybi5pbmNsdWRlcygnYWNjb3VudCcpICYmIHVybFJldHVybi5pbmNsdWRlcygndmlld19vcmRlcicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZVRpdGxlID0gJ1RoZSBjb25zdWx0YW50IGFzc2lnbmVkIHRvIHlvdXIgb3JkZXIgd2lsbCBiZSB1cGRhdGVkLic7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0cmFNZXNzYWdlID0gJ1BsZWFzZSBub3RlIHRoYXQgcHJvY2VlZGluZyB3aXRoIHRoaXMgYWN0aW9uIHdpbGwgcmVzdWx0IGluIHRoZSByZW1vdmFsIG9mIHRoZSBQYXJ0eSBJRCBhc3NvY2lhdGVkIHdpdGggdGhlIG9yZGVyLic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaENvbnN1bHRhbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFR5cGVzID0ge1xyXG4gICAgICAgICAgICB6aXA6ICgpID0+IHRoaXMuc2VhcmNoQnlaaXAobmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSksXHJcbiAgICAgICAgICAgIHBhcmFtczogKCkgPT4gdGhpcy5zZWFyY2hCeVBhcmFtcyhuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoVHlwZXMgJiYgc2VhcmNoVHlwZXNbdGhpcy5zZWFyY2hUeXBlXSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBzZWFyY2hUeXBlc1t0aGlzLnNlYXJjaFR5cGVdKCkudGhlbigoY29uc3VsdGFudHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25zdWx0YW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHRzKGNvbnN1bHRhbnRzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOb1Jlc3VsdHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVzdWx0cyhjb25zdWx0YW50cykge1xyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhbnRzSHRtbCA9IGNvbnN1bHRhbnRzLm1hcCgoe1xyXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbGFzdE5hbWUsXHJcbiAgICAgICAgICAgIHJlcF9pbWc6IGltYWdlVXJsLFxyXG4gICAgICAgICAgICBjaXR5LFxyXG4gICAgICAgICAgICBzdGF0ZSxcclxuICAgICAgICAgICAgd2Vic2l0ZTogd2Vic2l0ZU5hbWUsXHJcbiAgICAgICAgfSkgPT4gKGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnN1bHRhbnQtaW5mb3JtYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVVybH1cIi8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZ1bGxuYW1lXCIgPiR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibG9jYXRpb25cIj4ke2NpdHl9LCAke3N0YXRlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IG15LWNvbnN1bHRhbnRcIiBkYXRhLXdlYnNpdGU9XCIke3dlYnNpdGVOYW1lfVwiIGhyZWY9XCIjXCI+TXkgY29uc3VsdGFudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgKSkuam9pbignJyk7XHJcbiAgICAgICAgbGV0IGV4dHJhVGV4dCA9ICcnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5leHRyYU1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgZXh0cmFUZXh0ID0gYDxzcGFuIGNsYXNzPVwiY29uc3VsdGFudC1hbGVydFwiPiAke3RoaXMuZXh0cmFNZXNzYWdlfSA8L3NwYW4+YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHNIVE1MID0gYDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbnN1bHRhbnRzLXRpdGxlXCI+JHt0aGlzLnBhZ2VUaXRsZX08L2gyPlxyXG4gICAgICAgICAgICAke2V4dHJhVGV4dH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnN1bHRhbnRzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICR7Y29uc3VsdGFudHNIdG1sfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICB0aGlzLiRyZXN1bHRzQ29udGFpbmVyLmh0bWwocmVzdWx0c0hUTUwpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRDb25zdWx0YW50U2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTm9SZXN1bHRzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHNIVE1MID0gJzxkaXY+Tm8gY29uc3VsdGFudHMgd2VyZSBmb3VuZC48L2Rpdj4nO1xyXG5cclxuICAgICAgICB0aGlzLiRyZXN1bHRzQ29udGFpbmVyLmh0bWwocmVzdWx0c0hUTUwpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9yKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVOb1Jlc3VsdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hCeVppcCgpIHtcclxuICAgICAgICBsZXQgemlwQ29kZSA9ICcnO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkpIHtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3ppcGNvZGUnKSB7XHJcbiAgICAgICAgICAgICAgICB6aXBDb2RlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgYXdzX2Nsb3VkZnJvbnRfdXJsIH0gPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nO1xyXG5cclxuICAgICAgICBjb25zdCBhd3MgPSBgJHthd3NfY2xvdWRmcm9udF91cmx9c2VhcmNoQnlaaXBDb2RlP3ppcF9jb2RlPSR7emlwQ29kZX1gO1xyXG4gICAgICAgIHJldHVybiBnZXREYXRhKGF3cyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoQnlQYXJhbXMoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhd3NfdXJsIH0gPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5nO1xyXG5cclxuICAgICAgICBjb25zdCBhd3Nfc2VhcmNoID0gbmV3IFVSTChgJHthd3NfdXJsfXNlYXJjaGApO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhhd3Nfc2VhcmNoLnNlYXJjaCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkpIHtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2ZpcnN0TmFtZScgJiYgdmFsdWUubGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmFwcGVuZCgnZmlyc3RfbmFtZScsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2xhc3ROYW1lJyAmJiB2YWx1ZS5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuYXBwZW5kKCdsYXN0X25hbWUnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdjb25zdWx0YW50SWQnICYmIHZhbHVlLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5hcHBlbmQoJ3JlcElEJywgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnd2ViQWRkcmVzcycgJiYgdmFsdWUubGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmFwcGVuZCgnd2Vic2l0ZScsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2xvY2F0aW9uJyAmJiB2YWx1ZS5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMuYXBwZW5kKCdzdGF0ZScsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdzX3NlYXJjaC5zZWFyY2ggPSBxdWVyeVBhcmFtcy50b1N0cmluZygpO1xyXG5cclxuICAgICAgICByZXR1cm4gZ2V0RGF0YShhd3Nfc2VhcmNoLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRDb25zdWx0YW50U2VsZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhbnNGb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ215LWNvbnN1bHRhbnQnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnN1bHRhbnNGb3VuZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdWx0YW5zRm91bmRbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlYnNpdGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3dlYnNpdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVXJsID0gc2VhcmNoPy5nZXQoJ3VybF9yZXR1cm4nKSB8fCAnJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gL1s/Jl1bXj0jXSs9W14mI10rLztcclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fSR7cmV0dXJuVXJsfT9jb25zdWx0YW50PSR7d2Vic2l0ZX1gO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgd2UgaGF2ZSBhbnkgb3RoZXIgcXVlcnkgcGFyYW1ldGVycy4gQ3VycmVudGx5LCBpdCBpcyBvbmx5IHVzZWQgZm9yIG15IGFjY291bnRcclxuICAgICAgICAgICAgICAgIGlmIChyZWdleC50ZXN0KHNlYXJjaC5nZXQoJ3VybF9yZXR1cm4nKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fSR7cmV0dXJuVXJsLnJlcGxhY2UoLyY/Y29uc3VsdGFudF9vcmRlcj1bXiZdKi9nLCAnJyl9JmNvbnN1bHRhbnRfb3JkZXI9JHt3ZWJzaXRlfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRpbmcoZmxhZykge1xyXG4gICAgICAgIHRoaXMuJG92ZXJsYXlbZmxhZyA/ICdzaG93JyA6ICdoaWRlJ10oKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJnZXREYXRhIiwiQ29uc3VsdGFudFNlYXJjaCIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsIiRvdmVybGF5IiwiJCIsIiRyZXN1bHRzQ29udGFpbmVyIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoVHlwZSIsImdldCIsInNlYXJjaFBhcmFtcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJfc3RlcCR2YWx1ZSIsInZhbHVlIiwia2V5Iiwic2VhcmNoQ29uc3VsdGFudHMiLCJwYWdlVGl0bGUiLCJ1cmxSZXR1cm4iLCJpbmNsdWRlcyIsImV4dHJhTWVzc2FnZSIsIl90aGlzMiIsInNlYXJjaFR5cGVzIiwiemlwIiwic2VhcmNoQnlaaXAiLCJwYXJhbXMiLCJzZWFyY2hCeVBhcmFtcyIsImxvYWRpbmciLCJ0aGVuIiwiY29uc3VsdGFudHMiLCJsZW5ndGgiLCJoYW5kbGVSZXN1bHRzIiwiaGFuZGxlTm9SZXN1bHRzIiwiZXJyb3IiLCJoYW5kbGVFcnJvciIsImNvbnN1bHRhbnRzSHRtbCIsIm1hcCIsIl9yZWYiLCJmaXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwibGFzdE5hbWUiLCJsYXN0X25hbWUiLCJpbWFnZVVybCIsInJlcF9pbWciLCJjaXR5Iiwic3RhdGUiLCJ3ZWJzaXRlTmFtZSIsIndlYnNpdGUiLCJqb2luIiwiZXh0cmFUZXh0IiwicmVzdWx0c0hUTUwiLCJodG1sIiwiYmluZENvbnN1bHRhbnRTZWxlY3Rpb24iLCJjb25zb2xlIiwiemlwQ29kZSIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfc3RlcDIkdmFsdWUiLCJhd3NfY2xvdWRmcm9udF91cmwiLCJ0aGVtZVNldHRpbmciLCJhd3MiLCJhd3NfdXJsIiwiYXdzX3NlYXJjaCIsIlVSTCIsInF1ZXJ5UGFyYW1zIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9zdGVwMyR2YWx1ZSIsImFwcGVuZCIsInRvU3RyaW5nIiwiY29uc3VsdGFuc0ZvdW5kIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhIiwicmV0dXJuVXJsIiwicmVnZXgiLCJ1cmwiLCJwcm90b2NvbCIsImhvc3QiLCJ0ZXN0IiwicmVwbGFjZSIsImZsYWciLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==