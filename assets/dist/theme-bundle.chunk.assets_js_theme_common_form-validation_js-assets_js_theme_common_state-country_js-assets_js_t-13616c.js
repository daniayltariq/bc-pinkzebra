"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_common_form-validation_js-assets_js_theme_common_state-country_js-assets_js_t-13616c"],{

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation, requiredMessage) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
  // Required Empty Date field
  if (validation.required && (!validation.min_date || !validation.max_date)) {
    var _formElementId = $formField.attr('id');
    return {
      selector: "#" + _formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + _formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = $formField.find('select[data-label="day"]').val();
        var month = $formField.find('select[data-label="month"]').val();
        var year = val;
        cb(day && month && year);
      },
      errorMessage: requiredMessage
    };
  }
}

/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 * @param errorText provides error validation message
 */
function buildRequiredCheckboxValidation(validation, $formField, errorText) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: errorText
  };
}
function buildRequiredValidation(validation, selector, errorText) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: errorText
  };
}
function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}
function buildValidation($validateableElement, errorMessage) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');
  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation, errorMessage);
    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation(validation, $validateableElement, errorMessage));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";
      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }
      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector, errorMessage));
      }
    });
  }
  return fieldValidations;
}

/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @param context provides access for error messages on required fields validation
 * @returns {Array}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($form, context) {
  var validationsToPerform = [];
  var _createTranslationDic = (0,_utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__.createTranslationDictionary)(context),
    requiredFieldValidationText = _createTranslationDic.field_not_blank;
  $form.find('[data-validation]').each(function (index, input) {
    var getLabel = function getLabel($el) {
      return $el.first().data('validation').label;
    };
    var requiredValidationMessage = getLabel($(input)) + requiredFieldValidationText;
    validationsToPerform = validationsToPerform.concat(buildValidation($(input), requiredValidationMessage));
  });
  return validationsToPerform;
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

/***/ }),

/***/ "./assets/js/theme/custom/remove-undesirable-countries.js":
/*!****************************************************************!*\
  !*** ./assets/js/theme/custom/remove-undesirable-countries.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeUndesirableCountries: () => (/* binding */ removeUndesirableCountries)
