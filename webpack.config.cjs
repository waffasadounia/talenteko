// =============================================================
// Webpack Encore Configuration — TalentÉkô
// -------------------------------------------------------------
// • Point d’entrée principal : assets/app.js
// • Intègre TailwindCSS 3 via PostCSS
// • Active Stimulus/Turbo (auto-import controllers.json)
// • Source maps : activées en dev, désactivées en prod
// • Production : cache-busting, integrity hashes, minification Terser
// =============================================================

const Encore = require('@symfony/webpack-encore');

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
  .addAliases({ '@controllers': './assets/controllers' })

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

  // ================= PostCSS / Tailwind =================
  .enablePostCssLoader() // Tailwind v3.4.13 + PostCSS 8

  // ================= Optimisations PROD =================
  .enableIntegrityHashes(Encore.isProduction())
  .configureTerserPlugin((options) => {
    options.extractComments = false;
  })

  // ================= Watch =================
  .configureWatchOptions((watchOptions) => {
    watchOptions.ignored = ['**/node_modules/**', '**/public/build/**'];
  });

// ================= Logging simplifié =================
const config = Encore.getWebpackConfig();

config.stats = {
  all: false,
  errors: true,
  warnings: true,
  errorDetails: true,
};

config.infrastructureLogging = { level: 'error' };

module.exports = config;
