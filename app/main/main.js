'use strict';
Array.prototype.pushArray = function() {
    this.push.apply(this, this.concat.apply([], arguments));
}
angular.module('musicApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'MainViewCtrl'
  });
}])

.controller('MainViewCtrl',  function($scope,$http) {
   $scope.next = false;  
   $scope.loading=false;
   $scope.offset=0;
   $scope.data =  [];
    delete $http.defaults.headers.common['X-Requested-With'];
    var baseUrl="https://api.spotify.com/v1/search";
    $scope.searchText = '';    
    $scope.search = function() {
        $scope.loading=true;
        getData(baseUrl+"?q="+$scope.searchText+"&type=album,artist&limit=8&offset="+$scope.offset);
    };
    function searchResult(response) {
      var albums = response.data.albums.items;
      $scope.data.pushArray(albums);
      var artists = response.data.artists.items;
      $scope.data.pushArray(artists);
      if(response.data.albums.next !=null || response.data.artists.next !=null){
        $scope.offset+=8;
        $scope.next = true;  
      }else{
        $scope.next = false; 
      }
      $scope.loading=false;
    }
   $scope.clearSearch = function(){
     $scope.data=[]; //reset search result
     $scope.offset = 0; //reset offset position
   }
    function searchError(response) {
      $scope.loading=true;
      console.log("Correct reposnse",response);       
    }

    function getData(url){
        $http.get(url).then(searchResult, searchError)
    } 
});