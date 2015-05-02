/*
 * @author  Lars Hendahl
 */

 /*global define: false, require: false */
 define(["jquery", "widgets/ewidget", "matchMedia"],
 	function ($, widget, matchMedia) {
 		"use strict";
 		var win, eImageLoaderWidget;
 		win = $(window);
 		eImageLoaderWidget = widget({
 			//element: ".eLazy:not('.executed')",
 			element: ".eLazy",
 			defaults: {
 				data_attribute: "desktop"
 			},
 			breakPoints: {
 				desktopbig: "(min-width: 1601px)",
 				desktop: "(max-width: 1600px) and (min-width: 1025px)",
 				tabletlandscape: "(max-width: 1024px) and (min-width: 769px)",
 				tabletportrait: "(max-width: 768px) and (min-width: 481px)",
 				smartphonelandscape: "(max-width: 480px)",
 				smartphoneportrait: "(max-width : 320px)"
 			},
 			changeOntheFly: function () {
				// Check and set correct breakpoint
				var self = this, $eImgEl = $(this.element);
				$.each(this.breakPoints, function (key, value) {
					if (matchMedia(value).matches) {
						self.options.data_attribute = key;
						return;
					}
				});
				$($eImgEl).each(function () {
					var $e = $(this);
					var eImgSrc =  $e.attr("data-" + self.options.data_attribute);
					if ($e.is("img")) {
						$e.attr("src", eImgSrc);
					}
					if ($e.hasClass("eLazyBg")){
						$e.css("background-image", "url('" + eImgSrc + "')");
					}
				});
			},
			onLoad: function () {
				this.changeOntheFly();
				win.resize( this.proxy(this.changeOntheFly));
			}
		});

return eImageLoaderWidget;
}
);
