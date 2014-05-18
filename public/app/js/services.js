'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1'). 
  service('AuthService', function($http) {
    var token;
    this.login = function(data) { 
      $http.post('/auth', data).then(function(res) {
        toke = res.headers.auth;
        return res.data;
      })
    }

    this.logout = function() {
       $http.delete('/auth:', toke).then(function(res) {
        return res.data;
      })
    }
  }).
  factory('ChatSocket',function($rootScope, socketURL) {
  	var socket = io.connect(socketURL);
  	return {
  		on : function(eventName, callback) {
  			socket.on(eventName, function () {  
		        var args = arguments;
			    $rootScope.$apply(function () {
			        callback.apply(socket, args);
			    });
		   	});
  		},
  		emit : function(eventName, data, callback ) {
  			socket.emit(eventName, data, function() {
  				var args = arguments;
  				$rootScope.$apply(function(){
  					callback.apply(socket, args);
  				})
  			})
  			
  		}
  	}
  })
