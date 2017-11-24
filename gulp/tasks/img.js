'use strict';

module.exports = function(){
	$.gulp.task('img', function(){
		return $.gulp.src('src/img/**/*.+(jpg|png)')
		.pipe($.gp.imagemin())
		.pipe($.gulp.dest('build/img'));
	});
};
