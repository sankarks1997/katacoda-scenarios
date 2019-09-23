
(function() 
{
  var app = angular.module('newApp', ['ui.router']);
  
   app.run(function($rootScope, $location, $state, LoginTest)
{
     console.clear();
     console.log('executing');
    if(!LoginTest.isAuthenticated()) 
{
        $state.transitionTo('login');
 }
 });
  
  app.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider)
 {
    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'login.html',
        controller : 'loginController'
      })
      .state('mainPage', {
        url : '/mainPage',
        templateUrl : 'mainPage.html',
        controller : 'appController'
      });
      
       $urlRouterProvider.otherwise('/login');
  }]);
 
})();