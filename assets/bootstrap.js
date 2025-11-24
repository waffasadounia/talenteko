// ======================================================
// Bootstrap JS — Stimulus (TalentÉkô 2025)
// ------------------------------------------------------
// Configuration manuelle de Stimulus pour Webpack Encore 5.x
// Mode ESM strict
// ======================================================

import { Application } from '@hotwired/stimulus';

// --- Initialisation de Stimulus ---
window.application = Application.start();
console.log(' Stimulus initialisé (mode ESM strict, enregistrement manuel)');

// === Import manuel de tous les contrôleurs ===
import HeaderNavController from './controllers/header_nav_controller.js';
import CustomSelectController from './controllers/custom_select_controller.js';
import DarkModeController from './controllers/dark_mode_controller.js';
import FavoriteToggleController from './controllers/favorite_toggle_controller.js';
import FilterPanelController from './controllers/filter_panel_controller.js';
import FlashController from './controllers/flash_controller.js';
import FontSizeController from './controllers/font_size_controller.js';
import FormAutosaveController from './controllers/form_autosave_controller.js';
import LocationAutocompleteController from './controllers/location_autocomplete_controller.js';
import RatingFilterController from './controllers/rating_filter_controller.js';
import PasswordConfirmController from './controllers/password_confirm_controller.js';
import PasswordStrengthController from './controllers/password_strength_controller.js';
import ScrollNavController from './controllers/scroll_nav_controller.js';
import ImagePreviewController from './controllers/image_preview_controller.js';

// --- Enregistrement global Stimulus ---
window.application.register('header-nav', HeaderNavController);
window.application.register('custom-select', CustomSelectController);
window.application.register('dark-mode', DarkModeController);
window.application.register('favorite-toggle', FavoriteToggleController);
window.application.register('filter-panel', FilterPanelController);
window.application.register('flash', FlashController);
window.application.register('font-size', FontSizeController);
window.application.register('form-autosave', FormAutosaveController);
window.application.register('location-autocomplete', LocationAutocompleteController);
window.application.register('rating-filter', RatingFilterController);
window.application.register('password-confirm', PasswordConfirmController);
window.application.register('password-strength', PasswordStrengthController);
window.application.register('scroll-nav', ScrollNavController);
window.application.register('image-preview', ImagePreviewController);

// --- Log de vérification (utile en dev) ---
console.log('Contrôleurs Stimulus enregistrés :');
console.log([
  'header-nav',
  'custom-select',
  'dark-mode',
  'favorite-toggle',
  'filter-panel',
  'flash',
  'font-size',
  'form-autosave',
  'location-autocomplete',
  'rating-filter',
  'password-confirm',
  'password-strength',
  'scroll-nav',
  'image-preview',
]);
