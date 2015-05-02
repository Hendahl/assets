/*
 * Grunt.js init config for module grunt-contrib-watch
 * @author  Lars Hendahl
 */

 module.exports = {
  less: {
    files: ["src/less/*.less"],
    tasks: ["less"]
  },

  js: {
    files: ["src/js/**/*.js"],
    tasks: ["concurrent:js"]
  },
  handlebars: {
    files: ["src/handlebars/**/*.*"],
    tasks: ["compile-handlebars"]
  }
};
