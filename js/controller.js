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
    	max: 360,
    	userMin: 20,
    	userMax: 120,
    };
});

controllersModule.controller('filterController', function($scope){
	$scope.filterLimit = tagsToShow;
  	$scope.filter = game_tags;
});

controllersModule.controller('ratingController', function ($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };
});