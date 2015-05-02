/*
 * @author  Lars Hendahl
 */

 define(function () {
 	"use strict";
 	var touchVal = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0),
 	touch = false;

 	if (typeof touchVal !== "undefined") {
 		touch = touchVal;
 	}
 	return touch;
 });
