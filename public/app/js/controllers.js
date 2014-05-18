'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'ChatSocket', function($scope, ChatSocket) {
 	
 	$scope.test = 'Hello World' 		

  	
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]).
  controller('LoginCtrl', function($scope) {

    

  });
