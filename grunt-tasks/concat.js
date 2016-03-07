module.exports = function(grunt) {
  var buildDate = grunt.template.today('yyyy-mm-dd');
  var bannerString = `/*! build date: ${buildDate} */\r\n`;

  return {
    options: {
      separator: ';\n',
      banner: bannerString,
      stripBanners: {
        block: true,
        line: true
      }
    },
    'build.concat.js': {
      src: 'tmp/babel/src/javascript/**/*.js',
      dest: 'dist/build.concat.js'
    }
  };
};
