'use strict';

import gulp from 'gulp';
import sourceMaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

import { join } from 'path';

gulp.task('sass', () => {
  let entryFile = join(__dirname, 'src', 'sass', 'main.scss');
  var destFolder = join(__dirname, 'public', 'css');

  return gulp.src(entryFile)
    .pipe(sourceMaps.init())
    .pipe(sass({outputStyle: 'compressed', includePaths: './'}).on('error', sass.logError))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(sourceMaps.write())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(destFolder));
});

gulp.task('build', require('./gulp-tasks/compile-frontend')(gulp, __dirname));

gulp.task('watch', ['build'], function () {
  gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['build', 'sass']);
