'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'ChatSocket', function($scope, ChatSocket) {
  	ChatSocket.on('say', function(){
  		debugger;
  	})
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
