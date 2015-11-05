'use strict';

const jsdoc = require('gulp-jsdoc');

const task = (gulp) => {
  return () => {
    return gulp.src('./src/server/**/*.js').pipe(jsdoc('./docs/server'));
  }
};

module.exports = task;
