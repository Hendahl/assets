/**
 * Grunt.js init config for module grunt-html-validation "validation" 
 * @author  Lars Hendahl
 */


module.exports = {
    options: {
        reset: true,
        stoponerror: true,
        path: "src/logs/validation-status.json",
        reportpath: "src/logs/validation-report.json"
        
    },
    files: {
         src: ['dist/html/**/*.html', '!dist/html/temp/**/*.html']
    }
};