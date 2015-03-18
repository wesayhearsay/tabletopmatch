'use strict';
//create a module to oranize services
var serviceModule = angular.module("ttmatchApp.Services", [])
serviceModule.service('gamesService', function() {
    var games = null;
    return {
        get: function(id) { //gets the question-answers paire based on the id it is given
            for (var i = 0; i < games.length; i++) {
                if (games[i].id === id) {
                    return games[i];
                }
            }
        },
        //gives the games variable the data (value) that has been gotten from the ajax call
        set: function(value) {
            games = value;
        },
        //checks if the function has been called before
        isInitialized: function(games) {
            //if the games variable is equal to null, returns false
            //if the games variable is not equal to null, returns true
            return (games != null);
        }
    };
});

serviceModule.service('filterService', function() {
    var filterTags = [];
    return {
        get: function(value){
            return filterTags;
        },
        set: function(value){
            filterTags = value;
        }
    };  
});
// service for the number of players
serviceModule.service('playerService', function() {
    var players = 6; // default
    return {
        get: function(){
            return players;
        },
        set: function(value){
            players = value;
        }
    };  
});

// service for the age filtering
serviceModule.service('ageService', function() {
    var age = 12; // default age
    return {
        get: function(){
            return age;
        },
        set: function(value){
            age = value;
        }
    };  
});
// service for the time filtering
serviceModule.service('timeService', function() {
    var time = {
        min: 10, // default min time to play
        max: 120, // default max time to play
    };
    return {
        get: function(){
            return time;
        },
        set: function(inputMin, inputMax){
            time.min = inputMin;
            time.max = inputMax;
        }
    };  
});

// service for the complexity filtering
serviceModule.service('complexityService', function() {
    var complexity = 0; // default complexity medium
    var activeClass = {
        easy: "",
        medium: "",
        complex: "",
        all: "active", // default active class
    }
    return {
        get: function(){
            return complexity;
        },
        set: function(value){
            complexity = value;
        },
        getActiveClass: function() {
            return activeClass;
        },
        setActiveClassEasy: function() {
            activeClass = {
                easy: "active",
                medium: "",
                complex: "",
                all: "",
            }
        },
        setActiveClassMedium: function() {
            activeClass = {
                easy: "",
                medium: "active",
                complex: "",
                all: "",
            }
        },
        setActiveClassComplex: function() {
            activeClass = {
                easy: "",
                medium: "",
                complex: "active",
                all: "",
            }
        },
        setActiveClassAll: function() {
            activeClass = {
                easy: "",
                medium: "",
                complex: "",
                all: "active",
            }
        }
    }; 
});

// service for the questions filtering
serviceModule.service('questionsService', function() {
    var tagsForFilter = []; // default complexity medium
    return {
        get: function(){
            return tagsForFilter;
        },
        set: function(numberOfQuestion){
            var tagsToAdd = questions[numberOfQuestion].tags;
            tagsForFilter = tagsForFilter.concat(tagsToAdd);
        }
    }; 
});

// //service for adding games to  user
serviceModule.service('userService', function(){
   var  user = null;
   var library = [];
   var added = false;
   var inLibrary = false;
    return {
        //gives the games variable the data (value) that has been gotten from the ajax call
        set: function(value) {
             user = value;
        },
        //checks if the function has been called before
        isInitialized: function(user) {
            //if the games variable is equal to null, returns false
            //if the games variable is not equal to null, returns true
            return ( user != null);
        }, 
        addToLibrary: function(id, name, image){
            console.log(name);
             library.push({'id' : id, 'name': name, 'image':image});
             // library.push(id)
             added = true;
             inLibrary = true;
             console.log(library);
        }, 
        getLibrary : function() {
            return library;
        },
        removeFromLibrary: function(id){
             for (var i = 0; i < library.length; i++) {
                if (library[i] === id) {
                    library.splice(i,1);
                    console.log(library);
                }
            }
        },
        find: function(id){
             for (var i = 0; i < library.length; i++) {
                if (library[i] === id) {
                    return true;
                }
            }
        }
    };
});
