'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'ChatSocket', function($scope, ChatSocket) {
 	
 	$scope.test = 'Hello World' 		

  	ChatSocket.on('join', function(user){
  		console.log('VOILA', user)	
  	})

  	ChatSocket.emit('join', 'test-room', function(err) {
  		console.log('HERE')
  	})
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
