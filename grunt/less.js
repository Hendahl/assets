/*
 * Grunt.js init config for module grunt-contrib-less
 * @author  Lars Hendahl
 */

 module.exports = {
 	dist : {
 		options : {
 			paths : ["src/less/"],
 			cleancss : true,
 			strictUnits : true,
 			compress : true
 		},
 		files : {
 			"dist/css/ecountrypage.css" : "src/less/ecountrypage.less",
 			"dist/css/edefault.css" : "src/less/edefault.less",
 			"dist/css/emediaqueries.css" : "src/less/emediaqueries.less",
 			"dist/css/eprint.css" : "src/less/eprint.less",
 			"dist/css/eie.css" : "src/less/eie.less",
 			"dist/css/eie8.css" : "src/less/eie8.less",
 			"dist/css/eie7.css" : "src/less/eie7.less",
 			"dist/css/edemo.css" : "src/less/edemo.less"
 		}
 	}
 };