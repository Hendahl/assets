/*
 * @author  Lars Hendahl
 */

 /*global define: false, require: false */

 define(["jquery", "widgets/ewidget","owl"], function ($, widget) {
 	"use strict";
 	var  eCarouselWidget = widget({
 		element: ".eCarousel",
 		dataAttribute: "src",
 		defaults: {
 		},
 		onLoad: function () {
 			$(this.element).owlCarousel({
 				autoPlay: 5000,
 				lazyLoad : true,
 				navigation : false,
 				slideSpeed : 300,
 				paginationSpeed : 400,
 				singleItem:true
 			});
 		}
 	});
 	return eCarouselWidget;
 });