module.exports = {
  nodemon: {
    script: 'src/javascript/index.js',
    options: {
      nodeArgs: ['--debug'],
      callback: function (nodemon) {
        nodemon.on('log', function (event) {
          console.log(event.colour);
        });
      },
      cwd: './',
      ext: 'html',
      ignore: ['node_modules/**'],
      watch: ['views', 'index.js']
    }
  }
};
