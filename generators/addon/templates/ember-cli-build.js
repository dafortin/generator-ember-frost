/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },
    dotEnv: {
      clientAllowedKeys: [
        'GIT_FORCE_PUSH',
        'WEBHOOK_URL',
        'SLACK_CHANNEL'
      ]
    }
  });

  return app.toTree();
};
