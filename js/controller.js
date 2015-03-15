'use strict';
//create a module to oranize controllers
var controllersModule = angular.module("ttmatchApp.Controllers", [])
/* Controllers */

controllersModule.controller('HeaderController', function($scope) {
    /* Controller Stuff */
});

/* Controller for the filters in the sidebar */
controllersModule.controller('sidebarController', function($scope, playerService, ageService, timeService, complexityService, questionsService) {

    // number of players filter
    $scope.playerLimit = {
        min: 1,
        max: 30,
        userMin: 1,
        userMax: 6
    };

    $scope.numberOfPlayers = playerService.get(); // default number of players
    $scope.includePlayers = function(number) {
        //$scope.numberOfPlayers = playerService.get();
        $scope.numberOfPlayers = number;
        playerService.set($scope.numberOfPlayers);
        //console.log("this is minAge in includeAge() " + minAge);
        //console.log("$scope.ageInclude in includeAge() " + $scope.ageInclude);
    }

    // minimum age filter
    $scope.ageLimit = {
        min: 2,
        max: 18,
        userMin: 2,
        userMax: 12
    };

    $scope.ageInclude = ageService.get();
    $scope.includeAge = function(minAge) {
        $scope.ageInclude = ageService.get();
        $scope.ageInclude = minAge;
        ageService.set($scope.ageInclude);
        //console.log("this is minAge in includeAge() " + minAge);
        //console.log("$scope.ageInclude in includeAge() " + $scope.ageInclude);
    }

    // time to play filter
    $scope.timeLimit = {
        min: 10,
        max: 360,
        userMin: 10,
        userMax: 120,
    };
    $scope.timeFilter = timeService.get();
    $scope.includeTime = function(timeMin, timeMax) {
        $scope.timeFilter = timeService.get();
        $scope.timeFilter.min = timeMin;
        $scope.timeFilter.max = timeMax;
        timeService.set($scope.timeFilter.min, $scope.timeFilter.max);
    }

    $scope.easyClass;
    $scope.mediumClass;
    $scope.complexClass;
    $scope.allClass = "active"; // default
    // complexity filter
    $scope.includeComplexity = function (complexity) {
        $scope.complexityFilter = complexityService.get();
        $scope.complexityFilter = complexity;
        console.log("$scope.complexityFilter in includeComplexity " + $scope.complexityFilter);
        complexityService.set($scope.complexityFilter); 

        // unelegant solution to change the active class, but it was quick
        switch (complexity) {
            case 0:
                $scope.easyClass = "";
                $scope.mediumClass = "";
                $scope.complexClass = "";
                $scope.allClass = "active";
                break;
            case 1:
                $scope.easyClass = "active";
                $scope.mediumClass = "";
                $scope.complexClass = "";
                $scope.allClass = "";
                break;
            case 2:
                $scope.easyClass = "";
                $scope.mediumClass = "active";
                $scope.complexClass = "";
                $scope.allClass = "";
                break;
            case 3:
                $scope.easyClass = "";
                $scope.mediumClass = "";
                $scope.complexClass = "active";
                $scope.allClass = "";
                break;
        }
    }
    //Question filter
    $scope.questionNumber = 0;
    $scope.questionModel = questions;
    $scope.includeTags = function (shouldInclude) {
        if(shouldInclude){
            questionsService.set($scope.questionNumber); //the service has the array of the tags the user has selected via the questions.
        }
        $scope.questionNumber++;
    }
});

