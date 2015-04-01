/*
* @author  lars.hendahl@cygni.se
*/
 module.exports = {
    static: {                         
        options: {                       
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }]
          //use: [mozjpeg()]
        },
         files: [{
        expand: true,                 
        cwd: 'src/images',                   
        src: ['**/*.svg'],  
        dest: 'dist/'                  
      }]
    }
}
  