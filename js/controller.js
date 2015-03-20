'use strict';
//create a module to oranize controllers
var controllersModule = angular.module("ttmatchApp.Controllers", [])
/* Controllers */

/* Controller for the filters in the sidebar */
controllersModule.controller('SidebarController', function($scope, playerService, ageService, timeService, complexityService, questionsService) {

	// number of players filter
	$scope.numberOfPlayers = playerService.get(); // default number of players
	$scope.playerLimit = {
		min: 1,
		max: 30,
		userMin: 1,
		userMax: $scope.numberOfPlayers
	};

	$scope.includePlayers = function(number) {
		//$scope.numberOfPlayers = playerService.get();
		$scope.numberOfPlayers = number;
		playerService.set($scope.numberOfPlayers);
		//console.log("this is minAge in includeAge() " + minAge);
		//console.log("$scope.ageInclude in includeAge() " + $scope.ageInclude);
	}

	// minimum age filter
	$scope.ageInclude = ageService.get();
	$scope.ageLimit = {
		min: 2,
		max: 18,
		userMin: 2,
		userMax: $scope.ageInclude
	};

	$scope.includeAge = function(minAge) {
		$scope.ageInclude = ageService.get();
		$scope.ageInclude = minAge;
		ageService.set($scope.ageInclude);
		//console.log("this is minAge in includeAge() " + minAge);
		//console.log("$scope.ageInclude in includeAge() " + $scope.ageInclude);
	}

	// time to play filter
	$scope.timeFilter = timeService.get();
	$scope.timeLimit = {
		min: 10,
		max: 360,
		userMin: $scope.timeFilter.min,
		userMax: $scope.timeFilter.max,
	};
	$scope.includeTime = function(timeMin, timeMax) {
		$scope.timeFilter = timeService.get();
		$scope.timeFilter.min = timeMin;
		$scope.timeFilter.max = timeMax;
		timeService.set($scope.timeFilter.min, $scope.timeFilter.max);
	}

	// complexity filter
	$scope.complexityFilter = complexityService.get();
	$scope.activeClass = complexityService.getActiveClass();

	$scope.includeComplexity = function (complexity) {
		$scope.complexityFilter = complexity;
		//console.log("$scope.complexityFilter in includeComplexity " + $scope.complexityFilter);
		complexityService.set($scope.complexityFilter); 

		// switch the active class for the complexity filter
		switch (complexity) {
			case 0:
				complexityService.setActiveClassAll();
				break;
			case 1:
				complexityService.setActiveClassEasy();
				break;
			case 2:
				complexityService.setActiveClassMedium();
				break;
			case 3:
				complexityService.setActiveClassComplex();
				break;
		}
		$scope.activeClass = complexityService.getActiveClass();
	}
});

