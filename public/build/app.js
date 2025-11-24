"use strict";
(self["webpackChunktalenteko"] = self["webpackChunktalenteko"] || []).push([["app"],{

/***/ "./assets/app.css":
/*!************************!*\
  !*** ./assets/app.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ "./assets/app.css");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
// ===========================================
// Point d'entrée JS — TalentÉkô
// -------------------------------------------
// - Charge Stimulus & Turbo (config Symfony Encore)
// - Importe TailwindCSS via app.css
// ===========================================

 // Tailwind CSS
 // Stimulus/Turbo + config
/* global process */
if (true) {
  console.log('TalentÉkô — assets/app.js chargé avec succès');
}

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _controllers_header_nav_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/header_nav_controller.js */ "./assets/controllers/header_nav_controller.js");
/* harmony import */ var _controllers_custom_select_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/custom_select_controller.js */ "./assets/controllers/custom_select_controller.js");
/* harmony import */ var _controllers_dark_mode_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/dark_mode_controller.js */ "./assets/controllers/dark_mode_controller.js");
/* harmony import */ var _controllers_favorite_toggle_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/favorite_toggle_controller.js */ "./assets/controllers/favorite_toggle_controller.js");
/* harmony import */ var _controllers_filter_panel_controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/filter_panel_controller.js */ "./assets/controllers/filter_panel_controller.js");
/* harmony import */ var _controllers_flash_controller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/flash_controller.js */ "./assets/controllers/flash_controller.js");
/* harmony import */ var _controllers_font_size_controller_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/font_size_controller.js */ "./assets/controllers/font_size_controller.js");
/* harmony import */ var _controllers_form_autosave_controller_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/form_autosave_controller.js */ "./assets/controllers/form_autosave_controller.js");
/* harmony import */ var _controllers_location_autocomplete_controller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controllers/location_autocomplete_controller.js */ "./assets/controllers/location_autocomplete_controller.js");
/* harmony import */ var _controllers_rating_filter_controller_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controllers/rating_filter_controller.js */ "./assets/controllers/rating_filter_controller.js");
/* harmony import */ var _controllers_password_confirm_controller_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controllers/password_confirm_controller.js */ "./assets/controllers/password_confirm_controller.js");
/* harmony import */ var _controllers_password_strength_controller_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controllers/password_strength_controller.js */ "./assets/controllers/password_strength_controller.js");
/* harmony import */ var _controllers_scroll_nav_controller_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controllers/scroll_nav_controller.js */ "./assets/controllers/scroll_nav_controller.js");
/* harmony import */ var _controllers_image_preview_controller_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controllers/image_preview_controller.js */ "./assets/controllers/image_preview_controller.js");
// ======================================================
// Bootstrap JS — Stimulus (TalentÉkô 2025)
// ------------------------------------------------------
// Configuration manuelle de Stimulus pour Webpack Encore 5.x
// Mode ESM strict
// ======================================================



// --- Initialisation de Stimulus ---
window.application = _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Application.start();
console.log(' Stimulus initialisé (mode ESM strict, enregistrement manuel)');

// === Import manuel de tous les contrôleurs ===















// --- Enregistrement global Stimulus ---
window.application.register('header-nav', _controllers_header_nav_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.application.register('custom-select', _controllers_custom_select_controller_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
window.application.register('dark-mode', _controllers_dark_mode_controller_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.application.register('favorite-toggle', _controllers_favorite_toggle_controller_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
window.application.register('filter-panel', _controllers_filter_panel_controller_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
window.application.register('flash', _controllers_flash_controller_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
window.application.register('font-size', _controllers_font_size_controller_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
window.application.register('form-autosave', _controllers_form_autosave_controller_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
window.application.register('location-autocomplete', _controllers_location_autocomplete_controller_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
window.application.register('rating-filter', _controllers_rating_filter_controller_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
window.application.register('password-confirm', _controllers_password_confirm_controller_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
window.application.register('password-strength', _controllers_password_strength_controller_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
window.application.register('scroll-nav', _controllers_scroll_nav_controller_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
window.application.register('image-preview', _controllers_image_preview_controller_js__WEBPACK_IMPORTED_MODULE_14__["default"]);

// --- Log de vérification (utile en dev) ---
console.log('Contrôleurs Stimulus enregistrés :');
console.log(['header-nav', 'custom-select', 'dark-mode', 'favorite-toggle', 'filter-panel', 'flash', 'font-size', 'form-autosave', 'location-autocomplete', 'rating-filter', 'password-confirm', 'password-strength', 'scroll-nav', 'image-preview']);

/***/ }),

/***/ "./assets/controllers/custom_select_controller.js":
/*!********************************************************!*\
  !*** ./assets/controllers/custom_select_controller.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }






















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ======================================================
// Contrôleur Stimulus — Custom Select
// ------------------------------------------------------
// Objectif : remplacer un <select> natif par un composant
// accessible et compatible clavier + ARIA.
// Utilisé pour le filtre “Date de publication”.
// Fonctionnalités :
// - Ouverture/fermeture du menu via clic ou clavier
// - Sélection d’une option (clic ou Enter)
// - Mise à jour du label + input caché
// - Fermeture si clic à l’extérieur ou touche Échap
// - Soumission automatique du formulaire parent
// ======================================================


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.open = false;
      this._boundClickOutside = this.handleClickOutside.bind(this);
      document.addEventListener('click', this._boundClickOutside);
      console.log('custom_select connecté');
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      document.removeEventListener('click', this._boundClickOutside);
    }
    // Ouverture / fermeture du menu déroulant
  }, {
    key: "toggle",
    value: function toggle(event) {
      event.preventDefault();
      this.open = !this.open;
      this.updateVisibility();
    }
    // selectOption SANS auto-submit
  }, {
    key: "selectOption",
    value: function selectOption(event) {
      var selectedValue = event.currentTarget.dataset.value;
      var selectedLabel = event.currentTarget.textContent.trim();
      this.inputTarget.value = selectedValue;
      this.labelTarget.textContent = selectedLabel;
      this.close();
    }
    // Gestion du clavier sur le bouton principal
  }, {
    key: "handleKeydown",
    value: function handleKeydown(event) {
      if ([' ', 'Enter', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        this.open = true;
        this.updateVisibility();
        var firstOption = this.optionTargets[0];
        if (firstOption) firstOption.focus();
      } else if (event.key === 'Escape') {
        this.close();
      }
    }
    // Gestion du clavier dans la liste des options
  }, {
    key: "handleOptionKeydown",
    value: function handleOptionKeydown(event) {
      var currentIndex = this.optionTargets.indexOf(event.currentTarget);
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        var next = this.optionTargets[currentIndex + 1] || this.optionTargets[0];
        next.focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        var prev = this.optionTargets[currentIndex - 1] || this.optionTargets[this.optionTargets.length - 1];
        prev.focus();
      } else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.selectOption(event);
      } else if (event.key === 'Escape') {
        this.close();
        this.buttonTarget.focus();
      }
    }
    // Ferme le menu si clic à l’extérieur
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.open && !this.element.contains(event.target)) {
        this.close();
      }
    }
    // Maj la visibilité et les attributs ARIA
  }, {
    key: "updateVisibility",
    value: function updateVisibility() {
      this.listTarget.classList.toggle('hidden', !this.open);
      this.buttonTarget.setAttribute('aria-expanded', this.open);
    }
  }, {
    key: "close",
    value: function close() {
      this.open = false;
      this.updateVisibility();
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_22__.Controller);
_defineProperty(_default, "targets", ['button', 'list', 'label', 'input', 'option']);


/***/ }),

/***/ "./assets/controllers/dark_mode_controller.js":
/*!****************************************************!*\
  !*** ./assets/controllers/dark_mode_controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/**
 * Contrôleur Stimulus : Dark mode toggle
 *
 * - Ajout classe .dark sur <html>
 * - Sauvegarde la préférence dans localStorage
 * - Accessibilité : aria-pressed sur le bouton
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var saved = localStorage.getItem('tk_dark_mode');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var enabled = saved ? saved === 'true' : prefersDark;
      this.setMode(enabled);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var isDark = document.documentElement.classList.contains('dark');
      this.setMode(!isDark);
    }
  }, {
    key: "setMode",
    value: function setMode(enabled) {
      if (enabled) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('tk_dark_mode', 'true');
        this.element.setAttribute('aria-pressed', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('tk_dark_mode', 'false');
        this.element.setAttribute('aria-pressed', 'false');
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/controllers/favorite_toggle_controller.js":
/*!**********************************************************!*\
  !*** ./assets/controllers/favorite_toggle_controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }




















function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ======================================================
// Stimulus — Contrôleur Favoris TalentÉkô
// ------------------------------------------------------
// Fonction : toggle visuel + envoi requête backend
// Reçoit : data-favorite-toggle-listing-id-value=""
// ======================================================


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      // État initial basé sur le DOM (fallback)
      var isFav = !this.filledTarget.classList.contains('hidden');
      this.applyState(isFav);
    }
  }, {
    key: "toggle",
    value: function () {
      var _toggle = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
        var listingId, wasFavorite, response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              event.preventDefault();
              listingId = this.listingIdValue;
              if (listingId) {
                _context.n = 1;
                break;
              }
              console.error(' listingId manquant dans data-*');
              return _context.a(2);
            case 1:
              // --- Optimisme UX : toggle immédiat (local)
              wasFavorite = !this.filledTarget.classList.contains('hidden');
              this.applyState(!wasFavorite);
              _context.p = 2;
              _context.n = 3;
              return fetch("/favoris/toggle/".concat(listingId), {
                method: 'POST',
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                }
              });
            case 3:
              response = _context.v;
              if (response.ok) {
                _context.n = 4;
                break;
              }
              throw new Error("Erreur serveur ".concat(response.status));
            case 4:
              _context.n = 5;
              return response.json();
            case 5:
              data = _context.v;
              // --- Mise à jour réelle selon le backend
              this.applyState(data.isFavorite);
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.error(' Erreur favoris :', _t);

              // Rollback visuel si erreur
              this.applyState(wasFavorite);
              alert('Une erreur est survenue. Veuillez réessayer.');
            case 7:
              return _context.a(2);
          }
        }, _callee, this, [[2, 6]]);
      }));
      function toggle(_x) {
        return _toggle.apply(this, arguments);
      }
      return toggle;
    }()
  }, {
    key: "applyState",
    value: function applyState(isFavorite) {
      if (isFavorite) {
        this.emptyTarget.classList.add('hidden');
        this.filledTarget.classList.remove('hidden');
        this.element.setAttribute('aria-label', 'Retirer des favoris');
        this.element.setAttribute('aria-pressed', 'true');
      } else {
        this.emptyTarget.classList.remove('hidden');
        this.filledTarget.classList.add('hidden');
        this.element.setAttribute('aria-label', 'Ajouter aux favoris');
        this.element.setAttribute('aria-pressed', 'false');
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
_defineProperty(_default, "values", {
  listingId: Number
});
_defineProperty(_default, "targets", ['empty', 'filled']);


/***/ }),

/***/ "./assets/controllers/filter_panel_controller.js":
/*!*******************************************************!*\
  !*** ./assets/controllers/filter_panel_controller.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ============================================================
// Stimulus Controller — Filter Panel (TalentÉkô)
// ============================================================


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;
      console.log(' FilterPanelController connecté');

      // Raccourcis
      this.toggleButton = document.getElementById('filter-toggle');
      this.focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
      this.firstFocusable = null;
      this.lastFocusable = null;
      this.triggerButton = null;

      // Gestion clavier (fermeture + focus trap)
      this.handleKeydown = function (e) {
        if (e.key === 'Escape' && _this.isOpen()) _this.close();
        if (e.key === 'Tab' && _this.isOpen()) _this.trapFocus(e);
      };
    }

    // --- Bascule ouverture / fermeture ---
  }, {
    key: "toggle",
    value: function toggle(event) {
      console.log(' toggle() exécuté !');
      this.isOpen() ? this.close() : this.open(event);
    }

    // --- Ouverture du panneau ---
  }, {
    key: "open",
    value: function open(event) {
      this.triggerButton = (event === null || event === void 0 ? void 0 : event.currentTarget) || this.toggleButton;
      this.panelTarget.dataset.state = 'open';
      this.overlayTarget.dataset.state = 'open';

      // Transition visible
      this.panelTarget.classList.remove('translate-x-full', 'opacity-0');
      this.overlayTarget.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');

      // Feedback visuel du bouton
      if (this.toggleButton) {
        this.toggleButton.setAttribute('aria-expanded', 'true');
        this.toggleButton.classList.add('border-talenteko-orange-600', 'text-talenteko-orange-600', 'ring-1', 'ring-talenteko-orange-500');
      }

      // Focus sur premier champ
      var focusables = this.panelTarget.querySelectorAll(this.focusableSelectors);
      if (focusables.length > 0) {
        this.firstFocusable = focusables[0];
        this.lastFocusable = focusables[focusables.length - 1];
        this.firstFocusable.focus();
      }
      document.addEventListener('keydown', this.handleKeydown);
      console.log('Panneau ouvert (dataset.state = open)');
    }

    // --- Fermeture du panneau ---
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;
      this.panelTarget.dataset.state = 'closed';
      this.overlayTarget.dataset.state = 'closed';
      this.panelTarget.classList.add('translate-x-full', 'opacity-0');
      this.overlayTarget.classList.add('opacity-0');
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', this.handleKeydown);

      // Délai avant disparition de l’overlay
      setTimeout(function () {
        return _this2.overlayTarget.classList.add('hidden');
      }, 200);

      // Rétablir style du bouton
      if (this.toggleButton) {
        this.toggleButton.setAttribute('aria-expanded', 'false');
        this.toggleButton.classList.remove('border-talenteko-orange-600', 'text-talenteko-orange-600', 'ring-1', 'ring-talenteko-orange-500');
      }

      // Restaure focus
      if (this.triggerButton) this.triggerButton.focus();
      console.log('Panneau fermé (dataset.state = closed)');
    }

    // --- Vérifie l’état ---
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.panelTarget.dataset.state === 'open';
    }

    // --- Focus trap cyclique (accessibilité) ---
  }, {
    key: "trapFocus",
    value: function trapFocus(e) {
      var focusables = this.panelTarget.querySelectorAll(this.focusableSelectors);
      if (focusables.length === 0) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
_defineProperty(_default, "targets", ['panel', 'overlay']);


/***/ }),

/***/ "./assets/controllers/flash_controller.js":
/*!************************************************!*\
  !*** ./assets/controllers/flash_controller.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * Controller : flash auto-dismiss
 *
 * - Fade-out automatique des messages flash
 * - Suppression propre du DOM
 * - Accessibilité : aria-live="polite", role="status"
 * - Compatible Tailwind & dark-mode
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;
      // Accessibilité
      this.element.setAttribute('role', 'status');
      this.element.setAttribute('aria-live', 'polite');

      // Animation fade-out
      setTimeout(function () {
        _this.element.classList.add('opacity-0', 'translate-y-1', 'transition-all', 'duration-700', 'ease-out');

        // Supprime l'élément après l'animation
        setTimeout(function () {
          return _this.element.remove();
        }, 750);
      }, this.timeoutValue);
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
_defineProperty(_default, "values", {
  timeout: {
    type: Number,
    "default": 5000
  } // 5 secondes
});


/***/ }),

/***/ "./assets/controllers/font_size_controller.js":
/*!****************************************************!*\
  !*** ./assets/controllers/font_size_controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");



















function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * Contrôleur Stimulus : Switcher de taille de police
 *
 * - 3 états : A- (petit), A (normal), A+ (grand)
 * - Sauvegarde dans localStorage
 * - Accessibilité :
 *   • aria-pressed pour l’état actif
 *   • navigation clavier possible
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var saved = localStorage.getItem('tk_font_size') || 'normal';
      this.applySize(saved);
    }
  }, {
    key: "setSmall",
    value: function setSmall() {
      this.applySize('small');
    }
  }, {
    key: "setNormal",
    value: function setNormal() {
      this.applySize('normal');
    }
  }, {
    key: "setLarge",
    value: function setLarge() {
      this.applySize('large');
    }
  }, {
    key: "applySize",
    value: function applySize(size) {
      var html = document.documentElement;
      switch (size) {
        case 'small':
          html.style.fontSize = '14px';
          break;
        case 'large':
          html.style.fontSize = '18px';
          break;
        default:
          html.style.fontSize = '16px';
      }

      // Sauvegarde préférence
      localStorage.setItem('tk_font_size', size);

      // MAJ ARIA des boutons
      this.smallTarget.setAttribute('aria-pressed', size === 'small');
      this.normalTarget.setAttribute('aria-pressed', size === 'normal');
      this.largeTarget.setAttribute('aria-pressed', size === 'large');
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);
_defineProperty(_default, "targets", ['small', 'normal', 'large']);


/***/ }),

/***/ "./assets/controllers/form_autosave_controller.js":
/*!********************************************************!*\
  !*** ./assets/controllers/form_autosave_controller.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




































function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * Contrôleur Stimulus : Sauvegarde auto du formulaire
 *
 * - Sauvegarde les données saisies dans localStorage
 * - Restaure à la reconnexion
 * - Utilise une clé locale spécifique
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      // Restaure si brouillon existant
      var saved = localStorage.getItem(this.keyValue);
      if (saved) {
        var data = JSON.parse(saved);
        for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            name = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          var field = this.element.querySelector("[name=\"".concat(name, "\"]"));
          if (field) field.value = value;
        }
      }
    }
  }, {
    key: "save",
    value: function save() {
      var data = {};
      var inputs = this.element.querySelectorAll('input, textarea, select');
      inputs.forEach(function (el) {
        if (el.name) data[el.name] = el.value;
      });
      localStorage.setItem(this.keyValue, JSON.stringify(data));
    }
  }, {
    key: "clear",
    value: function clear() {
      localStorage.removeItem(this.keyValue);
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_36__.Controller);
_defineProperty(_default, "values", {
  key: String
});


/***/ }),

