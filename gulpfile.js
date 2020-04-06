const gulp       = require('gulp');
const pug     = require("gulp-pug");
const less     = require("gulp-less");
const minifyCSS  = require('gulp-minify-css');
const concat     = require('gulp-concat');
const uglify     = require('gulp-uglify');
const rename     = require("gulp-rename");

gulp.task('pug', function() {  
  // less的檔案路徑
  gulp.src('./frontend/src/*.pug') 
      .pipe(pug())
      .pipe(gulp.dest('./frontend/dest/')) 
});

gulp.task('less', function() {  
  // less的檔案路徑
  gulp.src('./frontend/src/less/*.less') 
      .pipe(less())
      .pipe(gulp.dest('./frontend/src/css/')) 
});

gulp.task('uglify', function() {
  return gulp.src('./frontend/src/js/*.js')
      .pipe(uglify())
      .pipe(rename(function(path) {
          path.basename += ".min";
          path.extname = ".js";
      }))
      .pipe(gulp.dest('./frontend/dest/js/'));
});

gulp.task('concat', function() {
  return gulp.src('./frontend/src/css/*.css')
      .pipe(concat('all.css'))
      .pipe(gulp.dest('./frontend/dest/css/'));
});

gulp.task('minify-css',['concat'], function() {
  return gulp.src('./frontend/dest/css/all.css')
    .pipe(minifyCSS({
       keepBreaks: true,
    }))
    .pipe(rename(function(path) {
      path.basename += ".min";
      path.extname = ".css";
    }))
    .pipe(gulp.dest('./frontend/dest/css/'));
});

gulp.task('watch', function () {
  // 監看的路徑檔案以及執行less這項task
  gulp.watch('./frontend/src/less/*.less',['less']);  
  gulp.watch('./frontend/src/*.pug',['pug']);  
  gulp.watch('./frontend/src/css/*.css',['concat']);  
  gulp.watch('./frontend/src/js/*.js',['uglify']);  
});

// default要執行的Task
gulp.task('default',['watch']);