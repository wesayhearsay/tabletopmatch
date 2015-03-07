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