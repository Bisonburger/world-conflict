define( [], function(){ return WorldConflictComponent; } );

/**
 * Definition of the SSVView component
 * 
 * @name ssvView
 * @module ssv.components
 * 
 */
var WorldConflictComponent = {
		controller: [ '$scope', '$interval', 'ConflictSvc', WorldConflictController ],
		templateUrl: 'components/world-conflict/world-conflict-tmpl.html'
};

function WorldConflictController($scope,$interval,ConflictSvc) {
	var ctrl = this;
	
	ctrl.conflicts = [];
	ctrl.sliderValue = 1;
	
	$scope.$watch( function(){ return ctrl.sliderValue}, function(newMonth,oldMonth){
		if( newMonth != oldMonth )
			ConflictSvc.query(2015,newMonth).then( (data) => ctrl.conflicts = data );
	});
	
	ctrl.$onInit = () => {
		ConflictSvc.query(2015,1).then( (data) => ctrl.conflicts = data );
		$interval( ()=> ++ctrl.sliderValue,1000,11);
	};
}