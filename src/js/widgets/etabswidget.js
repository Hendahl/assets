/*
 * @author  Lars Hendahl
 */

 /*global define: false, require: false */

 define([
 	"jquery",
 	"widgets/ewidget",
 	"lib/elocalstoragelib"
 	],

 	function ($, widget, ls) {
 		var eTabsWidget = widget({
 			element: ".eTabsContainer",
 			dataAttribute: "tabs",

 			elements: {
 				$tabLinks: ".eTabs li",
 				$panes: ".eTabPane",
 				tabid: ""
 			},

 			events: {
 				"click .eTabs li": "onTabClick"
 			},

 			defaults: {
 				activeClass: "eActive"
 			},

 			onLoad: function () {
 				this.initTabs();
 			},
 			initTabs: function (aTabId) {
 				var tabid;
 				if (this.options) {
 					tabid = this.options.tabid;
 				} else {
 					tabid = aTabId;
 				}


 				if (tabid === null || typeof tabid === 'undefined') {
 					return;
 				}

 				this.activeTab = 0;
 				if (ls.isAvailable && tabid) {
 					this.storageId = "etabs-" + tabid;
 				}
 				this.loadActiveTab();
 			},
 			loadActiveTab: function () {
 				var tabIndex = 0;

 				if (this.storageId) {
 					tabIndex = ls.getItem(this.storageId) || 0;
 				}

 				this.changeTab(tabIndex);
 			},

 			saveActiveTab: function (tabIndex) {
 				if (typeof this.storageId === "string" && typeof tabIndex === "number") {
 					ls.setItem(this.storageId, tabIndex);
 				}
 			},

 			onTabClick: function (event) {
 				var tabIndex;

 				event.preventDefault();

 				if (!$(event.currentTarget).hasClass("eDisabled")) {
 					tabIndex = this.$tabLinks.index($(event.currentTarget));
 					this.changeTab(tabIndex);
 				}
 			},

 			changeTab: function (tabIndex) {
 				var $targetTab, $targetPane;
 				$targetTab = $(this.$tabLinks[tabIndex]);
 				$targetPane = $(this.$panes[tabIndex]);

 				this.$tabLinks.not($targetTab).removeClass(this.options.activeClass);
 				this.$panes.not($targetPane).hide();

 				if ($targetTab.length > 0 && $targetPane.length > 0) {
 					$targetTab.addClass(this.options.activeClass);
 					$targetPane.show();
 					this.saveActiveTab(tabIndex);

 				}
 			},

 			makeResponsive: function () {
 				var markup, $panes, $tabLinks, tempId, classesToAdd, self;
 				$(this.element).addClass("eResponsive");
 				$panes = this.$panes;
 				$tabLinks = this.$tabLinks;
 				self = this;
 				$.each($tabLinks, function (i, item) {
 					classesToAdd = $(item).data("cssclasses");
 					tempId = "eToggleLink" + [i];
 					markup = "<div class='eOW ePanel'><div id='";
 					markup += tempId;
 					markup += "' class='eIW eResponsiveToggleLink " + classesToAdd + "'><h2>";
 					markup += $(this).children().html();
 					markup += "<span></span></h2></div></div>";
 					tempId = "#" + tempId;
 					$($panes[i]).before(markup);
 					$(tempId).on("click", function (event) {
 						$($panes[i]).toggleClass("eOpen");
 						$(".eResponsiveToggleLink:eq(" + i + ")").toggleClass("eOpen");
 					});
 				});
 			}
 		});

return eTabsWidget;
}
);
