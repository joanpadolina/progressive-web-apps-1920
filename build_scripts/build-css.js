const gulp = require('gulp');
const concat = require('gulp-concat');

return gulp.src([
		'./src/css/styles.css',
		'./src/css/animations.css',
])
	.pipe(concat('styles-concat.css'))
	.pipe(gulp.dest('./public/css'));