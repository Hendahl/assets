/*
 * @author  Lars Hendahl
 */

 /*global define: false, require: false, jquery: false */

 define(["jquery", "widgets/ewidget", "lib/eanimationslib"], function ($, widget,animations) {
 	"use strict";
 	var eToggleWidget = widget({
 		element: ".eToggleContainer",
 		dataAttribute: "toggle",
 		defaults: {
 			linklabel1: "Show more",
 			linklabel2: "Show less",
 			toggleareaclass: "eToggle",
 			togglelinkclass: "eToggle",
 			animate: "",
 			animationSpeed: 300,
 			ellipsis: "false"
 		},
 		state : 1,
 		elements: {
 			$toggleLink: ".eToggleLink",
 			$toggleArea: ".eToggleArea"		},
 			events: {
 				"click .eToggleLink": "clickHandler"
 			},
 			clickHandler: function (event) {
 				var tempText;
 				event.preventDefault();

			// Take care of the Area
			if(this.options.animate === "slide"){
				if(this.state === 1){
					this.$toggleArea.slideDown(this.options.animationSpeed);
				}else{
					this.$toggleArea.slideUp(this.options.animationSpeed);
				}
			}
			if(this.options.animate === "slideandfade"){
				if(this.state === 1){
					animations.slideDownAndFadeIn(this.$toggleArea, this.options.animationSpeed);
				}else{
					animations.fadeOutAndSlideUp(this.$toggleArea, this.options.animationSpeed);
				}
			}

			if(this.options.animate === "fadeInText"){
				tempText = this.$toggleArea.text();
				this.$toggleArea.html("");
				animations.fadeInText(this.$toggleArea, tempText);
			}


			// Take care of the link
			if(this.state === 1){
				this.$toggleLink.html(this.options.linklabel1);
			}else{
				this.$toggleLink.html(this.options.linklabel2);
			}
			this.$toggleLink.toggleClass(this.options.togglelinkclass);
			this.$toggleArea.toggleClass(this.options.toggleareaclass);


			// Add Ellipsis to text
			if(this.options.ellipsis === "true"){
				this.$toggleArea.prev().toggleClass("eEllipsisAfter");
			}


			this.state = (this.state === 1) ? 2 : 1;



		}
	});
return eToggleWidget;
});
