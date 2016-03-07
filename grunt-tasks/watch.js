module.exports = {
  local: {
    files: ['src/javascript/**', 'src/less/**'],
    tasks: ['compile-local'],
    options: { spawn: false, nonull: false }
  },
};
