/**
 * Created by Alex on 10.05.2016.
 */
var gulp = require('gulp'),
    clean = require('gulp-clean'),
    replace = require('gulp-replace'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require("gulp-rename"),
    notify = require("gulp-notify"),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify');


// Clean
gulp.task('clean', function() {
    return gulp.src('dist', { read: true })
        .pipe(clean());
});

// Replace
gulp.task('replace', function() {
    gulp.src(['src/fonts/**/*.*'])
        .pipe(gulp.dest('./dist/fonts'));
    gulp.src(['src/vendor/**/*.*'])
        .pipe(gulp.dest('./dist/vendor'));
    gulp.src(['src/index.html'])
        .pipe(gulp.dest('./dist/'));
    gulp.src(['src/images/**/*.*'])
        .pipe(gulp.dest('./dist/images/'));
});

// Html
gulp.task('html', function() {
     gulp.src(['src/index.html'])
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());

});

// Css
gulp.task('css', function() {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(concat("css/style.css"))
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("./dist"))
        .pipe(notify("Done Css!"))
        .pipe(browserSync.stream());
});

// Js
gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
        .pipe(notify("Done JS!"))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
});

// Watch
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/less/*.less', ['css']);
    gulp.watch('src/index.html', ['html']); 

});

gulp.task('default', ['replace', 'css', 'js', 'browser-sync', 'watch']);

//  'clean',
