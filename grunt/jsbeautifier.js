/*
* @author  lars.hendahl@cygni.se
*/
 module.exports = {
      files: ["src/js/**/*.js","src/grunt/*.js", "!src/js/vendor/**/*.js", "!src/js/jquery.js", "!src/js/require.js"],
      options: {
          js: {
              braceStyle: "collapse",
              breakChainedMethods: false,
              e4x: false,
              evalCode: false,
              indentChar: " ",
              indentLevel: 0,
              indentSize: 4,
              indentWithTabs: false,
              jslintHappy: false,
              keepArrayIndentation: false,
              keepFunctionIndentation: false,
              maxPreserveNewlines: 10,
              preserveNewlines: true,
              spaceBeforeConditional: true,
              spaceInParen: false,
              unescapeStrings: false,
              wrapLineLength: 0,
              endWithNewline: true
          }
      }
 }