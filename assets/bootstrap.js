// assets/bootstrap.js
// ======================================================
// Bootstrap JS — TalentÉkô
// ------------------------------------------------------
// - Initialise Stimulus via @symfony/stimulus-bridge
// - Charge automatiquement tous les contrôleurs
//   du dossier ./controllers (naming convention *controller.js)
// - Compatible ESM (Webpack Encore v5)
// ======================================================

import { startStimulusApp } from '@symfony/stimulus-bridge';

// Création de l’application Stimulus
export const app = startStimulusApp(
  import.meta.webpackContext(
    // Lazy-loader pour les contrôleurs Stimulus
    '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
    {
      recursive: true, // inclut sous-dossiers
      regExp: /\.[jt]sx?$/, // extensions valides : .js, .ts, .jsx, .tsx
    }
  )
);
