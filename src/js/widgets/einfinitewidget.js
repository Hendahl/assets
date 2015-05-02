/*
 * @author  Lars Hendahl
 */

 /*global define: false, require: false */
 define(["jquery", "widgets/ewidget"],
    function ($, widget) {
        "use strict";
        var eInfiniteWidget = widget({

            element: ".eInfinite",
            dataAttribute: "infinite",
            defaults: {
                context: window,
                continuous: true,
                enabled: true,
                horizontal: false,
                offset: "bottom-in-view",
                triggerOnce: true,
                fadein: 500,
                containerHeight: 200
            },
            elements: {
                eNotLoadedSection: ".eInfiniteItem"
            },
            initWaypoints: function(){
                var $thisSection = $(this), ajaxUrl = $thisSection.data("ajaxsource");
                console.log(ajaxUrl);
            },
            onLoad: function () {
                this.initWaypoints();
            }
        });
        return eInfiniteWidget;
    }
    );
