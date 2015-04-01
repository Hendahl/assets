/**
 * @author  Lars Hendahl
 */


 /*global define: false, jquery: false */
 
define(["jquery"], function($) {
    var animations,speed;
    speed = 150;

    animations = {};

    animations.deferredTimer = function(secondsLeft) {
        var dfd, startNextSecond, secondsPassed;

        secondsLeft = Math.round(secondsLeft);
        dfd = $.Deferred();

        secondsPassed = 0;

        startNextSecond = (function startNextSecond() {
            secondsPassed += 1;
            secondsLeft -= 1;

            if (secondsLeft === 0 || dfd.state() === "resolved") {
                dfd.resolve(secondsLeft, secondsPassed);
            } else {
                dfd.notify(secondsLeft, secondsPassed);
                setTimeout(startNextSecond, 1000);
            }
        }());

        return dfd;
    };

    animations.slideDownAndFadeIn = function ($element, speed) {
        var dfd = $.Deferred();

        $element.stop(true, true).css({"opacity": 0});

        $element.slideDown(speed).animate({"opacity": 1}, speed, function() {
            dfd.resolve($element);
        });

        return dfd;
    };

    animations.fadeOutAndSlideUp = function ($element, speed) {
        var dfd = $.Deferred();

        $element.stop(true, true);
        $element.css("opacity", 1);

        $element.animate({"opacity": 0}, speed);

        setTimeout(function() {
            $element.slideUp(speed, function() {
                dfd.resolve($element);
            });
        }, speed);

        return dfd;
    };
    
    // Update and fade in a new text on an element
    animations.fadeInText = function ($element, text) {
        $element.animate({"opacity": 0.4}, speed).text(text).animate({"opacity": 1}, speed);
    };

    // Update and fade in html inside an element
    animations.fadeInHtml = function ($element, html) {
        $element.animate({"opacity": 0.4}, speed).html(html).animate({"opacity": 1}, speed);
    };

    animations.fadeOut = function ($element) {
        $element.animate({"opacity": 0.4}, speed);
    };

    // Fade out an element, and remove it's class
    animations.fadeOutAndRemoveClass = function ($element,speed,className) {
        $element.animate({"opacity": 0.0}, speed, function() {
            $element.parent().removeClass(className);
            $element.css({"opacity":1.0});
        });
    };

    return animations;
});