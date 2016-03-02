module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    configPath: require('path').join(process.cwd(), 'grunt-tasks')
  });
};
