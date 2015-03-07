'use strict';
//create a module to oranize controllers
var controllersModule = angular.module("ttmatchApp.Controllers", [])

/* Controllers */

controllersModule.controller('mainViewCtrl', function($scope, $location){
	$scope.demo1 = {
        			min: 20,
        			max: 80
        		};



});

controllersModule.controller('filterController', function($scope){
	$scope.filterLimit = 2;
  	$scope.filter = game_tags;
});