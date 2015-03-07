'use strict';

/*main module definition*/
var ttmatch = angular.module("ttmatchApp", ["ngRoute", "ngTouch",
    "ttmatchApp.Controllers",  "ttmatchApp.Services", "ttmatchApp.Directives", "ttmatchApp.Filters"]);

// make the views change when the URL is changed aka router 

ttmatch.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/firstView.html',
            controller: 'firstViewController'

        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
ttmatch.config(['$httpProvider',function($httpProvider) {
      //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }
]);