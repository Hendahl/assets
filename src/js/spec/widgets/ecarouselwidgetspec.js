/*
 * @author  Lars Hendahl
 */


 define([ "jquery", "widgets/ecarouselwidget" ], function($, widget) {
 	describe("ecarouselwidget", function() {
 		it("expect(widget.element).toMatch('.eCarousel');", function() {
 			expect(widget.element).toMatch(".eCarousel");
 		});
 	});
 });
