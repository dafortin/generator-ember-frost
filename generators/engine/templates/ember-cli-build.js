/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon')
const autoprefixer = require('autoprefixer')

module.exports = function (defaults) {
  var app = new EmberAddon(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },
    dotEnv: {
      clientAllowedKeys: [
        'GIT_FORCE_PUSH',
        'WEBHOOK_URL',
        'SLACK_CHANNEL'
      ]
    },
    babel: {
      optional: ['es7.decorators'],
      ignore: ['node_modules/**/*.js', 'bower_components/**/*.js']
    },
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
  })

  // Development dependencies
  app.import(app.bowerDirectory + '/Faker/build/build/faker.js')

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree()
}
