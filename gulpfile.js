'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify =require('gulp-uglify');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

const SRC = './src/assets/scss/**/*.scss';
const DEST ='./src/assets/css/';

gulp.task('compile_sass', function(){
  gulp.src(SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({suffix:'.min'}))
  .pipe(changed(DEST))
  .pipe(gulp.dest(DEST))
})

gulp.task('watch_scss',function(){
  gulp.watch(SRC ,['compile_sass'])
})

gulp.task('default',['watch_scss'])
