define( [ 'angular',
		  'services/conflict-service'],

/**
 * Define and register an angular module for all the services
 * 
 * @module wc.services
 * @name wc.services
 * 
 */
function( angular, conflictService ){

	var wcServices = angular.module( 'wc.services', [] );
	
	wcServices.service('ConflictSvc', conflictService);

	return wcServices;
});