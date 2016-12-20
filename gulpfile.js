var gulp = require('gulp');
var markdown = require('gulp-markdown');
var path = require('path');
var browserSync = require('browser-sync').create();


gulp.task('build', function () {
  return gulp.src('*.md')
    .pipe(markdown())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('*.md', ['build']);
});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir:'./dist',
      index: 'Readme.html'
    }
  });

  gulp.watch('./dist/*.html').on('change', browserSync.reload);
});