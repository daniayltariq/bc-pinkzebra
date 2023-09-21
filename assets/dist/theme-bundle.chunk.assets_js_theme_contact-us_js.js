"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_contact-us_js"],{

/***/ "./assets/js/theme/contact-us.js":
/*!***************************************!*\
  !*** ./assets/js/theme/contact-us.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactUs)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _consultant_find_a_consultant_find_a_consultant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consultant/find-a-consultant/find-a-consultant */ "./assets/js/theme/consultant/find-a-consultant/find-a-consultant.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ContactUs = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(ContactUs, _PageManager);
  function ContactUs() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = ContactUs.prototype;
  _proto.onReady = function onReady() {
    this.registerContactFormValidation();
    this.bindSearchConsulant();
  };
  _proto.registerContactFormValidation = function registerContactFormValidation() {
    var formSelector = 'form[data-contact-form]';
    var contactUsValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: formSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    var $contactForm = $(formSelector);
    contactUsValidator.add([{
      selector: formSelector + " input[name=\"contact_email\"]",
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.contactEmail
    }, {
      selector: formSelector + " textarea[name=\"contact_question\"]",
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].notEmpty(val);
        cb(result);
      },
      errorMessage: this.context.contactQuestion
    }]);
    $contactForm.on('submit', function (event) {
      contactUsValidator.performCheck();
      if (contactUsValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.bindSearchConsulant = function bindSearchConsulant() {
    $('form[data-contact-consultant-form]').submit(function (ev) {
      ev.preventDefault();
      var formData = new FormData(ev.target);
      var filteredFormData = new FormData();
      var isEmpty = true;
      for (var _iterator = _createForOfIteratorHelperLoose(formData.entries()), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
        if (value && value.trim().length > 0) {
          filteredFormData.append(key, value);
          isEmpty = false;
        }
      }
      if (isEmpty) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__.showAlertModal)('Please fill in any input to start to search!');
      } else {
        var url = (0,_consultant_find_a_consultant_find_a_consultant__WEBPACK_IMPORTED_MODULE_4__.getConsultantResultURL)(filteredFormData);
        window.location.replace(url);
      }
    });
  };
  return ContactUs;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb250YWN0LXVzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVjtBQUNXO0FBQzRCO0FBQ29CO0FBQzFDO0FBQUEsSUFFM0JNLFNBQVMsMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixTQUFBLEVBQUFDLFlBQUE7RUFBQSxTQUFBRCxVQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBRSxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBLElBQUFDLE1BQUEsR0FBQUwsU0FBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDMUJFLE9BQU8sR0FBUCxTQUFBQSxRQUFBLEVBQVU7SUFDTixJQUFJLENBQUNDLDZCQUE2QixDQUFDLENBQUM7SUFDcEMsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDO0VBQzlCLENBQUM7RUFBQUosTUFBQSxDQUVERyw2QkFBNkIsR0FBN0IsU0FBQUEsOEJBQUEsRUFBZ0M7SUFDNUIsSUFBTUUsWUFBWSxHQUFHLHlCQUF5QjtJQUM5QyxJQUFNQyxrQkFBa0IsR0FBR2hCLHVEQUFHLENBQUM7TUFDM0JpQixNQUFNLEVBQUtGLFlBQVksNEJBQXVCO01BQzlDRyxHQUFHLEVBQUVoQiwrRUFBeUJBO0lBQ2xDLENBQUMsQ0FBQztJQUNGLElBQU1pQixZQUFZLEdBQUdDLENBQUMsQ0FBQ0wsWUFBWSxDQUFDO0lBRXBDQyxrQkFBa0IsQ0FBQ0ssR0FBRyxDQUFDLENBQ25CO01BQ0lDLFFBQVEsRUFBS1AsWUFBWSxtQ0FBOEI7TUFDdkRRLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxFQUFFLEVBQUVDLEdBQUcsRUFBSztRQUNuQixJQUFNQyxNQUFNLEdBQUd6Qiw0REFBSyxDQUFDMEIsS0FBSyxDQUFDRixHQUFHLENBQUM7UUFFL0JELEVBQUUsQ0FBQ0UsTUFBTSxDQUFDO01BQ2QsQ0FBQztNQUNERSxZQUFZLEVBQUUsSUFBSSxDQUFDQyxPQUFPLENBQUNDO0lBQy9CLENBQUMsRUFDRDtNQUNJUixRQUFRLEVBQUtQLFlBQVkseUNBQW9DO01BQzdEUSxRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsRUFBRSxFQUFFQyxHQUFHLEVBQUs7UUFDbkIsSUFBTUMsTUFBTSxHQUFHekIsNERBQUssQ0FBQzhCLFFBQVEsQ0FBQ04sR0FBRyxDQUFDO1FBRWxDRCxFQUFFLENBQUNFLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDREUsWUFBWSxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDRztJQUMvQixDQUFDLENBQ0osQ0FBQztJQUVGYixZQUFZLENBQUNjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQy9CbEIsa0JBQWtCLENBQUNtQixZQUFZLENBQUMsQ0FBQztNQUVqQyxJQUFJbkIsa0JBQWtCLENBQUNvQixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDcEM7TUFDSjtNQUVBRixLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTNCLE1BQUEsQ0FFREksbUJBQW1CLEdBQW5CLFNBQUFBLG9CQUFBLEVBQXNCO0lBQ2xCTSxDQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQ0gsTUFBTSxDQUFDLFVBQUNxQixFQUFFLEVBQUs7TUFDbkRBLEVBQUUsQ0FBQ0QsY0FBYyxDQUFDLENBQUM7TUFDbkIsSUFBTUUsUUFBUSxHQUFHLElBQUlDLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDRyxNQUFNLENBQUM7TUFFeEMsSUFBTUMsZ0JBQWdCLEdBQUcsSUFBSUYsUUFBUSxDQUFDLENBQUM7TUFDdkMsSUFBSUcsT0FBTyxHQUFHLElBQUk7TUFDbEIsU0FBQUMsU0FBQSxHQUFBQywrQkFBQSxDQUEyQk4sUUFBUSxDQUFDTyxPQUFPLENBQUMsQ0FBQyxHQUFBQyxLQUFBLElBQUFBLEtBQUEsR0FBQUgsU0FBQSxJQUFBSSxJQUFBLEdBQUU7UUFBQSxJQUFBQyxXQUFBLEdBQUFGLEtBQUEsQ0FBQUcsS0FBQTtVQUFuQ0MsR0FBRyxHQUFBRixXQUFBO1VBQUVDLEtBQUssR0FBQUQsV0FBQTtRQUNsQixJQUFJQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNsQ1gsZ0JBQWdCLENBQUNZLE1BQU0sQ0FBQ0gsR0FBRyxFQUFFRCxLQUFLLENBQUM7VUFDbkNQLE9BQU8sR0FBRyxLQUFLO1FBQ25CO01BQ0o7TUFFQSxJQUFJQSxPQUFPLEVBQUU7UUFDVHZDLDZEQUFjLENBQUMsOENBQThDLENBQUM7TUFDbEUsQ0FBQyxNQUFNO1FBQ0gsSUFBTW1ELEdBQUcsR0FBR3BELHVHQUFzQixDQUFDdUMsZ0JBQWdCLENBQUM7UUFDcERjLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNILEdBQUcsQ0FBQztNQUNoQztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBbEQsU0FBQTtBQUFBLEVBbkVrQ04scURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb250YWN0LXVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcclxuaW1wb3J0IGZvcm1zIGZyb20gJy4vY29tbW9uL21vZGVscy9mb3Jtcyc7XHJcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcclxuaW1wb3J0IHsgZ2V0Q29uc3VsdGFudFJlc3VsdFVSTCB9IGZyb20gJy4vY29uc3VsdGFudC9maW5kLWEtY29uc3VsdGFudC9maW5kLWEtY29uc3VsdGFudCc7XHJcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdFVzIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29udGFjdEZvcm1WYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kU2VhcmNoQ29uc3VsYW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJDb250YWN0Rm9ybVZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybVNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1jb250YWN0LWZvcm1dJztcclxuICAgICAgICBjb25zdCBjb250YWN0VXNWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6IGAke2Zvcm1TZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCAkY29udGFjdEZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIGNvbnRhY3RVc1ZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybVNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY29udGFjdF9lbWFpbFwiXWAsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmNvbnRhY3RFbWFpbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1TZWxlY3Rvcn0gdGV4dGFyZWFbbmFtZT1cImNvbnRhY3RfcXVlc3Rpb25cIl1gLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMubm90RW1wdHkodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jb250YWN0UXVlc3Rpb24sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICRjb250YWN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb250YWN0VXNWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGFjdFVzVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRTZWFyY2hDb25zdWxhbnQoKSB7XHJcbiAgICAgICAgJCgnZm9ybVtkYXRhLWNvbnRhY3QtY29uc3VsdGFudC1mb3JtXScpLnN1Ym1pdCgoZXYpID0+IHtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXYudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgbGV0IGlzRW1wdHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdQbGVhc2UgZmlsbCBpbiBhbnkgaW5wdXQgdG8gc3RhcnQgdG8gc2VhcmNoIScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZ2V0Q29uc3VsdGFudFJlc3VsdFVSTChmaWx0ZXJlZEZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJub2QiLCJmb3JtcyIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJnZXRDb25zdWx0YW50UmVzdWx0VVJMIiwic2hvd0FsZXJ0TW9kYWwiLCJDb250YWN0VXMiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsInJlZ2lzdGVyQ29udGFjdEZvcm1WYWxpZGF0aW9uIiwiYmluZFNlYXJjaENvbnN1bGFudCIsImZvcm1TZWxlY3RvciIsImNvbnRhY3RVc1ZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsIiRjb250YWN0Rm9ybSIsIiQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsImNvbnRleHQiLCJjb250YWN0RW1haWwiLCJub3RFbXB0eSIsImNvbnRhY3RRdWVzdGlvbiIsIm9uIiwiZXZlbnQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcmV2ZW50RGVmYXVsdCIsImV2IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRhcmdldCIsImZpbHRlcmVkRm9ybURhdGEiLCJpc0VtcHR5IiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsImVudHJpZXMiLCJfc3RlcCIsImRvbmUiLCJfc3RlcCR2YWx1ZSIsInZhbHVlIiwia2V5IiwidHJpbSIsImxlbmd0aCIsImFwcGVuZCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9