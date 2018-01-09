var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('app/styles/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
    // Reloads the browser whenever HTML or JS files change
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/styles/**/*.scss', ['sass']); 
  gulp.watch("app/*.html").on('change', browserSync.reload);
  // Other watchers
});


