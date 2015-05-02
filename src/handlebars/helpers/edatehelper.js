/**
 * @author  Lars Hendahl
 */
 module.exports = function () {
 	return (new Date()).toString().split(' ').splice(1,3).join(' ');
 };