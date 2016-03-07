module.exports = {
  less: {
    options: {
      paths: [ 'src/less/' ],
      plugins: [
        new (require('less-plugin-autoprefix'))({ browsers: ['last 5 versions'] }),
        new (require('less-plugin-clean-css'))()
      ],
    },
    files: { 'dist/less.min.css': 'src/less/styles.less' }
  }
};
