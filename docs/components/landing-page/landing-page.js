'use strict';

angular.module("musicApp.landing", [])
  .component("landingPage",{
      templateUrl: "components/landing-page/landing-page.html",
      bindings: { name: '<' },
      controller: 'LandingViewCtrl'           
  })
.controller('LandingViewCtrl', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.gotoSearch = function() {
      // set the location.hash to the id of the element and  scroll.
      $location.hash('our-work');
      // call $anchorScroll()
      $anchorScroll();
    };
}]);