controllersModule.controller('ContentController', function($scope, $http, $location, userService, gamesService, filterService, playerService, ageService, timeService, complexityService, questionsService, loginService) {
	//checks if the games.json has ever been accessed before.
	//this is done so that the json is not included every time 
	if (!gamesService.isInitialized()) {
	//if it hasn't been included before, an ajax call is made 
	//towards the file that is contained in the same folder as index.html
	$http.get("js/games.json").success(function(data) {
		//the questionaire variable is set with the data gotten from the call
		gamesService.set(data)
		$scope.games = data;
		console.log("gets json");
	}).
	error(function() { //if an error occured, the console shows that the json wasn't included
		console.log("json not included");
	});
	}else { 
		$scope.games = gamesService.getAll();
		console.log("gets service");
	}
	//if a game is pressed, it routs it to the game view
	$scope.show = function(gameID){
		console.log(gameID);
		$location.path(':'+ gameID);
	}

	//add to library
	$scope.addToLibrary = function(gameID, gameName, gameImage, shelfID){
		userService.addToLibrary(gameID, gameName, gameImage, shelfID);
	}
	$scope.removeFromLibrary = function(gameID){
		userService.removeFromLibrary(gameID);
	}
	$scope.inLibrary = function(gameID){
		var exists = false;
		exists = userService.find(gameID);
		return exists;
	}
    $scope.isLoggedIn = function(){
        return loginService.get();
    }
	//Question filter
	$scope.questionNumber = 0;
	$scope.questionModel = questions;
	$scope.includeTags = function (shouldInclude) {
		if(shouldInclude){
			questionsService.set($scope.questionNumber); //the service has the array of the tags the user has selected via the questions.
		}
		if($scope.questionNumber<$scope.questionModel.length-1){
				$scope.questionNumber++; 
			}else{
				$scope.questionNumber=0;
		}
	}
	$scope.changeQuestion = function(direction){
		if(direction){
			if($scope.questionNumber<$scope.questionModel.length-1){
				$scope.questionNumber++; 
			}else{
				$scope.questionNumber=0;
			}
		}else{
			if($scope.questionNumber==0){
				$scope.questionNumber = $scope.questionModel.length-1;
			}else{
				$scope.questionNumber--;
			}
			
		}
	}

	// accordion tag filtering
	$scope.tagFilter = function(game) {
		$scope.filterText = questionsService.get();
		//$scope.progressBarColor = "progress-bar-success";
		var totalTags = $scope.filterText.length;
		var shouldShow = false;
		var matchingTags = 0;
		var matchingRating = 0;
		//console.log("filter:",$scope.filterText);
		if (totalTags > 0) {
			for(var k=0; k<game.attributes.length; k++){    
				if ($.inArray(game.attributes[k].name, $scope.filterText) >= 0){
					//console.log(game.name + " matches by " + game.attributes[k].name);
					matchingTags++;
					shouldShow = true;
					//return;
				}
			}
			matchingRating = 100*(matchingTags/game.attributes.length);
			game.compatRating = Math.ceil(matchingRating)+10;
			
			matchingTags = 0;
			if (shouldShow) {
				return game;
			} else {
				return game;
			}
		}
			return game;
	}
	$scope.progBarColor = function(percent){
		if (percent<33) {
			return "progress-bar progress-bar-danger";
		}else if (percent>=33 && percent<66) {
			return "progress-bar progress-bar-warning";
		}else if (percent>=66) {
			return "progress-bar progress-bar-success";
		};
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
		//console.log("$scope.timeInclude in timeFiltering "+ $scope.timeInclude);
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

controllersModule.controller("GameController", function($scope, $http, $stateParams, gamesService, userService, loginService) {
	//gets rid of the : character
	var $id =  $stateParams.id;
	$scope.game = gamesService.get($id);

	if(gamesService.isRated($id)){
				console.log("game is rated");
				$scope.rate = gamesService.getRating($id);
			}else{
				console.log("game is not rated");
				console.log( $scope.game);
				 $scope.rate = 0;
				}

	if(userService.find($id)){
		$scope.inLibrary=true;
		$scope.already = true;
	}else {
		$scope.inLibrary=false;
	}

	$scope.rateNow = function(){
		gamesService.addRating($id, $scope.rate);
	}
	$scope.max = 5;
	$scope.isReadonly = false;
	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = value;
	};

	$scope.addToLibrary = function(gameID, gameName, gameImage, shelfID){
		userService.addToLibrary(gameID, gameName, gameImage, shelfID);
		$scope.inLibrary = true; 
		$scope.justAdded = true; 

		
	}
	$scope.removeFromLibrary = function(gameID){
		userService.removeFromLibrary(gameID);
		$scope.inLibrary = false;
		 $scope.justAdded = false; 
		 $scope.already = false;
	}

	// check if user logged in
	$scope.logged = loginService.get();
   
});

controllersModule.controller('UserLibrary', function($scope, $http, userService, $location) {
if (!userService.isInitialized()) {
	$http.get("js/users.json").success(function(data) {
		   //the questionaire variable is set with the data gotten from the call
			userService.set(data);
			$scope.user = data;
		}).
		error(function() { //if an error occured, the console shows that the json wasn't included
			console.log("json not included");
			console.log(JSON.stringify($http.get("js/user.json")));
		});
	}
	
	$scope.library = userService.getLibrary();
	$scope.currentShelf = 0;
	console.log("$scope.library in userLibrary controller " + $scope.library);

	//if a game is pressed, it routs it to the game view
	$scope.show = function(gameID){
		console.log(gameID);
		$location.path(':'+ gameID);
	}

	$scope.shelves = userService.getShelves();
	$scope.newShelfName = '';
	$scope.createShelf = function(){
		if($scope.newShelfName !=""){    
			var newShelf = {
				'id' : $scope.shelves.length,
				'name' : $scope.newShelfName
			};
			$scope.shelves.push(newShelf);
			$scope.newShelfName = '';
			console.log($scope.shelves);
		}
	};
	$scope.dropSuccessHandler = function($event,index,array){
	};
	$scope.onDrop = function($event,$data,array,destinationID){
		$scope.droppedGame = $data;
		for(var i=0; i<$scope.library.length; i++){
			if($scope.library[i].id===$data.id && destinationID!=0){
				$scope.library[i].shelfID=destinationID;
			}
		}
	};
	$scope.shelfFilter = function(game) {
		if (game.shelfID == $scope.currentShelf) {
			return game;
		} else {
			return ;
		}
	};
});

controllersModule.controller('LoginController', function($scope, $http, $location, loginService) {
	$scope.logged = loginService.get();
	$scope.login = function() {
		$scope.logged = loginService.set(true);
	}

	$scope.logout = function() {
		$scope.logged = loginService.set(false); // set loggedin to false
	}
});

/*controllersModule.controller('FilterController', function($scope, filterService){
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
}); */