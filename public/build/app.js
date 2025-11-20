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
// Mode ESM strict — tous les contrôleurs enregistrés à la main
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBQSxhQUNwQixDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9hcHAuY3NzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvY3VzdG9tX3NlbGVjdF9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9kYXJrX21vZGVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvZmF2b3JpdGVfdG9nZ2xlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZpbHRlcl9wYW5lbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9mbGFzaF9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9mb250X3NpemVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvZm9ybV9hdXRvc2F2ZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWFkZXJfbmF2X2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2ltYWdlX3ByZXZpZXdfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvbG9jYXRpb25fYXV0b2NvbXBsZXRlX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGFsZW50ZWtvLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3Bhc3N3b3JkX2NvbmZpcm1fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvcGFzc3dvcmRfc3RyZW5ndGhfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90YWxlbnRla28vLi9hc3NldHMvY29udHJvbGxlcnMvcmF0aW5nX2ZpbHRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RhbGVudGVrby8uL2Fzc2V0cy9jb250cm9sbGVycy9zY3JvbGxfbmF2X2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUG9pbnQgZCdlbnRyw6llIEpTIOKAlCBUYWxlbnTDiWvDtFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLSBDaGFyZ2UgU3RpbXVsdXMgJiBUdXJibyAoY29uZmlnIFN5bWZvbnkgRW5jb3JlKVxuLy8gLSBJbXBvcnRlIFRhaWx3aW5kQ1NTIHZpYSBhcHAuY3NzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCAnLi9hcHAuY3NzJzsgLy8gVGFpbHdpbmQgQ1NTXG5pbXBvcnQgJy4vYm9vdHN0cmFwLmpzJzsgLy8gU3RpbXVsdXMvVHVyYm8gKyBjb25maWdcbi8qIGdsb2JhbCBwcm9jZXNzICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc29sZS5sb2coJ1RhbGVudMOJa8O0IOKAlCBhc3NldHMvYXBwLmpzIGNoYXJnw6kgYXZlYyBzdWNjw6hzJyk7XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJvb3RzdHJhcCBKUyDigJQgU3RpbXVsdXMgKFRhbGVudMOJa8O0IDIwMjUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENvbmZpZ3VyYXRpb24gbWFudWVsbGUgZGUgU3RpbXVsdXMgcG91ciBXZWJwYWNrIEVuY29yZSA1Lnhcbi8vIE1vZGUgRVNNIHN0cmljdCDigJQgdG91cyBsZXMgY29udHLDtGxldXJzIGVucmVnaXN0csOpcyDDoCBsYSBtYWluXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vLyAtLS0gSW5pdGlhbGlzYXRpb24gZGUgU3RpbXVsdXMgLS0tXG53aW5kb3cuYXBwbGljYXRpb24gPSBBcHBsaWNhdGlvbi5zdGFydCgpO1xuY29uc29sZS5sb2coJ+KaoSBTdGltdWx1cyBpbml0aWFsaXPDqSAobW9kZSBFU00gc3RyaWN0LCBlbnJlZ2lzdHJlbWVudCBtYW51ZWwpJyk7XG5cbi8vID09PSBJbXBvcnQgbWFudWVsIGRlIHRvdXMgbGVzIGNvbnRyw7RsZXVycyA9PT1cbmltcG9ydCBIZWFkZXJOYXZDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvaGVhZGVyX25hdl9jb250cm9sbGVyLmpzJztcbmltcG9ydCBDdXN0b21TZWxlY3RDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvY3VzdG9tX3NlbGVjdF9jb250cm9sbGVyLmpzJztcbmltcG9ydCBEYXJrTW9kZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9kYXJrX21vZGVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgRmF2b3JpdGVUb2dnbGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvZmF2b3JpdGVfdG9nZ2xlX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IEZpbHRlclBhbmVsQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2ZpbHRlcl9wYW5lbF9jb250cm9sbGVyLmpzJztcbmltcG9ydCBGbGFzaENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9mbGFzaF9jb250cm9sbGVyLmpzJztcbmltcG9ydCBGb250U2l6ZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9mb250X3NpemVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgRm9ybUF1dG9zYXZlQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2Zvcm1fYXV0b3NhdmVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgTG9jYXRpb25BdXRvY29tcGxldGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvbG9jYXRpb25fYXV0b2NvbXBsZXRlX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFJhdGluZ0ZpbHRlckNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9yYXRpbmdfZmlsdGVyX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFBhc3N3b3JkQ29uZmlybUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9wYXNzd29yZF9jb25maXJtX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFBhc3N3b3JkU3RyZW5ndGhDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvcGFzc3dvcmRfc3RyZW5ndGhfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgU2Nyb2xsTmF2Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3Njcm9sbF9uYXZfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgSW1hZ2VQcmV2aWV3Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2ltYWdlX3ByZXZpZXdfY29udHJvbGxlci5qcyc7XG5cbi8vIC0tLSBFbnJlZ2lzdHJlbWVudCBnbG9iYWwgU3RpbXVsdXMgLS0tXG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ2hlYWRlci1uYXYnLCBIZWFkZXJOYXZDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3RlcignY3VzdG9tLXNlbGVjdCcsIEN1c3RvbVNlbGVjdENvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdkYXJrLW1vZGUnLCBEYXJrTW9kZUNvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdmYXZvcml0ZS10b2dnbGUnLCBGYXZvcml0ZVRvZ2dsZUNvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdmaWx0ZXItcGFuZWwnLCBGaWx0ZXJQYW5lbENvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdmbGFzaCcsIEZsYXNoQ29udHJvbGxlcik7XG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ2ZvbnQtc2l6ZScsIEZvbnRTaXplQ29udHJvbGxlcik7XG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ2Zvcm0tYXV0b3NhdmUnLCBGb3JtQXV0b3NhdmVDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3RlcignbG9jYXRpb24tYXV0b2NvbXBsZXRlJywgTG9jYXRpb25BdXRvY29tcGxldGVDb250cm9sbGVyKTtcbndpbmRvdy5hcHBsaWNhdGlvbi5yZWdpc3RlcigncmF0aW5nLWZpbHRlcicsIFJhdGluZ0ZpbHRlckNvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdwYXNzd29yZC1jb25maXJtJywgUGFzc3dvcmRDb25maXJtQ29udHJvbGxlcik7XG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ3Bhc3N3b3JkLXN0cmVuZ3RoJywgUGFzc3dvcmRTdHJlbmd0aENvbnRyb2xsZXIpO1xud2luZG93LmFwcGxpY2F0aW9uLnJlZ2lzdGVyKCdzY3JvbGwtbmF2JywgU2Nyb2xsTmF2Q29udHJvbGxlcik7XG53aW5kb3cuYXBwbGljYXRpb24ucmVnaXN0ZXIoJ2ltYWdlLXByZXZpZXcnLCBJbWFnZVByZXZpZXdDb250cm9sbGVyKTtcblxuLy8gLS0tIExvZyBkZSB2w6lyaWZpY2F0aW9uICh1dGlsZSBlbiBkZXYpIC0tLVxuY29uc29sZS5sb2coJ0NvbnRyw7RsZXVycyBTdGltdWx1cyBlbnJlZ2lzdHLDqXMgOicpO1xuY29uc29sZS5sb2coW1xuICAnaGVhZGVyLW5hdicsXG4gICdjdXN0b20tc2VsZWN0JyxcbiAgJ2RhcmstbW9kZScsXG4gICdmYXZvcml0ZS10b2dnbGUnLFxuICAnZmlsdGVyLXBhbmVsJyxcbiAgJ2ZsYXNoJyxcbiAgJ2ZvbnQtc2l6ZScsXG4gICdmb3JtLWF1dG9zYXZlJyxcbiAgJ2xvY2F0aW9uLWF1dG9jb21wbGV0ZScsXG4gICdyYXRpbmctZmlsdGVyJyxcbiAgJ3Bhc3N3b3JkLWNvbmZpcm0nLFxuICAncGFzc3dvcmQtc3RyZW5ndGgnLFxuICAnc2Nyb2xsLW5hdicsXG4gICdpbWFnZS1wcmV2aWV3Jyxcbl0pO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb250csO0bGV1ciBTdGltdWx1cyDigJQgQ3VzdG9tIFNlbGVjdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBPYmplY3RpZiA6IHJlbXBsYWNlciB1biA8c2VsZWN0PiBuYXRpZiBwYXIgdW4gY29tcG9zYW50XG4vLyBhY2Nlc3NpYmxlIGV0IGNvbXBhdGlibGUgY2xhdmllciArIEFSSUEuXG4vLyBVdGlsaXPDqSBwb3VyIGxlIGZpbHRyZSDigJxEYXRlIGRlIHB1YmxpY2F0aW9u4oCdLlxuLy8gRm9uY3Rpb25uYWxpdMOpcyA6XG4vLyAtIE91dmVydHVyZS9mZXJtZXR1cmUgZHUgbWVudSB2aWEgY2xpYyBvdSBjbGF2aWVyXG4vLyAtIFPDqWxlY3Rpb24gZOKAmXVuZSBvcHRpb24gKGNsaWMgb3UgRW50ZXIpXG4vLyAtIE1pc2Ugw6Agam91ciBkdSBsYWJlbCArIGlucHV0IGNhY2jDqVxuLy8gLSBGZXJtZXR1cmUgc2kgY2xpYyDDoCBs4oCZZXh0w6lyaWV1ciBvdSB0b3VjaGUgw4ljaGFwXG4vLyAtIFNvdW1pc3Npb24gYXV0b21hdGlxdWUgZHUgZm9ybXVsYWlyZSBwYXJlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbJ2J1dHRvbicsICdsaXN0JywgJ2xhYmVsJywgJ2lucHV0JywgJ29wdGlvbiddO1xuXG4gIGNvbm5lY3QoKSB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5fYm91bmRDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fYm91bmRDbGlja091dHNpZGUpO1xuICAgIGNvbnNvbGUubG9nKCdjdXN0b21fc2VsZWN0IGNvbm5lY3TDqScpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2JvdW5kQ2xpY2tPdXRzaWRlKTtcbiAgfVxuICAvLyBPdXZlcnR1cmUgLyBmZXJtZXR1cmUgZHUgbWVudSBkw6lyb3VsYW50XG4gIHRvZ2dsZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHkoKTtcbiAgfVxuICAvLyBzZWxlY3RPcHRpb24gU0FOUyBhdXRvLXN1Ym1pdFxuICBzZWxlY3RPcHRpb24oZXZlbnQpIHtcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnZhbHVlO1xuICAgIGNvbnN0IHNlbGVjdGVkTGFiZWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKTtcblxuICAgIHRoaXMuaW5wdXRUYXJnZXQudmFsdWUgPSBzZWxlY3RlZFZhbHVlO1xuICAgIHRoaXMubGFiZWxUYXJnZXQudGV4dENvbnRlbnQgPSBzZWxlY3RlZExhYmVsO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuICAvLyBHZXN0aW9uIGR1IGNsYXZpZXIgc3VyIGxlIGJvdXRvbiBwcmluY2lwYWxcbiAgaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChbJyAnLCAnRW50ZXInLCAnQXJyb3dEb3duJ10uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHkoKTtcbiAgICAgIGNvbnN0IGZpcnN0T3B0aW9uID0gdGhpcy5vcHRpb25UYXJnZXRzWzBdO1xuICAgICAgaWYgKGZpcnN0T3B0aW9uKSBmaXJzdE9wdGlvbi5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuICAvLyBHZXN0aW9uIGR1IGNsYXZpZXIgZGFucyBsYSBsaXN0ZSBkZXMgb3B0aW9uc1xuICBoYW5kbGVPcHRpb25LZXlkb3duKGV2ZW50KSB7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5vcHRpb25UYXJnZXRzLmluZGV4T2YoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuZXh0ID0gdGhpcy5vcHRpb25UYXJnZXRzW2N1cnJlbnRJbmRleCArIDFdIHx8IHRoaXMub3B0aW9uVGFyZ2V0c1swXTtcbiAgICAgIG5leHQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgcHJldiA9XG4gICAgICAgIHRoaXMub3B0aW9uVGFyZ2V0c1tjdXJyZW50SW5kZXggLSAxXSB8fCB0aGlzLm9wdGlvblRhcmdldHNbdGhpcy5vcHRpb25UYXJnZXRzLmxlbmd0aCAtIDFdO1xuICAgICAgcHJldi5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZWxlY3RPcHRpb24oZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5idXR0b25UYXJnZXQuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgLy8gRmVybWUgbGUgbWVudSBzaSBjbGljIMOgIGzigJlleHTDqXJpZXVyXG4gIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgIGlmICh0aGlzLm9wZW4gJiYgIXRoaXMuZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG4gIC8vIE1haiBsYSB2aXNpYmlsaXTDqSBldCBsZXMgYXR0cmlidXRzIEFSSUFcbiAgdXBkYXRlVmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLmxpc3RUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgIXRoaXMub3Blbik7XG4gICAgdGhpcy5idXR0b25UYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdGhpcy5vcGVuKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlVmlzaWJpbGl0eSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLyoqXG4gKiBDb250csO0bGV1ciBTdGltdWx1cyA6IERhcmsgbW9kZSB0b2dnbGVcbiAqXG4gKiAtIEFqb3V0IGNsYXNzZSAuZGFyayBzdXIgPGh0bWw+XG4gKiAtIFNhdXZlZ2FyZGUgbGEgcHLDqWbDqXJlbmNlIGRhbnMgbG9jYWxTdG9yYWdlXG4gKiAtIFJlc3BlY3RlIHByZWZlcnMtY29sb3Itc2NoZW1lIGR1IHN5c3TDqG1lXG4gKiAtIEFjY2Vzc2liaWxpdMOpIDogYXJpYS1wcmVzc2VkIHN1ciBsZSBib3V0b25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgY29ubmVjdCgpIHtcbiAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0a19kYXJrX21vZGUnKTtcbiAgICBjb25zdCBwcmVmZXJzRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICBjb25zdCBlbmFibGVkID0gc2F2ZWQgPyBzYXZlZCA9PT0gJ3RydWUnIDogcHJlZmVyc0Rhcms7XG4gICAgdGhpcy5zZXRNb2RlKGVuYWJsZWQpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGNvbnN0IGlzRGFyayA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmsnKTtcbiAgICB0aGlzLnNldE1vZGUoIWlzRGFyayk7XG4gIH1cblxuICBzZXRNb2RlKGVuYWJsZWQpIHtcbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0a19kYXJrX21vZGUnLCAndHJ1ZScpO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0a19kYXJrX21vZGUnLCAnZmFsc2UnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsICdmYWxzZScpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qKlxuICogQ29udHLDtGxldXIgZmF2b3JpcyAodG9nZ2xlKVxuICogLSBDxZN1ciB2aWRlIOKGlCBDxZN1ciBwbGVpblxuICogLSBNYWogbGVzIGF0dHJpYnV0cyBBUklBIHBvdXIgbOKAmWFjY2Vzc2liaWxpdMOpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gWydlbXB0eScsICdmaWxsZWQnXTtcblxuICBjb25uZWN0KCkge1xuICAgIC8vIFNpIGxlIGJvdXRvbiBjb250aWVudCBkw6lqw6AgdW4gw6l0YXQsIG9uIGxlIHJlc3BlY3RlXG4gICAgaWYgKHRoaXMuZmlsbGVkVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZmFsc2UpOyAvLyBwYXMgZmF2b3JpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodHJ1ZSk7IC8vIGTDqWrDoCBmYXZvcmlcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlzRmF2ID0gdGhpcy5lbXB0eVRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpO1xuICAgIHRoaXMuc2V0U3RhdGUoIWlzRmF2KTtcbiAgfVxuXG4gIHNldFN0YXRlKGlzRmF2KSB7XG4gICAgaWYgKGlzRmF2KSB7XG4gICAgICB0aGlzLnNob3dGaWxsZWQoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnUmV0aXJlciBkZXMgZmF2b3JpcycpO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93RW1wdHkoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQWpvdXRlciBhdXggZmF2b3JpcycpO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ2ZhbHNlJyk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0VtcHR5KCkge1xuICAgIHRoaXMuZW1wdHlUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgdGhpcy5maWxsZWRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH1cblxuICBzaG93RmlsbGVkKCkge1xuICAgIHRoaXMuZW1wdHlUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgdGhpcy5maWxsZWRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3RpbXVsdXMgQ29udHJvbGxlciDigJQgRmlsdGVyIFBhbmVsIChUYWxlbnTDiWvDtClcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgc3RhdGljIHRhcmdldHMgPSBbJ3BhbmVsJywgJ292ZXJsYXknXTtcblxuICBjb25uZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKCcgRmlsdGVyUGFuZWxDb250cm9sbGVyIGNvbm5lY3TDqScpO1xuXG4gICAgLy8gUmFjY291cmNpc1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci10b2dnbGUnKTtcbiAgICB0aGlzLmZvY3VzYWJsZVNlbGVjdG9ycyA9XG4gICAgICAnYVtocmVmXSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWEsIGlucHV0LCBzZWxlY3QsIFt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKSc7XG5cbiAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlID0gbnVsbDtcbiAgICB0aGlzLmxhc3RGb2N1c2FibGUgPSBudWxsO1xuICAgIHRoaXMudHJpZ2dlckJ1dHRvbiA9IG51bGw7XG5cbiAgICAvLyBHZXN0aW9uIGNsYXZpZXIgKGZlcm1ldHVyZSArIGZvY3VzIHRyYXApXG4gICAgdGhpcy5oYW5kbGVLZXlkb3duID0gKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5pc09wZW4oKSkgdGhpcy5jbG9zZSgpO1xuICAgICAgaWYgKGUua2V5ID09PSAnVGFiJyAmJiB0aGlzLmlzT3BlbigpKSB0aGlzLnRyYXBGb2N1cyhlKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gLS0tIEJhc2N1bGUgb3V2ZXJ0dXJlIC8gZmVybWV0dXJlIC0tLVxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnIHRvZ2dsZSgpIGV4w6ljdXTDqSAhJyk7XG4gICAgdGhpcy5pc09wZW4oKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbihldmVudCk7XG4gIH1cblxuICAvLyAtLS0gT3V2ZXJ0dXJlIGR1IHBhbm5lYXUgLS0tXG4gIG9wZW4oZXZlbnQpIHtcbiAgICB0aGlzLnRyaWdnZXJCdXR0b24gPSBldmVudD8uY3VycmVudFRhcmdldCB8fCB0aGlzLnRvZ2dsZUJ1dHRvbjtcblxuICAgIHRoaXMucGFuZWxUYXJnZXQuZGF0YXNldC5zdGF0ZSA9ICdvcGVuJztcbiAgICB0aGlzLm92ZXJsYXlUYXJnZXQuZGF0YXNldC5zdGF0ZSA9ICdvcGVuJztcblxuICAgIC8vIFRyYW5zaXRpb24gdmlzaWJsZVxuICAgIHRoaXMucGFuZWxUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNsYXRlLXgtZnVsbCcsICdvcGFjaXR5LTAnKTtcbiAgICB0aGlzLm92ZXJsYXlUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcblxuICAgIC8vIEZlZWRiYWNrIHZpc3VlbCBkdSBib3V0b25cbiAgICBpZiAodGhpcy50b2dnbGVCdXR0b24pIHtcbiAgICAgIHRoaXMudG9nZ2xlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICB0aGlzLnRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAnYm9yZGVyLXRhbGVudGVrby1vcmFuZ2UtNjAwJyxcbiAgICAgICAgJ3RleHQtdGFsZW50ZWtvLW9yYW5nZS02MDAnLFxuICAgICAgICAncmluZy0xJyxcbiAgICAgICAgJ3JpbmctdGFsZW50ZWtvLW9yYW5nZS01MDAnXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEZvY3VzIHN1ciBwcmVtaWVyIGNoYW1wXG4gICAgY29uc3QgZm9jdXNhYmxlcyA9IHRoaXMucGFuZWxUYXJnZXQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmZvY3VzYWJsZVNlbGVjdG9ycyk7XG4gICAgaWYgKGZvY3VzYWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5maXJzdEZvY3VzYWJsZSA9IGZvY3VzYWJsZXNbMF07XG4gICAgICB0aGlzLmxhc3RGb2N1c2FibGUgPSBmb2N1c2FibGVzW2ZvY3VzYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bik7XG4gICAgY29uc29sZS5sb2coJ1Bhbm5lYXUgb3V2ZXJ0IChkYXRhc2V0LnN0YXRlID0gb3BlbiknKTtcbiAgfVxuXG4gIC8vIC0tLSBGZXJtZXR1cmUgZHUgcGFubmVhdSAtLS1cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5wYW5lbFRhcmdldC5kYXRhc2V0LnN0YXRlID0gJ2Nsb3NlZCc7XG4gICAgdGhpcy5vdmVybGF5VGFyZ2V0LmRhdGFzZXQuc3RhdGUgPSAnY2xvc2VkJztcblxuICAgIHRoaXMucGFuZWxUYXJnZXQuY2xhc3NMaXN0LmFkZCgndHJhbnNsYXRlLXgtZnVsbCcsICdvcGFjaXR5LTAnKTtcbiAgICB0aGlzLm92ZXJsYXlUYXJnZXQuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS0wJyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24pO1xuXG4gICAgLy8gRMOpbGFpIGF2YW50IGRpc3Bhcml0aW9uIGRlIGzigJlvdmVybGF5XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm92ZXJsYXlUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyksIDIwMCk7XG5cbiAgICAvLyBSw6l0YWJsaXIgc3R5bGUgZHUgYm91dG9uXG4gICAgaWYgKHRoaXMudG9nZ2xlQnV0dG9uKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRoaXMudG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgICdib3JkZXItdGFsZW50ZWtvLW9yYW5nZS02MDAnLFxuICAgICAgICAndGV4dC10YWxlbnRla28tb3JhbmdlLTYwMCcsXG4gICAgICAgICdyaW5nLTEnLFxuICAgICAgICAncmluZy10YWxlbnRla28tb3JhbmdlLTUwMCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUmVzdGF1cmUgZm9jdXNcbiAgICBpZiAodGhpcy50cmlnZ2VyQnV0dG9uKSB0aGlzLnRyaWdnZXJCdXR0b24uZm9jdXMoKTtcblxuICAgIGNvbnNvbGUubG9nKCdQYW5uZWF1IGZlcm3DqSAoZGF0YXNldC5zdGF0ZSA9IGNsb3NlZCknKTtcbiAgfVxuXG4gIC8vIC0tLSBWw6lyaWZpZSBs4oCZw6l0YXQgLS0tXG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW5lbFRhcmdldC5kYXRhc2V0LnN0YXRlID09PSAnb3Blbic7XG4gIH1cblxuICAvLyAtLS0gRm9jdXMgdHJhcCBjeWNsaXF1ZSAoYWNjZXNzaWJpbGl0w6kpIC0tLVxuICB0cmFwRm9jdXMoZSkge1xuICAgIGNvbnN0IGZvY3VzYWJsZXMgPSB0aGlzLnBhbmVsVGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5mb2N1c2FibGVTZWxlY3RvcnMpO1xuICAgIGlmIChmb2N1c2FibGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZmlyc3QgPSBmb2N1c2FibGVzWzBdO1xuICAgIGNvbnN0IGxhc3QgPSBmb2N1c2FibGVzW2ZvY3VzYWJsZXMubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoZS5zaGlmdEtleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGFzdC5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoIWUuc2hpZnRLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZmlyc3QuZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKipcbiAqIENvbnRyb2xsZXIgOiBmbGFzaCBhdXRvLWRpc21pc3NcbiAqXG4gKiAtIEZhZGUtb3V0IGF1dG9tYXRpcXVlIGRlcyBtZXNzYWdlcyBmbGFzaFxuICogLSBTdXBwcmVzc2lvbiBwcm9wcmUgZHUgRE9NXG4gKiAtIEFjY2Vzc2liaWxpdMOpIDogYXJpYS1saXZlPVwicG9saXRlXCIsIHJvbGU9XCJzdGF0dXNcIlxuICogLSBDb21wYXRpYmxlIFRhaWx3aW5kICYgZGFyay1tb2RlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB2YWx1ZXMgPSB7XG4gICAgdGltZW91dDogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDUwMDAgfSwgLy8gNSBzZWNvbmRlc1xuICB9O1xuXG4gIGNvbm5lY3QoKSB7XG4gICAgLy8gQWNjZXNzaWJpbGl0w6lcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3N0YXR1cycpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcblxuICAgIC8vIEFuaW1hdGlvbiBmYWRlLW91dFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICdvcGFjaXR5LTAnLFxuICAgICAgICAndHJhbnNsYXRlLXktMScsXG4gICAgICAgICd0cmFuc2l0aW9uLWFsbCcsXG4gICAgICAgICdkdXJhdGlvbi03MDAnLFxuICAgICAgICAnZWFzZS1vdXQnXG4gICAgICApO1xuXG4gICAgICAvLyBTdXBwcmltZSBsJ8OpbMOpbWVudCBhcHLDqHMgbCdhbmltYXRpb25cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LnJlbW92ZSgpLCA3NTApO1xuICAgIH0sIHRoaXMudGltZW91dFZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qKlxuICogQ29udHLDtGxldXIgU3RpbXVsdXMgOiBTd2l0Y2hlciBkZSB0YWlsbGUgZGUgcG9saWNlXG4gKlxuICogLSAzIMOpdGF0cyA6IEEtIChwZXRpdCksIEEgKG5vcm1hbCksIEErIChncmFuZClcbiAqIC0gU2F1dmVnYXJkZSBkYW5zIGxvY2FsU3RvcmFnZVxuICogLSBBY2Nlc3NpYmlsaXTDqSA6XG4gKiAgIOKAoiBhcmlhLXByZXNzZWQgcG91ciBs4oCZw6l0YXQgYWN0aWZcbiAqICAg4oCiIG5hdmlnYXRpb24gY2xhdmllciBwb3NzaWJsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdGFyZ2V0cyA9IFsnc21hbGwnLCAnbm9ybWFsJywgJ2xhcmdlJ107XG5cbiAgY29ubmVjdCgpIHtcbiAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0a19mb250X3NpemUnKSB8fCAnbm9ybWFsJztcbiAgICB0aGlzLmFwcGx5U2l6ZShzYXZlZCk7XG4gIH1cblxuICBzZXRTbWFsbCgpIHtcbiAgICB0aGlzLmFwcGx5U2l6ZSgnc21hbGwnKTtcbiAgfVxuXG4gIHNldE5vcm1hbCgpIHtcbiAgICB0aGlzLmFwcGx5U2l6ZSgnbm9ybWFsJyk7XG4gIH1cblxuICBzZXRMYXJnZSgpIHtcbiAgICB0aGlzLmFwcGx5U2l6ZSgnbGFyZ2UnKTtcbiAgfVxuXG4gIGFwcGx5U2l6ZShzaXplKSB7XG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBzd2l0Y2ggKHNpemUpIHtcbiAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgIGh0bWwuc3R5bGUuZm9udFNpemUgPSAnMThweCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaHRtbC5zdHlsZS5mb250U2l6ZSA9ICcxNnB4JztcbiAgICB9XG5cbiAgICAvLyBTYXV2ZWdhcmRlIHByw6lmw6lyZW5jZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0a19mb250X3NpemUnLCBzaXplKTtcblxuICAgIC8vIE1BSiBBUklBIGRlcyBib3V0b25zXG4gICAgdGhpcy5zbWFsbFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHNpemUgPT09ICdzbWFsbCcpO1xuICAgIHRoaXMubm9ybWFsVGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgc2l6ZSA9PT0gJ25vcm1hbCcpO1xuICAgIHRoaXMubGFyZ2VUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBzaXplID09PSAnbGFyZ2UnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qKlxuICogQ29udHLDtGxldXIgU3RpbXVsdXMgOiBTYXV2ZWdhcmRlIGF1dG8gZHUgZm9ybXVsYWlyZVxuICpcbiAqIC0gU2F1dmVnYXJkZSBsZXMgZG9ubsOpZXMgc2Fpc2llcyBkYW5zIGxvY2FsU3RvcmFnZVxuICogLSBSZXN0YXVyZSDDoCBsYSByZWNvbm5leGlvblxuICogLSBVdGlsaXNlIHVuZSBjbMOpIGxvY2FsZSBzcMOpY2lmaXF1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdmFsdWVzID0geyBrZXk6IFN0cmluZyB9O1xuXG4gIGNvbm5lY3QoKSB7XG4gICAgLy8gUmVzdGF1cmUgc2kgYnJvdWlsbG9uIGV4aXN0YW50XG4gICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleVZhbHVlKTtcbiAgICBpZiAoc2F2ZWQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHNhdmVkKTtcbiAgICAgIGZvciAoY29uc3QgW25hbWUsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7bmFtZX1cIl1gKTtcbiAgICAgICAgaWYgKGZpZWxkKSBmaWVsZC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCcpO1xuICAgIGlucHV0cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLm5hbWUpIGRhdGFbZWwubmFtZV0gPSBlbC52YWx1ZTtcbiAgICB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleVZhbHVlLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleVZhbHVlKTtcbiAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb250csO0bGV1ciBTdGltdWx1cyDigJQgTWVudSBidXJnZXIgbW9iaWxlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0gT3V2cmUvZmVybWUgbGUgbWVudSBtb2JpbGUgKF9tb2JpbGVfbWVudS5odG1sLnR3aWcpXG4vLyAtIEfDqHJlIGzigJllZmZldCBkZSBzbGlkZSBsYXTDqXJhbCArIGZhZGUgZHUgZm9uZFxuLy8gLSBGb2N1cyB0cmFwICsgZmVybWV0dXJlIHZpYSDDiWNoYXAgLyBjbGljIGV4dMOpcmlldXJcbi8vIC0gQVJJQSBjb25mb3JtZSAoZXhwYW5kZWQgKyBoaWRkZW4pXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gWydtZW51JywgJ3BhbmVsJ107XG5cbiAgY29ubmVjdCgpIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzYWJsZVNlbGVjdG9ycyA9XG4gICAgICAnYVtocmVmXSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWEsIGlucHV0LCBzZWxlY3QsIFt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKSc7XG5cbiAgICAvLyBMaWFpc29uIGRlcyBoYW5kbGVyc1xuICAgIHRoaXMuYm91bmRLZXlkb3duID0gdGhpcy5oYW5kbGVLZXlkb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ib3VuZENsaWNrT3V0c2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XG5cbiAgICBjb25zb2xlLmxvZygnaGVhZGVyLW5hdiBjb25uZWN0w6kgKFN0aW11bHVzIGFjdGlmKScpO1xuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgdGhpcy5idXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0OyAvLyBib3V0b24gYnVyZ2VyXG4gICAgdGhpcy5vcGVuID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuTWVudSgpO1xuICB9XG5cbiAgb3Blbk1lbnUoKSB7XG4gICAgaWYgKHRoaXMub3BlbikgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coJ091dmVydHVyZSBkdSBtZW51IG1vYmlsZScpO1xuICAgIGNvbnN0IG1lbnUgPSB0aGlzLm1lbnVUYXJnZXQ7XG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLnBhbmVsVGFyZ2V0O1xuXG4gICAgLy8gQWZmaWNoZSBsZSBmb25kIG5vaXIgZXQgYW5pbWVcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicsICdhbmltYXRlLWZhZGUtb3V0Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWZhZGUtaW4nKTtcbiAgICBtZW51LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcblxuICAgIC8vIEZhaXQgZ2xpc3NlciBsZSBwYW5uZWF1IGJsYW5jXG4gICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNsYXRlLXgtZnVsbCcpO1xuICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zbGF0ZS14LTAnKTtcblxuICAgIHRoaXMuYnV0dG9uPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIHRoaXMub3BlbiA9IHRydWU7XG5cbiAgICAvLyBGb2N1cyB0cmFwXG4gICAgdGhpcy5mb2N1c2FibGVzID0gcGFuZWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLmZvY3VzYWJsZVNlbGVjdG9ycyk7XG4gICAgdGhpcy5maXJzdEZvY3VzYWJsZSA9IHRoaXMuZm9jdXNhYmxlc1swXTtcbiAgICB0aGlzLmxhc3RGb2N1c2FibGUgPSB0aGlzLmZvY3VzYWJsZXNbdGhpcy5mb2N1c2FibGVzLmxlbmd0aCAtIDFdO1xuICAgIGlmICh0aGlzLmZpcnN0Rm9jdXNhYmxlKSB0aGlzLmZpcnN0Rm9jdXNhYmxlLmZvY3VzKCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEtleWRvd24pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZENsaWNrT3V0c2lkZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMub3BlbikgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coJ/CflLkgRmVybWV0dXJlIGR1IG1lbnUgbW9iaWxlJyk7XG4gICAgY29uc3QgbWVudSA9IHRoaXMubWVudVRhcmdldDtcbiAgICBjb25zdCBwYW5lbCA9IHRoaXMucGFuZWxUYXJnZXQ7XG5cbiAgICAvLyBBbmltYXRpb24gZGUgc29ydGllXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWZhZGUtaW4nKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtZmFkZS1vdXQnKTtcbiAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCd0cmFuc2xhdGUteC1mdWxsJyk7XG4gICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNsYXRlLXgtMCcpO1xuXG4gICAgLy8gTWFzcXVhZ2UgYXByw6hzIGxhIHRyYW5zaXRpb25cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH0sIDMwMCk7IC8vIGR1csOpZSBpZGVudGlxdWUgw6AgbOKAmWFuaW1hdGlvbiBDU1NcblxuICAgIHRoaXMuYnV0dG9uPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kS2V5ZG93bik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kQ2xpY2tPdXRzaWRlKTtcblxuICAgIHRoaXMuYnV0dG9uPy5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmICghdGhpcy5vcGVuKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgIGlmICghdGhpcy5mb2N1c2FibGVzIHx8IHRoaXMuZm9jdXNhYmxlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZmlyc3RGb2N1c2FibGUpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMubGFzdEZvY3VzYWJsZS5mb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKCFldmVudC5zaGlmdEtleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmxhc3RGb2N1c2FibGUpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGUuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5vcGVuICYmXG4gICAgICAhdGhpcy5wYW5lbFRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAhdGhpcy5idXR0b24uY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gWydpbnB1dCcsICdwcmV2aWV3J107XG5cbiAgY29ubmVjdCgpIHtcbiAgICB0aGlzLnByZXZpZXdUYXJnZXQuaW5uZXJIVE1MID0gJyc7IC8vIGNsZWFuIGF1IGNoYXJnZW1lbnRcbiAgfVxuXG4gIHByZXZpZXcoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmlucHV0VGFyZ2V0LmZpbGVzO1xuXG4gICAgLy8gcmVzZXQgcHJldmlld1xuICAgIHRoaXMucHJldmlld1RhcmdldC5pbm5lckhUTUwgPSAnJztcblxuICAgIGlmICghZmlsZXMgfHwgZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQXJyYXkuZnJvbShmaWxlcykuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgaWYgKCFmaWxlLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJykpIHJldHVybjtcblxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NOYW1lID1cbiAgICAgICAgICAncmVsYXRpdmUgdy0yNCBoLTI0IHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyBib3JkZXIgYm9yZGVyLWdyYXktMjAwJztcblxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtlLnRhcmdldC5yZXN1bHR9XCIgY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiIC8+XG5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHAtMSBiZy1yZWQtNjAwIHRleHQtd2hpdGUgdGV4dC14cyByb3VuZGVkLWJsXCJcbiAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwiY2xpY2stPmltYWdlLXByZXZpZXcjcmVtb3ZlXCJcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIiR7ZmlsZS5uYW1lfVwiPlxuICAgICAgICAgICAgw5dcbiAgICAgICAgICA8L2J1dHRvbj5gO1xuXG4gICAgICAgIHRoaXMucHJldmlld1RhcmdldC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfTtcblxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWU7XG5cbiAgICAvLyByZWNyw6llciBsYSBGaWxlTGlzdCBzYW5zIGwnaW1hZ2UgcmV0aXLDqWVcbiAgICBjb25zdCBkdCA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcblxuICAgIEFycmF5LmZyb20odGhpcy5pbnB1dFRhcmdldC5maWxlcykuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgaWYgKGZpbGUubmFtZSAhPT0gbmFtZSkge1xuICAgICAgICBkdC5pdGVtcy5hZGQoZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmlucHV0VGFyZ2V0LmZpbGVzID0gZHQuZmlsZXM7XG5cbiAgICAvLyByYWZyYcOuY2hpciBsYSBwcmV2aWV3XG4gICAgdGhpcy5wcmV2aWV3KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKipcbiAqIENvbnRyw7RsZXVyIFN0aW11bHVzIOKAlCBBdXRvY29tcGzDqXRpb24gZGUgbGEgbG9jYWxpc2F0aW9uIChBUEkgQkFOKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAtIFByb3Bvc2UgZGVzIHZpbGxlc1xuICogLSBDb21wYXRpYmlsaXTDqSBTdGltdWx1cyBjb21wbMOodGVcbiAqIC0gRml4IDogw6l2aXRlIGxlcyA0MDAgY2F1c8OpcyBwYXIga2V5ZG93biAvIGV2ZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gWydpbnB1dCcsICdsaXN0J107XG4gIGNvbm5lY3QoKSB7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IC0xO1xuICAgIHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGlzdFRhcmdldC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbGlzdGJveCcpO1xuICAgIHRoaXMubGlzdFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcbiAgfVxuICAvKipcbiAgICogUmVjaGVyY2hlIHZpYSBBUEkg4oCUIGNvcnJpZ8OpZSAoYW50aSA0MDAgZXJyb3JzKVxuICAgKi9cbiAgYXN5bmMgc2VhcmNoKGV2ZW50KSB7XG4gICAgLy8gRW1ww6pjaGUgbGVzIGFwcGVscyBkw6ljbGVuY2jDqXMgcGFyIGtleWRvd25cbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5pbnB1dFRhcmdldC52YWx1ZS50cmltKCk7XG5cbiAgICBpZiAocXVlcnkubGVuZ3RoIDwgMykge1xuICAgICAgdGhpcy5jbGVhckxpc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGktYWRyZXNzZS5kYXRhLmdvdXYuZnIvc2VhcmNoLz9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICl9JmxpbWl0PTYmdHlwZT1tdW5pY2lwYWxpdHlgXG4gICAgICApO1xuXG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0FQSSBBZHJlc3NlIHJlbnZvaWUgdW5lIGVycmV1ciA6JywgcmVzLnN0YXR1cyk7XG4gICAgICAgIHRoaXMuY2xlYXJMaXN0KCk7XG4gICAgICAgIHRoaXMucmVuZGVyTGlzdChbeyBwcm9wZXJ0aWVzOiB7IGxhYmVsOiAnQXVjdW4gcsOpc3VsdGF0ICh0YXBleiBhdSBtb2lucyAzIGxldHRyZXMpJyB9IH1dKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICB0aGlzLnJlbmRlckxpc3QoZGF0YS5mZWF0dXJlcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgQVBJIEFkcmVzc2UgOicsIGVycik7XG4gICAgICB0aGlzLmNsZWFyTGlzdCgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogR8OpbsOocmUgbGEgbGlzdGUgZOKAmW9wdGlvbnNcbiAgICovXG4gIHJlbmRlckxpc3QoZmVhdHVyZXMpIHtcbiAgICB0aGlzLmNsZWFyTGlzdCgpO1xuICAgIGlmICghZmVhdHVyZXMgfHwgZmVhdHVyZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBmZWF0dXJlcy5mb3JFYWNoKChmLCBpKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbCA9IGYucHJvcGVydGllcy5sYWJlbDtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgbGkudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICAgIGxpLmNsYXNzTmFtZSA9ICdweC0zIHB5LTIgdGV4dC1zbSBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy10YWxlbnRla28tcGVhY2gtMjAwIHRyYW5zaXRpb24nO1xuICAgICAgbGkuc2V0QXR0cmlidXRlKCdyb2xlJywgJ29wdGlvbicpO1xuICAgICAgbGkuc2V0QXR0cmlidXRlKCdpZCcsIGBvcHQtJHtpfWApO1xuICAgICAgbGkuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZWxlY3QobGFiZWwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RUYXJnZXQuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5saXN0VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHRoaXMubGlzdFRhcmdldC5zdHlsZS5hbmltYXRpb24gPSAndGstYXV0b2NvbXBsZXRlLWZhZGUtaW4gMC4xNXMgZWFzZS1vdXQnO1xuICAgIHRoaXMuaW5wdXRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSk7XG4gIH1cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gY2xhdmllclxuICAgKi9cbiAga2V5ZG93bihldmVudCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5saXN0VGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAodGhpcy5hY3RpdmVJbmRleCArIDEpICUgaXRlbXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodChpdGVtcyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9ICh0aGlzLmFjdGl2ZUluZGV4IC0gMSArIGl0ZW1zLmxlbmd0aCkgJSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0KGl0ZW1zKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPj0gMCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaXRlbXNbdGhpcy5hY3RpdmVJbmRleF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ21vdXNlZG93bicpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgdGhpcy5jbGVhckxpc3QoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBam91dGUgbGUgc3R5bGUgc3VyIGzigJlvcHRpb24gYWN0aXZlXG4gICAqL1xuICBoaWdobGlnaHQoaXRlbXMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKChsaSwgaSkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlID0gaSA9PT0gdGhpcy5hY3RpdmVJbmRleDtcbiAgICAgIGxpLmNsYXNzTGlzdC50b2dnbGUoJ2JnLXRhbGVudGVrby1wZWFjaC0yMDAnLCBhY3RpdmUpO1xuICAgICAgbGkuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgYWN0aXZlID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmlucHV0VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgaXRlbXNbdGhpcy5hY3RpdmVJbmRleF0uaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0VGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBRdWFuZCBvbiBzw6lsZWN0aW9ubmUgdW5lIHN1Z2dlc3Rpb25cbiAgICovXG4gIHNlbGVjdChsYWJlbCkge1xuICAgIHRoaXMuaW5wdXRUYXJnZXQudmFsdWUgPSBsYWJlbDtcbiAgICB0aGlzLmNsZWFyTGlzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZlcm1lIGxlIHBhbm5lYXUgc2kgY2xpYyBleHTDqXJpZXVyXG4gICAqL1xuICBjbG9zZU9uQ2xpY2tPdXRzaWRlKGUpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2xlYXJMaXN0KCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBbmltYXRpb24gZmVybWV0dXJlICsgcmVzZXRcbiAgICovXG4gIGNsZWFyTGlzdCgpIHtcbiAgICBpZiAodGhpcy5saXN0VGFyZ2V0ICYmIHRoaXMubGlzdFRhcmdldC5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcbiAgICAgIHRoaXMubGlzdFRhcmdldC5zdHlsZS5hbmltYXRpb24gPSAndGstYXV0b2NvbXBsZXRlLWZhZGUtb3V0IDAuMTVzIGVhc2UtaW4nO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9yZXNldExpc3QoKSwgMTUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVzZXRMaXN0KCk7XG4gICAgfVxuICB9XG4gIF9yZXNldExpc3QoKSB7XG4gICAgdGhpcy5saXN0VGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMubGlzdFRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB0aGlzLmlucHV0VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIHRoaXMuaW5wdXRUYXJnZXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmNsb3NlT25DbGlja091dHNpZGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLyoqXG4gKiBDb250csO0bGV1ciA6IENvbmZpcm1hdGlvbiBkdSBtb3QgZGUgcGFzc2VcbiAqXG4gKiAtIFbDqXJpZmllIGVuIGRpcmVjdCBsJ8OpZ2FsaXTDqSBkZXMgbW90cyBkZSBwYXNzZVxuICogLSBNZXNzYWdlIGNsYWlyICsgaWPDtG5lcyBGb250QXdlc29tZVxuICogLSBhcmlhLWxpdmUgKyBhcmlhLWludmFsaWRcbiAqIC0gRMOpc2FjdGl2ZSBsZSBib3V0b24gc3VibWl0IHNpIG1pc21hdGNoXG4gKiAtIFN5bmNocm9uaXPDqSBhdmVjIHBhc3N3b3JkX3N0cmVuZ3RoICjDqWNvdXRlIGzigJnDqXbDqW5lbWVudClcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdGFyZ2V0cyA9IFsnb3JpZ2luYWwnLCAnY29uZmlybScsICdmZWVkYmFjaycsICdzdWJtaXQnXTtcbiAgY29ubmVjdCgpIHtcbiAgICB0aGlzLmZlZWRiYWNrVGFyZ2V0LnNldEF0dHJpYnV0ZSgncm9sZScsICdzdGF0dXMnKTtcbiAgICB0aGlzLmZlZWRiYWNrVGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuICAgIC8vIFBhciBkw6lmYXV0LCBvbiBkw6lzYWN0aXZlIGxlIGJvdXRvbiB0YW50IHF1ZSByaWVuIG7igJllc3QgdmFsaWTDqVxuICAgIGlmICh0aGlzLmhhc1N1Ym1pdFRhcmdldCkge1xuICAgICAgdGhpcy5zdWJtaXRUYXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyDDiWNvdXRlIGxlcyDDqXbDqW5lbWVudHMgZHUgY29udHJvbGxlciBwYXNzd29yZF9zdHJlbmd0aFxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwYXNzd29yZC1zdHJlbmd0aC11cGRhdGVkJywgKGUpID0+IHtcbiAgICAgIHRoaXMucGFzc3dvcmRTdHJvbmcgPSBlLmRldGFpbC52YWxpZDtcbiAgICAgIHRoaXMuY2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICBjaGVjaygpIHtcbiAgICBjb25zdCBwd2QgPSB0aGlzLm9yaWdpbmFsVGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IGNvbmZpcm0gPSB0aGlzLmNvbmZpcm1UYXJnZXQudmFsdWU7XG4gICAgLy8gQ2hhbXAgdmlkZSDihpIgcmVzZXRcbiAgICBpZiAoIWNvbmZpcm0pIHtcbiAgICAgIHRoaXMuZmVlZGJhY2tUYXJnZXQuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLmNvbmZpcm1UYXJnZXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgdGhpcy5jb25maXJtVGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJyk7XG4gICAgICB0aGlzLnVwZGF0ZVN1Ym1pdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaCA9IHB3ZCA9PT0gY29uZmlybTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHRoaXMuZmVlZGJhY2tUYXJnZXQuaW5uZXJIVE1MID1cbiAgICAgICAgJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hlY2stY2lyY2xlIHRleHQtZ3JlZW4tNTAwIG1yLTFcIj48L2k+PHNwYW4+TGVzIG1vdHMgZGUgcGFzc2UgY29ycmVzcG9uZGVudC48L3NwYW4+JztcbiAgICAgIHRoaXMuZmVlZGJhY2tUYXJnZXQuY2xhc3NOYW1lID0gJ2ZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtZ3JlZW4tNjAwIHRleHQteHMgbXQtMSc7XG4gICAgICB0aGlzLmNvbmZpcm1UYXJnZXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgdGhpcy5jb25maXJtVGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgJ2ZhbHNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmVlZGJhY2tUYXJnZXQuaW5uZXJIVE1MID1cbiAgICAgICAgJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLXhtYXJrIHRleHQtcmVkLTUwMCBtci0xXCI+PC9pPjxzcGFuPkxlcyBtb3RzIGRlIHBhc3NlIG5lIGNvcnJlc3BvbmRlbnQgcGFzLjwvc3Bhbj4nO1xuICAgICAgdGhpcy5mZWVkYmFja1RhcmdldC5jbGFzc05hbWUgPSAnZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1yZWQtNjAwIHRleHQteHMgbXQtMSc7XG4gICAgICB0aGlzLmNvbmZpcm1UYXJnZXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0xlcyBtb3RzIGRlIHBhc3NlIG5lIGNvcnJlc3BvbmRlbnQgcGFzLicpO1xuICAgICAgdGhpcy5jb25maXJtVGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgJ3RydWUnKTtcbiAgICB9XG4gICAgdGhpcy5wYXNzd29yZHNNYXRjaCA9IG1hdGNoO1xuICAgIHRoaXMudXBkYXRlU3VibWl0KCk7XG4gIH1cbiAgdXBkYXRlU3VibWl0KCkge1xuICAgIGlmICghdGhpcy5oYXNTdWJtaXRUYXJnZXQpIHJldHVybjtcbiAgICAvLyBCdXR0b24gZW5hYmxlZCBvbmx5IGlmIDpcbiAgICAvLyAtIHBhc3N3b3JkX3N0cmVuZ3RoIHZhbGlkZVxuICAgIC8vIC0gcGFzc3dvcmRfY29uZmlybSBPS1xuICAgIGNvbnN0IGNhblN1Ym1pdCA9IHRoaXMucGFzc3dvcmRTdHJvbmcgJiYgdGhpcy5wYXNzd29yZHNNYXRjaDtcbiAgICB0aGlzLnN1Ym1pdFRhcmdldC5kaXNhYmxlZCA9ICFjYW5TdWJtaXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKipcbiAqIENvbnRyw7RsZXVyIFN0aW11bHVzIDogVsOpcmlmaWNhdGlvbiBkZSBsYSBmb3JjZSBkdSBtb3QgZGUgcGFzc2VcbiAqXG4gKiAtIFLDqGdsZXMgQU5TU0kgOiBsb25ndWV1ciwgbWFqLCBtaW4sIGNoaWZmcmUsIHNww6ljaWFsXG4gKiAtIEZlZWRiYWNrIGxpdmUgKGxpc3RlIGRlcyBjcml0w6hyZXMpXG4gKiAtIGFyaWEtaW52YWxpZCArIGFyaWEtbGl2ZVxuICogLSBDb21tdW5pcXVlIGF2ZWMgcGFzc3dvcmQtY29uZmlybSBwb3VyIGTDqXNhY3RpdmVyIGxlIHN1Ym1pdFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gWydpbnB1dCcsICdmZWVkYmFjaycsICdzdWJtaXQnXTtcbiAgY29ubmVjdCgpIHtcbiAgICAvLyA9PT0gUsOoZ2xlcyBBTlNTSSA9PT1cbiAgICB0aGlzLnJ1bGVzID0gW1xuICAgICAgeyByZWdleDogLy57MTAsfS8sIHRleHQ6ICdBdSBtb2lucyAxMCBjYXJhY3TDqHJlcycgfSxcbiAgICAgIHsgcmVnZXg6IC9bQS1aXS8sIHRleHQ6ICdBdSBtb2lucyB1bmUgbWFqdXNjdWxlJyB9LFxuICAgICAgeyByZWdleDogL1thLXpdLywgdGV4dDogJ0F1IG1vaW5zIHVuZSBtaW51c2N1bGUnIH0sXG4gICAgICB7IHJlZ2V4OiAvXFxkLywgdGV4dDogJ0F1IG1vaW5zIHVuIGNoaWZmcmUnIH0sXG4gICAgICB7IHJlZ2V4OiAvW1xcV19dLywgdGV4dDogJ0F1IG1vaW5zIHVuIGNhcmFjdMOocmUgc3DDqWNpYWwnIH0sXG4gICAgXTtcbiAgICAvLyA9PT0gVUwgZGUgY3JpdMOocmVzID09PVxuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdGhpcy5saXN0LmNsYXNzTmFtZSA9ICd0ZXh0LXhzIG10LTIgc3BhY2UteS0xJztcbiAgICB0aGlzLmxpc3Quc2V0QXR0cmlidXRlKCdyb2xlJywgJ3N0YXR1cycpO1xuICAgIHRoaXMubGlzdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGkuZGF0YXNldC5pbmRleCA9IGk7XG4gICAgICBsaS5pbm5lckhUTUwgPSB0aGlzLnJlbmRlclJ1bGUocnVsZS50ZXh0LCBmYWxzZSk7XG4gICAgICBsaS5jbGFzc05hbWUgPSAnZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1yZWQtNjAwJztcbiAgICAgIHRoaXMubGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgdGhpcy5mZWVkYmFja1RhcmdldC5yZXBsYWNlQ2hpbGRyZW4odGhpcy5saXN0KTtcbiAgfVxuICBjaGVjaygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXRUYXJnZXQudmFsdWU7XG4gICAgbGV0IHZhbGlkQ291bnQgPSAwO1xuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgbGkgPSB0aGlzLmxpc3QucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XCIke2l9XCJdYCk7XG4gICAgICBjb25zdCBwYXNzZWQgPSBydWxlLnJlZ2V4LnRlc3QodmFsdWUpO1xuICAgICAgbGkuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXJSdWxlKHJ1bGUudGV4dCwgcGFzc2VkKTtcbiAgICAgIGxpLmNsYXNzTmFtZSA9IHBhc3NlZFxuICAgICAgICA/ICdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LWdyZWVuLTYwMCdcbiAgICAgICAgOiAnZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1yZWQtNjAwJztcbiAgICAgIGlmIChwYXNzZWQpIHZhbGlkQ291bnQrKztcbiAgICB9KTtcbiAgICBjb25zdCBhbGxWYWxpZCA9IHZhbGlkQ291bnQgPT09IHRoaXMucnVsZXMubGVuZ3RoO1xuICAgIC8vIEFSSUFcbiAgICB0aGlzLmlucHV0VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgYWxsVmFsaWQgPyAnZmFsc2UnIDogJ3RydWUnKTtcbiAgICB0aGlzLmlucHV0VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3ZhbGlkLXBhc3N3b3JkJywgYWxsVmFsaWQpO1xuICAgIC8vIENvbW11bmlxdWUgYXZlYyBwYXNzd29yZC1jb25maXJtIHNpIHByw6lzZW50XG4gICAgaWYgKHRoaXMuZWxlbWVudC5kYXRhc2V0Lmhhc0NvbmZpcm0gPT09ICd0cnVlJykge1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3Bhc3N3b3JkLXN0cmVuZ3RoLXVwZGF0ZWQnLCB7XG4gICAgICAgIGRldGFpbDogeyB2YWxpZDogYWxsVmFsaWQgfSxcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfVxuICByZW5kZXJSdWxlKHRleHQsIHBhc3NlZCkge1xuICAgIHJldHVybiBwYXNzZWRcbiAgICAgID8gYDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hlY2stY2lyY2xlIHRleHQtZ3JlZW4tNTAwIG1yLTFcIj48L2k+PHNwYW4+JHt0ZXh0fTwvc3Bhbj5gXG4gICAgICA6IGA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZS14bWFyayB0ZXh0LXJlZC01MDAgbXItMVwiPjwvaT48c3Bhbj4ke3RleHR9PC9zcGFuPmA7XG4gIH1cbn1cbiIsIi8vIGFzc2V0cy9jb250cm9sbGVycy9yYXRpbmdfZmlsdGVyX2NvbnRyb2xsZXIuanNcblxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qKlxuICogQ29udHLDtGxldXIgU3RpbXVsdXMg4oCUIFPDqWxlY3RldXIgZOKAmcOpdmFsdWF0aW9uICjimIUpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBlcm1ldCDDoCBs4oCZdXRpbGlzYXRldXIgZGUgY2hvaXNpciB1biBuaXZlYXUgZOKAmcOpdG9pbGVzICgxIMOgIDUpXG4gKiBkYW5zIGxlIHBhbm5lYXUgZGUgZmlsdHJlcyBkZSByZWNoZXJjaGUuXG4gKlxuICogRm9uY3Rpb25uYWxpdMOpcyA6XG4gKiAtIDUgw6l0b2lsZXMgaW50ZXJhY3RpdmVzIGJhc8OpZXMgc3VyIFNWR1xuICogLSBNaXNlIMOgIGpvdXIgZOKAmXVuIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJhdGluZ1wiPlxuICogLSBTb3VtaXNzaW9uIGF1dG9tYXRpcXVlIGR1IGZvcm11bGFpcmUgZGUgZmlsdHJlc1xuICogLSBBY2Nlc3NpYmlsaXTDqSBjb21wbMOodGUgOiBjbGF2aWVyICsgYXJpYS1sYWJlbCArIGFyaWEtcHJlc3NlZFxuICpcbiAqIENvbXBhdGlibGUgYXZlYyA6IHRlbXBsYXRlcy9zZWFyY2gvaW5kZXguaHRtbC50d2lnXG4gKiBVdGlsaXPDqSBjb25qb2ludGVtZW50IGF2ZWMgOiBmaWx0ZXItcGFuZWxfY29udHJvbGxlci5qc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICBzdGF0aWMgdGFyZ2V0cyA9IFsnaW5wdXQnLCAnc3RhcicsICdmb3JtJ107XG5cbiAgY29ubmVjdCgpIHtcbiAgICAvLyBJbml0aWFsaXNlIGxhIHZhbGV1ciAocGFyIGTDqWZhdXQgMCkgZGVwdWlzIGxlIGNoYW1wIGNhY2jDqVxuICAgIHRoaXMudmFsdWUgPSBwYXJzZUludCh0aGlzLmlucHV0VGFyZ2V0LnZhbHVlIHx8IDAsIDEwKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuICAvKipcbiAgICogU8OpbGVjdGlvbm5lIHVuZSBub3RlIGF1IGNsaWMgKG91IMOgIGxhIHRvdWNoZSBFc3BhY2UvRW50csOpZSkuXG4gICAqIFBlcm1ldCBhdXNzaSBkZSBkw6lzw6lsZWN0aW9ubmVyIGxhIG5vdGUgc2kgb24gcmVjbGlxdWUgZGVzc3VzLlxuICAgKi9cbiAgc2VsZWN0KGV2ZW50KSB7XG4gICAgY29uc3QgdmFsID0gcGFyc2VJbnQoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnZhbHVlLCAxMCk7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgPT09IHZhbCA/IDAgOiB2YWw7IC8vIHRvZ2dsZSBzaSBvbiByZWNsaXF1ZVxuICAgIHRoaXMuaW5wdXRUYXJnZXQudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgLy8gU291bWlzc2lvbiBhdXRvbWF0aXF1ZSBkdSBmb3JtdWxhaXJlIHByaW5jaXBhbCBzaSBkaXNwb25pYmxlXG4gICAgY29uc3QgZm9ybSA9IHRoaXMuZWxlbWVudC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgaWYgKGZvcm0pIGZvcm0ucmVxdWVzdFN1Ym1pdCgpO1xuICB9XG4gIC8qKlxuICAgKiBTdXJ2b2wgc291cmlzIDogbWV0IGVuIHN1cmJyaWxsYW5jZSB0ZW1wb3JhaXJlbWVudFxuICAgKi9cbiAgaGlnaGxpZ2h0KGV2ZW50KSB7XG4gICAgY29uc3QgdmFsID0gcGFyc2VJbnQoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnZhbHVlLCAxMCk7XG4gICAgdGhpcy51cGRhdGVTdGFycyh2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFF1YW5kIG9uIHNvcnQgZHUgc3Vydm9sIDogcmVzdGF1cmUgbGEgdmFsZXVyIGFjdHVlbGxlXG4gICAqL1xuICBjbGVhckhpZ2hsaWdodCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSYWZyYcOuY2hpdCBs4oCZw6l0YXQgdmlzdWVsIGNvbXBsZXQgc2Vsb24gbGEgdmFsZXVyIGFjdGl2ZVxuICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXJzKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldCDDoCBqb3VyIGzigJlhZmZpY2hhZ2UgKGNvdWxldXIgKyDDqXRhdCBBUklBKVxuICAgKiBAcGFyYW0ge251bWJlcn0gYWN0aXZlVmFsdWVcbiAgICovXG4gIHVwZGF0ZVN0YXJzKGFjdGl2ZVZhbHVlKSB7XG4gICAgdGhpcy5zdGFyVGFyZ2V0cy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgICAgY29uc3QgZmlsbGVkID0gaSArIDEgPD0gYWN0aXZlVmFsdWU7XG5cbiAgICAgIC8vIEdlc3Rpb24gZGVzIGNsYXNzZXMgVGFpbHdpbmRcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ3RleHQtdGFsZW50ZWtvLW9yYW5nZS01MDAnLCBmaWxsZWQpO1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgndGV4dC1ncmF5LTMwMCcsICFmaWxsZWQpO1xuXG4gICAgICAvLyBBY2Nlc3NpYmlsaXTDqSA6IGluZGlxdWVyIHZpc3VlbGxlbWVudCBldCB2b2NhbGVtZW50IGzigJnDqXRhdFxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBmaWxsZWQpO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBgJHtpICsgMX0gw6l0b2lsZSR7aSA+IDAgPyAncycgOiAnJ31gKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gIHN0YXRpYyB0YXJnZXRzID0gWydjb250YWluZXInXTtcbiAgc2Nyb2xsTGVmdCgpIHtcbiAgICBpZiAodGhpcy5oYXNDb250YWluZXJUYXJnZXQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyVGFyZ2V0LnNjcm9sbEJ5KHsgbGVmdDogLTI1MCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgIH1cbiAgfVxuICBzY3JvbGxSaWdodCgpIHtcbiAgICBpZiAodGhpcy5oYXNDb250YWluZXJUYXJnZXQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyVGFyZ2V0LnNjcm9sbEJ5KHsgbGVmdDogMjUwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY29uc29sZSIsImxvZyIsIkFwcGxpY2F0aW9uIiwid2luZG93IiwiYXBwbGljYXRpb24iLCJzdGFydCIsIkhlYWRlck5hdkNvbnRyb2xsZXIiLCJDdXN0b21TZWxlY3RDb250cm9sbGVyIiwiRGFya01vZGVDb250cm9sbGVyIiwiRmF2b3JpdGVUb2dnbGVDb250cm9sbGVyIiwiRmlsdGVyUGFuZWxDb250cm9sbGVyIiwiRmxhc2hDb250cm9sbGVyIiwiRm9udFNpemVDb250cm9sbGVyIiwiRm9ybUF1dG9zYXZlQ29udHJvbGxlciIsIkxvY2F0aW9uQXV0b2NvbXBsZXRlQ29udHJvbGxlciIsIlJhdGluZ0ZpbHRlckNvbnRyb2xsZXIiLCJQYXNzd29yZENvbmZpcm1Db250cm9sbGVyIiwiUGFzc3dvcmRTdHJlbmd0aENvbnRyb2xsZXIiLCJTY3JvbGxOYXZDb250cm9sbGVyIiwiSW1hZ2VQcmV2aWV3Q29udHJvbGxlciIsInJlZ2lzdGVyIiwiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0Iiwib3BlbiIsIl9ib3VuZENsaWNrT3V0c2lkZSIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImJpbmQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNjb25uZWN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVWaXNpYmlsaXR5Iiwic2VsZWN0T3B0aW9uIiwic2VsZWN0ZWRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0ZWRMYWJlbCIsInRleHRDb250ZW50IiwidHJpbSIsImlucHV0VGFyZ2V0IiwibGFiZWxUYXJnZXQiLCJjbG9zZSIsImhhbmRsZUtleWRvd24iLCJpbmNsdWRlcyIsImZpcnN0T3B0aW9uIiwib3B0aW9uVGFyZ2V0cyIsImZvY3VzIiwiaGFuZGxlT3B0aW9uS2V5ZG93biIsImN1cnJlbnRJbmRleCIsImluZGV4T2YiLCJuZXh0IiwicHJldiIsImxlbmd0aCIsImJ1dHRvblRhcmdldCIsImVsZW1lbnQiLCJjb250YWlucyIsInRhcmdldCIsImxpc3RUYXJnZXQiLCJjbGFzc0xpc3QiLCJzZXRBdHRyaWJ1dGUiLCJfZGVmaW5lUHJvcGVydHkiLCJkZWZhdWx0Iiwic2F2ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJlZmVyc0RhcmsiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImVuYWJsZWQiLCJzZXRNb2RlIiwiaXNEYXJrIiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkIiwic2V0SXRlbSIsInJlbW92ZSIsImZpbGxlZFRhcmdldCIsInNldFN0YXRlIiwiaXNGYXYiLCJlbXB0eVRhcmdldCIsInNob3dGaWxsZWQiLCJzaG93RW1wdHkiLCJfdGhpcyIsInRvZ2dsZUJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXNhYmxlU2VsZWN0b3JzIiwiZmlyc3RGb2N1c2FibGUiLCJsYXN0Rm9jdXNhYmxlIiwidHJpZ2dlckJ1dHRvbiIsImUiLCJpc09wZW4iLCJ0cmFwRm9jdXMiLCJwYW5lbFRhcmdldCIsInN0YXRlIiwib3ZlcmxheVRhcmdldCIsImJvZHkiLCJmb2N1c2FibGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIl90aGlzMiIsInNldFRpbWVvdXQiLCJmaXJzdCIsImxhc3QiLCJzaGlmdEtleSIsImFjdGl2ZUVsZW1lbnQiLCJ0aW1lb3V0VmFsdWUiLCJ0aW1lb3V0IiwidHlwZSIsIk51bWJlciIsImFwcGx5U2l6ZSIsInNldFNtYWxsIiwic2V0Tm9ybWFsIiwic2V0TGFyZ2UiLCJzaXplIiwiaHRtbCIsInN0eWxlIiwiZm9udFNpemUiLCJzbWFsbFRhcmdldCIsIm5vcm1hbFRhcmdldCIsImxhcmdlVGFyZ2V0Iiwia2V5VmFsdWUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJuYW1lIiwiZmllbGQiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0Iiwic2F2ZSIsImlucHV0cyIsImZvckVhY2giLCJlbCIsInN0cmluZ2lmeSIsImNsZWFyIiwicmVtb3ZlSXRlbSIsIlN0cmluZyIsImJvdW5kS2V5ZG93biIsImJvdW5kQ2xpY2tPdXRzaWRlIiwiYnV0dG9uIiwib3Blbk1lbnUiLCJfdGhpcyRidXR0b24iLCJtZW51IiwibWVudVRhcmdldCIsInBhbmVsIiwicmVtb3ZlQXR0cmlidXRlIiwiX3RoaXMkYnV0dG9uMiIsIl90aGlzJGJ1dHRvbjMiLCJwcmV2aWV3VGFyZ2V0IiwiaW5uZXJIVE1MIiwicHJldmlldyIsImZpbGVzIiwiQXJyYXkiLCJmcm9tIiwiZmlsZSIsInN0YXJ0c1dpdGgiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInJlc3VsdCIsImFwcGVuZENoaWxkIiwicmVhZEFzRGF0YVVSTCIsImR0IiwiRGF0YVRyYW5zZmVyIiwiaXRlbXMiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl9nZXRQcm90b3R5cGVPZiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJjb25zdHJ1Y3RvciIsIl90eXBlb2YiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiUmVmZXJlbmNlRXJyb3IiLCJCb29sZWFuIiwidmFsdWVPZiIsIl9zZXRQcm90b3R5cGVPZiIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiYWN0aXZlSW5kZXgiLCJjbG9zZU9uQ2xpY2tPdXRzaWRlIiwiX3NlYXJjaCIsIl9jYWxsZWUiLCJxdWVyeSIsInJlcyIsIl90IiwiX2NvbnRleHQiLCJLZXlib2FyZEV2ZW50IiwiY2xlYXJMaXN0IiwiZmV0Y2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJvayIsIndhcm4iLCJzdGF0dXMiLCJyZW5kZXJMaXN0IiwicHJvcGVydGllcyIsImxhYmVsIiwianNvbiIsImZlYXR1cmVzIiwiZXJyb3IiLCJzZWFyY2giLCJfeCIsImxpIiwic2VsZWN0IiwiYW5pbWF0aW9uIiwia2V5ZG93biIsImhpZ2hsaWdodCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImFjdGl2ZSIsImlkIiwiX3RoaXMzIiwiY2hpbGRFbGVtZW50Q291bnQiLCJfcmVzZXRMaXN0IiwiZmVlZGJhY2tUYXJnZXQiLCJoYXNTdWJtaXRUYXJnZXQiLCJzdWJtaXRUYXJnZXQiLCJkaXNhYmxlZCIsInBhc3N3b3JkU3Ryb25nIiwiZGV0YWlsIiwidmFsaWQiLCJjaGVjayIsInB3ZCIsIm9yaWdpbmFsVGFyZ2V0IiwiY29uZmlybSIsImNvbmZpcm1UYXJnZXQiLCJzZXRDdXN0b21WYWxpZGl0eSIsInVwZGF0ZVN1Ym1pdCIsIm1hdGNoIiwicGFzc3dvcmRzTWF0Y2giLCJjYW5TdWJtaXQiLCJydWxlcyIsInJlZ2V4IiwidGV4dCIsImxpc3QiLCJydWxlIiwiaW5kZXgiLCJyZW5kZXJSdWxlIiwicmVwbGFjZUNoaWxkcmVuIiwidmFsaWRDb3VudCIsInBhc3NlZCIsInRlc3QiLCJhbGxWYWxpZCIsImhhc0NvbmZpcm0iLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJwYXJzZUludCIsInJlZnJlc2giLCJ2YWwiLCJmb3JtIiwiY2xvc2VzdCIsInJlcXVlc3RTdWJtaXQiLCJ1cGRhdGVTdGFycyIsImNsZWFySGlnaGxpZ2h0IiwiYWN0aXZlVmFsdWUiLCJzdGFyVGFyZ2V0cyIsImZpbGxlZCIsInNjcm9sbExlZnQiLCJoYXNDb250YWluZXJUYXJnZXQiLCJjb250YWluZXJUYXJnZXQiLCJzY3JvbGxCeSIsImxlZnQiLCJiZWhhdmlvciIsInNjcm9sbFJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==