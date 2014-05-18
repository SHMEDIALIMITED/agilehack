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
  		controller : ['$scope', 'ChatSocket', 'roomID', function($scope, s, roomID, $window) {

  			$scope.chat = {
  				users : [],
  			};

  			s.emit('join', 'myroom', function(err) {

  				console.log('JOINED CB', arguments)

  				if(err) alert('Could not connect to chat');
  			});

  			s.on('join', function(user) {
  				console.log('USER JOINED', user)
  				$scope.chat.users.push(user);
  			});


			$scope.submit = function() {
				s.emit('say', $scope.chat.input, function() {
				});
			}

			window.onbeforeunload = function() {

				s.emit('leave');
			}

  		}],
  		link : function(scope, element, attrs) {

  		}
  	}

  }])
