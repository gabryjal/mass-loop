const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const { src, dest } = require('gulp');

function style() {
  return gulp.src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(browserSync.stream());
}

function indexCopy() {
  return src('src/index.html')
    .pipe(dest('public/index.html'))
}

function imageCopy() {
  return src('src/images/*')
    .pipe(dest('public/images'))
}

function fontsCopy() {
  return src('src/fonts/*')
    .pipe(dest('public/fonts'))
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
  gulp.watch('src/images/*', imageCopy).on('change', browserSync.reload)
  gulp.watch('src/fonts/*', fontsCopy).on('change', browserSync.reload)
  // gulp.watch('src/index.html', indexCopy).on('change', browserSync.reload)
}

exports.watch = watch;
