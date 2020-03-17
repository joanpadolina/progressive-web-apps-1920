const gulp = require('gulp');
const concat = require('gulp-concat');

return gulp.src([
	'./src/js/*.js'
])
.pipe(concat('app.js'))
.pipe(gulp.dest('./public/js'));