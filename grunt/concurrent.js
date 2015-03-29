/*
 * Grunt.js init config for module grunt-concurrent "grunt-concurrent" 
 * @author  Lars Hendahl
 */

module.exports = {
	 html:["compile-handlebars", "validation"],
	 less:["less"],
	 js: ["jshint", "requirejs"],
	 fonts: ["copy:fonts"]
};
