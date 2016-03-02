module.exports = {
  local: {
    files: ['assets/javascript/**', 'assets/less/**'],
    tasks: ['compile-local'],
    options: { spawn: false, nonull: false }
  },
};
