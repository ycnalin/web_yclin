var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin');
//JS压缩
gulp.task('uglify', function() {
    return gulp.src('public/js/src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js/src/'));
});
//public-lib-velocity-js压缩
gulp.task('lib:velocity', function() {
    return gulp.src('././public/lib/velocity/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('././public/lib/velocity/'));
});
//public-lib-ua-parser-js压缩
gulp.task('lib:ua-parser-js', function() {
    return gulp.src('././public/lib/ua-parser-js/dist/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('././public/lib/ua-parser-js/dist/'));
});
//CSS压缩
gulp.task('cssmin', function() {
    return gulp.src('././public/css/main.css')
        .pipe(cssmin())
        .pipe(gulp.dest('././public/css/'));
});
gulp.task('cssmin2', function() {
    return gulp.src('././public/lib/font-awesome/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('././public/lib/font-awesome/css/'));
});
//图片压缩
gulp.task('images', function() {
    gulp.src('././public/images/*.*')
        .pipe(imagemin({
            progressive: false
        }))
        .pipe(gulp.dest('././public/images/'));
});
gulp.task('build', ['uglify', 'cssmin','cssmin2', 'images', 'lib:velocity', 'lib:ua-parser-js']);