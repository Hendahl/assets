/**
 * @author  Lars Hendahl
 */


 /*global define: false, jquery: false */

define(function () {
	"use strict";
	var touchVal = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0),
		touch = false;

	if (typeof touchVal !== "undefined") {
		touch = touchVal;
	}
	return touch;
});
