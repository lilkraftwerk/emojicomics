module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js:{
        files:'js/scripts/*.js',
        tasks: ['concat']      }
    },
    concat: {
      options: {
        seperator: "\n",
      },
      vendor: {
        src: ['js/vendor/jquery.min.js', 'js/vendor/jquery.imgpreload.js', 'js/vendor/paper.js', 'js/vendor/underscore.js',],
        dest: 'js/vendor.js'
      },
      scripts: {
        src: ['js/scripts/*.js'],
        dest: 'js/scripts.js'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/scripts/*.js']
  }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat', 'watch']);
};