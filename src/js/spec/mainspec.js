/**
 * @author  Lars Hendahl
 */

 /*global define: false, jquery: false */
 
define([ 'main' ], function() {
	describe("main", function() {
		it("expect(require.config).toBeDefined()", function() {
			expect(require.config).toBeDefined();
		});
	});
});
