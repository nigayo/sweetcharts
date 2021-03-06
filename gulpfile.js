var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    del = require('del'),
    stripLine  = require('gulp-strip-line'),
    browserSync = require("browser-sync"),
    browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    mochaPhantomJS = require("gulp-mocha-phantomjs");


var paths = {
  basis 	: ['./js/polyfill.js', './js/utility.js', './js/legend.js'],
  pie 		: ['./js/sweet_pie.js'],
  donut 	: ['./js/sweet_pie.js', './js/sweet_donut.js'],
  demo 		: ['./example/js/demo_main.js']
};

gulp.task('clean', function(cb) {
	  	del(['build/*.js'], function (err, deletedFiles) {
    		console.log('Files deleted:', deletedFiles.join(', '));
		});
});

gulp.task('basis', function () {
       gulp.src(paths.basis)
        .pipe(jshint('.jshintrc')).pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat("sweet_basis.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('./build/'));
});

//PIE
gulp.task('pie', function () {
       gulp.src(paths.pie)
        .pipe(jshint('.jshintrc')).pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./build/'));
});

//Donut
gulp.task('donut', function () {
       gulp.src(paths.donut)
        .pipe(jshint('.jshintrc')).pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint('.jshintrc')).pipe(jshint.reporter('jshint-stylish'))
        .pipe(stripLine([/\/\*require\ssupport\scode\*\/.+/])) //because a donut must merge a pie code.
        .pipe(concat("sweet_donut.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('./build/'));
});

//Demo page
gulp.task('demo', function () {
       gulp.src(paths.demo)
        .pipe(jshint('.jshintrc')).pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./example/js/'));
});

//testing
//run Browser after read a 'utility.html' at first running time.
gulp.task("browser-sync", function () {
    "use strict";
    browserSync({
        server: {
            //serve tests and the root as base dirs
            baseDir: ["./test/", "./"],
            //make tests.html the index file
            index: "utility.html"
        }
    });
});

//test on Browser while monitor change of utility.test.js 
// gulp.task("browserify", function() {
//     "use strict";
//     return browserify("./test/utility.test.js")
//         .bundle()
//         .on("error", function (err) {
//             console.log(err.toString());
//             this.emit("end");
//         })
//         .pipe(source("tests-browserify.js"))
//         .pipe(gulp.dest("test/"))
//         .pipe(browserSync.reload({stream:true}));
// });

gulp.task("browserify", function() {
    return gulp.src('test/utility.test.js')
        .pipe(browserSync.reload({stream:true}));
});

//test on Console
gulp.task("test-Console", function () {
    "use strict";
    return gulp.src("./test/utility.html")
        .pipe(mochaPhantomJS());
});

gulp.task("serve", ["browserify", "browser-sync"], function () {
//gulp.task("serve", ["browser-sync"], function () {
    "use strict";
    //when tests.js changes, browserify code and execute tests
    gulp.watch(["test/utility.test.js"], ["browserify"]);
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.basis, ['basis']);
  gulp.watch(paths.pie, ['pie']);
  gulp.watch(paths.donut, ['donut']);
  gulp.watch(paths.demo, ['demo']);
});

gulp.task('default', ['clean', 'watch', 'demo', 'donut', 'pie', "basis"]);
