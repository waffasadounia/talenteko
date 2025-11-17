// ===========================================
// Point d'entrée JS — TalentÉkô
// -------------------------------------------
// - Charge Stimulus & Turbo (config Symfony Encore)
// - Importe TailwindCSS via app.css
// ===========================================

import './app.css'; // Tailwind CSS
import './bootstrap.js'; // Stimulus/Turbo + config
/* global process */
if (process.env.NODE_ENV === 'development') {
  console.log('✅ TalentÉkô — assets/app.js chargé avec succès');
}
