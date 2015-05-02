 /**
 * Grunt.js init config for module jasmine
 * @author  Lars Hendahl
 */

 module.exports = {
  taskName: {
      src: ['src/js/lib/*.js', 'src/js/widgets/*.js'],
      options: {
        specs: 'src/js/spec/**/*.js',
        //helpers: 'spec/*Helper.js',
        template: require('grunt-template-jasmine-requirejs'),
        vendor: [
        'src/vendor/*.js',
        'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'
        ],
        templateOptions: {
          requireConfig: {
            baseUrl: 'src/js',
            paths: {
                "jquery": "jquery",
                "jquery.lazyload": "vendor/jquery.lazyload",
                "owl": "vendor/owl.carousel",
                "matchMedia": "vendor/matchMedia",
                "waypoints": "vendor/waypoints",
                "etabswidget" : "widgets/etabswidget",
                "eimageloaderwidget": "widgets/eimageloaderwidget",
                "ecarouselwidget": "widgets/ecarouselwidget",
                "etogglewidget": "widgets/etogglewidget",
                "eaccordionwidget": "widgets/eaccordionwidget",
                "ersswidget": "widgets/ersswidget",
                "ereturntopwidget": "widgets/ereturntopwidget"
            },
            shim: {
                "jquery": {
                    exports: '$'
                },
                "jquery.lazyload": {
                    deps: ["jquery"],
                    exports: "lazyload"
                },
                "owl":{
                    deps: ["jquery"],
                    exports: "owlCarousel"
                },
                "matchMedia": {
                    exports: "matchMedia"
                },
                "waypoints": {

                    exports: "waypoints"
                }
            }
        }
    }
}
}
};