/***/ "./assets/controllers/header_nav_controller.js":
/*!*****************************************************!*\
  !*** ./assets/controllers/header_nav_controller.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ======================================================
// Contrôleur Stimulus — Menu burger mobile
// ------------------------------------------------------
// - Ouvre/ferme le menu mobile (_mobile_menu.html.twig)
// - Gère l’effet de slide latéral + fade du fond
// - Focus trap + fermeture via Échap / clic extérieur
// - ARIA conforme (expanded + hidden)
// ======================================================


var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.open = false;
      this.focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

      // Liaison des handlers
      this.boundKeydown = this.handleKeydown.bind(this);
      this.boundClickOutside = this.handleClickOutside.bind(this);
      console.log('header-nav connecté (Stimulus actif)');
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      this.button = event.currentTarget; // bouton burger
      this.open ? this.close() : this.openMenu();
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      var _this$button;
      if (this.open) return;
      console.log('Ouverture du menu mobile');
      var menu = this.menuTarget;
      var panel = this.panelTarget;

      // Affiche le fond noir et anime
      menu.classList.remove('hidden', 'animate-fade-out');
      menu.classList.add('animate-fade-in');
      menu.removeAttribute('aria-hidden');

      // Fait glisser le panneau blanc
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
      (_this$button = this.button) === null || _this$button === void 0 || _this$button.setAttribute('aria-expanded', 'true');
      this.open = true;

      // Focus trap
      this.focusables = panel.querySelectorAll(this.focusableSelectors);
      this.firstFocusable = this.focusables[0];
      this.lastFocusable = this.focusables[this.focusables.length - 1];
      if (this.firstFocusable) this.firstFocusable.focus();
      document.addEventListener('keydown', this.boundKeydown);
      document.addEventListener('click', this.boundClickOutside);
    }
  }, {
    key: "close",
    value: function close() {
      var _this$button2, _this$button3;
      if (!this.open) return;
      console.log('🔹 Fermeture du menu mobile');
      var menu = this.menuTarget;
      var panel = this.panelTarget;

      // Animation de sortie
      menu.classList.remove('animate-fade-in');
      menu.classList.add('animate-fade-out');
      panel.classList.add('translate-x-full');
      panel.classList.remove('translate-x-0');

      // Masquage après la transition
      setTimeout(function () {
        menu.classList.add('hidden');
        menu.setAttribute('aria-hidden', 'true');
      }, 300); // durée identique à l’animation CSS

      (_this$button2 = this.button) === null || _this$button2 === void 0 || _this$button2.setAttribute('aria-expanded', 'false');
      this.open = false;
      document.removeEventListener('keydown', this.boundKeydown);
      document.removeEventListener('click', this.boundClickOutside);
      (_this$button3 = this.button) === null || _this$button3 === void 0 || _this$button3.focus();
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(event) {
      if (!this.open) return;
      switch (event.key) {
        case 'Escape':
          this.close();
          break;
        case 'Tab':
          if (!this.focusables || this.focusables.length === 0) return;
          if (event.shiftKey && document.activeElement === this.firstFocusable) {
            event.preventDefault();
            this.lastFocusable.focus();
          } else if (!event.shiftKey && document.activeElement === this.lastFocusable) {
            event.preventDefault();
            this.firstFocusable.focus();
          }
          break;
      }
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.open && !this.panelTarget.contains(event.target) && !this.button.contains(event.target)) {
        this.close();
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
_defineProperty(_default, "targets", ['menu', 'panel']);


/***/ }),

/***/ "./assets/controllers/image_preview_controller.js":
/*!********************************************************!*\
  !*** ./assets/controllers/image_preview_controller.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



























function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.previewTarget.innerHTML = ''; // clean au chargement
    }
  }, {
    key: "preview",
    value: function preview() {
      var _this = this;
      var files = this.inputTarget.files;

      // reset preview
      this.previewTarget.innerHTML = '';
      if (!files || files.length === 0) {
        return;
      }
      Array.from(files).forEach(function (file) {
        if (!file.type.startsWith('image/')) return;
        var reader = new FileReader();
        reader.onload = function (e) {
          var div = document.createElement('div');
          div.className = 'relative w-24 h-24 rounded-lg overflow-hidden shadow border border-gray-200';
          div.innerHTML = "\n          <img src=\"".concat(e.target.result, "\" class=\"w-full h-full object-cover\" />\n\n          <button type=\"button\"\n            class=\"absolute top-0 right-0 p-1 bg-red-600 text-white text-xs rounded-bl\"\n            data-action=\"click->image-preview#remove\"\n            data-name=\"").concat(file.name, "\">\n            \xD7\n          </button>");
          _this.previewTarget.appendChild(div);
        };
        reader.readAsDataURL(file);
      });
    }
  }, {
    key: "remove",
    value: function remove(event) {
      var name = event.currentTarget.dataset.name;

      // recréer la FileList sans l'image retirée
      var dt = new DataTransfer();
      Array.from(this.inputTarget.files).forEach(function (file) {
        if (file.name !== name) {
          dt.items.add(file);
        }
      });
      this.inputTarget.files = dt.files;

      // rafraîchir la preview
      this.preview();
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_27__.Controller);
_defineProperty(_default, "targets", ['input', 'preview']);


/***/ }),

