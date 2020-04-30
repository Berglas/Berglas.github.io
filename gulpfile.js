const gulp       = require('gulp')
const pug        = require("gulp-pug")
const sass       = require("gulp-sass")
const minifyCSS  = require('gulp-minify-css')
const concat     = require('gulp-concat')
const uglify     = require('gulp-uglify')
const rename     = require("gulp-rename")
const autoprefixer = require('gulp-autoprefixer')
const markdown = require('gulp-markdown')
const extender = require('gulp-html-extend')
const webserver  = require('gulp-webserver')

function swallowError (error) {
  console.log(error.toString())
  this.emit('end')
}

gulp.task('build', ['pug', 'sass'], () => {  
  console.log("build...")
})

gulp.task('pug', () => {  
  gulp.src('./src/pug/*.pug') 
    .pipe(pug({
      pretty: true
    }))
    .on('error', swallowError)
    .pipe(gulp.dest('./'))
})

gulp.task('sass', () => {  
  gulp.src('./src/sass/*.sass') 
    .pipe(sass())
    .on('error', swallowError)
    .pipe(gulp.dest('./dest/css')) 
})

gulp.task('autoprefixer', () => {  
  gulp.src('./dest/css/*.css') 
    .pipe(autoprefixer({
      cascade: false
    }))
    .on('error', swallowError)
    .pipe(gulp.dest('./dest/css')) 
})

gulp.task('markdown', () => {
  gulp.src('./src/md/*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./src/md2html/'))
})

gulp.task('extend', () => {
  gulp.src('./src/md2html/*.html')
    .pipe(extender({annotations:false,verbose:false}))
    .pipe(gulp.dest('./dest/articles/'))
})

// gulp.task('uglify', () => {
//   return gulp.src('./frontend/src/js/*.js')
//     .pipe(uglify())
//     .pipe(rename(function(path) {
//       path.basename += ".min"
//       path.extname = ".js"
//     }))
//     .pipe(gulp.dest('./frontend/dest/js/'))
// })

// gulp.task('concat', () => {
//   return gulp.src('./frontend/src/css/*.css')
//     .pipe(concat('all.css'))
//     .pipe(gulp.dest('./frontend/dest/css/'))
// })

// gulp.task('minify-css',['concat'], () => {
//   return gulp.src('./frontend/dest/css/all.css')
//     .pipe(minifyCSS({
//        keepBreaks: true,
//     }))
//     .pipe(rename(function(path) {
//       path.basename += ".min"
//       path.extname = ".css"
//     }))
//     .pipe(gulp.dest('./frontend/dest/css/'))
// })

gulp.task('watch', () => {
  // 監看的路徑檔案以及執行less這項task
  gulp.watch('./src/**/*.*',['build'])
})

gulp.task('webserver', () => {
  gulp.src('./')
    .pipe(webserver({
      port: 443,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }))
})

// default要執行的Task
gulp.task('default',['watch', 'webserver'])
gulp.task('extend ',['extend'])
gulp.task('compile_markdown',['markdown'])
gulp.task('compile_pug',['pug'])
gulp.task('compile_sass',['sass'])