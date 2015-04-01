/*

https://gist.github.com/cowboy/661855

Examples: 

function handle(e, a, b, c) {
  // `e` is the event object, you probably don't care about it.
  console.log(a + b + c);
};

$.subscribe("/some/topic", handle);

$.publish("/some/topic", [ "a", "b", "c" ]);
// logs: abc

$.unsubscribe("/some/topic", handle); // Unsubscribe just this handler

// Or:

$.subscribe("/some/topic", function(e, a, b, c) {
  console.log(a + b + c);
});

$.publish("/some/topic", [ "a", "b", "c" ]);
// logs: abc
// Unsubscribe all handlers for this topic
$.unsubscribe("/some/topic"); */


/*global define: false, jquery: false */

define(["jquery"], function($) {
    var o = $({});

    return {
        subscribe: function() {
            o.on.apply(o, arguments);
        },

        unsubscribe: function() {
            o.off.apply(o, arguments);
        },

        publish: function() {
            o.trigger.apply(o, arguments);
        }
    };
});
