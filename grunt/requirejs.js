/*
 * Grunt.js init config for module grunt-contrib-requirejs
 * @author  Lars Hendahl
 */
module.exports = function (grunt, options) {
	return {
		compile: {
		    options: {
		      baseUrl: "src/js",
		      dir : "dist/js/",
		      mainConfigFile: "src/js/main.js",
		      name : "edefault"
		    }
		}
	}
}
