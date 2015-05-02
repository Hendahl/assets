/*
 * @author  Lars Hendahl
 */

 require.config({
    //waitSeconds: 15,
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
        "ereturntopwidget": "widgets/ereturntopwidget",
        "einfinitewidget": "widgets/einfinitewidget"
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
            deps: ["jquery"],
            exports: "waypoints"
        }
    }
});
require(["jquery"], function ($) {
	require(widgets);
    /*console.log("$.fn.owlCarousel:", $.fn.owlCarousel);
    console.log("$.fn.jquery:", $.fn.jquery);*/
});