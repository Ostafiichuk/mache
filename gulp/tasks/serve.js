'use strict';

module.exports = function(){
	$.gulp.task('serve', function(){
		$.browserSync.init({
        server: {
            baseDir: "build"
        	},
    	notify: false // Отключаем уведомления
    	});
		$.browserSync.watch('build', $.browserSync.reload);
	});
};