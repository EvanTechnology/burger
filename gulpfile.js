
const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
 


sass.compiler = require('node-sass');
 

//index.html => build
gulp.task('html', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'))
    .pipe(reload({
        stream: true
    }));
});

//fonts => build
gulp.task('fonts', function () {
    return gulp.src('./src/fonts/*.*')
      .pipe(gulp.dest('./build/fonts'));
});

//js => build
gulp.task('js', function () {
    return gulp.src('./src/js/*.*')
      .pipe(gulp.dest('./build/js'))
      .pipe(reload({
        stream: true
    }));
});

//icons => build
gulp.task('icons', function () {
    return gulp.src('./src/images/icons/*.*')
      .pipe(gulp.dest('./build/images/icons'))
      .pipe(reload({
        stream: true
    }));
});

//minimaze images => build
gulp.task('images', function () {
    return gulp.src('./src/images/*.*')
      .pipe(imagemin())
      .pipe(gulp.dest('./build/images'))
      .pipe(reload({
        stream: true
    }));
});


// main.sass => build/main.css
gulp.task('sass', function () {
    return gulp.src('./src/css/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/css'))
      .pipe(reload({
        stream: true
    }));
});

// clean build
gulp.task('clean', function () {
    return del('./build')
});

// server
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: 'build'
        },
        open: true
    });
});


gulp.task('watch', function () {
  gulp.watch('./src/css/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/*.html', gulp.series('html'));
  gulp.watch('./src/images/*.*', gulp.series('images'));
  gulp.watch('./src/js/*.*', gulp.series('js'));
  gulp.watch('./src/icons/*.*', gulp.series('icons'));
});


//default task
gulp.task('default',
    gulp.series(
        'clean',
        'images',
        'icons',
        gulp.parallel(
            'html',
            'js',
            'fonts',
            'sass'
        ),
        gulp.parallel(
            'watch',
            'server'
        )
    )
);