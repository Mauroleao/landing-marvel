const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
        
}

function images() {
    return gulp.src('./src/img/**/*')
        .pipe(gulp.dest('./dist/img'));
}

function scripts() {
    return gulp.src('./src/scripts/**/*')
        .pipe(gulp.dest('./dist/scripts'));
}

function html() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
}

function serve() {
    browserSync.init({ server: './dist' });

    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/img/**/*', images).on('change', browserSync.reload);
    gulp.watch('./src/scripts/**/*', scripts).on('change', browserSync.reload);
    gulp.watch('./index.html', html).on('change', browserSync.reload);
}

exports.default = gulp.series(styles, images, scripts, html);
exports.dev = gulp.series(styles, images, scripts, html, serve);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/img/**/*', gulp.parallel(images));
    gulp.watch('./src/scripts/**/*', gulp.parallel(scripts));
    gulp.watch('./index.html', gulp.parallel(html));
};