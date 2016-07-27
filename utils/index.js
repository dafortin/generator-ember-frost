;(function (path, glob) {
  module.exports = {
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
    }
  }
})(require('path'), require('glob'));
