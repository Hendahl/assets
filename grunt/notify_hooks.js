 /**
 * Grunt.js init config for notify_hooks
 * @author  Lars Hendahl
 */

 module.exports = {
 	options: {
 		enabled: true,
	      max_jshint_notifications: 5, // maximum number of notifications from jshint output
	      title: "Diglias", // defaults to the name in package.json, or will use project directory's name
	      success: false, // whether successful grunt executions should be notified automatically
	      duration: 3 // the duration of notification in seconds, for `notify-send only
	  }
	};
