/**
 * Grunt.js init config for module grunt-contrib-copy "copy" 
 * @author  Lars Hendahl
 */

module.exports = {

		fonts: {
		    files: [
				      {expand: true, cwd: 'src/', src: ['fonts/**'], dest: 'dist/'},
		    ]
		},
		images: {
		    files: [
				      {expand: true, cwd: 'src/', src: ['images/**'], dest: 'dist/'},
		    ]
		},
		html: {
		    files: [
				      {expand: true, cwd: 'src/', src: ['html/**'], dest: 'dist/'},
		    ]
		}		
};