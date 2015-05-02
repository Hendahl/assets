/*
 * @author  Lars Hendahl
 */

 define(function () {
 	"use strict";
 	var ls = {},
 	isSupportedLocalStorage, lStorage = window.localStorage;

 	isSupportedLocalStorage = function () {
 		try {
 			return 'localStorage' in window && window.localStorage !== null;
 		} catch (e) {
 			return false;
 		}
 	};

 	ls.isAvailable = isSupportedLocalStorage();

 	ls.getItem = function (key) {
 		if (ls.isAvailable) {
 			return lStorage.getItem("ericsson-" + key);
 		}
 	};

 	ls.getKey = function (index) {
 		if (ls.isAvailable) {
 			return lStorage.key(index);
 		}
 	};

 	ls.setItem = function (key, value) {
 		if (ls.isAvailable) {
 			return lStorage.setItem("ericsson-" + key, value);
 		}
 	};

 	ls.removeItem = function (key) {
 		if (ls.isAvailable) {
 			return lStorage.removeItem("ericsson-" + key);
 		}
 	};

 	ls.clearStorage = function () {
 		if (ls.isAvailable) {
 			return lStorage.clear();
 		}
 	};

 	ls.getLength = function () {
 		if (ls.isAvailable) {
 			return lStorage.length;
 		}
 	};

 	return ls;
 });
