module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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

  grunt.registerTask('default', ['uglify']);
};