'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('Room', ['ChatSocket', function(chat) {

  	return {
  		restrict : 'E',
  		scope : {
  			roomID : '=room-id'
  		},
  		controller : ['$scope', function($scope) {
  			console.log('')
  		}],
  		link : function(scope, element, attrs, ) {

  		}
  	}

  }])
