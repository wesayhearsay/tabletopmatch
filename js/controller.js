'use strict';
//create a module to oranize controllers
var controllersModule = angular.module("ttmatchApp.Controllers", [])
/* Controllers */
/* Controller for the number of players */
controllersModule.controller('playersController', function($scope) {
    $scope.numberOfPlayers = 2;
});
controllersModule.controller('gamesController', function($scope, $http, $location, gamesService) {
    //checks if the games.json has ever been accessed before.
    //this is done so that the json is not included every time 
    // if (!gamesService.isInitialized()) {
        //if it hasn't been included before, an ajax call is made 
        //towards the file that is contained in the same folder as index.html
        $http.get("js/games.json").success(function(data) {
            //the questionaire variable is set with the data gotten from the call
            // gamesService.set(data);
            console.log(data);
            $scope.games = data;
            console.log($scope.games);
        }).
        error(function() { //if an error occured, the console shows that the json wasn't included
            console.log("json not included");
        });
    // }
   
});
/* Controller for the time filter*/
controllersModule.controller('timeController', function($scope, $location) {
    $scope.timeLimit = {
        min: 10,
        max: 360,
        userMin: 20,
        userMax: 120,
    };
});
/* Controller for the age filter */
controllersModule.controller('ageController', function($scope, $location) {
    $scope.ageLimit = {
        min: 2,
        max: 18,
        userMin: 16,
        userMax: 18
    };
});
controllersModule.controller('filterController', function($scope) {
    $scope.filterLimit = tagsToShow;
    $scope.filter = game_tags;
});
controllersModule.controller('ratingController', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;
    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };
});