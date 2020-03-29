const gulp = require('gulp');
const concat = require('gulp-concat'),
	cssMini = require('gulp-clean-css')

gulp.task('build', function () {
	console.log('Hello Gulp!')
	return gulp.src([
			'./src/css/styles.css'
		])
		.pipe(concat('styles-concat.css'))
		.pipe(cssMini())
		.pipe(gulp.dest('./public/css'))
})
gulp.task('watch', function () {
	gulp.watch('./src/css/*.css', gulp.series('build'))
})