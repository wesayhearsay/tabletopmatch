'use strict';
//create a module to oranize controllers
var controllersModule = angular.module("ttmatchApp.Controllers", [])
/* Controllers */

controllersModule.controller('gamesController', function($scope, $http, $location, gamesService, filterService) {
    //checks if the games.json has ever been accessed before.
    //this is done so that the json is not included every time 
    $scope.filterText = filterService.get();
    if (!gamesService.isInitialized()) {
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
    }
    //if a game is pressed, it routs it to the game view
    $scope.show = function(gameID){
      console.log(gameID);
      $location.path(':'+ gameID);
    }
     $scope.tagFilter = function(game) {
        var shouldShow = false;
        if ($scope.filterText.length > 0) {
	        for(var k=0; k<game.attributes.length; k++){    
	            if ($.inArray(game.attributes[k].name, $scope.filterText) >= 0){
	                shouldShow = true;
	                //return;
	            }
	        }
	        if(shouldShow){
        		return game;
    		}else{
    			return;
    		}
	    }
        	return game;	
    	}

});

/* Controller for the number of players */
controllersModule.controller('playersController', function($scope) {
    $scope.numberOfPlayers = 2;
    $scope.increasePlayers = function(players) {
      $scope.numberOfPlayers = players;
      console.log("I'm in increasePlayers");
    }
    $scope.decreasePlayers = function() {
      if ($scope.numberOfPlayers > 0) {
        $scope.numberOfPlayers--;
      } else {
        $scope.numberOfPlayers = 0;
      }
    }
});

/* Controller for the time filter*/
controllersModule.controller('timeController', function($scope, $location) {
    $scope.timeLimit = {
        min: 10,
        max: 360,
        userMin: 20,
        userMax: 120,
    };
    $scope.timeFilter = [0, 0];
    console.log("$scope.timeFilter in controller.js " + $scope.timeFilter);
    $scope.includeTime = function(timeMin, timeMax) {
        $scope.timeFilter[0] = timeMin;
        $scope.timeFilter[1] = timeMax;
    }
});
/* Controller for the age filter */
controllersModule.controller('ageController', function($scope, $location) {
    $scope.ageLimit = {
        min: 2,
        max: 18,
        userMin: 16,
        userMax: 18
    };
    $scope.ageFilter;
    console.log("$scope.ageFilter in controller.js " + $scope.ageFilter);
    $scope.includeAge = function(minAge) {
        $scope.ageFilter = minAge;
    }
});

controllersModule.controller('filterController', function($scope, filterService){
	$scope.filterLimit = tagsToShow;
  	$scope.filter = game_tags;
  	$scope.tagsInclude = filterService.get();

    
    $scope.includeTag = function(tag) {
    	$scope.tagsInclude = filterService.get();
        var i = $.inArray(tag, $scope.tagsInclude);
        if (i > -1) {
            $scope.tagsInclude.splice(i, 1);
        } else {
            $scope.tagsInclude.push(tag);
        }
        filterService.set($scope.tagsInclude);
    }

});
controllersModule.controller('gameController', function($scope, $http, $routeParams, gamesService) {
    //gets rid of the : character
    var $id = $routeParams.gameId.substring(1);

    
    //checks if the games.json has ever been accessed before.
    //this is done so that the json is not included every time the question is changed
    if (!gamesService.isInitialized()) {
        //if it hasn't been included before, an ajax call is made 
        //towards the file that is contained in the same folder as index.html
        $http.get("js/games.json").success(function(data) {
            //the questionaire variable is set with the data gotten from the call
            gamesService.set(data);
            //if in the path there is an array that stands as a attrID (the question name)
            if ($routeParams.gameId) {
                //the current scope gets the array that is associated with that particular question
                $scope.game = gamesService.get($id);
            }
        }).
        error(function() { //if an error occured, the console shows that the json wasn't included
            console.log("json not included");
        });
    }
    // in case the games has already been included, and there is an gameID in the route
    if ($id && gamesService.isInitialized()) {
        //the current scope gets the array that is associated with that particular question
        $scope.game = gamesService.get($id);
    }
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;
    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };
   
});