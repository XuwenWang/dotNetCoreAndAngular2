/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');


var paths = {
    webroot: "./wwwroot/"
};

gulp.task('copy-js-files', function () {
    gulp.src('./node_modules/@angular/**/bundles/*.js')
    .pipe(gulp.dest(paths.webroot+'lib/@angular'));

    gulp.src('./node_modules/angular-in-memory-web-api/**/*.js')
    .pipe(gulp.dest(paths.webroot+'lib/angular-in-memory-web-api'));

    gulp.src('./node_modules/core-js/**/*.js')
    .pipe(gulp.dest(paths.webroot+'lib/core-js'));

    gulp.src('./node_modules/reflect-metadata/**/*.js')
    .pipe(gulp.dest(paths.webroot + 'lib/reflect-metadata'));

    gulp.src('./node_modules/rxjs/**/*.js')
    .pipe(gulp.dest(paths.webroot + 'lib/rxjs'));

    gulp.src('./node_modules/systemjs/**/*.js')
    .pipe(gulp.dest(paths.webroot + 'lib/systemjs'));
    
    gulp.src('./node_modules/zone.js/**/*.js')
    .pipe(gulp.dest(paths.webroot + 'lib/zone.js'));
});