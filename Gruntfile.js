'use strict';
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Load all tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);

  var jsFileList = [
    '_assets/vendor/bootstrap/js/transition.js',
    '_assets/vendor/bootstrap/js/alert.js',
    '_assets/vendor/bootstrap/js/button.js',
    '_assets/vendor/bootstrap/js/carousel.js',
    '_assets/vendor/bootstrap/js/collapse.js',
    '_assets/vendor/bootstrap/js/dropdown.js',
    '_assets/vendor/bootstrap/js/modal.js',
    '_assets/vendor/bootstrap/js/tooltip.js',
    '_assets/vendor/bootstrap/js/popover.js',
    '_assets/vendor/bootstrap/js/scrollspy.js',
    '_assets/vendor/bootstrap/js/tab.js',
    '_assets/vendor/bootstrap/js/affix.js',
    '_assets/javascript/plugins/*.js',
    '_assets/javascript/_*.js'
  ];


  var copyFileList = [
            {
              src: '_assets/css/**',
              dest: 'y:/treasury_internet_2014/WORKAREA/common/',
            },

            {
              src: '_assets/javascript/**',
              dest: 'y:/treasury_internet_2014/WORKAREA/common/',
            },

          {
            src: '_assets/javascript/scripts.js',
            dest: 'y:/treasury_internet_2014/WORKAREA/common/_assets/js/scripts.js',
          },

          /*   {
                src: '_assets/images/**',
                dest: 'y:/treasury_internet_2014/WORKAREA/common/',
              },
          */
          {
              src: '_assets/vendor/modernizr/modernizr.js',
              dest: 'y:/treasury_internet_2014/WORKAREA/common/_assets/javascript/vendor/modernizr.js',
            },

          {
              src: '_assets/vendor/typeahead.js/dist/typeahead.jquery.js',
              dest: 'y:/treasury_internet_2014/WORKAREA/common/_assets/javascript/vendor/typeahead.jquery.js',
            }
                
            ];


  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '_assets/javascript/*.js',
        '!_assets/javascript/scripts.js',
        '!_assets/**/*.min.*'
      ]
    },
    less: {
      dev: {
        files: {
          '_assets/css/main.css': [
            '_assets/less/main.less'
          ]
        },
        options: {
          compress: false,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: true,
          sourceMapFilename: '_assets/css/main.css.map',
          sourceMapRootpath: '/'
        }
      },
      build: {
        files: {
          '_assets/css/main.min.css': [
            '_assets/less/main.less'
          ]
        },
        options: {
          compress: true
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [jsFileList],
        dest: '_assets/javascript/scripts.js',
      },
    },
    uglify: {
      dist: {
        files: {
          '_assets/javascript/scripts.min.js': [jsFileList]
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      dev: {
        options: {
          map: {
            prev: '_assets/css/'
          }
        },
        src: '_assets/css/main.css'
      },
      build: {
        src: '_assets/css/main.min.css'
      }
    },
    modernizr: {
      build: {
        devFile: '_assets/vendor/modernizr/modernizr.js',
        outputFile: '_assets/javascript/vendor/modernizr.min.js',
        files: {
          'src': [
            ['_assets/javascript/scripts.min.js'],
            ['_assets/css/main.min.css']
          ]
        },
        uglify: true,
        parseFiles: true
      }
    },
    version: {
      default: {
        options: {
          format: true,
          length: 32,
          manifest: '_assets/manifest.json',
          querystring: {
            style: 'roots_css',
            script: 'roots_js'
          }
        },
        files: {
          'lib/scripts.php': '_assets/{css,js}/{main,scripts}.min.{css,js}'
        }
      }
    },
    copy: {
      main: {
        files:[ copyFileList ]
        }
    },
    watch: {
      less: {
        files: [
          '_assets/less/*.less',
          '_assets/less/**/*.less'
        ],
        tasks: ['less:dev', 'autoprefixer:dev', 'copy']
      },
      js: {
        files: [
          jsFileList,
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'concat', 'copy']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '_assets/css/main.css',
          '_assets/javascript/scripts.js',
          'site/**/*.php'
        ]
      },
    },
  });

  // Register tasks
  grunt.registerTask('default', [
    'dev'
  ]);
  grunt.registerTask('dev', [
    'jshint',
    'less:dev',
    'autoprefixer:dev',
    'concat',
    'copy',
  ]);
  grunt.registerTask('build', [
    'jshint',
    'less:build',
    'autoprefixer:build',
    'uglify',
    'modernizr',
    'copy',
    // 'version'
  ]);
};
