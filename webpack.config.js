// webpack.config.js
// ===============================================
// Config Webpack Encore pour TalentÉkô
// - Point d’entrée 'app' (importe Tailwind via app.css)
// - Stimulus/Turbo (bridge activé)
// - Source maps en DEV : 'inline-source-map' (évite le schéma webpack://)
// - PostCSS activé (Tailwind v4 via postcss.config.js)
// ===============================================

const Encore = require('@symfony/webpack-encore');

// Configuration de l'environnement si non déjà fait
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  // Dossier de sortie des assets compilés
  .setOutputPath('public/build/')
  // URL publique pour accéder aux assets
  .setPublicPath('/build')
  // .setManifestKeyPrefix('build/') // utile si CDN/sous-dossier

  // ================= Entrées =================
  // Chaque entrée => 1 fichier JS + (si import CSS) 1 fichier CSS
  .addEntry('app', './assets/app.js')

  // Découpage des chunks (optimisation)
  .splitEntryChunks()

  // Bridge Stimulus (permet auto-enregistrement des controllers)
  .enableStimulusBridge('./assets/controllers.json')

  // Runtime séparé (script runtime.js généré)
  .enableSingleRuntimeChunk()

  // Nettoyage du dossier /build avant chaque build
  .cleanupOutputBeforeBuild()

  // ================= Source maps =================
  // DEV: on force 'inline-source-map' pour éviter le protocole webpack://
  // PROD: désactivé (bonnes pratiques, taille/infos sensibles)
  .enableSourceMaps(!Encore.isProduction(), 'cheap-module-source-map')

  // Hash des fichiers en production (cache-busting)
  .enableVersioning(Encore.isProduction())

  // ================= Babel =================
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = '3.38';
  })

  // ================= Loaders =================
  // SASS si besoin (laisse commenté si tu n’utilises pas .scss)
  // .enableSassLoader()

  // PostCSS (indispensable pour Tailwind v4)
  .enablePostCssLoader()

  // ================= Watch =================
  // Ignore node_modules et /public/build pour accélérer le watch
  .configureWatchOptions((watchOptions) => {
    watchOptions.ignored = ['**/node_modules/**', '**/public/build/**'];
  });

// Export de la config
module.exports = Encore.getWebpackConfig();
