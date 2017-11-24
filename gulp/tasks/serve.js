'use strict';

module.exports = function(){
	$.gulp.task('serve', function(){
		$.browserSync.init({
        server: {
            baseDir: "build"
        	}
    	});
		$.browserSync.watch('build', $.browserSync.reload);
	});
};