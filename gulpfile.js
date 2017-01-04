var gulp = require('gulp');
var zip = require('gulp-zip');
var del = require('del');
var unzip = require('unzip');
var fs = require('fs');
var runSequence = require('run-sequence');

gulp.task('zip:data', () => gulp.src('server/conflict-data.json').pipe(zip('conflict-data.zip')).pipe(gulp.dest('server')));

gulp.task('clean:data', () => del( ['server/conflict-data.json'] ) );  

gulp.task( 'zip', () => runSequence('zip:data', 'clean:data') );

gulp.task( 'unzip:data', () => fs.createReadStream('server/conflict-data.zip').pipe(unzip.Extract( { path: 'server' })) );

gulp.task('clean:zipdata', () => del( ['server/conflict-data.zip'] ) );  

gulp.task( 'unzip', () => runSequence( 'unzip:data','clean:zipdata' ) );
