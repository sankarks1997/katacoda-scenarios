var app = angular.module('newApp');
 app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginTest) {
    $rootScope.title = "Sample Login App";
    
    $scope.formSubmit = function() 
{
      if(LoginService.login($scope.username, $scope.password))
{
        $rootScope.userName = $scope.username;
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('mainPage');
} 
else 
{
        $scope.error = "Incorrect username/password !";
      } };    
  });