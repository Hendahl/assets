/**
 * @author  Lars Hendahl
 */

 /*global define: false, jquery: false */
 
define(["jquery", "widgets/ewidget"], function ($, widget) {
	"use strict";
	var eCookieBannerWidget = widget({
		element: "#eCookieMsg",
		dataAttribute: "",

		defaults: {
			name: "eAvtalCookies",
			path: "/",
			years: 2
		},

		events: {
			"click input": "buttonHandler"
		},

		elements: {},

		setExpireDays: function () {
			var now = new Date();

			now.setFullYear(now.getFullYear() + this.options.years);
			this.options.expires = now;
		},

		setCookie: function (val) {
			this.setExpireDays();
			document.cookie = this.options.name + "=" + val + "; path=" + this.options.path + "; expires=" + this.options.expires + ";";
		},

		getCurrentVal: function (option) {
			var eVal = option.split("=")[1];

			switch (eVal) {
			case "true":
				this.options.cookieValue = true;
				break;
			case "false":
				this.options.cookieValue = false;
				break;
			}
		},

		isCookieAvailable: function () {
			var eCookieArr = document.cookie.split(";"),
				i,
				eLen = eCookieArr.length,
				status = false;

			for (i = 0; i < eLen; i += 1) {
				if (eCookieArr[i].replace(" ", "").indexOf(this.options.name) === 0) {
					this.getCurrentVal(eCookieArr[i].replace(" ", ""));
					status = true;
				}
			}
			return status;
		},

		toggleBanner: function () {
			//this.$element.toggleClass("eHide");
		},

		buttonHandler: function (ev) {
			ev.preventDefault();
			this.setCookie(true);
			this.toggleBanner();
		},

		eCookieInit: function () {
			var status = this.isCookieAvailable();
			if (status) {
				if (!this.options.cookieValue) {
					this.toggleBanner();
				}
			} else {
				this.setCookie(false);
				this.toggleBanner();
			}
		},

		onLoad: function () {
			this.eCookieInit();
		}
	});

	return eCookieBannerWidget;
});
