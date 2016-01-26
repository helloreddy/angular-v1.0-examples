// Generated on 2015-04-22 using generator-angular 0.9.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

// "wrapper" function
module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  var appConfig = {
    app: 'app',
    dist: 'dist'
  };
  // 프로젝트 설정
  grunt.initConfig({
    appProperty : appConfig,
    pkg: grunt.file.readJSON('package.json'),

    /* TASK: COPY  */
    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= appProperty.app %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/*',
            'ico/*',
            'down/*',
            'styles/default.css',
            'styles/common.css',
            'styles/3rd/ie7.css',
            'styles/3rd/ie8.css',
            'styles/3rd/ie10.css',
            'scripts/3rd/html5shiv.js',
            'scripts/3rd/respond.min.js',
            'scripts/3rd/ie10.js'
          ],
          dest: '<%= appProperty.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= appProperty.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      scripts: {
        expand: true,
        cwd: '<%= appProperty.app %>/scripts',
        dest: '.tmp/scripts/',
        src: '{,*/}*.js'
      }
    },

    /* TASK: IMAGEMIN  */
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: '<%= appProperty.app %>/images',
            src: ['**/*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: '<%= appProperty.dist %>/images',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: '<%= appProperty.app %>/images',
            src: ['**/*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: '<%= appProperty.dist %>/images',
            ext: '.jpg'
          }
        ]
      },
      gif: {
        options: {
          interlaced: true
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: '<%= appProperty.app %>/images',
            src: ['**/*.gif'],
            // Could also match cwd. i.e. project-directory/img/
            dest: '<%= appProperty.dist %>/images',
            ext: '.gif'

          }
        ]
      }
      // dist: {
      //   files: [{
      //     expand: true,
      //     cwd: '<%= appProperty.app %>/images',
      //     src: '{,*/}*.{png,jpg,jpeg,gif}',
      //     dest: '<%= appProperty.dist %>/images'
      //   }]
      // }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    /* TASK: NGMIN  */
    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    /* TASK: CLEAN  */
    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= appProperty.dist %>/{,*/}*',
            '!<%= appProperty.dist %>/.git*'
          ]
        }]
      },
      tmp : '.tmp',
      server: '.tmp'
    },

    /* TASK: USEMINPREPARE  */
    useminPrepare: {
      html: '<%= appProperty.app %>/index.html',
      options: {
        dest: '<%= appProperty.dist %>'
      }
    },

    /* TASK: USEMIN  */
    usemin: {
      html: ['<%= appProperty.dist %>/{,*/}*.html']
    },

    /* TASK: WATCH  */
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      // bower: {
      //   files: ['bower.json'],
      //   tasks: ['wiredep']
      // },
      js: {
        files: ['<%= appProperty.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      // jsTest: {
      //   files: ['test/spec/{,*/}*.js'],
      //   tasks: ['newer:jshint:test', 'karma']
      // },
      styles: {
        files: ['<%= appProperty.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles' /* , 'autoprefixer' */]
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= appProperty.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= appProperty.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    /* TASK: CONNECT  */
    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'co.devdev.kr',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              // connect().use('/bower_components',
              // connect.static('./bower_components')
              //),
              connect.static(appConfig.app)
            ];
          }
        }
      }
    },

    /* TASK: HTMLMIN */
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= appProperty.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= appProperty.dist %>'
        }]
      }
    },

    /* TASK: FILEREV  */
    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= appProperty.app %>/scripts/{,*/}*.js',
          '<%= appProperty.app %>/styles/{,*/}*.css',
          '<%= appProperty.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

  });

  // ===========================================================================
  // Custom TASK area from below
  // ===========================================================================

  // Running Local Server
  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }
    grunt.task.run([
      'clean:server',
      'connect:livereload',
      'watch'
    ]);
  });

  // Running Build
  grunt.registerTask('build', [
    'clean:dist',          // cleaning dist folder
    'clean:tmp',           // cleaning .tmp folder
    'copy:dist',           // copying resources
    'imagemin',            // imagemin
    'useminPrepare',       // prepare usemin
    'concat',              // concat js & css
    'ngmin',               // angularJS mififying
    'cssmin',              // minifying css
    'uglify',              // minifying js
    //'filerev',           // revision files
    'usemin',              // usemin
    'htmlmin'              // htmlmin
  ]);

  // Running Default Task
  grunt.registerTask('default', [
    'build'
  ]);

};
