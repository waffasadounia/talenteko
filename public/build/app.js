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
console.log('⚡ Stimulus initialisé (mode ESM strict, enregistrement manuel)');

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
 * - Respecte prefers-color-scheme du système
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
 * Contrôleur favoris (toggle)
 * - Cœur vide ↔ Cœur plein
 * - Maj les attributs ARIA pour l’accessibilité
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
      // Si le bouton contient déjà un état, on le respecte
      if (this.filledTarget.classList.contains('hidden')) {
        this.setState(false); // pas favori
      } else {
        this.setState(true); // déjà favori
      }
    }
  }, {
    key: "toggle",
    value: function toggle(event) {
      event.preventDefault();
      var isFav = this.emptyTarget.classList.contains('hidden');
      this.setState(!isFav);
    }
  }, {
    key: "setState",
    value: function setState(isFav) {
      if (isFav) {
        this.showFilled();
        this.element.setAttribute('aria-label', 'Retirer des favoris');
        this.element.setAttribute('aria-pressed', 'true');
      } else {
        this.showEmpty();
        this.element.setAttribute('aria-label', 'Ajouter aux favoris');
        this.element.setAttribute('aria-pressed', 'false');
      }
    }
  }, {
    key: "showEmpty",
    value: function showEmpty() {
      this.emptyTarget.classList.remove('hidden');
      this.filledTarget.classList.add('hidden');
    }
  }, {
    key: "showFilled",
    value: function showFilled() {
      this.emptyTarget.classList.add('hidden');
      this.filledTarget.classList.remove('hidden');
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBQSxhQUNwQixDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9hcHAuY3NzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvY3VzdG9tX3NlbGVjdF9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9kYXJrX21vZGVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvZmF2b3JpdGVfdG9nZ2xlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZpbHRlcl9wYW5lbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9mbGFzaF9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9mb250X3NpemVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvZm9ybV9hdXRvc2F2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWFkZXJfbmF2X2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2ltYWdlX3ByZXZpZXdfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvbG9jYXRpb25fYXV0b2NvbXBsZXRlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3Bhc3N3b3JkX2NvbmZpcm1fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvcGFzc3dvcmRfc3RyZW5ndGhfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvcmF0aW5nX2ZpbHRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9zY3JvbGxfbmF2X2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUG9pbnQgZCdlbnRyw6llIEpTIOKAlCBUYWxlbnTDiWvDtFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLSBDaGFyZ2UgU3RpbXVsdXMgJiBUdXJibyAoY29uZmlnIFN5bWZvbnkgRW5jb3JlKVxuLy8gLSBJbXBvcnRlIFRhaWx3aW5kQ1NTIHZpYSBhcHAuY3NzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCAnLi9hcHAuY3NzJzsgLy8gVGFpbHdpbmQgQ1NTXG5pbXBvcnQgJy4vYm9vdHN0cmFwLmpzJzsgLy8gU3RpbXVsdXMvVHVyYm8gKyBjb25maWdcbi8qIGdsb2JhbCBwcm9jZXNzICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc29sZS5sb2coJ1RhbGVudMOJa8O0IOKAlCBhc3NldHMvYXBwLmpzIGNoYXJnw6kgYXZlYyBzdWNjw6hzJyk7XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJvb3RzdHJhcCBKUyDigJQgU3RpbXVsdXMgKFRhbGVudMOJa8O0IDIwMjUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENvbmZpZ3VyYXRpb24gbWFudWVsbGUgZGUgU3RpbXVsdXMgcG91ciBXZWJwYWNrIEVuY29yZSA1Lnhcbi8vIE1vZGUgRVNNIHN0cmljdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLy8gLS0tIEluaXRpYWxpc2F0aW9uIGRlIFN0aW11bHVzIC0tLVxud2luZG93LmFwcGxpY2F0aW9uID0gQXBwbGljYXRpb24uc3RhcnQoKTtcbmNvbnNvbGUubG9nKCfimqEgU3RpbXVsdXMgaW5pdGlhbGlzw6kgKG1vZGUgRVNNIHN0cmljdCwgZW5yZWdpc3RyZW1lbnQgbWFudWVsKScpO1xuXG4vLyA9PT0gSW1wb3J0IG1hbnVlbCBkZSB0b3VzIGxlcyBjb250csO0bGV1cnMgPT09XG5pbXBvcnQgSGVhZGVyTmF2Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2hlYWRlcl9uYXZfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgQ3VzdG9tU2VsZWN0Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2N1c3RvbV9zZWxlY3RfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgRGFya01vZGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZGFya19tb2RlX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IEZhdm9yaXRlVG9nZ2xlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2Zhdm9yaXRlX3RvZ2dsZV9jb250cm9sbGVyLmpzJztcbmltcG9ydCBGaWx0ZXJQYW5lbENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9maWx0ZXJfcGFuZWxfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgRmxhc2hDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZmxhc2hfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgRm9udFNpemVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZm9udF9zaXplX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IEZvcm1BdXRvc2F2ZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9mb3JtX2F1dG9zYXZlX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IExvY2F0aW9uQXV0b2NvbXBsZXRlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2xvY2F0aW9uX2F1dG9jb21wbGV0ZV9jb250cm9sbGVyLmpzJztcbmltcG9ydCBSYXRpbmdGaWx0ZXJDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvcmF0aW5nX2ZpbHRlcl9jb250cm9sbGVyLmpzJztcbmltcG9ydCBQYXNzd29yZENvbmZpcm1Db250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvcGFzc3dvcmRfY29uZmlybV9jb250cm9sbGVyLmpzJztcbmltcG9ydCBQYXNzd29yZFN0cmVuZ3RoQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3Bhc3N3b3JkX3N0cmVuZ3RoX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFNjcm9sbE5hdkNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9zY3JvbGxfbmF2X2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IEltYWdlUHJldmlld0NvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9pbWFnZV9wcmV2aWV3X2NvbnRyb2xsZXIuanMnO1xuXG4vLyAtLS0gRW5yZWdpc3RyZW1lbnQgZ2xvYmFsIFN0aW11bHVzIC0tLVxud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdoZWFkZXItbmF2JywgSGVhZGVyTmF2Q29udHJvbGxlcik7XG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ2N1c3RvbS1zZWxlY3QnLCBDdXN0b21TZWxlY3RDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3RlcignZGFyay1tb2RlJywgRGFya01vZGVDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3RlcignZmF2b3JpdGUtdG9nZ2xlJywgRmF2b3JpdGVUb2dnbGVDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3RlcignZmlsdGVyLXBhbmVsJywgRmlsdGVyUGFuZWxDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3RlcignZmxhc2gnLCBGbGFzaENvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdmb250LXNpemUnLCBGb250U2l6ZUNvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdmb3JtLWF1dG9zYXZlJywgRm9ybUF1dG9zYXZlQ29udHJvbGxlcik7XG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ2xvY2F0aW9uLWF1dG9jb21wbGV0ZScsIExvY2F0aW9uQXV0b2NvbXBsZXRlQ29udHJvbGxlcik7XG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ3JhdGluZy1maWx0ZXInLCBSYXRpbmdGaWx0ZXJDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3RlcigncGFzc3dvcmQtY29uZmlybScsIFBhc3N3b3JkQ29uZmlybUNvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdwYXNzd29yZC1zdHJlbmd0aCcsIFBhc3N3b3JkU3RyZW5ndGhDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3Rlcignc2Nyb2xsLW5hdicsIFNjcm9sbE5hdkNvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdpbWFnZS1wcmV2aWV3JywgSW1hZ2VQcmV2aWV3Q29udHJvbGxlcik7XG5cbi8vIC0tLSBMb2cgZGUgdsOpcmlmaWNhdGlvbiAodXRpbGUgZW4gZGV2KSAtLS1cbmNvbnNvbGUubG9nKCdDb250csO0bGV1cnMgU3RpbXVsdXMgZW5yZWdpc3Ryw6lzIDonKTtcbmNvbnNvbGUubG9nKFtcbiAgJ2hlYWRlci1uYXYnLFxuICAnY3VzdG9tLXNlbGVjdCcsXG4gICdkYXJrLW1vZGUnLFxuICAnZmF2b3JpdGUtdG9nZ2xlJyxcbiAgJ2ZpbHRlci1wYW5lbCcsXG4gICdmbGFzaCcsXG4gICdmb250LXNpemUnLFxuICAnZm9ybS1hdXRvc2F2ZScsXG4gICdsb2NhdGlvbi1hdXRvY29tcGxldGUnLFxuICAncmF0aW5nLWZpbHRlcicsXG4gICdwYXNzd29yZC1jb25maXJtJyxcbiAgJ3Bhc3N3b3JkLXN0cmVuZ3RoJyxcbiAgJ3Njcm9sbC1uYXYnLFxuICAnaW1hZ2UtcHJldmlldycsXG5dKTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udHLDtGxldXIgU3RpbXVsdXMg4oCUIEN1c3RvbSBTZWxlY3Rcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gT2JqZWN0aWYgOiByZW1wbGFjZXIgdW4gPHNlbGVjdD4gbmF0aWYgcGFyIHVuIGNvbXBvc2FudFxuLy8gYWNjZXNzaWJsZSBldCBjb21wYXRpYmxlIGNsYXZpZXIgKyBBUklBLlxuLy8gVXRpbGlzw6kgcG91ciBsZSBmaWx0cmUg4oCcRGF0ZSBkZSBwdWJsaWNhdGlvbuKAnS5cbi8vIEZvbmN0aW9ubmFsaXTDqXMgOlxuLy8gLSBPdXZlcnR1cmUvZmVybWV0dXJlIGR1IG1lbnUgdmlhIGNsaWMgb3UgY2xhdmllclxuLy8gLSBTw6lsZWN0aW9uIGTigJl1bmUgb3B0aW9uIChjbGljIG91IEVudGVyKVxuLy8gLSBNaXNlIMOgIGpvdXIgZHUgbGFiZWwgKyBpbnB1dCBjYWNow6lcbi8vIC0gRmVybWV0dXJlIHNpIGNsaWMgw6AgbOKAmWV4dMOpcmlldXIgb3UgdG91Y2hlIMOJY2hhcFxuLy8gLSBTb3VtaXNzaW9uIGF1dG9tYXRpcXVlIGR1IGZvcm11bGFpcmUgcGFyZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gWydidXR0b24nLCAnbGlzdCcsICdsYWJlbCcsICdpbnB1dCcsICdvcHRpb24nXTtcblxuICBjb25uZWN0KCkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuX2JvdW5kQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2JvdW5kQ2xpY2tPdXRzaWRlKTtcbiAgICBjb25zb2xlLmxvZygnY3VzdG9tX3NlbGVjdCBjb25uZWN0w6knKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9ib3VuZENsaWNrT3V0c2lkZSk7XG4gIH1cbiAgLy8gT3V2ZXJ0dXJlIC8gZmVybWV0dXJlIGR1IG1lbnUgZMOpcm91bGFudFxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgdGhpcy51cGRhdGVWaXNpYmlsaXR5KCk7XG4gIH1cbiAgLy8gc2VsZWN0T3B0aW9uIFNBTlMgYXV0by1zdWJtaXRcbiAgc2VsZWN0T3B0aW9uKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC52YWx1ZTtcbiAgICBjb25zdCBzZWxlY3RlZExhYmVsID0gZXZlbnQuY3VycmVudFRhcmdldC50ZXh0Q29udGVudC50cmltKCk7XG5cbiAgICB0aGlzLmlucHV0VGFyZ2V0LnZhbHVlID0gc2VsZWN0ZWRWYWx1ZTtcbiAgICB0aGlzLmxhYmVsVGFyZ2V0LnRleHRDb250ZW50ID0gc2VsZWN0ZWRMYWJlbDtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cbiAgLy8gR2VzdGlvbiBkdSBjbGF2aWVyIHN1ciBsZSBib3V0b24gcHJpbmNpcGFsXG4gIGhhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoWycgJywgJ0VudGVyJywgJ0Fycm93RG93biddLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVWaXNpYmlsaXR5KCk7XG4gICAgICBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMub3B0aW9uVGFyZ2V0c1swXTtcbiAgICAgIGlmIChmaXJzdE9wdGlvbikgZmlyc3RPcHRpb24uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgLy8gR2VzdGlvbiBkdSBjbGF2aWVyIGRhbnMgbGEgbGlzdGUgZGVzIG9wdGlvbnNcbiAgaGFuZGxlT3B0aW9uS2V5ZG93bihldmVudCkge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMub3B0aW9uVGFyZ2V0cy5pbmRleE9mKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbmV4dCA9IHRoaXMub3B0aW9uVGFyZ2V0c1tjdXJyZW50SW5kZXggKyAxXSB8fCB0aGlzLm9wdGlvblRhcmdldHNbMF07XG4gICAgICBuZXh0LmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHByZXYgPVxuICAgICAgICB0aGlzLm9wdGlvblRhcmdldHNbY3VycmVudEluZGV4IC0gMV0gfHwgdGhpcy5vcHRpb25UYXJnZXRzW3RoaXMub3B0aW9uVGFyZ2V0cy5sZW5ndGggLSAxXTtcbiAgICAgIHByZXYuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyB8fCBldmVudC5rZXkgPT09ICcgJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2VsZWN0T3B0aW9uKGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHRoaXMuYnV0dG9uVGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIC8vIEZlcm1lIGxlIG1lbnUgc2kgY2xpYyDDoCBs4oCZZXh0w6lyaWV1clxuICBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcGVuICYmICF0aGlzLmVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuICAvLyBNYWogbGEgdmlzaWJpbGl0w6kgZXQgbGVzIGF0dHJpYnV0cyBBUklBXG4gIHVwZGF0ZVZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5saXN0VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsICF0aGlzLm9wZW4pO1xuICAgIHRoaXMuYnV0dG9uVGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRoaXMub3Blbik7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHkoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qKlxuICogQ29udHLDtGxldXIgU3RpbXVsdXMgOiBEYXJrIG1vZGUgdG9nZ2xlXG4gKlxuICogLSBBam91dCBjbGFzc2UgLmRhcmsgc3VyIDxodG1sPlxuICogLSBTYXV2ZWdhcmRlIGxhIHByw6lmw6lyZW5jZSBkYW5zIGxvY2FsU3RvcmFnZVxuICogLSBSZXNwZWN0ZSBwcmVmZXJzLWNvbG9yLXNjaGVtZSBkdSBzeXN0w6htZVxuICogLSBBY2Nlc3NpYmlsaXTDqSA6IGFyaWEtcHJlc3NlZCBzdXIgbGUgYm91dG9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIGNvbm5lY3QoKSB7XG4gICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGtfZGFya19tb2RlJyk7XG4gICAgY29uc3QgcHJlZmVyc0RhcmsgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG4gICAgY29uc3QgZW5hYmxlZCA9IHNhdmVkID8gc2F2ZWQgPT09ICd0cnVlJyA6IHByZWZlcnNEYXJrO1xuICAgIHRoaXMuc2V0TW9kZShlbmFibGVkKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBjb25zdCBpc0RhcmsgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrJyk7XG4gICAgdGhpcy5zZXRNb2RlKCFpc0RhcmspO1xuICB9XG5cbiAgc2V0TW9kZShlbmFibGVkKSB7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGtfZGFya19tb2RlJywgJ3RydWUnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGtfZGFya19tb2RlJywgJ2ZhbHNlJyk7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAnZmFsc2UnKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKipcbiAqIENvbnRyw7RsZXVyIGZhdm9yaXMgKHRvZ2dsZSlcbiAqIC0gQ8WTdXIgdmlkZSDihpQgQ8WTdXIgcGxlaW5cbiAqIC0gTWFqIGxlcyBhdHRyaWJ1dHMgQVJJQSBwb3VyIGzigJlhY2Nlc3NpYmlsaXTDqVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdGFyZ2V0cyA9IFsnZW1wdHknLCAnZmlsbGVkJ107XG5cbiAgY29ubmVjdCgpIHtcbiAgICAvLyBTaSBsZSBib3V0b24gY29udGllbnQgZMOpasOgIHVuIMOpdGF0LCBvbiBsZSByZXNwZWN0ZVxuICAgIGlmICh0aGlzLmZpbGxlZFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGZhbHNlKTsgLy8gcGFzIGZhdm9yaVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHRydWUpOyAvLyBkw6lqw6AgZmF2b3JpXG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpc0ZhdiA9IHRoaXMuZW1wdHlUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKTtcbiAgICB0aGlzLnNldFN0YXRlKCFpc0Zhdik7XG4gIH1cblxuICBzZXRTdGF0ZShpc0Zhdikge1xuICAgIGlmIChpc0Zhdikge1xuICAgICAgdGhpcy5zaG93RmlsbGVkKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1JldGlyZXIgZGVzIGZhdm9yaXMnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0VtcHR5KCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0Fqb3V0ZXIgYXV4IGZhdm9yaXMnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICdmYWxzZScpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dFbXB0eSgpIHtcbiAgICB0aGlzLmVtcHR5VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHRoaXMuZmlsbGVkVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9XG5cbiAgc2hvd0ZpbGxlZCgpIHtcbiAgICB0aGlzLmVtcHR5VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHRoaXMuZmlsbGVkVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0aW11bHVzIENvbnRyb2xsZXIg4oCUIEZpbHRlciBQYW5lbCAoVGFsZW50w4lrw7QpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gWydwYW5lbCcsICdvdmVybGF5J107XG5cbiAgY29ubmVjdCgpIHtcbiAgICBjb25zb2xlLmxvZygnIEZpbHRlclBhbmVsQ29udHJvbGxlciBjb25uZWN0w6knKTtcblxuICAgIC8vIFJhY2NvdXJjaXNcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItdG9nZ2xlJyk7XG4gICAgdGhpcy5mb2N1c2FibGVTZWxlY3RvcnMgPVxuICAgICAgJ2FbaHJlZl0sIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhLCBpbnB1dCwgc2VsZWN0LCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknO1xuXG4gICAgdGhpcy5maXJzdEZvY3VzYWJsZSA9IG51bGw7XG4gICAgdGhpcy5sYXN0Rm9jdXNhYmxlID0gbnVsbDtcbiAgICB0aGlzLnRyaWdnZXJCdXR0b24gPSBudWxsO1xuXG4gICAgLy8gR2VzdGlvbiBjbGF2aWVyIChmZXJtZXR1cmUgKyBmb2N1cyB0cmFwKVxuICAgIHRoaXMuaGFuZGxlS2V5ZG93biA9IChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmIHRoaXMuaXNPcGVuKCkpIHRoaXMuY2xvc2UoKTtcbiAgICAgIGlmIChlLmtleSA9PT0gJ1RhYicgJiYgdGhpcy5pc09wZW4oKSkgdGhpcy50cmFwRm9jdXMoZSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIC0tLSBCYXNjdWxlIG91dmVydHVyZSAvIGZlcm1ldHVyZSAtLS1cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJyB0b2dnbGUoKSBleMOpY3V0w6kgIScpO1xuICAgIHRoaXMuaXNPcGVuKCkgPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oZXZlbnQpO1xuICB9XG5cbiAgLy8gLS0tIE91dmVydHVyZSBkdSBwYW5uZWF1IC0tLVxuICBvcGVuKGV2ZW50KSB7XG4gICAgdGhpcy50cmlnZ2VyQnV0dG9uID0gZXZlbnQ/LmN1cnJlbnRUYXJnZXQgfHwgdGhpcy50b2dnbGVCdXR0b247XG5cbiAgICB0aGlzLnBhbmVsVGFyZ2V0LmRhdGFzZXQuc3RhdGUgPSAnb3Blbic7XG4gICAgdGhpcy5vdmVybGF5VGFyZ2V0LmRhdGFzZXQuc3RhdGUgPSAnb3Blbic7XG5cbiAgICAvLyBUcmFuc2l0aW9uIHZpc2libGVcbiAgICB0aGlzLnBhbmVsVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zbGF0ZS14LWZ1bGwnLCAnb3BhY2l0eS0wJyk7XG4gICAgdGhpcy5vdmVybGF5VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XG5cbiAgICAvLyBGZWVkYmFjayB2aXN1ZWwgZHUgYm91dG9uXG4gICAgaWYgKHRoaXMudG9nZ2xlQnV0dG9uKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgdGhpcy50b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgJ2JvcmRlci10YWxlbnRla28tb3JhbmdlLTYwMCcsXG4gICAgICAgICd0ZXh0LXRhbGVudGVrby1vcmFuZ2UtNjAwJyxcbiAgICAgICAgJ3JpbmctMScsXG4gICAgICAgICdyaW5nLXRhbGVudGVrby1vcmFuZ2UtNTAwJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBGb2N1cyBzdXIgcHJlbWllciBjaGFtcFxuICAgIGNvbnN0IGZvY3VzYWJsZXMgPSB0aGlzLnBhbmVsVGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5mb2N1c2FibGVTZWxlY3RvcnMpO1xuICAgIGlmIChmb2N1c2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGUgPSBmb2N1c2FibGVzWzBdO1xuICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlID0gZm9jdXNhYmxlc1tmb2N1c2FibGVzLmxlbmd0aCAtIDFdO1xuICAgICAgdGhpcy5maXJzdEZvY3VzYWJsZS5mb2N1cygpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24pO1xuICAgIGNvbnNvbGUubG9nKCdQYW5uZWF1IG91dmVydCAoZGF0YXNldC5zdGF0ZSA9IG9wZW4pJyk7XG4gIH1cblxuICAvLyAtLS0gRmVybWV0dXJlIGR1IHBhbm5lYXUgLS0tXG4gIGNsb3NlKCkge1xuICAgIHRoaXMucGFuZWxUYXJnZXQuZGF0YXNldC5zdGF0ZSA9ICdjbG9zZWQnO1xuICAgIHRoaXMub3ZlcmxheVRhcmdldC5kYXRhc2V0LnN0YXRlID0gJ2Nsb3NlZCc7XG5cbiAgICB0aGlzLnBhbmVsVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3RyYW5zbGF0ZS14LWZ1bGwnLCAnb3BhY2l0eS0wJyk7XG4gICAgdGhpcy5vdmVybGF5VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ29wYWNpdHktMCcpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duKTtcblxuICAgIC8vIETDqWxhaSBhdmFudCBkaXNwYXJpdGlvbiBkZSBs4oCZb3ZlcmxheVxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vdmVybGF5VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpLCAyMDApO1xuXG4gICAgLy8gUsOpdGFibGlyIHN0eWxlIGR1IGJvdXRvblxuICAgIGlmICh0aGlzLnRvZ2dsZUJ1dHRvbikge1xuICAgICAgdGhpcy50b2dnbGVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICB0aGlzLnRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAnYm9yZGVyLXRhbGVudGVrby1vcmFuZ2UtNjAwJyxcbiAgICAgICAgJ3RleHQtdGFsZW50ZWtvLW9yYW5nZS02MDAnLFxuICAgICAgICAncmluZy0xJyxcbiAgICAgICAgJ3JpbmctdGFsZW50ZWtvLW9yYW5nZS01MDAnXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFJlc3RhdXJlIGZvY3VzXG4gICAgaWYgKHRoaXMudHJpZ2dlckJ1dHRvbikgdGhpcy50cmlnZ2VyQnV0dG9uLmZvY3VzKCk7XG5cbiAgICBjb25zb2xlLmxvZygnUGFubmVhdSBmZXJtw6kgKGRhdGFzZXQuc3RhdGUgPSBjbG9zZWQpJyk7XG4gIH1cblxuICAvLyAtLS0gVsOpcmlmaWUgbOKAmcOpdGF0IC0tLVxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuZWxUYXJnZXQuZGF0YXNldC5zdGF0ZSA9PT0gJ29wZW4nO1xuICB9XG5cbiAgLy8gLS0tIEZvY3VzIHRyYXAgY3ljbGlxdWUgKGFjY2Vzc2liaWxpdMOpKSAtLS1cbiAgdHJhcEZvY3VzKGUpIHtcbiAgICBjb25zdCBmb2N1c2FibGVzID0gdGhpcy5wYW5lbFRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuZm9jdXNhYmxlU2VsZWN0b3JzKTtcbiAgICBpZiAoZm9jdXNhYmxlcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGNvbnN0IGZpcnN0ID0gZm9jdXNhYmxlc1swXTtcbiAgICBjb25zdCBsYXN0ID0gZm9jdXNhYmxlc1tmb2N1c2FibGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3QpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxhc3QuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKCFlLnNoaWZ0S2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3QpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZpcnN0LmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLyoqXG4gKiBDb250cm9sbGVyIDogZmxhc2ggYXV0by1kaXNtaXNzXG4gKlxuICogLSBGYWRlLW91dCBhdXRvbWF0aXF1ZSBkZXMgbWVzc2FnZXMgZmxhc2hcbiAqIC0gU3VwcHJlc3Npb24gcHJvcHJlIGR1IERPTVxuICogLSBBY2Nlc3NpYmlsaXTDqSA6IGFyaWEtbGl2ZT1cInBvbGl0ZVwiLCByb2xlPVwic3RhdHVzXCJcbiAqIC0gQ29tcGF0aWJsZSBUYWlsd2luZCAmIGRhcmstbW9kZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdmFsdWVzID0ge1xuICAgIHRpbWVvdXQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiA1MDAwIH0sIC8vIDUgc2Vjb25kZXNcbiAgfTtcblxuICBjb25uZWN0KCkge1xuICAgIC8vIEFjY2Vzc2liaWxpdMOpXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdzdGF0dXMnKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG5cbiAgICAvLyBBbmltYXRpb24gZmFkZS1vdXRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAnb3BhY2l0eS0wJyxcbiAgICAgICAgJ3RyYW5zbGF0ZS15LTEnLFxuICAgICAgICAndHJhbnNpdGlvbi1hbGwnLFxuICAgICAgICAnZHVyYXRpb24tNzAwJyxcbiAgICAgICAgJ2Vhc2Utb3V0J1xuICAgICAgKTtcblxuICAgICAgLy8gU3VwcHJpbWUgbCfDqWzDqW1lbnQgYXByw6hzIGwnYW5pbWF0aW9uXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5yZW1vdmUoKSwgNzUwKTtcbiAgICB9LCB0aGlzLnRpbWVvdXRWYWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKipcbiAqIENvbnRyw7RsZXVyIFN0aW11bHVzIDogU3dpdGNoZXIgZGUgdGFpbGxlIGRlIHBvbGljZVxuICpcbiAqIC0gMyDDqXRhdHMgOiBBLSAocGV0aXQpLCBBIChub3JtYWwpLCBBKyAoZ3JhbmQpXG4gKiAtIFNhdXZlZ2FyZGUgZGFucyBsb2NhbFN0b3JhZ2VcbiAqIC0gQWNjZXNzaWJpbGl0w6kgOlxuICogICDigKIgYXJpYS1wcmVzc2VkIHBvdXIgbOKAmcOpdGF0IGFjdGlmXG4gKiAgIOKAoiBuYXZpZ2F0aW9uIGNsYXZpZXIgcG9zc2libGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbJ3NtYWxsJywgJ25vcm1hbCcsICdsYXJnZSddO1xuXG4gIGNvbm5lY3QoKSB7XG4gICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGtfZm9udF9zaXplJykgfHwgJ25vcm1hbCc7XG4gICAgdGhpcy5hcHBseVNpemUoc2F2ZWQpO1xuICB9XG5cbiAgc2V0U21hbGwoKSB7XG4gICAgdGhpcy5hcHBseVNpemUoJ3NtYWxsJyk7XG4gIH1cblxuICBzZXROb3JtYWwoKSB7XG4gICAgdGhpcy5hcHBseVNpemUoJ25vcm1hbCcpO1xuICB9XG5cbiAgc2V0TGFyZ2UoKSB7XG4gICAgdGhpcy5hcHBseVNpemUoJ2xhcmdlJyk7XG4gIH1cblxuICBhcHBseVNpemUoc2l6ZSkge1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgc3dpdGNoIChzaXplKSB7XG4gICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgIGh0bWwuc3R5bGUuZm9udFNpemUgPSAnMTRweCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICBodG1sLnN0eWxlLmZvbnRTaXplID0gJzE4cHgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGh0bWwuc3R5bGUuZm9udFNpemUgPSAnMTZweCc7XG4gICAgfVxuXG4gICAgLy8gU2F1dmVnYXJkZSBwcsOpZsOpcmVuY2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGtfZm9udF9zaXplJywgc2l6ZSk7XG5cbiAgICAvLyBNQUogQVJJQSBkZXMgYm91dG9uc1xuICAgIHRoaXMuc21hbGxUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBzaXplID09PSAnc21hbGwnKTtcbiAgICB0aGlzLm5vcm1hbFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHNpemUgPT09ICdub3JtYWwnKTtcbiAgICB0aGlzLmxhcmdlVGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgc2l6ZSA9PT0gJ2xhcmdlJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKipcbiAqIENvbnRyw7RsZXVyIFN0aW11bHVzIDogU2F1dmVnYXJkZSBhdXRvIGR1IGZvcm11bGFpcmVcbiAqXG4gKiAtIFNhdXZlZ2FyZGUgbGVzIGRvbm7DqWVzIHNhaXNpZXMgZGFucyBsb2NhbFN0b3JhZ2VcbiAqIC0gUmVzdGF1cmUgw6AgbGEgcmVjb25uZXhpb25cbiAqIC0gVXRpbGlzZSB1bmUgY2zDqSBsb2NhbGUgc3DDqWNpZmlxdWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHZhbHVlcyA9IHsga2V5OiBTdHJpbmcgfTtcblxuICBjb25uZWN0KCkge1xuICAgIC8vIFJlc3RhdXJlIHNpIGJyb3VpbGxvbiBleGlzdGFudFxuICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXlWYWx1ZSk7XG4gICAgaWYgKHNhdmVkKSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShzYXZlZCk7XG4gICAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke25hbWV9XCJdYCk7XG4gICAgICAgIGlmIChmaWVsZCkgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKTtcbiAgICBpbnB1dHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5uYW1lKSBkYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXlWYWx1ZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5rZXlWYWx1ZSk7XG4gIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udHLDtGxldXIgU3RpbXVsdXMg4oCUIE1lbnUgYnVyZ2VyIG1vYmlsZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAtIE91dnJlL2Zlcm1lIGxlIG1lbnUgbW9iaWxlIChfbW9iaWxlX21lbnUuaHRtbC50d2lnKVxuLy8gLSBHw6hyZSBs4oCZZWZmZXQgZGUgc2xpZGUgbGF0w6lyYWwgKyBmYWRlIGR1IGZvbmRcbi8vIC0gRm9jdXMgdHJhcCArIGZlcm1ldHVyZSB2aWEgw4ljaGFwIC8gY2xpYyBleHTDqXJpZXVyXG4vLyAtIEFSSUEgY29uZm9ybWUgKGV4cGFuZGVkICsgaGlkZGVuKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdGFyZ2V0cyA9IFsnbWVudScsICdwYW5lbCddO1xuXG4gIGNvbm5lY3QoKSB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c2FibGVTZWxlY3RvcnMgPVxuICAgICAgJ2FbaHJlZl0sIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhLCBpbnB1dCwgc2VsZWN0LCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknO1xuXG4gICAgLy8gTGlhaXNvbiBkZXMgaGFuZGxlcnNcbiAgICB0aGlzLmJvdW5kS2V5ZG93biA9IHRoaXMuaGFuZGxlS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYm91bmRDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuXG4gICAgY29uc29sZS5sb2coJ2hlYWRlci1uYXYgY29ubmVjdMOpIChTdGltdWx1cyBhY3RpZiknKTtcbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIHRoaXMuYnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDsgLy8gYm91dG9uIGJ1cmdlclxuICAgIHRoaXMub3BlbiA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3Blbk1lbnUoKTtcbiAgfVxuXG4gIG9wZW5NZW51KCkge1xuICAgIGlmICh0aGlzLm9wZW4pIHJldHVybjtcblxuICAgIGNvbnNvbGUubG9nKCdPdXZlcnR1cmUgZHUgbWVudSBtb2JpbGUnKTtcbiAgICBjb25zdCBtZW51ID0gdGhpcy5tZW51VGFyZ2V0O1xuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5wYW5lbFRhcmdldDtcblxuICAgIC8vIEFmZmljaGUgbGUgZm9uZCBub2lyIGV0IGFuaW1lXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nLCAnYW5pbWF0ZS1mYWRlLW91dCcpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1mYWRlLWluJyk7XG4gICAgbWVudS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG5cbiAgICAvLyBGYWl0IGdsaXNzZXIgbGUgcGFubmVhdSBibGFuY1xuICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zbGF0ZS14LWZ1bGwnKTtcbiAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCd0cmFuc2xhdGUteC0wJyk7XG5cbiAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB0aGlzLm9wZW4gPSB0cnVlO1xuXG4gICAgLy8gRm9jdXMgdHJhcFxuICAgIHRoaXMuZm9jdXNhYmxlcyA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5mb2N1c2FibGVTZWxlY3RvcnMpO1xuICAgIHRoaXMuZmlyc3RGb2N1c2FibGUgPSB0aGlzLmZvY3VzYWJsZXNbMF07XG4gICAgdGhpcy5sYXN0Rm9jdXNhYmxlID0gdGhpcy5mb2N1c2FibGVzW3RoaXMuZm9jdXNhYmxlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAodGhpcy5maXJzdEZvY3VzYWJsZSkgdGhpcy5maXJzdEZvY3VzYWJsZS5mb2N1cygpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRLZXlkb3duKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRDbGlja091dHNpZGUpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLm9wZW4pIHJldHVybjtcblxuICAgIGNvbnNvbGUubG9nKCfwn5S5IEZlcm1ldHVyZSBkdSBtZW51IG1vYmlsZScpO1xuICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1lbnVUYXJnZXQ7XG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLnBhbmVsVGFyZ2V0O1xuXG4gICAgLy8gQW5pbWF0aW9uIGRlIHNvcnRpZVxuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1mYWRlLWluJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWZhZGUtb3V0Jyk7XG4gICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgndHJhbnNsYXRlLXgtZnVsbCcpO1xuICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zbGF0ZS14LTAnKTtcblxuICAgIC8vIE1hc3F1YWdlIGFwcsOocyBsYSB0cmFuc2l0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9LCAzMDApOyAvLyBkdXLDqWUgaWRlbnRpcXVlIMOgIGzigJlhbmltYXRpb24gQ1NTXG5cbiAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEtleWRvd24pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZENsaWNrT3V0c2lkZSk7XG5cbiAgICB0aGlzLmJ1dHRvbj8uZm9jdXMoKTtcbiAgfVxuXG4gIGhhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMub3BlbikgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdUYWInOlxuICAgICAgICBpZiAoIXRoaXMuZm9jdXNhYmxlcyB8fCB0aGlzLmZvY3VzYWJsZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmZpcnN0Rm9jdXNhYmxlKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmxhc3RGb2N1c2FibGUuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmICghZXZlbnQuc2hpZnRLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5sYXN0Rm9jdXNhYmxlKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMub3BlbiAmJlxuICAgICAgIXRoaXMucGFuZWxUYXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgIXRoaXMuYnV0dG9uLmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICApIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdGFyZ2V0cyA9IFsnaW5wdXQnLCAncHJldmlldyddO1xuXG4gIGNvbm5lY3QoKSB7XG4gICAgdGhpcy5wcmV2aWV3VGFyZ2V0LmlubmVySFRNTCA9ICcnOyAvLyBjbGVhbiBhdSBjaGFyZ2VtZW50XG4gIH1cblxuICBwcmV2aWV3KCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5pbnB1dFRhcmdldC5maWxlcztcblxuICAgIC8vIHJlc2V0IHByZXZpZXdcbiAgICB0aGlzLnByZXZpZXdUYXJnZXQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAoIWZpbGVzIHx8IGZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEFycmF5LmZyb20oZmlsZXMpLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGlmICghZmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9XG4gICAgICAgICAgJ3JlbGF0aXZlIHctMjQgaC0yNCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3cgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCc7XG5cbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8aW1nIHNyYz1cIiR7ZS50YXJnZXQucmVzdWx0fVwiIGNsYXNzPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBwLTEgYmctcmVkLTYwMCB0ZXh0LXdoaXRlIHRleHQteHMgcm91bmRlZC1ibFwiXG4gICAgICAgICAgICBkYXRhLWFjdGlvbj1cImNsaWNrLT5pbWFnZS1wcmV2aWV3I3JlbW92ZVwiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCIke2ZpbGUubmFtZX1cIj5cbiAgICAgICAgICAgIMOXXG4gICAgICAgICAgPC9idXR0b24+YDtcblxuICAgICAgICB0aGlzLnByZXZpZXdUYXJnZXQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH07XG5cbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlKGV2ZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYW1lO1xuXG4gICAgLy8gcmVjcsOpZXIgbGEgRmlsZUxpc3Qgc2FucyBsJ2ltYWdlIHJldGlyw6llXG4gICAgY29uc3QgZHQgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XG5cbiAgICBBcnJheS5mcm9tKHRoaXMuaW5wdXRUYXJnZXQuZmlsZXMpLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGlmIChmaWxlLm5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgZHQuaXRlbXMuYWRkKGZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dFRhcmdldC5maWxlcyA9IGR0LmZpbGVzO1xuXG4gICAgLy8gcmFmcmHDrmNoaXIgbGEgcHJldmlld1xuICAgIHRoaXMucHJldmlldygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLyoqXG4gKiBDb250csO0bGV1ciBTdGltdWx1cyDigJQgQXV0b2NvbXBsw6l0aW9uIGRlIGxhIGxvY2FsaXNhdGlvbiAoQVBJIEJBTilcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogLSBQcm9wb3NlIGRlcyB2aWxsZXNcbiAqIC0gQ29tcGF0aWJpbGl0w6kgU3RpbXVsdXMgY29tcGzDqHRlXG4gKiAtIEZpeCA6IMOpdml0ZSBsZXMgNDAwIGNhdXPDqXMgcGFyIGtleWRvd24gLyBldmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdGFyZ2V0cyA9IFsnaW5wdXQnLCAnbGlzdCddO1xuICBjb25uZWN0KCkge1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcbiAgICB0aGlzLmNsb3NlT25DbGlja091dHNpZGUgPSB0aGlzLmNsb3NlT25DbGlja091dHNpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxpc3RUYXJnZXQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpc3Rib3gnKTtcbiAgICB0aGlzLmxpc3RUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG4gIH1cbiAgLyoqXG4gICAqIFJlY2hlcmNoZSB2aWEgQVBJIOKAlCBjb3JyaWfDqWUgKGFudGkgNDAwIGVycm9ycylcbiAgICovXG4gIGFzeW5jIHNlYXJjaChldmVudCkge1xuICAgIC8vIEVtcMOqY2hlIGxlcyBhcHBlbHMgZMOpY2xlbmNow6lzIHBhciBrZXlkb3duXG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuaW5wdXRUYXJnZXQudmFsdWUudHJpbSgpO1xuXG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCA8IDMpIHtcbiAgICAgIHRoaXMuY2xlYXJMaXN0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLWFkcmVzc2UuZGF0YS5nb3V2LmZyL3NlYXJjaC8/cT0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICBxdWVyeVxuICAgICAgICApfSZsaW1pdD02JnR5cGU9bXVuaWNpcGFsaXR5YFxuICAgICAgKTtcblxuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBUEkgQWRyZXNzZSByZW52b2llIHVuZSBlcnJldXIgOicsIHJlcy5zdGF0dXMpO1xuICAgICAgICB0aGlzLmNsZWFyTGlzdCgpO1xuICAgICAgICB0aGlzLnJlbmRlckxpc3QoW3sgcHJvcGVydGllczogeyBsYWJlbDogJ0F1Y3VuIHLDqXN1bHRhdCAodGFwZXogYXUgbW9pbnMgMyBsZXR0cmVzKScgfSB9XSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgdGhpcy5yZW5kZXJMaXN0KGRhdGEuZmVhdHVyZXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIEFQSSBBZHJlc3NlIDonLCBlcnIpO1xuICAgICAgdGhpcy5jbGVhckxpc3QoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEfDqW7DqHJlIGxhIGxpc3RlIGTigJlvcHRpb25zXG4gICAqL1xuICByZW5kZXJMaXN0KGZlYXR1cmVzKSB7XG4gICAgdGhpcy5jbGVhckxpc3QoKTtcbiAgICBpZiAoIWZlYXR1cmVzIHx8IGZlYXR1cmVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgZmVhdHVyZXMuZm9yRWFjaCgoZiwgaSkgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBmLnByb3BlcnRpZXMubGFiZWw7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgIGxpLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgICBsaS5jbGFzc05hbWUgPSAncHgtMyBweS0yIHRleHQtc20gY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctdGFsZW50ZWtvLXBlYWNoLTIwMCB0cmFuc2l0aW9uJztcbiAgICAgIGxpLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcbiAgICAgIGxpLnNldEF0dHJpYnV0ZSgnaWQnLCBgb3B0LSR7aX1gKTtcbiAgICAgIGxpLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuXG4gICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0KGxhYmVsKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0VGFyZ2V0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGlzdFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB0aGlzLmxpc3RUYXJnZXQuc3R5bGUuYW5pbWF0aW9uID0gJ3RrLWF1dG9jb21wbGV0ZS1mYWRlLWluIDAuMTVzIGVhc2Utb3V0JztcbiAgICB0aGlzLmlucHV0VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmNsb3NlT25DbGlja091dHNpZGUpO1xuICB9XG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIGNsYXZpZXJcbiAgICovXG4gIGtleWRvd24oZXZlbnQpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMubGlzdFRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gKHRoaXMuYWN0aXZlSW5kZXggKyAxKSAlIGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQoaXRlbXMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAodGhpcy5hY3RpdmVJbmRleCAtIDEgKyBpdGVtcy5sZW5ndGgpICUgaXRlbXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodChpdGVtcyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID49IDApIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGl0ZW1zW3RoaXMuYWN0aXZlSW5kZXhdLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdtb3VzZWRvd24nKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIHRoaXMuY2xlYXJMaXN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQWpvdXRlIGxlIHN0eWxlIHN1ciBs4oCZb3B0aW9uIGFjdGl2ZVxuICAgKi9cbiAgaGlnaGxpZ2h0KGl0ZW1zKSB7XG4gICAgaXRlbXMuZm9yRWFjaCgobGksIGkpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IGkgPT09IHRoaXMuYWN0aXZlSW5kZXg7XG4gICAgICBsaS5jbGFzc0xpc3QudG9nZ2xlKCdiZy10YWxlbnRla28tcGVhY2gtMjAwJywgYWN0aXZlKTtcbiAgICAgIGxpLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGFjdGl2ZSA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5pbnB1dFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGl0ZW1zW3RoaXMuYWN0aXZlSW5kZXhdLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnB1dFRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUXVhbmQgb24gc8OpbGVjdGlvbm5lIHVuZSBzdWdnZXN0aW9uXG4gICAqL1xuICBzZWxlY3QobGFiZWwpIHtcbiAgICB0aGlzLmlucHV0VGFyZ2V0LnZhbHVlID0gbGFiZWw7XG4gICAgdGhpcy5jbGVhckxpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXJtZSBsZSBwYW5uZWF1IHNpIGNsaWMgZXh0w6lyaWV1clxuICAgKi9cbiAgY2xvc2VPbkNsaWNrT3V0c2lkZShlKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNsZWFyTGlzdCgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQW5pbWF0aW9uIGZlcm1ldHVyZSArIHJlc2V0XG4gICAqL1xuICBjbGVhckxpc3QoKSB7XG4gICAgaWYgKHRoaXMubGlzdFRhcmdldCAmJiB0aGlzLmxpc3RUYXJnZXQuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XG4gICAgICB0aGlzLmxpc3RUYXJnZXQuc3R5bGUuYW5pbWF0aW9uID0gJ3RrLWF1dG9jb21wbGV0ZS1mYWRlLW91dCAwLjE1cyBlYXNlLWluJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fcmVzZXRMaXN0KCksIDE1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc2V0TGlzdCgpO1xuICAgIH1cbiAgfVxuICBfcmVzZXRMaXN0KCkge1xuICAgIHRoaXMubGlzdFRhcmdldC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmxpc3RUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgdGhpcy5pbnB1dFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB0aGlzLmlucHV0VGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qKlxuICogQ29udHLDtGxldXIgOiBDb25maXJtYXRpb24gZHUgbW90IGRlIHBhc3NlXG4gKlxuICogLSBWw6lyaWZpZSBlbiBkaXJlY3QgbCfDqWdhbGl0w6kgZGVzIG1vdHMgZGUgcGFzc2VcbiAqIC0gTWVzc2FnZSBjbGFpciArIGljw7RuZXMgRm9udEF3ZXNvbWVcbiAqIC0gYXJpYS1saXZlICsgYXJpYS1pbnZhbGlkXG4gKiAtIETDqXNhY3RpdmUgbGUgYm91dG9uIHN1Ym1pdCBzaSBtaXNtYXRjaFxuICogLSBTeW5jaHJvbmlzw6kgYXZlYyBwYXNzd29yZF9zdHJlbmd0aCAow6ljb3V0ZSBs4oCZw6l2w6luZW1lbnQpXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbJ29yaWdpbmFsJywgJ2NvbmZpcm0nLCAnZmVlZGJhY2snLCAnc3VibWl0J107XG4gIGNvbm5lY3QoKSB7XG4gICAgdGhpcy5mZWVkYmFja1RhcmdldC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnc3RhdHVzJyk7XG4gICAgdGhpcy5mZWVkYmFja1RhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcbiAgICAvLyBQYXIgZMOpZmF1dCwgb24gZMOpc2FjdGl2ZSBsZSBib3V0b24gdGFudCBxdWUgcmllbiBu4oCZZXN0IHZhbGlkw6lcbiAgICBpZiAodGhpcy5oYXNTdWJtaXRUYXJnZXQpIHtcbiAgICAgIHRoaXMuc3VibWl0VGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gw4ljb3V0ZSBsZXMgw6l2w6luZW1lbnRzIGR1IGNvbnRyb2xsZXIgcGFzc3dvcmRfc3RyZW5ndGhcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzc3dvcmQtc3RyZW5ndGgtdXBkYXRlZCcsIChlKSA9PiB7XG4gICAgICB0aGlzLnBhc3N3b3JkU3Ryb25nID0gZS5kZXRhaWwudmFsaWQ7XG4gICAgICB0aGlzLmNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgY2hlY2soKSB7XG4gICAgY29uc3QgcHdkID0gdGhpcy5vcmlnaW5hbFRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBjb25maXJtID0gdGhpcy5jb25maXJtVGFyZ2V0LnZhbHVlO1xuICAgIC8vIENoYW1wIHZpZGUg4oaSIHJlc2V0XG4gICAgaWYgKCFjb25maXJtKSB7XG4gICAgICB0aGlzLmZlZWRiYWNrVGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy5jb25maXJtVGFyZ2V0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgIHRoaXMuY29uZmlybVRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgICAgdGhpcy51cGRhdGVTdWJtaXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2ggPSBwd2QgPT09IGNvbmZpcm07XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICB0aGlzLmZlZWRiYWNrVGFyZ2V0LmlubmVySFRNTCA9XG4gICAgICAgICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZWNrLWNpcmNsZSB0ZXh0LWdyZWVuLTUwMCBtci0xXCI+PC9pPjxzcGFuPkxlcyBtb3RzIGRlIHBhc3NlIGNvcnJlc3BvbmRlbnQuPC9zcGFuPic7XG4gICAgICB0aGlzLmZlZWRiYWNrVGFyZ2V0LmNsYXNzTmFtZSA9ICdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LWdyZWVuLTYwMCB0ZXh0LXhzIG10LTEnO1xuICAgICAgdGhpcy5jb25maXJtVGFyZ2V0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgIHRoaXMuY29uZmlybVRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICdmYWxzZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZlZWRiYWNrVGFyZ2V0LmlubmVySFRNTCA9XG4gICAgICAgICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZS14bWFyayB0ZXh0LXJlZC01MDAgbXItMVwiPjwvaT48c3Bhbj5MZXMgbW90cyBkZSBwYXNzZSBuZSBjb3JyZXNwb25kZW50IHBhcy48L3NwYW4+JztcbiAgICAgIHRoaXMuZmVlZGJhY2tUYXJnZXQuY2xhc3NOYW1lID0gJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtcmVkLTYwMCB0ZXh0LXhzIG10LTEnO1xuICAgICAgdGhpcy5jb25maXJtVGFyZ2V0LnNldEN1c3RvbVZhbGlkaXR5KCdMZXMgbW90cyBkZSBwYXNzZSBuZSBjb3JyZXNwb25kZW50IHBhcy4nKTtcbiAgICAgIHRoaXMuY29uZmlybVRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICd0cnVlJyk7XG4gICAgfVxuICAgIHRoaXMucGFzc3dvcmRzTWF0Y2ggPSBtYXRjaDtcbiAgICB0aGlzLnVwZGF0ZVN1Ym1pdCgpO1xuICB9XG4gIHVwZGF0ZVN1Ym1pdCgpIHtcbiAgICBpZiAoIXRoaXMuaGFzU3VibWl0VGFyZ2V0KSByZXR1cm47XG4gICAgLy8gQnV0dG9uIGVuYWJsZWQgb25seSBpZiA6XG4gICAgLy8gLSBwYXNzd29yZF9zdHJlbmd0aCB2YWxpZGVcbiAgICAvLyAtIHBhc3N3b3JkX2NvbmZpcm0gT0tcbiAgICBjb25zdCBjYW5TdWJtaXQgPSB0aGlzLnBhc3N3b3JkU3Ryb25nICYmIHRoaXMucGFzc3dvcmRzTWF0Y2g7XG4gICAgdGhpcy5zdWJtaXRUYXJnZXQuZGlzYWJsZWQgPSAhY2FuU3VibWl0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLyoqXG4gKiBDb250csO0bGV1ciBTdGltdWx1cyA6IFbDqXJpZmljYXRpb24gZGUgbGEgZm9yY2UgZHUgbW90IGRlIHBhc3NlXG4gKlxuICogLSBSw6hnbGVzIEFOU1NJIDogbG9uZ3VldXIsIG1haiwgbWluLCBjaGlmZnJlLCBzcMOpY2lhbFxuICogLSBGZWVkYmFjayBsaXZlIChsaXN0ZSBkZXMgY3JpdMOocmVzKVxuICogLSBhcmlhLWludmFsaWQgKyBhcmlhLWxpdmVcbiAqIC0gQ29tbXVuaXF1ZSBhdmVjIHBhc3N3b3JkLWNvbmZpcm0gcG91ciBkw6lzYWN0aXZlciBsZSBzdWJtaXRcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdGFyZ2V0cyA9IFsnaW5wdXQnLCAnZmVlZGJhY2snLCAnc3VibWl0J107XG4gIGNvbm5lY3QoKSB7XG4gICAgLy8gPT09IFLDqGdsZXMgQU5TU0kgPT09XG4gICAgdGhpcy5ydWxlcyA9IFtcbiAgICAgIHsgcmVnZXg6IC8uezEwLH0vLCB0ZXh0OiAnQXUgbW9pbnMgMTAgY2FyYWN0w6hyZXMnIH0sXG4gICAgICB7IHJlZ2V4OiAvW0EtWl0vLCB0ZXh0OiAnQXUgbW9pbnMgdW5lIG1hanVzY3VsZScgfSxcbiAgICAgIHsgcmVnZXg6IC9bYS16XS8sIHRleHQ6ICdBdSBtb2lucyB1bmUgbWludXNjdWxlJyB9LFxuICAgICAgeyByZWdleDogL1xcZC8sIHRleHQ6ICdBdSBtb2lucyB1biBjaGlmZnJlJyB9LFxuICAgICAgeyByZWdleDogL1tcXFdfXS8sIHRleHQ6ICdBdSBtb2lucyB1biBjYXJhY3TDqHJlIHNww6ljaWFsJyB9LFxuICAgIF07XG4gICAgLy8gPT09IFVMIGRlIGNyaXTDqHJlcyA9PT1cbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHRoaXMubGlzdC5jbGFzc05hbWUgPSAndGV4dC14cyBtdC0yIHNwYWNlLXktMSc7XG4gICAgdGhpcy5saXN0LnNldEF0dHJpYnV0ZSgncm9sZScsICdzdGF0dXMnKTtcbiAgICB0aGlzLmxpc3Quc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgICAgbGkuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXJSdWxlKHJ1bGUudGV4dCwgZmFsc2UpO1xuICAgICAgbGkuY2xhc3NOYW1lID0gJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtcmVkLTYwMCc7XG4gICAgICB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIHRoaXMuZmVlZGJhY2tUYXJnZXQucmVwbGFjZUNoaWxkcmVuKHRoaXMubGlzdCk7XG4gIH1cbiAgY2hlY2soKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0VGFyZ2V0LnZhbHVlO1xuICAgIGxldCB2YWxpZENvdW50ID0gMDtcbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IGxpID0gdGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PVwiJHtpfVwiXWApO1xuICAgICAgY29uc3QgcGFzc2VkID0gcnVsZS5yZWdleC50ZXN0KHZhbHVlKTtcbiAgICAgIGxpLmlubmVySFRNTCA9IHRoaXMucmVuZGVyUnVsZShydWxlLnRleHQsIHBhc3NlZCk7XG4gICAgICBsaS5jbGFzc05hbWUgPSBwYXNzZWRcbiAgICAgICAgPyAnZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1ncmVlbi02MDAnXG4gICAgICAgIDogJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtcmVkLTYwMCc7XG4gICAgICBpZiAocGFzc2VkKSB2YWxpZENvdW50Kys7XG4gICAgfSk7XG4gICAgY29uc3QgYWxsVmFsaWQgPSB2YWxpZENvdW50ID09PSB0aGlzLnJ1bGVzLmxlbmd0aDtcbiAgICAvLyBBUklBXG4gICAgdGhpcy5pbnB1dFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsIGFsbFZhbGlkID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgdGhpcy5pbnB1dFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCd2YWxpZC1wYXNzd29yZCcsIGFsbFZhbGlkKTtcbiAgICAvLyBDb21tdW5pcXVlIGF2ZWMgcGFzc3dvcmQtY29uZmlybSBzaSBwcsOpc2VudFxuICAgIGlmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5oYXNDb25maXJtID09PSAndHJ1ZScpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdwYXNzd29yZC1zdHJlbmd0aC11cGRhdGVkJywge1xuICAgICAgICBkZXRhaWw6IHsgdmFsaWQ6IGFsbFZhbGlkIH0sXG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyUnVsZSh0ZXh0LCBwYXNzZWQpIHtcbiAgICByZXR1cm4gcGFzc2VkXG4gICAgICA/IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZWNrLWNpcmNsZSB0ZXh0LWdyZWVuLTUwMCBtci0xXCI+PC9pPjxzcGFuPiR7dGV4dH08L3NwYW4+YFxuICAgICAgOiBgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUteG1hcmsgdGV4dC1yZWQtNTAwIG1yLTFcIj48L2k+PHNwYW4+JHt0ZXh0fTwvc3Bhbj5gO1xuICB9XG59XG4iLCIvLyBhc3NldHMvY29udHJvbGxlcnMvcmF0aW5nX2ZpbHRlcl9jb250cm9sbGVyLmpzXG5cbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKipcbiAqIENvbnRyw7RsZXVyIFN0aW11bHVzIOKAlCBTw6lsZWN0ZXVyIGTigJnDqXZhbHVhdGlvbiAo4piFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQZXJtZXQgw6AgbOKAmXV0aWxpc2F0ZXVyIGRlIGNob2lzaXIgdW4gbml2ZWF1IGTigJnDqXRvaWxlcyAoMSDDoCA1KVxuICogZGFucyBsZSBwYW5uZWF1IGRlIGZpbHRyZXMgZGUgcmVjaGVyY2hlLlxuICpcbiAqIEZvbmN0aW9ubmFsaXTDqXMgOlxuICogLSA1IMOpdG9pbGVzIGludGVyYWN0aXZlcyBiYXPDqWVzIHN1ciBTVkdcbiAqIC0gTWlzZSDDoCBqb3VyIGTigJl1biA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyYXRpbmdcIj5cbiAqIC0gU291bWlzc2lvbiBhdXRvbWF0aXF1ZSBkdSBmb3JtdWxhaXJlIGRlIGZpbHRyZXNcbiAqIC0gQWNjZXNzaWJpbGl0w6kgY29tcGzDqHRlIDogY2xhdmllciArIGFyaWEtbGFiZWwgKyBhcmlhLXByZXNzZWRcbiAqXG4gKiBDb21wYXRpYmxlIGF2ZWMgOiB0ZW1wbGF0ZXMvc2VhcmNoL2luZGV4Lmh0bWwudHdpZ1xuICogVXRpbGlzw6kgY29uam9pbnRlbWVudCBhdmVjIDogZmlsdGVyLXBhbmVsX2NvbnRyb2xsZXIuanNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbJ2lucHV0JywgJ3N0YXInLCAnZm9ybSddO1xuXG4gIGNvbm5lY3QoKSB7XG4gICAgLy8gSW5pdGlhbGlzZSBsYSB2YWxldXIgKHBhciBkw6lmYXV0IDApIGRlcHVpcyBsZSBjaGFtcCBjYWNow6lcbiAgICB0aGlzLnZhbHVlID0gcGFyc2VJbnQodGhpcy5pbnB1dFRhcmdldC52YWx1ZSB8fCAwLCAxMCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cbiAgLyoqXG4gICAqIFPDqWxlY3Rpb25uZSB1bmUgbm90ZSBhdSBjbGljIChvdSDDoCBsYSB0b3VjaGUgRXNwYWNlL0VudHLDqWUpLlxuICAgKiBQZXJtZXQgYXVzc2kgZGUgZMOpc8OpbGVjdGlvbm5lciBsYSBub3RlIHNpIG9uIHJlY2xpcXVlIGRlc3N1cy5cbiAgICovXG4gIHNlbGVjdChldmVudCkge1xuICAgIGNvbnN0IHZhbCA9IHBhcnNlSW50KGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC52YWx1ZSwgMTApO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlID09PSB2YWwgPyAwIDogdmFsOyAvLyB0b2dnbGUgc2kgb24gcmVjbGlxdWVcbiAgICB0aGlzLmlucHV0VGFyZ2V0LnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIC8vIFNvdW1pc3Npb24gYXV0b21hdGlxdWUgZHUgZm9ybXVsYWlyZSBwcmluY2lwYWwgc2kgZGlzcG9uaWJsZVxuICAgIGNvbnN0IGZvcm0gPSB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnZm9ybScpO1xuICAgIGlmIChmb3JtKSBmb3JtLnJlcXVlc3RTdWJtaXQoKTtcbiAgfVxuICAvKipcbiAgICogU3Vydm9sIHNvdXJpcyA6IG1ldCBlbiBzdXJicmlsbGFuY2UgdGVtcG9yYWlyZW1lbnRcbiAgICovXG4gIGhpZ2hsaWdodChldmVudCkge1xuICAgIGNvbnN0IHZhbCA9IHBhcnNlSW50KGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC52YWx1ZSwgMTApO1xuICAgIHRoaXMudXBkYXRlU3RhcnModmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBRdWFuZCBvbiBzb3J0IGR1IHN1cnZvbCA6IHJlc3RhdXJlIGxhIHZhbGV1ciBhY3R1ZWxsZVxuICAgKi9cbiAgY2xlYXJIaWdobGlnaHQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogUmFmcmHDrmNoaXQgbOKAmcOpdGF0IHZpc3VlbCBjb21wbGV0IHNlbG9uIGxhIHZhbGV1ciBhY3RpdmVcbiAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy51cGRhdGVTdGFycyh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXQgw6Agam91ciBs4oCZYWZmaWNoYWdlIChjb3VsZXVyICsgw6l0YXQgQVJJQSlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFjdGl2ZVZhbHVlXG4gICAqL1xuICB1cGRhdGVTdGFycyhhY3RpdmVWYWx1ZSkge1xuICAgIHRoaXMuc3RhclRhcmdldHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgIGNvbnN0IGZpbGxlZCA9IGkgKyAxIDw9IGFjdGl2ZVZhbHVlO1xuXG4gICAgICAvLyBHZXN0aW9uIGRlcyBjbGFzc2VzIFRhaWx3aW5kXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCd0ZXh0LXRhbGVudGVrby1vcmFuZ2UtNTAwJywgZmlsbGVkKTtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ3RleHQtZ3JheS0zMDAnLCAhZmlsbGVkKTtcblxuICAgICAgLy8gQWNjZXNzaWJpbGl0w6kgOiBpbmRpcXVlciB2aXN1ZWxsZW1lbnQgZXQgdm9jYWxlbWVudCBs4oCZw6l0YXRcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgZmlsbGVkKTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgYCR7aSArIDF9IMOpdG9pbGUke2kgPiAwID8gJ3MnIDogJyd9YCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdGFyZ2V0cyA9IFsnY29udGFpbmVyJ107XG4gIHNjcm9sbExlZnQoKSB7XG4gICAgaWYgKHRoaXMuaGFzQ29udGFpbmVyVGFyZ2V0KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lclRhcmdldC5zY3JvbGxCeSh7IGxlZnQ6IC0yNTAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9XG4gIH1cbiAgc2Nyb2xsUmlnaHQoKSB7XG4gICAgaWYgKHRoaXMuaGFzQ29udGFpbmVyVGFyZ2V0KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lclRhcmdldC5zY3JvbGxCeSh7IGxlZnQ6IDI1MCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNvbnNvbGUiLCJsb2ciLCJBcHBsaWNhdGlvbiIsIndpbmRvdyIsImFwcGxpY2F0aW9uIiwic3RhcnQiLCJIZWFkZXJOYXZDb250cm9sbGVyIiwiQ3VzdG9tU2VsZWN0Q29udHJvbGxlciIsIkRhcmtNb2RlQ29udHJvbGxlciIsIkZhdm9yaXRlVG9nZ2xlQ29udHJvbGxlciIsIkZpbHRlclBhbmVsQ29udHJvbGxlciIsIkZsYXNoQ29udHJvbGxlciIsIkZvbnRTaXplQ29udHJvbGxlciIsIkZvcm1BdXRvc2F2ZUNvbnRyb2xsZXIiLCJMb2NhdGlvbkF1dG9jb21wbGV0ZUNvbnRyb2xsZXIiLCJSYXRpbmdGaWx0ZXJDb250cm9sbGVyIiwiUGFzc3dvcmRDb25maXJtQ29udHJvbGxlciIsIlBhc3N3b3JkU3RyZW5ndGhDb250cm9sbGVyIiwiU2Nyb2xsTmF2Q29udHJvbGxlciIsIkltYWdlUHJldmlld0NvbnRyb2xsZXIiLCJyZWdpc3RlciIsIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsIm9wZW4iLCJfYm91bmRDbGlja091dHNpZGUiLCJoYW5kbGVDbGlja091dHNpZGUiLCJiaW5kIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzY29ubmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlVmlzaWJpbGl0eSIsInNlbGVjdE9wdGlvbiIsInNlbGVjdGVkVmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNlbGVjdGVkTGFiZWwiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJpbnB1dFRhcmdldCIsImxhYmVsVGFyZ2V0IiwiY2xvc2UiLCJoYW5kbGVLZXlkb3duIiwiaW5jbHVkZXMiLCJmaXJzdE9wdGlvbiIsIm9wdGlvblRhcmdldHMiLCJmb2N1cyIsImhhbmRsZU9wdGlvbktleWRvd24iLCJjdXJyZW50SW5kZXgiLCJpbmRleE9mIiwibmV4dCIsInByZXYiLCJsZW5ndGgiLCJidXR0b25UYXJnZXQiLCJlbGVtZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJsaXN0VGFyZ2V0IiwiY2xhc3NMaXN0Iiwic2V0QXR0cmlidXRlIiwiX2RlZmluZVByb3BlcnR5IiwiZGVmYXVsdCIsInNhdmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByZWZlcnNEYXJrIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJlbmFibGVkIiwic2V0TW9kZSIsImlzRGFyayIsImRvY3VtZW50RWxlbWVudCIsImFkZCIsInNldEl0ZW0iLCJyZW1vdmUiLCJmaWxsZWRUYXJnZXQiLCJzZXRTdGF0ZSIsImlzRmF2IiwiZW1wdHlUYXJnZXQiLCJzaG93RmlsbGVkIiwic2hvd0VtcHR5IiwiX3RoaXMiLCJ0b2dnbGVCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsImZvY3VzYWJsZVNlbGVjdG9ycyIsImZpcnN0Rm9jdXNhYmxlIiwibGFzdEZvY3VzYWJsZSIsInRyaWdnZXJCdXR0b24iLCJlIiwiaXNPcGVuIiwidHJhcEZvY3VzIiwicGFuZWxUYXJnZXQiLCJzdGF0ZSIsIm92ZXJsYXlUYXJnZXQiLCJib2R5IiwiZm9jdXNhYmxlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfdGhpczIiLCJzZXRUaW1lb3V0IiwiZmlyc3QiLCJsYXN0Iiwic2hpZnRLZXkiLCJhY3RpdmVFbGVtZW50IiwidGltZW91dFZhbHVlIiwidGltZW91dCIsInR5cGUiLCJOdW1iZXIiLCJhcHBseVNpemUiLCJzZXRTbWFsbCIsInNldE5vcm1hbCIsInNldExhcmdlIiwic2l6ZSIsImh0bWwiLCJzdHlsZSIsImZvbnRTaXplIiwic21hbGxUYXJnZXQiLCJub3JtYWxUYXJnZXQiLCJsYXJnZVRhcmdldCIsImtleVZhbHVlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiT2JqZWN0IiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsIl9zbGljZWRUb0FycmF5IiwibmFtZSIsImZpZWxkIiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsInNhdmUiLCJpbnB1dHMiLCJmb3JFYWNoIiwiZWwiLCJzdHJpbmdpZnkiLCJjbGVhciIsInJlbW92ZUl0ZW0iLCJTdHJpbmciLCJib3VuZEtleWRvd24iLCJib3VuZENsaWNrT3V0c2lkZSIsImJ1dHRvbiIsIm9wZW5NZW51IiwiX3RoaXMkYnV0dG9uIiwibWVudSIsIm1lbnVUYXJnZXQiLCJwYW5lbCIsInJlbW92ZUF0dHJpYnV0ZSIsIl90aGlzJGJ1dHRvbjIiLCJfdGhpcyRidXR0b24zIiwicHJldmlld1RhcmdldCIsImlubmVySFRNTCIsInByZXZpZXciLCJmaWxlcyIsIkFycmF5IiwiZnJvbSIsImZpbGUiLCJzdGFydHNXaXRoIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJyZXN1bHQiLCJhcHBlbmRDaGlsZCIsInJlYWRBc0RhdGFVUkwiLCJkdCIsIkRhdGFUcmFuc2ZlciIsIml0ZW1zIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJfdHlwZW9mIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJfc2V0UHJvdG90eXBlT2YiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImFjdGl2ZUluZGV4IiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsIl9zZWFyY2giLCJfY2FsbGVlIiwicXVlcnkiLCJyZXMiLCJfdCIsIl9jb250ZXh0IiwiS2V5Ym9hcmRFdmVudCIsImNsZWFyTGlzdCIsImZldGNoIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib2siLCJ3YXJuIiwic3RhdHVzIiwicmVuZGVyTGlzdCIsInByb3BlcnRpZXMiLCJsYWJlbCIsImpzb24iLCJmZWF0dXJlcyIsImVycm9yIiwic2VhcmNoIiwiX3giLCJsaSIsInNlbGVjdCIsImFuaW1hdGlvbiIsImtleWRvd24iLCJoaWdobGlnaHQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJhY3RpdmUiLCJpZCIsIl90aGlzMyIsImNoaWxkRWxlbWVudENvdW50IiwiX3Jlc2V0TGlzdCIsImZlZWRiYWNrVGFyZ2V0IiwiaGFzU3VibWl0VGFyZ2V0Iiwic3VibWl0VGFyZ2V0IiwiZGlzYWJsZWQiLCJwYXNzd29yZFN0cm9uZyIsImRldGFpbCIsInZhbGlkIiwiY2hlY2siLCJwd2QiLCJvcmlnaW5hbFRhcmdldCIsImNvbmZpcm0iLCJjb25maXJtVGFyZ2V0Iiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJ1cGRhdGVTdWJtaXQiLCJtYXRjaCIsInBhc3N3b3Jkc01hdGNoIiwiY2FuU3VibWl0IiwicnVsZXMiLCJyZWdleCIsInRleHQiLCJsaXN0IiwicnVsZSIsImluZGV4IiwicmVuZGVyUnVsZSIsInJlcGxhY2VDaGlsZHJlbiIsInZhbGlkQ291bnQiLCJwYXNzZWQiLCJ0ZXN0IiwiYWxsVmFsaWQiLCJoYXNDb25maXJtIiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwicGFyc2VJbnQiLCJyZWZyZXNoIiwidmFsIiwiZm9ybSIsImNsb3Nlc3QiLCJyZXF1ZXN0U3VibWl0IiwidXBkYXRlU3RhcnMiLCJjbGVhckhpZ2hsaWdodCIsImFjdGl2ZVZhbHVlIiwic3RhclRhcmdldHMiLCJmaWxsZWQiLCJzY3JvbGxMZWZ0IiwiaGFzQ29udGFpbmVyVGFyZ2V0IiwiY29udGFpbmVyVGFyZ2V0Iiwic2Nyb2xsQnkiLCJsZWZ0IiwiYmVoYXZpb3IiLCJzY3JvbGxSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=