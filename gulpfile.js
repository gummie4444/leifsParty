var gulp = require('gulp'),
  connect = require('gulp-connect'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');


gulp.task('connect',function(){
  connect.server({
    root:'public',
    livereload:true
  });

});

gulp.task('html',function(){
  gulp.src('game/*.html')
  .pipe(connect.reload());
});

//SKOÐA BÆTA JSHINT INN
//.pipe(jshint())
// .pipe(jshint.reporter(stylish))
gulp.task('js', function() {
  return gulp.src('game/js/*.js')
    .pipe(connect.reload());
});

gulp.task('watch',function(){
  gulp.watch('game/*.html',['html'])
  gulp.watch('game/js/*.js',['js'])
});



gulp.task('default',['connect','html','js','watch'])