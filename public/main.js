/**
* Require JS configuration.  Defines and launches the main app.
*/

require.config({
	baseUrl: '/js',
	paths: {
		'domReady' : '/bower_components/requirejs-domready'
		'angular' : '/bower_components/angular/angular',
		'ngRoute' : '/bower_components/angular-route'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'ngRoute' : { deps:['angular']} 
	}
});

require([
	'domReady',
	'angular',
	'app'
], (function(domReady, angular, app) {
	domReady(function() {
	console.log('dom is ready');
	angular.bootstrap(document, ['app']);
	console.log('application is bootstrapped');
	});

});