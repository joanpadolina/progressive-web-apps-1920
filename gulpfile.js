const gulp = require('gulp');
const concat = require('gulp-concat');

const port = process.env.PORT || 3000

gulp.task('build', function () { 
	console.log('Hello Gulp!') 
	return gulp.src([
		'./src/css/styles.css',
		'./srtc/css/animation.css'
	])
	.pipe(concat('styles-concat.css'))
	.pipe(gulp.dest('./public/css'))
});

gulp.task('watch', function (){
	gulp.watch('./src/css/*.css')
	gulp.series('build')
})

return gulp.src([
		'./src/css/styles.css',
		'./src/css/animations.css',
])
	.pipe(concat('styles-concat.css'))
    .pipe(gulp.dest('./public/css'));
    