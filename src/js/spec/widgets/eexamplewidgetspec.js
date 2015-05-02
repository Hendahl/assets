/*
 * @author  Lars Hendahl
 */

 /* JUST FOR EXAMPLE NOT PRODUCTION */

 define([ "jquery", "widgets/eexamplewidget"], function($,
 	widget, eExampleWidget) {

 	describe("eexamplewidget - This is just as an example", function() {
 		it("expect(widget.element).toMatch('.eWidgetsExample');", function() {
 			expect(widget.element).toMatch(".eWidgetsExample");
 		});
 	});
 });
