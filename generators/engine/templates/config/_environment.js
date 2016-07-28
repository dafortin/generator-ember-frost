'use strict'

module.exports = function (environment) {
  var ENV = {
    modulePrefix: '<%- appName %>',
    podModulePrefix: '<%- appName %>/pods',
    environment
  }
  return ENV
}
