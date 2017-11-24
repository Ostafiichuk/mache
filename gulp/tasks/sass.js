'use strict';

module.exports = function(){
	$.gulp.task('sass', function(){
		return $.gulp.src('src/scss/main.scss')
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.sass())
		.on('error', $.gp.notify.onError({  // notify вказує де сталася помилка якщо вона була
			'title': 'Style'
		}))
		.pipe($.gp.autoprefixer({
			browsers: [
			'last 10 versions'
			]
		}))
		// .pipe($.gp.csso())
		.pipe($.gp.sourcemaps.write())
		.pipe($.gulp.dest('build/css'));
	});
};

