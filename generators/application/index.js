;
(function(yeoman, chalk, inquirer, path, glob) {
  'use strict'
  module.exports = yeoman.Base.extend({
    _processDirectory (data, source = '.', destination = '.') {
      let cwd = path.join(this.sourceRoot(), source);
      let files = glob.sync('**/*', {
        dot: true,
        nodir: true,
        cwd
      });
      for (let i = 0; i < files.length; i++) {
        let f = files[i];
        let src = path.join(cwd, f);
        let dest;
        if (path.basename(f).indexOf('_') === 0) {
          dest = path.join(destination,
           path.dirname(f),
           path.basename(f).replace(/^_/, ''));
          this.template(src, dest, data);
        } else {
          dest = path.join(destination, f);
          this.copy(src, dest);
        }
      }
    },
    prompting () {
      return this.prompt([
        {
          type: 'input',
          name: 'appDescription',
          message: 'Enter a brief app description'
        }
      ]).then((config) => {
        this.config = config
      })
    },
    writing () {
      this._processDirectory(this.config)
    },
    install () {
      ['npm', 'bower'].forEach(e => {
        this.spawnCommand(e, ['install'])
      })
    }
  });
})(
  require('yeoman-generator'),
  require('chalk'),
  require('inquirer'),
  require('path'),
  require('glob')
)
