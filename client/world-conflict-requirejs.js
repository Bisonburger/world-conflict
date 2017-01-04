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
		'world-mill': 'jquery-jvectormap-world-mill',
		'range-slider': 'range-slider/slider.min',
	},
	shim : {
		'world-conflict' : {
			deps : [ 'angular', 'angular-animate', 'angular-ui-router', 'jvectormap', 'world-mill', 'range-slider'],
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
		},
		'range-slider': {
			deps: ['angular', 'angular-animate']
		}
	}
});

requirejs.onError = function (err) {
 	console.log( err );
};

requirejs(['world-conflict'], function() {
	angular.bootstrap(document, [ 'wc' ]);
});