/* harmony export */ });
var allowedCountries = ['united states', 'us', 'canada', 'ca'];
var removeUndesirableCountries = function removeUndesirableCountries(selector) {
  if (!selector) return null;
  var selectElement = document.querySelector(selector);
  if (!selectElement) return null;
  for (var i = selectElement.options.length - 1; i > 0; i--) {
    var option = selectElement.options[i];
    var optionValue = option.value;
    if (optionValue && !allowedCountries.includes(optionValue.toLowerCase())) {
      selectElement.remove(i);
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fZm9ybS12YWxpZGF0aW9uX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fc3RhdGUtY291bnRyeV9qcy1hc3NldHNfanNfdC0xMzYxNmMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlFOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxtQkFBbUJBLENBQUNDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxlQUFlLEVBQUU7RUFDbEU7RUFDQSxJQUFJRCxVQUFVLENBQUNFLFFBQVEsSUFBSUYsVUFBVSxDQUFDRyxRQUFRLEVBQUU7SUFDNUMsSUFBTUMsY0FBYywyQ0FBeUNKLFVBQVUsQ0FBQ0UsUUFBUSxhQUFRRixVQUFVLENBQUNHLFFBQVEsTUFBRztJQUM5RyxJQUFNRSxhQUFhLEdBQUdOLFVBQVUsQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQztJQUMzQyxJQUFNQyxRQUFRLEdBQUdQLFVBQVUsQ0FBQ0UsUUFBUSxDQUFDTSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9DLElBQU1DLFFBQVEsR0FBR1QsVUFBVSxDQUFDRyxRQUFRLENBQUNLLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0MsSUFBTUUsT0FBTyxHQUFHLElBQUlDLElBQUksQ0FBQ0osUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsSUFBTUssT0FBTyxHQUFHLElBQUlELElBQUksQ0FBQ0YsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkUsT0FBTztNQUNISSxRQUFRLFFBQU1SLGFBQWEsaUNBQTRCO01BQ3ZEUyxXQUFXLFFBQU1ULGFBQWEsdUNBQWtD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QyxDQUFDO0lBQzNCLE9BQU9nQixHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMzQkQsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUM7QUFFekQsSUFBTUMsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUEwQkEsQ0FBSWxJLFFBQVEsRUFBSztFQUNwRCxJQUFJLENBQUNBLFFBQVEsRUFBRSxPQUFPLElBQUk7RUFFMUIsSUFBTW1JLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUNySSxRQUFRLENBQUM7RUFFdEQsSUFBSSxDQUFDbUksYUFBYSxFQUFFLE9BQU8sSUFBSTtFQUUvQixLQUFLLElBQUluQixDQUFDLEdBQUdtQixhQUFhLENBQUNoRCxPQUFPLENBQUMxRCxNQUFNLEdBQUcsQ0FBQyxFQUFFdUYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7SUFDdkQsSUFBTXNCLE1BQU0sR0FBR0gsYUFBYSxDQUFDaEQsT0FBTyxDQUFDNkIsQ0FBQyxDQUFDO0lBQ3ZDLElBQU11QixXQUFXLEdBQUdELE1BQU0sQ0FBQ2xFLEtBQUs7SUFFaEMsSUFBSW1FLFdBQVcsSUFBSSxDQUFDTixnQkFBZ0IsQ0FBQ08sUUFBUSxDQUFDRCxXQUFXLENBQUNFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUN0RU4sYUFBYSxDQUFDekQsTUFBTSxDQUFDc0MsQ0FBQyxDQUFDO0lBQzNCO0VBQ0o7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vc3RhdGUtY291bnRyeS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9yZW1vdmUtdW5kZXNpcmFibGUtY291bnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBkYXRlIGZvciB0aGUgZGF5L21vbnRoL3llYXIgc2VsZWN0IGlucHV0cyBpcyB3aXRoaW4gcG90ZW50aWFsIHJhbmdlXHJcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXHJcbiAqIEBwYXJhbSB2YWxpZGF0aW9uXHJcbiAqIEByZXR1cm5zIHt7c2VsZWN0b3I6IHN0cmluZywgdHJpZ2dlcmVkQnk6IHN0cmluZywgdmFsaWRhdGU6IEZ1bmN0aW9uLCBlcnJvck1lc3NhZ2U6IHN0cmluZ319XHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZERhdGVWYWxpZGF0aW9uKCRmb3JtRmllbGQsIHZhbGlkYXRpb24sIHJlcXVpcmVkTWVzc2FnZSkge1xyXG4gICAgLy8gTm8gZGF0ZSByYW5nZSByZXN0cmljdGlvbiwgc2tpcFxyXG4gICAgaWYgKHZhbGlkYXRpb24ubWluX2RhdGUgJiYgdmFsaWRhdGlvbi5tYXhfZGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFlvdXIgY2hvc2VuIGRhdGUgbXVzdCBmYWxsIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbl9kYXRlfSBhbmQgJHt2YWxpZGF0aW9uLm1heF9kYXRlfS5gO1xyXG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50SWQgPSAkZm9ybUZpZWxkLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgY29uc3QgbWluU3BsaXQgPSB2YWxpZGF0aW9uLm1pbl9kYXRlLnNwbGl0KCctJyk7XHJcbiAgICAgICAgY29uc3QgbWF4U3BsaXQgPSB2YWxpZGF0aW9uLm1heF9kYXRlLnNwbGl0KCctJyk7XHJcbiAgICAgICAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKG1pblNwbGl0WzBdLCBtaW5TcGxpdFsxXSAtIDEsIG1pblNwbGl0WzJdKTtcclxuICAgICAgICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUobWF4U3BsaXRbMF0sIG1heFNwbGl0WzFdIC0gMSwgbWF4U3BsaXRbMl0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogYCMke2Zvcm1FbGVtZW50SWR9IHNlbGVjdFtkYXRhLWxhYmVsPVwieWVhclwiXWAsXHJcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcclxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSBOdW1iZXIoJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cImRheVwiXScpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpKSAtIDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gTnVtYmVyKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaG9zZW5EYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2IoY2hvc2VuRGF0ZSA+PSBtaW5EYXRlICYmIGNob3NlbkRhdGUgPD0gbWF4RGF0ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIFJlcXVpcmVkIEVtcHR5IERhdGUgZmllbGRcclxuICAgIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkICYmICghdmFsaWRhdGlvbi5taW5fZGF0ZSB8fCAhdmFsaWRhdGlvbi5tYXhfZGF0ZSkpIHtcclxuICAgICAgICBjb25zdCBmb3JtRWxlbWVudElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogYCMke2Zvcm1FbGVtZW50SWR9IHNlbGVjdFtkYXRhLWxhYmVsPVwieWVhclwiXWAsXHJcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcclxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSAkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwiZGF5XCJdJykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9ICRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IHZhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBjYihkYXkgJiYgbW9udGggJiYgeWVhcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZWRNZXNzYWdlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXZSB2YWxpZGF0ZSBjaGVja2JveGVzIHNlcGFyYXRlbHkgZnJvbSBzaW5nbGUgaW5wdXQgZmllbGRzLCBhcyB0aGV5IG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgY2hlY2tlZCBvcHRpb25cclxuICogZnJvbSBtYW55IGRpZmZlcmVudCBpbnB1dHNcclxuICogQHBhcmFtICRmb3JtRmllbGRcclxuICogQHBhcmFtIHZhbGlkYXRpb25cclxuICogQHBhcmFtIGVycm9yVGV4dCBwcm92aWRlcyBlcnJvciB2YWxpZGF0aW9uIG1lc3NhZ2VcclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24odmFsaWRhdGlvbiwgJGZvcm1GaWVsZCwgZXJyb3JUZXh0KSB7XHJcbiAgICBjb25zdCBmb3JtRmllbGRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcclxuICAgIGNvbnN0IHByaW1hcnlTZWxlY3RvciA9IGAjJHtmb3JtRmllbGRJZH0gaW5wdXQ6Zmlyc3Qtb2YtdHlwZWA7XHJcbiAgICBjb25zdCBzZWNvbmRhcnlTZWxlY3RvciA9IGAjJHtmb3JtRmllbGRJZH0gaW5wdXRgO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VsZWN0b3I6IHByaW1hcnlTZWxlY3RvcixcclxuICAgICAgICB0cmlnZ2VyZWRCeTogc2Vjb25kYXJ5U2VsZWN0b3IsXHJcbiAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAkKHNlY29uZGFyeVNlbGVjdG9yKS5lYWNoKChpbmRleCwgY2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yVGV4dCxcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uKHZhbGlkYXRpb24sIHNlbGVjdG9yLCBlcnJvclRleHQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VsZWN0b3IsXHJcbiAgICAgICAgdmFsaWRhdGUoY2IsIHZhbCkge1xyXG4gICAgICAgICAgICBjYih2YWwubGVuZ3RoID4gMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yVGV4dCxcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCBpbnZhbGlkTWVzc2FnZSA9IGBUaGUgdmFsdWUgZm9yICR7dmFsaWRhdGlvbi5sYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7dmFsaWRhdGlvbi5taW59IGFuZCAke3ZhbGlkYXRpb24ubWF4fS5gO1xyXG4gICAgY29uc3QgbWluID0gTnVtYmVyKHZhbGlkYXRpb24ubWluKTtcclxuICAgIGNvbnN0IG1heCA9IE51bWJlcih2YWxpZGF0aW9uLm1heCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUZpZWxkU2VsZWN0b3J9IGlucHV0W25hbWU9XCIke3ZhbGlkYXRpb24ubmFtZX1cIl1gLFxyXG4gICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBudW1iZXJWYWwgPSBOdW1iZXIodmFsKTtcclxuXHJcbiAgICAgICAgICAgIGNiKG51bWJlclZhbCA+PSBtaW4gJiYgbnVtYmVyVmFsIDw9IG1heCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkVmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gJHZhbGlkYXRlYWJsZUVsZW1lbnQuZGF0YSgndmFsaWRhdGlvbicpO1xyXG4gICAgY29uc3QgZmllbGRWYWxpZGF0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgZm9ybUZpZWxkU2VsZWN0b3IgPSBgIyR7JHZhbGlkYXRlYWJsZUVsZW1lbnQuYXR0cignaWQnKX1gO1xyXG5cclxuICAgIGlmICh2YWxpZGF0aW9uLnR5cGUgPT09ICdkYXRlY2hvb3NlcicpIHtcclxuICAgICAgICBjb25zdCBkYXRlVmFsaWRhdGlvbiA9IGJ1aWxkRGF0ZVZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24sIGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgIGlmIChkYXRlVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goZGF0ZVZhbGlkYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCAmJiAodmFsaWRhdGlvbi50eXBlID09PSAnY2hlY2tib3hzZWxlY3QnIHx8IHZhbGlkYXRpb24udHlwZSA9PT0gJ3JhZGlvc2VsZWN0JykpIHtcclxuICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbih2YWxpZGF0aW9uLCAkdmFsaWRhdGVhYmxlRWxlbWVudCwgZXJyb3JNZXNzYWdlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICR2YWxpZGF0ZWFibGVFbGVtZW50LmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGlucHV0RWxlbWVudCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXRFbGVtZW50LmdldCgwKS50YWdOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSAkaW5wdXRFbGVtZW50LmF0dHIoJ25hbWUnKTtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudFNlbGVjdG9yID0gYCR7Zm9ybUZpZWxkU2VsZWN0b3J9ICR7dGFnTmFtZX1bbmFtZT1cIiR7aW5wdXROYW1lfVwiXWA7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi50eXBlID09PSAnbnVtYmVyb25seScpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBmb3JtRmllbGRTZWxlY3RvcikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgZWxlbWVudFNlbGVjdG9yLCBlcnJvck1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaWVsZFZhbGlkYXRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICogQnVpbGRzIHRoZSB2YWxpZGF0aW9uIG1vZGVsIGZvciBkeW5hbWljIGZvcm1zXHJcbiAqIEBwYXJhbSAkZm9ybVxyXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgZm9yIGVycm9yIG1lc3NhZ2VzIG9uIHJlcXVpcmVkIGZpZWxkcyB2YWxpZGF0aW9uXHJcbiAqIEByZXR1cm5zIHtBcnJheX1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgkZm9ybSwgY29udGV4dCkge1xyXG4gICAgbGV0IHZhbGlkYXRpb25zVG9QZXJmb3JtID0gW107XHJcbiAgICBjb25zdCB7IGZpZWxkX25vdF9ibGFuazogcmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0IH0gPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XHJcblxyXG4gICAgJGZvcm0uZmluZCgnW2RhdGEtdmFsaWRhdGlvbl0nKS5lYWNoKChpbmRleCwgaW5wdXQpID0+IHtcclxuICAgICAgICBjb25zdCBnZXRMYWJlbCA9ICRlbCA9PiAkZWwuZmlyc3QoKS5kYXRhKCd2YWxpZGF0aW9uJykubGFiZWw7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSA9IGdldExhYmVsKCQoaW5wdXQpKSArIHJlcXVpcmVkRmllbGRWYWxpZGF0aW9uVGV4dDtcclxuXHJcbiAgICAgICAgdmFsaWRhdGlvbnNUb1BlcmZvcm0gPSB2YWxpZGF0aW9uc1RvUGVyZm9ybS5jb25jYXQoYnVpbGRWYWxpZGF0aW9uKCQoaW5wdXQpLCByZXF1aXJlZFZhbGlkYXRpb25NZXNzYWdlKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdmFsaWRhdGlvbnNUb1BlcmZvcm07XHJcbn1cclxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcclxuXHJcbi8qKlxyXG4gKiBJZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyBmcm9tIGJjYXBwLCBhIHRleHQgZmllbGQgd2lsbCBiZSBzZW50LiBUaGlzIHdpbGwgY3JlYXRlIGEgc2VsZWN0IGVsZW1lbnQgdG8gaG9sZCBvcHRpb25zIGFmdGVyIHRoZSByZW1vdGUgcmVxdWVzdC5cclxuICogQHJldHVybnMge2pRdWVyeXxIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VTdGF0ZVJlcXVpcmVkKHN0YXRlRWxlbWVudCwgY29udGV4dCkge1xyXG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xyXG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xyXG4gICAgICAgIGlkOiBhdHRycy5pZCxcclxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXHJcbiAgICAgICAgY2xhc3M6ICdmb3JtLXNlbGVjdCcsXHJcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcclxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPHNlbGVjdD48L3NlbGVjdD4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcclxuXHJcbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG4gICAgY29uc3QgJGhpZGRlbklucHV0ID0gJCgnW25hbWUqPVwiRm9ybUZpZWxkSXNUZXh0XCJdJyk7XHJcblxyXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAkaGlkZGVuSW5wdXQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vIFN0cmluZyBpcyBpbmplY3RlZCBmcm9tIGxvY2FsaXplclxyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxyXG4gKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIHN3aXRjaCB0byBhbiBpbnB1dCBmaWVsZCBhbmQgaGlkZSB0aGUgcmVxdWlyZWQgZmllbGRcclxuICovXHJcbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xyXG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xyXG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxyXG4gICAgICAgICdkYXRhLWxhYmVsJzogYXR0cnNbJ2RhdGEtbGFiZWwnXSxcclxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxyXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXHJcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxpbnB1dCAvPicsIHJlcGxhY2VtZW50QXR0cmlidXRlcykpO1xyXG5cclxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcblxyXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJG5ld0VsZW1lbnQpO1xyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZXNBcnJheVxyXG4gKiBAcGFyYW0ge2pRdWVyeX0gJHNlbGVjdEVsZW1lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICovXHJcbmZ1bmN0aW9uIGFkZE9wdGlvbnMoc3RhdGVzQXJyYXksICRzZWxlY3RFbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcclxuXHJcbiAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIlwiPiR7c3RhdGVzQXJyYXkucHJlZml4fTwvb3B0aW9uPmApO1xyXG5cclxuICAgIGlmICghXy5pc0VtcHR5KCRzZWxlY3RFbGVtZW50KSkge1xyXG4gICAgICAgIHN0YXRlc0FycmF5LnN0YXRlcy5mb3JFYWNoKChzdGF0ZU9iaikgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLmlkfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubGFiZWwgPyBzdGF0ZU9iai5sYWJlbCA6IHN0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZUVsZW1lbnQsIGNvbnRleHQgPSB7fSwgb3B0aW9ucywgY2FsbGJhY2spIHtcclxuICAgIC8qKlxyXG4gICAgICogQmFja3dhcmRzIGNvbXBhdGlibGUgZm9yIHRocmVlIHBhcmFtZXRlcnMgaW5zdGVhZCBvZiBmb3VyXHJcbiAgICAgKlxyXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XHJcbiAgICAgKlxyXG4gICAgICogdXNlSWRGb3JTdGF0ZXMge0Jvb2x9IC0gR2VuZXJhdGVzIHN0YXRlcyBkcm9wZG93biB1c2luZyBpZCBmb3IgdmFsdWVzIGluc3RlYWQgb2Ygc3RyaW5nc1xyXG4gICAgICovXHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcclxuICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4gICAgfVxyXG5cclxuICAgICQoJ3NlbGVjdFtkYXRhLWZpZWxkLXR5cGU9XCJDb3VudHJ5XCJdJykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChjb250ZXh0LnN0YXRlX2Vycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RFbGVtZW50ID0gbWFrZVN0YXRlUmVxdWlyZWQoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAkc2VsZWN0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xyXG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XHJcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XHJcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcclxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XHJcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xyXG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XHJcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcclxuXHJcbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcclxuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxufTtcclxuIiwiY29uc3QgYWxsb3dlZENvdW50cmllcyA9IFsndW5pdGVkIHN0YXRlcycsICd1cycsICdjYW5hZGEnLCAnY2EnXTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVVbmRlc2lyYWJsZUNvdW50cmllcyA9IChzZWxlY3RvcikgPT4ge1xyXG4gICAgaWYgKCFzZWxlY3RvcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5cclxuICAgIGlmICghc2VsZWN0RWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IHNlbGVjdEVsZW1lbnQub3B0aW9ucy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0RWxlbWVudC5vcHRpb25zW2ldO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLnZhbHVlO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9uVmFsdWUgJiYgIWFsbG93ZWRDb3VudHJpZXMuaW5jbHVkZXMob3B0aW9uVmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5yZW1vdmUoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiYnVpbGREYXRlVmFsaWRhdGlvbiIsIiRmb3JtRmllbGQiLCJ2YWxpZGF0aW9uIiwicmVxdWlyZWRNZXNzYWdlIiwibWluX2RhdGUiLCJtYXhfZGF0ZSIsImludmFsaWRNZXNzYWdlIiwiZm9ybUVsZW1lbnRJZCIsImF0dHIiLCJtaW5TcGxpdCIsInNwbGl0IiwibWF4U3BsaXQiLCJtaW5EYXRlIiwiRGF0ZSIsIm1heERhdGUiLCJzZWxlY3RvciIsInRyaWdnZXJlZEJ5IiwidmFsaWRhdGUiLCJjYiIsInZhbCIsImRheSIsIk51bWJlciIsImZpbmQiLCJtb250aCIsInllYXIiLCJjaG9zZW5EYXRlIiwiZXJyb3JNZXNzYWdlIiwicmVxdWlyZWQiLCJidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uIiwiZXJyb3JUZXh0IiwiZm9ybUZpZWxkSWQiLCJwcmltYXJ5U2VsZWN0b3IiLCJzZWNvbmRhcnlTZWxlY3RvciIsInJlc3VsdCIsIiQiLCJlYWNoIiwiaW5kZXgiLCJjaGVja2JveCIsImNoZWNrZWQiLCJidWlsZFJlcXVpcmVkVmFsaWRhdGlvbiIsImxlbmd0aCIsImJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uIiwiZm9ybUZpZWxkU2VsZWN0b3IiLCJsYWJlbCIsIm1pbiIsIm1heCIsIm5hbWUiLCJudW1iZXJWYWwiLCJidWlsZFZhbGlkYXRpb24iLCIkdmFsaWRhdGVhYmxlRWxlbWVudCIsImRhdGEiLCJmaWVsZFZhbGlkYXRpb25zIiwidHlwZSIsImRhdGVWYWxpZGF0aW9uIiwicHVzaCIsImVsZW1lbnQiLCIkaW5wdXRFbGVtZW50IiwidGFnTmFtZSIsImdldCIsImlucHV0TmFtZSIsImVsZW1lbnRTZWxlY3RvciIsIiRmb3JtIiwiY29udGV4dCIsInZhbGlkYXRpb25zVG9QZXJmb3JtIiwiX2NyZWF0ZVRyYW5zbGF0aW9uRGljIiwicmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0IiwiZmllbGRfbm90X2JsYW5rIiwiaW5wdXQiLCJnZXRMYWJlbCIsIiRlbCIsImZpcnN0IiwicmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSIsImNvbmNhdCIsInV0aWxzIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsInNob3dBbGVydE1vZGFsIiwibWFrZVN0YXRlUmVxdWlyZWQiLCJzdGF0ZUVsZW1lbnQiLCJhdHRycyIsIl90cmFuc2Zvcm0iLCJwcm9wIiwiaXRlbSIsInJldCIsInZhbHVlIiwicmVwbGFjZW1lbnRBdHRyaWJ1dGVzIiwiaWQiLCJyZXBsYWNlV2l0aCIsIiRuZXdFbGVtZW50IiwiJGhpZGRlbklucHV0IiwicmVtb3ZlIiwicHJldiIsImFwcGVuZCIsInNob3ciLCJtYWtlU3RhdGVPcHRpb25hbCIsImhpZGUiLCJhZGRPcHRpb25zIiwic3RhdGVzQXJyYXkiLCIkc2VsZWN0RWxlbWVudCIsIm9wdGlvbnMiLCJjb250YWluZXIiLCJwcmVmaXgiLCJfaXNFbXB0eSIsInN0YXRlcyIsImZvckVhY2giLCJzdGF0ZU9iaiIsInVzZUlkRm9yU3RhdGVzIiwiaHRtbCIsImpvaW4iLCJjYWxsYmFjayIsIm9uIiwiZXZlbnQiLCJjb3VudHJ5TmFtZSIsImN1cnJlbnRUYXJnZXQiLCJhcGkiLCJjb3VudHJ5IiwiZ2V0QnlOYW1lIiwiZXJyIiwicmVzcG9uc2UiLCJzdGF0ZV9lcnJvciIsIiRjdXJyZW50SW5wdXQiLCJuZXdFbGVtZW50IiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJhcmd1bWVudHMiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInBvcCIsInJlZHVjZSIsImFjYyIsImFsbG93ZWRDb3VudHJpZXMiLCJyZW1vdmVVbmRlc2lyYWJsZUNvdW50cmllcyIsInNlbGVjdEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcHRpb24iLCJvcHRpb25WYWx1ZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9