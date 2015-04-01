/**
 * @author  Lars Hendahl
 
 smartPhonePotrait : "only screen and (max-width : 320px)",
 smartPhoneLandscapeSmall: "only screen and (max-width: 480px)",
 tabletLandscape: "only screen and (max-width: 1024px) and (min-width: 769px)",
 tabletPotrait: "only screen and (max-width: 768px) and (min-width: 481px)",
 tabletPortraitSmall: "only screen and (max-width: 768px)"
 */



/*global define: false, jquery: false */

define(function() {
    "use strict";
    var match, defaults;
    match = {};
    defaults = {
        mobileDeviceBreakPoint: 768
    };
    match.mobileDeviceWidth = function(widthValue) {
        var smallDevice = false;
        if (widthValue === undefined) {
            widthValue = defaults.mobileDeviceBreakPoint;
        }
        if (window.matchMedia) {
            if (window.matchMedia("(min-width: " + widthValue + "px)").matches) {
                smallDevice = false;
            } else {
                smallDevice = true;
            }
        }
        return smallDevice;
    };

    return match;
});
