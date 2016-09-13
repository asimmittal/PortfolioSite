var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
    gulp.src('build/style/*.less') // path to your file
    .pipe(less())
    .pipe(gulp.dest('build/style/'));
});