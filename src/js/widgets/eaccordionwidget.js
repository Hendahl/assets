/*
 * @author  Lars Hendahl
 */

 /*global define: false, require: false */

 define(["jquery", "widgets/ewidget", "lib/eanimationslib"],
 	function ($, widget, animation) {
 		"use strict";
 		var eAccordionWidget = widget({
 			element: ".eAccordion",

 			currentItem: -1,

 			dataAttribute: "accordion",

 			defaults: {
 				animationSpeed: 300
 			},

 			elements: {
 				$contents: ".eAccordionContent"
 			},

 			events: {
 				"click .eAccordionLink": "toggleItem"
 			},

 			onLoad: function () {

 				var id;

 				this.syncVisibility(true);


 			},

 			toggleItem: function (event) {

 				var target, id;

 				target = $(event.currentTarget);
 				id = target.data("id");

 				event.preventDefault();

 				if (this.currentItem === target.closest("li").index()) {
 					this.currentItem = -1;
 				} else {
 					this.currentItem = target.closest("li").index();
 				}

 				this.syncVisibility(this.options.animationSpeed, id);
 			},

 			syncVisibility: function (directly, id) {

 				var speed, $target, $others;

 				speed = (directly === true) ? 0 : this.options.animationSpeed;


 				if (this.currentItem >= 0) {
 					$target = this.$contents.eq(this.currentItem);
 					$others = this.$contents.not($target);

 					$target.closest("li").addClass("eExpanded");
 					$others.closest("li").removeClass("eExpanded");

 					$target.slideDown(speed);
 					$others.slideUp(speed);
 				} else {
 					this.$contents.closest("li").removeClass("eExpanded");
 					this.$contents.slideUp(speed);
 				}
 			}



 		});

return eAccordionWidget;
}
);
