'use strict';

const browserify = require('browserify');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const path = require('path');

const task = (gulp, root) => {
  return () => {
    return browserify({entries: path.join(root, 'src/client/index.jsx'), extensions: ['.jsx'], debug: true})
      .transform('babelify', {presets: ['es2015', 'react']})
      .bundle()
      .on('error', function (err) {
        console.error(err);
        this.emit('end');
      })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public/js'));
  }
};

module.exports = task;
