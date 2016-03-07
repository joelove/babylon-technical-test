module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                  ["babelify", { "presets": ["es2015", "stage-0"] }]
               ]
            },
            files: {
               "dist/script.js": ["src/javascript/index.js"]
            }
         }
      },
      watch: {
         scripts: {
            files: ["src/javascript/**/*.js"],
            tasks: ["browserify"]
         }
      }
   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");
};
