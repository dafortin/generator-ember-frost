;(function(yeoman, chalk, inquirer, execSync, utils) {
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
      }, {
          type: 'expand',
          message: 'Would you like to setup ember-cli-deploy?',
          name: 'deploy',
          choices: [{
            key: 'y',
            name: 'Set up ember-cli-deploy',
            value: true
          }, {
            key: 'n',
            name: `No don't do it!`,
            value: false
          }]
        }]).then(config => {
          if (config.deploy) {
            return inquirer.prompt([{
                type: 'input',
                name: 'webhookURL',
                message: ` - Slack Webhook URL:`
              }, {
                type: 'input',
                name: 'slackChannel',
                message: ' - Slack channel to post to for deployment:'
              }
            ]).then(answers => {
              config['webhookURL'] = answers.webhookURL || ''
              config['slackChannel'] = answers.slackChannel || ''
              return config
            })
          }
          return config
        })
        .then(config => {
          this.config = config
          this.composeWith(`ember-frost:${config.choice.toLowerCase()}`, {
            options: config
          })
      })
    },
    writing () {
      utils._processDirectory.call(this, this.config)
    },
    install () {
      this.spawnCommand('git', ['init'])
    }
  })
})(
  require('yeoman-generator'),
  require('chalk'),
  require('inquirer'),
  require('child_process').execSync,
  require('../../utils')
)
