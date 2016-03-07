module.exports = {
  less: {
    options: {
      paths: [ 'assets/lcss/' ],
      plugins: [
        new (require('less-plugin-autoprefix'))({ browsers: ['last 5 versions'] }),
        new (require('less-plugin-clean-css'))()
      ],
    },
    files: { 'dist/less.min.css': 'src/less/styles.less' }
  }
};
