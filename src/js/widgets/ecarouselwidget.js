/**
 * @author  Lars Hendahl
 */


/*global define: false, jquery: false */

define(["jquery", "widgets/ewidget", "jquery.flexslider", "lib/etouchdetectionlib"], function($, widget, flexslider, touch) {
    "use strict";
    var eCarouselWidget = widget({
        element: ".eCarousel",

        dataAttribute: "params",

        elements: {
            $captions: "figcaption h3",
            $items: ".slides >li"
        },

        events: {
            "mouseover .slides >li": "eImageOver",
            "mouseout .slides >li": "eImageOut"
        },

        defaults: {
            slideshow: true,
            randomize: false,
            imageWidth: 180,
            justify: true,
            dots: true,
            show: 0
        },

        eCarouselInit: function(params) {
            this.$element.flexslider(params);
        },

        eInitialParams: function() {
            var self = this,
                eParams = {
                    animation: "slide",
                    randomize: this.options.randomize,
                    direction: "horizontal",
                    pauseOnHover: true,
                    slideshow: this.options.slideshow,
                    slideshowSpeed: 7000,
                    animationSpeed: touch ? 300 : 600,
                    animationLoop: true,
                    minItems: 1,
                    move: this.options.show,
                    start: function() {
                        self.eJustifyCaptions();
                        $(".slides >li").css("opacity", "1");
                    }
                };
            return eParams;
        },

        eExtendNormalParams: function() {
            var eParams = $.extend({
                itemWidth: parseInt(this.options.imageWidth)
            }, this.eInitialParams());
            return eParams;
        },

        eJustifyCaptions: function() {
            var height = 0;

            this.$captions.each(function() {
                height = Math.max($(this).height(), height);
            }).height(height);
        },


        eImageOver: function(event) {
            var $eTargetLi = $(event.target).parents("li"),
                $eImg = $eTargetLi.find("img"),
                $eImgSrc = $eImg.attr("src"),
                hoverImg = $eTargetLi.data("hover");

            if (hoverImg) {
                $eTargetLi.attr("data-original", $eImgSrc);
                $eImg.attr('src', hoverImg);
            }
        },

        eImageOut: function(event) {
            var $eTargetLi = $(event.target).parents("li"),
                $eImg = $eTargetLi.find("img"),
                $eImgSrc = $eImg.attr("src"),
                originalImg = $eTargetLi.data("original");

            if (originalImg) {
                $eTargetLi.attr("data-hover", $eImgSrc);
                $eImg.attr('src', originalImg);
            }
        },

        onLoad: function() {
            if (this.$element.hasClass("eHeroCarousel")) {
                this.eCarouselInit(this.eInitialParams());
            } else {
                this.eCarouselInit(this.eExtendNormalParams());
            }
        }
    });

    return eCarouselWidget;
});
