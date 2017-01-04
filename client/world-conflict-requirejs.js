/* global requirejs angular */

requirejs.config({
	baseUrl : '',
	waitSeconds: 60,
	paths : {
		//3rd party resources
		'jquery': 'jquery/jquery.min',
		'angular' : 'angular/angular.min',
		'angular-animate' : 'angular-animate/angular-animate.min',
		'angular-ui-router': 'angular-ui-router/angular-ui-router.min',
		'world-conflict': 'world-conflict',
		'jvectormap': 'jvectormap/jquery-jvectormap.min',
		'world-mill': 'jquery-jvectormap-world-mill'
	},
	shim : {
		'world-conflict' : {
			deps : [ 'angular-animate', 'angular-ui-router', 'jvectormap', 'world-mill'],
			exports: 'wc'
		},
		'angular-animate': {
			deps: [ 'angular' ]
		},
		'angular':{
			deps: ['jquery'],
			exports: 'angular'
		},
		'angular-ui-router':{
			deps: ['angular']
		},
		'jvectormap':{
			deps: ['jquery']
		},
		'world-mill':{
			deps: ['jvectormap']
		}
	}
});

requirejs.onError = function (err) {
 	console.log( err );
};

requirejs(['world-conflict'], function() {
	angular.bootstrap(document, [ 'wc' ]);
});
