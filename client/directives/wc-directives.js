define( [ 'angular',
		  'directives/world-map-directive'],

/**
 * Define and register an angular module for all the directives
 * 
 * @module wc.directives
 * @name wc.directives
 * 
 */
function( angular, worldMapDirective ){

	var wcDirectives = angular.module( 'wc.directives', [] );
	
	wcDirectives
		.directive( 'worldMap', worldMapDirective );

	return wcDirectives;
});