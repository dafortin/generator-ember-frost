var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

;(function () {
  'use strict'
  module.exports = yeoman.Base.extend({
    prompting: function () {
      console.log(this)
      // Have Yeoman greet the user.
      this.log(yosay(
        'Welcome to the groundbreaking ' + chalk.bold.cyan('generator-ember-frost') + ' generator!'
      ));

      var prompts = [{
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }];

      return this.prompt(prompts).then(function (props) {
        // To access props later use this.props.someAnswer;
        this.props = props;
      }.bind(this));
    },

    writing: function () {
      this.fs.copy(
        this.templatePath('dummyfile.txt'),
        this.destinationPath('dummyfile.txt')
      );
    },

    install: function () {
      this.installDependencies();
    }
  });
})()
