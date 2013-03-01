module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    qunit: {
        all: ['tests/**/*.html']
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v.<%= pkg.version %> author: <%= pkg.author.name %> licence: <%= pkg.license.type %> */\n'
      },
      build: {
        src: 'jsontree.js',
        dest: 'jsontree.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('test', ['qunit']);
};