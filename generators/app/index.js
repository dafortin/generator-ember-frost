;(function(yeoman, chalk, inquirer) {
  'use strict'
  module.exports = yeoman.Base.extend({
    prompting () {
      this.log(chalk.yellow(`
        _==_ _
      _,(",)|_|
       \/. \-|
     __( :  )|___
        Frost
      `))
      return this.prompt([{
        type: 'list',
        name: 'choice',
        message: chalk.bold.yellow(`What do you want to make?`),
        choices: [
          new inquirer.Separator(),
          'Application',
          'Addon',
          'Engine',
          new inquirer.Separator()
        ]
      }]).then(config => {
        this.composeWith(`ember-frost:${config.choice.toLowerCase()}`)
      });
    }
  });
})(
  require('yeoman-generator'),
  require('chalk'),
  require('inquirer')
)
