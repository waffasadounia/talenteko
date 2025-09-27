// webpack.config.js
// ===============================================
// Config Webpack Encore pour Talenteko
// -----------------------------------------------
// - Entrée principale : app.js (importe Tailwind via app.css)
// - Stimulus/Turbo activés via controllers.json
// - Source maps : inline en dev, désactivées en prod
// - PostCSS activé (Tailwind v4)
// - Optimisations prod : cache-busting + integrity hashes + Terser sans .LICENSE.txt
// ===============================================

const Encore = require('@symfony/webpack-encore');

// Configuration de l'environnement si non déjà fait
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  // ================= Sortie =================
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  // Préfixe manifest (utile si déploiement en sous-dossier/CDN)
  .setManifestKeyPrefix('build/')

  // ================= Entrées =================
  .addEntry('app', './assets/app.js')

  // Découpage des chunks (optimisation)
  .splitEntryChunks()

  // Stimulus Bridge (auto-enregistrement des controllers)
  .enableStimulusBridge('./assets/controllers.json')

  // Runtime séparé (runtime.js généré)
  .enableSingleRuntimeChunk()

  // Nettoyage du dossier /build avant chaque build
  .cleanupOutputBeforeBuild()

  // ================= Source maps =================
  .enableSourceMaps(!Encore.isProduction(), 'cheap-module-source-map')

  // Hash des fichiers en production (cache-busting)
  .enableVersioning(Encore.isProduction())

  // ================= Babel =================
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = '3.38';
  })

  // ================= PostCSS (Tailwind v4) =================
  .enablePostCssLoader()

  // ================= Optimisations PROD =================
  .enableIntegrityHashes(Encore.isProduction()) // SRI (sécurité intégrité des assets)
  .configureTerserPlugin((options) => {
    options.extractComments = false; // pas de .LICENSE.txt parasites
  })

  // ================= Watch =================
  .configureWatchOptions((watchOptions) => {
    watchOptions.ignored = ['**/node_modules/**', '**/public/build/**'];
  });

// Export de la config
module.exports = Encore.getWebpackConfig();
