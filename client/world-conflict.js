define(['services/wc-services',
        'directives/wc-directives',
        'components/wc-components',
        'wc-router-states'
    ],

    /**
     * Define and register an angular module for wc and create dependencies on the required services/components
     * 
     * @module wc
     * @name wc
     * 
     */
    function(wcServices, wcDirectives, wcComponents, wcRouterStates) {

        var angular = require('angular');

        var wc = angular.module('wc', ['wc.services', 'wc.directives', 'wc.components']);

        wc.config(($stateProvider, $compileProvider, $urlRouterProvider, $qProvider) => {

            $compileProvider.debugInfoEnabled(false);
            $qProvider.errorOnUnhandledRejections(false);
            $urlRouterProvider.otherwise(function($injector, $location) {
                return ($location.$$port == null) ? 'favorites' : wcRouterStates.otherwise;
            });
            $urlRouterProvider.when('', wcRouterStates.when);
            angular.forEach(wcRouterStates.states, function(value, key) {
                if (key !== 'app') $stateProvider.state(key, value);
            });

            $stateProvider.state('app', {
                url: '/',
                views: {
                    'content': '',
                    'footer': {
                        templateUrl: 'footer.html',
                    },
                    'header': {
                        templateUrl: 'header.html',
                    }
                }
            });

        });


        return wc;
    });
