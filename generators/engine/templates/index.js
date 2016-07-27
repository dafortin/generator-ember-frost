const EngineAddon = require('ember-engines/lib/engine-addon')
const autoprefixer = require('autoprefixer')

module.exports = EngineAddon.extend({
  name: 'ciena-uac-engine',
  options: {
    cssModules: {
      plugins: [
        autoprefixer('last 2 versions')
      ],
      // Use .scss as the extension for CSS modules instead of the default .css
      extension: 'scss',
      // Emit a combined SCSS file for ember-cli-sass to compile
      intermediateOutputPath: 'addon.scss',

      // Pass a custom parser/stringifyer through to PostCSS for processing modules
      postcssOptions: {
        syntax: require('postcss-scss')
      }
    }
  }
})
