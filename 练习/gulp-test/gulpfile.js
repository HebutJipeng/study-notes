var gulp = require('gulp'),
    sass = require('gulp-sass')

var src = 'app',
	dist = 'dist'

gulp.task('css', function() {
	return new Promise(function(resolve, reject) {
        return setTimeout(function() {
            return  gulp.src(src + '/*.scss')
                .pipe(sass())
                .pipe(gulp.dest(dist))
        }, 500)
    }).catch(function(e) {
        return console.log(e.messageFormatted);
    })
})

gulp.task('default', ['css'])