controllersModule.controller('ContentController', function($scope, $http, $location, gamesService, filterService, playerService, ageService, timeService, complexityService, questionsService) {
    //checks if the games.json has ever been accessed before.
    //this is done so that the json is not included every time 
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

    // accordion tag filtering
    $scope.tagFilter = function(game) {
        $scope.filterText = questionsService.get();
        var totalTags = $scope.filterText.length;
        var shouldShow = false;
        if (totalTags > 0) {
            for(var k=0; k<game.attributes.length; k++){    
                if ($.inArray(game.attributes[k].name, $scope.filterText) >= 0){
                    shouldShow = true;
                    //return;
                }
            }
            if (shouldShow) {
                return game;
            } else {
                return;
            }
        }
            return game;
    }

    // filter games based on the number of players
    $scope.playerFiltering = function (game) {
        $scope.playerInclude = playerService.get(); // get number of players
        //console.log("$scope.playerInclude " + $scope.playerInclude);
        if (game.min_players <= $scope.playerInclude && game.max_players >= $scope.playerInclude) { // if game fits criteria
            return game;
        } else {
            return; // no game returned
        }
        return game;
    }

    // filter games based on the minimum age
    $scope.ageFiltering = function (game) {
        $scope.ageFilter = ageService.get(); // get default age from service
        // console.log("game in ageFiltering() " + game);
        // console.log("game.min_age in ageFiltering() " + game.min_age);
        // console.log("scope.ageFilter in ageFiltering()" + $scope.ageFilter);
        if (game.min_age <= $scope.ageFilter) { // if the game's minimum age fits the criteria
            //console.log("true game.min_age");
            return game;
        } else {
            //console.log("false");
            return; // no game returned
        }
        return game;
    }

    // filter games based on the duration
    $scope.timeFiltering = function (game) {
        $scope.timeInclude = timeService.get(); // get min time to play
        console.log("$scope.timeInclude in timeFiltering "+ $scope.timeInclude);
        if (game.duration >= $scope.timeInclude.min && game.duration <= $scope.timeInclude.max) { // if game fits criteria
            return game;
        } else {
            return; // no game returned
        }
        return game;
    }



        // filter games based on the complexity
    $scope.complexityFiltering = function (game) {
        $scope.complexityInclude = complexityService.get(); // get selected complexity

        switch($scope.complexityInclude) {
            case 1: // easy, game.complexity = 1
                if (game.complexity == $scope.complexityInclude) { // if game fits criteria
                    return game;
                } else {
                    return; // no game returned
                }
                break;
            case 2: // medium; game.complexity = 2
                if (game.complexity == $scope.complexityInclude) { // if game fits criteria
                    return game;
                } else {
                    return; // no game returned
                }
            case 3: // complex; game.complexity = 3
                if (game.complexity == $scope.complexityInclude || game.complexity == $scope.complexityInclude + 1) { // game is complex (either 3 or 4)
                    return game;
                } else {
                    return; // no game returned
                }
            case 4: // complex; game.complexity = 3
                if (game.complexity == $scope.complexityInclude || game.complexity == $scope.complexityInclude - 1) { // game is complex (either 3 or 4)
                    return game;
                } else {
                    return; // no game returned
                }
                break;
            default: // no complexity selected
                return game; // return all games
                break;
        }
        return game;
    }
});

controllersModule.controller("GameController", function($scope, $http, $stateParams, gamesService) {
    //gets rid of the : character
    var $id =  $stateParams.id;
    //checks if the games.json has ever been accessed before.
    //this is done so that the json is not included every time the question is changed
    if (!gamesService.isInitialized()) {
        //if it hasn't been included before, an ajax call is made 
        //towards the file that is contained in the same folder as index.html
        $http.get("js/games.json").success(function(data) {
            //the questionaire variable is set with the data gotten from the call
            gamesService.set(data);
            //if in the path there is an array that stands as a attrID (the question name)
            $scope.game = gamesService.get($id);
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

    $scope.addToLibrary = function(gameID){
        
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


controllersModule.controller('userLibrary', function($scope, $http) {

 $http.get("js/user.json").success(function(data) {
           
            $scope.user = data;
            console.log($scope.user)
        }).
        error(function() { //if an error occured, the console shows that the json wasn't included
            console.log("json not included");
        });
    
});