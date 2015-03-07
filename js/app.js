'use strict';

/*main module definition*/
var ttmatch = angular.module("ttmatchApp", ["ngRoute", "ngTouch", "ui-rangeSlider",
    "ttmatchApp.Controllers",  "ttmatchApp.Services", "ttmatchApp.Directives", "ttmatchApp.Filters"]);

// make the views change when the URL is changed aka router 

ttmatch.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'index.html',
            controller: 'mainViewCtrl'

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