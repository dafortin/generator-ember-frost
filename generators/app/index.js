;(function(yeoman, chalk, inquirer) {
  'use strict'
  module.exports = yeoman.Base.extend({
    prompting () {
      return this.prompt([{
        type: 'list',
        name: 'choice',
        message: chalk.bold.yellow(`What do you want to make?`),
        choices: [
          new inquirer.Separator(),
          'application',
          'addon',
          new inquirer.Separator()
        ]
      }]).then(config => {
        this.composeWith(`ember-frost:${config.choice}`)
      });
    }
  });
})(
  require('yeoman-generator'),
  require('chalk'),
  require('inquirer')
)
