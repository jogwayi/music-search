'use strict';
angular.module('musicApp.http', [])
.service('SearchSessionService', ($http) => {
    var baseUrl="https://api.spotify.com/v1/search";
    let searchService = {};
    
    searchService.search = query => $http.get(baseUrl+"?q="+query+"&type=album,artist");
    return searchService;

});