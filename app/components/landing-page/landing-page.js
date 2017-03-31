'use strict';

angular.module("musicApp.landing", [])
  .component("landingPage",{
      templateUrl: "components/landing-page/landing-page.html",
      bindings: { name: '<' },
      controller: 'LandingViewCtrl'     
      /*controller: function () {
       // use this.parent to access required Objects
       //this.parent.foo();
       console.log("zFoo")
        var gotToSearch = function(){
          location.hash="#!/main";
          location.hash="#!/main#our-work";
        }
      }*/
  })
.controller('LandingViewCtrl', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.gotoSearch = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('our-work');

      // call $anchorScroll()
      $anchorScroll();
    };
}]);