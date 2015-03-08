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