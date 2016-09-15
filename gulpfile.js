var gulp = require('gulp');
var babel = require('gulp-babel');
var less = require('gulp-less');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var cache = require('gulp-cached');

var reportError = function(error) {
   if (error.message == 'write after end') {
      this.emit('end');
   } else {
      var filename = require('path').relative(__dirname, error.filename || error.fileName || '');
      var line = '';
      var column = '';
      var message = '';

      try {
         switch (error.plugin) {
            case 'gulp-babel':
               line = error.loc.line;
               column = error.loc.column;
               message = error.name + ': ' + error.message.substring(error.message.indexOf(':') + 1, error.message.indexOf(' ('))
               break;
            case 'gulp-less':
               line = error.line;
               column = error.column;
               message = error.type + ' error: ' + error.message.substring(0, error.message.indexOf(' in'))
               break;
            default:

         }

         notify({
            title: 'Task failed [' + error.plugin + ']',
            message: message + '\n  ' + filename + '\n   ( ' + line + ' : ' + column + ' )',
            sound: 'Sosumi', // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults,
            //   onLast: true
         }).write(error);

         gutil.beep(); // Beep 'sosumi' again

         // Inspect the error object
         // console.log(error);

         // Easy error reporting
         //console.log(error.toString());

         // Pretty error reporting
         var report = '';
         var chalk = gutil.colors.white.bgRed;

         report += chalk('TASK:') + ' [' + error.plugin + ']\n';
         report += chalk('PROB:') + ' ' + error.message + '\n';
         if (error.lineNumber) {
            report += chalk('LINE:') + ' ' + error.lineNumber + '\n';
         }
         if (error.fileName) {
            report += chalk('FILE:') + ' ' + error.fileName + '\n';
         }
         console.error(report);
      } catch (e) {
         console.error(error);
      }

      // Prevent the 'watch' task from stopping
      this.emit('end');
   }
}

gulp.task('default', ['babel-first', 'less-first', 'watch']);

// Rerun the task when a file changes
gulp.task('watch', function() {
   gulp.watch(['src/**/*.jsx', 'src/**/*.js'], ['babel']);
   gulp.watch('src/less/**/*.less', ['less']);
});

gulp.task('babel', function() {
   return gulp.src(['src/**/*.jsx', 'src/**/*.js'])
      .pipe(plumber({
         errorHandler: reportError
      }))
      .pipe(cache('babel'))
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/'))
      .pipe(notify({
         title: 'Finished task [babel]'
      }));
});

gulp.task('babel-first', function() {
   return gulp.src(['src/**/*.jsx', 'src/**/*.js'])
      .pipe(plumber({
         errorHandler: reportError
      }))
      .pipe(cache('babel'))
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/'));
});

gulp.task('less', function() {
   return gulp.src('src/less/main.less')
      .pipe(plumber({
         errorHandler: reportError
      }))
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css/'))
      .pipe(notify({
         title: 'Finished task [less]'
      }));
});

gulp.task('less-first', function() {
   return gulp.src('src/less/main.less')
      .pipe(plumber({
         errorHandler: reportError
      }))
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css/'));
});
