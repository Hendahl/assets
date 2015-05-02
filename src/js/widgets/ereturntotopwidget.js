/*
 * @author  Lars Hendahl
 */

 /*global define: false, require: false */
 define(["jquery", "widgets/ewidget", "waypoints"], function ($, widget) {
 	"use strict";
 	var eReturnToTopwidget = widget({
 		element: "body",
 		events: {
 			"click .eReturnTopLink": "eScrollTop"
 		},
 		elements: {
 			$eTopLink: ".eReturnTopLink",
 			$header: "header"
 		},
 		eScrollTop: function (ev) {
 			ev.preventDefault();
 			$("html, body").animate({
 				scrollTop: "5px"
 			});
 		},
 		onLoad: function () {
 			var self = this;

 			self.$header.waypoint(function (direction) {
 				if (direction === "down") {
 					self.$eTopLink.toggleClass("eOpacity");
 				}
 			}, {
 				offset: "-200px"
 			}).waypoint(function (direction) {
 				if (direction === 'up') {
 					self.$eTopLink.toggleClass("eOpacity");
 				}
 			}, {
 				offset: '-150px'
 			});
 		}
 	});
 	return eReturnToTopwidget;
 });
