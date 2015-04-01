/**
 * @author  Lars Hendahl
 */

/*global define: false, require: false */

define(["jquery", "widgets/ewidget"],
    function($, widget) {
        "use strict";
        var eExampleWidget = widget({

            // "element" describes the parent selector for all of the elements and events that this widget uses
            // this.element will automatically be wrapped as a jquery object.
            element: ".eWidgetsExample", // this.element = $(".eWidgetsExample")

            // "dataAttribute" specifies the data attribute that this widget should get its options from. Matches the attribute data-<dataAttributeName>.
            // The data within the attribute must be defined in json format.
            // The options taken from the data attribute will extend the data within this.defaults
            dataAttribute: "personalizationForm", // this.options = $.extend({}, defaults, this.element.data("personalizationForm"))

            // "defaults" specifies the default options for this widget. These options should later on be accessed with this.options instead of this.defaults
            defaults: {
                submitEndpoint: "/my/ajax/endpoint",
                animationSpeed: 300,
                errorMessage: "There was an error!"
            },

            // "elements" supplies shorthands to commonly accessed elements within this widget.
            // This will only target elements within this widgets parent element. In this case ".eWidgetsExample".
            // These elements will be put directly under the parent object, and wrapped as a jquery object,
            // so that you can access the with this.myElement
            elements: {
                myInputField: "input[type=text]", // this.myInputField = this.element.find("input[type=text]")
                mySubmit: "input[type=submit]" // this.mySubmit = this.element.find("input[type=submit]")
            },

            // "events" delegates events from this widgets parent element.
            // - The key specifies the event and the elements to trigger on
            // - The value specifies the internal function to run when the event is fired
            // Context within the function will be referred to as this widget object and not the element
            // You can still access the element with "event.target" or "event.currentTarget"
            events: {
                "submit form": "formSubmitHandler", // this.element.on("submit", "form", $.proxy(this.formSubmitHandler, this))
                "click a.reset-form-submitted": "linkClickHandler" // this.element.on("click", "a.my-link", $.proxy(this.linkClickHandler, this))
            },

            // 'onLoad' will get called when this widget is loaded. Works as a constructor
            onLoad: function() {
                // Do stuff when this widget in loaded
            },

            formSubmitted: false,

            formSubmitHandler: function(event) {
                event.preventDefault();

                // scope inside a handler refers to the parent object, so you can access properties with this.property
                if (!this.formSubmitted) {
                    this.formSubmitted = true;

                    // The element that the event was triggered on can still be accessed
                    $(event.target).submit();
                }
            },

            linkClickHandler: function(event) {
                event.preventDefault();
                this.formSubmitted = false;
            }
        });

        // Return the exampleWidget from this module so that we can test our code
        return eExampleWidget;
    }
);
