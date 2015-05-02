 /**
 * Grunt.js init config for module grunt-browser-sync browserSync
 * @author  Lars Hendahl
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
           baseDir: './',
           directory: true
       },
       watchTask: true,
   }
}
};