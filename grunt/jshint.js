/*
 * Grunt.js init config for module grunt-contrib jshint
 * @author  Lars Hendahl¨
 * @contributor swapna.s.biswal@ericsson.com
 */
module.exports = {
	all : ["src/js/lib/*.js", "src/js/widgets/*.js", "GruntFile.js", "src/js/grunt/*.js"],
	options : {
		reporter : require("jshint-stylish"),
		"browser": true,
		"curly": true,
		//"camelcase": true,
        "eqnull": true,
        "eqeqeq": true,
        "undef": true,
        "globals": {
          "jQuery": true,
          "define": false,
          "require": false,
          "module": false
        }
	}
}
