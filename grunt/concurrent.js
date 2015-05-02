/*
 * Grunt.js init config for module grunt-concurrent "grunt-concurrent"
 * @author  Lars Hendahl
 */

 module.exports = {
 	handlebars:["clean:disthtml","compile-handlebars"],
 	imagesandless:["clean:distimages","clean:distcss","dr-svg-sprites","less","copy:images"],
 	js: ["clean:distjs","jasmine","jshint", "requirejs"],
 	fonts:["copy:fonts"],
 	html:["copy:html"]
 };
