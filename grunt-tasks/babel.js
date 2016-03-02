module.exports = function(grunt) {
  var fs_files = grunt.file.expand('assets/javascript/**/*.js');
  var files = {};

  for(var file in fs_files) {
    file = fs_files[file];
    files['tmp/babel/' + file] = file;
  }

  return {
    options: {
      sourceMap: true,
      presets: ['es2015', 'stage-0']
    },
    dist: {
      files: files
    }
  };
};
