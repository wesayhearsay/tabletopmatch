'use strict'
//define a filters module
var filtersModule = angular.module("ttmatchApp.Filters", [])


filtersModule.filter("timeFilter", function(){
	// filter by Maxim Shoustin: http://stackoverflow.com/a/25470593
	return function (time) {
        if (time < 60) {
            return (time) + 'm';
        } else if (time % 60 == 0) {
            return (time - time % 60) / 60 + 'h';
        } else {
            return ((time - time % 60) / 60 + 'h' + ' ' + time % 60 + 'm');
        }
    };
})

filtersModule.filter("complexityFilter", function(){
    return function(value){
        switch(value)
        {
            case "1": 
                return "Easy"
                break;
            case "2":
                return "Medium"
                break;
            case "3":
                return "Complex"
                break;
            case "4":
                return "Complex"
                break;  

        }

    }
});

filtersModule.filter("ratingFilter", function(){
    return function(value){
    switch(value) {
            case 1: 
                return 'hated it';
               break;
            case 2: 
                return 'kinda bad';
                break;
            case 3: 
                return 'meh';
                break;
            case 4: 
                return 'good game';
                break;
            case 5: 
                return 'awesome';
                break;
        }       

    }
});