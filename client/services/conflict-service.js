define([], function() { return [ '$http', ConflictService ]; });

var angular = require( 'angular' );


function ConflictService($http) {
	var URL = "/api/wc-server/conflict";
	
	function query(year) {
		var params = { year: year };
		return $http.get(URL , { params: params} )
			.then(function(response){
				return response.data;
			});
	};
	
	/** @var service Definition of the exposed service methods */
	var service = {

		query : query
	};

	return service;
};