/***/ "./assets/controllers/location_autocomplete_controller.js":
/*!****************************************************************!*\
  !*** ./assets/controllers/location_autocomplete_controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


























function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * Contrôleur Stimulus — Autocomplétion de la localisation (API BAN)
 * ---------------------------------------------------------------
 * - Propose des villes
 * - Compatibilité Stimulus complète
 * - Fix : évite les 400 causés par keydown / event
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.activeIndex = -1;
      this.closeOnClickOutside = this.closeOnClickOutside.bind(this);
      this.listTarget.setAttribute('role', 'listbox');
      this.listTarget.setAttribute('aria-live', 'polite');
    }
    /**
     * Recherche via API — corrigée (anti 400 errors)
     */
  }, {
    key: "search",
    value: (function () {
      var _search = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
        var query, res, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!(event instanceof KeyboardEvent)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              query = this.inputTarget.value.trim();
              if (!(query.length < 3)) {
                _context.n = 2;
                break;
              }
              this.clearList();
              return _context.a(2);
            case 2:
              _context.p = 2;
              _context.n = 3;
              return fetch("https://api-adresse.data.gouv.fr/search/?q=".concat(encodeURIComponent(query), "&limit=6&type=municipality"));
            case 3:
              res = _context.v;
              if (res.ok) {
                _context.n = 4;
                break;
              }
              console.warn('API Adresse renvoie une erreur :', res.status);
              this.clearList();
              this.renderList([{
                properties: {
                  label: 'Aucun résultat (tapez au moins 3 lettres)'
                }
              }]);
              return _context.a(2);
            case 4:
              _context.n = 5;
              return res.json();
            case 5:
              data = _context.v;
              this.renderList(data.features);
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.error('Erreur API Adresse :', _t);
              this.clearList();
            case 7:
              return _context.a(2);
          }
        }, _callee, this, [[2, 6]]);
      }));
      function search(_x) {
        return _search.apply(this, arguments);
      }
      return search;
    }()
    /**
     * Génère la liste d’options
     */
    )
  }, {
    key: "renderList",
    value: function renderList(features) {
      var _this = this;
      this.clearList();
      if (!features || features.length === 0) return;
      features.forEach(function (f, i) {
        var label = f.properties.label;
        var li = document.createElement('li');
        li.textContent = label;
        li.className = 'px-3 py-2 text-sm cursor-pointer hover:bg-talenteko-peach-200 transition';
        li.setAttribute('role', 'option');
        li.setAttribute('id', "opt-".concat(i));
        li.setAttribute('aria-selected', 'false');
        li.addEventListener('mousedown', function (e) {
          e.preventDefault();
          _this.select(label);
        });
        _this.listTarget.appendChild(li);
      });
      this.listTarget.classList.remove('hidden');
      this.listTarget.style.animation = 'tk-autocomplete-fade-in 0.15s ease-out';
      this.inputTarget.setAttribute('aria-expanded', 'true');
      document.addEventListener('mousedown', this.closeOnClickOutside);
    }
    /**
     * Navigation clavier
     */
  }, {
    key: "keydown",
    value: function keydown(event) {
      var items = this.listTarget.querySelectorAll('li');
      if (items.length === 0) return;
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          this.activeIndex = (this.activeIndex + 1) % items.length;
          this.highlight(items);
          break;
        case 'ArrowUp':
          event.preventDefault();
          this.activeIndex = (this.activeIndex - 1 + items.length) % items.length;
          this.highlight(items);
          break;
        case 'Enter':
          if (this.activeIndex >= 0) {
            event.preventDefault();
            items[this.activeIndex].dispatchEvent(new Event('mousedown'));
          }
          break;
        case 'Escape':
          this.clearList();
          break;
      }
    }
    /**
     * Ajoute le style sur l’option active
     */
  }, {
    key: "highlight",
    value: function highlight(items) {
      var _this2 = this;
      items.forEach(function (li, i) {
        var active = i === _this2.activeIndex;
        li.classList.toggle('bg-talenteko-peach-200', active);
        li.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      if (this.activeIndex >= 0) {
        this.inputTarget.setAttribute('aria-activedescendant', items[this.activeIndex].id);
      } else {
        this.inputTarget.removeAttribute('aria-activedescendant');
      }
    }
    /**
     * Quand on sélectionne une suggestion
     */
  }, {
    key: "select",
    value: function select(label) {
      this.inputTarget.value = label;
      this.clearList();
    }

    /**
     * Ferme le panneau si clic extérieur
     */
  }, {
    key: "closeOnClickOutside",
    value: function closeOnClickOutside(e) {
      if (!this.element.contains(e.target)) {
        this.clearList();
      }
    }
    /**
     * Animation fermeture + reset
     */
  }, {
    key: "clearList",
    value: function clearList() {
      var _this3 = this;
      if (this.listTarget && this.listTarget.childElementCount > 0) {
        this.listTarget.style.animation = 'tk-autocomplete-fade-out 0.15s ease-in';
        setTimeout(function () {
          return _this3._resetList();
        }, 150);
      } else {
        this._resetList();
      }
    }
  }, {
    key: "_resetList",
    value: function _resetList() {
      this.listTarget.innerHTML = '';
      this.listTarget.classList.add('hidden');
      this.inputTarget.setAttribute('aria-expanded', 'false');
      this.inputTarget.removeAttribute('aria-activedescendant');
      document.removeEventListener('mousedown', this.closeOnClickOutside);
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_26__.Controller);
_defineProperty(_default, "targets", ['input', 'list']);


/***/ }),

/***/ "./assets/controllers/password_confirm_controller.js":
/*!***********************************************************!*\
  !*** ./assets/controllers/password_confirm_controller.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");



















function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * Contrôleur : Confirmation du mot de passe
 *
 * - Vérifie en direct l'égalité des mots de passe
 * - Message clair + icônes FontAwesome
 * - aria-live + aria-invalid
 * - Désactive le bouton submit si mismatch
 * - Synchronisé avec password_strength (écoute l’événement)
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;
      this.feedbackTarget.setAttribute('role', 'status');
      this.feedbackTarget.setAttribute('aria-live', 'polite');
      // Par défaut, on désactive le bouton tant que rien n’est validé
      if (this.hasSubmitTarget) {
        this.submitTarget.disabled = true;
      }
      // Écoute les événements du controller password_strength
      this.element.addEventListener('password-strength-updated', function (e) {
        _this.passwordStrong = e.detail.valid;
        _this.check();
      });
    }
  }, {
    key: "check",
    value: function check() {
      var pwd = this.originalTarget.value;
      var confirm = this.confirmTarget.value;
      // Champ vide → reset
      if (!confirm) {
        this.feedbackTarget.innerHTML = '';
        this.confirmTarget.setCustomValidity('');
        this.confirmTarget.removeAttribute('aria-invalid');
        this.updateSubmit();
        return;
      }
      var match = pwd === confirm;
      if (match) {
        this.feedbackTarget.innerHTML = '<i class="fa-solid fa-check-circle text-green-500 mr-1"></i><span>Les mots de passe correspondent.</span>';
        this.feedbackTarget.className = 'flex items-center gap-1 text-green-600 text-xs mt-1';
        this.confirmTarget.setCustomValidity('');
        this.confirmTarget.setAttribute('aria-invalid', 'false');
      } else {
        this.feedbackTarget.innerHTML = '<i class="fa-solid fa-circle-xmark text-red-500 mr-1"></i><span>Les mots de passe ne correspondent pas.</span>';
        this.feedbackTarget.className = 'flex items-center gap-1 text-red-600 text-xs mt-1';
        this.confirmTarget.setCustomValidity('Les mots de passe ne correspondent pas.');
        this.confirmTarget.setAttribute('aria-invalid', 'true');
      }
      this.passwordsMatch = match;
      this.updateSubmit();
    }
  }, {
    key: "updateSubmit",
    value: function updateSubmit() {
      if (!this.hasSubmitTarget) return;
      // Button enabled only if :
      // - password_strength valide
      // - password_confirm OK
      var canSubmit = this.passwordStrong && this.passwordsMatch;
      this.submitTarget.disabled = !canSubmit;
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);
_defineProperty(_default, "targets", ['original', 'confirm', 'feedback', 'submit']);


/***/ }),

/***/ "./assets/controllers/password_strength_controller.js":
/*!************************************************************!*\
  !*** ./assets/controllers/password_strength_controller.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

























function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * Contrôleur Stimulus : Vérification de la force du mot de passe
 *
 * - Règles ANSSI : longueur, maj, min, chiffre, spécial
 * - Feedback live (liste des critères)
 * - aria-invalid + aria-live
 * - Communique avec password-confirm pour désactiver le submit
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;
      // === Règles ANSSI ===
      this.rules = [{
        regex: /.{10,}/,
        text: 'Au moins 10 caractères'
      }, {
        regex: /[A-Z]/,
        text: 'Au moins une majuscule'
      }, {
        regex: /[a-z]/,
        text: 'Au moins une minuscule'
      }, {
        regex: /\d/,
        text: 'Au moins un chiffre'
      }, {
        regex: /[\W_]/,
        text: 'Au moins un caractère spécial'
      }];
      // === UL de critères ===
      this.list = document.createElement('ul');
      this.list.className = 'text-xs mt-2 space-y-1';
      this.list.setAttribute('role', 'status');
      this.list.setAttribute('aria-live', 'polite');
      this.rules.forEach(function (rule, i) {
        var li = document.createElement('li');
        li.dataset.index = i;
        li.innerHTML = _this.renderRule(rule.text, false);
        li.className = 'flex items-center gap-1 text-red-600';
        _this.list.appendChild(li);
      });
      this.feedbackTarget.replaceChildren(this.list);
    }
  }, {
    key: "check",
    value: function check() {
      var _this2 = this;
      var value = this.inputTarget.value;
      var validCount = 0;
      this.rules.forEach(function (rule, i) {
        var li = _this2.list.querySelector("[data-index=\"".concat(i, "\"]"));
        var passed = rule.regex.test(value);
        li.innerHTML = _this2.renderRule(rule.text, passed);
        li.className = passed ? 'flex items-center gap-1 text-green-600' : 'flex items-center gap-1 text-red-600';
        if (passed) validCount++;
      });
      var allValid = validCount === this.rules.length;
      // ARIA
      this.inputTarget.setAttribute('aria-invalid', allValid ? 'false' : 'true');
      this.inputTarget.classList.toggle('valid-password', allValid);
      // Communique avec password-confirm si présent
      if (this.element.dataset.hasConfirm === 'true') {
        var event = new CustomEvent('password-strength-updated', {
          detail: {
            valid: allValid
          },
          bubbles: true
        });
        this.element.dispatchEvent(event);
      }
    }
  }, {
    key: "renderRule",
    value: function renderRule(text, passed) {
      return passed ? "<i class=\"fa-solid fa-check-circle text-green-500 mr-1\"></i><span>".concat(text, "</span>") : "<i class=\"fa-solid fa-circle-xmark text-red-500 mr-1\"></i><span>".concat(text, "</span>");
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_25__.Controller);
_defineProperty(_default, "targets", ['input', 'feedback', 'submit']);


/***/ }),

