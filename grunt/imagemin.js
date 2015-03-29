 module.exports = {
    static: {                         
        options: {                       
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }]
          //use: [mozjpeg()]
        },
         files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'src/images',                   // Src matches are relative to this path
        src: ['**/*.svg'],   // Actual patterns to match
        dest: 'dist/'                  // Destination path prefix
      }]
    }
}
  