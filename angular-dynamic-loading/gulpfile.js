var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var minifyhtml = require('gulp-minify-html');
var browserSync = require('browser-sync').create();

gulp.task('server', function(){
  return browserSync.init({
    server : {
      baseDir : 'app'
    }
  });
});

// gulp.task('server', ['uglify', 'minifycss', 'minifyhtml'], function(){
//   return browserSync.init({
//     server : {
//       baseDir : 'public/dist'
//     }
//   });
// });

// gulp.task('minifyhtml', function () {
//     return gulp.src('public/src/*.html')
//         .pipe(minifyhtml())
//         .pipe(gulp.dest('public/dist'))
//         .pipe(browserSync.reload({stream:true}));
// });
//
// gulp.task('uglify', function () {
//     return gulp.src('public/*.js')
//         .pipe(concat('main.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('pubilc/dist'))
//         .pipe(browserSync.reload({stream:true}));
// });
//
// gulp.task('minifycss', function () {
//     return gulp.src('public/src/*.css')
//         .pipe(concat('main.css'))
//         .pipe(minifycss())
//         .pipe(gulp.dest('public/dist'))
//         .pipe(browserSync.reload({stream:true}));
// });

// gulp.task('watch', function () {
//     gulp.watch('public/src/*.js', ['uglify']);
//     gulp.watch('public/src/*.css', ['minifycss']);
//     gulp.watch('public/src/*.html', ['minifyhtml']);
// });

// gulp.task('default', ['server', 'watch']);
