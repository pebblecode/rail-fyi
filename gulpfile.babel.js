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
import { join } from 'path';

let compile = (watch) => {

  let entryFile = join(__dirname, 'src', 'client', 'c2cfyi.jsx');
  var destFolder = join(__dirname, 'public', 'js');

  let bundler = watchify(
    browserify(entryFile, Object.apply({}, { debug: true }, watchify.args))
  );

  let rebundle = () => {
    bundler
      .transform(babelify)
      .bundle()
    .on('error', function (error) {
      console.error(error);
      this.emit('end');
    })
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(sourceMaps.init())
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest(destFolder))
  };

  if (watch) {
    bundler.on('update', () => {
      console.log('update');
      rebundle();
    });
  }

  rebundle();
};

gulp.task('build', () => { return compile(false); });
gulp.task('watch', () => { return compile(true); });

gulp.task('default', ['build']);
