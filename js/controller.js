'use strict';
//create a module to oranize controllers
var controllersModule = angular.module("ttmatchApp.Controllers", [])

/* Controllers */


/* Controller for the number of players */
controllersModule.controller('playersController', function($scope){
	$scope.numberOfPlayers = 2;
});

/* Controller for the time filter*/
controllersModule.controller('timeController', function($scope, $location){
	$scope.timeLimit = {
    	min: 10,
    	max: 360,
    	userMin: 20,
    	userMax: 120,
    };
});

/* Controller for the age filter */
controllersModule.controller('ageController', function($scope, $location){
	$scope.ageLimit = {
    	min: 2,
    	max: 18,
    	userMin: 16,
    	userMax: 18
    };
});

controllersModule.controller('filterController', function($scope){
	$scope.filterLimit = tagsToShow;
  	$scope.filter = game_tags;
  	$scope.tagsInclude = [];
    
    $scope.includeTag = function(tag) {
        var i = $.inArray(tag, $scope.tagsInclude);
        if (i > -1) {
            $scope.tagsInclude.splice(i, 1);
        } else {
            $scope.tagsInclude.push(tag);
        }
    }
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