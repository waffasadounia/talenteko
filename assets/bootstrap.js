// assets/bootstrap.js
// ======================================================
// Bootstrap JS pour TalentÉkô (Webpack Encore)
// - Initialise Stimulus via @symfony/stimulus-bridge
// - Charge automatiquement les contrôleurs du dossier ./controllers
// Compatible ESM (pas de require())
// ======================================================

import { startStimulusApp } from '@symfony/stimulus-bridge';

// Création de l’application Stimulus
export const app = startStimulusApp(
  import.meta.webpackContext(
    // Charge tous les contrôleurs via lazy-controller-loader
    '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
    {
      recursive: true, // inclut sous-dossiers
      regExp: /\.[jt]sx?$/, // extensions prises en charge (.js, .ts, .jsx, .tsx)
    }
  )
);

// 🔹 Tu peux ajouter des contrôleurs manuellement ici si besoin
// app.register('custom', CustomController);
