'use strict';
//create a module to oranize controllers
var controllersModule = angular.module("ttmatchApp.Controllers", [])

/* Controllers */


/* Controller for the number of players */
controllersModule.controller('playersController', function($scope){
	$scope.numberOfPlayers = 2;
});

/* Controller for the time */
controllersModule.controller('timeController', function($scope, $location){
	$scope.timeLimit = {
    	min: 10,
    	max: 360
    };
});

controllersModule.controller('filterController', function($scope){
	$scope.filterLimit = 2;
  	$scope.filter = game_tags;
});

