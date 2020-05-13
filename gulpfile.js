const fs           = require('fs')
const gulp         = require('gulp')
const pug          = require("gulp-pug")
const sass         = require("gulp-sass")
const minifyCSS    = require('gulp-minify-css')
const concat       = require('gulp-concat')
const uglify       = require('gulp-uglify')
const rename       = require("gulp-rename")
const frontMatter  = require('gulp-front-matter')
const autoprefixer = require('gulp-autoprefixer')
const webserver    = require('gulp-webserver')
const md2json      = require('gulp-markdown-to-json')
const markdown     = require('gulp-markdown')
const extender     = require('gulp-html-extend')
const marked       = require('marked')
const replace     = require('gulp-replace')

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

gulp.task('extend', () => {
  gulp.src('./src/articles/html/**/*.html')
    .pipe(extender({annotations:false,verbose:false}))
    .pipe(gulp.dest('./dest/articles/'))
})

// 將markdown轉成json檔
gulp.task('markdown', () => {
  gulp.src('./src/articles/md/**/*.md')
    .pipe(md2json(marked, function(data, file) {
      delete data.body
      return data
    }))
    .pipe(gulp.dest('./src/articles/json'))
});

gulp.task('json2html', () => {
  fs.readdir('./src/articles/json/', function(err, files) {
    let pageList = [] 
    files.forEach((file, i) => {
      var data = JSON.parse(fs.readFileSync('./src/articles/json/' + file, 'utf8'))
      data.site = '/dest/articles/' + (new Date(data.date).getFullYear()) + '/' + (new Date(data.date).getMonth() + 1)
      data.index = i
      if (data.depiction.length > 80) {
        data.depiction = data.depiction.substring(0, 80) + '...'
      }
      pageList.push(data)
      console.log(file)
      gulp.src('./src/articles/md/'+ file.split('.')[0] + '.md')
        .pipe(frontMatter({
            remove: true
          }))
        .pipe(markdown({
          headerIds: false
        }))
        .pipe(gulp.dest('./src/articles/html/'+ (new Date(data.date).getFullYear()) + '/' + (new Date(data.date).getMonth() + 1)))
    })
    fs.writeFile('./dest/articles/pageList.json', JSON.stringify(pageList), function (err) {
      if (err)
        console.log(err)
      else
        console.log('Write operation complete.')
    })
  })
});

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
gulp.task('extend_html',['extend'])
gulp.task('compile_markdown',['markdown'])
gulp.task('compile_pug',['pug'])
gulp.task('compile_sass',['sass'])
gulp.task('compile_json2html',['json2html'])