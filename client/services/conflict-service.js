define(['angular'], function() { return [ '$http', ConflictService ]; });

function ConflictService($http) {
	var URL = "/api/wc-server/conflict";
	
	function query(year,month) {
		var params = { year:year, month:month };
		console.log( 'Query ' + year + '-' + month );
		return $http.get(URL , { params: params} )
			.then(function(response){
				return response.data;
			});
	}
	
	/** @var service Definition of the exposed service methods */
	var service = {

		query : query
	};

	return service;
}