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