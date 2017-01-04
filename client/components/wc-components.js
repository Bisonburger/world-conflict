define( [ 'angular', 'range-slider',
          '../services/wc-services',
          './world-conflict/world-conflict-component'
          ],

/**
 * Define and register an angular module for all the components
 * 
 * @module wc.components
 * @name wc.components
 * 
 */
function( angular, rangeSlider, wcServices, 
          worldConflictComponent ){

	var wcComponents = angular.module( 'wc.components', ['wc.services', 'ui.router','ngAnimate','chasselberg.slider'] )
			   .component( 'worldConflict', worldConflictComponent );

	return wcComponents;
});