/*
 * @author  Lars Hendahl
 */

 /*global define: false, require: false */

 define(["jquery", "widgets/ewidget"], function ($, widget) {
 	var eMenuWidget = widget({
 		element: "header",
 		elements: {
 			$toogleLink: "#eMobileMenu",
 			$navElement: "nav"
 		},
 		events: {
 			"click #eMobileMenu": "linkClickHandler"
 		},
 		linkClickHandler: function (event) {
 			event.preventDefault();
 			event.stopPropagation();
 			this.$toogleLink.toggleClass("eActive");
 			this.$navElement.toggleClass("eHide");
 		}
 	});
 	return eMenuWidget;
 });