/***/ "./assets/controllers/rating_filter_controller.js":
/*!********************************************************!*\
  !*** ./assets/controllers/rating_filter_controller.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

























function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// assets/controllers/rating_filter_controller.js



/**
 * Contrôleur Stimulus — Sélecteur d’évaluation (★)
 * ---------------------------------------------------
 * Permet à l’utilisateur de choisir un niveau d’étoiles (1 à 5)
 * dans le panneau de filtres de recherche.
 *
 * Fonctionnalités :
 * - 5 étoiles interactives basées sur SVG
 * - Mise à jour d’un <input type="hidden" name="rating">
 * - Soumission automatique du formulaire de filtres
 * - Accessibilité complète : clavier + aria-label + aria-pressed
 *
 * Compatible avec : templates/search/index.html.twig
 * Utilisé conjointement avec : filter-panel_controller.js
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      // Initialise la valeur (par défaut 0) depuis le champ caché
      this.value = parseInt(this.inputTarget.value || 0, 10);
      this.refresh();
    }
    /**
     * Sélectionne une note au clic (ou à la touche Espace/Entrée).
     * Permet aussi de désélectionner la note si on reclique dessus.
     */
  }, {
    key: "select",
    value: function select(event) {
      var val = parseInt(event.currentTarget.dataset.value, 10);
      this.value = this.value === val ? 0 : val; // toggle si on reclique
      this.inputTarget.value = this.value;
      this.refresh();

      // Soumission automatique du formulaire principal si disponible
      var form = this.element.closest('form');
      if (form) form.requestSubmit();
    }
    /**
     * Survol souris : met en surbrillance temporairement
     */
  }, {
    key: "highlight",
    value: function highlight(event) {
      var val = parseInt(event.currentTarget.dataset.value, 10);
      this.updateStars(val);
    }

    /**
     * Quand on sort du survol : restaure la valeur actuelle
     */
  }, {
    key: "clearHighlight",
    value: function clearHighlight() {
      this.refresh();
    }

    /**
     * Rafraîchit l’état visuel complet selon la valeur active
     */
  }, {
    key: "refresh",
    value: function refresh() {
      this.updateStars(this.value);
    }

    /**
     * Met à jour l’affichage (couleur + état ARIA)
     * @param {number} activeValue
     */
  }, {
    key: "updateStars",
    value: function updateStars(activeValue) {
      this.starTargets.forEach(function (el, i) {
        var filled = i + 1 <= activeValue;

        // Gestion des classes Tailwind
        el.classList.toggle('text-talenteko-orange-500', filled);
        el.classList.toggle('text-gray-300', !filled);

        // Accessibilité : indiquer visuellement et vocalement l’état
        el.setAttribute('aria-pressed', filled);
        el.setAttribute('tabindex', '0');
        el.setAttribute('aria-label', "".concat(i + 1, " \xE9toile").concat(i > 0 ? 's' : ''));
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_25__.Controller);
_defineProperty(_default, "targets", ['input', 'star', 'form']);


/***/ }),

/***/ "./assets/controllers/scroll_nav_controller.js":
/*!*****************************************************!*\
  !*** ./assets/controllers/scroll_nav_controller.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");



















function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "scrollLeft",
    value: function scrollLeft() {
      if (this.hasContainerTarget) {
        this.containerTarget.scrollBy({
          left: -250,
          behavior: 'smooth'
        });
      }
    }
  }, {
    key: "scrollRight",
    value: function scrollRight() {
      if (this.hasContainerTarget) {
        this.containerTarget.scrollBy({
          left: 250,
          behavior: 'smooth'
        });
      }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);
_defineProperty(_default, "targets", ['container']);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_stimulus_dist_stimulus_js-node_modules_core-js_modules_es_array-37cfed"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQUM7SUFBQXJULEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUFxVCxXQUFXQSxDQUFBLEVBQUc7TUFDWixJQUFJLElBQUksQ0FBQ0wsa0JBQWtCLEVBQUU7UUFDM0IsSUFBSSxDQUFDQyxlQUFlLENBQUNDLFFBQVEsQ0FBQztVQUFFQyxJQUFJLEVBQUUsR0FBRztVQUFFQyxRQUFRLEVBQUU7UUFBUyxDQUFDLENBQUM7TUFDbEU7SUFDRjtFQUFDO0FBQUEsRUFYMEI3VCwyREFBVTtBQUFBbUQsZUFBQSxDQUFBbEQsUUFBQSxhQUNwQixDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9hcHAuY3NzPzFlM2MiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9jdXN0b21fc2VsZWN0X2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2RhcmtfbW9kZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9mYXZvcml0ZV90b2dnbGVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvZmlsdGVyX3BhbmVsX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZsYXNoX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZvbnRfc2l6ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9mb3JtX2F1dG9zYXZlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlYWRlcl9uYXZfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvaW1hZ2VfcHJldmlld19jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9sb2NhdGlvbl9hdXRvY29tcGxldGVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvcGFzc3dvcmRfY29uZmlybV9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9wYXNzd29yZF9zdHJlbmd0aF9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9yYXRpbmdfZmlsdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3Njcm9sbF9uYXZfY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQb2ludCBkJ2VudHLDqWUgSlMg4oCUIFRhbGVudMOJa8O0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtIENoYXJnZSBTdGltdWx1cyAmIFR1cmJvIChjb25maWcgU3ltZm9ueSBFbmNvcmUpXG4vLyAtIEltcG9ydGUgVGFpbHdpbmRDU1MgdmlhIGFwcC5jc3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0ICcuL2FwcC5jc3MnOyAvLyBUYWlsd2luZCBDU1NcbmltcG9ydCAnLi9ib290c3RyYXAuanMnOyAvLyBTdGltdWx1cy9UdXJibyArIGNvbmZpZ1xuLyogZ2xvYmFsIHByb2Nlc3MgKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zb2xlLmxvZygnVGFsZW50w4lrw7Qg4oCUIGFzc2V0cy9hcHAuanMgY2hhcmfDqSBhdmVjIHN1Y2PDqHMnKTtcbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQm9vdHN0cmFwIEpTIOKAlCBTdGltdWx1cyAoVGFsZW50w4lrw7QgMjAyNSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ29uZmlndXJhdGlvbiBtYW51ZWxsZSBkZSBTdGltdWx1cyBwb3VyIFdlYnBhY2sgRW5jb3JlIDUueFxuLy8gTW9kZSBFU00gc3RyaWN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vLyAtLS0gSW5pdGlhbGlzYXRpb24gZGUgU3RpbXVsdXMgLS0tXG53aW5kb3cuYXBwbGljYXRpb24gPSBBcHBsaWNhdGlvbi5zdGFydCgpO1xuY29uc29sZS5sb2coJyBTdGltdWx1cyBpbml0aWFsaXPDqSAobW9kZSBFU00gc3RyaWN0LCBlbnJlZ2lzdHJlbWVudCBtYW51ZWwpJyk7XG5cbi8vID09PSBJbXBvcnQgbWFudWVsIGRlIHRvdXMgbGVzIGNvbnRyw7RsZXVycyA9PT1cbmltcG9ydCBIZWFkZXJOYXZDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvaGVhZGVyX25hdl9jb250cm9sbGVyLmpzJztcbmltcG9ydCBDdXN0b21TZWxlY3RDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvY3VzdG9tX3NlbGVjdF9jb250cm9sbGVyLmpzJztcbmltcG9ydCBEYXJrTW9kZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9kYXJrX21vZGVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgRmF2b3JpdGVUb2dnbGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZmF2b3JpdGVfdG9nZ2xlX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IEZpbHRlclBhbmVsQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2ZpbHRlcl9wYW5lbF9jb250cm9sbGVyLmpzJztcbmltcG9ydCBGbGFzaENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9mbGFzaF9jb250cm9sbGVyLmpzJztcbmltcG9ydCBGb250U2l6ZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9mb250X3NpemVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgRm9ybUF1dG9zYXZlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2Zvcm1fYXV0b3NhdmVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgTG9jYXRpb25BdXRvY29tcGxldGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvbG9jYXRpb25fYXV0b2NvbXBsZXRlX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFJhdGluZ0ZpbHRlckNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9yYXRpbmdfZmlsdGVyX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFBhc3N3b3JkQ29uZmlybUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9wYXNzd29yZF9jb25maXJtX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFBhc3N3b3JkU3RyZW5ndGhDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvcGFzc3dvcmRfc3RyZW5ndGhfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgU2Nyb2xsTmF2Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3Njcm9sbF9uYXZfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgSW1hZ2VQcmV2aWV3Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2ltYWdlX3ByZXZpZXdfY29udHJvbGxlci5qcyc7XG5cbi8vIC0tLSBFbnJlZ2lzdHJlbWVudCBnbG9iYWwgU3RpbXVsdXMgLS0tXG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ2hlYWRlci1uYXYnLCBIZWFkZXJOYXZDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3RlcignY3VzdG9tLXNlbGVjdCcsIEN1c3RvbVNlbGVjdENvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdkYXJrLW1vZGUnLCBEYXJrTW9kZUNvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdmYXZvcml0ZS10b2dnbGUnLCBGYXZvcml0ZVRvZ2dsZUNvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdmaWx0ZXItcGFuZWwnLCBGaWx0ZXJQYW5lbENvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdmbGFzaCcsIEZsYXNoQ29udHJvbGxlcik7XG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ2ZvbnQtc2l6ZScsIEZvbnRTaXplQ29udHJvbGxlcik7XG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ2Zvcm0tYXV0b3NhdmUnLCBGb3JtQXV0b3NhdmVDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3RlcignbG9jYXRpb24tYXV0b2NvbXBsZXRlJywgTG9jYXRpb25BdXRvY29tcGxldGVDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3RlcigncmF0aW5nLWZpbHRlcicsIFJhdGluZ0ZpbHRlckNvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdwYXNzd29yZC1jb25maXJtJywgUGFzc3dvcmRDb25maXJtQ29udHJvbGxlcik7XG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ3Bhc3N3b3JkLXN0cmVuZ3RoJywgUGFzc3dvcmRTdHJlbmd0aENvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdzY3JvbGwtbmF2JywgU2Nyb2xsTmF2Q29udHJvbGxlcik7XG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ2ltYWdlLXByZXZpZXcnLCBJbWFnZVByZXZpZXdDb250cm9sbGVyKTtcblxuLy8gLS0tIExvZyBkZSB2w6lyaWZpY2F0aW9uICh1dGlsZSBlbiBkZXYpIC0tLVxuY29uc29sZS5sb2coJ0NvbnRyw7RsZXVycyBTdGltdWx1cyBlbnJlZ2lzdHLDqXMgOicpO1xuY29uc29sZS5sb2coW1xuICAnaGVhZGVyLW5hdicsXG4gICdjdXN0b20tc2VsZWN0JyxcbiAgJ2RhcmstbW9kZScsXG4gICdmYXZvcml0ZS10b2dnbGUnLFxuICAnZmlsdGVyLXBhbmVsJyxcbiAgJ2ZsYXNoJyxcbiAgJ2ZvbnQtc2l6ZScsXG4gICdmb3JtLWF1dG9zYXZlJyxcbiAgJ2xvY2F0aW9uLWF1dG9jb21wbGV0ZScsXG4gICdyYXRpbmctZmlsdGVyJyxcbiAgJ3Bhc3N3b3JkLWNvbmZpcm0nLFxuICAncGFzc3dvcmQtc3RyZW5ndGgnLFxuICAnc2Nyb2xsLW5hdicsXG4gICdpbWFnZS1wcmV2aWV3Jyxcbl0pO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb250csO0bGV1ciBTdGltdWx1cyDigJQgQ3VzdG9tIFNlbGVjdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBPYmplY3RpZiA6IHJlbXBsYWNlciB1biA8c2VsZWN0PiBuYXRpZiBwYXIgdW4gY29tcG9zYW50XG4vLyBhY2Nlc3NpYmxlIGV0IGNvbXBhdGlibGUgY2xhdmllciArIEFSSUEuXG4vLyBVdGlsaXPDqSBwb3VyIGxlIGZpbHRyZSDigJxEYXRlIGRlIHB1YmxpY2F0aW9u4oCdLlxuLy8gRm9uY3Rpb25uYWxpdMOpcyA6XG4vLyAtIE91dmVydHVyZS9mZXJtZXR1cmUgZHUgbWVudSB2aWEgY2xpYyBvdSBjbGF2aWVyXG4vLyAtIFPDqWxlY3Rpb24gZOKAmXVuZSBvcHRpb24gKGNsaWMgb3UgRW50ZXIpXG4vLyAtIE1pc2Ugw6Agam91ciBkdSBsYWJlbCArIGlucHV0IGNhY2jDqVxuLy8gLSBGZXJtZXR1cmUgc2kgY2xpYyDDoCBs4oCZZXh0w6lyaWV1ciBvdSB0b3VjaGUgw4ljaGFwXG4vLyAtIFNvdW1pc3Npb24gYXV0b21hdGlxdWUgZHUgZm9ybXVsYWlyZSBwYXJlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbJ2J1dHRvbicsICdsaXN0JywgJ2xhYmVsJywgJ2lucHV0JywgJ29wdGlvbiddO1xuXG4gIGNvbm5lY3QoKSB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5fYm91bmRDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fYm91bmRDbGlja091dHNpZGUpO1xuICAgIGNvbnNvbGUubG9nKCdjdXN0b21fc2VsZWN0IGNvbm5lY3TDqScpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2JvdW5kQ2xpY2tPdXRzaWRlKTtcbiAgfVxuICAvLyBPdXZlcnR1cmUgLyBmZXJtZXR1cmUgZHUgbWVudSBkw6lyb3VsYW50XG4gIHRvZ2dsZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHkoKTtcbiAgfVxuICAvLyBzZWxlY3RPcHRpb24gU0FOUyBhdXRvLXN1Ym1pdFxuICBzZWxlY3RPcHRpb24oZXZlbnQpIHtcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnZhbHVlO1xuICAgIGNvbnN0IHNlbGVjdGVkTGFiZWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKTtcblxuICAgIHRoaXMuaW5wdXRUYXJnZXQudmFsdWUgPSBzZWxlY3RlZFZhbHVlO1xuICAgIHRoaXMubGFiZWxUYXJnZXQudGV4dENvbnRlbnQgPSBzZWxlY3RlZExhYmVsO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuICAvLyBHZXN0aW9uIGR1IGNsYXZpZXIgc3VyIGxlIGJvdXRvbiBwcmluY2lwYWxcbiAgaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChbJyAnLCAnRW50ZXInLCAnQXJyb3dEb3duJ10uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHkoKTtcbiAgICAgIGNvbnN0IGZpcnN0T3B0aW9uID0gdGhpcy5vcHRpb25UYXJnZXRzWzBdO1xuICAgICAgaWYgKGZpcnN0T3B0aW9uKSBmaXJzdE9wdGlvbi5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuICAvLyBHZXN0aW9uIGR1IGNsYXZpZXIgZGFucyBsYSBsaXN0ZSBkZXMgb3B0aW9uc1xuICBoYW5kbGVPcHRpb25LZXlkb3duKGV2ZW50KSB7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5vcHRpb25UYXJnZXRzLmluZGV4T2YoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuZXh0ID0gdGhpcy5vcHRpb25UYXJnZXRzW2N1cnJlbnRJbmRleCArIDFdIHx8IHRoaXMub3B0aW9uVGFyZ2V0c1swXTtcbiAgICAgIG5leHQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgcHJldiA9XG4gICAgICAgIHRoaXMub3B0aW9uVGFyZ2V0c1tjdXJyZW50SW5kZXggLSAxXSB8fCB0aGlzLm9wdGlvblRhcmdldHNbdGhpcy5vcHRpb25UYXJnZXRzLmxlbmd0aCAtIDFdO1xuICAgICAgcHJldi5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZWxlY3RPcHRpb24oZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5idXR0b25UYXJnZXQuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgLy8gRmVybWUgbGUgbWVudSBzaSBjbGljIMOgIGzigJlleHTDqXJpZXVyXG4gIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgIGlmICh0aGlzLm9wZW4gJiYgIXRoaXMuZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG4gIC8vIE1haiBsYSB2aXNpYmlsaXTDqSBldCBsZXMgYXR0cmlidXRzIEFSSUFcbiAgdXBkYXRlVmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLmxpc3RUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgIXRoaXMub3Blbik7XG4gICAgdGhpcy5idXR0b25UYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdGhpcy5vcGVuKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlVmlzaWJpbGl0eSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLyoqXG4gKiBDb250csO0bGV1ciBTdGltdWx1cyA6IERhcmsgbW9kZSB0b2dnbGVcbiAqXG4gKiAtIEFqb3V0IGNsYXNzZSAuZGFyayBzdXIgPGh0bWw+XG4gKiAtIFNhdXZlZ2FyZGUgbGEgcHLDqWbDqXJlbmNlIGRhbnMgbG9jYWxTdG9yYWdlXG4gKiAtIEFjY2Vzc2liaWxpdMOpIDogYXJpYS1wcmVzc2VkIHN1ciBsZSBib3V0b25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgY29ubmVjdCgpIHtcbiAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0a19kYXJrX21vZGUnKTtcbiAgICBjb25zdCBwcmVmZXJzRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICBjb25zdCBlbmFibGVkID0gc2F2ZWQgPyBzYXZlZCA9PT0gJ3RydWUnIDogcHJlZmVyc0Rhcms7XG4gICAgdGhpcy5zZXRNb2RlKGVuYWJsZWQpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGNvbnN0IGlzRGFyayA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmsnKTtcbiAgICB0aGlzLnNldE1vZGUoIWlzRGFyayk7XG4gIH1cblxuICBzZXRNb2RlKGVuYWJsZWQpIHtcbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0a19kYXJrX21vZGUnLCAndHJ1ZScpO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0a19kYXJrX21vZGUnLCAnZmFsc2UnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICdmYWxzZScpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTdGltdWx1cyDigJQgQ29udHLDtGxldXIgRmF2b3JpcyBUYWxlbnTDiWvDtFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGb25jdGlvbiA6IHRvZ2dsZSB2aXN1ZWwgKyBlbnZvaSByZXF1w6p0ZSBiYWNrZW5kXG4vLyBSZcOnb2l0IDogZGF0YS1mYXZvcml0ZS10b2dnbGUtbGlzdGluZy1pZC12YWx1ZT1cIlwiXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICAgICAgbGlzdGluZ0lkOiBOdW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ2VtcHR5JywgJ2ZpbGxlZCddO1xuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgLy8gw4l0YXQgaW5pdGlhbCBiYXPDqSBzdXIgbGUgRE9NIChmYWxsYmFjaylcbiAgICAgICAgY29uc3QgaXNGYXYgPSAhdGhpcy5maWxsZWRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5hcHBseVN0YXRlKGlzRmF2KTtcbiAgICB9XG5cbiAgICBhc3luYyB0b2dnbGUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBsaXN0aW5nSWQgPSB0aGlzLmxpc3RpbmdJZFZhbHVlO1xuICAgICAgICBpZiAoIWxpc3RpbmdJZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignIGxpc3RpbmdJZCBtYW5xdWFudCBkYW5zIGRhdGEtKicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tIE9wdGltaXNtZSBVWCA6IHRvZ2dsZSBpbW3DqWRpYXQgKGxvY2FsKVxuICAgICAgICBjb25zdCB3YXNGYXZvcml0ZSA9ICF0aGlzLmZpbGxlZFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmFwcGx5U3RhdGUoIXdhc0Zhdm9yaXRlKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2Zhdm9yaXMvdG9nZ2xlLyR7bGlzdGluZ0lkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJldXIgc2VydmV1ciAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgLy8gLS0tIE1pc2Ugw6Agam91ciByw6llbGxlIHNlbG9uIGxlIGJhY2tlbmRcbiAgICAgICAgICAgIHRoaXMuYXBwbHlTdGF0ZShkYXRhLmlzRmF2b3JpdGUpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCcgRXJyZXVyIGZhdm9yaXMgOicsIGVycm9yKTtcblxuICAgICAgICAgICAgLy8gUm9sbGJhY2sgdmlzdWVsIHNpIGVycmV1clxuICAgICAgICAgICAgdGhpcy5hcHBseVN0YXRlKHdhc0Zhdm9yaXRlKTtcblxuICAgICAgICAgICAgYWxlcnQoJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlLiBWZXVpbGxleiByw6llc3NheWVyLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwbHlTdGF0ZShpc0Zhdm9yaXRlKSB7XG4gICAgICAgIGlmIChpc0Zhdm9yaXRlKSB7XG4gICAgICAgICAgICB0aGlzLmVtcHR5VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdGhpcy5maWxsZWRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1JldGlyZXIgZGVzIGZhdm9yaXMnKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtcHR5VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdGhpcy5maWxsZWRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0Fqb3V0ZXIgYXV4IGZhdm9yaXMnKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTdGltdWx1cyBDb250cm9sbGVyIOKAlCBGaWx0ZXIgUGFuZWwgKFRhbGVudMOJa8O0KVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdGFyZ2V0cyA9IFsncGFuZWwnLCAnb3ZlcmxheSddO1xuXG4gIGNvbm5lY3QoKSB7XG4gICAgY29uc29sZS5sb2coJyBGaWx0ZXJQYW5lbENvbnRyb2xsZXIgY29ubmVjdMOpJyk7XG5cbiAgICAvLyBSYWNjb3VyY2lzXG4gICAgdGhpcy50b2dnbGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLXRvZ2dsZScpO1xuICAgIHRoaXMuZm9jdXNhYmxlU2VsZWN0b3JzID1cbiAgICAgICdhW2hyZWZdLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYSwgaW5wdXQsIHNlbGVjdCwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJztcblxuICAgIHRoaXMuZmlyc3RGb2N1c2FibGUgPSBudWxsO1xuICAgIHRoaXMubGFzdEZvY3VzYWJsZSA9IG51bGw7XG4gICAgdGhpcy50cmlnZ2VyQnV0dG9uID0gbnVsbDtcblxuICAgIC8vIEdlc3Rpb24gY2xhdmllciAoZmVybWV0dXJlICsgZm9jdXMgdHJhcClcbiAgICB0aGlzLmhhbmRsZUtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiB0aGlzLmlzT3BlbigpKSB0aGlzLmNsb3NlKCk7XG4gICAgICBpZiAoZS5rZXkgPT09ICdUYWInICYmIHRoaXMuaXNPcGVuKCkpIHRoaXMudHJhcEZvY3VzKGUpO1xuICAgIH07XG4gIH1cblxuICAvLyAtLS0gQmFzY3VsZSBvdXZlcnR1cmUgLyBmZXJtZXR1cmUgLS0tXG4gIHRvZ2dsZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCcgdG9nZ2xlKCkgZXjDqWN1dMOpICEnKTtcbiAgICB0aGlzLmlzT3BlbigpID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKGV2ZW50KTtcbiAgfVxuXG4gIC8vIC0tLSBPdXZlcnR1cmUgZHUgcGFubmVhdSAtLS1cbiAgb3BlbihldmVudCkge1xuICAgIHRoaXMudHJpZ2dlckJ1dHRvbiA9IGV2ZW50Py5jdXJyZW50VGFyZ2V0IHx8IHRoaXMudG9nZ2xlQnV0dG9uO1xuXG4gICAgdGhpcy5wYW5lbFRhcmdldC5kYXRhc2V0LnN0YXRlID0gJ29wZW4nO1xuICAgIHRoaXMub3ZlcmxheVRhcmdldC5kYXRhc2V0LnN0YXRlID0gJ29wZW4nO1xuXG4gICAgLy8gVHJhbnNpdGlvbiB2aXNpYmxlXG4gICAgdGhpcy5wYW5lbFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2xhdGUteC1mdWxsJywgJ29wYWNpdHktMCcpO1xuICAgIHRoaXMub3ZlcmxheVRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicpO1xuXG4gICAgLy8gRmVlZGJhY2sgdmlzdWVsIGR1IGJvdXRvblxuICAgIGlmICh0aGlzLnRvZ2dsZUJ1dHRvbikge1xuICAgICAgdGhpcy50b2dnbGVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIHRoaXMudG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICdib3JkZXItdGFsZW50ZWtvLW9yYW5nZS02MDAnLFxuICAgICAgICAndGV4dC10YWxlbnRla28tb3JhbmdlLTYwMCcsXG4gICAgICAgICdyaW5nLTEnLFxuICAgICAgICAncmluZy10YWxlbnRla28tb3JhbmdlLTUwMCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRm9jdXMgc3VyIHByZW1pZXIgY2hhbXBcbiAgICBjb25zdCBmb2N1c2FibGVzID0gdGhpcy5wYW5lbFRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZm9jdXNhYmxlU2VsZWN0b3JzKTtcbiAgICBpZiAoZm9jdXNhYmxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlID0gZm9jdXNhYmxlc1swXTtcbiAgICAgIHRoaXMubGFzdEZvY3VzYWJsZSA9IGZvY3VzYWJsZXNbZm9jdXNhYmxlcy5sZW5ndGggLSAxXTtcbiAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGUuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duKTtcbiAgICBjb25zb2xlLmxvZygnUGFubmVhdSBvdXZlcnQgKGRhdGFzZXQuc3RhdGUgPSBvcGVuKScpO1xuICB9XG5cbiAgLy8gLS0tIEZlcm1ldHVyZSBkdSBwYW5uZWF1IC0tLVxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnBhbmVsVGFyZ2V0LmRhdGFzZXQuc3RhdGUgPSAnY2xvc2VkJztcbiAgICB0aGlzLm92ZXJsYXlUYXJnZXQuZGF0YXNldC5zdGF0ZSA9ICdjbG9zZWQnO1xuXG4gICAgdGhpcy5wYW5lbFRhcmdldC5jbGFzc0xpc3QuYWRkKCd0cmFuc2xhdGUteC1mdWxsJywgJ29wYWNpdHktMCcpO1xuICAgIHRoaXMub3ZlcmxheVRhcmdldC5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5LTAnKTtcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bik7XG5cbiAgICAvLyBEw6lsYWkgYXZhbnQgZGlzcGFyaXRpb24gZGUgbOKAmW92ZXJsYXlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub3ZlcmxheVRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSwgMjAwKTtcblxuICAgIC8vIFLDqXRhYmxpciBzdHlsZSBkdSBib3V0b25cbiAgICBpZiAodGhpcy50b2dnbGVCdXR0b24pIHtcbiAgICAgIHRoaXMudG9nZ2xlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgdGhpcy50b2dnbGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgJ2JvcmRlci10YWxlbnRla28tb3JhbmdlLTYwMCcsXG4gICAgICAgICd0ZXh0LXRhbGVudGVrby1vcmFuZ2UtNjAwJyxcbiAgICAgICAgJ3JpbmctMScsXG4gICAgICAgICdyaW5nLXRhbGVudGVrby1vcmFuZ2UtNTAwJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZXN0YXVyZSBmb2N1c1xuICAgIGlmICh0aGlzLnRyaWdnZXJCdXR0b24pIHRoaXMudHJpZ2dlckJ1dHRvbi5mb2N1cygpO1xuXG4gICAgY29uc29sZS5sb2coJ1Bhbm5lYXUgZmVybcOpIChkYXRhc2V0LnN0YXRlID0gY2xvc2VkKScpO1xuICB9XG5cbiAgLy8gLS0tIFbDqXJpZmllIGzigJnDqXRhdCAtLS1cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbmVsVGFyZ2V0LmRhdGFzZXQuc3RhdGUgPT09ICdvcGVuJztcbiAgfVxuXG4gIC8vIC0tLSBGb2N1cyB0cmFwIGN5Y2xpcXVlIChhY2Nlc3NpYmlsaXTDqSkgLS0tXG4gIHRyYXBGb2N1cyhlKSB7XG4gICAgY29uc3QgZm9jdXNhYmxlcyA9IHRoaXMucGFuZWxUYXJnZXQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmZvY3VzYWJsZVNlbGVjdG9ycyk7XG4gICAgaWYgKGZvY3VzYWJsZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCBmaXJzdCA9IGZvY3VzYWJsZXNbMF07XG4gICAgY29uc3QgbGFzdCA9IGZvY3VzYWJsZXNbZm9jdXNhYmxlcy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsYXN0LmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICghZS5zaGlmdEtleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBsYXN0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmaXJzdC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qKlxuICogQ29udHJvbGxlciA6IGZsYXNoIGF1dG8tZGlzbWlzc1xuICpcbiAqIC0gRmFkZS1vdXQgYXV0b21hdGlxdWUgZGVzIG1lc3NhZ2VzIGZsYXNoXG4gKiAtIFN1cHByZXNzaW9uIHByb3ByZSBkdSBET01cbiAqIC0gQWNjZXNzaWJpbGl0w6kgOiBhcmlhLWxpdmU9XCJwb2xpdGVcIiwgcm9sZT1cInN0YXR1c1wiXG4gKiAtIENvbXBhdGlibGUgVGFpbHdpbmQgJiBkYXJrLW1vZGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICB0aW1lb3V0OiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogNTAwMCB9LCAvLyA1IHNlY29uZGVzXG4gIH07XG5cbiAgY29ubmVjdCgpIHtcbiAgICAvLyBBY2Nlc3NpYmlsaXTDqVxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnc3RhdHVzJyk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuXG4gICAgLy8gQW5pbWF0aW9uIGZhZGUtb3V0XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgJ29wYWNpdHktMCcsXG4gICAgICAgICd0cmFuc2xhdGUteS0xJyxcbiAgICAgICAgJ3RyYW5zaXRpb24tYWxsJyxcbiAgICAgICAgJ2R1cmF0aW9uLTcwMCcsXG4gICAgICAgICdlYXNlLW91dCdcbiAgICAgICk7XG5cbiAgICAgIC8vIFN1cHByaW1lIGwnw6lsw6ltZW50IGFwcsOocyBsJ2FuaW1hdGlvblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQucmVtb3ZlKCksIDc1MCk7XG4gICAgfSwgdGhpcy50aW1lb3V0VmFsdWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLyoqXG4gKiBDb250csO0bGV1ciBTdGltdWx1cyA6IFN3aXRjaGVyIGRlIHRhaWxsZSBkZSBwb2xpY2VcbiAqXG4gKiAtIDMgw6l0YXRzIDogQS0gKHBldGl0KSwgQSAobm9ybWFsKSwgQSsgKGdyYW5kKVxuICogLSBTYXV2ZWdhcmRlIGRhbnMgbG9jYWxTdG9yYWdlXG4gKiAtIEFjY2Vzc2liaWxpdMOpIDpcbiAqICAg4oCiIGFyaWEtcHJlc3NlZCBwb3VyIGzigJnDqXRhdCBhY3RpZlxuICogICDigKIgbmF2aWdhdGlvbiBjbGF2aWVyIHBvc3NpYmxlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gWydzbWFsbCcsICdub3JtYWwnLCAnbGFyZ2UnXTtcblxuICBjb25uZWN0KCkge1xuICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RrX2ZvbnRfc2l6ZScpIHx8ICdub3JtYWwnO1xuICAgIHRoaXMuYXBwbHlTaXplKHNhdmVkKTtcbiAgfVxuXG4gIHNldFNtYWxsKCkge1xuICAgIHRoaXMuYXBwbHlTaXplKCdzbWFsbCcpO1xuICB9XG5cbiAgc2V0Tm9ybWFsKCkge1xuICAgIHRoaXMuYXBwbHlTaXplKCdub3JtYWwnKTtcbiAgfVxuXG4gIHNldExhcmdlKCkge1xuICAgIHRoaXMuYXBwbHlTaXplKCdsYXJnZScpO1xuICB9XG5cbiAgYXBwbHlTaXplKHNpemUpIHtcbiAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICBodG1sLnN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9ICcxOHB4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBodG1sLnN0eWxlLmZvbnRTaXplID0gJzE2cHgnO1xuICAgIH1cblxuICAgIC8vIFNhdXZlZ2FyZGUgcHLDqWbDqXJlbmNlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RrX2ZvbnRfc2l6ZScsIHNpemUpO1xuXG4gICAgLy8gTUFKIEFSSUEgZGVzIGJvdXRvbnNcbiAgICB0aGlzLnNtYWxsVGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgc2l6ZSA9PT0gJ3NtYWxsJyk7XG4gICAgdGhpcy5ub3JtYWxUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBzaXplID09PSAnbm9ybWFsJyk7XG4gICAgdGhpcy5sYXJnZVRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHNpemUgPT09ICdsYXJnZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLyoqXG4gKiBDb250csO0bGV1ciBTdGltdWx1cyA6IFNhdXZlZ2FyZGUgYXV0byBkdSBmb3JtdWxhaXJlXG4gKlxuICogLSBTYXV2ZWdhcmRlIGxlcyBkb25uw6llcyBzYWlzaWVzIGRhbnMgbG9jYWxTdG9yYWdlXG4gKiAtIFJlc3RhdXJlIMOgIGxhIHJlY29ubmV4aW9uXG4gKiAtIFV0aWxpc2UgdW5lIGNsw6kgbG9jYWxlIHNww6ljaWZpcXVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB2YWx1ZXMgPSB7IGtleTogU3RyaW5nIH07XG5cbiAgY29ubmVjdCgpIHtcbiAgICAvLyBSZXN0YXVyZSBzaSBicm91aWxsb24gZXhpc3RhbnRcbiAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5VmFsdWUpO1xuICAgIGlmIChzYXZlZCkge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xuICAgICAgZm9yIChjb25zdCBbbmFtZSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtuYW1lfVwiXWApO1xuICAgICAgICBpZiAoZmllbGQpIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0Jyk7XG4gICAgaW5wdXRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoZWwubmFtZSkgZGF0YVtlbC5uYW1lXSA9IGVsLnZhbHVlO1xuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5VmFsdWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMua2V5VmFsdWUpO1xuICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnRyw7RsZXVyIFN0aW11bHVzIOKAlCBNZW51IGJ1cmdlciBtb2JpbGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLSBPdXZyZS9mZXJtZSBsZSBtZW51IG1vYmlsZSAoX21vYmlsZV9tZW51Lmh0bWwudHdpZylcbi8vIC0gR8OocmUgbOKAmWVmZmV0IGRlIHNsaWRlIGxhdMOpcmFsICsgZmFkZSBkdSBmb25kXG4vLyAtIEZvY3VzIHRyYXAgKyBmZXJtZXR1cmUgdmlhIMOJY2hhcCAvIGNsaWMgZXh0w6lyaWV1clxuLy8gLSBBUklBIGNvbmZvcm1lIChleHBhbmRlZCArIGhpZGRlbilcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbJ21lbnUnLCAncGFuZWwnXTtcblxuICBjb25uZWN0KCkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuZm9jdXNhYmxlU2VsZWN0b3JzID1cbiAgICAgICdhW2hyZWZdLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYSwgaW5wdXQsIHNlbGVjdCwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJztcblxuICAgIC8vIExpYWlzb24gZGVzIGhhbmRsZXJzXG4gICAgdGhpcy5ib3VuZEtleWRvd24gPSB0aGlzLmhhbmRsZUtleWRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvdW5kQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcblxuICAgIGNvbnNvbGUubG9nKCdoZWFkZXItbmF2IGNvbm5lY3TDqSAoU3RpbXVsdXMgYWN0aWYpJyk7XG4gIH1cblxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICB0aGlzLmJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7IC8vIGJvdXRvbiBidXJnZXJcbiAgICB0aGlzLm9wZW4gPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW5NZW51KCk7XG4gIH1cblxuICBvcGVuTWVudSgpIHtcbiAgICBpZiAodGhpcy5vcGVuKSByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZygnT3V2ZXJ0dXJlIGR1IG1lbnUgbW9iaWxlJyk7XG4gICAgY29uc3QgbWVudSA9IHRoaXMubWVudVRhcmdldDtcbiAgICBjb25zdCBwYW5lbCA9IHRoaXMucGFuZWxUYXJnZXQ7XG5cbiAgICAvLyBBZmZpY2hlIGxlIGZvbmQgbm9pciBldCBhbmltZVxuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJywgJ2FuaW1hdGUtZmFkZS1vdXQnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtZmFkZS1pbicpO1xuICAgIG1lbnUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuXG4gICAgLy8gRmFpdCBnbGlzc2VyIGxlIHBhbm5lYXUgYmxhbmNcbiAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2xhdGUteC1mdWxsJyk7XG4gICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgndHJhbnNsYXRlLXgtMCcpO1xuXG4gICAgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgdGhpcy5vcGVuID0gdHJ1ZTtcblxuICAgIC8vIEZvY3VzIHRyYXBcbiAgICB0aGlzLmZvY3VzYWJsZXMgPSBwYW5lbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZm9jdXNhYmxlU2VsZWN0b3JzKTtcbiAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlID0gdGhpcy5mb2N1c2FibGVzWzBdO1xuICAgIHRoaXMubGFzdEZvY3VzYWJsZSA9IHRoaXMuZm9jdXNhYmxlc1t0aGlzLmZvY3VzYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgaWYgKHRoaXMuZmlyc3RGb2N1c2FibGUpIHRoaXMuZmlyc3RGb2N1c2FibGUuZm9jdXMoKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kS2V5ZG93bik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kQ2xpY2tPdXRzaWRlKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICghdGhpcy5vcGVuKSByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZygn8J+UuSBGZXJtZXR1cmUgZHUgbWVudSBtb2JpbGUnKTtcbiAgICBjb25zdCBtZW51ID0gdGhpcy5tZW51VGFyZ2V0O1xuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5wYW5lbFRhcmdldDtcblxuICAgIC8vIEFuaW1hdGlvbiBkZSBzb3J0aWVcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtZmFkZS1pbicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1mYWRlLW91dCcpO1xuICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zbGF0ZS14LWZ1bGwnKTtcbiAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2xhdGUteC0wJyk7XG5cbiAgICAvLyBNYXNxdWFnZSBhcHLDqHMgbGEgdHJhbnNpdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfSwgMzAwKTsgLy8gZHVyw6llIGlkZW50aXF1ZSDDoCBs4oCZYW5pbWF0aW9uIENTU1xuXG4gICAgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRLZXlkb3duKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRDbGlja091dHNpZGUpO1xuXG4gICAgdGhpcy5idXR0b24/LmZvY3VzKCk7XG4gIH1cblxuICBoYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm9wZW4pIHJldHVybjtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgaWYgKCF0aGlzLmZvY3VzYWJsZXMgfHwgdGhpcy5mb2N1c2FibGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5maXJzdEZvY3VzYWJsZSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMubGFzdEZvY3VzYWJsZSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5maXJzdEZvY3VzYWJsZS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wZW4gJiZcbiAgICAgICF0aGlzLnBhbmVsVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICF0aGlzLmJ1dHRvbi5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbJ2lucHV0JywgJ3ByZXZpZXcnXTtcblxuICBjb25uZWN0KCkge1xuICAgIHRoaXMucHJldmlld1RhcmdldC5pbm5lckhUTUwgPSAnJzsgLy8gY2xlYW4gYXUgY2hhcmdlbWVudFxuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuaW5wdXRUYXJnZXQuZmlsZXM7XG5cbiAgICAvLyByZXNldCBwcmV2aWV3XG4gICAgdGhpcy5wcmV2aWV3VGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKCFmaWxlcyB8fCBmaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBBcnJheS5mcm9tKGZpbGVzKS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBpZiAoIWZpbGUudHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc05hbWUgPVxuICAgICAgICAgICdyZWxhdGl2ZSB3LTI0IGgtMjQgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93IGJvcmRlciBib3JkZXItZ3JheS0yMDAnO1xuXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgPGltZyBzcmM9XCIke2UudGFyZ2V0LnJlc3VsdH1cIiBjbGFzcz1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cblxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzcz1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgcC0xIGJnLXJlZC02MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHJvdW5kZWQtYmxcIlxuICAgICAgICAgICAgZGF0YS1hY3Rpb249XCJjbGljay0+aW1hZ2UtcHJldmlldyNyZW1vdmVcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiJHtmaWxlLm5hbWV9XCI+XG4gICAgICAgICAgICDDl1xuICAgICAgICAgIDwvYnV0dG9uPmA7XG5cbiAgICAgICAgdGhpcy5wcmV2aWV3VGFyZ2V0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9O1xuXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZShldmVudCkge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZTtcblxuICAgIC8vIHJlY3LDqWVyIGxhIEZpbGVMaXN0IHNhbnMgbCdpbWFnZSByZXRpcsOpZVxuICAgIGNvbnN0IGR0ID0gbmV3IERhdGFUcmFuc2ZlcigpO1xuXG4gICAgQXJyYXkuZnJvbSh0aGlzLmlucHV0VGFyZ2V0LmZpbGVzKS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBpZiAoZmlsZS5uYW1lICE9PSBuYW1lKSB7XG4gICAgICAgIGR0Lml0ZW1zLmFkZChmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaW5wdXRUYXJnZXQuZmlsZXMgPSBkdC5maWxlcztcblxuICAgIC8vIHJhZnJhw65jaGlyIGxhIHByZXZpZXdcbiAgICB0aGlzLnByZXZpZXcoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qKlxuICogQ29udHLDtGxldXIgU3RpbXVsdXMg4oCUIEF1dG9jb21wbMOpdGlvbiBkZSBsYSBsb2NhbGlzYXRpb24gKEFQSSBCQU4pXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIC0gUHJvcG9zZSBkZXMgdmlsbGVzXG4gKiAtIENvbXBhdGliaWxpdMOpIFN0aW11bHVzIGNvbXBsw6h0ZVxuICogLSBGaXggOiDDqXZpdGUgbGVzIDQwMCBjYXVzw6lzIHBhciBrZXlkb3duIC8gZXZlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbJ2lucHV0JywgJ2xpc3QnXTtcbiAgY29ubmVjdCgpIHtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gLTE7XG4gICAgdGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlID0gdGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5saXN0VGFyZ2V0LnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG4gICAgdGhpcy5saXN0VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuICB9XG4gIC8qKlxuICAgKiBSZWNoZXJjaGUgdmlhIEFQSSDigJQgY29ycmlnw6llIChhbnRpIDQwMCBlcnJvcnMpXG4gICAqL1xuICBhc3luYyBzZWFyY2goZXZlbnQpIHtcbiAgICAvLyBFbXDDqmNoZSBsZXMgYXBwZWxzIGTDqWNsZW5jaMOpcyBwYXIga2V5ZG93blxuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLmlucHV0VGFyZ2V0LnZhbHVlLnRyaW0oKTtcblxuICAgIGlmIChxdWVyeS5sZW5ndGggPCAzKSB7XG4gICAgICB0aGlzLmNsZWFyTGlzdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS1hZHJlc3NlLmRhdGEuZ291di5mci9zZWFyY2gvP3E9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgcXVlcnlcbiAgICAgICAgKX0mbGltaXQ9NiZ0eXBlPW11bmljaXBhbGl0eWBcbiAgICAgICk7XG5cbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQVBJIEFkcmVzc2UgcmVudm9pZSB1bmUgZXJyZXVyIDonLCByZXMuc3RhdHVzKTtcbiAgICAgICAgdGhpcy5jbGVhckxpc3QoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJMaXN0KFt7IHByb3BlcnRpZXM6IHsgbGFiZWw6ICdBdWN1biByw6lzdWx0YXQgKHRhcGV6IGF1IG1vaW5zIDMgbGV0dHJlcyknIH0gfV0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHRoaXMucmVuZGVyTGlzdChkYXRhLmZlYXR1cmVzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBBUEkgQWRyZXNzZSA6JywgZXJyKTtcbiAgICAgIHRoaXMuY2xlYXJMaXN0KCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHw6luw6hyZSBsYSBsaXN0ZSBk4oCZb3B0aW9uc1xuICAgKi9cbiAgcmVuZGVyTGlzdChmZWF0dXJlcykge1xuICAgIHRoaXMuY2xlYXJMaXN0KCk7XG4gICAgaWYgKCFmZWF0dXJlcyB8fCBmZWF0dXJlcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGZlYXR1cmVzLmZvckVhY2goKGYsIGkpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gZi5wcm9wZXJ0aWVzLmxhYmVsO1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICBsaS50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgICAgbGkuY2xhc3NOYW1lID0gJ3B4LTMgcHktMiB0ZXh0LXNtIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLXRhbGVudGVrby1wZWFjaC0yMDAgdHJhbnNpdGlvbic7XG4gICAgICBsaS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG4gICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2lkJywgYG9wdC0ke2l9YCk7XG4gICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcblxuICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdChsYWJlbCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdFRhcmdldC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxpc3RUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgdGhpcy5saXN0VGFyZ2V0LnN0eWxlLmFuaW1hdGlvbiA9ICd0ay1hdXRvY29tcGxldGUtZmFkZS1pbiAwLjE1cyBlYXNlLW91dCc7XG4gICAgdGhpcy5pbnB1dFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlKTtcbiAgfVxuICAvKipcbiAgICogTmF2aWdhdGlvbiBjbGF2aWVyXG4gICAqL1xuICBrZXlkb3duKGV2ZW50KSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmxpc3RUYXJnZXQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9ICh0aGlzLmFjdGl2ZUluZGV4ICsgMSkgJSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0KGl0ZW1zKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gKHRoaXMuYWN0aXZlSW5kZXggLSAxICsgaXRlbXMubGVuZ3RoKSAlIGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQoaXRlbXMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA+PSAwKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpdGVtc1t0aGlzLmFjdGl2ZUluZGV4XS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbW91c2Vkb3duJykpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICB0aGlzLmNsZWFyTGlzdCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEFqb3V0ZSBsZSBzdHlsZSBzdXIgbOKAmW9wdGlvbiBhY3RpdmVcbiAgICovXG4gIGhpZ2hsaWdodChpdGVtcykge1xuICAgIGl0ZW1zLmZvckVhY2goKGxpLCBpKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmUgPSBpID09PSB0aGlzLmFjdGl2ZUluZGV4O1xuICAgICAgbGkuY2xhc3NMaXN0LnRvZ2dsZSgnYmctdGFsZW50ZWtvLXBlYWNoLTIwMCcsIGFjdGl2ZSk7XG4gICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBhY3RpdmUgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuaW5wdXRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBpdGVtc1t0aGlzLmFjdGl2ZUluZGV4XS5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRUYXJnZXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFF1YW5kIG9uIHPDqWxlY3Rpb25uZSB1bmUgc3VnZ2VzdGlvblxuICAgKi9cbiAgc2VsZWN0KGxhYmVsKSB7XG4gICAgdGhpcy5pbnB1dFRhcmdldC52YWx1ZSA9IGxhYmVsO1xuICAgIHRoaXMuY2xlYXJMaXN0KCk7XG4gIH1cblxuICAvKipcbiAgICogRmVybWUgbGUgcGFubmVhdSBzaSBjbGljIGV4dMOpcmlldXJcbiAgICovXG4gIGNsb3NlT25DbGlja091dHNpZGUoZSkge1xuICAgIGlmICghdGhpcy5lbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jbGVhckxpc3QoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBmZXJtZXR1cmUgKyByZXNldFxuICAgKi9cbiAgY2xlYXJMaXN0KCkge1xuICAgIGlmICh0aGlzLmxpc3RUYXJnZXQgJiYgdGhpcy5saXN0VGFyZ2V0LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xuICAgICAgdGhpcy5saXN0VGFyZ2V0LnN0eWxlLmFuaW1hdGlvbiA9ICd0ay1hdXRvY29tcGxldGUtZmFkZS1vdXQgMC4xNXMgZWFzZS1pbic7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3Jlc2V0TGlzdCgpLCAxNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXNldExpc3QoKTtcbiAgICB9XG4gIH1cbiAgX3Jlc2V0TGlzdCgpIHtcbiAgICB0aGlzLmxpc3RUYXJnZXQuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5saXN0VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRoaXMuaW5wdXRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgdGhpcy5pbnB1dFRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKipcbiAqIENvbnRyw7RsZXVyIDogQ29uZmlybWF0aW9uIGR1IG1vdCBkZSBwYXNzZVxuICpcbiAqIC0gVsOpcmlmaWUgZW4gZGlyZWN0IGwnw6lnYWxpdMOpIGRlcyBtb3RzIGRlIHBhc3NlXG4gKiAtIE1lc3NhZ2UgY2xhaXIgKyBpY8O0bmVzIEZvbnRBd2Vzb21lXG4gKiAtIGFyaWEtbGl2ZSArIGFyaWEtaW52YWxpZFxuICogLSBEw6lzYWN0aXZlIGxlIGJvdXRvbiBzdWJtaXQgc2kgbWlzbWF0Y2hcbiAqIC0gU3luY2hyb25pc8OpIGF2ZWMgcGFzc3dvcmRfc3RyZW5ndGggKMOpY291dGUgbOKAmcOpdsOpbmVtZW50KVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gWydvcmlnaW5hbCcsICdjb25maXJtJywgJ2ZlZWRiYWNrJywgJ3N1Ym1pdCddO1xuICBjb25uZWN0KCkge1xuICAgIHRoaXMuZmVlZGJhY2tUYXJnZXQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3N0YXR1cycpO1xuICAgIHRoaXMuZmVlZGJhY2tUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG4gICAgLy8gUGFyIGTDqWZhdXQsIG9uIGTDqXNhY3RpdmUgbGUgYm91dG9uIHRhbnQgcXVlIHJpZW4gbuKAmWVzdCB2YWxpZMOpXG4gICAgaWYgKHRoaXMuaGFzU3VibWl0VGFyZ2V0KSB7XG4gICAgICB0aGlzLnN1Ym1pdFRhcmdldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIC8vIMOJY291dGUgbGVzIMOpdsOpbmVtZW50cyBkdSBjb250cm9sbGVyIHBhc3N3b3JkX3N0cmVuZ3RoXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3N3b3JkLXN0cmVuZ3RoLXVwZGF0ZWQnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5wYXNzd29yZFN0cm9uZyA9IGUuZGV0YWlsLnZhbGlkO1xuICAgICAgdGhpcy5jaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIGNoZWNrKCkge1xuICAgIGNvbnN0IHB3ZCA9IHRoaXMub3JpZ2luYWxUYXJnZXQudmFsdWU7XG4gICAgY29uc3QgY29uZmlybSA9IHRoaXMuY29uZmlybVRhcmdldC52YWx1ZTtcbiAgICAvLyBDaGFtcCB2aWRlIOKGkiByZXNldFxuICAgIGlmICghY29uZmlybSkge1xuICAgICAgdGhpcy5mZWVkYmFja1RhcmdldC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMuY29uZmlybVRhcmdldC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICB0aGlzLmNvbmZpcm1UYXJnZXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICAgIHRoaXMudXBkYXRlU3VibWl0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoID0gcHdkID09PSBjb25maXJtO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdGhpcy5mZWVkYmFja1RhcmdldC5pbm5lckhUTUwgPVxuICAgICAgICAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVjay1jaXJjbGUgdGV4dC1ncmVlbi01MDAgbXItMVwiPjwvaT48c3Bhbj5MZXMgbW90cyBkZSBwYXNzZSBjb3JyZXNwb25kZW50Ljwvc3Bhbj4nO1xuICAgICAgdGhpcy5mZWVkYmFja1RhcmdldC5jbGFzc05hbWUgPSAnZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1ncmVlbi02MDAgdGV4dC14cyBtdC0xJztcbiAgICAgIHRoaXMuY29uZmlybVRhcmdldC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICB0aGlzLmNvbmZpcm1UYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAnZmFsc2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mZWVkYmFja1RhcmdldC5pbm5lckhUTUwgPVxuICAgICAgICAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUteG1hcmsgdGV4dC1yZWQtNTAwIG1yLTFcIj48L2k+PHNwYW4+TGVzIG1vdHMgZGUgcGFzc2UgbmUgY29ycmVzcG9uZGVudCBwYXMuPC9zcGFuPic7XG4gICAgICB0aGlzLmZlZWRiYWNrVGFyZ2V0LmNsYXNzTmFtZSA9ICdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXJlZC02MDAgdGV4dC14cyBtdC0xJztcbiAgICAgIHRoaXMuY29uZmlybVRhcmdldC5zZXRDdXN0b21WYWxpZGl0eSgnTGVzIG1vdHMgZGUgcGFzc2UgbmUgY29ycmVzcG9uZGVudCBwYXMuJyk7XG4gICAgICB0aGlzLmNvbmZpcm1UYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCAndHJ1ZScpO1xuICAgIH1cbiAgICB0aGlzLnBhc3N3b3Jkc01hdGNoID0gbWF0Y2g7XG4gICAgdGhpcy51cGRhdGVTdWJtaXQoKTtcbiAgfVxuICB1cGRhdGVTdWJtaXQoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1N1Ym1pdFRhcmdldCkgcmV0dXJuO1xuICAgIC8vIEJ1dHRvbiBlbmFibGVkIG9ubHkgaWYgOlxuICAgIC8vIC0gcGFzc3dvcmRfc3RyZW5ndGggdmFsaWRlXG4gICAgLy8gLSBwYXNzd29yZF9jb25maXJtIE9LXG4gICAgY29uc3QgY2FuU3VibWl0ID0gdGhpcy5wYXNzd29yZFN0cm9uZyAmJiB0aGlzLnBhc3N3b3Jkc01hdGNoO1xuICAgIHRoaXMuc3VibWl0VGFyZ2V0LmRpc2FibGVkID0gIWNhblN1Ym1pdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qKlxuICogQ29udHLDtGxldXIgU3RpbXVsdXMgOiBWw6lyaWZpY2F0aW9uIGRlIGxhIGZvcmNlIGR1IG1vdCBkZSBwYXNzZVxuICpcbiAqIC0gUsOoZ2xlcyBBTlNTSSA6IGxvbmd1ZXVyLCBtYWosIG1pbiwgY2hpZmZyZSwgc3DDqWNpYWxcbiAqIC0gRmVlZGJhY2sgbGl2ZSAobGlzdGUgZGVzIGNyaXTDqHJlcylcbiAqIC0gYXJpYS1pbnZhbGlkICsgYXJpYS1saXZlXG4gKiAtIENvbW11bmlxdWUgYXZlYyBwYXNzd29yZC1jb25maXJtIHBvdXIgZMOpc2FjdGl2ZXIgbGUgc3VibWl0XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbJ2lucHV0JywgJ2ZlZWRiYWNrJywgJ3N1Ym1pdCddO1xuICBjb25uZWN0KCkge1xuICAgIC8vID09PSBSw6hnbGVzIEFOU1NJID09PVxuICAgIHRoaXMucnVsZXMgPSBbXG4gICAgICB7IHJlZ2V4OiAvLnsxMCx9LywgdGV4dDogJ0F1IG1vaW5zIDEwIGNhcmFjdMOocmVzJyB9LFxuICAgICAgeyByZWdleDogL1tBLVpdLywgdGV4dDogJ0F1IG1vaW5zIHVuZSBtYWp1c2N1bGUnIH0sXG4gICAgICB7IHJlZ2V4OiAvW2Etel0vLCB0ZXh0OiAnQXUgbW9pbnMgdW5lIG1pbnVzY3VsZScgfSxcbiAgICAgIHsgcmVnZXg6IC9cXGQvLCB0ZXh0OiAnQXUgbW9pbnMgdW4gY2hpZmZyZScgfSxcbiAgICAgIHsgcmVnZXg6IC9bXFxXX10vLCB0ZXh0OiAnQXUgbW9pbnMgdW4gY2FyYWN0w6hyZSBzcMOpY2lhbCcgfSxcbiAgICBdO1xuICAgIC8vID09PSBVTCBkZSBjcml0w6hyZXMgPT09XG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0aGlzLmxpc3QuY2xhc3NOYW1lID0gJ3RleHQteHMgbXQtMiBzcGFjZS15LTEnO1xuICAgIHRoaXMubGlzdC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnc3RhdHVzJyk7XG4gICAgdGhpcy5saXN0LnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlLCBpKSA9PiB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaS5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICAgIGxpLmlubmVySFRNTCA9IHRoaXMucmVuZGVyUnVsZShydWxlLnRleHQsIGZhbHNlKTtcbiAgICAgIGxpLmNsYXNzTmFtZSA9ICdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXJlZC02MDAnO1xuICAgICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICB0aGlzLmZlZWRiYWNrVGFyZ2V0LnJlcGxhY2VDaGlsZHJlbih0aGlzLmxpc3QpO1xuICB9XG4gIGNoZWNrKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dFRhcmdldC52YWx1ZTtcbiAgICBsZXQgdmFsaWRDb3VudCA9IDA7XG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlLCBpKSA9PiB7XG4gICAgICBjb25zdCBsaSA9IHRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD1cIiR7aX1cIl1gKTtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IHJ1bGUucmVnZXgudGVzdCh2YWx1ZSk7XG4gICAgICBsaS5pbm5lckhUTUwgPSB0aGlzLnJlbmRlclJ1bGUocnVsZS50ZXh0LCBwYXNzZWQpO1xuICAgICAgbGkuY2xhc3NOYW1lID0gcGFzc2VkXG4gICAgICAgID8gJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtZ3JlZW4tNjAwJ1xuICAgICAgICA6ICdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXJlZC02MDAnO1xuICAgICAgaWYgKHBhc3NlZCkgdmFsaWRDb3VudCsrO1xuICAgIH0pO1xuICAgIGNvbnN0IGFsbFZhbGlkID0gdmFsaWRDb3VudCA9PT0gdGhpcy5ydWxlcy5sZW5ndGg7XG4gICAgLy8gQVJJQVxuICAgIHRoaXMuaW5wdXRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCBhbGxWYWxpZCA/ICdmYWxzZScgOiAndHJ1ZScpO1xuICAgIHRoaXMuaW5wdXRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgndmFsaWQtcGFzc3dvcmQnLCBhbGxWYWxpZCk7XG4gICAgLy8gQ29tbXVuaXF1ZSBhdmVjIHBhc3N3b3JkLWNvbmZpcm0gc2kgcHLDqXNlbnRcbiAgICBpZiAodGhpcy5lbGVtZW50LmRhdGFzZXQuaGFzQ29uZmlybSA9PT0gJ3RydWUnKSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgncGFzc3dvcmQtc3RyZW5ndGgtdXBkYXRlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7IHZhbGlkOiBhbGxWYWxpZCB9LFxuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuICB9XG4gIHJlbmRlclJ1bGUodGV4dCwgcGFzc2VkKSB7XG4gICAgcmV0dXJuIHBhc3NlZFxuICAgICAgPyBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVjay1jaXJjbGUgdGV4dC1ncmVlbi01MDAgbXItMVwiPjwvaT48c3Bhbj4ke3RleHR9PC9zcGFuPmBcbiAgICAgIDogYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLXhtYXJrIHRleHQtcmVkLTUwMCBtci0xXCI+PC9pPjxzcGFuPiR7dGV4dH08L3NwYW4+YDtcbiAgfVxufVxuIiwiLy8gYXNzZXRzL2NvbnRyb2xsZXJzL3JhdGluZ19maWx0ZXJfY29udHJvbGxlci5qc1xuXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLyoqXG4gKiBDb250csO0bGV1ciBTdGltdWx1cyDigJQgU8OpbGVjdGV1ciBk4oCZw6l2YWx1YXRpb24gKOKYhSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGVybWV0IMOgIGzigJl1dGlsaXNhdGV1ciBkZSBjaG9pc2lyIHVuIG5pdmVhdSBk4oCZw6l0b2lsZXMgKDEgw6AgNSlcbiAqIGRhbnMgbGUgcGFubmVhdSBkZSBmaWx0cmVzIGRlIHJlY2hlcmNoZS5cbiAqXG4gKiBGb25jdGlvbm5hbGl0w6lzIDpcbiAqIC0gNSDDqXRvaWxlcyBpbnRlcmFjdGl2ZXMgYmFzw6llcyBzdXIgU1ZHXG4gKiAtIE1pc2Ugw6Agam91ciBk4oCZdW4gPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmF0aW5nXCI+XG4gKiAtIFNvdW1pc3Npb24gYXV0b21hdGlxdWUgZHUgZm9ybXVsYWlyZSBkZSBmaWx0cmVzXG4gKiAtIEFjY2Vzc2liaWxpdMOpIGNvbXBsw6h0ZSA6IGNsYXZpZXIgKyBhcmlhLWxhYmVsICsgYXJpYS1wcmVzc2VkXG4gKlxuICogQ29tcGF0aWJsZSBhdmVjIDogdGVtcGxhdGVzL3NlYXJjaC9pbmRleC5odG1sLnR3aWdcbiAqIFV0aWxpc8OpIGNvbmpvaW50ZW1lbnQgYXZlYyA6IGZpbHRlci1wYW5lbF9jb250cm9sbGVyLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gWydpbnB1dCcsICdzdGFyJywgJ2Zvcm0nXTtcblxuICBjb25uZWN0KCkge1xuICAgIC8vIEluaXRpYWxpc2UgbGEgdmFsZXVyIChwYXIgZMOpZmF1dCAwKSBkZXB1aXMgbGUgY2hhbXAgY2FjaMOpXG4gICAgdGhpcy52YWx1ZSA9IHBhcnNlSW50KHRoaXMuaW5wdXRUYXJnZXQudmFsdWUgfHwgMCwgMTApO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG4gIC8qKlxuICAgKiBTw6lsZWN0aW9ubmUgdW5lIG5vdGUgYXUgY2xpYyAob3Ugw6AgbGEgdG91Y2hlIEVzcGFjZS9FbnRyw6llKS5cbiAgICogUGVybWV0IGF1c3NpIGRlIGTDqXPDqWxlY3Rpb25uZXIgbGEgbm90ZSBzaSBvbiByZWNsaXF1ZSBkZXNzdXMuXG4gICAqL1xuICBzZWxlY3QoZXZlbnQpIHtcbiAgICBjb25zdCB2YWwgPSBwYXJzZUludChldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmFsdWUsIDEwKTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSA9PT0gdmFsID8gMCA6IHZhbDsgLy8gdG9nZ2xlIHNpIG9uIHJlY2xpcXVlXG4gICAgdGhpcy5pbnB1dFRhcmdldC52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICAvLyBTb3VtaXNzaW9uIGF1dG9tYXRpcXVlIGR1IGZvcm11bGFpcmUgcHJpbmNpcGFsIHNpIGRpc3BvbmlibGVcbiAgICBjb25zdCBmb3JtID0gdGhpcy5lbGVtZW50LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICBpZiAoZm9ybSkgZm9ybS5yZXF1ZXN0U3VibWl0KCk7XG4gIH1cbiAgLyoqXG4gICAqIFN1cnZvbCBzb3VyaXMgOiBtZXQgZW4gc3VyYnJpbGxhbmNlIHRlbXBvcmFpcmVtZW50XG4gICAqL1xuICBoaWdobGlnaHQoZXZlbnQpIHtcbiAgICBjb25zdCB2YWwgPSBwYXJzZUludChldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmFsdWUsIDEwKTtcbiAgICB0aGlzLnVwZGF0ZVN0YXJzKHZhbCk7XG4gIH1cblxuICAvKipcbiAgICogUXVhbmQgb24gc29ydCBkdSBzdXJ2b2wgOiByZXN0YXVyZSBsYSB2YWxldXIgYWN0dWVsbGVcbiAgICovXG4gIGNsZWFySGlnaGxpZ2h0KCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJhZnJhw65jaGl0IGzigJnDqXRhdCB2aXN1ZWwgY29tcGxldCBzZWxvbiBsYSB2YWxldXIgYWN0aXZlXG4gICAqL1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMudXBkYXRlU3RhcnModGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0IMOgIGpvdXIgbOKAmWFmZmljaGFnZSAoY291bGV1ciArIMOpdGF0IEFSSUEpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhY3RpdmVWYWx1ZVxuICAgKi9cbiAgdXBkYXRlU3RhcnMoYWN0aXZlVmFsdWUpIHtcbiAgICB0aGlzLnN0YXJUYXJnZXRzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICBjb25zdCBmaWxsZWQgPSBpICsgMSA8PSBhY3RpdmVWYWx1ZTtcblxuICAgICAgLy8gR2VzdGlvbiBkZXMgY2xhc3NlcyBUYWlsd2luZFxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgndGV4dC10YWxlbnRla28tb3JhbmdlLTUwMCcsIGZpbGxlZCk7XG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCd0ZXh0LWdyYXktMzAwJywgIWZpbGxlZCk7XG5cbiAgICAgIC8vIEFjY2Vzc2liaWxpdMOpIDogaW5kaXF1ZXIgdmlzdWVsbGVtZW50IGV0IHZvY2FsZW1lbnQgbOKAmcOpdGF0XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIGZpbGxlZCk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGAke2kgKyAxfSDDqXRvaWxlJHtpID4gMCA/ICdzJyA6ICcnfWApO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbJ2NvbnRhaW5lciddO1xuICBzY3JvbGxMZWZ0KCkge1xuICAgIGlmICh0aGlzLmhhc0NvbnRhaW5lclRhcmdldCkge1xuICAgICAgdGhpcy5jb250YWluZXJUYXJnZXQuc2Nyb2xsQnkoeyBsZWZ0OiAtMjUwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfVxuICB9XG4gIHNjcm9sbFJpZ2h0KCkge1xuICAgIGlmICh0aGlzLmhhc0NvbnRhaW5lclRhcmdldCkge1xuICAgICAgdGhpcy5jb250YWluZXJUYXJnZXQuc2Nyb2xsQnkoeyBsZWZ0OiAyNTAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjb25zb2xlIiwibG9nIiwiQXBwbGljYXRpb24iLCJ3aW5kb3ciLCJhcHBsaWNhdGlvbiIsInN0YXJ0IiwiSGVhZGVyTmF2Q29udHJvbGxlciIsIkN1c3RvbVNlbGVjdENvbnRyb2xsZXIiLCJEYXJrTW9kZUNvbnRyb2xsZXIiLCJGYXZvcml0ZVRvZ2dsZUNvbnRyb2xsZXIiLCJGaWx0ZXJQYW5lbENvbnRyb2xsZXIiLCJGbGFzaENvbnRyb2xsZXIiLCJGb250U2l6ZUNvbnRyb2xsZXIiLCJGb3JtQXV0b3NhdmVDb250cm9sbGVyIiwiTG9jYXRpb25BdXRvY29tcGxldGVDb250cm9sbGVyIiwiUmF0aW5nRmlsdGVyQ29udHJvbGxlciIsIlBhc3N3b3JkQ29uZmlybUNvbnRyb2xsZXIiLCJQYXNzd29yZFN0cmVuZ3RoQ29udHJvbGxlciIsIlNjcm9sbE5hdkNvbnRyb2xsZXIiLCJJbWFnZVByZXZpZXdDb250cm9sbGVyIiwicmVnaXN0ZXIiLCJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJvcGVuIiwiX2JvdW5kQ2xpY2tPdXRzaWRlIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiYmluZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVZpc2liaWxpdHkiLCJzZWxlY3RPcHRpb24iLCJzZWxlY3RlZFZhbHVlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RlZExhYmVsIiwidGV4dENvbnRlbnQiLCJ0cmltIiwiaW5wdXRUYXJnZXQiLCJsYWJlbFRhcmdldCIsImNsb3NlIiwiaGFuZGxlS2V5ZG93biIsImluY2x1ZGVzIiwiZmlyc3RPcHRpb24iLCJvcHRpb25UYXJnZXRzIiwiZm9jdXMiLCJoYW5kbGVPcHRpb25LZXlkb3duIiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsIm5leHQiLCJwcmV2IiwibGVuZ3RoIiwiYnV0dG9uVGFyZ2V0IiwiZWxlbWVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwibGlzdFRhcmdldCIsImNsYXNzTGlzdCIsInNldEF0dHJpYnV0ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImRlZmF1bHQiLCJzYXZlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmVmZXJzRGFyayIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZW5hYmxlZCIsInNldE1vZGUiLCJpc0RhcmsiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGQiLCJzZXRJdGVtIiwicmVtb3ZlIiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiX3R5cGVvZiIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiX3NldFByb3RvdHlwZU9mIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJpc0ZhdiIsImZpbGxlZFRhcmdldCIsImFwcGx5U3RhdGUiLCJfdG9nZ2xlIiwiX2NhbGxlZSIsImxpc3RpbmdJZCIsIndhc0Zhdm9yaXRlIiwicmVzcG9uc2UiLCJkYXRhIiwiX3QiLCJfY29udGV4dCIsImxpc3RpbmdJZFZhbHVlIiwiZXJyb3IiLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImlzRmF2b3JpdGUiLCJhbGVydCIsIl94IiwiZW1wdHlUYXJnZXQiLCJfdGhpcyIsInRvZ2dsZUJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXNhYmxlU2VsZWN0b3JzIiwiZmlyc3RGb2N1c2FibGUiLCJsYXN0Rm9jdXNhYmxlIiwidHJpZ2dlckJ1dHRvbiIsImlzT3BlbiIsInRyYXBGb2N1cyIsInBhbmVsVGFyZ2V0Iiwic3RhdGUiLCJvdmVybGF5VGFyZ2V0IiwiYm9keSIsImZvY3VzYWJsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RoaXMyIiwic2V0VGltZW91dCIsImZpcnN0IiwibGFzdCIsInNoaWZ0S2V5IiwiYWN0aXZlRWxlbWVudCIsInRpbWVvdXRWYWx1ZSIsInRpbWVvdXQiLCJ0eXBlIiwiYXBwbHlTaXplIiwic2V0U21hbGwiLCJzZXROb3JtYWwiLCJzZXRMYXJnZSIsInNpemUiLCJodG1sIiwic3R5bGUiLCJmb250U2l6ZSIsInNtYWxsVGFyZ2V0Iiwibm9ybWFsVGFyZ2V0IiwibGFyZ2VUYXJnZXQiLCJrZXlWYWx1ZSIsIkpTT04iLCJwYXJzZSIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsIl9zbGljZWRUb0FycmF5IiwibmFtZSIsImZpZWxkIiwicXVlcnlTZWxlY3RvciIsInNhdmUiLCJpbnB1dHMiLCJmb3JFYWNoIiwiZWwiLCJzdHJpbmdpZnkiLCJjbGVhciIsInJlbW92ZUl0ZW0iLCJib3VuZEtleWRvd24iLCJib3VuZENsaWNrT3V0c2lkZSIsImJ1dHRvbiIsIm9wZW5NZW51IiwiX3RoaXMkYnV0dG9uIiwibWVudSIsIm1lbnVUYXJnZXQiLCJwYW5lbCIsInJlbW92ZUF0dHJpYnV0ZSIsIl90aGlzJGJ1dHRvbjIiLCJfdGhpcyRidXR0b24zIiwicHJldmlld1RhcmdldCIsImlubmVySFRNTCIsInByZXZpZXciLCJmaWxlcyIsIkFycmF5IiwiZnJvbSIsImZpbGUiLCJzdGFydHNXaXRoIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJyZXN1bHQiLCJhcHBlbmRDaGlsZCIsInJlYWRBc0RhdGFVUkwiLCJkdCIsIkRhdGFUcmFuc2ZlciIsIml0ZW1zIiwiYWN0aXZlSW5kZXgiLCJjbG9zZU9uQ2xpY2tPdXRzaWRlIiwiX3NlYXJjaCIsInF1ZXJ5IiwicmVzIiwiS2V5Ym9hcmRFdmVudCIsImNsZWFyTGlzdCIsImVuY29kZVVSSUNvbXBvbmVudCIsIndhcm4iLCJyZW5kZXJMaXN0IiwicHJvcGVydGllcyIsImxhYmVsIiwiZmVhdHVyZXMiLCJzZWFyY2giLCJsaSIsInNlbGVjdCIsImFuaW1hdGlvbiIsImtleWRvd24iLCJoaWdobGlnaHQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJhY3RpdmUiLCJpZCIsIl90aGlzMyIsImNoaWxkRWxlbWVudENvdW50IiwiX3Jlc2V0TGlzdCIsImZlZWRiYWNrVGFyZ2V0IiwiaGFzU3VibWl0VGFyZ2V0Iiwic3VibWl0VGFyZ2V0IiwiZGlzYWJsZWQiLCJwYXNzd29yZFN0cm9uZyIsImRldGFpbCIsInZhbGlkIiwiY2hlY2siLCJwd2QiLCJvcmlnaW5hbFRhcmdldCIsImNvbmZpcm0iLCJjb25maXJtVGFyZ2V0Iiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJ1cGRhdGVTdWJtaXQiLCJtYXRjaCIsInBhc3N3b3Jkc01hdGNoIiwiY2FuU3VibWl0IiwicnVsZXMiLCJyZWdleCIsInRleHQiLCJsaXN0IiwicnVsZSIsImluZGV4IiwicmVuZGVyUnVsZSIsInJlcGxhY2VDaGlsZHJlbiIsInZhbGlkQ291bnQiLCJwYXNzZWQiLCJ0ZXN0IiwiYWxsVmFsaWQiLCJoYXNDb25maXJtIiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwicGFyc2VJbnQiLCJyZWZyZXNoIiwidmFsIiwiZm9ybSIsImNsb3Nlc3QiLCJyZXF1ZXN0U3VibWl0IiwidXBkYXRlU3RhcnMiLCJjbGVhckhpZ2hsaWdodCIsImFjdGl2ZVZhbHVlIiwic3RhclRhcmdldHMiLCJmaWxsZWQiLCJzY3JvbGxMZWZ0IiwiaGFzQ29udGFpbmVyVGFyZ2V0IiwiY29udGFpbmVyVGFyZ2V0Iiwic2Nyb2xsQnkiLCJsZWZ0IiwiYmVoYXZpb3IiLCJzY3JvbGxSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=