const autoprefixer = require('autoprefixer');
const config       = require('../frasco.config.js');
const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const sass         = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src(config.assets + '/' + config.sass.src + '/**/*')
    .pipe(sass({outputStyle: config.sass.outputStyle}).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        browsers: config.sass.autoprefixer.browsers
      })
    ]))
    .pipe(gulp.dest(config.assets + '/' + config.sass.dest));
});
