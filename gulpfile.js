const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
        
}

function images() {
    return gulp.src('./src/img/**/*')
        .pipe(gulp.dest('./dist/img'));
}

function html() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
}

exports.default = gulp.series(styles, images, html);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/img/**/*', gulp.parallel(images));
    gulp.watch('./index.html', gulp.parallel(html));
};