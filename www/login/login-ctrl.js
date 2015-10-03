'use strict';

angular.module('bizapp')
.controller('loginCtrl', function($scope, $state) {
  
  $scope.signIn = function(user) {
	console.log('Sign-In', user);
	$state.go('tab.home');
  };
  
})