var gulp        = require("gulp");
var sass        = require("gulp-ruby-sass");
var browserSync = require("browser-sync").create();

// Static Server + watching scss/html files
gulp.task('serve', [], function() {

    browserSync.init({
        server: "./app"
    });

    //gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("**/*.html").on('change', browserSync.reload);
});

gulp.task('default', function () {});