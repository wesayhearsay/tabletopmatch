'use strict';

/*main module definition*/
var ttmatch = angular.module("ttmatchApp", ["ui.router", "ngTouch", "ui-rangeSlider",
    "ttmatchApp.Controllers",  "ttmatchApp.Services", "ttmatchApp.Directives", "ttmatchApp.Filters", "ui.bootstrap"]);

ttmatch.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home",{
            url: "/",
            views: {
                "header": {
                    templateUrl: "partials/header.html",
                    controller: "HeaderController"
                },
                "sidebar": {
                    templateUrl: "partials/sidebarFilter.html",
                    controller: "ContentController"
                },
                "content": {
                    templateUrl: "partials/content.html",
                    controller: "ContentController"
                }

            }
        })
        .state("home.profile",{
            url: "profile",
            views: {
                "sidebar@": {
                    templateUrl: "partials/sidebarProfile.html",
                    controller: "userLibrary"
                    
                },
                "content@": {
                    templateUrl: "partials/contentLibrary.html",
                    controller: "userLibrary"
                   
                }

            }
        })
        .state('home.detail', {
            url: 'detail/:id',
            views: {
                'content@': {
                    templateUrl: "partials/contentGameDetails.html",
                    controller: "GameController"
                },
                'sidebar@': {
                    templateUrl: "partials/sidebarGameDetails.html",
                    controller: "GameController"
                }
            }
        })
        .state('home.login', {
            url: 'login',
            views: {
                'content@': {
                    templateUrl: "partials/login.html",
                    controller: "loginController"
                }
            }
        });      
}]);