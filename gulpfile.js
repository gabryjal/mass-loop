const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const { src, dest } = require('gulp');

function style() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(browserSync.stream());
}

function copy() {
  return src('src/images/*')
    .pipe(dest('public/images'))
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  });
  gulp.watch('./src/scss/**/*.scss', style)
  gulp.watch('./public/*.html').on('change', browserSync.reload)
  gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}


exports.style = style;
exports.watch = watch;
exports.copy = copy;
