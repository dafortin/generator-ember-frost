;(function(yeoman, chalk, inquirer, utils) {
  'use strict'
  module.exports = yeoman.Base.extend({
    prompting () {
      return this.prompt([
        {
          type: 'input',
          name: 'appName',
          message: 'Name of your application: ',
          default: this.appname
        }, {
          type: 'input',
          name: 'appDescription',
          message: 'Enter a brief description: ',
          default: 'Brief description for the engine.'
        }
      ]).then((config) => {
        this.config = config
      })
    },
    writing () {
      utils._processDirectory.call(this, this.config)
    },
    install () {
      this.installDependencies()
    }
  });
})(
  require('yeoman-generator'),
  require('chalk'),
  require('inquirer'),
  require('../../utils')
)
