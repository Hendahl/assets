/*
 * @author  Lars Hendahl
 */

 module.exports = function (grunt) {

   grunt.log.write("project_x grunt tasks starts...");

   require('time-grunt')(grunt);


   require("load-grunt-config")(grunt);

  //grunt.task.run('notify_hooks');

  grunt.registerTask("cleanup", ["clean"]);
  grunt.registerTask("image", ["imagemin"]);
  grunt.registerTask("svg", ["dr-svg-sprites","less:dist", "copyimages"]);
  grunt.registerTask("sortjson", ["sortJSON"]);
  grunt.registerTask("copyfonts", ["newer:copy:fonts"]);
  grunt.registerTask("copyimages", ["newer:copy:images"]);
  grunt.registerTask("watchless", ["watch:less"]);
  grunt.registerTask("watchhtml", ["watch:handlebars"]);
  grunt.registerTask("watchjs", ["watch:js"]);
  grunt.registerTask("sync", ["browserSync","watch"]);
  grunt.registerTask("jsvalidate", ["newer:jshint"]);
  grunt.registerTask("lessvalidate", ["lesslint"]);
  grunt.registerTask("jsdist", ["requirejs"]);
  grunt.registerTask("lessdist", ["less:dist"]);
  grunt.registerTask("htmlcompile", ["compile-handlebars"]);
  grunt.registerTask("htmlvalidate", ["compile-handlebars","validation"]);

  grunt.registerTask("default", [
    "concurrent:handlebars",
    "concurrent:js",
    "concurrent:imagesandless",
    "concurrent:fonts",
    "concurrent:html"
    ]);
};