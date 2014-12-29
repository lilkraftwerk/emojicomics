module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js:{
        files:'public/js/scripts/*.js',
        tasks: ['concat']
      },
      codejs:{
        files: 'public/emojicode/js/*.js',
        tasks: ['concat']
      },
      sass: {
        files: 'sass/*.scss',
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
        files: {
          'public/css/main.css': 'sass/main.scss'
        }
      }
    },
    concat: {
      options: {
        seperator: "\n; \n",
      },
      vendor: {
        src: ['public/js/vendor/jquery.min.js', 'public/js/vendor/jquery.imgpreload.js', 'public/js/vendor/underscore.js', 'public/js/vendor/canvas2image.js', 'jquery.customSelect.min.js', 'public/js/jquery.backstretch.min.js'],
        dest: 'public/js/vendor.js'
      },
      code: {
        src: [ 'public/emojicode/js/ZeroClipboard.js', 'public/emojicode/js/jquery.js', 'public/emojicode/js/jquery/zclip.js', 'public/emojicode/js/*.js' ],
        dest: 'public/js/code.js'
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
  grunt.loadNpmTasks('grunt-contrib-sass');


  // Default task(s).
  grunt.registerTask('default', ['concat', 'sass', 'watch']);
};