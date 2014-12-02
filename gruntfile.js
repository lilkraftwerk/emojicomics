module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js:{
        files:'public/js/scripts/*.js',
        tasks: ['concat']      }
    },
    concat: {
      options: {
        seperator: "\n; \n",
      },
      vendor: {
        src: ['public/js/vendor/jquery.min.js', 'public/js/vendor/jquery.imgpreload.js', 'public/js/vendor/underscore.js', 'public/js/vendor/canvas2image.js'],
        dest: 'public/js/vendor.js'
      },
      scripts: {
        src: ['public/js/scripts/*.js', '!public/js/scripts/slickuser.js'],
        dest: 'public/js/scripts.js'
      },
      displaycomics: {
        src: ['public/js/scripts/showComic.js'],
        dest: 'public/js/display.js'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'public/js/scripts/*.js']
  }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat', 'watch']);
};