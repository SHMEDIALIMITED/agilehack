'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('room', ['ChatSocket', function(chat) {

  	return {
  		restrict : 'E',
  		scope : true,
  		templateUrl : 'partials/room.html',
  		controller : ['$scope', 'ChatSocket', 'roomID', function($scope, s, roomID) {

  			$scope.chat = {
  				users : []
  			};

  			s.emit('join', $scope.roomID, function(err) {
  				
  				if(err) alert('Could not connect to chat');
  			});

  			s.on('join', function(user) {

  				
  				$scope.chat.users.push(user);
  			});


  		}],
  		link : function(scope, element, attrs) {

  		}
  	}

  }])
