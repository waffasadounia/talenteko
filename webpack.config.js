// webpack.config.js
// ===============================================
// Config Webpack Encore pour TalentÃƒâ€°kÃƒÂ´
// -----------------------------------------------
// - EntrÃƒÂ©e principale : app.js (importe Tailwind via app.css)
// - Stimulus/Turbo activÃƒÂ©s via controllers.json
// - Source maps : inline en dev, dÃƒÂ©sactivÃƒÂ©es en prod
// - PostCSS activÃƒÂ© (Tailwind v4)
// - Optimisations prod : cache-busting + intÃƒÂ©gritÃƒÂ© SRI
// ===============================================

const Encore = require('@symfony/webpack-encore');

// Configuration de l'environnement si non dÃƒÂ©jÃƒÂ  fait
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  // ================= Sortie =================
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  // PrÃƒÂ©fixe manifest (utile si dÃƒÂ©ploiement en sous-dossier/CDN)
  .setManifestKeyPrefix('build/')

  // ================= EntrÃƒÂ©es =================
  .addEntry('app', './assets/app.js')

  // DÃƒÂ©coupage des chunks (optimisation)
  .splitEntryChunks()

  // Stimulus Bridge (auto-enregistrement des controllers)
  .enableStimulusBridge('./assets/controllers.json')

  // Runtime sÃƒÂ©parÃƒÂ© (runtime.js gÃƒÂ©nÃƒÂ©rÃƒÂ©)
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
  .enableIntegrityHashes(Encore.isProduction()) // SRI (sÃƒÂ©curitÃƒÂ© intÃƒÂ©gritÃƒÂ© des assets)
  .configureTerserPlugin((options) => {
    options.extractComments = false; // pas de .LICENSE.txt parasites
  })

  // ================= Watch =================
  .configureWatchOptions((watchOptions) => {
    watchOptions.ignored = ['**/node_modules/**', '**/public/build/**'];
  });

// Export de la config
module.exports = Encore.getWebpackConfig();
