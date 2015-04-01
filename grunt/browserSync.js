 /**
 * Grunt.js init config for module grunt-browser-sync browserSync
 * @author  lars.hendahl@cygni.se
 */

module.exports = {
	default_options: {
    	bsFiles: {
            src : [
            '/css/*.css',
            '*.html',
            '/js/*.js'
          ]
        },
        options: {
            server: {
            	watchTask: true,
                baseDir: './dist'
            }
        }
    }
}