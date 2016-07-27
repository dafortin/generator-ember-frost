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
          default: 'Brief description of the app.'
        }
      ]).then((config) => {
        this.config = config
      })
    },
    writing () {
      this.config['name']  = this.user.git.name()
      this.config['email'] = this.user.git.email()
      utils._processDirectory.call(this, this.config)
    },
    install () {
      this.installDependencies(() => {
        this.log(chalk.yellow.bold('Running `ember g ember-frost-core`'))
        this.spawnCommand('ember', ['g', 'ember-frost-core'])
      })
    }
  });
})(
  require('yeoman-generator'),
  require('chalk'),
  require('inquirer'),
  require('../../utils')
)
