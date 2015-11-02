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

import through from 'through2';


//gulp.task('default', () => {
//  return gulp.src('src/client/*.js')
//    .pipe(sourceMaps.init())
//    .pipe(babel({
//      presets: ['babel-preset-react', 'babel-preset-es2015']
//    }))
//    .pipe(concat('all.js'))
//    .pipe(sourceMaps.write('.'))
//    .pipe(gulp.dest('./public/js'));
//});



let compile = (watch) => {

  let entryFile = join(__dirname, 'src', 'client', 'index.js');
  var destFolder = join(__dirname, 'public', 'js');

  console.log(entryFile, destFolder);

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
    //.pipe(through((data, enc, next) => {
    //  console.log(data);
    //  this.push(data);
    //  next()
    //}), (done) => {
    //  done()
    //})
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

  //return rebundle;
};

gulp.task('build', () => { return compile(false); });
gulp.task('watch', () => { return compile(true); });

gulp.task('default', ['build']);
