const gulp       = require('gulp');
const pug     = require("gulp-pug");
const sass     = require("gulp-sass");
const minifyCSS  = require('gulp-minify-css');
const concat     = require('gulp-concat');
const uglify     = require('gulp-uglify');
const rename     = require("gulp-rename");


gulp.task('build', ['pug', 'sass'], function() {  
  console.log("build...");
});

gulp.task('pug', function() {  
  gulp.src('./src/pug/*.pug') 
    .pipe(pug())
    .pipe(gulp.dest('./'))
});

gulp.task('sass', function() {  
  gulp.src('./src/sass/*.sass') 
    .pipe(sass())
    .pipe(gulp.dest('./dest/css')) 
});

// gulp.task('uglify', function() {
//   return gulp.src('./frontend/src/js/*.js')
//     .pipe(uglify())
//     .pipe(rename(function(path) {
//       path.basename += ".min";
//       path.extname = ".js";
//     }))
//     .pipe(gulp.dest('./frontend/dest/js/'));
// });

// gulp.task('concat', function() {
//   return gulp.src('./frontend/src/css/*.css')
//     .pipe(concat('all.css'))
//     .pipe(gulp.dest('./frontend/dest/css/'));
// });

// gulp.task('minify-css',['concat'], function() {
//   return gulp.src('./frontend/dest/css/all.css')
//     .pipe(minifyCSS({
//        keepBreaks: true,
//     }))
//     .pipe(rename(function(path) {
//       path.basename += ".min";
//       path.extname = ".css";
//     }))
//     .pipe(gulp.dest('./frontend/dest/css/'));
// });

gulp.task('watch', function () {
  // 監看的路徑檔案以及執行less這項task
  gulp.watch('./src/**/*.*',['build']);
});

// default要執行的Task
gulp.task('default',['watch']);