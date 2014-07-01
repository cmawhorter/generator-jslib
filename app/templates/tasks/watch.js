module.exports = {
  gruntfile: {
    files: '<%%= jshint.gruntfile.src %>',
    tasks: [
      'jshint:gruntfile',
      'jscs:gruntfile'
    ]
  },
  lib: {
    files: '<%%= jshint.lib.src %>',
    tasks: [
      'build'
    ]
  },
  test: {
    files: '<%%= jshint.test.src %>',
    tasks: [
      'jshint:test',
      'jscs:test'
    ]
  }
};
