/**
 * @author  Lars Hendahl
 */

require.config({
    //waitSeconds: 15,
    paths: {
    	"jquery": "jquery",
        "jquery.flexslider": "vendor/jquery.flexslider"
    },
    shim: {
        "jquery": {
            exports: '$'
        },
         "jquery.flexslider": {
            deps: ["jquery"],
            exports: "flexslider"
        }
    }
});
require(["jquery"], function ($) {
	require(widgets);
	console.log("$.fn.jquery:", $.fn.jquery);
});