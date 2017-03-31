'use strict';
// Declare app level module which depends on views, and components
angular.module('musicApp', [
  'ngRoute',
  'musicApp.main',
  'musicApp.item',
  'musicApp.landing'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/main'});
}]);