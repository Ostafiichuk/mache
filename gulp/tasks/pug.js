'use strict';

module.exports = function(){
	$.gulp.task('pug', function(){
		return $.gulp.src('src/index.pug')
		.pipe($.gp.pug({pretty: true}))   // pretty true означає що файл не буде мініфікований 
		.on('error', $.gp.notify.onError(function(error){ // notify вказує де сталася помилка якщо вона була
			return {
				title: 'Pug',
				message: error.message
			}
		}))
		.pipe($.gulp.dest('./build/'))
	});
};

