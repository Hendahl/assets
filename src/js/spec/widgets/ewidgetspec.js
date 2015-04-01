/**
 * @author  Lars Hendahl
 */


/*global define: false, jquery: false */

define(["jquery", "widgets/ewidget"], function($, widget) {
    describe("ewidget", function() {
        it("expect(widget.element).toBe('')", function() {
            expect(widget.element).toMatch("");
        });
    });
});
