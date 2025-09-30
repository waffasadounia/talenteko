// webpack.config.js
// ===============================================
// Config Webpack Encore (CommonJS) — TalentÉkô
// -----------------------------------------------
// - Entrée principale : app.js (importe Tailwind via app.css)
// - Stimulus/Turbo activés via controllers.json (require.context)
// - Source maps : inline en dev, désactivées en prod
// - PostCSS activé (Tailwind v4)
// - Optimisations prod : cache-busting + integrity hashes + Terser sans .LICENSE.txt
// ===============================================

const Encore = require('@symfony/webpack-encore');

// Configuration de l’environnement si non déjà fait
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  // ================= Sortie =================
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .setManifestKeyPrefix('build/')

  // ================= Entrées =================
  .addEntry('app', './assets/app.js')

  // Découpage des chunks
  .splitEntryChunks()

  // Stimulus Bridge (auto-enregistrement des contrôleurs)
  .enableStimulusBridge('./assets/controllers.json')

  // Runtime séparé
  .enableSingleRuntimeChunk()

  // Nettoyage du dossier build/
  .cleanupOutputBeforeBuild()

  // ================= Source maps =================
  .enableSourceMaps(!Encore.isProduction(), 'cheap-module-source-map')

  // Cache-busting
  .enableVersioning(Encore.isProduction())

  // ================= Babel =================
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = '3.38';
  })

  // ================= PostCSS (Tailwind v4) =================
  .enablePostCssLoader()

  // ================= Optimisations PROD =================
  .enableIntegrityHashes(Encore.isProduction())
  .configureTerserPlugin((options) => {
    options.extractComments = false;
  })

  // ================= Watch =================
  .configureWatchOptions((watchOptions) => {
    watchOptions.ignored = ['**/node_modules/**', '**/public/build/**'];
  });

module.exports = Encore.getWebpackConfig();
