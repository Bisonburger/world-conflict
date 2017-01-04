/* global jvm */

define( ['jvectormap'], [ function() {
    
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.width('auto');
            element.height(800);
            
            
            new jvm.Map({
                container: element,
                map: 'world_mill',
                scaleColors: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                markerStyle: {
                    initial: {
                        fill: '#F8E23B',
                        stroke: '#2B3E50'
                    }
                },
                backgroundColor: '#2B3E50',

                markers: [
                    {latLng: [5.188056, 97.140278], name: 'Conflict 1'},
                    {latLng: [4.48, 97.963333], name: 'Conflict 2'},
                ]
            });   
        }
    };
}]);