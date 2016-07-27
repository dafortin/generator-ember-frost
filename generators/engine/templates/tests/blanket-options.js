/* globals blanket, module */

var options = {
  modulePrefix: 'ciena-uac-engine',
  filter: '//.*ciena-uac-engine/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['json'],
    autostart: true
  }
}
if (typeof exports === 'undefined') {
  blanket.options(options)
} else {
  module.exports = options
}
