/*
 * Grunt.js init config for module dr-svg-sprites
 * @author  Lars Hendahl
 */

module.exports = {
	basic: {
		options: {
			spriteElementPath: "src/images/svg/*.svg",
			spritePath: "src/images/sprites/esprite.svg",
			cssPath: "src/less/esprite.less",
			unit: 10,
			cssBaseFontSize: 16,
			cssSuffix: "less",
			cssUnit: "rem",
			layout: "alt-diagonal",
			cssSvgPrefix: ".eSVG",
			cssIncludeElementSizes: false,
			prefix:"eIcon"
		}
	}
};