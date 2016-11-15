'use strict';

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    runSequence = require('run-sequence'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function () {  
    return gulp.src('www', {read: false})
        .pipe(clean());
});

gulp.task('sass', function () {
    return gulp.src('public/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});
 
gulp.task('watch', function () {
    gulp.watch('public/scss/**/*.scss', ['sass']);
});

gulp.task('autoprefixer', function () {
    return gulp.src('public/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('build', function(callback) {
    runSequence( 'sass','autoprefixer', 
                 callback);
});
