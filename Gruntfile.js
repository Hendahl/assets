/**
 * Grunt settings
 * @author  lars.hendahl@diglias.com
 */
module.exports = function (grunt) {

  grunt.log.write("eAvtal grunt tasks starts...");
  
  require('time-grunt')(grunt);


  require("load-grunt-config")(grunt);

  //grunt.task.run('notify_hooks');

  grunt.registerTask("image", ["imagemin"]);
  grunt.registerTask("svg", ["dr-svg-sprites","less:mock"]);
  grunt.registerTask("sortjson", ["sortJSON"]);
  grunt.registerTask("copyfonts", ["newer:copy:fonts"]);
  grunt.registerTask("copyimages", ["newer:copy:images"]);
  grunt.registerTask("watchless", ["watch:less"]);
  grunt.registerTask("watchhtml", ["watch:html"]);
  grunt.registerTask("sync", ["browserSync","watch"]);
  grunt.registerTask("watchjs", ["watch:js"]);
  grunt.registerTask("jsvalidate", ["newer:jshint"]);
  grunt.registerTask("lessvalidate", ["lesslint"]);
  grunt.registerTask("jsmock", ["requirejs"]);
  grunt.registerTask("lessmock", ["less:mock"]);
  grunt.registerTask("htmlcompile", ["compile-handlebars"]);
  grunt.registerTask("htmlvalidate", ["htmlcompile","validation"]);
  grunt.registerTask("default", ["concurrent:js", "concurrent:html","concurrent:fonts","concurrent:less"]);

};