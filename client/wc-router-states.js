define([],
    function() {
        return {
            otherwise: 'notfound',
            when: '/home',
            states: {
                'app': {
                    url: '/',
                    views: {
                        'header':{templateUrl: 'header.html'},
                        'content': '',
                        'footer':{templateUrl: 'footer.html'},
                    }
                },
                'app.notfound': {
                    url: 'notfound',
                    views: {
                        'content@': {templateUrl: 'not-found.html'}
                    }
                },
                'app.home': {
                    url: 'home',
                    views: {
                        'content@': { template: '<world-conflict></world-conflict>'}
                    }
                }
            }
        };
    });
