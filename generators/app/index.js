;(function(yeoman, chalk, inquirer, execSync) {
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
      let emberVersions = execSync(`bower info ember | grep ' - '`)
      emberVersions = emberVersions.toString()
        .replace(/\-/g, '')
        .split('\n')
        .map(e => e.trim())
        .filter(e => e.trim())
      return this.prompt([{
        type: 'list',
        name: 'emberVersion',
        message: chalk.bold.yellow('What version of ember do you want?'),
        choices: emberVersions.slice(0,10)
      }, {
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
        this.composeWith(`ember-frost:${config.choice.toLowerCase()}`, {
          options: config
        })
      });
    },
    install () {
      this.spawnCommand('git', ['init'])
    }
  });
})(
  require('yeoman-generator'),
  require('chalk'),
  require('inquirer'),
  require('child_process').execSync
)
