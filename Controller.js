var app = angular.module('newApp');
 
  app.controller('Controller', 
  function($scope, $rootScope, $stateParams, $state, Service) {
    $scope.user = $rootScope.userName;
    
  });