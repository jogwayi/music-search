'use strict';

angular.module("musicApp.item", [])
  .component("itemCard",{
      templateUrl: "components/item-card/item-card.html",
      bindings: { data: '='},
      controller: 'ItemCardViewCtrl'     
  })
.controller('ItemCardViewCtrl', ['$scope','$http','$location','$anchorScroll',
  function($scope,$http,$location,$anchorScroll) {
    $scope.loading=false;
    var baseUrl="https://api.spotify.com/v1/";
    $scope.contents=[];
    $scope.data={};
    this.$onInit = function(){
        $scope.displayContents =false;
    }
    $scope.getDetails = function(data){
        $scope.data=data;
        if($scope.displayContents){ //toggle items display
            $scope.displayContents = false;
        }else if($scope.contents.length == 0){
            $scope.loading =true;
            var url = data.type == 'album' ? baseUrl+"albums/"+data.id+"/tracks" :  baseUrl+"artists/"+data.id+"/albums";            
            $http.get(url).then(detailResult, detailError);            
        }else{            
            $scope.displayContents = true;
            $scope.itemModal();
            //already cached items
        }
    }
    $scope.itemModal = function (){
        swal({
            title: "",
            text: '<div class="icon" style="background-image: url('+($scope.data.images.length>0 ? $scope.data.images[0].url : 'assets/img/hero.jpg')+');"></div>\
                    <h4 class="music-modal-title">'+$scope.data.name+'</h4>\
                    <img style="position:absolute;top:5px;right:5px;" onClick="swal.close();$(\'#'+$scope.data.id+'\').click()" src="assets/img/Cross@2x.png" class="fa-close desktop"  ng-if="displayContents">\
                    <img style="position:absolute;top:5px;right:5px;" onClick="swal.close();$(\'#'+$scope.data.id+'\').click()" src="assets/img/Cross Dark@2x.png"  class="fa-close mobile"  ng-if="displayContents">\
                    <h4 class="list-title">'+($scope.data.type=='artist' ? 'Ablums <span class="mobile">&nbsp; by</span>' : 'Tracks <span class="mobile">&nbsp; in</span>')+'</h4>\
                    <hr style="background:#ccc;width:100%;margin:7px;height:1px;">\
                    <div class="music-list-items">'+$scope.contentHTML()+"</div>",
            html: true,
            showConfirmButton:false,
            allowOutsideClick:true,
        },function (isConfirm){
            $("#"+$scope.data.id).click();
        });
        $scope.loading = false;
    }
    $scope.contentHTML = function(){
        var html='';
        try{
            for(var i=0;i<$scope.contents.length;i++){
                var item =$scope.contents[i];
                html+='<div class="list-item">\
                        <h4>'+item.name+'</h4>\
                        '+(item.duration_ms ? '<h5>'+(item.duration_ms/60000).toFixed(2)+'</h5>':
                        '<h5>'+(item.year || '')+'</h5>');+'\
                    </div>';
            }
        }catch(e){
            console.error(e) //log error on console for debugging
        }
        return html;
    }  
    $scope.closePreview = function(){
      $scope.displayContents = false;
      $scope.loading = false;
    }
    function detailResult(response) { //callback for handling http data returned
        $scope.contents = response.data.items
        $scope.displayContents = true;
        $scope.itemModal();
        $scope.loading = false;
    }
   
    function detailError(response) { //callback for handling http error
        $scope.loading = false;
        console.log("Correct reposnse",response.message); //display error message on console for debugging
    }
}]);