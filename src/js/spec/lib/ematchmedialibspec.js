/**
 * @author  Lars Hendahl
 */


 /*global define: false, jquery: false */

define([ "lib/ematchmedialib" ], function(match) {
	describe("ematchmedialib", function() {
		it("match.mobileDeviceWidth(0).not.toBeTruthy()", function() {
			var foo = match.mobileDeviceWidth(0);
			expect(foo).not.toBeTruthy();
		});
	});
});