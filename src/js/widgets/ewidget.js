/*
 * @author  Lars Hendahl
 */

 /*global define: false, require: false */

 define(["jquery"], function ($) {
 	"use strict";

 	var delegateEventSplitter = /^(\S+)\s*(.*)$/,

 	widget = {
 		element: "",
 		dataAttribute: "",

 		proxy: function (func) {
 			if ($.isFunction(func) === false) {
 				throw new Error("The value of 'proxy' needs to be a function");
 			}

 			return $.proxy(func, this);
 		}
 	},

 	propertyMappers = {
 		events: function (obj) {
 			var event, match, eventName, method, selector;

 			if (typeof obj !== "object") {
 				throw new Error("The value of 'events' needs to be an object");
 			}

 			for (event in obj) {
 				if (obj.hasOwnProperty(event)) {
 					match = event.match(delegateEventSplitter);
 					eventName = match[1];
 					selector = match[2];
 					method = this[obj[event]];

 					if (typeof method === "function") {
 						if (selector === "") {
 							this.$element.on(eventName, method);
 						} else {
 							this.$element.on(eventName, selector, $.proxy(method, this));
 						}
 					}
 				}
 			}
 		},

 		elements: function (obj) {
 			var element, wrappedElements, elements;

 			if (typeof obj !== "object") {
 				throw new Error("The value of 'elements' needs to be an object");
 			}

 			for (element in obj) {
 				if (obj.hasOwnProperty(element)) {
 					this[element] = this.$element.find(obj[element]);
 				}
 			}
 		},

 		defaults: function (obj) {
 			var result, data;

 			if (typeof obj !== "object") {
 				throw new Error("The value of 'defaults' needs to be an object");
 			}

 			data = this.$element.data(this.dataAttribute.toLowerCase());

 			if (data) {
 				data = $.extend({}, obj, data);
 			} else {
 				data = obj;
 			}

 			this.options = data;
 		},

 		onLoad: function (func) {
 			if ($.isFunction(func) === false) {
 				throw new Error("The value of 'onLoad' needs to be a function");
 			}

 			func.call(this);
 		}
 	},

 	setup = function (obj, $el) {
 		var key;

 		obj.$element = $el;

 		for (key in propertyMappers) {
 			if (propertyMappers.hasOwnProperty(key) && obj.hasOwnProperty(key)) {
 				propertyMappers[key].call(obj, obj[key]);
 			}
 		}

 		obj.hasLoaded = true;

 		return obj;
 	};

 	return function () {
 		var childObject, init, modules, initOne;

 		modules = (1 <= arguments.length) ? [].slice.call(arguments, 0) : [];
 		modules.unshift(true, {}, widget);

		// Make a deep extend of modules
		childObject = $.extend.apply($, modules);

		childObject.hasLoaded = false;

		childObject.initOne = function (elem) {
			var instances = [],
			instance;
			if (elem instanceof jquery) {
				instance = setup($.extend({}, childObject), elem);
				instances.push(instance);
				childObject.instances = instances;
			}
		};

		childObject.init = function () {
			var $el = $(childObject.element),
			instances = [];

			if (childObject.element === null) {
				throw new Error("element for widget is not defined");
			}

			$el.each(function () {
				var instance = setup($.extend({}, childObject), $(this));

				instances.push(instance);
			});

			childObject.instances = instances;
		};

		childObject.reInitiateElements = function (elemString) {
			var element;
			if (childObject.hasOwnProperty('element')) {
				for (element in this.elements) {
					if (typeof elemString === 'undefined' || (typeof elemString !== 'undefined' && elemString === this.elements[element])) {
						this[element] = this.$element.find(this.elements[element]);
					}
				}
			}
		};

		$(childObject.init);

		return childObject;
	};
});
